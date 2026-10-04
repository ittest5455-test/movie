# -*- coding: utf-8 -*-
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

for movie in m:
    # Fix episodes array
    num_eps = len(movie.get("episodes", []))
    if num_eps > 1:
        movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(num_eps)]
    else:
        movie["episodes"] = ["ตอนที่ 1 (จบในตอน)"]
        
    movie["languages"] = ["Thai (พากย์ไทย)", "Soundtrack (ซับไทย)"]

# Write with explicit utf-8 encoding
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 2 เว็บไซต์ เฉพาะตัวเล่นวิดีโอสะอาด 100% (พร้อม postId สำหรับ EP switching)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved clean UTF-8 movies.js successfully!")
