import cv2
import numpy as np
import os

for f in sorted(os.listdir('temp_posters')):
    p = os.path.join('temp_posters', f)
    img = cv2.imread(p)
    if img is None: continue
    
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    h, w = img.shape[:2]
    
    # Yellow / Gold badge detection
    # Yellow hue is roughly 15-35
    lower_yellow = np.array([15, 120, 150])
    upper_yellow = np.array([35, 255, 255])
    
    mask = cv2.inRange(hsv, lower_yellow, upper_yellow)
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    print(f"\n--- {f} ({w}x{h}) ---")
    found = False
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if 200 < area < 20000:
            x, y, bw, bh = cv2.boundingRect(cnt)
            # Check aspect ratio of the badge (GOSERIES 4K logo is wider than tall, roughly 2:1 to 5:1)
            aspect = bw / float(bh)
            if aspect > 1.2 and bw > 40:
                print(f"  Badge found at x={x}, y={y}, w={bw}, h={bh}, area={area}, aspect={aspect:.2f}, y_ratio={y/h:.2f}")
                found = True
    if not found:
        print("  No obvious yellow badge found with strict filter")
