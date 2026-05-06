@echo off
cd /d "%~dp0"
echo Medication tracker phone preview
echo.
echo First test on this computer:
echo http://127.0.0.1:8787
echo.
echo Then try on the phone if it is on the same hotspot/Wi-Fi:
for /f "tokens=2 delims=:" %%A in ('ipconfig ^| findstr /C:"IPv4 Address"') do (
  set IP=%%A
)
set IP=%IP: =%
echo http://%IP%:8787
echo.
echo Keep this window open while testing. Press Ctrl+C to stop.
echo.
if exist "%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" (
  "%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" local-server.mjs
) else (
  node local-server.mjs
)
pause
