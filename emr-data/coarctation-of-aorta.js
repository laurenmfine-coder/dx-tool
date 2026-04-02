/* emr-data/coarctation-of-aorta.js — Coarctation — Upper/Lower BP Differential */
window.CASES = window.CASES || {};
window.CASES['coarctation-of-aorta'] = {
  id: 'coarctation-of-aorta', name: 'Tommy Lee', age: '3M', dob: '2025-12-31',
  mrn: 'RDX-2026-40495', setting: 'Peds Cardiology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Coarctation — Upper/Lower BP Differential',
  diagnosis: 'Coarctation — Upper/Lower BP Differential',
  presentation: {
    hpi: 'Tommy Lee, presenting with Coarctation — Upper/Lower BP Differential. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-coarctation-of-aorta', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-coarctation-of-aorta', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Coarctation — Upper/Lower BP Differential available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Coarctation — Upper/Lower BP Differential available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Coarctation — Upper/Lower BP Differential', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
