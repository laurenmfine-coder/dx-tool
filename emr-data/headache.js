/* emr-data/headache.js — Headache Differential: Thunderclap vs Primary vs Red Flags */
window.CASES = window.CASES || {};
window.CASES['headache'] = {
  id: 'headache', name: 'Ana Gutierrez', age: '36F', dob: '1989-08-27',
  mrn: 'RDX-2026-58321', setting: 'ED → Neurology', category: 'neurologic', acuity: 2,
  chiefComplaint: 'Sudden severe headache while exercising — "worst headache of my life," onset 2 minutes',
  diagnosis: 'Thunderclap Headache — SAH Excluded by CT, LP Required to Complete Workup',
  presentation: {
    hpi: 'Ana Gutierrez, 36F, no prior headache history. While jogging this morning, she developed a sudden severe headache that reached maximal intensity in approximately 2 minutes. She describes it as 10/10, unlike any headache before. No loss of consciousness. No focal neurological deficits. No fever. No neck stiffness. BP 158/94 (elevated from pain and exertion — her baseline is unknown). CT head (non-contrast) done in triage: no blood visible. She is currently pain-free (4/10 remaining). She wants to go home.',
    pmh: ['No prior significant headache history', 'OCP use'], meds: ['OCP'], allergies: ['NKDA']
  },
  vitals: { BP: '158/94', HR: '92', RR: '16', Temp: '37.1°C', SpO2: '99%', GCS: '15' },
  labs: {
    'CT head (non-contrast, within 6h of onset)': 'No subarachnoid blood. No hemorrhage. No mass. Sensitivity for SAH within 6h: 98-99%.',
    'LP (REQUIRED despite negative CT)': 'Pending — must be done ≥12h from symptom onset for xanthochromia detection. Opening pressure, RBC count × 4 tubes, xanthochromia (spectrophotometry preferred over visual inspection), protein, glucose, culture.',
    'BMP': 'Normal',
    'CBC': 'Normal'
  },
  orders: {
    correct: [
      { id: 'lp-thunderclap', name: 'Lumbar puncture — mandatory despite negative CT, wait ≥12h from onset for xanthochromia', rationale: 'Thunderclap headache with negative CT does NOT rule out SAH. CT misses 2% of SAH. LP must be done ≥12h after symptom onset to allow RBC lysis and xanthochromia (yellow discoloration from bilirubin). LP done <12h cannot distinguish traumatic tap from true SAH by xanthochromia. The Ottawa SAH Rule requires LP for all thunderclap headaches in the ED.' },
      { id: 'red-flags-ha', name: 'Apply SNOOP4 red flags — this headache has multiple red flags requiring full workup', rationale: 'SNOOP4 headache red flags: Systemic symptoms, Neurological symptoms, Onset sudden (thunderclap), Older (new headache >50), Progressive, Papilledema, Postural/position change, Precipitated by Valsalva. Ana has: sudden onset (thunderclap) + exercise-associated + new headache = SAH must be excluded.' },
      { id: 'cta-if-lp-neg', name: 'If LP negative: CTA circle of Willis — exclude cerebral aneurysm and reversible cerebral vasoconstriction syndrome (RCVS)', rationale: 'RCVS (reversible cerebral vasoconstriction syndrome): multiple thunderclap headaches over days-weeks from transient vasospasm. Precipitants: exertion, sexual activity, OCP, SSRIs. CTA shows segmental narrowing. Treatment: calcium channel blockers (verapamil), avoid triggers. Can cause ischemic stroke if severe.' }
    ],
    incorrect: [
      { id: 'discharge-neg-ct', name: 'Discharge — CT is negative, primary headache (migraine or tension)', rationale: 'DANGEROUS — thunderclap headache with negative CT requires LP to exclude SAH. CT sensitivity for SAH is 98% within 6h but 2% of SAH bleeds are CT-negative. Missing an SAH = rebleed risk = death. Never discharge thunderclap headache without complete workup (CT + LP or CTA, per protocol).' },
      { id: 'migraine-treat', name: 'Treat as migraine — she had exertional headache, fits cough/exertional migraine', rationale: 'Exertional headache CAN be benign primary cough headache or exertional migraine — but these are diagnoses of EXCLUSION after SAH is excluded. Thunderclap headache onset = SAH workup first. Always.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Thunderclap headache definition: maximal intensity within 60 seconds of onset. ALWAYS workup for SAH first — it is SAH until proven otherwise.',
      'CT within 6h: sensitivity 98-99% for SAH. CT after 6h: sensitivity drops to 85-90%. LP is still required after negative CT regardless of timing — CT alone never excludes SAH.',
      'LP timing: wait ≥12 hours from headache onset for xanthochromia. LP done <12h cannot distinguish traumatic tap (also bloody) from true SAH by xanthochromia detection alone.',
      'RCVS (reversible cerebral vasoconstriction syndrome): recurrent thunderclap headaches, precipitated by exertion/sex/Valsalva/OCP. CTA: segmental narrowing. LP normal. Treatment: verapamil, avoid triggers.'
    ],
    boardPearls: [
      'Ottawa SAH Rule: if any of these present → mandatory CT + LP: age ≥40, neck pain or stiffness, witnessed LOC, onset with exertion, thunderclap onset, limited neck flexion on exam. Sensitivity ~100%.',
      'Cluster headache: unilateral periorbital pain + ipsilateral autonomic features (ptearing, rhinorrhea, ptosis, miosis). Attacks 15-180 min. Treat: 100% O2 (first-line), sumatriptan SC. Prevent: verapamil.',
      'Idiopathic intracranial hypertension (IIH): obese young woman + papilledema + visual changes + headache. LP opening pressure >25 cmH2O. Treatment: acetazolamide + weight loss. LP shunting or optic nerve sheath fenestration for severe.',
      'Medication overuse headache: >15 days/month of analgesic use for headache. Treatment: detox (withdraw analgesics), preventive therapy.'
    ]
  },
  references: [{ id: 'StatPearls-Headache', title: 'Headache', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK554501/', openAccess: true }]
};
