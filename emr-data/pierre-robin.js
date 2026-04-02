/* emr-data/pierre-robin.js — Pierre Robin Sequence — Airway + Mandibular Growth */
window.CASES = window.CASES || {};
window.CASES['pierre-robin'] = {
  id: 'pierre-robin', name: 'Baby Davis', age: '1d', dob: '2026-03-30',
  mrn: 'RDX-2026-40485', setting: 'Neonatal ICU', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Pierre Robin Sequence — Airway + Mandibular Growth',
  diagnosis: 'Pierre Robin Sequence — Airway + Mandibular Growth',
  presentation: {
    hpi: 'Baby Davis, presenting with Pierre Robin Sequence — Airway + Mandibular Growth. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-pierre-robin', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-pierre-robin', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Pierre Robin Sequence — Airway + Mandibular Growth available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Pierre Robin Sequence — Airway + Mandibular Growth available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Pierre Robin Sequence — Airway + Mandibular Growth', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
