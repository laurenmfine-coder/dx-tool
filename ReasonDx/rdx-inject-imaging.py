#!/usr/bin/env python3
"""
rdx-inject-imaging.py — Add imaging integration components to existing
modules and cases. Adds:
1. RadDx cross-link cards to topic pages with imaging-relevant content
2. Radiopaedia case links to modules/cases
3. Imaging reasoning prompts to adventure cases
"""
import os, re, glob, json, html

ROOT = '/home/claude/reasondx'
MAP = json.load(open(os.path.join(ROOT, 'data', 'radiopaedia-map.json')))

# Build flat lookup: keyword → case data
IMAGING_LOOKUP = {}
for system, cases in MAP['imaging_cases'].items():
    for case in cases:
        for kw in case.get('topic_keywords', []):
            IMAGING_LOOKUP[kw.lower()] = {**case, 'system': system}

# Map system keys to RadDx page filenames
SYSTEM_PAGES = {
    'chest': 'raddx-chest.html',
    'cardiac': 'raddx-cardiac.html',
    'abdominal': 'raddx-abdominal.html',
    'neuro': 'raddx-neuro.html',
    'musculoskeletal': 'raddx-msk.html',
    'renal_gu': 'raddx-renal-gu.html',
    'pediatric': 'raddx-peds.html',
    'obstetric': 'raddx-obstetric.html',
}

def find_imaging_match(title):
    """Find best imaging case match for a topic title"""
    title_lower = title.lower()
    for kw, data in IMAGING_LOOKUP.items():
        if kw in title_lower:
            return data
    return None

def build_imaging_card(match):
    """Build an imaging integration card HTML"""
    system = match['system']
    modality = match['modality']
    teaching = match['teaching_focus']
    rp_url = match.get('radiopaedia_url', '')
    page = SYSTEM_PAGES.get(system, 'raddx-hub.html')
    
    card = f'''<div class="rdx-imaging-card" style="margin:20px 0;padding:20px;background:linear-gradient(135deg,rgba(13,148,136,.06),rgba(20,184,166,.06));border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
<span style="font-size:1.2rem">🩻</span>
<h4 style="font-size:.9rem;font-weight:700;color:var(--rdx-teal-dark,#0f766e);margin:0">Imaging Reasoning</h4>
<span style="background:var(--rdx-teal-50,#f0fdfa);color:var(--rdx-teal,#0d9488);font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:4px;text-transform:uppercase">{html.escape(modality)}</span>
</div>
<p style="font-size:.85rem;color:var(--rdx-text-muted,#64748b);margin:0 0 12px;line-height:1.5"><strong>Key imaging focus:</strong> {html.escape(teaching)}</p>
<div style="display:flex;gap:10px;flex-wrap:wrap">
<a href="../modules/{page}" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:var(--rdx-teal,#0d9488);color:#fff;border-radius:8px;text-decoration:none;font-size:.8rem;font-weight:600">📐 RadDx Reasoning Module →</a>'''
    
    if rp_url:
        card += f'\n<a href="{rp_url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;background:var(--rdx-bg-hover,#f1f5f9);border:1px solid var(--rdx-border,#e2e8f0);color:var(--rdx-teal,#0d9488);border-radius:8px;text-decoration:none;font-size:.8rem;font-weight:600">📚 Radiopaedia Cases →</a>'
    
    card += '\n</div></div>'
    return card

def inject_topics():
    """Add imaging cards to topic pages"""
    count = 0
    for filepath in sorted(glob.glob(os.path.join(ROOT, 'topics', '*.html'))):
        with open(filepath, 'r', errors='replace') as f:
            content = f.read()
        
        if 'rdx-imaging-card' in content:
            continue
        
        m = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
        if not m:
            continue
        title = html.unescape(m.group(1).strip())
        
        match = find_imaging_match(title)
        if not match:
            continue
        
        card = build_imaging_card(match)
        
        # Insert before the references section or before </section> for content-grid
        if 'rdx-ref-list' in content:
            content = content.replace('<ol class="rdx-ref-list"', card + '\n<ol class="rdx-ref-list"', 1)
        elif '</section>' in content:
            # Insert before the last </section>
            last_section = content.rfind('</section>')
            if last_section > 0:
                content = content[:last_section] + card + '\n' + content[last_section:]
        
        with open(filepath, 'w') as f:
            f.write(content)
        count += 1
    
    print(f"Topics: {count} imaging cards injected")

def inject_modules():
    """Add Radiopaedia links and RadDx cross-links to modules"""
    count = 0
    for filepath in sorted(glob.glob(os.path.join(ROOT, 'modules', '*.html'))):
        if 'raddx-' in os.path.basename(filepath):
            continue
        
        with open(filepath, 'r', errors='replace') as f:
            content = f.read()
        
        if 'rdx-imaging-card' in content:
            continue
        
        m = re.search(r'<title>([^|—<]+)', content)
        if not m:
            continue
        title = html.unescape(m.group(1).strip())
        
        match = find_imaging_match(title)
        if not match:
            continue
        
        card = build_imaging_card(match)
        
        # Insert before cross-links or before </body>
        if 'rdx-specialty-refs' in content:
            content = content.replace('<div class="rdx-specialty-refs"', card + '\n<div class="rdx-specialty-refs"', 1)
        elif 'cross-links' in content:
            content = content.replace('<div class="cross-links"', card + '\n<div class="cross-links"', 1)
        elif '</body>' in content:
            content = content.replace('</body>', card + '\n</body>', 1)
        
        with open(filepath, 'w') as f:
            f.write(content)
        count += 1
    
    print(f"Modules: {count} imaging cards injected")

def inject_cases():
    """Add imaging links to adventure cases"""
    count = 0
    for filepath in sorted(glob.glob(os.path.join(ROOT, 'cases', '*.html'))):
        with open(filepath, 'r', errors='replace') as f:
            content = f.read()
        
        if 'rdx-imaging-card' in content:
            continue
        
        m = re.search(r'<title>([^|—<]+)', content)
        if not m:
            continue
        title = html.unescape(m.group(1).strip())
        
        match = find_imaging_match(title)
        if not match:
            continue
        
        card = build_imaging_card(match)
        
        if '</body>' in content:
            content = content.replace('</body>', card + '\n</body>', 1)
        
        with open(filepath, 'w') as f:
            f.write(content)
        count += 1
    
    print(f"Cases: {count} imaging cards injected")

def inject_deep_dives():
    """Add Radiopaedia references to deep dive JSONs"""
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
        
        match = find_imaging_match(title)
        if not match:
            continue
        
        rp_url = match.get('radiopaedia_url', '')
        if not rp_url:
            continue
        
        # Check if already added
        existing_urls = set(r.get('url', '') for r in dd.get('references', []) if isinstance(r, dict))
        if rp_url in existing_urls:
            continue
        
        dd.setdefault('references', []).append({
            'title': f'Radiopaedia: {match["modality"]} Cases',
            'source': 'Radiopaedia',
            'url': rp_url
        })
        
        # Add imaging_reasoning field
        dd['imaging_reasoning'] = {
            'modality': match['modality'],
            'order_reasoning': match.get('order_reasoning', ''),
            'expected_findings': match.get('expected_findings', ''),
            'management_impact': match.get('management_impact', ''),
            'radiopaedia_url': rp_url
        }
        
        with open(filepath, 'w') as f:
            json.dump(dd, f, indent=2, ensure_ascii=False)
        count += 1
    
    print(f"Deep Dives: {count} imaging data injected")

def main():
    inject_topics()
    inject_modules()
    inject_cases()
    inject_deep_dives()

if __name__ == '__main__':
    main()
