@echo off
title Pale Luna Terminal Edition
mode con: cols=80 lines=40
color 0B
where node >nul
if errorlevel 1 (
  echo Node.js nao encontrado. Instale para continuar.
pause
  exit
)
taskkill /f /im "vlc.exe"
cd assets
if not exist menu.js (
echo Erro: Arquivo "menu.js" nao encontrado na pasta "assets".
pause
exit /b 1
)
node menu.js
taskkill /f /im "vlc.exe"
pause
exit /b 0
