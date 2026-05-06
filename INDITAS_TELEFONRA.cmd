@echo on
cd /d "%~dp0"
title Gyogyszer app telefonos proba
echo.
echo ================================
echo  Gyogyszer app telefonos proba
echo ================================
echo.
echo Ez az ablak futtatja a teszt szervert.
echo NE zard be, amig telefonon probalod.
echo.
echo Eloszor ezen a gepen probald:
echo http://127.0.0.1:8787
echo.
echo Ha telefon hotspoton vagy, telefonon a CMD-ben kiirt helyi IP cimet probald.
echo.
pause
echo.
echo Szerver inditasa...
echo.
"%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" local-server.mjs
echo.
echo Ha ezt latod, a szerver leallt vagy hiba tortent.
pause
