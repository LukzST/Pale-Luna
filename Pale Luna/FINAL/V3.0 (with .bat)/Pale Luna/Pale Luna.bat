::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGqh2mMZFDd9ayy2AE2TKJQw1N6qobrUnmE0c8oLRKPy/Zy6H8kwxWuqfJUitg==
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
::Zh4grVQjdCyDJGqh2mMZFDd9ayy2AE2TKJQw1N6qobrUnmE0c8oLRKPy/Zy6buUL7yU=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
setlocal enabledelayedexpansion

set "ROOT=%~dp0"
set "STATUS_DIR=%ROOT%ASSETS\STATUS"
set "STATUS_FILE=%STATUS_DIR%\status.txt"
set "SCRIPT_NAME=%~nx0"

:: ============================================
:: CONFIGURACOES DO JOGO
:: ============================================
set "CURRENT_VERSION=5.0"
set "GITHUB_REPO=lukzst/PALE-LUNA"
set "GITHUB_API=https://api.github.com/repos/%GITHUB_REPO%"

if not exist "%STATUS_DIR%" mkdir "%STATUS_DIR%"

if exist "%STATUS_FILE%" (
    findstr /C:"TRUE" "%STATUS_FILE%" >nul
    if !errorlevel! equ 0 (
        goto :CHECK_UPDATES
    )
)

:DEPENDENCY_CHECKER
cls
echo ================================================
echo            PALE LUNA - DEPENDENCY CHECKER
echo ================================================
echo.

echo [1/3] Verifying Windows Package Manager...
winget --version >nul 2>&1
if %errorlevel% equ 0 (
    for /f "tokens=*" %%a in ('winget --version') do set W_VER=%%a
    echo Version detected: !W_VER! [Compatible]
    timeout /t 2 >nul
) else (
    echo [FAILED] Winget not found or not compatible.
    echo FALSE > "%STATUS_FILE%"
    echo.
    echo Please install the App Installer from the Microsoft Store.
    echo.
    pause
    exit
)

cls
echo ================================================
echo            PALE LUNA - DEPENDENCY CHECKER
echo ================================================
echo.
echo [2/3] VERIFYING NODE.JS
echo.
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Node.js installation not found.
    echo.
    set /p choice="Would you like to install Node.js now via Winget? [Y/N]: "
    
    if /i "!choice!"=="Y" (
        cls
        echo Installing Node.js...
        echo This may take a few minutes...
        echo.
        winget install OpenJS.NodeJS --silent
        if !errorlevel! equ 0 (
            echo.
            echo Installation complete! The system needs to restart this script.
            echo FALSE > "%STATUS_FILE%"
            timeout /t 3
            start "" "%SCRIPT_NAME%"
            exit
        ) else (
            cls
            echo Automatic installation failed.
            echo FALSE > "%STATUS_FILE%"
            set /p browser="Open official website for manual download? [Y/N]: "
            if /i "!browser!"=="Y" (
                start https://nodejs.org/en/download
                echo Closing in 10 seconds...
                timeout /t 10
                exit
            ) else (
                exit
            )
        )
    ) else (
        echo [INFO] User declined installation. The game cannot run.
        echo FALSE > "%STATUS_FILE%"
        pause
        exit
    )
) else (
    for /f "tokens=*" %%v in ('node -v') do set NODE_VER=%%v
    echo Node.js detected: !NODE_VER!
    timeout /t 2 >nul
)

cls
echo ================================================
echo            PALE LUNA - DEPENDENCY CHECKER
echo ================================================
echo.
echo [3/3] VERIFYING LIBRARIES (NPM)
echo.

set "DEPS=blessed play-sound"
set "NEEDS_RESTART=0"

for %%d in (%DEPS%) do (
    echo Verifying existence of dependency: %%d...
    if exist "%ROOT%ASSETS\node_modules\%%d" (
        echo [OK] %%d is already present.
        echo.
    ) else (
        echo [WARNING] Dependency %%d not found.
        set /p dep_choice="Install %%d now via NPM? [Y/N]: "
        if /i "!dep_choice!"=="Y" (
            echo Installing %%d... Please wait.
            cd /d "%ROOT%ASSETS"
            call npm install %%d --silent --no-progress >nul 2>&1
            cd /d "%ROOT%"
            if !errorlevel! equ 0 (
                echo [SUCCESS] %%d installed successfully.
                set "NEEDS_RESTART=1"
            ) else (
                echo [ERROR] Critical failure while installing %%d.
                echo FALSE > "%STATUS_FILE%"
                pause
                exit
            )
        ) else (
            echo [!] Without these libraries, the game will crash.
            echo FALSE > "%STATUS_FILE%"
            pause
            exit
        )
        echo.
    )
    timeout /t 1 >nul
)

