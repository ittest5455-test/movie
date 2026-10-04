# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

headers = {'User-Agent': 'Mozilla/5.0'}
html = urllib.request.urlopen(urllib.request.Request('https://2499hdonline.com/', headers=headers)).read().decode('utf-8', errors='ignore')

# Extract header / navbar
header_match = re.search(r'<header[^>]*>(.*?)</header>', html, re.DOTALL)
if header_match:
    links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', header_match.group(1), re.DOTALL)
    print("=== HEADER MENU TABS ===")
    for h, t in links:
        c = re.sub(r'<[^>]+>', ' ', t).strip()
        if c:
            print(f"[{c}] -> {h}")

# Also check top menu or ul with class menu
menus = re.findall(r'<ul[^>]+class=["\'][^"\']*(?:menu|nav)[^"\']*["\'][^>]*>(.*?)</ul>', html, re.DOTALL)
for i, m in enumerate(menus):
    print(f"\n=== UL MENU {i+1} ===")
    links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', m, re.DOTALL)
    for h, t in links:
        c = re.sub(r'<[^>]+>', ' ', t).strip()
        if c:
            print(f"[{c}] -> {h}")

# Check sections on homepage
sections = re.findall(r'<h[23][^>]*>(.*?)</h[23]>', html, re.DOTALL)
print("\n=== HOMEPAGE SECTION HEADINGS ===")
for s in sections:
    c = re.sub(r'<[^>]+>', '', s).strip()
    if c:
        print(f" - {c}")
