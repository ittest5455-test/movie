# -*- coding: utf-8 -*-
# ทำความสะอาดข้อมูลซีรีส์ GOSERIES4K ให้ตรงความจริง:
# ถ้าเว็บต้นทางมีตัวเล่น iframe แค่ตัวเดียว ให้ระบุ episodes = ["ตอนที่ 1 (จบในตอน)"] เพื่อไม่ให้ดรอปดาวน์หลอกว่ามี EP2, EP3
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

fixed_count = 0
for movie in m:
    if movie.get("source") == "GOSERIES4K":
        # Check if episodeUrls are all identical to base videoUrl
        ep_urls = movie.get("episodeUrls", {})
        unique_urls = set(ep_urls.values()) if ep_urls else set()
        
        # If GOSERIES4K only provided 1 unique videoUrl, set episodes to single EP
        if len(unique_urls) <= 1:
            movie["episodes"] = ["ตอนที่ 1 (จบในตอน)"]
            movie["duration"] = "ภาพยนตร์ / ซีรีส์"
            movie["episodeUrls"] = { "1": movie.get("videoUrl", "") }
            fixed_count += 1

print(f"Fixed {fixed_count} GOSERIES4K items to show accurate single EP!")

# Save clean UTF-8 movies.js
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พร้อมข้อมูลจำนวนตอนตรงความจริง 100%)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved clean js/movies.js successfully!")
