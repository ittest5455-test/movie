import cv2
import numpy as np
import glob
import os

images = sorted(glob.glob('images/clean_posters/*.jpg'))

for img_path in images:
    img = cv2.imread(img_path)
    if img is None: continue
    h, w = img.shape[:2]
    filename = os.path.basename(img_path)
    
    # 1. Orange mask for "GO" and "4K"
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower_orange = np.array([8, 130, 160])
    upper_orange = np.array([25, 255, 255])
    orange_mask = cv2.inRange(hsv, lower_orange, upper_orange)
    
    contours, _ = cv2.findContours(orange_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    found = []
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if 20 < area < 4000:
            bx, by, bw, bh = cv2.boundingRect(cnt)
            # Aspect ratio of letters
            if 0.2 < bw / float(bh) < 4.0:
                found.append((bx, by, bw, bh))
                
    if found:
        # Group contours that are near each other vertically and horizontally
        # In GOSERIES 4K, all letters are in the same horizontal band
        # Let's see y ranges
        print(f"[{filename}] Found {len(found)} orange contours:")
        for b in found:
            print(f"   x={b[0]}, y={b[1]}, w={b[2]}, h={b[3]}")
