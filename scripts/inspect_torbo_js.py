# -*- coding: utf-8 -*-
import urllib.request
import sys

sys.stdout.reconfigure(encoding='utf-8')

req = urllib.request.Request("https://torbo007.com/assets/js/initvpla-v1.js", headers={
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15',
    'Referer': 'https://torbo007.com/'
})
js = urllib.request.urlopen(req).read().decode('utf-8')
print("initvpla-v1.js content:")
print(js)
