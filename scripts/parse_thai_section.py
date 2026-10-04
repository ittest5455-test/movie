# -*- coding: utf-8 -*-
# ตรวจสอบโครงสร้าง HTML ภายใน miru_cache_dump.txt
import re

with open("miru_cache_dump.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Replace escaped quotes
clean_text = text.replace(r'\"', '"').replace(r'\/', '/')

# Find sections with "พากย์ไทย" or "ซับไทย"
sections = re.findall(r'([^>]*พากย์ไทย[^<]*|[^>]*ซับไทย[^<]*)', clean_text)
print("Sections found:", sections[:10])

# Find buttons and their data attributes or hrefs
buttons = re.findall(r'<button[^>]*>([\s\S]*?)</button>', clean_text)
print(f"Total buttons: {len(buttons)}")

a_tags = re.findall(r'<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)</a>', clean_text)
print(f"Total a tags inside cache: {len(a_tags)}")
for a in a_tags[:20]:
    print("  Link:", a[0], "| Text:", re.sub(r'<[^>]+>', '', a[1]).strip())
