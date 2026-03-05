#!/usr/bin/env python3
"""
ReasonDx Source License Auditor
================================
Scans all DOIs in emr-data/ cases AND topics/ HTML files,
checks each against the Unpaywall API (free, no key needed),
and classifies every source as:

  GREEN  — CC BY / US Government / Public Domain → safe to link
  YELLOW — Open access but NC or ND license → suggest-only, no link
  RED    — Closed access / unknown → remove link, suggest-only

Produces:
  tools/audit-results/source-audit-report.json   (machine-readable)
  tools/audit-results/source-audit-report.txt    (human-readable summary)
  tools/audit-results/remediation-commands.sh    (shows which files need fixing)

Usage:
  python3 tools/audit_sources.py
  python3 tools/audit_sources.py --fast   (skip Unpaywall, use publisher heuristics only)
"""

import re, json, time, sys, argparse
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError

REPO_DIR     = Path(__file__).parent.parent
EMR_DIR      = REPO_DIR / 'emr-data'
TOPICS_DIR   = REPO_DIR / 'topics'
OUT_DIR      = REPO_DIR / 'tools' / 'audit-results'
UNPAYWALL    = 'https://api.unpaywall.org/v2/{}?email=rdx-audit@reasondx.com'

# ── Known safe sources (no API call needed) ──────────────────────────────────
ALWAYS_SAFE = {
    'nih.gov', 'ncbi.nlm.nih.gov', 'pubmed.ncbi.nlm.nih.gov',
    'cdc.gov', 'ahrq.gov', 'cms.gov', 'fda.gov', 'hhs.gov',
    'who.int',          # WHO reports are generally public
    '10.1186/',         # BioMed Central — CC BY
    '10.1371/',         # PLOS — CC BY
    '10.7554/',         # eLife — CC BY
    '10.1101/',         # bioRxiv preprints
    '10.1093/ofid/',    # Open Forum Infectious Diseases — CC BY
    '10.1093/jamia/',   # JAMIA open access articles (check each)
}

# ── Known risky publishers ───────────────────────────────────────────────────
RISKY_PREFIXES = {
    '10.1016/': 'Elsevier',
    '10.1111/': 'Wiley',
    '10.1002/': 'Wiley',
    '10.1056/': 'NEJM Group',
    '10.1001/': 'JAMA Network',
    '10.1136/': 'BMJ',
    '10.1097/': 'Wolters Kluwer / LWW',
    '10.1007/': 'Springer Nature',
    '10.1080/': 'Taylor & Francis',
    '10.1183/': 'European Respiratory Society',
    '10.1164/': 'ATS / AJRCCM',
    '10.1053/': 'Elsevier / Saunders',
    '10.1046/': 'Wiley-Blackwell',
    '10.1093/': 'Oxford University Press',
    '10.1177/': 'SAGE Publications',
    '10.1161/': 'AHA / Circulation',
    '10.1210/': 'Endocrine Society / OUP',
    '10.14309/': 'Wolters Kluwer / ACG',
    '10.2337/': 'American Diabetes Association',
    '10.1176/': 'American Psychiatric Association',
    '10.1182/': 'ASH / Blood',
    '10.1038/': 'Nature Publishing Group',
    '10.1212/': 'AAN / Neurology',
    '10.1681/': 'ASN / JASN',
    '10.1542/': 'AAP / Pediatrics',
    '10.3949/': 'Cleveland Clinic Journal',
    '10.4158/': 'AACE',
    '10.1089/': 'Mary Ann Liebert',
    '10.1530/': 'Bioscientifica / EJE',
    '10.1192/': 'RCPsych / BJP',
}


def extract_dois_from_cases():
    """Return {doi: [list of case files using it]}"""
    doi_files = {}
    for f in EMR_DIR.glob('*.js'):
        text = f.read_text(encoding='utf-8', errors='ignore')
        dois = re.findall(r'["\s](10\.\d{4,}/[^\s\'">,\]\}]+)', text)
        for doi in dois:
            doi = doi.strip('.,;')
            doi_files.setdefault(doi, [])
            if f.name not in doi_files[doi]:
                doi_files[doi].append(f.name)
    return doi_files


def extract_dois_from_topics():
    """Return {doi: [list of HTML files using it]}"""
    doi_files = {}
    for f in TOPICS_DIR.glob('*.html'):
        text = f.read_text(encoding='utf-8', errors='ignore')
        dois = re.findall(r'href="https?://doi\.org/(10\.[^"]+)"', text)
        for doi in dois:
            doi = doi.strip('.,;')
            doi_files.setdefault(doi, [])
            if f.name not in doi_files[doi]:
                doi_files[doi].append(f.name)
    return doi_files


