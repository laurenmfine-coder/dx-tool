/* emr-data/shock.js — Shock Types: Differential Diagnosis and Management */
window.CASES = window.CASES || {};
window.CASES['shock'] = {
  id: 'shock', name: 'Thomas Walsh', age: '55M', dob: '1970-11-03',
  mrn: 'RDX-2026-38844', setting: 'ED → MICU', category: 'emergency', acuity: 1,
  chiefComplaint: 'BP 72/40, HR 126, confused — shock of unclear etiology, rapid diagnosis required',
  diagnosis: 'Mixed Shock: Distributive (Septic) Shock with Concurrent Cardiogenic Component (EF 20%)',
  presentation: {
    hpi: 'Thomas Walsh, 55M with known ischemic cardiomyopathy (EF 20%, last echo 6 months ago), DM2. Brought by EMS — BP 72/40, HR 126, confused, mottled extremities, cold hands, no urine output in 4h. Febrile 39.2°C. He was seen in urgent care 2 days ago for a UTI and given ciprofloxacin but did not fill the prescription. Bedside echo shows: IVC plethoric (high RA pressure), EF visually 15-20% (reduced), B-lines diffuse (pulmonary edema). The key challenge: is this septic shock with coincidental cardiomyopathy, or cardiogenic shock from his known EF 20%?',
    pmh: ['Ischemic cardiomyopathy EF 20%', 'T2DM', 'ICD in situ', 'CKD stage 3'],
    meds: ['Carvedilol 12.5mg BID', 'Sacubitril-valsartan', 'Spironolactone', 'Furosemide 40mg (not taking)'],
    allergies: ['NKDA']
  },
  vitals: { BP: '72/40', HR: '126', RR: '24', Temp: '39.2°C', SpO2: '88% RA → 94% NRB', GCS: '12' },
  labs: {
    'Lactate': '6.8 mmol/L (H — shock with tissue hypoperfusion)',
    'Troponin I': '2.8 ng/mL (H — myocardial injury from sepsis or ischemia)',
    'BNP': '2,800 pg/mL (H — heart failure component)',
    'Procalcitonin': '48 ng/mL (H — bacterial infection)',
    'UA': 'WBC >100/hpf, many bacteria, + nitrites — source confirmed',
    'Blood cultures': '×2 drawn — E. coli bacteremia (final report)',
    'Bedside echo': 'EF 15-20% (known but may be worse). IVC plethoric. B-lines (pulmonary edema). No tamponade. No new WMA acutely.',
    'BMP': 'Na 132, K 5.2, Cr 3.1 (up from baseline 1.6), Glucose 318'
  },
  orders: {
    correct: [
      { id: 'abx-septic-shock', name: 'Broad-spectrum antibiotics within 1 hour: ceftriaxone 2g IV + vancomycin (MRSA coverage pending cultures)', rationale: 'Septic shock: antibiotics within 1 hour of recognition reduces mortality. Source = UTI/urosepsis → ceftriaxone covers most E. coli. Add vancomycin empirically until cultures return.' },
      { id: 'cautious-fluids', name: 'Cautious 250-500mL NS bolus, reassess with echo after each — NOT 30mL/kg default', rationale: 'This patient has known EF 20% and plethoric IVC — aggressive fluid resuscitation will cause flash pulmonary edema. Give small boluses (250mL) with serial echo reassessment. The Surviving Sepsis 30mL/kg is for distributive shock without cardiac compromise.' },
      { id: 'norepi-shock', name: 'Norepinephrine 0.1-0.3 mcg/kg/min — vasopressor of choice for both septic and cardiogenic shock', rationale: 'Norepinephrine is first-line vasopressor for all forms of shock. Raises MAP through alpha-1 vasoconstriction + mild beta-1 inotropic effect. For cardiogenic component: add dobutamine if MAP adequate but cardiac output still low (IABP or Impella if refractory).' },
      { id: 'cardiology-shock', name: 'Cardiology consult — mixed shock with EF 20%, possible acute-on-chronic decompensation', rationale: 'EF 20% patient in mixed shock: needs cardiology for Impella/IABP consideration if cardiogenic component dominates despite antibiotics + vasopressors. Serial echo to track EF and determine whether cardiac or septic component is driving.' }
    ],
    incorrect: [
      { id: '30ml-shock', name: 'Administer 30mL/kg NS bolus per sepsis bundle', rationale: 'The 30mL/kg default is for distributive septic shock WITHOUT cardiac compromise. This patient has EF 20% and plethoric IVC. Giving 3L+ rapidly = flash pulmonary edema. Individualize fluid resuscitation with echo guidance.' },
      { id: 'dopamine-shock', name: 'Dopamine as vasopressor — traditional first choice', rationale: 'Dopamine is no longer first-line — SOAP II trial showed higher mortality and more arrhythmias vs norepinephrine in septic shock. Norepinephrine is preferred.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Four shock types: (1) Distributive (warm extremities, low SVR — septic, anaphylactic, neurogenic). (2) Hypovolemic (cold, decreased preload — hemorrhage, dehydration). (3) Cardiogenic (cold, high SVR, signs of HF — MI, cardiomyopathy). (4) Obstructive (impaired filling — tamponade, tension PTX, PE).',
      'Bedside echo differentiates shock types: IVC collapsible + hyperdynamic LV = distributive. IVC plethoric + low EF = cardiogenic. IVC plethoric + RV dilation/strain = PE. IVC plethoric + pericardial effusion = tamponade.',
      'Mixed shock is common — sepsis in a patient with known cardiomyopathy. Individualize fluid resuscitation with serial echo. Do not reflexively give 30mL/kg to all shock.',
      'Norepinephrine is first-line vasopressor for all shock types (SOAP II trial). Vasopressin can be added as second agent. Dobutamine for cardiogenic component.'
    ],
    boardPearls: [
      'Neurogenic shock: spinal cord injury above T6 → loss of sympathetic tone → vasodilation + bradycardia (paradoxical bradycardia in shock). Treatment: IV fluids + vasopressors (phenylephrine or norepinephrine) ± atropine.',
      'Anaphylactic shock: epinephrine 0.3-0.5mg IM (thigh) is the only definitive treatment. IV fluids + antihistamines are adjuncts. Never delay epinephrine for antihistamines.',
      'Obstructive shock: tension pneumothorax (absent breath sounds + tracheal deviation → needle decompression), tamponade (Beck\'s triad → pericardiocentesis), massive PE (right heart strain → systemic thrombolytics).',
      'Lactate clearance: target >10% reduction in 2h (or <2 mmol/L at 2h). Serial lactate better than single measurement for predicting outcomes in septic shock.'
    ]
  },
  references: [{ id: 'StatPearls-Shock', title: 'Shock', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK531492/', openAccess: true }]
};
