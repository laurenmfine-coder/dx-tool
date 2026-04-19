@echo off
REM ReasonDx Batch Case Upgrader — Windows CMD
REM Usage: run-upgrade.bat YOUR_API_KEY [limit]
REM Example: run-upgrade.bat sk-ant-api03-xxx 20

if "%1"=="" (
    echo Usage: run-upgrade.bat YOUR_API_KEY [limit]
    echo Example: run-upgrade.bat sk-ant-api03-xxx 20
    exit /b 1
)

set ANTHROPIC_API_KEY=%1

if "%2"=="" (
    echo Running full upgrade...
    node tests\batch-upgrade.js
) else (
    echo Running upgrade for first %2 cases...
    node tests\batch-upgrade.js --limit %2
)
