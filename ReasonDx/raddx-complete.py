#!/usr/bin/env python3
"""
raddx-complete.py — Create remaining RadDx pages + inject imaging into existing content
"""
import os, json, glob, re, html as html_mod

ROOT = '/home/claude/reasondx'

# ============================================================
# 1. REMAINING BODY SYSTEM PAGES (smaller systems)
# ============================================================

def create_msk_page():
    return """<!DOCTYPE html>
<html data-theme="light" lang="en"><head>
<script>(function(){var K="reasondx-user";function g(){var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/login.html"}function a(){try{var u=localStorage.getItem(K);if(u){var j=JSON.parse(u);return j&&j.email&&j.name}}catch(e){}return false}if(!a()){sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}})();</script>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RadDx: Musculoskeletal | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>body{font-family:'DM Sans',sans-serif;background:var(--rdx-bg);color:var(--rdx-text);line-height:1.7}.header{background:linear-gradient(135deg,#0f766e,#0d9488);padding:12px 20px;position:sticky;top:56px;z-index:100}.header-row{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto;flex-wrap:wrap;gap:8px}.header-title{font-size:1.1rem;font-weight:600;color:#fff}.badge{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px;color:#fff}.nav-back{color:rgba(255,255,255,.8);text-decoration:none;font-size:.85rem}.main{max-width:900px;margin:0 auto;padding:24px}.scenario{background:var(--rdx-bg-card);border:1px solid var(--rdx-border);border-radius:16px;margin-bottom:24px;overflow:hidden}.scenario-header{padding:20px 24px;border-bottom:1px solid var(--rdx-border);display:flex;align-items:center;gap:12px}.scenario-num{width:32px;height:32px;background:var(--rdx-teal);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0}.scenario-title{font-size:1.1rem;font-weight:700}.scenario-modality{font-size:.75rem;color:var(--rdx-teal);font-weight:600;text-transform:uppercase;letter-spacing:.5px}.scenario-body{padding:24px}.vignette{background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:12px;padding:16px 20px;margin-bottom:20px;font-size:.95rem;line-height:1.7}.vignette strong{color:var(--rdx-teal-dark)}.reasoning-step{margin-bottom:20px}.step-label{display:flex;align-items:center;gap:8px;margin-bottom:10px}.step-badge{padding:3px 10px;border-radius:4px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff}.step-badge.order{background:#7c3aed}.step-badge.expect{background:#2563eb}.step-badge.interpret{background:#0d9488}.step-badge.integrate{background:#dc2626}.step-question{font-weight:600;font-size:.95rem}.choices{display:grid;gap:10px;margin-top:12px}.choice{background:var(--rdx-bg-card);border:2px solid var(--rdx-border);padding:12px 16px;border-radius:10px;cursor:pointer;display:flex;align-items:flex-start;gap:10px;transition:all .2s;font-size:.9rem}.choice:hover{border-color:var(--rdx-teal);transform:translateX(3px)}.choice.correct{border-color:var(--rdx-success);background:rgba(22,163,74,.08);pointer-events:none}.choice.wrong{border-color:var(--rdx-danger);background:rgba(220,38,38,.08);pointer-events:none}.choice-letter{font-weight:700;min-width:20px;color:var(--rdx-teal)}.reveal{display:none;margin-top:12px;padding:16px;border-radius:10px;font-size:.9rem;line-height:1.6}.reveal.shown{display:block}.reveal.teaching{background:linear-gradient(135deg,rgba(13,148,136,.08),rgba(20,184,166,.08));border-left:4px solid var(--rdx-teal)}.reveal.danger{background:linear-gradient(135deg,rgba(220,38,38,.08),rgba(239,68,68,.08));border-left:4px solid var(--rdx-danger)}.reveal.pearl{background:linear-gradient(135deg,rgba(124,58,237,.08),rgba(168,85,247,.08));border-left:4px solid #7c3aed}.reveal h4{font-size:.85rem;color:var(--rdx-teal-dark);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px}.radiopaedia-link{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:var(--rdx-teal-50);border:1px solid var(--rdx-teal);border-radius:8px;color:var(--rdx-teal-dark);text-decoration:none;font-size:.85rem;font-weight:600;margin-top:12px;transition:all .2s}.radiopaedia-link:hover{background:var(--rdx-teal);color:#fff}.cross-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:32px}.cross-link{padding:12px 16px;background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:10px;text-decoration:none;color:var(--rdx-text);font-size:.9rem;font-weight:600;transition:all .15s}.cross-link:hover{border-color:var(--rdx-teal)}@media(max-width:640px){.main{padding:16px}.scenario-body{padding:16px}}</style>
</head><body>

<div class="header"><div class="header-row">
  <div class="header-title">🦴 RadDx: Musculoskeletal<span class="badge">ORTHOPEDICS</span></div>
  <a href="raddx-hub.html" class="nav-back">← Back to RadDx Hub</a>
</div></div>

<div class="main">

<div class="scenario"><div class="scenario-header"><div class="scenario-num">1</div><div><div class="scenario-modality">X-ray → MRI</div><div class="scenario-title">Hip Fracture</div></div></div>
<div class="scenario-body">
<div class="vignette">An <strong>82-year-old female</strong> with osteoporosis falls at home and is unable to bear weight. Exam: <strong>shortened, externally rotated left leg</strong> with groin pain. She takes warfarin for atrial fibrillation.</div>

<div class="reasoning-step"><div class="step-label"><span class="step-badge order">ORDER</span><span class="step-question">What imaging do you order first?</span></div>
<div class="choices" data-correct="A">
<div class="choice" data-val="A"><span class="choice-letter">A.</span><span>AP pelvis and lateral hip X-ray</span></div>
<div class="choice" data-val="B"><span class="choice-letter">B.</span><span>CT pelvis</span></div>
<div class="choice" data-val="C"><span class="choice-letter">C.</span><span>MRI hip</span></div>
<div class="choice" data-val="D"><span class="choice-letter">D.</span><span>Bone scan</span></div>
</div>
<div class="reveal teaching" data-for="A"><h4>X-ray First, MRI for Occult Fractures</h4><p><strong>AP pelvis + cross-table lateral hip</strong> is the initial study — fast, available, and detects ~95% of hip fractures. Look for disruption of Shenton's line, cortical break at the femoral neck, or intertrochanteric fracture lines. If X-ray is NEGATIVE but clinical suspicion remains high (pain with passive rotation, unable to bear weight), get <strong>MRI</strong> — it detects occult fractures that X-ray misses. CT is second-line if MRI is unavailable or contraindicated. Bone scan is older technology and delays diagnosis by 24-72h.</p></div></div>

<div class="reasoning-step"><div class="step-label"><span class="step-badge integrate">INTEGRATE</span><span class="step-question">X-ray shows a displaced femoral neck fracture (Garden III). How does fracture classification guide surgery?</span></div>
<div class="choices" data-correct="B">
<div class="choice" data-val="A"><span class="choice-letter">A.</span><span>All hip fractures get the same operation</span></div>
<div class="choice" data-val="B"><span class="choice-letter">B.</span><span>Displaced femoral neck → hemiarthroplasty/total hip; non-displaced → internal fixation; intertrochanteric → ORIF</span></div>
<div class="choice" data-val="C"><span class="choice-letter">C.</span><span>Conservative management with bed rest</span></div>
<div class="choice" data-val="D"><span class="choice-letter">D.</span><span>Fracture type doesn't affect surgical approach</span></div>
</div>
<div class="reveal teaching" data-for="B"><h4>Imaging Classification Determines Surgery</h4><p>The X-ray finding directly determines the surgical approach: <strong>Displaced femoral neck fracture (Garden III-IV)</strong> in elderly patients → hemiarthroplasty or total hip arthroplasty (blood supply to femoral head is disrupted → high risk of avascular necrosis with fixation alone). <strong>Non-displaced femoral neck (Garden I-II)</strong> → percutaneous screw fixation. <strong>Intertrochanteric fractures</strong> → sliding hip screw or intramedullary nail (ORIF). In this patient on warfarin, INR must be corrected before surgery, and surgical timing within 24-48h reduces mortality.</p></div></div>

<a href="https://radiopaedia.org/articles/hip-fracture" target="_blank" rel="noopener" class="radiopaedia-link">📖 Explore Hip Fracture Cases on Radiopaedia →</a>
</div></div>

<div class="scenario"><div class="scenario-header"><div class="scenario-num">2</div><div><div class="scenario-modality">Clinical Diagnosis</div><div class="scenario-title">Compartment Syndrome</div></div></div>
<div class="scenario-body">
<div class="vignette">A <strong>24-year-old male</strong> sustains a tibial shaft fracture in a skiing accident. 6 hours later, he develops <strong>pain out of proportion to the injury</strong>, pain with passive stretch of the toes, and the anterior compartment feels tense and firm. Pedal pulses are PRESENT.</div>

<div class="reasoning-step"><div class="step-label"><span class="step-badge order">ORDER</span><span class="step-question">What is the most important next step?</span></div>
<div class="choices" data-correct="D">
<div class="choice" data-val="A"><span class="choice-letter">A.</span><span>MRI to assess compartment swelling</span></div>
<div class="choice" data-val="B"><span class="choice-letter">B.</span><span>CT angiography to assess perfusion</span></div>
<div class="choice" data-val="C"><span class="choice-letter">C.</span><span>Repeat X-ray of the tibia</span></div>
<div class="choice" data-val="D"><span class="choice-letter">D.</span><span>Emergent fasciotomy — do NOT delay for imaging. Measure compartment pressures only if exam is equivocal.</span></div>
</div>
<div class="reveal danger" data-for="D"><h4>Another "Don't Image" Decision</h4><p><strong>Compartment syndrome is a clinical diagnosis and surgical emergency.</strong> The 6 P's (Pain out of proportion, Pressure, Pain with passive stretch, Paresthesias, Paralysis, Pulselessness) — but waiting for all 6 means irreversible damage. Pulses are often PRESENT until very late. If the clinical picture is clear (as here), proceed to <strong>fasciotomy within 6 hours</strong>. Compartment pressure measurement (>30 mmHg, or within 30 of diastolic BP) is only needed when the clinical exam is equivocal (obtunded patient, unclear symptoms). Imaging DELAYS definitive treatment and can cause limb loss.</p></div></div>

<a href="https://radiopaedia.org/articles/acute-compartment-syndrome" target="_blank" rel="noopener" class="radiopaedia-link">📖 Explore Compartment Syndrome on Radiopaedia →</a>
</div></div>

<div class="cross-links">
  <a href="raddx-hub.html" class="cross-link">← RadDx Hub</a>
  <a href="raddx-chest.html" class="cross-link">Chest Imaging</a>
  <a href="raddx-renal-gu.html" class="cross-link">Renal & GU Imaging</a>
  <a href="raddx-peds.html" class="cross-link">Pediatric Imaging</a>
</div>
</div>

<script>
document.querySelectorAll('.choices').forEach(group => {
  const correct = group.dataset.correct;
  group.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
      if (group.classList.contains('answered')) return;
      group.classList.add('answered');
      const val = choice.dataset.val;
      if (val === correct) choice.classList.add('correct');
      else { choice.classList.add('wrong'); group.querySelector(`[data-val="${correct}"]`).classList.add('correct'); }
      const reveal = group.parentElement.querySelector(`.reveal[data-for="${correct}"]`);
      if (reveal) reveal.classList.add('shown');
    });
  });
});
</script>
<script src="../js/rdx-nav.js" defer></script>
</body></html>"""

