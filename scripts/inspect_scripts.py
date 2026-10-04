# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/follow-my-dear-general/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

print("=== SCRIPT TAGS IN GOSERIES4K ===")
scripts = re.findall(r'<script[^>]*src="([^"]+)"', html)
for s in scripts:
    print(s)

print("\n=== IFRAMES IN GOSERIES4K ===")
iframes = re.findall(r'<iframe[^>]*src="([^"]+)"', html)
for i in iframes:
    print(i)
