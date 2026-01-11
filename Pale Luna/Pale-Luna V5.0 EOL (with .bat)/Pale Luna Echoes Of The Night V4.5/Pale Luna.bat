::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGqh2mMZFAtVQAHPMH60B4ks6eT+r8aSrEwhZOMzfcL3z7qPYNZGpBWkULkB6kpblM5MIA5Wf1KdO0FklW9SpluMNMiS/QbiRSg=
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
::Zh4grVQjdCyDJGqh2mMZFAtVQAHPMH60B4ks6eT+r8aSrEwhZOMzfcL3z7qPYNZGpBWkULkB6kpblM5MIA5Wf1KdO0FklV5DumHFG9KSskHkUk3p
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
title Pale Luna Classic - Version 5.0
mode con: cols=120 lines=40

:: --- UNCONDITIONAL WARNING FOR WINDOWS 11 ---
echo.
echo COMPATIBILITY WARNING (WINDOWS 11):
echo If Pale Luna Classic is running in Windows Terminal (wt.exe), THE GAME MAY EXPERIENCE SEVERE DISPLAY/EXECUTION ERRORS.
echo MANDATORY RECOMMENDATION: Switch to the legacy console (old cmd).
echo.
echo STEPS FOR CHANGING:
echo 1. Open Windows Terminal.
echo 2. Click the 'v' arrow (dropdown) and then 'Settings'.
echo 3. Under 'Startup', change the 'Default terminal application' TO 'Windows Console Host'.
echo 4. Save and close.
echo.
pause
echo.
:: ------------------------------------------

where node >nul
if errorlevel 1 (
  echo Node.js not found. Install to continue.
  pause
  exit
)

cd assets
CALL node menuEN.js


cd..
if not exist HAHAHAHAHAHAHA.txt (
taskkill /f /im "vlc.exe" 2>NUL
)


pause
exit /b 0