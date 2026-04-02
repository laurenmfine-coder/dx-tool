/* emr-data/tetralogy-of-fallot.js — Tetralogy of Fallot — Tet Spell Management */
window.CASES = window.CASES || {};
window.CASES['tetralogy-of-fallot'] = {
  id: 'tetralogy-of-fallot', name: 'Marcus Reed', age: '4M', dob: '2025-11-30',
  mrn: 'RDX-2026-66979', setting: 'Peds Cardiology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Tetralogy of Fallot — Tet Spell Management',
  diagnosis: 'Tetralogy of Fallot — Tet Spell Management',
  presentation: {
    hpi: 'Marcus Reed, presenting with Tetralogy of Fallot — Tet Spell Management. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-tetralogy-of-fallot', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-tetralogy-of-fallot', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Tetralogy of Fallot — Tet Spell Management available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Tetralogy of Fallot — Tet Spell Management available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Tetralogy of Fallot — Tet Spell Management', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
