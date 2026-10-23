import cv2
import numpy as np

img = cv2.imread('images/clean_posters/farm_busily_in_the_cold_palace.jpg')
h, w = img.shape[:2]
bottom = img[h-150:, :]
cv2.imwrite('temp_posters/farm_clean_bottom.jpg', bottom)

hsv = cv2.cvtColor(bottom, cv2.COLOR_BGR2HSV)
lower_orange = np.array([8, 120, 150])
upper_orange = np.array([25, 255, 255])
orange_mask = cv2.inRange(hsv, lower_orange, upper_orange)
cnts, _ = cv2.findContours(orange_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
print("Farm clean bottom orange contours:", len(cnts))
for c in cnts:
    if cv2.contourArea(c) > 20:
        print(cv2.boundingRect(c))
