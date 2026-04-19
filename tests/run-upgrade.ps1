# ReasonDx Batch Case Upgrader — PowerShell
# Usage: .\run-upgrade.ps1 -ApiKey YOUR_KEY -Limit 20
param(
    [Parameter(Mandatory=$true)][string]$ApiKey,
    [int]$Limit = 0,
    [int]$From = 0,
    [switch]$DryRun
)

$env:ANTHROPIC_API_KEY = $ApiKey

$args = @()
if ($Limit -gt 0) { $args += "--limit", $Limit }
if ($From  -gt 0) { $args += "--from",  $From  }
if ($DryRun)      { $args += "--dry-run"        }

Write-Host "Starting upgrade..." -ForegroundColor Cyan
node tests\batch-upgrade.js @args
