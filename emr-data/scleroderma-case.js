/* emr-data/scleroderma-case.js — Scleroderma Renal Crisis — ACEi Life-Saving */
window.CASES = window.CASES || {};
window.CASES['scleroderma-case'] = {
  id: 'scleroderma-case', name: 'Diana Obi', age: '44F', dob: '1981-07-22',
  mrn: 'RDX-2026-10934', setting: 'Rheumatology', category: 'rheumatologic', acuity: 2,
  chiefComplaint: 'Scleroderma Renal Crisis — ACEi Life-Saving',
  diagnosis: 'Scleroderma Renal Crisis — ACEi Life-Saving',
  presentation: {
    hpi: 'Diana Obi, presenting with Scleroderma Renal Crisis — ACEi Life-Saving. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-scleroderma-case', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-scleroderma-case', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Scleroderma Renal Crisis — ACEi Life-Saving available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Scleroderma Renal Crisis — ACEi Life-Saving available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Scleroderma Renal Crisis — ACEi Life-Saving', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
