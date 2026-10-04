# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

try:
    req = urllib.request.Request(url, headers=HEADERS)
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    
    # Check halim-episode or playlist or episode list in GOSERIES4K HTML
    ep_matches = re.findall(r'<a[^>]*href="([^"]+)"[^>]*class="[^"]*halim-btn[^"]*"[^>]*>([\s\S]*?)</a>', html)
    if not ep_matches:
        ep_matches = re.findall(r'data-href="([^"]+)"[^>]*>([\s\S]*?)</a>', html)
    if not ep_matches:
        ep_matches = re.findall(r'<li[^>]*>([\s\S]*?)</li>', html)

    print(f"Total list items / episodes: {len(ep_matches)}")
    
    # Extract all episode numbers or links
    episodes = []
    for item in ep_matches:
        if isinstance(item, tuple):
            text = item[1]
        else:
            text = item
        clean_text = re.sub(r'<[^>]+>', '', text).strip()
        if 'ตอนที่' in clean_text or 'EP' in clean_text or clean_text.isdigit():
            episodes.append(clean_text)
            
    print(f"Parsed episodes list ({len(episodes)}):", episodes[:20])

except Exception as e:
    print("Error:", e)
