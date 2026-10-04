# -*- coding: utf-8 -*-
"""
สคริปต์อัปเดตหนังใหม่อัตโนมัติทุกวัน (Daily Auto Updater)
1. สแกนดึงหนังและซีรีส์ใหม่ล่าสุดจาก 24-HDX และ GOSERIES4K
2. คลีนโค้ดและ encoding ให้สะอาด 100%
3. ผลักข้อมูลขึ้น GitHub -> Cloudflare Pages อัตโนมัติทันที
"""
import subprocess
import sys
import os
import time

sys.stdout.reconfigure(encoding='utf-8')

print("==================================================")
print(f"🎬 เริ่มต้นการอัปเดตหนังใหม่อัตโนมัติ: {time.strftime('%Y-%m-%d %H:%M:%S')}")
print("==================================================")

try:
    # 1. Fetch new movies
    print("\n[Step 1/3] กำลังสแกนดึงหนังและซีรีส์ใหม่ล่าสุด...")
    subprocess.run([sys.executable, "scripts/manual_fetch_new_movies.py"], check=True)
    
    # 2. Clean UTF-8
    print("\n[Step 2/3] กำลังตรวจสอบความถูกต้องและคลีนไฟล์...")
    subprocess.run([sys.executable, "scripts/clean_utf8_movies.py"], check=True)
    
    # 3. Push to GitHub
    print("\n[Step 3/3] กำลังส่งข้อมูลขึ้น GitHub -> Cloudflare Pages...")
    subprocess.run([sys.executable, "scripts/push_to_github.py"], check=True)
    
    print("\n==================================================")
    print("✅ อัปเดตหนังใหม่ขึ้นเว็บ Cloudflare Pages สำเร็จสมบูรณ์ 100%!")
    print("==================================================")
except Exception as e:
    print(f"\n❌ เกิดข้อผิดพลาดในการอัปเดต: {e}")

