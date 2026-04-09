@echo off
title Pale Luna
echo.
msg * "Aviso: Sistemas Windows 7/8/8.1 executam o jogo Pale Luna, mas podem ter problemas ao exibir algumas coisas. Deseja continuar?"
echo.

choice /m "Deseja abrir o jogo?"
if errorlevel 2 (
    echo Operacao abortada.
pause
    exit
) else (
    echo Voce aceitou continuar.
)

cd /d "%~dp0assets"
node "Pale Luna V0.9.8.js"
pause
