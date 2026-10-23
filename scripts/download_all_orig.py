import os
import json
import urllib.request
import re

os.makedirs('temp_posters/orig', exist_ok=True)

with open('temp_posters/updated_paths.json', 'r', encoding='utf-8') as f:
    mapping = json.load(f)

print(f"Downloading {len(mapping)} original posters...")

for url, local_path in mapping.items():
    filename = os.path.basename(local_path)
    save_path = f"temp_posters/orig/{filename}"
    if not os.path.exists(save_path):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as r:
                data = r.read()
            with open(save_path, 'wb') as f:
                f.write(data)
            print(f"Downloaded {filename}")
        except Exception as e:
            print(f"Error {filename}: {e}")
    else:
        print(f"Already exists: {filename}")
