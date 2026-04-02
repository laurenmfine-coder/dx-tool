/* emr-data/eye-emergencies.js — Acute Angle-Closure Glaucoma — IOP Emergency */
window.CASES = window.CASES || {};
window.CASES['eye-emergencies'] = {
  id: 'eye-emergencies', name: 'Thomas Reed', age: '65M', dob: '1961-04-12',
  mrn: 'RDX-2026-40713', setting: 'Ophthalmology ED', category: 'ophthalmologic', acuity: 2,
  chiefComplaint: 'Acute Angle-Closure Glaucoma — IOP Emergency',
  diagnosis: 'Acute Angle-Closure Glaucoma — IOP Emergency',
  presentation: {
    hpi: 'Thomas Reed, presenting with Acute Angle-Closure Glaucoma — IOP Emergency. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-eye-emergencies', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-eye-emergencies', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Acute Angle-Closure Glaucoma — IOP Emergency available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Acute Angle-Closure Glaucoma — IOP Emergency available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Acute Angle-Closure Glaucoma — IOP Emergency', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
