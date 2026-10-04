# -*- coding: utf-8 -*-
# ตรวจสอบโครงสร้าง AJAX player ของ GOSERIES4K เพื่อดูว่าส่ง episode parameter ยังไง
import urllib.request
import urllib.parse
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://goseries4k.com/see-you-at-work-tomorrow/'
}

# Post ID 126426 for See You at Work Tomorrow
api_url = "https://goseries4k.com/wp-admin/admin-ajax.php"

for ep in range(1, 5):
    data = urllib.parse.urlencode({
        'action': 'halim_ajax_player',
        'nonce': '',
        'episode': str(ep),
        'server': '1',
        'postid': '126426',
        'lang': 'Thai',
        'title': 'See You at Work Tomorrow'
    }).encode('utf-8')
    
    try:
        req = urllib.request.Request(api_url, data=data, headers=HEADERS)
        res = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
        iframe_m = re.search(r'src="([^"]+)"', res)
        print(f"EP {ep} AJAX Response -> Iframe:", iframe_m.group(1) if iframe_m else "No iframe", "Raw:", res[:100])
    except Exception as e:
        print(f"EP {ep} Error:", e)
