# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'Referer': 'https://2499hdonline.com/'
}

url = 'https://2499hdonline.com/year/2026/'
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=15) as r:
    html = r.read().decode('utf-8', errors='ignore')

print("Page 1 length:", len(html))

# Check pagination
pagination = re.findall(r'href=["\'](https://2499hdonline\.com/year/2026/page/\d+/?)["\']', html)
print("Pagination links:", set(pagination))

# Find movie cards
# Let's inspect the HTML of movie cards
cards = re.findall(r'<div class="[^"]*col[^"]*"[^>]*>(.*?)</div>\s*</div>', html, re.DOTALL)
print(f"Cards found: {len(cards)}")

# Or search all links with images
items = re.findall(r'<a[^>]+href=["\'](https://2499hdonline\.com/[^"\']+-2026/?)["\'][^>]*>(.*?)</a>', html, re.DOTALL)
print(f"Movie links with 2026: {len(items)}")

seen = set()
for href, inner in items:
    if href in seen: continue
    seen.add(href)
    title_m = re.search(r'title=["\'](.*?)["\']', inner) or re.search(r'alt=["\'](.*?)["\']', inner)
    title = title_m.group(1) if title_m else "No title"
    img_m = re.search(r'src=["\']([^"\']+)["\']', inner) or re.search(r'data-src=["\']([^"\']+)["\']', inner)
    img = img_m.group(1) if img_m else "No image"
    print(f"\nMovie: {title}\nURL: {href}\nPoster: {img}")
