# -*- coding: utf-8 -*-
import urllib.request
import re
import html
import json
import time
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'Referer': 'https://2499hdonline.com/'
}

def clean_text(s):
    if not s: return ""
    s = html.unescape(s)
    s = re.sub(r'<[^>]+>', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

def get_html(url, retries=2):
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=15) as r:
                return r.read().decode('utf-8', errors='ignore')
        except Exception as e:
            if i == retries - 1:
                print(f"[-] Error fetching {url}: {e}")
            time.sleep(1)
    return ""

def get_all_2026_urls():
    urls = set()
    # Check sitemaps
    for i in [1, 2, 3, 4, 5]:
        suffix = str(i) if i > 1 else ""
        sitemap_url = f"https://2499hdonline.com/post-sitemap{suffix}.xml"
        xml = get_html(sitemap_url)
        locs = re.findall(r'<loc>(https://2499hdonline\.com/[^<]+)</loc>', xml)
        for l in locs:
            if '2026' in l and not any(x in l for x in ['/year/', '/category/', '/tag/', '/author/', '/page/']):
                urls.add(l)
                
    # Check /year/2026/
    y_html = get_html("https://2499hdonline.com/year/2026/")
    links = re.findall(r'href=["\'](https://2499hdonline\.com/[^"\'#/]+/)["\']', y_html)
    for l in links:
        if '2026' in l and not any(x in l for x in ['/year/', '/category/', '/tag/', '/author/', '/page/']):
            urls.add(l)

    return sorted(list(urls))

