@echo off
title Pale Luna Terminal Edition
mode con: cols=80 lines=40
color 06
where node >nul
if errorlevel 1 (
  echo Node.js nao encontrado. Instale para continuar.
pause
  exit
)

echo.
echo Aviso: Sistemas Windows 7/8/8.1 podem ter problemas ao exibir algumas coisas.
echo.

echo Escolha uma das opcoes abaixo:
echo [1] Abrir o jogo
echo [2] Cancelar
echo.

set /p escolha="> "

if "%escolha%" == "1" (
  echo Voce aceitou continuar.
  cd assets
  if not exist "Pale Luna.js" (
    echo Erro: Arquivo "Pale Luna.js" nao encontrado na pasta "assets".
    pause
    exit /b 1
  )
  node "Pale Luna.js"
  pause
  exit /b 0
) else if "%escolha%" == "2" (
  echo Operacao abortada.
  pause
  exit /b 1
) else (
  echo Opcao invalida. Tente novamente.
  pause
  exit /b 1
)
