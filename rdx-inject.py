#!/usr/bin/env python3
"""
rdx-inject.py — Inject rdx-theme.css and rdx-nav.js into all HTML pages.
Also removes conflicting old dark-theme CSS variables.
"""
import os, re, sys, glob

def get_relative_root(filepath):
    """Calculate relative path to project root from a file's location"""
    rel = os.path.relpath(filepath, '/home/claude/reasondx')
    depth = rel.count('/')
    if depth == 0:
        return './'
    return '../' * depth

def inject_file(filepath):
    """Inject theme CSS and nav JS into a single HTML file. Returns True if modified."""
    try:
        with open(filepath, 'r', errors='replace') as f:
            content = f.read()
    except:
        return False
    
    if not content.strip():
        return False
    
    original = content
    root = get_relative_root(filepath)
    
    css_href = root + 'css/rdx-theme.css'
    js_src = root + 'js/rdx-nav.js'
    
    # === 1. Inject CSS link in <head> if missing ===
    if 'rdx-theme.css' not in content:
        # Insert after last <link> or <meta> in head, or after <head>
        if '</head>' in content:
            content = content.replace('</head>', 
                f'<link rel="stylesheet" href="{css_href}">\n</head>', 1)
        elif '<head>' in content:
            content = content.replace('<head>', 
                f'<head>\n<link rel="stylesheet" href="{css_href}">', 1)
    
    # === 2. Inject nav JS before </body> if missing ===
    if 'rdx-nav.js' not in content:
        if '</body>' in content:
            content = content.replace('</body>', 
                f'<script src="{js_src}"></script>\n</body>', 1)
        elif '</html>' in content:
            content = content.replace('</html>', 
                f'<script src="{js_src}"></script>\n</html>', 1)
    
    # === 3. Force light theme default: override dark vars in inline styles ===
    # Replace --bg:#0F172A (dark) with transparent (let theme CSS handle it)
    # We do this by adding data-theme="light" to html tag
    if 'data-theme=' not in content:
        if '<html' in content:
            # Add data-theme to html tag
            content = re.sub(r'<html(\s)', r'<html data-theme="light"\1', content, count=1)
            if '<html>' in content:
                content = content.replace('<html>', '<html data-theme="light">', 1)
    
    # === 4. Remove old dx-universal-nav.js references (our new rdx-nav.js replaces it) ===
    # Keep the file but don't double-load nav
    content = re.sub(r'<script\s+src="[^"]*dx-universal-nav\.js"[^>]*></script>\s*', '', content)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

def process_directory(dirpath, label=""):
    """Process all HTML files in a directory"""
    files = sorted(glob.glob(os.path.join(dirpath, '*.html')))
    modified = 0
    for f in files:
        if inject_file(f):
            modified += 1
    print(f"  {label}: {modified}/{len(files)} files modified")
    return modified

if __name__ == '__main__':
    base = '/home/claude/reasondx'
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    
    total = 0
    if target in ('all', 'topics'):
        total += process_directory(os.path.join(base, 'topics'), 'Topics')
    if target in ('all', 'modules'):
        total += process_directory(os.path.join(base, 'modules'), 'Modules')
    if target in ('all', 'cases'):
        total += process_directory(os.path.join(base, 'cases'), 'Cases')
    if target in ('all', 'root'):
        # Root level HTML files
        files = sorted(glob.glob(os.path.join(base, '*.html')))
        mod = 0
        for f in files:
            if inject_file(f):
                mod += 1
        print(f"  Root: {mod}/{len(files)} files modified")
        total += mod
    if target in ('all', 'tools'):
        total += process_directory(os.path.join(base, 'tools'), 'Tools')
    if target in ('all', 'ecg'):
        total += process_directory(os.path.join(base, 'ecg'), 'ECG')
    if target in ('all', 'auth'):
        total += process_directory(os.path.join(base, 'auth'), 'Auth')
    if target in ('all', 'coachdx'):
        for d in ['CoachDx']:
            p = os.path.join(base, d)
            if os.path.isdir(p):
                total += process_directory(p, d)
    
    print(f"\nTotal files modified: {total}")
