/* emr-data/acute-leukemia.js — AML with Febrile Neutropenia */
window.CASES = window.CASES || {};
window.CASES['acute-leukemia'] = {
  id: 'acute-leukemia', name: 'Marcus Johnson', age: '52M', dob: '1973-07-28',
  mrn: 'RDX-2026-55223', setting: 'Oncology / MICU', category: 'oncologic', acuity: 1,
  chiefComplaint: 'AML day 14 post-induction — fever 38.9°C, ANC 80 — febrile neutropenia',
  diagnosis: 'Febrile Neutropenia — AML Induction Chemotherapy (7+3)',
  presentation: {
    hpi: '52M with newly diagnosed AML (cytogenetics intermediate risk, FLT3 wild-type, NPM1 mutated). Day 14 post-7+3 induction (cytarabine + daunorubicin). Expected neutropenic nadir. Now febrile 38.9°C, ANC 80 cells/µL. No obvious source on exam — no localizing signs, no rash. Two peripheral blood cultures drawn. Central line is PICC.',
    pmh: ['AML — newly diagnosed, intermediate risk'], meds: ['Post-induction supportive care', 'Fluconazole prophylaxis'], allergies: ['Penicillin — rash (mild — 20 years ago)']
  },
  vitals: { BP: '108/68', HR: '112', RR: '20', Temp: '38.9°C', SpO2: '96%' },
  labs: {
    'CBC': 'WBC 0.3 (ANC 80 — severe neutropenia) | Hgb 7.2 (L) | Plt 18 (L — transfusion threshold)',
    'Blood cultures': '×2 sets peripheral + 1 PICC line — pending',
    'CMP': 'Cr 1.2, AST 44, LDH 280 (H)',
    'Procalcitonin': '2.8 ng/mL (H — bacterial infection more likely)',
    'CXR': 'No infiltrates (does not rule out PCP or early bacterial PNA in neutropenic patient)'
  },
  orders: {
    correct: [
      { id: 'abx-60min', name: 'Broad-spectrum antibiotics within 60 minutes — cefepime 2g IV q8h (penicillin allergy: aztreonam)', rationale: 'MASCC/IDSA: antibiotics within 60 minutes of febrile neutropenia recognition. Each hour of delay increases mortality by 7% (Kumar et al.). Cefepime or piperacillin-tazobactam covers Pseudomonas and gram-negatives. Penicillin rash 20 years ago: cephalosporins have <1% cross-reactivity — cefepime is safe. If true IgE allergy: aztreonam.' },
      { id: 'gcsf-neutropenia', name: 'G-CSF (filgrastim) — accelerates neutrophil recovery', rationale: 'G-CSF shortens duration of neutropenia by 3-5 days in AML post-induction. Not universally used during induction (concern about stimulating leukemia cells) but appropriate for prolonged febrile neutropenia or clinical deterioration.' },
      { id: 'plt-transfuse', name: 'Platelet transfusion — plt 18, threshold <20 for AML', rationale: 'AML: transfuse platelets if <20 (prophylactic threshold in high-bleeding-risk patients). Irradiated, leukoreduced products to prevent transfusion-related GVHD and febrile reactions.' },
      { id: 'antifungal-escalate', name: 'Escalate to antifungal (micafungin or voriconazole) if no improvement at 72-96h', rationale: 'Persistent fever after 72-96h of broad-spectrum antibiotics in neutropenic patient = suspect fungal infection (Aspergillus, Candida). Empiric antifungal therapy is indicated. CT chest for "halo sign" (Aspergillus) — crescent or nodular densities.' }
    ],
    incorrect: [
      { id: 'watch-24h', name: 'Monitor 24h before starting antibiotics — may be viral or drug fever', rationale: 'NEVER delay antibiotics in febrile neutropenia. Drug fever and viral fever cannot be distinguished from bacterial infection in neutropenic patients without cultures, and cultures take 48-72h. Start antibiotics within 60 minutes, de-escalate later if cultures negative.' },
      { id: 'no-ceph-pen-allergy', name: 'Avoid all cephalosporins — patient has penicillin allergy', rationale: 'Penicillin rash 20 years ago has <1% cross-reactivity with cephalosporins (driven by side chain, not beta-lactam ring — outdated 10% figure was based on contaminated older cephalosporins). In febrile neutropenia, cefepime is safe and superior to alternatives. De-label allergy if confirmed non-IgE-mediated.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Febrile neutropenia: temperature ≥38.3°C once OR ≥38.0°C for 1 hour + ANC <500 (or expected to drop <500). Antibiotics within 60 minutes — life-threatening if delayed.',
      'Cefepime or pip-tazo for Pseudomonas coverage. Add vancomycin only for specific indications: hemodynamic instability, MRSA risk, catheter infection, gram-positive bacteremia.',
      'Empiric antifungal at 72-96h of persistent fever despite antibiotics. CT chest for halo sign (Aspergillus). MASCC/IDSA guidelines.',
      'Penicillin allergy in febrile neutropenia: cross-reactivity with cephalosporins is <1% (not 10%). Never withhold cefepime for mild penicillin allergy — it may be lifesaving.'
    ],
    boardPearls: [
      'MASCC risk score ≤21 = high risk, requires hospitalization. Low-risk febrile neutropenia (solid tumors, brief expected neutropenia): oral ciprofloxacin + amoxicillin-clavulanate outpatient.',
      'AML induction (7+3): cytarabine 7 days + anthracycline 3 days. Marrow aplasia expected at day 14-21. Midostaurin added for FLT3+ AML (RATIFY trial).',
      'NPM1-mutated AML (normal karyotype): favorable prognosis. If FLT3-ITD also present: adverse. NPM1 alone: intermediate-favorable.',
      'Allogeneic stem cell transplant: curative for intermediate/high-risk AML in first remission. Requires matched donor, patient fitness, and complete remission after induction.'
    ]
  },
  references: [{ id: 'StatPearls-FebNeutro', title: 'Febrile Neutropenia', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK459197/', openAccess: true }]
};
