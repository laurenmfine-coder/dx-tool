/* emr-data/branchial-cleft-cyst.js — 2nd Branchial Cleft Cyst — Lateral Neck Mass */
window.CASES = window.CASES || {};
window.CASES['branchial-cleft-cyst'] = {
  id: 'branchial-cleft-cyst', name: 'Jordan Lee', age: '12F', dob: '2013-03-15',
  mrn: 'RDX-2026-76221', setting: 'Peds Surgery', category: 'pediatric', acuity: 2,
  chiefComplaint: '2nd Branchial Cleft Cyst — Lateral Neck Mass',
  diagnosis: '2nd Branchial Cleft Cyst — Lateral Neck Mass',
  presentation: {
    hpi: 'Jordan Lee, presenting with 2nd Branchial Cleft Cyst — Lateral Neck Mass. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-branchial-cleft-cyst', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-branchial-cleft-cyst', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for 2nd Branchial Cleft Cyst — Lateral Neck Mass available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for 2nd Branchial Cleft Cyst — Lateral Neck Mass available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: '2nd Branchial Cleft Cyst — Lateral Neck Mass', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
