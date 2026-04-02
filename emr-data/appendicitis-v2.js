/* CASE: appendicitis-v2 — Appendicitis: Antibiotics-First Decision */
window.CASES = window.CASES || {};
window.CASES['appendicitis-v2'] = {
  id: 'appendicitis-v2', name: 'Sarah Kim', age: '28F', dob: '1997-04-11',
  mrn: 'RDX-2026-33214', setting: 'ED → Surgery',
  chiefComplaint: 'Uncomplicated appendicitis on CT — patient asking about antibiotics instead of surgery',
  diagnosis: 'Uncomplicated Acute Appendicitis — Shared Decision Making: Antibiotics vs Appendectomy',
  category: 'gastrointestinal', acuity: 2,
  continuityNote: 'appendicitis-v1: Sarah Kim, 28F, RLQ pain migrating from periumbilical, nausea. Alvarado score 8. CT: dilated appendix 1.0cm with periappendiceal fat stranding, no perforation, no abscess, no fecalith. Uncomplicated appendicitis confirmed.',
  presentation: {
    hpi: '28F, uncomplicated appendicitis on CT. She is a nurse and has read about the CODA trial. She wants to discuss whether she can be treated with antibiotics instead of surgery. She is currently pain 4/10, tolerating PO, hemodynamically stable, no signs of perforation or peritonitis.',
    pmh: ['No prior abdominal surgery'], meds: ['OCP'], allergies: ['NKDA']
  },
  vitals: { BP: '118/72', HR: '84', RR: '14', Temp: '37.6°C', SpO2: '99%' },
  labs: {
    'CT Abdomen/Pelvis': 'Dilated appendix 1.0cm (normal <6mm). Periappendiceal fat stranding. No perforation. No abscess. No fecalith. No free air.',
    'CBC': 'WBC 13.8 (H), Hgb 13.4, Plt 222',
    'CRP': '44 mg/L (H — active inflammation)',
    'Alvarado Score': '8/10 — high probability appendicitis'
  },
  orders: {
    correct: [
      { id: 'coda-counseling', name: 'Shared decision-making — discuss CODA trial findings honestly', rationale: 'CODA trial (NEJM 2020): 1552 patients with CT-confirmed uncomplicated appendicitis. Antibiotics non-inferior to appendectomy at 30 days for health status. 29% of antibiotic patients required appendectomy within 90 days. 3.2% 5-year recurrence in surgical group vs continued risk in antibiotics group. Antibiotics are a reasonable option for uncomplicated appendicitis with NO fecalith.' },
      { id: 'antibiotics-choice', name: 'If antibiotics chosen: ceftriaxone 2g IV then oral ciprofloxacin + metronidazole × 10 days', rationale: 'CODA trial antibiotic regimen: IV cefazolin + metronidazole (inpatient) → ciprofloxacin 500mg BID + metronidazole 500mg TID × 10 days (outpatient). Covers gram-negative enteric pathogens and anaerobes.' },
      { id: 'fecalith-warning', name: 'Antibiotics NOT recommended if fecalith present — higher perforation risk', rationale: 'CODA trial subgroup: patients with fecalith (appendicolith) had significantly worse outcomes with antibiotics (higher perforation rate, more failures). Presence of fecalith is a relative contraindication to antibiotics-first approach — this patient has no fecalith.' },
      { id: 'surgery-discussion', name: 'Discuss laparoscopic appendectomy as definitive treatment — lower recurrence, eliminates long-term risk', rationale: 'Laparoscopic appendectomy: same-day surgery, definitive cure, 30-day morbidity ~5%, 30-day mortality <0.1%. Eliminates recurrence risk (3.2% with antibiotics at 5 years) and risk of delayed perforation. Many patients choose surgery after counseling about 29% failure rate of antibiotics at 90 days.' }
    ],
    incorrect: [
      { id: 'no-antibiotics-option', name: 'All appendicitis requires surgery — antibiotics are experimental', rationale: 'OUTDATED — CODA trial (NEJM 2020) established antibiotics as a non-inferior, guideline-acceptable option for uncomplicated appendicitis. The 2022 WSES/SAGES guidelines support antibiotics-first as an option. Patients have the right to informed decision-making.' },
      { id: 'abx-perforated', name: 'Antibiotics are fine even with fecalith present', rationale: 'CODA subgroup analysis: fecalith presence significantly predicted antibiotics failure and perforation. Fecalith = relative contraindication to antibiotics-first approach. Recommend surgery for uncomplicated appendicitis with fecalith.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'CODA trial (NEJM 2020): antibiotics non-inferior to appendectomy at 30 days for uncomplicated appendicitis (no fecalith, no perforation). 29% required appendectomy within 90 days. Antibiotics is a valid patient choice, not experimental.',
      'Key contraindication to antibiotics-first: presence of fecalith (appendicolith). CODA subgroup showed significantly worse outcomes with fecalith. Surgery strongly recommended when fecalith present.',
      'Honest counseling: "Antibiotics have a 29% failure rate requiring surgery within 90 days. Surgery is definitive with a 3% 30-day complication rate. Both are acceptable." Let the patient decide.',
      'Alvarado score: MANTRELS (Migration, Anorexia, Nausea/vomiting, Tenderness RLQ, Rebound, Elevated temp, Leukocytosis, Left shift). ≥7 = high probability. CT confirms in adults.'
    ],
    boardPearls: [
      'Perforated appendicitis: free air, abscess, or generalized peritonitis → surgery (drainage ± appendectomy) or IR-guided drainage for contained abscess with interval appendectomy.',
      'Pediatric appendicitis: WBC and CRP less reliable. Ultrasound first (avoids radiation) — if inconclusive → MRI (preferred over CT in children). Alvarado score not validated in young children.',
      'Stump appendicitis: rare — residual appendix remnant after appendectomy can become inflamed. Consider in patients with prior appendectomy presenting with RLQ pain.',
      'Carcinoid tumor: most common appendiceal tumor. <2cm = appendectomy curative. >2cm = right hemicolectomy. Carcinoid syndrome (flushing, diarrhea) only with liver metastases.'
    ]
  },
  references: [
    { id: 'CODA', title: 'Antibiotic therapy vs appendectomy (CODA trial)', journal: 'NEJM', year: 2020, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2014320', openAccess: false },
    { id: 'StatPearls-Appendicitis', title: 'Appendicitis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK493193/', openAccess: true }
  ]
};
