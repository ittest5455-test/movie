# -*- coding: utf-8 -*-
import json
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

MOVIES_FILE = "js/movies.js"
NEW_MOVIES_FILE = "scripts/2499_movies_2026.json"

with open(NEW_MOVIES_FILE, "r", encoding="utf-8") as f:
    new_movies = json.load(f)

print(f"Loaded {len(new_movies)} new movies from 2499HD")

with open(MOVIES_FILE, "r", encoding="utf-8") as f:
    text = f.read()

m = re.search(r'window\.movies\s*=\s*(\[.*?\]);', text, re.DOTALL)
if not m:
    print("Error: Could not find window.movies")
    sys.exit(1)

existing_movies = json.loads(m.group(1))
print(f"Current existing movies count: {len(existing_movies)}")

# Check for duplicates or existing IDs
existing_ids = {mov.get("id") for mov in existing_movies}
existing_titles = {mov.get("titleTh", "").strip().lower() for mov in existing_movies}

added = 0
updated = 0

# We want 2499HD movies to be featured near the top so users see them right away!
movies_to_insert = []
for mov in new_movies:
    m_id = mov.get("id")
    m_title = mov.get("titleTh", "").strip().lower()

    # Check if this exact 2499 movie already exists
    matched = None
    for ex in existing_movies:
        if ex.get("id") == m_id:
            matched = ex
            break
            
    if matched:
        # Update existing
        matched.update(mov)
        updated += 1
    else:
        movies_to_insert.append(mov)
        added += 1

# Prepend new 2499HD movies right at the beginning of the list
combined_movies = movies_to_insert + existing_movies

print(f"Added {added} new movies, updated {updated} existing movies. Total: {len(combined_movies)}")

# Write back to js/movies.js
header = "// ฐานข้อมูลภาพยนตร์รวม 24-HD, GOSERIES4K, WOW-DRAMA และ 2499HD ปี 2026 พากย์ไทย\nwindow.movies = "
footer = ";\nvar movies = window.movies;\n"

with open(MOVIES_FILE, "w", encoding="utf-8") as f:
    f.write(header)
    json.dump(combined_movies, f, ensure_ascii=False, indent=2)
    f.write(footer)

print(f"[✓] Saved {len(combined_movies)} movies into {MOVIES_FILE}!")
