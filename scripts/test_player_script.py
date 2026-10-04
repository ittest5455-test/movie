# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

url = "https://www.24-hdx.com/avatar-the-last-airbender-season-2/"
req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

# Search for set_ep script or player iframe src in HTML
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
for s in scripts:
    if 'set_ep' in s or 'ajax-player' in s or 'halim_player' in s.lower() or 'iframe' in s:
        print("=== MATCHED SCRIPT ===")
        print(s[:500])
        print("---------------------\n")
