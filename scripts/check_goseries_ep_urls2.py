# -*- coding: utf-8 -*-
import urllib.request
import urllib.parse
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

url1 = "https://goseries4k.com/see-you-at-work-tomorrow-" + urllib.parse.quote("ตอนที่") + "-1/"
url2 = "https://goseries4k.com/see-you-at-work-tomorrow-" + urllib.parse.quote("ตอนที่") + "-2/"

for url in [url1, url2]:
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
        iframe_m = re.search(r'<iframe[^>]*src="([^"]+)"', html)
        print(f"URL: {url}")
        print(f"  -> Found Iframe: {iframe_m.group(1) if iframe_m else 'No iframe'}")
    except Exception as e:
        print(f"URL: {url} -> Error: {e}")
