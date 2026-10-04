# -*- coding: utf-8 -*-
import urllib.request
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/a-shop-for-killers-2/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', html)
if cache_match:
    raw_cache = json.loads(cache_match.group(1))
    for k, v in raw_cache.items():
        iframes = re.findall(r'<iframe[^>]*src="([^"]+)"', v)
        print(f"Key {k}: {iframes}")
