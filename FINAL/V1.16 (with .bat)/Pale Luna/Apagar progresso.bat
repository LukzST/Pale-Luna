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
