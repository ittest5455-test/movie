# -*- coding: utf-8 -*-
# ตรวจสอบว่ามี API ดึง m3u8 โดยตรงจาก torbo007 หรือไม่
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

url = "https://torbo007.com/embed/2010b76496a7c8cfa2b9ad7835154388"
req = urllib.request.Request(url, headers={
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15',
    'Referer': 'https://goseries4k.com/'
})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Search for any ajax / endpoint / fetch inside script or init
print("Looking for endpoints in torbo007:")
api_matches = re.findall(r'(/api/[^\s"\'<>]+|/ajax/[^\s"\'<>]+|https?://[^\s"\'<>]+\.php[^\s"\'<>]*)', html)
print("API matches:", api_matches)
