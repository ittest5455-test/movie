Set fso = CreateObject("Scripting.FileSystemObject")
currentDir = fso.GetParentFolderName(WScript.ScriptFullName)
Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = currentDir
pythonExe = "C:\Users\IT\AppData\Local\Programs\Python\Python313\pythonw.exe"
If Not fso.FileExists(pythonExe) Then
    pythonExe = "python"
End If
WshShell.Run """" & pythonExe & """ """ & currentDir & "\scripts\line_command_listener.py""", 0, False
