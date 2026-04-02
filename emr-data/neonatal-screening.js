/* emr-data/neonatal-screening.js — Newborn Screening — PKU Positive Result */
window.CASES = window.CASES || {};
window.CASES['neonatal-screening'] = {
  id: 'neonatal-screening', name: 'Baby Chen', age: '3d', dob: '2026-03-28',
  mrn: 'RDX-2026-93874', setting: 'Neonatal Nursery', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Newborn Screening — PKU Positive Result',
  diagnosis: 'Newborn Screening — PKU Positive Result',
  presentation: {
    hpi: 'Baby Chen, presenting with Newborn Screening — PKU Positive Result. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-neonatal-screening', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-neonatal-screening', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Newborn Screening — PKU Positive Result available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Newborn Screening — PKU Positive Result available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Newborn Screening — PKU Positive Result', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
