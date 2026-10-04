# -*- coding: utf-8 -*-
# กรองเอาเฉพาะ พากย์ไทย (6 EP ครึ่งหลังของ 12 รายการ) สำหรับซีรีส์ที่มี 12 EP ใน GOSERIES4K
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

fixed_count = 0

for movie in m:
    if movie.get("source") == "GOSERIES4K":
        ep_urls = movie.get("episodeUrls", {})
        total_items = len(ep_urls)
        
        # If total items is even (e.g. 12 items = 6 sub + 6 thai dubbed)
        if total_items >= 2 and total_items % 2 == 0:
            half = total_items // 2
            
            # Take second half for Thai Dubbed (พากย์ไทย 6 EP ด้านล่างจากรูป)
            thai_dubbed_urls = {}
            for i in range(1, half + 1):
                orig_index = str(half + i)
                if orig_index in ep_urls:
                    thai_dubbed_urls[str(i)] = ep_urls[orig_index]
                else:
                    thai_dubbed_urls[str(i)] = ep_urls.get(str(i), "")
                    
            movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(half)]
            movie["episodeUrls"] = thai_dubbed_urls
            movie["duration"] = f"{half} ตอน (พากย์ไทย)"
            fixed_count += 1
            print(f"Filtered Thai Dubbed ({half} EPs) for: {movie['titleTh'][:40]}")

print(f"\nFiltered exact Thai Dubbed episodes for {fixed_count} GOSERIES4K series!")

# Save clean UTF-8 movies.js
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (เฉพาะพากย์ไทย 100% ตรงจากขอบล่างตามรูป)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved clean js/movies.js successfully!")
