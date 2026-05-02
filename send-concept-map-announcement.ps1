# send-concept-map-announcement.ps1
#
# Helper script for sending the ReasonDx concept-map-beta announcement.
# Uses curl.exe explicitly to bypass the PowerShell alias that mangled
# the JSON body on Apr 30. Bakes in the JSON so quoting can't go wrong.
#
# Usage (from PowerShell, in the dx-tool repo root):
#   .\send-concept-map-announcement.ps1 dry       # preview recipient count
#   .\send-concept-map-announcement.ps1 test      # send to yourself only
#   .\send-concept-map-announcement.ps1 live      # send to everyone NOW (asks for confirmation)
#   .\send-concept-map-announcement.ps1 schedule  # queue at Resend for a specific time
#   .\send-concept-map-announcement.ps1 extras    # send to extras list ON TOP OF cohort
#
# extras.txt format: one email per line. Optional comma-separated full name:
#     student1@nova.edu, Jane Smith
#     student2@nova.edu
#     colleague@example.com, Dr. Colleague
# Lines starting with # are ignored. Blank lines are ignored.
#
# Schedule mode prompts for a delivery time. Resend accepts:
#   - ISO 8601:           2026-05-02T13:00:00Z
#   - Natural language:   tomorrow at 9am ET
# When scheduled, the API call runs NOW (you see immediately whether it
# worked) and Resend holds the message until the scheduled time. You can
# cancel queued messages from the Resend dashboard up until delivery.
#
# Before running:
#   1. Set the SUPABASE_ANON_KEY environment variable, OR paste your
#      anon key into the $ANON_KEY variable below.
#   2. Confirm the function is deployed:
#        supabase functions deploy announcement-concept-map-beta
#   3. Run dry first, then test, then live. In that order.

# --- Configuration -----------------------------------------------------

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

# --- Argument handling -------------------------------------------------

$mode = $args[0]
if (-not $mode) {
    Write-Host "Usage: .\send-concept-map-announcement.ps1 [dry|test|live|schedule|extras]" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  dry       Preview recipient count (no send)"
    Write-Host "  test      Send to $TEST_EMAIL only"
    Write-Host "  live      Send to all weekly_email_eligible NOW"
    Write-Host "  schedule  Queue at Resend for a specific time (asks when)"
    Write-Host "  extras    Send to weekly_email_eligible PLUS extras.txt"
    Write-Host ""
    Write-Host "Recommended order: dry, then test, then live or schedule."
    Write-Host "Use 'extras' for KPCAM students not on the newsletter list."
    exit 1
}

