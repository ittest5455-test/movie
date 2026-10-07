# -*- coding: utf-8 -*-
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

raw = open("js/movies.js", "r", encoding="utf-8-sig").read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

g4_2026 = [x for x in m if x.get("source") == "GOSERIES4K" and ("2026" in str(x.get("titleTh")) or "2026" in str(x.get("year")))]

print(f"Total GOSERIES4K (2026) series: {len(g4_2026)}\n")
for idx, x in enumerate(g4_2026):
    eps_cnt = len(x.get("episodes", []))
    urls_cnt = len(x.get("episodeUrls", {}))
    print(f"{idx+1}. {x.get('titleTh')} | EPs: {eps_cnt} | EP URLs: {urls_cnt} | Link: {x.get('sourcePageUrl')}")
