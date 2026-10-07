# -*- coding: utf-8 -*-
# กรองและคืนค่ารายการตอนพากย์ไทยย่อยจริงของ GOSERIES4K จาก miru_ep_cache ล่าสุด
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

# For See You at Work Tomorrow: 12 episodes exactly as extracted from miru_ep_cache
see_you_12_urls = {
  "1": "https://torbo007.com/embed/e963f04ecfa7cf397bdb6768f74ce448",
  "2": "https://torbo007.com/embed/4ea64e01373499eb00d440a8d432c3d8",
  "3": "https://torbo007.com/embed/2656a4a0dbda98e2f411789816772c4c",
  "4": "https://torbo007.com/embed/fab3b1bf7e25aeccd911b1dee1607fb3",
  "5": "https://torbo007.com/embed/100e285aaadef01c73e0a884bd659a0d",
  "6": "https://torbo007.com/embed/4e3313c77a1528afb77679543e15f57f",
  "7": "https://torbo007.com/embed/3cf2d0b1feda3c07c6724ee7f06486ec",
  "8": "https://torbo007.com/embed/414339d8cc322ead629f269451824227",
  "9": "https://torbo007.com/embed/74a7d94436ed6e1d5ccbe0adfe146690",
  "10": "https://torbo007.com/embed/595637cd42616013418f4e456b98d403",
  "11": "https://torbo007.com/embed/fdec21c170b76a08520fe44e0136684f",
  "12": "https://torbo007.com/embed/949882d93d7a2794fd1af50a2ef861bd"
}

for movie in m:
    if "See You at Work" in movie.get("titleTh", "") or "See You at Work" in movie.get("titleEn", ""):
        movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(12)]
        movie["episodeUrls"] = see_you_12_urls
        movie["duration"] = "12 ตอน"
        print("Restored 12 episodes for See You at Work Tomorrow!")

with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พร้อมวิดีโอตอนย่อยครบ 12 ตอนพากย์ไทย 100%)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved updated js/movies.js successfully!")
