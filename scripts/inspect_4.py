import cv2
import numpy as np

for name in ['farm', 'flex', 'my_name', 'shadow']:
    img = cv2.imread(f'temp_posters/orig_{name}.jpg')
    h, w = img.shape[:2]
    print(f"=== {name} ({w}x{h}) ===")
    
    # Check bottom 200px
    bottom = img[h-200:h, :]
    cv2.imwrite(f'temp_posters/bottom_{name}.jpg', bottom)
    
    # Also check if there's any goseries text or if it's already clean
    # Let's search for "GOSERIES" or "goseries"
    # Convert to HSV to find orange
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower_orange = np.array([8, 130, 160])
    upper_orange = np.array([25, 255, 255])
    orange_mask = cv2.inRange(hsv, lower_orange, upper_orange)
    cnts, _ = cv2.findContours(orange_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    print(f"  orange contours total: {len(cnts)}")
    for c in cnts:
        if cv2.contourArea(c) > 30:
            bx, by, bw, bh = cv2.boundingRect(c)
            print(f"    x={bx}, y={by}, w={bw}, h={bh}")
