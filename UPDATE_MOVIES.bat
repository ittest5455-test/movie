@echo off
chcp 65001 > nul
echo ==================================================
echo   MovieStream TV - Daily Auto Updater
echo ==================================================
cd /d "c:\Users\IT\Desktop\AI 2026\เว็บดูหนัง"
python scripts\auto_update_daily.py
pause
