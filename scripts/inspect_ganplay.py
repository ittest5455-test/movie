# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'Referer': 'https://2499hdonline.com/'
}

url = 'https://play.gan-play.com/embed/fasthd.php?key=2499hdonline&id=1301421&ep=&type='
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=15) as r:
        html = r.read().decode('utf-8', errors='ignore')
        print(f"Status: {r.status}, Length: {len(html)}")
        print("\n--- FIRST 1500 CHARS ---")
        print(html[:1500])
        print("\n--- SCRIPTS ---")
        for s in re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL):
            print("Script:", s[:400].strip())
            print("="*40)
        for ifr in re.findall(r'<iframe[^>]+src=["\']([^"\']+)["\'][^>]*>', html):
            print("Inner iframe:", ifr)
except Exception as e:
    print("Error:", e)
