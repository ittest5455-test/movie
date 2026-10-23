import cv2
import numpy as np

img = cv2.imread('temp_posters/Merry_Berry_Love.png')
# In Merry_Berry_Love, let's see where GOSERIES 4K is
# Let's crop vertical slices: top (0-200), middle (200-400), bottom (400-600)
cv2.imwrite('temp_posters/mbl_crop.png', img[300:550, 50:350])
print("Saved crop")
