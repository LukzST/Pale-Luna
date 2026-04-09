::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGqh2mMZFAtVQAHPMH60B4ks6eT+r8aSrExdceE3d4rImpuIYNQb7wXKfJElwjoX2P8DCBpLPhO4Lhkxu33hY2GWC/edvwqsZl2H5wsGTyskxyvHhT8zIJ1qm9dK7xC/8Ei/s7Ae0PobnJUPBXPeyK9nNocJ/gXU
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
::Zh4grVQjdCyDJGqh2mMZFAtVQAHPMH60B4ks6eT+r8aSrExdceE3d4rImpuIYNQb7wXKfJElwjoX2P8DCBpLPhO4Lhkxu33hY2GWC/edvwqsZl2H5wsGTyskxyvHhT8zIJ1qm9dK7xC/8Ei/s7Ae0PobnJU+FG/kgYB9NshA2Am8Z0zb2pxTCsLmbv3HCjHANycalHWj
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
title Pale Luna Echoes Of The Night
mode con: cols=120 lines=40
where node >nul
if errorlevel 1 (
  echo Node.js nao encontrado. Instale para continuar.
  pause
  exit
)
cd assets
node menubr.js
cd..
if not exist HAHAHAHAHAHAHA.txt (
taskkill /f /im "vlc.exe" 2>NUL
)

pause
exit /b 0