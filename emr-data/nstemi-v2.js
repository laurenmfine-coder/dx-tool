/* CASE: nstemi-v2 — Giovanna DeLuca — NSTEMI: High-Risk Features + Renal Failure Anticoag Dilemma */
window.CASES = window.CASES || {};
window.CASES['nstemi-v2'] = {
  id: 'nstemi-v2', name: 'Giovanna DeLuca', age: '63F', dob: '1963-03-06',
  mrn: 'MRN-370242', setting: 'Cardiology — Day 2 after cath',
  chiefComplaint: 'Post-cath NSTEMI day 2 — now with AKI, bleeding from femoral access site, anticoagulation decision',
  diagnosis: 'NSTEMI Post-PCI: Contrast Nephropathy + Femoral Access Site Hematoma — Anticoagulation Dilemma',
  category: 'cardiovascular', acuity: 2,
  continuityNote: 'Prior encounter: nstemi-v1 — Giovanna DeLuca, 63F with T2DM, HTN, CKD stage 3 (baseline Cr 1.6). NSTEMI with TIMI risk 5, underwent coronary angiography day 1: severe 3-vessel disease, LAD 80% stenosis stented with DES. Baseline Cr 1.6, pre-procedure hydration given.',
  presentation: {
    hpi: 'Day 2 post-PCI for NSTEMI. Cr now 3.2 (up from 1.6 baseline — contrast nephropathy). Urine output declining. Also: expanding right femoral hematoma at access site, Hgb dropped from 11.2 to 9.4, BP dropping. She is currently on dual antiplatelet (aspirin + ticagrelor) and needs anticoagulation decision: the hematoma is expanding but she has a drug-eluting stent placed yesterday.',
    pmh: ['T2DM', 'HTN', 'CKD stage 3 (baseline Cr 1.6)', 'Day 2 post-PCI — DES to LAD'],
    meds: ['Aspirin 81mg', 'Ticagrelor 90mg BID — started yesterday post-stent', 'Atorvastatin 80mg', 'Metoprolol 25mg BID', 'Lisinopril — HELD (AKI)']
  },
  vitals: { BP: '98/62', HR: '108', RR: '20', Temp: '37.1°C', SpO2: '97%' },
  labs: {
    'BMP': 'Cr 3.2 (H — up from 1.6; contrast nephropathy), K 5.4 (H), BUN 58, Na 136',
    'CBC': 'Hgb 9.4 (down from 11.2 — bleeding into hematoma), Plt 188',
    'Coags': 'INR 1.1, PTT 28',
    'Vascular ultrasound (right femoral)': 'Expanding hematoma 4×3cm at right femoral access site. No pseudoaneurysm. No AV fistula. No active arterial extravasation on Doppler.',
    'Troponin': 'Day 2 trending down — 2.8 → 1.4 ng/mL (appropriate downtrend post-PCI)'
  },
  orders: {
    correct: [
      { id: 'hold-antithrombotics', name: 'Manual compression + hold anticoagulation — DO NOT hold DAPT', rationale: 'Expanding femoral hematoma without active arterial hemorrhage: manual compression is first-line. Hold any systemic anticoagulation (heparin if running). CRITICAL: do NOT stop ticagrelor or aspirin — DES thrombosis within 24h of stent placement is catastrophic and often fatal. Stent thrombosis risk >> hematoma risk in first 30 days.' },
      { id: 'vascular-consult', name: 'Vascular surgery consult for femoral hematoma management', rationale: 'Expanding hematoma with hemoglobin drop requires vascular surgery. If hematoma continues expanding, pseudoaneurysm develops, or neurovascular compromise occurs → surgical evacuation or percutaneous thrombin injection.' },
      { id: 'nephrology-aki', name: 'Nephrology consult — Cr 3.2 with K 5.4, rising trend', rationale: 'Contrast-induced nephropathy (CIN) peaks days 2-3 post-contrast. Cr 3.2 from 1.6 = doubling = Stage 2 AKI. K 5.4 approaching treatment threshold. Hold nephrotoxins (NSAIDs, ACEi/ARB). Monitor fluid balance. Dialysis rarely needed but rising K requires close monitoring.' },
      { id: 'hold-acei', name: 'Continue holding lisinopril — AKI present', rationale: 'ACEi/ARB impair renal autoregulation in AKI. Hold until Cr returns to near-baseline. Restart when Cr stable ≤2× baseline.' },
      { id: 'transfuse-threshold', name: 'Transfusion if Hgb <8 — conservative threshold post-ACS', rationale: 'Post-ACS transfusion threshold: Hgb <8 (some guidelines <7 if hemodynamically stable). Current Hgb 9.4 — monitor. If drops below 8 with continued bleeding or hemodynamic compromise: 1 unit pRBC and reassess.' }
    ],
    incorrect: [
      { id: 'stop-ticagrelor', name: 'Hold ticagrelor — bleeding risk too high', rationale: 'NEVER stop ticagrelor or aspirin within 30 days of DES placement without cardiology co-decision. Stent thrombosis occurs in 1-3% of patients when DAPT is stopped in first 30 days — mortality >50%. A femoral hematoma is manageable; stent thrombosis is a cardiac arrest.' },
      { id: 'metoformin-aki', name: 'Continue metformin — glucose is elevated', rationale: 'Metformin is CONTRAINDICATED in AKI (Cr >1.5 in women generally) due to lactic acidosis risk. It should have been held before contrast administration and must remain held until renal function recovers to baseline.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Contrast-induced nephropathy (CIN): Cr rise ≥0.5 mg/dL or ≥25% within 48-72h of contrast. Prevention: pre-hydration with NS (1 mL/kg/hr × 12h). N-acetylcysteine evidence is mixed. Hold nephrotoxins.',
      'DAPT after DES: aspirin + P2Y12 inhibitor for minimum 1 year (ACS patients). Within 30 days, stent thrombosis risk from stopping DAPT far exceeds most bleeding risks. Always get cardiology input before stopping.',
      'Femoral access site complications: hematoma (most common), pseudoaneurysm (pulsatile mass, audible bruit → ultrasound), AV fistula (continuous bruit), retroperitoneal hematoma (back pain + hypotension, flank ecchymosis later).',
      'Post-ACS medication adjustments in AKI: hold ACEi/ARB, hold metformin, reduce LMWH dose (renally cleared), avoid NSAIDs. Statin, aspirin, P2Y12: continue.'
    ],
    boardPearls: [
      'GRACE score >140 in NSTEMI = high risk = early invasive strategy (cath within 24h). TIMI risk ≥5 = similar indication.',
      'Prasugrel contraindications: prior stroke/TIA (absolute), age >75, weight <60 kg (relative). Ticagrelor: avoid if CrCl <15, high bleeding risk.',
      'Post-MI HFrEF (EF <40%): ICD evaluation at 40 days if EF persists <35% despite GDMT.',
      'Retroperitoneal hematoma: most dangerous access site complication. Presents as unexplained hypotension ± back/flank pain after femoral access. CT abdomen without contrast for diagnosis.'
    ]
  },
  references: [{ id: 'StatPearls-NSTEMI', title: 'Non-ST-Elevation Myocardial Infarction', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK557980/', openAccess: true }]
};
