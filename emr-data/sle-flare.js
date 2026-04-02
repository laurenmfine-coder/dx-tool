window.CASES = window.CASES || {};
window.CASES['sle'] = {
  id: 'sle', name: 'Diana Morales', age: '26F', dob: '1999-06-21',
  mrn: 'RDX-2026-28841', setting: 'Nephrology / Rheumatology',
  chiefComplaint: 'Fatigue, facial rash, proteinuria 4+, Cr rising — new lupus diagnosis',
  diagnosis: 'Systemic Lupus Erythematosus with Class III Lupus Nephritis',
  category: 'rheumatologic', acuity: 2,
  presentation: {
    hpi: '26F, Black woman (highest SLE risk), 3 months: fatigue, butterfly rash, hair loss, joint pain (symmetric, non-erosive). Developed foamy urine and ankle edema. Cr 1.8. UA: RBC casts + 4+ proteinuria (3.8g/24h). ANA 1:640 (speckled), anti-dsDNA 480 (H), anti-Sm positive, C3 48 (L), C4 12 (L), direct Coombs positive (hemolytic anemia). SLEDAI-2K score: 22 (severe active disease). Renal biopsy: Class III focal proliferative lupus nephritis.',
    pmh: ['No prior autoimmune history'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '158/98', HR: '88', RR: '16', Temp: '37.4°C', SpO2: '99%' },
  labs: {
    'Serology': 'ANA 1:640 speckled | anti-dsDNA 480 (H — high specificity for SLE + disease activity) | anti-Sm positive (highly specific for SLE) | C3 48 (L) | C4 12 (L) — complement consumption = active disease',
    'UA + renal': 'Protein 4+ | RBC casts | 24h protein 3.8g (nephrotic range) | Cr 1.8',
    'CBC': 'WBC 2,800 (L — lymphopenia) | Hgb 9.2 (L — hemolytic anemia, Coombs+) | Plt 88 (L — thrombocytopenia)',
    'Renal biopsy': 'Class III focal proliferative lupus nephritis — mesangial + endocapillary hypercellularity + immune deposits (IgG, C3, C1q — "full house")',
    'APS screen': 'Anticardiolipin antibody: weakly positive — repeat in 12 weeks'
  },
  orders: {
    correct: [
      { id: 'hcq-sle', name: 'Hydroxychloroquine 5mg/kg/day (max 400mg/day) — start immediately, continue lifelong', rationale: 'Hydroxychloroquine is the backbone of SLE therapy — reduces flares, organ damage, mortality, and thrombosis risk. Should be started in ALL SLE patients without contraindication. Annual ophthalmology screening after 5 years (retinal toxicity risk).' },
      { id: 'mmf-sle', name: 'Mycophenolate mofetil 2-3g/day — induction for Class III LN (ASPREVA trial)', rationale: 'MMF is first-line induction therapy for Class III-IV lupus nephritis (equivalent to cyclophosphamide, better tolerated, preserves fertility). ASPREVA trial: MMF = cyclophosphamide for induction. Use for 6 months induction → 1-3g maintenance.' },
      { id: 'steroids-sle', name: 'Methylprednisolone 500mg IV × 3 days ("pulse") then prednisone 0.5-1mg/kg/day', rationale: 'IV pulse steroids for severe organ-threatening SLE (lupus nephritis Class III-IV). Followed by oral prednisone taper. Goal: steroid-free remission maintained by immunosuppression.' },
      { id: 'belimumab-sle', name: 'Consider belimumab (BLyS inhibitor) adjunct — if inadequate response to standard therapy', rationale: 'Belimumab (anti-BLyS): FDA-approved for active SLE + lupus nephritis. Reduces flares and organ damage. Add to MMF + HCQ if inadequate response at 6 months.' },
      { id: 'bp-sle', name: 'ACEi (lisinopril) — BP <130/80 target + renoprotection for lupus nephritis', rationale: 'ACEi/ARB mandatory for lupus nephritis: antiproteinuric + renoprotective + BP control. Target BP <130/80 in LN.' }
    ],
    incorrect: [
      { id: 'nsaids-sle', name: 'Ibuprofen for joint pain — avoid steroids', rationale: 'NSAIDs can be used for mild SLE musculoskeletal symptoms but worsen renal function in lupus nephritis (reduce GFR via prostaglandin inhibition). Contraindicated in active LN with elevated Cr.' },
      { id: 'no-hcq', name: 'Skip hydroxychloroquine — she has severe disease, it won\'t help enough', rationale: 'HCQ is fundamental regardless of disease severity. It reduces lupus-related mortality by 30%, prevents flares, protects against thrombosis (especially important with positive APS antibodies), and improves long-term outcomes. Never omit.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'SLE diagnosis: ≥4 of 11 ACR criteria or SLICC criteria (more sensitive). Anti-dsDNA and anti-Sm are HIGHLY SPECIFIC for SLE (not just sensitive). Low complement (C3, C4) indicates active disease.',
      'Hydroxychloroquine is lifelong for ALL SLE patients — reduces mortality, flares, thrombosis, and organ damage. Annual eye exam after 5 years.',
      'Lupus nephritis classes: I-II (minimal/mesangial), III (focal proliferative), IV (diffuse proliferative — most severe), V (membranous), VI (advanced sclerosis). Renal biopsy determines class and drives treatment.',
      '"Full house" immunofluorescence (IgG, IgM, IgA, C3, C1q) is pathognomonic for lupus nephritis on renal biopsy.'
    ],
    boardPearls: [
      'Drug-induced lupus: procainamide, hydralazine, isoniazid, minocycline. Anti-histone antibodies positive. ANA positive but anti-dsDNA negative. Resolves when drug stopped.',
      'SLE + pregnancy: anti-Ro/SSA antibodies → neonatal lupus + congenital heart block (fetal third-degree AVB — check maternal anti-Ro in ALL pregnant SLE patients).',
      'Antiphospholipid syndrome in SLE: anticardiolipin + anti-β2GP1 + lupus anticoagulant → arterial/venous thrombosis + pregnancy loss. Warfarin for thrombotic APS (NOT DOACs).',
      'SLE prognosis: "rule of one-third" — 1/3 mild disease, 1/3 moderate, 1/3 severe. Major causes of death: infection (immunosuppression), cardiovascular disease, renal failure.'
    ]
  },
  references: [{ id: 'StatPearls-SLE', title: 'Systemic Lupus Erythematosus', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK535405/', openAccess: true }]
};
