@echo off
REM ReasonDx Batch Case Upgrader — Windows CMD
REM Usage: run-upgrade.bat YOUR_API_KEY [limit]
REM        run-upgrade.bat YOUR_API_KEY [limit] --force   (re-upgrade even if done)
REM Example: run-upgrade.bat sk-ant-api03-xxx 20

if "%1"=="" (
    echo Usage: run-upgrade.bat YOUR_API_KEY [limit] [--force]
    echo Example: run-upgrade.bat sk-ant-api03-xxx 20
    exit /b 1
)

set ANTHROPIC_API_KEY=%1

if "%2"=="" (
    echo Running full upgrade...
    node tests\batch-upgrade.js --force
) else if "%3"=="--force" (
    echo Running upgrade for first %2 cases with --force...
    node tests\batch-upgrade.js --limit %2 --force
) else (
    echo Running upgrade for first %2 cases...
    node tests\batch-upgrade.js --limit %2 --force
)
