@echo off
setlocal enabledelayedexpansion
title Pale Luna - Launcher
mode con: cols=90 lines=30
color 0A

:: ============================================
:: CONFIGURACOES
:: ============================================
set "CURRENT_VERSION=2.08"
set "GITHUB_REPO=LukzST/Pale-Luna"
set "GITHUB_API=https://api.github.com/repos/%GITHUB_REPO%"
set "GITHUB_RAW=https://raw.githubusercontent.com/%GITHUB_REPO%/main"
set "ROOT=%~dp0"
set "ASSETS_DIR=%ROOT%assets"

:: ============================================
:: VERIFICACAO DO NODE.JS
:: ============================================
cls
echo ================================================
echo            PALE LUNA - LAUNCHER
echo ================================================
echo.
echo Checking Node.js...
echo.

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Node.js is required to run Pale Luna.
    echo.
    set /p open="Open download page? [Y/N]: "
    if /i "!open!"=="Y" (
        start https://nodejs.org/en/download
    )
    echo.
    pause
    exit
)

for /f "tokens=*" %%v in ('node -v') do set NODE_VER=%%v
echo [OK] Node.js detected: !NODE_VER!
timeout /t 1 >nul

:: ============================================
:: VERIFICACAO DE ATUALIZACOES
:: ============================================
cls
echo ================================================
echo            PALE LUNA - CHECKING UPDATES
echo ================================================
echo.
echo Current Version: V%CURRENT_VERSION%
echo Repository: %GITHUB_REPO%
echo.
echo Connecting to GitHub...

:: Criar script PowerShell para verificar versoes
set "PS_SCRIPT=%TEMP%\pale_check.ps1"

