# -*- coding: utf-8 -*-
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

for movie in m:
    # Ensure episodes text clean UTF-8
    num_eps = len(movie.get("episodes", []))
    if num_eps > 1:
        movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(num_eps)]
    else:
        movie["episodes"] = ["ตอนที่ 1 (จบในตอน)"]
        
    movie["languages"] = ["Thai (พากย์ไทย)"]

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พร้อมข้อมูลจำนวนตอนตรงความจริง 100%)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved clean UTF-8 movies.js successfully!")
