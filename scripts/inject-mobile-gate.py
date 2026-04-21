#!/usr/bin/env python3
"""Inject <script src="/js/rdx-mobile-gate.js"> into every top-level HTML page.

Placement: immediately after the first <script src="/js/rdx-config.js"> tag,
so RDX_CONFIG (EMAIL_WORKER URL) is available when the gate loads.
If rdx-config.js is not found on a page, inject right after <head>.

Idempotent: skips pages that already include rdx-mobile-gate.js.
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TAG = '<script src="/js/rdx-mobile-gate.js"></script>'
CONFIG_RE = re.compile(r'(<script\s+[^>]*src=["\']/js/rdx-config\.js["\'][^>]*>\s*</script>)', re.IGNORECASE)
HEAD_RE = re.compile(r'(<head[^>]*>)', re.IGNORECASE)

def process(path):
    with open(path, 'r', encoding='utf-8') as f:
        src = f.read()

    if 'rdx-mobile-gate.js' in src:
        return 'skip-already'

    m = CONFIG_RE.search(src)
    if m:
        new_src = src[:m.end()] + '\n' + TAG + src[m.end():]
        location = 'after-config'
    else:
        m = HEAD_RE.search(src)
        if not m:
            return 'skip-no-head'
        new_src = src[:m.end()] + '\n' + TAG + src[m.end():]
        location = 'after-head'

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_src)
    return location


def main():
    html_files = sorted(f for f in os.listdir(ROOT) if f.endswith('.html'))
    stats = {'after-config': 0, 'after-head': 0, 'skip-already': 0, 'skip-no-head': 0}
    for f in html_files:
        path = os.path.join(ROOT, f)
        result = process(path)
        stats[result] = stats.get(result, 0) + 1
        print(f"  {result:15s}  {f}")
    print()
    print(f"Total HTML files processed: {len(html_files)}")
    for k, v in stats.items():
        print(f"  {k}: {v}")


if __name__ == '__main__':
    main()
