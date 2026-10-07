# -*- coding: utf-8 -*-
# ตรวจสอบและตรวจสอบความถูกต้องของซีรีส์ที่มีหลายตอนทุกเรื่องในฐานข้อมูล
import json
import re

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

multi = [x for x in m if len(x.get("episodes", [])) > 1]
print(f"Total Multi-EP Series in Database: {len(multi)}\n")

print(f"{'No.':<4} | {'Title':<35} | {'Source':<12} | {'Episodes':<10} | {'EP URLs Count':<12}")
print("-" * 80)

for idx, s in enumerate(multi):
    title = s['titleTh'][:33]
    source = s.get('source', 'Unknown')
    ep_count = len(s.get('episodes', []))
    url_count = len(s.get('episodeUrls', {}))
    print(f"{idx+1:<4} | {title:<35} | {source:<12} | {ep_count:<10} | {url_count:<12}")

print("-" * 80)