(
echo $ErrorActionPreference = "SilentlyContinue"
echo [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
echo.
echo $apiUrl = "%GITHUB_API%/contents/FINAL"
echo.
echo try {
echo     $response = Invoke-RestMethod -Uri $apiUrl -Headers @{'User-Agent'='PaleLuna-Updater'} -TimeoutSec 15
echo     $versions = @()
echo     foreach ($item in $response) {
echo         if ($item.type -eq 'dir' -and $item.name -match '^V[0-9.]+$') {
echo             $versionNum = $item.name.Substring(1)
echo             $versions += $versionNum
echo         }
echo     }
echo     $versions = $versions | Sort-Object {[double]$_} -Descending
echo     if ($versions.Count -gt 0) {
echo         Write-Output $versions[0]
echo     } else {
echo         Write-Output "NONE"
echo     }
echo } catch {
echo     Write-Output "ERROR"
echo }
) > "%PS_SCRIPT%"

set "LATEST_NUM="
for /f "delims=" %%v in ('powershell -NoProfile -ExecutionPolicy Bypass -File "%PS_SCRIPT%" 2^>nul') do (
    set "LATEST_NUM=%%v"
)

del "%PS_SCRIPT%" 2>nul

if "%LATEST_NUM%"=="ERROR" (
    echo [WARNING] Could not connect to GitHub.
    echo Starting offline...
    goto :LAUNCH_GAME
)

if "%LATEST_NUM%"=="NONE" (
    echo [WARNING] No versions found.
    echo Starting offline...
    goto :LAUNCH_GAME
)

echo Latest version: V%LATEST_NUM%

:: Comparar versoes
if %LATEST_NUM% gtr %CURRENT_VERSION% (
    set "UPDATE_AVAILABLE=1"
) else (
    set "UPDATE_AVAILABLE=0"
)

if %UPDATE_AVAILABLE% equ 0 (
    echo.
    echo [OK] You have the latest version!
    timeout /t 2 /nobreak >nul
    goto :LAUNCH_GAME
)

:: ============================================
:: ATUALIZACAO DISPONIVEL
:: ============================================
echo.
echo ================================================
echo            UPDATE AVAILABLE!
echo ================================================
echo.
echo Current: V%CURRENT_VERSION%
echo Latest:  V%LATEST_NUM%
echo.
echo Press any key to update...
pause >nul

:: Criar pasta temporaria
set "UPDATE_DIR=%TEMP%\PaleLuna_Update"
if exist "%UPDATE_DIR%" rd /s /q "%UPDATE_DIR%"
mkdir "%UPDATE_DIR%" 2>nul

:: Script PowerShell para download
set "DL_SCRIPT=%TEMP%\pale_download.ps1"

(
echo $ErrorActionPreference = "Continue"
echo [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
echo.
echo $version = "V%LATEST_NUM%"
echo $updateDir = "%UPDATE_DIR%"
echo $apiUrl = "%GITHUB_API%/contents/FINAL/$version/Pale%%20Luna"
echo.
echo Write-Host ""
echo Write-Host "Downloading Pale Luna V%LATEST_NUM%..." -ForegroundColor Cyan
echo Write-Host ""
echo.
echo try {
echo     $response = Invoke-RestMethod -Uri $apiUrl -Headers @{'User-Agent'='PaleLuna-Updater'}
echo     $total = $response.Count
echo     $current = 0
echo.
echo     foreach ($item in $response) {
echo         $current++
echo         $fileName = $item.name
echo         $fileUrl = $item.download_url
echo         $percent = [math]::Round(($current / $total) * 100)
echo.
echo         $bar = ""
echo         $filled = [math]::Floor($percent / 5)
echo         for ($i = 0; $i -lt 20; $i++) {
echo             if ($i -lt $filled) { $bar += "█" } else { $bar += "░" }
echo         }
echo.
echo         Write-Host "[$bar] $percent% - $fileName"
echo.
echo         try {
echo             Invoke-WebRequest -Uri $fileUrl -OutFile "$updateDir\$fileName" -Headers @{'User-Agent'='PaleLuna-Updater'}
echo         } catch {
echo             Write-Host "  WARNING: Failed to download $fileName" -ForegroundColor Yellow
echo         }
echo     }
echo.
echo     Write-Host ""
echo     Write-Host "Download complete!" -ForegroundColor Green
echo     Write-Output "SUCCESS"
echo.
echo } catch {
echo     Write-Host "ERROR: $_" -ForegroundColor Red
echo     Write-Output "ERROR"
echo }
) > "%DL_SCRIPT%"

cls
echo ================================================
echo            DOWNLOADING UPDATE
echo ================================================
echo.

set "DL_RESULT="
for /f "delims=" %%r in ('powershell -NoProfile -ExecutionPolicy Bypass -File "%DL_SCRIPT%"') do (
    set "DL_RESULT=%%r"
)

del "%DL_SCRIPT%" 2>nul

if "%DL_RESULT%"=="ERROR" (
    echo.
    echo [ERROR] Failed to download update.
    echo Starting current version...
    rd /s /q "%UPDATE_DIR%" 2>nul
    timeout /t 3 /nobreak >nul
    goto :LAUNCH_GAME
)

:: ============================================
:: INSTALAR ATUALIZACAO
:: ============================================
echo.
echo ================================================
echo            INSTALLING UPDATE
echo ================================================
echo.
echo Copying new files...
xcopy /Y /E "%UPDATE_DIR%\*" "%ROOT%\" >nul 2>&1

echo Cleaning up...
rd /s /q "%UPDATE_DIR%" 2>nul

echo.
echo ================================================
echo            UPDATE COMPLETE!
echo ================================================
echo.
echo Updated to version: V%LATEST_NUM%
echo.
echo Restarting launcher...
timeout /t 2 /nobreak >nul

:: Reiniciar
start "" "%~f0"
exit

:LAUNCH_GAME
cls
echo ================================================
echo            PALE LUNA
echo ================================================
echo.
echo Version: V%CURRENT_VERSION%
echo.
echo Starting game...
timeout /t 1 /nobreak >nul

:: Verificar pasta assets
if not exist "%ASSETS_DIR%" (
    echo [ERROR] Assets folder not found!
    echo Expected: %ASSETS_DIR%
    pause
    exit
)

cd /d "%ASSETS_DIR%"

:: Verificar menu.js
if not exist "menu.js" (
    echo [ERROR] menu.js not found!
    pause
    exit
)

:: Iniciar o jogo
node menu.js

:: Voltar e limpar
cd /d "%ROOT%"
taskkill /f /im "vlc.exe" >nul 2>&1

exit /b 0