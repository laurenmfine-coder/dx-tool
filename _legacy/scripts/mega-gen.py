#!/usr/bin/env python3
"""
ReasonDx Mega Case Generator — generates all missing expanded-adventure cases.
Gold Standard: 6 scenes, 6 questions (4 opts each), teaching boxes, why-chains,
difficulty hints, vitals, references, cross-links, score/progress/completion.
"""
import json, os, sys, html as htmlmod, random, glob
random.seed(42)

CASES_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'cases')

# ========== HELPERS ==========
def V(**kw):
    """Vital signs HTML block"""
    return '<div class="vital-signs">' + ''.join(
        f'<div class="vital-item"><span class="label">{k}</span><span class="value">{v}</span></div>'
        for k,v in kw.items()) + '</div>'

def N(html):
    """Narrative wrapper"""
    return f'<div class="narrative">{html}</div>'

def T(title, body):
    """Teaching mechanism box"""
    return f'<div class="mechanism-box"><div class="mechanism-title">\U0001f4cb {title}</div><div class="pathway">{body}</div></div>'

def esc(s):
    return s.replace('\\','\\\\').replace('"','\\"').replace('\n','\\n').replace('`','\\`')

def esc_h(s):
    return htmlmod.escape(s)

def esc_a(s):
    return htmlmod.escape(s, quote=True)

# Balance correct answer positions globally
_pos = [0,0,0,0]
def balance(opts):
    """Move correct answer to least-used position"""
    global _pos
    ci = next(i for i,o in enumerate(opts) if o[1])
    correct = opts.pop(ci)
    random.shuffle(opts)
    t = _pos.index(min(_pos))
    opts.insert(t, correct)
    _pos[t] += 1
    return opts

