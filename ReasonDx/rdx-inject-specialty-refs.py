#!/usr/bin/env python3
"""
rdx-inject-specialty-refs.py — Add specialty-specific guideline references
to topics, modules, cases, and deep dives ALONGSIDE existing StatPearls refs.
"""
import os, re, glob, json, html, sys

# Import the specialty ref database
import importlib.util
spec = importlib.util.spec_from_file_location("srefs", "/home/claude/reasondx/rdx-specialty-refs.py")
srefs = importlib.util.module_from_spec(spec)
spec.loader.exec_module(srefs)

ROOT = '/home/claude/reasondx'
STATS = {'topics': 0, 'modules': 0, 'cases': 0, 'deep_dives': 0}

def get_title(content):
    """Extract title from HTML"""
    m = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
    if m:
        return html.unescape(m.group(1).strip())
    m = re.search(r'<title>([^|—<]+)', content)
    if m:
        return html.unescape(m.group(1).strip())
    return ''

def build_ref_html(refs):
    """Build HTML list items for references"""
    items = ''
    for ref in refs:
        items += f'<li><strong>{ref["title"]}</strong>. <em>{ref["source"]}</em>. <a href="{ref["url"]}" target="_blank" rel="noopener">{ref["url"]}</a></li>\n'
    return items

def has_ref_url(content, url):
    """Check if a specific reference URL already exists in content"""
    # Normalize URL for comparison
    return url.replace('https://', '').replace('http://', '') in content.replace('https://', '').replace('http://', '')

def process_topics():
    """Add specialty refs to topic pages"""
    count = 0
    for filepath in sorted(glob.glob(os.path.join(ROOT, 'topics', '*.html'))):
        with open(filepath, 'r', errors='replace') as f:
            content = f.read()
        
        title = get_title(content)
        if not title:
            continue
        
        specialty_refs = srefs.find_specialty_refs(title)
        if not specialty_refs:
            continue
        
        # Filter out refs that already exist
        new_refs = [r for r in specialty_refs if not has_ref_url(content, r['url'])]
        if not new_refs:
            continue
        
        new_items = build_ref_html(new_refs)
        
        # Find existing reference list and append
        if '</ol>' in content and 'rdx-ref-list' in content:
            content = content.replace('</ol>\n</div>', new_items + '</ol>\n</div>', 1)
        
        with open(filepath, 'w') as f:
            f.write(content)
        count += 1
    
    STATS['topics'] = count
    print(f"Topics: {count} files enriched")

def process_modules():
    """Add specialty refs to module pages"""
    count = 0
    for filepath in sorted(glob.glob(os.path.join(ROOT, 'modules', '*.html'))):
        with open(filepath, 'r', errors='replace') as f:
            content = f.read()
        
        title = get_title(content)
        if not title:
            continue
        
        specialty_refs = srefs.find_specialty_refs(title)
        if not specialty_refs:
            continue
        
        new_refs = [r for r in specialty_refs if not has_ref_url(content, r['url'])]
        if not new_refs:
            continue
        
        # Modules have various reference section formats
        # Look for existing reference sections
        ref_patterns = [
            (r'(class="cross-links"[^>]*>)', 'before_crosslinks'),
            (r'(</ol>\s*</div>\s*<div class="cross-links")', 'before_crosslinks_with_ol'),
        ]
        
        # Build a simple reference div
        ref_div = '<div class="rdx-specialty-refs" style="margin:20px 0;padding:16px;background:var(--rdx-teal-50,#f0fdfa);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px">'
        ref_div += '<h4 style="color:var(--rdx-teal-dark,#0f766e);font-size:0.85rem;margin-bottom:8px">Clinical Guidelines & Society Resources</h4>'
        ref_div += '<ul style="list-style:none;padding:0;margin:0">'
        for ref in new_refs:
            ref_div += f'<li style="padding:6px 0;border-bottom:1px solid var(--rdx-border,#e2e8f0);font-size:0.85rem"><a href="{ref["url"]}" target="_blank" rel="noopener" style="color:var(--rdx-teal,#0d9488);text-decoration:none">{ref["title"]}</a> — <em style="color:var(--rdx-text-muted,#64748b)">{ref["source"]}</em></li>'
        ref_div += '</ul></div>'
        
        # Insert before </main> or before cross-links or before last </div></body>
        if 'cross-links' in content:
            content = content.replace('<div class="cross-links"', ref_div + '\n<div class="cross-links"', 1)
        elif '</main>' in content:
            content = content.replace('</main>', ref_div + '\n</main>', 1)
        elif '</body>' in content:
            content = content.replace('</body>', ref_div + '\n</body>', 1)
        else:
            continue
        
        with open(filepath, 'w') as f:
            f.write(content)
        count += 1
    
    STATS['modules'] = count
    print(f"Modules: {count} files enriched")

