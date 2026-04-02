/* emr-data/hirschsprung.js — Hirschsprung Disease — Failure to Pass Meconium */
window.CASES = window.CASES || {};
window.CASES['hirschsprung'] = {
  id: 'hirschsprung', name: 'Oliver Chen', age: '3d', dob: '2026-03-28',
  mrn: 'RDX-2026-71525', setting: 'Pediatric ED', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Hirschsprung Disease — Failure to Pass Meconium',
  diagnosis: 'Hirschsprung Disease — Failure to Pass Meconium',
  presentation: {
    hpi: 'Oliver Chen, presenting with Hirschsprung Disease — Failure to Pass Meconium. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-hirschsprung', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-hirschsprung', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Hirschsprung Disease — Failure to Pass Meconium available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Hirschsprung Disease — Failure to Pass Meconium available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Hirschsprung Disease — Failure to Pass Meconium', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
