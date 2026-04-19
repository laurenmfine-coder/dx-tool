@echo off
REM ReasonDx Batch Case Upgrader — Windows
REM Usage: run-upgrade.bat YOUR_API_KEY [limit]
REM Example: run-upgrade.bat sk-ant-xxx 20

if "%1"=="" (
    echo Usage: run-upgrade.bat YOUR_API_KEY [limit]
    echo Example: run-upgrade.bat sk-ant-api123 20
    exit /b 1
)

set ANTHROPIC_API_KEY=%1

if "%2"=="" (
    node tests\batch-upgrade.js
) else (
    node tests\batch-upgrade.js --limit %2
)
