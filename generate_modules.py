import os, json

AUTH_GUARD = '''<script>(function(){var K="reasondx-user";function g(){var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/register.html"}function a(){try{var u=localStorage.getItem(K);if(u){var j=JSON.parse(u);return j&&j.email&&j.name}}catch(e){}return false}if(!a()){sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}})();</script>'''

CSS = '''
:root{--bg:#0F172A;--card:#1E293B;--border:#334155;--text:#F1F5F9;--muted:#94A3B8;--accent:#8B5CF6;--success:#10B981;--danger:#DC2626;--info:#F59E0B;--warning:#F97316}*{box-sizing:border-box;margin:0;padding:0}body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;line-height:1.7}.header{background:linear-gradient(135deg,#4C1D95,#8B5CF6);padding:12px 20px;position:sticky;top:0;z-index:100}.header-row{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto;flex-wrap:wrap;gap:8px}.header-title{font-size:1.1rem;font-weight:600;color:#fff}.badge{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px;color:#fff}.stats{display:flex;gap:12px}.stat{text-align:center;background:rgba(0,0,0,.2);padding:6px 14px;border-radius:8px;color:#fff}.stat-value{font-size:1.1rem;font-weight:700;font-family:monospace}.stat-label{font-size:.6rem;opacity:.8}.main{max-width:900px;margin:0 auto;padding:24px}.card{background:var(--card);border:1px solid var(--border);border-radius:16px;margin-bottom:20px}.card-header{padding:20px 24px;border-bottom:1px solid var(--border)}.card-phase{font-size:.75rem;color:var(--accent);text-transform:uppercase;letter-spacing:1px}.card-title{font-size:1.4rem;font-weight:700;margin-top:4px}.card-body{padding:24px}.pearl{background:linear-gradient(135deg,rgba(139,92,246,.15),rgba(168,85,247,.15));border-left:4px solid var(--accent);padding:16px;border-radius:0 12px 12px 0;margin:16px 0}.danger{background:linear-gradient(135deg,rgba(220,38,38,.15),rgba(239,68,68,.15));border-left:4px solid var(--danger);padding:16px;border-radius:0 12px 12px 0;margin:16px 0}.compare-table{width:100%;border-collapse:collapse;margin:16px 0}.compare-table th{background:rgba(139,92,246,.2);padding:10px;text-align:left;font-size:.85rem;border:1px solid var(--border)}.compare-table td{padding:10px;border:1px solid var(--border);font-size:.85rem}.choices{display:grid;gap:12px;margin-top:16px}.choice{background:var(--card);border:2px solid var(--border);padding:14px;border-radius:12px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .2s}.choice:hover{border-color:var(--accent);transform:translateX(4px)}.choice.correct{border-color:var(--success);background:rgba(16,185,129,.15);pointer-events:none}.choice.wrong{border-color:var(--danger);background:rgba(220,38,38,.15);pointer-events:none}.choice-icon{font-size:1.2rem;font-weight:700;min-width:28px;text-align:center}.choice-title{font-weight:600;font-size:.95rem}.hidden{display:none!important}.cross-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:20px}.cross-link{padding:14px;background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.3);border-radius:10px;text-decoration:none;color:var(--text)}.cross-link:hover{border-color:var(--accent)}.cross-link-title{font-weight:600;font-size:.9rem}h3{color:var(--accent);margin:20px 0 12px;font-size:1.1rem}@media(max-width:480px){.main{padding:12px}.card-body{padding:16px}}
'''

FOOTER_SCRIPT = '''<script>let score=0;function pickQ(el,qi){const all=el.parentElement.querySelectorAll('.choice');all.forEach(c=>{c.style.pointerEvents='none';c.style.opacity='.6'});el.style.opacity='1';const correct=el.dataset.correct==='true';el.classList.add(correct?'correct':'wrong');if(correct){score+=12;document.getElementById('score').textContent=score}if(!correct){all.forEach(c=>{if(c.dataset.correct==='true')c.classList.add('correct')})}const fb=document.getElementById('mcqFbText'+qi);fb.style.background=correct?'rgba(16,185,129,.15)':'rgba(220,38,38,.15)';fb.style.border='1px solid '+(correct?'rgba(16,185,129,.3)':'rgba(220,38,38,.3)');fb.innerHTML=(correct?'✅ ':'❌ ')+el.dataset.fb;document.getElementById('mcqFb'+qi).classList.remove('hidden')}</script>
<script src="../dx-progress.js"></script>
<script src="../dx-cross-links.js"></script>
<script src="../js/dx-universal-nav.js"></script>'''

