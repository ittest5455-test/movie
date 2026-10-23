import os
import re
import json
import urllib.request
import cv2
import numpy as np

os.makedirs('images/clean_posters', exist_ok=True)
template = cv2.imread('temp_posters/goseries_watermark.png')
th, tw = template.shape[:2]

with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract json array
start_idx = text.find('[')
end_idx = text.rfind(']') + 1
movies = json.loads(text[start_idx:end_idx])

drama_movies = [m for m in movies if any('ดราม่า' in g for g in m.get('genres', []))]
print(f"Total drama movies: {len(drama_movies)}")

def clean_watermark(img):
    h, w = img.shape[:2]
    mask = np.zeros((h, w), dtype=np.uint8)
    
    # 1. Multi-scale template matching for GOSERIES 4K text
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    best_val = -1
    best_loc = None
    best_scale = 1.0
    
    for scale in np.linspace(0.45, 1.3, 18):
        nw = int(tw * scale)
        nh = int(th * scale)
        if nw >= w or nh >= h: continue
        resized_temp = cv2.resize(template, (nw, nh))
        gray_temp = cv2.cvtColor(resized_temp, cv2.COLOR_BGR2GRAY)
        res = cv2.matchTemplate(gray, gray_temp, cv2.TM_CCOEFF_NORMED)
        _, max_val, _, max_loc = cv2.minMaxLoc(res)
        if max_val > best_val:
            best_val = max_val
            best_loc = max_loc
            best_scale = scale
            
    if best_val > 0.35 and best_loc is not None:
        nw = int(tw * best_scale)
        nh = int(th * best_scale)
        x, y = best_loc
        mask[max(0, y-4):min(h, y+nh+4), max(0, x-6):min(w, x+nw+6)] = 255
        
    # 2. Color mask for bright yellow/orange badge (GOSERIES badge)
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower_yellow = np.array([12, 100, 130])
    upper_yellow = np.array([38, 255, 255])
    yellow_mask = cv2.inRange(hsv, lower_yellow, upper_yellow)
    
    # Find contours in yellow mask
    contours, _ = cv2.findContours(yellow_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if 150 < area < 25000:
            bx, by, bw, bh = cv2.boundingRect(cnt)
            aspect = bw / float(bh)
            if aspect > 1.2:
                # Expand slightly to cover outline and Thai text
                mask[max(0, by-4):min(h, by+bh+18), max(0, bx-6):min(w, bx+bw+6)] = 255

    # 3. Apply inpainting if mask has any pixels
    if np.sum(mask > 0) > 50:
        cleaned = cv2.inpaint(img, mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)
        return cleaned, True
    return img, False

# Special official replacements
special_clean = {
    'merry_berry_love': 'temp_posters/mbl_clean.jpg',
    'fatal_proximity': 'temp_posters/fatal_clean.jpg'
}

# Process all drama movies
cleaned_count = 0
updated_paths = {}

for i, m in enumerate(drama_movies):
    poster_url = m.get('poster', '')
    if 'goseries4k.com' not in poster_url:
        continue
        
    raw_title = m.get('titleEn', f'drama_{i}')
    safe_title = re.sub(r'[^a-zA-Z0-9]', '_', raw_title).strip('_')[:30].lower()
    local_path = f"images/clean_posters/{safe_title}.jpg"
    
    # Check if special replacement exists
    replaced = False
    for k, src in special_clean.items():
        if k in safe_title and os.path.exists(src):
            img = cv2.imread(src)
            if img is not None:
                # Resize or crop to 400x600 portrait
                h, w = img.shape[:2]
                if w > h: # Landscape, crop center portrait
                    target_w = int(h * (400/600))
                    start_x = (w - target_w) // 2
                    img = img[:, start_x:start_x+target_w]
                img = cv2.resize(img, (400, 600))
                cv2.imwrite(local_path, img, [cv2.IMWRITE_JPEG_QUALITY, 92])
                updated_paths[poster_url] = local_path
                cleaned_count += 1
                replaced = True
                print(f"[{i+1}/{len(drama_movies)}] Replaced {safe_title} with official clean poster!")
                break
                
    if replaced: continue

    print(f"[{i+1}/{len(drama_movies)}] Processing {safe_title}...")
    try:
        req = urllib.request.Request(poster_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as r:
            img_data = r.read()
        nparr = np.frombuffer(img_data, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        
        if img is not None:
            cleaned_img, did_clean = clean_watermark(img)
            cv2.imwrite(local_path, cleaned_img, [cv2.IMWRITE_JPEG_QUALITY, 92])
            updated_paths[poster_url] = local_path
            cleaned_count += 1
            print(f"  -> Saved {local_path} (cleaned: {did_clean})")
    except Exception as e:
        print(f"  -> Error: {e}")

# Save updated_paths to a json file for updating movies.js
with open('temp_posters/updated_paths.json', 'w', encoding='utf-8') as f:
    json.dump(updated_paths, f, ensure_ascii=False, indent=2)

print(f"\nCompleted! Processed {cleaned_count} posters.")
