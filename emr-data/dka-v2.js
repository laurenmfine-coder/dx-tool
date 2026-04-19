/* CASE: dka-v2 — Devon Patterson — DKA with Cerebral Edema (Pediatric) */
window.CASES = window.CASES || {};
window.CASES['dka-v2'] = {
  id: 'dka-v2',
  name: 'Devon Patterson',
  age: '16M',
  dob: '2008-07-19',
  mrn: '512384',
  setting: 'Pediatric ED → PICU',
  chiefComplaint: 'Worsening headache and sudden deterioration during DKA treatment',
  diagnosis: 'Cerebral Edema Complicating Pediatric DKA',
  category: 'endocrine',
  continuityNote: 'Prior encounter: dka-v1 — new T1DM diagnosed 3 weeks ago after incidental hyperglycemia. DKA treatment started per protocol 3 hours ago. Now acutely deteriorating.',
  presentation: {
    hpi: 'Devon Patterson, 16M with T1DM diagnosed 3 weeks ago (see Prior Chart), presented to ED this morning with vomiting × 12h, glucose 487, pH 7.18, bicarbonate 9, large urine ketones. DKA protocol initiated 3 hours ago: 0.9% NS bolus 20 mL/kg, then insulin drip 0.1 u/kg/hr. Glucose now 280. Sudden onset: severe headache, confused, combative. GCS dropped from 15 → 11. New: bradycardia 54, BP 142/88 (was 104/68). Papilledema on fundoscopic exam.',
    pmh: ['T1DM (diagnosed 3 weeks ago)', 'First DKA episode'],
    meds: ['Insulin glargine 18 units QHS', 'Insulin lispro sliding scale (started 3 weeks ago)'],
    allergies: ['NKDA']
  },
  vitals: {
    BP: '142/88', HR: '54', RR: '22 (Kussmaul)', Temp: '37.0°C', SpO2: '99% RA', GCS: '11 (E3V3M5)'
  },
  exam: {
    neuro: 'GCS 11. Confused, combative. Pupils 4mm equal reactive → progressing to unequal 5mm R, 3mm L. Papilledema bilateral.',
    general: 'Cushingoid response: hypertension + bradycardia + irregular breathing = Cushing triad',
    resp: 'Kussmaul breathing'
  },
  labs: {
    BMP: 'Na 132, K 3.8, Cr 0.9, Glucose 280, Bicarb 14 (improving)',
    ABG: 'pH 7.24, pCO2 28, HCO3 14',
    ketones: 'Large serum ketones',
    CBC: 'WBC 13.2, Hgb 14.1'
  },
  orders: {
    correct: [
      { id: 'mannitol-dka2', name: 'Mannitol 0.5–1 g/kg IV bolus STAT', rationale: 'First-line for cerebral edema in DKA. Osmotic diuresis reduces cerebral edema urgently. Do NOT delay for imaging.' },
      { id: 'hts-dka2', name: 'Hypertonic saline 3% 5–10 mL/kg if no mannitol available', rationale: 'Equivalent alternative to mannitol for cerebral edema in pediatric DKA' },
      { id: 'slow-fluids-dka2', name: 'Slow IV fluid rate immediately — reduce by 50%', rationale: 'Rapid fluid administration is the primary driver of cerebral edema in DKA. Slow, do not stop.' },
      { id: 'hob-dka2', name: 'HOB 30°, minimal stimulation, dim room', rationale: 'Reduce ICP and cerebral metabolic demand' },
      { id: 'picu-dka2', name: 'PICU transfer — continuous neuro monitoring', rationale: 'Cerebral edema in DKA carries 20–25% mortality. Requires ICU-level care.' },
      { id: 'ct-dka2', name: 'Non-contrast CT head AFTER stabilization — not before mannitol', rationale: 'Clinical diagnosis — treat first. CT confirms but must not delay mannitol.' }
    ],
    incorrect: [
      { id: 'increase-insulin-dka2', name: 'Increase insulin drip — glucose still elevated', rationale: 'Do NOT increase insulin during neurological deterioration. Rapid glucose correction drives osmotic shifts worsening cerebral edema.' },
      { id: 'bolus-fluids-dka2', name: 'Give another NS bolus — patient looks dehydrated', rationale: 'DANGEROUS — aggressive fluid administration is the #1 cause of cerebral edema in DKA. Slow fluids, do not bolus.' },
      { id: 'bicarb-dka2', name: 'Give sodium bicarbonate — pH still low', rationale: 'Bicarb is contraindicated in DKA cerebral edema — paradoxical CSF acidosis, rapid osmotic shift. Associated with worse outcomes.' }
    ]
  },

  teachingPoints: {
    keyLearning: ['Cerebral edema is the most feared DKA complication (0.5-1% of pediatric DKA) with 20-40% mortality. Risk factors: younger age, new-onset DM, severe acidosis (pH <7.1), high BUN, aggressive fluid resuscitation, failure of glucose to fall appropriately.','TREAT FIRST, image second. Mannitol 0.5-1 g/kg IV OR hypertonic saline (3% NaCl 5-10 mL/kg) the moment cerebral edema is suspected (declining GCS, bradycardia, Cushing triad, new headache during treatment). Do NOT wait for CT to treat.','Insulin rate: do NOT reduce insulin rate when glucose falls to 250-300 — add dextrose to the fluid instead (D5 or D10 with NS). Reducing insulin risks DKA relapse. The glucose correction rate should be 50-100 mg/dL/hr — faster drops increase cerebral edema risk.'],
    boardPearls: ['Paradoxical worsening during DKA treatment = cerebral edema until proven otherwise. The improving acidosis + declining glucose should be accompanied by improving consciousness — deterioration during treatment is an emergency.','Bicarbonate administration in DKA: controversial and generally avoided — may worsen CSF acidosis and worsen cerebral edema risk. Do not give bicarb for pH >6.9.','"Two-bag system" for DKA fluid management: run two bags simultaneously (one NS, one D10-NS) and adjust ratio to maintain glucose 150-250 mg/dL while keeping insulin rate constant.']
  },
};