def process_cases():
    """Add specialty refs to case pages"""
    count = 0
    for filepath in sorted(glob.glob(os.path.join(ROOT, 'cases', '*.html'))):
        with open(filepath, 'r', errors='replace') as f:
            content = f.read()
        
        title = get_title(content)
        if not title:
            continue
        
        specialty_refs = srefs.find_specialty_refs(title)
        if not specialty_refs:
            continue
        
        new_refs = [r for r in specialty_refs if not has_ref_url(content, r['url'])]
        if not new_refs:
            continue
        
        # Build compact reference section
        ref_section = '<div class="rdx-specialty-refs" style="margin:20px 0;padding:16px;background:var(--rdx-teal-50,#f0fdfa);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px">'
        ref_section += '<h4 style="color:var(--rdx-teal-dark,#0f766e);font-size:0.85rem;margin-bottom:8px">Evidence-Based Guidelines</h4>'
        ref_section += '<ul style="list-style:none;padding:0;margin:0">'
        for ref in new_refs:
            ref_section += f'<li style="padding:6px 0;font-size:0.85rem"><a href="{ref["url"]}" target="_blank" rel="noopener" style="color:var(--rdx-teal,#0d9488);text-decoration:none">{ref["title"]}</a> — <em style="color:var(--rdx-text-muted,#64748b)">{ref["source"]}</em></li>'
        ref_section += '</ul></div>'
        
        if '</body>' in content:
            content = content.replace('</body>', ref_section + '\n</body>', 1)
        
        with open(filepath, 'w') as f:
            f.write(content)
        count += 1
    
    STATS['cases'] = count
    print(f"Cases: {count} files enriched")

def process_deep_dives():
    """Add specialty refs to deep dive JSONs"""
    count = 0
    for filepath in sorted(glob.glob(os.path.join(ROOT, 'data', 'deep-dives', '*.json'))):
        try:
            with open(filepath, 'r') as f:
                dd = json.load(f)
        except:
            continue
        
        title = dd.get('title', '')
        if not title:
            continue
        
        specialty_refs = srefs.find_specialty_refs(title)
        if not specialty_refs:
            continue
        
        existing_urls = set()
        for ref in dd.get('references', []):
            if isinstance(ref, dict):
                existing_urls.add(ref.get('url', ''))
        
        new_refs = [r for r in specialty_refs if r['url'] not in existing_urls]
        if not new_refs:
            continue
        
        if 'references' not in dd:
            dd['references'] = []
        dd['references'].extend(new_refs)
        
        with open(filepath, 'w') as f:
            json.dump(dd, f, indent=2, ensure_ascii=False)
        count += 1
    
    STATS['deep_dives'] = count
    print(f"Deep Dives: {count} files enriched")

def main():
    target = sys.argv[1] if len(sys.argv) > 1 else 'all'
    
    if target in ('all', 'topics'):
        process_topics()
    if target in ('all', 'modules'):
        process_modules()
    if target in ('all', 'cases'):
        process_cases()
    if target in ('all', 'deep_dives'):
        process_deep_dives()
    
    print(f"\nTotal enriched: {sum(STATS.values())} files")
    print(f"  Topics:     {STATS['topics']}")
    print(f"  Modules:    {STATS['modules']}")
    print(f"  Cases:      {STATS['cases']}")
    print(f"  Deep Dives: {STATS['deep_dives']}")

if __name__ == '__main__':
    main()
