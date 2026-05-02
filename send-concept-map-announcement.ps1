# send-concept-map-announcement.ps1
#
# Helper script for sending the ReasonDx concept-map-beta announcement.
# Uses curl.exe explicitly to bypass the PowerShell alias that mangled
# the JSON body on Apr 30. Bakes in the JSON so quoting can't go wrong.
#
# Usage (from PowerShell, in the dx-tool repo root):
#   .\send-concept-map-announcement.ps1 dry      # preview recipient count
#   .\send-concept-map-announcement.ps1 test     # send to yourself only
#   .\send-concept-map-announcement.ps1 live     # send to everyone (asks for confirmation)
#
# Before running:
#   1. Set the SUPABASE_ANON_KEY environment variable, OR paste your
#      anon key into the $ANON_KEY variable below.
#   2. Confirm the function is deployed:
#        supabase functions deploy announcement-concept-map-beta
#   3. Run dry first, then test, then live. In that order.

# ─── Configuration ─────────────────────────────────────────────────────

$FUNCTION_URL = "https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/announcement-concept-map-beta"
$TEST_EMAIL   = "ReasonDxeducation@gmail.com"

# Read the anon key from the environment, or hardcode it here if you
# prefer. Hardcoding is fine for a personal script you don't share;
# environment variable is safer if the script ends up in a repo.
$ANON_KEY = $env:SUPABASE_ANON_KEY
if (-not $ANON_KEY) {
    $ANON_KEY = ""  # paste your anon key here as a fallback
}

if (-not $ANON_KEY) {
    Write-Host "ERROR: SUPABASE_ANON_KEY is not set." -ForegroundColor Red
    Write-Host ""
    Write-Host "Either set the environment variable for this session:"
    Write-Host '  $env:SUPABASE_ANON_KEY = "your_anon_key_here"'
    Write-Host ""
    Write-Host "Or paste your anon key into the `$ANON_KEY variable in this script."
    exit 1
}

# ─── Argument handling ─────────────────────────────────────────────────

$mode = $args[0]
if (-not $mode) {
    Write-Host "Usage: .\send-concept-map-announcement.ps1 [dry|test|live]" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  dry   Preview recipient count (no send)"
    Write-Host "  test  Send to $TEST_EMAIL only"
    Write-Host "  live  Send to all weekly_email_eligible subscribers"
    Write-Host ""
    Write-Host "Recommended order: dry, then test, then live."
    exit 1
}

# ─── Build the body for each mode ─────────────────────────────────────

switch ($mode.ToLower()) {
    "dry" {
        $body = '{"dry_run": true}'
        $description = "Dry run (no send, returns recipient count)"
    }
    "test" {
        $body = '{"test_email": "' + $TEST_EMAIL + '"}'
        $description = "Test send to $TEST_EMAIL only"
    }
    "live" {
        $body = '{"confirm_send": true}'
        $description = "LIVE SEND to all weekly_email_eligible subscribers"
    }
    default {
        Write-Host "ERROR: Unknown mode '$mode'. Use dry, test, or live." -ForegroundColor Red
        exit 1
    }
}

# ─── Confirmation prompt for live send ────────────────────────────────

if ($mode.ToLower() -eq "live") {
    Write-Host ""
    Write-Host "================================================================" -ForegroundColor Yellow
    Write-Host "  LIVE SEND — This will email every weekly_email_eligible user." -ForegroundColor Yellow
    Write-Host "================================================================" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Have you already done a dry run and a test send? (recommended)"
    $confirm = Read-Host "Type 'yes I am sure' to proceed (anything else cancels)"
    if ($confirm -ne "yes I am sure") {
        Write-Host "Cancelled. No send." -ForegroundColor Cyan
        exit 0
    }
}

# ─── Send ─────────────────────────────────────────────────────────────

Write-Host ""
Write-Host "Mode: $description" -ForegroundColor Cyan
Write-Host "Endpoint: $FUNCTION_URL"
Write-Host "Body: $body"
Write-Host ""
Write-Host "Sending..." -ForegroundColor Cyan
Write-Host ""

# Using curl.exe explicitly (not the PowerShell alias) and writing the
# body to a temp file so the curl command line stays simple. This
# avoids every quoting-related failure mode at once.

$tempFile = New-TemporaryFile
Set-Content -Path $tempFile.FullName -Value $body -NoNewline

try {
    & curl.exe -X POST $FUNCTION_URL `
        -H "Authorization: Bearer $ANON_KEY" `
        -H "Content-Type: application/json" `
        --data-binary "@$($tempFile.FullName)" `
        -w "`n`nHTTP status: %{http_code}`nTotal time: %{time_total}s`n"
} finally {
    Remove-Item $tempFile.FullName -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "Done. Check the response above." -ForegroundColor Green
Write-Host ""
if ($mode.ToLower() -eq "dry") {
    Write-Host "If the recipient count looks right, run:"
    Write-Host "  .\send-concept-map-announcement.ps1 test" -ForegroundColor Yellow
} elseif ($mode.ToLower() -eq "test") {
    Write-Host "Check your inbox at $TEST_EMAIL. If the email looks right, run:"
    Write-Host "  .\send-concept-map-announcement.ps1 live" -ForegroundColor Yellow
} elseif ($mode.ToLower() -eq "live") {
    Write-Host "Live send complete. Check the JSON response above for sent/failed counts."
    Write-Host "If any sends failed, check the Resend dashboard for delivery details."
}
