import cv2
import numpy as np
import glob
import os

orig_files = sorted(glob.glob('temp_posters/orig/*.jpg'))

# Test template matching with goseries_watermark.png and orange/yellow detection
template = cv2.imread('temp_posters/goseries_watermark.png')
th, tw = template.shape[:2]

for f in orig_files:
    filename = os.path.basename(f)
    if filename in ['merry_berry_love__2026.jpg', 'fatal_proximity_to_him________.jpg', 'my_name__2021________1_8.jpg']:
        print(f"[{filename}] Handled by official / clean.")
        continue
        
    img = cv2.imread(f)
    h, w = img.shape[:2]
    
    # 1. Template matching (multi-scale)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    best_val = -1
    best_loc = None
    best_scale = 1.0
    
    for scale in np.linspace(0.4, 1.4, 25):
        nw = int(tw * scale)
        nh = int(th * scale)
        if nw >= w or nh >= h: continue
        rt = cv2.resize(template, (nw, nh))
        gray_t = cv2.cvtColor(rt, cv2.COLOR_BGR2GRAY)
        res = cv2.matchTemplate(gray, gray_t, cv2.TM_CCOEFF_NORMED)
        _, max_val, _, max_loc = cv2.minMaxLoc(res)
        if max_val > best_val:
            best_val = max_val
            best_loc = max_loc
            best_scale = scale
            
    # 2. Orange letters detection
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
                
    # Find aligned orange letters
    aligned = []
    for i in range(len(orange_boxes)):
        for j in range(len(orange_boxes)):
            if i == j: continue
            b1 = orange_boxes[i]
            b2 = orange_boxes[j]
            if b2[0] > b1[0] and abs(b1[1] - b2[1]) <= 4:
                dx = b2[0] - b1[0]
                if 70 <= dx <= 230:
                    aligned.append((b1, b2, dx))
                    
    print(f"[{filename}] tm_val={best_val:.3f} loc={best_loc} scale={best_scale:.2f} | aligned_pairs={len(aligned)}")