def publisher_heuristic(doi):
    """Fast classification based on DOI prefix without API call."""
    doi_lower = doi.lower()
    for prefix, publisher in RISKY_PREFIXES.items():
        if doi_lower.startswith(prefix):
            return 'YELLOW', f'Risky publisher: {publisher} — verify license'
    for safe in ALWAYS_SAFE:
        if doi_lower.startswith(safe) or safe in doi_lower:
            return 'GREEN', 'Known safe publisher (CC BY or public domain)'
    return 'YELLOW', 'Unknown publisher — needs manual check'


def check_unpaywall(doi):
    """Query Unpaywall for OA status and license."""
    url = UNPAYWALL.format(doi)
    try:
        req = Request(url, headers={'User-Agent': 'ReasonDx-Audit/1.0'})
        with urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
        
        if not data.get('is_oa'):
            return 'RED', 'Closed access — not open access'
        
        best = data.get('best_oa_location') or {}
        license_str = (best.get('license') or '').lower()
        
        if not license_str:
            # Try all locations
            for loc in data.get('oa_locations', []):
                if loc.get('license'):
                    license_str = loc['license'].lower()
                    break
        
        if 'cc-by' == license_str or license_str == 'cc by':
            return 'GREEN', f'CC BY — safe to use commercially'
        elif 'cc-by-sa' in license_str:
            return 'YELLOW', 'CC BY-SA — derivatives must carry same license'
        elif 'cc-by-nc' in license_str or 'cc-nc' in license_str:
            return 'RED', f'CC BY-NC — NON-COMMERCIAL only, cannot use in paid product'
        elif 'cc-by-nd' in license_str:
            return 'RED', f'CC BY-ND — no derivatives allowed'
        elif 'cc0' in license_str or 'public-domain' in license_str:
            return 'GREEN', 'CC0 / Public Domain'
        elif license_str:
            return 'YELLOW', f'Open access but unclear license: {license_str}'
        else:
            return 'YELLOW', 'Open access but no license found — assume restricted'
    
    except HTTPError as e:
        if e.code == 404:
            return 'RED', 'DOI not found in Unpaywall — treat as closed'
        return 'YELLOW', f'Unpaywall error {e.code} — manual check needed'
    except (URLError, Exception) as e:
        return 'YELLOW', f'Could not check ({str(e)[:50]}) — manual check needed'


