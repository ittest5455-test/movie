# -*- coding: utf-8 -*-
import urllib.request
import re
import html

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

url = "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/"
req = urllib.request.Request(url, headers=HEADERS)
content = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

# Let's find movie blocks
# Typically <div class="box-movie"> or <div class="moviefilm"> or <div class="movie-card"> or <div class="movie">
blocks = re.findall(r'<div\s+class="moviefilm">(.*?)</div>\s*</div>', content, re.DOTALL)
print("Moviefilm blocks count:", len(blocks))

if not blocks:
    # Try finding articles or movie item containers
    blocks = re.findall(r'<div\s+class="movie-box">(.*?)</div>\s*</div>', content, re.DOTALL)
    print("Movie-box blocks count:", len(blocks))

if not blocks:
    # Find all links inside main content grid
    # Let's search for links that contain an <img> tag with wp-content/uploads/
    img_links = re.findall(r'<a\s+href="(https?://www\.24-hdx\.com/[^"/]+/)"[^>]*>\s*<div[^>]*class="box-img"[^>]*>.*?<img[^>]+src="([^"]+)".*?</a>', content, re.DOTALL)
    print("Img links count:", len(img_links))
    for link, img in img_links[:10]:
        print("Link:", link, "Img:", img)
