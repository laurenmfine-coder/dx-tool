/* emr-data/omphalocele.js — Omphalocele — Genetics Workup Before Surgery */
window.CASES = window.CASES || {};
window.CASES['omphalocele'] = {
  id: 'omphalocele', name: 'Baby Adams', age: '0d', dob: '2026-03-31',
  mrn: 'RDX-2026-54394', setting: 'Neonatal ICU', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Omphalocele — Genetics Workup Before Surgery',
  diagnosis: 'Omphalocele — Genetics Workup Before Surgery',
  presentation: {
    hpi: 'Baby Adams, presenting with Omphalocele — Genetics Workup Before Surgery. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-omphalocele', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-omphalocele', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Omphalocele — Genetics Workup Before Surgery available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Omphalocele — Genetics Workup Before Surgery available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Omphalocele — Genetics Workup Before Surgery', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