def mcq(idx, total, stem, choices):
    """choices = [(letter, text, is_correct, feedback), ...]"""
    html = f'<div class="card" id="mcq{idx}"><div class="card-header"><div class="card-phase">QUESTION {idx+1} OF {total}</div><div class="card-title">{stem}</div></div><div class="card-body"><div class="choices">'
    for letter, text, correct, fb in choices:
        html += f'<div class="choice" data-correct="{str(correct).lower()}" data-fb="{fb}" onclick="pickQ(this,{idx})"><div class="choice-icon">{letter}</div><div><div class="choice-title">{text}</div></div></div>\n'
    html += f'</div><div id="mcqFb{idx}" class="hidden" style="margin-top:16px"><div id="mcqFbText{idx}" style="padding:12px;border-radius:8px"></div></div></div></div>'
    return html

def build_module(title, specialty, emoji, content_cards, mcqs_html, references, cross_links):
    num_mcqs = mcqs_html.count('pickQ(this,')
    return f'''<!DOCTYPE html><html lang="en"><head>{AUTH_GUARD}<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>{title} | ReasonDx</title><style>{CSS}</style></head><body>
<div class="header"><div class="header-row"><div class="header-title">{emoji} {title}<span class="badge">{specialty}</span></div><div class="stats"><div class="stat"><div class="stat-value" id="score">0</div><div class="stat-label">XP</div></div><div class="stat"><div class="stat-value">{num_mcqs}</div><div class="stat-label">MCQs</div></div></div></div></div>
<div class="main">{content_cards}
<div class="card"><div class="card-header"><div class="card-phase">BOARD PREP</div><div class="card-title">🎯 Practice Questions</div></div><div class="card-body">{mcqs_html}</div></div>
<div class="card"><div class="card-header"><div class="card-title">📚 References</div></div><div class="card-body"><div class="cross-links">{references}</div></div></div>
<div class="card" id="crossLinkNav"><div class="card-header"><div class="card-title">🔗 Related Content</div></div><div class="card-body"><div class="cross-links">{cross_links}</div></div></div>
</div>
{FOOTER_SCRIPT}
</body></html>'''

