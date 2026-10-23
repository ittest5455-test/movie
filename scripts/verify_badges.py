import cv2
import numpy as np
import glob
import os

images = sorted(glob.glob('images/clean_posters/*.jpg'))

found_badges = []
for p in images:
    img = cv2.imread(p)
    if img is None: continue
    h, w = img.shape[:2]
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower_yellow = np.array([15, 120, 180])
    upper_yellow = np.array([35, 255, 255])
    yellow_mask = cv2.inRange(hsv, lower_yellow, upper_yellow)
    badge_cnts, _ = cv2.findContours(yellow_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    for cnt in badge_cnts:
        area = cv2.contourArea(cnt)
        if 400 < area < 15000:
            bx, by, bw, bh = cv2.boundingRect(cnt)
            aspect = bw / float(bh)
            if aspect > 1.3:
                found_badges.append((os.path.basename(p), bx, by, bw, bh, area))

print(f"Total badges found in clean posters: {len(found_badges)}")
for b in found_badges:
    print(" -", b)
