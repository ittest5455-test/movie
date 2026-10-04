# -*- coding: utf-8 -*-
import urllib.request
import re
import json

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

url = "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/"
req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

# Extract movie cards
cards = re.findall(r'<a\s+href="(https?://www\.24-hdx\.com/[^"/]+/)"[^>]*>\s*<div[^>]*class="box-img"[^>]*>.*?<img[^>]+src="([^"]+)".*?</a>', html, re.DOTALL)

print("Found 24-hdx 2026 cards:", len(cards))
for link, img in cards[:10]:
    print("Link:", link)
    print("Img:", img)
    print("---")
