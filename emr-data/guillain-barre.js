/* emr-data/guillain-barre.js
   Guillain-Barré Syndrome — Ascending Paralysis and Respiratory Crisis
   Category: neurologic | Acuity: ESI-2 | Setting: ED → Neurology/ICU
*/
window.CASES = window.CASES || {};
window.CASES['guillain-barre'] = {
  id: 'guillain-barre',
  name: 'Elena Kowalski',
  age: '38F',
  dob: '1987-11-03',
  mrn: 'RDX-2026-74112',
  setting: 'ED → Neurology Floor → ICU',
  chiefComplaint: 'Progressive ascending weakness starting in legs, 3 weeks after GI illness',
  diagnosis: 'Guillain-Barré Syndrome (Acute Inflammatory Demyelinating Polyneuropathy)',
  category: 'neurologic',
  acuity: 2,
  presentation: {
    hpi: 'Elena Kowalski, 38F, presents with 5 days of progressive bilateral leg weakness that is now spreading to her arms. Three weeks ago she had a self-limited GI illness with diarrhea (Campylobacter gastroenteritis, stool culture sent but not yet resulted). She now has difficulty climbing stairs and her grip is weakening. She reports tingling and numbness in her feet that preceded the weakness. No bowel or bladder involvement. No neck stiffness. No rash. On exam: symmetric distal > proximal weakness (4-/5 lower extremities), ABSENT deep tendon reflexes bilaterally, mild distal sensory loss in a stocking distribution.',
    pmh: ['No significant PMH', 'Recent Campylobacter gastroenteritis 3 weeks ago'],
    meds: ['None'],
    allergies: ['Sulfa — rash']
  },
  vitals: { BP: '134/78', HR: '88', RR: '18', Temp: '37.1°C', SpO2: '97%', GCS: '15' },
  exam: {
    neuro: 'Symmetric weakness 4-/5 LE, 4+/5 UE. Absent DTRs bilaterally (areflexia). Distal sensory loss, stocking distribution. CN intact — no facial weakness yet. No Babinski. No clonus.',
    resp: 'NIF -28 cmH2O (borderline — threshold for intubation is NIF <-20 or VC <15 mL/kg)',
    general: 'Alert, anxious, cooperative — appropriate concern about deterioration'
  },
  labs: {
    'CSF (LP)': 'Opening pressure 18 cmH2O (normal). Protein 88 mg/dL (HIGH — normal <45). WBC 3 cells/µL (normal — NO pleocytosis). Glucose normal. Albuminocytologic dissociation — HIGH PROTEIN + NORMAL CELLS = hallmark of GBS.',
    'CBC': 'WBC 9.2, Hgb 13.8, Plt 224',
    'CMP': 'Normal',
    'Anti-ganglioside antibodies': 'Anti-GM1 IgG pending — associated with AMSAN/AMAN variants',
    'Campylobacter stool culture': 'Positive for C. jejuni — classic post-infectious trigger'
  },
  orders: {
    correct: [
      { id: 'ivig-gbs', name: 'IVIG 0.4 g/kg/day × 5 days OR plasmapheresis × 5 exchanges', rationale: 'IVIG and plasmapheresis are equally effective in GBS (Dutch GBS trial, French cooperative trial). IVIG preferred for ease of administration. Combination is NOT superior and may increase complications.' },
      { id: 'spirometry-gbs', name: 'Serial NIF and FVC q4-6h — respiratory monitoring', rationale: 'GBS can cause rapid respiratory failure from diaphragm/intercostal weakness. Intubation thresholds: NIF <-20 cmH2O OR VC <15 mL/kg OR VC dropping 30% in 24h. The "20-30-40 rule": NIF <20, VC <30% predicted, PaO2 <40 on RA.' },
      { id: 'icu-gbs', name: 'ICU-level monitoring — dysautonomia surveillance', rationale: 'GBS causes autonomic instability: labile BP, bradycardia, arrhythmias. Can be fatal if unrecognized. Continuous cardiac monitoring mandatory.' },
      { id: 'dvt-gbs', name: 'DVT prophylaxis — LMWH + SCDs', rationale: 'Immobility + paralysis = high VTE risk. Anticoagulate unless contraindicated.' },
      { id: 'pain-gbs', name: 'Neuropathic pain management — gabapentin or IV opioids', rationale: 'Neuropathic pain is a major feature of GBS and frequently under-treated. Gabapentin or carbamazepine first line; opioids for severe pain.' }
    ],
    incorrect: [
      { id: 'steroids-gbs', name: 'Methylprednisolone IV for GBS', rationale: 'INCORRECT — steroids do NOT improve outcomes in GBS and may worsen recovery. This is a key misconception. The Dutch GBS trial showed no benefit; some evidence of harm. Do not use.' },
      { id: 'both-ivig-plasma', name: 'IVIG + plasmapheresis combination', rationale: 'NOT superior to either alone in clinical trials. Increases exposure and risk without benefit.' },
      { id: 'discharge-gbs', name: 'Discharge with outpatient follow-up — patient looks stable', rationale: 'GBS can deteriorate rapidly with bulbar weakness and respiratory failure within hours. All newly diagnosed GBS requires inpatient monitoring at minimum; ICU if NIF approaching threshold.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'GBS diagnosis: ascending weakness + areflexia + CSF albuminocytologic dissociation (high protein, normal cells). LP is essential — albuminocytologic dissociation may not appear until week 2.',
      'Respiratory monitoring is the most critical intervention. NIF <-20, VC <15 mL/kg, or VC dropping 30% in 24h = intubate. Do not wait for overt respiratory distress — GBS patients fatigue rapidly.',
      'Steroids do NOT work in GBS. This is a high-yield misconception. IVIG or plasmapheresis are equally effective; combination confers no additional benefit.',
      'Autonomic instability (labile BP, bradycardia, arrhythmias) can be fatal — requires continuous cardiac monitoring, not just neurological assessment.',
      'Miller Fisher variant (anti-GQ1b): ophthalmoplegia + ataxia + areflexia. May have minimal limb weakness. Still treat with IVIG.'
    ],
    boardPearls: [
      'Most common post-infectious trigger: Campylobacter jejuni (AMAN/AMSAN variants, more severe). Others: CMV, EBV, Zika, COVID-19, influenza vaccination (small increased risk).',
      'Albuminocytologic dissociation may be absent in the first week — LP can be repeated if clinical suspicion high.',
      '20-30-40 rule: NIF <20, VC <30% predicted, PaO2 <40 → intubate preemptively.',
      '85% of patients regain independent ambulation by 6 months; 5-10% residual significant disability.'
    ]
  },
  references: [
    { id: 'StatPearls-GBS', title: 'Guillain-Barré Syndrome', authors: 'Nagalli S, Kikkeri NS', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK532254/', openAccess: true }
  ]
};
