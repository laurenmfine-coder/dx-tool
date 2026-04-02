window.CASES = window.CASES || {};
window.CASES['peds-dka'] = {
  id: 'peds-dka', name: 'Tyler Nguyen', age: '9M', dob: '2016-11-03',
  mrn: 'RDX-2026-93312', setting: 'Pediatric ED → PICU',
  chiefComplaint: 'New-onset T1DM — glucose 612, pH 7.12, lethargy — 9-year-old',
  diagnosis: 'Pediatric DKA — New-Onset Type 1 Diabetes with Cerebral Edema Risk',
  category: 'pediatric', acuity: 1,
  presentation: {
    hpi: '9-year-old boy, 3 weeks of polyuria, polydipsia, 8-lb weight loss — new-onset T1DM. Today: vomiting, lethargy, deep labored breathing (Kussmaul). Glucose 612, pH 7.12, bicarb 6, anion gap 31, ketones large. Weight 30 kg. He is lethargic but arousable (GCS 12). No IV insulin has been started. No fluid boluses given yet.',
    pmh: ['No prior DM history', 'Family history: mother T1DM'],
    meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '98/62', HR: '124', RR: '28 (Kussmaul)', Temp: '37.4°C', SpO2: '98%', GCS: '12', Weight: '30 kg' },
  labs: {
    'Glucose': '612 mg/dL (H)',
    'ABG': 'pH 7.12 | HCO3 6 | PaCO2 16 (compensatory Kussmaul) | SEVERE DKA',
    'BMP': 'Na 128 (corrected Na = 128 + 1.6×((612-100)/100) = 128 + 8.2 = 136 — normal) | K 5.8 (H — total body K depleted but ECF hyperkalemic) | Cr 1.4 | Anion gap 31 (H)',
    'Urine ketones': 'Large | Glucose: >2000'
  },
  orders: {
    correct: [
      { id: 'fluids-peds-dka', name: 'IV fluid: 10 mL/kg NS over 1 hour — DO NOT exceed 10-20 mL/kg in first hour', rationale: 'Pediatric DKA: fluid resuscitation must be controlled. Unlike adult DKA, aggressive boluses (>20 mL/kg) increase cerebral edema risk. ADA 2023 pediatric guidelines: 10 mL/kg NS over 1h for dehydrated but not shocked. After initial bolus: replace estimated deficit over 48h — NOT 24h.' },
      { id: 'insulin-peds-dka', name: 'Insulin infusion 0.05-0.1 units/kg/hr — start 1-2 hours AFTER fluid resuscitation', rationale: 'In pediatric DKA: do NOT start insulin before adequate fluid resuscitation (increases hypertonicity and cerebral edema risk). Start insulin at 0.05-0.1 u/kg/hr (lower dose than adults). DO NOT give IV insulin bolus — increases cerebral edema risk.' },
      { id: 'two-bag-peds', name: '2-bag system: D5NS and NS run in parallel — titrate glucose to drop 50-100 mg/dL/hr', rationale: '2-bag system: one bag with dextrose (D5NS or D10NS), one without. Blend to titrate glucose drop rate to 50-100 mg/dL/hr. When glucose reaches 250-300: switch to dextrose-containing fluid to prevent hypoglycemia while continuing insulin for ketosis resolution.' },
      { id: 'k-peds-dka', name: 'Add potassium 40 mEq/L to fluids when urine output confirmed and K <5.5', rationale: 'Total body K is severely depleted despite hyperkalemic labs (insulin + acidosis correction will drop K rapidly). Add K to fluids as soon as urine output confirmed. Cardiac monitoring.' },
      { id: 'cerebral-edema-watch', name: 'Hourly neuro checks — cerebral edema: headache + bradycardia + hypertension + declining GCS = mannitol 0.5-1g/kg STAT', rationale: 'Cerebral edema: most feared complication of pediatric DKA, occurring hours into treatment. Risk factors: new-onset, younger age, severe acidosis, high BUN, rapid fluid correction. Treat preemptively: slow fluids, avoid rapid osmolarity changes. If suspected: mannitol or 3% saline.' }
    ],
    incorrect: [
      { id: 'bolus-insulin-peds', name: 'Give insulin 0.1 units/kg IV bolus before starting infusion', rationale: 'IV insulin bolus is CONTRAINDICATED in pediatric DKA — increases risk of cerebral edema. Start infusion only, no bolus. Additionally: start insulin only after 1-2 hours of fluid resuscitation.' },
      { id: 'aggressive-fluids-peds', name: '30 mL/kg NS bolus — patient is severely dehydrated', rationale: 'Aggressive fluid boluses in pediatric DKA increase cerebral edema risk. Maximum initial bolus is 10-20 mL/kg unless hemodynamic shock. Calculate and replace deficit over 48h (not 24h).' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Pediatric DKA differs from adult: smaller fluid boluses (10 mL/kg max), lower insulin dose (0.05-0.1 u/kg/hr), NO IV insulin bolus, deficit replaced over 48h not 24h — all to minimize cerebral edema risk.',
      'Cerebral edema in peds DKA: occurs hours after treatment starts, associated with rapid fluid correction + rapid glucose fall + young age + new-onset. Treat with mannitol or 3% saline.',
      '2-bag insulin system: allows glucose-rate titration without changing insulin infusion. Target glucose drop 50-100 mg/dL/hr.',
      'Resolution of DKA: pH >7.30 AND bicarb >15 AND anion gap closed AND ketones clearing — not glucose normalization alone.'
    ],
    boardPearls: [
      'Corrected sodium in DKA: corrected Na = measured Na + 1.6 × ((glucose − 100) / 100). If corrected Na low = true hyponatremia; if normal/high = appropriate dilution from hyperglycemia.',
      'Potassium: give K as soon as urine output confirmed even if K >5.5 — total body K is depleted and will drop rapidly with insulin. Hold only if K >6.0 and no UO confirmed.',
      'Cerebral edema risk factors: age <5, new-onset T1DM, severe acidosis (pH <7.1), high BUN (dehydration), bicarbonate treatment (increases CO2 and osmolarity).',
      'HHS in pediatrics: rare, usually in obese adolescents with T2DM. Glucose often >600, minimal ketosis, severe hyperosmolarity. Higher mortality than DKA in peds. Treat with slower fluid correction (longer deficit replacement period).'
    ]
  },
  references: [{ id: 'StatPearls-PedsDKA', title: 'Pediatric DKA', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK448040/', openAccess: true }]
};
