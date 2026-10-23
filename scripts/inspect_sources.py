import re
from collections import Counter

with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

sources = re.findall(r'"source":\s*"([^"]+)"', text)
print("Sources:", Counter(sources))

posters = re.findall(r'"poster":\s*"([^"]+)"', text)
domains = [p.split('/')[2] if '://' in p else 'local' for p in posters]
print("\nPoster domains:", Counter(domains))
