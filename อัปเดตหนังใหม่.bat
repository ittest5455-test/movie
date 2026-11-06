@echo off
cd /d "%~dp0"
title MovieStream - Auto-Updater
chcp 65001 >nul
cls
echo ========================================================
echo   MovieStream - Update Movie ^& Series (Auto)
echo   Starting update_movies.py...
echo ========================================================
echo.
python update_movies.py
if errorlevel 1 (
    echo.
    echo [ERROR] เกิดข้อผิดพลาดในการอัปเดต
    pause
    exit /b %errorlevel%
)
echo.
echo ========================================================
echo   [SUCCESS] อัปเดตเสร็จสมบูรณ์ 100%%
echo ========================================================
echo.
pause
