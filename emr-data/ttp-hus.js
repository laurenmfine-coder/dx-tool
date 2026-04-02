window.CASES = window.CASES || {};
window.CASES['ttp-hus'] = {
  id: 'ttp-hus', name: 'Keisha Brown', age: '34F', dob: '1991-08-07',
  mrn: 'RDX-2026-44112', setting: 'ED → Hematology / MICU',
  chiefComplaint: 'Fatigue, confusion, purpura — Hgb 6.8, Plt 14,000, Cr 3.2, schistocytes on smear',
  diagnosis: 'Thrombotic Thrombocytopenic Purpura (TTP) — ADAMTS13 Deficiency',
  category: 'hematologic', acuity: 1,
  presentation: {
    hpi: '34F, 3 days of fatigue, headache, and confusion. Develops petechiae and purpura. Labs: Hgb 6.8 (L — hemolytic), Plt 14,000, Cr 3.2, LDH 2,800 (H), haptoglobin <0.1 (L — hemolysis). Peripheral smear: schistocytes (fragmented RBCs) — MICROANGIOPATHIC HEMOLYTIC ANEMIA (MAHA). The TTP pentad: MAHA + thrombocytopenia + renal failure + fever + neurological symptoms. INR normal, PTT normal — NOT DIC.',
    pmh: ['No prior episodes'], meds: ['OCP'], allergies: ['NKDA']
  },
  vitals: { BP: '148/94', HR: '112', RR: '20', Temp: '38.4°C', SpO2: '97%', GCS: '13' },
  labs: {
    'CBC': 'Hgb 6.8 (H — severe anemia) | Plt 14,000 | WBC 11.4',
    'Smear': 'SCHISTOCYTES (fragmented RBCs — from shearing through fibrin strands in microthrombi) — MAHA CONFIRMED',
    'LDH': '2,800 (H — marker of hemolysis/cell lysis)',
    'Haptoglobin': '<0.1 g/L (L — consumed by free Hgb from hemolysis)',
    'Coagulation': 'PT 12, PTT 29, INR 1.0, Fibrinogen 380 — ALL NORMAL (distinguishes TTP from DIC)',
    'Cr': '3.2 (H — renal microthrombi)',
    'ADAMTS13 activity': '<5% (CONFIRMS TTP — normal >67%) | ADAMTS13 inhibitor: positive (autoimmune acquired TTP)'
  },
  orders: {
    correct: [
      { id: 'pex-ttp', name: 'IMMEDIATE plasma exchange (PEX/TPE) — start within 4-8 hours', rationale: 'Plasma exchange is LIFE-SAVING in TTP. It removes anti-ADAMTS13 antibodies AND replaces functional ADAMTS13 enzyme. Mortality without PEX: >90%. With PEX: <10-20%. Do NOT wait for ADAMTS13 results — diagnose clinically and start PEX immediately. Every hour of delay increases mortality.' },
      { id: 'steroids-ttp', name: 'Methylprednisolone 1mg/kg/day — adjunct immunosuppression', rationale: 'Steroids suppress anti-ADAMTS13 antibody production. Use adjunctively with plasma exchange. Not sufficient alone.' },
      { id: 'rituximab-ttp', name: 'Rituximab 375mg/m² weekly × 4 — for refractory or relapsing TTP', rationale: 'Rituximab (anti-CD20) depletes B-cells that produce anti-ADAMTS13 antibodies. Used for refractory (no response to PEX + steroids after 5-7 days) or relapsing TTP. Reduces relapse rate from 40% to 10-15%.' },
      { id: 'no-platelets-ttp', name: 'Do NOT transfuse platelets', rationale: 'Platelet transfusion in TTP FUELS the disease — platelets aggregate on ULVWF multimers, worsening microvascular thrombosis. Platelet transfusion has been associated with acute deterioration and death in TTP. Only absolute exception: life-threatening bleeding.' }
    ],
    incorrect: [
      { id: 'ivig-ttp', name: 'IVIG — effective for thrombocytopenia', rationale: 'IVIG is used for ITP (platelet destruction) but NOT for TTP. It does not address the underlying pathophysiology (ADAMTS13 deficiency + UltraLarge VWF). PEX is the only life-saving treatment.' },
      { id: 'wait-adamts-ttp', name: 'Wait for ADAMTS13 result before starting plasma exchange', rationale: 'DEADLY DELAY. ADAMTS13 results take days. TTP is a clinical diagnosis. The PLASMIC score can estimate pre-test probability. If clinical TTP (MAHA + thrombocytopenia + no alternative explanation): start PEX immediately. Every hour matters.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'TTP diagnosis: MAHA (schistocytes + high LDH + low haptoglobin) + thrombocytopenia + NORMAL coagulation studies (distinguishes from DIC). ADAMTS13 <10% confirms. The pentad (MAHA + thrombocytopenia + renal failure + fever + neuro) is classically taught but rarely all present — treat if MAHA + thrombocytopenia without another explanation.',
      'TTP is a medical emergency — start plasma exchange within hours of diagnosis. Do NOT wait for ADAMTS13 results. Mortality without treatment: >90%.',
      'Never give platelets in TTP (except life-threatening hemorrhage) — they worsen microvascular thrombosis.',
      'HUS (hemolytic uremic syndrome): same MAHA + thrombocytopenia but predominantly renal failure, triggered by Shiga toxin (STEC O157:H7 — bloody diarrhea in children). ADAMTS13 is normal. Treatment: supportive (NOT plasma exchange). Do NOT give antibiotics for STEC-HUS (increases Shiga toxin release).'
    ],
    boardPearls: [
      'PLASMIC score: predicts ADAMTS13 <10% (TTP). Platelet count, hemoLysis (LDH >2× ULN), No Active cancer, No Stem cell transplant, MCV, INR, Creatinine. Score ≥6 = high probability → start PEX.',
      'Caplacizumab (anti-VWF nanobody): FDA-approved adjunct to PEX for TTP. Prevents platelet-VWF interaction → faster platelet count recovery, fewer relapses. Does not replace PEX.',
      'Complement-mediated HUS (aHUS): non-Shiga toxin HUS — complement dysregulation. Eculizumab (complement inhibitor C5) is the treatment.',
      'HELLP syndrome: pregnancy-related microangiopathy — hemolysis + elevated liver enzymes + low platelets. Treatment is delivery. Distinguish from TTP by timing (usually >20 weeks), AST/ALT elevation, and liver involvement.'
    ]
  },
  references: [{ id: 'StatPearls-TTP', title: 'Thrombotic Thrombocytopenic Purpura', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470587/', openAccess: true }]
};
