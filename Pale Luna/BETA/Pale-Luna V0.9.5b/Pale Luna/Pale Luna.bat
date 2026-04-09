@echo off
title Pale Luna
echo.
msg * "Aviso: Sistemas Windows 7/8/8.1 executam o jogo Pale Luna, mas podem ter problemas ao exibir algumas coisas. Deseja continuar?"
echo.

CHOICE /M "Deseja fechar o jogo?"
IF ERRORLEVEL 2 (
    echo Operacao abortada.
    exit
) ELSE (
    echo Voce aceitou continuar.
)

cd /d "%~dp0assets"
node "Pale Luna V0.9.5.js"
pause
