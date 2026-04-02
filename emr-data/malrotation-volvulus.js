/* emr-data/malrotation-volvulus.js — Bilious Vomiting Neonate — Malrotation */
window.CASES = window.CASES || {};
window.CASES['malrotation-volvulus'] = {
  id: 'malrotation-volvulus', name: 'Baby James', age: '3d', dob: '2026-03-28',
  mrn: 'RDX-2026-98447', setting: 'Pediatric ED', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Bilious Vomiting Neonate — Malrotation',
  diagnosis: 'Bilious Vomiting Neonate — Malrotation',
  presentation: {
    hpi: 'Baby James, presenting with Bilious Vomiting Neonate — Malrotation. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-malrotation-volvulus', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-malrotation-volvulus', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Bilious Vomiting Neonate — Malrotation available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Bilious Vomiting Neonate — Malrotation available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Bilious Vomiting Neonate — Malrotation', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
