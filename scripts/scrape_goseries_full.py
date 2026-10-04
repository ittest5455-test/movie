# -*- coding: utf-8 -*-
import urllib.request
import re
import json
import html
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://goseries4k.com/'
}

category_urls = [
    "https://goseries4k.com/cat_category/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%88%e0%b8%b5%e0%b8%99%e0%b8%9e%e0%b8%b2%e0%b8%81%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%97%e0%b8%a2/",
    "https://goseries4k.com/cat_category/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%80%e0%b8%81%e0%b8%b2%e0%b8%ab%e0%b8%a5%e0%b8%b5%e0%b8%9e%e0%b8%b2%e0%b8%81%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%97/",
    "https://goseries4k.com/cat_category/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9e%e0%b8%b2%e0%b8%81%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%97%e0%b8%a2/"
]

collected_links = set()
for cat in category_urls:
    try:
        req = urllib.request.Request(cat, headers=HEADERS)
        page_html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        matches = re.findall(r'href="(https://goseries4k\.com/[^"/]+/)', page_html)
        for m in matches:
            if not m.startswith("https://goseries4k.com/cat_") and not m.startswith("https://goseries4k.com/page/"):
                collected_links.add(m)
    except Exception as e:
        pass

print(f"Scraped {len(collected_links)} Thai Dubbed links from GOSERIES4K.")

goseries_movies = []
count = 0

for link in list(collected_links):
    try:
        time.sleep(0.05)
        req = urllib.request.Request(link, headers=HEADERS)
        page_html = urllib.request.urlopen(req, timeout=8).read().decode('utf-8', errors='ignore')
        
        # Title
        title_m = re.search(r'<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)</h1>', page_html)
        if not title_m:
            title_m = re.search(r'<title>([\s\S]*?)</title>', page_html)
        title_raw = html.unescape(title_m.group(1)).strip() if title_m else "ซีรีส์พากย์ไทย"
        title_clean = re.sub(r'ดูซีรี่ย์|พากย์ไทย|ซับไทย|EP\.\d+|- GOSERIES4K', '', title_raw).strip()
        
        # Poster & Backdrop
        poster_m = re.search(r'<img[^>]+src="([^"]+\.(?:jpg|png|webp|jpeg))"[^>]*class="[^"]*(?:poster|thumb|wp-post-image)[^"]*"', page_html)
        if not poster_m:
            poster_m = re.search(r'property="og:image"\s+content="([^"]+)"', page_html)
        poster = poster_m.group(1) if poster_m else "https://goseries4k.com/wp-content/uploads/2023/01/logo.png"
        
        # Iframe / Video URL
        iframe_m = re.search(r'<iframe[^>]*src="([^"]+)"', page_html)
        if not iframe_m:
            continue
        video_url = iframe_m.group(1)
        
        # Episodes count
        postid_m = re.search(r'data-post-id="(\d+)"', page_html)
        post_id = postid_m.group(1) if postid_m else ""
        
        # Check episode options
        eps_matches = re.findall(r'<option[^>]*>([\s\S]*?)</option>', page_html)
        num_eps = len(eps_matches) if len(eps_matches) > 1 else 1
        episodes_list = [f"ตอนที่ {i+1}" for i in range(num_eps)]
        
        # Genre
        genre = "ซีรีส์พากย์ไทย"
        if "เกาหลี" in title_raw or "เกาหลี" in link:
            genre = "ซีรีส์เกาหลี"
        elif "จีน" in title_raw or "จีน" in link:
            genre = "ซีรีส์จีน"
        elif "ฝรั่ง" in title_raw or "ฝรั่ง" in link:
            genre = "ซีรีส์ฝรั่ง"

        movie_obj = {
            "titleTh": title_clean,
            "titleEn": title_clean,
            "year": 2026,
            "poster": poster,
            "backdrop": poster,
            "videoUrl": video_url,
            "sourceType": "embed",
            "description": f"ดูซีรีส์ {title_clean} พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
            "rating": 8.0,
            "genres": [genre, "พากย์ไทย"],
            "duration": f"{num_eps} ตอน",
            "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
            "cast": ["นักแสดงนำคุณภาพ"],
            "source": "GOSERIES4K",
            "episodes": episodes_list,
            "languages": ["Thai (พากย์ไทย)"],
            "id": f"goseries-{count+1}",
            "postId": post_id,
            "sourcePageUrl": link
        }
        
        goseries_movies.append(movie_obj)
        count += 1
        print(f"[{count}] Added: {title_clean} ({num_eps} ตอน)")
    except Exception as e:
        pass

print(f"\nSuccessfully parsed {len(goseries_movies)} Thai Dubbed series from GOSERIES4K.")

# Load existing movies.js and merge
raw_existing = open("js/movies.js", encoding='utf-8').read()
m_existing = json.loads(re.search(r'const movies = (\[.*\]);', raw_existing, re.DOTALL).group(1))

# Append new goseries movies
m_total = m_existing + goseries_movies

print(f"Total Movies in Database: {len(m_total)} (Previous: {len(m_existing)} + New: {len(goseries_movies)})")

# Save merged database to js/movies.js
with open("js/movies.js", "w", encoding="utf-8") as f:
    f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พากย์ไทย 100%)\n")
    f.write("const movies = ")
    json.dump(m_total, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved updated js/movies.js successfully!")
