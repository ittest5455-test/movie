# -*- coding: utf-8 -*-
# ดึงวิดีโอ Iframe จาก ?mov_page=1, ?mov_page=2, ?mov_page=3... ของ GOSERIES4K
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
base_url = "https://goseries4k.com/see-you-at-work-tomorrow/"

for p in range(1, 13):
    url = f"{base_url}?mov_page={p}" if p > 1 else base_url
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
        iframe_m = re.search(r'<iframe[^>]*src="([^"]+)"', html)
        print(f"EP {p} ({url}) -> Iframe: {iframe_m.group(1) if iframe_m else 'None'}")
    except Exception as e:
        print(f"EP {p} Error:", e)
