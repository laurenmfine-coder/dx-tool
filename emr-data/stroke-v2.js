/* CASE: stroke-v2 — Gwendolyn Fischer — Hemorrhagic Conversion Post-tPA */
window.CASES = window.CASES || {};
window.CASES['stroke-v2'] = {
  id: 'stroke-v2',
  name: 'Gwendolyn Fischer',
  age: '75F',
  dob: '1949-02-28',
  mrn: '405629',
  setting: 'ED → Neuro ICU',
  chiefComplaint: 'Worsening neurological status 6 hours after tPA',
  diagnosis: 'Hemorrhagic Transformation Post-tPA (PH2)',
  category: 'neurologic',
  continuityNote: 'Prior encounter: stroke-v1 — tPA given for right MCA stroke 6 hours ago. NIHSS 14 on admission. Now NIHSS rapidly worsening.',
  presentation: {
    hpi: 'Gwendolyn Fischer, 75F with known HTN and known prior hypertensive emergency (see Prior Chart), presented 6 hours ago with acute right MCA stroke (NIHSS 14 — left-sided hemiplegia, aphasia, gaze deviation). tPA administered within 3.5 hours per protocol, no contraindications at time of dosing. Now: sudden headache, BP 188/104, NIHSS has risen from 14 to 22. GCS 10 (E3V3M4). Left arm posturing.',
    pmh: ['Hypertension (poorly controlled)', 'Prior PRES 6 months ago', 'Ischemic stroke today (tPA given 6h ago)', 'No prior anticoagulation'],
    meds: ['Amlodipine 10mg daily', 'Lisinopril 20mg daily', 'tPA completed 6 hours ago'],
    allergies: ['NKDA'],
    socialHx: 'Retired schoolteacher. Lives with daughter. Non-smoker.',
    ros: 'Sudden headache, left arm posturing, decreased consciousness'
  },
  vitals: {
    BP: '188/104', HR: '94', RR: '18', Temp: '37.2°C', SpO2: '96% on 2L NC', GCS: '10 (E3V3M4)', NIHSS: '22'
  },
  exam: {
    general: 'Obtunded, moaning to pain',
    neuro: 'NIHSS 22. Eyes deviated right. Left arm posturing (decerebrate). Left leg flaccid. Aphasia — no verbal output.',
    cv: 'Regular rate, no murmurs',
    resp: 'Breathing spontaneously, some Cheyne-Stokes pattern'
  },
  labs: {
    CBC: 'WBC 10.2, Hgb 13.4, Plt 224',
    BMP: 'Na 139, K 3.9, Cr 1.0, Glucose 148',
    coags: 'PT 13.1, INR 1.1, aPTT 29',
    fibrinogen: '310 mg/dL',
    trop: 'Troponin I 0.04 (mild elevation)'
  },
  imaging: {
    ctHead: 'STAT non-contrast CT head: Hyperdense lesion within right MCA territory — parenchymal hematoma type 2 (PH2). Midline shift 5mm left. Mass effect on right lateral ventricle.',
    ctaHead: 'CTA head/neck: No active extravasation. Prior right MCA territory infarct with hemorrhagic transformation confirmed.'
  },
  orders: {
    correct: [
      { id: 'hold-antithromb-sv2', name: 'Hold ALL anticoagulants and antiplatelets × 24h minimum', rationale: 'Hemorrhagic transformation contraindication' },
      { id: 'bp-control-sv2', name: 'IV nicardipine — target SBP <140 mmHg immediately', rationale: 'Elevated BP worsens hematoma expansion' },
      { id: 'neurosurg-sv2', name: 'Urgent neurosurgery consult — hematoma + midline shift', rationale: 'Surgical decompression may be needed' },
      { id: 'icu-sv2', name: 'Neuro ICU admission — continuous neuro monitoring', rationale: 'Rapid NIHSS progression requires ICU-level care' },
      { id: 'intubate-sv2', name: 'Early intubation — GCS 10, Cheyne-Stokes respirations', rationale: 'Airway protection for declining consciousness' },
      { id: 'reversal-sv2', name: 'No reversal agent needed — tPA half-life 5 min, fibrinogen adequate', rationale: 'Fibrinogen 310 — no cryoprecipitate indicated unless <150' }
    ],
    incorrect: [
      { id: 'heparin-sv2', name: 'Start heparin — prevent clot propagation in ischemic zone', rationale: 'DANGEROUS — actively hemorrhaging into infarcted tissue. Heparin contraindicated after hemorrhagic transformation.' },
      { id: 'tpa-redose-sv2', name: 'Redose tPA — NIHSS worsening suggests re-occlusion', rationale: 'FATAL ERROR — worsening NIHSS after tPA is hemorrhagic conversion until proven otherwise. Never redose without non-contrast CT.' },
      { id: 'raise-bp-sv2', name: 'Permissive hypertension SBP 160–180 to maintain penumbra', rationale: 'Permissive HTN is for ischemic stroke without tPA. After hemorrhagic conversion, elevated BP drives hematoma expansion — lower it.' }
    ]
  },

  teachingPoints: {
    keyLearning: ['Hemorrhagic transformation (HT) complicates 3-9% of ischemic strokes treated with tPA. PH2 (parenchymal hematoma > 30% of infarct, with mass effect) is the most dangerous — 50-80% mortality. Risk factors: large infarct, high NIHSS, older age, elevated glucose, AF, anticoagulation prior to tPA.','When HT suspected (sudden headache, BP surge, GCS drop, NIHSS worsening after tPA): STOP tPA infusion immediately. STAT CT head. If PH2 confirmed: cryoprecipitate (fibrinogen replacement), platelets, and consider aminocaproic acid or TXA. Neurosurgery consult for hematoma expansion.','BP management post-tPA hemorrhage: target SBP <140-160. Avoid precipitous drops (cerebral autoregulation impaired). IV labetalol or nicardipine for acute control. Monitor ICP.'],
    boardPearls: ['tPA absolute contraindications include: prior ICH, active bleeding, platelet <100,000, INR >1.7, BP >185/110 (uncontrolled), blood glucose <50 or >400, major surgery within 14 days.','NIHSS scoring: each 1-point increase in NIHSS = 17% increase in HT risk. NIHSS >20 = very high HT risk.','Hemorrhagic transformation vs hemorrhagic stroke: HT occurs within the ischemic area (petechial or confluent). Primary hemorrhagic stroke occurs without preceding ischemia. CT timing matters — early imaging may miss hemorrhage, especially small petechial HT.']
  },
};
