# -*- coding: utf-8 -*-
# ค้นหาและดึงจำนวนตอนย่อย (episodes) ของซีรีส์ทั้งหมดในฐานข้อมูล
import urllib.request
import re
import json
import html
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

updated_count = 0

for movie in m:
    # Check if movie source has page url to scrape episode count
    page_url = movie.get("sourcePageUrl")
    if not page_url and movie.get("source") == "037HDD":
        continue
        
    if page_url:
        try:
            time.sleep(0.02)
            req = urllib.request.Request(page_url, headers=HEADERS)
            page_html = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
            
            # Find select options for episodes (e.g. 24-HDX, GOSERIES4K, etc.)
            eps = re.findall(r'<option[^>]*>([\s\S]*?)</option>', page_html)
            
            # Filter options that are episode numbers
            ep_list = []
            for ep in eps:
                clean_ep = re.sub(r'<[^>]+>', '', ep).strip()
                if 'ตอนที่' in clean_ep or 'EP' in clean_ep or clean_ep.isdigit():
                    ep_list.append(clean_ep)
                    
            if len(ep_list) > 1:
                movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(len(ep_list))]
                movie["duration"] = f"{len(ep_list)} ตอน"
                updated_count += 1
                print(f"Updated: {movie['titleTh']} -> {len(ep_list)} ตอน")
            elif "EP.1-" in page_html or "ตอนที่ 1-" in page_html:
                m_num = re.search(r'(?:EP|ตอนที่)\.1-(\d+)', page_html, re.IGNORECASE)
                if m_num:
                    num_total = int(m_num.group(1))
                    movie["episodes"] = [f"ตอนที่ {i+1}" for i in range(num_total)]
                    movie["duration"] = f"{num_total} ตอน"
                    updated_count += 1
                    print(f"Updated (from text): {movie['titleTh']} -> {num_total} ตอน")
        except Exception as e:
            pass

print(f"\nUpdated episode lists for {updated_count} series!")

# Save clean UTF-8 movies.js
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พากย์ไทย 100%)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved updated js/movies.js successfully!")
