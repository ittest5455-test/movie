# -*- coding: utf-8 -*-
# ตรวจสอบว่าซีรีส์ GOSERIES4K มี URL หน้าตอนย่อย เช่น /see-you-at-work-tomorrow-ep-2/ หรือไม่
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

test_urls = [
    "https://goseries4k.com/see-you-at-work-tomorrow-ep-1/",
    "https://goseries4k.com/see-you-at-work-tomorrow-ep-2/",
    "https://goseries4k.com/see-you-at-work-tomorrow-ep1/",
    "https://goseries4k.com/see-you-at-work-tomorrow-ep2/",
    "https://goseries4k.com/see-you-at-work-tomorrow-episode-1/",
    "https://goseries4k.com/see-you-at-work-tomorrow-episode-2/",
    "https://goseries4k.com/see-you-at-work-tomorrow-ตอนที่-1/",
    "https://goseries4k.com/see-you-at-work-tomorrow-ตอนที่-2/"
]

for url in test_urls:
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
        iframe_m = re.search(r'<iframe[^>]*src="([^"]+)"', html)
        print(f"URL: {url}")
        print(f"  -> Found Iframe: {iframe_m.group(1) if iframe_m else 'No iframe'}")
    except Exception as e:
        print(f"URL: {url} -> Error: {e}")
