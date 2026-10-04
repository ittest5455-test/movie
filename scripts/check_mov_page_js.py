# -*- coding: utf-8 -*-
# ตรวจสอบซอร์สโค้ดฝั่ง Client-side JS ของ GOSERIES4K เมื่อกดเปลี่ยน ?mov_page=2 ว่ามี Ajax/JS parameter ลิงก์ตอนต่างกันไหม
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/?mov_page=2"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# Check script tags or inline JS that handles mov_page or episode click
scripts = re.findall(r'<script[^>]*>([\s\S]*?)</script>', html)
print(f"Total script tags on page 2: {len(scripts)}")

for idx, s in enumerate(scripts):
    if any(k in s for k in ['mov_page', 'episode', 'server', 'player', 'iframe', 'torbo']):
        print(f"\n--- Inline Script {idx+1} ---")
        print(s[:400])
