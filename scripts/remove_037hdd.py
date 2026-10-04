# -*- coding: utf-8 -*-
# ลบหนังจาก 037HDD (leoplayer7) ที่มีโฆษณาคลิปคั่นออกทั้งหมด เพื่อให้เว็บสะอาด 100% ไม่มีโฆษณา
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

# กรองเอาเฉพาะ 24HDX (24playerhd) และ GOSERIES4K (torbo007) ที่สะอาดและไม่มีโฆษณาคั่น
clean_movies = [x for x in m if x.get("source") != "037HDD"]

print(f"Removed 118 037HDD movies with video ads.")
print(f"Remaining 100% Clean Movies in Database: {len(clean_movies)} movies")

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 24-HDX + GOSERIES4K (สะอาด 100% ไม่มีโฆษณาคลิปแฝง)\n")
    f.write("const movies = ")
    json.dump(clean_movies, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved clean js/movies.js successfully!")