# ==============================
# MODULE 1: Acute Liver Failure
# ==============================
alf_content = '''
<div class="card"><div class="card-header"><div class="card-phase">MECHANISM</div><div class="card-title">Pathophysiology</div></div><div class="card-body">
<p>Acute liver failure (ALF) is defined as <strong>severe hepatic dysfunction with coagulopathy (INR ≥ 1.5) and hepatic encephalopathy in a patient without pre-existing liver disease, occurring within 26 weeks of symptom onset</strong>. Classification by onset: hyperacute (<7 days), acute (7-21 days), subacute (21 days-26 weeks).</p>
<div class="pearl"><strong>🔑 Key Concept:</strong> Paradoxically, hyperacute ALF (e.g., acetaminophen) has the <strong>best prognosis</strong> with spontaneous recovery rates of 40-70%, while subacute ALF has the worst prognosis (~15% spontaneous recovery). This is because hyperacute injury reflects a massive but potentially reversible insult, while subacute injury reflects progressive hepatocyte loss.</div>
<h3>Etiology</h3>
<table class="compare-table"><tr><th>Cause</th><th>Mechanism</th><th>Key Features</th></tr>
<tr><td><strong>Acetaminophen (46%)</strong></td><td>NAPQI toxicity → centrilobular necrosis</td><td>Dose-dependent. AST/ALT often >3,500. Nomogram for risk. NAC is antidote.</td></tr>
<tr><td><strong>Drug-Induced (11%)</strong></td><td>Idiosyncratic hepatotoxicity</td><td>Isoniazid, phenytoin, antibiotics, herbal supplements. Variable latency.</td></tr>
<tr><td><strong>Viral Hepatitis (12%)</strong></td><td>Immune-mediated hepatocyte destruction</td><td>HBV most common worldwide. HAV rare but possible. HCV almost never causes ALF.</td></tr>
<tr><td><strong>Autoimmune Hepatitis</strong></td><td>Autoimmune hepatocyte destruction</td><td>ANA/ASMA positive. May respond to steroids. Consider biopsy.</td></tr>
<tr><td><strong>Wilson Disease</strong></td><td>Copper accumulation → oxidative injury</td><td>Young patients. Coombs-negative hemolytic anemia + ALF. Low alkaline phosphatase.</td></tr>
<tr><td><strong>Budd-Chiari</strong></td><td>Hepatic vein thrombosis</td><td>Painful hepatomegaly, ascites. Doppler ultrasound diagnostic.</td></tr>
<tr><td><strong>Indeterminate (14%)</strong></td><td>Unknown</td><td>Worst prognosis. Must be referred for transplant evaluation early.</td></tr></table>
<div class="danger"><strong>⚠️ Critical:</strong> Mushroom poisoning (Amanita phalloides) causes ALF with a characteristic delay of 6-12 hours between ingestion and GI symptoms, followed by apparent improvement, then fulminant hepatic failure at 48-96 hours. Mortality >50% without transplant.</div>
</div></div>

<div class="card"><div class="card-header"><div class="card-phase">CLINICAL</div><div class="card-title">Diagnosis & Complications</div></div><div class="card-body">
<h3>Initial Workup</h3>
<p>CBC, CMP, INR/PT, arterial lactate, arterial ammonia, acetaminophen level, toxicology screen, viral hepatitis panel (HAV IgM, HBsAg, HBV DNA, HCV RNA), autoimmune markers (ANA, ASMA, IgG), ceruloplasmin, pregnancy test, Doppler ultrasound of liver.</p>
<h3>Complications</h3>
<table class="compare-table"><tr><th>Complication</th><th>Mechanism</th><th>Management</th></tr>
<tr><td><strong>Cerebral Edema</strong></td><td>Ammonia → astrocyte swelling → increased ICP</td><td>HOB 30°, hypertonic saline (goal Na 145-155), mannitol, avoid hyperthermia. ICP monitoring controversial.</td></tr>
<tr><td><strong>Coagulopathy</strong></td><td>Decreased synthesis of factors AND anticoagulants</td><td>Do NOT correct INR unless actively bleeding or pre-procedure — INR is a prognostic marker. Vitamin K 10 mg IV × 1.</td></tr>
<tr><td><strong>Infection/Sepsis</strong></td><td>Impaired immune function</td><td>Surveillance cultures. Low threshold for empiric antibiotics. Fungal coverage if no improvement.</td></tr>
<tr><td><strong>Metabolic</strong></td><td>Hepatic gluconeogenesis failure</td><td>Continuous glucose monitoring. D10 infusion to maintain glucose >150 mg/dL.</td></tr>
<tr><td><strong>Renal Failure</strong></td><td>Hepatorenal syndrome, ATN, APAP direct toxicity</td><td>CRRT preferred over intermittent HD (less hemodynamic instability).</td></tr></table>
<div class="pearl"><strong>🔑 Board Pearl:</strong> In ALF, the INR reflects both pro- and anticoagulant factor loss. Patients may actually be in a <strong>rebalanced hemostatic state</strong> — viscoelastic testing (TEG/ROTEM) is more accurate than INR for bleeding risk assessment. Correcting INR with FFP obscures an important prognostic marker.</div>
</div></div>

<div class="card"><div class="card-header"><div class="card-phase">TREATMENT</div><div class="card-title">Management & Transplant Criteria</div></div><div class="card-body">
<h3>Specific Treatments</h3>
<table class="compare-table"><tr><th>Etiology</th><th>Treatment</th><th>Notes</th></tr>
<tr><td><strong>Acetaminophen</strong></td><td>N-acetylcysteine (NAC)</td><td>Oral: 140 mg/kg load, then 70 mg/kg q4h × 17 doses. IV: 150/50/100 mg/kg protocol. Effective even late. Also beneficial in non-APAP ALF.</td></tr>
<tr><td><strong>Autoimmune</strong></td><td>Corticosteroids</td><td>Prednisolone 40-60 mg/day. Response seen in ~50%. No response → transplant.</td></tr>
<tr><td><strong>HSV/VZV</strong></td><td>Acyclovir</td><td>Start empirically if immunosuppressed, pregnant, or skin lesions present. Don't wait for biopsy.</td></tr>
<tr><td><strong>Wilson Disease</strong></td><td>Plasmapheresis → transplant</td><td>Virtually all Wilson ALF requires transplant. MELD often underestimates severity.</td></tr>
<tr><td><strong>Amanita</strong></td><td>Penicillin G + NAC + silibinin</td><td>No proven antidote. Transplant often required.</td></tr></table>
<h3>King's College Criteria for Transplant</h3>
<p><strong>Acetaminophen ALF:</strong> Arterial pH &lt; 7.30 after resuscitation, OR all three: Grade III/IV encephalopathy + INR &gt; 6.5 + Creatinine &gt; 3.4 mg/dL.</p>
<p><strong>Non-Acetaminophen ALF:</strong> INR &gt; 6.5 (irrespective of encephalopathy grade), OR any three of: Age &lt;10 or &gt;40, unfavorable etiology, jaundice &gt;7 days before encephalopathy, INR &gt; 3.5, bilirubin &gt; 17.5 mg/dL.</p>
<div class="danger"><strong>⚠️ Transfer Early:</strong> All patients with ALF should be managed in or transferred to a transplant center. Deterioration can be rapid and unpredictable. MELD score underestimates urgency — ALF patients get UNOS Status 1A listing.</div>
</div></div>'''

