# -*- coding: utf-8 -*-
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

# Find See You at Work Tomorrow and update to 12 episodes
updated = 0
for movie in m:
    if "See You at Work" in movie.get("titleTh", "") or "See You at Work" in movie.get("titleEn", ""):
        movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(12)]
        movie["duration"] = "12 ตอน"
        updated += 1

print(f"Updated See You at Work Tomorrow with 12 episodes ({updated} movies updated).")

# Also auto-update any other GOSERIES4K series that have "EP.1-XX" in description or name
for movie in m:
    if movie.get("source") == "GOSERIES4K":
        desc = movie.get("description", "")
        ep_match = re.search(r'EP\.1-(\d+)', desc, re.IGNORECASE)
        if ep_match:
            total_eps = int(ep_match.group(1))
            if total_eps > 1:
                movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(total_eps)]
                movie["duration"] = f"{total_eps} ตอน"

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พากย์ไทย 100%)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved clean js/movies.js with updated episodes count!")
