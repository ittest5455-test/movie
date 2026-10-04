# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

url = "https://www.24-hdx.com/avatar-the-last-airbender-season-2/"
req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

# Find position of halim-player-wrapper or player in HTML
pos_header = html.find('header')
pos_player = html.find('halim-player-wrapper')
pos_ads = html.find('bng55') if 'bng55' in html else html.find('banner')

print("Page HTML total length:", len(html))
print("Header pos:", pos_header)
print("Player pos:", pos_player)
print("Ads pos:", pos_ads)

# Print HTML surrounding halim-player-wrapper
if pos_player != -1:
    print("\n=== PLAYER WRAPPER HTML ===")
    print(html[pos_player-200:pos_player+600])
