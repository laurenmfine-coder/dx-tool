/* emr-data/hydrocephalus.js — Congenital Hydrocephalus — VP Shunt vs ETV */
window.CASES = window.CASES || {};
window.CASES['hydrocephalus'] = {
  id: 'hydrocephalus', name: 'Emily Chen', age: '3M', dob: '2025-12-31',
  mrn: 'RDX-2026-58879', setting: 'Peds Neurosurgery', category: 'neurologic', acuity: 2,
  chiefComplaint: 'Congenital Hydrocephalus — VP Shunt vs ETV',
  diagnosis: 'Congenital Hydrocephalus — VP Shunt vs ETV',
  presentation: {
    hpi: 'Emily Chen, presenting with Congenital Hydrocephalus — VP Shunt vs ETV. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-hydrocephalus', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-hydrocephalus', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Congenital Hydrocephalus — VP Shunt vs ETV available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Congenital Hydrocephalus — VP Shunt vs ETV available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Congenital Hydrocephalus — VP Shunt vs ETV', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
