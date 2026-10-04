# -*- coding: utf-8 -*-
# ทดสอบยิง API ไปที่ torbo007.com/api/v2/stream/e963f04ecfa7cf397bdb6768f74ce448 เพื่อดูว่ามี playlist หรือ episodes data หรือไม่
import urllib.request
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://goseries4k.com/'
}

url = "https://torbo007.com/api/v2/stream/e963f04ecfa7cf397bdb6768f74ce448?parent=goseries4k.com"

req = urllib.request.Request(url, headers=HEADERS)
try:
    res = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
    data = json.loads(res)
    print("API Data Keys:", list(data.keys()))
    print("Title:", data.get("title"))
    print("Full Data:", json.dumps(data, ensure_ascii=False, indent=2))
except Exception as e:
    print("Error:", e)
