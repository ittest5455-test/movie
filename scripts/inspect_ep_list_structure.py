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

# Extract all mp-ep-list blocks
ep_lists = re.findall(r'<div class="mp-ep-list">([\s\S]*?)</div>\s*</div>', html)
print(f"Total mp-ep-list found: {len(ep_lists)}")

for idx, eplist in enumerate(ep_lists):
    print(f"\n=================== EP LIST {idx+1} ===================")
    # Find all items/buttons inside this list
    buttons = re.findall(r'<span[^>]*class="[^"]*mp-ep-name[^"]*"[^>]*>([\s\S]*?)</span>', eplist)
    data_eps = re.findall(r'data-id="(\d+)"[^>]*>([\s\S]*?)</a>', eplist)
    print("Labels/Spans:", [b.strip() for b in buttons])
    print("Links with data-id:")
    for d in data_eps:
        print(f"   data-id={d[0]} -> {re.sub(r'<[^>]+>', ' ', d[1]).strip()}")

# Also print the HTML surrounding mp-ep-list to see section titles (ซับไทย / พากย์ไทย)
sections = re.findall(r'([^<]+)<div class="mp-ep-list">', html)
print("\nSection headers before mp-ep-list:")
for s in sections:
    print("  Header:", s.strip()[-50:])
