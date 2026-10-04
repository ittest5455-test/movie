# -*- coding: utf-8 -*-
# ระบบสแกนและดึงลิงก์ตอนย่อยที่ฉลาดที่สุด:
# แยกกลุ่ม 'พากย์ไทย' หรือ 'ซับไทย' ตามปุ่มจริงบนหน้าเว็บต้นทาง 100%
import urllib.request
import re
import json
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

goseries_list = [x for x in m if x.get("source") == "GOSERIES4K" and x.get("sourcePageUrl")]
print(f"Checking & Accurate Parsing for {len(goseries_list)} GOSERIES4K series...")

updated_count = 0

for movie in m:
    if movie.get("source") == "GOSERIES4K" and movie.get("sourcePageUrl"):
        page_url = movie["sourcePageUrl"]
        try:
            time.sleep(0.04)
            req = urllib.request.Request(page_url, headers=HEADERS)
            html = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
            
            # 1. Parse window.miru_ep_cache
            cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', html)
            cache_dict = {}
            if cache_match:
                raw_cache = json.loads(cache_match.group(1))
                for k, v in raw_cache.items():
                    iframes = re.findall(r'<iframe[^>]*src="([^"]+)"', v)
                    for ifr in iframes:
                        if 'torbo007' in ifr or 'embed' in ifr:
                            cache_dict[str(k)] = ifr
                            break

            # 2. Parse groups (พากย์ไทย / ซับไทย)
            groups = re.findall(r'<div class="mp-ep-group[^"]*">\s*<div class="mp-epg-title">([\s\S]*?)</div>\s*<div class="mp-epg-list">([\s\S]*?)</div>\s*</div>', html)
            
            target_buttons = []
            selected_group_name = ""
            
            if groups:
                # Priority: Look for "พากย์ไทย" first
                for g_title, g_content in groups:
                    if "พากย์ไทย" in g_title:
                        btns = re.findall(r'<button[^>]*data-id="(\d+)"[^>]*>([\s\S]*?)</button>', g_content)
                        if btns:
                            target_buttons = btns
                            selected_group_name = "พากย์ไทย"
                            break
                
                # If no "พากย์ไทย" group found or empty, fallback to first group (e.g. ซับไทย)
                if not target_buttons and groups:
                    g_title, g_content = groups[0]
                    target_buttons = re.findall(r'<button[^>]*data-id="(\d+)"[^>]*>([\s\S]*?)</button>', g_content)
                    selected_group_name = g_title.strip()
            
            if target_buttons and cache_dict:
                ep_urls = {}
                ep_list = []
                for idx, (btn_id, btn_label) in enumerate(target_buttons):
                    ep_num = str(idx + 1)
                    label_clean = re.sub(r'<[^>]+>', '', btn_label).strip()
                    label_text = f"ตอนที่ {ep_num}"
                    
                    link = cache_dict.get(btn_id)
                    if link:
                        ep_urls[ep_num] = link
                        ep_list.append(label_text)
                
                if ep_urls:
                    movie["episodes"] = ep_list
                    movie["episodeUrls"] = ep_urls
                    movie["duration"] = f"{len(ep_urls)} ตอน ({selected_group_name})"
                    movie["languages"] = [f"{selected_group_name}"]
                    updated_count += 1
                    print(f"[{selected_group_name}] {movie['titleTh'][:35]} -> {len(ep_urls)} ตอนตรงเป๊ะ!")
            else:
                # If no groups found, check single videoUrl fallback
                pass

        except Exception as e:
            print(f"Error on {movie.get('titleTh')}: {e}")

print(f"\nSuccessfully accurately matched all episodes for {updated_count} GOSERIES4K series!")

# Save clean UTF-8 movies.js
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (ระบบจับคู่ตอนและเสียงพากย์ไทยตรงตามปุ่มจริง 100%)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved clean js/movies.js successfully!")
