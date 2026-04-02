/* CASE: pericarditis-v2 — Daniel Okafor — Pericarditis: Recurrence + Colchicine Failure + Tamponade */
window.CASES = window.CASES || {};
window.CASES['pericarditis-v2'] = {
  id: 'pericarditis-v2', name: 'Daniel Okafor', age: '26M', dob: '2000-08-02',
  mrn: 'MRN-460047', setting: 'ED → Cardiology',
  chiefComplaint: 'Third episode of pericarditis — on colchicine — new large effusion, hypotension',
  diagnosis: 'Recurrent Pericarditis with Cardiac Tamponade',
  category: 'cardiovascular', acuity: 1,
  continuityNote: 'Prior encounter: pericarditis-v1 — Daniel Okafor, 26M post-viral pericarditis. Treated with NSAIDs + colchicine 3 months × 3 months. Second episode 4 months ago: same treatment, resolved. Now third episode.',
  presentation: {
    hpi: 'Third episode of pericarditis in 12 months. He is compliant with colchicine. This episode: sharp pleuritic chest pain again but also new dyspnea and now BP 88/62. Echo ordered emergently. Beck\'s triad present: hypotension + muffled heart sounds + JVD. Pulsus paradoxus: 18mmHg (>10 = tamponade).',
    pmh: ['Recurrent pericarditis ×3', 'Currently on colchicine 0.5mg BID × 2 months of prescribed 3 months'],
    meds: ['Colchicine 0.5mg BID (failing — third recurrence on therapy)', 'Ibuprofen 600mg TID (prescribed at last episode)']
  },
  vitals: { BP: '88/62', HR: '124', RR: '22', Temp: '37.3°C', SpO2: '95%', 'Pulsus paradoxus': '18mmHg (H — >10 = tamponade)' },
  labs: {
    'Bedside ECHO': 'Large circumferential pericardial effusion (2.4cm posterior). RIGHT VENTRICULAR DIASTOLIC COLLAPSE — confirms tamponade physiology. Swinging heart motion.',
    'ECG': 'Sinus tachycardia. Low voltage. No electrical alternans (classic for large effusion but not always present).',
    'BMP': 'Normal', 'CBC': 'WBC 11.2, Hgb 13.8',
    'ESR/CRP': 'CRP 88 mg/L (H) | ESR 72 mm/hr (H) — active pericardial inflammation',
    'ANA/ANCA/anti-dsDNA': 'All negative — autoimmune workup negative'
  },
  orders: {
    correct: [
      { id: 'pericardiocentesis', name: 'Emergency pericardiocentesis — tamponade with hemodynamic compromise', rationale: 'Cardiac tamponade with BP 88/62, pulsus paradoxus 18mmHg, and echo-confirmed RV diastolic collapse = EMERGENCY. Pericardiocentesis (echo-guided preferred, or subxiphoid approach) must be performed immediately. This is a life-threatening emergency — do NOT delay.' },
      { id: 'iv-fluids-tamponade', name: 'IV fluid bolus 500mL NS — temporizing while preparing for pericardiocentesis', rationale: 'Tamponade physiology: heart is compressed, preload-dependent. IV fluids temporarily increase filling pressure and maintain cardiac output as a bridge to pericardiocentesis. NOT definitive treatment.' },
      { id: 'avoid-diuretics', name: 'HOLD all diuretics — tamponade is preload-dependent', rationale: 'Diuretics, nitrates, and vasodilators reduce preload → catastrophic hemodynamic collapse in tamponade. Absolutely contraindicated.' },
      { id: 'cardiology-rheum', name: 'Cardiology + Rheumatology consult — recurrent pericarditis on colchicine = refractory, consider IL-1 blockade', rationale: 'Recurrent pericarditis failing colchicine = refractory pericarditis. Next-line: IL-1 receptor antagonist (anakinra or rilonacept — FDA approved 2021 for recurrent pericarditis). Rilonacept (RHAPSODY trial) reduced recurrence by 96%. Azathioprine or IVIG for refractory cases if IL-1 blockade fails.' },
      { id: 'pericardial-fluid-send', name: 'Send pericardial fluid for analysis — cell count, glucose, protein, cultures, cytology, ANA, LDH', rationale: 'Pericardial fluid analysis determines etiology: purulent (bacterial — surgery + antibiotics), bloody (malignancy, TB, trauma), serous (viral, idiopathic, autoimmune). Culture and cytology are essential.' }
    ],
    incorrect: [
      { id: 'more-nsaid', name: 'Increase ibuprofen dose — this is another pericarditis flare', rationale: 'This is TAMPONADE, not just a pericarditis flare. NSAIDs and colchicine do not treat tamponade physiology. Hemodynamic compromise from effusion requires pericardiocentesis, not anti-inflammatory dose escalation.' },
      { id: 'steroids-peri', name: 'Start prednisone — colchicine not working', rationale: 'Steroids INCREASE recurrence rate of pericarditis (COPE and CORE trials). They are not first-line and may worsen the recurrent pattern. IL-1 blockade (anakinra, rilonacept) is the evidence-based next step for colchicine-refractory recurrent pericarditis.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Cardiac tamponade = emergency. Beck\'s triad: hypotension + muffled heart sounds + JVD. Pulsus paradoxus >10mmHg. Echo: RV diastolic collapse = diagnostic. Pericardiocentesis is the only definitive treatment.',
      'Pulsus paradoxus: >10mmHg drop in systolic BP with inspiration. Mechanism: inspiration increases RV filling, shifts septum leftward, compresses LV in fixed pericardial space → reduced LV stroke volume on inspiration.',
      'Recurrent pericarditis failing colchicine: IL-1 blockade (rilonacept or anakinra) is now the evidence-based next step. Rilonacept FDA-approved 2021 (RHAPSODY trial — 96% reduction in recurrence vs placebo).',
      'Steroids in pericarditis: NOT first-line — increase recurrence rate. Only use for systemic disease indication (lupus, rheumatoid) or true colchicine + NSAID failure, and only with rheumatology co-management.'
    ],
    boardPearls: [
      'Electrical alternans: alternating QRS axis on ECG — classic for large pericardial effusion with swinging heart. Not present in all tamponade cases.',
      'Constrictive pericarditis: late complication (months-years) from pericardial fibrosis. Kussmaul sign (JVD increases on inspiration — opposite of normal). Pericardial knock. CT/MRI: thickened pericardium. Treatment: pericardiectomy.',
      'Pericarditis in post-cardiac surgery (Dressler syndrome), post-MI, uremic pericarditis: treat underlying cause. Uremic pericarditis: dialysis is the treatment.',
      'Purulent pericarditis (rare, high mortality): fever + tamponade + purulent fluid. Treatment: surgical drainage + antibiotics. Not amenable to needle pericardiocentesis alone.'
    ]
  },
  references: [{ id: 'StatPearls-Pericarditis', title: 'Pericarditis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK431080/', openAccess: true }]
};
