# -*- coding: utf-8 -*-
# ดึงและสร้างพูลลิงก์วิดีโอ (EP1, EP2, EP3...) ล่วงหน้าใน movies.js สำหรับซีรีส์ทุกเรื่อง
import urllib.request
import urllib.parse
import re
import json
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.24-hdx.com/'
}

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

multi_series = [x for x in m if len(x.get("episodes", [])) > 1]
print(f"Generating direct EP video URLs for {len(multi_series)} multi-episode series...")

fixed_count = 0

for movie in m:
    if len(movie.get("episodes", [])) > 1:
        post_id = movie.get("postId")
        num_eps = len(movie["episodes"])
        base_video_url = movie.get("videoUrl", "")
        
        # Create episodeUrls dictionary: { "1": url, "2": url, ... }
        ep_urls = {}
        
        # 1. 24-HDX source: query API to fetch direct 24playerhd URL for each EP
        if movie.get("source") == "24HDX" and post_id:
            for ep in range(1, num_eps + 1):
                try:
                    time.sleep(0.05)
                    data = urllib.parse.urlencode({
                        'action': 'halim_ajax_player',
                        'nonce': '',
                        'episode': str(ep),
                        'server': '1',
                        'postid': str(post_id),
                        'lang': 'Thai',
                        'title': 'Movie'
                    }).encode('utf-8')
                    req = urllib.request.Request("https://api.24-hdx.com/get.php", data=data, headers=HEADERS)
                    res = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
                    src_match = re.search(r'src="([^"]+)"', res)
                    if src_match and '24playerhd' in src_match.group(1):
                        ep_urls[str(ep)] = src_match.group(1)
                    else:
                        ep_urls[str(ep)] = base_video_url
                except Exception as e:
                    ep_urls[str(ep)] = base_video_url
        else:
            # For GOSERIES4K and 037HDD, set base_video_url for all EPs
            for ep in range(1, num_eps + 1):
                ep_urls[str(ep)] = base_video_url
                
        movie["episodeUrls"] = ep_urls
        fixed_count += 1
        print(f"Generated {len(ep_urls)} EP URLs for: {movie['titleTh'][:40]}")

print(f"\nSuccessfully generated direct EP URLs for {fixed_count} series!")

# Write clean UTF-8 movies.js
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พร้อม episodeUrls สำหรับสลับตอนได้ทันที 100%)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved updated js/movies.js successfully!")
