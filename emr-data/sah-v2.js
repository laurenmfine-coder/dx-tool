/* CASE: sah-v2 — Jennifer Wu — SAH: Delayed Cerebral Ischemia / Vasospasm Day 7 */
window.CASES = window.CASES || {};
window.CASES['sah-v2'] = {
  id: 'sah-v2', name: 'Jennifer Wu', age: '42F', dob: '1984-09-16',
  mrn: 'MRN-510850', setting: 'Neuro ICU — Day 7',
  chiefComplaint: 'Day 7 post-SAH: new confusion, left arm weakness — delayed cerebral ischemia',
  diagnosis: 'Subarachnoid Hemorrhage — Delayed Cerebral Ischemia (Vasospasm)',
  category: 'neurologic', acuity: 1,
  continuityNote: 'Prior encounter: sah-v1 — Jennifer Wu, 42F thunderclap headache, CT confirmed SAH, CTA showed 7mm right MCA aneurysm. Underwent successful coil embolization day 1. Post-procedure course: triple-H therapy started (hypertension, hypervolemia, hemodilution — now modified to euvolemia + induced HTN). Nimodipine 60mg q4h started. Day 4: TCD velocities rising (MCA 160 cm/s).',
  presentation: {
    hpi: 'Day 7 post-SAH from right MCA aneurysm (coiled day 1). New this morning: confusion, left arm drift, dysarthria — new focal deficits not present yesterday. TCD today: right MCA velocity 220 cm/s (severe vasospasm threshold >200). BP currently 128/74 — at the lower end of her post-SAH target. This is delayed cerebral ischemia (DCI) from vasospasm — the #1 cause of death and disability after the aneurysm is secured.',
    pmh: ['SAH — right MCA aneurysm, coiled day 1', 'HTN (baseline BP 138/82)'],
    meds: ['Nimodipine 60mg PO q4h (calcium channel blocker — ONLY proven drug for SAH vasospasm)', 'Levetiracetam (seizure prophylaxis)', 'Stool softeners', 'DVT prophylaxis (started day 3 post-coiling)']
  },
  vitals: { BP: '128/74', HR: '88', RR: '16', Temp: '37.8°C', SpO2: '98%', GCS: '12 (E3V4M5)' },
  labs: {
    'TCD (transcranial Doppler)': 'Right MCA velocity 220 cm/s (SEVERE vasospasm — >200 cm/s) | Left MCA 140 cm/s (moderate)',
    'CT perfusion': 'Prolonged Tmax and reduced CBF in right MCA territory — at-risk penumbra. No completed infarct yet.',
    'CTA': 'Diffuse right MCA M1 and M2 segment narrowing — consistent with severe vasospasm. Coil pack intact, no rebleeding.',
    'Labs': 'Na 135, Hgb 10.4 (euvolemia maintained), Glucose 118'
  },
  orders: {
    correct: [
      { id: 'induce-htn-sah', name: 'Induced hypertension — raise MAP to 100-110 mmHg with norepinephrine', rationale: 'DCI treatment: induced hypertension increases cerebral perfusion pressure through vasospastic segments. Target MAP 100-110 (SBP 160-180) in patients with secured aneurysms. This is safe now that the aneurysm is coiled — could not do this with unsecured aneurysm (rupture risk).' },
      { id: 'euvolemia-sah', name: 'Maintain euvolemia with IV fluids — avoid hypovolemia', rationale: 'Current evidence: euvolemia (not hypervolemia) is the target. Hypovolemia worsens DCI by reducing cerebral perfusion. Aggressive hypervolemia (the old "triple H") increases complications without benefit.' },
      { id: 'continue-nimo', name: 'Continue nimodipine 60mg q4h — only proven DCI prevention drug', rationale: 'Nimodipine is the only drug proven to reduce neurological deficits from SAH vasospasm (not vessel diameter, but likely neuroprotective mechanism). Do NOT stop despite hypotension — reduce dose to 30mg q2h if BP drops rather than discontinuing.' },
      { id: 'ia-verapamil', name: 'Interventional radiology/neuro-IR consult — intra-arterial verapamil or balloon angioplasty for refractory vasospasm', rationale: 'Intra-arterial verapamil or papaverine: direct vasodilation for refractory vasospasm. Balloon angioplasty: mechanical dilation of proximal vasospasm. Reserved for DCI not responding to induced hypertension within 1-2 hours.' },
      { id: 'neuro-check-sah', name: 'Hourly neurological checks — DCI can progress to completed infarct within hours', rationale: 'DCI is time-critical. Hourly neuro exams to detect new deficits. Any worsening → escalate BP target, call neuro-IR.' }
    ],
    incorrect: [
      { id: 'stop-nimo-htn', name: 'Hold nimodipine — causing hypotension, worsening vasospasm', rationale: 'Do NOT stop nimodipine — it is the only proven agent for SAH outcomes. If hypotensive: reduce to 30mg q2h (same total daily dose, smaller individual doses). Discontinuing nimodipine increases risk of poor neurological outcome.' },
      { id: 'hypervolemia', name: 'Aggressive hypervolemia — 3L NS boluses to increase cerebral perfusion', rationale: 'Outdated triple-H hypervolemia is no longer recommended. Evidence shows euvolemia is equivalent with fewer complications (pulmonary edema, dilutional hyponatremia). Induced hypertension is the active intervention, not hypervolemia.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Delayed cerebral ischemia (DCI) peaks days 4-14 post-SAH. The aneurysm rebleeding window is days 0-3; vasospasm window is days 4-14. Two completely different threats at different times.',
      'Nimodipine is the ONLY drug proven to improve neurological outcomes in SAH. It does not reliably reverse vasospasm on angiography — the benefit is likely neuroprotective. Never stop it; reduce dose if hypotensive.',
      'Induced hypertension (MAP 100-110) is first-line treatment for symptomatic DCI in secured aneurysms. Cannot be used for unsecured aneurysm (rebleeding risk).',
      'TCD monitoring: MCA velocity >120 = mild vasospasm, >160 = moderate, >200 = severe. Rising velocities precede clinical symptoms by 12-24h — opportunity for early intervention.'
    ],
    boardPearls: [
      'SAH grading: Hunt-Hess (clinical) and Fisher scale (CT blood volume predicts vasospasm risk — Fisher grade 3 highest risk).',
      'Rebleeding: highest risk first 24h (4% per day untreated). Secure aneurysm within 24h to prevent rebleeding.',
      'Hydrocephalus post-SAH: communicating (blood in subarachnoid space blocking CSF resorption) or obstructive (blood in ventricles). EVD for acute, VP shunt for chronic.',
      'Cardiac complications of SAH: neurogenic stunned myocardium (Takotsubo-like EF depression), ECG changes (deep T inversions, QTc prolongation, ST changes). Do NOT mistake for primary ACS.'
    ]
  },
  references: [{ id: 'StatPearls-SAH', title: 'Subarachnoid Hemorrhage', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK537064/', openAccess: true }]
};
