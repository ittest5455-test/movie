import cv2
import numpy as np

temp = cv2.imread('temp_posters/goseries_watermark.png', cv2.IMREAD_GRAYSCALE)
img = cv2.imread('temp_posters/orig_my_name.jpg', cv2.IMREAD_GRAYSCALE)

best_val = -1
best_loc = None
best_scale = 1.0

for s in np.linspace(0.4, 2.0, 30):
    tw = int(temp.shape[1] * s)
    th = int(temp.shape[0] * s)
    if tw >= img.shape[1] or th >= img.shape[0]: continue
    rt = cv2.resize(temp, (tw, th))
    res = cv2.matchTemplate(img, rt, cv2.TM_CCOEFF_NORMED)
    _, max_val, _, max_loc = cv2.minMaxLoc(res)
    if max_val > best_val:
        best_val = max_val
        best_loc = max_loc
        best_scale = s

print(f"my_name max match with goseries template: {best_val:.3f} at loc {best_loc}, scale {best_scale}")
