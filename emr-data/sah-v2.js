/* CASE: sah-v2 — SAH: Vasospasm and Delayed Cerebral Ischemia Day 7 */
window.CASES = window.CASES || {};
window.CASES['sah-v2'] = {
  id: 'sah-v2', name: 'Patricia Moore', age: '52F', dob: '1973-11-14',
  mrn: 'RDX-2026-58831', setting: 'Neuro ICU',
  chiefComplaint: 'SAH day 7 — new left arm weakness and confusion — vasospasm vs rebleed?',
  diagnosis: 'Delayed Cerebral Ischemia from Cerebral Vasospasm (Day 7 post-SAH)',
  category: 'neurologic', acuity: 1,
  continuityNote: 'sah-v1: Patricia Moore, 52F, thunderclap headache, CT head: diffuse subarachnoid blood in basal cisterns (modified Fisher grade 4 — highest vasospasm risk). Cerebral angiogram confirmed ruptured right posterior communicating artery aneurysm. Coil embolization performed day 1. Nimodipine 60mg q4h started, euvolemia maintained.',
  presentation: {
    hpi: 'Day 7 post-SAH, day 7 post-coiling. Nimodipine day 7. New confusion (MMSE 18, was 28 yesterday) and left arm drift on neuro exam. Fever 38.9°C. TCD velocities: right MCA 210 cm/s (normal <120), rising from 160 yesterday. CT head: no new blood, no hydrocephalus.',
    pmh: ['SAH day 0 (posterior communicating artery aneurysm, coiled)', 'HTN'], meds: ['Nimodipine 60mg q4h', 'Labetalol (BP management)', 'Heparin SQ prophylaxis', 'Levetiracetam'], allergies: ['NKDA']
  },
  vitals: { BP: '148/88', HR: '94', RR: '16', Temp: '38.9°C', SpO2: '96%', GCS: '13 (E3V4M6)' },
  labs: {
    'CT Head': 'No new hemorrhage. No hydrocephalus. Sulcal effacement right hemisphere — cytotoxic edema (early ischemia).',
    'TCD (Transcranial Doppler)': 'Right MCA velocity 210 cm/s (vasospasm: >120 moderate, >200 severe). Lindegaard ratio 6.4 (>3 = vasospasm vs hyperemia).',
    'CTA/CTP': 'Segmental narrowing right MCA. Prolonged time-to-peak right MCA territory. CBF reduced 35% right hemisphere — ischemic penumbra present.',
    'Labs': 'Na 131 (L — SIADH vs cerebral salt wasting), CBC normal, CRP 68 (H — inflammatory response)'
  },
  orders: {
    correct: [
      { id: 'hht-dci', name: 'Hemodynamic augmentation — "Triple-H" modified: euvolemia + induced hypertension', rationale: 'For delayed cerebral ischemia (DCI) from vasospasm: induce hypertension (MAP 90-110, SBP 160-200) to drive perfusion through narrowed vessels. Modern approach: euvolemia (avoid aggressive hypervolemia — no proven benefit, risk of pulmonary edema) + induced HTN. Vasopressors (phenylephrine or norepinephrine) to raise MAP.' },
      { id: 'ia-vasodilator', name: 'Interventional neuroradiology — intra-arterial verapamil + balloon angioplasty', rationale: 'Severe symptomatic vasospasm (new neuro deficit + TCD >200) despite medical management → interventional treatment. IA verapamil or nicardipine causes local vasodilation. Balloon angioplasty for proximal vessel vasospasm — more durable than pharmacologic alone.' },
      { id: 'nimodipine-cont', name: 'Continue nimodipine — do NOT increase dose or use IV nimodipine for DCI', rationale: 'Nimodipine reduces DCI outcomes (not angiographic vasospasm) — it is neuroprotective, not a vasodilator. The dose is fixed (60mg q4h × 21 days). Increasing dose or using IV nimodipine (not approved in US) will cause hypotension, worsening cerebral ischemia.' },
      { id: 'hyponatremia-dci', name: 'Treat hyponatremia with normal saline or fludrocortisone — NOT fluid restriction', rationale: 'Na 131 in SAH: differential = SIADH (euvolemic) vs cerebral salt wasting (hypovolemic). NEVER fluid-restrict in SAH vasospasm — hypovolemia worsens DCI. Give NS if CSW; fludrocortisone helps both. Confirm volume status before restricting fluids.' }
    ],
    incorrect: [
      { id: 'fluid-restrict-siadh', name: 'Fluid restrict to 1L/day — SIADH from SAH', rationale: 'CRITICALLY WRONG in SAH vasospasm. Fluid restriction causes hypovolemia → worsens cerebral ischemia → worse DCI outcomes. Never fluid restrict in symptomatic vasospasm. Treat hyponatremia with isotonic saline or fludrocortisone, maintain euvolemia to mild hypervolemia.' },
      { id: 'increase-nimodipine', name: 'Double nimodipine dose — vasospasm is severe', rationale: 'Nimodipine dose is fixed at 60mg q4h. Increasing causes systemic hypotension, reducing cerebral perfusion pressure and worsening ischemia. Nimodipine is neuroprotective (acts intracellularly), not a vasodilator at clinical doses.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'DCI (delayed cerebral ischemia) from vasospasm peaks days 4-14 post-SAH (highest risk day 7-10). Risk correlates with clot burden (modified Fisher grade 4 = highest). New neuro deficit + rising TCD = DCI until proven otherwise.',
      'Modified "Triple-H" therapy: euvolemia + induced hypertension (MAP 90-110). Aggressive hypervolemia is no longer recommended — no proven benefit, increases pulmonary edema risk. Volume status maintenance + MAP augmentation is the current standard.',
      'NEVER fluid-restrict in SAH vasospasm, even for apparent SIADH. Hyponatremia in SAH may be cerebral salt wasting (hypovolemic) — fluid restriction is catastrophic. Treat with NS or fludrocortisone.',
      'Nimodipine: fixed dose 60mg q4h × 21 days. Reduces poor outcomes by 34% (Pickard trial) — neuroprotective mechanism, not angiographic vasodilation. Do not increase dose; do not use IV route (not approved in US).'
    ],
    boardPearls: [
      'TCD vasospasm criteria: MCA velocity >120 = mild, >160 = moderate, >200 = severe. Lindegaard ratio (MCA/ICA velocity) >3 distinguishes vasospasm from hyperemia.',
      'Hunt-Hess grade (clinical): I (minimal headache) → V (deep coma). Modified Fisher grade (CT clot burden): 0-4. Both predict vasospasm risk and outcome.',
      'Rebleeding risk: highest in first 24h (4%). Secure aneurysm (coiling or clipping) ASAP. Tranexamic acid briefly reduces rebleed but increases ischemia — not routine.',
      'Hydrocephalus in SAH: obstructive (acute — blood in ventricles) or communicating (delayed — impaired CSF absorption). Treat: EVD for acute, VP shunt for chronic. EVD is NOT contraindicated even with aneurysm unsecured — carefully manage ICP.'
    ]
  },
  references: [{ id: 'StatPearls-SAH', title: 'Subarachnoid Hemorrhage', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK537064/', openAccess: true }]
};
