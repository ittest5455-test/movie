# -*- coding: utf-8 -*-
# ตรวจสอบโครงสร้างตัวเล่นวิดีโออื่นๆ จาก goseries4k ที่ไม่ติดล็อก torbo007
import urllib.request
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

links = [
    "https://goseries4k.com/follow-my-dear-general/",
    "https://goseries4k.com/the-apartment-job/",
    "https://goseries4k.com/his-hers/",
    "https://goseries4k.com/nemesis-2021/"
]

for link in links:
    try:
        req = urllib.request.Request(link, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
        
        # Check all iframe sources or ajax player scripts
        iframes = re.findall(r'src="([^"]+)"', html)
        print("Link:", link)
        print("  All sources:", [i for i in iframes if 'http' in i])
        
        postid = re.search(r'data-post-id="(\d+)"', html)
        print("  PostID:", postid.group(1) if postid else "None")
        print("-" * 50)
    except Exception as e:
        print("Error:", e)
