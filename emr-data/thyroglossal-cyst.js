/* emr-data/thyroglossal-cyst.js — Thyroglossal Duct Cyst — Midline, Moves with Swallowing */
window.CASES = window.CASES || {};
window.CASES['thyroglossal-cyst'] = {
  id: 'thyroglossal-cyst', name: 'Madison Park', age: '8F', dob: '2018-07-15',
  mrn: 'RDX-2026-77331', setting: 'Peds Surgery', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Thyroglossal Duct Cyst — Midline, Moves with Swallowing',
  diagnosis: 'Thyroglossal Duct Cyst — Midline, Moves with Swallowing',
  presentation: {
    hpi: 'Madison Park, presenting with Thyroglossal Duct Cyst — Midline, Moves with Swallowing. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-thyroglossal-cyst', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-thyroglossal-cyst', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Thyroglossal Duct Cyst — Midline, Moves with Swallowing available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Thyroglossal Duct Cyst — Midline, Moves with Swallowing available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Thyroglossal Duct Cyst — Midline, Moves with Swallowing', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
