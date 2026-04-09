@echo off
title Pale Luna


where node >nul 2>&1
if %errorlevel% neq 0 (
  echo Erro: Node.js não encontrado. Certifique-se de que está instalado e no PATH.
  pause
  exit /b 1
)

echo.
msg * "Aviso: Sistemas Windows 7/8/8.1 podem ter problemas ao exibir algumas coisas. Deseja continuar?"
echo.

choice /m "Deseja abrir o jogo?"
if errorlevel 2 (
  echo Operação abortada.
  pause
  exit /b 1
)

echo Voce aceitou continuar.

cd /d "%~dp0assets"
if not exist "Pale Luna V1.0.0.js" (
  echo Erro: Arquivo "Pale Luna V1.0.0.js" não encontrado na pasta "assets".
  pause
  exit /b 1
)

node "Pale Luna V1.0.0.js"
