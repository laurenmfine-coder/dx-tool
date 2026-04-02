/* emr-data/agenesis-corpus-callosum.js — Agenesis of Corpus Callosum — Aicardi Syndrome */
window.CASES = window.CASES || {};
window.CASES['agenesis-corpus-callosum'] = {
  id: 'agenesis-corpus-callosum', name: 'Sofia Kim', age: '3M', dob: '2025-12-31',
  mrn: 'RDX-2026-36768', setting: 'Peds Neurology', category: 'neurologic', acuity: 2,
  chiefComplaint: 'Agenesis of Corpus Callosum — Aicardi Syndrome',
  diagnosis: 'Agenesis of Corpus Callosum — Aicardi Syndrome',
  presentation: {
    hpi: 'Sofia Kim, presenting with Agenesis of Corpus Callosum — Aicardi Syndrome. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-agenesis-corpus-callosum', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-agenesis-corpus-callosum', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Agenesis of Corpus Callosum — Aicardi Syndrome available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Agenesis of Corpus Callosum — Aicardi Syndrome available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Agenesis of Corpus Callosum — Aicardi Syndrome', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
