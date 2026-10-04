# -*- coding: utf-8 -*-
# เพิ่ม postId และ sourcePageUrl ให้กับ 24HDX movies ที่มี clean 24playerhd URL
import urllib.request
import re
import json
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.24-hdx.com/'
}

raw = open("js/movies.js", encoding='utf-8').read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

# เฉพาะ 24HDX ที่มี clean 24playerhd แต่ยังไม่มี postId
need_postid = [x for x in m if x.get('source') == '24HDX' and '24playerhd' in x.get('videoUrl', '') and not x.get('postId')]
print(f"Need to add postId for {len(need_postid)} 24HDX movies...")

# Re-scrape 24hdx page 1-4 for movie postIds
base_url = "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/"
postid_map = {}  # titleEn slug -> postId, sourcePageUrl

for page in range(1, 5):
    page_url = base_url if page == 1 else f"{base_url}page/{page}/"
    try:
        req = urllib.request.Request(page_url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
        
        links = re.findall(r'<a\s+href="(https?://www\.24-hdx\.com/[^"/]+/)"[^>]*>\s*<div[^>]*class="box-img"', html)
        links = list(set(links))
        
        for link in links:
            time.sleep(0.05)
            try:
                req2 = urllib.request.Request(link, headers=HEADERS)
                page_html = urllib.request.urlopen(req2, timeout=8).read().decode('utf-8', errors='ignore')
                
                postid_m = re.search(r'data-post-id="(\d+)"', page_html)
                if postid_m:
                    slug = link.rstrip('/').split('/')[-1]
                    postid_map[slug] = {
                        'postId': postid_m.group(1),
                        'sourcePageUrl': link
                    }
            except:
                pass
                
        print(f"Page {page}: scraped {len(postid_map)} total postIds so far")
    except Exception as e:
        print(f"Error page {page}: {e}")

print(f"Total postIds scraped: {len(postid_map)}")

# Match to movies by trying slug from sourcePageUrl or titleEn
matched = 0
for movie in m:
    if movie.get('source') == '24HDX' and '24playerhd' in movie.get('videoUrl', ''):
        slug = re.sub(r'[^a-z0-9]+', '-', movie.get('titleEn', '').lower()).strip('-')
        
        for map_slug, data in postid_map.items():
            if slug in map_slug or map_slug in slug:
                movie['postId'] = data['postId']
                movie['sourcePageUrl'] = data['sourcePageUrl']
                matched += 1
                break

print(f"Matched {matched} movies with postId")

# Save updated database
js = "// ฐานข้อมูลภาพยนตร์รวมจาก 2 เว็บไซต์ เฉพาะตัวเล่นวิดีโอสะอาด 100% (พร้อม postId สำหรับ EP switching)\n"
js += "const movies = " + json.dumps(m, ensure_ascii=False, indent=2) + ";\n"
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write(js)
print("Saved movies.js with postId data!")
