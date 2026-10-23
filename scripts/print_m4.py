import json
import re

with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('[')
end_idx = text.rfind(']') + 1
movies = json.loads(text[start_idx:end_idx])

drama_movies = [m for m in movies if any('ดราม่า' in g for g in m.get('genres', []))]
print(json.dumps(drama_movies[3], ensure_ascii=False, indent=2))
