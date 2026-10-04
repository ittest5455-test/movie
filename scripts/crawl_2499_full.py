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

def scrape_2499_movie(url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as r:
            body = r.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"[-] Fetch error {url}: {e}")
        return None

    # Title extraction
    title_m = re.search(r'<title>(.*?)</title>', body)
    raw_title = clean_text(title_m.group(1)) if title_m else ""
    raw_title = re.sub(r'\s*-\s*2499hd\s*ดูหนังออนไลน์.*$', '', raw_title, flags=re.IGNORECASE).strip()

    # Thai and English title parsing
    # Typically: "The Sheep Detectives (2026) แก๊งแกะรอยยอดนักสืบ"
    title_th = raw_title
    title_en = raw_title

    t_match = re.match(r'^(.*?)\s*\((\d{4})\)\s*(.*?)$', raw_title)
    year = 2026
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

    # Extract Player Iframe
    # Pattern 1: vid.php iframe
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
        # Pattern 2: direct gan-play iframe
        gan_m = re.search(r'src=["\'](https://play\.gan-play\.com/embed/fasthd\.php\?[^"\']+)["\']', body)
        if gan_m:
            player_url = gan_m.group(1).replace('&#038;', '&')
            id_m = re.search(r'id=([0-9a-zA-Z_-]+)', player_url)
            if id_m: post_id = id_m.group(1)

    if not player_url:
        print(f"[-] No player found for {url}")
        return None

    # Poster
    poster_m = re.search(r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', body)
    if not poster_m:
        poster_m = re.search(r'<img[^>]+src=["\']([^"\']+/wp-content/uploads/[^"\']+)["\']', body)
    poster = poster_m.group(1) if poster_m else ""

    # Rating
    rating_m = re.search(r'ratingValue["\']:\s*["\']?([0-9.]+)["\']?', body) or re.search(r'IMDB\s*([0-9.]+)', body)
    rating = 7.5
    if rating_m:
        try:
            rating = round(float(rating_m.group(1)), 1)
        except:
            pass

    # Description
    desc_m = re.search(r'property=["\']og:description["\']\s+content=["\']([^"\']+)["\']', body)
    if not desc_m:
        desc_m = re.search(r'<div class="[^"]*entry-content[^"]*"[^>]*>(.*?)</div>', body, re.DOTALL)
    description = clean_text(desc_m.group(1)) if desc_m else raw_title

    # Genres
    genres = ["พากย์ไทย", "2499HD", "หนังใหม่ 2026", "ข้าม Intro", "ดูต่อได้"]
    genre_links = re.findall(r'href=["\']https://2499hdonline\.com/category/([^"\'/]+)/?["\'][^>]*>(.*?)</a>', body)
    for g_slug, g_name in genre_links:
        clean_g = clean_text(g_name)
        if clean_g and clean_g not in genres and "หนัง" not in clean_g:
            genres.append(clean_g)

    # Check Sound
    if "ซับไทย" in body and "พากย์ไทย" not in body:
        genres = [g for g in genres if g != "พากย์ไทย"]
        genres.append("ซับไทย")

    # Duration
    dur_m = re.search(r'duration["\']:\s*["\']PT(?:(\d+)H)?(?:(\d+)M)?', body)
    duration = "ภาพยนตร์เต็มเรื่อง"
    if dur_m:
        h = dur_m.group(1)
        m = dur_m.group(2)
        if h and m: duration = f"{h} ชม. {m} นาที"
        elif m: duration = f"{m} นาที"

    movie_id = f"2499-{post_id}" if post_id else f"2499-{re.sub(r'[^a-zA-Z0-9]', '', raw_title)[:15]}"

    return {
        "titleTh": raw_title,
        "titleEn": title_en or raw_title,
        "year": year,
        "poster": poster,
        "backdrop": poster,
        "videoUrl": player_url,
        "sourceType": "embed",
        "description": description[:300] if len(description) > 300 else description,
        "rating": rating,
        "genres": genres,
        "duration": duration,
        "trailerUrl": "",
        "cast": [],
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

if __name__ == "__main__":
    # Test on single movie first
    res = scrape_2499_movie("https://2499hdonline.com/the-sheep-detectives-2026/")
    print(json.dumps(res, ensure_ascii=False, indent=2))
