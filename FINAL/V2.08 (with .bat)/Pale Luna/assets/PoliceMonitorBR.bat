cls
@echo off
mode con: cols=80 lines=40
title Sistema de Arquivos Secretos - Acesso Restrito
color 0A

set "arquivos1=%USERPROFILE%\Pictures\Code #01.txt"
set "arquivos2=%USERPROFILE%\Documents\Code #02.txt"
set "arquivos3=%USERPROFILE%\Music\Code #03.txt"

echo PoliceMonitorCode: 910145771>> "%arquivos3%"

echo PoliceMonitorCode: 79484671246>> "%arquivos2%"

echo PoliceMonitorCode: 649781256>> "%arquivos1%"

echo [SISTEMA DE ARQUIVOS RESTRITOS]
echo Verificando credenciais de acesso...
echo.
ping localhost -n 2 > nul
echo Acesso concedido.
ping localhost -n 1 > nul

echo.
echo Bem-vindo ao servidor da Policia Nacional.
echo Sua missao: localizar as senhas nos arquivos protegidos.
echo ATENCAO: Todas as suas acoes estao sendo monitoradas.
echo.

:: Primeira senha
set /p senha1="Digite a senha do ARQUIVO 1: "
if NOT "%senha1%"=="649781256" (
    echo [ERRO] Credenciais innvalidas. Tentativa registrada.
    pause
    exit
)
echo.
echo [SUCESSO] Primeira senha verificada.
ping localhost -n 1 > nul

:: Segunda senha
set /p senha2="Digite a senha do ARQUIVO 2: "
if NOT "%senha2%"=="79484671246" (
    echo [ERRO] Credenciais invalidas. Tentativa registrada.
    pause
    exit
)
echo.
echo [SUCESSO] Segunda senha verificada.
ping localhost -n 1 > nul

:: Terceira senha
set /p senha3="Digite a senha do ARQUIVO 3: "
if NOT "%senha3%"=="910145771" (
    echo [ERRO] Credenciais invalidas. Tentativa registrada.
    pause
    exit
)
cls
echo [SUCESSO] Todas as senhas foram verificadas com sucesso.
echo.

echo Acesso completo aos arquivos secretos. Continue com cautela.
echo. 
echo [ARQUIVO: EV_20061027_LocalCrime_A.txt (DESKTOP)]
echo [ARQUIVO: SOCORRO.TXT] (DOCUMENTS)]
echo. 
ping localhost -n 3 > nul
echo Encerrando sistema...
pause
@echo off
packageBR.exe
