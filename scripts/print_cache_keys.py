# -*- coding: utf-8 -*-
# พิมพ์กุญแจ keys และ iframe ทั้งหมดใน window.miru_ep_cache
import urllib.request
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', html)
if cache_match:
    cache_data = json.loads(cache_match.group(1))
    print("Total keys in miru_ep_cache:", len(cache_data.keys()))
    for key, val in cache_data.items():
        iframe = re.search(r'src=\\"([^"]+)\\"', val)
        if not iframe:
            iframe = re.search(r'src="([^"]+)"', val)
        print(f"Key ID: {key} -> Iframe: {iframe.group(1) if iframe else 'None'}")
