# -*- coding: utf-8 -*-
# สแกนดึงหนังใหม่สดล่าสุดทุกเรื่องจาก 24-HDX และ GOSERIES4K ทันที
import urllib.request
import urllib.parse
import re
import json
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

HEADERS_24 = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.24-hdx.com/'
}
HEADERS_G4 = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://goseries4k.com/'
}

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
match = re.search(r'(?:window\.|const\s+|var\s+|let\s+)?movies\s*=\s*(\[[\s\S]*?\]);', raw)
if not match:
    match = re.search(r'(\[[\s\S]*\])', raw)
m = json.loads(match.group(1)) if match else []
existing_titles = set(x.get("titleTh", "").strip().lower() for x in m)
existing_urls = set(x.get("videoUrl", "") for x in m)

print(f"Current total movies in database: {len(m)}")

new_movies = []

# --- 1. Scrape 24-HDX Fresh Movies ---
print("\n--- Checking Fresh 24-HDX Movies ---")
urls_24 = [
    "https://www.24-hdx.com/",
    "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/",
    "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%8a%e0%b8%99%e0%b9%82%e0%b8%a3%e0%b8%87/",
    "https://www.24-hdx.com/series/"
]

for url in urls_24:
    try:
        time.sleep(0.08)
        req = urllib.request.Request(url, headers=HEADERS_24)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        
        post_links = re.findall(r'href="(https://www\.24-hdx\.com/[a-z0-9\-]+/?)"', html)
        exclude = {'series', 'netflix', 'topimdb', 'contact-us', 'dmca', 'privacy-policy'}
        clean_links = [l for l in set(post_links) if l.split('/')[-2] not in exclude and not l.endswith('.png') and not l.endswith('.jpg')]
        
        for link in clean_links:
            try:
                time.sleep(0.02)
                m_req = urllib.request.Request(link, headers=HEADERS_24)
                m_html = urllib.request.urlopen(m_req, timeout=8).read().decode('utf-8', errors='ignore')
                
                title_match = re.search(r'<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)</h1>|<title>([\s\S]*?)</title>', m_html)
                title_raw = title_match.group(1) or title_match.group(2) if title_match else ""
                clean_title = re.sub(r'ดูหนังออนไลน์|ดูหนัง|HD|พากย์ไทย|ซับไทย|เต็มเรื่อง|\(2026\)|\(2025\)|\|.*$|- 24-HDX.*$', '', title_raw).strip()
                
                if not clean_title or clean_title.lower() in existing_titles:
                    continue
                
                poster_match = re.search(r'<meta property="og:image" content="([^"]+)"', m_html)
                poster = poster_match.group(1) if poster_match else "https://www.24-hdx.com/wp-content/uploads/default.jpg"
                
                post_id_match = re.search(r'post-id="(\d+)"|post_id\s*=\s*(\d+)|name="postid"\s*value="(\d+)"|postid:\s*(\d+)', m_html)
                post_id = [g for g in post_id_match.groups() if g][0] if post_id_match else None
                
                video_url = ""
                clean_player = re.search(r'src="(https?://[^"]*24playerhd\.com/[^"]+)"', m_html)
                if clean_player:
                    video_url = clean_player.group(1)
                elif post_id:
                    data = urllib.parse.urlencode({
                        'action': 'halim_ajax_player',
                        'nonce': '',
                        'episode': '1',
                        'server': '1',
                        'postid': str(post_id),
                        'lang': 'Thai',
                        'title': clean_title
                    }).encode('utf-8')
                    api_req = urllib.request.Request("https://api.24-hdx.com/get.php", data=data, headers=HEADERS_24)
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
                        "description": f"ดูหนัง {clean_title} ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุด ไม่มีโฆษณากวนใจ",
                        "rating": 8.8,
                        "genres": ["แอคชั่น", "แฟนตาซี Sci-Fi"],
                        "duration": "1 ชม. 50 นาที",
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
                    print(f"  + [24-HDX] {clean_title} -> {video_url[:40]}")
            except Exception as e:
                pass
    except Exception as e:
        print(f"Error 24-HDX {url}: {e}")

# --- 2. Scrape GOSERIES4K Fresh Series ---
print("\n--- Checking Fresh GOSERIES4K Series ---")
urls_g4 = [
    "https://goseries4k.com/",
    "https://goseries4k.com/category/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%80%e0%b8%81%e0%b8%b2%e0%b8%ab%e0%b8%a5%e0%b8%b5/",
    "https://goseries4k.com/category/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%88%e0%b8%b5%e0%b8%99/"
]

