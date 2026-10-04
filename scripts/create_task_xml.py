# -*- coding: utf-8 -*-
import subprocess
import os

bat_path = r"C:\Users\IT\Desktop\AI 2026\เว็บดูหนัง\UPDATE_MOVIES.bat"

# XML Definition for Windows Task Scheduler
xml_content = f"""<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Description>Auto update new movies daily to Cloudflare Pages</Description>
  </RegistrationInfo>
  <Triggers>
    <CalendarTrigger>
      <StartBoundary>2026-08-27T06:00:00</StartBoundary>
      <Enabled>true</Enabled>
      <ScheduleByDay>
        <DaysInterval>1</DaysInterval>
      </ScheduleByDay>
    </CalendarTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <LogonType>InteractiveToken</LogonType>
      <RunLevel>LeastPrivilege</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>false</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>false</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>true</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>true</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>PT1H</ExecutionTimeLimit>
    <Priority>7</Priority>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>python.exe</Command>
      <Arguments>scripts/auto_update_daily.py</Arguments>
      <WorkingDirectory>C:\\Users\\IT\\Desktop\\AI 2026\\เว็บดูหนัง</WorkingDirectory>
    </Exec>
  </Actions>
</Task>"""

with open("scripts/task.xml", "w", encoding="utf-16") as f:
    f.write(xml_content)

res = subprocess.run(["schtasks", "/Create", "/TN", "MovieStream_Daily_Update", "/XML", "scripts/task.xml", "/F"], capture_output=True, text=True)
print("Return code:", res.returncode)
print("Output:", res.stdout)
print("Error:", res.stderr)
