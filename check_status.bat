@echo off
chcp 65001 >nul
echo ========================================================
echo  MovieStream - ตรวจสอบสถานะระบบอัปเดตอัตโนมัติ / LINE OA
echo ========================================================
powershell -NoProfile -Command "$procs = Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like '*line_command_listener.py*' }; if ($procs) { Write-Host ' [STATUS] ระบบกำลังทำงานอยู่ในเบื้องหลัง (Running Active)' -ForegroundColor Green; $procs | Format-Table ProcessId, Name, CreationDate } else { Write-Host ' [STATUS] ระบบไม่ได้ทำงานอยู่ในขณะนี้ (Stopped)' -ForegroundColor Yellow; Write-Host ' คุณสามารถเปิดใช้งานได้โดยดับเบิ้ลคลิก run_background.vbs (ซ่อนเบื้องหลัง) หรือ start_autoupdate.bat (แสดงหน้าจอ)' -ForegroundColor Cyan }"
echo.
pause
