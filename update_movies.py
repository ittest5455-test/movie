# -*- coding: utf-8 -*-
"""
ระบบอัปเดตหนังและซีรีส์ใหม่อัตโนมัติ (Auto-Updater)
ดึงข้อมูลภาพยนตร์และซีรีส์ใหม่จาก 24-HD, GOSERIES4K, WOW-DRAMA และ MYSERIESHD (เฉพาะพากย์ไทย ปี 2026)
"""

import urllib.request
import urllib.parse
import html
import re
import json
import time
import os
import sys
import datetime
import subprocess
import concurrent.futures
import base64

# Set output encoding to UTF-8
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MOVIES_FILE = os.path.join(BASE_DIR, "js", "movies.js")
CLEAN_POSTERS_DIR = os.path.join(BASE_DIR, "images", "clean_posters")
os.makedirs(CLEAN_POSTERS_DIR, exist_ok=True)

try:
    import cv2
    import numpy as np
    HAS_OPENCV = True
except ImportError:
    HAS_OPENCV = False

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
}

def safe_url(url):
    """ทำความสะอาด URL และ Encode ภาษาไทย/อักขระพิเศษใน Path ป้องกันรูปเสีย"""
    if not url:
        return ""
    # เปลี่ยนโดเมนเก่า 24-hdx ที่ถูกบล็อกเป็น 24-hda
    url = url.replace("www.24-hdx.com", "www.24-hda.com").replace("24-hdx.com", "24-hda.com")
    try:
        p = urllib.parse.urlsplit(url)
        quoted_path = urllib.parse.quote(urllib.parse.unquote(p.path))
        return urllib.parse.urlunsplit((p.scheme, p.netloc, quoted_path, p.query, p.fragment))
    except Exception:
        return url


def clean_sub_text(t):
    """ลบข้อความ ซับไทย ทุกรูปแบบออกให้เหลือเฉพาะ พากย์ไทย 100%"""
    if not t: return t
    t = re.sub(r'\(?\s*พากย์ไทย\s*[/|]\s*ซับไทย\s*\)?', 'พากย์ไทย', t, flags=re.IGNORECASE)
    t = re.sub(r'\(?\s*ซับไทย\s*[/|]\s*พากย์ไทย\s*\)?', 'พากย์ไทย', t, flags=re.IGNORECASE)
    t = re.sub(r'\(?\s*พากย์ไทย\s*[-+]\s*ซับไทย\s*\)?', 'พากย์ไทย', t, flags=re.IGNORECASE)
    t = re.sub(r'\(?\s*ซับไทย\s*[-+]\s*พากย์ไทย\s*\)?', 'พากย์ไทย', t, flags=re.IGNORECASE)
    t = re.sub(r'\s*\|\s*ซับไทย\b', '', t, flags=re.IGNORECASE)
    t = re.sub(r'\bซับไทย\s*\|\s*', '', t, flags=re.IGNORECASE)
    t = re.sub(r'\s*[/|-]?\s*ซับไทย\b', '', t, flags=re.IGNORECASE)
    t = re.sub(r'\s*\(?\s*ซับไทย\s*\)?', '', t, flags=re.IGNORECASE)
    t = re.sub(r'ซับไทย', '', t)
    t = re.sub(r'\s{2,}', ' ', t).strip()
    return t


