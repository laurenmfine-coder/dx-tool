#!/usr/bin/env python3
"""Ensure rdx-config.js is loaded on every HTML page that uses mobile gate
or consent. Many pages have the gate/consent scripts but no config, which
breaks Supabase-dependent features silently.

This script inserts <script src="/js/rdx-config.js"></script> BEFORE the
first mobile-gate or data-consent tag on pages that don't already load it.
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONFIG_TAG = '<script src="/js/rdx-config.js"></script>'

# Find the first gate OR consent tag and insert config before it
TRIGGER_RE = re.compile(
    r'(<script\s+[^>]*src=["\']/js/rdx-(mobile-gate|data-consent)\.js["\'][^>]*>\s*</script>)',
    re.IGNORECASE
)
HEAD_RE = re.compile(r'(<head[^>]*>)', re.IGNORECASE)


def process(path):
    with open(path, 'r', encoding='utf-8') as f:
        src = f.read()

    if 'rdx-config.js' in src:
        return 'skip-has-config'

    # Find the first trigger and insert config just before it
    m = TRIGGER_RE.search(src)
    if m:
        new_src = src[:m.start()] + CONFIG_TAG + '\n' + src[m.start():]
        location = 'before-trigger'
    else:
        # Page doesn't use gate/consent either; still insert after <head>
        # so config is available for future additions
        m = HEAD_RE.search(src)
        if not m:
            return 'skip-no-head'
        new_src = src[:m.end()] + '\n' + CONFIG_TAG + src[m.end():]
        location = 'after-head'

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_src)
    return location


def main():
    html_files = sorted(f for f in os.listdir(ROOT) if f.endswith('.html'))
    stats = {}
    for f in html_files:
        path = os.path.join(ROOT, f)
        result = process(path)
        stats[result] = stats.get(result, 0) + 1
        if not result.startswith('skip'):
            print(f"  {result:18s}  {f}")
    print()
    print(f"Total HTML files processed: {len(html_files)}")
    for k, v in stats.items():
        print(f"  {k}: {v}")


if __name__ == '__main__':
    main()
