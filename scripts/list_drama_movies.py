import json
import re

with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Parse movies
movies_raw = re.search(r'const\s+movies\s*=\s*(\[[\s\S]*?\]);', text)
if not movies_raw:
    # try window.movies
    movies_raw = re.search(r'window\.movies\s*=\s*(\[[\s\S]*?\]);', text)

movies = json.loads(movies_raw.group(1))
print("Total movies in movies.js:", len(movies))

# Filter movies that have genre 'ดราม่า'
drama_movies = [m for m in movies if any('ดราม่า' in g for g in m.get('genres', []))]
print("Drama movies count:", len(drama_movies))

# Print their titles and poster URLs
for i, m in enumerate(drama_movies):
    print(f"{i+1}. {m.get('titleTh')} | {m.get('poster')}")
