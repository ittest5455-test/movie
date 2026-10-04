# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/a-shop-for-killers-2/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# Search for the player / episode box container in HTML
pos = html.find('mp-epg-list')
if pos != -1:
    print("Found mp-epg-list at position", pos)
    print(html[pos-200:pos+3000])
else:
    print("Not found mp-epg-list")
