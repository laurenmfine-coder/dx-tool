/* CASE: stemi-v3 — Carlos Mendez — Posterior STEMI / Wellens Pattern Missed as "Normal ECG" */
window.CASES = window.CASES || {};
window.CASES['stemi-v3'] = {
  id: 'stemi-v3', name: 'Carlos Mendez', age: '56M', dob: '1969-01-22',
  mrn: 'RDX-2026-77841', setting: 'ED → Cath Lab',
  chiefComplaint: 'Chest pain radiating to back — ECG read as "normal" in triage',
  diagnosis: 'Posterior STEMI (Occlusion Myocardial Infarction) — Missed by Anterior Lead ECG Analysis',
  category: 'cardiovascular', acuity: 1,
  presentation: {
    hpi: 'Carlos Mendez, 56M with hypertension and heavy smoking history, presents with 90 minutes of crushing chest pain radiating to his back and jaw. He is diaphoretic and nauseated. The triage nurse ran a 12-lead ECG and told him it was "essentially normal — no ST elevation." He was placed in a waiting room chair. A PA reassesses 45 minutes later because the patient appears worse and requests a repeat ECG, now with posterior leads V7-V9.',
    pmh: ['HTN', 'Active smoker 40 pack-years', 'No prior cardiac history'], meds: ['Lisinopril 10mg'], allergies: ['NKDA']
  },
  vitals: { BP: '96/62', HR: '58', RR: '20', Temp: '37.0°C', SpO2: '96%' },
  exam: {
    cv: 'Bradycardia (vagal response — inferior/posterior MI). Distant heart sounds. JVD absent. Peripheral pulses weak.',
    general: 'Diaphoretic, pale, severe distress — time-sensitive emergency'
  },
  labs: {
    'ECG — Standard 12-lead': 'ST DEPRESSION in V1-V4 (tall R waves, upright T waves in V1-V2) — THESE ARE POSTERIOR STEMI CHANGES VIEWED IN A MIRROR. PR interval prolonged 220ms. No obvious ST elevation in standard leads. This ECG was called "essentially normal."',
    'ECG — Posterior leads V7-V9 (KEY)': 'ST ELEVATION in V7, V8, V9 >1mm — CONFIRMS POSTERIOR STEMI. This is the missed finding.',
    'ECG — Right leads V3R-V4R': 'ST elevation V4R — RIGHT VENTRICULAR INFARCTION COMPONENT. Requires different management: fluid loading, avoid nitrates.',
    'Troponin I (initial)': '0.14 ng/mL (mildly elevated — 90 minutes of symptoms)'
  },
  orders: {
    correct: [
      { id: 'cath-stemi3', name: 'IMMEDIATE cath lab activation — posterior STEMI = STEMI equivalent', rationale: 'Posterior STEMI requires immediate reperfusion. ST depression in V1-V4 with tall R waves and upright T waves in V1-V2 = posterior STEMI in a mirror image. Do not wait. Call the cath lab now — the patient has been waiting 45 extra minutes due to ECG misinterpretation.' },
      { id: 'posterior-leads', name: 'Obtain posterior leads V7-V9 for all patients with ST depression V1-V4', rationale: 'Any ST depression in V1-V4 should prompt posterior lead acquisition. V7 (posterior axillary line), V8 (tip of scapula), V9 (left paraspinal). ST elevation ≥0.5mm in these leads = posterior STEMI.' },
      { id: 'rv-leads', name: 'Obtain right-sided leads V3R-V4R — RV infarction screen', rationale: 'Inferior and posterior STEMI can involve the right ventricle (RCA territory). RV infarction: ST elevation in V4R, hemodynamic dependence on preload. AVOID nitrates and diuretics — they cause severe hypotension from preload reduction.' },
      { id: 'fluids-rv', name: 'IV fluid challenge 500mL NS — hypotension + bradycardia (vagal + RV infarction)', rationale: 'RV infarction is preload-dependent. Hypotension from RV infarction responds to fluids, not vasopressors alone. This is the opposite of cardiogenic shock from LV failure.' },
      { id: 'no-nitrates', name: 'HOLD all nitrates — suspected RV involvement', rationale: 'Nitrates (NTG, isosorbide) cause venodilation and reduce preload. In RV infarction, preload is critical. Nitrates cause precipitous hypotension and cardiovascular collapse. Document contraindication clearly.' }
    ],
    incorrect: [
      { id: 'observe-stemi3', name: 'Observe with serial troponins — ECG non-diagnostic', rationale: 'CRITICAL ERROR — this patient has posterior STEMI. Waiting for troponin rise while the ECG is non-diagnostic to the untrained eye = continued myocardial death. The ECG IS diagnostic if you know how to read posterior MI changes.' },
      { id: 'nitrates-rv', name: 'Sublingual nitroglycerin for chest pain', rationale: 'CONTRAINDICATED — RV infarction is present (ST elevation V4R, hypotension, bradycardia). Nitroglycerin will cause cardiovascular collapse from preload reduction in RV-dependent hemodynamics.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Posterior STEMI is the most commonly missed STEMI. Presents with ST depression in V1-V4 (tall R waves, upright T waves in V1-V2) — these are the mirror image of posterior ST elevation. The ECG is NOT normal.',
      'Any ST depression in V1-V4 without an obvious explanation → obtain posterior leads V7-V9. ST elevation ≥0.5mm in V7-V9 = posterior STEMI = activate cath lab.',
      'Wellens syndrome: critical LAD stenosis presenting with characteristic T-wave changes (Type A: biphasic T in V2-V3; Type B: deep symmetric T-wave inversion V2-V3) in a PAIN-FREE interval. These patients are pre-infarction and need urgent cath. Do NOT stress test — can precipitate massive MI.',
      'RV infarction: ST elevation in V4R, hemodynamic triad (hypotension + clear lungs + JVD). Management: fluids (preload-dependent), avoid nitrates/diuretics. Atropine for bradycardia. Avoid vasopressors if possible.'
    ],
    boardPearls: [
      'De Winter T waves: ST depression with tall peaked T waves in V1-V6 = LAD occlusion equivalent. No ST elevation. Requires immediate cath.',
      'Posterior leads V7, V8, V9: V7 at posterior axillary line, V8 at tip of scapula, V9 at left paraspinal border — all at the same horizontal level as V4-V6.',
      'Sgarbossa criteria for STEMI with LBBB: concordant ST elevation ≥1mm, concordant ST depression ≥1mm in V1-V3, discordant ST elevation ≥5mm. Modified Sgarbossa uses proportional criteria (ST/S ratio).',
      'High-lateral MI (aVL): ST elevation in aVL with reciprocal changes in inferior leads (III, aVF). Often from diagonal or obtuse marginal branch. Small territory but can be missed.'
    ]
  },
  references: [{ id: 'StatPearls-PosteriorMI', title: 'Posterior Myocardial Infarction', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482380/', openAccess: true }]
};
