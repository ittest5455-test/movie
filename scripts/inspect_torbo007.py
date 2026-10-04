# -*- coding: utf-8 -*-
# ตรวจสอบซอร์สโค้ดของ torbo007 embed player เพื่อดูว่าเปลี่ยน EP จาก iframe src Parameter ได้อย่างไร
import urllib.request
import re

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://goseries4k.com/'
}

url = "https://torbo007.com/embed/e963f04ecfa7cf397bdb6768f74ce448"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

print("torbo007 embed HTML length:", len(html))

# Search for any JS variables, sources, playlist or episode options in torbo007
scripts = re.findall(r'<script[^>]*>([\s\S]*?)</script>', html)
print(f"Total script blocks in torbo007: {len(scripts)}")

for idx, s in enumerate(scripts):
    if any(k in s for k in ['file', 'playlist', 'sources', 'ep', 'episode', 'hls']):
        print(f"\n--- Script {idx+1} ---")
        print(s[:300])