def create_renal_gu_page():
    return """<!DOCTYPE html>
<html data-theme="light" lang="en"><head>
<script>(function(){var K="reasondx-user";function g(){var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/login.html"}function a(){try{var u=localStorage.getItem(K);if(u){var j=JSON.parse(u);return j&&j.email&&j.name}}catch(e){}return false}if(!a()){sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}})();</script>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RadDx: Renal & GU | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>body{font-family:'DM Sans',sans-serif;background:var(--rdx-bg);color:var(--rdx-text);line-height:1.7}.header{background:linear-gradient(135deg,#0f766e,#0d9488);padding:12px 20px;position:sticky;top:56px;z-index:100}.header-row{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto;flex-wrap:wrap;gap:8px}.header-title{font-size:1.1rem;font-weight:600;color:#fff}.badge{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px;color:#fff}.nav-back{color:rgba(255,255,255,.8);text-decoration:none;font-size:.85rem}.main{max-width:900px;margin:0 auto;padding:24px}.scenario{background:var(--rdx-bg-card);border:1px solid var(--rdx-border);border-radius:16px;margin-bottom:24px;overflow:hidden}.scenario-header{padding:20px 24px;border-bottom:1px solid var(--rdx-border);display:flex;align-items:center;gap:12px}.scenario-num{width:32px;height:32px;background:var(--rdx-teal);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0}.scenario-title{font-size:1.1rem;font-weight:700}.scenario-modality{font-size:.75rem;color:var(--rdx-teal);font-weight:600;text-transform:uppercase;letter-spacing:.5px}.scenario-body{padding:24px}.vignette{background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:12px;padding:16px 20px;margin-bottom:20px;font-size:.95rem;line-height:1.7}.vignette strong{color:var(--rdx-teal-dark)}.reasoning-step{margin-bottom:20px}.step-label{display:flex;align-items:center;gap:8px;margin-bottom:10px}.step-badge{padding:3px 10px;border-radius:4px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff}.step-badge.order{background:#7c3aed}.step-badge.interpret{background:#0d9488}.step-badge.integrate{background:#dc2626}.step-question{font-weight:600;font-size:.95rem}.choices{display:grid;gap:10px;margin-top:12px}.choice{background:var(--rdx-bg-card);border:2px solid var(--rdx-border);padding:12px 16px;border-radius:10px;cursor:pointer;display:flex;align-items:flex-start;gap:10px;transition:all .2s;font-size:.9rem}.choice:hover{border-color:var(--rdx-teal);transform:translateX(3px)}.choice.correct{border-color:var(--rdx-success);background:rgba(22,163,74,.08);pointer-events:none}.choice.wrong{border-color:var(--rdx-danger);background:rgba(220,38,38,.08);pointer-events:none}.choice-letter{font-weight:700;min-width:20px;color:var(--rdx-teal)}.reveal{display:none;margin-top:12px;padding:16px;border-radius:10px;font-size:.9rem;line-height:1.6}.reveal.shown{display:block}.reveal.teaching{background:linear-gradient(135deg,rgba(13,148,136,.08),rgba(20,184,166,.08));border-left:4px solid var(--rdx-teal)}.reveal.danger{background:linear-gradient(135deg,rgba(220,38,38,.08),rgba(239,68,68,.08));border-left:4px solid var(--rdx-danger)}.reveal h4{font-size:.85rem;color:var(--rdx-teal-dark);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px}.radiopaedia-link{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:var(--rdx-teal-50);border:1px solid var(--rdx-teal);border-radius:8px;color:var(--rdx-teal-dark);text-decoration:none;font-size:.85rem;font-weight:600;margin-top:12px;transition:all .2s}.radiopaedia-link:hover{background:var(--rdx-teal);color:#fff}.cross-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:32px}.cross-link{padding:12px 16px;background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:10px;text-decoration:none;color:var(--rdx-text);font-size:.9rem;font-weight:600;transition:all .15s}.cross-link:hover{border-color:var(--rdx-teal)}@media(max-width:640px){.main{padding:16px}.scenario-body{padding:16px}}</style>
</head><body>

<div class="header"><div class="header-row">
  <div class="header-title">🫘 RadDx: Renal & GU Imaging<span class="badge">UROLOGY / NEPHROLOGY</span></div>
  <a href="raddx-hub.html" class="nav-back">← Back to RadDx Hub</a>
</div></div>

<div class="main">

<div class="scenario"><div class="scenario-header"><div class="scenario-num">1</div><div><div class="scenario-modality">CT Abdomen/Pelvis (Non-Contrast)</div><div class="scenario-title">Nephrolithiasis</div></div></div>
<div class="scenario-body">
<div class="vignette">A <strong>38-year-old male</strong> presents with acute-onset severe left flank pain radiating to the groin, colicky in nature. He is writhing and cannot find a comfortable position. <strong>Gross hematuria</strong>. No fever. CVA tenderness on the left.</div>

<div class="reasoning-step"><div class="step-label"><span class="step-badge order">ORDER</span><span class="step-question">What is the gold standard imaging study?</span></div>
<div class="choices" data-correct="B">
<div class="choice" data-val="A"><span class="choice-letter">A.</span><span>KUB (abdominal X-ray)</span></div>
<div class="choice" data-val="B"><span class="choice-letter">B.</span><span>CT abdomen/pelvis WITHOUT contrast (non-contrast stone protocol)</span></div>
<div class="choice" data-val="C"><span class="choice-letter">C.</span><span>Renal ultrasound</span></div>
<div class="choice" data-val="D"><span class="choice-letter">D.</span><span>IVP (intravenous pyelogram)</span></div>
</div>
<div class="reveal teaching" data-for="B"><h4>Non-Contrast CT is Gold Standard</h4><p><strong>Non-contrast CT</strong> has >95% sensitivity for urolithiasis and visualizes ALL stone compositions (unlike KUB which misses uric acid and cystine stones, and unlike US which misses ureteral stones). NO contrast is needed — in fact, contrast obscures stones. US is first-line in <strong>pregnant patients</strong> and <strong>children</strong> (no radiation). Key CT findings: hyperdense stone, hydronephrosis, periureteral/perinephric stranding (tissue track sign). IVP is historical and replaced by CT.</p></div></div>

<div class="reasoning-step"><div class="step-label"><span class="step-badge integrate">INTEGRATE</span><span class="step-question">CT shows a 4mm stone at the left ureterovesical junction (UVJ) with mild hydronephrosis. No infection markers. Management?</span></div>
<div class="choices" data-correct="A">
<div class="choice" data-val="A"><span class="choice-letter">A.</span><span>Conservative — pain control, hydration, tamsulosin (MET); >90% chance of spontaneous passage at &lt;5mm</span></div>
<div class="choice" data-val="B"><span class="choice-letter">B.</span><span>Emergent urology consult for lithotripsy</span></div>
<div class="choice" data-val="C"><span class="choice-letter">C.</span><span>Emergent ureteral stent placement</span></div>
<div class="choice" data-val="D"><span class="choice-letter">D.</span><span>Open surgical stone removal</span></div>
</div>
<div class="reveal teaching" data-for="A"><h4>Stone Size on CT Predicts Management</h4><p>CT findings directly guide management by <strong>stone size</strong>: <strong>&lt;5mm</strong> → >90% pass spontaneously (medical expulsive therapy: tamsulosin to relax ureter), <strong>5-10mm</strong> → 50% pass, may need intervention, <strong>>10mm</strong> → rarely pass, urological intervention indicated. Location also matters — distal/UVJ stones pass more easily than proximal. Critical scenario change: if this patient had FEVER + stone, that's an <strong>infected obstructing stone = urologic EMERGENCY</strong> requiring emergent decompression (ureteral stent or nephrostomy tube) regardless of size.</p></div></div>

<a href="https://radiopaedia.org/articles/urolithiasis" target="_blank" rel="noopener" class="radiopaedia-link">📖 Explore Kidney Stone Cases on Radiopaedia →</a>
</div></div>

<div class="scenario"><div class="scenario-header"><div class="scenario-num">2</div><div><div class="scenario-modality">Ultrasound with Doppler</div><div class="scenario-title">Testicular Torsion</div></div></div>
<div class="scenario-body">
<div class="vignette">A <strong>14-year-old male</strong> presents with sudden-onset severe left scrotal pain that woke him from sleep 3 hours ago. Nausea and vomiting. Exam: <strong>left testis is high-riding, horizontally oriented, exquisitely tender. Absent cremasteric reflex</strong>. Negative Prehn sign (elevation does NOT relieve pain).</div>

<div class="reasoning-step"><div class="step-label"><span class="step-badge order">ORDER</span><span class="step-question">What imaging do you order?</span></div>
<div class="choices" data-correct="D">
<div class="choice" data-val="A"><span class="choice-letter">A.</span><span>Scrotal ultrasound with Doppler urgently</span></div>
<div class="choice" data-val="B"><span class="choice-letter">B.</span><span>CT abdomen/pelvis</span></div>
<div class="choice" data-val="C"><span class="choice-letter">C.</span><span>MRI pelvis</span></div>
<div class="choice" data-val="D"><span class="choice-letter">D.</span><span>This clinical presentation is classic — consider going directly to OR. Only get US if diagnosis is uncertain and it will NOT delay surgery.</span></div>
</div>
<div class="reveal danger" data-for="D"><h4>Don't Let Imaging Delay Surgery</h4><p><strong>Testicular salvage rate: ~100% at &lt;6 hours, ~20% at >12 hours.</strong> When the clinical presentation is classic (acute onset, high-riding testicle, absent cremasteric reflex, horizontal lie), proceeding directly to scrotal exploration may be appropriate — time is testis. US with Doppler showing <strong>absent or decreased blood flow</strong> confirms torsion, but a negative US does NOT exclude it (sensitivity ~90%). US is most valuable when the presentation is <strong>atypical</strong> (subacute, partial torsion, vs epididymitis vs torsion of appendix testis). The key principle: imaging should facilitate, not delay, definitive management.</p></div></div>

<a href="https://radiopaedia.org/articles/testicular-torsion" target="_blank" rel="noopener" class="radiopaedia-link">📖 Explore Testicular Torsion on Radiopaedia →</a>
</div></div>

<div class="cross-links">
  <a href="raddx-hub.html" class="cross-link">← RadDx Hub</a>
  <a href="raddx-abdominal.html" class="cross-link">Abdominal Imaging</a>
  <a href="raddx-msk.html" class="cross-link">MSK Imaging</a>
  <a href="raddx-obstetric.html" class="cross-link">Obstetric Imaging</a>
</div>
</div>

<script>
document.querySelectorAll('.choices').forEach(group => {
  const correct = group.dataset.correct;
  group.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
      if (group.classList.contains('answered')) return;
      group.classList.add('answered');
      const val = choice.dataset.val;
      if (val === correct) choice.classList.add('correct');
      else { choice.classList.add('wrong'); group.querySelector(`[data-val="${correct}"]`).classList.add('correct'); }
      const reveal = group.parentElement.querySelector(`.reveal[data-for="${correct}"]`);
      if (reveal) reveal.classList.add('shown');
    });
  });
});
</script>
<script src="../js/rdx-nav.js" defer></script>
</body></html>"""

