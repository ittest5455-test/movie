import json
import cv2
import os

with open('temp_posters/updated_paths.json', 'r', encoding='utf-8') as f:
    mapping = json.load(f)

rev_mapping = {v: k for k, v in mapping.items()}

files = [
    'images/clean_posters/farm_busily_in_the_cold_palace.jpg',
    'images/clean_posters/flex_x_cop_2__________________.jpg',
    'images/clean_posters/my_name__2021________1_8.jpg',
    'images/clean_posters/shadow_punisher.jpg'
]

for f in files:
    orig_url = rev_mapping.get(f, 'unknown')
    print(f"{f} -> {orig_url}")
