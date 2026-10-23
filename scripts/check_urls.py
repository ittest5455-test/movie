import json
import re

with open('temp_posters/updated_paths.json', 'r', encoding='utf-8') as f:
    mapping = json.load(f)

with open('js/movies.js', 'r', encoding='utf-8') as f:
    content = f.read()

urls = set(re.findall(r'https://goseries4k\.com[^\s\'",]+', content))
print(f"Total unique in js: {len(urls)}")
unmapped = urls - set(mapping.keys())
print(f"Unmapped ({len(unmapped)}):", unmapped)

for u in sorted(unmapped):
    print(" -", u)
