window.CASES = window.CASES || {};
window.CASES['thyroid-deep-dive'] = {
  id: 'thyroid-deep-dive', name: 'Maria Chen', age: '38F', dob: '1987-02-14',
  mrn: 'RDX-2026-39921', setting: 'ED → MICU',
  chiefComplaint: 'Fever 40.2°C + HR 148 + confusion + known hyperthyroidism post-surgery',
  diagnosis: 'Thyroid Storm (Burch-Wartofsky Score 60 — Likely Thyroid Storm)',
  category: 'endocrine', acuity: 1,
  presentation: {
    hpi: '38F with Graves disease, underwent thyroid surgery 2 days ago. Now: Temp 40.2°C, HR 148 (atrial fibrillation), confusion (agitated), profuse diaphoresis, diarrhea. Burch-Wartofsky Point Scale (BWPS): temp 40.2°C (20pts) + HR 148 (25pts) + CNS dysfunction — agitated (10pts) + GI symptoms (10pts) = 65 points (≥45 = thyroid storm). TSH undetectable, free T4 >8.0.',
    pmh: ['Graves disease — on methimazole pre-op (stopped pre-surgery)', 'Post-thyroid surgery day 2'],
    meds: ['Methimazole (held pre-op and not restarted)'], allergies: ['NKDA']
  },
  vitals: { BP: '168/82', HR: '148 (AF)', RR: '24', Temp: '40.2°C', SpO2: '94%' },
  labs: {
    'TSH': 'Undetectable (<0.01 mIU/L)',
    'Free T4': '>8.0 ng/dL (H — markedly elevated)',
    'Free T3': '18.4 pg/mL (H)',
    'CBC': 'WBC 14.8 (H — stress leukocytosis), Hgb 12.4',
    'BMP': 'Na 132 (L), Glucose 188 (H), Ca 6.8 (L — post-surgical hypoparathyroidism also developing)',
    'LFTs': 'AST 88, ALT 72 (mildly elevated — thyroid storm hepatopathy)'
  },
  orders: {
    correct: [
      { id: 'ptu-storm', name: 'Propylthiouracil (PTU) 500-1000mg PO/NG loading, then 250mg q4h — blocks synthesis AND peripheral T4→T3 conversion', rationale: 'PTU is preferred over methimazole in thyroid storm because it also blocks peripheral T4→T3 conversion (methimazole only blocks synthesis). NG tube if cannot swallow. Dose aggressively.' },
      { id: 'iodine-storm', name: 'Lugol\'s iodine 5-10 drops TID OR SSKI — given ≥1 HOUR AFTER PTU', rationale: 'Iodine (Wolff-Chaikoff effect) blocks thyroid hormone release. MUST be given at least 1 hour after PTU — if given first, iodine provides substrate for MORE hormone synthesis. Wait for PTU to block synthesis first.' },
      { id: 'betablocker-storm', name: 'Propranolol 60-80mg PO q4h OR IV — controls adrenergic symptoms AND blocks T4→T3 conversion', rationale: 'Beta-blockade rapidly controls tachycardia, hypertension, diaphoresis, tremor. Propranolol specifically also blocks T4→T3 peripheral conversion. Treat HR <100. Use IV if cannot take PO.' },
      { id: 'hydrocortisone-storm', name: 'Hydrocortisone 300mg IV loading, then 100mg q8h — blocks T4→T3 AND treats relative adrenal insufficiency', rationale: 'Steroids: (1) block peripheral T4→T3 conversion, (2) treat possible relative adrenal insufficiency (thyroid storm increases cortisol demand), (3) may have anti-inflammatory effects. Part of the "four-drug" thyroid storm protocol.' }
    ],
    incorrect: [
      { id: 'iodine-first', name: 'Start Lugol\'s iodine immediately — it rapidly blocks hormone release', rationale: 'WRONG ORDER — iodine given before a thionamide provides substrate for more thyroid hormone synthesis ("iodine steal" — Jod-Basedow effect). Always give PTU or methimazole ≥1 hour before iodine.' },
      { id: 'methimazole-storm', name: 'Methimazole 20mg q6h — standard Graves disease treatment', rationale: 'Methimazole is first-line for non-urgent Graves disease, but in thyroid storm, PTU is preferred because it also inhibits peripheral T4→T3 conversion. In pregnancy, PTU is also first-line (first trimester — methimazole causes aplasia cutis).' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Thyroid storm Burch-Wartofsky score: temperature (10-30pts) + CNS effects (10-35pts) + GI symptoms (10pts) + cardiovascular (5-25pts) + precipitant (0 or 10pts). Score ≥45 = likely thyroid storm; ≥25 = impending.',
      'Four-drug thyroid storm protocol: (1) PTU (blocks synthesis + T4→T3 conversion), (2) iodine ≥1h AFTER PTU, (3) beta-blocker (propranolol — also blocks T4→T3), (4) corticosteroids (blocks T4→T3 + relative adrenal insufficiency).',
      'Iodine must be given AFTER PTU — giving iodine first provides substrate for massive hormone synthesis. Wait ≥1 hour.',
      'Common precipitants of thyroid storm: surgery, infection, contrast dye, radioactive iodine treatment, trauma, childbirth.'
    ],
    boardPearls: [
      'Graves disease: TSH-receptor stimulating antibodies (TRAb/TSI) → autonomous thyroid stimulation. Triad: hyperthyroidism + exophthalmos + pretibial myxedema.',
      'Treatment options for Graves: (1) thionamides (PTU or methimazole — not curative), (2) radioactive iodine (RAI — contraindicated in pregnancy, worsens ophthalmopathy), (3) thyroidectomy.',
      'Myxedema coma: hypothyroidism crisis — hypothermia + bradycardia + altered consciousness. Treatment: IV levothyroxine + IV liothyronine (T3) + hydrocortisone (coexisting adrenal insufficiency).',
      'Sick euthyroid syndrome: TSH and T4 decreased in critically ill patients — do NOT treat unless true primary thyroid disease. Treatment worsens outcomes.'
    ]
  },
  references: [{ id: 'StatPearls-ThyroidStorm', title: 'Thyroid Storm', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470224/', openAccess: true }]
};
