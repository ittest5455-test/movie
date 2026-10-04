# -*- coding: utf-8 -*-
import json
import re
import html
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/f1_page.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect title
title_th = "F1 เดอะ มูฟวี่ (F1)"
title_en = "F1"
year = 2025
poster = "https://2499hdonline.com/wp-content/uploads/2026/05/ay692ZQp13BSe3IUUXAoGsr82YB.jpg"
backdrop = poster
post_id = "911430"
player_url = f"https://play.gan-play.com/embed/fasthd.php?key=2499hdonline&id={post_id}&ep=&type="
trailer_url = "https://www.youtube.com/embed/ge_ABjtYx88"

# Check cast
cast_match = re.search(r'นักแสดง:\s*([^<\n]+)', text)
if cast_match:
    cast_raw = cast_match.group(1)
    cast_list = [c.strip() for c in cast_raw.split(',') if c.strip()]
else:
    cast_list = ["แบรด พิตต์", "Damson Idris", "ฆาบิเอร์ บาร์เดม", "เคร์รี คอนดัน", "Tobias Menzies"]

print("Cast:", cast_list)

# Description from movie synopsis
desc = (
    "เรื่องย่อ F1 (2025) F1 เดอะ มูฟวี่: ภาพยนตร์แอคชั่นความเร็วสูงระดับโลก ถ่ายทอดความดุเดือดของการแข่งขัน Formula 1 "
    "นำแสดงโดย แบรด พิตต์ รับบทเป็น ซอนนี่ เฮย์ส อดีตนักแข่ง F1 ฝีมือฉกาจในยุค 90 ที่หวนคืนสู่วงการเพื่อเป็นพี่เลี้ยงและลงแข่งร่วมทีมกับนักแข่งรุ่นน้องดาวรุ่ง โจชัว เพียร์ซ (Damson Idris) "
    "เพื่อพาทีม APXGP คว้าชัยชนะในสนามแข่งที่อันตรายและเดิมพันด้วยชีวิต"
)

movie_obj = {
    "titleTh": "F1 (2025) F1 เดอะ มูฟวี่",
    "titleEn": "F1",
    "year": 2025,
    "poster": poster,
    "backdrop": backdrop,
    "videoUrl": player_url,
    "sourceType": "embed",
    "description": desc,
    "rating": 8.4,
    "genres": ["พากย์ไทย", "2499HD", "หนังใหม่ 2025", "ข้าม Intro", "ดูต่อได้", "แอคชั่น", "ดราม่า", "กีฬา"],
    "duration": "2 ชม. 36 นาที",
    "trailerUrl": trailer_url,
    "cast": cast_list[:5],
    "source": "2499HD",
    "episodes": ["เต็มเรื่อง"],
    "episodeUrls": {
        "1": player_url
    },
    "languages": ["Thai (พากย์ไทย)"],
    "id": f"2499-{post_id}",
    "postId": post_id,
    "originalUrl": "https://2499hdonline.com/f1-2025/"
}

print(json.dumps(movie_obj, ensure_ascii=False, indent=2))

with open("scripts/f1_movie.json", "w", encoding="utf-8") as f:
    json.dump(movie_obj, f, ensure_ascii=False, indent=2)
