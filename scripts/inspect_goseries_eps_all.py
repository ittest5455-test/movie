# -*- coding: utf-8 -*-
# ตรวจสอบโครงสร้างตัวเลือกตอน (Halim / Ajax) ของ GOSERIES4K จากหลายๆ เรื่อง
import urllib.request
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

urls = [
    "https://goseries4k.com/see-you-at-work-tomorrow/",
    "https://goseries4k.com/follow-my-dear-general/",
    "https://goseries4k.com/the-apartment-job/",
    "https://goseries4k.com/bridgerton-season-4/"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
        
        # 1. Search for halim episode links (e.g. href or data-href or halim-btn)
        halim_links = re.findall(r'href="([^"]+)"[^>]*class="[^"]*halim[^"]*"', html)
        if not halim_links:
            halim_links = re.findall(r'<a[^>]*href="([^"]+)"[^>]*><span[^>]*class="[^"]*episode[^"]*"', html)
        if not halim_links:
            halim_links = re.findall(r'href="([^"]+)"[^>]*title="[^"]*ตอนที่[^"]*"', html)
            
        print("URL:", url)
        print("  Halim / EP links:", len(halim_links), halim_links[:5])
        
        # 2. Search for post-id or episode server ajax list
        post_id = re.search(r'data-post-id="(\d+)"', html)
        print("  Post ID:", post_id.group(1) if post_id else "None")
        print("-" * 60)
    except Exception as e:
        print("Error:", e)
