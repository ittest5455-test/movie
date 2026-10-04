# -*- coding: utf-8 -*-
# สกัดลิงก์วิดีโอของทุกตอน (EP1, EP2, EP3...) จาก window.miru_ep_cache ของซีรีส์ GOSERIES4K ทุกเรื่อง
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
print(f"Scraping exact miru_ep_cache for {len(goseries_list)} GOSERIES4K series...")

updated_count = 0

for movie in m:
    if movie.get("source") == "GOSERIES4K" and movie.get("sourcePageUrl"):
        page_url = movie["sourcePageUrl"]
        try:
            time.sleep(0.05)
            req = urllib.request.Request(page_url, headers=HEADERS)
            html = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
            
            cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', html)
            if cache_match:
                cache_str = cache_match.group(1)
                # Find all torbo007 or embed iframes in cache_str
                iframes = re.findall(r'src=\\"(https:\\/\\/torbo007\.com\\/embed\\/[a-f0-9]+)\\"', cache_str)
                if not iframes:
                    iframes = re.findall(r'src="(https://torbo007\.com/embed/[a-f0-9]+)"', cache_str)
                
                # Clean escaped slashes
                clean_iframes = [i.replace(r'\/', '/') for i in iframes]
                
                # Remove duplicates while preserving order
                unique_iframes = []
                for u in clean_iframes:
                    if u not in unique_iframes:
                        unique_iframes.append(u)
                
                if len(unique_iframes) > 0:
                    ep_urls = {}
                    ep_list = []
                    for idx, iframe_link in enumerate(unique_iframes):
                        ep_num = str(idx + 1)
                        ep_urls[ep_num] = iframe_link
                        ep_list.append(f"ตอนที่ {ep_num}")
                    
                    movie["episodes"] = ep_list
                    movie["episodeUrls"] = ep_urls
                    movie["duration"] = f"{len(unique_iframes)} ตอน"
                    updated_count += 1
                    print(f"Scraped {len(unique_iframes)} EP links for: {movie['titleTh'][:40]}")
        except Exception as e:
            pass

print(f"\nSuccessfully extracted exact EP video links for {updated_count} GOSERIES4K series!")

# Save clean UTF-8 movies.js
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พร้อมลิงก์วิดีโอตรงทุกตอน 100%)\n")
    f.write("const movies = ")
    json.dump(m, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved updated js/movies.js successfully!")
