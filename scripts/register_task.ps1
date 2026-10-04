
$Action = New-ScheduledTaskAction -Execute "python.exe" -Argument "scripts/auto_update_daily.py" -WorkingDirectory "C:\Users\IT\Desktop\AI 2026\เว็บดูหนัง"
$Trigger = New-ScheduledTaskTrigger -Daily -At "06:00"
Register-ScheduledTask -TaskName "MovieStream_Daily_Update" -Action $Action -Trigger $Trigger -Description "Auto update new movies daily" -Force