def create_obstetric_page():
    return """<!DOCTYPE html>
<html data-theme="light" lang="en"><head>
<script>(function(){var K="reasondx-user";function g(){var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/login.html"}function a(){try{var u=localStorage.getItem(K);if(u){var j=JSON.parse(u);return j&&j.email&&j.name}}catch(e){}return false}if(!a()){sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}})();</script>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RadDx: Obstetric Imaging | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>body{font-family:'DM Sans',sans-serif;background:var(--rdx-bg);color:var(--rdx-text);line-height:1.7}.header{background:linear-gradient(135deg,#0f766e,#0d9488);padding:12px 20px;position:sticky;top:56px;z-index:100}.header-row{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto;flex-wrap:wrap;gap:8px}.header-title{font-size:1.1rem;font-weight:600;color:#fff}.badge{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px;color:#fff}.nav-back{color:rgba(255,255,255,.8);text-decoration:none;font-size:.85rem}.main{max-width:900px;margin:0 auto;padding:24px}.scenario{background:var(--rdx-bg-card);border:1px solid var(--rdx-border);border-radius:16px;margin-bottom:24px;overflow:hidden}.scenario-header{padding:20px 24px;border-bottom:1px solid var(--rdx-border);display:flex;align-items:center;gap:12px}.scenario-num{width:32px;height:32px;background:var(--rdx-teal);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0}.scenario-title{font-size:1.1rem;font-weight:700}.scenario-modality{font-size:.75rem;color:var(--rdx-teal);font-weight:600;text-transform:uppercase;letter-spacing:.5px}.scenario-body{padding:24px}.vignette{background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:12px;padding:16px 20px;margin-bottom:20px;font-size:.95rem;line-height:1.7}.vignette strong{color:var(--rdx-teal-dark)}.reasoning-step{margin-bottom:20px}.step-label{display:flex;align-items:center;gap:8px;margin-bottom:10px}.step-badge{padding:3px 10px;border-radius:4px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#fff}.step-badge.order{background:#7c3aed}.step-badge.integrate{background:#dc2626}.step-question{font-weight:600;font-size:.95rem}.choices{display:grid;gap:10px;margin-top:12px}.choice{background:var(--rdx-bg-card);border:2px solid var(--rdx-border);padding:12px 16px;border-radius:10px;cursor:pointer;display:flex;align-items:flex-start;gap:10px;transition:all .2s;font-size:.9rem}.choice:hover{border-color:var(--rdx-teal);transform:translateX(3px)}.choice.correct{border-color:var(--rdx-success);background:rgba(22,163,74,.08);pointer-events:none}.choice.wrong{border-color:var(--rdx-danger);background:rgba(220,38,38,.08);pointer-events:none}.choice-letter{font-weight:700;min-width:20px;color:var(--rdx-teal)}.reveal{display:none;margin-top:12px;padding:16px;border-radius:10px;font-size:.9rem;line-height:1.6}.reveal.shown{display:block}.reveal.teaching{background:linear-gradient(135deg,rgba(13,148,136,.08),rgba(20,184,166,.08));border-left:4px solid var(--rdx-teal)}.reveal.danger{background:linear-gradient(135deg,rgba(220,38,38,.08),rgba(239,68,68,.08));border-left:4px solid var(--rdx-danger)}.reveal h4{font-size:.85rem;color:var(--rdx-teal-dark);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px}.radiopaedia-link{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:var(--rdx-teal-50);border:1px solid var(--rdx-teal);border-radius:8px;color:var(--rdx-teal-dark);text-decoration:none;font-size:.85rem;font-weight:600;margin-top:12px;transition:all .2s}.radiopaedia-link:hover{background:var(--rdx-teal);color:#fff}.cross-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:32px}.cross-link{padding:12px 16px;background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:10px;text-decoration:none;color:var(--rdx-text);font-size:.9rem;font-weight:600;transition:all .15s}.cross-link:hover{border-color:var(--rdx-teal)}@media(max-width:640px){.main{padding:16px}.scenario-body{padding:16px}}</style>
</head><body>

<div class="header"><div class="header-row">
  <div class="header-title">🤰 RadDx: Obstetric Imaging<span class="badge">OB/GYN</span></div>
  <a href="raddx-hub.html" class="nav-back">← Back to RadDx Hub</a>
</div></div>

<div class="main">

<div class="scenario"><div class="scenario-header"><div class="scenario-num">1</div><div><div class="scenario-modality">Transvaginal Ultrasound</div><div class="scenario-title">Ectopic Pregnancy</div></div></div>
<div class="scenario-body">
<div class="vignette">A <strong>31-year-old female</strong> with LMP 7 weeks ago presents with unilateral pelvic pain and vaginal spotting. Beta-hCG is <strong>2,800 mIU/mL</strong> (above discriminatory zone). She has a history of prior PID and an IUD that was removed 6 months ago.</div>

<div class="reasoning-step"><div class="step-label"><span class="step-badge order">ORDER</span><span class="step-question">What imaging confirms the diagnosis?</span></div>
<div class="choices" data-correct="A">
<div class="choice" data-val="A"><span class="choice-letter">A.</span><span>Transvaginal ultrasound (TVUS)</span></div>
<div class="choice" data-val="B"><span class="choice-letter">B.</span><span>Transabdominal ultrasound only</span></div>
<div class="choice" data-val="C"><span class="choice-letter">C.</span><span>CT abdomen/pelvis</span></div>
<div class="choice" data-val="D"><span class="choice-letter">D.</span><span>Serial beta-hCG only — no imaging needed yet</span></div>
</div>
<div class="reveal teaching" data-for="A"><h4>TVUS is Essential</h4><p><strong>TVUS is the study of choice</strong> when beta-hCG exceeds the discriminatory zone (typically 1,500-2,000 mIU/mL). At this level, an intrauterine pregnancy (IUP) should be visible on TVUS. An <strong>empty uterus with hCG above the discriminatory zone</strong> = ectopic pregnancy until proven otherwise. Key findings: adnexal mass, tubal ring (\"ring of fire\" on Doppler), free fluid in cul-de-sac. TVUS is superior to transabdominal for early pregnancy. CT involves radiation and is NOT first-line. Serial hCG alone would be appropriate only BELOW the discriminatory zone.</p></div></div>

<div class="reasoning-step"><div class="step-label"><span class="step-badge integrate">INTEGRATE</span><span class="step-question">TVUS shows an empty uterus, a 2.5cm left adnexal mass with a tubal ring sign, no fetal heartbeat, and a small amount of free fluid. She is hemodynamically stable. Management?</span></div>
<div class="choices" data-correct="B">
<div class="choice" data-val="A"><span class="choice-letter">A.</span><span>Emergency surgery</span></div>
<div class="choice" data-val="B"><span class="choice-letter">B.</span><span>Methotrexate (medical management) — meets criteria: stable, &lt;3.5cm, no fetal heartbeat, hCG &lt;5,000</span></div>
<div class="choice" data-val="C"><span class="choice-letter">C.</span><span>Expectant management with serial hCG</span></div>
<div class="choice" data-val="D"><span class="choice-letter">D.</span><span>Repeat TVUS in 1 week</span></div>
</div>
<div class="reveal teaching" data-for="B"><h4>Imaging Determines Medical vs Surgical Path</h4><p>The TVUS findings guide the critical decision between medical and surgical management. <strong>Methotrexate criteria</strong>: hemodynamically stable, ectopic mass &lt;3.5cm, no fetal cardiac activity, hCG &lt;5,000 (relative — some use &lt;10,000). This patient meets ALL criteria. If TVUS had shown fetal heartbeat, hemoperitoneum, or she were unstable → <strong>surgical management</strong> (laparoscopic salpingostomy or salpingectomy). The imaging directly stratified her treatment pathway. After methotrexate, serial hCG monitoring (day 4 and 7 levels should drop >15%) with TVUS follow-up.</p></div></div>

<a href="https://radiopaedia.org/articles/ectopic-pregnancy" target="_blank" rel="noopener" class="radiopaedia-link">📖 Explore Ectopic Pregnancy Cases on Radiopaedia →</a>
</div></div>

<div class="cross-links">
  <a href="raddx-hub.html" class="cross-link">← RadDx Hub</a>
  <a href="raddx-abdominal.html" class="cross-link">Abdominal Imaging</a>
  <a href="raddx-peds.html" class="cross-link">Pediatric Imaging</a>
  <a href="raddx-renal-gu.html" class="cross-link">Renal & GU Imaging</a>
</div>
</div>

<script>
document.querySelectorAll('.choices').forEach(group => {
  const correct = group.dataset.correct;
  group.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', () => {
      if (group.classList.contains('answered')) return;
      group.classList.add('answered');
      const val = choice.dataset.val;
      if (val === correct) choice.classList.add('correct');
      else { choice.classList.add('wrong'); group.querySelector(`[data-val="${correct}"]`).classList.add('correct'); }
      const reveal = group.parentElement.querySelector(`.reveal[data-for="${correct}"]`);
      if (reveal) reveal.classList.add('shown');
    });
  });
});
</script>
<script src="../js/rdx-nav.js" defer></script>
</body></html>"""


