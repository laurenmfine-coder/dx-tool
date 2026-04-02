window.CASES = window.CASES || {};
window.CASES['parkinson'] = {
  id: 'parkinson', name: 'Arthur Weiss', age: '71M', dob: '1954-05-22',
  mrn: 'RDX-2026-31114', setting: 'Neurology Clinic → ED',
  chiefComplaint: 'Falls + rigidity worse + confusion after surgery — missed Parkinson medications',
  diagnosis: 'Parkinson Disease — Medication Omission Crisis (Akinesia) + NMS Risk',
  category: 'neurologic', acuity: 2,
  presentation: {
    hpi: '71M with PD (10 years, on levodopa/carbidopa + pramipexole + rasagiline). Admitted to orthopedics 3 days ago for hip repair. His Parkinson medications were held by orthopedics ("NPO order") and not restarted postoperatively. Now: complete akinesia (cannot move), confusion, temperature 38.8°C, HR 118. Lab: CK 4,200. This is parkinsonian hyperpyrexia syndrome / NMS-like reaction from abrupt dopaminergic withdrawal.',
    pmh: ['Parkinson disease — 10 years, Hoehn-Yahr stage 3', 'HTN', 'BPH'],
    meds: ['Levodopa/carbidopa 25/100 TID (HELD 3 days)', 'Pramipexole 1mg TID (HELD)', 'Rasagiline 1mg daily (HELD)'],
    allergies: ['NKDA']
  },
  vitals: { BP: '148/88', HR: '118', RR: '20', Temp: '38.8°C', SpO2: '95%' },
  labs: {
    'CK': '4,200 U/L (H — rhabdomyolysis from rigidity)',
    'BMP': 'Na 146, Cr 1.8 (up from 1.0 — prerenal + myoglobin), K 4.8',
    'CBC': 'WBC 14.2 (H — stress leukocytosis vs infection)', 'LFTs': 'Normal'
  },
  orders: {
    correct: [
      { id: 'restart-pd-meds', name: 'Restart all PD medications immediately — crushed via NG if cannot swallow', rationale: 'Abrupt withdrawal of dopaminergic medications causes parkinsonian hyperpyrexia syndrome (PHS) — clinically indistinguishable from NMS. RESTART levodopa immediately. Use NG tube if swallowing impaired. No NPO order should ever hold Parkinson medications without a plan to administer them via alternate route.' },
      { id: 'iv-fluids-pd', name: 'IV fluids — CK 4,200 and AKI from rhabdomyolysis', rationale: 'Rigidity from PD medication withdrawal causes rhabdomyolysis. Aggressive hydration protects kidneys from myoglobin. Target UO 1-2 mL/kg/hr.' },
      { id: 'neuro-consult-pd', name: 'Neurology consult — PD crisis management', rationale: 'IV amantadine or SC apomorphine can be used when PO route is unavailable. Neurology must be involved for any hospitalized PD patient.' }
    ],
    incorrect: [
      { id: 'haloperidol-pd', name: 'Haloperidol for confusion and agitation', rationale: 'CONTRAINDICATED in Parkinson disease. Dopamine antagonists (haloperidol, most antipsychotics except quetiapine/clozapine) cause severe worsening of parkinsonism and can precipitate NMS. Quetiapine or clozapine are the only acceptable antipsychotics in PD.' },
      { id: 'hold-meds-pd', name: 'Continue holding medications — patient still confused, aspiration risk', rationale: 'Continuing to hold PD medications perpetuates and worsens the crisis. The confusion IS from dopamine withdrawal. Use NG tube. The risk of aspiration from withdrawal-induced akinesia and rigidity is FAR greater than aspiration from medication administration.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'NEVER hold Parkinson medications perioperatively without a plan. NPO = nothing by MOUTH — not no medications. Use NG tube, rotigotine patch, or IV amantadine to maintain dopaminergic therapy.',
      'Parkinsonian hyperpyrexia syndrome: abrupt PD medication withdrawal → fever + rigidity + confusion + autonomic instability + rhabdomyolysis. Clinically identical to NMS. Treatment: restart dopaminergic medications immediately.',
      'Dopamine antagonists are CONTRAINDICATED in PD: haloperidol, metoclopramide, prochlorperazine, droperidol. Safe antiemetics: ondansetron, domperidone. Safe antipsychotics: quetiapine, clozapine.'
    ],
    boardPearls: [
      'PD motor features: TRAP — Tremor (resting, 4-6Hz, pill-rolling), Rigidity (cogwheel), Akinesia/bradykinesia, Postural instability. Asymmetric onset.',
      'Levodopa complications: motor fluctuations (wearing-off, on-off), dyskinesias (choreiform — peak-dose). Treatment: COMT inhibitors (entacapone), MAO-B inhibitors (rasagiline), DBS.',
      'DBS (deep brain stimulation): subthalamic nucleus or globus pallidus interna. For motor complications despite optimal medications. Does NOT help tremor-dominant PD as well as rigidity/bradykinesia.',
      'Atypical parkinsonism: PSP (falls backward, vertical gaze palsy), MSA (autonomic failure + cerebellar/corticospinal signs), DLB (visual hallucinations + cognition before motor symptoms). Poor levodopa response.'
    ]
  },
  references: [{ id: 'StatPearls-PD', title: 'Parkinson Disease', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470193/', openAccess: true }]
};
