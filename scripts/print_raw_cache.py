# -*- coding: utf-8 -*-
# พิมพ์ปุ่ม 12 ปุ่มแรกใน miru_cache_dump.txt พร้อมคุณสมบัติต่างๆ
import re

with open("miru_cache_dump.txt", "r", encoding="utf-8") as f:
    text = f.read()

clean_text = text.replace(r'\"', '"').replace(r'\/', '/')

# Print raw html blocks to see how Subtitle vs Thai Dubbed are divided
print("Raw html length:", len(clean_text))
print("First 2000 chars:")
print(clean_text[:2000])
