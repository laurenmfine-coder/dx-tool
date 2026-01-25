// MechanismDx Module Batch Generator - Part 3
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
<div class="pathway-box"><h4>Pathway</h4><div class="pathway-steps">${p.steps.map((s,i)=>`<span class="pathway-step">${s}</span>${i<p.steps.length-1?'<span class="pathway-arrow">→</span>':''}`).join('')}</div></div>`).join('\n')}</div>
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
        id: 'hypoglycemia',
        name: 'Hypoglycemia',
        category: 'Endocrine',
        pathways: [
            { title: 'Counter-Regulatory Response', description: 'The body has multiple mechanisms to raise blood glucose when it falls.', steps: ['Glucose <70 mg/dL', 'Glucagon release (alpha cells)', 'Epinephrine release (adrenal medulla)', 'Cortisol + GH release', 'Glycogenolysis + gluconeogenesis'] },
            { title: 'Neuroglycopenic Symptoms', description: 'Brain depends on glucose and cannot store it, leading to dysfunction when supply is inadequate.', steps: ['Glucose <50-55 mg/dL', 'Inadequate neuronal ATP', 'Cortical dysfunction', 'Confusion, seizures', 'Coma if prolonged'] }
        ],
        clinicalCorrelations: [
            { finding: 'Adrenergic symptoms (tremor, sweating, palpitations)', mechanism: 'Epinephrine release as counter-regulatory response', significance: 'Warning symptoms that precede neuroglycopenia; may be blunted in hypoglycemia unawareness' },
            { finding: 'Confusion/altered mental status', mechanism: 'Inadequate glucose delivery to neurons', significance: 'Neuroglycopenic symptom - indicates need for immediate treatment' },
            { finding: 'Whipple\'s triad', mechanism: 'Symptoms + low glucose + resolution with glucose', significance: 'Diagnostic criteria for true hypoglycemia' }
        ],
        mcqs: [
            { question: 'A diabetic patient on insulin has hypoglycemia unawareness. What is the mechanism?', options: [{ text: 'Insulin receptor downregulation', correct: false }, { text: 'Blunted counter-regulatory hormone response from recurrent hypoglycemia', correct: true }, { text: 'Autonomic neuropathy only', correct: false }, { text: 'Decreased hepatic glycogen stores', correct: false }], explanation: 'Recurrent hypoglycemia leads to defective counter-regulation - reduced glucagon and epinephrine responses. This blunts the warning symptoms, making severe hypoglycemia more likely. Strict avoidance of hypoglycemia can restore awareness.', incorrectExplanation: 'Hypoglycemia unawareness results from blunted hormonal responses due to recurrent episodes.' }
        ],
        keyPoints: ['Whipple\'s triad confirms true hypoglycemia', 'Adrenergic symptoms are warning signs; neuroglycopenic symptoms indicate brain dysfunction', 'Counter-regulatory hormones: glucagon, epinephrine, cortisol, GH', 'Hypoglycemia unawareness from recurrent episodes - can be reversed']
    },
    {
        id: 'sah',
        name: 'Subarachnoid Hemorrhage',
        category: 'Neurology',
        pathways: [
            { title: 'Aneurysm Rupture', description: 'Berry aneurysms at arterial bifurcations are the most common cause of non-traumatic SAH.', steps: ['Aneurysm formation at bifurcation', 'Wall thinning + hemodynamic stress', 'Rupture', 'Blood in subarachnoid space', 'Sudden severe headache'] },
            { title: 'Delayed Cerebral Ischemia', description: 'Vasospasm is the leading cause of morbidity in SAH survivors.', steps: ['Blood breakdown products in CSF', 'Arterial smooth muscle contraction', 'Vasospasm (days 3-14)', 'Cerebral ischemia', 'Neurologic deterioration'] }
        ],
        clinicalCorrelations: [
            { finding: '"Worst headache of my life"', mechanism: 'Meningeal irritation from blood in subarachnoid space', significance: 'Classic presentation - sudden onset, maximal at onset ("thunderclap")' },
            { finding: 'Meningismus', mechanism: 'Blood irritating meninges', significance: 'Nuchal rigidity, photophobia without infection' },
            { finding: 'Delayed neurologic decline (day 3-14)', mechanism: 'Vasospasm causing ischemia', significance: 'Leading cause of morbidity; treat with nimodipine, triple-H therapy' }
        ],
        mcqs: [
            { question: 'A patient with SAH is stable on day 1 but develops new weakness on day 7. What is the most likely cause?', options: [{ text: 'Rebleeding', correct: false }, { text: 'Hydrocephalus', correct: false }, { text: 'Vasospasm', correct: true }, { text: 'Infection', correct: false }], explanation: 'Vasospasm peaks days 3-14 after SAH and is the leading cause of delayed morbidity. Blood breakdown products cause arterial constriction → ischemia. Prevention: nimodipine. Treatment: induced hypertension, angioplasty.', incorrectExplanation: 'Day 7 with new focal deficits is classic timing for vasospasm-induced delayed cerebral ischemia.' }
        ],
        keyPoints: ['Thunderclap headache = SAH until proven otherwise', 'CT sensitivity decreases with time; LP if CT negative', 'Nimodipine for vasospasm prevention (not BP control)', 'Vasospasm peaks days 3-14; leading cause of morbidity']
    },
    {
        id: 'cholecystitis',
        name: 'Cholecystitis/Cholangitis',
        category: 'Surgery',
        pathways: [
            { title: 'Acute Cholecystitis', description: 'Gallstone obstruction of cystic duct leads to gallbladder inflammation.', steps: ['Gallstone impacts cystic duct', 'Bile stasis in gallbladder', 'Mucosal injury + bacterial overgrowth', 'Gallbladder wall inflammation', 'RUQ pain, Murphy\'s sign'] },
            { title: 'Ascending Cholangitis', description: 'Biliary obstruction with infection is a surgical emergency.', steps: ['CBD obstruction (stone, stricture, tumor)', 'Bile stasis + bacterial colonization', 'Ascending infection', 'Bacteremia/sepsis', 'Charcot\'s triad → Reynolds\' pentad'] }
        ],
        clinicalCorrelations: [
            { finding: 'Murphy\'s sign', mechanism: 'Inflamed gallbladder contacts parietal peritoneum during inspiration', significance: 'Inspiratory arrest during RUQ palpation - specific for cholecystitis' },
            { finding: 'Charcot\'s triad (fever, RUQ pain, jaundice)', mechanism: 'Biliary obstruction + infection', significance: 'Classic for acute cholangitis' },
            { finding: 'Reynolds\' pentad (+ AMS, hypotension)', mechanism: 'Sepsis from cholangitis', significance: 'Indicates severe cholangitis - emergent decompression needed' }
        ],
        mcqs: [
            { question: 'A patient has fever, jaundice, RUQ pain, and hypotension. What is the priority intervention?', options: [{ text: 'CT abdomen', correct: false }, { text: 'Cholecystectomy', correct: false }, { text: 'ERCP for biliary decompression', correct: true }, { text: 'IV antibiotics alone', correct: false }], explanation: 'This is Reynolds\' pentad = severe acute cholangitis. Source control via biliary decompression (ERCP) is essential. Antibiotics alone are insufficient - the obstructed system must be drained. Cholecystectomy treats cholecystitis, not cholangitis.', incorrectExplanation: 'Severe cholangitis requires emergent biliary decompression (ERCP) for source control.' }
        ],
        keyPoints: ['Cholecystitis = cystic duct obstruction; Cholangitis = CBD obstruction + infection', 'Murphy\'s sign for cholecystitis; Charcot\'s triad for cholangitis', 'Reynolds\' pentad = surgical emergency', 'Cholangitis requires biliary decompression (ERCP), not just antibiotics']
    },
    {
        id: 'opioid-overdose',
        name: 'Opioid Overdose',
        category: 'Toxicology',
        pathways: [
            { title: 'Respiratory Depression', description: 'Opioids suppress brainstem respiratory centers, the primary cause of death.', steps: ['Mu-receptor activation in brainstem', 'Decreased respiratory drive', 'Hypoventilation', 'Hypoxia + hypercarbia', 'Respiratory arrest'] }
        ],
        clinicalCorrelations: [
            { finding: 'Miosis (pinpoint pupils)', mechanism: 'Mu-receptor activation in Edinger-Westphal nucleus', significance: 'Classic sign of opioid toxicity; present even in coma' },
            { finding: 'Respiratory rate <12', mechanism: 'Brainstem respiratory center depression', significance: 'Key vital sign - predictor of severity' },
            { finding: 'Decreased bowel sounds', mechanism: 'Mu-receptor activation in GI tract', significance: 'Opioid-induced ileus' }
        ],
        mcqs: [
            { question: 'What is the appropriate initial naloxone dose in a patient with suspected opioid overdose and respiratory depression?', options: [{ text: '2 mg IV', correct: false }, { text: '0.04-0.4 mg IV, titrate to respiratory effort', correct: true }, { text: '10 mg IV', correct: false }, { text: '0.01 mg IV', correct: false }], explanation: 'Start low (0.04-0.4mg) and titrate to respiratory effort, NOT to full consciousness. High doses precipitate acute withdrawal (vomiting, aspiration risk, agitation, violence). Goal is adequate ventilation, not alertness.', incorrectExplanation: 'Low-dose naloxone titrated to respiratory effort prevents precipitating severe withdrawal.' }
        ],
        keyPoints: ['Triad: CNS depression + respiratory depression + miosis', 'Naloxone: start low (0.04-0.4mg), titrate to respiratory effort', 'Watch for renarcotization - naloxone has shorter half-life than most opioids', 'Pulmonary edema can occur even after naloxone reversal']
    },
    {
        id: 'alcohol-withdrawal',
        name: 'Alcohol Withdrawal',
        category: 'Toxicology',
        pathways: [
            { title: 'GABA/Glutamate Imbalance', description: 'Chronic alcohol enhances GABA and suppresses glutamate. Withdrawal causes the opposite.', steps: ['Chronic alcohol → GABA upregulation, NMDA downregulation', 'Alcohol cessation', 'Loss of GABA enhancement', 'Unopposed glutamatergic activity', 'CNS hyperexcitability'] },
            { title: 'Withdrawal Timeline', description: 'Symptoms progress predictably over 24-72 hours.', steps: ['6-12h: tremor, anxiety, tachycardia', '12-24h: hallucinations (visual)', '24-48h: seizures', '48-72h: delirium tremens'] }
        ],
        clinicalCorrelations: [
            { finding: 'Tremor', mechanism: 'CNS hyperexcitability from GABA withdrawal', significance: 'Earliest sign; coarse, postural' },
            { finding: 'Seizures', mechanism: 'Glutamate excitotoxicity + GABA deficiency', significance: 'Usually generalized tonic-clonic; occur 24-48h post-cessation' },
            { finding: 'Delirium tremens', mechanism: 'Severe autonomic instability + delirium', significance: 'Medical emergency; 5-15% mortality untreated' }
        ],
        mcqs: [
            { question: 'What is first-line treatment for alcohol withdrawal?', options: [{ text: 'Phenobarbital', correct: false }, { text: 'Benzodiazepines', correct: true }, { text: 'Propofol', correct: false }, { text: 'Haloperidol', correct: false }], explanation: 'Benzodiazepines enhance GABA activity, directly addressing the pathophysiology. Use symptom-triggered dosing (CIWA protocol). Phenobarbital is second-line. Haloperidol lowers seizure threshold.', incorrectExplanation: 'Benzodiazepines are first-line because they enhance GABA, addressing the core mechanism.' }
        ],
        keyPoints: ['Mechanism: loss of GABA enhancement + glutamate excess', 'Timeline: tremor → hallucinations → seizures → DT', 'Benzodiazepines first-line (CIWA-guided dosing)', 'DT mortality 5-15% without treatment']
    },
    {
        id: 'fpies',
        name: 'FPIES (Food Protein-Induced Enterocolitis)',
        category: 'Allergy/Immunology',
        pathways: [
            { title: 'Non-IgE GI Reaction', description: 'T-cell mediated inflammation of the GI tract, not IgE-mediated.', steps: ['Food protein exposure (milk, soy, grains)', 'T-cell activation in gut mucosa', 'Cytokine release (TNF-α)', 'Intestinal inflammation', 'Profuse vomiting ± diarrhea, lethargy'] }
        ],
        clinicalCorrelations: [
            { finding: 'Profuse vomiting 1-4 hours after feeding', mechanism: 'Gut inflammation and increased permeability', significance: 'Delayed onset distinguishes from IgE-mediated allergy (minutes)' },
            { finding: 'Lethargy/pallor', mechanism: 'Fluid shifts and possible hypotension', significance: 'Can appear "septic" - often misdiagnosed' },
            { finding: 'Negative skin prick/IgE testing', mechanism: 'Not IgE-mediated', significance: 'Key distinguishing feature from typical food allergy' }
        ],
        mcqs: [
            { question: 'An infant has repeated episodes of profuse vomiting 2-3 hours after formula feeds. Skin testing to milk is negative. What is the most likely diagnosis?', options: [{ text: 'IgE-mediated milk allergy', correct: false }, { text: 'Pyloric stenosis', correct: false }, { text: 'FPIES', correct: true }, { text: 'Gastroenteritis', correct: false }], explanation: 'FPIES presents with delayed (1-4h) profuse vomiting, negative IgE testing, and often appears septic-like. Common triggers: milk, soy, rice, oat. Most children outgrow by age 3-5.', incorrectExplanation: 'The delayed timing and negative IgE testing point to FPIES, a non-IgE food allergy.' }
        ],
        keyPoints: ['Non-IgE, T-cell mediated food allergy', 'Presents: profuse vomiting 1-4h after feeding, lethargy, pallor', 'Common triggers: milk, soy, rice, oat', 'Diagnosis: clinical + negative IgE; often misdiagnosed as sepsis']
    }
];

topics.forEach(t => {
    fs.writeFileSync(path.join(MECH_DIR, `${t.id}-module.html`), createMechHTML(t));
    console.log(`Created: ${t.id}-module.html`);
});

console.log(`\nGenerated ${topics.length} mechanism modules`);
