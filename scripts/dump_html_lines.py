# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# Print all lines containing halim or episode or data-
lines = html.splitlines()
print(f"Total html lines: {len(lines)}")
for line in lines:
    if any(k in line for k in ['halim', 'episode', 'data-id', 'data-episode', 'server-', 'player-']):
        print("LINE:", line.strip()[:150])
