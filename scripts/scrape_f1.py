# -*- coding: utf-8 -*-
import urllib.request
import re
import html
import json
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

def get_html(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        return r.read().decode('utf-8', errors='ignore')

url = "https://2499hdonline.com/f1-2025/"
body = get_html(url)

# Title
title_m = re.search(r'<title>(.*?)</title>', body)
raw_title = clean_text(title_m.group(1)) if title_m else ""
raw_title = re.sub(r'\s*-\s*2499hd\s*ดูหนังออนไลน์.*$', '', raw_title, flags=re.IGNORECASE).strip()

print("Raw title:", raw_title)

# Let's inspect h1 or title tags
h1_m = re.findall(r'<h1[^>]*>(.*?)</h1>', body)
print("H1 matches:", [clean_text(h) for h in h1_m])

# Player
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

print("Player URL:", player_url)
print("Post ID:", post_id)

# Poster
poster_m = re.search(r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', body)
poster = poster_m.group(1) if poster_m else ""
print("Poster:", poster)

# Rating
rating_m = re.search(r'ratingValue["\']:\s*["\']?([0-9.]+)["\']?', body) or re.search(r'IMDB\s*([0-9.]+)', body)
rating = 7.8
if rating_m:
    try:
        rating = round(float(rating_m.group(1)), 1)
    except:
        pass
print("Rating:", rating)

# Description
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
print("Desc:", desc[:100])

# Duration
dur_m = re.search(r'ความยาวประมาณ\s*<strong>(\d+)\s*นาที', body) or re.search(r'duration["\']:\s*["\']PT(?:(\d+)H)?(?:(\d+)M)?', body)
duration = "2 ชม. 15 นาที"
if dur_m:
    if len(dur_m.groups()) == 1 and dur_m.group(1):
        mins = int(dur_m.group(1))
        duration = f"{mins // 60} ชม. {mins % 60} นาที" if mins >= 60 else f"{mins} นาที"
    elif len(dur_m.groups()) == 2:
        h = dur_m.group(1)
        m = dur_m.group(2)
        if h and m: duration = f"{h} ชม. {m} นาที"
        elif m: duration = f"{m} นาที"
print("Duration:", duration)

# Cast
cast_list = []
cast_m = re.search(r'นักแสดง:\s*([^<\n]+)', body)
if cast_m:
    cast_list = [clean_text(c) for c in cast_m.group(1).split(',') if clean_text(c)]
print("Cast:", cast_list)

# Genres
genres = ["พากย์ไทย", "2499HD", "หนังใหม่ 2025", "ข้าม Intro", "ดูต่อได้", "แอคชั่น", "ดราม่า", "กีฬา"]
genre_links = re.findall(r'href=["\']https://2499hdonline\.com/category/([^"\'/]+)/?["\'][^>]*>(.*?)</a>', body)
for g_slug, g_name in genre_links:
    clean_g = clean_text(g_name)
    if clean_g and clean_g not in genres and "หนัง" not in clean_g:
        genres.append(clean_g)

# Trailer
trailer_url = ""
yt_m = re.search(r'src=["\'](https://www\.youtube\.com/embed/[^"\']+)["\']', body)
if yt_m:
    trailer_url = yt_m.group(1)
print("Trailer:", trailer_url)
