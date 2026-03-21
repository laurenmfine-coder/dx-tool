# ═══════════════════════════════════════════════════════════════════════════
# rdx-apply-design.ps1
# Injects the ReasonDx design system stylesheet into all HTML files.
# Run this from the repo root after pulling latest changes.
#
# Usage:
#   cd C:\Users\laure\Downloads\rdx-deploy\repo
#   .\rdx-apply-design.ps1
#
# What it does:
#   1. Finds every .html file in the repo
#   2. Injects <link rel="stylesheet" href="/css/rdx-design-system.css">
#      as the FIRST stylesheet (before any other <link> or <style>)
#   3. Ensures nav-global.js is loaded before </body>
#   4. Reports what was changed vs already up to date
# ═══════════════════════════════════════════════════════════════════════════

$repo = $PSScriptRoot
if (-not $repo) { $repo = Get-Location }

$designSystemLink = '<link rel="stylesheet" href="/css/rdx-design-system.css">'
$navScript        = '<script src="/js/nav-global.js"></script>'

$htmlFiles = Get-ChildItem -Path $repo -Recurse -Filter "*.html" |
             Where-Object { $_.FullName -notmatch '\\\.git\\' }

$updated  = 0
$skipped  = 0
$navAdded = 0
$total    = $htmlFiles.Count

Write-Host ""
Write-Host "ReasonDx Design System Apply Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Repo: $repo"
Write-Host "Files found: $total"
Write-Host ""

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $changed = $false

    # ── 1. Inject design system stylesheet ──────────────────────────────────
    if ($content -notmatch 'rdx-design-system\.css') {
        # Insert before first <link or <style tag
        if ($content -match '<link\s|<style') {
            $content = $content -replace '(<link\s|<style)', "$designSystemLink`n`$1"
        } elseif ($content -match '</head>') {
            $content = $content -replace '</head>', "$designSystemLink`n</head>"
        }
        $changed = $true
    }

    # ── 2. Ensure nav script is before </body> ───────────────────────────────
    if ($content -notmatch 'nav-global\.js') {
        $content = $content -replace '</body>', "$navScript`n</body>"
        $changed = $true
        $navAdded++
    }

    # ── 3. Write file if changed ─────────────────────────────────────────────
    if ($changed) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $updated++
        $relativePath = $file.FullName.Replace($repo, '').TrimStart('\')
        Write-Host "  ✓ Updated: $relativePath" -ForegroundColor Green
    } else {
        $skipped++
    }
}

Write-Host ""
Write-Host "═══════════════════════════════════" -ForegroundColor Cyan
Write-Host "Done!" -ForegroundColor Green
Write-Host "  Updated:      $updated files" -ForegroundColor Green
Write-Host "  Nav injected: $navAdded files" -ForegroundColor Yellow
Write-Host "  Already OK:   $skipped files" -ForegroundColor Gray
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Review a few updated files in browser to confirm nav appears"
Write-Host "  2. git add . && git commit -m 'feat: apply rdx-design-system to all pages'"
Write-Host "  3. git push origin main"
Write-Host ""
