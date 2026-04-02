/* emr-data/altered-mental-status.js — AMS: Systematic Workup + AEIOU TIPS */
window.CASES = window.CASES || {};
window.CASES['altered-mental-status'] = {
  id: 'altered-mental-status', name: 'Dorothy Hayes', age: '78F', dob: '1947-08-04',
  mrn: 'RDX-2026-66234', setting: 'ED → Medicine', category: 'neurologic', acuity: 2,
  chiefComplaint: 'Sudden confusion — family says she was fine this morning, now unresponsive to questions',
  diagnosis: 'Altered Mental Status: Hyperactive Delirium from Urinary Tract Infection + Polypharmacy',
  presentation: {
    hpi: '78F with HTN, T2DM, dementia (mild — baseline oriented ×3, lives independently). Family brought her in because she "is not herself" since this morning — agitated, pulling at clothes, not recognizing her daughter. She has had no fall, no headache, no focal neurological symptoms. She was started on oxybutynin (anticholinergic) for bladder urgency last week. She has no recent medication changes otherwise. No fever at home. On exam: agitated, incoherent, picking at her gown. CAM positive (acute onset, fluctuating course, inattention, disorganized thinking). Febrile 38.6°C.',
    pmh: ['Mild dementia (baseline: oriented ×3)', 'HTN', 'T2DM', 'Urinary urgency — new oxybutynin started 1 week ago'],
    meds: ['Lisinopril', 'Metformin', 'Donepezil', 'Oxybutynin 5mg TID (NEW — 1 week ago)', 'Aspirin'],
    allergies: ['Penicillin — rash']
  },
  vitals: { BP: '158/92', HR: '104', RR: '18', Temp: '38.6°C', SpO2: '96%' },
  labs: {
    'UA': 'WBC >100/hpf, many bacteria, + nitrites, + leukocyte esterase — UTI confirmed',
    'Urine culture': 'E. coli — pending sensitivities',
    'BMP': 'Na 148 (H — mild dehydration), Glucose 188, Cr 1.4 (baseline unknown), BUN 38',
    'CBC': 'WBC 14,800 (H), Hgb 11.2',
    'TSH': 'Normal',
    'Blood cultures': '×2 drawn — pending (bacteremic UTI = urosepsis must be excluded)',
    'CT head (non-contrast)': 'No acute hemorrhage, no mass, no midline shift. Chronic small vessel ischemic changes (expected for age).',
    'Medication review': 'OXYBUTYNIN is a STRONG ANTICHOLINERGIC — Beers Criteria high-risk medication in elderly. Potent cause of delirium: blocks muscarinic receptors in the CNS.'
  },
  orders: {
    correct: [
      { id: 'stop-oxybutynin', name: 'STOP oxybutynin immediately — Beers Criteria anticholinergic = primary precipitant', rationale: 'Oxybutynin is a strong anticholinergic that readily crosses the blood-brain barrier. In elderly patients with dementia, it causes hyperactive delirium, hallucinations, and confusion. Stopping it is mandatory — this is a preventable drug-induced delirium.' },
      { id: 'abx-uti-ams', name: 'Ceftriaxone 1g IV (penicillin allergy — azithromycin is for atypicals; use ceftriaxone for UTI/urosepsis — <1% cross-reactivity with mild PCN allergy)', rationale: 'UTI with fever, leukocytosis, and altered mental status = complicated UTI/urosepsis. IV ceftriaxone is appropriate. Mild penicillin allergy (rash, not anaphylaxis) does not contraindicate cephalosporins — cross-reactivity <1% for cephalosporins with different side chains.' },
      { id: 'delirium-bundle', name: 'HELP (Hospital Elder Life Program) delirium bundle: reorient, mobilize, vision/hearing aids, sleep hygiene, avoid restraints', rationale: 'Non-pharmacologic delirium prevention and treatment is the primary intervention. HELP program components reduce delirium incidence by 40% and duration. Restraints worsen delirium and increase falls — do not use.' },
      { id: 'cam-score', name: 'CAM (Confusion Assessment Method) assessment — document at baseline and serially', rationale: 'CAM: delirium requires all of: (1) acute onset + fluctuating course, (2) inattention, PLUS (3) disorganized thinking OR (4) altered level of consciousness. Sensitivity 94-100%, specificity 90-95% in trained hands.' }
    ],
    incorrect: [
      { id: 'antipsychotic-delirium', name: 'Haloperidol 2mg IV — agitated elderly patient', rationale: 'Antipsychotics are NOT first-line for delirium and should be avoided unless patient is dangerous to themselves or others. They do NOT reduce delirium duration, increase mortality risk in elderly with dementia, and cause QTc prolongation. Treat the cause — stop the anticholinergic.' },
      { id: 'foley-confusion', name: 'Insert Foley catheter — she is confused and may be incontinent', rationale: 'Foley catheterization in a confused elderly patient is a restraint that worsens delirium and increases UTI risk. Avoid urinary catheters in delirium unless monitoring fluid status is essential. Use timed toileting and incontinent briefs.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Delirium (AMS) workup: AEIOU TIPS — Alcohol/drugs, Epilepsy, Insulin (glucose), Opiates/Overdose, Uremia, Trauma, Infection, Psychiatric, Stroke/structural, Sepsis. CAM is the validated screening tool.',
      'In elderly patients, any new medication (especially anticholinergics, benzodiazepines, opioids) started within the past 2 weeks should be considered a prime delirium suspect.',
      'Beers Criteria anticholinergics to avoid in elderly: oxybutynin, diphenhydramine (Benadryl), hydroxyzine, tricyclic antidepressants, first-generation antihistamines. All cause confusion, falls, urinary retention.',
      'Delirium superimposed on dementia: patients with dementia have 5× higher risk of delirium from any insult. Baseline cognition assessment from family is critical — do not assume confusion is chronic.'
    ],
    boardPearls: [
      'Hypoactive delirium is more common (and more dangerous) than hyperactive — patients lie quietly, appear withdrawn, often missed. Hyperactive is more dramatic but both have similar mortality.',
      'Sundowning: worsening confusion in the evening. Not a diagnosis — it is delirium or dementia behavioral symptoms. Treat precipitating factors; maintain light exposure during day.',
      'Ceftriaxone for penicillin-allergic patients: cross-reactivity is driven by the R1 side chain, not the beta-lactam ring. Ceftriaxone has a different R1 side chain from penicillin — safe for mild PCN allergy.',
      'PINCH ME (delirium precipitants mnemonic): Pain, Infection, Nutrition, Constipation/dehydration, Hydration, Medications, Environment/immobility.'
    ]
  },
  references: [{ id: 'StatPearls-Delirium', title: 'Delirium', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470319/', openAccess: true }]
};
