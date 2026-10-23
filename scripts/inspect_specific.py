import cv2
import numpy as np

files = [
    'farm_busily_in_the_cold_palace.jpg',
    'flex_x_cop_2__________________.jpg',
    'my_name__2021________1_8.jpg',
    'shadow_punisher.jpg'
]

for f in files:
    img = cv2.imread(f'images/clean_posters/{f}')
    if img is None:
        continue
    h, w = img.shape[:2]
    print(f"=== {f} ({w}x{h}) ===")
    
    # Check bottom half of the image
    bottom = img[int(h*0.5):, :]
    bh, bw = bottom.shape[:2]
    
    # Save a visual debug of bottom
    # Look for any text or badges
