/* emr-data/vsd-repair.js — VSD — Eisenmenger Prevention and Repair Timing */
window.CASES = window.CASES || {};
window.CASES['vsd-repair'] = {
  id: 'vsd-repair', name: 'Zoe Martinez', age: '18M', dob: '2024-09-30',
  mrn: 'RDX-2026-63980', setting: 'Peds Cardiology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'VSD — Eisenmenger Prevention and Repair Timing',
  diagnosis: 'VSD — Eisenmenger Prevention and Repair Timing',
  presentation: {
    hpi: 'Zoe Martinez, presenting with VSD — Eisenmenger Prevention and Repair Timing. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-vsd-repair', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-vsd-repair', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for VSD — Eisenmenger Prevention and Repair Timing available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for VSD — Eisenmenger Prevention and Repair Timing available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'VSD — Eisenmenger Prevention and Repair Timing', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
