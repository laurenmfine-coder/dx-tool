/* emr-data/bowel-obstruction.js — Small Bowel Obstruction */
window.CASES = window.CASES || {};
window.CASES['bowel-obstruction'] = {
  id: 'bowel-obstruction', name: 'Harold Chen', age: '64M', dob: '1961-04-08',
  mrn: 'RDX-2026-31447', setting: 'ED → Surgery', category: 'gastrointestinal', acuity: 2,
  chiefComplaint: 'Colicky abdominal pain, vomiting, obstipation — prior abdominal surgery',
  diagnosis: 'Small Bowel Obstruction — Adhesions (post-appendectomy)',
  presentation: {
    hpi: '64M with appendectomy 20 years ago. 2 days of crampy central abdominal pain in waves, bilious vomiting, unable to pass gas or stool (obstipation). Abdomen distended, high-pitched bowel sounds (borborygmi). No fever. Last BM 2 days ago. CT abdomen confirms partial SBO with transition point in mid-ileum. No free air. No signs of ischemia.',
    pmh: ['Prior appendectomy (age 44)'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '128/76', HR: '96', RR: '18', Temp: '37.1°C', SpO2: '98%' },
  labs: {
    'CT abdomen/pelvis': 'Dilated small bowel loops to 4.5cm with air-fluid levels. Transition point right lower quadrant — consistent with adhesive obstruction. No pneumatosis. No free air. No strangulation features.',
    'BMP': 'Na 134 (L), K 3.1 (L — vomiting), Cl 88 (L), Bicarb 28 (metabolic alkalosis from vomiting), Cr 1.3 (mild dehydration)',
    'CBC': 'WBC 11.2, Hgb 14.8'
  },
  orders: {
    correct: [
      { id: 'ngt-sbo', name: 'Nasogastric tube to low intermittent suction — decompression', rationale: 'NG tube decompresses the obstructed bowel, reduces vomiting, prevents aspiration. Essential first step in SBO management.' },
      { id: 'ivf-sbo', name: 'IV fluid resuscitation — LR or NS, correct electrolytes', rationale: 'Vomiting causes volume depletion and metabolic alkalosis (loss of HCl). Aggressive IV rehydration with electrolyte correction.' },
      { id: 'npo-sbo', name: 'NPO — bowel rest', rationale: 'Nothing by mouth. Bowel rest allows decompression. Most partial SBOs (70-80%) resolve with non-operative management.' },
      { id: 'surgery-sbo', name: 'Surgery consult — plan for operative intervention if no improvement 24-48h', rationale: 'Adhesive partial SBO: trial of non-operative management 24-48h. If no improvement, or any signs of strangulation (fever, leukocytosis, peritonitis) → immediate surgery.' },
      { id: 'serial-xray', name: 'Serial abdominal exams + repeat imaging at 24h', rationale: 'Monitor for signs of strangulation (fever, severe pain, peritonitis, leukocytosis). Repeat CT or KUB to assess for resolution vs progression.' }
    ],
    incorrect: [
      { id: 'enema-sbo', name: 'Barium enema to relieve obstruction', rationale: 'Enemas are for LARGE bowel obstruction — useful for pseudo-obstruction (Ogilvie syndrome) or sigmoid volvulus. Contraindicated in SBO.' },
      { id: 'immediate-or', name: 'Immediate surgery — all SBOs require operation', rationale: '70-80% of adhesive partial SBOs resolve with NGT decompression + IV fluids. Complete obstruction, strangulation features, or failure of 24-48h conservative trial = surgery. Not all SBOs require immediate OR.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'SBO triad: colicky abdominal pain + vomiting + obstipation (failure to pass gas/stool). High-pitched bowel sounds early; absent sounds late (ileus from ischemia).',
      'Most common cause of SBO in developed countries: adhesions (75%) from prior surgery. Others: incarcerated hernia, Crohn\'s, malignancy.',
      '70-80% of partial adhesive SBOs resolve with NGT decompression + IV fluids. Complete SBO, strangulation, or 24-48h failure = surgery.',
      'Strangulation red flags (immediate surgery): fever + leukocytosis + peritoneal signs, CT findings of ischemia (pneumatosis, portal venous gas, poor bowel wall enhancement).'
    ],
    boardPearls: [
      'Closed-loop obstruction: both ends of a bowel segment obstructed → rapid ischemia, perforation. Surgical emergency.',
      'Ogilvie syndrome (acute colonic pseudo-obstruction): massive colonic dilation without mechanical cause. Treatment: neostigmine or colonoscopic decompression.',
      'Sigmoid volvulus: twisting of sigmoid colon at mesentery. CXR: coffee bean sign. Treatment: rigid sigmoidoscopy/colonoscopy for decompression, elective sigmoid resection.',
      'Water-soluble contrast (Gastrografin) challenge: if passes to colon within 24h → 99% resolve without surgery. Also therapeutic (osmotic effect promotes resolution).'
    ]
  },
  references: [{ id: 'StatPearls-SBO', title: 'Bowel Obstruction', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK448095/', openAccess: true }]
};
