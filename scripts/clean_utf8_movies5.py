# -*- coding: utf-8 -*-
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

for movie in m:
    title_th = movie.get("titleTh", "")
    clean_th = re.sub(r'\|.*$|- Goseries4k.*$|เว็บย้อนหลัง.*$|ตอนที่.*$|EP\.\d+.*$|\(จบ\)|ซับไทย|พากย์ไทย', '', title_th).strip()
    movie["titleTh"] = clean_th if clean_th else title_th
    movie["titleEn"] = clean_th if clean_th else title_th

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พากย์ไทย 100% ตรงตามรูป)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Cleaned titles and saved UTF-8 js/movies.js successfully!")
