/* emr-data/wilms-tumor.js — Wilms Tumor — No Pre-Op Biopsy Rule */
window.CASES = window.CASES || {};
window.CASES['wilms-tumor'] = {
  id: 'wilms-tumor', name: 'Aria Johnson', age: '4F', dob: '2021-12-15',
  mrn: 'RDX-2026-67858', setting: 'Peds Oncology', category: 'oncologic', acuity: 2,
  chiefComplaint: 'Wilms Tumor — No Pre-Op Biopsy Rule',
  diagnosis: 'Wilms Tumor — No Pre-Op Biopsy Rule',
  presentation: {
    hpi: 'Aria Johnson, presenting with Wilms Tumor — No Pre-Op Biopsy Rule. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-wilms-tumor', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-wilms-tumor', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Wilms Tumor — No Pre-Op Biopsy Rule available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Wilms Tumor — No Pre-Op Biopsy Rule available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Wilms Tumor — No Pre-Op Biopsy Rule', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
