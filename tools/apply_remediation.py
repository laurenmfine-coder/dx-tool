#!/usr/bin/env python3
"""
ReasonDx Source Remediation Tool
==================================
Reads the audit results from tools/audit_sources.py and:

  RED DOIs   → removes hyperlink entirely, replaces with plain text
               "Suggested Reading: [title] ([journal], [year])"
  YELLOW DOIs → same treatment (conservative approach)
  GREEN DOIs  → left untouched

Also patches emr-data/*.js case files:
  - RED/YELLOW sources: removes "url" field, keeps "doi" and "title" for
    plain-text citation display (Source Guardian will handle display)

Usage:
  python3 tools/apply_remediation.py              (dry run — shows changes)
  python3 tools/apply_remediation.py --apply      (writes changes to files)
  python3 tools/apply_remediation.py --apply --backup  (backup first)
"""

import re, json, shutil, argparse
from pathlib import Path

REPO_DIR  = Path(__file__).parent.parent
AUDIT_JSON = REPO_DIR / 'tools' / 'audit-results' / 'source-audit-report.json'


def load_audit():
    if not AUDIT_JSON.exists():
        print("ERROR: Run audit_sources.py first to generate the audit report.")
        raise SystemExit(1)
    return json.loads(AUDIT_JSON.read_text())


def should_remove_link(doi, audit):
    r = audit['dois'].get(doi, {})
    return r.get('status') in ('RED', 'YELLOW')


def patch_html_file(path, audit, apply=False):
    """Convert restricted DOI links to plain-text suggested reading."""
    text = path.read_text(encoding='utf-8', errors='ignore')
    original = text
    changes = []

    # Pattern: <a href="https://doi.org/DOI">text</a>
    def replace_link(m):
        doi = m.group(1).strip('.,;')
        inner = m.group(2)
        if should_remove_link(doi, audit):
            changes.append(f"  Removed link: doi:{doi}")
            return f'<span class="rdx-suggested-reading" data-doi="{doi}">{inner}</span>'
        return m.group(0)

    text = re.sub(
        r'<a\s+href="https?://doi\.org/([^"]+)"[^>]*>(.*?)</a>',
        replace_link,
        text,
        flags=re.DOTALL
    )

    if text != original:
        if apply:
            path.write_text(text, encoding='utf-8')
        return changes
    return []


def patch_js_case_file(path, audit, apply=False):
    """Remove url fields from restricted sources in case JS files."""
    text = path.read_text(encoding='utf-8', errors='ignore')
    original = text
    changes = []

    # Find reference objects with doi + url and remove url if doi is restricted
    def replace_ref_url(m):
        block = m.group(0)
        doi_match = re.search(r'"doi":\s*"(10\.[^"]+)"', block)
        if not doi_match:
            return block
        doi = doi_match.group(1).strip('.,;')
        if should_remove_link(doi, audit):
            # Remove the url field from this reference object
            cleaned = re.sub(r',?\s*"url":\s*"[^"]*"', '', block)
            cleaned = re.sub(r'"url":\s*"[^"]*"\s*,?\s*', '', cleaned)
            if cleaned != block:
                changes.append(f"  Removed url for doi:{doi}")
            return cleaned
        return block

    # Match reference objects (simplified - looks for {..."doi":...} blocks)
    text = re.sub(
        r'\{[^{}]*"doi"[^{}]*\}',
        replace_ref_url,
        text,
        flags=re.DOTALL
    )

    if text != original:
        if apply:
            path.write_text(text, encoding='utf-8')
        return changes
    return []


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--apply',  action='store_true', help='Apply changes (default: dry run)')
    parser.add_argument('--backup', action='store_true', help='Backup files before editing')
    args = parser.parse_args()

    audit = load_audit()
    summary = audit['summary']

    print("ReasonDx Source Remediation Tool")
    print("=" * 50)
    print(f"Audit: {summary['red']} RED  |  {summary['yellow']} YELLOW  |  {summary['green']} GREEN")
    print(f"Mode: {'APPLYING changes' if args.apply else 'DRY RUN (use --apply to write)'}")
    print()

    if args.apply and args.backup:
        backup_dir = REPO_DIR / 'tools' / 'audit-results' / 'backup'
        backup_dir.mkdir(parents=True, exist_ok=True)
        for f in list(Path(REPO_DIR / 'topics').glob('*.html')) + \
                 list(Path(REPO_DIR / 'emr-data').glob('*.js')):
            shutil.copy2(f, backup_dir / f.name)
        print(f"Backed up {len(list(backup_dir.iterdir()))} files to {backup_dir}")
        print()

    total_html = total_js = 0

    # Patch topic HTML files
    print("── Patching topics/*.html ──")
    for f in sorted(Path(REPO_DIR / 'topics').glob('*.html')):
        changes = patch_html_file(f, audit, apply=args.apply)
        if changes:
            total_html += 1
            print(f"\n  {f.name}:")
            for c in changes[:5]:
                print(c)
            if len(changes) > 5:
                print(f"  ... and {len(changes)-5} more")

    print(f"\n  {total_html} HTML files {'patched' if args.apply else 'would be patched'}")

    # Patch emr-data case JS files
    print("\n── Patching emr-data/*.js ──")
    for f in sorted(Path(REPO_DIR / 'emr-data').glob('*.js')):
        changes = patch_js_case_file(f, audit, apply=args.apply)
        if changes:
            total_js += 1
            print(f"\n  {f.name}:")
            for c in changes[:3]:
                print(c)

    print(f"\n  {total_js} JS files {'patched' if args.apply else 'would be patched'}")

    if not args.apply:
        print("\n── DRY RUN complete. Run with --apply to write changes. ──")
    else:
        print("\n── Remediation applied. ──")
        print("Next: commit changes and deploy Source Guardian (js/rdx-source-guardian.js)")

if __name__ == '__main__':
    main()
