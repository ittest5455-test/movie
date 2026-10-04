# -*- coding: utf-8 -*-
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
    # Find all vipx-item or text containing Thai dubbed / Subtitle sections
    items = re.findall(r'<div[^>]*class=\\"vipx-item[^\"]*\\"[^>]*>([\s\S]*?)<\/div>', cache_str)
    print("Found vipx-items in cache:", len(items))
    
    # Extract embedded iframes with their server/audio names
    links = re.findall(r'src=\\"(https:\\/\\/torbo007\.com\\/embed\\/[a-f0-9]+)\\"', cache_str)
    clean_links = [l.replace(r'\/', '/') for l in links]
    print(f"Total links: {len(clean_links)}")
    print("Link list:")
    for idx, l in enumerate(clean_links):
        print(f"  Item {idx+1}: {l}")
