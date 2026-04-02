window.CASES = window.CASES || {};
window.CASES['celiac'] = {
  id: 'celiac', name: 'Anna Kowalski', age: '28F', dob: '1997-05-03',
  mrn: 'RDX-2026-31228', setting: 'GI Clinic',
  chiefComplaint: 'Chronic diarrhea + iron deficiency anemia + rash — anti-tTG IgA markedly elevated',
  diagnosis: 'Celiac Disease — Confirmed by Serology + Duodenal Biopsy',
  category: 'gastrointestinal', acuity: 3,
  presentation: {
    hpi: '28F with 3 years of chronic diarrhea (4-6 loose stools/day), bloating, fatigue, and a pruritic vesicular rash on elbows (dermatitis herpetiformis). Iron deficiency anemia (Hgb 9.8, ferritin 4). She was told she has IBS for 2 years. Anti-tTG IgA: 480 U/mL (markedly elevated — >10 U/mL is positive). HLA-DQ2 positive. IgA level normal (not deficient — would cause false-negative tTG). Duodenal biopsy (4 samples from D2/D3): Marsh Grade 3b (villous atrophy + crypt hyperplasia + intraepithelial lymphocytes).',
    pmh: ['Hypothyroidism (Hashimoto — autoimmune association)', 'Iron deficiency anemia × 3 years'],
    meds: ['Levothyroxine'], allergies: ['NKDA']
  },
  vitals: { BP: '114/72', HR: '88', RR: '14', Temp: '37.0°C', SpO2: '99%' },
  labs: {
    'Anti-tTG IgA': '480 U/mL (markedly H — highly specific for celiac)',
    'Anti-endomysial IgA': 'Positive (high specificity)',
    'Total IgA': 'Normal (IgA deficiency excluded — would cause false negative tTG)',
    'HLA typing': 'HLA-DQ2 positive (95% of celiac patients are DQ2 or DQ8)',
    'CBC': 'Hgb 9.8 (L), MCV 72 (L — iron deficiency from malabsorption)',
    'Ferritin': '4 ng/mL (L)', 'B12': '148 pg/mL (L — B12 malabsorption)',
    'Duodenal biopsy (D2-D3, 4 samples)': 'Marsh Grade 3b: subtotal villous atrophy + crypt hyperplasia + >25 IELs per 100 enterocytes'
  },
  orders: {
    correct: [
      { id: 'gfd-celiac', name: 'Strict lifelong gluten-free diet (GFD) — elimination of all wheat, barley, rye, and contaminated oats', rationale: 'The ONLY treatment for celiac disease is strict lifelong gluten-free diet. Even trace amounts of gluten (cross-contamination) can perpetuate intestinal damage. Dietitian referral mandatory.' },
      { id: 'supplement-celiac', name: 'Iron, B12, folate, vitamin D, calcium supplementation — malabsorption has depleted stores', rationale: 'Celiac causes malabsorption of fat-soluble vitamins (A, D, E, K), iron, folate, B12, zinc. Supplement based on deficiency. Re-check after 6-12 months on GFD.' },
      { id: 'followup-serology', name: 'Repeat anti-tTG IgA at 6 months and 12 months — confirms dietary adherence', rationale: 'Anti-tTG levels should normalize within 12 months on strict GFD. Persistent elevation = dietary gluten exposure (deliberate or inadvertent). Most common reason for treatment failure is dietary non-adherence.' },
      { id: 'dh-treatment', name: 'Dapsone for dermatitis herpetiformis + GFD', rationale: 'Dermatitis herpetiformis (DH): intensely pruritic vesicular rash on extensor surfaces (elbows, knees, buttocks) — a skin manifestation of celiac. IgA deposits in dermal papillae on immunofluorescence. Treatment: GFD (slow response) + dapsone (rapid symptom relief).' }
    ],
    incorrect: [
      { id: 'steroids-celiac', name: 'Prednisone — autoimmune intestinal disease', rationale: 'Steroids are NOT indicated for celiac disease. GFD is the treatment. Steroids are used for refractory celiac disease (RCD) type 2 only — a rare complication at high risk for enteropathy-associated T-cell lymphoma.' },
      { id: 'diagnose-without-biopsy', name: 'Diagnose from serology alone — anti-tTG 480 is definitive', rationale: 'Biopsy confirmation is recommended for most adults even with markedly elevated tTG (European guidelines now allow diagnosis without biopsy in adults if tTG ≥10× ULN + positive EMA + compatible HLA — check current guidelines). For pediatrics: European Society (ESPGHAN) allows avoiding biopsy with tTG ≥10× + EMA + symptoms. Always check institution guidelines.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Celiac disease screening: anti-tTG IgA (first-line, most cost-effective) — but check total IgA level simultaneously (IgA deficiency in 2% of celiac causes false-negative tTG). If IgA deficient: use anti-DGP IgG or anti-tTG IgG.',
      'Diagnosis requires: positive serology + duodenal biopsy (Marsh ≥3) while ON a gluten-containing diet. Never start GFD before biopsy.',
      'Dermatitis herpetiformis: pruritic vesicular rash + celiac disease. IgA deposits at dermoepidermal junction. Responds to dapsone + GFD.',
      'Refractory celiac disease: persistent villous atrophy despite strict GFD × 12 months. Type 2 (clonal IEL population) → risk of enteropathy-associated T-cell lymphoma (EATL) — a rare but serious complication.'
    ],
    boardPearls: [
      'Celiac associations: T1DM, Hashimoto thyroiditis, IgA nephropathy, Down syndrome, Turner syndrome, primary biliary cholangitis, other autoimmune diseases.',
      'HLA-DQ2 (95%) and HLA-DQ8 (5%) are necessary but not sufficient for celiac — 30% of the general population carries DQ2/DQ8 but only 1% develop celiac. Negative HLA excludes celiac.',
      'Non-celiac gluten sensitivity (NCGS): gluten-related symptoms WITHOUT celiac serology/biopsy findings. HLA DQ2/DQ8 present in 50%. Mechanism unclear — may involve FODMAPs rather than gluten itself.',
      'Wheat allergy: IgE-mediated (immediate, within 2 hours). Celiac: T-cell mediated (delayed, villous atrophy). NCGS: unclear mechanism, no serology or biopsy findings. Three distinct entities.'
    ]
  },
  references: [{ id: 'StatPearls-Celiac', title: 'Celiac Disease', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK441900/', openAccess: true }]
};
