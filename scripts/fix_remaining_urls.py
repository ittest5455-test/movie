# -*- coding: utf-8 -*-
# ดึงเฉพาะ 24HDX ที่ยังเป็น page URL - ลองใหม่อีกครั้ง
import urllib.request
import urllib.parse
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.24-hdx.com/'
}

# โหลด movies.js ปัจจุบัน
raw = open("js/movies.js", encoding='utf-8').read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

still_page = [x for x in m if x.get('source') == '24HDX' and '24playerhd' not in x.get('videoUrl', '')]
print(f"Retrying {len(still_page)} movies that still have Page URL...")

def get_clean_player(movie_url):
    try:
        req = urllib.request.Request(movie_url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
        postid_m = re.search(r'data-post-id="(\d+)"', html)
        if not postid_m:
            return None
        postid = postid_m.group(1)
        api_url = "https://api.24-hdx.com/get.php"
        data = urllib.parse.urlencode({
            'action': 'halim_ajax_player',
            'nonce': '',
            'episode': '1',
            'server': '1',
            'postid': postid,
            'lang': 'Thai',
            'title': 'Movie'
        }).encode('utf-8')
        req_api = urllib.request.Request(api_url, data=data, headers=HEADERS)
        res_api = urllib.request.urlopen(req_api, timeout=8).read().decode('utf-8', errors='ignore')
        iframe_m = re.search(r'src="([^"]+)"', res_api)
        if iframe_m:
            return iframe_m.group(1)
    except Exception as e:
        pass
    return None

fixed = 0
for movie in m:
    if movie.get('source') == '24HDX' and '24playerhd' not in movie.get('videoUrl', ''):
        new_url = get_clean_player(movie['videoUrl'])
        if new_url and '24playerhd' in new_url:
            movie['videoUrl'] = new_url
            fixed += 1
            print(f"Fixed: {movie['titleTh']} -> {new_url[:60]}")
        else:
            print(f"Skipped (no clean URL): {movie['titleTh']}")

print(f"\nFixed {fixed} movies. Saving...")
js_content = "// ฐานข้อมูลภาพยนตร์รวมจาก 2 เว็บไซต์ (037hddmovies + 24-hdx) เฉพาะตัวเล่นวิดีโอสะอาด 100%\n"
js_content += "const movies = " + json.dumps(m, ensure_ascii=False, indent=2) + ";\n"
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write(js_content)
print("Done!")
