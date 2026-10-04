# -*- coding: utf-8 -*-
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'window\.movies\s*=\s*(\[.*?\]);', text, re.DOTALL)
if not m:
    print('Failed to find window.movies')
    sys.exit(1)

movies = json.loads(m.group(1))
print(f'Total current movies: {len(movies)}')

with open('scripts/f1_movie.json', 'r', encoding='utf-8') as f:
    f1 = json.load(f)

# Check if already exists
found = False
for idx, mov in enumerate(movies):
    if mov.get('id') == f1['id'] or mov.get('postId') == f1['postId']:
        print(f"Found existing match at index {idx}: {mov.get('titleTh')}")
        movies[idx] = f1
        found = True
        break

if not found:
    # Insert at top of list so it appears immediately on the front page / new movies
    movies.insert(0, f1)
    print(f"Inserted F1 at index 0. New total count: {len(movies)}")

# Write back
header = '// ฐานข้อมูลภาพยนตร์รวม 24-HD, GOSERIES4K, WOW-DRAMA และ 2499HD ปี 2026 พากย์ไทย\nwindow.movies = '
footer = ';\nvar movies = window.movies;\n'

with open('js/movies.js', 'w', encoding='utf-8') as f:
    f.write(header)
    json.dump(movies, f, ensure_ascii=False, indent=2)
    f.write(footer)

print('Successfully updated js/movies.js!')
