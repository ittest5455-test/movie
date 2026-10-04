# -*- coding: utf-8 -*-
import urllib.request

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

url = "https://main.24playerhd.com/index_th.php?id=e6283aa67cf9802ed9c1a2b6&b=5571"
try:
    req = urllib.request.Request(url, headers=HEADERS)
    res = urllib.request.urlopen(req)
    print("Status:", res.getcode())
    html = res.read().decode('utf-8', errors='ignore')
    print("Length:", len(html))
    print("Title or Player HTML snippet:", html[:500])
except Exception as e:
    print("Error:", e)
