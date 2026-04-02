/* emr-data/rds-prematurity.js — RDS in Prematurity — Surfactant + Antenatal Steroids */
window.CASES = window.CASES || {};
window.CASES['rds-prematurity'] = {
  id: 'rds-prematurity', name: 'Baby Garcia', age: '28wk', dob: '2026-03-15',
  mrn: 'RDX-2026-74138', setting: 'NICU', category: 'pediatric', acuity: 2,
  chiefComplaint: 'RDS in Prematurity — Surfactant + Antenatal Steroids',
  diagnosis: 'RDS in Prematurity — Surfactant + Antenatal Steroids',
  presentation: {
    hpi: 'Baby Garcia, presenting with RDS in Prematurity — Surfactant + Antenatal Steroids. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-rds-prematurity', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-rds-prematurity', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for RDS in Prematurity — Surfactant + Antenatal Steroids available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for RDS in Prematurity — Surfactant + Antenatal Steroids available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'RDS in Prematurity — Surfactant + Antenatal Steroids', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
