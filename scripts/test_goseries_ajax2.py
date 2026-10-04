# -*- coding: utf-8 -*-
# ทดสอบยิง API ไปที่ goseries4k.com/wp-admin/admin-ajax.php สำหรับเรื่อง See You at Work Tomorrow (postid 126426)
import urllib.request
import urllib.parse
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://goseries4k.com/see-you-at-work-tomorrow/'
}

url = "https://goseries4k.com/wp-admin/admin-ajax.php"

for ep in range(1, 13):
    data = urllib.parse.urlencode({
        'action': 'halim_ajax_player',
        'nonce': '',
        'episode': str(ep),
        'server': '1',
        'postid': '126426',
        'lang': 'Thai'
    }).encode('utf-8')
    
    try:
        req = urllib.request.Request(url, data=data, headers=HEADERS)
        res = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
        src = re.search(r'src="([^"]+)"', res)
        print(f"EP {ep}: {src.group(1) if src else res[:80]}")
    except Exception as e:
        print(f"EP {ep} Error:", e)