alf_mcqs = mcq(0, 6, "A 22-year-old presents with jaundice, INR 4.2, and confusion 3 days after an intentional acetaminophen overdose. Acetaminophen level is undetectable. What is the MOST important next step?",
    [("A", "Administer activated charcoal", False, "Activated charcoal is only effective within 1-2 hours of ingestion. At 3 days post-ingestion, the drug has been fully absorbed and metabolized."),
     ("B", "Start N-acetylcysteine (NAC) IV infusion", True, "Correct! NAC should be started even with undetectable acetaminophen levels because hepatotoxicity occurs from NAPQI (the toxic metabolite), not acetaminophen itself. NAC is beneficial even 48-72+ hours post-ingestion — it improves outcomes through glutathione replenishment, antioxidant effects, and improved microcirculation. NAC also benefits non-acetaminophen ALF. Simultaneously, transfer to a transplant center should be initiated."),
     ("C", "Transfuse FFP to correct the INR", False, "Do NOT correct INR unless actively bleeding. INR is the most important prognostic marker in ALF and is needed for King's College Criteria. FFP obscures trends."),
     ("D", "Observe since acetaminophen level is undetectable", False, "Undetectable levels mean the drug is metabolized — not that toxicity won't occur. NAPQI has already been formed and is causing hepatocyte necrosis.")])

alf_mcqs += mcq(1, 6, "Which feature of Wilson disease-related ALF is a classic board clue?",
    [("A", "Very high alkaline phosphatase", False, "Wilson disease ALF characteristically shows a VERY LOW alkaline phosphatase, which is unusual for liver failure. This is thought to be due to copper-mediated inhibition of the enzyme."),
     ("B", "Coombs-negative hemolytic anemia with low alkaline phosphatase", True, "Correct! The classic triad of Wilson disease ALF is: Coombs-negative hemolytic anemia (copper-induced RBC damage), disproportionately LOW alkaline phosphatase, and ALF. An AP:bilirubin ratio <4 and AST:ALT ratio >2.2 are also suggestive. Ceruloplasmin may be low-normal (it's an acute phase reactant). Wilson ALF almost always requires transplant."),
     ("C", "Positive ANA with elevated IgG", False, "This pattern suggests autoimmune hepatitis, not Wilson disease."),
     ("D", "AST/ALT >10,000 with rapid recovery", False, "Extremely high transaminases with rapid recovery suggest ischemic hepatopathy (shock liver), not Wilson disease.")])

alf_mcqs += mcq(2, 6, "Why should INR NOT be routinely corrected with FFP in acute liver failure?",
    [("A", "FFP worsens cerebral edema through volume overload", False, "While volume is a concern, the main reason is loss of prognostic information. Volume can be managed with diuretics."),
     ("B", "FFP obscures the most important prognostic marker and INR does not accurately reflect bleeding risk in ALF", True, "Correct! In ALF, both procoagulant and anticoagulant factors are reduced, creating a 'rebalanced' hemostatic state. INR overestimates bleeding risk because it only measures procoagulant factors. Correcting INR with FFP: (1) obscures trends needed for King's College Criteria and transplant decisions, (2) does not accurately reduce bleeding risk. Use TEG/ROTEM for bleeding assessment. Only correct if actively bleeding or pre-procedure."),
     ("C", "FFP contains hepatotoxic preservatives", False, "This is not a clinical concern in ALF management."),
     ("D", "FFP transfusion triggers more hepatocyte destruction", False, "FFP does not cause additional hepatocyte injury.")])

