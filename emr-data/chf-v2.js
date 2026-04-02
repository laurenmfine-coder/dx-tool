/* CASE: chf-v2 — William Turner — CHF: Cardiorenal Syndrome + Diuretic Resistance */
window.CASES = window.CASES || {};
window.CASES['chf-v2'] = {
  id: 'chf-v2', name: 'William Turner', age: '68M', dob: '1958-06-15',
  mrn: 'MRN-763589', setting: 'Cardiology Floor — Day 3',
  chiefComplaint: 'Day 3 heart failure admission — diuresis failing, Cr rising, BNP not improving',
  diagnosis: 'Decompensated HFrEF with Cardiorenal Syndrome Type 1 — Diuretic Resistance',
  category: 'cardiovascular', acuity: 2,
  continuityNote: 'Prior encounter: chf-v1 — William Turner, 68M with HFrEF (EF 25%), HTN, CKD stage 3 (Cr baseline 1.8). Admitted for acute decompensation with orthopnea, 3+ pitting edema, BNP 4,200. Started IV furosemide 80mg BID (2× his home dose of 40mg daily). Day 2: minimal urine output, Cr rising.',
  presentation: {
    hpi: 'Day 3 of heart failure hospitalization. Despite IV furosemide 80mg BID for 48h, urine output has been only 800mL/24h (target ≥3L/day for adequate decongestion). Weight unchanged at +18 lbs from dry weight. BNP still 3,800. Cr has risen from 1.8 to 2.6 — cardiorenal syndrome. His legs are still massively edematous. He is clearly not responding to current furosemide regimen.',
    pmh: ['HFrEF — EF 25%', 'HTN', 'CKD stage 3 (baseline Cr 1.8)', 'T2DM', 'Prior ICD placement (EF <35%)'],
    meds: ['Furosemide 80mg IV BID (failing)', 'Carvedilol 6.25mg BID', 'Sacubitril-valsartan 24/26mg BID (home — held for hypotension)', 'Spironolactone 25mg daily', 'Empagliflozin 10mg (held — AKI)']
  },
  vitals: { BP: '88/58', HR: '94', RR: '20', Temp: '37.0°C', SpO2: '92% RA → 96% 2L NC' },
  labs: {
    'BMP': 'Na 132 (dilutional), K 5.1, Cr 2.6 (H — up from 1.8 baseline), BUN 58, Bicarb 19',
    'BNP': '3,800 pg/mL (H — not improving despite 48h IV diuresis)',
    'CBC': 'Hgb 10.8 (anemia of CKD/chronic disease)',
    'Point-of-care echo': 'EF 20-25% (reduced from prior 30% — worsening). IVC plethoric (>2.1cm, <50% collapse with inspiration) = high RA pressure, NOT volume depleted. B-lines on lung US: bilateral, diffuse = pulmonary edema persisting.'
  },
  orders: {
    correct: [
      { id: 'sequential-neph', name: 'Add metolazone 5mg PO 30 min before IV furosemide — sequential nephron blockade', rationale: 'Diuretic resistance: furosemide blocks the loop of Henle, but compensatory sodium reabsorption increases in the distal tubule. Adding a thiazide-type diuretic (metolazone) blocks the distal tubule synergistically = sequential nephron blockade. Produces significant diuresis even in diuretic-resistant HF. Monitor K+ closely — profound hypokalemia risk.' },
      { id: 'drip-furosemide', name: 'Switch to continuous furosemide infusion 10-20 mg/hr instead of intermittent boluses', rationale: 'Continuous furosemide infusion maintains drug levels above the tubular secretion threshold throughout the day, avoiding the anti-natriuretic rebound between bolus doses. More effective and predictable than intermittent boluses in resistant HF.' },
      { id: 'cardiology-hf', name: 'Advanced heart failure consult — consider ultrafiltration', rationale: 'Ultrafiltration (aquapheresis) directly removes fluid without hormonal feedback. Indicated when IV diuretics fail. Also: consider inotropic support (dobutamine, milrinone) if low output driving cardiorenal syndrome.' },
      { id: 'uop-goal', name: 'Titrate diuretics to urine output goal 3-5 mL/kg/hr — reassess q6h', rationale: 'Adequate decongestion target: net negative 1-2L/day, weight loss 0.5-1 kg/day. If UO < 0.5 mL/kg/hr after 2h of IV diuretic: escalate dose.' },
      { id: 'accept-cr-rise', name: 'Accept modest Cr rise (up to 0.5 above baseline) — congestion worse than azotemia', rationale: 'Cardiorenal syndrome in HF: rising Cr during diuresis ("hemofiltration creatinine") is expected and acceptable. Stopping diuresis to protect kidneys leaves the patient congested and results in worse long-term outcomes. Congestion, not decongestion, damages kidneys in HF.' }
    ],
    incorrect: [
      { id: 'stop-diuresis', name: 'Hold IV furosemide — Cr rising, protect the kidneys', rationale: 'WRONG — stopping diuresis in a congested patient causes worse outcomes. Cardiorenal syndrome in decompensated HF: the kidneys are damaged by venous congestion, not by diuresis. Continue aggressive decongestion; accept modest Cr rise during treatment.' },
      { id: 'fluid-bolus-hf', name: 'Give 500mL NS bolus — BP 88/58, may be volume depleted', rationale: 'IVC plethoric on echo (high RA pressure) and bilateral B-lines = NOT volume depleted. This patient is wet. IV fluids would worsen pulmonary edema. Low BP in decompensated HFrEF = low output state, not hypovolemia. Inotropic support, not fluids.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Diuretic resistance in HF: options are (1) sequential nephron blockade (add metolazone 30 min before loop diuretic), (2) continuous infusion, (3) high-dose IV boluses, (4) ultrafiltration. Address from least to most invasive.',
      'Cardiorenal syndrome type 1: acute HF → AKI. The Cr rise during decongestion is expected — do NOT stop diuresis to "protect kidneys." Congestion is more nephrotoxic than decongestion.',
      'IVC assessment on bedside echo: plethoric IVC (>2.1cm, collapse <50%) = high RA pressure = patient is still wet regardless of BP. Never give fluids based on BP alone without assessing volume status.',
      'GDMT in HFrEF: sacubitril-valsartan + SGLT2i + ACEi/ARB + beta-blocker + MRA (spironolactone) = the "fantastic four plus one." Each reduces mortality independently. Do not hold long-term.'
    ],
    boardPearls: [
      'DOSE trial: high-dose furosemide (2.5× oral dose IV) more effective than low-dose; continuous infusion vs bolus: no significant difference in DOSE trial (though many centers still prefer continuous for consistency).',
      'Metolazone + furosemide: profound diuresis and hypokalemia. Check K+ 4-6h after first metolazone dose. Supplement K+ proactively.',
      'SGLT2i in HFrEF: empagliflozin and dapagliflozin reduce HF hospitalizations by 25% (EMPEROR-Reduced, DAPA-HF). Mechanism includes mild diuresis + metabolic effects. Hold in AKI but restart when stable.',
      'Ultrafiltration (CARRESS-HF trial): not superior to stepped diuretic therapy for primary endpoint in cardiorenal syndrome — use when diuretics truly fail, not routinely.'
    ]
  },
  references: [{ id: 'StatPearls-HF', title: 'Heart Failure', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430873/', openAccess: true }]
};
