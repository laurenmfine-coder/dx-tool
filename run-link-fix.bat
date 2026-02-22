@echo off
echo ===============================================
echo ReasonDx - Remove Broken Mechanism Links
echo ===============================================
echo.

REM Check if Node.js is available
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Run the script on the cases folder
echo Running on cases folder...
node remove-mechanism-links.js cases

echo.
echo ===============================================
echo Done! Now commit and push your changes:
echo   1. Open GitHub Desktop
echo   2. Review the changed files
echo   3. Commit with message: "Remove broken mechanism links"
echo   4. Push to GitHub
echo ===============================================
pause
