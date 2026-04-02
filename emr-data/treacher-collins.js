/* emr-data/treacher-collins.js — Treacher Collins — Normal Intelligence, Hearing Loss */
window.CASES = window.CASES || {};
window.CASES['treacher-collins'] = {
  id: 'treacher-collins', name: 'Ryan Park', age: '6M', dob: '2025-09-30',
  mrn: 'RDX-2026-53219', setting: 'Genetics Clinic', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Treacher Collins — Normal Intelligence, Hearing Loss',
  diagnosis: 'Treacher Collins — Normal Intelligence, Hearing Loss',
  presentation: {
    hpi: 'Ryan Park, presenting with Treacher Collins — Normal Intelligence, Hearing Loss. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-treacher-collins', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-treacher-collins', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Treacher Collins — Normal Intelligence, Hearing Loss available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Treacher Collins — Normal Intelligence, Hearing Loss available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Treacher Collins — Normal Intelligence, Hearing Loss', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
