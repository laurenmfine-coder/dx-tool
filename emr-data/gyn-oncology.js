/* emr-data/gyn-oncology.js — Ovarian Cancer — CA-125 + Debulking Surgery */
window.CASES = window.CASES || {};
window.CASES['gyn-oncology'] = {
  id: 'gyn-oncology', name: 'Patricia Green', age: '62F', dob: '1963-11-20',
  mrn: 'RDX-2026-85380', setting: 'Gyn Oncology', category: 'gynecologic', acuity: 2,
  chiefComplaint: 'Ovarian Cancer — CA-125 + Debulking Surgery',
  diagnosis: 'Ovarian Cancer — CA-125 + Debulking Surgery',
  presentation: {
    hpi: 'Patricia Green, presenting with Ovarian Cancer — CA-125 + Debulking Surgery. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-gyn-oncology', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-gyn-oncology', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Ovarian Cancer — CA-125 + Debulking Surgery available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Ovarian Cancer — CA-125 + Debulking Surgery available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Ovarian Cancer — CA-125 + Debulking Surgery', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
