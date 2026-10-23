import cv2
import numpy as np
import glob
import os

images = glob.glob('images/clean_posters/*.jpg')
print(f"Checking {len(images)} images in images/clean_posters/...")

dirty = []

for img_path in images:
    img = cv2.imread(img_path)
    if img is None:
        continue
    h, w = img.shape[:2]
    
    # Check orange text
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower_orange = np.array([8, 140, 180])
    upper_orange = np.array([25, 255, 255])
    orange_mask = cv2.inRange(hsv, lower_orange, upper_orange)
    
    # Ignore top edges or general non-badge noise, look for contours of text-like size
    contours, _ = cv2.findContours(orange_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    text_contours = [c for c in contours if 25 < cv2.contourArea(c) < 3000]
    
    # Also check bright yellow badge
    lower_yellow = np.array([15, 120, 180])
    upper_yellow = np.array([35, 255, 255])
    yellow_mask = cv2.inRange(hsv, lower_yellow, upper_yellow)
    badge_contours, _ = cv2.findContours(yellow_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    badges = [c for c in badge_contours if 300 < cv2.contourArea(c) < 15000]
    
    filename = os.path.basename(img_path)
    if len(text_contours) >= 2 or len(badges) >= 1:
        dirty.append((filename, len(text_contours), len(badges)))

print(f"\nPotential watermarks found in {len(dirty)} files:")
for f, tc, b in dirty:
    print(f" - {f}: orange_contours={tc}, badges={b}")
