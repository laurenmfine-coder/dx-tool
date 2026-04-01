/* emr-data/sickle-cell-crisis.js
   Sickle Cell Disease — Vaso-Occlusive Crisis with Acute Chest Syndrome
   Category: hematologic | Acuity: ESI-2 | Setting: ED → Hematology
*/
window.CASES = window.CASES || {};
window.CASES['sickle-cell-crisis'] = {
  id: 'sickle-cell-crisis',
  name: 'Destiny Monroe',
  age: '22F',
  dob: '2003-05-17',
  mrn: 'RDX-2026-61834',
  setting: 'ED → Inpatient Hematology',
  chiefComplaint: 'Severe bilateral leg and back pain, fever, new chest pain — known sickle cell disease',
  diagnosis: 'Vaso-Occlusive Crisis complicated by Acute Chest Syndrome',
  category: 'hematologic',
  acuity: 2,
  presentation: {
    hpi: 'Destiny Monroe, 22F with HbSS sickle cell disease, presents with 2 days of worsening bilateral leg and lower back pain — her typical vaso-occlusive pattern but more severe than usual. She rates pain 9/10. She has been on hydroxyurea but admits to missing doses. Today she developed fever (38.9°C), new pleuritic chest pain, and cough. SpO2 is 91% on room air (her baseline is 98%). CXR shows a new right lower lobe infiltrate. She received opioids in the ED waiting room via her pain protocol but pain is not controlled.',
    pmh: ['HbSS sickle cell disease — diagnosed at birth', 'Hydroxyurea (on/off adherence)', '4 prior VOC hospitalizations, 1 prior ACS episode age 17', 'Penicillin V prophylaxis (stopped at age 18)'],
    meds: ['Hydroxyurea 1000mg daily (inconsistent)', 'Folic acid 1mg daily'],
    allergies: ['NKDA']
  },
  vitals: { BP: '108/68', HR: '112', RR: '22', Temp: '38.9°C', SpO2: '91%', GCS: '15' },
  exam: {
    general: 'Young woman in severe distress, tachypneic, guarding',
    resp: 'Decreased breath sounds right lower lobe, dullness to percussion, splinting on deep inspiration',
    cv: 'Tachycardia, regular rhythm, 2/6 systolic murmur (flow murmur — known)',
    ext: 'No leg swelling, no Doppler DVT, point tenderness bilateral femur/tibia',
    skin: 'Scleral icterus (chronic hemolysis), mild jaundice'
  },
  labs: {
    'CBC': 'WBC 18.2 (H), Hgb 6.8 (L — baseline 7.5), Plt 488 (H — reactive), Reticulocytes 12% (H)',
    'BMP': 'Na 138, K 4.2, Cr 0.9, BUN 18, LDH 680 (H), Total bili 3.8 (H — indirect predominant)',
    'Blood cultures': '× 2 drawn — pending (fever in asplenic patient is an emergency)',
    'CXR': 'New RLL infiltrate — RIGHT LOWER LOBE AIRSPACE DISEASE + ATELECTASIS. Consistent with acute chest syndrome.',
    'Hemoglobin electrophoresis (from records)': 'HbSS pattern confirmed. HbF 8% (low — suggests hydroxyurea non-adherence)'
  },
  orders: {
    correct: [
      { id: 'exchange-acs', name: 'Emergent hematology consult for exchange transfusion', rationale: 'ACS is the #1 cause of death in adult sickle cell disease. Exchange transfusion (goal HbS <30%) is indicated for ACS with respiratory compromise (SpO2 <95%, worsening infiltrate). Simple transfusion alone can worsen hyperviscosity.' },
      { id: 'abx-acs', name: 'Ceftriaxone 1g IV + azithromycin 500mg IV', rationale: 'ACS can be infectious (Mycoplasma, Chlamydophila, S. pneumoniae — encapsulated organisms; patient is functionally asplenic). Treat empirically. Atypical coverage is essential.' },
      { id: 'opioid-acs', name: 'IV opioid patient-controlled analgesia (PCA) — morphine or hydromorphone', rationale: 'VOC pain is severe and requires IV opioids. PCA provides better pain control and reduces nursing workload. Inadequate pain control causes splinting → atelectasis → worsens ACS.' },
      { id: 'incentive-acs', name: 'Incentive spirometry Q2H while awake', rationale: 'Prevents atelectasis which propagates ACS. One of the most important non-pharmacologic interventions. Every 10 deep breaths per hour.' },
      { id: 'o2-acs', name: 'Supplemental O2 to maintain SpO2 ≥95%', rationale: 'Hypoxia promotes sickling. Maintain SpO2 ≥95%. High-flow nasal cannula if needed.' },
      { id: 'flu-acs', name: 'Fluids — IV maintenance rate, NOT boluses', rationale: 'Maintain hydration to reduce sickling. Avoid aggressive fluid overload which can worsen pulmonary edema in ACS.' }
    ],
    incorrect: [
      { id: 'simple-transfuse', name: 'Simple packed RBC transfusion — 2 units', rationale: 'Simple transfusion ALONE in ACS raises viscosity without sufficiently lowering HbS percentage. Exchange transfusion is the standard of care for ACS with respiratory compromise. Hematology must guide this decision.' },
      { id: 'no-abx', name: 'Treat as pure vaso-occlusive — no antibiotics', rationale: 'ACS requires antibiotic coverage regardless of whether infection is confirmed. Functionally asplenic patients are at high risk for encapsulated organism sepsis. Delay is dangerous.' },
      { id: 'nsaid-acs', name: 'Ketorolac for pain control — avoid opioids', rationale: 'NSAIDs are adjuncts but CANNOT replace opioids in severe VOC. Opioids are the standard of care. Undertreating pain causes splinting and worsens ACS.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Acute chest syndrome (ACS) definition: new infiltrate on CXR + ≥1 of: fever, chest pain, cough, dyspnea, hypoxia. ACS is the #1 cause of death in adult sickle cell disease.',
      'ALL chest pain in sickle cell is ACS until proven otherwise. Do not anchor on VOC alone when respiratory symptoms are present.',
      'Functional asplenia begins in childhood from autoinfarction. Fever in sickle cell = blood cultures immediately + empiric antibiotics for encapsulated organisms (S. pneumoniae, H. influenzae).',
      'Exchange transfusion (not simple transfusion) is indicated for ACS with respiratory compromise — goal HbS <30%. Simple transfusion alone raises viscosity without adequately lowering HbS.',
      'Incentive spirometry is a critical intervention — inadequate pain control causes splinting and atelectasis that propagates ACS in a vicious cycle.'
    ],
    boardPearls: [
      'Newer SCD therapies: crizanlizumab (anti-P-selectin, reduces VOC frequency), voxelotor (increases Hgb by inhibiting HbS polymerization), L-glutamine.',
      'Hydroxyurea increases HbF production, reducing sickling. HbF ≥20% correlates with fewer crises. Non-adherence is common — address at every visit.',
      'Stroke in SCD: transcranial Doppler annually in children age 2-16. Chronic transfusion therapy if TCD velocity >200 cm/s.',
      'Priapism: >4h = emergency, aspirate corpus cavernosa + inject phenylephrine. Detumescence within 4h prevents erectile dysfunction.'
    ]
  },
  references: [
    { id: 'StatPearls-SCD', title: 'Sickle Cell Disease', authors: 'Sedrak A, Kondamudi NP', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482384/', openAccess: true },
    { id: 'StatPearls-ACS', title: 'Acute Chest Syndrome', authors: 'Rees DC et al.', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK526010/', openAccess: true }
  ]
};
