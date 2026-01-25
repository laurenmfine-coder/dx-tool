// Final batch of mechanism modules
const fs = require('fs');
const MECH_DIR = '/home/claude/DxSuite/mechanism';

function createMech(t) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.name}: Pathophysiology | MechanismDx</title>
    <style>:root{--primary:#0891b2;--primary-dark:#0e7490;--bg:#f8fafc;--card:#fff;--border:#e2e8f0;--text:#1e293b}*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);line-height:1.7}.header{background:linear-gradient(135deg,var(--primary),var(--primary-dark));padding:32px 24px;color:#fff}.header-inner{max-width:900px;margin:0 auto}.header h1{font-size:28px;font-weight:700}.content{max-width:900px;margin:0 auto;padding:32px 24px}.section{background:var(--card);border-radius:16px;padding:28px;margin-bottom:24px;box-shadow:0 1px 3px rgba(0,0,0,0.05)}.section h2{color:var(--primary-dark);font-size:1.25rem;margin-bottom:16px;border-bottom:2px solid #ecfeff;padding-bottom:12px}.pathway-box{background:#fef3c7;border:1px solid #f59e0b;border-radius:12px;padding:16px;margin:16px 0}.pathway-steps{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.pathway-step{background:#fff;border:1px solid #fbbf24;padding:8px 14px;border-radius:8px;font-size:0.85rem}.pathway-arrow{color:#f59e0b;font-weight:bold}.clinical-box{background:#f0fdf4;border:1px solid #22c55e;border-radius:12px;padding:16px;margin:16px 0}.clinical-box h4{color:#166534}.key-point{background:#eff6ff;border-left:4px solid #3b82f6;padding:12px 16px;margin:12px 0;border-radius:0 8px 8px 0}.nav-links{display:flex;gap:12px;margin-top:32px}.nav-link{padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:600}.nav-link.back{background:var(--card);border:1px solid var(--border);color:var(--text)}.nav-link.next{background:var(--primary);color:#fff}</style>
</head>
<body>
    <header class="header"><div class="header-inner"><h1>⚙️ ${t.name}</h1><div style="color:rgba(255,255,255,0.85)">${t.category}</div></div></header>
    <div class="content">
        <div class="section"><h2>🔬 Pathophysiology</h2>${t.pathways.map(p=>`<h3 style="margin:16px 0 8px">${p.title}</h3><p>${p.desc}</p><div class="pathway-box"><div class="pathway-steps">${p.steps.map((s,i)=>`<span class="pathway-step">${s}</span>${i<p.steps.length-1?'<span class="pathway-arrow">→</span>':''}`).join('')}</div></div>`).join('')}</div>
        <div class="section"><h2>🏥 Clinical Correlations</h2>${t.clinical.map(c=>`<div class="clinical-box"><h4>${c.finding}</h4><p><strong>Mechanism:</strong> ${c.mechanism}</p></div>`).join('')}</div>
        <div class="section"><h2>🔑 Key Points</h2>${t.keyPoints.map(k=>`<div class="key-point"><strong>✓</strong> ${k}</div>`).join('')}</div>
        <div class="nav-links"><a href="index.html" class="nav-link back">← Back</a><a href="../ReasonDx/adventure-hub.html" class="nav-link next">Practice →</a></div>
    </div>
</body>
</html>`;
}

const topics = [
    { id: 'febrile-seizure', name: 'Febrile Seizure', category: 'Pediatrics',
      pathways: [{ title: 'Temperature-Triggered Seizure', desc: 'Immature brain is susceptible to seizures with rapid temperature changes.', steps: ['Rapid temp rise', 'Immature brain susceptibility', 'Lowered seizure threshold', 'Generalized seizure', 'Self-limited (simple) or prolonged (complex)'] }],
      clinical: [{ finding: 'Seizure with fever in child 6mo-5yr', mechanism: 'Age-related susceptibility to fever-induced seizures' }, { finding: 'Post-ictal drowsiness', mechanism: 'Normal recovery phase' }],
      keyPoints: ['Simple: generalized, <15min, single in 24h', 'Complex: focal, >15min, or recurrent', 'LP if signs of meningitis or unvaccinated', 'Recurrence risk ~30%', 'Epilepsy risk only slightly elevated'] },
    { id: 'depression', name: 'Major Depressive Disorder', category: 'Psychiatry',
      pathways: [{ title: 'Monoamine Hypothesis', desc: 'Deficiency of serotonin, norepinephrine, and/or dopamine.', steps: ['Genetic + environmental factors', 'Monoamine deficiency', 'Altered neural circuits', 'Mood dysregulation', 'Depressive symptoms'] }],
      clinical: [{ finding: 'SIGECAPS symptoms', mechanism: 'Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality' }, { finding: 'Anhedonia', mechanism: 'Reward circuit dysfunction' }],
      keyPoints: ['≥5 symptoms for ≥2 weeks', 'Must include depressed mood OR anhedonia', 'SSRIs first-line', 'Allow 4-6 weeks for effect', 'Screen for suicidality'] },
    { id: 'psychosis', name: 'Psychosis', category: 'Psychiatry',
      pathways: [{ title: 'Dopamine Hypothesis', desc: 'Excess dopamine activity in mesolimbic pathway.', steps: ['Genetic + environmental triggers', 'Dopamine dysregulation', 'Mesolimbic hyperactivity', 'Positive symptoms', 'Mesocortical hypoactivity → negative symptoms'] }],
      clinical: [{ finding: 'Hallucinations (usually auditory)', mechanism: 'Aberrant sensory processing' }, { finding: 'Delusions', mechanism: 'Fixed false beliefs despite evidence' }],
      keyPoints: ['Positive: hallucinations, delusions, disorganization', 'Negative: flat affect, avolition, alogia', 'Antipsychotics block D2 receptors', 'Schizophrenia: 6 months total duration', 'Rule out medical causes'] },
    { id: 'bipolar', name: 'Bipolar Disorder', category: 'Psychiatry',
      pathways: [{ title: 'Mood Cycling', desc: 'Dysregulation of mood circuits leads to episodes.', steps: ['Genetic predisposition', 'Circadian/stress triggers', 'Mood episode onset', 'Mania or depression', 'Interepisode recovery (variable)'] }],
      clinical: [{ finding: 'Manic episode', mechanism: 'Elevated/irritable mood + increased energy' }, { finding: 'DIGFAST symptoms', mechanism: 'Distractibility, Insomnia, Grandiosity, Flight of ideas, Activities, Speech, Thoughtlessness' }],
      keyPoints: ['Bipolar I: mania (≥7 days)', 'Bipolar II: hypomania (≥4 days) + depression', 'Mood stabilizers: lithium, valproate, lamotrigine', 'Avoid antidepressant monotherapy', 'High suicide risk'] },
    { id: 'dfi', name: 'Diabetic Foot Infection', category: 'Infectious Disease',
      pathways: [{ title: 'Neuropathy → Ulcer → Infection', desc: 'Peripheral neuropathy leads to unrecognized trauma and ulceration.', steps: ['Diabetic neuropathy', 'Loss of protective sensation', 'Unrecognized trauma', 'Ulcer formation', 'Bacterial infection + spread'] }],
      clinical: [{ finding: 'Ulcer with purulent drainage', mechanism: 'Infection of soft tissue' }, { finding: 'Probe-to-bone positive', mechanism: 'High specificity for osteomyelitis' }],
      keyPoints: ['PEDIS classification for severity', 'Probe-to-bone suggests osteomyelitis', 'Polymicrobial in chronic/severe', 'MRI for osteomyelitis diagnosis', 'Broad-spectrum antibiotics + wound care'] },
    { id: 'dress-sjs', name: 'DRESS/SJS/TEN', category: 'Dermatology',
      pathways: [{ title: 'Drug-Induced Hypersensitivity', desc: 'Severe cutaneous adverse drug reactions.', steps: ['Drug exposure', 'Immune activation', 'T-cell mediated response', 'Keratinocyte apoptosis', 'Skin/mucosal detachment (SJS/TEN)'] }],
      clinical: [{ finding: 'DRESS: rash + fever + organ involvement', mechanism: 'Systemic drug reaction with eosinophilia' }, { finding: 'SJS/TEN: mucosal erosions + skin detachment', mechanism: 'Keratinocyte death with BSA involvement' }],
      keyPoints: ['DRESS: RegiSCAR criteria', 'SJS: <10% BSA; TEN: >30% BSA', 'Common causes: allopurinol, anticonvulsants, sulfonamides', 'Stop offending drug immediately', 'SJS/TEN: burn unit care'] },
    { id: 'derm-emergencies', name: 'Dermatologic Emergencies', category: 'Dermatology',
      pathways: [{ title: 'Skin as Indicator', desc: 'Skin findings can indicate life-threatening conditions.', steps: ['Underlying condition', 'Cutaneous manifestation', 'Recognition of pattern', 'Systemic assessment', 'Targeted treatment'] }],
      clinical: [{ finding: 'Petechiae/purpura with fever', mechanism: 'Meningococcemia or DIC' }, { finding: 'Necrotizing fasciitis', mechanism: 'Rapidly spreading soft tissue infection' }],
      keyPoints: ['Purpura fulminans: DIC + skin necrosis', 'Necrotizing fasciitis: pain out of proportion, crepitus', 'Pemphigus vulgaris: oral erosions + flaccid bullae', 'TEN: widespread epidermal detachment', 'Many require ICU-level care'] },
    { id: 'spinal-cord', name: 'Spinal Cord Compression', category: 'Neurology',
      pathways: [{ title: 'Cord Compression', desc: 'Mass or lesion compresses spinal cord causing dysfunction.', steps: ['Mass effect (tumor, abscess, hematoma)', 'Cord compression', 'Vascular compromise', 'Edema and ischemia', 'Neurologic deficits'] }],
      clinical: [{ finding: 'Back pain + weakness + bladder dysfunction', mechanism: 'Classic triad of cord compression' }, { finding: 'Sensory level', mechanism: 'Dermatomal cutoff indicates lesion location' }],
      keyPoints: ['Triad: pain + weakness + bladder/bowel', 'MRI entire spine urgently', 'Dexamethasone immediately if suspected', 'Malignancy is common cause in adults', 'Time is function - delays worsen outcomes'] },
    { id: 'rheum-emergencies', name: 'Rheumatologic Emergencies', category: 'Rheumatology',
      pathways: [{ title: 'Autoimmune Crisis', desc: 'Acute manifestations of rheumatic diseases.', steps: ['Underlying autoimmune disease', 'Flare or complication', 'Organ-threatening involvement', 'Rapid assessment needed', 'Immunosuppression + supportive care'] }],
      clinical: [{ finding: 'Septic arthritis', mechanism: 'Hot swollen joint - infection until proven otherwise' }, { finding: 'Scleroderma renal crisis', mechanism: 'Hypertensive emergency with AKI - treat with ACE-I' }],
      keyPoints: ['Septic arthritis: aspirate joint, empiric antibiotics', 'Scleroderma renal crisis: ACE inhibitors (not contraindicated!)', 'Lupus flare: high-dose steroids for major organs', 'Vasculitis: may need cyclophosphamide'] },
    { id: 'eye-emergencies', name: 'Eye Emergencies', category: 'Ophthalmology',
      pathways: [{ title: 'Vision-Threatening Conditions', desc: 'Conditions requiring immediate intervention to preserve vision.', steps: ['Acute eye complaint', 'Identify red flags', 'Emergent vs urgent', 'Specialist consultation', 'Time-sensitive treatment'] }],
      clinical: [{ finding: 'Central retinal artery occlusion', mechanism: 'Sudden painless vision loss - "cherry red spot"' }, { finding: 'Acute angle closure glaucoma', mechanism: 'Eye pain + halos + mid-dilated pupil' }],
      keyPoints: ['CRAO: 90-minute window for treatment', 'Acute angle closure: emergent IOP lowering', 'Chemical burns: immediate copious irrigation', 'Endophthalmitis: intravitreal antibiotics', 'Always check visual acuity'] },
    { id: 'ent-emergencies', name: 'ENT Emergencies', category: 'ENT',
      pathways: [{ title: 'Airway Threats', desc: 'ENT emergencies often involve airway compromise.', steps: ['Anatomic or infectious cause', 'Swelling or obstruction', 'Progressive airway compromise', 'Assessment of severity', 'Airway management + treatment'] }],
      clinical: [{ finding: 'Ludwig angina', mechanism: 'Floor of mouth infection → airway obstruction' }, { finding: 'Peritonsillar abscess', mechanism: '"Hot potato" voice, uvular deviation, trismus' }],
      keyPoints: ['Epiglottitis: stridor, drooling, tripod position', 'Ludwig angina: bilateral submandibular swelling, airway emergency', 'Peritonsillar abscess: needle aspiration or I&D', 'Retropharyngeal abscess: CT scan, surgical drainage', 'Epistaxis: direct pressure, packing, ENT if severe'] },
    { id: 'sinusitis', name: 'Acute Sinusitis', category: 'ENT',
      pathways: [{ title: 'Sinus Obstruction', desc: 'Obstruction of sinus ostia leads to infection.', steps: ['Mucosal edema (viral URI)', 'Ostia obstruction', 'Mucus accumulation', 'Bacterial overgrowth', 'Acute bacterial sinusitis'] }],
      clinical: [{ finding: 'Facial pain/pressure over sinuses', mechanism: 'Inflammation and pressure in obstructed sinus' }, { finding: 'Purulent nasal discharge', mechanism: 'Bacterial infection' }],
      keyPoints: ['Viral >> bacterial (only 0.5-2% of URIs)', 'Bacterial if: >10 days, severe, or biphasic', 'Amoxicillin-clavulanate first-line', 'Imaging not routinely needed', 'Complications: orbital cellulitis, intracranial extension'] }
];

topics.forEach(t => {
    fs.writeFileSync(`${MECH_DIR}/${t.id}-module.html`, createMech(t));
    console.log('Created: ' + t.id + '-module.html');
});
console.log('\nGenerated ' + topics.length + ' mechanism modules');
