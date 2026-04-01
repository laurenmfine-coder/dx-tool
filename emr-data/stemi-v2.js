/* CASE: stemi-v2 — Jennifer Davis — Post-PCI STEMI Management Day 2
   Continuity from stemi-v1: Day 2 after successful PCI for anterior STEMI */
window.CASES = window.CASES || {};
window.CASES['stemi-v2'] = {
  id: 'stemi-v2', name: 'Jennifer Davis', age: '50F', dob: '1975-08-17',
  mrn: 'RDX-2026-92470', setting: 'Cardiac ICU → Step-Down',
  chiefComplaint: 'Post-PCI day 2 — new hypotension + declining O2 sat, now 88%',
  diagnosis: 'Post-STEMI Mechanical Complication: Cardiogenic Shock + Papillary Muscle Rupture (Acute Mitral Regurgitation)',
  category: 'cardiovascular', acuity: 1,
  continuityNote: 'Prior encounter: stemi-v1 — Jennifer Davis, 50F with T2DM, HTN, hyperlipidemia. Presented with 2h of chest pain, anterior ST elevation, taken emergently to cath lab. Successful PCI to proximal LAD with drug-eluting stent. EF post-PCI estimated 35% (anterior hypokinesis). Day 1 post-procedure was stable on aspirin, P2Y12, statin, ACEi.',
  presentation: {
    hpi: 'Day 2 post-anterior STEMI and successful LAD PCI. Overnight nursing called for new dyspnea, SpO2 dropped from 97% to 88% on 2L NC. Now requiring 6L. New systolic murmur 4/6 at apex radiating to axilla — not present yesterday. BP dropped from 120/78 to 88/56. She appears in respiratory distress. Her nurse reports she was up to the bathroom and came back short of breath.',
    pmh: ['T2DM', 'HTN', 'Hyperlipidemia', 'Day 2 post-anterior STEMI (LAD PCI)'],
    meds: ['Aspirin 325mg', 'Ticagrelor 90mg BID', 'Atorvastatin 80mg', 'Lisinopril 5mg', 'Furosemide (started today for fluid overload)']
  },
  vitals: { BP: '88/56', HR: '118', RR: '26', Temp: '37.2°C', SpO2: '88% → 94% on 6L NC', GCS: '15' },
  exam: {
    cv: 'New loud systolic murmur 4/6 holosystolic at apex radiating to axilla — NEW. Tachycardia. JVD present.',
    resp: 'Bilateral crackles (worse at bases), decreased air entry at bases, accessory muscle use',
    general: 'Diaphoretic, anxious, pallid — cardiogenic shock'
  },
  labs: {
    'Troponin I': '48.2 ng/mL (H — peaked post-PCI, now re-rising? Check prior values)',
    'BNP': '1,840 pg/mL (H — acute heart failure)',
    'CMP': 'Cr 1.6 (up from 1.0 post-PCI — cardiorenal syndrome developing)',
    'ABG (6L NC)': 'pH 7.32, PaO2 62, PaCO2 38, HCO3 19 — hypoxic respiratory failure',
    'Bedside ECHO (emergent)': 'EF now 25% (down from 35%). SEVERE mitral regurgitation — posterior mitral leaflet flail motion from papillary muscle rupture. Large regurgitant jet into left atrium. Pulmonary veins: flow reversal (severe MR). Right heart: dilating from elevated LVEDP.'
  },
  orders: {
    correct: [
      { id: 'cts-stemi2', name: 'Emergent cardiothoracic surgery consult — surgical MV repair/replacement', rationale: 'Papillary muscle rupture (PMR) is a mechanical complication of STEMI. It is uniformly fatal without surgery. PMR occurs 2-7 days post-STEMI, most common after inferior MI (posterior papillary muscle supplied by a single artery — PDA), but can occur with anterior MI (anterior papillary muscle). Medical management alone has near 100% mortality. Emergency surgical repair/replacement is the only definitive treatment.' },
      { id: 'iabp-stemi2', name: 'Intra-aortic balloon pump (IABP) — bridge to surgery', rationale: 'IABP reduces afterload (decreases regurgitant fraction) and increases diastolic coronary perfusion. It is the bridge to surgical repair in papillary muscle rupture. Reduces systemic afterload, improving forward flow temporarily.' },
      { id: 'vasopressors-stemi2', name: 'Norepinephrine + dobutamine — cardiogenic shock', rationale: 'Cardiogenic shock requires vasopressor support. Norepinephrine for MAP maintenance + dobutamine for inotropic support. Avoid pure vasoconstrictors alone — they increase afterload and worsen MR severity.' },
      { id: 'intubation-stemi2', name: 'Early intubation — hypoxic respiratory failure worsening', rationale: 'SpO2 88% on 6L and declining. With impending cardiogenic shock and PMR, the airway should be secured early before full decompensation. NIV can be tried briefly, but surgical prep requires intubation.' }
    ],
    incorrect: [
      { id: 'diuretics-stemi2', name: 'Increase furosemide — treating pulmonary edema', rationale: 'Diuretics will not address the root cause (papillary muscle rupture + severe MR). Aggressive diuresis in cardiogenic shock drops preload and can precipitate cardiovascular collapse. The pulmonary edema is from severe MR — surgical correction is the fix.' },
      { id: 'thrombolytics-stemi2', name: 'Recurrent STEMI — give thrombolytics', rationale: 'This is NOT re-occlusion of the stent. The murmur and echo findings confirm a mechanical complication (PMR). Thrombolytics would not address a ruptured papillary muscle and carry bleeding risk in a patient who just had PCI.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Mechanical complications of STEMI occur 2-7 days post-infarction: (1) Papillary muscle rupture → acute MR; (2) Free wall rupture → tamponade; (3) Ventricular septal defect (VSD) → new harsh systolic murmur at LLSB with oxygen step-up. ALL are surgical emergencies.',
      'Papillary muscle rupture: new holosystolic murmur at apex radiating to axilla + acute pulmonary edema + cardiogenic shock post-STEMI = PMR until proven otherwise. Echo is confirmatory. Surgery is the ONLY treatment.',
      'IABP reduces afterload and MR severity — it is a bridge to surgery, NOT definitive treatment. Medical management alone has near 100% 30-day mortality in PMR.',
      'Post-STEMI assessment: EF 35-40% → initiate ACEi + beta-blocker (if tolerated) + wearable cardioverter defibrillator. EF <35% at 40 days → ICD evaluation (MADIT-II).'
    ],
    boardPearls: [
      'Dressler syndrome: pericarditis 2-10 weeks post-STEMI (autoimmune). Pleuritic chest pain + friction rub + diffuse ST elevation. Treatment: NSAIDs + colchicine.',
      'Post-STEMI LV thrombus: risk highest with anterior STEMI and EF <35%. Anticoagulate with warfarin or DOAC × 3-6 months. Echo at 3 months to confirm resolution.',
      'Inferior STEMI complications: posterior papillary muscle rupture (one arterial supply — PDA); right ventricular infarction (ST elevation V3R/V4R) → requires fluid loading, avoid nitroglycerin.',
      'Culprit vessel: anterior STEMI (LAD) → largest territory → highest risk for cardiogenic shock and heart failure. RCA dominant → inferior wall. LCx → lateral wall.'
    ]
  },
  references: [{ id: 'StatPearls-STEMI-Comp', title: 'Myocardial Infarction Complications', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK459219/', openAccess: true }]
};