if "!NEEDS_RESTART!"=="1" (
    echo TRUE > "%STATUS_FILE%"
    echo Libraries configured. Restarting...
    timeout /t 3
    cd /d "%ROOT%"
    start "" "%SCRIPT_NAME%"
    exit
)

echo TRUE > "%STATUS_FILE%"

:CHECK_UPDATES
cls
echo ================================================
echo            PALE LUNA - CHECKING UPDATES
echo ================================================
echo.
echo Current Version: V%CURRENT_VERSION%
echo Checking repository: %GITHUB_REPO%
echo.

:: Criar script PowerShell para verificar atualizacoes
set "PS_SCRIPT=%TEMP%\pale_check.ps1"

(
echo $ErrorActionPreference = "SilentlyContinue"
echo [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
echo.
echo $apiUrl = "%GITHUB_API%/contents/FINAL"
echo.
echo try {
echo     $response = Invoke-RestMethod -Uri $apiUrl -Headers @{'User-Agent'='PaleLuna-Updater'} -TimeoutSec 10
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
    echo Playing offline...
    goto :BOOT_APPLICATION
)

if "%LATEST_NUM%"=="NONE" (
    echo [WARNING] No versions found in repository.
    echo Playing offline...
    goto :BOOT_APPLICATION
)

echo Latest version available: V%LATEST_NUM%

:: Comparar versoes
powershell -NoProfile -Command "exit (0)" 2>nul
if %LATEST_NUM% gtr %CURRENT_VERSION% (
    set "UPDATE_AVAILABLE=1"
) else (
    set "UPDATE_AVAILABLE=0"
)

if %UPDATE_AVAILABLE% equ 0 (
    echo [OK] You are running the latest version!
    timeout /t 2 /nobreak >nul
    goto :BOOT_APPLICATION
)

:: ============================================
:: ATUALIZACAO DISPONIVEL
:: ============================================
echo.
echo ================================================
echo            UPDATE AVAILABLE!
echo ================================================
echo.
echo Current version: V%CURRENT_VERSION%
echo New version:     V%LATEST_NUM%
echo.
echo Press any key to download and install update...
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
echo $apiUrl = "%GITHUB_API%/contents/FINAL/$version/PALE LUNA"
echo.
echo Write-Host "Connecting to GitHub..." -ForegroundColor Cyan
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
echo             if ($i -lt $filled) { $bar += "#" } else { $bar += "-" }
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
echo Version: V%LATEST_NUM%
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
    goto :BOOT_APPLICATION
)

echo.
echo ================================================
echo            INSTALLING UPDATE
echo ================================================
echo.
echo Copying new files...
xcopy /Y /E "%UPDATE_DIR%\*" "%ROOT%\" >nul 2>&1

echo Cleaning temporary files...
rd /s /q "%UPDATE_DIR%" 2>nul

echo.
echo ================================================
echo            UPDATE COMPLETE!
echo ================================================
echo.
echo Version updated to: V%LATEST_NUM%
echo.
echo Restarting launcher...
timeout /t 2 /nobreak >nul

:: Reiniciar o launcher
start "" "%SCRIPT_NAME%"
exit

:BOOT_APPLICATION
cls
echo ================================================
echo            PALE LUNA
echo ================================================
echo.
echo [SYSTEM] STATUS: TRUE
echo [SYSTEM] Version: V%CURRENT_VERSION%
echo [SYSTEM] Starting Pale Luna...
timeout /t 2 /nobreak >nul
echo.

where node >nul 2>&1 || (echo Error: Node not recognized by the system. & pause & exit)

for /f "tokens=3" %%a in ('reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v CurrentBuild') do set BUILD=%%a
set BUILD=!BUILD: =!

if exist "%ROOT%ASSETS" (
    cd /d "%ROOT%ASSETS"
) else (
    echo [ERROR] ASSETS folder not found at %ROOT%ASSETS
    echo Please check game files or run from correct location.
    pause
    exit
)

:: Compatibilidade com Windows Terminal
if %BUILD% GEQ 22000 (
    echo Running in native console mode...
    echo.
    node MENU.JS
    exit
) else if %BUILD% GEQ 10240 (
    echo Detected Windows 10. Running in compatibility mode...
    echo.
    start node MENU.JS --cmd
    exit
) else (
    echo Running in legacy mode...
    echo.
    node MENU.JS --cmd
    exit
)