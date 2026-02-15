#!/usr/bin/env python3
"""
rdx-light-convert.py — Convert hardcoded dark theme styles to CSS variables
so the external rdx-theme.css controls the look (light default, dark toggle).
"""
import os, re, glob, sys

ROOT = '/home/claude/reasondx'
STATS = {'files': 0, 'changes': 0}

# Patterns: (regex, replacement)
# These replace hardcoded dark-mode values in inline <style> blocks
REPLACEMENTS = [
    # Root variable overrides — dark bg/card/text to CSS variable
    (r'--bg\s*:\s*#0[fF]172[aA]\b', '--bg:var(--rdx-bg)'),
    (r'--bg\s*:\s*#0f172a\b', '--bg:var(--rdx-bg)'),
    (r'--card\s*:\s*#1[eE]293[bB]\b', '--card:var(--rdx-bg-card)'),
    (r'--card\s*:\s*#1e293b\b', '--card:var(--rdx-bg-card)'),
    (r'--border\s*:\s*#334155\b', '--border:var(--rdx-border)'),
    (r'--text\s*:\s*#[fF]1[fF]5[fF]9\b', '--text:var(--rdx-text)'),
    (r'--text\s*:\s*#f1f5f9\b', '--text:var(--rdx-text)'),
    (r'--muted\s*:\s*#94[aA]3[bB]8\b', '--muted:var(--rdx-text-muted)'),
    (r'--muted\s*:\s*#94a3b8\b', '--muted:var(--rdx-text-muted)'),
    (r'--accent\s*:\s*#[eE][fF]4444\b', '--accent:var(--rdx-teal)'),
    (r'--accent\s*:\s*#EF4444\b', '--accent:var(--rdx-teal)'),
    (r'--accent\s*:\s*#3[bB]82[fF]6\b', '--accent:var(--rdx-teal)'),
    (r'--accent\s*:\s*#3B82F6\b', '--accent:var(--rdx-teal)'),
    (r'--accent\s*:\s*#8[bB]5[cC][fF]6\b', '--accent:var(--rdx-teal)'),
    (r'--success\s*:\s*#10[bB]981\b', '--success:var(--rdx-success)'),
    (r'--danger\s*:\s*#[dD][cC]2626\b', '--danger:var(--rdx-danger)'),
    (r'--info\s*:\s*#8[bB]5[cC][fF]6\b', '--info:var(--rdx-info)'),
    (r'--info\s*:\s*#7[cC]3[aA][eE][dD]\b', '--info:var(--rdx-info)'),

    # Body direct styles
    (r'(body\s*\{[^}]*?)background\s*:\s*var\(--bg\)', r'\1background:var(--rdx-bg)'),
    (r'(body\s*\{[^}]*?)color\s*:\s*var\(--text\)', r'\1color:var(--rdx-text)'),

    # Header gradients → teal
    (r'background\s*:\s*linear-gradient\(135deg\s*,\s*#7[fF]1[dD]1[dD]\s*,\s*#[eE][fF]4444\s*\)',
     'background:linear-gradient(135deg,#0f766e,#0d9488)'),
    (r'background\s*:\s*linear-gradient\(135deg\s*,\s*#4[cC]1[dD]95\s*,\s*#8[bB]5[cC][fF]6\s*\)',
     'background:linear-gradient(135deg,#0f766e,#0d9488)'),
    (r'background\s*:\s*linear-gradient\(135deg\s*,\s*#1[eE]3[aA]5[fF]\s*,\s*#3[bB]82[fF]6\s*\)',
     'background:linear-gradient(135deg,#0f766e,#0d9488)'),
    (r'background\s*:\s*linear-gradient\(135deg\s*,\s*#991[bB]1[bB]\s*,\s*#[dD][cC]2626\s*\)',
     'background:linear-gradient(135deg,#0f766e,#0d9488)'),
    # Cases often have dramatic gradients  
    (r'background\s*:\s*linear-gradient\(135deg\s*,\s*#[dD][cC]2626[^)]*\)',
     'background:linear-gradient(135deg,#0f766e,#0d9488)'),
    (r'background\s*:\s*linear-gradient\(135deg\s*,\s*#7[cC]3[aA][eE][dD][^)]*\)',
     'background:linear-gradient(135deg,#0f766e,#14b8a6)'),

    # Teaching box colors
    (r'background\s*:\s*rgba\(139\s*,\s*92\s*,\s*246\s*,\s*\.?15\)',
     'background:var(--rdx-info-bg)'),
    (r'background\s*:\s*rgba\(139\s*,\s*92\s*,\s*246\s*,\s*0?\.15\)',
     'background:var(--rdx-info-bg)'),
    (r'border\s*:\s*1px solid rgba\(139\s*,\s*92\s*,\s*246\s*,\s*\.?3\)',
     'border:1px solid var(--rdx-info)'),
    (r'border\s*:\s*1px solid rgba\(139\s*,\s*92\s*,\s*246\s*,\s*0?\.3\)',
     'border:1px solid var(--rdx-info)'),

    # Narrative box - keep teal but use variables
    (r'background\s*:\s*linear-gradient\(135deg\s*,\s*rgba\(239\s*,\s*68\s*,\s*68[^)]*\)\s*,\s*rgba\(249\s*,\s*115\s*,\s*22[^)]*\)\s*\)',
     'background:var(--rdx-teal-50)'),
    (r'background\s*:\s*linear-gradient\(135deg\s*,\s*rgba\(59\s*,\s*130\s*,\s*246[^)]*\)\s*,\s*rgba\(139\s*,\s*92\s*,\s*246[^)]*\)\s*\)',
     'background:var(--rdx-teal-50)'),
    (r'border-left\s*:\s*4px solid var\(--accent\)', 'border-left:4px solid var(--rdx-teal)'),

    # Highlight spans
    (r'background\s*:\s*rgba\(239\s*,\s*68\s*,\s*68\s*,\s*\.?3\)',
     'background:var(--rdx-teal-light)'),
    (r'background\s*:\s*rgba\(59\s*,\s*130\s*,\s*246\s*,\s*\.?3\)',
     'background:var(--rdx-teal-light)'),

    # Success/danger feedback
    (r'background\s*:\s*rgba\(16\s*,\s*185\s*,\s*129\s*,\s*\.?15\)',
     'background:var(--rdx-success-bg)'),
    (r'background\s*:\s*rgba\(220\s*,\s*38\s*,\s*38\s*,\s*\.?15\)',
     'background:var(--rdx-danger-bg)'),

    # Card dark backgrounds  
    (r'background\s*:\s*rgba\(0\s*,\s*0\s*,\s*0\s*,\s*\.?2\)',
     'background:var(--rdx-bg-hover)'),
    (r'background\s*:\s*rgba\(0\s*,\s*0\s*,\s*0\s*,\s*0?\.2\)',
     'background:var(--rdx-bg-hover)'),

    # White-on-dark text → use variable
    (r'background\s*:\s*rgba\(255\s*,\s*255\s*,\s*255\s*,\s*\.?1\)',
     'background:var(--rdx-bg-hover)'),

    # Font family consistency
    # Only add DM Sans if file uses Inter alone
]

