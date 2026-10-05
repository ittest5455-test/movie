# -*- coding: utf-8 -*-
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
match = re.search(r'(?:window\.|const\s+|var\s+|let\s+)?movies\s*=\s*(\[[\s\S]*?\]);', raw)
if not match:
    match = re.search(r'(\[[\s\S]*\])', raw)
m = json.loads(match.group(1)) if match else []

for movie in m:
    # Fix titles
    title_th = movie.get("titleTh", "")
    title_en = movie.get("titleEn", "")
    
    # Clean non-ascii out of titles if broken
    clean_th = re.sub(r'[\xFF-\xFF]+', '', title_th).strip()
    clean_en = re.sub(r'[\xFF-\xFF]+', '', title_en).strip()
    
    # Split by double space to clean up
    movie["titleTh"] = clean_th.split('  ')[0].strip()
    movie["titleEn"] = clean_en.split('  ')[0].strip()
    
    # Ensure episodes & languages exist
    if not movie.get("episodes"):
        movie["episodes"] = ["ตอนที่ 1 (จบในตอน)"]
        
    if not movie.get("languages"):
        movie["languages"] = ["Thai (พากย์ไทย)"]

js = "// ฐานข้อมูลภาพยนตร์รวม 24-HD, GOSERIES4K, WOW-DRAMA และ 2499HD ปี 2026 พากย์ไทย\n"
js += "window.movies = " + json.dumps(m, ensure_ascii=False, indent=2) + ";\nvar movies = window.movies;\n"

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Saved clean UTF-8 movies.js!")
