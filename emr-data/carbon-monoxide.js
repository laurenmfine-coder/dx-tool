/* emr-data/carbon-monoxide.js — CO Poisoning: SpO2 Trap */
window.CASES = window.CASES || {};
window.CASES['carbon-monoxide'] = {
  id: 'carbon-monoxide', name: 'Families of 5', age: '35M', dob: '1990-03-14',
  mrn: 'RDX-2026-72441', setting: 'ED', category: 'toxicologic', acuity: 1,
  chiefComplaint: 'Multiple family members with headache, confusion, nausea — SpO2 normal — CO detector alarmed',
  diagnosis: 'Carbon Monoxide Poisoning — Faulty Furnace',
  presentation: {
    hpi: 'A family of 5 presented to the ED after their CO detector alarmed. Father (patient, 35M): headache, confusion, nausea × 4h. Mother: headache only. Two children: one confused, one asymptomatic. Dog found dead. Apartment has gas furnace serviced last year. SpO2 98-99% on room air for all family members — seemingly reassuring.',
    pmh: ['No significant PMH'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '138/84', HR: '104', RR: '18', Temp: '37.0°C', SpO2: '98% (FALSELY NORMAL — pulse ox cannot detect CO)' },
  labs: {
    'CO-OXIMETRY (arterial or venous blood gas)': 'COHgb 28% — SIGNIFICANT CO POISONING. Pulse oximetry reads 98% because it cannot distinguish carboxyhemoglobin from oxyhemoglobin.',
    'ABG': 'pH 7.34, PaO2 188 (high FiO2), PaCO2 38, COHgb 28% — metabolic acidosis from tissue hypoxia',
    'Lactate': '3.8 mmol/L (H — tissue hypoxia despite "normal" SpO2)',
    'Troponin': '0.08 ng/mL (mildly elevated — CO-induced cardiac injury)',
    'ECG': 'Sinus tachycardia, non-specific ST changes'
  },
  orders: {
    correct: [
      { id: '100o2-co', name: '100% O2 via tight-fitting NRB for ALL exposed family members — immediately', rationale: 'Carbon monoxide half-life: room air 4-5 hours, 100% O2 60-90 minutes, HBO 30 minutes. 100% O2 is the primary treatment for all CO poisoning. Do not base decision on SpO2 — it is falsely normal. All symptomatic AND asymptomatic exposed family members should receive 100% O2 for at least 4-6 hours.' },
      { id: 'co-oximetry', name: 'CO-oximetry (blood gas) for all family members — SpO2 is falsely normal', rationale: 'Pulse oximetry reads COHgb as oxyHgb — SpO2 will be falsely normal even in severe CO poisoning. ONLY CO-oximetry (ABG or VBG with co-oximetry) accurately measures COHgb. This is a critical diagnostic trap.' },
      { id: 'hbo-indications', name: 'Evaluate for hyperbaric oxygen: LOC, COHgb >25%, neurological symptoms, pregnancy, cardiac injury', rationale: 'HBO indications (controversial but widely used): COHgb >25%, loss of consciousness at any point, neurological symptoms, pregnancy (fetal hemoglobin binds CO tightly), cardiac involvement (arrhythmia, ischemia). HBO reduces long-term neurological sequelae.' },
      { id: 'source-control-co', name: 'Notify fire department + public health — gas furnace inspection', rationale: 'CO poisoning is a public health emergency. The source (faulty furnace) must be identified and fixed before the family can return home. Do not discharge until confirmed safe environment.' }
    ],
    incorrect: [
      { id: 'reassure-spo2', name: 'SpO2 98-99% — patient not hypoxic, monitor and discharge if asymptomatic', rationale: 'CRITICAL ERROR — SpO2 is FALSELY NORMAL in CO poisoning. Pulse oximetry cannot distinguish COHgb from oxyhemoglobin — it reads both as "saturated." A patient with 30% COHgb will show SpO2 >95% on pulse oximetry. Never use SpO2 alone to rule out CO poisoning.' },
      { id: 'no-asymptomatic-tx', name: 'Treat only symptomatic family members — asymptomatic ones are fine', rationale: 'All exposed family members require CO-oximetry and 100% O2 treatment. Asymptomatic family members may have lower COHgb but still benefit from 100% O2 to accelerate CO clearance. The asymptomatic child may develop symptoms as CO continues to bind hemoglobin.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Carbon monoxide poisoning: SpO2 is FALSELY NORMAL — pulse oximetry cannot distinguish COHgb from oxyHgb. Always order CO-oximetry (blood gas) for any suspected CO exposure, regardless of SpO2.',
      '100% O2 is primary treatment: reduces CO half-life from 4-5h (room air) to 60-90 min. Applies to all exposed individuals, symptomatic or not.',
      'HBO indications: COHgb >25%, LOC, neurological symptoms, pregnancy, cardiac injury. Reduces long-term neurological sequelae (delayed neuropsychiatric syndrome — headache, cognitive impairment weeks after exposure).',
      'CO poisoning clusters: suspect when multiple family members present with headache + nausea + confusion, especially with gas appliances. Dead pets are a classic clue.'
    ],
    boardPearls: [
      'Delayed neuropsychiatric syndrome: 10-30% of severe CO poisoning. Cognitive impairment, personality change, parkinsonism appearing days-weeks after apparent recovery. HBO may reduce risk.',
      'Fetal hemoglobin binds CO more avidly than adult Hgb and dissociates more slowly. Pregnant patients with CO exposure require more aggressive treatment (HBO) even with lower maternal COHgb.',
      'CO mechanism: binds hemoglobin with 250× affinity of O2 (left-shifts oxyhemoglobin dissociation curve), binds cytochrome oxidase (cellular asphyxia), causes lipid peroxidation in brain.',
      'Fire victims: always consider cyanide poisoning coexisting with CO poisoning (combustion of synthetic materials). Suspect if unexplained severe lactic acidosis. Treat empirically with hydroxocobalamin.'
    ]
  },
  references: [{ id: 'StatPearls-CO', title: 'Carbon Monoxide Toxicity', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430740/', openAccess: true }]
};
