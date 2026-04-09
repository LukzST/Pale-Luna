::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGqB+kM5FC5EQAuDOHj6IbwI1Nj64+/HjlgTVWDbus+WmpiPLkPU60jhe4IixUZqmccJTDdNcBPrI08ApmpDpSSEJIeKth3y6Z2M9XcAGmlxyk/Fgip7VoImwo1Tmze36EW/0acRxTHDbqgCECPN1KJpui3CwQukeHbBmbxbBP/tZN0=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGqB+kM5FC5EQAuDOHj6IbwI1Nj64+/HjlgTVWDbus+WmpiPLkPU60jhe4IixUZqmccJTDdNcBPrI08ApmpDpSSEJIeKth3y6Z2M9XcAGmlxyk/Fgip7VoImwo1Tmze36EW/0acRxTHDbqgCECPN1KJpui3CwTq1ZEyItqZbS3QKqf3dBiTFKmcegDDmj4p+l4wjESVtS3g=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
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
