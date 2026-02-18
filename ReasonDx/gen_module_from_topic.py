import sys, os, html, re
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.in_script = False
        self.in_style = False
    def handle_starttag(self, tag, attrs):
        if tag == 'script': self.in_script = True
        if tag == 'style': self.in_style = True
    def handle_endtag(self, tag):
        if tag == 'script': self.in_script = False
        if tag == 'style': self.in_style = False
    def handle_data(self, data):
        if not self.in_script and not self.in_style:
            t = data.strip()
            if t and len(t) > 3:
                self.texts.append(t)

def escape(text):
    return html.escape(str(text)).replace("'", "&#39;").replace('"', '&quot;')

def generate_from_topic(topic_path, output_path, title):
    with open(topic_path, 'r', errors='replace') as f:
        raw = f.read()
    
    ext = TextExtractor()
    ext.feed(raw)
    
    # Filter out boilerplate
    texts = [t for t in ext.texts if len(t) > 20 
             and 'localStorage' not in t 
             and 'reasondx' not in t.lower()
             and 'function' not in t
             and 'const ' not in t
             and 'var ' not in t
             and '{' not in t]
    
    # Group into ~6 sections of content
    chunk_size = max(len(texts) // 6, 3)
    sections = []
    for i in range(0, min(len(texts), 36), chunk_size):
        chunk = texts[i:i+chunk_size]
        if chunk:
            sections.append('\n'.join(chunk[:5]))
    sections = sections[:6]
    if not sections:
        sections = [f"Study module for {title}. Content sourced from the topic page."]
    
    total_stages = len(sections) + 1
    category = "Clinical Medicine"
    
    # Detect category from title keywords
    cat_map = {
        'anaphylaxis': 'Allergy/Immunology', 'angioedema': 'Allergy/Immunology',
        'urticaria': 'Allergy/Immunology', 'venom': 'Allergy/Immunology',
        'asthma': 'Pulmonology', 'respiratory': 'Pulmonology', 'neonatal': 'Neonatology',
        'diaphragmatic': 'Embryology', 'dress': 'Dermatology', 'cellulitis': 'Infectious Disease',
        'dka': 'Endocrinology', 'diabetic': 'Endocrinology', 'sleepy': 'Pediatrics',
        'electrolyte': 'Nephrology', 'sbo': 'Surgery', 'bowel obstruction': 'Surgery',
        'appendicitis': 'Surgery', 'clinical reasoning': 'Clinical Skills',
    }
    for kw, cat in cat_map.items():
        if kw in title.lower():
            category = cat
            break
    
    module_html = f'''<!DOCTYPE html><html lang="en"><head><script>(function(){{var K="reasondx-user";function g(){{var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/login.html"}}function a(){{try{{var u=localStorage.getItem(K);if(u){{var j=JSON.parse(u);return j&&j.email&&j.name}}}}catch(e){{}}return false}}if(!a()){{sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}}}})();</script><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>{escape(title)} | ReasonDx Module</title><style>:root{{--bg:#0F172A;--card:#1E293B;--border:#334155;--text:#F1F5F9;--muted:#94A3B8;--accent:#3B82F6;--success:#10B981;--danger:#DC2626;--info:#8B5CF6}}*{{box-sizing:border-box;margin:0;padding:0}}body{{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;line-height:1.6}}.header{{background:linear-gradient(135deg,#1E3A5F,#3B82F6);padding:12px 20px;position:sticky;top:0;z-index:100;color:#fff}}.header-row{{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto;flex-wrap:wrap;gap:8px}}.header-title{{font-size:1.1rem;font-weight:600}}.badge{{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px}}.stats{{display:flex;gap:12px}}.stat{{text-align:center;background:rgba(0,0,0,.2);padding:6px 14px;border-radius:8px}}.stat-value{{font-size:1.1rem;font-weight:700;font-family:monospace}}.stat-label{{font-size:.6rem;opacity:.8}}.main{{max-width:900px;margin:0 auto;padding:24px}}.progress-bar{{height:6px;background:rgba(255,255,255,.1);border-radius:3px;margin-bottom:20px}}.progress-fill{{height:100%;background:var(--accent);border-radius:3px;transition:width .3s}}.card{{background:var(--card);border:1px solid var(--border);border-radius:16px;margin-bottom:20px}}.card-header{{padding:20px 24px;border-bottom:1px solid var(--border)}}.card-phase{{font-size:.75rem;color:var(--accent);text-transform:uppercase;letter-spacing:1px}}.card-title{{font-size:1.5rem;font-weight:700;margin-top:4px}}.card-body{{padding:24px}}.narrative{{background:linear-gradient(135deg,rgba(59,130,246,.1),rgba(139,92,246,.1));border-left:4px solid var(--accent);padding:20px;border-radius:0 12px 12px 0;margin-bottom:20px;white-space:pre-line}}.teaching{{background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.3);border-radius:12px;padding:16px;margin:20px 0}}.teaching h4{{color:var(--info);margin-bottom:8px}}.btn{{padding:12px 24px;border-radius:10px;font-weight:600;cursor:pointer;border:none;font-size:1rem}}.btn-primary{{background:var(--accent);color:#fff}}.btn:hover{{opacity:.9}}.hidden{{display:none!important}}.cross-links{{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:20px}}.cross-link{{padding:14px;background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.3);border-radius:10px;text-decoration:none;color:var(--text)}}.cross-link:hover{{border-color:var(--accent)}}.cross-link-title{{font-weight:600;font-size:.9rem}}@media(max-width:480px){{.main{{padding:12px}}.card-body{{padding:16px}}}}</style><script src="../dx-user-bar.js" defer></script>
</head><body>
<div class="header"><div class="header-row"><div class="header-title">&#128218; {escape(title)}<span class="badge">{escape(category.upper())}</span></div><div class="stats"><div class="stat"><div class="stat-value" id="stageNum">1/{total_stages}</div><div class="stat-label">Stage</div></div></div></div></div>
<div class="main"><div class="progress-bar"><div class="progress-fill" id="progress" style="width:{round(1/total_stages*100)}%"></div></div>'''

    icons = ['&#127973;','&#128300;','&#128202;','&#9888;','&#128161;','&#127891;','&#128736;']
    
    for idx, sec_content in enumerate(sections):
        stage_num = idx + 1
        icon = icons[idx % len(icons)]
        hidden = ' hidden' if idx > 0 else ''
        sec_escaped = escape(sec_content[:800])
        
        module_html += f'''
<div id="s{stage_num}" class="stage{hidden}"><div class="card"><div class="card-header"><div class="card-phase">Stage {stage_num} of {total_stages}</div><div class="card-title">{icon} Section {stage_num}</div></div><div class="card-body"><div class="narrative">{sec_escaped}</div><div class="teaching"><h4>Key Concepts</h4><p>{sec_escaped}</p></div><div style="text-align:right;margin-top:16px"><button class="btn btn-primary" onclick="next({stage_num+1})">Continue &#8594;</button></div></div></div></div>'''

    summary_num = len(sections) + 1
    module_html += f'''
<div id="s{summary_num}" class="stage hidden"><div class="card"><div class="card-header"><div class="card-phase">Stage {summary_num} of {total_stages}</div><div class="card-title">&#127891; Module Complete</div></div><div class="card-body"><div style="text-align:center;margin-top:30px"><div style="font-size:4rem">&#127891;</div><div style="font-size:2rem;font-weight:700;color:var(--success);margin:16px 0">Module Complete!</div><p style="color:var(--muted);margin-bottom:20px">You have completed the {escape(title)} module.</p><button class="btn btn-primary" onclick="location.reload()">Restart</button></div></div></div></div>'''

    crt_id = os.path.basename(output_path).replace('.html','')
    module_html += f'''
<script>let total={total_stages};function next(n){{document.querySelectorAll('.stage').forEach(s=>s.classList.add('hidden'));document.getElementById('s'+n).classList.remove('hidden');document.getElementById('stageNum').textContent=n+'/'+total;document.getElementById('progress').style.width=Math.round(n/total*100)+'%';window.scrollTo(0,0)}}</script>
<script src="../data/rdx-persist.js"></script>
<script src="../js/dx-universal-nav.js"></script>
</body></html>'''

    with open(output_path, 'w') as f:
        f.write(module_html)
    return len(module_html)

if __name__ == '__main__':
    generate_from_topic(sys.argv[1], sys.argv[2], sys.argv[3])
    print(f"Generated: {sys.argv[2]}")
