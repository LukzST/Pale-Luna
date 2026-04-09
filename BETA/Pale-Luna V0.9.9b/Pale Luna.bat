@echo off
title Pale Luna

:: Verificação do Node.js
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

:: Execução do jogo
cd /d "%~dp0assets"
if not exist "Pale Luna V0.9.9.js" (
  echo Erro: Arquivo "Pale Luna V0.9.9.js" não encontrado na pasta "assets".
  pause
  exit /b 1
)

node "Pale Luna V0.9.9.js"

pause
@echo off
set "arquivo=%USERPROFILE%\Documents\SOCORRO.txt"

echo Olá... Você pode... pode me ouvir? > "%arquivo%"
echo Eu preciso de ajuda... por favor... >> "%arquivo%"
echo Está tão escuro aqui... >> "%arquivo%"
echo O silêncio é insuportável... >> "%arquivo%"
echo Eu estou perdido e com medo... >> "%arquivo%"
echo Por favor, não avance... >> "%arquivo%"
echo Algo está esperando... >> "%arquivo%"
echo Um outro caminho existe... >> "%arquivo%"
echo Mas não sei se há saída... >> "%arquivo%"
echo Está vindo... >> "%arquivo%"
echo Rápido, volte... >> "%arquivo%"
echo. >> "%arquivo%"
echo Em um desenvolvimento perturbador, as autoridades locais fizeram uma descoberta >> "%arquivo%"
echo angustiante em uma área isolada, próxima a uma casa na floresta. Os restos mortais de >> "%arquivo%"
echo uma criança foram encontrados enterrados ao lado dos restos mortais de um adulto. A >> "%arquivo%"
echo polícia está investigando ativamente o caso, buscando respostas para as circunstâncias >> "%arquivo%"
echo que envolvem essa trágica descoberta. >> "%arquivo%"
echo. >> "%arquivo%"
echo O detetive encarregado do caso expressou sua profunda tristeza e determinação em >> "%arquivo%"
echo levar os responsáveis à justiça. "É um crime hediondo que nos abalou profundamente" >> "%arquivo%"
echo disse ele. "Estamos comprometidos em seguir todas as pistas e garantir que a justiça >> "%arquivo%"
echo seja feita para as vítimas e suas famílias." >> "%arquivo%"
echo. >> "%arquivo%"
echo A comunidade local está em choque com a notícia, e muitos estão oferecendo apoio às >> "%arquivo%"
echo autoridades na investigação. A polícia pede que qualquer pessoa com informações >> "%arquivo%"
echo relevantes entre em contato imediatamente, pois sua ajuda pode ser crucial para desvendar esse caso sombrio. >> "%arquivo%"

exit /b 0