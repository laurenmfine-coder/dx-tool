/* emr-data/holoprosencephaly.js — Holoprosencephaly — Trisomy 13 Association */
window.CASES = window.CASES || {};
window.CASES['holoprosencephaly'] = {
  id: 'holoprosencephaly', name: 'Baby Kim', age: '1d', dob: '2026-03-30',
  mrn: 'RDX-2026-35677', setting: 'Neonatal ICU', category: 'neurologic', acuity: 2,
  chiefComplaint: 'Holoprosencephaly — Trisomy 13 Association',
  diagnosis: 'Holoprosencephaly — Trisomy 13 Association',
  presentation: {
    hpi: 'Baby Kim, presenting with Holoprosencephaly — Trisomy 13 Association. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-holoprosencephaly', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-holoprosencephaly', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Holoprosencephaly — Trisomy 13 Association available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Holoprosencephaly — Trisomy 13 Association available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Holoprosencephaly — Trisomy 13 Association', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