alf_mcqs += mcq(3, 6, "A patient with ALF has ammonia of 150 μmol/L and is becoming increasingly obtunded. CT shows cerebral edema. What is the MOST appropriate intervention?",
    [("A", "Lactulose 30 mL orally every 2 hours", False, "Lactulose is used for chronic hepatic encephalopathy. In ALF with cerebral edema, it is too slow-acting and may cause abdominal distension. Direct ICP management is needed."),
     ("B", "Hypertonic saline to target serum sodium 145-155 mEq/L", True, "Correct! Hypertonic saline (23.4% bolus or 3% continuous) is first-line for cerebral edema in ALF. Target Na 145-155 mEq/L for osmotic neuroprotection. Additional measures: HOB 30°, avoid hyperthermia (target 35-36°C), mannitol 0.5-1 g/kg for acute ICP surges, minimize stimulation. CRRT preferred if renal replacement needed (avoids hemodynamic shifts). Consider ICP monitor in grade III/IV encephalopathy."),
     ("C", "Rifaximin 550 mg BID", False, "Rifaximin is for chronic hepatic encephalopathy. It has no role in acute cerebral edema management."),
     ("D", "Dexamethasone 10 mg IV", False, "Steroids are NOT effective for cytotoxic edema in ALF (unlike vasogenic edema in brain tumors).")])

alf_mcqs += mcq(4, 6, "According to King's College Criteria, which SINGLE finding is sufficient to list an acetaminophen ALF patient for transplant?",
    [("A", "INR > 6.5", False, "INR >6.5 alone is sufficient for non-acetaminophen ALF but not acetaminophen ALF. For APAP, all three criteria (encephalopathy + INR + creatinine) must be met unless pH alone qualifies."),
     ("B", "Arterial pH < 7.30 after adequate fluid resuscitation", True, "Correct! For acetaminophen-induced ALF, arterial pH <7.30 after resuscitation is the single criterion that independently qualifies for transplant listing. This reflects severe lactic acidosis from hepatic failure and carries very high mortality without transplant. The alternative pathway requires ALL THREE: grade III-IV encephalopathy, INR >6.5, AND creatinine >3.4 mg/dL."),
     ("C", "Serum bilirubin > 17.5 mg/dL", False, "This is one of five criteria for non-acetaminophen ALF (need 3 of 5), not acetaminophen ALF."),
     ("D", "Grade III hepatic encephalopathy alone", False, "Encephalopathy alone is insufficient — it must be combined with INR >6.5 AND creatinine >3.4.")])

alf_mcqs += mcq(5, 6, "Which ALF etiology has the BEST prognosis for spontaneous recovery without transplant?",
    [("A", "Wilson disease", False, "Wilson disease ALF has the WORST prognosis — virtually 100% mortality without transplant."),
     ("B", "Indeterminate cause", False, "Indeterminate ALF has poor prognosis (~15% spontaneous recovery)."),
     ("C", "Acetaminophen overdose", True, "Correct! Acetaminophen ALF has 40-70% spontaneous recovery rate, the highest of any ALF etiology. This is because APAP causes hyperacute, dose-dependent hepatocyte necrosis that — if the patient survives the acute phase — allows rapid hepatic regeneration. NAC further improves outcomes. This is paradoxical: the most dramatic presentations (massive transaminase elevation, rapid onset) often have the best prognosis."),
     ("D", "Autoimmune hepatitis", False, "Autoimmune ALF has ~50% response to steroids, but those who don't respond have poor outcomes.")])

alf_refs = '<a href="https://www.ncbi.nlm.nih.gov/books/NBK482374/" target="_blank" class="cross-link"><div class="cross-link-title">📄 Acute Liver Failure - StatPearls</div></a><a href="https://pubmed.ncbi.nlm.nih.gov/22488764/" target="_blank" class="cross-link"><div class="cross-link-title">📄 AASLD Position Paper on ALF Management</div></a>'
alf_cross = '<a href="../deep-dive-player.html?module=acute-liver-failure-deep-dive" class="cross-link"><div class="cross-link-title">📖 Deep Dive</div><div style="font-size:.75rem;color:var(--muted)">Comprehensive review</div></a><a href="../cases/alf-expanded.html" class="cross-link"><div class="cross-link-title">🎮 Clinical Adventure</div><div style="font-size:.75rem;color:var(--muted)">Interactive case simulation</div></a>'

modules = {}
modules['acute-liver-failure-module.html'] = build_module("Acute Liver Failure", "HEPATOLOGY", "🔬", alf_content, alf_mcqs, alf_refs, alf_cross)