# Write pages
with open(os.path.join(ROOT, 'modules', 'raddx-msk.html'), 'w') as f:
    f.write(create_msk_page())
print("Created: raddx-msk.html (2 scenarios)")

with open(os.path.join(ROOT, 'modules', 'raddx-renal-gu.html'), 'w') as f:
    f.write(create_renal_gu_page())
print("Created: raddx-renal-gu.html (2 scenarios)")

with open(os.path.join(ROOT, 'modules', 'raddx-obstetric.html'), 'w') as f:
    f.write(create_obstetric_page())
print("Created: raddx-obstetric.html (1 scenario)")

# ============================================================
# 2. ADD RADDX TO SEARCH INDEX
# ============================================================
search_index_path = os.path.join(ROOT, 'data', 'search-index.json')
with open(search_index_path, 'r') as f:
    search_index = json.load(f)

raddx_entries = [
    {"title": "RadDx — Imaging Reasoning Hub", "url": "modules/raddx-hub.html", "type": "module",
     "keywords": "radiology imaging reasoning x-ray ct mri ultrasound echocardiogram raddx"},
    {"title": "RadDx: Chest Imaging", "url": "modules/raddx-chest.html", "type": "module",
     "keywords": "chest x-ray cxr pneumonia pneumothorax ards pulmonary embolism pe pleural effusion tuberculosis"},
    {"title": "RadDx: Cardiac Imaging", "url": "modules/raddx-cardiac.html", "type": "module",
     "keywords": "ecg ekg echocardiogram acs stemi coronary angiography heart failure aortic dissection tamponade"},
    {"title": "RadDx: Abdominal Imaging", "url": "modules/raddx-abdominal.html", "type": "module",
     "keywords": "ct abdomen ultrasound appendicitis cholecystitis small bowel obstruction sbo hida"},
    {"title": "RadDx: Neuroimaging", "url": "modules/raddx-neuro.html", "type": "module",
     "keywords": "ct head mri brain stroke sah meningitis seizure cta perfusion"},
    {"title": "RadDx: Musculoskeletal Imaging", "url": "modules/raddx-msk.html", "type": "module",
     "keywords": "x-ray mri fracture hip osteomyelitis compartment syndrome orthopedic"},
    {"title": "RadDx: Renal & GU Imaging", "url": "modules/raddx-renal-gu.html", "type": "module",
     "keywords": "ct non-contrast kidney stone nephrolithiasis testicular torsion ultrasound doppler hematuria"},
    {"title": "RadDx: Pediatric Imaging", "url": "modules/raddx-peds.html", "type": "module",
     "keywords": "pediatric ultrasound intussusception pyloric stenosis neonatal respiratory hirschsprung cdh"},
    {"title": "RadDx: Obstetric Imaging", "url": "modules/raddx-obstetric.html", "type": "module",
     "keywords": "transvaginal ultrasound ectopic pregnancy placental abruption obstetric"},
]

