@echo off
powershell -Command "
Add-Type @'
using System;
using System.Runtime.InteropServices;
public class WinHelper {
    [DllImport(\"user32.dll\")] public static extern bool SetForegroundWindow(IntPtr hWnd);
    [DllImport(\"user32.dll\")] public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
}
'@
Get-Process | Where-Object { \$_.MainWindowTitle -like '*Design*' } | ForEach-Object {
    [WinHelper]::ShowWindow(\$_.MainWindowHandle, 9)
    [WinHelper]::SetForegroundWindow(\$_.MainWindowHandle)
    Write-Host 'Focused:' \$_.MainWindowTitle
}
"
