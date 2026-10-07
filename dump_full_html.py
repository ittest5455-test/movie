# -*- coding: utf-8 -*-
# พิมพ์ซอร์สโค้ด HTML ทั้งหมดของหน้า See You at Work Tomorrow ลงไฟล์ html_dump.txt
import urllib.request

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/see-you-at-work-tomorrow/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

with open("html_dump.txt", "w", encoding="utf-8") as f:
    f.write(html)

print("Saved HTML dump to html_dump.txt, size:", len(html))