# Remove any existing raddx entries
search_index = [e for e in search_index if 'raddx' not in e.get('url', '').lower()]
search_index.extend(raddx_entries)

with open(search_index_path, 'w') as f:
    json.dump(search_index, f, indent=2)
print(f"\nSearch index updated: {len(raddx_entries)} RadDx entries added")

# ============================================================
# 3. INJECT IMAGING LINKS INTO RELEVANT TOPIC PAGES
# ============================================================

# Load radiopaedia map for topic-level linking
with open(os.path.join(ROOT, 'data', 'radiopaedia-map.json')) as f:
    rmap = json.load(f)

# Build topic keyword → RadDx page mapping
TOPIC_TO_RADDX = {
    'pneumonia': 'raddx-chest.html', 'pneumothorax': 'raddx-chest.html',
    'tension pneumothorax': 'raddx-chest.html', 'pleural effusion': 'raddx-chest.html',
    'ards': 'raddx-chest.html', 'pulmonary embolism': 'raddx-chest.html',
    'tuberculosis': 'raddx-chest.html', 'dvt': 'raddx-chest.html',
    'chest pain': 'raddx-cardiac.html', 'acs': 'raddx-cardiac.html',
    'acute coronary': 'raddx-cardiac.html', 'heart failure': 'raddx-cardiac.html',
    'aortic dissection': 'raddx-cardiac.html', 'cardiac tamponade': 'raddx-cardiac.html',
    'valvular': 'raddx-cardiac.html', 'endocarditis': 'raddx-cardiac.html',
    'ekg': 'raddx-cardiac.html', 'ecg': 'raddx-cardiac.html',
    'appendicitis': 'raddx-abdominal.html', 'cholecystitis': 'raddx-abdominal.html',
    'cholangitis': 'raddx-abdominal.html', 'pancreatitis': 'raddx-abdominal.html',
    'small bowel obstruction': 'raddx-abdominal.html', 'gi bleed': 'raddx-abdominal.html',
    'cirrhosis': 'raddx-abdominal.html', 'liver': 'raddx-abdominal.html',
    'acute abdomen': 'raddx-abdominal.html', 'biliary': 'raddx-abdominal.html',
    'stroke': 'raddx-neuro.html', 'subarachnoid': 'raddx-neuro.html',
    'intracranial hemorrhage': 'raddx-neuro.html', 'meningitis': 'raddx-neuro.html',
    'seizure': 'raddx-neuro.html', 'headache': 'raddx-neuro.html',
    'hydrocephalus': 'raddx-neuro.html',
    'fracture': 'raddx-msk.html', 'hip': 'raddx-msk.html',
    'osteomyelitis': 'raddx-msk.html', 'compartment': 'raddx-msk.html',
    'nephrolithiasis': 'raddx-renal-gu.html', 'kidney stone': 'raddx-renal-gu.html',
    'hematuria': 'raddx-renal-gu.html', 'testicular': 'raddx-renal-gu.html',
    'pyelonephritis': 'raddx-renal-gu.html',
    'intussusception': 'raddx-peds.html', 'pyloric': 'raddx-peds.html',
    'hirschsprung': 'raddx-peds.html', 'neonatal respiratory': 'raddx-peds.html',
    'diaphragmatic hernia': 'raddx-peds.html',
    'ectopic pregnancy': 'raddx-obstetric.html', 'placental': 'raddx-obstetric.html',
}

