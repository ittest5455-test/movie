# -*- coding: utf-8 -*-
"""
MovieStream Database Deduplicator & Quality Optimizer
- รวมหนังที่ซ้ำกันจากหลายเว็บ (GOSERIES4K, WOW-DRAMA, MYSERIESHD, 24HD)
- เลือกเฉพาะอันที่ดีที่สุด (Best Version):
    1. ภาพโปสเตอร์คมชัด ไร้ลายน้ำ (เน้น WOW-DRAMA หรือ clean_posters)
    2. คัดสรรตอนที่มากที่สุดและสมบูรณ์ที่สุด
    3. เครื่องเล่นเสถียร (getplay, ok-hd)
    4. ลบคำว่า ซับไทย/พากย์ไทย/ตอนที่ ที่เกะกะออกจากชื่อเรื่อง
"""

import os
import sys
import re
import json
from collections import defaultdict

if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)
    except Exception:
        pass

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MOVIES_FILE = os.path.join(BASE_DIR, "js", "movies.js")


def clean_title_for_display(title):
    """ทำความสะอาดชื่อเรื่องให้สวยงาม สำหรับแสดงผลบนเว็บ"""
    if not title:
        return ""
    t = title
    # ตัดคำนำหน้า
    t = re.sub(r'^(?:ฟรี|HD|Zoom|ดูซีรี่[ยส]์?|ดูซีรีส์|ซีรี่[ยส]์?|ซีรีส์|ดูละคร|ละคร|ดูหนัง|หนัง)\s*(?:ไทย|จีน|เกาหลี|ญี่ปุ่น|ฝรั่ง|เอเชีย)?\s*[:|]?\s*', '', t, flags=re.IGNORECASE)
    # ตัดแท็กเสียงพากย์ ทุกจุด
    t = re.sub(r'\(?\s*(?:พากย์ไทย\s*[/|+-]\s*ซับไทย|ซับไทย\s*[/|+-]\s*พากย์ไทย|พากย์ไทย\+ซับ|ซับไทย\s*\|\s*พากย์ไทย|ซับไทย|พากย์ไทย)\s*\)?', ' ', t, flags=re.IGNORECASE)
    # ตัดคำว่า จบ, ตอนจบ, เต็มเรื่อง, EP ทุกจุด
    t = re.sub(r'(?:EP[\s\.\d\-]+|ตอนที่[\s\.\d\-]+|ตอนจบ|\(ตอนจบ\)|\(จบ\)|\(END\)|จบเรื่อง|เต็มเรื่อง|ครบทุกตอน|จบ\s*G4|G4|\bจบ\b|\bEND\b)', ' ', t, flags=re.IGNORECASE)
    t = re.sub(r'\b(?:HD|Full HD|4K|4K ULTRA|Zoom)\b', ' ', t, flags=re.IGNORECASE)
    t = re.sub(r'[:|/\-]+', ' ', t)
    t = re.sub(r'\s{2,}', ' ', t).strip()
    return t


def extract_match_tokens(title):
    """สกัด Token ภาษาอังกฤษและไทยสำหรับจับคู่หนังเรื่องเดียวกัน"""
    if not title:
        return [], ""
    cleaned = clean_title_for_display(title)
    
    # ตรวจจับ Season
    season_m = re.search(r'(?:ซีซั่น|ซีซัน|season|ภาค|ss|s)\s*(\d+)', title, re.IGNORECASE)
    season_tag = f"_s{season_m.group(1)}" if season_m else ""
    
    name_only = re.sub(r'\(?\s*20\d{2}\s*\)?', '', cleaned)
    name_only = re.sub(r'(?:ซีซั่น|ซีซัน|season|ภาค|ss|s)\s*\d+', '', name_only, flags=re.IGNORECASE)
    
    en_parts = re.findall(r'[a-zA-Z]+', name_only)
    en_token = "".join(en_parts).lower()
    
    th_parts = re.findall(r'[\u0E00-\u0E7F]+', name_only)
    th_token = "".join(th_parts)
    
    tokens = []
    if en_token and th_token:
        tokens.append(f"both:{en_token}_{th_token}{season_tag}")
    if en_token and len(en_token) >= 4:
        tokens.append(f"en:{en_token}{season_tag}")
    if th_token and len(th_token) >= 4:
        tokens.append(f"th:{th_token}{season_tag}")
        
    return tokens, cleaned


def score_movie_quality(m):
    """
    ให้คะแนนเพื่อคัดเลือกเวอร์ชันที่ดีที่สุด
    """
    score = 0
    source = m.get("source", "")
    poster = m.get("poster", "")
    title = m.get("titleTh", "")
    video = m.get("videoUrl", "")
    eps = len(m.get("episodes", []))
    
    # 1. แหล่งที่มา
    if source == "WOW-DRAMA":
        score += 60
    elif source == "MYSERIESHD":
        score += 40
    elif source == "GOSERIES4K":
        score += 20
    elif "24HD" in source:
        score += 5
        
    # 2. คุณภาพโปสเตอร์
    if "images/clean_posters/wow-" in poster:
        score += 50  # โปสเตอร์ WOW สะอาด ไร้ลายน้ำแน่นอน
    elif "images/clean_posters/" in poster and "gs-" not in poster:
        score += 35
    elif "images/clean_posters/gs-" in poster:
        score += 15  # มีโอกาสติดลายน้ำ GOSERIES4K
    elif "24hd" in poster:
        score -= 20  # มักเป็นรูปผิดหรือความละเอียดต่ำ
        
    # 3. จำนวนตอน
    score += min(eps * 2, 60)
    
    # 4. คุณภาพและเสถียรภาพสตรีม
    if "getplay-cdn" in video:
        score += 35
    elif "ok-hd" in video:
        score += 30
    elif "torbo007" in video:
        score += 20
    elif "player77" in video:
        score -= 30  # ติดโฆษณาเว็บพนันหรือสตรีมช้า
        
    # 5. การตัดสิทธิ์ข้อความซับไทย
    if "ซับไทย" in title:
        score -= 50
        
    return score


