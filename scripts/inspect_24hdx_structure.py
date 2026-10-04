# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://www.24-hdx.com/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

print("24-hdx HTML length:", len(html))

# Find categories & menus
nav_links = re.findall(r'<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)</a>', html)
print(f"Total links on 24-hdx home: {len(nav_links)}")

category_links = [l for l in nav_links if 'category' in l[0] or 'genre' in l[0] or 'movie' in l[0] or 'series' in l[0] or '2026' in l[0]]
print("Found category links:")
for c in category_links[:15]:
    print("  ", c[0], "->", re.sub(r'<[^>]+>', '', c[1]).strip())

# Find all movie post links
posts = re.findall(r'<a[^>]*href="(https?://www\.24-hdx\.com/[^"/]+/?)"[^>]*title="([^"]+)"', html)
print(f"\nTotal movie posts on home page: {len(posts)}")
for p in posts[:10]:
    print("  Post:", p[0], "->", p[1])
