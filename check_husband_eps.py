# -*- coding: utf-8 -*-
# ตรวจสอบโครงสร้าง HTML ของ GOSERIES4K ในแต่ละหน้าดูว่ามี Subtitle vs Thai Dubbed แบ่งกันอย่างไร
import urllib.request
import re
import json

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

url = "https://goseries4k.com/the-husband/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

print("Page HTML length:", len(html))

cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', html)
if cache_match:
    cache_data = json.loads(cache_match.group(1))
    print(f"Total entries in cache for The Husband: {len(cache_data.keys())}")
    for idx, (key, val) in enumerate(cache_data.items()):
        iframe = re.search(r'src=\\"(https:\\/\\/torbo007\.com\\/embed\\/[a-f0-9]+)\\"', val)
        if not iframe:
            iframe = re.search(r'src="(https://torbo007\.com/embed/[a-f0-9]+)"', val)
        link = iframe.group(1).replace(r'\/', '/') if iframe else "None"
        print(f"  Entry {idx+1} (ID {key}) -> {link}")
