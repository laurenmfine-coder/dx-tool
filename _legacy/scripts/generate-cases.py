#!/usr/bin/env python3
"""
ReasonDx Gold Standard Case Generator
Generates complete expanded-adventure case HTML files from JSON definitions.
Each case follows the platform's gold standard: 6 scenes, difficulty system,
score tracking, teaching points, cross-links, and progress tracking.
"""

import json, sys, os, html

def generate_case_html(case_def):
    """Generate a complete case HTML file from a case definition dict."""
    
    topic_key = case_def['key']
    title = case_def['title']
    category = case_def.get('category', 'Clinical Medicine')
    filename = f"{topic_key}-expanded-adventure.html"
    
    # Build scenes JS
    scenes_js = []
    for i, scene in enumerate(case_def['scenes']):
        opts_js = []
        for opt in scene['question']['options']:
            correct_str = 'true' if opt.get('correct') else 'false'
            explanation = opt.get('explanation', '')
            opts_js.append(f'{{ text: "{_esc(opt["text"])}", correct: {correct_str}, explanation: "{_esc(explanation)}" }}')
        
        why_chain_js = ''
        if scene['question'].get('why_chain'):
            wc_items = []
            for wc in scene['question']['why_chain']:
                wc_items.append(f'{{q: "{_esc(wc["q"])}", a: "{_esc(wc["a"])}"}}')
            why_chain_js = ', '.join(wc_items)
        
        scene_js = f"""{{
        title: "{_esc(scene['title'])}",
        content: `{scene['content']}`,
        hint_beginner: "{_esc(scene.get('hint_beginner', 'Review the fundamentals of this topic.'))}",
        hint_advanced: "{_esc(scene.get('hint_advanced', 'Consider the underlying mechanism and evidence base.'))}",
        question: {{
            prompt: "{_esc(scene['question']['prompt'])}",
            options: [{', '.join(opts_js)}],
            explanation: {{ correct: "{_esc(scene['question']['explanation']['correct'])}", incorrect: "{_esc(scene['question']['explanation']['incorrect'])}" }},
            teaching: `{scene['question']['teaching']}`,
            why_chain: [{why_chain_js}],
            points: {scene['question'].get('points', 10)}
        }}
    }}"""
        scenes_js.append(scene_js)
    
    scenes_array = ',\n    '.join(scenes_js)
    
    # Build references
    refs_html = ''
    for ref in case_def.get('references', []):
        refs_html += f'<a href="{ref["url"]}" target="_blank" rel="noopener">{_esc_html(ref["title"])}</a>\n'
    
    # Build cross-links
    mechanism = case_def.get('mechanism', '')
    deep_dive = case_def.get('deepDive', '')
    
    cross_links_html = ''
    if mechanism:
        cross_links_html += f'<a href="../modules/{mechanism}" class="rdx-crossplatform-link">🧬 Mechanism Module</a>\n'
    if deep_dive:
        cross_links_html += f'<a href="../deep-dive-player.html?module={deep_dive}" class="rdx-crossplatform-link">📖 Deep Dive</a>\n'
    cross_links_html += '<a href="../board-prep.html" class="rdx-crossplatform-link">📝 Board Prep</a>\n'
    cross_links_html += '<a href="../training.html" class="rdx-crossplatform-link">🏋️ Training Hub</a>\n'
    
    page_html = f"""<!DOCTYPE html>
<html data-theme="light" lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#0f766e">
<meta name="description" content="{_esc_attr(title)}. Interactive Socratic clinical case with guided reasoning on ReasonDx.">
<link rel="manifest" href="../manifest.json">
<link rel="apple-touch-icon" href="../icons/apple-touch-icon.png">
<link rel="stylesheet" href="../mobile.css">
<title>{_esc_html(title)} | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font-family:var(--rdx-font);background:var(--rdx-bg,#f8fafc);min-height:100vh;color:var(--rdx-text,#1e293b)}}
.container{{max-width:800px;margin:0 auto;padding:20px}}
.progress-bar{{background:var(--rdx-border,#e2e8f0);border-radius:8px;height:6px;margin-bottom:24px;overflow:hidden}}
.progress-fill{{background:linear-gradient(90deg,#0d9488,#14b8a6);height:100%;border-radius:8px;transition:width 0.5s}}
.score-tracker{{position:fixed;top:12px;right:60px;background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:8px 16px;z-index:50;box-shadow:0 2px 8px rgba(0,0,0,0.08);display:flex;align-items:center;gap:8px;font-size:14px}}
.score-label{{color:var(--rdx-text-muted,#64748b);font-size:12px}}
.score-value{{font-weight:700;color:var(--rdx-teal,#0d9488);font-size:18px}}
.difficulty-panel{{text-align:center;margin-bottom:20px}}
.diff-btn{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:6px 14px;cursor:pointer;font-size:13px;font-weight:500;color:var(--rdx-text-muted,#64748b);transition:all 0.2s}}
.diff-btn.active{{background:var(--rdx-teal,#0d9488);color:#fff;border-color:var(--rdx-teal,#0d9488)}}
.diff-btn:hover{{border-color:var(--rdx-teal,#0d9488)}}
.scene-title{{font-family:var(--rdx-font-serif);font-size:1.6rem;color:var(--rdx-teal-dark,#0f766e);margin-bottom:16px}}
.narrative{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:20px;margin-bottom:16px;line-height:1.7}}
.narrative .highlight{{background:rgba(13,148,136,0.1);padding:2px 6px;border-radius:4px;font-weight:600}}
.narrative .critical{{background:rgba(220,38,38,0.1);color:#dc2626;padding:2px 6px;border-radius:4px;font-weight:600}}
.vital-signs{{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin:12px 0;padding:12px;background:rgba(13,148,136,0.04);border-radius:8px;border:1px solid rgba(13,148,136,0.1)}}
.vital-item{{text-align:center;font-size:13px}}.vital-item .label{{color:var(--rdx-text-muted,#64748b);font-size:11px;display:block}}.vital-item .value{{font-weight:700;color:var(--rdx-teal-dark,#0f766e)}}
.socratic-prompt{{background:linear-gradient(135deg,rgba(124,58,237,0.06),rgba(13,148,136,0.06));border:1px solid rgba(124,58,237,0.15);border-radius:12px;padding:16px 20px;margin:16px 0}}
.socratic-prompt h4{{color:var(--rdx-purple,#7c3aed);font-size:0.95rem;margin-bottom:8px}}
.hint-box{{background:rgba(217,119,6,0.06);border:1px solid rgba(217,119,6,0.15);border-radius:8px;padding:12px;margin:8px 0;font-size:0.9rem;color:#92400e;display:none}}
.options-grid{{display:grid;gap:10px;margin:16px 0}}
.option-btn{{background:var(--rdx-bg-card,#fff);border:2px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:14px 18px;cursor:pointer;text-align:left;font-size:14px;transition:all 0.2s;font-family:var(--rdx-font)}}
.option-btn:hover{{border-color:var(--rdx-teal,#0d9488);background:rgba(13,148,136,0.03)}}
.option-btn.correct{{border-color:#16a34a;background:rgba(22,163,74,0.06)}}
.option-btn.incorrect{{border-color:#dc2626;background:rgba(220,38,38,0.04)}}
.option-btn.disabled{{pointer-events:none;opacity:0.7}}
.explanation-box{{border-radius:12px;padding:16px;margin:12px 0;display:none}}
.explanation-box.correct{{background:rgba(22,163,74,0.06);border:1px solid rgba(22,163,74,0.2)}}
.explanation-box.incorrect{{background:rgba(220,38,38,0.04);border:1px solid rgba(220,38,38,0.15)}}
.mechanism-box{{background:linear-gradient(135deg,rgba(13,148,136,0.06),rgba(13,148,136,0.02));border:1px solid rgba(13,148,136,0.15);border-radius:12px;padding:20px;margin:16px 0}}
.mechanism-title{{color:var(--rdx-teal-dark,#0f766e);font-weight:700;font-size:0.95rem;margin-bottom:10px}}
.pathway{{line-height:1.8;font-size:0.93rem;color:var(--rdx-text,#1e293b)}}
.why-chain{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:12px;margin:8px 0}}
.why-q{{font-weight:600;color:var(--rdx-purple,#7c3aed);cursor:pointer;font-size:0.9rem}}.why-a{{display:none;margin-top:6px;font-size:0.88rem;color:var(--rdx-text-muted,#64748b)}}
.next-btn{{background:linear-gradient(135deg,#0f766e,#0d9488);color:#fff;border:none;border-radius:12px;padding:14px 32px;font-size:15px;font-weight:600;cursor:pointer;margin:20px 0;display:none;font-family:var(--rdx-font)}}
.next-btn:hover{{opacity:0.9;transform:translateY(-1px)}}
.completion-card{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:16px;padding:32px;text-align:center;margin:24px 0}}
.completion-card h2{{font-family:var(--rdx-font-serif);color:var(--rdx-teal-dark,#0f766e);margin-bottom:12px}}
.references-panel{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:16px;margin:20px 0}}
.references-panel a{{display:block;color:var(--rdx-teal,#0d9488);font-size:13px;margin:4px 0;text-decoration:none;word-break:break-all}}
.references-panel a:hover{{text-decoration:underline}}
.rdx-crossplatform-nav{{background:var(--rdx-bg-card,#f8fafc);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px;padding:20px;margin:24px 0}}
.rdx-crossplatform-nav h4{{color:var(--rdx-text-muted,#64748b);margin-bottom:12px;font-size:0.9rem}}
.rdx-crossplatform-links{{display:flex;gap:12px;flex-wrap:wrap}}
.rdx-crossplatform-link{{background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;padding:12px 16px;text-decoration:none;color:var(--rdx-text,#1e293b);font-size:13px;font-weight:500;transition:all 0.2s}}
.rdx-crossplatform-link:hover{{background:rgba(13,148,136,0.05);transform:translateY(-2px)}}
@media(max-width:640px){{.score-tracker{{top:auto;bottom:12px;right:12px}}.container{{padding:12px}}.vital-signs{{grid-template-columns:repeat(3,1fr)}}}}
</style>
</head>
<body>
<div class="score-tracker"><div class="score-label">Score</div><div><span class="score-value" id="score">0</span> / <span id="maxScore">0</span></div></div>
<div class="container">
    <div style="margin-bottom:12px"><a href="../adventure-hub.html" style="color:var(--rdx-teal,#0d9488);text-decoration:none;font-size:14px;font-weight:600">← Back to Cases</a></div>
    <div class="progress-bar"><div class="progress-fill" id="progress" style="width:0%"></div></div>
    <div class="difficulty-panel"><div style="font-size:0.75rem;color:var(--rdx-text-muted,#64748b);margin-bottom:8px;font-weight:600">Difficulty</div>
        <button class="diff-btn" onclick="setDifficulty('beginner',this)">Beginner</button>
        <button class="diff-btn active" onclick="setDifficulty('standard',this)">Standard</button>
        <button class="diff-btn" onclick="setDifficulty('advanced',this)">Advanced</button>
    </div>
    <div class="references-panel" style="margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="toggleReferences()">
            <span>📚 Open-Access References</span><span id="refToggle">▸</span>
        </div>
        <div id="referencesContent" style="display:none;margin-top:8px">
{refs_html}        </div>
    </div>
    <div id="scene-container"></div>
    <div class="rdx-crossplatform-nav">
        <h4>🔗 Continue Learning</h4>
        <div class="rdx-crossplatform-links">
{cross_links_html}        </div>
    </div>
</div>
<script>
let currentStage=0,score=0,difficulty='standard';
const stages=[
    {scenes_array}
];
document.getElementById('maxScore').textContent=stages.reduce((s,st)=>s+(st.question?st.question.points:0),0);
function setDifficulty(d,btn){{difficulty=d;document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');const hb=document.querySelector('.hint-box');if(hb)hb.style.display=d==='beginner'?'block':'none'}}
function toggleReferences(){{const c=document.getElementById('referencesContent');const t=document.getElementById('refToggle');if(c.style.display==='none'){{c.style.display='block';t.textContent='▾'}}else{{c.style.display='none';t.textContent='▸'}}}}
function renderStage(idx){{if(idx>=stages.length){{showCompletion();return}}const st=stages[idx];const pct=((idx)/stages.length*100);document.getElementById('progress').style.width=pct+'%';let h='<h2 class="scene-title">'+st.title+'</h2>';h+='<div class="scene-content">'+st.content+'</div>';if(st.hint_beginner)h+='<div class="hint-box" id="hint-box"'+(difficulty==='beginner'?' style="display:block"':'')+'>💡 '+st.hint_beginner+'</div>';if(difficulty==='advanced'&&st.hint_advanced)h+='<div class="hint-box" style="display:block;background:rgba(124,58,237,0.06);border-color:rgba(124,58,237,0.15);color:#5b21b6">🎓 '+st.hint_advanced+'</div>';if(st.question){{h+='<div class="socratic-prompt"><h4>Clinical Question</h4><p>'+st.question.prompt+'</p></div>';h+='<div class="options-grid" id="options-'+idx+'">';st.question.options.forEach((opt,oi)=>{{h+='<button class="option-btn" id="option-'+idx+'-'+oi+'" onclick="checkAnswer('+idx+','+oi+')">'+String.fromCharCode(65+oi)+'. '+opt.text+'</button>'}});h+='</div>';h+='<div class="explanation-box" id="explain-'+idx+'"></div>';h+='<div id="teaching-'+idx+'" style="display:none">'+st.question.teaching+'</div>';if(st.question.why_chain&&st.question.why_chain.length>0){{h+='<div id="why-'+idx+'" style="display:none">';st.question.why_chain.forEach((wc,wi)=>{{h+='<div class="why-chain"><div class="why-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\\'none\\'?\\'block\\':\\'none\\'">🔍 '+wc.q+'</div><div class="why-a">'+wc.a+'</div></div>'}});h+='</div>'}}}}h+='<button class="next-btn" id="next-'+idx+'" onclick="nextStage()">Continue →</button>';document.getElementById('scene-container').innerHTML=h}}
function checkAnswer(si,oi){{const st=stages[si];const opt=st.question.options[oi];document.querySelectorAll('#options-'+si+' .option-btn').forEach((b,i)=>{{b.classList.add('disabled');if(st.question.options[i].correct)b.classList.add('correct');if(i===oi&&!opt.correct)b.classList.add('incorrect')}});const eb=document.getElementById('explain-'+si);if(opt.correct){{score+=st.question.points;document.getElementById('score').textContent=score;eb.className='explanation-box correct';eb.innerHTML='<strong>✓ Correct!</strong> '+st.question.explanation.correct}}else{{eb.className='explanation-box incorrect';eb.innerHTML='<strong>✗ Not quite.</strong> '+st.question.explanation.incorrect}}eb.style.display='block';document.getElementById('teaching-'+si).style.display='block';const why=document.getElementById('why-'+si);if(why)why.style.display='block';document.getElementById('next-'+si).style.display='inline-block'}}
function nextStage(){{currentStage++;renderStage(currentStage);window.scrollTo({{top:0,behavior:'smooth'}})}}
function showCompletion(){{const mx=stages.reduce((s,st)=>s+(st.question?st.question.points:0),0);const pct=mx>0?Math.round(score/mx*100):0;document.getElementById('progress').style.width='100%';let lvl='Developing';if(pct>=90)lvl='Mastery';else if(pct>=70)lvl='Proficient';else if(pct>=50)lvl='Competent';document.getElementById('scene-container').innerHTML='<div class="completion-card"><h2>🎉 Case Complete!</h2><p style="font-size:2rem;font-weight:700;color:var(--rdx-teal,#0d9488)">'+pct+'%</p><p style="color:var(--rdx-text-muted,#64748b)">Score: '+score+'/'+mx+'</p><p style="margin:12px 0;font-weight:600">Level: '+lvl+'</p><div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><a href="../adventure-hub.html" style="padding:10px 20px;background:var(--rdx-teal,#0d9488);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">More Cases</a><a href="../tools/learning-dashboard.html" style="padding:10px 20px;background:var(--rdx-purple,#7c3aed);color:#fff;border-radius:8px;text-decoration:none;font-weight:600">📊 Dashboard</a><button onclick="currentStage=0;score=0;document.getElementById(\\'score\\').textContent=0;renderStage(0)" style="padding:10px 20px;background:var(--rdx-bg-card,#fff);border:1px solid var(--rdx-border,#e2e8f0);border-radius:8px;cursor:pointer;font-weight:600">🔄 Retry</button></div></div>';try{{const progress=JSON.parse(localStorage.getItem('reasondx-progress')||'{{}}');if(!progress.cases)progress.cases={{}};progress.cases['{topic_key}']=Math.max(progress.cases['{topic_key}']||0,pct);localStorage.setItem('reasondx-progress',JSON.stringify(progress))}}catch(e){{}}}}
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
</html>"""
    
    return filename, page_html


def _esc(s):
    """Escape for JS string (double quotes)"""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('`', '\\`')

def _esc_html(s):
    return html.escape(s)

def _esc_attr(s):
    return html.escape(s, quote=True)


if __name__ == '__main__':
    # Read case definitions
    with open('data/case-definitions.json', 'r') as f:
        cases = json.load(f)
    
    output_dir = 'cases'
    generated = 0
    
    for case_def in cases:
        filename, html_content = generate_case_html(case_def)
        filepath = os.path.join(output_dir, filename)
        
        # Don't overwrite existing cases
        if os.path.exists(filepath):
            print(f"  SKIP (exists): {filename}")
            continue
        
        with open(filepath, 'w') as f:
            f.write(html_content)
        generated += 1
        print(f"  ✓ Generated: {filename}")
    
    print(f"\nGenerated {generated} new cases")
