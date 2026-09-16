@echo off
title Omnia Islam Portfolio Server
cd /d "%~dp0"

echo ============================================================
echo   Starting Omnia Islam's Developer Portfolio Web Server...
echo ============================================================
echo.

:: Verify Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found on your system!
    echo Please install Node.js from https://nodejs.org/ to run the portfolio.
    echo.
    pause
    exit /b 1
)

:: Check if dependencies are installed
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing project dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Dependency installation failed.
        pause
        exit /b 1
    )
)

echo [INFO] Launching Vite development server at http://localhost:3000 ...
echo [INFO] Your default web browser will open automatically.
echo [INFO] Press Ctrl+C in this window to stop the server anytime.
echo.

:: Start Vite dev server (vite.config.js is already configured to open browser at port 3000)
call npm run dev

if %errorlevel% neq 0 (
    echo.
    echo [INFO] Server stopped or encountered an unexpected issue.
    pause
)
