/* emr-data/craniosynostosis.js — Sagittal Craniosynostosis — Scaphocephaly */
window.CASES = window.CASES || {};
window.CASES['craniosynostosis'] = {
  id: 'craniosynostosis', name: 'Daniel Kim', age: '4M', dob: '2025-11-30',
  mrn: 'RDX-2026-99379', setting: 'Craniofacial Clinic', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Sagittal Craniosynostosis — Scaphocephaly',
  diagnosis: 'Sagittal Craniosynostosis — Scaphocephaly',
  presentation: {
    hpi: 'Daniel Kim, presenting with Sagittal Craniosynostosis — Scaphocephaly. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-craniosynostosis', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-craniosynostosis', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Sagittal Craniosynostosis — Scaphocephaly available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Sagittal Craniosynostosis — Scaphocephaly available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Sagittal Craniosynostosis — Scaphocephaly', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
