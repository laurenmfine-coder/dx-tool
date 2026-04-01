/* emr-data/tumor-lysis-syndrome.js — TLS: Prevention and Management */
window.CASES = window.CASES || {};
window.CASES['tumor-lysis-syndrome'] = {
  id: 'tumor-lysis-syndrome', name: 'Amara Johnson', age: '24F', dob: '2001-10-31',
  mrn: 'RDX-2026-38822', setting: 'Oncology / ICU', category: 'oncologic', acuity: 1,
  chiefComplaint: 'Day 2 of chemotherapy for Burkitt lymphoma — AKI, hyperkalemia, hyperuricemia, hypocalcemia',
  diagnosis: 'Tumor Lysis Syndrome (Cairo-Bishop Laboratory Criteria + Clinical Criteria)',
  presentation: {
    hpi: '24F with newly diagnosed Burkitt lymphoma (high-grade B-cell, bulky disease, LDH 4× normal — high TLS risk). Started R-CODOX-M chemotherapy yesterday. Now day 2: oliguria, ECG changes (peaked T waves), labs showing Cairo-Bishop lab criteria met × 3 of 4 metabolites.',
    pmh: ['Newly diagnosed Burkitt lymphoma — bulky disease, LDH 4× ULN'], meds: ['R-CODOX-M chemotherapy initiated yesterday', 'Allopurinol started pre-chemo'], allergies: ['NKDA']
  },
  vitals: { BP: '98/62', HR: '108', RR: '20', Temp: '37.8°C', SpO2: '97%' },
  labs: {
    'CAIRO-BISHOP LAB CRITERIA (≥2 of 4 metabolites abnormal = lab TLS)': '',
    'Potassium': '6.4 mEq/L (H — >6.0 = TLS criterion) ← DANGEROUS',
    'Phosphorus': '8.2 mg/dL (H — >4.5 = TLS criterion)',
    'Uric acid': '14.8 mg/dL (H — >8.0 = TLS criterion)',
    'Calcium (corrected)': '6.8 mg/dL (L — <7.0 = TLS criterion) ← DANGEROUS',
    'Creatinine': '3.4 (H — up from baseline 0.8) — AKI = CLINICAL TLS (lab TLS + organ damage)',
    'ECG': 'Peaked T waves V2-V5 — hyperkalemia pattern'
  },
  orders: {
    correct: [
      { id: 'rasburicase-tls', name: 'Rasburicase 0.2 mg/kg IV × 1 dose — uric acid emergency', rationale: 'Rasburicase converts uric acid to allantoin (more soluble). Lowers uric acid within hours. CONTRAINDICATED in G6PD deficiency (causes hemolytic anemia — check G6PD first or use empirically if emergency and no time to check). Superior to allopurinol for established TLS. Allopurinol only prevents new uric acid formation — rasburicase breaks down existing stores.' },
      { id: 'hyperkal-tls', name: 'Hyperkalemia protocol: calcium gluconate → insulin/D50 → kayexalate? NO → dialysis', rationale: 'K+ 6.4 with ECG changes = immediate treatment. Calcium gluconate stabilizes membrane (does not lower K+). Insulin + dextrose redistribute K+. For TLS-associated hyperkalemia, dialysis is often needed — other interventions are temporizing. Kayexalate is slow and unreliable in this setting.' },
      { id: 'ivf-tls', name: 'Aggressive IV fluid hydration 3L/m²/day — maintain UO >100mL/hr', rationale: 'High urine flow dilutes nephrotoxic metabolites and prevents urate crystal deposition in renal tubules. Urine output goal: >100mL/hr or >3mL/kg/hr in children.' },
      { id: 'nephrology-tls', name: 'Nephrology consult — dialysis likely needed (K 6.4, Cr 3.4, oliguria)', rationale: 'Clinical TLS with AKI, severe hyperkalemia, and oliguria: dialysis may be needed emergently. Nephrology must be at the bedside.' },
      { id: 'no-ca-tls', name: 'Do NOT give IV calcium unless symptomatic hypocalcemia (tetany, seizures, arrhythmia)', rationale: 'Giving calcium in TLS when phosphorus is high (8.2) precipitates calcium-phosphate crystals in the kidneys and soft tissues — worsens AKI. Only give calcium for symptomatic hypocalcemia (tetany, seizures, QTc prolongation with arrhythmia).' }
    ],
    incorrect: [
      { id: 'allopurinol-tls', name: 'Continue allopurinol — it was started pre-chemo', rationale: 'Allopurinol prevents new uric acid formation but does NOT break down existing uric acid. For established TLS with uric acid 14.8, rasburicase is required. Switch from allopurinol to rasburicase immediately.' },
      { id: 'calcium-high-phos', name: 'Give calcium gluconate to correct hypocalcemia of 6.8', rationale: 'DANGEROUS with phosphorus 8.2 — calcium × phosphate product is already critically elevated. Administering calcium will cause metastatic calcification (renal, vascular, soft tissue). Only give for symptomatic hypocalcemia (QTc prolongation with arrhythmia, seizures, tetany).' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'TLS Cairo-Bishop criteria: ≥2 metabolites abnormal within 3 days before to 7 days after chemo. Lab TLS: ≥2 of — K >6.0, Phos >4.5, Uric acid >8.0, Ca <7.0. Clinical TLS = lab TLS + creatinine >1.5×ULN, seizures, arrhythmia, or death.',
      'Rasburicase breaks down existing uric acid (allopurinol only prevents new synthesis). Rasburicase is first-line for high-risk TLS. CONTRAINDICATED in G6PD deficiency — fatal hemolytic anemia.',
      'Do NOT give calcium to correct hypocalcemia in TLS unless symptomatic — high phosphorus causes calcium-phosphate precipitation and worsens AKI.',
      'High TLS risk: Burkitt lymphoma, ALL, AML with high WBC, bulky solid tumors with high sensitivity to chemotherapy, high LDH.'
    ],
    boardPearls: [
      'TLS prevention for high-risk patients: allopurinol + aggressive IV hydration + urine alkalinization (controversial) starting 24-48h before chemo. Rasburicase for very high risk.',
      'Most nephrotoxic TLS metabolite: urate crystals in renal tubules (uric acid nephropathy). Phosphate crystals also contribute to AKI.',
      'Hyperphosphatemia in TLS: no effective acute pharmacologic treatment — dialysis is definitive. Phosphate binders require time (not acute treatment).',
      'Spontaneous TLS: can occur before chemotherapy in rapidly proliferating tumors (Burkitt, ALL). Always check labs before starting chemo and monitor q6-8h in high-risk patients.'
    ]
  },
  references: [{ id: 'StatPearls-TLS', title: 'Tumor Lysis Syndrome', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK539159/', openAccess: true }]
};
