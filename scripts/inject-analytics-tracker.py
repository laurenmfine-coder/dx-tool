#!/usr/bin/env python3
"""Inject rdx-supabase.js and rdx-analytics-tracker.js into all case-bearing
HTML pages that are missing them. This unblocks analytics for the main user
flows: virtual-emr, simulation-engine, browse, etc.

Order matters: rdx-config.js MUST load before rdx-supabase.js, which MUST
load before rdx-analytics-tracker.js. We insert them right after the
existing rdx-config.js tag so the dependency chain works.
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SUPABASE_TAG = '<script src="/js/rdx-supabase.js"></script>'
TRACKER_TAG = '<script src="/js/rdx-analytics-tracker.js"></script>'

# Pages that handle cases and MUST have tracking
CRITICAL_PAGES = [
    'simulation-engine.html',
    'virtual-emr.html',
    'browse.html',
    'welcome.html',
    'casedx.html',
    'choose-mode.html',
    'start.html',
    'case-browser.html',
    'demo.html',
    'platform.html',
    'platform-overview.html',
    'ed-3d.html',
    'hospital-3d.html',
    'emr-skills.html',
    'clinic-board.html',
    'ed-board-v2.html',
    'ed-trackboard.html',
    'night-float.html',
    'procedure-lab.html',
    'cruise-demo.html',
    'ai-trainer-anaphylaxis-food.html',
    'counseling-scenarios.html',
    'ecg-trainer.html',
    'study-protocol.html',
    'rad-study.html',
    'board-exam-prep.html',
    'milestone-tracker.html',
    'baseline-assessment.html',
]

CONFIG_RE = re.compile(
    r'(<script\s+[^>]*src=["\']/js/rdx-config\.js["\'][^>]*>\s*</script>)',
    re.IGNORECASE
)


def process(filename):
    path = os.path.join(ROOT, filename)
    if not os.path.exists(path):
        return 'missing-file'

    with open(path, 'r', encoding='utf-8') as f:
        src = f.read()

    has_supabase = 'rdx-supabase.js' in src
    has_tracker = 'rdx-analytics-tracker.js' in src

    if has_supabase and has_tracker:
        return 'skip-already-tracked'

    # Find the rdx-config.js tag and insert the tracking scripts right after it
    m = CONFIG_RE.search(src)
    if not m:
        # No config tag — we shouldn't inject without config being present
        return 'skip-no-config'

    insert_at = m.end()
    insertion = ''
    if not has_supabase:
        insertion += '\n' + SUPABASE_TAG
    if not has_tracker:
        insertion += '\n' + TRACKER_TAG

    new_src = src[:insert_at] + insertion + src[insert_at:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_src)

    added = []
    if not has_supabase: added.append('supabase')
    if not has_tracker: added.append('tracker')
    return 'added:' + '+'.join(added)


def main():
    stats = {}
    for filename in CRITICAL_PAGES:
        result = process(filename)
        stats[result] = stats.get(result, 0) + 1
        if not result.startswith('skip') and result != 'missing-file':
            print(f"  {result:20s}  {filename}")

    print()
    print(f"Total pages processed: {len(CRITICAL_PAGES)}")
    for k, v in sorted(stats.items()):
        print(f"  {k}: {v}")


if __name__ == '__main__':
    main()
