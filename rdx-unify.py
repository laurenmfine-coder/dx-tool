#!/usr/bin/env python3
"""
rdx-unify.py — Apply unified ReasonDx design system to all HTML files.
- Injects rdx-theme.css link
- Injects rdx-nav.js script
- Converts dark inline styles to use CSS variables
- Removes redundant old nav scripts
"""
import os, re, sys, glob

ROOT = '/home/claude/reasondx'
COUNTER = {'css': 0, 'nav': 0, 'dark_fix': 0, 'total': 0, 'errors': 0}

def get_rel_path(filepath):
    """Get relative path prefix to root for CSS/JS links"""
    rel = os.path.relpath(filepath, ROOT)
    parts = os.path.dirname(rel).split(os.sep)
    parts = [p for p in parts if p and p != '.']
    if len(parts) == 0:
        return './'
    return '../' * len(parts)

def process_file(filepath):
    """Process a single HTML file"""
    try:
        with open(filepath, 'r', errors='replace') as f:
            content = f.read()
    except:
        COUNTER['errors'] += 1
        return

    original = content
    rel = get_rel_path(filepath)

    # ===== 1. INJECT rdx-theme.css =====
    css_link = f'<link rel="stylesheet" href="{rel}rdx-theme.css">'
    if 'rdx-theme.css' not in content:
        # Insert after last <link> or <meta> in <head>, or after <head>
        if '</head>' in content:
            content = content.replace('</head>', css_link + '\n</head>', 1)
            COUNTER['css'] += 1
        elif '<head>' in content:
            content = content.replace('<head>', '<head>\n' + css_link, 1)
            COUNTER['css'] += 1

    # ===== 2. INJECT rdx-nav.js =====
    nav_script = f'<script src="{rel}rdx-nav.js" defer></script>'
    if 'rdx-nav.js' not in content:
        if '</body>' in content:
            content = content.replace('</body>', nav_script + '\n</body>', 1)
            COUNTER['nav'] += 1
        elif '</html>' in content:
            content = content.replace('</html>', nav_script + '\n</html>', 1)
            COUNTER['nav'] += 1

    # ===== 3. CONVERT DARK THEME HARDCODES =====
    # Replace hardcoded dark background colors with CSS variable references
    dark_patterns = [
        # body background
        (r'(body\s*\{[^}]*?)background\s*:\s*#0[fF]172[aA]\b', r'\1background:var(--rdx-bg)'),
        (r'(body\s*\{[^}]*?)background\s*:\s*var\(--bg\)', r'\1background:var(--rdx-bg)'),
        # body color
        (r'(body\s*\{[^}]*?)color\s*:\s*#[fF]1[fF]5[fF]9\b', r'\1color:var(--rdx-text)'),
        (r'(body\s*\{[^}]*?)color\s*:\s*var\(--text\)', r'\1color:var(--rdx-text)'),
        # :root dark vars — override --bg to light
        (r'--bg\s*:\s*#0[fF]172[aA]\b', '--bg:var(--rdx-bg)'),
        (r'--card\s*:\s*#1[eE]293[bB]\b', '--card:var(--rdx-bg-card)'),
        (r'--border\s*:\s*#334155\b', '--border:var(--rdx-border)'),
        (r'--text\s*:\s*#[fF]1[fF]5[fF]9\b', '--text:var(--rdx-text)'),
        (r'--muted\s*:\s*#94[aA]3[bB]8\b', '--muted:var(--rdx-text-muted)'),
    ]
    for pattern, replacement in dark_patterns:
        new_content = re.sub(pattern, replacement, content)
        if new_content != content:
            COUNTER['dark_fix'] += 1
            content = new_content

    # ===== 4. FIX HEADER GRADIENTS (make them teal-based) =====
    # Convert red/purple/blue gradient headers to teal gradient
    header_patterns = [
        # Red gradients (e.g. #7F1D1D → #EF4444)
        (r'(\.header\s*\{[^}]*?)background\s*:\s*linear-gradient\(135deg\s*,\s*#7[fF]1[dD]1[dD]\s*,\s*#[eE][fF]4444\)',
         r'\1background:linear-gradient(135deg,#0f766e,#0d9488)'),
        # Purple gradients
        (r'(\.header\s*\{[^}]*?)background\s*:\s*linear-gradient\(135deg\s*,\s*#4[cC]1[dD]95\s*,\s*#8[bB]5[cC][fF]6\)',
         r'\1background:linear-gradient(135deg,#0f766e,#0d9488)'),
        # Blue gradients
        (r'(\.header\s*\{[^}]*?)background\s*:\s*linear-gradient\(135deg\s*,\s*#1[eE]3[aA]5[fF]\s*,\s*#3[bB]82[fF]6\)',
         r'\1background:linear-gradient(135deg,#0f766e,#0d9488)'),
        # Generic accent color overrides
        (r'--accent\s*:\s*#[eE][fF]4444\b', '--accent:var(--rdx-teal)'),
        (r'--accent\s*:\s*#3[bB]82[fF]6\b', '--accent:var(--rdx-teal)'),
        (r'--accent\s*:\s*#8[bB]5[cC][fF]6\b', '--accent:var(--rdx-teal)'),
    ]
    for pattern, replacement in header_patterns:
        content = re.sub(pattern, replacement, content)

    # ===== 5. ENSURE FONT FAMILY IS CONSISTENT =====
    # Don't override if already using DM Sans; just add DM Sans import if Inter-only
    if "'Inter'" in content and "'DM Sans'" not in content:
        content = content.replace("'Inter'", "'DM Sans','Inter'")

    # ===== WRITE BACK =====
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        COUNTER['total'] += 1

def main():
    # Collect all HTML files
    patterns = [
        os.path.join(ROOT, 'topics', '*.html'),
        os.path.join(ROOT, 'modules', '*.html'),
        os.path.join(ROOT, 'cases', '*.html'),
        os.path.join(ROOT, 'tools', '*.html'),
        os.path.join(ROOT, 'ecg', '*.html'),
        os.path.join(ROOT, '*.html'),
    ]
    
    all_files = []
    for p in patterns:
        all_files.extend(glob.glob(p))
    
    # Deduplicate
    all_files = sorted(set(all_files))
    
    # Skip index.html (landing page already has correct design)
    skip = {os.path.join(ROOT, 'index-backup.html')}
    all_files = [f for f in all_files if f not in skip]
    
    folder = sys.argv[1] if len(sys.argv) > 1 else 'all'
    
    if folder != 'all':
        all_files = [f for f in all_files if f'/{folder}/' in f]
    
    print(f"Processing {len(all_files)} HTML files ({folder})...")
    
    for i, fpath in enumerate(all_files):
        process_file(fpath)
        if (i + 1) % 100 == 0:
            print(f"  ...{i+1}/{len(all_files)}")
    
    print(f"\nDone! Results:")
    print(f"  CSS injected:     {COUNTER['css']}")
    print(f"  Nav injected:     {COUNTER['nav']}")
    print(f"  Dark fixes:       {COUNTER['dark_fix']}")
    print(f"  Files modified:   {COUNTER['total']}")
    print(f"  Errors:           {COUNTER['errors']}")

if __name__ == '__main__':
    main()
