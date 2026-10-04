# -*- coding: utf-8 -*-
import urllib.request
import re
import json
import urllib.parse
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://goseries4k.com/'
}

# 1. Fetch Thai Dubbed Series Categories
category_urls = [
    "https://goseries4k.com/cat_category/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%88%e0%b8%b5%e0%b8%99%e0%b8%9e%e0%b8%b2%e0%b8%81%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%97%e0%b8%a2/",
    "https://goseries4k.com/cat_category/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%80%e0%b8%81%e0%b8%b2%e0%b8%ab%e0%b8%a5%e0%b8%b5%e0%b8%9e%e0%b8%b2%e0%b8%81%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%97/",
    "https://goseries4k.com/cat_category/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9e%e0%b8%b2%e0%b8%81%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%97%e0%b8%a2/"
]

collected_links = set()

for cat in category_urls:
    try:
        req = urllib.request.Request(cat, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        # Find movie/series links
        matches = re.findall(r'href="(https://goseries4k\.com/[^"/]+/)', html)
        for m in matches:
            if not m.startswith("https://goseries4k.com/cat_") and not m.startswith("https://goseries4k.com/page/"):
                collected_links.add(m)
    except Exception as e:
        print("Category error:", e)

print(f"Total Thai Dubbed Series links scraped: {len(collected_links)}")
print("Sample links:", list(collected_links)[:5])
