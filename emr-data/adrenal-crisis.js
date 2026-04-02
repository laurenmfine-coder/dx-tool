window.CASES = window.CASES || {};
window.CASES['adrenal-disorders'] = {
  id: 'adrenal-disorders', name: 'Sandra Obi', age: '44F', dob: '1981-09-12',
  mrn: 'RDX-2026-81334', setting: 'ED → MICU',
  chiefComplaint: 'Hypotension refractory to fluids + nausea/vomiting — known Addison disease, out of medication',
  diagnosis: 'Acute Adrenal Crisis — Primary Adrenal Insufficiency (Addison Disease)',
  category: 'endocrine', acuity: 1,
  presentation: {
    hpi: '44F with Addison disease (primary adrenal insufficiency, on hydrocortisone + fludrocortisone) ran out of medications 5 days ago. Now with nausea/vomiting, severe weakness, abdominal pain, hypotension despite 2L NS in the field (BP still 74/44). She has hyperpigmentation (increased ACTH driving melanocyte-stimulating hormone). Electrolytes: Na 124 (hyponatremia from aldosterone deficiency), K 6.1 (hyperkalemia), glucose 48.',
    pmh: ['Primary adrenal insufficiency (Addison disease) — diagnosed 3 years ago', 'Autoimmune thyroiditis (associated)'],
    meds: ['Hydrocortisone 20mg AM/10mg PM (RAN OUT)', 'Fludrocortisone 0.1mg daily (RAN OUT)'],
    allergies: ['NKDA']
  },
  vitals: { BP: '74/44', HR: '126', RR: '22', Temp: '37.8°C', SpO2: '97%' },
  labs: {
    'BMP': 'Na 124 (L) | K 6.1 (H) | Glucose 48 (L) | Cr 2.1 (H — prerenal)',
    'Cortisol (random)': '2.1 mcg/dL (critically low — normal stress response >18)',
    'ACTH': '840 pg/mL (H — primary adrenal insufficiency: low cortisol + high ACTH)',
    'CBC': 'WBC 14.2 (eosinophilia — classic in adrenal insufficiency)'
  },
  orders: {
    correct: [
      { id: 'hydrocort-crisis', name: 'Hydrocortisone 100mg IV STAT, then 50-100mg IV q6-8h', rationale: 'Adrenal crisis is a life-threatening emergency. Give hydrocortisone immediately — do not wait for cortisol results if clinical suspicion high. Hydrocortisone has mineralocorticoid activity at high doses so fludrocortisone not needed acutely.' },
      { id: 'd50-crisis', name: 'Dextrose 50% 25-50mL IV — glucose 48', rationale: 'Hypoglycemia in adrenal crisis from cortisol deficiency (cortisol is gluconeogenic). Treat immediately with IV dextrose while drawing labs.' },
      { id: 'ivf-crisis', name: '1L NS bolus, then 0.9% NS at 500mL/hr — Na 124, hypovolemic shock', rationale: 'Normal saline corrects hypovolemia AND hyponatremia (aldosterone deficiency). Avoid hypotonic fluids which worsen hyponatremia. Vasopressors will NOT work until cortisol is replaced.' },
      { id: 'sick-day-rules', name: 'Discharge with education: sick day rules — double/triple hydrocortisone dose with any illness, IM kit for emergencies', rationale: 'Adrenal crisis prevention: "sick day rules" — double hydrocortisone for fever/illness, triple for vomiting/surgical stress. Must have IM hydrocortisone 100mg kit at home (with injection training for patient and family).' }
    ],
    incorrect: [
      { id: 'vasopressors-first', name: 'Start norepinephrine — BP 74/44 refractory to fluids', rationale: 'Vasopressors without cortisol replacement will fail in adrenal crisis. Cortisol is required for vascular responsiveness to catecholamines. The hypotension will not respond until hydrocortisone is given. Start steroids first.' },
      { id: 'wait-cortisol', name: 'Wait for cortisol level before giving steroids — must confirm diagnosis', rationale: 'Adrenal crisis is a life-threatening emergency. Draw cortisol and ACTH simultaneously, then give hydrocortisone immediately without waiting for results. If you need to do a cosyntropin stimulation test, give hydrocortisone AFTER the 30/60-min cortisol sample is drawn (it does not cross-react with the assay — dexamethasone is an alternative if you want to test and treat simultaneously).' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Adrenal crisis: give hydrocortisone 100mg IV STAT — do not wait for lab results if clinical suspicion high. The classic electrolyte triad: hyponatremia + hyperkalemia + hypoglycemia.',
      'Primary vs secondary adrenal insufficiency: primary (Addison) = low cortisol + HIGH ACTH + electrolyte abnormalities (aldosterone deficiency) + hyperpigmentation. Secondary (pituitary) = low cortisol + low ACTH + NO electrolyte abnormalities (aldosterone preserved) + no hyperpigmentation.',
      'Vasopressors require cortisol to work — vascular catecholamine responsiveness depends on cortisol. Give steroids first in refractory shock.',
      'Sick day rules are lifesaving: all Addison patients need an IM hydrocortisone emergency kit and training on sick day dosing.'
    ],
    boardPearls: [
      'Most common cause of primary adrenal insufficiency in developed world: autoimmune (Addison disease). In developing world: tuberculosis (TB adrenalitis — calcifications on CT).',
      'Waterhouse-Friderichsen syndrome: bilateral adrenal hemorrhage from meningococcemia → acute adrenal crisis in previously normal patient.',
      'Cosyntropin (ACTH stimulation) test: baseline cortisol, give 250mcg cosyntropin IV, cortisol at 30 and 60 min. Peak <18 mcg/dL = adrenal insufficiency. Cannot distinguish primary from secondary (both fail to stimulate).',
      'Autoimmune polyendocrine syndrome type 2 (Schmidt syndrome): Addison + Hashimoto/T1DM + other autoimmune conditions. Screen Addison patients for thyroid disease and DM.'
    ]
  },
  references: [{ id: 'StatPearls-AdrenalCrisis', title: 'Acute Adrenal Crisis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK441933/', openAccess: true }]
};
