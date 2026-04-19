# ReasonDx Batch Case Upgrader — PowerShell
# Usage: .\tests\run-upgrade.ps1 -ApiKey "sk-ant-xxx" -Limit 20

param(
    [Parameter(Mandatory=$true)]
    [string]$ApiKey,
    
    [int]$Limit = 0,
    [int]$From = 0,
    [switch]$DryRun,
    [switch]$Force
)

$env:ANTHROPIC_API_KEY = $ApiKey

$args = @()
if ($Limit -gt 0) { $args += "--limit", $Limit }
if ($From -gt 0)  { $args += "--from", $From }
if ($DryRun)      { $args += "--dry-run" }
if ($Force)       { $args += "--force" }

Write-Host "Starting upgrade with limit=$Limit from=$From dryRun=$DryRun"
node tests\batch-upgrade.js @args
