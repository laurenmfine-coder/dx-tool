/* emr-data/contraception.js — Contraception Counseling — LARC vs OCP Selection */
window.CASES = window.CASES || {};
window.CASES['contraception'] = {
  id: 'contraception', name: 'Ashley Kim', age: '22F', dob: '2003-05-10',
  mrn: 'RDX-2026-28208', setting: 'Gyn Clinic', category: 'gynecologic', acuity: 2,
  chiefComplaint: 'Contraception Counseling — LARC vs OCP Selection',
  diagnosis: 'Contraception Counseling — LARC vs OCP Selection',
  presentation: {
    hpi: 'Ashley Kim, presenting with Contraception Counseling — LARC vs OCP Selection. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-contraception', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-contraception', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Contraception Counseling — LARC vs OCP Selection available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Contraception Counseling — LARC vs OCP Selection available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Contraception Counseling — LARC vs OCP Selection', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
