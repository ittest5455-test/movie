# -*- coding: utf-8 -*-
import urllib.request
import re
import html
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'Referer': 'https://2499hdonline.com/'
}

def get_page(url):
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as r:
        return r.read().decode('utf-8', errors='ignore')

# 1. Discover all pages for year 2026
base_year_url = 'https://2499hdonline.com/year/2026/'
html_p1 = get_page(base_year_url)

pages = [base_year_url]
page_nums = re.findall(r'/year/2026/page/(\d+)/', html_p1)
if page_nums:
    max_page = max(map(int, page_nums))
    for p in range(2, max_page + 1):
        pages.append(f'https://2499hdonline.com/year/2026/page/{p}/')

print(f"Total 2026 pages found: {len(pages)}")

movie_links = []
seen_urls = set()

for page_url in pages:
    print(f"Scanning page: {page_url}")
    p_html = get_page(page_url)
    
    # Extract links to individual movie posts
    links = re.findall(r'<a[^>]+href=["\'](https://2499hdonline\.com/[^"\'#/]+/?)["\'][^>]*>(.*?)</a>', p_html, re.DOTALL)
    for href, inner in links:
        # Ignore non-movie links
        if any(x in href for x in ['/category/', '/year/', '/tag/', '/author/', '/page/', '/wp-content/', '/#']):
            continue
        if href == 'https://2499hdonline.com/':
            continue
        if href not in seen_urls:
            seen_urls.add(href)
            movie_links.append((href, inner))

print(f"Found {len(movie_links)} unique movie links for 2026")

for href, inner in movie_links[:5]:
    print(" - ", href)