def process_file(filepath):
    try:
        with open(filepath, 'r', errors='replace') as f:
            content = f.read()
    except:
        return False

    original = content
    for pattern, replacement in REPLACEMENTS:
        content = re.sub(pattern, replacement, content)

    # Add DM Sans to font stack if only Inter
    if "'Inter'" in content and "'DM Sans'" not in content:
        content = content.replace("font-family:'Inter'", "font-family:'DM Sans','Inter'")
        content = content.replace("font-family: 'Inter'", "font-family: 'DM Sans', 'Inter'")

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        STATS['files'] += 1
        STATS['changes'] += sum(1 for p, _ in REPLACEMENTS if re.search(p, original))
        return True
    return False

def main():
    folder = sys.argv[1] if len(sys.argv) > 1 else 'all'
    
    patterns = []
    if folder == 'all' or folder == 'topics':
        patterns.append(os.path.join(ROOT, 'topics', '*.html'))
    if folder == 'all' or folder == 'modules':
        patterns.append(os.path.join(ROOT, 'modules', '*.html'))
    if folder == 'all' or folder == 'cases':
        patterns.append(os.path.join(ROOT, 'cases', '*.html'))
    if folder == 'all' or folder == 'tools':
        patterns.append(os.path.join(ROOT, 'tools', '*.html'))
    if folder == 'all' or folder == 'root':
        patterns.append(os.path.join(ROOT, '*.html'))

    files = []
    for p in patterns:
        files.extend(glob.glob(p))
    files = sorted(set(files))
    # Don't touch index-backup
    files = [f for f in files if 'backup' not in f]

    print(f"Processing {len(files)} files ({folder})...")
    for i, f in enumerate(files):
        process_file(f)
        if (i+1) % 100 == 0:
            print(f"  ...{i+1}/{len(files)}")

    print(f"\nDone: {STATS['files']} files modified")

if __name__ == '__main__':
    main()
