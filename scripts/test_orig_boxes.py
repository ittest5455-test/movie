import cv2
import numpy as np
import glob
import os

orig_files = sorted(glob.glob('temp_posters/orig/*.jpg'))

for f in orig_files:
    filename = os.path.basename(f)
    if filename in ['merry_berry_love__2026.jpg', 'fatal_proximity_to_him________.jpg', 'my_name__2021________1_8.jpg']:
        continue
        
    img = cv2.imread(f)
    h, w = img.shape[:2]
    
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
                
    # Find pairs of (b1, b2) with dx between 70 and 230, and dy <= 4
    candidates = []
    for i in range(len(orange_boxes)):
        for j in range(len(orange_boxes)):
            if i == j: continue
            b1 = orange_boxes[i]
            b2 = orange_boxes[j]
            if b2[0] > b1[0] and abs(b1[1] - b2[1]) <= 4:
                dx = b2[0] - b1[0]
                if 70 <= dx <= 230:
                    # Let's see letters in this horizontal band
                    line_boxes = [b for b in orange_boxes if b1[0]-5 <= b[0] <= b2[0]+b2[2]+5 and abs(b[1] - b1[1]) <= 5]
                    if len(line_boxes) >= 4:
                        min_x = min(b[0] for b in line_boxes)
                        max_x = max(b[0] + b[2] for b in line_boxes)
                        min_y = min(b[1] for b in line_boxes)
                        max_y = max(b[1] + b[3] for b in line_boxes)
                        candidates.append((min_x, min_y, max_x, max_y, len(line_boxes)))
                        
    # Sort by number of letters in line
    if candidates:
        candidates.sort(key=lambda x: x[4], reverse=True)
        best = candidates[0]
        print(f"[{filename}] Watermark: x={best[0]}..{best[2]}, y={best[1]}..{best[3]} (letters={best[4]})")
    else:
        print(f"[{filename}] NO 4-LETTER LINE FOUND!")
