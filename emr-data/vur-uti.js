/* emr-data/vur-uti.js — Vesicoureteral Reflux — Prophylactic Antibiotics */
window.CASES = window.CASES || {};
window.CASES['vur-uti'] = {
  id: 'vur-uti', name: 'Emma Park', age: '18M', dob: '2024-09-30',
  mrn: 'RDX-2026-85760', setting: 'Peds Urology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Vesicoureteral Reflux — Prophylactic Antibiotics',
  diagnosis: 'Vesicoureteral Reflux — Prophylactic Antibiotics',
  presentation: {
    hpi: 'Emma Park, presenting with Vesicoureteral Reflux — Prophylactic Antibiotics. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-vur-uti', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-vur-uti', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Vesicoureteral Reflux — Prophylactic Antibiotics available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Vesicoureteral Reflux — Prophylactic Antibiotics available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Vesicoureteral Reflux — Prophylactic Antibiotics', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
