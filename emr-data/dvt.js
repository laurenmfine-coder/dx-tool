/* emr-data/dvt.js — Deep Vein Thrombosis + Anticoagulation Selection */
window.CASES = window.CASES || {};
window.CASES['dvt'] = {
  id: 'dvt', name: 'Priya Sharma', age: '44F', dob: '1981-11-22',
  mrn: 'RDX-2026-39312', setting: 'ED → Vascular/Hematology Clinic', category: 'cardiovascular', acuity: 3,
  chiefComplaint: 'Left calf and thigh swelling, pain — on oral contraceptives',
  diagnosis: 'Left Proximal Deep Vein Thrombosis (Femoral-Popliteal) — OCP-Provoked',
  presentation: {
    hpi: '44F on combined oral contraceptives for 6 months. 5 days of left calf pain, now extending to left thigh. Left leg 3.5cm larger in circumference than right at calf. Positive Homan\'s sign (low sensitivity/specificity — do not rely on it). Wells score: 3 points (alternative diagnosis less likely + immobility 5 days ago for long-haul flight from India + calf tenderness) = HIGH pre-test probability. Duplex ultrasound: echogenic thrombus in left femoral vein extending to popliteal vein.',
    pmh: ['Estrogen-containing OCP × 6 months', 'No prior VTE', 'No family history of clotting disorder'],
    meds: ['OCP (ethinyl estradiol/levonorgestrel)'], allergies: ['Sulfa — rash']
  },
  vitals: { BP: '124/78', HR: '82', RR: '14', Temp: '37.0°C', SpO2: '99%' },
  labs: {
    'Duplex US (left leg)': 'Non-compressible left femoral vein with echogenic thrombus extending to popliteal vein — PROXIMAL DVT confirmed. Calf veins clear.',
    'D-dimer': 'NOT needed — high pre-test probability. Imaging is diagnostic. D-dimer is for LOW pre-test probability only.',
    'CBC': 'Normal. Plt 312.', 'BMP': 'Normal. Cr 0.8.',
    'Thrombophilia workup': 'Consider after treatment complete — acute thrombosis alters most assays. Test after 3 months off anticoagulation if indicated.'
  },
  orders: {
    correct: [
      { id: 'doac-dvt', name: 'Apixaban 10mg BID × 7 days, then 5mg BID — first-line for DVT', rationale: 'DOACs are first-line for provoked DVT (AMPLIFY trial). Apixaban or rivaroxaban can be started immediately without heparin bridge. Duration: provoked DVT (reversible risk factor like OCP) → 3 months minimum. Stop OCP simultaneously.' },
      { id: 'stop-ocp', name: 'Stop OCP immediately — significant VTE risk factor, switch to non-estrogen contraception', rationale: 'Estrogen-containing OCPs increase VTE risk 3-4× by increasing clotting factor synthesis. Must stop immediately. Alternative contraception: progestin-only pill, IUD, barrier methods.' },
      { id: 'duration-dvt', name: 'Anticoagulate 3 months — provoked DVT with reversible risk factor', rationale: 'Provoked DVT (transient risk factor — OCP + travel): 3 months anticoagulation. Unprovoked DVT: minimum 3 months, then reassess for extended anticoagulation (risk vs benefit). Recurrence risk after provoked DVT = 5%/year; after unprovoked = 15%/year.' }
    ],
    incorrect: [
      { id: 'ddimer-first', name: 'Check D-dimer before imaging — rule out DVT if negative', rationale: 'D-dimer is a rule-out test for LOW pre-test probability. Wells score 3 = HIGH pre-test probability. A negative D-dimer in high-pre-test patients is unreliable (too many false negatives). Go directly to imaging.' },
      { id: 'warfarin-dvt', name: 'Warfarin with heparin bridge — standard anticoagulation for DVT', rationale: 'DOACs are now preferred over warfarin for most DVT (equivalent efficacy, no INR monitoring, no heparin bridge needed). Warfarin remains preferred for: APS, mechanical heart valves, severe CKD (CrCl <15), active cancer (use LMWH or DOAC per cancer-specific guidelines).' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Wells score for DVT: paralysis/paresis/cast (1), bedridden >3 days or surgery within 12 weeks (1), calf tenderness (1), entire leg swollen (1), calf >3cm larger (1), pitting edema (1), collateral superficial veins (1), active malignancy (1), prior DVT (1), alternative diagnosis as likely (-2). Score ≥2 = high probability → imaging directly.',
      'D-dimer: high sensitivity, low specificity. Use ONLY for low pre-test probability to RULE OUT DVT. Never use to rule in (positive D-dimer in high-risk patients → image directly).',
      'DOACs first-line for most DVT: apixaban (10mg BID × 7 days → 5mg BID) or rivaroxaban (15mg BID × 21 days → 20mg daily). No heparin bridge needed.',
      'OCP and VTE: estrogen-containing OCPs 3-4× VTE risk. Stop immediately when DVT diagnosed. Non-estrogen alternatives: progestin-only, IUD, barrier.'
    ],
    boardPearls: [
      'Proximal DVT (femoral, popliteal) → anticoagulate (PE risk ~50% without treatment). Isolated distal DVT (calf veins) → controversial; options are anticoagulate or serial imaging × 2 weeks.',
      'Cancer-associated DVT: LMWH was standard (CLOT trial). DOACs (apixaban, rivaroxaban) now show non-inferiority in most cancer types — except GI/GU cancer (higher bleeding risk with DOACs).',
      'Extended anticoagulation after first unprovoked DVT: consider indefinitely if low bleeding risk. PE Severity Index, DASH score, Vienna prediction guide decision.',
      'May-Thurner syndrome: left iliac vein compression by right iliac artery → left-sided DVT in young women. Consider catheter-directed thrombolysis + iliac vein stenting.'
    ]
  },
  references: [{ id: 'StatPearls-DVT', title: 'Deep Vein Thrombosis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK507708/', openAccess: true }]
};
