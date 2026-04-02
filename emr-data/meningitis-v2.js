/* CASE: meningitis-v2 — Emily Johnson — Day 3 Meningitis: Complications + Steroid Decision */
window.CASES = window.CASES || {};
window.CASES['meningitis-v2'] = {
  id: 'meningitis-v2', name: 'Emily Johnson', age: '27F', dob: '1999-04-06',
  mrn: 'MRN-338691', setting: 'Neuro ICU — Day 3',
  chiefComplaint: 'Day 3 bacterial meningitis — new focal deficits, CT shows communicating hydrocephalus',
  diagnosis: 'Bacterial Meningitis Complicated by Hydrocephalus and Cerebral Edema',
  category: 'neurologic', acuity: 1,
  continuityNote: 'Prior encounter: meningitis-v1 — Emily Johnson, 27F college student presenting with classic triad (fever + headache + nuchal rigidity). CSF confirmed N. meningitidis. Started ceftriaxone + dexamethasone on day 1. Blood cultures positive for N. meningitidis serogroup B.',
  presentation: {
    hpi: 'Day 3 of bacterial meningitis treatment. Emily was improving on day 2, but this morning nursing noted new left-sided weakness and she is increasingly somnolent (GCS dropping from 15 → 11). Temperature still 38.9°C despite 72h of ceftriaxone. Repeat CT head ordered. CT shows: communicating hydrocephalus (temporal horn dilation), sulcal effacement, cerebral edema. No herniation on CT but clinical signs are worsening.',
    pmh: ['Day 3 bacterial meningitis — N. meningitidis', 'No prior CNS disease'],
    meds: ['Ceftriaxone 2g IV q12h (day 3)', 'Dexamethasone 0.15 mg/kg q6h (day 3)', 'Vancomycin (added empirically pending culture sensitivities)', 'Acyclovir (empiric HSV coverage — discontinued after HSV PCR negative)']
  },
  vitals: { BP: '148/92', HR: '62', RR: '18', Temp: '38.9°C', SpO2: '97%', GCS: '11 (E3V3M5)' },
  labs: {
    'Repeat CSF (LP day 3)': 'WBC 1,840 (PMN 78% → improving from 4,200 day 1) | Protein 188 mg/dL (H) | Glucose 28 (L) | Culture: pending day 3',
    'Blood cultures (day 1)': 'N. meningitidis serogroup B — sensitive to ceftriaxone. Susceptibilities confirm: MIC 0.03 (fully sensitive).',
    'Serum Na': '128 mEq/L (H — hyponatremia) — SIADH from meningeal inflammation',
    'CT head': 'Communicating hydrocephalus — bilateral temporal horn dilation. Sulcal effacement consistent with diffuse cerebral edema. No herniation. No focal infarct on current study. MRI with contrast ordered.',
    'MRI brain with contrast': 'Diffuse leptomeningeal enhancement (expected). Left MCA territory restricted diffusion — SMALL EVOLVING LEFT MCA TERRITORY INFARCT (stroke complicating meningitis from vasculitis/vascular inflammation).'
  },
  orders: {
    correct: [
      { id: 'neurosurg-v2m', name: 'Neurosurgery consult — communicating hydrocephalus, consider external ventricular drain (EVD)', rationale: 'Communicating hydrocephalus in bacterial meningitis from impaired CSF resorption at the arachnoid villi. GCS 11 with herniation risk: neurosurgery for EVD consideration. EVD allows ICP monitoring and CSF drainage.' },
      { id: 'continue-abx', name: 'Continue ceftriaxone — organism is sensitive, do NOT switch', rationale: 'Susceptibilities confirm sensitivity (MIC 0.03). Continuing ceftriaxone is correct. Do not switch based on clinical deterioration alone — complications of meningitis (hydrocephalus, infarct) are not antibiotic failures.' },
      { id: 'dex-continue', name: 'Continue dexamethasone — benefits outweigh risks in N. meningitidis', rationale: 'Dexamethasone reduces mortality and neurological sequelae in bacterial meningitis (de Gans trial). Continue full 4-day course. Greatest benefit in pneumococcal meningitis but evidence supports use in all bacterial meningitis.' },
      { id: 'siadh-restrict', name: 'Fluid restriction 1L/day + hypertonic saline for SIADH (Na 128)', rationale: 'SIADH is a complication of meningitis from inappropriate ADH secretion. Na 128 = moderate hyponatremia. In meningitis: do NOT over-restrict fluids (risk cerebral ischemia) — use hypertonic saline to raise Na safely 1-2 mEq/hr, max 8-10 mEq/day.' },
      { id: 'stroke-neurology', name: 'Neurology consult for MCA territory infarct — antiplatelet vs anticoagulation decision', rationale: 'Stroke complicating bacterial meningitis occurs from inflammatory vasculitis, septic emboli, or cortical vein thrombosis. Antiplatelet therapy (aspirin) is typically used for arterial ischemic stroke in this context.' }
    ],
    incorrect: [
      { id: 'switch-vanco', name: 'Switch to vancomycin alone — patient deteriorating on ceftriaxone', rationale: 'Deterioration is from complications (hydrocephalus, infarct) — NOT antibiotic failure. Susceptibilities confirm ceftriaxone sensitivity. Switching to vancomycin alone (inferior CNS penetration for meningococcus) would be harmful.' },
      { id: 'stop-dex', name: 'Stop dexamethasone — patient has a stroke, steroids increase clot risk', rationale: 'Incorrect rationale. Dexamethasone reduces inflammation-related neurological damage in meningitis. The stroke is from vasculitis/emboli, not steroid-related. Stopping dexamethasone prematurely increases mortality.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Complications of bacterial meningitis (days 3-7): hydrocephalus, cerebral edema, subdural empyema, cerebral infarct (vasculitis), cranial nerve palsies, hearing loss (cochlear involvement), SIADH.',
      'Clinical deterioration on appropriate antibiotics = complication, not treatment failure. Always check for hydrocephalus, infarct, or cerebral edema before switching antibiotics.',
      'SIADH in meningitis: mild-moderate → fluid restriction. Severe (Na <125 or symptomatic) → hypertonic saline. Do NOT aggressively restrict fluids — cerebral ischemia risk.',
      'Dexamethasone full 4-day course regardless of complications. Evidence strongest for S. pneumoniae but recommended for all bacterial meningitis.'
    ],
    boardPearls: [
      'Hearing loss: most common neurological sequela of bacterial meningitis. Cochlear inflammation. Audiology testing at discharge for all patients.',
      'Meningococcal prophylaxis: all close contacts (household, kissing contacts, healthcare workers with direct exposure) → rifampin 600mg BID × 2 days OR single-dose ciprofloxacin 500mg.',
      'Waterhouse-Friderichsen syndrome: bilateral adrenal hemorrhage from meningococcemia → sudden adrenal crisis. Purpura fulminans + shock + DIC in meningococcal sepsis.',
      'Post-meningitis cognitive sequelae: executive function, memory, and hearing deficits in 30% of survivors. Neuropsychiatric follow-up recommended at 3 months.'
    ]
  },
  references: [{ id: 'StatPearls-Meningitis', title: 'Bacterial Meningitis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK351997/', openAccess: true }]
};
