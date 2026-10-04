# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers_iphone = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1',
    'Referer': 'https://free-moviesnew.pages.dev/'
}

url = "https://torbo007.com/embed/2010b76496a7c8cfa2b9ad7835154388"
req = urllib.request.Request(url, headers=headers_iphone)
html = urllib.request.urlopen(req).read().decode('utf-8')
print("torbo007 HTML:")
print(html)

m3u8_list = re.findall(r'https?://[^\s"\'<>]+\.m3u8[^\s"\'<>]*', html)
print("\nm3u8 streams found:", m3u8_list)

for m in m3u8_list:
    try:
        # Test request with Pages referer
        r = urllib.request.Request(m, headers={'User-Agent': headers_iphone['User-Agent'], 'Referer': 'https://free-moviesnew.pages.dev/'})
        res = urllib.request.urlopen(r)
        print("m3u8 from Pages Referer:", res.getcode())
    except urllib.error.HTTPError as e:
        print("m3u8 with Pages Referer -> HTTP Error:", e.code, e.reason)
        
    try:
        # Test request with NO referer
        r = urllib.request.Request(m, headers={'User-Agent': headers_iphone['User-Agent']})
        res = urllib.request.urlopen(r)
        print("m3u8 with NO Referer:", res.getcode())
    except urllib.error.HTTPError as e:
        print("m3u8 with NO Referer -> HTTP Error:", e.code, e.reason)