# ==============================
# MODULE 2: Allergen Immunotherapy
# ==============================
ait_content = '''
<div class="card"><div class="card-header"><div class="card-phase">MECHANISM</div><div class="card-title">Pathophysiology of Immune Tolerance</div></div><div class="card-body">
<p>Allergen immunotherapy (AIT) is the only disease-modifying treatment for IgE-mediated allergic disease. It works by <strong>shifting the immune response from a Th2-dominant (allergic) to a Th1/Treg-dominant (tolerant) phenotype</strong> through repeated exposure to increasing doses of allergen.</p>
<h3>Immunologic Mechanisms</h3>
<table class="compare-table"><tr><th>Phase</th><th>Timeline</th><th>Immunologic Change</th></tr>
<tr><td><strong>Early Desensitization</strong></td><td>Hours-weeks</td><td>Mast cell/basophil desensitization → decreased mediator release. Rapid increase in allergen-specific IgG4 (blocking antibody).</td></tr>
<tr><td><strong>T-cell Modulation</strong></td><td>Weeks-months</td><td>Shift from Th2 → Treg cells. Increased IL-10 and TGF-β production. Decreased IL-4, IL-5, IL-13. Immune deviation toward Th1.</td></tr>
<tr><td><strong>Long-term Tolerance</strong></td><td>Months-years</td><td>Decreased allergen-specific IgE (late). Increased IgG4 blocking antibodies. Reduced end-organ responsiveness. Prevention of new sensitizations.</td></tr></table>
<div class="pearl"><strong>🔑 Key Concept:</strong> IgG4 is the key <strong>blocking antibody</strong> induced by immunotherapy. It competes with IgE for allergen binding, preventing mast cell crosslinking and degranulation. IgG4 levels correlate with clinical improvement and can serve as a biomarker of treatment response.</div>
</div></div>

<div class="card"><div class="card-header"><div class="card-phase">CLINICAL</div><div class="card-title">Indications, Routes & Protocols</div></div><div class="card-body">
<h3>Indications</h3>
<p>Allergic rhinitis, allergic asthma (controlled), Hymenoptera venom allergy, confirmed IgE-mediated sensitivity with clinical correlation, inadequate symptom control with avoidance + pharmacotherapy.</p>
<h3>Routes of Administration</h3>
<table class="compare-table"><tr><th>Feature</th><th>SCIT (Subcutaneous)</th><th>SLIT (Sublingual)</th></tr>
<tr><td><strong>Route</strong></td><td>Injection in medical office</td><td>Tablet or drops under tongue at home</td></tr>
<tr><td><strong>Buildup</strong></td><td>Weekly injections × 6-8 months, then monthly maintenance</td><td>Daily dosing from start (some have brief escalation)</td></tr>
<tr><td><strong>Duration</strong></td><td>3-5 years total</td><td>3-5 years total</td></tr>
<tr><td><strong>Efficacy</strong></td><td>30-40% symptom improvement</td><td>20-35% symptom improvement</td></tr>
<tr><td><strong>Anaphylaxis Risk</strong></td><td>~0.1% per injection (higher during buildup)</td><td>Very rare (first dose in office required)</td></tr>
<tr><td><strong>Observation</strong></td><td>30 minutes post-injection required</td><td>First dose in office; home administration thereafter</td></tr>
<tr><td><strong>FDA-approved SLIT</strong></td><td>N/A</td><td>Grastek (grass), Ragwitek (ragweed), Odactra (dust mite), Palforzia (peanut OIT — not SLIT)</td></tr></table>
<div class="danger"><strong>⚠️ Contraindications:</strong> Uncontrolled asthma (FEV1 &lt;70%), beta-blocker use (relative — increases risk/severity of anaphylaxis and limits treatment), severe immunodeficiency, inability to use epinephrine, pregnancy (do not initiate — may continue if established). SCIT should not be administered during active asthma exacerbation.</div>
</div></div>

<div class="card"><div class="card-header"><div class="card-phase">TREATMENT</div><div class="card-title">Venom Immunotherapy & Special Considerations</div></div><div class="card-body">
<h3>Venom Immunotherapy (VIT)</h3>
<p>VIT is the gold standard for Hymenoptera venom allergy with a history of systemic reaction. It reduces risk of future systemic reactions from <strong>60% → 2-5%</strong>.</p>
<table class="compare-table"><tr><th>Feature</th><th>Details</th></tr>
<tr><td><strong>Indications</strong></td><td>History of systemic reaction (not just large local) + positive venom skin test or specific IgE</td></tr>
<tr><td><strong>Protocol</strong></td><td>Buildup to maintenance dose of 100 μg (conventional: weekly × 8-16 weeks; rush: 1-2 days; cluster: 2-3 visits)</td></tr>
<tr><td><strong>Duration</strong></td><td>Minimum 5 years. Consider lifelong in: mastocytosis, elevated baseline tryptase, history of very severe reaction, honeybee allergy.</td></tr>
<tr><td><strong>Efficacy</strong></td><td>95-98% protection from future systemic reactions</td></tr>
<tr><td><strong>Monitoring</strong></td><td>Serum venom-specific IgE may decline. Negative skin test at 3-5 years supports discontinuation (except high-risk patients).</td></tr></table>
<div class="pearl"><strong>🔑 Board Pearl:</strong> All patients receiving VIT must carry <strong>epinephrine auto-injectors</strong> throughout treatment and for at least 1-2 years after stopping. Patients with mastocytosis or elevated baseline tryptase should continue VIT indefinitely — they have higher risk of fatal sting anaphylaxis.</div>
<h3>Disease-Modifying Effects</h3>
<p>AIT is the only allergic treatment that can: prevent new allergen sensitizations, prevent progression from allergic rhinitis to asthma (especially in children), provide sustained benefit after discontinuation, and fundamentally alter the natural history of allergic disease.</p>
</div></div>'''

