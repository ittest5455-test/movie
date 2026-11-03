@echo off
chcp 65001 >nul
echo ========================================================
echo  MovieStream - ติดตั้งให้รันอัตโนมัติเมื่อเปิดเครื่องคอม
echo ========================================================
set "STARTUP_FOLDER=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
copy /y "%~dp0run_background.vbs" "%STARTUP_FOLDER%\MovieStream_AutoUpdate.vbs" >nul
echo.
echo [OK] ติดตั้งเข้าสู่ Windows Startup สำเร็จแล้ว!
echo ต่อไปนี้ เมื่อเปิดเครื่องคอมพิวเตอร์ ระบบจะเริ่มทำงานเงียบๆ ในเบื้องหลังทันที
echo คุณสามารถพิมพ์สั่ง 'อัพเดจหนัง' ใน LINE OA ได้ตลอดเวลา
echo ========================================================
pause
