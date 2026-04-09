::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAnk
::fBw5plQjdG8=
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
::Zh4grVQjdCyDJGyX8VAjFDdBTwWRAE+/Fb4I5/jH3+uLpwAxQew+NrmKlOXAdNwj60nhOLo42HsarppCXVUMQiKqYgp0hXtMt+Zh9fuuthzkXkmbpkg/FXRhjnDEjTh1YtJ81MYb1kA=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
cd Conquistas

cls

REM Loop de animação para "Apagando seu progresso"
for %%A in ("Apagando seu progresso" "Apagando seu progresso." "Apagando seu progresso.." "Apagando seu progresso..." "Apagando seu progresso" "Apagando seu progresso." "Apagando seu progresso.." "Apagando seu progresso...") do (
    echo %%A
    timeout /t 1 >nul
    cls
)
del /Q *
cd..
echo Arquivos apagados com sucesso!
pause

REM Menu de confirmação
cls
echo ==========================================
echo Voce quer ver o site da desenvolvedora?   
echo ==========================================
echo (1) Sim
echo (2) Nao
echo ==========================================
set /p jogo="> "

if "%jogo%"=="1" (
    cls
    REM Loop de animação para "Abrindo"
    for %%A in ("Abrindo" "Abrindo." "Abrindo.." "Abrindo..." "Abrindo" "Abrindo.") do (
        echo %%A
        timeout /t 1 >nul
        cls
    )
    
    start "" "https://lukzrdev.wixsite.com/lukzrdev#sobre"
) else (
cls
    exit
)