ait_mcqs = mcq(0, 6, "Which immunoglobulin subclass is considered the primary 'blocking antibody' induced by allergen immunotherapy?",
    [("A", "IgE", False, "IgE is the pathogenic antibody in allergic disease. While allergen-specific IgE initially rises then declines with immunotherapy, it is not the blocking antibody."),
     ("B", "IgG4", True, "Correct! IgG4 is the key blocking antibody induced by allergen immunotherapy. It competes with IgE for allergen binding on mast cells and basophils, preventing crosslinking and degranulation. IgG4 levels rise early during immunotherapy, correlate with clinical improvement, and can serve as a biomarker of successful immune tolerance induction."),
     ("C", "IgA", False, "IgA plays a role in mucosal immunity but is not the primary blocking antibody in allergen immunotherapy."),
     ("D", "IgM", False, "IgM is a primary immune response antibody and is not significantly modulated by allergen immunotherapy.")])

ait_mcqs += mcq(1, 6, "A patient on SCIT develops throat tightness and urticaria 15 minutes after injection. What is the FIRST step?",
    [("A", "Administer diphenhydramine 50 mg orally and observe", False, "This is anaphylaxis — antihistamines are adjunctive but NOT first-line. Epinephrine must be given immediately."),
     ("B", "Epinephrine 0.3 mg IM in the anterolateral thigh", True, "Correct! This is anaphylaxis and requires immediate IM epinephrine. This is why SCIT requires 30-minute post-injection observation in a medical office with epinephrine available. After treatment, the immunotherapy dose should be reduced, and the patient should be counseled about the reaction. The protocol may need adjustment (slower buildup, premedication, or dose reduction)."),
     ("C", "Apply a tourniquet above the injection site", False, "Tourniquets are not recommended in anaphylaxis management. Epinephrine is the immediate priority."),
     ("D", "Administer the patient's maintenance inhaler", False, "While bronchospasm may be present, systemic anaphylaxis requires epinephrine first, not inhaled bronchodilators alone.")])

ait_mcqs += mcq(2, 6, "Venom immunotherapy reduces the risk of future systemic sting reactions from approximately 60% to what percentage?",
    [("A", "20-30%", False, "VIT is much more effective than this."),
     ("B", "10-15%", False, "VIT provides better protection than this."),
     ("C", "2-5%", True, "Correct! VIT is remarkably effective, reducing systemic reaction risk from ~60% to 2-5% — a 95-98% protection rate. This makes it one of the most effective immunotherapy interventions in medicine. Standard protocol: buildup to 100 μg maintenance dose, continued for minimum 5 years. High-risk patients (mastocytosis, elevated baseline tryptase) may need lifelong treatment."),
     ("D", "0% (complete elimination)", False, "VIT is highly effective but not 100%. A small residual risk of 2-5% remains even with optimal treatment.")])

