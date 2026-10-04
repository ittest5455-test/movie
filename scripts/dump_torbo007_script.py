# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://goseries4k.com/'
}

url = "https://torbo007.com/embed/e963f04ecfa7cf397bdb6768f74ce448"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

scripts = re.findall(r'<script[^>]*>([\s\S]*?)</script>', html)
for idx, s in enumerate(scripts):
    print(f"=== SCRIPT {idx+1} ===")
    print(s)
