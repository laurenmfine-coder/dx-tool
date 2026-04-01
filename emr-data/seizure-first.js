/* emr-data/seizure-first.js
   First Unprovoked Seizure — Workup and AED Decision
   Category: neurologic | Acuity: ESI-2 | Setting: ED → Neurology
*/
window.CASES = window.CASES || {};
window.CASES['seizure-first'] = {
  id: 'seizure-first',
  name: 'Amir Hassan',
  age: '34M',
  dob: '1991-08-17',
  mrn: 'RDX-2026-47229',
  setting: 'ED → Neurology Clinic',
  chiefComplaint: 'Witnessed generalized tonic-clonic seizure — first episode, no prior history',
  diagnosis: 'First Unprovoked Seizure — Risk Stratification and AED Decision',
  category: 'neurologic',
  acuity: 2,
  presentation: {
    hpi: 'Amir Hassan, 34M, brought by partner after witnessed generalized tonic-clonic seizure lasting approximately 2 minutes. He had no warning (no aura), fell to the floor, had rhythmic jerking of all four extremities, bit his tongue, and had urinary incontinence. Post-ictal confusion lasted ~20 minutes. He has returned to baseline. No prior seizure history. No family history of epilepsy. No recent illness, fever, or head trauma. No medications. He occasionally drinks alcohol (2-3 drinks/weekend — last drink was 4 days ago). He has been under significant work stress and has had poor sleep for 3 weeks.',
    pmh: ['No prior seizure', 'No CNS infection or trauma', 'No structural brain disease'],
    meds: ['None'],
    allergies: ['NKDA']
  },
  vitals: { BP: '138/82', HR: '92', RR: '16', Temp: '37.0°C', SpO2: '98%', GCS: '15 (post-ictal, now resolved)' },
  exam: {
    neuro: 'Alert, oriented ×4, back to baseline. Mild tongue laceration (lateral — confirms true seizure, not pseudoseizure). No focal deficits. DTRs symmetric. Plantar responses flexor.',
    general: 'Well-appearing male, mild postictal fatigue'
  },
  labs: {
    'Glucose (POC)': '94 mg/dL — normal (hypoglycemia excluded)',
    'BMP': 'Na 138, K 4.1, Ca 9.2, Mg 1.9, Cr 0.9 — all normal (metabolic cause excluded)',
    'CBC': 'Normal',
    'Tox screen': 'Negative cocaine, methamphetamine, PCP. Ethanol 0. THC trace.',
    'Prolactin (if drawn within 20 min of event)': '48 ng/mL (H — elevated prolactin within 20 min supports true generalized seizure vs pseudoseizure)',
    'MRI brain with contrast': 'No structural lesion, no mass, no enhancement. Normal hippocampal volumes. No cortical dysplasia or mesial temporal sclerosis.',
    'EEG (routine, awake + drowsy)': 'No epileptiform discharges during study. Normal background. A normal routine EEG does NOT rule out epilepsy.'
  },
  orders: {
    correct: [
      { id: 'mri-seizure', name: 'MRI brain with and without contrast — preferred over CT for first seizure', rationale: 'MRI identifies structural causes (cortical dysplasia, mesial temporal sclerosis, tumor, cavernous malformation) that CT misses. Unless CT is the only option emergently.' },
      { id: 'eeg-seizure', name: 'Routine EEG with sleep deprivation — schedule within 24-48h', rationale: 'EEG characterizes seizure type and syndrome. Sleep deprivation increases yield of epileptiform activity. A normal EEG does not rule out epilepsy — it reflects only a 20-40 minute window of brain activity.' },
      { id: 'risk-counseling', name: 'Driving restriction counseling and documentation', rationale: 'ALL patients with first seizure must be counseled about driving. Most states require seizure-free period (usually 6 months) before driving. Document this counseling. Failure to counsel is a medicolegal risk.' },
      { id: 'aed-decision', name: 'AED initiation — discuss with patient based on recurrence risk', rationale: '~40% of patients with first unprovoked seizure will have a second. AED reduces 2-year recurrence from 40% to 25% but does NOT change long-term remission rate (ILA trial). Decision is shared with patient. Higher risk for recurrence: abnormal MRI, abnormal EEG, nocturnal seizure, neurological injury. If normal MRI and EEG: observation vs levetiracetam.' }
    ],
    incorrect: [
      { id: 'must-start-aed', name: 'All first seizures require AED — start levetiracetam now', rationale: 'AED after first seizure is not mandatory. The ILAE trial showed AED reduces early recurrence but not long-term outcome. For low-risk patients (normal MRI, normal EEG, no neurological injury), observation is acceptable. The decision is individualized and shared.' },
      { id: 'no-workup', name: 'Normal exam — discharge with neurology follow-up, no imaging', rationale: 'All first unprovoked seizures require imaging (MRI preferred) to exclude structural cause. A normal neurological exam does not exclude brain tumor, cavernous malformation, or cortical dysplasia.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'First unprovoked seizure workup: glucose immediately (POC), metabolic panel, MRI brain (preferred over CT — identifies mesial temporal sclerosis, dysplasia), EEG within 24-48h.',
      'AED after first seizure reduces 2-year recurrence from ~40% to ~25% but does NOT change long-term remission rate (ILA trial). The decision is shared with the patient based on individual risk factors.',
      'Driving restriction is mandatory and must be documented. Most states: seizure-free period before resuming driving. This is a medicolegal obligation, not a suggestion.',
      'Lateral tongue biting, urinary incontinence, and postictal confusion support generalized tonic-clonic seizure. Prolactin elevation within 20 minutes supports true seizure vs psychogenic non-epileptic event.'
    ],
    boardPearls: [
      'Status epilepticus: >5 minutes continuous OR 2+ seizures without return to baseline. Treatment: benzodiazepine → second-line (levetiracetam, valproate, lacosamide) → refractory (propofol, midazolam, ketamine infusion).',
      'ESETT trial: levetiracetam, fosphenytoin, and valproate equally effective as second-line for status epilepticus. Phenytoin is no longer preferred.',
      'Febrile seizure <5 years: benign, does not require AED, EEG, or LP (unless meningitis suspected). Risk of epilepsy: 2-4% (vs 1% general population).',
      'Temporal lobe epilepsy (most common partial epilepsy): aura (déjà vu, rising epigastric sensation, fear) + automatisms (lip smacking, hand movements). Medial temporal sclerosis on MRI.'
    ]
  },
  references: [
    { id: 'StatPearls-Seizure', title: 'Seizure', authors: 'Falco-Walter JJ', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430765/', openAccess: true }
  ]
};
