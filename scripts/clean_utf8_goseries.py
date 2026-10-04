# -*- coding: utf-8 -*-
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

for movie in m:
    # Clean titles
    title_th = movie.get("titleTh", "")
    clean_th = re.sub(r'\|.*$|- Goseries4k.*$|เว็บย้อนหลัง.*$|ตอนที่.*$|EP\.\d+.*$|\(จบ\)|ซับไทย|พากย์ไทย', '', title_th).strip()
    movie["titleTh"] = clean_th if clean_th else title_th
    movie["titleEn"] = clean_th if clean_th else title_th
    
    # Clean episodes array
    num_eps = len(movie.get("episodes", []))
    if num_eps > 1:
        movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(num_eps)]
    else:
        movie["episodes"] = ["ตอนที่ 1 (จบในตอน)"]
        
    movie["languages"] = ["Thai (พากย์ไทย)"]

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พากย์ไทย 100%)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Cleaned and saved js/movies.js UTF-8 successfully!")
