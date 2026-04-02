/* emr-data/puv.js — Posterior Urethral Valves — VCUG Diagnosis */
window.CASES = window.CASES || {};
window.CASES['puv'] = {
  id: 'puv', name: 'Marcus Chen', age: '2M', dob: '2026-01-31',
  mrn: 'RDX-2026-14452', setting: 'Peds Urology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Posterior Urethral Valves — VCUG Diagnosis',
  diagnosis: 'Posterior Urethral Valves — VCUG Diagnosis',
  presentation: {
    hpi: 'Marcus Chen, presenting with Posterior Urethral Valves — VCUG Diagnosis. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-puv', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-puv', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Posterior Urethral Valves — VCUG Diagnosis available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Posterior Urethral Valves — VCUG Diagnosis available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Posterior Urethral Valves — VCUG Diagnosis', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
