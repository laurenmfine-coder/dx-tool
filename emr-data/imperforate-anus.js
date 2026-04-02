/* emr-data/imperforate-anus.js — Anorectal Malformation — VACTERL + PSARP */
window.CASES = window.CASES || {};
window.CASES['imperforate-anus'] = {
  id: 'imperforate-anus', name: 'Baby Wilson', age: '0d', dob: '2026-03-31',
  mrn: 'RDX-2026-21358', setting: 'Peds Surgery', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Anorectal Malformation — VACTERL + PSARP',
  diagnosis: 'Anorectal Malformation — VACTERL + PSARP',
  presentation: {
    hpi: 'Baby Wilson, presenting with Anorectal Malformation — VACTERL + PSARP. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-imperforate-anus', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-imperforate-anus', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Anorectal Malformation — VACTERL + PSARP available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Anorectal Malformation — VACTERL + PSARP available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Anorectal Malformation — VACTERL + PSARP', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
