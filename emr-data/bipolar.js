window.CASES = window.CASES || {};
window.CASES['bipolar'] = {
  id: 'bipolar', name: 'Vanessa Reed', age: '28F', dob: '1997-03-14',
  mrn: 'RDX-2026-54221', setting: 'Inpatient Psychiatry',
  chiefComplaint: 'Brought by police — 5 days no sleep, spending $40,000, believes she is a prophet',
  diagnosis: 'Bipolar I Disorder — Acute Manic Episode with Psychotic Features',
  category: 'psychiatric', acuity: 2,
  presentation: {
    hpi: '28F, known bipolar I on lithium, stopped her medications 2 weeks ago ("felt fine"). 5 days: no sleep, racing thoughts, pressured speech, hypersexuality, spending $40,000 on credit cards (grandiosity + poor judgment), believes she has been chosen by God to heal the sick. Brought by police after disrupting a church service. Young-Mania Rating Scale (YMRS): 42 (severe — >30).',
    pmh: ['Bipolar I disorder — diagnosed age 22', '2 prior hospitalizations for mania'],
    meds: ['Lithium 900mg BID (stopped 2 weeks ago)'], allergies: ['NKDA']
  },
  vitals: { BP: '128/76', HR: '104', RR: '16', Temp: '37.0°C', SpO2: '99%', GCS: '15 (pressured speech, flight of ideas)' },
  labs: {
    'Lithium level': '<0.1 mEq/L (subtherapeutic — stopped)',
    'TSH': 'Normal (lithium-induced hypothyroidism excluded — she was on lithium)',
    'Urine drug screen': 'Negative',
    'BMP': 'Normal', 'CBC': 'Normal', 'β-hCG': 'Negative'
  },
  orders: {
    correct: [
      { id: 'restart-lithium', name: 'Restart lithium 900mg BID — recheck level in 5 days (target 0.8-1.2 mEq/L for acute mania)', rationale: 'Lithium is first-line for bipolar I mania and long-term prophylaxis. Target level 0.8-1.2 mEq/L for acute mania, 0.6-0.8 for maintenance. Monitor: renal function, thyroid, lithium level. Toxicity: narrow therapeutic index — toxicity at >1.5 (tremor, GI) and >2.0 (ataxia, encephalopathy, seizures).' },
      { id: 'antipsychotic-mania', name: 'Olanzapine 10mg IM/PO or risperidone 2mg BID — acute psychotic features', rationale: 'Antipsychotics are used adjunctively for acute mania with psychotic features and provide faster symptom control than mood stabilizers alone. Atypical antipsychotics (olanzapine, risperidone, quetiapine, aripiprazole) are FDA-approved for bipolar mania.' },
      { id: 'benzo-mania', name: 'Lorazepam 2mg IM/PO PRN — for severe agitation and safety', rationale: 'Benzodiazepines provide rapid sedation for acutely agitated manic patients. Not a mood stabilizer — adjunct for acute agitation only.' },
      { id: 'safe-environment', name: 'Safety measures: remove credit cards, phone, limit outside contacts during acute mania', rationale: 'Manic patients have profoundly impaired judgment. Protect from financial harm, hypersexuality-related consequences, and safety risks during hospitalization.' }
    ],
    incorrect: [
      { id: 'ssri-bipolar', name: 'Start sertraline — she seems depressed underneath the mania', rationale: 'SSRIs can precipitate or worsen mania, mixed states, and rapid cycling in bipolar disorder. NEVER start an antidepressant without mood stabilizer cover in a bipolar patient. Antidepressants are controversial even in bipolar depression.' },
      { id: 'discharge-mania', name: 'Discharge with follow-up — she refuses admission, voluntary admission not possible', rationale: 'Acute mania with psychotic features + inability to care for self + significant harm from impulsive decisions = criteria for involuntary psychiatric hold in most jurisdictions. Her judgment is impaired by the illness itself — this is a medical emergency.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Bipolar I: requires at least ONE manic episode (≥7 days, or any duration if hospitalized). Bipolar II: hypomanic episodes (4+ days) + major depressive episodes — no full mania.',
      'Acute mania treatment: lithium OR valproate OR atypical antipsychotic (all FDA-approved). Antipsychotics work faster for acute symptoms. Benzodiazepines for agitation adjunct.',
      'SSRIs are CONTRAINDICATED in active mania and should not be started in bipolar without mood stabilizer coverage. They precipitate mania, mixed states, and rapid cycling.',
      'Lithium toxicity: >1.5 = tremor, GI upset; >2.0 = ataxia, confusion, encephalopathy, seizures, death. Lithium has zero therapeutic window — needs regular monitoring. NSAIDs and thiazides increase lithium levels.'
    ],
    boardPearls: [
      'Valproate in bipolar: teratogenic (neural tube defects, fetal valproate syndrome) — avoid in women of childbearing age without reliable contraception.',
      'Lamotrigine: excellent for bipolar depression maintenance but NOT effective for acute mania. Rash risk (including SJS) — slow titration is mandatory.',
      'Lithium side effects: polyuria/polydipsia (nephrogenic DI), hypothyroidism (25%), weight gain, tremor, cognitive dulling, acne, psoriasis. Long-term: renal impairment.',
      'Rapid cycling: ≥4 mood episodes/year. Risk factors: antidepressants, hypothyroidism, substance use. Treatment: lithium + valproate combination.'
    ]
  },
  references: [{ id: 'StatPearls-Bipolar', title: 'Bipolar Disorder', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK519566/', openAccess: true }]
};
