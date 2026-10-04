# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
all_2026 = set()

# 1. Check all post-sitemaps
for i in [1, 2, 3, 4, 5]:
    suffix = str(i) if i > 1 else ""
    url = f"https://2499hdonline.com/post-sitemap{suffix}.xml"
    try:
        req = urllib.request.Request(url, headers=headers)
        xml = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')
        locs = re.findall(r'<loc>(https://2499hdonline\.com/[^<]+)</loc>', xml)
        y2026 = [l for l in locs if '2026' in l]
        print(f"{url}: {len(y2026)} 2026 movies")
        all_2026.update(y2026)
    except Exception as e:
        print(f"Error {url}: {e}")

# 2. Check year 2026 page
try:
    req = urllib.request.Request("https://2499hdonline.com/year/2026/", headers=headers)
    html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')
    links = re.findall(r'href=["\'](https://2499hdonline\.com/[^"\'#/]+/)["\']', html)
    for l in links:
        if '2026' in l:
            all_2026.add(l)
except Exception as e:
    print("Error year 2026:", e)

# Filter out non-post URLs
valid_movies = [u for u in all_2026 if not any(x in u for x in ['/year/', '/category/', '/tag/', '/author/', '/page/'])]
print(f"\nTotal unique 2026 movies found: {len(valid_movies)}")
for m in sorted(valid_movies):
    print(" ", m)
