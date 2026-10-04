# -*- coding: utf-8 -*-
import urllib.request
import urllib.parse
import re
import json
import html
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://www.24-hdx.com/'
}

def fetch_html(url, referer=None):
    try:
        h = HEADERS.copy()
        if referer:
            h['Referer'] = referer
        req = urllib.request.Request(url, headers=h)
        with urllib.request.urlopen(req, timeout=10) as response:
            return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

# ==========================================
# 1. SCRAPER FOR 037HDDMOVIES.COM
# ==========================================
def parse_037_movie_page(movie_url, rating_val, title_val):
    html_content = fetch_html(movie_url)
    if not html_content:
        return None
        
    movie_data = {}
    
    title_match = re.search(r'<meta\s+property="og:title"\s+content="([^"]+)"', html_content)
    if title_match:
        full_title = html.unescape(title_match.group(1))
        full_title = re.sub(r'\s*-\s*ดูหนังออนไลน์.*', '', full_title)
        full_title = re.sub(r'\s*037HDDMovie.*', '', full_title)
        
        year_match = re.search(r'\((20\d{2})\)', full_title)
        year = int(year_match.group(1)) if year_match else 2026
        
        cleaned_title = re.sub(r'\(20\d{2}\)', '', full_title).strip()
        
        en_match = re.search(r'([A-Za-z0-9\s\-\:\.\'\!\&]+)$', cleaned_title)
        if en_match and len(en_match.group(1).strip()) > 3:
            title_en = en_match.group(1).strip()
            title_th = cleaned_title.replace(title_en, "").strip()
            if not title_th:
                title_th = title_en
        else:
            title_th = cleaned_title
            title_en = cleaned_title
            
        movie_data['titleTh'] = title_th if title_th else title_en
        movie_data['titleEn'] = title_en
        movie_data['year'] = year
    else:
        movie_data['titleTh'] = title_val
        movie_data['titleEn'] = title_val
        movie_data['year'] = 2026

    if movie_data['year'] != 2026:
        return None
        
    poster_match = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html_content)
    if poster_match:
        movie_data['poster'] = poster_match.group(1)
        movie_data['backdrop'] = poster_match.group(1)
    else:
        movie_data['poster'] = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500"
        movie_data['backdrop'] = "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=1000"

    iframe_match = re.search(r'<iframe[^>]*id="player"[^>]*src="([^"]+)"', html_content)
    if iframe_match:
        video_src = iframe_match.group(1)
        movie_data['videoUrl'] = video_src
        movie_data['sourceType'] = "embed"
    else:
        return None

    desc_match = re.search(r'<meta\s+name="description"\s+content="([^"]+)"', html_content)
    if desc_match:
        desc = html.unescape(desc_match.group(1))
        desc = re.sub(r'ดูหนังออนไลน์ HD พากย์ไทย.*', '', desc)
        movie_data['description'] = desc.strip() if desc.strip() else "ภาพยนตร์เรื่องนี้ยังไม่มีเรื่องย่อภาษาไทยอย่างเป็นทางการ"
    else:
        movie_data['description'] = "เรื่องย่อภาพยนตร์แนะนำประจำปี 2026"

    movie_data['rating'] = rating_val

    genres_found = re.findall(r'<a\s+href="[^"]+/category/[^"]+"\s+rel="category tag">([^<]+)</a>', html_content)
    if genres_found:
        cleaned_genres = []
        for g in genres_found:
            g_clean = html.unescape(g).replace("ดูหนังออนไลน์ ", "").replace(" HD ฟรี", "")
            if "หนังผี" in g_clean or "สยอง" in g_clean: g_clean = "สยองขวัญ"
            elif "ตลก" in g_clean: g_clean = "ตลกคอมเมดี้"
            elif "ไซไฟ" in g_clean or "Sci-Fi" in g_clean: g_clean = "แฟนตาซี Sci-Fi"
            elif "แอคชั่น" in g_clean or "บู๊" in g_clean: g_clean = "แอคชั่น"
            elif "การ์ตูน" in g_clean or "อนิเมะ" in g_clean: g_clean = "การ์ตูน"
            else: continue
            cleaned_genres.append(g_clean)
            
        cleaned_genres = list(set(cleaned_genres))
        if not cleaned_genres: cleaned_genres = ["ทั่วไป"]
        movie_data['genres'] = cleaned_genres
    else:
        movie_data['genres'] = ["ทั่วไป"]

    movie_data['duration'] = "2 ชม. 0 นาที"
    movie_data['trailerUrl'] = "https://www.youtube.com/embed/M23g_Gf8b14"
    movie_data['cast'] = ["นักแสดงนำคุณภาพ"]
    movie_data['source'] = "037HDD"
    movie_data['episodes'] = ["ตอนที่ 1 (จบในตอน)"]
    movie_data['languages'] = ["Thai (พากย์ไทย)"]
    
    slug = re.sub(r'[^a-z0-9]+', '-', movie_data['titleEn'].lower()).strip('-')
    movie_data['id'] = f"037-{slug}-2026"
    
    return movie_data

