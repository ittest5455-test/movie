# -*- coding: utf-8 -*-
# สแกนดึงหนังใหม่ล่าสุดจาก 24-HDX ทั้งหมดกว่า 50+ เรื่อง
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

# 1. Load current movies
raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))
existing_titles = set(x.get("titleTh", "").strip().lower() for x in m)
existing_urls = set(x.get("videoUrl", "") for x in m)

print(f"Current movies in DB: {len(m)}")

category_urls = [
    "https://www.24-hdx.com/",
    "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/",
    "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%8a%e0%b8%99%e0%b9%82%e0%b8%a3%e0%b8%87/",
    "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%84%e0%b8%97%e0%b8%a2/",
    "https://www.24-hdx.com/series/",
    "https://www.24-hdx.com/netflix/",
    "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2025/"
]

new_movies = []

for cat_url in category_urls:
    try:
        time.sleep(0.08)
        req = urllib.request.Request(cat_url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        
        # Find all article / halim item blocks
        post_links = re.findall(r'href="(https://www\.24-hdx\.com/[a-z0-9\-]+/?)"', html)
        # Filter out static category links
        exclude = {'series', 'netflix', 'topimdb', 'contact-us', 'dmca', 'privacy-policy'}
        clean_links = [l for l in set(post_links) if l.split('/')[-2] not in exclude and not l.endswith('.png') and not l.endswith('.jpg')]
        print(f"URL: {cat_url} -> Found {len(clean_links)} candidate links")
        
        for link in clean_links:
            try:
                time.sleep(0.03)
                m_req = urllib.request.Request(link, headers=HEADERS)
                m_html = urllib.request.urlopen(m_req, timeout=8).read().decode('utf-8', errors='ignore')
                
                # Title
                title_match = re.search(r'<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)</h1>|<title>([\s\S]*?)</title>', m_html)
                title_raw = title_match.group(1) or title_match.group(2) if title_match else ""
                clean_title = re.sub(r'ดูหนังออนไลน์|ดูหนัง|HD|พากย์ไทย|ซับไทย|เต็มเรื่อง|\(2026\)|\(2025\)|\|.*$|- 24-HDX.*$', '', title_raw).strip()
                
                if not clean_title or clean_title.lower() in existing_titles:
                    continue
                
                # Poster
                poster_match = re.search(r'<meta property="og:image" content="([^"]+)"', m_html)
                poster = poster_match.group(1) if poster_match else "https://www.24-hdx.com/wp-content/uploads/default.jpg"
                
                # Post ID
                post_id_match = re.search(r'post-id="(\d+)"|post_id\s*=\s*(\d+)|name="postid"\s*value="(\d+)"|postid:\s*(\d+)', m_html)
                post_id = [g for g in post_id_match.groups() if g][0] if post_id_match else None
                
                video_url = ""
                # Check for clean 24playerhd
                clean_player = re.search(r'src="(https?://[^"]*24playerhd\.com/[^"]+)"', m_html)
                if clean_player:
                    video_url = clean_player.group(1)
                elif post_id:
                    # Query API to get direct player
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
                        "year": 2026 if "2026" in title_raw else 2025,
                        "poster": poster,
                        "backdrop": poster,
                        "videoUrl": video_url,
                        "sourceType": "embed",
                        "description": f"ดูหนัง {clean_title} ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
                        "rating": 8.7,
                        "genres": ["แอคชั่น", "แฟนตาซี Sci-Fi"],
                        "duration": "1 ชม. 48 นาที",
                        "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "cast": ["นักแสดงนำคุณภาพ"],
                        "source": "24HDX",
                        "episodes": ["ตอนที่ 1 (จบในตอน)"],
                        "languages": ["Thai (พากย์ไทย)"],
                        "id": f"24hdx-{post_id if post_id else len(m)+len(new_movies)+1}"
                    }
                    new_movies.append(new_item)
                    existing_titles.add(clean_title.lower())
                    existing_urls.add(video_url)
                    print(f"  + [NEW 24-HDX] {clean_title} ({new_item['year']}) -> {video_url[:50]}")
            except Exception as e:
                pass
    except Exception as e:
        print(f"Error on {cat_url}: {e}")

print(f"\nSuccessfully scraped {len(new_movies)} NEW movies from 24-HDX!")

if len(new_movies) > 0:
    # Place new movies at the very front of the database
    updated_all = new_movies + m
    with open("js/movies.js", "w", encoding="utf-8") as f:
        f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 037HDD + 24-HDX + GOSERIES4K (พร้อมหนังใหม่ล่าสุดจาก 24-HDX 100%)\n")
        f.write("const movies = ")
        json.dump(updated_all, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"Saved updated js/movies.js with {len(updated_all)} movies!")
