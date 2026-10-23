import cv2
import numpy as np

# Let's extract the text mask from goseries_watermark.png
temp = cv2.imread('temp_posters/goseries_watermark.png')
# Text has black borders / high contrast
gray = cv2.cvtColor(temp, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(gray, 50, 150)
cv2.imwrite('temp_posters/temp_edges.png', edges)

# Also let's check edge matching on quite_the_girl and the_lament_of_autumn
for name in ['quite_the_girl________________.jpg', 'the_lament_of_autumn__________.jpg', 'the_vanishing_beauty__2026.jpg']:
    img = cv2.imread(f'images/clean_posters/{name}')
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    img_edges = cv2.Canny(img_gray, 50, 150)
    
    # Match edges
    res = cv2.matchTemplate(img_edges, edges, cv2.TM_CCOEFF_NORMED)
    _, max_val, _, max_loc = cv2.minMaxLoc(res)
    print(f"{name}: edge match = {max_val:.3f} at loc {max_loc}")
