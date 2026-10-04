# -*- coding: utf-8 -*-
import json
import re

raw = open("js/movies.js", encoding='utf-8').read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

for movie in m:
    # Fix titles
    title_th = movie.get("titleTh", "")
    title_en = movie.get("titleEn", "")
    
    # Clean non-ascii out of titles if broken
    clean_th = re.sub(r'[\xFF-\xFF]+', '', title_th).strip()
    clean_en = re.sub(r'[\xFF-\xFF]+', '', title_en).strip()
    
    # Split by double space to clean up
    movie["titleTh"] = title_th.split('  ')[0].strip()
    movie["titleEn"] = title_en.split('  ')[0].strip()
    
    # Episodes & languages clean UTF-8
    num_eps = len(movie.get("episodes", []))
    if num_eps > 0:
        movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(num_eps)]
    else:
        movie["episodes"] = ["ตอนที่ 1 (จบในตอน)"]
        
    movie["languages"] = ["Thai (พากย์ไทย)", "Soundtrack (ซับไทย)"]

js = "// ฐานข้อมูลภาพยนตร์รวมจาก 2 เว็บไซต์ เฉพาะตัวเล่นวิดีโอสะอาด 100% (พร้อม postId สำหรับ EP switching)\n"
js += "const movies = " + json.dumps(m, ensure_ascii=False, indent=2) + ";\n"

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Saved clean UTF-8 movies.js!")
