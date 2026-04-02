/* emr-data/dvt.js — DVT: Wells Score + DOAC */
window.CASES = window.CASES || {};
window.CASES['dvt'] = {
  id: 'dvt', name: 'Claire Summers', age: '34F', dob: '1991-02-16',
  mrn: 'RDX-2026-41721', setting: 'ED → Medicine', category: 'hematologic', acuity: 2,
  chiefComplaint: 'Left leg swelling and pain × 3 days — oral contraceptive user, recent long flight',
  diagnosis: 'Deep Vein Thrombosis — Proximal Left Lower Extremity',
  presentation: {
    hpi: '34F on OCP, returned from 14h flight from Tokyo 4 days ago. 3 days of left calf and thigh swelling, warmth, erythema, tenderness on palpation. Wells score: +1 (active cancer: no) +1 (paralysis/immobilization: no) +1 (bedridden >3d/surgery <12wk: no) +1 (tenderness along DVT distribution: YES) +1 (entire leg swollen: YES) +1 (calf >3cm asymmetry: YES) +1 (pitting edema affected leg: YES) −2 (alternative dx at least as likely: no) = 4 points = HIGH pre-test probability.',
    pmh: ['OCP (estrogen-containing) × 2 years'], meds: ['Ethinyl estradiol/levonorgestrel'], allergies: ['NKDA']
  },
  vitals: { BP: '118/72', HR: '78', RR: '14', Temp: '37.2°C', SpO2: '99%' },
  labs: {
    'Wells Score': '4 = HIGH probability → skip D-dimer, go directly to ultrasound',
    'Duplex US left leg': 'Non-compressibility of left popliteal and femoral veins. Absent color flow left popliteal. DVT confirmed — proximal (above knee).',
    'D-dimer': '2,840 ng/mL (H — expected in high-probability DVT, result does NOT change management here)'
  },
  orders: {
    correct: [
      { id: 'doac-dvt', name: 'Apixaban 10mg BID × 7 days, then 5mg BID × 3-6 months', rationale: 'DOAC is preferred over LMWH → warfarin for DVT. Apixaban: AMPLIFY trial — non-inferior efficacy, superior safety (less major bleeding). No bridging, no monitoring. Rivaroxaban (15mg BID × 21 days then 20mg daily) is an alternative. Avoid warfarin as initial therapy without bridging.' },
      { id: 'stop-ocp', name: 'Discontinue OCP — significant thrombotic risk factor', rationale: 'Estrogen-containing OCP increases DVT risk 3-5× (factor V Leiden carriers: 35×). Stop immediately. Switch to progesterone-only or non-hormonal contraception. Inform patient about future estrogen avoidance.' },
      { id: 'duration-dvt', name: '3 months minimum — provoked DVT (OCP + recent flight)', rationale: 'Provoked DVT (identifiable transient risk factor: OCP + immobility) = 3 months anticoagulation. Unprovoked DVT = 3-6 months minimum, consider indefinite therapy based on recurrence risk and bleeding risk.' },
      { id: 'compression-dvt', name: 'Compression stockings — reduces post-thrombotic syndrome', rationale: 'Post-thrombotic syndrome (PTS): chronic leg pain, swelling, skin changes from venous insufficiency. Compression stockings (30-40 mmHg) worn for 2 years reduces PTS severity. Start as soon as tolerated.' }
    ],
    incorrect: [
      { id: 'ddimer-first', name: 'Check D-dimer to rule out DVT — high probability Wells score', rationale: 'D-dimer is only useful to EXCLUDE DVT in LOW probability patients. High Wells score (4) = high probability → proceed directly to ultrasound. D-dimer is universally elevated in high-probability DVT and a positive result adds no information.' },
      { id: 'warfarin-dvt', name: 'Start warfarin with LMWH bridge — standard anticoagulation', rationale: 'OUTDATED — DOACs are the preferred first-line therapy for VTE per 2021 AHA guidelines. Warfarin requires bridging, INR monitoring, frequent dose adjustments, and multiple food/drug interactions. DOACs have equivalent or superior efficacy and safety with much simpler dosing.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Wells DVT score: HIGH (≥3) → ultrasound directly, skip D-dimer. MODERATE (1-2) → D-dimer, then ultrasound if positive. LOW (≤0) → D-dimer, ultrasound only if D-dimer positive. D-dimer is a rule-out test ONLY in low-to-moderate probability.',
      'DOACs (apixaban, rivaroxaban) are preferred over warfarin for DVT. No bridging required, no monitoring, fewer interactions. Exception: antiphospholipid syndrome, mechanical valves, pregnancy → warfarin.',
      'Provoked DVT (identifiable transient risk factor) = 3 months anticoagulation. Unprovoked DVT = 3-6 months minimum with recurrence risk assessment for indefinite therapy.',
      'OCP + DVT: stop estrogen-containing OCP immediately. Risk factor for both first and recurrent VTE.'
    ],
    boardPearls: [
      'Factor V Leiden: most common inherited thrombophilia. Heterozygous: 4-7× VTE risk. Homozygous: 80× risk. OCP + FVL heterozygous = 35× VTE risk.',
      'Thrombophilia testing: defer until 3 months after completing anticoagulation (antithrombin, protein C, protein S are reduced by acute thrombosis and anticoagulation).',
      'May-Thurner syndrome: left iliac vein compression by right iliac artery → unprovoked left leg DVT in young women. Catheter-directed thrombolysis + iliac stenting.',
      'Post-thrombotic syndrome (PTS): chronic complication in 20-50% of DVT. Chronic venous insufficiency, leg ulcers. Prevention: compression stockings, adequate anticoagulation.'
    ]
  },
  references: [{ id: 'StatPearls-DVT', title: 'Deep Vein Thrombosis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK507708/', openAccess: true }]
};
