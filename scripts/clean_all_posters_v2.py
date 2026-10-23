import cv2
import numpy as np
import glob
import os
import shutil

os.makedirs('images/clean_posters', exist_ok=True)

# 1. Special official clean replacements
special_clean = {
    'merry_berry_love__2026.jpg': 'temp_posters/mbl_clean.jpg',
    'fatal_proximity_to_him________.jpg': 'temp_posters/fatal_clean.jpg',
    'my_name__2021________1_8.jpg': 'temp_posters/orig/my_name__2021________1_8.jpg'
}

for dest_name, src_path in special_clean.items():
    if os.path.exists(src_path):
        img = cv2.imread(src_path)
        if img is not None:
            # Resize or crop to 400x600 portrait
            h, w = img.shape[:2]
            if w > h:
                target_w = int(h * (400/600))
                start_x = (w - target_w) // 2
                img = img[:, start_x:start_x+target_w]
            img = cv2.resize(img, (400, 600))
            cv2.imwrite(f'images/clean_posters/{dest_name}', img, [cv2.IMWRITE_JPEG_QUALITY, 92])
            print(f"Applied special clean for {dest_name}")

# 2. Process all original posters
orig_files = sorted(glob.glob('temp_posters/orig/*.jpg'))

for f in orig_files:
    filename = os.path.basename(f)
    if filename in special_clean:
        continue
        
    img = cv2.imread(f)
    if img is None: continue
    h, w = img.shape[:2]
    
    mask = np.zeros((h, w), dtype=np.uint8)
    
    # Detect all orange letters
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower_orange = np.array([8, 110, 140])
    upper_orange = np.array([25, 255, 255])
    orange_mask = cv2.inRange(hsv, lower_orange, upper_orange)
    
    cnts, _ = cv2.findContours(orange_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    orange_boxes = []
    for cnt in cnts:
        if 15 < cv2.contourArea(cnt) < 2500:
            bx, by, bw, bh = cv2.boundingRect(cnt)
            if 10 <= bh <= 45 and 6 <= bw <= 45:
                orange_boxes.append((bx, by, bw, bh))
                
    # Find all horizontal lines of aligned letters (dx between 70 and 230, dy <= 4)
    found_bands = []
    for i in range(len(orange_boxes)):
        for j in range(len(orange_boxes)):
            if i == j: continue
            b1 = orange_boxes[i]
            b2 = orange_boxes[j]
            if b2[0] > b1[0] and abs(b1[1] - b2[1]) <= 4:
                dx = b2[0] - b1[0]
                if 70 <= dx <= 230:
                    line_boxes = [b for b in orange_boxes if b1[0]-5 <= b[0] <= b2[0]+b2[2]+5 and abs(b[1] - b1[1]) <= 5]
                    if len(line_boxes) >= 3:
                        min_x = min(b[0] for b in line_boxes)
                        max_x = max(b[0] + b[2] for b in line_boxes)
                        min_y = min(b[1] for b in line_boxes)
                        max_y = max(b[1] + b[3] for b in line_boxes)
                        found_bands.append((min_x, min_y, max_x, max_y))
                        
    # Merge overlapping bands
    merged_bands = []
    for b in found_bands:
        merged = False
        for i, mb in enumerate(merged_bands):
            if abs(b[1] - mb[1]) < 15:
                merged_bands[i] = (min(b[0], mb[0]), min(b[1], mb[1]), max(b[2], mb[2]), max(b[3], mb[3]))
                merged = True
                break
        if not merged:
            merged_bands.append(b)
            
    # Mark bands in mask
    for bx1, by1, bx2, by2 in merged_bands:
        x1 = max(0, bx1 - 12)
        x2 = min(w, bx2 + 12)
        y1 = max(0, by1 - 8)
        y2 = min(h, by2 + 45) # Covers GOSERIES 4K + subtitle text below
        mask[y1:y2, x1:x2] = 255
        
    # Also check for yellow badge (พากย์ไทย&ซับไทย)
    lower_yellow = np.array([12, 100, 130])
    upper_yellow = np.array([38, 255, 255])
    yellow_mask = cv2.inRange(hsv, lower_yellow, upper_yellow)
    badge_cnts, _ = cv2.findContours(yellow_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    for cnt in badge_cnts:
        area = cv2.contourArea(cnt)
        if 200 < area < 25000:
            bx, by, bw, bh = cv2.boundingRect(cnt)
            aspect = bw / float(bh)
            if aspect > 1.2:
                mask[max(0, by-4):min(h, by+bh+18), max(0, bx-6):min(w, bx+bw+6)] = 255
                
    # Inpaint if mask has pixels
    if np.sum(mask > 0) > 50:
        cleaned = cv2.inpaint(img, mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)
    else:
        cleaned = img
        
    # Ensure uniform 400x600 size
    if cleaned.shape[0] != 600 or cleaned.shape[1] != 400:
        cleaned = cv2.resize(cleaned, (400, 600))
        
    dest_path = f'images/clean_posters/{filename}'
    cv2.imwrite(dest_path, cleaned, [cv2.IMWRITE_JPEG_QUALITY, 92])
    print(f"[{filename}] Cleaned ({len(merged_bands)} bands) -> {dest_path}")

print("\nALL POSTERS PROCESSED SUCCESSFULLY!")
