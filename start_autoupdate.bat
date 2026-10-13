@echo off
chcp 65001 > nul
cd /d "%~dp0"
title ระบบอัปเดตหนังอัตโนมัติ (ทุก 3 ชั่วโมง)
echo ========================================================
echo   🎬 MovieStream - ระบบอัปเดตหนังอัตโนมัติกำลังทำงาน
echo   ระบบจะตรวจสอบและอัปเดตหนังใหม่ทุกๆ 3 ชั่วโมง
echo   กรุณาเปิดหน้าต่างนี้ทิ้งไว้
echo ========================================================

:loop
echo.
echo [%date% %time%] กำลังตรวจสอบและดึงหนังใหม่...
python update_movies.py
python scripts\generate_sitemap.py
python scripts\push_to_github.py
echo [%date% %time%] อัปเดตเสร็จเรียบร้อย! รอรอบถัดไปอีก 3 ชั่วโมง...
timeout /t 10800 /nobreak
goto loop
