/* emr-data/urinary-incontinence.js — Stress Urinary Incontinence — Pelvic Floor Therapy */
window.CASES = window.CASES || {};
window.CASES['urinary-incontinence'] = {
  id: 'urinary-incontinence', name: 'Linda Foster', age: '58F', dob: '1967-03-22',
  mrn: 'RDX-2026-68328', setting: 'Urology Clinic', category: 'urologic', acuity: 2,
  chiefComplaint: 'Stress Urinary Incontinence — Pelvic Floor Therapy',
  diagnosis: 'Stress Urinary Incontinence — Pelvic Floor Therapy',
  presentation: {
    hpi: 'Linda Foster, presenting with Stress Urinary Incontinence — Pelvic Floor Therapy. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-urinary-incontinence', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-urinary-incontinence', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Stress Urinary Incontinence — Pelvic Floor Therapy available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Stress Urinary Incontinence — Pelvic Floor Therapy available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Stress Urinary Incontinence — Pelvic Floor Therapy', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
