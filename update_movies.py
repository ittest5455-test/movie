# -*- coding: utf-8 -*-
"""
ระบบอัปเดตหนังและซีรีส์ใหม่อัตโนมัติ (Auto-Updater)
ดึงข้อมูลภาพยนตร์ใหม่จาก 24-HD (24-HDA / 24HD.MEDIA) และ ซีรีส์ใหม่จาก GOSERIES4K (เฉพาะพากย์ไทย)
"""

import urllib.request
import urllib.parse
import html
import re
import json
import time
import os
import sys

# Set output encoding to UTF-8
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MOVIES_FILE = os.path.join(BASE_DIR, "js", "movies.js")

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
                
                iframe_m = re.search(r'<iframe[^>]+src=["\'](https://[^\'"]+)["\']', m_html)
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
    base_cat = "https://goseries4k.com/category/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c-2026/"
    
    for page in range(1, 6):
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
            if any(x in link for x in ['category', 'cat_category', 'tag', 'page', 'wp-']) or len(link) < 25 or link in seen_on_page:
                continue
            seen_on_page.add(link)
            
            title_m = re.search(r'alt=["\']([^"\']+)["\']', inner)
            raw_card_title = title_m.group(1) if title_m else ""
            
            try:
                m_req = urllib.request.Request(link, headers=HEADERS)
                with urllib.request.urlopen(m_req, timeout=8) as m_resp:
                    m_html = m_resp.read().decode('utf-8', errors='ignore')
                    
                # Strict Thai Dubbed check: Must have "พากย์ไทย" in title or "-thai" in URL, and NOT sub-only
                has_dub_keyword = ("พากย์ไทย" in raw_card_title or "-thai" in link)
                is_sub_only = ("ซับไทย" in raw_card_title and "พากย์ไทย" not in raw_card_title)
                is_thai = has_dub_keyword and not is_sub_only
                if not is_thai: continue
                
                og_title = re.search(r'<meta property="og:title" content="([^"]+)"', m_html)
                title = og_title.group(1) if og_title else raw_card_title
                title = html.unescape(title)
                
                # Strict filter: Block only if sub-only (no Thai dub)
                if "ซับไทย" in title and "พากย์ไทย" not in title and "-thai" not in link:
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
                
                safe_poster = safe_url(poster)
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
                    "genres": ["ซีรีส์แนะนำใหม่ 2026", "พากย์ไทย", "GOSERIES4K"],
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
            except Exception: pass
            
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
                    safe_poster = safe_url(poster)
                    
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
                    
                    genres = ["พากย์ไทย", "WOW-DRAMA"]
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
                    
                    item_obj = {
                        "titleTh": title,
                        "titleEn": title,
                        "year": year,
                        "poster": safe_poster,
                        "backdrop": safe_poster,
                        "videoUrl": first_video,
                        "sourceType": "embed",
                        "description": desc,
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
                    print(f"    [+] WOW-DRAMA: {title} ({total_eps} ตอน)")
                    time.sleep(0.06)
                except Exception:
                    pass
                    
    print(f"\n[✓] รวมดึงได้ทั้งหมด: {len(new_items)} เรื่องจาก WOW-DRAMA")
    return new_items

def main():
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
    
    # 2. Merge intelligently
    existing_map = {m.get("originalUrl", m.get("id", "")): m for m in existing}
    
    # Also index by titleTh for cross-domain matching
    title_map = {m.get("titleTh", "").strip().lower(): m for m in existing if m.get("titleTh")}
    
    added_new = 0
    updated_eps = 0
    
    all_new_items = scraped_top + scraped_media + scraped_24hda + scraped_gs + scraped_wow
    
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
    
    print("\n" + "=" * 60)
    print(f"🎉 อัปเดตเสร็จสมบูรณ์!")
    print(f"  - เพิ่มเรื่องใหม่: {added_new} เรื่อง")
    print(f"  - อัปเดตตอนเพิ่ม: {updated_eps} เรื่อง")
    print(f"  - ฐานข้อมูลรวมปัจจุบัน: {len(existing)} เรื่อง")
    print("=" * 60)

if __name__ == "__main__":
    main()
