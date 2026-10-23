import cv2
import numpy as np

for name, (bx, by, bw, bh) in [
    ('Blossom_through_the_.png', (131, 473, 134, 25)),
    ('Love_in_Sync.png', (111, 309, 173, 32))
]:
    img = cv2.imread(f'temp_posters/{name}')
    mask = np.zeros(img.shape[:2], dtype=np.uint8)
    # expand bbox by 4px
    x1 = max(0, bx - 4)
    y1 = max(0, by - 4)
    x2 = min(img.shape[1], bx + bw + 4)
    y2 = min(img.shape[0], by + bh + 4)
    mask[y1:y2, x1:x2] = 255
    
    inpainted = cv2.inpaint(img, mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)
    cv2.imwrite(f'temp_posters/inpainted_{name}', inpainted)
    print(f"Inpainted {name} successfully")
