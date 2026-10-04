# -*- coding: utf-8 -*-
# พิมพ์ window.miru_ep_cache ในหน้า ?mov_page=1 และ ?mov_page=2 เพื่อดูความต่าง
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for p in [1, 2, 3]:
    url = f"https://goseries4k.com/see-you-at-work-tomorrow/?mov_page={p}" if p > 1 else "https://goseries4k.com/see-you-at-work-tomorrow/"
    req = urllib.request.Request(url, headers=HEADERS)
    html = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
    
    cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', html)
    print(f"=== Page {p} miru_ep_cache ===")
    if cache_match:
        print(cache_match.group(1)[:300])
    else:
        print("Not found")
