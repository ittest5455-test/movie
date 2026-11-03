@echo off
chcp 65001 >nul
echo ========================================================
echo  MovieStream - ยกเลิกการรันอัตโนมัติเมื่อเปิดเครื่อง
echo ========================================================
set "STARTUP_FOLDER=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
if exist "%STARTUP_FOLDER%\MovieStream_AutoUpdate.vbs" (
    del /f /q "%STARTUP_FOLDER%\MovieStream_AutoUpdate.vbs" >nul
    echo.
    echo [OK] นำออกจาก Windows Startup เรียบร้อยแล้ว
) else (
    echo.
    echo [INFO] ไม่พบไฟล์ใน Windows Startup
)
echo ========================================================
pause
