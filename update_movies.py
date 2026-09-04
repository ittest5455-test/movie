# -*- coding: utf-8 -*-
"""
ระบบอัปเดตหนังและซีรีส์ใหม่อัตโนมัติ (Auto-Updater)
ดึงข้อมูลภาพยนตร์ใหม่จาก 24-HDX และ ซีรีส์ใหม่จาก GOSERIES4K (เฉพาะพากย์ไทย)
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
    with open(MOVIES_FILE, "w", encoding="utf-8") as f:
        f.write("// ฐานข้อมูลภาพยนตร์รวม 24-HDX และ GOSERIES4K ปี 2026 พากย์ไทย\n")
        f.write("window.movies = ")
        json.dump(movies, f, ensure_ascii=False, indent=2)
        f.write(";\nvar movies = window.movies;\n")
    print(f"\n[✓] บันทึกข้อมูลสำเร็จ! รวมทั้งหมด {len(movies)} เรื่องลงใน js/movies.js")

def update_24hdx():
    print("\n--- กำลังตรวจสอบภาพยนตร์ใหม่จาก 24-HDX (ปี 2026 5⭐ พากย์ไทย) ---")
    new_movies = []
    
    for page in range(1, 4):
        url = "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/" if page == 1 else f"https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/page/{page}/"
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as resp:
                page_html = resp.read().decode('utf-8', errors='ignore')
        except Exception as e:
            print(f"  [-] ข้อผิดพลาดหน้า {page}: {e}")
            break
            
        card_matches = re.findall(r'<a[^>]+href="(https://www\.24-hdx\.com/[^"\'#/]+/)"[^>]*>(.*?)</a>', page_html, re.DOTALL)
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
                
            img_m = re.search(r'(?:data-lazy-src|src)=["\']([^"\']+)["\']', inner)
            alt_m = re.search(r'alt=["\']([^"\']+)["\']', inner)
            poster = img_m.group(1) if img_m and "svg" not in img_m.group(1) else ""
            raw_title = alt_m.group(1) if alt_m else link.strip("/").split("/")[-1].replace("-", " ").title()
            
            # Filter out Sub-only (ซับไทย) movies
            if "ซับไทย" in raw_title and "พากย์ไทย" not in raw_title:
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
                api_url = "https://api.24-hdx.com/get.php"
                api_headers = HEADERS.copy()
                api_headers.update({
                    "Referer": link,
                    "Origin": "https://www.24-hdx.com",
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
                    
                # Probe if this 24-HDX item has multiple episodes
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
                            ep_urls[str(ep_idx)] = ep_iframe.group(1).replace("\/", "/")
                        else:
                            break
                    except Exception:
                        break
                        
                total_hdx_eps = len(ep_urls)
                ep_list = [f"ตอนที่ {i}" for i in range(1, total_hdx_eps + 1)] if total_hdx_eps > 1 else ["เต็มเรื่อง"]
                duration_str = f"ซีรีส์ {total_hdx_eps} ตอนจบ" if total_hdx_eps > 1 else "ภาพยนตร์"

                movie_obj = {
                    "titleTh": title,
                    "titleEn": title,
                    "year": 2026,
                    "poster": poster,
                    "backdrop": poster,
                    "videoUrl": ep_urls.get("1", video_url),
                    "sourceType": "embed",
                    "description": desc,
                    "rating": rating,
                    "genres": ["24-HDX", "พากย์ไทย", "หนังปี 2026"],
                    "duration": duration_str,
                    "trailerUrl": trailer,
                    "cast": [],
                    "source": "24HDX",
                    "episodes": ep_list,
                    "episodeUrls": ep_urls,
                    "languages": ["Thai (พากย์ไทย)"],
                    "id": f"24hdx-{post_id}",
                    "postId": post_id,
                    "originalUrl": link
                }
                new_movies.append(movie_obj)
                print(f"  [+] 24-HDX: {title} ({rating}⭐)")
                time.sleep(0.1)
            except Exception: pass
            
    return new_movies

def update_goseries4k():
    print("\n--- กำลังตรวจสอบซีรีส์ใหม่และอัปเดตตอนล่าสุดจาก GOSERIES4K (พากย์ไทย) ---")
    new_series = []
    base_cat = "https://goseries4k.com/category/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c-2026/"
    
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
                
                # Final strict check on the full title
                if "ซับไทย" in title and "พากย์ไทย" not in title:
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
                
                series_obj = {
                    "titleTh": title,
                    "titleEn": title,
                    "year": 2026,
                    "poster": poster,
                    "backdrop": poster,
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

def main():
    print("=" * 60)
    print("🚀 เริ่มต้นระบบอัปเดตภาพยนตร์และซีรีส์ใหม่ล่าสุด...")
    print("=" * 60)
    
    existing = load_existing_movies()
    print(f"[*] ฐานข้อมูลปัจจุบันมี: {len(existing)} เรื่อง")
    
    # 1. Fetch updates
    scraped_24hdx = update_24hdx()
    scraped_gs = update_goseries4k()
    
    # 2. Merge intelligently
    # Create lookup map by originalUrl or id
    existing_map = {m.get("originalUrl", m.get("id", "")): m for m in existing}
    
    added_new = 0
    updated_eps = 0
    
    all_new_items = scraped_24hdx + scraped_gs
    
    for item in all_new_items:
        key = item.get("originalUrl", item.get("id", ""))
        if key in existing_map:
            # Check if new episodes were added
            old_item = existing_map[key]
            old_eps = len(old_item.get("episodes", []))
            new_eps = len(item.get("episodes", []))
            if new_eps > old_eps:
                old_item["episodes"] = item["episodes"]
                old_item["episodeUrls"] = item["episodeUrls"]
                old_item["duration"] = item["duration"]
                updated_eps += 1
                print(f"  [*] อัปเดตตอนเพิ่ม: {item['titleTh']} ({old_eps} -> {new_eps} ตอน)")
        else:
            # Prepend new item to front
            existing.insert(0, item)
            existing_map[key] = item
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
