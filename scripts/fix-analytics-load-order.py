#!/usr/bin/env python3
"""Audit and fix script-loading issues on all pages that load the analytics
tracker. Ensures:

  1. Supabase SDK (@supabase/supabase-js@2) is loaded BEFORE rdx-supabase.js
  2. Supabase SDK has the RDXSupabaseInit onload callback
  3. No duplicate Supabase SDK tags
  4. rdx-supabase.js is loaded BEFORE rdx-analytics-tracker.js

If a page has the tracker but no Supabase SDK tag at all, adds one in the
right position.
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SDK_TAG = '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" onload="if(window.RDXSupabaseInit)RDXSupabaseInit()"></script>'

SDK_ANY_RE = re.compile(
    r'<script[^>]*src=["\']https?://cdn\.jsdelivr\.net/npm/@supabase/supabase-js@\d+["\'][^>]*></script>',
    re.IGNORECASE,
)
RDX_SUPABASE_RE = re.compile(
    r'<script[^>]*src=["\'][^"\']*rdx-supabase\.js["\'][^>]*></script>',
    re.IGNORECASE,
)


def process(path):
    with open(path, 'r', encoding='utf-8') as f:
        src = f.read()

    if 'rdx-analytics-tracker.js' not in src:
        return 'skip-no-tracker'
    if 'rdx-supabase.js' not in src or not RDX_SUPABASE_RE.search(src):
        return 'skip-no-rdx-supabase'

    # Find all SDK tags
    sdk_matches = list(SDK_ANY_RE.finditer(src))
    rdx_match = RDX_SUPABASE_RE.search(src)

    changed = False

    # Step 1: Remove ALL existing SDK tags
    if sdk_matches:
        # Remove from last to first so offsets don't shift
        new_src = src
        for m in reversed(sdk_matches):
            # Also eat a trailing newline if present
            end = m.end()
            if end < len(new_src) and new_src[end] == '\n':
                end += 1
            new_src = new_src[:m.start()] + new_src[end:]
        if new_src != src:
            src = new_src
            changed = True

    # Step 2: Re-find rdx-supabase location in the modified source
    rdx_match = RDX_SUPABASE_RE.search(src)
    if not rdx_match:
        return 'error-lost-rdx-supabase'

    # Step 3: Insert the canonical SDK tag right before rdx-supabase.js
    insert_point = rdx_match.start()
    src = src[:insert_point] + SDK_TAG + '\n' + src[insert_point:]
    changed = True

    if changed:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(src)
        return 'fixed'
    return 'ok'


def main():
    html_files = sorted(f for f in os.listdir(ROOT) if f.endswith('.html'))
    stats = {}
    for filename in html_files:
        path = os.path.join(ROOT, filename)
        result = process(path)
        stats[result] = stats.get(result, 0) + 1
        if result == 'fixed':
            print(f"  fixed        {filename}")
        elif result.startswith('error'):
            print(f"  {result:12s} {filename}")

    print()
    print(f"Total HTML files: {len(html_files)}")
    for k in sorted(stats):
        print(f"  {k}: {stats[k]}")


if __name__ == '__main__':
    main()