def detect_goseries_logo_y(img):
    """ตรวจจับตำแหน่งแนวตั้ง (y) ของโลโก้ GOSERIES 4K อย่างแม่นยำ 100%"""
    h, w = img.shape[:2]
    if w != 400 or h != 600:
        img = cv2.resize(img, (400, 600), interpolation=cv2.INTER_AREA)
        
    roi = img[260:560, :]
    hsv = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV)
    mask_orange = cv2.inRange(hsv, np.array([8, 85, 100]), np.array([32, 255, 255]))
    
    cnts, _ = cv2.findContours(mask_orange, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    cands_4 = []
    cands_k = []
    cands_g = []
    cands_o = []
    
    for c in cnts:
        area = cv2.contourArea(c)
        if 80 < area < 900:
            x, y, bw, bh = cv2.boundingRect(c)
            abs_y = 260 + y
            if 18 <= bh <= 34 and 12 <= bw <= 28:
                if 245 <= x <= 276: cands_4.append((x, abs_y, bw, bh))
                elif 270 <= x <= 302: cands_k.append((x, abs_y, bw, bh))
                elif 95 <= x <= 126: cands_g.append((x, abs_y, bw, bh))
                elif 118 <= x <= 150: cands_o.append((x, abs_y, bw, bh))
                
    # 1. ตรวจจับคู่ตัวอักษร 4 และ K
    for c4 in cands_4:
        for ck in cands_k:
            if abs(c4[1] - ck[1]) <= 3 and 14 <= (ck[0] - c4[0]) <= 28:
                y_logo = min(c4[1], ck[1])
                white_roi = img[y_logo:min(600, y_logo+28), 135:255]
                white_hsv = cv2.cvtColor(white_roi, cv2.COLOR_BGR2HSV)
                mask_w = cv2.inRange(white_hsv, np.array([0, 0, 180]), np.array([180, 50, 255]))
                if cv2.countNonZero(mask_w) > 60:
                    return True, y_logo
                    
    # 2. ตรวจจับคู่ตัวอักษร G และ O
    for cg in cands_g:
        for co in cands_o:
            if abs(cg[1] - co[1]) <= 3 and 14 <= (co[0] - cg[0]) <= 28:
                y_logo = min(cg[1], co[1])
                white_roi = img[y_logo:min(600, y_logo+28), 135:255]
                white_hsv = cv2.cvtColor(white_roi, cv2.COLOR_BGR2HSV)
                mask_w = cv2.inRange(white_hsv, np.array([0, 0, 180]), np.array([180, 50, 255]))
                if cv2.countNonZero(mask_w) > 60:
                    return True, y_logo

    # 3. ตรวจจับคู่ด้านซ้าย-ขวา
    for g in cands_g + cands_o:
        for k in cands_4 + cands_k:
            if abs(g[1] - k[1]) <= 3 and 130 <= (k[0] - g[0]) <= 200:
                y_logo = min(g[1], k[1])
                white_roi = img[y_logo:min(600, y_logo+28), 135:255]
                white_hsv = cv2.cvtColor(white_roi, cv2.COLOR_BGR2HSV)
                mask_w = cv2.inRange(white_hsv, np.array([0, 0, 180]), np.array([180, 50, 255]))
                if cv2.countNonZero(mask_w) > 60:
                    return True, y_logo

    return False, None


def clean_and_save_gs_poster(poster_url, post_id):
    """ลบลายน้ำและโลโก้ GOSERIES 4K ออกจากภาพด้วย Inpainting อัตโนมัติแล้วบันทึกลง images/clean_posters/"""
    if not HAS_OPENCV or not poster_url:
        return safe_url(poster_url)
    
    safe_filename = f"gs-{post_id}.jpg"
    local_path = os.path.join(CLEAN_POSTERS_DIR, safe_filename)
    rel_path = f"images/clean_posters/{safe_filename}"
    
    if os.path.exists(local_path):
        return rel_path
        
    try:
        req = urllib.request.Request(poster_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            
        nparr = np.frombuffer(data, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            return safe_url(poster_url)
            
        h, w = img.shape[:2]
        if w != 400 or h != 600:
            img = cv2.resize(img, (400, 600), interpolation=cv2.INTER_AREA)
            h, w = 600, 400
            
        found, y = detect_goseries_logo_y(img)
        if found:
            mask = np.zeros((h, w), dtype=np.uint8)
            mask[max(0, y-8):min(h, y+68), 64:336] = 255
            cleaned = cv2.inpaint(img, mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)
        else:
            cleaned = img
            
        _, buf = cv2.imencode('.jpg', cleaned, [cv2.IMWRITE_JPEG_QUALITY, 90])
        with open(local_path, 'wb') as f:
            f.write(buf)
        return rel_path
    except Exception as e:
        return safe_url(poster_url)


def clean_and_save_wow_poster(poster_url, post_id):
    """ลบลายน้ำและโลโก้ WOW-DRAMA ออกจากภาพด้วย Inpainting อัตโนมัติแล้วบันทึกลง images/clean_posters/"""
    if not HAS_OPENCV or not poster_url:
        return safe_url(poster_url)
        
    safe_filename = f"wow-{post_id}.jpg"
    local_path = os.path.join(CLEAN_POSTERS_DIR, safe_filename)
    rel_path = f"images/clean_posters/{safe_filename}"
    
    if os.path.exists(local_path):
        return rel_path
        
    try:
        p_split = urllib.parse.urlsplit(poster_url)
        quoted_path = urllib.parse.quote(urllib.parse.unquote(p_split.path))
        safe_p_url = urllib.parse.urlunsplit((p_split.scheme, p_split.netloc, quoted_path, p_split.query, p_split.fragment))
        
        req = urllib.request.Request(safe_p_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            
        nparr = np.frombuffer(data, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            return safe_url(poster_url)
            
        h, w = img.shape[:2]
        if w != 400 or h != 600:
            img = cv2.resize(img, (400, 600), interpolation=cv2.INTER_AREA)
            h, w = 600, 400
            
        mask = np.zeros((h, w), dtype=np.uint8)
        mask[558:598, 120:280] = 255
        cleaned = cv2.inpaint(img, mask, inpaintRadius=4, flags=cv2.INPAINT_TELEA)
        
        _, buf = cv2.imencode('.jpg', cleaned, [cv2.IMWRITE_JPEG_QUALITY, 90])
        with open(local_path, 'wb') as f:
            f.write(buf)
        return rel_path
    except Exception as e:
        return safe_url(poster_url)

def load_existing_movies():
    if not os.path.exists(MOVIES_FILE):
        return []
    try:
        with open(MOVIES_FILE, "r", encoding="utf-8") as f:
            text = f.read()
        m_json = re.search(r'window\.movies\s*=\s*(\[.*?\]);', text, re.DOTALL)
        if m_json:
            return json.loads(m_json.group(1))
    except Exception as e:
        print(f"[-] ไม่สามารถอ่านไฟล์เดิมได้: {e}")
    return []

def save_movies(movies):
    # ปรับแต่ง URL รูปภาพทุกเรื่องให้ปลอดภัยก่อนบันทึก
    for m in movies:
        if "poster" in m:
            m["poster"] = safe_url(m["poster"])
        if "backdrop" in m:
            m["backdrop"] = safe_url(m["backdrop"])
        if "originalUrl" in m:
            m["originalUrl"] = m["originalUrl"].replace("www.24-hdx.com", "www.24-hda.com")

    with open(MOVIES_FILE, "w", encoding="utf-8") as f:
        f.write("// ฐานข้อมูลภาพยนตร์รวม 24-HD และ GOSERIES4K ปี 2026 พากย์ไทย\n")
        f.write("window.movies = ")
        json.dump(movies, f, ensure_ascii=False, indent=2)
        f.write(";\nvar movies = window.movies;\n")
    print(f"\n[✓] บันทึกข้อมูลสำเร็จ! รวมทั้งหมด {len(movies)} เรื่องลงใน js/movies.js")

def update_24hda():
    print("\n--- กำลังตรวจสอบภาพยนตร์ใหม่จาก 24-HD (24-HDA) (ปี 2026 5⭐ พากย์ไทย) ---")
    new_movies = []
    
    for page in range(1, 4):
        url = "https://www.24-hda.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/" if page == 1 else f"https://www.24-hda.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/page/{page}/"
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as resp:
                page_html = resp.read().decode('utf-8', errors='ignore')
        except Exception as e:
            print(f"  [-] ข้อผิดพลาดหน้า {page}: {e}")
            break
            
        card_matches = re.findall(r'<a[^>]+href="(https://www\.24-hda\.com/[^"\'#/]+/)"[^>]*>(.*?)</a>', page_html, re.DOTALL)
        for link, inner in card_matches:
            if any(x in link for x in ["category", "page", "wp-", "netflix", "series", "topimdb", "dmca", "contact", "request"]) or len(link) < 25:
                continue
                
            rating_m = re.search(r'<span>([0-9.]+)<span class="[^"]*imdbstar', inner)
            if not rating_m:
                rating_m = re.search(r'class="info1">([0-9.]+)<', inner)
            rating = 7.0
            if rating_m:
                try:
                    r = float(rating_m.group(1))
                    if 1.0 <= r <= 10.0: rating = r
                except: pass
                
            if rating < 5.0:
                continue
                
            img_m = re.search(r'data-lazy-src=["\']([^"\']+)["\']', inner) or re.search(r'src=["\']([^"\']+)["\']', inner)
            alt_m = re.search(r'alt=["\']([^"\']+)["\']', inner)
            poster = img_m.group(1) if img_m and "svg" not in img_m.group(1) else ""
            raw_title = alt_m.group(1) if alt_m else link.strip("/").split("/")[-1].replace("-", " ").title()
            
            # Strict filter: Block if sub-only (no Thai dub)
            if "ซับไทย" in raw_title and "พากย์ไทย" not in raw_title and "-thai" not in link:
                continue
                
            title = re.sub(r'^(ฟรี|HD|Zoom|ดูหนังออนไลน์|ดูหนัง)\s*', '', raw_title).strip()
            
            try:
                m_req = urllib.request.Request(link, headers=HEADERS)
                with urllib.request.urlopen(m_req, timeout=8) as m_resp:
                    m_html = m_resp.read().decode('utf-8', errors='ignore')
                    
                post_id_m = re.search(r'data-post-id=["\'](\d+)["\']', m_html) or re.search(r'"post_id":\s*(\d+)', m_html)
                if not post_id_m: continue
                post_id = post_id_m.group(1)
                
                if not poster:
                    og_img = re.search(r'<meta property="og:image" content="([^"]+)"', m_html)
                    poster = og_img.group(1) if og_img else ""
                    
                og_desc = re.search(r'<meta property="og:description" content="([^"]+)"', m_html)
                desc = og_desc.group(1) if og_desc else f"ดูหนังออนไลน์ {title} (2026) พากย์ไทย เต็มเรื่อง HD"
                
                trailer_m = re.search(r'videoId:\s*["\']([^"\']+)["\']', m_html)
                trailer = f"https://www.youtube.com/embed/{trailer_m.group(1)}" if trailer_m else ""
                
                # Fetch video via API
                api_url = "https://api.24-hda.com/get.php"
                api_headers = HEADERS.copy()
                api_headers.update({
                    "Referer": link,
                    "Origin": "https://www.24-hda.com",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest"
                })
                api_data = urllib.parse.urlencode({
                    "action": "halim_ajax_player",
                    "nonce": "",
                    "episode": "1",
                    "server": "1",
                    "postid": post_id,
                    "lang": "Thai",
                    "title": ""
                }).encode('utf-8')
                
                api_req = urllib.request.Request(api_url, data=api_data, headers=api_headers)
                with urllib.request.urlopen(api_req, timeout=8) as api_resp:
                    api_res = api_resp.read().decode('utf-8', errors='ignore')
                    iframe = re.search(r'src=["\']([^"\']+)["\']', api_res)
                    if iframe:
                        video_url = iframe.group(1).replace("\\/", "/")
                    else: continue
                    
                # Probe if this 24-HDA item has multiple episodes
                ep_urls = {"1": video_url}
                for ep_idx in range(2, 41):
                    ep_data = urllib.parse.urlencode({
                        "action": "halim_ajax_player",
                        "nonce": "",
                        "episode": str(ep_idx),
                        "server": "1",
                        "postid": post_id,
                        "lang": "Thai",
                        "title": ""
                    }).encode('utf-8')
                    try:
                        ep_req = urllib.request.Request(api_url, data=ep_data, headers=api_headers)
                        with urllib.request.urlopen(ep_req, timeout=5) as ep_resp:
                            ep_res = ep_resp.read().decode('utf-8', errors='ignore')
                        ep_iframe = re.search(r'src=["\']([^"\']+)["\']', ep_res)
                        if ep_iframe and "24playerhd.com" in ep_iframe.group(1):
                            ep_urls[str(ep_idx)] = ep_iframe.group(1).replace("\\/", "/")
                        else:
                            break
                    except Exception:
                        break
                        
                total_hdx_eps = len(ep_urls)
                ep_list = [f"ตอนที่ {i}" for i in range(1, total_hdx_eps + 1)] if total_hdx_eps > 1 else ["เต็มเรื่อง"]
                duration_str = f"ซีรีส์ {total_hdx_eps} ตอนจบ" if total_hdx_eps > 1 else "ภาพยนตร์"

                safe_poster = safe_url(poster)
                movie_obj = {
                    "titleTh": title,
                    "titleEn": title,
                    "year": 2026,
                    "poster": safe_poster,
                    "backdrop": safe_poster,
                    "videoUrl": ep_urls.get("1", video_url),
                    "sourceType": "embed",
                    "description": desc,
                    "rating": rating,
                    "genres": ["24-HD", "พากย์ไทย", "หนังปี 2026"],
                    "duration": duration_str,
                    "trailerUrl": trailer,
                    "cast": [],
                    "source": "24HD",
                    "episodes": ep_list,
                    "episodeUrls": ep_urls,
                    "languages": ["Thai (พากย์ไทย)"],
                    "id": f"24hdx-{post_id}",
                    "postId": post_id,
                    "originalUrl": link
                }
                new_movies.append(movie_obj)
                print(f"  [+] 24-HD: {title} ({rating}⭐)")
                time.sleep(0.1)
            except Exception: pass
            
    return new_movies

def update_24hda_topmovies():
    """ดึงภาพยนตร์ยอดนิยม 2026 (TOP 8 / HOT) จาก stat API ของ 24-HD โดยตรง"""
    print("\n--- กำลังตรวจสอบภาพยนตร์ยอดนิยมประจำวัน/สัปดาห์ (Top Movies 2026) ---")
    top_movies = []
    headers = HEADERS.copy()
    headers.update({
        'Referer': 'https://www.24-hda.com/',
        'Origin': 'https://www.24-hda.com',
        'Accept': 'application/json'
    })
    
    top_items = []
    for t in ['day', 'week']:
        url = f'https://stat.24-hdx.com/topmovie?type={t}&web_id=1&max=10'
        req = urllib.request.Request(url, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=8) as r:
                data = json.loads(r.read().decode('utf-8'))
                for d in data:
                    if not any(x.get('post_title') == d.get('post_title') for x in top_items):
                        top_items.append(d)
        except Exception as e:
            print(f"  [-] ข้อผิดพลาด topmovie ({t}): {e}")
            
    for item in top_items:
        title_raw = item.get('post_title', '').strip()
        title_clean = re.sub(r'^(ฟรี|HD|Zoom|ดูหนังออนไลน์|ดูหนัง)\s*', '', title_raw).strip()
        path = item.get('url_path', '').strip()
        if not path.startswith('/'): path = '/' + path
        full_url = 'https://www.24-hda.com' + path
        if not full_url.endswith('/'): full_url += '/'
        
        try:
            page_req = urllib.request.Request(full_url, headers=HEADERS)
            with urllib.request.urlopen(page_req, timeout=8) as p_resp:
                html = p_resp.read().decode('utf-8', errors='ignore')
                
            post_id_m = re.search(r'data-post-id=["\'](\d+)["\']', html) or re.search(r'"post_id":\s*(\d+)', html) or re.search(r'post-(\d+)', html)
            post_id = post_id_m.group(1) if post_id_m else str(abs(hash(full_url)))[:6]
            
            img_url = item.get('image_url', '')
            if not img_url.startswith('http'):
                img_url = 'https://www.24-hda.com' + img_url
            safe_poster = safe_url(img_url)
            
            og_desc = re.search(r'<meta property="og:description" content="([^"]+)"', html)
            desc = og_desc.group(1) if og_desc else f"ดูหนังออนไลน์ {title_clean} (2026) พากย์ไทย ยอดนิยม เต็มเรื่อง HD"
            
            trailer_m = re.search(r'youtube\.com/(?:watch\?v=|embed/)([a-zA-Z0-9_-]+)', html) or re.search(r'videoId:\s*["\']([^"\']+)["\']', html)
            trailer = f"https://www.youtube.com/embed/{trailer_m.group(1)}" if trailer_m else ""
            
            api_url = "https://api.24-hda.com/get.php"
            api_headers = HEADERS.copy()
            api_headers.update({
                "Referer": full_url,
                "Origin": "https://www.24-hda.com",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest"
            })
            api_data = urllib.parse.urlencode({
                "action": "halim_ajax_player",
                "nonce": "",
                "episode": "1",
                "server": "1",
                "postid": post_id,
                "lang": "Thai",
                "title": ""
            }).encode('utf-8')
            
            video_url = ""
            try:
                api_req = urllib.request.Request(api_url, data=api_data, headers=api_headers)
                with urllib.request.urlopen(api_req, timeout=6) as api_resp:
                    api_res = api_resp.read().decode('utf-8', errors='ignore')
                    iframe_m = re.search(r'src=["\']([^"\']+)["\']', api_res)
                    if iframe_m:
                        video_url = iframe_m.group(1).replace("\\/", "/")
            except Exception: pass
            
            if not video_url:
                continue

                
            movie_obj = {
                "titleTh": title_clean,
                "titleEn": title_clean,
                "year": 2026,
                "poster": safe_poster,
                "backdrop": safe_poster,
                "videoUrl": video_url,
                "sourceType": "embed",
                "description": desc,
                "rating": 8.0,
                "genres": ["ยอดนิยม 2026", "24-HD", "พากย์ไทย", "หนังปี 2026"],
                "duration": "ภาพยนตร์",
                "trailerUrl": trailer,
                "cast": [],
                "source": "24-HD",
                "episodes": ["เต็มเรื่อง"],
                "id": f"24hdx-{post_id}",
                "postId": post_id,
                "originalUrl": full_url
            }
            top_movies.append(movie_obj)
            print(f"  [★ TOP] {title_clean}")
            time.sleep(0.1)
        except Exception: pass
        
    return top_movies

def update_24hd_media():
    """ดึงข้อมูลจากโดเมนใหม่ 24hd.media"""
    print("\n--- กำลังตรวจสอบภาพยนตร์ใหม่จาก 24HD.MEDIA (ปี 2026 พากย์ไทย) ---")
    new_movies = []
    
    for page in range(1, 3):
        url = "https://www.24hd.media/category/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%882026/" if page == 1 else f"https://www.24hd.media/category/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%882026/page/{page}/"
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as resp:
                page_html = resp.read().decode('utf-8', errors='ignore')
        except Exception as e:
            print(f"  [-] 24hd.media ข้อผิดพลาดหน้า {page}: {e}")
            break
            
        posts = re.findall(r'<h3 class="elementor-post__title">\s*<a href="(https://www\.24hd\.media/[^"]+)"\s*>(.*?)</a>', page_html, re.DOTALL)
        for link, raw_title in posts:
            if "ซับไทย" in raw_title and "พากย์ไทย" not in raw_title and "-thai" not in link:
                continue
                
            try:
                m_req = urllib.request.Request(link, headers=HEADERS)
                with urllib.request.urlopen(m_req, timeout=8) as m_resp:
                    m_html = m_resp.read().decode('utf-8', errors='ignore')
                    
                og_title = re.search(r'<meta property="og:title" content="([^"]+)"', m_html)
                title = og_title.group(1) if og_title else raw_title
                title = html.unescape(title)
                title = re.sub(r'^(ฟรี|HD|Zoom|ดูหนังออนไลน์|ดูหนัง)\s*', '', title).strip()
                title = re.sub(r'\s*(ดูหนังฟรี|หนังHD|เต็มเรื่อง|พากย์ไทย|ซับไทย|มาสเตอร์|ชนโรง).*$', '', title).strip()
                
                if "ซับไทย" in title and "พากย์ไทย" not in title and "-thai" not in link:
                    continue
                    
                og_img = re.search(r'<meta property="og:image" content="([^"]+)"', m_html)
                poster = og_img.group(1) if og_img else ""
                
                og_desc = re.search(r'<meta property="og:description" content="([^"]+)"', m_html)
                desc = og_desc.group(1) if og_desc else f"ดูหนังออนไลน์ {title} (2026) พากย์ไทย เต็มเรื่อง HD"
                
                iframe_m = re.search(r'<iframe[^>]+(?:data-src|src)=["\'](https://[^"\']+)["\']', m_html)
                if not iframe_m:
                    continue
                video_url = iframe_m.group(1)
                
                post_id_m = re.search(r'data-post-id=["\'](\d+)["\']', m_html) or re.search(r'post-(\d+)', m_html)
                post_id = post_id_m.group(1) if post_id_m else "media-" + str(abs(hash(link)))[:6]
                
                safe_poster = safe_url(poster)
                movie_obj = {
                    "titleTh": title,
                    "titleEn": title,
                    "year": 2026,
                    "poster": safe_poster,
                    "backdrop": safe_poster,
                    "videoUrl": video_url,
                    "sourceType": "embed",
                    "description": desc,
                    "rating": 7.5,
                    "genres": ["24HD.MEDIA", "พากย์ไทย", "หนังปี 2026"],
                    "duration": "ภาพยนตร์",
                    "trailerUrl": "",
                    "cast": [],
                    "source": "24HD.MEDIA",
                    "episodes": ["เต็มเรื่อง"],
                    "episodeUrls": {"1": video_url},
                    "languages": ["Thai (พากย์ไทย)"],
                    "id": f"24hdmedia-{post_id}",
                    "postId": post_id,
                    "originalUrl": link
                }
                new_movies.append(movie_obj)
                print(f"  [+] 24HD.MEDIA: {title}")
                time.sleep(0.1)
            except Exception: pass
            
    return new_movies

def update_goseries4k():
    print("\n--- กำลังตรวจสอบซีรีส์ใหม่และอัปเดตตอนล่าสุดจาก GOSERIES4K (พากย์ไทย) ---")
    new_series = []
    categories = [
        "https://goseries4k.com/category/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c-2026/",
        "https://goseries4k.com/cat_category/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%88%e0%b8%b5%e0%b8%99%e0%b8%9e%e0%b8%b2%e0%b8%81%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%97%e0%b8%a2/",
        "https://goseries4k.com/cat_category/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%80%e0%b8%81%e0%b8%b2%e0%b8%ab%e0%b8%a5%e0%b8%b5%e0%b8%9e%e0%b8%b2%e0%b8%81%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%97/"
    ]
    
    seen_all_links = set()
    for base_cat in categories:
        for page in range(1, 4):
            p_url = base_cat if page == 1 else f"{base_cat}page/{page}/"
            try:
                req = urllib.request.Request(p_url, headers=HEADERS)
                with urllib.request.urlopen(req, timeout=10) as resp:
                    html_txt = resp.read().decode('utf-8', errors='ignore')
            except Exception as e:
                print(f"  [-] ข้อผิดพลาดหน้า {page}: {e}")
                break
                
            items = re.findall(r'<a[^>]+href=["\'](https://goseries4k\.com/[^"\'#]+/)["\'][^>]*>(.*?)</a>', html_txt, re.DOTALL)
            
            seen_on_page = set()
            for link, inner in items:
                if any(x in link for x in ['category', 'cat_category', 'tag', 'page', 'wp-']) or len(link) < 25 or link in seen_on_page or link in seen_all_links:
                    continue
                seen_on_page.add(link)
                seen_all_links.add(link)
                
                title_m = re.search(r'alt=["\']([^"\']+)["\']', inner)
                raw_card_title = title_m.group(1) if title_m else ""
                
                try:
                    m_req = urllib.request.Request(link, headers=HEADERS)
                    with urllib.request.urlopen(m_req, timeout=8) as m_resp:
                        m_html = m_resp.read().decode('utf-8', errors='ignore')
                        
                    og_title = re.search(r'<meta property="og:title" content="([^"]+)"', m_html)
                    title = og_title.group(1) if og_title else raw_card_title
                    title = html.unescape(title)
                    
                    # ตรวจสอบพากย์ไทย (ต้องมีคำว่า "พากย์ไทย" ในหัวข้อ หรือมี "-thai" ใน URL หรือมีป้าย "SUB | TH")
                    has_thai_dub = ("พากย์ไทย" in title or "-thai" in link or "SUB | TH" in m_html)
                    # บล็อกหากเป็นซับไทยล้วนโดยไม่มีพากย์ไทย
                    if "ซับไทย" in title and "พากย์ไทย" not in title and "-thai" not in link and "SUB | TH" not in m_html:
                        continue
                    if not has_thai_dub:
                        continue
                      
                    title = re.sub(r'^(ฟรี|HD|Zoom|ดูซีรี่ย์|ดูซีรีส์|ซีรี่ย์|ซีรีส์|ออนไลน์)\s*', '', title).strip()
                    title = re.sub(r'\s*(จบ\s*G4|G4|HD|Full HD)\s*$', '', title, flags=re.IGNORECASE).strip()
                    
                    og_img = re.search(r'<meta property="og:image" content="([^"]+)"', m_html)
                    poster = og_img.group(1) if og_img else ""
                    
                    og_desc = re.search(r'<meta property="og:description" content="([^"]+)"', m_html)
                    desc = og_desc.group(1) if og_desc else f"ดูซีรีส์ {title} พากย์ไทย เต็มเรื่อง 2026"
                    
                    m_cache = re.search(r'window\.miru_ep_cache\s*=\s*(\{.*?\});', m_html, re.DOTALL) or re.search(r'miru_ep_cache\s*=\s*(\{.*?\});', m_html, re.DOTALL)
                    ep_cache = {}
                    if m_cache:
                        try: ep_cache = json.loads(m_cache.group(1))
                        except: pass
                        
                    buttons = re.findall(r'<button[^>]+class="[^"]*mp-ep-btn[^"]*"[^>]+data-id=["\'](\d+)["\'][^>]*>(.*?)</button>', m_html, re.DOTALL) or re.findall(r'<button[^>]+data-id=["\'](\d+)["\'][^>]*>(.*?)</button>', m_html, re.DOTALL)
                    
                    ordered_ep_urls = {}
                    curr_ep = 1
                    for did, btxt in buttons:
                        c_txt = re.sub(r'<[^>]+>', '', btxt).strip()
                        ep_m = re.search(r'(?:EP\.?|ตอนที่|ตอน)\s*(\d+)', c_txt, re.IGNORECASE)
                        if ep_m:
                            ep_n = int(ep_m.group(1))
                            curr_ep = ep_n
                        elif any(x in c_txt.upper() for x in ["END", "จบ", "LAST", "ตอนจบ"]):
                            ep_n = curr_ep + 1 if str(curr_ep) in ordered_ep_urls else curr_ep
                        else:
                            ep_n = curr_ep
                            
                        if str(ep_n) in ordered_ep_urls: continue
                        ep_h = ep_cache.get(did, "")
                        if ep_h:
                            embed_m = re.search(r'https?:\\?/\\?/torbo007\.com\\?/embed\\?/[a-zA-Z0-9]+', ep_h) or re.search(r'(?:src|data-src)=["\'](https?://[^"\']+)["\']', ep_h)
                            if embed_m:
                                ordered_ep_urls[str(ep_n)] = embed_m.group(0).replace('\\/', '/')
                                curr_ep = ep_n
                                
                    if not ordered_ep_urls: continue
                    
                    # Normalize sequential keys
                    sorted_k = sorted(ordered_ep_urls.keys(), key=lambda x: int(x) if x.isdigit() else 999)
                    normalized_urls = {str(i): ordered_ep_urls[k] for i, k in enumerate(sorted_k, 1)}
                    total_eps = len(normalized_urls)
                    
                    post_id_m = re.search(r'data-post-id=["\'](\d+)["\']', m_html)
                    post_id = post_id_m.group(1) if post_id_m else "gs-" + str(abs(hash(link)))[:6]
                    
                    safe_poster = clean_and_save_gs_poster(poster, post_id)
                    series_obj = {
                        "titleTh": title,
                        "titleEn": title,
                        "year": 2026,
                        "poster": safe_poster,
                        "backdrop": safe_poster,
                        "videoUrl": normalized_urls.get("1", ""),
                        "sourceType": "embed",
                        "description": desc,
                        "rating": 8.8,
                        "genres": ["ดูซีรี่ย์พากย์ไทย", "ซีรีส์แนะนำใหม่ 2026", "พากย์ไทย"],
                        "duration": f"ซีรีส์ {total_eps} ตอนจบ",
                        "trailerUrl": "",
                        "cast": [],
                        "source": "GOSERIES4K",
                        "episodes": [f"ตอนที่ {i}" for i in range(1, total_eps + 1)],
                        "episodeUrls": normalized_urls,
                        "languages": ["Thai (พากย์ไทย)"],
                        "id": f"gs-{post_id}",
                        "postId": post_id,
                        "originalUrl": link
                    }
                    new_series.append(series_obj)
                    print(f"  [+] GOSERIES4K: {title} ({total_eps} ตอน)")
                    time.sleep(0.1)
                except Exception as e:
                    pass
                
    return new_series

def update_wow_drama(max_pages=2):
    """
    ดึงข้อมูลละครไทยย้อนหลังและซีรีส์พากย์ไทยจาก WOW-DRAMA (https://wow-drama.com/)
    ครอบคลุม:
      1. ดูละครไทย ย้อนหลัง (the-series-th & cat_category ดูละครไทย-ย้อนหลัง)
      2. ซีรีส์จีนพากย์ไทย (cn-2024-th)
      3. ซีรีส์เกาหลีพากย์ไทย (korea-thai-sound)
      4. ซีรีส์ญี่ปุ่นพากย์ไทย (jp-thai-sound)
    """
    print("\n--- กำลังตรวจสอบละครไทยย้อนหลังและซีรีส์พากย์ไทยจาก WOW-DRAMA ---")
    categories = [
        ("ละครไทย", "https://wow-drama.com/cat_category/%e0%b8%94%e0%b8%b9%e0%b8%a5%e0%b8%b0%e0%b8%84%e0%b8%a3%e0%b9%84%e0%b8%97%e0%b8%a2-%e0%b8%a2%e0%b9%89%e0%b8%ad%e0%b8%99%e0%b8%ab%e0%b8%a5%e0%b8%b1%e0%b8%87/"),
        ("ละครไทย", "https://wow-drama.com/category/the-series-th/"),
        ("ซีรีส์จีนพากย์ไทย", "https://wow-drama.com/cat_category/cn-2024-th/"),
        ("ซีรีส์เกาหลีพากย์ไทย", "https://wow-drama.com/cat_category/korea-thai-sound/"),
        ("ซีรีส์ญี่ปุ่นพากย์ไทย", "https://wow-drama.com/cat_category/jp-thai-sound/")
    ]
    
    new_items = []
    seen_links = set()
    
    for cat_name, cat_url in categories:
        print(f"\n[*] ดึงหมวดหมู่ WOW-DRAMA: {cat_name}")
        for page in range(1, max_pages + 1):
            p_url = cat_url if page == 1 else f"{cat_url}page/{page}/"
            try:
                req = urllib.request.Request(p_url, headers=HEADERS)
                with urllib.request.urlopen(req, timeout=10) as resp:
                    page_html = resp.read().decode('utf-8', errors='ignore')
            except Exception as e:
                print(f"  [-] ข้อผิดพลาดหน้า {page} ({cat_name}): {e}")
                break
                
            items = re.findall(r'<a[^>]+href=["\'](https?://wow-drama\.com/[^"\'#/]+/?)["\'][^>]*>', page_html)
            page_links = []
            for l in items:
                if any(x in l for x in ['category', 'cat_category', 'tag', 'page', 'wp-']) or l == 'https://wow-drama.com/':
                    continue
                if l not in seen_links:
                    seen_links.add(l)
                    page_links.append(l)
                    
            print(f"  หน้า {page}: พบ {len(page_links)} เรื่อง")
            
            for link in page_links:
                try:
                    m_req = urllib.request.Request(link, headers=HEADERS)
                    with urllib.request.urlopen(m_req, timeout=8) as m_resp:
                        m_html = m_resp.read().decode('utf-8', errors='ignore')
                        
                    og_title = re.search(r'<meta property="og:title" content="([^"]+)"', m_html)
                    raw_title = og_title.group(1) if og_title else ""
                    raw_title = html.unescape(raw_title)
                    
                    # Clean title
                    title = re.sub(r'^(ฟรี|HD|Zoom|ดูซีรี่[ยส]์?|ดูซีรีส์|ซีรี่[ยส]์?|ซีรีส์|ดูละคร|ละคร|ดูหนัง)\s*(ไทย|จีน|เกาหลี|ญี่ปุ่น)?\s*[:|]?\s*', '', raw_title, flags=re.IGNORECASE).strip()
                    title = re.sub(r'\s*(\(พากย์ไทย/ซับไทย\)|\(พากย์ไทย\)|พากย์ไทย\+ซับ|พากย์ไทย/ซับไทย|พากย์ไทย|ซับไทย\s*\|\s*พากย์ไทย|ซับไทย|ครบทุกตอน|จบเรื่อง|เต็มเรื่อง|จบ\s*G4|G4|HD|Full HD|EP[\s\.\d\-]+|ตอนที่[\s\.\d\-]+|ตอนจบ|\(ตอนจบ\)|\(จบ\))\s*$', '', title, flags=re.IGNORECASE).strip()
                    title = re.sub(r'\s*[:|]\s*$', '', title).strip()
                    
                    if not title:
                        continue
                        
                    og_img = re.search(r'<meta property="og:image" content="([^"]+)"', m_html)
                    poster = og_img.group(1) if og_img else ""
                    safe_poster = clean_and_save_gs_poster(poster, post_id)
                    
                    og_desc = re.search(r'<meta property="og:description" content="([^"]+)"', m_html)
                    desc = og_desc.group(1) if og_desc else f"ดู {title} พากย์ไทย ละครไทยย้อนหลัง เต็มเรื่อง HD"
                    
                    year_m = re.search(r'\b(202[0-9])\b', title + " " + raw_title + " " + link)
                    year = int(year_m.group(1)) if year_m else 2026
                    
                    ep_data_m = re.search(r'var epData\s*=\s*(\{.*?\});', m_html, re.DOTALL)
                    nonce_m = re.search(r'var miruNonce\s*=\s*["\']([^"\']+)["\']', m_html)
                    ajax_m = re.search(r'var miruAjaxUrl\s*=\s*["\']([^"\']+)["\']', m_html)
                    post_id_m = re.search(r'var parentPostId\s*=\s*["\']([^"\']+)["\']', m_html) or re.search(r'post-(\d+)', m_html)
                    
                    post_id = post_id_m.group(1) if post_id_m else str(abs(hash(link)))[:6]
                    nonce = nonce_m.group(1) if nonce_m else ""
                    ajax_url = ajax_m.group(1) if ajax_m else "https://wow-drama.com/wp-admin/admin-ajax.php"
                    
                    if not ep_data_m or not nonce:
                        continue
                        
                    ep_json = json.loads(ep_data_m.group(1))
                    if not ep_json:
                        continue
                        
                    api_headers = {
                        'User-Agent': HEADERS['User-Agent'],
                        'Referer': link,
                        'Origin': 'https://wow-drama.com',
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                    
                    def fetch_single_ep(args):
                        idx, ep_id, ep_info = args
                        direct_embed = ep_info.get("embed", "")
                        if direct_embed:
                            return str(idx), direct_embed
                        data = urllib.parse.urlencode({
                            'action': 'miru_get_api_player_url',
                            'ep_id': ep_id,
                            'server_idx': '0',
                            'nonce': nonce
                        }).encode('utf-8')
                        try:
                            api_req = urllib.request.Request(ajax_url, data=data, headers=api_headers)
                            with urllib.request.urlopen(api_req, timeout=6) as api_resp:
                                api_res = json.loads(api_resp.read().decode('utf-8'))
                                if api_res.get('success') and api_res.get('data', {}).get('url'):
                                    return str(idx), api_res['data']['url']
                        except Exception:
                            pass
                        return str(idx), None

                    from concurrent.futures import ThreadPoolExecutor
                    tasks = [(i, eid, einfo) for i, (eid, einfo) in enumerate(ep_json.items(), 1)]
                    with ThreadPoolExecutor(max_workers=12) as executor:
                        ep_results = executor.map(fetch_single_ep, tasks)
                    
                    ep_urls = {k: v for k, v in ep_results if v}
                        
                    if not ep_urls:
                        continue
                        
                    total_eps = len(ep_urls)
                    first_video = ep_urls.get("1", "")
                    
                    genres = ["พากย์ไทย"]
                    if cat_name == "ละครไทย":
                        genres.extend(["ละครไทย", "ละครไทย ย้อนหลัง"])
                    elif "จีน" in cat_name:
                        genres.extend(["ซีรีส์จีน", "ซีรีส์จีน พากย์ไทย"])
                    elif "เกาหลี" in cat_name:
                        genres.extend(["ซีรีส์เกาหลี", "ซีรีส์เกาหลี พากย์ไทย"])
                    elif "ญี่ปุ่น" in cat_name:
                        genres.extend(["ซีรีส์ญี่ปุ่น", "ซีรีส์ญี่ปุ่น พากย์ไทย"])
                        
                    if year == 2026:
                        genres.append("ซีรีส์ใหม่ 2026")
                        
                    duration_str = f"ซีรีส์ {total_eps} ตอนจบ" if total_eps > 1 else "ภาพยนตร์"
                    ep_list = [f"ตอนที่ {i}" for i in range(1, total_eps + 1)] if total_eps > 1 else ["เต็มเรื่อง"]
                    
                    clean_title = clean_sub_text(title)
                    clean_desc = clean_sub_text(desc)
                    clean_poster = clean_and_save_wow_poster(safe_poster, post_id)
                    
                    item_obj = {
                        "titleTh": clean_title,
                        "titleEn": clean_title,
                        "year": year,
                        "poster": clean_poster,
                        "backdrop": clean_poster,
                        "videoUrl": first_video,
                        "sourceType": "embed",
                        "description": clean_desc,
                        "rating": 8.7,
                        "genres": genres,
                        "duration": duration_str,
                        "trailerUrl": "",
                        "cast": [],
                        "source": "WOW-DRAMA",
                        "episodes": ep_list,
                        "episodeUrls": ep_urls,
                        "languages": ["Thai (พากย์ไทย)"],
                        "id": f"wow-{post_id}",
                        "postId": post_id,
                        "originalUrl": link
                    }
                    new_items.append(item_obj)
                    print(f"    [+] WOW-DRAMA: {clean_title} ({total_eps} ตอน)")
                    time.sleep(0.06)
                except Exception:
                    pass
                    
    print(f"\n[✓] รวมดึงได้ทั้งหมด: {len(new_items)} เรื่องจาก WOW-DRAMA")
    return new_items

def fetch_single_24today(link, min_rating=6.0):
    try:
        m_req = urllib.request.Request(link, headers=HEADERS)
        with urllib.request.urlopen(m_req, timeout=7) as m_resp:
            m_html = m_resp.read().decode('utf-8', errors='ignore')
            
        # 1. ตรวจสอบคะแนน IMDb (ต้อง >= min_rating ดาว)
        score_m = re.search(r'imdb_46x22.*?<h2[^>]*>([0-9.]+)(?:/10)?</h2>', m_html, re.DOTALL)
        if not score_m:
            score_m = re.search(r'<h2[^>]*class="elementor-heading-title[^"]*"[^>]*>([0-9.]+)/10</h2>', m_html)
        score = float(score_m.group(1)) if score_m else 0.0
        if score < min_rating:
            return None
            
        # 2. ตรวจสอบเสียงพากย์ไทย (ต้องมี "เสียง : พากย์ไทย" หรือ "พากย์ไทย" และไม่ใช่ซับไทยล้วน)
        sound_m = re.search(r'เสียง\s*:\s*([^<]+)', m_html)
        sound = sound_m.group(1).strip() if sound_m else ""
        if "พากย์ไทย" not in sound:
            return None
            
        # 3. ดึงลิงก์เครื่องเล่นวิดีโอ Iframe
        iframe_m = re.search(r'<iframe[^>]+(?:data-src|src)=["\'](https://[^"\']+)["\']', m_html)
        if not iframe_m:
            return None
        video_url = iframe_m.group(1)
        
        # 4. ข้อมูลชื่อเรื่อง โปสเตอร์ รายละเอียด
        og_title = re.search(r'<meta property="og:title" content="([^"]+)"', m_html)
        raw_title = og_title.group(1) if og_title else link.strip("/").split("/")[-1]
        raw_title = html.unescape(raw_title)
        title = re.sub(r'^(ฟรี|HD|Zoom|ดูหนังออนไลน์|ดูหนัง)\s*', '', raw_title).strip()
        title = re.sub(r'\s*(ดูหนังฟรี|หนังHD|เต็มเรื่อง|พากย์ไทย|ซับไทย|มาสเตอร์|ชนโรง).*$', '', title).strip()
        
        og_img = re.search(r'<meta property="og:image" content="([^"]+)"', m_html)
        poster = og_img.group(1) if og_img else ""
        
        og_desc = re.search(r'<meta property="og:description" content="([^"]+)"', m_html)
        desc = og_desc.group(1) if og_desc else f"ดูหนังออนไลน์ {title} พากย์ไทย เต็มเรื่อง HD"
        
        year_m = re.search(r'\((\d{4})\)', raw_title) or re.search(r'/(\d{4})/?$', link)
        year = int(year_m.group(1)) if year_m else 2026
        
        post_id_m = re.search(r'data-post-id=["\'](\d+)["\']', m_html) or re.search(r'post-(\d+)', m_html)
        post_id = post_id_m.group(1) if post_id_m else str(abs(hash(link)))[:6]
        
        safe_poster = safe_url(poster)
        
        # ตรวจสอบว่าเป็นซีรีส์หรือภาพยนตร์
        is_series = bool(re.search(r'season|ep|ตอน|ซีรีส์|ซีรี่ย์', title, re.I))
        genres_list = ["24HD.TODAY", "พากย์ไทย", f"{score}⭐"]
        if is_series:
            genres_list.append("ดูซีรี่ย์พากย์ไทย")
            
        return {
            "titleTh": title,
            "titleEn": title,
            "year": year,
            "poster": safe_poster,
            "backdrop": safe_poster,
            "videoUrl": video_url,
            "sourceType": "embed",
            "description": desc,
            "rating": score,
            "genres": genres_list,
            "duration": "ซีรีส์" if is_series else "ภาพยนตร์",
            "trailerUrl": "",
            "cast": [],
            "source": "24HD.TODAY",
            "episodes": ["เต็มเรื่อง"],
            "episodeUrls": {"1": video_url},
            "languages": ["Thai (พากย์ไทย)"],
            "id": f"24hdtoday-{post_id}",
            "postId": post_id,
            "originalUrl": link
        }
    except Exception:
        return None

def update_24hd_today(min_rating=6.0, max_pages=3):
    """
    ดึงข้อมูลภาพยนตร์จาก 24HD.TODAY (https://www.24hd.today/)
    เงื่อนไข:
      - เฉพาะภาพยนตร์/ซีรีส์ที่มีเสียงพากย์ไทย
      - คะแนน IMDb เรตติ้ง 6.0 ดาวขึ้นไป (>= 6.0⭐)
      - ดึงแบบ Multi-threading ขนาน รวดเร็ว
    """
    print(f"\n--- กำลังตรวจสอบภาพยนตร์ใหม่จาก 24HD.TODAY (เรตติ้ง >= {min_rating}⭐ พากย์ไทย) ---")
    
    categories = [
        "https://www.24hd.today/",
        "https://www.24hd.today/category/หนังใหม่2026/",
        "https://www.24hd.today/category/thai-movie/",
        "https://www.24hd.today/category/netflix/",
        "https://www.24hd.today/category/inter-movie/",
        "https://www.24hd.today/category/asia-movie/"
    ]
    
    seen_links = set()
    candidate_links = []
    
    for cat_url in categories:
        for page in range(1, max_pages + 1):
            p_url = cat_url if page == 1 else f"{cat_url}page/{page}/"
            try:
                req = urllib.request.Request(p_url, headers=HEADERS)
                with urllib.request.urlopen(req, timeout=8) as resp:
                    page_html = resp.read().decode('utf-8', errors='ignore')
            except Exception:
                break
                
            links = re.findall(r'href=["\'](https://www\.24hd\.today/[a-zA-Z0-9-]+/?=?)["\']', page_html)
            for link in links:
                if any(x in link for x in ["category", "page", "wp-", "anime", "dmca", "contact", "request", "tag", "feed", "privacy", "about", "author"]):
                    continue
                slug = link.strip("/").split("/")[-1]
                if len(slug) < 4 or link in seen_links:
                    continue
                seen_links.add(link)
                candidate_links.append(link)

    print(f"[*] พบลิงก์ภาพยนตร์ที่ต้องตรวจสอบ: {len(candidate_links)} เรื่อง")
    
    new_movies = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        results = executor.map(lambda l: fetch_single_24today(l, min_rating=min_rating), candidate_links)
        for m in results:
            if m:
                new_movies.append(m)
                print(f"  [+] 24HD.TODAY ({m['rating']}⭐ พากย์ไทย): {m['titleTh']} ({m['year']})")
                
    print(f"[✓] รวมดึงได้ทั้งหมดจาก 24HD.TODAY: {len(new_movies)} เรื่อง (เรตติ้ง >= {min_rating}⭐)")
    return new_movies


def update_myserieshd(max_pages=15):
    """
    ดึงข้อมูลซีรีส์และภาพยนตร์ปี 2026 เฉพาะพากย์ไทยจาก MySeriesHD (https://myserieshd.com/)
    ดึงผ่านระบบค้นหา '2026 พากย์ไทย' พร้อมระบบ Multithreading ดึงตอนครบทุกตอน
    """
    print(f"\n--- กำลังตรวจสอบซีรีส์ใหม่ปี 2026 (พากย์ไทย) จาก MYSERIESHD (สูงสุด {max_pages} หน้า) ---")
    new_series = []
    seen_links = set()
    search_q = urllib.parse.quote("2026 พากย์ไทย")
    
    # ดึงรายชื่อที่มีอยู่แล้วเพื่อข้ามการดึงตอนซ้ำซ้อน
    existing_items = load_existing_movies()
    existing_dict = {}
    for ex in existing_items:
        t_key = ex.get("titleTh", "").strip().lower()
        if t_key:
            existing_dict[t_key] = len(ex.get("episodes", []))
        orig = ex.get("originalUrl", "")
        if orig:
            existing_dict[orig] = len(ex.get("episodes", []))

    def fetch_mshd_ep(p_id, ep_idx, ref_url):
        ajax_u = "https://myserieshd.com/wp-content/themes/getplayer-2025/framework/get-video.php"
        p_data = urllib.parse.urlencode({'post_id': str(p_id), 'ep_index': str(ep_idx)}).encode('utf-8')
        ep_req = urllib.request.Request(ajax_u, data=p_data, headers={
            'User-Agent': HEADERS['User-Agent'],
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Referer': ref_url
        })
        try:
            with urllib.request.urlopen(ep_req, timeout=8) as r:
                d = json.loads(r.read().decode('utf-8'))
                v_url = d.get('backup_video_url') or d.get('video_url', '')
                return ep_idx, v_url
        except Exception:
            return ep_idx, ''

    for page in range(1, max_pages + 1):
        if page == 1:
            page_url = f"https://myserieshd.com/?s={search_q}"
        else:
            page_url = f"https://myserieshd.com/page/{page}/?s={search_q}"
            
        print(f"[*] หน้า {page}/{max_pages}: {page_url}")
        try:
            req = urllib.request.Request(page_url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as resp:
                html_text = resp.read().decode('utf-8', errors='replace')
        except Exception as e:
            print(f"[-] ไม่สามารถเปิดหน้า {page} ได้: {e}")
            break
            
        cards = re.findall(r'<div class="movie-card">(.*?)</div>\s*</div>', html_text, re.DOTALL)
        if not cards:
            print(f"[*] ไม่พบการ์ดซีรีส์ในหน้า {page} (สิ้นสุดหน้า)")
            break
            
        for c in cards:
            link_m = re.search(r'href=["\'](https?://myserieshd\.com/[^"\']+)["\']', c)
            if not link_m:
                continue
            link = link_m.group(1)
            if link in seen_links:
                continue
            seen_links.add(link)
            
            title_m = re.search(r'alt=["\']([^"\']+)["\']', c)
            raw_title = title_m.group(1) if title_m else ""
            
            # ต้องเป็นพากย์ไทย
            if "พากย์ไทย" not in raw_title and "พากย์ไทย" not in c:
                continue
                
            img_m = re.search(r'src=["\']([^"\']+)["\']', c)
            raw_poster = img_m.group(1) if img_m else ""
            
            ep_info_m = re.search(r'class="m-epson">([^<]+)<', c)
            ep_info = ep_info_m.group(1).strip() if ep_info_m else ""
            
            status_m = re.search(r'class="m-status">([^<]+)<', c)
            status_text = status_m.group(1).strip() if status_m else ""
            
            card_ep_num = 1
            cep_m = re.search(r'EP\.(\d+)', ep_info, re.IGNORECASE)
            if cep_m:
                card_ep_num = int(cep_m.group(1))
                
            # ทำความสะอาดชื่อเรื่อง
            clean_title = re.sub(r'^(?:ดูซีรี่ย์|ดูซีรีส์|ซีรี่ย์|ซีรีส์|ดูหนัง|หนังจีน|หนังเกาหลี|หนังฝรั่ง|หนังอินเดีย|หนังไทย)\s*', '', raw_title, flags=re.IGNORECASE)
            clean_title = re.sub(r'\s*(?:ครบทุกตอน|เต็มเรื่อง|จบเรื่อง|ซับไทย|พากย์ไทย/ซับไทย|พากย์ไทย|\(END\)|\(จบ\))\s*$', '', clean_title, flags=re.IGNORECASE).strip()
            
            # ตรวจสอบปี 2026
            year = 2026
            year_m = re.search(r'\((\d{4})\)', clean_title) or re.search(r'\((\d{4})\)', raw_title) or re.search(r'-(\d{4})/?$', link)
            if year_m:
                year = int(year_m.group(1))
            if year != 2026:
                continue
                
            t_low = clean_title.lower()
            if (t_low in existing_dict and existing_dict[t_low] >= card_ep_num) or (link in existing_dict and existing_dict[link] >= card_ep_num):
                continue

            try:
                s_req = urllib.request.Request(link, headers=HEADERS)
                with urllib.request.urlopen(s_req, timeout=10) as s_resp:
                    s_html = s_resp.read().decode('utf-8', errors='replace')
                    
                post_id_m = re.search(r'const\s+postID\s*=\s*(\d+);', s_html)
                if not post_id_m:
                    continue
                post_id = post_id_m.group(1)
                
                ep_buttons = re.findall(r'<button[^>]*class=["\'][^"\']*ep-btn[^"\']*["\'][^>]*data-index=["\'](\d+)["\'][^>]*>(.*?)</button>', s_html)
                if not ep_buttons:
                    ep_indices = [1]
                else:
                    ep_indices = [int(x[0]) for x in ep_buttons]
                    ep_indices = sorted(set(ep_indices))
                    
                total_eps = len(ep_indices)
                
                if t_low in existing_dict and existing_dict[t_low] >= total_eps:
                    continue
                
                desc_m = re.search(r'<meta property="og:description" content="([^"]+)"', s_html)
                desc = desc_m.group(1) if desc_m else clean_title
                
                genres = ["ดูซีรี่ย์พากย์ไทย", "ซีรีส์ใหม่ 2026", "พากย์ไทย"]
                combined_check = (raw_title + " " + clean_title + " " + s_html).lower()
                if any(x in combined_check for x in ["จีน", "chinese"]):
                    genres.extend(["ซีรีส์จีน", "ซีรีส์จีน พากย์ไทย"])
                elif any(x in combined_check for x in ["เกาหลี", "korea", "kr-series"]):
                    genres.extend(["ซีรีส์เกาหลี", "ซีรีส์เกาหลี พากย์ไทย"])
                elif any(x in combined_check for x in ["ละคร", "ละครไทย", "lakorn"]):
                    genres.append("ละครไทย ย้อนหลัง")
                elif any(x in combined_check for x in ["อินเดีย"]):
                    genres.append("เอเชีย")
                    
                ordered_ep_urls = {}
                with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
                    futures = [executor.submit(fetch_mshd_ep, post_id, ep_idx, link) for ep_idx in ep_indices]
                    for f in concurrent.futures.as_completed(futures):
                        ep_i, v_url = f.result()
                        if v_url:
                            ordered_ep_urls[str(ep_i)] = v_url
                            
                if not ordered_ep_urls:
                    continue
                    
                sorted_k = sorted(ordered_ep_urls.keys(), key=lambda x: int(x) if x.isdigit() else 999)
                normalized_urls = {str(i): ordered_ep_urls[k] for i, k in enumerate(sorted_k, 1)}
                actual_total = len(normalized_urls)
                
                is_ended = "จบ" in status_text or "จบ" in raw_title or "(END)" in raw_title
                duration_str = f"ซีรีส์ {actual_total} ตอนจบ" if is_ended else f"ซีรีส์ {actual_total} ตอน (อัปเดต)"
                if actual_total == 1 and ("หนัง" in raw_title or "movie" in link):
                    duration_str = "ภาพยนตร์เต็มเรื่อง"
                
                safe_poster = safe_url(raw_poster)
                
                series_obj = {
                    "titleTh": clean_title,
                    "titleEn": clean_title,
                    "year": 2026,
                    "poster": safe_poster,
                    "backdrop": safe_poster,
                    "videoUrl": normalized_urls.get("1", ""),
                    "sourceType": "embed",
                    "description": desc,
                    "rating": 8.8,
                    "genres": list(dict.fromkeys(genres)),
                    "duration": duration_str,
                    "trailerUrl": "",
                    "cast": [],
                    "source": "MYSERIESHD",
                    "episodes": [f"ตอนที่ {i}" for i in range(1, actual_total + 1)],
                    "episodeUrls": normalized_urls,
                    "languages": ["Thai (พากย์ไทย)"],
                    "id": f"mshd-{post_id}",
                    "postId": post_id,
                    "originalUrl": link
                }
                new_series.append(series_obj)
                print(f"  [+] MYSERIESHD: {clean_title} ({actual_total} ตอน)")
                time.sleep(0.05)
            except Exception as e:
                print(f"  [-] ข้ามเรื่อง {clean_title}: {e}")
                
    print(f"[✓] รวมดึงได้ทั้งหมดจาก MYSERIESHD: {len(new_series)} เรื่อง")
    return new_series


def generate_sitemap(movies):
    """สร้าง sitemap.xml จากรายการภาพยนตร์ปัจจุบันอัตโนมัติ (รวมในไฟล์เดียว)"""
    try:
        today = datetime.datetime.now().strftime("%Y-%m-%d")
        xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        xml += '  <url>\n'
        xml += '    <loc>./</loc>\n'
        xml += f'    <lastmod>{today}</lastmod>\n'
        xml += '    <changefreq>daily</changefreq>\n'
        xml += '    <priority>1.0</priority>\n'
        xml += '  </url>\n'

        for movie in movies:
            m_id = movie.get("id", "")
            if not m_id:
                continue
            xml += '  <url>\n'
            xml += f'    <loc>./#play-{m_id}</loc>\n'
            xml += f'    <lastmod>{today}</lastmod>\n'
            xml += '    <changefreq>weekly</changefreq>\n'
            xml += '    <priority>0.8</priority>\n'
            xml += '  </url>\n'

        xml += '</urlset>\n'

        sitemap_path = os.path.join(BASE_DIR, "sitemap.xml")
        with open(sitemap_path, "w", encoding="utf-8") as f:
            f.write(xml)
        print(f"[✓] สร้างและอัปเดต sitemap.xml สำเร็จ ({len(movies)} เรื่อง)")
    except Exception as e:
        print(f"[-] เกิดข้อผิดพลาดในการสร้าง sitemap.xml: {e}")

def push_to_github():
    """ส่งข้อมูลภาพยนตร์ที่อัปเดตขึ้น GitHub อัตโนมัติ (เฉพาะไฟล์ข้อมูลหนัง js/movies.js และ sitemap.xml)"""
    print("\n--- กำลังส่งข้อมูลขึ้น GitHub (Cloudflare Pages จะอัปเดตให้อัตโนมัติ) ---")
    repo_branch = "main"
    try:
        check_git = subprocess.run(["git", "status"], cwd=BASE_DIR, capture_output=True, text=True)
        if check_git.returncode == 0:
            # เพิ่มเฉพาะไฟล์ข้อมูลภาพยนตร์และ sitemap เท่านั้น เพื่อไม่ให้อัปเดตไฟล์อื่นปะปน
            subprocess.run(["git", "add", "js/movies.js", "sitemap.xml"], cwd=BASE_DIR, check=True)
            status = subprocess.run(["git", "status", "--porcelain", "js/movies.js", "sitemap.xml"], cwd=BASE_DIR, capture_output=True, text=True).stdout
            
            if status.strip():
                now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
                commit_msg = f"Auto update movies database & sitemap [{now_str}]"
                subprocess.run(["git", "commit", "-m", commit_msg], cwd=BASE_DIR, check=True)
                push_res = subprocess.run(["git", "push", "origin", repo_branch], cwd=BASE_DIR, capture_output=True, text=True)
                if push_res.returncode == 0:
                    print("✅ [Git] อัปโหลดข้อมูลภาพยนตร์ขึ้น GitHub สำเร็จเรียบร้อย!")
                    return True
                else:
                    print(f"[-] [Git] ข้อผิดพลาดในการ push: {push_res.stderr.strip()}")
            else:
                print("ℹ️ [Git] ข้อมูลหนังเป็นเวอร์ชันล่าสุดแล้ว (ไม่มีไฟล์เปลี่ยนแปลง)")
                return True
    except Exception as e:
        print(f"[-] [Git] ไม่สามารถใช้งานคำสั่ง git ได้: {e}")
        
    # GitHub API Fallback (หากรันบนระบบที่ไม่มี Git CLI แต่มี GITHUB_TOKEN)
    token = os.environ.get("GITHUB_TOKEN", "")
    if token:
        print("กำลังอัปโหลดผ่าน GitHub API...")
        for filepath in ["js/movies.js", "sitemap.xml"]:
            p = os.path.join(BASE_DIR, filepath)
            if not os.path.exists(p):
                continue
            with open(p, "rb") as f:
                content_bytes = f.read()
            b64_content = base64.b64encode(content_bytes).decode("utf-8")
            url = f"https://api.github.com/repos/ittest5455-test/movie/contents/{filepath}"
            headers = {
                "Authorization": f"token {token}",
                "Accept": "application/vnd.github.v3+json",
                "Content-Type": "application/json",
                "User-Agent": "Python-GitHub-Pusher"
            }
            sha = None
            try:
                req_get = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req_get) as res:
                    data = json.loads(res.read().decode("utf-8"))
                    sha = data["sha"]
            except Exception:
                pass
            payload = {
                "message": f"Update {filepath} for auto daily deployment",
                "content": b64_content,
                "branch": repo_branch
            }
            if sha:
                payload["sha"] = sha
            try:
                req_put = urllib.request.Request(url, headers=headers, method="PUT")
                req_put.data = json.dumps(payload).encode("utf-8")
                with urllib.request.urlopen(req_put) as res:
                    print(f"✅ Successfully pushed {filepath} to GitHub via API!")
            except Exception as e:
                print(f"❌ Error pushing {filepath} via API: {e}")
    return True


def main(auto_push=True):
    print("=" * 60)
    print("🚀 เริ่มต้นระบบอัปเดตภาพยนตร์และซีรีส์ใหม่ล่าสุด...")
    print("=" * 60)
    
    existing = load_existing_movies()
    print(f"[*] ฐานข้อมูลปัจจุบันมี: {len(existing)} เรื่อง")
    
    # 1. Fetch updates from sources
    scraped_top = update_24hda_topmovies()
    scraped_24hda = update_24hda()
    scraped_media = update_24hd_media()
    scraped_gs = update_goseries4k()
    scraped_wow = update_wow_drama(max_pages=2)
    scraped_today = update_24hd_today(min_rating=6.0, max_pages=3)
    scraped_mshd = update_myserieshd(max_pages=15)
    
    # 2. Merge intelligently
    existing_map = {m.get("originalUrl", m.get("id", "")): m for m in existing}
    
    # Also index by titleTh for cross-domain matching
    title_map = {m.get("titleTh", "").strip().lower(): m for m in existing if m.get("titleTh")}
    
    added_new = 0
    updated_eps = 0
    
    all_new_items = scraped_top + scraped_media + scraped_24hda + scraped_today + scraped_gs + scraped_wow + scraped_mshd
    
    for item in all_new_items:
        key = item.get("originalUrl", item.get("id", ""))
        title_key = item.get("titleTh", "").strip().lower()
        
        match = existing_map.get(key) or title_map.get(title_key)
        
        if match:
            # Tag popular if present
            if "ยอดนิยม 2026" in item.get("genres", []) and "ยอดนิยม 2026" not in match.get("genres", []):
                match["genres"].insert(0, "ยอดนิยม 2026")
            # Check if new episodes were added
            old_eps = len(match.get("episodes", []))
            new_eps = len(item.get("episodes", []))
            if new_eps > old_eps:
                match["episodes"] = item["episodes"]
                match["episodeUrls"] = item["episodeUrls"]
                match["duration"] = item["duration"]
                updated_eps += 1
                print(f"  [*] อัปเดตตอนเพิ่ม: {item['titleTh']} ({old_eps} -> {new_eps} ตอน)")
            # Update poster if older was invalid/empty
            if not match.get("poster") and item.get("poster"):
                match["poster"] = item["poster"]
                match["backdrop"] = item["backdrop"]
        else:
            # Prepend new item to front
            existing.insert(0, item)
            existing_map[key] = item
            if title_key:
                title_map[title_key] = item
            added_new += 1
            print(f"  [+] เพิ่มเรื่องใหม่: {item['titleTh']}")
            
    save_movies(existing)
    
    # 3. สร้างและอัปเดต sitemap.xml อัตโนมัติในไฟล์เดียว
    generate_sitemap(existing)
    
    # 4. ส่งข้อมูลขึ้น GitHub อัตโนมัติ (เฉพาะไฟล์ฐานข้อมูลหนัง js/movies.js และ sitemap.xml)
    if auto_push:
        push_to_github()
    
    print("\n" + "=" * 60)
    print(f"🎉 อัปเดตเสร็จสมบูรณ์!")
    print(f"  - เพิ่มเรื่องใหม่: {added_new} เรื่อง")
    print(f"  - อัปเดตตอนเพิ่ม: {updated_eps} เรื่อง")
    print(f"  - ฐานข้อมูลรวมปัจจุบัน: {len(existing)} เรื่อง")
    print("=" * 60)

if __name__ == "__main__":
    auto_push = "--no-push" not in sys.argv
    main(auto_push=auto_push)
