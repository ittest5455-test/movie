import json
import os

with open('temp_posters/updated_paths.json', 'r', encoding='utf-8') as f:
    mapping = json.load(f)

print(f"Total mappings: {len(mapping)}")
missing = []
for url, local_path in mapping.items():
    if not os.path.exists(local_path):
        missing.append((url, local_path))
    else:
        sz = os.path.getsize(local_path)
        if sz < 1000:
            missing.append((url, f"{local_path} (too small: {sz} bytes)"))

print(f"Missing / invalid files: {len(missing)}")
for m in missing:
    print(" -", m)
