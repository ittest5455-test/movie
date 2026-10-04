# -*- coding: utf-8 -*-
import urllib.request
import re
import html
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'Referer': 'https://2499hdonline.com/'
}

test_urls = [
    'https://2499hdonline.com/the-sheep-detectives-2026/',
    'https://2499hdonline.com/obsession-2026/',
    'https://2499hdonline.com/peaky-blinders-the-immortal-man-2026/',
    'https://2499hdonline.com/toy-story-5-2026/',
    'https://2499hdonline.com/deaw-still-alive-2026/'
]

for url in test_urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as r:
            body = r.read().decode('utf-8', errors='ignore')
            
        title_m = re.search(r'<title>(.*?)</title>', body)
        title = title_m.group(1) if title_m else ""
        
        # Player iframe
        vid_m = re.search(r'src=["\'](https://2499hdonline\.com/play/vid\.php\?[^"\']+)["\']', body)
        vid_url = vid_m.group(1).replace('&#038;', '&') if vid_m else None
        
        # Poster
        poster_m = re.search(r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', body)
        poster = poster_m.group(1) if poster_m else ""
        
        # Rating
        rating_m = re.search(r'ratingValue["\']:\s*["\']?([0-9.]+)["\']?', body) or re.search(r'IMDB\s*([0-9.]+)', body)
        rating = rating_m.group(1) if rating_m else "N/A"
        
        # Audio
        sound = "พากย์ไทย" if "พากย์ไทย" in body else "ซาวด์แทร็ก"
        
        print(f"URL: {url}")
        print(f"  Title: {title}")
        print(f"  Player: {vid_url}")
        print(f"  Poster: {poster}")
        print(f"  Rating: {rating}")
        print(f"  Audio: {sound}")
        
        # If vid_url exists, let's check id
        if vid_url:
            id_m = re.search(r'id=([0-9a-zA-Z_-]+)', vid_url)
            if id_m:
                gan_id = id_m.group(1)
                fasthd_url = f"https://play.gan-play.com/embed/fasthd.php?key=2499hdonline&id={gan_id}&ep=&type="
                print(f"  FastHD Player: {fasthd_url}")
        print("-" * 50)
    except Exception as e:
        print(f"Error {url}: {e}")
