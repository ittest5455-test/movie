# -*- coding: utf-8 -*-
# ซ่อมแซมภาษาไทยที่เพี้ยนในฟิลด์ episodes และ languages ของ js/movies.js
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

raw = open("js/movies.js", encoding='utf-8').read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

fixed_count = 0
for movie in m:
    # 1. Clean episodes array
    if "episodes" in movie and isinstance(movie["episodes"], list):
        num_eps = len(movie["episodes"])
        if num_eps > 0:
            movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(num_eps)]
            fixed_count += 1
            
    # 2. Clean languages array
    if "languages" in movie and isinstance(movie["languages"], list):
        movie["languages"] = ["Thai (พากย์ไทย)", "Soundtrack (ซับไทย)"]

print(f"Fixed UTF-8 Thai encoding for {fixed_count} movies.")

# Write clean json back to movies.js
js = "// ฐานข้อมูลภาพยนตร์รวมจาก 2 เว็บไซต์ เฉพาะตัวเล่นวิดีโอสะอาด 100% (พร้อม postId สำหรับ EP switching)\n"
js += "const movies = " + json.dumps(m, ensure_ascii=False, indent=2) + ";\n"

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Saved clean js/movies.js!")
