# -*- coding: utf-8 -*-
# ตรวจสอบโครงสร้างปุ่มตอนย่อย หรือ iframe บนเว็บ GOSERIES4K เมื่อกดเปลี่ยนตอน
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# Check episode player links / iframe patterns / episode buttons
eps = re.findall(r'<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)</a>', html)
ep_links = [e for e in eps if 'episode' in e[0] or 'ep' in e[0] or 'ตอน' in e[1]]

print("Episode links count:", len(ep_links))
for e in ep_links[:10]:
    print("  Link:", e[0], "| Text:", e[1].strip())