for url in urls_g4:
    try:
        time.sleep(0.08)
        req = urllib.request.Request(url, headers=HEADERS_G4)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        
        post_links = re.findall(r'href="(https://goseries4k\.com/[a-z0-9\-%]+/?)"', html)
        clean_links = [l for l in set(post_links) if '/category/' not in l and '/tag/' not in l and l != 'https://goseries4k.com/']
        
        for link in clean_links:
            try:
                time.sleep(0.02)
                m_req = urllib.request.Request(link, headers=HEADERS_G4)
                m_html = urllib.request.urlopen(m_req, timeout=8).read().decode('utf-8', errors='ignore')
                
                title_match = re.search(r'<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)</h1>|<title>([\s\S]*?)</title>', m_html)
                title_raw = title_match.group(1) or title_match.group(2) if title_match else ""
                clean_title = re.sub(r'ดูซีรี่ย์|ดูซีรีย์|ซีรี่ย์จีน|ซีรี่ย์เกาหลี|พากย์ไทย|ซับไทย|EP\.\d+.*$|\(จบ\)|- Goseries4k.*$|\|.*$', '', title_raw).strip()
                
                if not clean_title or clean_title.lower() in existing_titles:
                    continue
                
                poster_match = re.search(r'<meta property="og:image" content="([^"]+)"', m_html)
                poster = poster_match.group(1) if poster_match else "https://goseries4k.com/wp-content/uploads/default.jpg"
                
                cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', m_html)
                if cache_match:
                    raw_cache = json.loads(cache_match.group(1))
                    cache_dict = {}
                    for k, v in raw_cache.items():
                        iframes = re.findall(r'<iframe[^>]*src="([^"]+)"', v)
                        for ifr in iframes:
                            if 'torbo007' in ifr or 'embed' in ifr:
                                cache_dict[str(k)] = ifr
                                break
                    
                    groups = re.findall(r'<div class="mp-ep-group[^"]*">\s*<div class="mp-epg-title">([\s\S]*?)</div>\s*<div class="mp-epg-list">([\s\S]*?)</div>\s*</div>', m_html)
                    target_buttons = []
                    selected_group_name = "พากย์ไทย"
                    if groups:
                        for g_title, g_content in groups:
                            if "พากย์ไทย" in g_title:
                                btns = re.findall(r'<button[^>]*data-id="(\d+)"[^>]*>([\s\S]*?)</button>', g_content)
                                if btns:
                                    target_buttons = btns
                                    selected_group_name = "พากย์ไทย"
                                    break
                        if not target_buttons and groups:
                            g_title, g_content = groups[0]
                            target_buttons = re.findall(r'<button[^>]*data-id="(\d+)"[^>]*>([\s\S]*?)</button>', g_content)
                            selected_group_name = g_title.strip()
                    
                    if target_buttons and cache_dict:
                        ep_urls = {}
                        ep_list = []
                        for idx, (btn_id, btn_label) in enumerate(target_buttons):
                            ep_num = str(idx + 1)
                            link_ifr = cache_dict.get(btn_id)
                            if link_ifr:
                                ep_urls[ep_num] = link_ifr
                                ep_list.append(f"ตอนที่ {ep_num}")
                        
                        if ep_urls and ep_urls.get("1") not in existing_urls:
                            new_item = {
                                "titleTh": clean_title,
                                "titleEn": clean_title,
                                "year": 2026 if "2026" in title_raw else 2025,
                                "poster": poster,
                                "backdrop": poster,
                                "videoUrl": ep_urls.get("1"),
                                "sourceType": "embed",
                                "description": f"ดูซีรีส์ {clean_title} อัปเดตใหม่ล่าสุด พากย์ไทยคมชัดระดับ Full HD",
                                "rating": 8.9,
                                "genres": ["ซีรีส์", "ดราม่า"],
                                "duration": f"{len(ep_urls)} ตอน ({selected_group_name})",
                                "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                                "cast": ["นักแสดงนำคุณภาพ"],
                                "source": "GOSERIES4K",
                                "sourcePageUrl": link,
                                "episodes": ep_list,
                                "episodeUrls": ep_urls,
                                "languages": [selected_group_name],
                                "id": f"g4-{len(m)+len(new_movies)+1}"
                            }
                            new_movies.append(new_item)
                            existing_titles.add(clean_title.lower())
                            existing_urls.add(ep_urls.get("1"))
                            print(f"  + [GOSERIES4K] {clean_title} ({len(ep_urls)} ตอน) -> {ep_urls.get('1')[:40]}")
            except Exception as e:
                pass
    except Exception as e:
        print(f"Error G4 {url}: {e}")

print(f"\n==========================================")
print(f"Total NEW movies & series fetched: {len(new_movies)}")
print(f"==========================================")

if len(new_movies) > 0:
    updated_database = new_movies + m
    with open("js/movies.js", "w", encoding="utf-8") as f:
        f.write("// ฐานข้อมูลภาพยนตร์รวมจาก 24-HDX + GOSERIES4K (อัปเดตหนังใหม่สดล่าสุด 100%)\n")
        f.write("window.movies = ")
        json.dump(updated_database, f, ensure_ascii=False, indent=2)
        f.write(";\nvar movies = window.movies;\n")
    print(f"Saved updated js/movies.js with {len(updated_database)} total movies!")
