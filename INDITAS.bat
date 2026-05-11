@echo off
cd /d "%~dp0"
title Gyogyszer app inditas
cls
echo ================================
echo  Gyogyszer app inditas
echo ================================
echo.
echo Ez az ablak inditja a webes tesztverziot.
echo Hagyd nyitva, amig probalod.
echo.
echo Ha elindult, ezen a gepen ezt nyisd meg:
echo http://127.0.0.1:8787
echo.
echo Telefonon csak akkor fog menni, ha ugyanazon a hotspot/Wi-Fi halozaton eleri ezt a gepet.
echo.
pause
echo.
echo Szerver inditasa...
echo.
if exist "%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" (
  "%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" "%~dp0local-server.mjs"
) else (
  echo Nem talalom a Node futtatot.
  echo Probald meg a prototipust ezen a gepen az index.html megnyitasaval.
)
echo.
echo A szerver leallt vagy hiba tortent.
pause
