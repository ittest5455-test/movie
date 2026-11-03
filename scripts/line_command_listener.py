# -*- coding: utf-8 -*-
"""
MovieStream - LINE OA Command Listener & Auto-Updater Service
ทำหน้าที่:
1. รอรับคำสั่ง "อัพหนังใหม่" จากแอดมินผ่าน LINE OA ตลอดเวลา (ตรวจทุก 15 วินาที)
2. เมื่อได้รับคำสั่ง จะเริ่มดึงหนัง คลีนโปสเตอร์ และ Push ขึ้น GitHub ทันที
3. แจ้งเตือนสรุปผลกลับเข้า LINE OA อัตโนมัติ (จำนวนเรื่องใหม่, ตอนใหม่, รวมทั้งหมด)
4. เผื่อลืมสั่ง ระบบมีระบบอัปเดตอัตโนมัติทุกๆ 3 ชั่วโมงในตัว
"""

import os
import sys
import time
import json
import urllib.request
import subprocess
import datetime

if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)
    except Exception:
        pass

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
GAS_URL = "https://script.google.com/macros/s/AKfycbyKnLnnu7iJ3uPSV3tdpLO5HL6pZMGy5qzHSLu8Y4RoQq5MIYj1QVFXgZ3miynuNjPX/exec"
SECRET_KEY = "VIP_AUTH_MOVIE_LINE_APPROVAL_2026"

AUTO_UPDATE_INTERVAL_SECONDS = 3 * 60 * 60  # ทุก 3 ชั่วโมง (10,800 วินาที)
POLL_INTERVAL_SECONDS = 15  # ตรวจคำสั่งจาก LINE ทุก 15 วินาที


def check_line_command():
    """สอบถาม Google Apps Script ว่ามีคำสั่งอัปเดตหนังจาก LINE OA หรือไม่"""
    url = f"{GAS_URL}?action=check_update_command&token={SECRET_KEY}"
    try:
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": "MovieStream-PC-Listener/1.0"
            }
        )
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data.get("has_command", False)
    except Exception:
        return False


def run_movie_updater(reason="LINE Command"):
    """เรียกตัวอัปเดต update_movies.py"""
    now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"\n[{now_str}] 🎬 เริ่มต้นกระบวนการอัปเดตภาพยนตร์ (สาเหตุ: {reason})...")
    updater_script = os.path.join(BASE_DIR, "update_movies.py")
    
    try:
        process = subprocess.run([sys.executable, updater_script], cwd=BASE_DIR)
        if process.returncode == 0:
            print(f"[{now_str}] ✅ อัปเดตและส่งข้อมูลขึ้นเว็บ + แจ้งเตือน LINE สำเร็จสมบูรณ์!")
        else:
            print(f"[{now_str}] ❌ กระบวนการอัปเดตจบลงด้วยรหัสข้อผิดพลาด: {process.returncode}")
    except Exception as e:
        print(f"[{now_str}] ❌ เกิดข้อผิดพลาดขณะรันอัปเดต: {e}")


def main():
    print("=" * 65)
    print("🎬 MovieStream - บริการรับคำสั่งผ่าน LINE OA และระบบอัปเดตอัตโนมัติ")
    print("• พิมพ์คำว่า 'อัพเดจหนัง' หรือ 'อัพหนังใหม่' ในแชท LINE OA เพื่อสั่งรันได้ตลอดเวลา")
    print("• ระบบจะอัปเดตอัตโนมัติทุกๆ 3 ชั่วโมง (เผื่อลืมสั่ง)")
    print("• หลังอัปเดตเสร็จ จะส่งสรุปจำนวนเรื่องเข้า LINE ให้ทราบทันที")
    print("=" * 65)
    print("\n[*] กำลังเชื่อมต่อและสแตนด์บายรับคำสั่ง...")

    last_auto_update_time = time.time()

    while True:
        try:
            # 1. ตรวจสอบว่าแอดมินพิมพ์สั่ง "อัพหนังใหม่" มาใน LINE หรือไม่
            has_cmd = check_line_command()
            if has_cmd:
                print("\n🔔 [LINE OA] ตรวจพบคำสั่ง 'อัพหนังใหม่' จากแอดมิน!")
                run_movie_updater(reason="คำสั่งผ่าน LINE OA")
                last_auto_update_time = time.time()

            # 2. ตรวจสอบรอบเวลาอัตโนมัติ (ทุก 3 ชั่วโมง)
            elif time.time() - last_auto_update_time >= AUTO_UPDATE_INTERVAL_SECONDS:
                print("\n⏰ [Auto-Timer] ครบรอบ 3 ชั่วโมง (ระบบอัปเดตอัตโนมัติตามเวลา)")
                run_movie_updater(reason="รอบเวลาอัตโนมัติ 3 ชั่วโมง")
                last_auto_update_time = time.time()

        except Exception as e:
            print(f"[-] ข้อผิดพลาดใน Loop: {e}")

        time.sleep(POLL_INTERVAL_SECONDS)


if __name__ == "__main__":
    main()
