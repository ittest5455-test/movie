# -*- coding: utf-8 -*-
# วิเคราะห์ลำดับปุ่มใน miru_ep_cache ของ GOSERIES4K ว่ามีกี่กลุ่ม (กลุ่มซับไทย vs กลุ่มพากย์ไทย)
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# Search for all episode links / buttons / servers inside GOSERIES4K
matches = re.findall(r'<a[^>]*data-id="(\d+)"[^>]*>([\s\S]*?)</a>', html)
print(f"Total data-id episode buttons on page: {len(matches)}")
for m in matches:
    text = re.sub(r'<[^>]+>', '', m[1]).strip()
    print(f"  Button ID: {m[0]} -> Label: {text}")