# Inject RadDx cross-link into topic pages
inject_count = 0
for filepath in sorted(glob.glob(os.path.join(ROOT, 'topics', '*.html'))):
    with open(filepath, 'r', errors='replace') as f:
        content = f.read()
    
    # Skip if already has raddx link
    if 'raddx' in content.lower():
        continue
    
    m = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
    if not m:
        continue
    title = html_mod.unescape(m.group(1).strip()).lower()
    
    # Find matching RadDx page
    raddx_page = None
    for keyword, page in TOPIC_TO_RADDX.items():
        if keyword in title:
            raddx_page = page
            break
    
    if not raddx_page:
        continue
    
    # Build the RadDx cross-link card
    raddx_card = f'''<a href="../modules/{raddx_page}" class="content-card type-guide" style="border-left:3px solid #0d9488">
  <div class="card-icon" style="background:#f0fdfa">🩻</div>
  <div class="card-body">
    <div class="card-type" style="color:#0d9488">IMAGING REASONING</div>
    <div class="card-title">RadDx: Imaging for this Topic</div>
    <div class="card-desc">What to order, what to expect, how to interpret, and how findings change management</div>
  </div>
  <span class="card-arrow">→</span>
</a>'''
    
    # Insert before the references section or at end of content-grid
    if '</section>' in content:
        # Insert before the last </section> which is usually the ref section
        last_section = content.rfind('</section>')
        if last_section > 0:
            content = content[:last_section] + raddx_card + '\n' + content[last_section:]
    
    with open(filepath, 'w') as f:
        f.write(content)
    inject_count += 1

