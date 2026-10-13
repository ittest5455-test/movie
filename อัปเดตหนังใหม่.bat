@echo off
chcp 65001 > nul
title ระบบอัปเดตหนังและซีรีส์ใหม่ MovieStream

echo ========================================================
echo   🎬 MovieStream - เริ่มต้นระบบอัปเดตหนังและซีรีส์ใหม่
echo ========================================================
echo.
cd /d "%~dp0"

echo [1/3] กำลังดึงหนังและซีรีส์ใหม่ล่าสุด (พากย์ไทย)...
python update_movies.py
if errorlevel 1 (
    echo.
    echo ❌ เกิดข้อผิดพลาดในการดึงข้อมูลหนังใหม่
    pause
    exit /b %errorlevel%
)

echo.
echo [2/3] กำลังสร้างและอัปเดต sitemap.xml...
python scripts\generate_sitemap.py

echo.
echo [3/3] กำลังส่งข้อมูลขึ้น GitHub -> Cloudflare Pages...
python scripts\push_to_github.py

echo.
echo ========================================================
echo   ✅ อัปเดตเสร็จสมบูรณ์ 100%! เว็บไซต์อัปเดตเรียบร้อยแล้ว
echo ========================================================
echo.
pause
