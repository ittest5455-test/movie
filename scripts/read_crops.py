import cv2
import numpy as np

for name in ['orig_affair_crop.jpg', 'affair_crop.jpg', 'orig_trap_crop.jpg', 'trap_crop.jpg']:
    img = cv2.imread(f'temp_posters/{name}')
    print(f"{name}: shape={img.shape}, mean_bgr={np.mean(img, axis=(0,1)).astype(int)}")
