// MechanismDx Module Batch Generator - Part 5
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
        id: 'encephalitis',
        name: 'Encephalitis',
        category: 'Infectious Disease',
        pathways: [
            { title: 'Viral Invasion of CNS', description: 'Viruses can reach the brain via hematogenous spread or neural pathways.', steps: ['Primary infection (respiratory, GI)', 'Viremia or neural spread', 'Crosses blood-brain barrier', 'Neuronal infection/inflammation', 'Cerebral edema + dysfunction'] },
            { title: 'HSV Encephalitis', description: 'HSV-1 has tropism for temporal lobes.', steps: ['HSV-1 reactivation (usually)', 'Spread via olfactory/trigeminal nerve', 'Temporal lobe predilection', 'Hemorrhagic necrosis', 'Focal neuro deficits + seizures'] }
        ],
        clinicalCorrelations: [
            { finding: 'Altered mental status + fever', mechanism: 'Brain parenchymal inflammation', significance: 'Distinguishes encephalitis from meningitis (meningitis = meninges, not parenchyma)' },
            { finding: 'Temporal lobe seizures/personality changes', mechanism: 'HSV predilection for temporal lobes', significance: 'Classic for HSV encephalitis - start acyclovir empirically' },
            { finding: 'MRI showing temporal lobe abnormalities', mechanism: 'Inflammation and edema in limbic structures', significance: 'Highly suggestive of HSV; sensitivity >90%' }
        ],
        mcqs: [
            { question: 'A patient has fever, confusion, and new-onset seizures. MRI shows temporal lobe signal abnormality. First action?', options: [{ text: 'Wait for LP results', correct: false }, { text: 'Start IV acyclovir immediately', correct: true }, { text: 'Start antibiotics only', correct: false }, { text: 'Repeat MRI in 48 hours', correct: false }], explanation: 'HSV encephalitis is a neurological emergency. Start acyclovir 10mg/kg IV q8h empirically for suspected cases. Mortality drops from 70% to 20% with early treatment. Do not wait for CSF results.', incorrectExplanation: 'HSV encephalitis requires immediate empiric acyclovir - delay increases mortality.' }
        ],
        keyPoints: ['Encephalitis = brain parenchyma involvement (AMS, seizures, focal deficits)', 'HSV is most common sporadic cause; temporal lobe predilection', 'Start acyclovir empirically - do not wait for LP/MRI', 'CSF: lymphocytic pleocytosis, elevated protein, normal glucose, HSV PCR', 'MRI > CT for diagnosis (temporal lobe changes)']
    },
    {
        id: 'infective-endocarditis',
        name: 'Infective Endocarditis',
        category: 'Infectious Disease',
        pathways: [
            { title: 'Vegetation Formation', description: 'Bacteria colonize damaged endothelium and form vegetations.', steps: ['Endothelial damage (valve abnormality)', 'Platelet-fibrin deposition (NBTE)', 'Bacteremia seeds the vegetation', 'Bacterial proliferation in vegetation', 'Embolization + local destruction'] },
            { title: 'Embolic Complications', description: 'Vegetations fragment and embolize to distal organs.', steps: ['Vegetation fragments break off', 'Left-sided: systemic emboli', 'Stroke, splenic/renal infarcts', 'Right-sided: pulmonary emboli', 'Septic pulmonary emboli (IVDU)'] }
        ],
        clinicalCorrelations: [
            { finding: 'New or changing murmur', mechanism: 'Valve destruction or vegetation causing regurgitation', significance: 'Present in 85% of cases; absence does not rule out IE' },
            { finding: 'Janeway lesions (painless) vs Osler nodes (painful)', mechanism: 'Janeway: septic emboli; Osler: immune complex deposition', significance: 'Classic findings but rare (<20%); "Osler = Ouch"' },
            { finding: 'Splinter hemorrhages', mechanism: 'Microemboli to nail bed capillaries', significance: 'Common but nonspecific; also seen in trauma' }
        ],
        mcqs: [
            { question: 'Modified Duke Criteria require how many major criteria for definite IE?', options: [{ text: '1 major + 1 minor', correct: false }, { text: '2 major criteria', correct: true }, { text: '3 major criteria', correct: false }, { text: '5 minor criteria', correct: false }], explanation: 'Definite IE: 2 major, OR 1 major + 3 minor, OR 5 minor. Major criteria: positive blood cultures (typical organisms, persistent), endocardial involvement on echo. Minor: predisposition, fever, vascular/immunologic phenomena, suggestive echo/cultures.', incorrectExplanation: 'Modified Duke: 2 major OR 1 major + 3 minor OR 5 minor for definite IE.' },
            { question: 'IVDU with fever and bilateral pulmonary nodules. Most likely valve?', options: [{ text: 'Aortic', correct: false }, { text: 'Mitral', correct: false }, { text: 'Tricuspid', correct: true }, { text: 'Pulmonic', correct: false }], explanation: 'IVDU → right-sided (tricuspid) endocarditis → septic pulmonary emboli → bilateral nodules/cavities on CXR. Most common organism: S. aureus. Left-sided IE causes systemic emboli (stroke, splenic infarcts).', incorrectExplanation: 'IVDU typically causes right-sided (tricuspid) endocarditis with pulmonary emboli.' }
        ],
        keyPoints: ['Modified Duke Criteria for diagnosis', 'S. aureus most common in IVDU and acute presentations', 'Viridans streptococci in native valve, subacute presentation', 'Right-sided (IVDU) → pulmonary emboli; Left-sided → systemic emboli', 'Get 3 sets of blood cultures before antibiotics']
    },
    {
        id: 'pyelonephritis',
        name: 'Pyelonephritis',
        category: 'Infectious Disease',
        pathways: [
            { title: 'Ascending Infection', description: 'Bacteria ascend from bladder to kidney.', steps: ['Colonization of periurethral area', 'Ascent to bladder (cystitis)', 'Vesicoureteral reflux or ascent', 'Bacterial invasion of renal parenchyma', 'Interstitial inflammation + abscess'] }
        ],
        clinicalCorrelations: [
            { finding: 'Fever + flank pain + CVA tenderness', mechanism: 'Renal parenchymal inflammation + capsular stretch', significance: 'Distinguishes pyelo from simple cystitis (which has no fever/flank pain)' },
            { finding: 'WBC casts in urine', mechanism: 'WBCs originating from renal tubules', significance: 'Pathognomonic for upper tract infection (pyelonephritis)' },
            { finding: 'Nausea/vomiting', mechanism: 'Renal inflammation with referred visceral symptoms', significance: 'Common in pyelo; may cause dehydration' }
        ],
        mcqs: [
            { question: 'Which finding differentiates pyelonephritis from cystitis?', options: [{ text: 'Dysuria', correct: false }, { text: 'Pyuria', correct: false }, { text: 'Fever and flank pain', correct: true }, { text: 'Positive urine culture', correct: false }], explanation: 'Cystitis and pyelo both have dysuria, pyuria, and positive cultures. Fever, flank pain, and CVA tenderness indicate upper tract (kidney) involvement = pyelonephritis.', incorrectExplanation: 'Systemic symptoms (fever) and flank pain indicate kidney involvement.' }
        ],
        keyPoints: ['Ascending infection from bladder in most cases', 'Distinguish from cystitis: fever + flank pain = pyelo', 'WBC casts are pathognomonic for upper tract infection', 'E. coli is most common organism (80%)', 'Complicated pyelo: male, structural abnormality, pregnancy, diabetes']
    },
    {
        id: 'cdiff',
        name: 'Clostridioides difficile Infection',
        category: 'Infectious Disease',
        pathways: [
            { title: 'Toxin-Mediated Colitis', description: 'C. diff toxins cause mucosal damage and inflammation.', steps: ['Antibiotic disruption of gut flora', 'C. diff overgrowth', 'Toxin A (enterotoxin) + Toxin B (cytotoxin)', 'Epithelial damage + inflammation', 'Pseudomembrane formation'] }
        ],
        clinicalCorrelations: [
            { finding: 'Watery diarrhea after antibiotics', mechanism: 'Toxin-induced secretory diarrhea', significance: 'Classic presentation; can occur up to 8 weeks after antibiotics' },
            { finding: 'Pseudomembranes on colonoscopy', mechanism: 'Inflammatory exudate + necrotic debris', significance: 'Pathognomonic but not always present; colonoscopy not always needed' },
            { finding: 'Toxic megacolon', mechanism: 'Severe inflammation → colonic dilation + systemic toxicity', significance: 'Surgical emergency; colectomy may be needed' }
        ],
        mcqs: [
            { question: 'First-line treatment for initial, non-severe C. diff infection?', options: [{ text: 'Oral metronidazole', correct: false }, { text: 'Oral vancomycin or fidaxomicin', correct: true }, { text: 'IV vancomycin', correct: false }, { text: 'Fecal microbiota transplant', correct: false }], explanation: 'IDSA 2021 guidelines: Oral vancomycin 125mg QID or fidaxomicin 200mg BID for 10 days. Metronidazole is now second-line only if vanco/fidaxomicin unavailable. FMT is for recurrent cases.', incorrectExplanation: 'Current guidelines favor oral vancomycin or fidaxomicin over metronidazole.' }
        ],
        keyPoints: ['Toxin-mediated disease; disruption of normal flora is key risk factor', 'Test for toxin (not just organism) - PCR alone may detect colonization', 'Oral vancomycin or fidaxomicin first-line (not metronidazole)', 'Stop inciting antibiotic if possible', 'Fecal transplant for recurrent disease']
    },
    {
        id: 'osteomyelitis',
        name: 'Osteomyelitis',
        category: 'Infectious Disease',
        pathways: [
            { title: 'Hematogenous Spread', description: 'Blood-borne bacteria seed the bone (more common in children).', steps: ['Bacteremia', 'Seeding of metaphysis (children) or vertebra (adults)', 'Abscess formation', 'Bone necrosis (sequestrum)', 'Periosteal new bone (involucrum)'] },
            { title: 'Contiguous Spread', description: 'Infection spreads from adjacent soft tissue (adults, diabetic foot).', steps: ['Soft tissue infection or ulcer', 'Direct extension to bone', 'Often polymicrobial', 'Chronic osteomyelitis develops', 'Difficult to eradicate'] }
        ],
        clinicalCorrelations: [
            { finding: 'Bone pain out of proportion + fever', mechanism: 'Periosteal inflammation and intramedullary pressure', significance: 'Pain may be the only early sign; fever often low-grade' },
            { finding: 'Probe-to-bone test positive', mechanism: 'Direct visualization of bone through ulcer', significance: 'In diabetic foot ulcer, positive probe-to-bone has high PPV for osteo' },
            { finding: 'Elevated ESR/CRP', mechanism: 'Acute phase response to chronic infection', significance: 'Useful for monitoring treatment response' }
        ],
        mcqs: [
            { question: 'Gold standard for diagnosis of osteomyelitis?', options: [{ text: 'MRI', correct: false }, { text: 'Bone biopsy with culture', correct: true }, { text: 'X-ray', correct: false }, { text: 'CT scan', correct: false }], explanation: 'Bone biopsy with culture identifies the organism and guides antibiotic therapy. MRI is most sensitive imaging modality but doesn\'t identify organism. X-ray changes take 2-3 weeks to appear.', incorrectExplanation: 'Bone biopsy with culture is gold standard - identifies organism for targeted therapy.' }
        ],
        keyPoints: ['Hematogenous (children: metaphysis; adults: vertebra) vs contiguous spread', 'S. aureus most common organism overall', 'MRI is most sensitive imaging; X-ray changes delayed 2-3 weeks', 'Bone biopsy with culture is gold standard for diagnosis', 'Requires prolonged antibiotics (4-6 weeks IV) ± surgical debridement']
    },
    {
        id: 'myasthenic-crisis',
        name: 'Myasthenic Crisis',
        category: 'Neurology',
        pathways: [
            { title: 'Neuromuscular Junction Failure', description: 'Autoantibodies against AChR cause progressive weakness.', steps: ['Anti-AChR antibodies', 'NMJ transmission failure', 'Respiratory muscle weakness', 'Hypoventilation', 'Respiratory failure requiring intubation'] },
            { title: 'Triggers', description: 'Various factors can precipitate crisis.', steps: ['Infection (most common trigger)', 'Medication changes/non-compliance', 'Surgery or stress', 'Offending drugs (aminoglycosides, beta-blockers)', 'Progression to respiratory failure'] }
        ],
        clinicalCorrelations: [
            { finding: 'Rapidly progressive weakness', mechanism: 'Worsening NMJ transmission failure', significance: 'Crisis develops over hours to days' },
            { finding: 'Bulbar symptoms (dysarthria, dysphagia)', mechanism: 'Weakness of oropharyngeal muscles', significance: 'Aspiration risk; often precedes respiratory failure' },
            { finding: 'Respiratory failure', mechanism: 'Diaphragm and intercostal weakness', significance: 'Defines myasthenic crisis; 20/30/40 rule for intubation' }
        ],
        mcqs: [
            { question: 'Which parameter best predicts need for intubation in myasthenic crisis?', options: [{ text: 'Oxygen saturation', correct: false }, { text: 'Forced vital capacity (FVC)', correct: true }, { text: 'Peak flow', correct: false }, { text: 'Chest X-ray', correct: false }], explanation: '20/30/40 rule: intubate if FVC <20 mL/kg, MIP <30 cmH2O, or MEP <40 cmH2O. FVC is most practical. O2 sat drops late. Don\'t wait for ABG changes - act on pulmonary function.', incorrectExplanation: 'FVC predicts respiratory failure before O2 sat or ABG changes occur.' },
            { question: 'First-line treatment for myasthenic crisis?', options: [{ text: 'Increase pyridostigmine', correct: false }, { text: 'IVIG or plasmapheresis', correct: true }, { text: 'High-dose steroids alone', correct: false }, { text: 'Thymectomy', correct: false }], explanation: 'IVIG or plasmapheresis are first-line for crisis (equally effective). Do NOT increase cholinesterase inhibitors in crisis (risk of cholinergic crisis). Steroids can initially worsen weakness.', incorrectExplanation: 'IVIG or plasmapheresis for rapid treatment; avoid increasing pyridostigmine in crisis.' }
        ],
        keyPoints: ['Crisis = respiratory failure requiring mechanical ventilation', '20/30/40 rule: FVC <20, MIP <30, MEP <40 → intubate', 'IVIG or plasmapheresis first-line (equally effective)', 'Avoid drugs that worsen MG: aminoglycosides, beta-blockers, Mg', 'Identify and treat triggers (infection most common)']
    },
    {
        id: 'tbi-icp',
        name: 'TBI & ICP Management',
        category: 'Neurology',
        pathways: [
            { title: 'Primary vs Secondary Injury', description: 'Initial trauma followed by cascade of secondary damage.', steps: ['Primary injury (impact)', 'Cellular damage, hemorrhage', 'Secondary injury cascade', 'Edema, ischemia, excitotoxicity', 'Elevated ICP → herniation'] },
            { title: 'Monro-Kellie Doctrine', description: 'Fixed skull volume means any increase requires compensation.', steps: ['Skull = fixed volume', 'Brain + Blood + CSF = constant', 'Mass (blood, edema) increases', 'Initial compensation (CSF/blood displacement)', 'Decompensation → ICP rises exponentially'] }
        ],
        clinicalCorrelations: [
            { finding: 'Cushing\'s triad (HTN, bradycardia, irregular respirations)', mechanism: 'Brainstem compression from herniation', significance: 'Late sign of elevated ICP; impending herniation' },
            { finding: 'Unilateral fixed dilated pupil', mechanism: 'CN III compression from uncal herniation', significance: 'Ipsilateral to the lesion; requires immediate intervention' },
            { finding: 'GCS decline ≥2 points', mechanism: 'Worsening cerebral function from elevated ICP', significance: 'Indication for repeat imaging and possible intervention' }
        ],
        mcqs: [
            { question: 'First-line osmotic agent for acute ICP elevation?', options: [{ text: 'Mannitol 1g/kg', correct: true }, { text: 'Furosemide', correct: false }, { text: '3% saline only', correct: false }, { text: 'Dexamethasone', correct: false }], explanation: 'Mannitol 1-1.5 g/kg IV is traditional first-line. 23.4% hypertonic saline is an alternative, especially if hypotensive (mannitol can cause hypotension). Steroids NOT indicated for TBI (only for vasogenic edema from tumors).', incorrectExplanation: 'Mannitol is first-line osmotic therapy; steroids are not indicated in TBI.' },
            { question: 'Target CPP in severe TBI?', options: [{ text: '40-50 mmHg', correct: false }, { text: '60-70 mmHg', correct: true }, { text: '80-90 mmHg', correct: false }, { text: '>100 mmHg', correct: false }], explanation: 'CPP = MAP - ICP. Target CPP 60-70 mmHg. Below 60 → ischemia risk. Above 70 → no additional benefit and may worsen edema. ICP target <22 mmHg.', incorrectExplanation: 'CPP target is 60-70 mmHg; ICP target is <22 mmHg.' }
        ],
        keyPoints: ['Primary injury is done; goal is preventing secondary injury', 'Monro-Kellie: brain + blood + CSF = constant; compensation then decompensation', 'Cushing\'s triad is a LATE sign of herniation', 'Targets: ICP <22, CPP 60-70, PaCO2 35-40 (avoid hyperventilation)', 'Mannitol or hypertonic saline for acute ICP elevation; steroids NOT indicated']
    }
];

topics.forEach(t => {
    fs.writeFileSync(path.join(MECH_DIR, `${t.id}-module.html`), createMechHTML(t));
    console.log(`Created: ${t.id}-module.html`);
});

console.log(`\nGenerated ${topics.length} mechanism modules`);
