# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

post_id = 40053
test_urls = [
    f"https://www.24-hdx.com/play.php?id={post_id}",
    f"https://www.24-hdx.com/player.php?id={post_id}",
    f"https://www.24-hdx.com/vdo.php?id={post_id}",
    f"https://api.24-hdx.com/player.php?id={post_id}",
    f"https://www.24-hdx.com/embed/{post_id}",
    f"https://www.24-hdx.com/player/{post_id}"
]

for u in test_urls:
    try:
        req = urllib.request.Request(u, headers=HEADERS)
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        print(f"SUCCESS {u}: len {len(html)}")
        iframes = re.findall(r'src="([^"]+)"', html)
        print("   Iframes:", iframes[:5])
    except Exception as e:
        print(f"FAILED {u}: {e}")
