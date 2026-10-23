import cv2
import numpy as np
import os

template = cv2.imread('temp_posters/goseries_watermark.png')
th, tw = template.shape[:2]

for fname in sorted(os.listdir('temp_posters')):
    if not fname.endswith('.png') or fname.startswith('inpainted') or fname.startswith('goseries') or fname.startswith('mbl'):
        continue
    img = cv2.imread(f'temp_posters/{fname}')
    if img is None: continue
    
    # Try different scales of template (0.6 to 1.4)
    best_val = -1
    best_loc = None
    best_scale = 1.0
    
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    for scale in np.linspace(0.6, 1.4, 17):
        nw = int(tw * scale)
        nh = int(th * scale)
        if nw >= img.shape[1] or nh >= img.shape[0]: continue
        
        resized_temp = cv2.resize(template, (nw, nh))
        gray_temp = cv2.cvtColor(resized_temp, cv2.COLOR_BGR2GRAY)
        
        res = cv2.matchTemplate(gray_img, gray_temp, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)
        
        if max_val > best_val:
            best_val = max_val
            best_loc = max_loc
            best_scale = scale
            
    print(f"{fname}: Best match = {best_val:.3f} at loc {best_loc}, scale {best_scale:.2f}")
    
    if best_val > 0.45:
        # Inpaint this region
        nw = int(tw * best_scale)
        nh = int(th * best_scale)
        x, y = best_loc
        mask = np.zeros(img.shape[:2], dtype=np.uint8)
        mask[max(0, y-2):min(img.shape[0], y+nh+2), max(0, x-2):min(img.shape[1], x+nw+2)] = 255
        cleaned = cv2.inpaint(img, mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)
        cv2.imwrite(f'temp_posters/cleaned_{fname}', cleaned)
        print(f"  -> Cleaned and saved cleaned_{fname}")
