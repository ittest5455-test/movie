# -*- coding: utf-8 -*-
# ดึง postId สำหรับซีรีส์ทุกเรื่องที่มีหลาย EP ที่ยังไม่มี postId
import urllib.request
import re
import json
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

missing_postid = [x for x in m if len(x.get("episodes", [])) > 1 and not x.get("postId")]
print(f"Scraping postId for {len(missing_postid)} multi-episode series...")

fixed = 0
for movie in m:
    if len(movie.get("episodes", [])) > 1 and not movie.get("postId"):
        page_url = movie.get("sourcePageUrl")
        if page_url:
            try:
                time.sleep(0.05)
                req = urllib.request.Request(page_url, headers=HEADERS)
                html = urllib.request.urlopen(req, timeout=6).read().decode('utf-8', errors='ignore')
                postid_m = re.search(r'data-post-id="(\d+)"', html)
                if not postid_m:
                    postid_m = re.search(r'data-id="(\d+)"', html)
                if postid_m:
                    movie["postId"] = postid_m.group(1)
                    fixed += 1
                    print(f"Found postId {postid_m.group(1)} for: {movie['titleTh'][:40]}")
            except Exception as e:
                pass

print(f"\nFixed {fixed} series with new postId!")

# Save clean UTF-8 movies.js
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พร้อม postId สำหรับสลับตอน EP1-EPจบ)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved updated js/movies.js successfully!")
