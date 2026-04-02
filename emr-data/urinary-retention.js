/* emr-data/urinary-retention.js — BPH with Urinary Retention — Alpha-Blocker */
window.CASES = window.CASES || {};
window.CASES['urinary-retention'] = {
  id: 'urinary-retention', name: 'Richard Hall', age: '68M', dob: '1958-07-14',
  mrn: 'RDX-2026-30444', setting: 'Urology ED', category: 'urologic', acuity: 2,
  chiefComplaint: 'BPH with Urinary Retention — Alpha-Blocker',
  diagnosis: 'BPH with Urinary Retention — Alpha-Blocker',
  presentation: {
    hpi: 'Richard Hall, presenting with BPH with Urinary Retention — Alpha-Blocker. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-urinary-retention', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-urinary-retention', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for BPH with Urinary Retention — Alpha-Blocker available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for BPH with Urinary Retention — Alpha-Blocker available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'BPH with Urinary Retention — Alpha-Blocker', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
