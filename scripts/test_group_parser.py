# -*- coding: utf-8 -*-
# ตัวสแกนและแยกกลุ่ม ซับไทย vs พากย์ไทย และดึงเฉพาะ พากย์ไทย (หรือกลุ่มที่เลือก) พร้อมจับคู่ data-id ให้ตรง 100%
import urllib.request
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://goseries4k.com/a-shop-for-killers-2/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# 1. Parse cache
cache_match = re.search(r'window\.miru_ep_cache\s*=\s*(\{[\s\S]*?\});', html)
cache_dict = {}
if cache_match:
    raw_cache = json.loads(cache_match.group(1))
    for k, v in raw_cache.items():
        iframe = re.search(r'src=\\"(https?:\\/\\/[^\"]+)\\"', v)
        if not iframe:
            iframe = re.search(r'src="(https?://[^\"]+)"', v)
        if iframe:
            link = iframe.group(1).replace(r'\/', '/')
            if not link.endswith('.gif') and not link.endswith('.jpg') and not link.endswith('.png'):
                cache_dict[k] = link

print(f"Total valid iframes in cache: {len(cache_dict)}")

# 2. Parse mp-ep-group
groups = re.findall(r'<div class="mp-ep-group[^"]*">\s*<div class="mp-epg-title">([\s\S]*?)</div>\s*<div class="mp-epg-list">([\s\S]*?)</div>\s*</div>', html)
print(f"Total groups found: {len(groups)}")

for g_title, g_content in groups:
    g_title_clean = g_title.strip()
    buttons = re.findall(r'<button[^>]*data-id="(\d+)"[^>]*>([\s\S]*?)</button>', g_content)
    print(f"\n--- กลุ่ม: {g_title_clean} (จำนวน {len(buttons)} ตอน) ---")
    for btn_id, btn_label in buttons:
        label = re.sub(r'<[^>]+>', '', btn_label).strip()
        link = cache_dict.get(btn_id, "No link")
        print(f"  {label} (id: {btn_id}) -> {link}")