ait_mcqs += mcq(3, 6, "Which patient should receive LIFELONG venom immunotherapy rather than the standard 5-year course?",
    [("A", "A 25-year-old with large local reactions to bee stings", False, "Large local reactions alone do not require VIT at all — they carry <5% risk of systemic reaction and are managed with local measures."),
     ("B", "A 45-year-old with mastocytosis and history of venom anaphylaxis", True, "Correct! Patients with mastocytosis (or elevated baseline tryptase >11.4 ng/mL) have a significantly higher risk of fatal anaphylaxis from Hymenoptera stings and a high relapse rate after stopping VIT. Guidelines recommend lifelong VIT in these patients. Other considerations for extended therapy: history of very severe (near-fatal) sting reaction, honeybee allergy (higher relapse rate than vespid), and patient anxiety about stopping."),
     ("C", "A 10-year-old with cutaneous-only systemic reaction to wasp sting", False, "Children with cutaneous-only systemic reactions (urticaria/angioedema without respiratory or cardiovascular compromise) have excellent prognosis and may not need VIT at all."),
     ("D", "A 30-year-old with seasonal allergic rhinitis on SCIT", False, "This describes aeroallergen immunotherapy, not VIT. Standard duration is 3-5 years.")])

ait_mcqs += mcq(4, 6, "A patient wants to start allergen immunotherapy. FEV1 is 62% predicted and they had an ER visit for asthma last month. What is the appropriate recommendation?",
    [("A", "Proceed with SLIT since it is safer than SCIT", False, "Neither SCIT nor SLIT should be initiated with uncontrolled asthma. FEV1 <70% is a contraindication."),
     ("B", "Start SCIT with rush protocol for faster benefit", False, "Rush protocols carry HIGHER anaphylaxis risk and are absolutely contraindicated in uncontrolled asthma."),
     ("C", "Optimize asthma control first; initiate immunotherapy when FEV1 >70% and asthma is stable", True, "Correct! Uncontrolled asthma (FEV1 <70% predicted) is a contraindication to initiating allergen immunotherapy due to increased risk of severe bronchospasm and fatal anaphylaxis. The patient needs asthma optimization first (step-up controller therapy, adherence, trigger avoidance). Once FEV1 >70% and stable for ≥3 months, immunotherapy can be started. Existing SCIT patients should also have injections held during asthma exacerbations."),
     ("D", "Start immunotherapy immediately — it will improve asthma", False, "While AIT can improve allergic asthma long-term, initiating during uncontrolled asthma is dangerous.")])

ait_mcqs += mcq(5, 6, "Which disease-modifying effect is UNIQUE to allergen immunotherapy compared to pharmacotherapy?",
    [("A", "Symptom relief during treatment", False, "Pharmacotherapy (antihistamines, nasal steroids) also provides symptom relief during treatment. This is not unique to AIT."),
     ("B", "Prevention of progression from allergic rhinitis to asthma", True, "Correct! AIT is the ONLY treatment that can prevent the 'allergic march' — the progression from allergic rhinitis to asthma, particularly in children. The PAT (Preventive Allergy Treatment) study showed that AIT in children with allergic rhinitis reduced new asthma development by ~50% over 10 years. AIT also prevents new allergen sensitizations and provides sustained benefit after discontinuation — effects no pharmacotherapy can achieve."),
     ("C", "Reduction in nasal congestion", False, "Nasal corticosteroids also reduce congestion effectively. This is not unique to AIT."),
     ("D", "Improvement in quality of life scores", False, "Both pharmacotherapy and AIT improve quality of life during treatment.")])

ait_refs = '<a href="https://www.ncbi.nlm.nih.gov/books/NBK538161/" target="_blank" class="cross-link"><div class="cross-link-title">📄 Immunotherapy - StatPearls</div></a><a href="https://pubmed.ncbi.nlm.nih.gov/28602936/" target="_blank" class="cross-link"><div class="cross-link-title">📄 AAAAI/ACAAI Practice Parameters</div></a>'
ait_cross = '<a href="../deep-dive-player.html?module=immunotherapy-allergy-deep-dive" class="cross-link"><div class="cross-link-title">📖 Deep Dive</div><div style="font-size:.75rem;color:var(--muted)">Comprehensive review</div></a><a href="../cases/immunotherapy-allergy-expanded-adventure.html" class="cross-link"><div class="cross-link-title">🎮 Clinical Adventure</div><div style="font-size:.75rem;color:var(--muted)">Interactive case simulation</div></a>'

modules['immunotherapy-allergy-module.html'] = build_module("Allergen Immunotherapy", "ALLERGY/IMMUNOLOGY", "💉", ait_content, ait_mcqs, ait_refs, ait_cross)

# Write first batch
for fname, html in modules.items():
    path = f'modules/{fname}'
    with open(path, 'w') as f:
        f.write(html)
    print(f"Created {path} ({len(html):,} bytes)")

