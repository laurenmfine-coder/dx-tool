/* emr-data/cvid-ivig.js — CVID — Recurrent Infections + IVIG Replacement */
window.CASES = window.CASES || {};
window.CASES['cvid-ivig'] = {
  id: 'cvid-ivig', name: 'Jennifer Park', age: '34F', dob: '1991-02-28',
  mrn: 'RDX-2026-24653', setting: 'Immunology Clinic', category: 'immunologic', acuity: 2,
  chiefComplaint: 'CVID — Recurrent Infections + IVIG Replacement',
  diagnosis: 'CVID — Recurrent Infections + IVIG Replacement',
  presentation: {
    hpi: 'Jennifer Park, presenting with CVID — Recurrent Infections + IVIG Replacement. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-cvid-ivig', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-cvid-ivig', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for CVID — Recurrent Infections + IVIG Replacement available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for CVID — Recurrent Infections + IVIG Replacement available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'CVID — Recurrent Infections + IVIG Replacement', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
