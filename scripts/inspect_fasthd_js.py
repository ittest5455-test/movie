# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {'User-Agent': 'Mozilla/5.0'}
url = 'https://play.gan-play.com/embed/fasthd.php?key=2499hdonline&id=1301421&ep=&type='
html = urllib.request.urlopen(urllib.request.Request(url, headers=headers)).read().decode('utf-8', errors='ignore')

scripts = re.findall(r'<script[^>]*src=["\']([^"\']+)["\']', html)
print("External scripts:", scripts)

for s in re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL):
    if len(s.strip()) > 50:
        print("=== INLINE SCRIPT ===")
        print(s[:1000])
