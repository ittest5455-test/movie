# -*- coding: utf-8 -*-
# สแกนหาคำว่า "พากย์ไทย", "ซับไทย" และค้นหาปุ่มกดใน html_dump.txt
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("html_dump.txt", "r", encoding="utf-8") as f:
    html = f.read()

# Find all blocks containing "พากย์ไทย" or "ซับไทย"
matches = re.findall(r'([\s\S]{0,100}(?:พากย์ไทย|ซับไทย)[\s\S]{0,200})', html)
print(f"Total matches for Thai/Sub: {len(matches)}")
for idx, m in enumerate(matches[:10]):
    clean = re.sub(r'\s+', ' ', m).strip()
    print(f"--- Match {idx+1} ---")
    print(clean)
