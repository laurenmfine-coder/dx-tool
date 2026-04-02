/* emr-data/myelomeningocele.js — Myelomeningocele — Surgical Repair within 72h */
window.CASES = window.CASES || {};
window.CASES['myelomeningocele'] = {
  id: 'myelomeningocele', name: 'Baby Torres', age: '0d', dob: '2026-03-31',
  mrn: 'RDX-2026-58801', setting: 'Neonatal ICU', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Myelomeningocele — Surgical Repair within 72h',
  diagnosis: 'Myelomeningocele — Surgical Repair within 72h',
  presentation: {
    hpi: 'Baby Torres, presenting with Myelomeningocele — Surgical Repair within 72h. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-myelomeningocele', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-myelomeningocele', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Myelomeningocele — Surgical Repair within 72h available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Myelomeningocele — Surgical Repair within 72h available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Myelomeningocele — Surgical Repair within 72h', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
