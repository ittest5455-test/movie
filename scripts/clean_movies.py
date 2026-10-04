# -*- coding: utf-8 -*-
import json
import re

with open("js/movies.js", "r", encoding="utf-8") as f:
    text = f.read()

# Extract json array from `const movies = [...];`
match = re.search(r'const movies = (\[.*\]);', text, re.DOTALL)
if match:
    movies_data = json.loads(match.group(1))
    print("Initial movies count:", len(movies_data))
    
    clean_movies = []
    for m in movies_data:
        video_url = m.get("videoUrl", "")
        # Filter out face.php, fb-comments, or comment form embeds
        if "face.php" in video_url or "comment" in video_url or not video_url.startswith("http"):
            continue
        clean_movies.append(m)
        
    print("Clean movies count (no comments widget):", len(clean_movies))
    
    js_content = "// ฐานข้อมูลภาพยนตร์ปี 2026 (พากย์ไทย เรตติ้ง 5.0+ สตรีมวิดีโอแท้ 100% ไร้หน้าจอความคิดเห็น)\n"
    js_content += "const movies = " + json.dumps(clean_movies, ensure_ascii=False, indent=2) + ";\n"
    
    with open("js/movies.js", "w", encoding="utf-8") as f_out:
        f_out.write(js_content)
        
    print("Updated js/movies.js successfully!")
