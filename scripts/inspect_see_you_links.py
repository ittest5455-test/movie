# -*- coding: utf-8 -*-
# ตรวจสอบว่าในหน้าเว็บ goseries4k.com/see-you-at-work-tomorrow/ มีลิงก์ตอนย่อย (ep-2, ep-3...) หรือ selector ซ่อนอยู่ไหม
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

print("Page HTML length:", len(html))

# Search for any links or buttons with episode numbers
eps = re.findall(r'<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)</a>', html)
print(f"Total links on page: {len(eps)}")

# Filter links that might be episodes
ep_links = [l for l in eps if 'see-you' in l[0] or 'ep' in l[0] or 'ตอน' in l[1]]
print(f"Relevant episode links found: {len(ep_links)}")
for l in ep_links[:20]:
    print("  HREF:", l[0], "| Text:", re.sub(r'<[^>]+>', '', l[1]).strip()[:50])