# ========== HTML TEMPLATE ==========
def gen_html(c):
    key = c['key']
    title = c['title']
    refs_html = '\n'.join(f'<a href="{r["url"]}" target="_blank" rel="noopener">{esc_h(r["title"])}</a>' for r in c.get('refs',[]))
    mech = c.get('mech','')
    cl = ''
    if mech:
        cl += f'<a href="../modules/{mech}" class="rdx-crossplatform-link">\U0001f9ec Mechanism Module</a>\n'
    cl += '<a href="../board-prep.html" class="rdx-crossplatform-link">\U0001f4dd Board Prep</a>\n'
    cl += '<a href="../training.html" class="rdx-crossplatform-link">\U0001f3cb\ufe0f Training Hub</a>\n'
    cl += '<a href="../adventure-hub.html" class="rdx-crossplatform-link">\U0001f5fa\ufe0f All Cases</a>\n'

    scenes_js = []
    for sc in c['scenes']:
        opts_js = []
        for text, correct, exp in sc['opts']:
            opts_js.append(f'{{ text: "{esc(text)}", correct: {"true" if correct else "false"}, explanation: "{esc(exp)}" }}')
        wc_js = ','.join(f'{{q:"{esc(q)}",a:"{esc(a)}"}}' for q,a in sc.get('wc',[]))
        scenes_js.append(f"""{{
        title: "{esc(sc['t'])}",
        content: `{sc['content']}`,
        hint_beginner: "{esc(sc.get('hb','Review the fundamentals of this topic.'))}",
        hint_advanced: "{esc(sc.get('ha','Consider the underlying mechanism and evidence base.'))}",
        question: {{
            prompt: "{esc(sc['q'])}",
            options: [{','.join(opts_js)}],
            explanation: {{ correct: "{esc(sc['ec'])}", incorrect: "{esc(sc['ei'])}" }},
            teaching: `{sc['teach']}`,
            why_chain: [{wc_js}],
            points: 10
        }}
    }}""")

    return f'''<!DOCTYPE html>
<html data-theme="light" lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#0f766e">
<meta name="description" content="{esc_a(title)}. Interactive Socratic clinical case with guided reasoning on ReasonDx.">
<link rel="manifest" href="../manifest.json">
<link rel="apple-touch-icon" href="../icons/apple-touch-icon.png">
<link rel="stylesheet" href="../mobile.css">
<title>{esc_h(title)} | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>
*{{box-sizing:border-box;margin:0;padding:0}}body{{font-family:var(--rdx-font);background:var(--rdx-bg,#f8fafc);min-height:100vh;color:var(--rdx-text,#1e293b)}}.container{{max-width:800px;margin:0 auto;padding:20px}}.progress-bar{{background:var(--rdx-border,#e2e8f0);border-radius:8px;height:6px;margin-bottom:24px;overflow:hidden}}.progress-fill{{background:linear-gradient(90deg,#0d9488,#14b8a6);height:100%;border-radius:8px;transition:width 0.5s}}.score-tracker{{position:fixed;top:12px;right:60px;background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:8px 16px;z-index:50;box-shadow:0 2px 8px rgba(0,0,0,0.08);display:flex;align-items:center;gap:8px;font-size:14px}}.score-label{{color:var(--rdx-text-muted,#64748b);font-size:12px}}.score-value{{font-weight:700;color:var(--rdx-teal,#0d9488);font-size:18px}}.difficulty-panel{{text-align:center;margin-bottom:20px}}.diff-btn{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:6px 14px;cursor:pointer;font-size:13px;font-weight:500;color:var(--rdx-text-muted,#64748b);transition:all 0.2s}}.diff-btn.active{{background:var(--rdx-teal,#0d9488);color:#fff;border-color:var(--rdx-teal)}}.diff-btn:hover{{border-color:var(--rdx-teal)}}.scene-title{{font-family:var(--rdx-font-serif);font-size:1.6rem;color:var(--rdx-teal-dark,#0f766e);margin-bottom:16px}}.narrative{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:20px;margin-bottom:16px;line-height:1.7}}.narrative .highlight{{background:rgba(13,148,136,0.1);padding:2px 6px;border-radius:4px;font-weight:600}}.narrative .critical{{background:rgba(220,38,38,0.1);color:#dc2626;padding:2px 6px;border-radius:4px;font-weight:600}}.vital-signs{{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin:12px 0;padding:12px;background:rgba(13,148,136,0.04);border-radius:8px;border:1px solid rgba(13,148,136,0.1)}}.vital-item{{text-align:center;font-size:13px}}.vital-item .label{{color:var(--rdx-text-muted,#64748b);font-size:11px;display:block}}.vital-item .value{{font-weight:700;color:var(--rdx-teal-dark,#0f766e)}}.socratic-prompt{{background:linear-gradient(135deg,rgba(124,58,237,0.06),rgba(13,148,136,0.06));border:1px solid rgba(124,58,237,0.15);border-radius:12px;padding:16px 20px;margin:16px 0}}.socratic-prompt h4{{color:var(--rdx-purple,#7c3aed);font-size:0.95rem;margin-bottom:8px}}.hint-box{{background:rgba(217,119,6,0.06);border:1px solid rgba(217,119,6,0.15);border-radius:8px;padding:12px;margin:8px 0;font-size:0.9rem;color:#92400e;display:none}}.options-grid{{display:grid;gap:10px;margin:16px 0}}.option-btn{{background:var(--rdx-bg-card,#fff);border:2px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:14px 18px;cursor:pointer;text-align:left;font-size:14px;transition:all 0.2s;font-family:var(--rdx-font)}}.option-btn:hover{{border-color:var(--rdx-teal,#0d9488);background:rgba(13,148,136,0.03)}}.option-btn.correct{{border-color:#16a34a;background:rgba(22,163,74,0.06)}}.option-btn.incorrect{{border-color:#dc2626;background:rgba(220,38,38,0.04)}}.option-btn.disabled{{pointer-events:none;opacity:0.7}}.explanation-box{{border-radius:12px;padding:16px;margin:12px 0;display:none}}.explanation-box.correct{{background:rgba(22,163,74,0.06);border:1px solid rgba(22,163,74,0.2)}}.explanation-box.incorrect{{background:rgba(220,38,38,0.04);border:1px solid rgba(220,38,38,0.15)}}.mechanism-box{{background:linear-gradient(135deg,rgba(13,148,136,0.06),rgba(13,148,136,0.02));border:1px solid rgba(13,148,136,0.15);border-radius:12px;padding:20px;margin:16px 0}}.mechanism-title{{color:var(--rdx-teal-dark,#0f766e);font-weight:700;font-size:0.95rem;margin-bottom:10px}}.pathway{{line-height:1.8;font-size:0.93rem}}.why-chain{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:12px;margin:8px 0}}.why-q{{font-weight:600;color:var(--rdx-purple,#7c3aed);cursor:pointer;font-size:0.9rem}}.why-a{{display:none;margin-top:6px;font-size:0.88rem;color:var(--rdx-text-muted,#64748b)}}.next-btn{{background:linear-gradient(135deg,#0f766e,#0d9488);color:#fff;border:none;border-radius:12px;padding:14px 32px;font-size:15px;font-weight:600;cursor:pointer;margin:20px 0;display:none;font-family:var(--rdx-font)}}.next-btn:hover{{opacity:0.9}}.completion-card{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:16px;padding:32px;text-align:center;margin:24px 0}}.completion-card h2{{font-family:var(--rdx-font-serif);color:var(--rdx-teal-dark,#0f766e);margin-bottom:12px}}.references-panel{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:16px;margin:20px 0}}.references-panel a{{display:block;color:var(--rdx-teal,#0d9488);font-size:13px;margin:4px 0;text-decoration:none}}.references-panel a:hover{{text-decoration:underline}}.rdx-crossplatform-nav{{background:var(--rdx-bg-card,#f8fafc);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:20px;margin:24px 0}}.rdx-crossplatform-nav h4{{color:var(--rdx-text-muted,#64748b);margin-bottom:12px;font-size:0.9rem}}.rdx-crossplatform-links{{display:flex;gap:12px;flex-wrap:wrap}}.rdx-crossplatform-link{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:12px 16px;text-decoration:none;color:var(--rdx-text,#1e293b);font-size:13px;font-weight:500;transition:all 0.2s}}.rdx-crossplatform-link:hover{{background:rgba(13,148,136,0.05);transform:translateY(-2px)}}@media(max-width:640px){{.score-tracker{{top:auto;bottom:12px;right:12px}}.container{{padding:12px}}.vital-signs{{grid-template-columns:repeat(3,1fr)}}}}
</style>
</head>
<body>
<div class="score-tracker"><div class="score-label">Score</div><div><span class="score-value" id="score">0</span> / <span id="maxScore">0</span></div></div>
<div class="container">
    <div style="margin-bottom:12px"><a href="../adventure-hub.html" style="color:var(--rdx-teal);text-decoration:none;font-size:14px;font-weight:600">\u2190 Back to Cases</a></div>
    <div class="progress-bar"><div class="progress-fill" id="progress" style="width:0%"></div></div>
    <div class="difficulty-panel"><div style="font-size:0.75rem;color:var(--rdx-text-muted);margin-bottom:8px;font-weight:600">Difficulty</div>
        <button class="diff-btn" onclick="setDifficulty('beginner',this)">Beginner</button>
        <button class="diff-btn active" onclick="setDifficulty('standard',this)">Standard</button>
        <button class="diff-btn" onclick="setDifficulty('advanced',this)">Advanced</button>
    </div>
    <div class="references-panel" style="margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleReferences()">
            <span>\U0001f4da Open-Access References</span><span id="refToggle">\u25b8</span>
        </div>
        <div id="referencesContent" style="display:none;margin-top:8px">{refs_html}</div>
    </div>
    <div id="scene-container"></div>
    <div class="rdx-crossplatform-nav">
        <h4>\U0001f517 Continue Learning</h4>
        <div class="rdx-crossplatform-links">{cl}</div>
    </div>
</div>
<script>
let currentStage=0,score=0,difficulty='standard';
const stages=[{",".join(scenes_js)}];
document.getElementById('maxScore').textContent=stages.reduce((s,st)=>s+(st.question?st.question.points:0),0);
function setDifficulty(d,btn){{difficulty=d;document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');const hb=document.querySelector('.hint-box');if(hb)hb.style.display=d==='beginner'?'block':'none'}}
function toggleReferences(){{const c=document.getElementById('referencesContent');const t=document.getElementById('refToggle');if(c.style.display==='none'){{c.style.display='block';t.textContent='\u25be'}}else{{c.style.display='none';t.textContent='\u25b8'}}}}
function renderStage(idx){{if(idx>=stages.length){{showCompletion();return}}const st=stages[idx];const pct=((idx)/stages.length*100);document.getElementById('progress').style.width=pct+'%';let h='<h2 class="scene-title">'+st.title+'</h2>';h+='<div class="scene-content">'+st.content+'</div>';if(st.hint_beginner)h+='<div class="hint-box" id="hint-box"'+(difficulty==='beginner'?' style="display:block"':'')+'>💡 '+st.hint_beginner+'</div>';if(difficulty==='advanced'&&st.hint_advanced)h+='<div class="hint-box" style="display:block;background:rgba(124,58,237,0.06);border-color:rgba(124,58,237,0.15);color:#5b21b6">🎓 '+st.hint_advanced+'</div>';if(st.question){{h+='<div class="socratic-prompt"><h4>Clinical Question</h4><p>'+st.question.prompt+'</p></div>';h+='<div class="options-grid" id="options-'+idx+'">';st.question.options.forEach((opt,oi)=>{{h+='<button class="option-btn" id="option-'+idx+'-'+oi+'" onclick="checkAnswer('+idx+','+oi+')">'+String.fromCharCode(65+oi)+'. '+opt.text+'</button>'}});h+='</div>';h+='<div class="explanation-box" id="explain-'+idx+'"></div>';h+='<div id="teaching-'+idx+'" style="display:none">'+st.question.teaching+'</div>';if(st.question.why_chain&&st.question.why_chain.length>0){{h+='<div id="why-'+idx+'" style="display:none">';st.question.why_chain.forEach((wc,wi)=>{{h+='<div class="why-chain"><div class="why-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\\'none\\'?\\'block\\':\\'none\\'">🔍 '+wc.q+'</div><div class="why-a">'+wc.a+'</div></div>'}});h+='</div>'}}}}h+='<button class="next-btn" id="next-'+idx+'" onclick="nextStage()">Continue \u2192</button>';document.getElementById('scene-container').innerHTML=h}}
function checkAnswer(si,oi){{const st=stages[si];const opt=st.question.options[oi];document.querySelectorAll('#options-'+si+' .option-btn').forEach((b,i)=>{{b.classList.add('disabled');if(st.question.options[i].correct)b.classList.add('correct');if(i===oi&&!opt.correct)b.classList.add('incorrect')}});const eb=document.getElementById('explain-'+si);if(opt.correct){{score+=st.question.points;document.getElementById('score').textContent=score;eb.className='explanation-box correct';eb.innerHTML='<strong>\u2713 Correct!</strong> '+st.question.explanation.correct}}else{{eb.className='explanation-box incorrect';eb.innerHTML='<strong>\u2717 Not quite.</strong> '+st.question.explanation.incorrect}}eb.style.display='block';document.getElementById('teaching-'+si).style.display='block';const why=document.getElementById('why-'+si);if(why)why.style.display='block';document.getElementById('next-'+si).style.display='inline-block'}}
function nextStage(){{currentStage++;renderStage(currentStage);window.scrollTo({{top:0,behavior:'smooth'}})}}
function showCompletion(){{const mx=stages.reduce((s,st)=>s+(st.question?st.question.points:0),0);const pct=mx>0?Math.round(score/mx*100):0;document.getElementById('progress').style.width='100%';let lvl='Developing';if(pct>=90)lvl='Mastery';else if(pct>=70)lvl='Proficient';else if(pct>=50)lvl='Competent';document.getElementById('scene-container').innerHTML='<div class="completion-card"><h2>\U0001f389 Case Complete!</h2><p style="font-size:2rem;font-weight:700;color:var(--rdx-teal)">'+pct+'%</p><p style="color:var(--rdx-text-muted)">Score: '+score+'/'+mx+'</p><p style="margin:12px 0;font-weight:600">Level: '+lvl+'</p><div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><a href="../adventure-hub.html" style="padding:10px 20px;background:var(--rdx-teal);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">More Cases</a><a href="../tools/learning-dashboard.html" style="padding:10px 20px;background:var(--rdx-purple);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">\U0001f4ca Dashboard</a><button onclick="currentStage=0;score=0;document.getElementById(\\'score\\').textContent=0;renderStage(0)" style="padding:10px 20px;background:var(--rdx-bg-card);border:1px solid var(--rdx-border);border-radius:8px;cursor:pointer;font-weight:600">\U0001f504 Retry</button></div></div>';try{{const progress=JSON.parse(localStorage.getItem('reasondx-progress')||'{{}}'  );if(!progress.cases)progress.cases={{}};progress.cases['{key}']=Math.max(progress.cases['{key}']||0,pct);localStorage.setItem('reasondx-progress',JSON.stringify(progress))}}catch(e){{}}}}
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

# ========== SCENE BUILDER (compact) ==========
def S(t, content, hb, ha, q, opts, ec, ei, teach_title, teach_body, whys=None):
    """Build scene dict from compact args. opts = [(text, is_correct, explanation), ...]"""
    balanced = balance(list(opts))
    return {
        't': t, 'content': content, 'hb': hb, 'ha': ha,
        'q': q, 'opts': balanced, 'ec': ec, 'ei': ei,
        'teach': T(teach_title, teach_body),
        'wc': whys or []
    }

# ========== MICRO CASE BUILDER ==========
def micro_case(key, name, gram, pres, vitals_d, id_feat, id_q, id_correct, id_wrongs,
               vir, vir_q, vir_correct, vir_wrongs,
               diseases, tx, tx_q, tx_correct, tx_wrongs,
               resist, resist_q, resist_correct, resist_wrongs,
               prev, prev_q, prev_correct, prev_wrongs,
               refs, mech, whys=None):
    """Build a 6-scene micro case from organism data"""
    whys = whys or {}
    v = V(**vitals_d) if vitals_d else ''
    return {
        'key': key, 'title': name, 'category': 'microbiology', 'mech': mech,
        'refs': refs,
        'scenes': [
            S(f"The Presenting Patient",
              N(f'<p>{pres}</p>{v}'),
              "What organism causes this presentation?",
              f"Consider the Gram stain ({gram}) and unique clinical features.",
              f"Based on this presentation, which organism is most likely?",
              [(name, True, ""),
               *[(w[0], False, w[1]) for w in id_wrongs[:3]]],
              f"Correct! {gram}. {id_feat[:200]}",
              f"This presentation is classic for {name}. {gram}.",
              "Organism Identification",
              f"<strong>Gram stain:</strong> {gram}<br><br><strong>Key ID features:</strong> {id_feat}",
              whys.get('s1',[])),
            S("Laboratory Identification",
              N(f'<p>The lab processes your specimens. {id_feat[:150]}</p><div class="socratic-prompt"><h4>Organism ID</h4><p>Which confirmatory test is most useful?</p></div>'),
              "Review the key biochemical tests for this organism.",
              "Consider which tests are pathognomonic vs screening.",
              id_q,
              [(id_correct, True, ""),
               *[(w[0], False, w[1]) for w in id_wrongs[:3]]],
              f"Correct! {id_correct}.",
              f"The key identification test is: {id_correct}.",
              "Identification Tests",
              f"<strong>Identification:</strong><br>{id_feat}",
              whys.get('s2',[])),
            S("Virulence & Pathogenesis",
              N(f'<p>Understanding how {name} causes disease is essential for clinical reasoning.</p><div class="socratic-prompt"><h4>Virulence Factors</h4><p>{vir[:200]}</p></div>'),
              f"What makes {name} pathogenic?",
              "Consider how each virulence factor contributes to immune evasion, tissue damage, or toxin production.",
              vir_q,
              [(vir_correct, True, ""),
               *[(w[0], False, w[1]) for w in vir_wrongs[:3]]],
              f"Correct! {vir_correct}.",
              f"Key virulence: {vir_correct}.",
              "Virulence Factors",
              f"<strong>Virulence factors of {name}:</strong><br>{vir}",
              whys.get('s3',[])),
            S("Treatment Decision",
              N(f'<p>With the diagnosis confirmed, you need to select appropriate antimicrobial therapy.</p><div class="socratic-prompt"><h4>Empiric Therapy</h4><p>{tx[:200]}</p></div>'),
              "What is first-line treatment?",
              "Consider mechanism of action, spectrum, and resistance patterns when selecting therapy.",
              tx_q,
              [(tx_correct, True, ""),
               *[(w[0], False, w[1]) for w in tx_wrongs[:3]]],
              f"Correct! {tx_correct}.",
              f"First-line: {tx_correct}.",
              "Treatment",
              f"<strong>Treatment approach:</strong><br>{tx}",
              whys.get('s4',[])),
            S("Resistance Patterns",
              N(f'<p>Antimicrobial resistance is a growing concern with {name}.</p><div class="socratic-prompt"><h4>Resistance Mechanisms</h4><p>{resist[:200]}</p></div>'),
              "What resistance mechanisms are clinically important?",
              "Consider the molecular basis of resistance and how it affects empiric therapy choices.",
              resist_q,
              [(resist_correct, True, ""),
               *[(w[0], False, w[1]) for w in resist_wrongs[:3]]],
              f"Correct! {resist_correct}.",
              f"Key resistance mechanism: {resist_correct}.",
              "Resistance",
              f"<strong>Resistance mechanisms:</strong><br>{resist}",
              whys.get('s5',[])),
            S("Prevention & Stewardship",
              N(f'<p>Your patient is improving. Time to consider prevention and infection control.</p>'),
              "How do we prevent transmission and future infections?",
              "Consider vaccines, prophylaxis, infection control measures, and antimicrobial stewardship.",
              prev_q,
              [(prev_correct, True, ""),
               *[(w[0], False, w[1]) for w in prev_wrongs[:3]]],
              f"Correct! {prev_correct}.",
              f"Prevention: {prev_correct}.",
              "Prevention & Control",
              f"<strong>Prevention:</strong><br>{prev}",
              whys.get('s6',[]))
        ]
    }

# ========== PHARM CASE BUILDER ==========
def pharm_case(key, drug_name, drug_class, scenario, moa, spectrum, dosing, adverse, monitoring, resist, refs, mech,
               moa_q, moa_correct, moa_wrongs,
               spectrum_q, spectrum_correct, spectrum_wrongs,
               adverse_q, adverse_correct, adverse_wrongs,
               resist_q, resist_correct, resist_wrongs,
               counsel_q, counsel_correct, counsel_wrongs,
               whys=None):
    """Build a 6-scene pharmacology case"""
    whys = whys or {}
    return {
        'key': key, 'title': f"{drug_name}", 'category': 'pharmacology', 'mech': mech,
        'refs': refs,
        'scenes': [
            S("The Clinical Scenario",
              N(f'<p>{scenario}</p>'),
              f"When would you use {drug_name}?",
              "Consider the clinical indication and why this drug class is preferred.",
              f"What is the mechanism of action of {drug_name}?",
              [(moa_correct, True, ""),
               *[(w[0], False, w[1]) for w in moa_wrongs[:3]]],
              f"Correct! {moa_correct}.",
              f"Mechanism: {moa_correct}.",
              "Mechanism of Action",
              f"<strong>Mechanism:</strong> {moa}<br><br><strong>Drug class:</strong> {drug_class}",
              whys.get('s1',[])),
            S("Spectrum of Activity",
              N(f'<p>Understanding the antimicrobial spectrum guides appropriate use.</p><div class="socratic-prompt"><h4>Coverage</h4><p>{spectrum[:200]}</p></div>'),
              "What organisms does this drug cover?",
              "Consider gram-positive vs gram-negative, aerobic vs anaerobic, and any notable gaps in coverage.",
              spectrum_q,
              [(spectrum_correct, True, ""),
               *[(w[0], False, w[1]) for w in spectrum_wrongs[:3]]],
              f"Correct! {spectrum_correct}.",
              f"Key spectrum point: {spectrum_correct}.",
              "Spectrum of Activity",
              f"<strong>Spectrum:</strong><br>{spectrum}",
              whys.get('s2',[])),
            S("Dosing & Administration",
              N(f'<p>Proper dosing is essential for efficacy and safety.</p><div class="socratic-prompt"><h4>Pharmacokinetics</h4><p>{dosing[:200]}</p></div>'),
              "What are the key dosing considerations?",
              "Consider PK/PD principles: is this drug concentration-dependent or time-dependent? How is it eliminated?",
              f"What is a critical dosing principle for {drug_name}?",
              [(dosing.split('.')[0], True, ""),
               ("Standard fixed dosing regardless of renal function", False, "Most antimicrobials require renal dose adjustment."),
               ("Loading dose is never needed", False, "Loading doses are important for many antimicrobials."),
               ("Once daily dosing for all indications", False, "Dosing frequency depends on PK/PD and indication.")],
              f"Correct! {dosing.split('.')[0]}.",
              f"Key dosing: {dosing.split('.')[0]}.",
              "Dosing & PK/PD",
              f"<strong>Dosing:</strong><br>{dosing}",
              whys.get('s3',[])),
            S("Adverse Effects",
              N(f'<p>Your patient asks about potential side effects. Monitoring for adverse effects is essential.</p>'),
              "What are the most important adverse effects to monitor?",
              "Consider both common and rare-but-serious adverse effects. Which require baseline and monitoring labs?",
              adverse_q,
              [(adverse_correct, True, ""),
               *[(w[0], False, w[1]) for w in adverse_wrongs[:3]]],
              f"Correct! {adverse_correct}.",
              f"Key adverse effect: {adverse_correct}.",
              "Adverse Effects & Monitoring",
              f"<strong>Adverse effects:</strong><br>{adverse}<br><br><strong>Monitoring:</strong> {monitoring}",
              whys.get('s4',[])),
            S("Resistance Mechanisms",
              N(f'<p>Antimicrobial resistance threatens the utility of {drug_name}.</p>'),
              "What resistance mechanisms affect this drug?",
              "Consider enzymatic degradation, target modification, efflux, and permeability changes.",
              resist_q,
              [(resist_correct, True, ""),
               *[(w[0], False, w[1]) for w in resist_wrongs[:3]]],
              f"Correct! {resist_correct}.",
              f"Resistance: {resist_correct}.",
              "Resistance",
              f"<strong>Resistance mechanisms:</strong><br>{resist}",
              whys.get('s5',[])),
            S("Stewardship & Clinical Pearls",
              N(f'<p>The patient is improving. Time to consider de-escalation, duration, and stewardship principles.</p>'),
              "When should you de-escalate or stop this antibiotic?",
              "Consider culture-directed therapy, shortest effective duration, and IV-to-oral conversion criteria.",
              counsel_q,
              [(counsel_correct, True, ""),
               *[(w[0], False, w[1]) for w in counsel_wrongs[:3]]],
              f"Correct! {counsel_correct}.",
              f"Stewardship: {counsel_correct}.",
              "Clinical Pearls",
              f"<strong>Stewardship principles:</strong><br>\u2022 De-escalate based on culture results<br>\u2022 Shortest effective duration<br>\u2022 IV-to-oral conversion when clinically stable<br>\u2022 Monitor for adverse effects throughout",
              whys.get('s6',[]))
        ]
    }

# Just output the template functions are ready
print("Template engine loaded successfully")
print(f"gen_html function: ready")
print(f"micro_case builder: ready")
print(f"pharm_case builder: ready")
print(f"S() scene builder: ready")
