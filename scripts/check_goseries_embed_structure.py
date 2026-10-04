# -*- coding: utf-8 -*-
# ตรวจสอบโครงสร้างผู้ให้บริการวิดีโอ (Iframe) ในเว็บ GOSERIES4K เมื่อกดเปลี่ยนตอน
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# Search for any select, option, button, or link that contains episode data
items = re.findall(r'<[^>]+(?:data-ep|data-episode|data-link|data-url)[^>]+>', html)
print("Data attributes for episodes:", items)

# Print any iframe
iframes = re.findall(r'<iframe[^>]*src="([^"]+)"', html)
print("Iframe src:", iframes)
