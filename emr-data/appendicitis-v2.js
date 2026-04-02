/* CASE: appendicitis-v2 — Perforated Appendicitis with Abscess — Antibiotics-First Decision */
window.CASES = window.CASES || {};
window.CASES['appendicitis-v2'] = {
  id: 'appendicitis-v2', name: 'Marcus Rivera', age: '34M', dob: '1992-01-15',
  mrn: 'RDX-2026-83321', setting: 'ED → Surgery', category: 'gastrointestinal', acuity: 2,
  chiefComplaint: 'Perforated appendicitis with walled-off abscess — antibiotics vs immediate surgery',
  diagnosis: 'Perforated Appendicitis with Pericecal Abscess',
  presentation: {
    hpi: 'Marcus Rivera, 34M, 5 days of RLQ pain that initially improved day 2-3 ("pseudoappendix rest") then worsened again. Now with fever 39.1°C, WBC 18,400, and CT abdomen confirms perforated appendicitis with a 4.5cm pericecal abscess (walled-off by omentum). No free air. No peritonitis on exam. He is hemodynamically stable.',
    pmh: ['No prior abdominal surgery'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '118/72', HR: '102', RR: '18', Temp: '39.1°C', SpO2: '98%' },
  labs: {
    'CBC': 'WBC 18,400 (H), Hgb 14.2', 'BMP': 'Normal',
    'CT abdomen': 'Perforated appendix with 4.5cm right lower quadrant abscess, walled off by omentum. No free intraperitoneal air. No diffuse peritonitis. Periappendiceal fat stranding.'
  },
  orders: {
    correct: [
      { id: 'antibiotics-perf', name: 'IV antibiotics — piperacillin-tazobactam 3.375g q6h — delay surgery', rationale: 'Perforated appendicitis WITH a walled-off abscess and NO peritonitis: antibiotics first + CT-guided drain (if abscess >3cm) is preferred over immediate appendectomy. Immediate surgery on a walled-off abscess is technically more difficult, higher morbidity. Plan: interval appendectomy 6-8 weeks later.' },
      { id: 'ir-drain', name: 'IR consult for CT-guided percutaneous drainage of 4.5cm abscess', rationale: 'Abscesses >3cm with a walled-off collection: CT-guided percutaneous drainage is indicated. Drains the abscess without the morbidity of open surgery. Can send fluid for culture to guide antibiotic therapy.' },
      { id: 'interval-appy', name: 'Plan interval appendectomy 6-8 weeks after acute episode resolves', rationale: 'After abscess resolved and inflammation settled, elective laparoscopic appendectomy. Note: 20-30% recurrence rate without interval appendectomy. Some centers now question whether interval appendectomy is always necessary (especially in older patients — consider colonoscopy to exclude colon cancer as the cause of "appendicitis").' }
    ],
    incorrect: [
      { id: 'immediate-or', name: 'Immediate appendectomy — perforated appendix must come out now', rationale: 'Immediate surgery on perforated appendicitis with a walled-off abscess (NOT free perforation with peritonitis) has higher morbidity. Antibiotics ± drain is standard for stable patients with contained abscess. Immediate surgery is for: free perforation, diffuse peritonitis, hemodynamic instability.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Perforated appendicitis management depends on whether the perforation is CONTAINED (abscess) or FREE (peritonitis). Contained abscess + stable patient: antibiotics ± percutaneous drain → interval appendectomy 6-8 weeks. Free perforation + peritonitis: immediate surgery.',
      'Interval appendectomy: recommended after abscess management. 20-30% recurrence risk without it. In patients >40: colonoscopy before interval appendectomy to exclude cecal/right colon malignancy masquerading as appendicitis.',
      'CODA trial: for uncomplicated appendicitis (no perforation), antibiotics alone equivalent to appendectomy in 1-year outcomes. 28% of antibiotics group ultimately required appendectomy within 1 year.'
    ],
    boardPearls: [
      'Alvarado score: right iliac fossa pain, anorexia, nausea/vomiting (2pts), RIF tenderness, rebound tenderness, elevated temp (each 1pt), leukocytosis (2pts) = max 10. Score ≥7 = high probability.',
      'Appendiceal mass: palpable RLQ mass = appendiceal phlegmon or abscess. Always antibiotics first before CT.',
      'Stump appendicitis: recurrent appendicitis in a residual appendiceal stump post-appendectomy. Rare but important to consider in prior appendectomy + RLQ pain.'
    ]
  },
  references: [{ id: 'StatPearls-Appendicitis', title: 'Appendicitis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK493193/', openAccess: true }]
};
