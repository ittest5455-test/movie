import sys
import re
import json
from collections import defaultdict
from difflib import SequenceMatcher

sys.path.append(r'd:\AI 2026\เว็บดูหนัง')
from update_movies import load_existing_movies

movies = load_existing_movies()
print(f"Total movies in database: {len(movies)}")

# 1. Check duplicate videoUrl
video_map = defaultdict(list)
for m in movies:
    v = m.get('videoUrl', '').strip()
    if v and len(v) > 10:
        video_map[v].append(m)

dup_videos = {k: v for k, v in video_map.items() if len(v) > 1}
print(f"\n[1] Duplicate videoUrl groups: {len(dup_videos)}")
for v, items in list(dup_videos.items())[:10]:
    titles = [f"[{x.get('id')}] {x.get('titleTh')}" for x in items]
    print(f"  - {titles}")

# 2. Check duplicate poster
poster_map = defaultdict(list)
for m in movies:
    p = m.get('poster', '').strip()
    if p and len(p) > 10:
        poster_map[p].append(m)

dup_posters = {k: v for k, v in poster_map.items() if len(v) > 1}
print(f"\n[2] Duplicate poster groups: {len(dup_posters)}")
for p, items in list(dup_posters.items())[:10]:
    titles = [f"[{x.get('id')}] {x.get('titleTh')}" for x in items]
    print(f"  - Poster: {p} -> {titles}")

# 3. Fuzzy Title Similarity (Checking any pairs with > 0.82 similarity)
print("\n[3] Checking High Fuzzy Similarity between titles...")
fuzzy_matches = []
for i in range(len(movies)):
    t1 = movies[i].get('titleTh', '')
    for j in range(i + 1, len(movies)):
        t2 = movies[j].get('titleTh', '')
        if abs(len(t1) - len(t2)) > 15:
            continue
        sim = SequenceMatcher(None, t1.lower(), t2.lower()).ratio()
        if sim >= 0.82:
            fuzzy_matches.append((sim, movies[i], movies[j]))

print(f"High similarity pairs found: {len(fuzzy_matches)}")
for sim, m1, m2 in sorted(fuzzy_matches, key=lambda x: x[0], reverse=True)[:15]:
    print(f"  - Sim {sim:.2f}: [{m1.get('id')}] {m1.get('titleTh')} <==> [{m2.get('id')}] {m2.get('titleTh')}")
