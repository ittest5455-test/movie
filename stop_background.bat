@echo off
chcp 65001 >nul
echo ========================================================
echo  MovieStream - หยุดการทำงานของระบบอัปเดตเบื้องหลัง
echo ========================================================
powershell -NoProfile -Command "Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like '*line_command_listener.py*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force; Write-Host ' [OK] ยุติการทำงานของ Service (PID: ' $_.ProcessId ')' -ForegroundColor Green }"
echo.
echo ระบบอัปเดตเบื้องหลังหยุดทำงานแล้วเรียบร้อยครับ
pause
