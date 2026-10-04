# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

try:
    req = urllib.request.Request(url, headers=HEADERS)
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    print("Page fetched length:", len(html))
    
    # Search for all episode links / options / buttons / player items
    links = re.findall(r'href="([^"]+)"[^>]*>([\s\S]*?)</a>', html)
    ep_links = [l for l in links if 'ep' in l[0].lower() or 'ตอน' in l[1] or 'ep' in l[1].lower()]
    print(f"\nEpisode links found ({len(ep_links)}):")
    for ep in ep_links[:15]:
        print("  URL:", ep[0])
        print("  Text:", ep[1].strip())
        print("-" * 40)

    # Check select options
    options = re.findall(r'<option[^>]*value="([^"]*)"[^>]*>([\s\S]*?)</option>', html)
    print(f"\nSelect options found ({len(options)}):")
    for opt in options:
        print("  Value:", opt[0], "| Text:", opt[1].strip())

except Exception as e:
    print("Error:", e)
