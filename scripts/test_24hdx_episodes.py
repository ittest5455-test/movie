# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

url = "https://www.24-hdx.com/avatar-the-last-airbender-season-2/"
req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

print("=== LANG_SELECT OPTIONS ===")
lang_sel = re.findall(r'<select[^>]*id="Lang_select"[^>]*>(.*?)</select>', html, re.DOTALL)
if lang_sel:
    opts = re.findall(r'<option[^>]*value="([^"]*)"[^>]*>(.*?)</option>', lang_sel[0])
    for val, text in opts:
        print(f"Lang Option -> val: '{val}', text: '{text.strip()}'")

print("\n=== SEQUEL_SELECT OPTIONS (EPISODES) ===")
seq_sel = re.findall(r'<select[^>]*name="Sequel_select"[^>]*>(.*?)</select>', html, re.DOTALL)
if seq_sel:
    opts = re.findall(r'<option[^>]*value="([^"]*)"[^>]*>(.*?)</option>', seq_sel[0])
    for val, text in opts:
        print(f"Episode Option -> val: '{val}', text: '{text.strip()}'")
