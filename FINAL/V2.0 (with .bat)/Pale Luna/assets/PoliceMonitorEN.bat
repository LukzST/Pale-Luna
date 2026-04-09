@echo off
mode con: cols=80 lines=40
title Secret File System - Restricted Access
color 0A

set "file1=%USERPROFILE%\Pictures\Code #01.txt"
set "file2=%USERPROFILE%\Documents\Code #02.txt"
set "file3=%USERPROFILE%\Music\Code #03.txt"

echo PoliceMonitorCode: 910145771>> "%file3%"

echo PoliceMonitorCode: 79484671246>> "%file2%"

echo PoliceMonitorCode: 649781256>> "%file1%"

echo [RESTRICTED FILE SYSTEM]
echo Verifying access credentials...
echo.
ping localhost -n 2 > nul
echo Access granted.
ping localhost -n 1 > nul

echo.
echo Welcome to the National Police server.
echo Your mission: locate the passwords in the protected files.
echo ATTENTION: All your actions are being monitored.
echo.

:: First password
set /p pass1="Enter password for FILE 1: "
if NOT "%pass1%"=="649781256" (
    echo [ERROR] Invalid credentials. Attempt logged.
    pause
    exit
)
echo.
echo [SUCCESS] First password verified.
ping localhost -n 1 > nul

:: Second password
set /p pass2="Enter password for FILE 2: "
if NOT "%pass2%"=="79484671246" (
    echo [ERROR] Invalid credentials. Attempt logged.
    pause
    exit
)
echo.
echo [SUCCESS] Second password verified.
ping localhost -n 1 > nul

:: Third password
set /p pass3="Enter password for FILE 3: "
if NOT "%pass3%"=="910145771" (
    echo [ERROR] Invalid credentials. Attempt logged.
    pause
    exit
)
cls
echo [SUCCESS] All passwords have been successfully verified.
echo.

echo Full access to secret files. Proceed with caution.
echo.
echo [FILE: EV_20061027_LocalCrime_A.txt (DESKTOP)]
echo [FILE: HELP.TXT] (DOCUMENTS)]
echo.
ping localhost -n 3 > nul
echo Shutting down system...
pause
@echo off
packageEN.exe