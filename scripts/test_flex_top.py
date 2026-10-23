import cv2
import numpy as np

img = cv2.imread('images/clean_posters/flex_x_cop_2__________________.jpg')
h, w = img.shape[:2]
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
lower_orange = np.array([8, 120, 150])
upper_orange = np.array([25, 255, 255])
orange_mask = cv2.inRange(hsv, lower_orange, upper_orange)

contours, _ = cv2.findContours(orange_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
for cnt in contours:
    bx, by, bw, bh = cv2.boundingRect(cnt)
    if by < 150:
        print(f"flex top: x={bx}, y={by}, w={bw}, h={bh}, area={cv2.contourArea(cnt)}")
