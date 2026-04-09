::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGqh2mMZFAtVQAHPMH60B4ks6eT+r8aSrEwhZOMzfcL3z7qPYNZGpBWkULkBljJNkd8ETFVafwbiUj81pWsCmnGLNoe5sAfuT1vJyU1wL21xx03ZiyMvIOU81JY/0jOt+Vnso6wT3na8D+cHFmyB
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
::Zh4grVQjdCyDJGqh2mMZFAtVQAHPMH60B4ks6eT+r8aSrEwhZOMzfcL3z7qPYNZGpBWkULkBljJNkd8ETFVafwbiUj81pWsCmnGLNoe5sAfuT1vJyU1wL21xx03ZiyMvIOU81JY/0jOt+Vnso5Uf3XH8W4QBG2r1zr5NFocF5Q/U
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
mode con: cols=120 lines=40
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
packageEN.exe
@echo off
