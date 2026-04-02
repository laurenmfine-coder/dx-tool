/* CASE: nstemi-v2 — Continuity from nstemi-v1 — NSTEMI complicated by Cardiogenic Shock */
window.CASES = window.CASES || {};
window.CASES['nstemi-v2'] = {
  id: 'nstemi-v2', name: 'Robert Chen', age: '68M', dob: '1958-03-12',
  mrn: 'RDX-2026-88241', setting: 'CCU',
  chiefComplaint: 'Post-cath NSTEMI — now hypotensive, cold extremities, oliguria — cardiogenic shock',
  diagnosis: 'Cardiogenic Shock complicating NSTEMI — Multivessel CAD, EF 20%',
  category: 'cardiovascular', acuity: 1,
  continuityNote: 'nstemi-v1: Robert Chen, 68M, 6h of chest pressure, troponin rising, NSTEMI. Taken to cath lab: 3-vessel CAD (LAD 90%, LCx 80%, RCA 70%). Staged PCI to LAD performed. Post-procedure EF 20% (extensive anterior + inferior ischemia). Now 4h post-procedure: new hypotension.',
  presentation: {
    hpi: '4h post-LAD PCI for NSTEMI. BP dropped to 76/50 from 118/72. HR 118. Cold, mottled extremities. Urine output 10mL/hr last 2h. Lactate 4.2. ECHO: EF 20%, severe global hypokinesis. No pericardial effusion. No mechanical complication. This is pump failure — cardiogenic shock from low EF in multivessel CAD.',
    pmh: ['HTN', 'T2DM', 'Hyperlipidemia', 'NSTEMI day 1 (LAD PCI performed)'],
    meds: ['Aspirin 325mg', 'Ticagrelor 90mg BID', 'Atorvastatin 80mg', 'Heparin drip']
  },
  vitals: { BP: '76/50', HR: '118', RR: '24', Temp: '36.8°C', SpO2: '92%', GCS: '14' },
  labs: {
    'Hemodynamics (PA catheter/Impella)': 'CO 2.1 L/min (H target >4.0) | CI 1.1 L/min/m² (cardiogenic: <2.2) | PCWP 28 mmHg (H — fluid overloaded) | SVR 2100 dyn·s/cm⁵ (H — vasoconstricted)',
    'Lactate': '4.2 mmol/L (H — tissue hypoperfusion)',
    'Troponin I': '82 ng/mL (H — extensive myocardial injury)',
    'BMP': 'Cr 2.1 (H, baseline 1.1), K 5.2 (H — AKI + poor perfusion)',
    'ECHO': 'EF 20%. Severe global hypokinesis. No effusion. No mechanical complication (VSD/PMR excluded).'
  },
  orders: {
    correct: [
      { id: 'impella-cs', name: 'Impella CP or IABP — mechanical circulatory support', rationale: 'Cardiogenic shock (CI <2.2, PCWP >18): Impella CP provides up to 3.5 L/min support, unloads LV, increases coronary perfusion pressure. IABP is simpler but provides less hemodynamic support. SHOCK-II trial: IABP did not reduce 30-day mortality vs medical therapy alone. Impella preferred for profound shock (CI <1.5).' },
      { id: 'norepi-cs', name: 'Norepinephrine 0.1-0.3 mcg/kg/min — vasopressor for MAP ≥65', rationale: 'First-line vasopressor in cardiogenic shock. Maintains MAP while awaiting MCS. Avoid dopamine (more arrhythmias — SOAP II trial). Add dobutamine 2-5 mcg/kg/min for inotropic support if CO remains low.' },
      { id: 'complete-revasc', name: 'Heart team discussion — complete revascularization (LCx + RCA) timing', rationale: 'CULPRIT-SHOCK trial: immediate multivessel PCI increases 30-day mortality vs culprit-only. Staged revascularization (LCx + RCA in 3-5 days after stabilization) is preferred. DO NOT stent all 3 vessels in the same sitting during cardiogenic shock.' },
      { id: 'swan-cs', name: 'PA catheter for hemodynamic monitoring', rationale: 'Cardiogenic shock requires invasive hemodynamic monitoring to guide therapy. PA catheter distinguishes true cardiogenic shock (low CO, high PCWP) from RV failure (low CO, low PCWP, high CVP) which requires different management.' }
    ],
    incorrect: [
      { id: 'multivessel-now', name: 'Complete multivessel PCI now — all 3 vessels in one session', rationale: 'CULPRIT-SHOCK trial definitively showed immediate multivessel PCI INCREASES 30-day mortality (43% vs 45%, non-significant) and increases AKI requiring dialysis. Culprit-only first, then staged revascularization after stabilization.' },
      { id: 'fluids-cs', name: 'Give 1L NS bolus — hypotensive, may be volume depleted', rationale: 'PCWP 28 = volume overloaded. Giving fluids in cardiogenic shock with high filling pressures worsens pulmonary edema without improving cardiac output. This is the opposite of distributive shock management.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Cardiogenic shock hemodynamics: CO <4 L/min, CI <2.2 L/min/m², PCWP >18 mmHg, SVR elevated. Distinguishes from distributive shock (low SVR) and RV failure (low CVP, high CVP).',
      'CULPRIT-SHOCK trial: in cardiogenic shock, stent the culprit lesion only. Complete immediate multivessel revascularization increases mortality. Stage the non-culprit vessels after stabilization.',
      'Vasopressor of choice in cardiogenic shock: norepinephrine (SOAP II trial: less arrhythmia than dopamine). Add dobutamine for inotropic support. Avoid pure vasoconstrictors without inotropic support.'
    ],
    boardPearls: [
      'Killip classification post-MI: I (no HF) → II (rales + S3) → III (pulmonary edema) → IV (cardiogenic shock). Killip IV = 50-80% mortality without aggressive intervention.',
      'Impella vs IABP: Impella provides more hemodynamic support but higher complication rate. IABP remains reasonable for less severe cardiogenic shock. ECMO for refractory shock.',
      'RV infarction shock: low CO + low PCWP + high CVP (JVD, clear lungs). Fluids are therapeutic. Vasopressors if fluids fail. Avoid diuretics and nitrates.'
    ]
  },
  references: [{ id: 'StatPearls-CS', title: 'Cardiogenic Shock', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482255/', openAccess: true }]
};
