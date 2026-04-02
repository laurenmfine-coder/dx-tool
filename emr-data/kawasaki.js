window.CASES = window.CASES || {};
window.CASES['kawasaki'] = {
  id: 'kawasaki', name: 'Ethan Park', age: '3M', dob: '2022-10-08',
  mrn: 'RDX-2026-55119', setting: 'Pediatric ED → Pediatric Cardiology',
  chiefComplaint: 'Fever × 6 days + rash + red eyes + strawberry tongue in 3-year-old — incomplete Kawasaki?',
  diagnosis: 'Incomplete Kawasaki Disease — Echo Ordered, IVIG Initiated',
  category: 'pediatric', acuity: 2,
  presentation: {
    hpi: '3-year-old boy, 6 days of high fever (Tmax 39.8°C), bilateral non-purulent conjunctival injection, cracked red lips + strawberry tongue, erythematous polymorphous rash (trunk and perineum), and cervical lymphadenopathy (left, 1.8cm). No extremity changes yet (desquamation is a late finding). Total AHA criteria met: fever >5 days (required) + 4 of 5 criteria = CLASSIC Kawasaki. CRP 188, ESR 88, WBC 18,400, Plt 488 (reactive). Echo ordered stat.',
    pmh: ['No prior illness'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '98/62', HR: '124', RR: '24', Temp: '39.6°C', SpO2: '99%' },
  labs: {
    'Echo (STAT)': 'LAD coronary artery Z-score +2.6 (mild dilation — threshold for aneurysm is Z-score ≥2.5). RCA normal. LV function normal.',
    'CBC': 'WBC 18,400 (H) | Plt 488 (H — reactive thrombocytosis, typical after week 1)',
    'CRP': '188 mg/L (H) | ESR 88 mm/hr (H) | Albumin 2.8 (L — marker of inflammation)',
    'UA': 'Sterile pyuria (WBC without bacteria) — classic Kawasaki finding',
    'LFTs': 'Mildly elevated ALT 68 (H) — hepatic involvement common'
  },
  orders: {
    correct: [
      { id: 'ivig-kd', name: 'IVIG 2g/kg IV over 10-12 hours — single infusion, within first 10 days', rationale: 'IVIG 2g/kg single dose is the primary treatment for Kawasaki disease. Reduces coronary artery aneurysm risk from 25% to <5%. Must be given within 10 days of fever onset. Do not delay pending echo if clinical criteria met.' },
      { id: 'aspirin-kd', name: 'Aspirin 30-50 mg/kg/day divided q6h (anti-inflammatory dose) during febrile phase, then 3-5 mg/kg/day (antiplatelet) after afebrile', rationale: 'Aspirin is dual-phase: high-dose anti-inflammatory during fever, then low-dose antiplatelet until echo normal at 6-8 weeks. Aspirin alone does not prevent aneurysms — IVIG is required.' },
      { id: 'echo-kd', name: 'Echocardiogram STAT + repeat at 2 weeks and 6-8 weeks', rationale: 'Echo at diagnosis establishes baseline and detects early coronary artery changes. Repeat at 2 weeks (peak aneurysm development) and 6-8 weeks (determines need for long-term antiplatelet therapy).' }
    ],
    incorrect: [
      { id: 'antibiotics-kd', name: 'Empiric antibiotics — fever × 6 days, may be bacterial', rationale: 'Kawasaki disease is not infectious/bacterial. Antibiotics have no role and delay correct treatment. Time to IVIG is the critical intervention.' },
      { id: 'wait-criteria-kd', name: 'Wait until 5th criterion appears before treating — only 4 criteria present', rationale: 'Classic Kawasaki (fever ≥5 days + ≥4/5 criteria): treat immediately. Do not wait for all 5 criteria. Incomplete Kawasaki (fever ≥5 days + <4 criteria but lab/echo abnormalities): treat by AHA algorithm. Delay increases coronary aneurysm risk.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Kawasaki classic criteria: fever ≥5 days + ≥4 of 5 — (1) bilateral non-purulent conjunctival injection, (2) oral changes (strawberry tongue, cracked lips, pharyngeal erythema), (3) polymorphous rash, (4) extremity changes (edema/erythema of hands/feet, desquamation — late), (5) cervical LAD >1.5cm.',
      'IVIG 2g/kg single dose is the treatment — reduces coronary aneurysm risk from 25% to <5%. Must be given within day 10 of fever.',
      'Incomplete Kawasaki: fever + 2-3 criteria + lab/echo abnormalities → still treat. Especially in infants <6 months where clinical signs are subtle but aneurysm risk is highest.',
      'Echo at diagnosis, 2 weeks, 6-8 weeks. Z-score ≥2.5 = aneurysm. Giant aneurysm (Z-score >10 or diameter >8mm) = high risk of thrombosis → long-term anticoagulation.'
    ],
    boardPearls: [
      'IVIG resistance (persistent/recurrent fever 36h after IVIG): second IVIG dose OR infliximab (anti-TNF) OR corticosteroids (RAISE trial: steroids reduce IVIG resistance in predicted high-risk patients).',
      'Steroids in primary KD: not routine first-line. Consider for IVIG-resistant cases or high-risk score (Egami, Kobayashi, Sano scores predict IVIG resistance in Japanese cohorts).',
      'Aspirin in Reye syndrome: aspirin in pediatric viral illness causes Reye syndrome. Exception: Kawasaki disease — aspirin is required. Withhold aspirin if varicella or influenza is active.',
      'Long-term management: giant coronary aneurysms require lifetime anticoagulation (warfarin or LMWH). Adults with history of KD may have premature CAD — cardiac surveillance warranted.'
    ]
  },
  references: [{ id: 'StatPearls-KD', title: 'Kawasaki Disease', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK537163/', openAccess: true }]
};
