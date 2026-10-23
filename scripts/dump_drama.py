import json
import re

with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('[')
end_idx = text.rfind(']') + 1
movies = json.loads(text[start_idx:end_idx])

drama_movies = [m for m in movies if any('ดราม่า' in g for g in m.get('genres', []))]
print(f"Total drama movies: {len(drama_movies)}")

for i, m in enumerate(drama_movies):
    title = m.get('titleTh') or m.get('titleEn')
    poster = m.get('poster')
    print(f"{i+1:2d}. {title} -> {poster}")
