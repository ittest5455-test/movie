@echo off
chcp 65001 >nul
title MovieStream - Local Live TV & Sports Server (Port 9000)
echo =======================================================================
echo   🎬 MovieStream TV - ระบบดูทีวีสดและกีฬาสดออนไลน์ (Local Test)
echo =======================================================================
echo.
echo [1/2] กำลังเปิดเซิร์ฟเวอร์จำลองในเครื่องที่พอร์ต 9000...
echo [2/2] กำลังเปิดเว็บเบราว์เซอร์ไปยัง http://localhost:9000/live.html ...
echo.
echo * หมายเหตุ: ปิดหน้าต่างสีดำนี้เมื่อต้องการหยุดการทำงาน
echo =======================================================================
echo.

start "" "http://localhost:9000/live.html"
python -m http.server 9000

pause
