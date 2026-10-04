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

print("Page length:", len(html))

# Save a snippet containing buttons or ep tabs
matches = re.findall(r'<a[^>]*data-id="(\d+)"[^>]*>([\s\S]*?)</a>', html)
print(f"Total data-id buttons: {len(matches)}")
for m in matches:
    print(f"  data-id={m[0]} -> {re.sub(r'<[^>]+>', '', m[1]).strip()}")

# Also check for servers / tabs / labels on page
tab_matches = re.findall(r'<div[^>]*class="[^"]*server[^"]*"[^>]*>([\s\S]*?)</div>', html, re.I)
print(f"Server tabs found: {len(tab_matches)}")

cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', html)
if cache_match:
    cache_data = json.loads(cache_match.group(1))
    print(f"\nTotal items in miru_ep_cache: {len(cache_data.keys())}")
    for k, v in cache_data.items():
        iframe = re.search(r'src=\\"(https?:\\/\\/[^\"]+)\\"', v)
        if not iframe:
            iframe = re.search(r'src="(https?://[^\"]+)"', v)
        link = iframe.group(1).replace(r'\/', '/') if iframe else "None"
        print(f"  Key ID {k} -> {link}")

# Let's inspect HTML around episode list
ep_container = re.findall(r'<(?:ul|div)[^>]*class="[^"]*(?:episodes|server|list)[^"]*"[^>]*>([\s\S]*?)</(?:ul|div)>', html, re.I)
print(f"\nEpisode containers found: {len(ep_container)}")
for idx, c in enumerate(ep_container[:5]):
    print(f"Container {idx+1}: {c[:300]}")
