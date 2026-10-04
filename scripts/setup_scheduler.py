# -*- coding: utf-8 -*-
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

ps_script = """
$Action = New-ScheduledTaskAction -Execute "python.exe" -Argument "scripts/auto_update_daily.py" -WorkingDirectory "C:\\Users\\IT\\Desktop\\AI 2026\\เว็บดูหนัง"
$Trigger = New-ScheduledTaskTrigger -Daily -At "06:00"
Register-ScheduledTask -TaskName "MovieStream_Daily_Update" -Action $Action -Trigger $Trigger -Description "Auto update new movies daily" -Force
"""

with open("scripts/register_task.ps1", "w", encoding="utf-8") as f:
    f.write(ps_script)

res = subprocess.run(["powershell", "-ExecutionPolicy", "Bypass", "-File", "scripts/register_task.ps1"], capture_output=True, text=True)
print("Return code:", res.returncode)
print("Output:", res.stdout)
print("Error:", res.stderr)