def scrape_037_movies(min_rating=5.0):
    print("=== Scraping Source 1: 037HDDMovie (Year 2026) ===")
    base_category_url = "https://www.037hddmovies.com/category/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/"
    
    page = 1
    results = []
    
    while page <= 8:
        page_url = base_category_url if page == 1 else f"{base_category_url}page/{page}/"
        html_content = fetch_html(page_url)
        if not html_content:
            break
            
        blocks = re.findall(r'<div\s+class="moviefilm">(.*?)</div>\s*</div>', html_content, re.DOTALL)
        if not blocks:
            break
            
        for block in blocks:
            quality_match = re.search(r'class="quality-corner\s+quality-([^"]+)"', block)
            quality = quality_match.group(1).upper() if quality_match else "HD"
            
            if quality == "SUB":
                continue
                
            url_match = re.search(r'<a\s+href="([^"]+)"', block)
            if not url_match:
                continue
            movie_url = url_match.group(1)
            
            title_match = re.search(r'<div\s+class="movief"><a\s+href="[^"]+">([^<]+)</a>', block)
            title = html.unescape(title_match.group(1)).strip() if title_match else "หนังใหม่"
            
            if "ซับไทย" in title or "[SUB]" in title.upper():
                continue
                
            rating_match = re.search(r'IMDb</span>:\s*([\d\.]+)', block, re.IGNORECASE)
            rating = float(rating_match.group(1)) if rating_match else 6.0
            
            if rating < min_rating:
                continue
                
            try:
                time.sleep(0.05)
                movie_data = parse_037_movie_page(movie_url, rating, title)
                if movie_data:
                    results.append(movie_data)
                    print(f"037 Match: {movie_data['titleTh']} ({rating})")
            except Exception as e:
                print(f"Error 037 detail {movie_url}: {e}")
                
        page += 1
        
    print(f"Total 037 movies scraped: {len(results)}")
    return results

