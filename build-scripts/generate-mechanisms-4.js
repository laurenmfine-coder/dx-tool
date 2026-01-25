// MechanismDx Module Batch Generator - Part 4 (High Priority)
const fs = require('fs');
const path = require('path');

const MECH_DIR = '/home/claude/DxSuite/mechanism';

function createMechHTML(t) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.name}: Pathophysiology | MechanismDx</title>
    <style>
        :root{--primary:#0891b2;--primary-dark:#0e7490;--primary-bg:#ecfeff;--bg:#f8fafc;--card:#fff;--border:#e2e8f0;--text:#1e293b}
        *{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',-apple-system,sans-serif;background:var(--bg);color:var(--text);line-height:1.7}
        .header{background:linear-gradient(135deg,var(--primary) 0%,var(--primary-dark) 100%);padding:32px 24px;color:#fff}
        .header-inner{max-width:900px;margin:0 auto}.breadcrumb{font-size:13px;color:rgba(255,255,255,0.7);margin-bottom:12px}
        .breadcrumb a{color:rgba(255,255,255,0.9);text-decoration:none}.header h1{font-size:28px;font-weight:700;margin-bottom:8px}
        .content{max-width:900px;margin:0 auto;padding:32px 24px}
        .objectives{background:linear-gradient(135deg,var(--primary-bg) 0%,#d1fae5 100%);border:1px solid var(--primary);border-radius:16px;padding:24px;margin-bottom:32px}
        .objectives h2{color:#047857;font-size:16px;margin-bottom:12px}.objectives ul{margin-left:24px;color:#065f46}
        .section{background:var(--card);border-radius:16px;padding:28px;margin-bottom:24px;box-shadow:0 1px 3px rgba(0,0,0,0.05)}
        .section h2{color:var(--primary-dark);font-size:1.25rem;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid var(--primary-bg)}
        .section h3{color:var(--text);font-size:1rem;margin:16px 0 8px}.section p{margin-bottom:12px}
        .pathway-box{background:#fef3c7;border:1px solid #f59e0b;border-radius:12px;padding:16px;margin:16px 0}
        .pathway-box h4{color:#92400e;font-size:0.9rem;margin-bottom:8px}
        .pathway-steps{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
        .pathway-step{background:#fff;border:1px solid #fbbf24;padding:8px 14px;border-radius:8px;font-size:0.85rem}
        .pathway-arrow{color:#f59e0b;font-weight:bold}
        .clinical-box{background:#f0fdf4;border:1px solid #22c55e;border-radius:12px;padding:16px;margin:16px 0}
        .clinical-box h4{color:#166534;font-size:0.9rem;margin-bottom:8px}
        .key-point{background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:12px 0;border-radius:0 8px 8px 0}
        .mcq-container{background:#f8fafc;border:1px solid var(--border);border-radius:12px;padding:20px;margin:20px 0}
        .mcq-question{font-weight:600;margin-bottom:16px}.mcq-options{display:flex;flex-direction:column;gap:8px}
        .mcq-option{padding:12px 16px;border:2px solid var(--border);border-radius:10px;cursor:pointer;transition:all 0.2s}
        .mcq-option:hover{border-color:var(--primary);background:var(--primary-bg)}
        .mcq-option.correct{border-color:#22c55e;background:#f0fdf4}.mcq-option.incorrect{border-color:#ef4444;background:#fef2f2}
        .mcq-feedback{margin-top:12px;padding:12px;border-radius:8px;display:none}.mcq-feedback.show{display:block}
        .mcq-feedback.correct{background:#f0fdf4;color:#166534}.mcq-feedback.incorrect{background:#fef2f2;color:#991b1b}
        .nav-links{display:flex;gap:12px;margin-top:32px;flex-wrap:wrap}
        .nav-link{padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:600;font-size:0.9rem}
        .nav-link.back{background:var(--card);border:1px solid var(--border);color:var(--text)}
        .nav-link.adventure{background:var(--primary);color:#fff}
        .warning-box{background:#fef2f2;border:1px solid #ef4444;border-radius:12px;padding:16px;margin:16px 0}
        .warning-box h4{color:#991b1b;font-size:0.9rem;margin-bottom:8px}
        .comparison-table{width:100%;border-collapse:collapse;margin:16px 0}
        .comparison-table th,.comparison-table td{border:1px solid var(--border);padding:10px;text-align:left;font-size:0.9rem}
        .comparison-table th{background:var(--primary-bg);color:var(--primary-dark)}
    </style>
</head>
<body>
    <header class="header"><div class="header-inner">
        <div class="breadcrumb"><a href="../index.html">DxSuite</a> → <a href="index.html">MechanismDx</a> → ${t.name}</div>
        <h1>⚙️ ${t.name}</h1>
        <div style="font-size:15px;color:rgba(255,255,255,0.85)">Pathophysiology | ${t.category}</div>
    </div></header>
    <div class="content">
        <div class="objectives"><h2>🎯 Learning Objectives</h2><ul>${t.keyPoints.map(k=>`<li>${k}</li>`).join('')}</ul></div>
        <div class="section"><h2>🔬 Core Pathophysiology</h2>
${t.pathways.map(p=>`<h3>${p.title}</h3><p>${p.description}</p>
<div class="pathway-box"><h4>Pathway</h4><div class="pathway-steps">${p.steps.map((s,i)=>`<span class="pathway-step">${s}</span>${i<p.steps.length-1?'<span class="pathway-arrow">→</span>':''}`).join('')}</div></div>`).join('\n')}
${t.extraContent || ''}</div>
        <div class="section"><h2>🏥 Clinical Correlations</h2>
${t.clinicalCorrelations.map(c=>`<div class="clinical-box"><h4>${c.finding}</h4><p><strong>Mechanism:</strong> ${c.mechanism}</p><p><strong>Significance:</strong> ${c.significance}</p></div>`).join('\n')}</div>
        <div class="section"><h2>📝 Knowledge Check</h2>
${t.mcqs.map((m,i)=>`<div class="mcq-container" id="mcq${i}"><div class="mcq-question">${i+1}. ${m.question}</div>
<div class="mcq-options">${m.options.map((o,j)=>`<div class="mcq-option" onclick="check(${i},${j},${o.correct})">${String.fromCharCode(65+j)}. ${o.text}</div>`).join('')}</div>
<div class="mcq-feedback" id="fb${i}"></div></div>`).join('\n')}</div>
        <div class="section"><h2>🔑 Key Takeaways</h2>${t.keyPoints.map(k=>`<div class="key-point"><strong>✓</strong> ${k}</div>`).join('\n')}</div>
        <div class="nav-links"><a href="index.html" class="nav-link back">← Back to MechanismDx</a><a href="../ReasonDx/adventure-hub.html" class="nav-link adventure">Practice Cases →</a></div>
    </div>
    <script>
const fb=${JSON.stringify(t.mcqs.map(m=>({c:m.explanation,i:m.incorrectExplanation||"Review the pathophysiology."})))};
function check(q,o,correct){const c=document.getElementById('mcq'+q);const opts=c.querySelectorAll('.mcq-option');const f=document.getElementById('fb'+q);
opts.forEach((e,i)=>{e.style.pointerEvents='none';if(i===o)e.classList.add(correct?'correct':'incorrect');});
f.className='mcq-feedback show '+(correct?'correct':'incorrect');f.innerHTML='<strong>'+(correct?'✓ Correct!':'✗ Not quite')+'</strong><br>'+(correct?fb[q].c:fb[q].i);}
    </script>
</body>
</html>`;
}

const topics = [
    {
        id: 'cardiac-tamponade',
        name: 'Cardiac Tamponade',
        category: 'Cardiology',
        pathways: [
            { title: 'Pericardial Pressure Dynamics', description: 'Fluid accumulation in the pericardial space compresses the heart, impairing filling.', steps: ['Pericardial fluid accumulation', 'Intrapericardial pressure rises', 'Compression of cardiac chambers', 'Impaired diastolic filling', 'Decreased cardiac output'] },
            { title: 'Compensatory Mechanisms', description: 'The body attempts to maintain cardiac output through several mechanisms.', steps: ['Decreased CO detected', 'Sympathetic activation', 'Tachycardia + vasoconstriction', 'Increased CVP', 'Eventually decompensation → shock'] }
        ],
        clinicalCorrelations: [
            { finding: 'Beck\'s Triad (hypotension, JVD, muffled heart sounds)', mechanism: 'Hypotension from low CO; JVD from impaired venous return; muffled sounds from fluid', significance: 'Classic triad - present in only ~30% but highly specific' },
            { finding: 'Pulsus paradoxus (>10 mmHg drop in SBP with inspiration)', mechanism: 'Inspiration increases RV filling, shifts septum left, further impairs LV filling', significance: '>10 mmHg is abnormal; >20 mmHg suggests severe tamponade' },
            { finding: 'Electrical alternans on ECG', mechanism: 'Heart swinging in pericardial fluid causes alternating QRS amplitude', significance: 'Specific but not sensitive; indicates large effusion' }
        ],
        mcqs: [
            { question: 'Which chamber is compressed FIRST in tamponade?', options: [{ text: 'Left ventricle', correct: false }, { text: 'Right atrium', correct: true }, { text: 'Left atrium', correct: false }, { text: 'Right ventricle', correct: false }], explanation: 'The right atrium has the lowest intracavitary pressure and thinnest wall, making it the first chamber to be compressed. This is why RA collapse in diastole is an early echo finding of tamponade.', incorrectExplanation: 'The RA is compressed first due to its low pressure and thin wall.' },
            { question: 'A patient with tamponade and hypotension should receive:', options: [{ text: 'Diuretics to reduce preload', correct: false }, { text: 'IV fluids while preparing for pericardiocentesis', correct: true }, { text: 'Vasodilators', correct: false }, { text: 'Beta-blockers', correct: false }], explanation: 'IV fluids increase preload, helping maintain CO until definitive drainage. Diuretics and vasodilators would worsen hypotension. Beta-blockers would prevent compensatory tachycardia.', incorrectExplanation: 'Patients need volume to maintain preload while awaiting pericardiocentesis.' }
        ],
        keyPoints: ['Beck\'s triad: hypotension, JVD, muffled heart sounds', 'Pulsus paradoxus >10 mmHg is abnormal', 'RA collapses first (lowest pressure chamber)', 'Treatment: pericardiocentesis; IV fluids as bridge', 'Avoid diuretics, vasodilators, and negative inotropes']
    },
    {
        id: 'acid-base',
        name: 'Acid-Base Interpretation',
        category: 'Critical Care',
        pathways: [
            { title: 'Metabolic Acidosis', description: 'Primary decrease in HCO3 with respiratory compensation.', steps: ['↓ HCO3 (acid gain or base loss)', 'pH falls', 'Respiratory compensation (hyperventilation)', '↓ pCO2 (Winter\'s formula)', 'Expected pCO2 = 1.5(HCO3) + 8 ± 2'] },
            { title: 'Respiratory Acidosis', description: 'Primary increase in pCO2 from hypoventilation.', steps: ['Hypoventilation', '↑ pCO2', 'pH falls', 'Renal compensation (↑ HCO3)', 'Acute: ↑1 HCO3 per 10 ↑pCO2', 'Chronic: ↑3.5 HCO3 per 10 ↑pCO2'] },
            { title: 'Anion Gap Calculation', description: 'AG = Na - (Cl + HCO3). Normal 8-12.', steps: ['Calculate AG', 'If elevated → MUDPILES causes', 'Calculate delta-delta ratio', 'Delta AG / Delta HCO3', 'Identifies additional disorders'] }
        ],
        extraContent: `<div class="warning-box"><h4>⚠️ MUDPILES - Causes of Anion Gap Metabolic Acidosis</h4><p><strong>M</strong>ethanol, <strong>U</strong>remia, <strong>D</strong>KA, <strong>P</strong>ropylene glycol, <strong>I</strong>soniazid/Iron, <strong>L</strong>actic acidosis, <strong>E</strong>thylene glycol, <strong>S</strong>alicylates</p></div>`,
        clinicalCorrelations: [
            { finding: 'Kussmaul respirations', mechanism: 'Deep, rapid breathing to blow off CO2 and compensate for metabolic acidosis', significance: 'Classic for DKA; indicates severe metabolic acidosis' },
            { finding: 'Elevated anion gap', mechanism: 'Unmeasured anions (lactate, ketones, toxins) accumulate', significance: 'Points to specific causes (MUDPILES) vs normal AG acidosis' },
            { finding: 'Delta-delta ratio >2', mechanism: 'HCO3 hasn\'t dropped as much as expected for the AG elevation', significance: 'Indicates concurrent metabolic alkalosis' }
        ],
        mcqs: [
            { question: 'pH 7.28, pCO2 24, HCO3 11, Na 140, Cl 100. What is the primary disorder?', options: [{ text: 'Respiratory acidosis', correct: false }, { text: 'Anion gap metabolic acidosis', correct: true }, { text: 'Non-anion gap metabolic acidosis', correct: false }, { text: 'Metabolic alkalosis', correct: false }], explanation: 'Low pH + low HCO3 = metabolic acidosis. AG = 140 - (100 + 11) = 29 (elevated). This is an anion gap metabolic acidosis. Check Winter\'s formula: expected pCO2 = 1.5(11) + 8 = 24.5 ✓ appropriate compensation.', incorrectExplanation: 'Calculate the anion gap: Na - (Cl + HCO3) = 29, which is elevated.' },
            { question: 'When is the delta-delta ratio useful?', options: [{ text: 'To determine if compensation is appropriate', correct: false }, { text: 'To identify a concurrent metabolic disorder in AG acidosis', correct: true }, { text: 'To calculate expected pCO2', correct: false }, { text: 'To diagnose respiratory alkalosis', correct: false }], explanation: 'Delta-delta = (AG - 12) / (24 - HCO3). If <1: concurrent NAGMA. If 1-2: pure AGMA. If >2: concurrent metabolic alkalosis. Only useful when AG is elevated.', incorrectExplanation: 'Delta-delta identifies hidden metabolic disorders when AG acidosis is present.' }
        ],
        keyPoints: ['Step 1: pH → acidemia or alkalemia?', 'Step 2: Primary disorder (pCO2 or HCO3)?', 'Step 3: Appropriate compensation?', 'Step 4: If metabolic acidosis, calculate anion gap', 'Step 5: If AG elevated, calculate delta-delta for hidden disorders']
    },
    {
        id: 'apap-overdose',
        name: 'Acetaminophen Overdose',
        category: 'Toxicology',
        pathways: [
            { title: 'NAPQI Toxicity', description: 'Toxic metabolite accumulates when glutathione is depleted.', steps: ['APAP ingestion', 'CYP2E1 metabolism → NAPQI', 'Glutathione conjugation (normally)', 'Glutathione depletion in overdose', 'NAPQI binds hepatocytes → necrosis'] },
            { title: 'Clinical Phases', description: 'APAP toxicity progresses through predictable stages.', steps: ['Phase 1 (0-24h): N/V or asymptomatic', 'Phase 2 (24-72h): RUQ pain, ↑LFTs', 'Phase 3 (72-96h): Peak hepatotoxicity', 'Phase 4 (>96h): Recovery or death'] }
        ],
        clinicalCorrelations: [
            { finding: 'Asymptomatic early presentation', mechanism: 'Hepatocyte damage takes time to manifest', significance: 'CRITICAL: Do not be falsely reassured by well-appearing patient' },
            { finding: 'RUQ pain at 24-48 hours', mechanism: 'Hepatocyte necrosis causing capsular stretch', significance: 'Indicates hepatotoxicity developing; check LFTs' },
            { finding: 'PT/INR elevation', mechanism: 'Liver unable to synthesize clotting factors', significance: 'Best marker of synthetic function; prognostic indicator' }
        ],
        mcqs: [
            { question: 'When should NAC be initiated for APAP overdose?', options: [{ text: 'Only after APAP level returns', correct: false }, { text: 'Within 8 hours of ingestion for best outcomes', correct: true }, { text: 'Only if patient is symptomatic', correct: false }, { text: 'After LFTs are elevated', correct: false }], explanation: 'NAC is nearly 100% effective if given within 8 hours. Efficacy decreases after 8 hours but still beneficial up to 24h+. Start empirically if ingestion >150mg/kg and >8h delay expected for level.', incorrectExplanation: 'NAC is most effective within 8 hours - don\'t wait for symptoms or labs.' },
            { question: 'The Rumack-Matthew nomogram is valid for:', options: [{ text: 'All APAP ingestions', correct: false }, { text: 'Single acute ingestion with known time', correct: true }, { text: 'Chronic ingestions', correct: false }, { text: 'Extended-release preparations', correct: false }], explanation: 'The nomogram is only valid for single acute ingestions with known time of ingestion, starting at 4 hours post-ingestion. It is NOT valid for chronic ingestions, unknown time, or extended-release formulations.', incorrectExplanation: 'The nomogram requires single acute ingestion with known time of ingestion.' }
        ],
        keyPoints: ['NAPQI is the toxic metabolite; glutathione depletion → hepatotoxicity', 'Patient may be asymptomatic for 24 hours despite lethal ingestion', 'NAC within 8 hours is nearly 100% protective', 'Rumack-Matthew nomogram: single acute ingestion with known time only', 'King\'s College Criteria for liver transplant consideration']
    },
    {
        id: 'toxidromes',
        name: 'Toxidromes',
        category: 'Toxicology',
        pathways: [
            { title: 'Sympathomimetic', description: 'Excess catecholamine activity.', steps: ['↑ NE/dopamine release or reuptake inhibition', 'CNS stimulation', 'Tachycardia, HTN, hyperthermia', 'Mydriasis, DIAPHORESIS', 'Agitation, seizures'] },
            { title: 'Anticholinergic', description: 'Muscarinic receptor blockade.', steps: ['ACh receptor blockade', 'Loss of parasympathetic tone', 'Tachycardia, DRY skin', 'Mydriasis, urinary retention', 'Hyperthermia, delirium'] },
            { title: 'Cholinergic (SLUDGE/DUMBELS)', description: 'Excess acetylcholine activity.', steps: ['AChE inhibition', 'ACh accumulation', 'SLUDGE: Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis', 'Bradycardia, miosis', 'Bronchorrhea, bronchospasm'] },
            { title: 'Opioid', description: 'Mu-receptor agonism.', steps: ['Mu-receptor activation', 'CNS depression', 'Respiratory depression', 'Miosis (pinpoint pupils)', 'Decreased GI motility'] },
            { title: 'Sedative-Hypnotic', description: 'GABA enhancement.', steps: ['GABA-A potentiation', 'CNS depression', 'Respiratory depression', 'Normal pupils', 'Hypothermia'] }
        ],
        extraContent: `<table class="comparison-table">
<tr><th>Toxidrome</th><th>Pupils</th><th>Skin</th><th>Vitals</th><th>Key Feature</th></tr>
<tr><td>Sympathomimetic</td><td>Dilated</td><td>Diaphoretic</td><td>↑HR, ↑BP, ↑Temp</td><td>WET + agitated</td></tr>
<tr><td>Anticholinergic</td><td>Dilated</td><td>DRY, flushed</td><td>↑HR, ↑Temp</td><td>DRY + delirious</td></tr>
<tr><td>Cholinergic</td><td>Constricted</td><td>Diaphoretic</td><td>↓HR (or ↑)</td><td>SLUDGE</td></tr>
<tr><td>Opioid</td><td>Pinpoint</td><td>Normal</td><td>↓HR, ↓RR</td><td>Resp depression</td></tr>
<tr><td>Sedative-Hypnotic</td><td>Normal/small</td><td>Normal</td><td>↓RR, ↓Temp</td><td>CNS depression</td></tr>
</table>`,
        clinicalCorrelations: [
            { finding: 'Wet vs Dry skin', mechanism: 'Sympathomimetic = diaphoresis; Anticholinergic = dry', significance: 'KEY differentiator between these similar-appearing toxidromes' },
            { finding: 'Pinpoint pupils + respiratory depression', mechanism: 'Mu-receptor activation', significance: 'Pathognomonic for opioid toxicity' },
            { finding: 'SLUDGE symptoms', mechanism: 'Cholinergic excess from organophosphate/nerve agent', significance: 'Treat with atropine (muscarinic blocker) + pralidoxime' }
        ],
        mcqs: [
            { question: 'A patient has tachycardia, dilated pupils, hyperthermia, and DRY skin. Toxidrome?', options: [{ text: 'Sympathomimetic', correct: false }, { text: 'Anticholinergic', correct: true }, { text: 'Serotonin syndrome', correct: false }, { text: 'Opioid', correct: false }], explanation: 'DRY skin is the key! Anticholinergic = "Blind as a bat, Dry as a bone, Red as a beet, Mad as a hatter, Hot as a hare." Sympathomimetic looks similar but has DIAPHORESIS (wet).', incorrectExplanation: 'The DRY skin distinguishes anticholinergic from sympathomimetic toxidrome.' },
            { question: 'Antidote for organophosphate poisoning?', options: [{ text: 'Naloxone', correct: false }, { text: 'Flumazenil', correct: false }, { text: 'Atropine + Pralidoxime', correct: true }, { text: 'Physostigmine', correct: false }], explanation: 'Atropine blocks muscarinic effects (SLUDGE). Pralidoxime (2-PAM) reactivates AChE if given early (before "aging"). Physostigmine is an AChE INHIBITOR - it would make this worse!', incorrectExplanation: 'Organophosphates need atropine (blocks ACh effects) and pralidoxime (reactivates AChE).' }
        ],
        keyPoints: ['Sympathomimetic vs Anticholinergic: WET vs DRY skin', 'Opioid triad: CNS depression, respiratory depression, miosis', 'Cholinergic (SLUDGE): atropine + pralidoxime', 'Know the antidotes: naloxone (opioid), flumazenil (benzo), physostigmine (anticholinergic)', 'Serotonin syndrome: clonus + hyperthermia + AMS → cyproheptadine']
    },
    {
        id: 'malignant-hyperthermia',
        name: 'Malignant Hyperthermia',
        category: 'Anesthesia/Critical Care',
        pathways: [
            { title: 'Calcium Release Cascade', description: 'Genetic mutation in RYR1 causes uncontrolled calcium release from sarcoplasmic reticulum.', steps: ['Triggering agent exposure', 'RYR1 channel dysfunction', 'Uncontrolled Ca²⁺ release from SR', 'Sustained muscle contraction', 'Hypermetabolism → heat + CO2 + lactate'] }
        ],
        extraContent: `<div class="warning-box"><h4>⚠️ Triggering Agents</h4><p><strong>Volatile anesthetics:</strong> Sevoflurane, desflurane, isoflurane, halothane</p><p><strong>Depolarizing NMB:</strong> Succinylcholine</p><p><strong>SAFE:</strong> Propofol, opioids, nitrous oxide, non-depolarizing NMBs, local anesthetics</p></div>`,
        clinicalCorrelations: [
            { finding: 'Rising ETCO2 (earliest sign)', mechanism: 'Hypermetabolism produces excess CO2', significance: 'Often the FIRST sign during anesthesia; unexplained rise should trigger suspicion' },
            { finding: 'Masseter muscle rigidity after succinylcholine', mechanism: 'Abnormal calcium handling causes sustained contraction', significance: 'May be early warning sign; 50% association with MH susceptibility' },
            { finding: 'Hyperthermia (late sign)', mechanism: 'Heat generated from sustained muscle contraction', significance: 'Temperature rises 1-2°C every 5 minutes; can exceed 43°C' }
        ],
        mcqs: [
            { question: 'What is the definitive treatment for malignant hyperthermia?', options: [{ text: 'Active cooling only', correct: false }, { text: 'Dantrolene 2.5 mg/kg IV', correct: true }, { text: 'Calcium channel blockers', correct: false }, { text: 'Succinylcholine', correct: false }], explanation: 'Dantrolene blocks RYR1 calcium release channels, stopping the hypermetabolic cascade. Initial dose 2.5 mg/kg IV, repeat every 5-10 min until symptoms resolve (up to 10 mg/kg). Also: stop triggers, hyperventilate with 100% O2, cool actively.', incorrectExplanation: 'Dantrolene is the specific antidote - it blocks calcium release from the sarcoplasmic reticulum.' },
            { question: 'Which is the EARLIEST sign of MH during anesthesia?', options: [{ text: 'Fever', correct: false }, { text: 'Tachycardia', correct: false }, { text: 'Rising end-tidal CO2', correct: true }, { text: 'Dark urine', correct: false }], explanation: 'Rising ETCO2 is often the earliest sign because hypermetabolism immediately increases CO2 production. Hyperthermia is actually a LATE sign. Tachycardia is common but nonspecific.', incorrectExplanation: 'ETCO2 rise reflects increased metabolism and is often the first sign detected.' }
        ],
        keyPoints: ['RYR1 mutation → uncontrolled calcium release → hypermetabolism', 'Triggers: volatile anesthetics, succinylcholine', 'ETCO2 rise is earliest sign; hyperthermia is LATE', 'Dantrolene 2.5 mg/kg IV is definitive treatment', 'MH Hotline: 1-800-644-9737 (MHAUS)']
    },
    {
        id: 'delirium',
        name: 'Delirium',
        category: 'Psychiatry',
        pathways: [
            { title: 'Neurotransmitter Imbalance', description: 'Delirium results from disruption of multiple neurotransmitter systems.', steps: ['Precipitating factor(s)', 'Acetylcholine deficiency', 'Dopamine excess', 'GABA/glutamate imbalance', 'Global cerebral dysfunction'] },
            { title: 'Risk Factor Model', description: 'Delirium = predisposing + precipitating factors exceeding threshold.', steps: ['Predisposing: age, dementia, sensory impairment', 'Precipitating: infection, meds, metabolic', 'Low reserve patient + minor insult = delirium', 'High reserve patient needs major insult'] }
        ],
        clinicalCorrelations: [
            { finding: 'Acute onset with fluctuating course', mechanism: 'Acute cerebral dysfunction waxes and wanes', significance: 'KEY feature distinguishing delirium from dementia' },
            { finding: 'Inattention', mechanism: 'Disrupted arousal systems (reticular activating system)', significance: 'Cardinal feature; test with digit span, months backward' },
            { finding: 'Hypoactive presentation ("quiet delirium")', mechanism: 'Same pathophysiology but presents with withdrawal/lethargy', significance: 'Often missed; worse prognosis than hyperactive type' }
        ],
        mcqs: [
            { question: 'Which feature BEST distinguishes delirium from dementia?', options: [{ text: 'Memory impairment', correct: false }, { text: 'Acute onset with fluctuating course', correct: true }, { text: 'Age over 65', correct: false }, { text: 'Disorientation', correct: false }], explanation: 'Delirium is ACUTE (hours to days) and FLUCTUATES. Dementia is chronic (months to years) and stable day-to-day. Both can have memory impairment and disorientation.', incorrectExplanation: 'The acute, fluctuating course is what distinguishes delirium from dementia.' },
            { question: 'First-line treatment for delirium is:', options: [{ text: 'Haloperidol', correct: false }, { text: 'Benzodiazepines', correct: false }, { text: 'Treat underlying cause + non-pharmacologic interventions', correct: true }, { text: 'Physical restraints', correct: false }], explanation: 'Identify and treat the underlying cause (UTI, meds, metabolic). Non-pharmacologic: reorientation, sleep hygiene, mobilization, avoid restraints/catheters. Antipsychotics only for severe agitation threatening safety.', incorrectExplanation: 'Address the underlying cause first; medications are second-line for safety issues only.' }
        ],
        keyPoints: ['Acute onset + fluctuating course + inattention = delirium', 'Always look for underlying cause (infection, meds, metabolic)', 'Hypoactive delirium is often missed and has worse prognosis', 'Non-pharmacologic interventions first; antipsychotics only if needed for safety', 'Delirium is a medical emergency with increased mortality']
    }
];

topics.forEach(t => {
    fs.writeFileSync(path.join(MECH_DIR, `${t.id}-module.html`), createMechHTML(t));
    console.log(`Created: ${t.id}-module.html`);
});

console.log(`\nGenerated ${topics.length} mechanism modules`);
