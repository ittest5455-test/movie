# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
}

req = urllib.request.Request('https://2499hdonline.com/', headers=headers)
with urllib.request.urlopen(req, timeout=15) as r:
    html = r.read().decode('utf-8', errors='ignore')

print("Page length:", len(html))

# Find all links
links = re.findall(r'<a[^>]+href=["\'](https://2499hdonline\.com/[^"\']+)["\'][^>]*>(.*?)</a>', html, re.DOTALL)
print(f"Total links: {len(links)}")

seen = set()
for href, text in links:
    clean_text = re.sub(r'<[^>]+>', '', text).strip()
    if href not in seen:
        seen.add(href)
        if any(k in href.lower() or k in clean_text.lower() for k in ['2026', '2025', '2024', 'category', 'year', 'tag']):
            print(f"[{clean_text}] -> {href}")
