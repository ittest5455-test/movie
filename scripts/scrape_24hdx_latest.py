# -*- coding: utf-8 -*-
# สแกนและดึงหนังใหม่ล่าสุดจาก 24-HDX (ทั้งหมวดหมู่หนังใหม่ชนโรง หนัง 2026 ซีรีส์ใหม่)
import urllib.request
import urllib.parse
import re
import json
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.24-hdx.com/'
}

# 1. Load current database
raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))
existing_titles = set(x.get("titleTh", "").strip().lower() for x in m)
existing_urls = set(x.get("videoUrl", "") for x in m)

print(f"Current total movies in database: {len(m)}")

# 2. Pages to scrape from 24-hdx
pages_to_scrape = [
    "https://www.24-hdx.com/",
    "https://www.24-hdx.com/page/2/",
    "https://www.24-hdx.com/page/3/",
    "https://www.24-hdx.com/page/4/",
    "https://www.24-hdx.com/category/movie-2026/",
    "https://www.24-hdx.com/category/movie-2026/page/2/",
    "https://www.24-hdx.com/category/series-korea/",
    "https://www.24-hdx.com/category/series-china/",
    "https://www.24-hdx.com/category/series-inter/"
]

new_movies_found = []

for page_url in pages_to_scrape:
    try:
        time.sleep(0.1)
        req = urllib.request.Request(page_url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        
        # Extract movie cards
        articles = re.findall(r'<article[^>]*id="post-(\d+)"[^>]*>([\s\S]*?)</article>', html)
        if not articles:
            articles = re.findall(r'<div[^>]*class="[^"]*halim-item[^"]*"[^>]*>([\s\S]*?)</div>\s*</div>', html)
            
        print(f"Checking {page_url} -> found {len(articles)} items")
        
        # Regex for halim items
        items = re.findall(r'<a[^>]*href="([^"]+)"[^>]*title="([^"]+)"[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"', html)
        
        for link, title, poster in items:
            clean_title = re.sub(r'ดูหนังออนไลน์|ดูหนัง|HD|พากย์ไทย|ซับไทย|เต็มเรื่อง|\(2026\)|\(2025\)', '', title).strip()
            if not clean_title or clean_title.lower() in existing_titles:
                continue
                
            # Scrape movie page for clean videoUrl & post-id
            try:
                time.sleep(0.05)
                m_req = urllib.request.Request(link, headers=HEADERS)
                m_html = urllib.request.urlopen(m_req, timeout=8).read().decode('utf-8', errors='ignore')
                
                # Find post-id
                post_id_match = re.search(r'post-id="(\d+)"|post_id\s*=\s*(\d+)|name="postid"\s*value="(\d+)"|postid:\s*(\d+)', m_html)
                post_id = None
                if post_id_match:
                    post_id = [g for g in post_id_match.groups() if g][0]
                
                video_url = ""
                # Check for 24playerhd or clean player
                clean_player = re.search(r'src="(https?://[^"]*24playerhd\.com/[^"]+)"', m_html)
                if clean_player:
                    video_url = clean_player.group(1)
                elif post_id:
                    # Query API to get player
                    data = urllib.parse.urlencode({
                        'action': 'halim_ajax_player',
                        'nonce': '',
                        'episode': '1',
                        'server': '1',
                        'postid': str(post_id),
                        'lang': 'Thai',
                        'title': clean_title
                    }).encode('utf-8')
                    api_req = urllib.request.Request("https://api.24-hdx.com/get.php", data=data, headers=HEADERS)
                    res = urllib.request.urlopen(api_req, timeout=5).read().decode('utf-8', errors='ignore')
                    src_m = re.search(r'src="([^"]+)"', res)
                    if src_m and '24playerhd' in src_m.group(1):
                        video_url = src_m.group(1)
                
                if video_url and video_url not in existing_urls:
                    new_item = {
                        "titleTh": clean_title,
                        "titleEn": clean_title,
                        "year": 2026 if "2026" in title else 2025,
                        "poster": poster,
                        "backdrop": poster,
                        "videoUrl": video_url,
                        "sourceType": "embed",
                        "description": f"ดูหนัง {clean_title} ภาพคมชัดระดับ Full HD มาสเตอร์ ไม่มีโฆษณากวนใจ",
                        "rating": 8.5,
                        "genres": ["แอคชั่น", "แฟนตาซี Sci-Fi"],
                        "duration": "1 ชม. 55 นาที",
                        "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "cast": ["นักแสดงนำคุณภาพ"],
                        "source": "24HDX",
                        "episodes": ["ตอนที่ 1 (จบในตอน)"],
                        "languages": ["Thai (พากย์ไทย)"],
                        "id": f"24hdx-{post_id if post_id else len(m)+len(new_movies_found)+1}"
                    }
                    new_movies_found.append(new_item)
                    existing_titles.add(clean_title.lower())
                    existing_urls.add(video_url)
                    print(f"  + Added NEW Movie: {clean_title} -> {video_url[:50]}")
            except Exception as e:
                pass
    except Exception as e:
        print(f"Error reading page {page_url}: {e}")

print(f"\nTotal NEW movies found from 24-HDX: {len(new_movies_found)}")

if len(new_movies_found) > 0:
    # Insert new movies at the beginning of movies array (top priority)
    updated_movies = new_movies_found + m
    
    with open("js/movies.js", "w", encoding="utf-8") as f:
        f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (อัปเดตหนังใหม่สดล่าสุด 24-HDX 100%)\n")
        f.write("const movies = ")
        json.dump(updated_movies, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print(f"Saved updated js/movies.js with {len(updated_movies)} total movies!")
