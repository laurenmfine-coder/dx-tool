/* emr-data/capacity-assessment.js — Decisional Capacity — Refusing Amputation */
window.CASES = window.CASES || {};
window.CASES['capacity-assessment'] = {
  id: 'capacity-assessment', name: 'Harold Barnes', age: '72M', dob: '1953-09-15',
  mrn: 'RDX-2026-75514', setting: 'Medicine Floor', category: 'psychiatric', acuity: 2,
  chiefComplaint: 'Decisional Capacity — Refusing Amputation',
  diagnosis: 'Decisional Capacity — Refusing Amputation',
  presentation: {
    hpi: 'Harold Barnes, presenting with Decisional Capacity — Refusing Amputation. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-capacity-assessment', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-capacity-assessment', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Decisional Capacity — Refusing Amputation available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Decisional Capacity — Refusing Amputation available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Decisional Capacity — Refusing Amputation', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
