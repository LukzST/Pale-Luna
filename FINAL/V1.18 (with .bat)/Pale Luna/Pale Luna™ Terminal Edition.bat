::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGqB+kM5FChVSESgOXmoH/U76eX+/Na3o0EYFM4qdo5ZPnbOFOUB50zqdJpt835TjMIDAidofx6uLiMhp2/AUqbFA8KOvgbvS0TJw085D2x7iSOdzB80ZNJ72sIQkza77l5cSqAD7Uj+UqxDOXbvwOxeaodQvUKjYV3A2v1XS+KnV43oDzOID3wRjfInSb9rjpMSViN6QFZTiLYM
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
::Zh4grVQjdCyDJGqB+kM5FChVSESgOXmoH/U76eX+/Na3o0EYFM4qdo5ZPnbOFOUB50zqdJpt835TjMIDAidofx6uLiMhp2/AUqbFA8KOvgbvS0TJw085D2x7iSOdzB80ZNJ72sIQkza77l5cSqAD7Uj+UqxDOXbvwOxeaodQvUKjYV3A2v1XS+KnV43oDzOID3wRjfInSb9an48oHwxgQBnYb3ss1S7qTpu13XsBDDfMsOXrxhcxf9+b
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
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

echo.
echo Aviso: Sistemas Windows 7/8/8.1 podem ter problemas ao exibir algumas coisas.
cd assets
if not exist menu.js (
echo Erro: Arquivo "menu.js" nao encontrado na pasta "assets".
pause
exit /b 1
)
node menu.js
pause
exit /b 0
