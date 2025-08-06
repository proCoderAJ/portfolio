@echo off
echo.
echo ===============================================
echo    Starting Abhishek's Portfolio Development
echo ===============================================
echo.

echo Checking if dependencies are installed...
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
) else (
    echo Dependencies already installed!
    echo.
)

echo Starting development server...
echo Your portfolio will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause