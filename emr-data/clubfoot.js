/* emr-data/clubfoot.js — Congenital Clubfoot — Ponseti Method */
window.CASES = window.CASES || {};
window.CASES['clubfoot'] = {
  id: 'clubfoot', name: 'Liam Park', age: '2d', dob: '2026-03-29',
  mrn: 'RDX-2026-46901', setting: 'Pediatric Ortho', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Congenital Clubfoot — Ponseti Method',
  diagnosis: 'Congenital Clubfoot — Ponseti Method',
  presentation: {
    hpi: 'Liam Park, presenting with Congenital Clubfoot — Ponseti Method. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-clubfoot', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-clubfoot', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Congenital Clubfoot — Ponseti Method available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Congenital Clubfoot — Ponseti Method available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Congenital Clubfoot — Ponseti Method', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