print(f"Topic pages with RadDx links injected: {inject_count}")

# ============================================================
# 4. INJECT RADIOPAEDIA LINKS INTO RELEVANT MODULES
# ============================================================

# Build topic keyword → radiopaedia URL mapping
TOPIC_TO_RADIOPAEDIA = {}
for system, cases in rmap['imaging_cases'].items():
    for case in cases:
        for kw in case['topic_keywords']:
            TOPIC_TO_RADIOPAEDIA[kw.lower()] = {
                'url': case['radiopaedia_url'],
                'modality': case['modality'],
                'teaching_focus': case['teaching_focus']
            }

radiopaedia_inject = 0
for filepath in sorted(glob.glob(os.path.join(ROOT, 'modules', '*.html'))):
    if 'raddx-' in os.path.basename(filepath):
        continue
    
    with open(filepath, 'r', errors='replace') as f:
        content = f.read()
    
    if 'radiopaedia.org' in content:
        continue
    
    m = re.search(r'<title>([^|<]+)', content)
    if not m:
        continue
    title = html_mod.unescape(m.group(1).strip()).lower()
    
    rp_info = None
    for keyword, info in TOPIC_TO_RADIOPAEDIA.items():
        if keyword in title:
            rp_info = info
            break
    
    if not rp_info:
        continue
    
    rp_div = f'''<div class="rdx-specialty-refs" style="margin:20px 0;padding:16px;background:var(--rdx-teal-50,#f0fdfa);border:1px solid var(--rdx-border,#e2e8f0);border-radius:12px">
<h4 style="color:var(--rdx-teal-dark,#0f766e);font-size:0.85rem;margin-bottom:8px">🩻 Imaging Resources</h4>
<p style="font-size:0.85rem;margin-bottom:8px;color:var(--rdx-text-muted)"><strong>Primary modality:</strong> {rp_info['modality']}</p>
<p style="font-size:0.85rem;margin-bottom:8px;color:var(--rdx-text-muted)"><strong>Key findings:</strong> {rp_info['teaching_focus']}</p>
<a href="{rp_info['url']}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:var(--rdx-teal,#0d9488);color:#fff;border-radius:6px;text-decoration:none;font-size:0.8rem;font-weight:600">📖 Explore Cases on Radiopaedia →</a>
</div>'''
    
    if 'cross-links' in content:
        content = content.replace('<div class="cross-links"', rp_div + '\n<div class="cross-links"', 1)
    elif '</main>' in content:
        content = content.replace('</main>', rp_div + '\n</main>', 1)
    elif '</body>' in content:
        content = content.replace('</body>', rp_div + '\n</body>', 1)
    else:
        continue
    
    with open(filepath, 'w') as f:
        f.write(content)
    radiopaedia_inject += 1

print(f"Modules with Radiopaedia imaging links: {radiopaedia_inject}")

print(f"\n=== RADDX BUILD COMPLETE ===")
print(f"RadDx Hub: 1 page")
print(f"Body System Pages: 8 (chest, cardiac, neuro, abdominal, msk, renal-gu, peds, obstetric)")
print(f"Total Imaging Scenarios: 25+")
print(f"Topic pages with RadDx links: {inject_count}")
print(f"Modules with Radiopaedia links: {radiopaedia_inject}")
print(f"Search index entries: {len(raddx_entries)}")
