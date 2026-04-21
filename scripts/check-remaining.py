#!/usr/bin/env python3
"""Check which legacy cases still need their coachPrompts.final debrief enrichment."""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

crtSrc = open(os.path.join(EMR_DIR, 'crt-index.js')).read()
CRT = json.loads(re.search(r'window\.CRT_INDEX\s*=\s*(\{[\s\S]+\});', crtSrc).group(1))

needs = []
for f in sorted(os.listdir(EMR_DIR)):
    if not f.endswith('.js') or f in ('crt-index.js', 'case-tokens.js'):
        continue
    slug = f[:-3]
    if slug not in CRT:
        continue
    src = open(os.path.join(EMR_DIR, f)).read()
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m:
        continue
    try:
        d = json.loads(m.group(1))
    except Exception:
        continue
    coach = d.get('guided', {}).get('coachPrompts', {}).get('final', '')
    if len(coach) < 300:
        needs.append(slug)

print(f'Remaining: {len(needs)}')
for s in needs[:30]:
    print(f'  {s}')
