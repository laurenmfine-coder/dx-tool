// MechanismDx Module Batch Generator - Part 6 (OB/GYN and more)
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
        .header-inner{max-width:900px;margin:0 auto}.header h1{font-size:28px;font-weight:700;margin-bottom:8px}
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
        .nav-links{display:flex;gap:12px;margin-top:32px}.nav-link{padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:600}
        .nav-link.back{background:var(--card);border:1px solid var(--border);color:var(--text)}.nav-link.adventure{background:var(--primary);color:#fff}
    </style>
</head>
<body>
    <header class="header"><div class="header-inner"><h1>⚙️ ${t.name}</h1><div style="font-size:15px;color:rgba(255,255,255,0.85)">Pathophysiology | ${t.category}</div></div></header>
    <div class="content">
        <div class="objectives"><h2>🎯 Learning Objectives</h2><ul>${t.keyPoints.map(k=>'<li>'+k+'</li>').join('')}</ul></div>
        <div class="section"><h2>🔬 Core Pathophysiology</h2>
${t.pathways.map(p=>'<h3>'+p.title+'</h3><p>'+p.description+'</p><div class="pathway-box"><h4>Pathway</h4><div class="pathway-steps">'+p.steps.map((s,i)=>'<span class="pathway-step">'+s+'</span>'+(i<p.steps.length-1?'<span class="pathway-arrow">→</span>':'')).join('')+'</div></div>').join('')}</div>
        <div class="section"><h2>🏥 Clinical Correlations</h2>
${t.clinicalCorrelations.map(c=>'<div class="clinical-box"><h4>'+c.finding+'</h4><p><strong>Mechanism:</strong> '+c.mechanism+'</p><p><strong>Significance:</strong> '+c.significance+'</p></div>').join('')}</div>
        <div class="section"><h2>📝 Knowledge Check</h2>
${t.mcqs.map((m,i)=>'<div class="mcq-container" id="mcq'+i+'"><div class="mcq-question">'+(i+1)+'. '+m.question+'</div><div class="mcq-options">'+m.options.map((o,j)=>'<div class="mcq-option" onclick="check('+i+','+j+','+o.correct+')">'+String.fromCharCode(65+j)+'. '+o.text+'</div>').join('')+'</div><div class="mcq-feedback" id="fb'+i+'"></div></div>').join('')}</div>
        <div class="section"><h2>🔑 Key Takeaways</h2>${t.keyPoints.map(k=>'<div class="key-point"><strong>✓</strong> '+k+'</div>').join('')}</div>
        <div class="nav-links"><a href="index.html" class="nav-link back">← Back</a><a href="../ReasonDx/adventure-hub.html" class="nav-link adventure">Practice →</a></div>
    </div>
    <script>
const fb=${JSON.stringify(t.mcqs.map(m=>({c:m.explanation,i:m.incorrectExplanation||"Review the pathophysiology."})))};
function check(q,o,correct){const c=document.getElementById('mcq'+q);c.querySelectorAll('.mcq-option').forEach((e,i)=>{e.style.pointerEvents='none';if(i===o)e.classList.add(correct?'correct':'incorrect');});const f=document.getElementById('fb'+q);f.className='mcq-feedback show '+(correct?'correct':'incorrect');f.innerHTML='<strong>'+(correct?'✓ Correct!':'✗ Not quite')+'</strong><br>'+(correct?fb[q].c:fb[q].i);}
    </script>
</body>
</html>`;
}

const topics = [
    {
        id: 'ectopic-pregnancy', name: 'Ectopic Pregnancy', category: 'OB/GYN',
        pathways: [{ title: 'Implantation Outside Uterus', description: 'Fertilized egg implants in location that cannot support pregnancy.', steps: ['Fertilization', 'Abnormal implantation (95% tubal)', 'Trophoblast invasion', 'Growth causes tubal stretching', 'Rupture → hemorrhage'] }],
        clinicalCorrelations: [
            { finding: 'Triad: amenorrhea + pain + bleeding', mechanism: 'Missed period, tubal stretching, decidual shedding', significance: 'Classic but only 50% have all three' },
            { finding: 'β-hCG above discriminatory zone without IUP', mechanism: 'Ectopic produces hCG but not visible in uterus', significance: 'Discriminatory zone ~1500-2000 for TVUS' }
        ],
        mcqs: [{ question: 'β-hCG is 2500 and TVUS shows no IUP. Next step?', options: [{ text: 'Repeat β-hCG in 48h', correct: false }, { text: 'Assume ectopic and treat', correct: true }, { text: 'CT scan', correct: false }, { text: 'Reassure', correct: false }], explanation: 'Above discriminatory zone without IUP = presumed ectopic. Options: methotrexate if meets criteria, or surgery.', incorrectExplanation: 'Above discriminatory zone without IUP is presumed ectopic.' }],
        keyPoints: ['95% tubal; ampulla most common', 'Risk factors: PID, prior ectopic, tubal surgery', 'Discriminatory zone: 1500-2000 for TVUS', 'Methotrexate if stable, <3.5cm, no cardiac activity', 'Rupture = surgical emergency']
    },
    {
        id: 'placental-abruption', name: 'Placental Abruption', category: 'OB/GYN',
        pathways: [{ title: 'Premature Separation', description: 'Placenta separates before delivery.', steps: ['Decidual hemorrhage', 'Hematoma behind placenta', 'Placental separation', 'Fetal hypoxia', 'Maternal hemorrhage'] }],
        clinicalCorrelations: [
            { finding: 'Painful vaginal bleeding', mechanism: 'Blood tracking + uterine irritation', significance: 'Distinguishes from previa (painLESS)' },
            { finding: 'Tetanic/rigid uterus', mechanism: 'Blood in myometrium causes contraction', significance: 'Classic finding' }
        ],
        mcqs: [{ question: 'Painful 3rd trimester bleeding with rigid uterus?', options: [{ text: 'Placenta previa', correct: false }, { text: 'Placental abruption', correct: true }, { text: 'Uterine rupture', correct: false }, { text: 'Bloody show', correct: false }], explanation: 'Abruption = painful + rigid. Previa = painless + soft.', incorrectExplanation: 'Painful bleeding with rigid uterus = abruption.' }],
        keyPoints: ['Painful (vs painless in previa)', 'Risk: HTN, cocaine, trauma', 'Can cause DIC', 'Stabilize mother, assess fetus, deliver if severe']
    },
    {
        id: 'ovarian-torsion', name: 'Ovarian Torsion', category: 'OB/GYN',
        pathways: [{ title: 'Vascular Compromise', description: 'Ovary twists cutting off blood supply.', steps: ['Ovarian mass (risk factor)', 'Rotation on pedicle', 'Venous obstruction first', 'Congestion/edema', 'Arterial compromise → necrosis'] }],
        clinicalCorrelations: [
            { finding: 'Sudden severe unilateral pelvic pain', mechanism: 'Acute vascular compromise', significance: 'Waxes/wanes with intermittent torsion' },
            { finding: 'Absent Doppler flow', mechanism: 'Arterial compromise', significance: 'Presence of flow does NOT rule out torsion' }
        ],
        mcqs: [{ question: 'Enlarged ovary with absent Doppler flow?', options: [{ text: 'Ovarian cyst', correct: false }, { text: 'Ovarian torsion', correct: true }, { text: 'PID', correct: false }, { text: 'Ectopic', correct: false }], explanation: 'Enlarged + absent flow = torsion. Surgical emergency.', incorrectExplanation: 'Absent flow in enlarged ovary is torsion until proven otherwise.' }],
        keyPoints: ['Risk: cyst/mass, pregnancy', 'Right side more common', 'Absent flow concerning but presence doesnt rule out', 'Surgical emergency - detorsion']
    },
    {
        id: 'pid-toa', name: 'PID & TOA', category: 'OB/GYN',
        pathways: [{ title: 'Ascending Infection', description: 'STI ascends to upper genital tract.', steps: ['Cervical infection', 'Ascent through endometrium', 'Salpingitis', 'Peritonitis', 'TOA if abscess forms'] }],
        clinicalCorrelations: [
            { finding: 'Bilateral pain + CMT', mechanism: 'Peritoneal inflammation', significance: 'CMT (chandelier sign) classic' },
            { finding: 'Mucopurulent discharge', mechanism: 'Active cervicitis', significance: 'Test and treat empirically' }
        ],
        mcqs: [{ question: 'Pelvic pain, fever, CMT. Outpatient treatment?', options: [{ text: 'Azithromycin alone', correct: false }, { text: 'Ceftriaxone + Doxycycline', correct: true }, { text: 'Metronidazole alone', correct: false }, { text: 'Cipro', correct: false }], explanation: 'Must cover GC (ceftriaxone) and Chlamydia (doxycycline).', incorrectExplanation: 'Cover both GC and Chlamydia.' }],
        keyPoints: ['Chlamydia and GC most common', 'Minimal criteria: pain + CMT or adnexal tenderness', 'Cover GC + Chlamydia', 'TOA may need IV abx + drainage']
    },
    {
        id: 'pph', name: 'Postpartum Hemorrhage', category: 'OB/GYN',
        pathways: [{ title: '4 Ts of PPH', description: 'Systematic approach.', steps: ['Tone (atony) - 80%', 'Trauma (lacerations)', 'Tissue (retained placenta)', 'Thrombin (coagulopathy)'] }],
        clinicalCorrelations: [
            { finding: 'Boggy uterus', mechanism: 'Lack of myometrial contraction', significance: 'Indicates atony' },
            { finding: '>1000mL blood loss', mechanism: 'Current PPH definition', significance: 'Or signs of hypovolemia' }
        ],
        mcqs: [{ question: 'Most common cause of immediate PPH?', options: [{ text: 'Laceration', correct: false }, { text: 'Retained placenta', correct: false }, { text: 'Uterine atony', correct: true }, { text: 'Coagulopathy', correct: false }], explanation: 'Atony = 80% of PPH.', incorrectExplanation: 'Atony is most common cause.' }],
        keyPoints: ['4 Ts: Tone (80%), Trauma, Tissue, Thrombin', 'First-line: massage + oxytocin', 'Escalation: balloon → surgical']
    },
    {
        id: 'hypercalcemia-malignancy', name: 'Hypercalcemia of Malignancy', category: 'Oncology',
        pathways: [{ title: 'PTHrP-Mediated', description: 'Tumor secretes PTH-related peptide.', steps: ['Tumor produces PTHrP', 'PTHrP mimics PTH', 'Bone resorption', 'Renal Ca reabsorption', 'Hypercalcemia'] }],
        clinicalCorrelations: [
            { finding: 'Stones, bones, groans, moans', mechanism: 'Multi-organ Ca effects', significance: 'Classic mnemonic' },
            { finding: 'Shortened QT', mechanism: 'Faster repolarization', significance: 'ECG finding' }
        ],
        mcqs: [{ question: 'First-line for severe hypercalcemia?', options: [{ text: 'Bisphosphonates', correct: false }, { text: 'IV normal saline', correct: true }, { text: 'Calcitonin', correct: false }, { text: 'Dialysis', correct: false }], explanation: 'Volume resuscitation first, then bisphosphonates.', incorrectExplanation: 'IV saline first - patients are volume depleted.' }],
        keyPoints: ['PTHrP (80%) or osteolytic mets (20%)', 'IV NS first, then bisphosphonates', 'PTH is low (suppressed)', 'Poor prognosis']
    },
    {
        id: 'acls-rhythms', name: 'ACLS Rhythms', category: 'Cardiology',
        pathways: [
            { title: 'Shockable Rhythms', description: 'VF and pVT respond to defibrillation.', steps: ['Identify VF/pVT', 'Immediate shock', 'CPR 2 min', 'Rhythm check', 'Repeat if needed'] },
            { title: 'Non-Shockable', description: 'Asystole/PEA need CPR and cause treatment.', steps: ['Identify asystole/PEA', 'CPR + epi', 'Find Hs and Ts', 'Continue until ROSC'] }
        ],
        clinicalCorrelations: [
            { finding: 'VF (chaotic)', mechanism: 'Disorganized ventricular activity', significance: 'Shockable' },
            { finding: 'PEA (organized, no pulse)', mechanism: 'Electrical without mechanical', significance: 'Non-shockable, treat cause' }
        ],
        mcqs: [{ question: 'VF arrest. After 1 shock + 2min CPR, still VF. Next drug?', options: [{ text: 'Atropine', correct: false }, { text: 'Epinephrine', correct: true }, { text: 'Amiodarone', correct: false }, { text: 'Lidocaine', correct: false }], explanation: 'Epi after 2nd shock, amio after 3rd shock.', incorrectExplanation: 'Epinephrine comes after second shock.' }],
        keyPoints: ['Shockable: VF, pVT', 'Non-shockable: asystole, PEA', 'Hs and Ts for reversible causes', 'Epi q3-5min, amio after 3rd shock']
    }
];

topics.forEach(t => {
    fs.writeFileSync(path.join(MECH_DIR, t.id + '-module.html'), createMechHTML(t));
    console.log('Created: ' + t.id + '-module.html');
});

console.log('\nGenerated ' + topics.length + ' mechanism modules');
