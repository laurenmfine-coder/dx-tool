/* emr-data/duodenal-atresia.js — Duodenal Atresia — Double Bubble Sign */
window.CASES = window.CASES || {};
window.CASES['duodenal-atresia'] = {
  id: 'duodenal-atresia', name: 'Baby Sofia', age: '1d', dob: '2026-03-30',
  mrn: 'RDX-2026-22495', setting: 'Neonatal ICU', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Duodenal Atresia — Double Bubble Sign',
  diagnosis: 'Duodenal Atresia — Double Bubble Sign',
  presentation: {
    hpi: 'Baby Sofia, presenting with Duodenal Atresia — Double Bubble Sign. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-duodenal-atresia', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-duodenal-atresia', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Duodenal Atresia — Double Bubble Sign available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Duodenal Atresia — Double Bubble Sign available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Duodenal Atresia — Double Bubble Sign', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