# --- Build the body for each mode -------------------------------------

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
    "extras" {
        # Read extras.txt and build a JSON array of {email, full_name}.
        # Note: by sending with extra_emails but WITHOUT confirm_send,
        # the function will refuse the request (the safety gate). To
        # send only to the extras list, we pass test_email for the
        # first one and loop... actually, the cleaner approach is to
        # use confirm_send with an empty weekly_email_eligible cohort,
        # but we can't suppress the cohort. The right way: use
        # confirm_send, and the extras get added on top of the full
        # cohort. So extras mode currently does NOT exist as a
        # standalone send - it's "live + extras." If you want to
        # send ONLY to the extras list, use the test mode in a loop
        # (one email at a time) or contact me to add a recipient-
        # override flag to the function itself.
        if (-not (Test-Path "extras.txt")) {
            Write-Host "ERROR: extras.txt not found in current directory." -ForegroundColor Red
            Write-Host ""
            Write-Host "Create extras.txt with one email per line. Optional comma-separated name:"
            Write-Host "  student1@nova.edu, Jane Smith"
            Write-Host "  student2@nova.edu"
            Write-Host "  # Lines starting with # are ignored"
            exit 1
        }
        $extras = @()
        Get-Content "extras.txt" | ForEach-Object {
            $line = $_.Trim()
            if ($line -and -not $line.StartsWith("#")) {
                $parts = $line -split ",", 2
                $email = $parts[0].Trim()
                if ($email) {
                    if ($parts.Length -gt 1 -and $parts[1].Trim()) {
                        $extras += @{ email = $email; full_name = $parts[1].Trim() }
                    } else {
                        $extras += @{ email = $email }
                    }
                }
            }
        }
        if ($extras.Count -eq 0) {
            Write-Host "ERROR: extras.txt has no valid email lines." -ForegroundColor Red
            exit 1
        }
        Write-Host ""
        Write-Host "Extras mode adds $($extras.Count) recipient(s) ON TOP OF the full" -ForegroundColor Yellow
        Write-Host "weekly_email_eligible cohort. This is a LIVE send to everyone." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Extras to be added:"
        foreach ($e in $extras) {
            $name = if ($e.full_name) { " ($($e.full_name))" } else { "" }
            Write-Host "  $($e.email)$name"
        }
        # Build JSON via ConvertTo-Json to handle quoting safely
        $payload = @{ confirm_send = $true; extra_emails = $extras }
        $body = $payload | ConvertTo-Json -Compress -Depth 4
        $description = "LIVE SEND to weekly_email_eligible PLUS $($extras.Count) extras from extras.txt"
    }
    "schedule" {
        Write-Host ""
        Write-Host "Schedule mode: queues the email at Resend for a specific time." -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Examples of valid input:"
        Write-Host "  2026-05-02T13:00:00Z       (ISO 8601, UTC)"
        Write-Host "  2026-05-02T09:00:00-04:00  (ISO 8601 with timezone offset)"
        Write-Host "  tomorrow at 9am ET         (natural language)"
        Write-Host "  in 14 hours                (natural language)"
        Write-Host ""
        $when = Read-Host "When should this be delivered?"
        if (-not $when -or -not $when.Trim()) {
            Write-Host "Cancelled. No schedule input provided." -ForegroundColor Cyan
            exit 0
        }
        # Build payload via ConvertTo-Json so quoting is bulletproof
        $payload = @{ confirm_send = $true; scheduled_at = $when.Trim() }
        $body = $payload | ConvertTo-Json -Compress
        $description = "SCHEDULED SEND to all weekly_email_eligible at: $($when.Trim())"
    }
    default {
        Write-Host "ERROR: Unknown mode '$mode'. Use dry, test, live, schedule, or extras." -ForegroundColor Red
        exit 1
    }
}

# --- Confirmation prompt for live send --------------------------------

if ($mode.ToLower() -eq "live" -or $mode.ToLower() -eq "extras" -or $mode.ToLower() -eq "schedule") {
    Write-Host ""
    Write-Host "================================================================" -ForegroundColor Yellow
    if ($mode.ToLower() -eq "extras") {
        Write-Host "  LIVE SEND + EXTRAS - full cohort PLUS the extras list above." -ForegroundColor Yellow
    } elseif ($mode.ToLower() -eq "schedule") {
        Write-Host "  SCHEDULED SEND - queues at Resend for the time you specified." -ForegroundColor Yellow
        Write-Host "  You can cancel from the Resend dashboard up until delivery." -ForegroundColor Yellow
    } else {
        Write-Host "  LIVE SEND - This will email every weekly_email_eligible user." -ForegroundColor Yellow
    }
    Write-Host "================================================================" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Have you already done a dry run and a test send? (recommended)"
    $confirm = Read-Host "Type 'yes I am sure' to proceed (anything else cancels)"
    if ($confirm -ne "yes I am sure") {
        Write-Host "Cancelled. No send." -ForegroundColor Cyan
        exit 0
    }
}

# --- Send -------------------------------------------------------------

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
    Write-Host "Check your inbox at $TEST_EMAIL. If the email looks right:"
    Write-Host "  .\send-concept-map-announcement.ps1 live      (send NOW)" -ForegroundColor Yellow
    Write-Host "  .\send-concept-map-announcement.ps1 schedule  (queue for later)" -ForegroundColor Yellow
    Write-Host "  .\send-concept-map-announcement.ps1 extras    (cohort + KPCAM extras)" -ForegroundColor Yellow
} elseif ($mode.ToLower() -eq "schedule") {
    Write-Host "Messages queued at Resend for the scheduled time." -ForegroundColor Green
    Write-Host "View or cancel queued messages at https://resend.com/emails"
} elseif ($mode.ToLower() -eq "live" -or $mode.ToLower() -eq "extras") {
    Write-Host "Live send complete. Check the JSON response above for sent/failed counts."
    Write-Host "If any sends failed, check the Resend dashboard for delivery details."
}
