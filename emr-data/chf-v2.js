/* CASE: chf-v2 — Continuity from chf-v1 — HFpEF + Hypertensive Emergency */
window.CASES = window.CASES || {};
window.CASES['chf-v2'] = {
  id: 'chf-v2', name: 'Dorothy Williams', age: '74F', dob: '1952-06-19',
  mrn: 'RDX-2026-77412', setting: 'CCU / Medicine',
  chiefComplaint: 'Known HFpEF — admitted for HTN emergency + flash pulmonary edema, now improving but diuresis decision needed',
  diagnosis: 'HFpEF with Hypertensive Pulmonary Edema — Decongestion vs Overdiuresis Tension',
  category: 'cardiovascular', acuity: 2,
  continuityNote: 'chf-v1: Dorothy Williams, 74F with HFpEF (EF 60%), HTN, afib, CKD stage 3. Presented with acute dyspnea, BP 198/116, bilateral pulmonary edema on CXR. Treated with IV furosemide 80mg and nitroglycerin drip. Now 24h later: BP 142/88, SpO2 94% RA, weight down 3.2 kg from admission. Cr 1.8 (up from baseline 1.4).',
  presentation: {
    hpi: 'Day 2 admission. Flash pulmonary edema from hypertensive HFpEF improving. BP now controlled. However Cr rose from 1.4 to 1.8 with aggressive diuresis. Still has 2+ pitting edema bilaterally, JVD, 8 kg above dry weight. The question: continue aggressive diuresis (risk worsening Cr) or hold (risk re-accumulation)?',
    pmh: ['HFpEF (EF 60%)', 'HTN', 'Afib on apixaban', 'CKD stage 3 (baseline Cr 1.4)'],
    meds: ['Furosemide 80mg IV (admit dose)', 'Metoprolol succinate', 'Apixaban', 'Amlodipine']
  },
  vitals: { BP: '142/88', HR: '72 (rate-controlled afib)', RR: '18', Temp: '37.0°C', SpO2: '94% RA' },
  labs: {
    'BMP (day 2)': 'Cr 1.8 (H — up from baseline 1.4, up from admission 1.6) | BUN 44 | Na 138 | K 3.6 (L — diuresis)',
    'BNP': '820 pg/mL (H, down from 2,200 on admission — improving but still elevated)',
    'Daily weights': 'Admission: 88 kg | Day 1: 86.2 kg (−1.8 kg) | Day 2: 84.8 kg (−3.2 kg total) | Dry weight estimate: 80 kg',
    'CXR (day 2)': 'Improving pulmonary edema. Still some vascular congestion. No effusions.',
    'Urine Na (spot)': '62 mEq/L (H — suggests diuretic response is adequate, not prerenal)'
  },
  orders: {
    correct: [
      { id: 'continue-diuresis', name: 'Continue diuresis — target −0.5 to −1 kg/day until dry weight', rationale: 'Cr rise of 0.3-0.4 mg/dL with diuresis in HFpEF is expected and acceptable (cardiorenal syndrome type 1). DOSE trial: higher-dose diuretics produced more decongestion without worse renal outcomes at 60 days. The greater danger is undertreating congestion — residual congestion predicts 30-day readmission and mortality.' },
      { id: 'k-repletion', name: 'Potassium chloride 40 mEq PO — K 3.6 with ongoing diuresis', rationale: 'Furosemide causes kaloiuresis. Target K >4.0 in HF (hypokalemia promotes arrhythmias in the setting of digoxin or afib). Replace liberally.' },
      { id: 'oral-transition', name: 'Transition to oral furosemide at 2× pre-admission dose', rationale: 'TRANSFORM-HF trial principle: oral furosemide at discharge should be higher than pre-admission dose. For patients on 40mg PO daily pre-admit, discharge on 80mg PO daily. Most HF readmissions are from inadequate outpatient diuresis.' },
      { id: 'gdmt-hfpef', name: 'Add SGLT2 inhibitor (empagliflozin or dapagliflozin) before discharge', rationale: 'EMPEROR-Preserved and DELIVER trials: SGLT2 inhibitors reduce HF hospitalization by 21-25% in HFpEF regardless of diabetes status. Now guideline-recommended for all HFpEF. Add before discharge.' }
    ],
    incorrect: [
      { id: 'hold-diuresis-cr', name: 'Hold furosemide — Cr rising, risk of AKI', rationale: 'A Cr rise of 0.3-0.4 with diuresis in congested HF is hemofiltration, not true AKI. Urine Na 62 confirms diuretic response (not prerenal). Stopping diuresis in a patient still 8 kg above dry weight risks re-accumulation and readmission. The DOSE trial showed aggressive diuresis was safe.' },
      { id: 'no-sglt2-hfpef', name: 'SGLT2i only for HFrEF — this patient has HFpEF', rationale: 'OUTDATED — EMPEROR-Preserved (empagliflozin) and DELIVER (dapagliflozin) trials confirmed SGLT2i benefit in HFpEF. FDA approved both agents for HFpEF. This is now standard of care.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'HFpEF management: decongest aggressively — residual congestion is the primary driver of readmission. Cr rise of 0.3-0.5 during diuresis is acceptable (hemofiltration, not AKI) if urine Na is high.',
      'SGLT2 inhibitors (empagliflozin, dapagliflozin) reduce HF hospitalization in HFpEF by 21-25%. Now guideline-recommended for ALL HFpEF patients regardless of diabetes. Always add before discharge.',
      'Discharge furosemide dose should be HIGHER than pre-admission dose. TRANSFORM-HF: most readmissions are from inadequate outpatient diuresis. If they came in on 40mg, discharge on 80mg.',
      'Cardiorenal syndrome type 1: acute heart failure causes AKI. Diuresis usually improves both — decongestion reduces renal venous pressure. Do not let a mild Cr rise stop appropriate diuresis.'
    ],
    boardPearls: [
      'HFpEF vs HFrEF: HFpEF (EF ≥50%) — primary problem is diastolic dysfunction and volume sensitivity. Loop diuretics, SGLT2i, and blood pressure control. ACEi/ARB/beta-blockers not proven to reduce mortality in HFpEF.',
      'DOSE trial: high-dose furosemide (2.5× oral dose IV) vs low-dose — more symptom relief, no worse renal outcomes at 60 days. Go higher, not lower.',
      'Hyponatremia in HF: dilutional from ADH activation. Worsen with diuretics. Fluid restrict to <1.5L/day. Vaptan if severe and refractory.',
      'Signs of adequate decongestion: JVP <8 cm, no orthopnea, weight at dry weight, clear lungs. BNP trend is useful but should not replace clinical assessment.'
    ]
  },
  references: [{ id: 'StatPearls-HFpEF', title: 'Diastolic Heart Failure', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430914/', openAccess: true }]
};
