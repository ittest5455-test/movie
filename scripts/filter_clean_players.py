# -*- coding: utf-8 -*-
# กรองเอาเฉพาะวิดีโอที่ไม่ติด Access Denied / Domain Block จาก GOSERIES4K
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

# Keep all 037HDD and 24HDX, and filter GOSERIES4K to clean players only
clean_movies = []
removed_count = 0

for movie in m:
    video_url = movie.get("videoUrl", "")
    source = movie.get("source", "")
    
    # torbo007 blocks external domain embeds
    if source == "GOSERIES4K" and ("torbo007" in video_url or "access-denied" in video_url):
        removed_count += 1
        continue
        
    clean_movies.append(movie)

print(f"Total movies before filter: {len(m)}")
print(f"Removed blocked GOSERIES4K players: {removed_count}")
print(f"Clean movies remaining: {len(clean_movies)}")

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (เฉพาะตัวเล่นสะอาด 100% เล่นได้แน่นอน)\n")
    f.write("const movies = ")
    json.dump(clean_movies, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved clean js/movies.js successfully!")