def parse_movie(url):
    body = get_html(url)
    if not body:
        return None

    # Title extraction
    title_m = re.search(r'<title>(.*?)</title>', body)
    raw_title = clean_text(title_m.group(1)) if title_m else ""
    raw_title = re.sub(r'\s*-\s*2499hd\s*ดูหนังออนไลน์.*$', '', raw_title, flags=re.IGNORECASE).strip()

    title_th = raw_title
    title_en = raw_title
    year = 2026

    t_match = re.match(r'^(.*?)\s*\((\d{4})\)\s*(.*?)$', raw_title)
    if t_match:
        part1 = t_match.group(1).strip()
        year = int(t_match.group(2))
        part2 = t_match.group(3).strip()
        if part2:
            title_th = f"{part2} ({part1})"
            title_en = part1
        else:
            title_th = part1
            title_en = part1

    # Player Iframe & Post ID
    vid_m = re.search(r'src=["\'](https://2499hdonline\.com/play/vid\.php\?[^"\']+)["\']', body)
    player_url = ""
    post_id = ""

    if vid_m:
        vid_url = vid_m.group(1).replace('&#038;', '&')
        id_m = re.search(r'id=([0-9a-zA-Z_-]+)', vid_url)
        if id_m:
            post_id = id_m.group(1)
            player_url = f"https://play.gan-play.com/embed/fasthd.php?key=2499hdonline&id={post_id}&ep=&type="
        else:
            player_url = vid_url
    else:
        gan_m = re.search(r'src=["\'](https://play\.gan-play\.com/embed/fasthd\.php\?[^"\']+)["\']', body)
        if gan_m:
            player_url = gan_m.group(1).replace('&#038;', '&')
            id_m = re.search(r'id=([0-9a-zA-Z_-]+)', player_url)
            if id_m: post_id = id_m.group(1)

    if not player_url:
        return None

    # Poster (Prefer official TMDB poster embedded in gan-play player, reject ads)
    poster = ""
    if player_url:
        try:
            req_embed = urllib.request.Request(player_url, headers=HEADERS)
            with urllib.request.urlopen(req_embed, timeout=5) as r_embed:
                embed_body = r_embed.read().decode('utf-8', errors='ignore')
                tmdb_m = re.search(r'poster=["\'](https://image\.tmdb\.org/t/p/[^"\']+)["\']', embed_body)
                if tmdb_m:
                    poster = tmdb_m.group(1)
        except Exception:
            pass

    if not poster:
        poster_m = re.search(r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', body)
        if poster_m and not any(bad in poster_m.group(1).lower() for bad in ['vip168', 'banner', '728x', 'cdend.com']):
            poster = poster_m.group(1)
        else:
            img_m = re.search(r'<img[^>]+src=["\'](https?://[^"\']+/wp-content/uploads/[^"\']+)["\']', body)
            if img_m and not any(bad in img_m.group(1).lower() for bad in ['vip168', 'banner', '728x', 'cdend.com']):
                poster = img_m.group(1)

    # Rating
    rating_m = re.search(r'ratingValue["\']:\s*["\']?([0-9.]+)["\']?', body) or re.search(r'IMDB\s*([0-9.]+)', body)
    rating = 7.5
    if rating_m:
        try:
            rating = round(float(rating_m.group(1)), 1)
        except:
            pass

    # Story / Description
    desc = ""
    p_tags = re.findall(r'<p[^>]*>(.*?)</p>', body, re.DOTALL)
    story_parts = []
    for p in p_tags:
        clean = clean_text(p)
        if len(clean) > 35 and not any(k in clean for k in ['2499hd', 'ดูหนังออนไลน์', 'คลิกที่นี่', 'wp-image']):
            story_parts.append(clean)
    if story_parts:
        desc = " ".join(story_parts[:3])
    else:
        desc_m = re.search(r'property=["\']og:description["\']\s+content=["\']([^"\']+)["\']', body)
        desc = clean_text(desc_m.group(1)) if desc_m else raw_title

    # Duration
    dur_m = re.search(r'ความยาวประมาณ\s*<strong>(\d+)\s*นาที', body) or re.search(r'duration["\']:\s*["\']PT(?:(\d+)H)?(?:(\d+)M)?', body)
    duration = "ภาพยนตร์เต็มเรื่อง"
    if dur_m:
        if len(dur_m.groups()) == 1 and dur_m.group(1):
            mins = int(dur_m.group(1))
            duration = f"{mins // 60} ชม. {mins % 60} นาที" if mins >= 60 else f"{mins} นาที"
        elif len(dur_m.groups()) == 2:
            h = dur_m.group(1)
            m = dur_m.group(2)
            if h and m: duration = f"{h} ชม. {m} นาที"
            elif m: duration = f"{m} นาที"

    # Cast
    cast_list = []
    cast_m = re.search(r'นักแสดง:\s*([^<\n]+)', body)
    if cast_m:
        cast_list = [clean_text(c) for c in cast_m.group(1).split(',') if clean_text(c)]

    # Genres
    genres = ["พากย์ไทย", "2499HD", "หนังใหม่ 2026", "ข้าม Intro", "ดูต่อได้"]
    genre_links = re.findall(r'href=["\']https://2499hdonline\.com/category/([^"\'/]+)/?["\'][^>]*>(.*?)</a>', body)
    for g_slug, g_name in genre_links:
        clean_g = clean_text(g_name)
        if clean_g and clean_g not in genres and "หนัง" not in clean_g:
            genres.append(clean_g)

    if "ซับไทย" in body and "พากย์ไทย" not in body:
        genres = [g for g in genres if g != "พากย์ไทย"]
        genres.append("ซับไทย")

    # Trailer
    trailer_url = ""
    yt_m = re.search(r'src=["\'](https://www\.youtube\.com/embed/[^"\']+)["\']', body)
    if yt_m:
        trailer_url = yt_m.group(1)

    movie_id = f"2499-{post_id}" if post_id else f"2499-{re.sub(r'[^a-zA-Z0-9]', '', raw_title)[:15]}"

    return {
        "titleTh": raw_title,
        "titleEn": title_en or raw_title,
        "year": year,
        "poster": poster,
        "backdrop": poster,
        "videoUrl": player_url,
        "sourceType": "embed",
        "description": desc[:350],
        "rating": rating,
        "genres": genres,
        "duration": duration,
        "trailerUrl": trailer_url,
        "cast": cast_list[:5],
        "source": "2499HD",
        "episodes": ["เต็มเรื่อง"],
        "episodeUrls": {
            "1": player_url
        },
        "languages": ["Thai (พากย์ไทย)"],
        "id": movie_id,
        "postId": post_id,
        "originalUrl": url
    }

def main():
    print("=== Scanning 2499hdonline.com for 2026 movies ===")
    urls = get_all_2026_urls()
    print(f"Found {len(urls)} candidates for year 2026")

    scraped_movies = []
    for idx, u in enumerate(urls, 1):
        print(f"[{idx}/{len(urls)}] Scraping: {u} ... ", end="", flush=True)
        mov = parse_movie(u)
        if mov and mov.get("videoUrl"):
            scraped_movies.append(mov)
            print(f"OK: {mov['titleTh'][:30]} (Player: {mov['postId']})")
        else:
            print("FAILED or No Player")
        time.sleep(0.5)

    print(f"\nSuccessfully scraped {len(scraped_movies)} movies from 2499HD!")
    with open("scripts/2499_movies_2026.json", "w", encoding="utf-8") as f:
        json.dump(scraped_movies, f, ensure_ascii=False, indent=2)
    print("Saved to scripts/2499_movies_2026.json")

if __name__ == "__main__":
    main()
