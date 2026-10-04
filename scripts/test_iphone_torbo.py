# -*- coding: utf-8 -*-
# ตรวจสอบการตอบสนองของเซิร์ฟเวอร์ torbo007 สำหรับ iOS Safari (iPhone)
import urllib.request
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Test standard headers
headers_iphone = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'th-TH,th;q=0.9,en;q=0.8',
}

headers_with_ref = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1',
    'Referer': 'https://goseries4k.com/',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
}

url = "https://torbo007.com/embed/2010b76496a7c8cfa2b9ad7835154388"

print("Testing iPhone Request WITHOUT Referer:")
try:
    req = urllib.request.Request(url, headers=headers_iphone)
    res = urllib.request.urlopen(req, timeout=10)
    print("Status:", res.getcode())
    print("Length:", len(res.read()))
except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code} {e.reason}")
except Exception as e:
    print("Error:", e)

print("\nTesting iPhone Request WITH Referer https://goseries4k.com/:")
try:
    req = urllib.request.Request(url, headers=headers_with_ref)
    res = urllib.request.urlopen(req, timeout=10)
    print("Status:", res.getcode())
    print("Length:", len(res.read()))
except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code} {e.reason}")
except Exception as e:
    print("Error:", e)
