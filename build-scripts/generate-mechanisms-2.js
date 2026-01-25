// MechanismDx Module Batch Generator - Part 2
const fs = require('fs');
const path = require('path');

const MECH_DIR = '/home/claude/DxSuite/mechanism';

function createMechanismModule(topic) {
    const { id, name, category, pathways, clinicalCorrelations, mcqs, keyPoints } = topic;
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}: Pathophysiology | MechanismDx</title>
    <style>
        :root { --primary: #0891b2; --primary-dark: #0e7490; --primary-bg: #ecfeff; --bg: #f8fafc; --card: #fff; --border: #e2e8f0; --text: #1e293b; --text-secondary: #64748b; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', -apple-system, sans-serif; background: var(--bg); color: var(--text); line-height: 1.7; }
        .header { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); padding: 32px 24px; color: white; }
        .header-inner { max-width: 900px; margin: 0 auto; }
        .breadcrumb { font-size: 13px; color: rgba(255,255,255,0.7); margin-bottom: 12px; }
        .breadcrumb a { color: rgba(255,255,255,0.9); text-decoration: none; }
        .header h1 { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
        .header-subtitle { font-size: 15px; color: rgba(255,255,255,0.85); }
        .content { max-width: 900px; margin: 0 auto; padding: 32px 24px; }
        .objectives { background: linear-gradient(135deg, var(--primary-bg) 0%, #d1fae5 100%); border: 1px solid var(--primary); border-radius: 16px; padding: 24px; margin-bottom: 32px; }
        .objectives h2 { color: #047857; font-size: 16px; margin-bottom: 12px; }
        .objectives ul { margin-left: 24px; color: #065f46; }
        .objectives li { margin-bottom: 6px; font-size: 0.95rem; }
        .section { background: var(--card); border-radius: 16px; padding: 28px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .section h2 { color: var(--primary-dark); font-size: 1.25rem; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid var(--primary-bg); }
        .section h3 { color: var(--text); font-size: 1rem; margin: 16px 0 8px; }
        .section p { margin-bottom: 12px; }
        .pathway-box { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 12px; padding: 16px; margin: 16px 0; }
        .pathway-box h4 { color: #92400e; font-size: 0.9rem; margin-bottom: 8px; }
        .pathway-steps { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
        .pathway-step { background: white; border: 1px solid #fbbf24; padding: 8px 14px; border-radius: 8px; font-size: 0.85rem; }
        .pathway-arrow { color: #f59e0b; font-weight: bold; }
        .clinical-box { background: #f0fdf4; border: 1px solid #22c55e; border-radius: 12px; padding: 16px; margin: 16px 0; }
        .clinical-box h4 { color: #166534; font-size: 0.9rem; margin-bottom: 8px; }
        .key-point { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 16px; margin: 12px 0; border-radius: 0 8px 8px 0; }
        .key-point strong { color: #1e40af; }
        .mcq-container { background: #f8fafc; border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin: 20px 0; }
        .mcq-question { font-weight: 600; margin-bottom: 16px; }
        .mcq-options { display: flex; flex-direction: column; gap: 8px; }
        .mcq-option { padding: 12px 16px; border: 2px solid var(--border); border-radius: 10px; cursor: pointer; transition: all 0.2s; }
        .mcq-option:hover { border-color: var(--primary); background: var(--primary-bg); }
        .mcq-option.correct { border-color: #22c55e; background: #f0fdf4; }
        .mcq-option.incorrect { border-color: #ef4444; background: #fef2f2; }
        .mcq-feedback { margin-top: 12px; padding: 12px; border-radius: 8px; display: none; }
        .mcq-feedback.show { display: block; }
        .mcq-feedback.correct { background: #f0fdf4; color: #166534; }
        .mcq-feedback.incorrect { background: #fef2f2; color: #991b1b; }
        .nav-links { display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap; }
        .nav-link { padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 0.9rem; }
        .nav-link.back { background: var(--card); border: 1px solid var(--border); color: var(--text); }
        .nav-link.adventure { background: var(--primary); color: white; }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-inner">
            <div class="breadcrumb"><a href="../index.html">DxSuite</a> → <a href="index.html">MechanismDx</a> → ${name}</div>
            <h1>⚙️ ${name}</h1>
            <div class="header-subtitle">Pathophysiology & Clinical Correlations | ${category}</div>
        </div>
    </header>
    <div class="content">
        <div class="objectives">
            <h2>🎯 Learning Objectives</h2>
            <ul>${keyPoints.map(kp => `<li>${kp}</li>`).join('')}</ul>
        </div>
        <div class="section">
            <h2>🔬 Core Pathophysiology</h2>
${pathways.map(pw => `<h3>${pw.title}</h3><p>${pw.description}</p>
            <div class="pathway-box"><h4>Pathway</h4><div class="pathway-steps">${pw.steps.map((s,i) => `<span class="pathway-step">${s}</span>${i<pw.steps.length-1?'<span class="pathway-arrow">→</span>':''}`).join('')}</div></div>`).join('\n')}
        </div>
        <div class="section">
            <h2>🏥 Clinical Correlations</h2>
${clinicalCorrelations.map(cc => `<div class="clinical-box"><h4>${cc.finding}</h4><p><strong>Mechanism:</strong> ${cc.mechanism}</p><p><strong>Clinical Significance:</strong> ${cc.significance}</p></div>`).join('\n')}
        </div>
        <div class="section">
            <h2>📝 Knowledge Check</h2>
${mcqs.map((mcq,idx) => `<div class="mcq-container" id="mcq${idx}"><div class="mcq-question">${idx+1}. ${mcq.question}</div><div class="mcq-options">${mcq.options.map((o,oi) => `<div class="mcq-option" onclick="checkMCQ(${idx},${oi},${o.correct})">${String.fromCharCode(65+oi)}. ${o.text}</div>`).join('')}</div><div class="mcq-feedback" id="feedback${idx}"></div></div>`).join('\n')}
        </div>
        <div class="section">
            <h2>🔑 Key Takeaways</h2>
${keyPoints.map(kp => `<div class="key-point"><strong>✓</strong> ${kp}</div>`).join('\n')}
        </div>
        <div class="nav-links">
            <a href="index.html" class="nav-link back">← Back to MechanismDx</a>
            <a href="../ReasonDx/adventure-hub.html" class="nav-link adventure">Practice Cases →</a>
        </div>
    </div>
    <script>
        const mcqFeedback = ${JSON.stringify(mcqs.map(m => ({ correct: m.explanation, incorrect: m.incorrectExplanation || "Review the pathophysiology and try again." })))};
        function checkMCQ(qIdx, optIdx, isCorrect) {
            const container = document.getElementById('mcq' + qIdx);
            const options = container.querySelectorAll('.mcq-option');
            const feedback = document.getElementById('feedback' + qIdx);
            options.forEach((opt, i) => { opt.style.pointerEvents = 'none'; if (i === optIdx) opt.classList.add(isCorrect ? 'correct' : 'incorrect'); });
            feedback.className = 'mcq-feedback show ' + (isCorrect ? 'correct' : 'incorrect');
            feedback.innerHTML = '<strong>' + (isCorrect ? '✓ Correct!' : '✗ Not quite') + '</strong><br>' + (isCorrect ? mcqFeedback[qIdx].correct : mcqFeedback[qIdx].incorrect);
        }
    </script>
</body>
</html>`;
}

const topics = [
    {
        id: 'guillain-barre',
        name: 'Guillain-Barré Syndrome',
        category: 'Neurology',
        pathways: [
            { title: 'Molecular Mimicry', description: 'Post-infectious autoimmune attack on peripheral nerve myelin or axons.', steps: ['Preceding infection (Campylobacter, CMV, EBV)', 'Antibodies cross-react with gangliosides', 'Complement activation', 'Macrophage-mediated demyelination', 'Ascending weakness'] },
            { title: 'Respiratory Failure Pathway', description: 'Progressive weakness can affect respiratory muscles.', steps: ['Ascending paralysis', 'Intercostal weakness', 'Diaphragmatic involvement', 'Reduced vital capacity', 'Respiratory failure (20-30% need ventilation)'] }
        ],
        clinicalCorrelations: [
            { finding: 'Areflexia', mechanism: 'Disruption of reflex arc at peripheral nerve level', significance: 'Key distinguishing feature from central causes of weakness' },
            { finding: 'Ascending weakness', mechanism: 'Longer nerves affected first (length-dependent)', significance: 'Classic pattern: starts distally, moves proximally' },
            { finding: 'Autonomic dysfunction', mechanism: 'Involvement of autonomic nerve fibers', significance: 'Arrhythmias, BP lability - cause of mortality' }
        ],
        mcqs: [{ question: 'Why is serial monitoring of forced vital capacity (FVC) critical in GBS?', options: [{ text: 'To diagnose the underlying cause', correct: false }, { text: 'To predict when respiratory failure will occur', correct: true }, { text: 'To guide IVIG dosing', correct: false }, { text: 'To determine prognosis', correct: false }], explanation: 'The 20/30/40 rule: intubate if FVC <20 mL/kg, MIP <30 cmH2O, or MEP <40 cmH2O. Serial FVC monitoring detects declining respiratory function before overt failure.', incorrectExplanation: 'Respiratory failure is a major cause of morbidity in GBS. Serial FVC helps predict need for intubation.' }],
        keyPoints: ['Post-infectious autoimmune peripheral neuropathy', '20/30/40 rule for intubation', 'IVIG or plasmapheresis equally effective', 'Autonomic instability can be life-threatening']
    },
    {
        id: 'serotonin-syndrome',
        name: 'Serotonin Syndrome',
        category: 'Toxicology',
        pathways: [
            { title: 'Serotonergic Excess', description: 'Overstimulation of central and peripheral serotonin receptors, primarily 5-HT2A.', steps: ['Serotonergic drug(s) exposure', 'Excess 5-HT at synapses', '5-HT2A receptor overstimulation', 'Neuromuscular excitation', 'Autonomic instability + hyperthermia'] }
        ],
        clinicalCorrelations: [
            { finding: 'Clonus (especially lower extremity)', mechanism: '5-HT2A activation in spinal cord', significance: 'Key distinguishing feature from NMS' },
            { finding: 'Mydriasis', mechanism: 'Serotonergic stimulation of iris dilator', significance: 'Consistent finding in serotonin syndrome' },
            { finding: 'Hyperthermia', mechanism: 'Hypothalamic dysregulation + muscle hyperactivity', significance: 'Can be severe (>41°C); requires aggressive cooling' }
        ],
        mcqs: [{ question: 'Which finding best distinguishes serotonin syndrome from NMS?', options: [{ text: 'Fever', correct: false }, { text: 'Altered mental status', correct: false }, { text: 'Hyperreflexia and clonus', correct: true }, { text: 'Muscle rigidity', correct: false }], explanation: 'Serotonin syndrome causes HYPERreflexia and clonus (neuromuscular excitation). NMS causes HYPOreflexia and lead-pipe rigidity (dopamine blockade). This is the key differentiator.', incorrectExplanation: 'Both cause fever, AMS, and rigidity. The reflex pattern distinguishes them.' }],
        keyPoints: ['Hunter criteria: serotonergic drug + clonus OR tremor + hyperreflexia', 'Clonus = serotonin syndrome; rigidity = NMS', 'Treatment: stop offending agents, cyproheptadine, supportive care', 'Usually resolves in 24-72 hours with drug cessation']
    },
    {
        id: 'nms',
        name: 'Neuroleptic Malignant Syndrome',
        category: 'Neurology',
        pathways: [
            { title: 'Dopamine Blockade', description: 'Central dopamine antagonism causes the tetrad of symptoms.', steps: ['D2 receptor blockade', 'Hypothalamic dysfunction', 'Hyperthermia + autonomic instability', 'Striatal dysfunction', 'Lead-pipe rigidity'] }
        ],
        clinicalCorrelations: [
            { finding: 'Lead-pipe rigidity', mechanism: 'Loss of dopaminergic inhibition in basal ganglia', significance: 'Distinguishes from serotonin syndrome (which has hyperreflexia)' },
            { finding: 'Elevated CK', mechanism: 'Sustained muscle contraction causes rhabdomyolysis', significance: 'Can be markedly elevated (>1000); monitor for AKI' },
            { finding: 'Hyperthermia', mechanism: 'Hypothalamic dysregulation + heat from muscle activity', significance: 'Correlates with severity; requires aggressive cooling' }
        ],
        mcqs: [{ question: 'What is the first-line pharmacologic treatment for NMS?', options: [{ text: 'Cyproheptadine', correct: false }, { text: 'Dantrolene + Bromocriptine', correct: true }, { text: 'Benzodiazepines alone', correct: false }, { text: 'Physostigmine', correct: false }], explanation: 'Dantrolene relaxes muscles (reducing rigidity/hyperthermia). Bromocriptine is a dopamine agonist that reverses the D2 blockade. Both address the underlying pathophysiology.', incorrectExplanation: 'Cyproheptadine is for serotonin syndrome. NMS requires dopamine agonists and muscle relaxants.' }],
        keyPoints: ['Tetrad: hyperthermia, rigidity, AMS, autonomic instability', 'Lead-pipe rigidity + hyporeflexia (vs clonus in serotonin syndrome)', 'Stop antipsychotic, dantrolene + bromocriptine', 'Develops over days (vs hours for serotonin syndrome)']
    },
    {
        id: 'tumor-lysis',
        name: 'Tumor Lysis Syndrome',
        category: 'Oncology',
        pathways: [
            { title: 'Cellular Lysis Release', description: 'Rapid tumor cell death releases intracellular contents.', steps: ['Chemotherapy/spontaneous lysis', 'Massive cell death', 'K+, PO4, uric acid release', 'Hypocalcemia (Ca-PO4 binding)', 'Uric acid nephropathy → AKI'] }
        ],
        clinicalCorrelations: [
            { finding: 'Hyperkalemia', mechanism: 'Release of intracellular potassium stores', significance: 'Most immediately life-threatening; cardiac arrhythmias' },
            { finding: 'Hyperuricemia', mechanism: 'Purine breakdown to uric acid', significance: 'Uric acid crystals precipitate in renal tubules → AKI' },
            { finding: 'Hypocalcemia', mechanism: 'Calcium binds to excess phosphate', significance: 'Causes tetany, QT prolongation, seizures' }
        ],
        mcqs: [{ question: 'Which medication prevents uric acid formation in TLS prophylaxis?', options: [{ text: 'Rasburicase', correct: false }, { text: 'Allopurinol', correct: true }, { text: 'Calcium gluconate', correct: false }, { text: 'Kayexalate', correct: false }], explanation: 'Allopurinol inhibits xanthine oxidase, blocking uric acid formation. Rasburicase breaks down existing uric acid (used for treatment). Both can be used but mechanism differs.', incorrectExplanation: 'Allopurinol prevents formation; rasburicase degrades existing uric acid.' }],
        keyPoints: ['High-risk: high tumor burden, high proliferation rate', 'Lab TLS: ↑K, ↑PO4, ↑uric acid, ↓Ca', 'Prevention: hydration, allopurinol, monitor labs', 'Rasburicase for established hyperuricemia']
    },
    {
        id: 'rhabdo',
        name: 'Rhabdomyolysis',
        category: 'Nephrology',
        pathways: [
            { title: 'Myoglobin-Induced AKI', description: 'Muscle breakdown releases myoglobin which is toxic to kidneys.', steps: ['Muscle injury (crush, exertion, drugs)', 'Myocyte death', 'Myoglobin release into circulation', 'Renal tubular obstruction + toxicity', 'Acute kidney injury'] }
        ],
        clinicalCorrelations: [
            { finding: 'Tea/cola-colored urine', mechanism: 'Myoglobin pigment in urine', significance: 'Dipstick positive for blood but no RBCs on microscopy' },
            { finding: 'Hyperkalemia', mechanism: 'Release of intracellular potassium from damaged myocytes', significance: 'Can be severe; cardiac monitoring required' },
            { finding: 'CK >5x normal', mechanism: 'Release of muscle enzymes', significance: 'Diagnostic criterion; peak 24-72 hours post-injury' }
        ],
        mcqs: [{ question: 'What is the target urine output for rhabdomyolysis treatment?', options: [{ text: '0.5 mL/kg/hr', correct: false }, { text: '1-2 mL/kg/hr', correct: false }, { text: '>2-3 mL/kg/hr (200-300 mL/hr)', correct: true }, { text: '50 mL/hr', correct: false }], explanation: 'Aggressive IV fluids to achieve UOP 200-300 mL/hr (or >2-3 mL/kg/hr) prevents myoglobin precipitation in tubules. This high-volume resuscitation is the mainstay of treatment.', incorrectExplanation: 'Higher urine output is needed to flush myoglobin and prevent tubular obstruction.' }],
        keyPoints: ['CK >5x ULN (usually >10,000 for significant risk)', 'Aggressive IV fluids: target UOP >200-300 mL/hr', 'Monitor and treat hyperkalemia', 'Consider bicarbonate for urine alkalinization (controversial)']
    },
    {
        id: 'adrenal-crisis',
        name: 'Adrenal Crisis',
        category: 'Endocrine',
        pathways: [
            { title: 'Cortisol Deficiency Cascade', description: 'Loss of glucocorticoid effects causes multi-system failure.', steps: ['Adrenal insufficiency + stressor', 'Inadequate cortisol response', 'Loss of vascular tone', 'Hypotension refractory to fluids', 'Circulatory collapse'] },
            { title: 'Mineralocorticoid Deficiency', description: 'In primary adrenal insufficiency, aldosterone is also deficient.', steps: ['Aldosterone deficiency', 'Renal sodium wasting', 'Potassium retention', 'Hyponatremia + Hyperkalemia', 'Volume depletion'] }
        ],
        clinicalCorrelations: [
            { finding: 'Hypotension refractory to fluids', mechanism: 'Cortisol required for vascular reactivity to catecholamines', significance: 'Clue to diagnosis - suspect in refractory shock' },
            { finding: 'Hyperpigmentation', mechanism: 'ACTH excess stimulates melanocytes (primary AI only)', significance: 'Present in chronic primary AI, not in acute/secondary' },
            { finding: 'Hyponatremia + Hyperkalemia', mechanism: 'Aldosterone deficiency (primary AI)', significance: 'This electrolyte pattern suggests primary AI' }
        ],
        mcqs: [{ question: 'A patient on chronic prednisone presents with sepsis and hypotension unresponsive to fluids and pressors. What should you give?', options: [{ text: 'More norepinephrine', correct: false }, { text: 'Hydrocortisone 100mg IV', correct: true }, { text: 'Fludrocortisone', correct: false }, { text: 'DDAVP', correct: false }], explanation: 'Chronic steroid use suppresses the HPA axis. During stress, the adrenals cannot mount an appropriate cortisol response. Stress-dose hydrocortisone (100mg IV) is life-saving in this scenario.', incorrectExplanation: 'Chronic steroid use causes HPA suppression. The patient needs exogenous glucocorticoid during stress.' }],
        keyPoints: ['Suspect in refractory hypotension, especially with steroid history', 'Give hydrocortisone 100mg IV empirically - do not wait for labs', 'Primary AI: hyperpigmentation, hyperkalemia', 'Secondary AI: no hyperpigmentation, normal potassium']
    },
    {
        id: 'hae',
        name: 'Hereditary Angioedema',
        category: 'Allergy/Immunology',
        pathways: [
            { title: 'Bradykinin Excess', description: 'C1-inhibitor deficiency leads to uncontrolled bradykinin production.', steps: ['C1-INH deficiency', 'Uninhibited kallikrein', 'Excess bradykinin generation', 'Vascular permeability', 'Non-histaminergic angioedema'] }
        ],
        clinicalCorrelations: [
            { finding: 'Angioedema without urticaria', mechanism: 'Bradykinin (not histamine) mediated', significance: 'KEY: no hives distinguishes from allergic angioedema' },
            { finding: 'No response to epinephrine/antihistamines', mechanism: 'Not mast cell/histamine mediated', significance: 'Diagnostic clue; requires specific therapy' },
            { finding: 'Recurrent abdominal pain', mechanism: 'Intestinal wall edema', significance: 'Can mimic acute abdomen; may cause unnecessary surgery' }
        ],
        mcqs: [{ question: 'A patient has recurrent angioedema with no urticaria that does not respond to epinephrine. What is the most likely diagnosis?', options: [{ text: 'Anaphylaxis', correct: false }, { text: 'ACE-inhibitor angioedema', correct: false }, { text: 'Hereditary angioedema', correct: true }, { text: 'Chronic urticaria', correct: false }], explanation: 'HAE presents with angioedema WITHOUT urticaria and does NOT respond to epinephrine/antihistamines (because it is bradykinin, not histamine mediated). ACE-I angioedema is similar but has drug history.', incorrectExplanation: 'The absence of urticaria and lack of response to epinephrine points to bradykinin-mediated angioedema.' }],
        keyPoints: ['Bradykinin-mediated, NOT histamine-mediated', 'No urticaria, no response to epinephrine/antihistamines', 'Treatment: C1-INH concentrate, icatibant, ecallantide', 'Low C4 is screening test; confirm with C1-INH level/function']
    }
];

topics.forEach(topic => {
    const html = createMechanismModule(topic);
    fs.writeFileSync(path.join(MECH_DIR, `${topic.id}-module.html`), html);
    console.log(`Created: ${topic.id}-module.html`);
});

console.log(`\nGenerated ${topics.length} mechanism modules`);
