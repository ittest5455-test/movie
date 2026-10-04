# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'Referer': 'https://2499hdonline.com/'
}

def get_page(url):
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as r:
            return r.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error {url}: {e}")
        return ""

# Check search for 2026
search_html = get_page('https://2499hdonline.com/?s=2026')
print("Search 2026 page length:", len(search_html))

# Also check year 2026 page
year_html = get_page('https://2499hdonline.com/year/2026/')
print("Year 2026 page length:", len(year_html))

def extract_posts(html_text):
    # Posts usually have href ending in -2026/ or matching movie slugs
    found = {}
    matches = re.findall(r'<a[^>]+href=["\'](https://2499hdonline\.com/([^"\'#/]+)/?)["\'][^>]*>(.*?)</a>', html_text, re.DOTALL)
    for href, slug, inner in matches:
        if any(x in href for x in ['/category/', '/year/', '/tag/', '/author/', '/page/', '/wp-content/', '/#', '?s=']):
            continue
        if href in ['https://2499hdonline.com/', 'https://2499hdonline.com']:
            continue
        # Extract title from inner
        title_m = re.search(r'title=["\'](.*?)["\']', inner) or re.search(r'alt=["\'](.*?)["\']', inner)
        title = title_m.group(1) if title_m else ""
        if not title:
            clean = re.sub(r'<[^>]+>', '', inner).strip()
            if len(clean) > 3 and "ดูรายละเอียด" not in clean and "ดูเลย" not in clean:
                title = clean
        if href not in found:
            found[href] = title
    return found

year_posts = extract_posts(year_html)
search_posts = extract_posts(search_html)

print(f"\n--- From /year/2026/ ({len(year_posts)} posts) ---")
for h, t in year_posts.items():
    print(f"  {t} -> {h}")

print(f"\n--- From /?s=2026 ({len(search_posts)} posts) ---")
for h, t in search_posts.items():
    if h not in year_posts:
        print(f"  NEW: {t} -> {h}")
