import cv2
import numpy as np

temp = cv2.imread('temp_posters/quite_wm.png')
th, tw = temp.shape[:2]

# Extract foreground mask (pixels that are not black)
gray_temp = cv2.cvtColor(temp, cv2.COLOR_BGR2GRAY)
_, mask_temp = cv2.threshold(gray_temp, 25, 255, cv2.THRESH_BINARY)

names = [
    'quite_the_girl________________.jpg',
    'the_lament_of_autumn__________.jpg',
    'the_vanishing_beauty__2026.jpg',
    'the_scandal______________2026_.jpg',
    'love_legend_______________2026.jpg',
    'a_love_other_than_yours_______.jpg',
    'a_prophet________________2026.jpg'
]

for name in names:
    p = f'images/clean_posters/{name}'
    img = cv2.imread(p)
    if img is None:
        print(f"File not found: {name}")
        continue
    
    # Check bottom area (y from 450 to 600)
    # Does it match the orange color of GO / 4K?
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    # Orange Hue: 10-25, Saturation > 150, Value > 180
    lower_orange = np.array([8, 140, 180])
    upper_orange = np.array([25, 255, 255])
    orange_mask = cv2.inRange(hsv, lower_orange, upper_orange)
    
    contours, _ = cv2.findContours(orange_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    found_y = []
    for cnt in contours:
        if cv2.contourArea(cnt) > 30:
            bx, by, bw, bh = cv2.boundingRect(cnt)
            found_y.append((bx, by, bw, bh))
            
    print(f"{name}: found orange contours = {len(found_y)}")
    if found_y:
        # Get bounding box of all orange text
        min_x = min(b[0] for b in found_y)
        min_y = min(b[1] for b in found_y)
        max_x = max(b[0]+b[2] for b in found_y)
        max_y = max(b[1]+b[3] for b in found_y)
        print(f"  Orange box: x={min_x}-{max_x}, y={min_y}-{max_y}")
        
        # Expand box to cover "GOSERIES 4K" + Thai text below it
        x1 = max(0, min_x - 10)
        y1 = max(0, min_y - 8)
        x2 = min(img.shape[1], max_x + 10)
        y2 = min(img.shape[0], max_y + 45) # 45px below covers the Thai text
        
        mask = np.zeros(img.shape[:2], dtype=np.uint8)
        mask[y1:y2, x1:x2] = 255
        cleaned = cv2.inpaint(img, mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)
        cv2.imwrite(p, cleaned)
        print(f"  -> Successfully cleaned and overwritten {name}")
