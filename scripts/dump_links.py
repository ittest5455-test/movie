# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# Dump all <a> tags to see how episodes are linked in GOSERIES4K
links = re.findall(r'<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)</a>', html)
print(f"Total <a> tags: {len(links)}")
for l in links:
    if 'goseries' in l[0] or 'episode' in l[0] or 'ep' in l[0]:
        print("  HREF:", l[0], "| Content:", l[1].strip()[:40])
