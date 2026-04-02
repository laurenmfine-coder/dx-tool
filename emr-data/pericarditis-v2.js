/* CASE: pericarditis-v2 — Recurrent Pericarditis + Pericardial Effusion */
window.CASES = window.CASES || {};
window.CASES['pericarditis-v2'] = {
  id: 'pericarditis-v2', name: 'Antonio Ferrara', age: '38M', dob: '1987-08-22',
  mrn: 'RDX-2026-29441', setting: 'Cardiology',
  chiefComplaint: 'Third episode of pericarditis in 18 months — on steroids, tapering caused relapse',
  diagnosis: 'Recurrent Steroid-Dependent Pericarditis — Colchicine ± IL-1 Inhibitor Indicated',
  category: 'cardiovascular', acuity: 2,
  continuityNote: 'pericarditis-v1: Antonio Ferrara, 38M, first pericarditis episode 18 months ago. Treated with NSAIDs + colchicine × 3 months. Recurrence #1 at 12 months — tried prednisone 25mg taper (relapsed at 5mg). Now third episode while tapering steroids to 5mg/day.',
  presentation: {
    hpi: 'Third pericarditis episode. Currently on prednisone 5mg/day from prior episode — cannot taper below 5mg without relapse. Presents with typical pleuritic chest pain, friction rub, diffuse saddle-shaped ST elevation. ECHO: moderate pericardial effusion 1.8cm (no tamponade — no diastolic collapse). CRP 88 mg/L. He works as a marathon runner and wants to return to athletics.',
    pmh: ['Recurrent pericarditis ×3', 'Steroid-dependent — cannot taper below 5mg/day'],
    meds: ['Prednisone 5mg daily', 'Colchicine 0.5mg BID (on since episode 1)'], allergies: ['Ibuprofen — GI intolerance']
  },
  vitals: { BP: '124/78', HR: '96', RR: '18', Temp: '37.8°C', SpO2: '98%', GCS: '15' },
  labs: {
    'ECG': 'Diffuse saddle-shaped ST elevation (leads I, II, aVF, V2-V6) with PR depression. No focal changes (not STEMI pattern).',
    'ECHO': 'Moderate pericardial effusion 1.8cm. No right atrial or right ventricular diastolic collapse (no tamponade physiology yet). Preserved EF 60%.',
    'CRP': '88 mg/L (H — active inflammation, target <1 for tapering)',
    'ANA/anti-dsDNA': 'Negative — no systemic autoimmune disease identified',
    'TSH': 'Normal — hypothyroidism excluded',
    'CBC': 'Normal'
  },
  orders: {
    correct: [
      { id: 'anakinra-recur', name: 'Anakinra 100mg SQ daily — IL-1 receptor antagonist for steroid-dependent recurrent pericarditis', rationale: 'AIRTRIP trial (NEJM 2016): anakinra reduces recurrence by 70% in idiopathic recurrent pericarditis failing conventional therapy. IL-1β is the dominant driver of autoinflammatory pericarditis. FDA approved rilonacept (IL-1α/β trap) for recurrent pericarditis (RHAPSODY trial 2021). Goal: taper and eliminate steroids.' },
      { id: 'slow-taper', name: 'Very slow prednisone taper — guided by CRP, not symptoms', rationale: 'Recurrent pericarditis taper strategy: reduce by 1-2.5mg/month only. Do NOT taper based on symptoms alone — CRP must be <1 mg/L before each dose reduction. Rapid taper is the most common cause of relapse. Total taper may take 6-12 months.' },
      { id: 'restrict-activity', name: 'Activity restriction until asymptomatic + CRP normalized + at least 3 months', rationale: 'Marathon running is contraindicated. Return to sports: asymptomatic + normal CRP + normal ECHO + minimum 3 months after last episode. Strenuous exercise during active pericarditis risks tamponade from effusion accumulation and arrhythmia.' },
      { id: 'pericardiocentesis', name: 'Pericardiocentesis only if tamponade develops — monitor ECHO serially', rationale: 'Moderate effusion (1.8cm) without tamponade physiology: monitor. Tamponade criteria: diastolic collapse of RA (first sign) → RV diastolic collapse → hemodynamic compromise. If present: pericardiocentesis emergently.' }
    ],
    incorrect: [
      { id: 'increase-steroids', name: 'Increase prednisone to 40mg — current dose inadequate', rationale: 'High-dose steroids increase recurrence risk and side effects. The COPE and CORP trials showed steroids are associated with higher recurrence rates in pericarditis. Use lowest effective steroid dose while adding colchicine or IL-1 antagonist as the steroid-sparing strategy.' },
      { id: 'colchicine-stop', name: 'Stop colchicine — patient has been on it for 18 months, probably not helping', rationale: 'Colchicine reduces recurrence by 50% (COPE trial). In recurrent pericarditis, colchicine should be continued at minimum 6 months after last episode. The patient is on it appropriately — the recurrences are from inadequate overall regimen, not colchicine failure.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Recurrent pericarditis taper: guided by CRP (must be <1 mg/L), not symptoms. Reduce by 1-2.5mg/month. Most relapses from too-rapid tapering. Duration 6-12 months total.',
      'Steroid-dependent recurrent pericarditis: add IL-1 antagonist (anakinra or rilonacept). AIRTRIP trial: anakinra 100mg SQ daily reduces recurrence by 70%. Rilonacept FDA-approved 2021 (RHAPSODY trial). Goal is steroid elimination.',
      'Return to sports: minimum 3 months after last episode + asymptomatic + CRP normal + ECHO normal. Marathon running is contraindicated during active disease.',
      'High-dose steroids INCREASE recurrence in pericarditis — the goal is to use the lowest effective dose and eliminate steroids with colchicine or IL-1 antagonist.'
    ],
    boardPearls: [
      'Pericarditis ECG: diffuse saddle-shaped ST elevation + PR depression (most specific sign). All leads except aVR and V1. No reciprocal ST depression (distinguishes from STEMI).',
      'Constrictive pericarditis (late complication): calcified pericardium, Kussmaul sign (JVP rises with inspiration — opposite of normal), pericardial knock on auscultation. Pericardiectomy is definitive.',
      'Dressler syndrome: autoimmune pericarditis 2-10 weeks post-MI or post-cardiac surgery. Treatment: NSAIDs + colchicine.',
      'Cardiac tamponade: Beck\'s triad (hypotension + muffled heart sounds + JVD). Pulsus paradoxus >10 mmHg. ECHO: RA diastolic collapse (first sign), RV diastolic collapse. Treatment: pericardiocentesis.'
    ]
  },
  references: [{ id: 'StatPearls-Pericarditis', title: 'Pericarditis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK431069/', openAccess: true }]
};
