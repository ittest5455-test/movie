# -*- coding: utf-8 -*-
# พิมพ์เนื้อหา miru_ep_cache ทั้งหมดเพื่อสกัด URL / Iframe ของแต่ละ EP ชัดๆ
import urllib.request
import re
import json

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', html)
if cache_match:
    cache_str = cache_match.group(1)
    # Find all data-link or iframe src or ep buttons inside cache_str
    print("=== Found miru_ep_cache ===")
    ep_matches = re.findall(r'data-[^=]+="([^"]+)"', cache_str)
    print("Data attributes:", set(ep_matches))
    
    iframes = re.findall(r'src=\\"([^"]+)\\"', cache_str)
    if not iframes:
        iframes = re.findall(r'src="([^"]+)"', cache_str)
    print("Iframes in cache:", iframes)
    
    # Save raw html snippet to inspection file
    with open("miru_cache_dump.txt", "w", encoding="utf-8") as f:
        f.write(cache_str)
    print("Saved cache dump to miru_cache_dump.txt")
