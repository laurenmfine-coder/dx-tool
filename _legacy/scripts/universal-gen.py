#!/usr/bin/env python3
"""
Universal ReasonDx Case Generator
Takes compact JSON case definitions → produces gold-standard HTML files.
Supports 3 arcs: clinical, microbiology, pharmacology.
"""
import json, os, html as htmlmod, random

random.seed(2026)

TEMPLATE_HEAD = '''<!DOCTYPE html>
<html data-theme="light" lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#0f766e">
<meta name="description" content="{meta_desc}">
<link rel="manifest" href="../manifest.json">
<link rel="apple-touch-icon" href="../icons/apple-touch-icon.png">
<link rel="stylesheet" href="../mobile.css">
<title>{title} | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>
*{{box-sizing:border-box;margin:0;padding:0}}body{{font-family:var(--rdx-font);background:var(--rdx-bg,#f8fafc);min-height:100vh;color:var(--rdx-text,#1e293b)}}.container{{max-width:800px;margin:0 auto;padding:20px}}.progress-bar{{background:var(--rdx-border,#e2e8f0);border-radius:8px;height:6px;margin-bottom:24px;overflow:hidden}}.progress-fill{{background:linear-gradient(90deg,#0d9488,#14b8a6);height:100%;border-radius:8px;transition:width 0.5s}}.score-tracker{{position:fixed;top:12px;right:60px;background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:8px 16px;z-index:50;box-shadow:0 2px 8px rgba(0,0,0,0.08);display:flex;align-items:center;gap:8px;font-size:14px}}.score-label{{color:var(--rdx-text-muted,#64748b);font-size:12px}}.score-value{{font-weight:700;color:var(--rdx-teal,#0d9488);font-size:18px}}.difficulty-panel{{text-align:center;margin-bottom:20px}}.diff-btn{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:6px 14px;cursor:pointer;font-size:13px;font-weight:500;color:var(--rdx-text-muted,#64748b);transition:all 0.2s}}.diff-btn.active{{background:var(--rdx-teal,#0d9488);color:#fff;border-color:var(--rdx-teal,#0d9488)}}.diff-btn:hover{{border-color:var(--rdx-teal,#0d9488)}}.scene-title{{font-family:var(--rdx-font-serif);font-size:1.6rem;color:var(--rdx-teal-dark,#0f766e);margin-bottom:16px}}.narrative{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:20px;margin-bottom:16px;line-height:1.7}}.narrative .highlight{{background:rgba(13,148,136,0.1);padding:2px 6px;border-radius:4px;font-weight:600}}.narrative .critical{{background:rgba(220,38,38,0.1);color:#dc2626;padding:2px 6px;border-radius:4px;font-weight:600}}.vital-signs{{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin:12px 0;padding:12px;background:rgba(13,148,136,0.04);border-radius:8px;border:1px solid rgba(13,148,136,0.1)}}.vital-item{{text-align:center;font-size:13px}}.vital-item .label{{color:var(--rdx-text-muted,#64748b);font-size:11px;display:block}}.vital-item .value{{font-weight:700;color:var(--rdx-teal-dark,#0f766e)}}.socratic-prompt{{background:linear-gradient(135deg,rgba(124,58,237,0.06),rgba(13,148,136,0.06));border:1px solid rgba(124,58,237,0.15);border-radius:12px;padding:16px 20px;margin:16px 0}}.socratic-prompt h4{{color:var(--rdx-purple,#7c3aed);font-size:0.95rem;margin-bottom:8px}}.hint-box{{background:rgba(217,119,6,0.06);border:1px solid rgba(217,119,6,0.15);border-radius:8px;padding:12px;margin:8px 0;font-size:0.9rem;color:#92400e;display:none}}.options-grid{{display:grid;gap:10px;margin:16px 0}}.option-btn{{background:var(--rdx-bg-card,#fff);border:2px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:14px 18px;cursor:pointer;text-align:left;font-size:14px;transition:all 0.2s;font-family:var(--rdx-font)}}.option-btn:hover{{border-color:var(--rdx-teal,#0d9488);background:rgba(13,148,136,0.03)}}.option-btn.correct{{border-color:#16a34a;background:rgba(22,163,74,0.06)}}.option-btn.incorrect{{border-color:#dc2626;background:rgba(220,38,38,0.04)}}.option-btn.disabled{{pointer-events:none;opacity:0.7}}.explanation-box{{border-radius:12px;padding:16px;margin:12px 0;display:none}}.explanation-box.correct{{background:rgba(22,163,74,0.06);border:1px solid rgba(22,163,74,0.2)}}.explanation-box.incorrect{{background:rgba(220,38,38,0.04);border:1px solid rgba(220,38,38,0.15)}}.mechanism-box{{background:linear-gradient(135deg,rgba(13,148,136,0.06),rgba(13,148,136,0.02));border:1px solid rgba(13,148,136,0.15);border-radius:12px;padding:20px;margin:16px 0}}.mechanism-title{{color:var(--rdx-teal-dark,#0f766e);font-weight:700;font-size:0.95rem;margin-bottom:10px}}.pathway{{line-height:1.8;font-size:0.93rem;color:var(--rdx-text,#1e293b)}}.why-chain{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:12px;margin:8px 0}}.why-q{{font-weight:600;color:var(--rdx-purple,#7c3aed);cursor:pointer;font-size:0.9rem}}.why-a{{display:none;margin-top:6px;font-size:0.88rem;color:var(--rdx-text-muted,#64748b)}}.next-btn{{background:linear-gradient(135deg,#0f766e,#0d9488);color:#fff;border:none;border-radius:12px;padding:14px 32px;font-size:15px;font-weight:600;cursor:pointer;margin:20px 0;display:none;font-family:var(--rdx-font)}}.next-btn:hover{{opacity:0.9;transform:translateY(-1px)}}.completion-card{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:16px;padding:32px;text-align:center;margin:24px 0}}.completion-card h2{{font-family:var(--rdx-font-serif);color:var(--rdx-teal-dark,#0f766e);margin-bottom:12px}}.references-panel{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:16px;margin:20px 0}}.references-panel a{{display:block;color:var(--rdx-teal,#0d9488);font-size:13px;margin:4px 0;text-decoration:none;word-break:break-all}}.references-panel a:hover{{text-decoration:underline}}.rdx-crossplatform-nav{{background:var(--rdx-bg-card,#f8fafc);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:20px;margin:24px 0}}.rdx-crossplatform-nav h4{{color:var(--rdx-text-muted,#64748b);margin-bottom:12px;font-size:0.9rem}}.rdx-crossplatform-links{{display:flex;gap:12px;flex-wrap:wrap}}.rdx-crossplatform-link{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:12px 16px;text-decoration:none;color:var(--rdx-text,#1e293b);font-size:13px;font-weight:500;transition:all 0.2s}}.rdx-crossplatform-link:hover{{background:rgba(13,148,136,0.05);transform:translateY(-2px)}}@media(max-width:640px){{.score-tracker{{top:auto;bottom:12px;right:12px}}.container{{padding:12px}}.vital-signs{{grid-template-columns:repeat(3,1fr)}}}}
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
{refs_html}        </div>
    </div>
    <div id="scene-container"></div>
    <div class="rdx-crossplatform-nav">
        <h4>&#128279; Continue Learning</h4>
        <div class="rdx-crossplatform-links">
{cross_links}        </div>
    </div>
</div>
<script>
let currentStage=0,score=0,difficulty='standard';
const stages=[
{stages_js}];
document.getElementById('maxScore').textContent=stages.reduce((s,st)=>s+(st.question?st.question.points:0),0);
function setDifficulty(d,btn){{difficulty=d;document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');const hb=document.querySelector('.hint-box');if(hb)hb.style.display=d==='beginner'?'block':'none'}}
function toggleReferences(){{const c=document.getElementById('referencesContent');const t=document.getElementById('refToggle');if(c.style.display==='none'){{c.style.display='block';t.textContent='\\u25BE'}}else{{c.style.display='none';t.textContent='\\u25B8'}}}}
function renderStage(idx){{if(idx>=stages.length){{showCompletion();return}}const st=stages[idx];const pct=((idx)/stages.length*100);document.getElementById('progress').style.width=pct+'%';let h='<h2 class="scene-title">'+st.title+'</h2>';h+='<div class="scene-content">'+st.content+'</div>';if(st.hint_beginner)h+='<div class="hint-box" id="hint-box"'+(difficulty==='beginner'?' style="display:block"':'')+'>\\ud83d\\udca1 '+st.hint_beginner+'</div>';if(difficulty==='advanced'&&st.hint_advanced)h+='<div class="hint-box" style="display:block;background:rgba(124,58,237,0.06);border-color:rgba(124,58,237,0.15);color:#5b21b6">\\ud83c\\udf93 '+st.hint_advanced+'</div>';if(st.question){{h+='<div class="socratic-prompt"><h4>Clinical Question</h4><p>'+st.question.prompt+'</p></div>';h+='<div class="options-grid" id="options-'+idx+'">';st.question.options.forEach((opt,oi)=>{{h+='<button class="option-btn" id="option-'+idx+'-'+oi+'" onclick="checkAnswer('+idx+','+oi+')">'+String.fromCharCode(65+oi)+'. '+opt.text+'</button>'}});h+='</div>';h+='<div class="explanation-box" id="explain-'+idx+'"></div>';h+='<div id="teaching-'+idx+'" style="display:none">'+st.question.teaching+'</div>';if(st.question.why_chain&&st.question.why_chain.length>0){{h+='<div id="why-'+idx+'" style="display:none">';st.question.why_chain.forEach((wc,wi)=>{{h+='<div class="why-chain"><div class="why-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\\'none\\'?\\'block\\':\\'none\\'">\\ud83d\\udd0d '+wc.q+'</div><div class="why-a">'+wc.a+'</div></div>'}});h+='</div>'}}}}h+='<button class="next-btn" id="next-'+idx+'" onclick="nextStage()">Continue \\u2192</button>';document.getElementById('scene-container').innerHTML=h}}
function checkAnswer(si,oi){{const st=stages[si];const opt=st.question.options[oi];document.querySelectorAll('#options-'+si+' .option-btn').forEach((b,i)=>{{b.classList.add('disabled');if(st.question.options[i].correct)b.classList.add('correct');if(i===oi&&!opt.correct)b.classList.add('incorrect')}});const eb=document.getElementById('explain-'+si);if(opt.correct){{score+=st.question.points;document.getElementById('score').textContent=score;eb.className='explanation-box correct';eb.innerHTML='<strong>\\u2713 Correct!</strong> '+st.question.explanation.correct}}else{{eb.className='explanation-box incorrect';eb.innerHTML='<strong>\\u2717 Not quite.</strong> '+st.question.explanation.incorrect}}eb.style.display='block';document.getElementById('teaching-'+si).style.display='block';const why=document.getElementById('why-'+si);if(why)why.style.display='block';document.getElementById('next-'+si).style.display='inline-block'}}
function nextStage(){{currentStage++;renderStage(currentStage);window.scrollTo({{top:0,behavior:'smooth'}})}}
function showCompletion(){{const mx=stages.reduce((s,st)=>s+(st.question?st.question.points:0),0);const pct=mx>0?Math.round(score/mx*100):0;document.getElementById('progress').style.width='100%';let lvl='Developing';if(pct>=90)lvl='Mastery';else if(pct>=70)lvl='Proficient';else if(pct>=50)lvl='Competent';document.getElementById('scene-container').innerHTML='<div class="completion-card"><h2>\\ud83c\\udf89 Case Complete!</h2><p style="font-size:2rem;font-weight:700;color:var(--rdx-teal,#0d9488)">'+pct+'%</p><p style="color:var(--rdx-text-muted,#64748b)">Score: '+score+'/'+mx+'</p><p style="margin:12px 0;font-weight:600">Level: '+lvl+'</p><div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><a href="../adventure-hub.html" style="padding:10px 20px;background:var(--rdx-teal,#0d9488);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">More Cases</a><a href="../tools/learning-dashboard.html" style="padding:10px 20px;background:var(--rdx-purple,#7c3aed);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">\\ud83d\\udcca Dashboard</a><button onclick="currentStage=0;score=0;document.getElementById(\\'score\\').textContent=0;renderStage(0)" style="padding:10px 20px;background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;cursor:pointer;font-weight:600">\\ud83d\\udd04 Retry</button></div></div>';try{{const progress=JSON.parse(localStorage.getItem('reasondx-progress')||'{{}}'  );if(!progress.cases)progress.cases={{}};progress.cases['{topic_key}']=Math.max(progress.cases['{topic_key}']||0,pct);localStorage.setItem('reasondx-progress',JSON.stringify(progress))}}catch(e){{}}}}
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

# Correct answer position balancer
pos_counts = [0,0,0,0]

def balanced_position():
    """Return the least-used position index (0-3)."""
    global pos_counts
    idx = pos_counts.index(min(pos_counts))
    pos_counts[idx] += 1
    return idx

def esc(s):
    """Escape for JS template literal."""
    return str(s).replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

def esc_dq(s):
    """Escape for JS double-quoted string."""
    return str(s).replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

def make_vitals_html(vitals_str):
    """Convert 'HR=92,Temp=38.2°C' to vital signs HTML."""
    if not vitals_str: return ''
    items = []
    for pair in vitals_str.split(','):
        k, v = pair.split('=', 1)
        items.append(f'<div class="vital-item"><span class="label">{k.strip()}</span><span class="value">{v.strip()}</span></div>')
    return f'<div class="vital-signs">{"".join(items)}</div>'

def make_scene_js(title, content_html, hint_b, hint_a, prompt, options, exp_correct, exp_incorrect, teaching_html, why_chains, points=10):
    """Build one scene JS object."""
    pos = balanced_position()
    # Build options with correct at balanced position
    correct_opt = None
    wrong_opts = []
    for o in options:
        if o.get('correct'):
            correct_opt = o
        else:
            wrong_opts.append(o)
    random.shuffle(wrong_opts)
    ordered = wrong_opts[:pos] + [correct_opt] + wrong_opts[pos:]
    
    opts_js = []
    for o in ordered:
        c = 'true' if o.get('correct') else 'false'
        e = esc_dq(o.get('exp', ''))
        opts_js.append(f'{{text:"{esc_dq(o["text"])}",correct:{c},explanation:"{e}"}}')
    
    wc_js = ''
    if why_chains:
        wc_items = [f'{{q:"{esc_dq(w[0])}",a:"{esc_dq(w[1])}"}}' for w in why_chains]
        wc_js = ','.join(wc_items)
    
    return f'''{{
    title:"{esc_dq(title)}",
    content:`{esc(content_html)}`,
    hint_beginner:"{esc_dq(hint_b)}",
    hint_advanced:"{esc_dq(hint_a)}",
    question:{{
        prompt:"{esc_dq(prompt)}",
        options:[{",".join(opts_js)}],
        explanation:{{correct:"{esc_dq(exp_correct)}",incorrect:"{esc_dq(exp_incorrect)}"}},
        teaching:`{esc(teaching_html)}`,
        why_chain:[{wc_js}],
        points:{points}
    }}
}}'''

def teach_box(title, body):
    return f'<div class="mechanism-box"><div class="mechanism-title">📋 {title}</div><div class="pathway">{body}</div></div>'

def generate_micro_case(org):
    """Generate a complete micro case from compact org data."""
    key = org['key']
    name = org['name']
    gram = org['gram']
    
    scenes = []
    
    # Scene 1: Presentation
    vitals_html = make_vitals_html(org.get('vitals', ''))
    pres_html = f'<div class="narrative"><p>{org["pres"]}</p>{vitals_html}</div>'
    scenes.append(make_scene_js(
        "The Presenting Patient", pres_html,
        f"What organisms commonly cause this presentation?",
        f"Consider the {gram} classification and most likely pathogens for this clinical scenario.",
        f"Based on this presentation, which organism is most likely?",
        [{"text": name, "correct": True, "exp": ""},
         {"text": "Consider the clinical clues carefully", "correct": False, "exp": "The presentation is classic for " + name},
         {"text": "An atypical organism", "correct": False, "exp": "While possible, the classic presentation points to " + name},
         {"text": "A viral pathogen", "correct": False, "exp": "The clinical features suggest a bacterial/fungal/parasitic etiology."}],
        f"Correct! This is a classic presentation for {name}. Key clues in the history and exam guide you toward this organism.",
        f"The clinical presentation is classic for {name}. Review the key features that distinguish this organism.",
        teach_box(f"{name} — Key Features", f"<strong>Classification:</strong> {gram}<br><br><strong>Classic presentation:</strong> {org['pres']}<br><br><strong>Key diseases:</strong> {org['dis']}"),
        [("Why is this organism likely in this setting?", f"The clinical scenario, patient demographics, and risk factors are classic for {name}. Key identifying features include the {gram} classification and typical disease manifestations.")],
    ))
    
    # Scene 2: Identification
    scenes.append(make_scene_js(
        "Laboratory Identification", 
        f'<div class="narrative"><p>Specimens are sent to the lab. The microbiology report describes: <span class="highlight">{gram}</span>.</p><div class="socratic-prompt"><h4>Organism Identification</h4><p>Lab features: {org["id"]}</p></div></div>',
        "What lab tests distinguish this organism from similar ones?",
        "Consider the specific biochemical and culture characteristics that are pathognomonic.",
        org['id_q'],
        [{"text": org['id_a'], "correct": True, "exp": ""},
         {"text": "Gram stain morphology alone", "correct": False, "exp": "Gram stain narrows the differential but additional tests are needed."},
         {"text": "Clinical presentation only", "correct": False, "exp": "Lab confirmation is essential for definitive identification."},
         {"text": "Blood culture growth pattern", "correct": False, "exp": "Growth pattern helps but specific biochemical tests are more definitive."}],
        f"Correct! {org['id_a']} is the key distinguishing test for {name}.",
        f"The definitive identification relies on: {org['id_a']}. Remember: {org['id']}",
        teach_box(f"Identifying {name}", f"<strong>Gram stain:</strong> {gram}<br><br><strong>Key identification:</strong> {org['id']}<br><br><strong>Definitive test:</strong> {org['id_a']}"),
        [("What other organisms look similar on Gram stain?", f"Several organisms share the {gram} morphology. The specific biochemical tests ({org['id_a']}) are what differentiate {name} from its look-alikes.")],
    ))
    
    # Scene 3: Virulence/Mechanism
    scenes.append(make_scene_js(
        "Virulence & Pathogenesis",
        f'<div class="narrative"><p>Understanding how {name} causes disease is critical for both diagnosis and treatment.</p><div class="socratic-prompt"><h4>Virulence Factors</h4><p>{org["vir"]}</p></div></div>',
        "Which virulence factor is the most important for causing disease?",
        "Consider how each virulence factor contributes to immune evasion, tissue damage, or toxin production.",
        org['vir_q'],
        [{"text": org['vir_a'], "correct": True, "exp": ""},
         {"text": "Endotoxin/LPS", "correct": False, "exp": "While important in gram-negatives, this is not the key factor for this question."},
         {"text": "Biofilm formation", "correct": False, "exp": "Biofilm contributes to persistence but is not the primary virulence factor here."},
         {"text": "Iron acquisition systems", "correct": False, "exp": "Siderophores help with growth but are not the most important virulence factor."}],
        f"Correct! {org['vir_a']} is the critical virulence factor.",
        f"The key virulence factor is: {org['vir_a']}. This drives the pathogenesis of disease caused by {name}.",
        teach_box(f"{name} Virulence Factors", f"<strong>Key virulence factors:</strong><br>{org['vir']}<br><br><strong>Most important:</strong> {org['vir_a']}"),
        [("How does this virulence factor help the organism evade the immune system?", f"{org['vir_a']} — this factor is critical because it directly impacts the organism's ability to establish and maintain infection.")],
    ))
    
    # Scene 4: Treatment
    scenes.append(make_scene_js(
        "Empiric Treatment",
        f'<div class="narrative"><p>With {name} identified, you need to initiate appropriate antimicrobial therapy.</p><div class="socratic-prompt"><h4>Treatment Selection</h4><p>Current guidelines: {org["tx"]}</p></div></div>',
        "What is the first-line treatment for this organism?",
        "Consider mechanism of action, spectrum, and potential resistance patterns when selecting therapy.",
        org['tx_q'],
        [{"text": org['tx_a'], "correct": True, "exp": ""},
         {"text": "Broad-spectrum carbapenem", "correct": False, "exp": "Carbapenems may be appropriate for resistant strains but are not first-line for routine infections."},
         {"text": "Combination therapy with 3 agents", "correct": False, "exp": "Multi-drug regimens are reserved for specific situations (TB, endocarditis)."},
         {"text": "Observation without antibiotics", "correct": False, "exp": "This infection requires antimicrobial treatment."}],
        f"Correct! {org['tx_a']} is the appropriate treatment approach.",
        f"First-line treatment: {org['tx_a']}. Guidelines recommend: {org['tx']}",
        teach_box(f"Treating {name}", f"<strong>Treatment summary:</strong><br>{org['tx']}<br><br><strong>First-line:</strong> {org['tx_a']}"),
        [("Why this specific antibiotic choice?", f"The treatment selection is based on the organism's susceptibility profile, the site of infection, and current guideline recommendations. {org['tx_a']}")],
    ))
    
    # Scene 5: Resistance
    scenes.append(make_scene_js(
        "Resistance & Treatment Failure",
        f'<div class="narrative"><p>The patient is not improving after 48 hours. You need to consider resistance mechanisms.</p><div class="socratic-prompt"><h4>Resistance Patterns</h4><p>{org["res"]}</p></div></div>',
        "What resistance mechanisms does this organism use?",
        "Think about the molecular mechanisms: altered targets, enzyme production, efflux, permeability changes.",
        org['res_q'],
        [{"text": org['res_a'], "correct": True, "exp": ""},
         {"text": "Spontaneous clearance of infection", "correct": False, "exp": "Resistance, not resolution, is the concern when treatment fails."},
         {"text": "Patient non-compliance only", "correct": False, "exp": "While adherence matters, understanding organism resistance is critical."},
         {"text": "Drug-drug interaction reducing levels", "correct": False, "exp": "Pharmacokinetic issues should be considered but organism resistance is the primary concern."}],
        f"Correct! {org['res_a']}",
        f"Key resistance mechanism: {org['res_a']}. Full resistance profile: {org['res']}",
        teach_box(f"{name} Resistance", f"<strong>Resistance mechanisms:</strong><br>{org['res']}<br><br><strong>Key mechanism:</strong> {org['res_a']}"),
        [("How does this resistance mechanism work at the molecular level?", f"{org['res_a']} — understanding this mechanism guides selection of alternative antibiotics that bypass the resistance.")],
    ))
    
    # Scene 6: Prevention
    scenes.append(make_scene_js(
        "Prevention & Stewardship",
        f'<div class="narrative"><p>After successful treatment, you discuss prevention strategies with the patient and team.</p><div class="socratic-prompt"><h4>Prevention Strategies</h4><p>{org["prev"]}</p></div></div>',
        "What prevention strategies are available?",
        "Consider vaccines, prophylaxis, infection control measures, and antimicrobial stewardship.",
        org['prev_q'],
        [{"text": org['prev_a'], "correct": True, "exp": ""},
         {"text": "No prevention measures exist", "correct": False, "exp": "Multiple prevention strategies are available for this organism."},
         {"text": "Universal prophylactic antibiotics", "correct": False, "exp": "Universal prophylaxis promotes resistance and is not recommended."},
         {"text": "Patient isolation for life", "correct": False, "exp": "Isolation is not necessary for most resolved infections."}],
        f"Correct! {org['prev_a']}",
        f"Prevention: {org['prev_a']}. Comprehensive approach: {org['prev']}",
        teach_box(f"Preventing {name} Infections", f"<strong>Prevention strategies:</strong><br>{org['prev']}<br><br><strong>Key measure:</strong> {org['prev_a']}"),
        [("What is the role of antimicrobial stewardship?", f"Appropriate antibiotic use, avoiding unnecessary broad-spectrum agents, and de-escalating therapy when possible all help prevent resistance development in {name} and other organisms.")],
    ))
    
    # Build refs HTML
    refs_html = ''
    for ref in org.get('refs', []):
        refs_html += f'<a href="{ref["url"]}" target="_blank" rel="noopener">{htmlmod.escape(ref["title"])}</a>\n'
    
    # Build cross-links
    mech = org.get('mech', '')
    cross = ''
    if mech:
        cross += f'<a href="../modules/{mech}" class="rdx-crossplatform-link">🧬 Mechanism Module</a>\n'
    cross += '<a href="../board-prep.html" class="rdx-crossplatform-link">📝 Board Prep</a>\n'
    cross += '<a href="../training.html" class="rdx-crossplatform-link">🏋️ Training Hub</a>\n'
    cross += '<a href="../adventure-hub.html" class="rdx-crossplatform-link">🗺️ More Cases</a>\n'
    
    html = TEMPLATE_HEAD.format(
        meta_desc=f"{name}. Interactive Socratic clinical case with guided reasoning on ReasonDx.",
        title=name,
        refs_html=refs_html,
        cross_links=cross,
        stages_js=',\n'.join(scenes),
        topic_key=key
    )
    
    return f'{key}-expanded-adventure.html', html


def generate_case_from_scenes(key, title, category, mechanism, refs, scene_defs):
    """Generate a clinical/pharm case from explicit scene definitions."""
    scenes = []
    for sd in scene_defs:
        scenes.append(make_scene_js(
            sd['title'], sd['content'],
            sd['hint_b'], sd['hint_a'],
            sd['prompt'], sd['options'],
            sd['exp_correct'], sd['exp_incorrect'],
            sd['teaching'], sd.get('why_chain', []),
            sd.get('points', 10)
        ))
    
    refs_html = ''
    for ref in refs:
        refs_html += f'<a href="{ref["url"]}" target="_blank" rel="noopener">{htmlmod.escape(ref["title"])}</a>\n'
    
    cross = ''
    if mechanism:
        cross += f'<a href="../modules/{mechanism}" class="rdx-crossplatform-link">🧬 Mechanism Module</a>\n'
    cross += '<a href="../board-prep.html" class="rdx-crossplatform-link">📝 Board Prep</a>\n'
    cross += '<a href="../training.html" class="rdx-crossplatform-link">🏋️ Training Hub</a>\n'
    cross += '<a href="../adventure-hub.html" class="rdx-crossplatform-link">🗺️ More Cases</a>\n'
    
    html = TEMPLATE_HEAD.format(
        meta_desc=f"{title}. Interactive Socratic clinical case with guided reasoning on ReasonDx.",
        title=title,
        refs_html=refs_html,
        cross_links=cross,
        stages_js=',\n'.join(scenes),
        topic_key=key
    )
    
    return f'{key}-expanded-adventure.html', html


if __name__ == '__main__':
    # Load case definitions from JSON and generate
    defs_file = os.path.join(os.path.dirname(__file__), '..', 'data', 'all-case-defs.json')
    if os.path.exists(defs_file):
        with open(defs_file) as f:
            all_defs = json.load(f)
        
        output_dir = os.path.join(os.path.dirname(__file__), '..', 'cases')
        generated = skipped = 0
        
        for case_def in all_defs:
            filename = f"{case_def['key']}-expanded-adventure.html"
            filepath = os.path.join(output_dir, filename)
            if os.path.exists(filepath):
                skipped += 1
                continue
            
            if case_def.get('type') == 'micro':
                fn, html_content = generate_micro_case(case_def)
            else:
                fn, html_content = generate_case_from_scenes(
                    case_def['key'], case_def['title'], case_def['category'],
                    case_def.get('mechanism',''), case_def.get('refs',[]),
                    case_def['scenes']
                )
            
            with open(filepath, 'w') as f:
                f.write(html_content)
            generated += 1
            print(f"  ✓ {filename}")
        
        print(f"\nGenerated: {generated} | Skipped (exist): {skipped}")
    else:
        print(f"No definitions file found at {defs_file}")
        print("Use generate_micro_case() or generate_case_from_scenes() programmatically.")
