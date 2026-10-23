import urllib.request
import os
import re

os.makedirs('temp_posters', exist_ok=True)

with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Find drama movies from screenshot
titles = [
    'Merry Berry Love',
    'Fatal Proximity',
    'Take Charge of My Heart',
    'Blossom through the Cloud',
    'Quite The Girl',
    'OK! Let',
    'Between Steps',
    'Love in Sync'
]

for t in titles:
    m = re.search(r'\{[^{}]*"titleTh":\s*"[^"]*' + t + r'[^"]*"[^{}]*"poster":\s*"([^"]+)"', text)
    if m:
        url = m.group(1)
        fname = t.replace('!', '').replace(' ', '_').replace("'", "")[:20] + '.png'
        path = os.path.join('temp_posters', fname)
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as res, open(path, 'wb') as out:
                out.write(res.read())
            print(f"Downloaded {fname} from {url}")
        except Exception as e:
            print(f"Error {t}: {e}")
