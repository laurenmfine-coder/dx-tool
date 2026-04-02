/* emr-data/cpam.js — CPAM — Cystic Lung Lesion + PPB Risk */
window.CASES = window.CASES || {};
window.CASES['cpam'] = {
  id: 'cpam', name: 'Ethan Moore', age: '6M', dob: '2025-09-30',
  mrn: 'RDX-2026-41792', setting: 'Peds Pulm', category: 'pediatric', acuity: 2,
  chiefComplaint: 'CPAM — Cystic Lung Lesion + PPB Risk',
  diagnosis: 'CPAM — Cystic Lung Lesion + PPB Risk',
  presentation: {
    hpi: 'Ethan Moore, presenting with CPAM — Cystic Lung Lesion + PPB Risk. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-cpam', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-cpam', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for CPAM — Cystic Lung Lesion + PPB Risk available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for CPAM — Cystic Lung Lesion + PPB Risk available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'CPAM — Cystic Lung Lesion + PPB Risk', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
