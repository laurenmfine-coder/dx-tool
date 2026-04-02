/* emr-data/dandy-walker.js — Dandy-Walker Malformation — 4th Ventricle Cyst */
window.CASES = window.CASES || {};
window.CASES['dandy-walker'] = {
  id: 'dandy-walker', name: 'Baby Torres', age: '1d', dob: '2026-03-30',
  mrn: 'RDX-2026-64279', setting: 'Neonatal ICU', category: 'neurologic', acuity: 2,
  chiefComplaint: 'Dandy-Walker Malformation — 4th Ventricle Cyst',
  diagnosis: 'Dandy-Walker Malformation — 4th Ventricle Cyst',
  presentation: {
    hpi: 'Baby Torres, presenting with Dandy-Walker Malformation — 4th Ventricle Cyst. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-dandy-walker', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-dandy-walker', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Dandy-Walker Malformation — 4th Ventricle Cyst available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Dandy-Walker Malformation — 4th Ventricle Cyst available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Dandy-Walker Malformation — 4th Ventricle Cyst', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
