# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# Search for buttons or elements with onclick or miru
matches = re.findall(r'<li[^>]*>([\s\S]*?)</li>', html)
print(f"Total li tags: {len(matches)}")
for m in matches:
    if 'EP' in m or 'ตอน' in m:
        text = re.sub(r'<[^>]+>', ' ', m).strip()
        data_id = re.search(r'data-id="(\d+)"', m)
        print("  DataID:", data_id.group(1) if data_id else "None", "| Text:", text[:80])