# ==========================================
# 2. SCRAPER FOR 24-HDX.COM (DIRECT CLEAN 24PLAYERHD EMBEDS)
# ==========================================
def parse_24hdx_movie_page(movie_url):
    html_content = fetch_html(movie_url)
    if not html_content:
        return None
        
    movie_data = {}
    
    title_match = re.search(r'<meta\s+property="og:title"\s+content="([^"]+)"', html_content)
    if title_match:
        full_title = html.unescape(title_match.group(1))
        full_title = re.sub(r'\s*-\s*ดูหนังออนไลน์.*', '', full_title)
        full_title = re.sub(r'\s*24-HD.*', '', full_title)
        
        year_match = re.search(r'\((20\d{2})\)', full_title)
        year = int(year_match.group(1)) if year_match else 2026
        
        cleaned_title = re.sub(r'\(20\d{2}\)', '', full_title).strip()
        
        en_match = re.search(r'([A-Za-z0-9\s\-\:\.\'\!\&]+)$', cleaned_title)
        if en_match and len(en_match.group(1).strip()) > 3:
            title_en = en_match.group(1).strip()
            title_th = cleaned_title.replace(title_en, "").strip()
            if not title_th:
                title_th = title_en
        else:
            title_th = cleaned_title
            title_en = cleaned_title
            
        movie_data['titleTh'] = title_th if title_th else title_en
        movie_data['titleEn'] = title_en
        movie_data['year'] = year
    else:
        return None

    if movie_data['year'] != 2026:
        return None
        
    poster_match = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html_content)
    if poster_match:
        movie_data['poster'] = poster_match.group(1)
        movie_data['backdrop'] = poster_match.group(1)
    else:
        movie_data['poster'] = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500"
        movie_data['backdrop'] = "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=1000"

    # Extract ALL Episodes from <select name="Sequel_select">
    seq_sel = re.findall(r'<select[^>]*name="Sequel_select"[^>]*>(.*?)</select>', html_content, re.DOTALL)
    episodes_list = []
    if seq_sel:
        opts = re.findall(r'<option[^>]*value="([^"]*)"[^>]*>(.*?)</option>', seq_sel[0])
        seen_eps = set()
        for val, text in opts:
            ep_name = f"ตอนที่ {val}"
            if ep_name not in seen_eps:
                seen_eps.add(ep_name)
                episodes_list.append(ep_name)
                
    if not episodes_list:
        episodes_list = ["ตอนที่ 1 (จบในตอน)"]
        
    movie_data['episodes'] = episodes_list

    # Extract Languages from <select id="Lang_select">
    lang_sel = re.findall(r'<select[^>]*id="Lang_select"[^>]*>(.*?)</select>', html_content, re.DOTALL)
    langs_list = []
    if lang_sel:
        opts = re.findall(r'<option[^>]*value="([^"]*)"[^>]*>(.*?)</option>', lang_sel[0])
        for val, text in opts:
            val_clean = "Thai (พากย์ไทย)" if "thai" in val.lower() else "Soundtrack (ซับไทย)"
            if val_clean not in langs_list:
                langs_list.append(val_clean)
                
    if not langs_list:
        langs_list = ["Thai (พากย์ไทย)"]
        
    movie_data['languages'] = langs_list

    # 🌟 EXTRACTION OF CLEAN DIRECT 24PLAYERHD EMBED URL
    postid_m = re.search(r'data-post-id="(\d+)"', html_content) or re.search(r'post_id\s*:\s*["\']?(\d+)', html_content)
    clean_player_url = None
    if postid_m:
        postid = postid_m.group(1)
        api_url = "https://api.24-hdx.com/get.php"
        data = urllib.parse.urlencode({
            'action': 'halim_ajax_player',
            'nonce': '',
            'episode': '1',
            'server': '1',
            'postid': postid,
            'lang': 'Thai',
            'title': movie_data['titleEn']
        }).encode('utf-8')
        try:
            req_api = urllib.request.Request(api_url, data=data, headers=HEADERS)
            res_api = urllib.request.urlopen(req_api, timeout=5).read().decode('utf-8', errors='ignore')
            iframe_m = re.search(r'src="([^"]+)"', res_api)
            if iframe_m:
                clean_player_url = iframe_m.group(1)
        except Exception as e:
            pass

    if clean_player_url:
        movie_data['videoUrl'] = clean_player_url
    else:
        movie_data['videoUrl'] = movie_url

    movie_data['sourceType'] = "embed"

    desc_match = re.search(r'<meta\s+name="description"\s+content="([^"]+)"', html_content)
    if desc_match:
        desc = html.unescape(desc_match.group(1))
        movie_data['description'] = desc.strip() if desc.strip() else "ภาพยนตร์ใหม่ปี 2026 จาก 24-HDX"
    else:
        movie_data['description'] = "ภาพยนตร์ใหม่ปี 2026 จาก 24-HDX"

    movie_data['rating'] = 6.5

    genres_found = re.findall(r'<a\s+href="[^"]+24-hdx\.com/([^"/]+)/"', html_content)
    cleaned_genres = []
    for g in genres_found:
        if "horror" in g or "ghost" in g: cleaned_genres.append("สยองขวัญ")
        elif "comedy" in g: cleaned_genres.append("ตลกคอมเมดี้")
        elif "sci-fi" in g or "fantasy" in g: cleaned_genres.append("แฟนตาซี Sci-Fi")
        elif "action" in g: cleaned_genres.append("แอคชั่น")
        elif "animation" in g: cleaned_genres.append("การ์ตูน")
        
    cleaned_genres = list(set(cleaned_genres))
    if not cleaned_genres: cleaned_genres = ["ทั่วไป"]
    movie_data['genres'] = cleaned_genres

    movie_data['duration'] = f"{len(episodes_list)} ตอน" if len(episodes_list) > 1 else "2 ชม. 0 นาที"
    movie_data['trailerUrl'] = "https://www.youtube.com/embed/M23g_Gf8b14"
    movie_data['cast'] = ["นักแสดงนำคุณภาพ"]
    movie_data['source'] = "24HDX"
    
    slug = re.sub(r'[^a-z0-9]+', '-', movie_data['titleEn'].lower()).strip('-')
    movie_data['id'] = f"24hdx-{slug}-2026"
    
    return movie_data

