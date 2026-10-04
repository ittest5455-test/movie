# -*- coding: utf-8 -*-
# ตรวจสอบว่า leoplayer7 ใน 037HDD มี API ดึง m3u8 หรือ mp4 โดยตรงได้ไหม
import urllib.request
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.037hddmovies.com/'
}

url = "https://www.leoplayer7.com/watch?v=3cgBsLr3L5"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

print("Leoplayer7 HTML length:", len(html))

# Search for video source, m3u8, mp4, jwplayer, sources
m3u8_matches = re.findall(r'(https?://[^\s"\'<>]+\.(?:m3u8|mp4)[^\s"\'<>]*)', html)
print(f"Direct stream matches found: {len(m3u8_matches)}")
for m in m3u8_matches:
    print("  Stream:", m)

# Search script tags
scripts = re.findall(r'<script[^>]*>([\s\S]*?)</script>', html)
print(f"Total script tags: {len(scripts)}")
for idx, s in enumerate(scripts):
    if any(k in s for k in ['file', 'sources', 'playlist', 'player', 'hls', 'eval']):
        print(f"\n--- Script {idx+1} ---")
        print(s[:400])
