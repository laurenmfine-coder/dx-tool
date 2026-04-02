/* CASE: meningitis-v2 — Viral vs Bacterial Meningitis Distinction */
window.CASES = window.CASES || {};
window.CASES['meningitis-v2'] = {
  id: 'meningitis-v2', name: 'Nina Patel', age: '22F', dob: '2004-01-09',
  mrn: 'RDX-2026-33894', setting: 'ED → Neurology',
  chiefComplaint: 'Headache, fever, neck stiffness — CSF back: 280 WBC, 60% PMN, protein 92, glucose 58',
  diagnosis: 'Viral Meningitis (Enteroviral) — Antibiotics Can Be Stopped',
  category: 'neurologic', acuity: 2,
  continuityNote: 'meningitis-v1: LP performed after empiric ceftriaxone + vancomycin + dexamethasone for presumed bacterial meningitis. CSF results now available. The question: does this CSF pattern confirm bacterial or suggest viral? Can antibiotics be stopped?',
  presentation: {
    hpi: '22F, previously healthy, college student. 2 days of headache, fever to 38.6°C, neck stiffness. No petechiae. Alert and oriented. LP performed, empiric antibiotics started. CSF results now returned — need interpretation and antibiotic decision.',
    pmh: ['No significant PMH', 'Up-to-date on meningococcal vaccine'], meds: ['Ceftriaxone + Vancomycin + Dexamethasone (started 2h ago)'], allergies: ['NKDA']
  },
  vitals: { BP: '118/72', HR: '88', RR: '16', Temp: '38.4°C', SpO2: '99%', GCS: '15' },
  labs: {
    'CSF Analysis (KEY — interpret carefully)': '',
    'Opening pressure': '22 cmH2O (mildly elevated)',
    'Appearance': 'Clear (not turbid — turbid = bacterial)',
    'WBC': '280 cells/µL (H) — 60% lymphocytes, 40% PMNs (lymphocyte PREDOMINANCE — viral pattern)',
    'Protein': '92 mg/dL (mildly elevated — bacterial usually >100, viral usually 50-100)',
    'Glucose': '58 mg/dL — CSF:serum glucose ratio = 58/110 = 0.53 (normal >0.6 is reassuring — bacterial usually <0.4)',
    'Gram stain': 'No organisms seen',
    'CSF culture': 'Pending (48-72h)',
    'CSF enterovirus PCR': 'Pending (12-24h)',
    'Serum procalcitonin': '0.8 ng/mL (borderline — bacterial usually >2)',
    'Blood cultures': 'No growth at 24h (preliminary)'
  },
  orders: {
    correct: [
      { id: 'viral-pattern', name: 'CSF interpretation: lymphocytic pleocytosis + clear fluid + normal glucose + no organisms = viral meningitis pattern', rationale: 'Bacterial: PMN predominance (>80%), turbid CSF, glucose <40 (ratio <0.4), protein >100, organisms on gram stain. Viral: lymphocyte predominance, clear CSF, normal or mildly low glucose, protein 50-100, no organisms. This CSF is viral pattern.' },
      { id: 'stop-abx', name: 'Discontinue antibiotics — viral pattern + normal procalcitonin + no organisms', rationale: 'With clear viral CSF pattern + procalcitonin <0.5-1.0 + no organisms on gram stain + blood cultures negative at 24h → low probability of bacterial meningitis. Enterovirus PCR pending. Stopping antibiotics is appropriate to avoid unnecessary antibiotic exposure if enterovirus PCR returns positive.' },
      { id: 'stop-dexa', name: 'Stop dexamethasone — only proven benefit in bacterial meningitis', rationale: 'Dexamethasone reduces mortality and hearing loss in S. pneumoniae bacterial meningitis. There is no benefit in viral meningitis and potential for harm (immunosuppression). Stop with antibiotics.' },
      { id: 'supportive-viral', name: 'Supportive care — analgesia, IV fluids, monitoring', rationale: 'Viral meningitis (enteroviral) is self-limiting in immunocompetent patients. Treatment is supportive. Discharge when afebrile, tolerating PO, symptoms improving. Usually resolves in 7-10 days.' },
      { id: 'hsv-coverage', name: 'If any encephalopathy features — add acyclovir and keep for HSV', rationale: 'HSV encephalitis has temporal lobe involvement (MRI FLAIR changes), psychiatric features, and focal findings. If present, acyclovir must continue until HSV PCR returns negative. Pure viral meningitis without encephalopathy does not require acyclovir.' }
    ],
    incorrect: [
      { id: 'continue-abx', name: 'Continue full 14-day antibiotic course — cannot rule out bacterial', rationale: 'CSF shows clear lymphocytic pleocytosis with normal glucose — this is a viral pattern. Continuing full antibiotic course based on theoretical concern exposes patient to antibiotic risk without benefit. Gram stain negative, procalcitonin borderline, blood cultures preliminary negative. Stop antibiotics, follow enterovirus PCR.' },
      { id: 'repeat-lp', name: 'Repeat LP in 24h to confirm — CSF may still be evolving', rationale: 'Not indicated. The CSF pattern is clearly viral. Repeat LP is warranted if clinical deterioration or if concern for partially treated bacterial meningitis (antibiotic started before LP). Not needed here.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'CSF interpretation: Bacterial = PMN predominance, turbid, glucose <40 (ratio <0.4), protein >100, organisms. Viral = lymphocyte predominance, clear, glucose normal (ratio >0.6), protein 50-100, no organisms.',
      'In early viral meningitis (first 24-48h), PMNs can predominate even in viral infection — this is a diagnostic trap. Use the full clinical picture and ancillary tests (procalcitonin, gram stain, glucose ratio).',
      'Antibiotics and dexamethasone can safely be stopped when CSF shows viral pattern, gram stain is negative, procalcitonin is low, and blood cultures are negative. Do not reflexively complete a 14-day course.',
      'HSV encephalitis ≠ viral meningitis. Encephalitis: AMS + fever + focal findings → empiric acyclovir + MRI brain until HSV PCR negative. Pure meningitis without encephalopathy: no acyclovir needed.'
    ],
    boardPearls: [
      'Bacterial meningitis empiric regimen: ceftriaxone + vancomycin (PCN-resistant pneumococcus coverage) + dexamethasone (before or with first dose). Add ampicillin for Listeria risk (age >50, immunocompromised, pregnancy).',
      'Cryptococcal meningitis (HIV, immunocompromised): India ink + cryptococcal antigen on CSF. High opening pressure (drain to 20 cmH2O). Treatment: amphotericin B + flucytosine × 2 weeks, then fluconazole maintenance.',
      'TB meningitis: lymphocytic pleocytosis, very high protein, very low glucose. CSF AFB smear insensitive. Send adenosine deaminase and Xpert MTB/RIF on CSF. Prolonged treatment: 12 months.',
      'Post-LP headache: bilateral positional headache (worse upright, better supine). Treatment: bed rest, hydration, caffeine, epidural blood patch if severe.'
    ]
  },
  references: [{ id: 'StatPearls-ViralMeningitis', title: 'Viral Meningitis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430871/', openAccess: true }]
};
