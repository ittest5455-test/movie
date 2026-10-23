import cv2
import numpy as np

img = cv2.imread('temp_posters/orig_my_name.jpg')
# Search for 'goseries' or 'series'
# Let's crop top 200 and bottom 200
cv2.imwrite('temp_posters/my_name_top.jpg', img[:200, :])
cv2.imwrite('temp_posters/my_name_bottom.jpg', img[-200:, :])
print("Saved my_name top and bottom")
