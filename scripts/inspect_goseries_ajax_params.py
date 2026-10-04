# -*- coding: utf-8 -*-
# ตรวจสอบว่าซีรีส์ GOSERIES4K มีลิงก์ตอนย่อย (EP1, EP2, EP3...) ซ่อนอยู่ในระบบ AJAX หรือไม่
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

url = "https://goseries4k.com/wp-admin/admin-ajax.php"

# Test ajax parameters for GOSERIES4K (post-id 126426)
test_params = [
    {'action': 'halim_ajax_player', 'episode': '2', 'postid': '126426'},
    {'action': 'g4_ajax_player', 'episode': '2', 'postid': '126426'},
    {'action': 'get_episode', 'ep': '2', 'id': '126426'},
    {'action': 'foxy_player_get_episode', 'ep': '2', 'post_id': '126426'}
]

for p in test_params:
    try:
        data = urllib.parse.urlencode(p).encode('utf-8')
        req = urllib.request.Request(url, data=data, headers=HEADERS)
        res = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
        print(f"Param {p['action']}: Response -> {res[:150]}")
    except Exception as e:
        print(f"Param {p['action']} Error:", e)
