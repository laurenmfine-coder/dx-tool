/* emr-data/tef-esophageal-atresia.js — Esophageal Atresia with TEF — VACTERL */
window.CASES = window.CASES || {};
window.CASES['tef-esophageal-atresia'] = {
  id: 'tef-esophageal-atresia', name: 'Baby Rivera', age: '1d', dob: '2026-03-30',
  mrn: 'RDX-2026-32444', setting: 'Neonatal ICU', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Esophageal Atresia with TEF — VACTERL',
  diagnosis: 'Esophageal Atresia with TEF — VACTERL',
  presentation: {
    hpi: 'Baby Rivera, presenting with Esophageal Atresia with TEF — VACTERL. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-tef-esophageal-atresia', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-tef-esophageal-atresia', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Esophageal Atresia with TEF — VACTERL available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Esophageal Atresia with TEF — VACTERL available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Esophageal Atresia with TEF — VACTERL', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
