/* emr-data/ddh.js — Developmental Dysplasia of Hip — Pavlik Harness */
window.CASES = window.CASES || {};
window.CASES['ddh'] = {
  id: 'ddh', name: 'Emma Walsh', age: '6wk', dob: '2026-02-15',
  mrn: 'RDX-2026-14873', setting: 'Pediatric Ortho', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Developmental Dysplasia of Hip — Pavlik Harness',
  diagnosis: 'Developmental Dysplasia of Hip — Pavlik Harness',
  presentation: {
    hpi: 'Emma Walsh, presenting with Developmental Dysplasia of Hip — Pavlik Harness. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-ddh', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-ddh', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Developmental Dysplasia of Hip — Pavlik Harness available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Developmental Dysplasia of Hip — Pavlik Harness available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Developmental Dysplasia of Hip — Pavlik Harness', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
