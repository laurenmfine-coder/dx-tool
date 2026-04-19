@echo off
REM ReasonDx Batch Case Upgrader — Windows CMD
REM
REM Usage:
REM   run-upgrade.bat YOUR_API_KEY                  upgrade cases not yet done
REM   run-upgrade.bat YOUR_API_KEY 20               upgrade next 20 (not yet done)
REM   run-upgrade.bat YOUR_API_KEY 20 --force       re-upgrade 20 even if already done
REM   run-upgrade.bat YOUR_API_KEY 0 --force        re-upgrade ALL cases
REM
REM NOTE: --force is now opt-in. It re-upgrades files that are already marked
REM done in .upgrade-progress.json. Use only when you intentionally want to
REM regenerate content for cases that already have guided data.

if "%1"=="" (
    echo Usage: run-upgrade.bat YOUR_API_KEY [limit] [--force]
    echo Example: run-upgrade.bat sk-ant-api03-xxx 20
    exit /b 1
)

set ANTHROPIC_API_KEY=%1

if "%2"=="" (
    echo Running full upgrade ^(skipping already-done cases^)...
    node tests\batch-upgrade.js
) else if "%3"=="--force" (
    if "%2"=="0" (
        echo Running FULL upgrade with --force ^(re-upgrading ALL cases^)...
        node tests\batch-upgrade.js --force
    ) else (
        echo Running upgrade for first %2 cases with --force...
        node tests\batch-upgrade.js --limit %2 --force
    )
) else (
    echo Running upgrade for first %2 cases ^(skipping already-done^)...
    node tests\batch-upgrade.js --limit %2
)