def classify_doi(doi, use_api=True):
    """Classify a DOI, optionally using Unpaywall."""
    # Always-safe check first
    doi_lower = doi.lower()
    for safe in ALWAYS_SAFE:
        if doi_lower.startswith(safe):
            return 'GREEN', 'Known safe source (CC BY or public domain)'
    
    if use_api:
        status, reason = check_unpaywall(doi)
        # If API gives RED/GREEN, trust it; if YELLOW, supplement with heuristic
        if status in ('RED', 'GREEN'):
            return status, reason
        # Unpaywall said open but no clear license — fall through to heuristic
        hstatus, hreason = publisher_heuristic(doi)
        if hstatus == 'RED':
            return 'YELLOW', f'{reason} | Publisher heuristic: {hreason}'
        return 'YELLOW', f'{reason} | {hreason}'
    else:
        return publisher_heuristic(doi)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--fast', action='store_true', help='Skip Unpaywall API, use heuristics only')
    args = parser.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    use_api = not args.fast

    print("ReasonDx Source License Auditor")
    print("=" * 50)
    if use_api:
        print("Mode: Full (Unpaywall API + heuristics)")
    else:
        print("Mode: Fast (heuristics only, no API calls)")
    print()

    # Collect all DOIs
    case_dois  = extract_dois_from_cases()
    topic_dois = extract_dois_from_topics()
    all_dois   = set(list(case_dois.keys()) + list(topic_dois.keys()))

    print(f"Found {len(case_dois)} unique DOIs in emr-data/ cases")
    print(f"Found {len(topic_dois)} unique DOIs in topics/ HTML files")
    print(f"Total unique DOIs to audit: {len(all_dois)}")
    print()

    results = {}
    green = yellow = red = 0

    for i, doi in enumerate(sorted(all_dois), 1):
        sources = []
        if doi in case_dois:  sources.append(f"cases({len(case_dois[doi])})")
        if doi in topic_dois: sources.append(f"topics({len(topic_dois[doi])})")
        
        print(f"[{i:3d}/{len(all_dois)}] {doi[:50]:<50} ", end='', flush=True)
        
        status, reason = classify_doi(doi, use_api=use_api)
        
        icon = '✅' if status == 'GREEN' else '⚠️ ' if status == 'YELLOW' else '🔴'
        print(f"{icon} {status}  {reason[:60]}")
        
        results[doi] = {
            'status':     status,
            'reason':     reason,
            'in_cases':   case_dois.get(doi, []),
            'in_topics':  topic_dois.get(doi, []),
        }
        
        if status == 'GREEN':   green += 1
        elif status == 'YELLOW': yellow += 1
        else:                    red += 1
        
        if use_api:
            time.sleep(0.5)  # Be polite to Unpaywall

    # ── Write JSON report ───────────────────────────────────────────────────
    report = {
        'generated':  __import__('datetime').datetime.utcnow().isoformat() + 'Z',
        'mode':       'full' if use_api else 'fast',
        'summary':    {'total': len(all_dois), 'green': green, 'yellow': yellow, 'red': red},
        'dois':       results,
    }
    json_path = OUT_DIR / 'source-audit-report.json'
    json_path.write_text(json.dumps(report, indent=2))

    # ── Write text report ───────────────────────────────────────────────────
    lines = [
        "ReasonDx Source License Audit Report",
        "=" * 60,
        f"Generated: {report['generated']}",
        f"Mode: {report['mode']}",
        "",
        f"SUMMARY: {len(all_dois)} DOIs audited",
        f"  ✅ GREEN  (safe to link):      {green}",
        f"  ⚠️  YELLOW (suggest-only):      {yellow}",
        f"  🔴 RED    (remove link):        {red}",
        "",
        "─" * 60,
        "🔴 RED — Remove direct links immediately",
        "─" * 60,
    ]
    for doi, r in sorted(results.items(), key=lambda x: x[1]['status']):
        if r['status'] == 'RED':
            lines.append(f"\n  DOI: {doi}")
            lines.append(f"  Reason: {r['reason']}")
            if r['in_cases']:  lines.append(f"  Case files: {', '.join(r['in_cases'][:5])}")
            if r['in_topics']: lines.append(f"  Topic files ({len(r['in_topics'])}): {', '.join(r['in_topics'][:3])}...")

    lines += ["", "─" * 60, "⚠️  YELLOW — Convert to suggest-only (no hyperlink)", "─" * 60]
    for doi, r in sorted(results.items(), key=lambda x: x[1]['status']):
        if r['status'] == 'YELLOW':
            lines.append(f"\n  DOI: {doi}")
            lines.append(f"  Reason: {r['reason']}")
            if r['in_cases']:  lines.append(f"  Case files: {', '.join(r['in_cases'][:3])}")
            if r['in_topics']: lines.append(f"  Topic files ({len(r['in_topics'])}): {', '.join(r['in_topics'][:3])}...")

    lines += ["", "─" * 60, "✅ GREEN — Safe to keep as direct links", "─" * 60]
    for doi, r in sorted(results.items()):
        if r['status'] == 'GREEN':
            lines.append(f"  {doi}  ({r['reason']})")

    txt_path = OUT_DIR / 'source-audit-report.txt'
    txt_path.write_text('\n'.join(lines))

    # ── Write remediation list ──────────────────────────────────────────────
    rem_lines = ["# ReasonDx Source Remediation List", "# Run audit_sources.py first, then apply_remediation.py", ""]
    red_dois  = [d for d, r in results.items() if r['status'] == 'RED']
    yell_dois = [d for d, r in results.items() if r['status'] == 'YELLOW']
    rem_lines.append(f"RED_DOIS = {json.dumps(red_dois, indent=2)}")
    rem_lines.append(f"YELLOW_DOIS = {json.dumps(yell_dois, indent=2)}")
    (OUT_DIR / 'remediation-list.py').write_text('\n'.join(rem_lines))

    print()
    print("=" * 50)
    print(f"RESULTS: ✅ {green} safe  |  ⚠️  {yellow} check  |  🔴 {red} remove")
    print(f"Reports written to {OUT_DIR}/")
    print()
    print("Next step: run  python3 tools/apply_remediation.py")

if __name__ == '__main__':
    main()
