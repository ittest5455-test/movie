@echo off
chcp 65001 > nul
cd /d "%~dp0"
title MovieStream - ระบบรับคำสั่ง LINE OA และอัปเดตหนังอัตโนมัติ

echo ========================================================
echo   🎬 MovieStream - LINE OA & Auto-Update Service
echo   • สามารถพิมพ์ "อัพหนังใหม่" ใน LINE OA ได้ตลอดเวลา
echo   • ระบบมีตัวนับเวลาอัปเดตอัตโนมัติทุกๆ 3 ชั่วโมง (เผื่อลืมสั่ง)
echo   • เมื่ออัปเดตเสร็จ ระบบจะแจ้งเตือนจำนวนหนังใหม่เข้า LINE ทันที
echo   • ผลักข้อมูลขึ้น GitHub -^> Cloudflare Pages ให้อัตโนมัติ
echo   กรุณาเปิดหน้าต่างนี้ทิ้งไว้เพื่อสแตนด์บายรับคำสั่ง
echo ========================================================
echo.

python scripts/line_command_listener.py
if errorlevel 1 (
    echo.
    echo ❌ เกิดข้อผิดพลาดในการทำงาน
    pause
)
