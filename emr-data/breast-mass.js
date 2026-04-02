/* emr-data/breast-mass.js — Breast Mass — Triple Assessment (Exam + Imaging + Biopsy) */
window.CASES = window.CASES || {};
window.CASES['breast-mass'] = {
  id: 'breast-mass', name: 'Karen Adams', age: '45F', dob: '1980-08-18',
  mrn: 'RDX-2026-97365', setting: 'Breast Clinic', category: 'surgical', acuity: 2,
  chiefComplaint: 'Breast Mass — Triple Assessment (Exam + Imaging + Biopsy)',
  diagnosis: 'Breast Mass — Triple Assessment (Exam + Imaging + Biopsy)',
  presentation: {
    hpi: 'Karen Adams, presenting with Breast Mass — Triple Assessment (Exam + Imaging + Biopsy). See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-breast-mass', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-breast-mass', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Breast Mass — Triple Assessment (Exam + Imaging + Biopsy) available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Breast Mass — Triple Assessment (Exam + Imaging + Biopsy) available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Breast Mass — Triple Assessment (Exam + Imaging + Biopsy)', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