def merge_cluster(cluster):
    """
    รวมข้อมูลใน Cluster เดียวกัน ให้ได้อันที่ดีที่สุด 1 อัน
    """
    if len(cluster) == 1:
        best = cluster[0]
        best["titleTh"] = clean_title_for_display(best.get("titleTh", ""))
        return best
        
    # เรียงลำดับตามคะแนนคุณภาพ
    sorted_cluster = sorted(cluster, key=score_movie_quality, reverse=True)
    best = sorted_cluster[0]
    
    # ค้นหาตอนที่มากที่สุดจากทุกเวอร์ชันในคลัสเตอร์
    max_eps_item = max(cluster, key=lambda x: len(x.get("episodes", [])))
    if len(max_eps_item.get("episodes", [])) > len(best.get("episodes", [])):
        best["episodes"] = max_eps_item["episodes"]
        best["episodeUrls"] = max_eps_item["episodeUrls"]
        best["duration"] = max_eps_item["duration"]
        
    # ค้นหาโปสเตอร์ที่สะอาดที่สุด (ถ้า best ยังไม่ใช่ wow-)
    if "images/clean_posters/wow-" not in best.get("poster", ""):
        for other in sorted_cluster:
            if "images/clean_posters/wow-" in other.get("poster", ""):
                best["poster"] = other["poster"]
                best["backdrop"] = other["backdrop"]
                break

    # รวมแท็กยอดนิยมถ้ามี
    all_genres = best.get("genres", [])
    for other in cluster:
        if "ยอดนิยม 2026" in other.get("genres", []) and "ยอดนิยม 2026" not in all_genres:
            all_genres.insert(0, "ยอดนิยม 2026")
    best["genres"] = all_genres
    
    # ทำความสะอาดชื่อเรื่อง
    best["titleTh"] = clean_title_for_display(best.get("titleTh", ""))
    
    return best


def deduplicate_movie_list(movies):
    """ทำการ Deduplicate หนังทั้งรายการ"""
    n = len(movies)
    parent = list(range(n))
    
    def find(i):
        if parent[i] != i:
            parent[i] = find(parent[i])
        return parent[i]
        
    def union(i, j):
        pi, pj = find(i), find(j)
        if pi != pj:
            parent[pi] = pj
            
    token_to_idx = {}
    for i, m in enumerate(movies):
        tokens, _ = extract_match_tokens(m.get('titleTh') or m.get('titleEn'))
        for tok in tokens:
            if tok in token_to_idx:
                union(i, token_to_idx[tok])
            else:
                token_to_idx[tok] = i
                
    clusters = defaultdict(list)
    for i in range(n):
        root = find(i)
        clusters[root].append(movies[i])
        
    merged_list = []
    visited_roots = set()
    for i in range(n):
        root = find(i)
        if root not in visited_roots:
            visited_roots.add(root)
            merged_item = merge_cluster(clusters[root])
            merged_list.append(merged_item)
            
    return merged_list


if __name__ == "__main__":
    sys.path.append(BASE_DIR)
    from update_movies import load_existing_movies, save_movies, generate_sitemap
    
    print("=" * 60)
    print("🎬 เริ่มต้นกระบวนการลบหนังซ้ำและคัดสรรเฉพาะเวอร์ชันที่ดีที่สุด...")
    print("=" * 60)
    
    existing = load_existing_movies()
    print(f"[*] ฐานข้อมูลเดิมมี: {len(existing)} เรื่อง")
    
    deduped = deduplicate_movie_list(existing)
    removed_count = len(existing) - len(deduped)
    
    print(f"[✓] คัดเลือกเวอร์ชันที่ดีที่สุดสำเร็จ!")
    print(f"  - ลบรายการซ้ำ/คุณภาพต่ำออกไป: {removed_count} เรื่อง")
    print(f"  - คงเหลือเฉพาะเรื่องที่สมบูรณ์ที่สุด: {len(deduped)} เรื่อง")
    
    # ตรวจสอบ Final table
    ft = [m for m in deduped if 'final table' in m.get('titleTh', '').lower()]
    print(f"\n[*] ตรวจสอบ Final Table ในฐานข้อมูลใหม่: เหลือ {len(ft)} เรื่อง (ควรเหลือ 1 เรื่อง)")
    for m in ft:
        print(f"  ID: {m.get('id')} ({m.get('source')})")
        print(f"  Title: {m.get('titleTh')}")
        print(f"  Poster: {m.get('poster')}")
        print(f"  Episodes: {len(m.get('episodes', []))}")
        
    save_movies(deduped)
    generate_sitemap(deduped)
    print("\n✅ บันทึกฐานข้อมูล js/movies.js และ sitemap.xml เรียบร้อยแล้ว!")
