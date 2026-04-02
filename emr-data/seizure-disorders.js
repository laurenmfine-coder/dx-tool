window.CASES = window.CASES || {};
window.CASES['seizure-disorders'] = {
  id: 'seizure-disorders', name: 'Marcus Bell', age: '24M', dob: '2001-07-16',
  mrn: 'RDX-2026-62219', setting: 'ED → Neurology',
  chiefComplaint: 'Status epilepticus — seizure >8 minutes, still seizing on arrival',
  diagnosis: 'Status Epilepticus — Benzodiazepine-Refractory, Escalating to Second-Line',
  category: 'neurologic', acuity: 1,
  presentation: {
    hpi: '24M with known epilepsy (JMAE — juvenile myoclonic epilepsy). Missed valproate doses × 3 days. Generalized tonic-clonic seizure started 10 minutes before EMS arrival, has not stopped. EMS gave lorazepam 4mg IM en route — no effect. Now at 18 minutes total duration. Temperature 38.9°C (hyperthermia from muscle activity). SpO2 88%.',
    pmh: ['Juvenile myoclonic epilepsy — on valproate'], meds: ['Valproate 500mg BID (MISSED × 3 days)'], allergies: ['NKDA']
  },
  vitals: { BP: '168/98', HR: '138', RR: '22', Temp: '38.9°C', SpO2: '88%', GCS: 'Unable to assess — actively seizing' },
  labs: {
    'Glucose (POC)': '62 mg/dL (L — hypoglycemia from seizure activity — treat immediately)',
    'Valproate level': '12 mcg/mL (L — subtherapeutic; therapeutic 50-100)',
    'BMP': 'Na 132 (L), K 4.8, Cr 1.2 (elevated from muscle breakdown)', 'Lactate': '8.2 (H — lactic acidosis from sustained seizure activity)'
  },
  orders: {
    correct: [
      { id: 'dextrose-se', name: 'Dextrose 50% 50mL IV immediately — glucose 62', rationale: 'Hypoglycemia is a reversible cause of status epilepticus — treat immediately. Do not wait for EEG or imaging. D50 50mL IV for glucose <70 in a seizing adult.' },
      { id: 'second-line-se', name: 'Second-line AED — levetiracetam 60mg/kg IV (max 4500mg) OR valproate 40mg/kg IV OR lacosamide 400mg IV OR fosphenytoin 20 PE/kg', rationale: 'ESETT trial: levetiracetam, fosphenytoin, and valproate are equally effective as second-line agents (~50% seizure termination rate). Lacosamide is emerging as an additional option. For this patient: IV valproate restores his therapeutic level AND treats SE — optimal choice.' },
      { id: 'airway-se', name: 'Airway management — NPA + jaw thrust, high-flow O2, prepare for intubation if not responding', rationale: 'SpO2 88% requires immediate airway intervention. If second-line AED fails (refractory SE): intubation with propofol or midazolam infusion.' },
      { id: 'refractory-se', name: 'If second-line fails → refractory SE: propofol or midazolam infusion, ICU admission, continuous EEG', rationale: 'Refractory SE: failed benzodiazepine + second-line AED. Treat with continuous infusion anesthesia (propofol, midazolam, or ketamine). Continuous EEG monitoring for non-convulsive SE once patient is paralyzed.' }
    ],
    incorrect: [
      { id: 'more-benzo-se', name: 'Give another dose of lorazepam — just need more benzodiazepine', rationale: 'After 2 doses of appropriately dosed benzodiazepine, additional benzodiazepines have diminishing returns and increase respiratory depression risk. Move to second-line AED after 2 benzo doses fail.' },
      { id: 'phenytoin-first-se', name: 'Phenytoin IV as second-line agent', rationale: 'Phenytoin is no longer preferred — ESETT trial showed fosphenytoin (phenytoin prodrug), levetiracetam, and valproate are equally effective second-line agents. Phenytoin/fosphenytoin has more cardiac side effects and cannot be given rapidly.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Status epilepticus definition: seizure >5 minutes OR ≥2 seizures without return to baseline. Time-critical: >30 min = established SE with lasting neuronal injury.',
      'Treatment ladder: (1) Benzo (lorazepam 0.1 mg/kg IV or diazepam PR or midazolam IM) → (2) Second-line: LEV, valproate, fosphenytoin, or lacosamide (ESETT — all equivalent) → (3) Refractory: propofol, midazolam, ketamine infusion → (4) Super-refractory: barbiturate coma.',
      'Phenytoin is no longer the preferred second-line agent — ESETT trial established equipoise among fosphenytoin, LEV, and valproate.',
      'Always check glucose first — hypoglycemia is a reversible cause that must be excluded/treated before escalating AED therapy.'
    ],
    boardPearls: [
      'Non-convulsive SE (NCSE): occurs after convulsive SE terminates or in ICU. Diagnosed by continuous EEG. Subtle signs: eye deviation, lip smacking, altered consciousness. Treat as aggressively as convulsive SE.',
      'Causes of SE to consider: AED non-adherence (most common), CNS infection, metabolic, stroke, tumor, autoimmune encephalitis (anti-NMDAR, anti-LGI1). LP and MRI for new-onset SE without clear cause.',
      'Autoimmune epilepsy: refractory SE, especially in young women → check anti-NMDAR antibodies. Immunotherapy (steroids, IVIG, plasma exchange) in addition to AEDs.',
      'Super-refractory SE (>24h despite anesthesia): ketamine, ketogenic diet, electroconvulsive therapy (ECT), therapeutic hypothermia all have case report evidence.'
    ]
  },
  references: [{ id: 'StatPearls-SE', title: 'Status Epilepticus', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK526107/', openAccess: true }]
};
