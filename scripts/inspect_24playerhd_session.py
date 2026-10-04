# -*- coding: utf-8 -*-
# ตรวจสอบซอร์สโค้ดของ 24playerhd ว่ามี session token หมดอายุ หรือมี worker / script อะไรที่ทำให้หลุดเมื่อเล่นไป 20 นาที
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.24-hdx.com/'
}

url = "https://main.24playerhd.com/index_th.php?id=e6283aa67cf9802ed9c1a2b6&b=5571"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

print("24playerhd HTML length:", len(html))

# Find scripts
scripts = re.findall(r'<script[^>]*>([\s\S]*?)</script>', html)
for idx, s in enumerate(scripts):
    print(f"\n--- Script {idx+1} ---")
    print(s[:500])
