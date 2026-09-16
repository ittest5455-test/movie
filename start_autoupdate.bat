@echo off
cd /d "%~dp0"
title Auto Update Movies
echo =========================================
echo Auto Movie Updater is Running
echo The system will check for new movies every 3 hours.
echo Please keep this window open.
echo =========================================

:loop
echo [%date% %time%] Checking for updates...
python update_movies.py
echo [%date% %time%] Update finished. Waiting for 3 hours...
timeout /t 10800 /nobreak
goto loop
