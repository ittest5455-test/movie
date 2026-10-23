import cv2
import numpy as np
import glob
import os

images = sorted(glob.glob('images/clean_posters/*.jpg'))

def find_goseries_watermark(img):
    h, w = img.shape[:2]
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower_orange = np.array([8, 120, 150])
    upper_orange = np.array([25, 255, 255])
    orange_mask = cv2.inRange(hsv, lower_orange, upper_orange)
    
    contours, _ = cv2.findContours(orange_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # Filter potential letter contours
    letters = []
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if 15 < area < 1500:
            bx, by, bw, bh = cv2.boundingRect(cnt)
            if 12 <= bh <= 45 and 8 <= bw <= 35:
                letters.append((bx, by, bw, bh))
                
    # Look for quadruplets (G, O) ... (4, K)
    # or at least a G and a K on the same horizontal baseline
    found_boxes = []
    
    for i in range(len(letters)):
        for j in range(len(letters)):
            if i == j: continue
            b1 = letters[i]
            b2 = letters[j]
            # b1 is on left, b2 is on right
            if b2[0] > b1[0]:
                dx = b2[0] - b1[0]
                dy = abs(b2[1] - b1[1])
                # GOSERIES 4K total width is roughly 90px to 220px depending on poster scale
                if 80 <= dx <= 220 and dy <= 4:
                    # Check letter heights are similar
                    if abs(b1[3] - b2[3]) <= 6:
                        # Find all letters belonging to this line between b1[0] and b2[0]
                        line_letters = [
                            b for b in letters 
                            if b1[0] - 5 <= b[0] <= b2[0] + b2[2] + 5 and abs(b[1] - b1[1]) <= 5
                        ]
                        if len(line_letters) >= 3: # G, O, 4, K (at least 3 found)
                            min_x = min(b[0] for b in line_letters)
                            max_x = max(b[0] + b[2] for b in line_letters)
                            min_y = min(b[1] for b in line_letters)
                            max_y = max(b[1] + b[3] for b in line_letters)
                            found_boxes.append((min_x, min_y, max_x, max_y))
                            
    # Deduplicate overlapping boxes
    merged_boxes = []
    for box in found_boxes:
        merged = False
        for i, mbox in enumerate(merged_boxes):
            if abs(box[1] - mbox[1]) < 10 and abs(box[0] - mbox[0]) < 20:
                merged_boxes[i] = (
                    min(box[0], mbox[0]),
                    min(box[1], mbox[1]),
                    max(box[2], mbox[2]),
                    max(box[3], mbox[3])
                )
                merged = True
                break
        if not merged:
            merged_boxes.append(box)
            
    return merged_boxes

found_count = 0
for img_path in images:
    filename = os.path.basename(img_path)
    img = cv2.imread(img_path)
    if img is None: continue
    
    boxes = find_goseries_watermark(img)
    if boxes:
        found_count += 1
        print(f"[{filename}] Found {len(boxes)} watermark box(es):")
        for b in boxes:
            print(f"   x={b[0]}-{b[2]}, y={b[1]}-{b[3]}")

print(f"\nTotal images with detected watermark: {found_count} / {len(images)}")
