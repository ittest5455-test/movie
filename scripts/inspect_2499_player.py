# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'Referer': 'https://2499hdonline.com/'
}

url = 'https://2499hdonline.com/the-sheep-detectives-2026/'
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=15) as r:
    html = r.read().decode('utf-8', errors='ignore')

print("Page Title:", re.findall(r'<title>(.*?)</title>', html))

# Look for iframes, video, player scripts, buttons, player containers
print("\n--- IFRAMES ---")
for ifr in re.findall(r'<iframe[^>]+src=["\']([^"\']+)["\'][^>]*>', html, re.IGNORECASE):
    print("iframe src:", ifr)

print("\n--- PLAYER / STREAM EMBEDS ---")
for m in re.finditer(r'(https?://[^\s"\'<>]*(?:player|embed|stream|video|play|hls|m3u8|vpla)[^\s"\'<>]*)', html, re.IGNORECASE):
    print("player match:", m.group(1))

print("\n--- JAVASCRIPT / EMBED DATA ---")
# Find scripts or data attributes
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
for s in scripts:
    if any(k in s for k in ['player', 'iframe', 'sources', 'file', 'play', 'resume', 'intro']):
        print("Script snippet:", s[:300].strip())
        print("-" * 40)

# Check player container html
player_div = re.findall(r'(<div[^>]+id=["\'](?:player|video|movie|watch)[^>]*>.*?</div>)', html, re.DOTALL | re.IGNORECASE)
for p in player_div:
    print("Player div:", p[:400])
