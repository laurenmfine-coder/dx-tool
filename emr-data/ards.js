/* emr-data/ards.js
   ARDS — Lung-Protective Ventilation and Prone Positioning
   Category: pulmonary | Acuity: ESI-1 | Setting: ICU
*/
window.CASES = window.CASES || {};
window.CASES['ards'] = {
  id: 'ards',
  name: 'Patricia Okafor',
  age: '52F',
  dob: '1973-08-14',
  mrn: 'RDX-2026-48834',
  setting: 'Medical ICU',
  chiefComplaint: 'Intubated for respiratory failure — bilateral opacities on CXR, non-cardiogenic',
  diagnosis: 'Moderate ARDS (P/F ratio 140) secondary to Community-Acquired Pneumonia',
  category: 'pulmonary',
  acuity: 1,
  presentation: {
    hpi: 'Patricia Okafor, 52F, intubated in the ED 6 hours ago for hypoxic respiratory failure. She presented with 5 days of fever, productive cough, and worsening dyspnea. CXR shows bilateral airspace opacities. ECHO shows EF 55% with normal filling pressures — cardiogenic edema excluded. On current ventilator settings (TV 500mL, PEEP 8, FiO2 0.8): PaO2 113, P/F ratio 141 — moderate ARDS by Berlin definition. She is on pressure-regulated volume-controlled ventilation. Current settings are NOT lung-protective.',
    pmh: ['Type 2 diabetes', 'Hypertension', 'BMI 31 — IBW 62 kg'],
    meds: ['Metformin', 'Lisinopril', 'Fentanyl drip', 'Propofol drip'],
    allergies: ['Sulfa — rash']
  },
  vitals: { BP: '108/64', HR: '102', RR: '22 (ventilated)', Temp: '38.8°C', SpO2: '93%', GCS: '3T (sedated)' },
  exam: {
    resp: 'Intubated, mechanically ventilated. Bilateral coarse crackles. Peak inspiratory pressure 36 cmH2O (HIGH — barotrauma risk).',
    cv: 'Tachycardia, no S3, no JVD — non-cardiogenic confirmed by ECHO'
  },
  labs: {
    'ABG (on current settings — TV 500mL, PEEP 8, FiO2 0.8)': 'pH 7.32, PaO2 113, PaCO2 46, HCO3 21, P/F ratio 141 — MODERATE ARDS',
    'Respiratory mechanics': 'Plateau pressure 32 cmH2O (H — >30 = barotrauma risk) | Peak pressure 36 cmH2O | Driving pressure 24 cmH2O (H — target ≤15) | Static compliance 22 mL/cmH2O (L)',
    'CXR': 'Bilateral airspace opacities — diffuse, consistent with ARDS. No cardiomegaly.',
    'ECHO': 'EF 55%, no wall motion abnormalities, E/e prime normal — excludes cardiogenic edema'
  },
  orders: {
    correct: [
      { id: 'ltv-ards', name: 'Reduce tidal volume to 6 mL/kg IBW = 372 mL', rationale: 'ARDSNet trial (NEJM 2000) — 6 mL/kg IBW reduces mortality 22% vs 12 mL/kg. IBW for 52F at 5\'4\" = 56 kg → 6 × 56 = 336 mL. Use IBW, NOT actual body weight. This is the single most important intervention in ARDS.' },
      { id: 'plateau-ards', name: 'Target plateau pressure ≤30 cmH2O and driving pressure ≤15 cmH2O', rationale: 'Driving pressure (plateau − PEEP) >15 cmH2O independently predicts ARDS mortality. Reduce tidal volume until driving pressure ≤15.' },
      { id: 'peep-ards', name: 'Increase PEEP using ARDSNet PEEP/FiO2 table — target 10-14 for FiO2 0.8', rationale: 'Higher PEEP recruits collapsed alveoli and reduces FiO2 requirement. ARDSNet table guides titration. Avoid over-distension (plateau >30).' },
      { id: 'prone-ards', name: 'Prone positioning ≥16h/day — P/F <150 = indication', rationale: 'PROSEVA trial (NEJM 2013) — proning for P/F <150 reduces 28-day mortality from 32.8% to 16%. Mechanism: improves V/Q matching, recruits dorsal lung regions, reduces ventilator-induced lung injury. Requires prone team training.' },
      { id: 'conservative-fluids', name: 'Conservative fluid strategy after initial resuscitation — target even to negative balance', rationale: 'FACTT trial — conservative fluids (CVP target 4-6) reduces ventilator days in ARDS without increasing organ failure. Avoid fluid overload once resuscitation complete.' }
    ],
    incorrect: [
      { id: 'high-tv-ards', name: 'Maintain current tidal volume 500mL — "need to oxygenate"', rationale: 'DEADLY ERROR — 500mL in a patient with IBW 62kg = 8 mL/kg. This causes volutrauma, worsens ARDS mortality. The counterintuitive principle of ARDS: accept permissive hypercapnia and lower SpO2 (88-95% is acceptable) to achieve lung-protective ventilation.' },
      { id: 'ecmo-early', name: 'ECMO for ARDS with P/F 141', rationale: 'ECMO is salvage therapy for refractory ARDS (P/F <80 despite optimal conventional therapy including proning). P/F 141 has not exhausted conventional options.' },
      { id: 'steroids-high-ards', name: 'High-dose methylprednisolone 2 mg/kg/day', rationale: 'High-dose steroids are NOT standard of care in ARDS — evidence is mixed. Moderate-dose methylprednisolone (1 mg/kg/day) may be reasonable after day 14 in unresolving ARDS, but not routinely.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'ARDS Berlin definition: bilateral opacities + non-cardiogenic + onset within 1 week of insult + P/F <300 (mild), <200 (moderate), <100 (severe).',
      'Lung-protective ventilation is the cornerstone of ARDS management: 6 mL/kg IBW, plateau ≤30, driving pressure ≤15. The ARDSNet trial showed 22% reduction in absolute mortality.',
      'Prone positioning for P/F <150 for ≥16h/day reduces mortality by 50% (PROSEVA trial). It is underused. The mechanism is improved V/Q matching in dorsal lung regions that are better perfused in the prone position.',
      'Use IBW (not actual body weight) for tidal volume calculation. In obese patients, actual body weight significantly overestimates safe lung volume.',
      'Accept permissive hypercapnia (PaCO2 up to 60 mmHg, pH ≥7.20) and permissive hypoxemia (SpO2 88-95%) to maintain lung-protective volumes.'
    ],
    boardPearls: [
      'Driving pressure = plateau pressure − PEEP. Best predictor of ARDS mortality in retrospective ARDSNet analysis. Target ≤15 cmH2O.',
      'ECMO (VV-ECMO) for ARDS: reserve for P/F <80 despite optimal management including proning. CESAR trial and EOLIA trial data (mixed results).',
      'Neuromuscular blockade (cisatracurium) for 48h in early moderate-severe ARDS: ACURASYS trial showed benefit; ROSE trial did not replicate. Current guidelines: consider for severe ARDS (P/F <150) not controlled with sedation.',
      'Prone positioning complications: ETT dislodgement, pressure injuries, hemodynamic instability during turning. Requires a trained prone team.'
    ]
  },
  references: [
    { id: 'ARDSNet2000', title: 'Ventilation with lower tidal volumes for ARDS', authors: 'ARDSNet', journal: 'NEJM', year: 2000, url: 'https://www.nejm.org/doi/full/10.1056/NEJM200005043421801', openAccess: false },
    { id: 'PROSEVA2013', title: 'Prone positioning in severe ARDS', authors: 'Guerin C et al.', journal: 'NEJM', year: 2013, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1214103', openAccess: false },
    { id: 'StatPearls-ARDS', title: 'Acute Respiratory Distress Syndrome', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK436002/', openAccess: true }
  ]
};
