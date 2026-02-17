#!/usr/bin/env python3
"""
Master generator for all 96 remaining ReasonDx cases.
Generates complete HTML files following gold standard spec.
"""
import json, os, html as html_mod, random, sys

random.seed(42)
CASES_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'cases')
POS = [0,0,0,0]  # Track answer position balance

def esc(s):
    return s.replace('\\','\\\\').replace('"','\\"').replace('\n','\\n').replace('`','\\`').replace("'","\\'")

def esc_html(s):
    return html_mod.escape(s)

def V(**kw):
    """Vital signs block"""
    items = ''.join(f'<div class="vital-item"><span class="label">{k}</span><span class="value">{v}</span></div>' for k,v in kw.items())
    return f'<div class="vital-signs">{items}</div>'

def balanced_pos():
    """Return the least-used answer position (0-3)"""
    p = POS.index(min(POS))
    POS[p] += 1
    return p

def gen_html(key, title, category, mech, refs, scenes_data):
    """Generate complete HTML case file from scene data.
    
    scenes_data: list of dicts with keys:
        t: scene title
        n: narrative HTML
        hb: beginner hint
        ha: advanced hint
        p: question prompt
        opts: list of (text, is_correct) tuples - exactly 4
        ec: correct explanation
        ei: incorrect explanation
        tt: teaching title
        tb: teaching body HTML
        wc: list of (question, answer) tuples for why-chains
    """
    # Build scenes JS
    scenes_js_parts = []
    for i, s in enumerate(scenes_data):
        # Balance answer positions
        correct_idx = next(j for j,(txt,c) in enumerate(s['opts']) if c)
        target = balanced_pos()
        opts = list(s['opts'])
        correct = opts.pop(correct_idx)
        random.shuffle(opts)
        opts.insert(target, correct)
        
        opts_js = ','.join(
            f'{{ text: "{esc(t)}", correct: {"true" if c else "false"} }}'
            for t, c in opts
        )
        
        wc_js = ','.join(f'{{q:"{esc(q)}",a:"{esc(a)}"}}' for q,a in s.get('wc',[]))
        
        scenes_js_parts.append(f"""{{
        title: "{esc(s['t'])}",
        content: `{s['n']}`,
        hint_beginner: "{esc(s['hb'])}",
        hint_advanced: "{esc(s['ha'])}",
        question: {{
            prompt: "{esc(s['p'])}",
            options: [{opts_js}],
            explanation: {{ correct: "{esc(s['ec'])}", incorrect: "{esc(s['ei'])}" }},
            teaching: `<div class="mechanism-box"><div class="mechanism-title">📋 {esc(s['tt'])}</div><div class="pathway">{s['tb']}</div></div>`,
            why_chain: [{wc_js}],
            points: 10
        }}
    }}""")
    
    scenes_array = ',\n    '.join(scenes_js_parts)
    
    refs_html = '\n'.join(f'<a href="{r["url"]}" target="_blank" rel="noopener">{esc_html(r["title"])}</a>' for r in refs)
    
    cross = ''
    if mech:
        cross += f'<a href="../modules/{mech}" class="rdx-crossplatform-link">🧬 Mechanism Module</a>\n'
    cross += '<a href="../board-prep.html" class="rdx-crossplatform-link">📝 Board Prep</a>\n'
    cross += '<a href="../training.html" class="rdx-crossplatform-link">🏋️ Training Hub</a>\n'
    cross += '<a href="../tools/learning-dashboard.html" class="rdx-crossplatform-link">📊 Dashboard</a>\n'
    
    return f'''<!DOCTYPE html>
<html data-theme="light" lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#0f766e">
<meta name="description" content="{esc_html(title)}. Interactive Socratic clinical case with guided reasoning on ReasonDx.">
<link rel="manifest" href="../manifest.json">
<link rel="apple-touch-icon" href="../icons/apple-touch-icon.png">
<link rel="stylesheet" href="../mobile.css">
<title>{esc_html(title)} | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>
*{{box-sizing:border-box;margin:0;padding:0}}body{{font-family:var(--rdx-font);background:var(--rdx-bg,#f8fafc);min-height:100vh;color:var(--rdx-text,#1e293b)}}.container{{max-width:800px;margin:0 auto;padding:20px}}.progress-bar{{background:var(--rdx-border,#e2e8f0);border-radius:8px;height:6px;margin-bottom:24px;overflow:hidden}}.progress-fill{{background:linear-gradient(90deg,#0d9488,#14b8a6);height:100%;border-radius:8px;transition:width 0.5s}}.score-tracker{{position:fixed;top:12px;right:60px;background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:8px 16px;z-index:50;box-shadow:0 2px 8px rgba(0,0,0,0.08);display:flex;align-items:center;gap:8px;font-size:14px}}.score-label{{color:var(--rdx-text-muted,#64748b);font-size:12px}}.score-value{{font-weight:700;color:var(--rdx-teal,#0d9488);font-size:18px}}.difficulty-panel{{text-align:center;margin-bottom:20px}}.diff-btn{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:6px 14px;cursor:pointer;font-size:13px;font-weight:500;color:var(--rdx-text-muted,#64748b);transition:all 0.2s}}.diff-btn.active{{background:var(--rdx-teal,#0d9488);color:#fff;border-color:var(--rdx-teal,#0d9488)}}.diff-btn:hover{{border-color:var(--rdx-teal,#0d9488)}}.scene-title{{font-family:var(--rdx-font-serif);font-size:1.6rem;color:var(--rdx-teal-dark,#0f766e);margin-bottom:16px}}.narrative{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:20px;margin-bottom:16px;line-height:1.7}}.narrative .highlight{{background:rgba(13,148,136,0.1);padding:2px 6px;border-radius:4px;font-weight:600}}.narrative .critical{{background:rgba(220,38,38,0.1);color:#dc2626;padding:2px 6px;border-radius:4px;font-weight:600}}.vital-signs{{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin:12px 0;padding:12px;background:rgba(13,148,136,0.04);border-radius:8px;border:1px solid rgba(13,148,136,0.1)}}.vital-item{{text-align:center;font-size:13px}}.vital-item .label{{color:var(--rdx-text-muted,#64748b);font-size:11px;display:block}}.vital-item .value{{font-weight:700;color:var(--rdx-teal-dark,#0f766e)}}.socratic-prompt{{background:linear-gradient(135deg,rgba(124,58,237,0.06),rgba(13,148,136,0.06));border:1px solid rgba(124,58,237,0.15);border-radius:12px;padding:16px 20px;margin:16px 0}}.socratic-prompt h4{{color:var(--rdx-purple,#7c3aed);font-size:0.95rem;margin-bottom:8px}}.hint-box{{background:rgba(217,119,6,0.06);border:1px solid rgba(217,119,6,0.15);border-radius:8px;padding:12px;margin:8px 0;font-size:0.9rem;color:#92400e;display:none}}.options-grid{{display:grid;gap:10px;margin:16px 0}}.option-btn{{background:var(--rdx-bg-card,#fff);border:2px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:14px 18px;cursor:pointer;text-align:left;font-size:14px;transition:all 0.2s;font-family:var(--rdx-font)}}.option-btn:hover{{border-color:var(--rdx-teal,#0d9488);background:rgba(13,148,136,0.03)}}.option-btn.correct{{border-color:#16a34a;background:rgba(22,163,74,0.06)}}.option-btn.incorrect{{border-color:#dc2626;background:rgba(220,38,38,0.04)}}.option-btn.disabled{{pointer-events:none;opacity:0.7}}.explanation-box{{border-radius:12px;padding:16px;margin:12px 0;display:none}}.explanation-box.correct{{background:rgba(22,163,74,0.06);border:1px solid rgba(22,163,74,0.2)}}.explanation-box.incorrect{{background:rgba(220,38,38,0.04);border:1px solid rgba(220,38,38,0.15)}}.mechanism-box{{background:linear-gradient(135deg,rgba(13,148,136,0.06),rgba(13,148,136,0.02));border:1px solid rgba(13,148,136,0.15);border-radius:12px;padding:20px;margin:16px 0}}.mechanism-title{{color:var(--rdx-teal-dark,#0f766e);font-weight:700;font-size:0.95rem;margin-bottom:10px}}.pathway{{line-height:1.8;font-size:0.93rem}}.why-chain{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:12px;margin:8px 0}}.why-q{{font-weight:600;color:var(--rdx-purple,#7c3aed);cursor:pointer;font-size:0.9rem}}.why-a{{display:none;margin-top:6px;font-size:0.88rem;color:var(--rdx-text-muted,#64748b)}}.next-btn{{background:linear-gradient(135deg,#0f766e,#0d9488);color:#fff;border:none;border-radius:12px;padding:14px 32px;font-size:15px;font-weight:600;cursor:pointer;margin:20px 0;display:none;font-family:var(--rdx-font)}}.next-btn:hover{{opacity:0.9;transform:translateY(-1px)}}.completion-card{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:16px;padding:32px;text-align:center;margin:24px 0}}.completion-card h2{{font-family:var(--rdx-font-serif);color:var(--rdx-teal-dark,#0f766e);margin-bottom:12px}}.references-panel{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:16px;margin:20px 0}}.references-panel a{{display:block;color:var(--rdx-teal,#0d9488);font-size:13px;margin:4px 0;text-decoration:none}}.references-panel a:hover{{text-decoration:underline}}.rdx-crossplatform-nav{{background:var(--rdx-bg-card,#f8fafc);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:20px;margin:24px 0}}.rdx-crossplatform-nav h4{{color:var(--rdx-text-muted,#64748b);margin-bottom:12px;font-size:0.9rem}}.rdx-crossplatform-links{{display:flex;gap:12px;flex-wrap:wrap}}.rdx-crossplatform-link{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:12px 16px;text-decoration:none;color:var(--rdx-text,#1e293b);font-size:13px;font-weight:500;transition:all 0.2s}}.rdx-crossplatform-link:hover{{background:rgba(13,148,136,0.05);transform:translateY(-2px)}}@media(max-width:640px){{.score-tracker{{top:auto;bottom:12px;right:12px}}.container{{padding:12px}}.vital-signs{{grid-template-columns:repeat(3,1fr)}}}}
</style>
</head>
<body>
<div class="score-tracker"><div class="score-label">Score</div><div><span class="score-value" id="score">0</span> / <span id="maxScore">0</span></div></div>
<div class="container">
    <div style="margin-bottom:12px"><a href="../adventure-hub.html" style="color:var(--rdx-teal,#0d9488);text-decoration:none;font-size:14px;font-weight:600">&larr; Back to Cases</a></div>
    <div class="progress-bar"><div class="progress-fill" id="progress" style="width:0%"></div></div>
    <div class="difficulty-panel"><div style="font-size:0.75rem;color:var(--rdx-text-muted,#64748b);margin-bottom:8px;font-weight:600">Difficulty</div>
        <button class="diff-btn" onclick="setDifficulty('beginner',this)">Beginner</button>
        <button class="diff-btn active" onclick="setDifficulty('standard',this)">Standard</button>
        <button class="diff-btn" onclick="setDifficulty('advanced',this)">Advanced</button>
    </div>
    <div class="references-panel" style="margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleReferences()">
            <span>&#128218; Open-Access References</span><span id="refToggle">&#9656;</span>
        </div>
        <div id="referencesContent" style="display:none;margin-top:8px">
{refs_html}
        </div>
    </div>
    <div id="scene-container"></div>
    <div class="rdx-crossplatform-nav">
        <h4>&#128279; Continue Learning</h4>
        <div class="rdx-crossplatform-links">
{cross}        </div>
    </div>
</div>
<script>
let currentStage=0,score=0,difficulty='standard';
const stages=[
    {scenes_array}
];
document.getElementById('maxScore').textContent=stages.reduce((s,st)=>s+(st.question?st.question.points:0),0);
function setDifficulty(d,btn){{difficulty=d;document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');const hb=document.querySelector('.hint-box');if(hb)hb.style.display=d==='beginner'?'block':'none'}}
function toggleReferences(){{const c=document.getElementById('referencesContent');const t=document.getElementById('refToggle');if(c.style.display==='none'){{c.style.display='block';t.innerHTML='&#9662;'}}else{{c.style.display='none';t.innerHTML='&#9656;'}}}}
function renderStage(idx){{if(idx>=stages.length){{showCompletion();return}}const st=stages[idx];const pct=((idx)/stages.length*100);document.getElementById('progress').style.width=pct+'%';let h='<h2 class="scene-title">'+st.title+'</h2>';h+='<div class="scene-content">'+st.content+'</div>';if(st.hint_beginner)h+='<div class="hint-box" id="hint-box"'+(difficulty==='beginner'?' style="display:block"':'')+'>&#128161; '+st.hint_beginner+'</div>';if(difficulty==='advanced'&&st.hint_advanced)h+='<div class="hint-box" style="display:block;background:rgba(124,58,237,0.06);border-color:rgba(124,58,237,0.15);color:#5b21b6">&#127891; '+st.hint_advanced+'</div>';if(st.question){{h+='<div class="socratic-prompt"><h4>Clinical Question</h4><p>'+st.question.prompt+'</p></div>';h+='<div class="options-grid" id="options-'+idx+'">';st.question.options.forEach((opt,oi)=>{{h+='<button class="option-btn" id="option-'+idx+'-'+oi+'" onclick="checkAnswer('+idx+','+oi+')">'+String.fromCharCode(65+oi)+'. '+opt.text+'</button>'}});h+='</div>';h+='<div class="explanation-box" id="explain-'+idx+'"></div>';h+='<div id="teaching-'+idx+'" style="display:none">'+st.question.teaching+'</div>';if(st.question.why_chain&&st.question.why_chain.length>0){{h+='<div id="why-'+idx+'" style="display:none">';st.question.why_chain.forEach((wc,wi)=>{{h+='<div class="why-chain"><div class="why-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\\'none\\'?\\'block\\':\\'none\\'">&#128270; '+wc.q+'</div><div class="why-a">'+wc.a+'</div></div>'}});h+='</div>'}}}}h+='<button class="next-btn" id="next-'+idx+'" onclick="nextStage()">Continue &rarr;</button>';document.getElementById('scene-container').innerHTML=h}}
function checkAnswer(si,oi){{const st=stages[si];const opt=st.question.options[oi];document.querySelectorAll('#options-'+si+' .option-btn').forEach((b,i)=>{{b.classList.add('disabled');if(st.question.options[i].correct)b.classList.add('correct');if(i===oi&&!opt.correct)b.classList.add('incorrect')}});const eb=document.getElementById('explain-'+si);if(opt.correct){{score+=st.question.points;document.getElementById('score').textContent=score;eb.className='explanation-box correct';eb.innerHTML='<strong>&#10003; Correct!</strong> '+st.question.explanation.correct}}else{{eb.className='explanation-box incorrect';eb.innerHTML='<strong>&#10007; Not quite.</strong> '+st.question.explanation.incorrect}}eb.style.display='block';document.getElementById('teaching-'+si).style.display='block';const wy=document.getElementById('why-'+si);if(wy)wy.style.display='block';document.getElementById('next-'+si).style.display='inline-block'}}
function nextStage(){{currentStage++;renderStage(currentStage);window.scrollTo({{top:0,behavior:'smooth'}})}}
function showCompletion(){{const mx=stages.reduce((s,st)=>s+(st.question?st.question.points:0),0);const pct=mx>0?Math.round(score/mx*100):0;document.getElementById('progress').style.width='100%';let lvl='Developing';if(pct>=90)lvl='Mastery';else if(pct>=70)lvl='Proficient';else if(pct>=50)lvl='Competent';document.getElementById('scene-container').innerHTML='<div class="completion-card"><h2>&#127881; Case Complete!</h2><p style="font-size:2rem;font-weight:700;color:var(--rdx-teal,#0d9488)">'+pct+'%</p><p style="color:var(--rdx-text-muted,#64748b)">Score: '+score+'/'+mx+'</p><p style="margin:12px 0;font-weight:600">Level: '+lvl+'</p><div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><a href="../adventure-hub.html" style="padding:10px 20px;background:var(--rdx-teal,#0d9488);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">More Cases</a><a href="../tools/learning-dashboard.html" style="padding:10px 20px;background:var(--rdx-purple,#7c3aed);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">&#128202; Dashboard</a><button onclick="currentStage=0;score=0;document.getElementById(\\'score\\').textContent=0;renderStage(0)" style="padding:10px 20px;background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;cursor:pointer;font-weight:600">&#128260; Retry</button></div></div>';try{{const progress=JSON.parse(localStorage.getItem('reasondx-progress')||'{{}}'  );if(!progress.cases)progress.cases={{}};progress.cases['{key}']=Math.max(progress.cases['{key}']||0,pct);localStorage.setItem('reasondx-progress',JSON.stringify(progress))}}catch(e){{}}}}
renderStage(0);
</script>
<script src="../dx-progress.js"></script>
<script src="dx-adventure-tracker.js"></script>
<script src="../dx-cross-links.js"></script>
<script src="../data/rdx-persist.js"></script>
<script src="../js/rdx-nav.js"></script>
<script>if('serviceWorker' in navigator){{navigator.serviceWorker.register('../sw.js').catch(()=>{{}})}}</script>
<script src="../js/rdx-help-widget.js"></script>
</body>
</html>'''

def write_case(key, title, cat, mech, refs, scenes):
    """Write case HTML file if it doesn't already exist."""
    fn = f"{key}-expanded-adventure.html"
    fp = os.path.join(CASES_DIR, fn)
    if os.path.exists(fp):
        return False
    content = gen_html(key, title, cat, mech, refs, scenes)
    with open(fp, 'w') as f:
        f.write(content)
    return True

def N(html):
    """Wrap in narrative div"""
    return f'<div class="narrative">{html}</div>'

# ============================================================
# Import case data modules
# ============================================================
if __name__ == '__main__':
    generated = 0
    skipped = 0
    
    # Import and run each category module
    for mod_name in ['cases_micro', 'cases_pharm', 'cases_clinical']:
        mod_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), f'{mod_name}.py')
        if os.path.exists(mod_path):
            print(f"\n=== Loading {mod_name} ===")
            ns = {'write_case': write_case, 'N': N, 'V': V, 'generated': 0, 'skipped': 0}
            exec(open(mod_path).read(), ns)
            generated += ns.get('generated', 0)
            skipped += ns.get('skipped', 0)
    
    print(f"\n{'='*50}")
    print(f"Total generated: {generated}")
    print(f"Total skipped (already exist): {skipped}")