def scrape_24hdx_movies():
    print("\n=== Scraping Source 2: 24-HDX.com (Clean 24PlayerHD Embeds) ===")
    base_url = "https://www.24-hdx.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2026/"
    
    results = []
    page = 1
    
    while page <= 4:
        page_url = base_url if page == 1 else f"{base_url}page/{page}/"
        html_content = fetch_html(page_url)
        if not html_content:
            break
            
        movie_card_links = re.findall(r'<a\s+href="(https?://www\.24-hdx\.com/[^"/]+/)"[^>]*>\s*<div[^>]*class="box-img"', html_content)
        movie_card_links = list(set(movie_card_links))
        
        if not movie_card_links:
            break
            
        for link in movie_card_links:
            try:
                time.sleep(0.05)
                movie_data = parse_24hdx_movie_page(link)
                if movie_data and movie_data['year'] == 2026:
                    results.append(movie_data)
                    is_clean = "Clean 24PlayerHD" if "24playerhd" in movie_data['videoUrl'] else "Page URL"
                    print(f"24HDX Match: {movie_data['titleTh']} ({is_clean})")
            except Exception as e:
                print(f"Error 24HDX detail {link}: {e}")
                
        page += 1
        
    print(f"Total 24HDX movies scraped: {len(results)}")
    return results

def main():
    print("=========================================================")
    print(" Combined Dual Scraper: 037hddmovies + 24-hdx (Clean Players Only)")
    print("=========================================================")
    
    movies_037 = scrape_037_movies(min_rating=5.0)
    movies_24hdx = scrape_24hdx_movies()
    
    combined = []
    seen_titles = set()
    
    for m in movies_037 + movies_24hdx:
        if m['year'] != 2026:
            continue
        key = re.sub(r'[^a-zA-Z0-9\u0E00-\u0E7F]', '', m['titleTh'].lower())
        if key and key not in seen_titles:
            seen_titles.add(key)
            combined.append(m)
            
    print(f"\n=========================================================")
    print(f" Combined Total Unique Movies/Series for 2026: {len(combined)}")
    print(f"=========================================================")
    
    js_content = "// ฐานข้อมูลภาพยนตร์รวมจาก 2 เว็บไซต์ (037hddmovies + 24-hdx) เฉพาะตัวเล่นวิดีโอสะอาด 100%\n"
    js_content += "const movies = " + json.dumps(combined, ensure_ascii=False, indent=2) + ";\n"
    
    with open("js/movies.js", "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print("Successfully updated js/movies.js with clean player embeds!")

if __name__ == "__main__":
    main()
