@echo off
cd /d "%~dp0"
title MovieStream - LINE OA and Auto-Update Service
cls
python scripts/line_command_listener.py
if errorlevel 1 pause
