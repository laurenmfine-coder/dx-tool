import json, os, html, sys, re

def escape(text):
    return html.escape(str(text)).replace("'", "&#39;").replace('"', '&quot;')

def plain(text):
    """Strip markdown bold/bullets for plain text contexts"""
    t = str(text)
    t = re.sub(r'\*\*(.+?)\*\*', r'\1', t)
    t = re.sub(r'^\s*[•\-]\s*', '', t, flags=re.MULTILINE)
    return t.strip()

def generate_module(dd_path, output_path, title_override=None):
    with open(dd_path) as f:
        dd = json.load(f)
    
    title = title_override or dd.get('title', 'Module')
    category = dd.get('category', 'Clinical Medicine')
    sections = dd.get('sections', [])
    mcqs = dd.get('mcqs', []) or dd.get('reviewQuestions', [])
    key_takeaways = dd.get('keyTakeaways', [])
    references = dd.get('references', [])
    
    # Build stages from sections + MCQs
    # Take up to 5 sections for content, then interleave MCQs
    content_sections = sections[:6]
    total_stages = len(content_sections) + 1  # +1 for summary
    
    # Extract MCQ data - handle both formats
    parsed_mcqs = []
    for q in mcqs[:len(content_sections)]:
        if 'stem' in q:
            # mcqs format
            opts = q.get('options', [])
            correct_letter = q.get('correct_answer', 'A')
            correct_idx = ord(correct_letter) - ord('A') if isinstance(correct_letter, str) else 0
            parsed_mcqs.append({
                'question': q['stem'],
                'options': [o.get('text','') if isinstance(o,dict) else str(o) for o in opts],
                'correct': correct_idx,
                'explanation': q.get('rpfs',{}).get('teaching','') or (opts[correct_idx].get('explanation','') if correct_idx < len(opts) and isinstance(opts[correct_idx], dict) else '')
            })
        elif 'question' in q:
            # reviewQuestions format
            opts = q.get('options', [])
            correct_idx = q.get('correct', 0)
            parsed_mcqs.append({
                'question': q['question'],
                'options': [str(o) for o in opts],
                'correct': correct_idx,
                'explanation': q.get('explanation', '')
            })
    
    # CSS + Header
    module_html = f'''<!DOCTYPE html><html lang="en"><head><script>(function(){{var K="reasondx-user";function g(){{var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/login.html"}}function a(){{try{{var u=localStorage.getItem(K);if(u){{var j=JSON.parse(u);return j&&j.email&&j.name}}}}catch(e){{}}return false}}if(!a()){{sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}}}})();</script><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>{escape(title)} | ReasonDx Module</title><style>:root{{--bg:#0F172A;--card:#1E293B;--border:#334155;--text:#F1F5F9;--muted:#94A3B8;--accent:#3B82F6;--success:#10B981;--danger:#DC2626;--info:#8B5CF6}}*{{box-sizing:border-box;margin:0;padding:0}}body{{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;line-height:1.6}}.header{{background:linear-gradient(135deg,#1E3A5F,#3B82F6);padding:12px 20px;position:sticky;top:0;z-index:100;color:#fff}}.header-row{{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto;flex-wrap:wrap;gap:8px}}.header-title{{font-size:1.1rem;font-weight:600}}.badge{{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px}}.stats{{display:flex;gap:12px}}.stat{{text-align:center;background:rgba(0,0,0,.2);padding:6px 14px;border-radius:8px}}.stat-value{{font-size:1.1rem;font-weight:700;font-family:monospace}}.stat-label{{font-size:.6rem;opacity:.8}}.main{{max-width:900px;margin:0 auto;padding:24px}}.progress-bar{{height:6px;background:rgba(255,255,255,.1);border-radius:3px;margin-bottom:20px}}.progress-fill{{height:100%;background:var(--accent);border-radius:3px;transition:width .3s}}.card{{background:var(--card);border:1px solid var(--border);border-radius:16px;margin-bottom:20px}}.card-header{{padding:20px 24px;border-bottom:1px solid var(--border)}}.card-phase{{font-size:.75rem;color:var(--accent);text-transform:uppercase;letter-spacing:1px}}.card-title{{font-size:1.5rem;font-weight:700;margin-top:4px}}.card-body{{padding:24px}}.narrative{{background:linear-gradient(135deg,rgba(59,130,246,.1),rgba(139,92,246,.1));border-left:4px solid var(--accent);padding:20px;border-radius:0 12px 12px 0;margin-bottom:20px;white-space:pre-line}}.hl{{background:rgba(59,130,246,.3);padding:2px 6px;border-radius:4px;font-weight:500}}.choices{{display:grid;gap:12px;margin-top:20px}}.choice{{background:var(--card);border:2px solid var(--border);padding:16px;border-radius:12px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .2s}}.choice:hover{{border-color:var(--accent);transform:translateX(4px)}}.choice.correct{{border-color:var(--success);background:rgba(16,185,129,.2);pointer-events:none}}.choice.wrong{{border-color:var(--danger);background:rgba(220,38,38,.2);pointer-events:none}}.choice-icon{{font-size:1.5rem}}.choice-title{{font-weight:600}}.teaching{{background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.3);border-radius:12px;padding:16px;margin:20px 0}}.teaching h4{{color:var(--info);margin-bottom:8px}}.alert{{padding:16px;border-radius:12px;margin:20px 0;display:flex;gap:12px}}.alert.info{{background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.3)}}.btn{{padding:12px 24px;border-radius:10px;font-weight:600;cursor:pointer;border:none;font-size:1rem}}.btn-primary{{background:var(--accent);color:#fff}}.btn:hover{{opacity:.9}}.hidden{{display:none!important}}.cross-links{{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:20px}}.cross-link{{padding:14px;background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.3);border-radius:10px;text-decoration:none;color:var(--text)}}.cross-link:hover{{border-color:var(--accent)}}.cross-link-title{{font-weight:600;font-size:.9rem}}@media(max-width:480px){{.main{{padding:12px}}.card-body{{padding:16px}}}}</style><script src="../dx-user-bar.js" defer></script>
</head><body>
<div class="header"><div class="header-row"><div class="header-title">&#128218; {escape(title)}<span class="badge">{escape(category.upper())}</span></div><div class="stats"><div class="stat"><div class="stat-value" id="score">0</div><div class="stat-label">Score</div></div><div class="stat"><div class="stat-value" id="stageNum">1/{total_stages}</div><div class="stat-label">Stage</div></div></div></div></div>
<div class="main"><div class="progress-bar"><div class="progress-fill" id="progress" style="width:{round(1/total_stages*100)}%"></div></div>'''

    icons = ['&#127973;','&#128300;','&#128202;','&#9888;','&#128161;','&#127891;','&#128736;']
    choice_icons = ['&#128994;','&#128308;','&#128309;','&#128993;']
    
    for idx, sec in enumerate(content_sections):
        stage_num = idx + 1
        sec_title = sec.get('title', f'Section {stage_num}')
        sec_content = plain(sec.get('content', ''))
        
        # Truncate very long content to first ~500 chars
        if len(sec_content) > 600:
            # Find a sentence break
            cutoff = sec_content[:600].rfind('.')
            if cutoff > 200:
                sec_content = sec_content[:cutoff+1]
        
        icon = icons[idx % len(icons)]
        hidden = ' hidden' if idx > 0 else ''
        
        # Build MCQ for this stage if available
        mcq_html = ''
        if idx < len(parsed_mcqs):
            q = parsed_mcqs[idx]
            mcq_html = f'<div class="alert info"><div style="font-size:1.5rem">&#129300;</div><div><div style="font-weight:600">{escape(q["question"][:300])}</div></div></div><div class="choices">'
            for oi, opt in enumerate(q['options'][:4]):
                is_correct = 'true' if oi == q['correct'] else 'false'
                opt_text = plain(opt)
                if isinstance(opt, dict):
                    opt_text = opt.get('text', str(opt))
                fb_text = escape(plain(q['explanation'][:300])) if oi == q['correct'] else 'Not quite. Review the teaching point below.'
                ci = choice_icons[oi % 4]
                mcq_html += f'<div class="choice" data-correct="{is_correct}" data-fb="{fb_text}" onclick="pick(this,{stage_num})"><div class="choice-icon">{ci}</div><div><div class="choice-title">{escape(opt_text[:150])}</div></div></div>\n'
            mcq_html += f'</div><div id="fb{stage_num}" class="hidden"><div id="fbText{stage_num}" style="padding:12px;border-radius:8px;margin-bottom:12px"></div>'
            mcq_html += f'<div class="teaching"><h4>Teaching Point</h4><p>{escape(plain(sec_content[:400]))}</p></div>'
            mcq_html += f'<div style="text-align:right;margin-top:16px"><button class="btn btn-primary" onclick="next({stage_num+1})">Continue &#8594;</button></div></div>'
        else:
            mcq_html = f'<div class="teaching"><h4>Key Concepts</h4><p>{escape(plain(sec_content[:500]))}</p></div>'
            mcq_html += f'<div style="text-align:right;margin-top:16px"><button class="btn btn-primary" onclick="next({stage_num+1})">Continue &#8594;</button></div>'
        
        module_html += f'''
<div id="s{stage_num}" class="stage{hidden}"><div class="card"><div class="card-header"><div class="card-phase">Stage {stage_num} of {total_stages}</div><div class="card-title">{icon} {escape(sec_title)}</div></div><div class="card-body"><div class="narrative">{escape(plain(sec_content[:300]))}</div>{mcq_html}</div></div></div>'''

    # Final summary stage
    summary_num = len(content_sections) + 1
    takeaways_html = ''
    for kt in key_takeaways[:8]:
        takeaways_html += f'<div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)"><span style="color:var(--success)">&#10003;</span><span>{escape(plain(kt[:200]))}</span></div>\n'
    
    refs_html = '<div class="cross-links">'
    for ref in references[:4]:
        if isinstance(ref, dict):
            url = ref.get('url','#')
            cite = ref.get('citation', ref.get('title','Reference'))[:100]
            refs_html += f'<a href="{escape(url)}" target="_blank" class="cross-link"><div class="cross-link-title">&#128196; {escape(cite)}</div></a>\n'
    refs_html += '</div>'
    
    module_html += f'''
<div id="s{summary_num}" class="stage hidden"><div class="card"><div class="card-header"><div class="card-phase">Stage {summary_num} of {total_stages}</div><div class="card-title">&#127891; Summary &amp; Key Takeaways</div></div><div class="card-body"><h3 style="color:var(--accent);margin:0 0 12px">Key Takeaways</h3>{takeaways_html}<h3 style="color:var(--info);margin:24px 0 12px">References</h3>{refs_html}<div style="text-align:center;margin-top:30px"><div style="font-size:4rem">&#127891;</div><div style="font-size:2rem;font-weight:700;color:var(--success);margin:16px 0">Module Complete!</div><p style="color:var(--muted);margin-bottom:20px">Score: <span id="finalScore">0</span> / {len(parsed_mcqs)*100}</p><button class="btn btn-primary" onclick="location.reload()">Restart</button></div></div></div></div>'''

    # JavaScript
    crt_id = os.path.basename(output_path).replace('.html','')
    module_html += f'''
<script>let score=0,total={total_stages};const crtId='{crt_id}';function pick(el,sn){{const all=el.parentElement.querySelectorAll('.choice');all.forEach(c=>{{c.style.pointerEvents='none';c.style.opacity='.6'}});el.style.opacity='1';const correct=el.dataset.correct==='true';el.classList.add(correct?'correct':'wrong');if(correct){{score+=100;document.getElementById('score').textContent=score;try{{var cs=JSON.parse(localStorage.getItem('crtScores')||'{{}}');if(!cs[crtId])cs[crtId]={{attempts:0,best:0,last:null}};cs[crtId].last=new Date().toISOString();var pts=score/100;if(pts>cs[crtId].best)cs[crtId].best=pts;localStorage.setItem('crtScores',JSON.stringify(cs))}}catch(e){{}}}}if(!correct){{all.forEach(c=>{{if(c.dataset.correct==='true')c.classList.add('correct')}})}}const fbDiv=document.getElementById('fbText'+sn);if(fbDiv){{fbDiv.style.background=correct?'rgba(16,185,129,.15)':'rgba(220,38,38,.15)';fbDiv.style.border='1px solid '+(correct?'rgba(16,185,129,.3)':'rgba(220,38,38,.3)');fbDiv.innerHTML=(correct?'&#9989; ':'&#10060; ')+el.dataset.fb;document.getElementById('fb'+sn).classList.remove('hidden')}}}}function next(n){{document.querySelectorAll('.stage').forEach(s=>s.classList.add('hidden'));document.getElementById('s'+n).classList.remove('hidden');document.getElementById('stageNum').textContent=n+'/'+total;document.getElementById('progress').style.width=Math.round(n/total*100)+'%';window.scrollTo(0,0);if(n===total){{document.getElementById('finalScore').textContent=score;try{{var cs=JSON.parse(localStorage.getItem('crtScores')||'{{}}');if(!cs[crtId])cs[crtId]={{attempts:0,best:0,last:null}};cs[crtId].attempts++;cs[crtId].completed=true;cs[crtId].last=new Date().toISOString();var pts=score/100;if(pts>cs[crtId].best)cs[crtId].best=pts;localStorage.setItem('crtScores',JSON.stringify(cs))}}catch(e){{}}}}}}</script>
<script src="../data/rdx-persist.js"></script>
<script src="../js/dx-universal-nav.js"></script>
</body></html>'''

    with open(output_path, 'w') as f:
        f.write(module_html)
    
    return len(module_html)

if __name__ == '__main__':
    dd_path = sys.argv[1]
    output_path = sys.argv[2]
    title = sys.argv[3] if len(sys.argv) > 3 else None
    size = generate_module(dd_path, output_path, title)
    print(f"Generated: {output_path} ({size} bytes)")
