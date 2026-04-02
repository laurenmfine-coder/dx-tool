/* emr-data/horseshoe-kidney.js — Horseshoe Kidney — Under IMA + UPJ Risk */
window.CASES = window.CASES || {};
window.CASES['horseshoe-kidney'] = {
  id: 'horseshoe-kidney', name: 'David Brown', age: '28M', dob: '1998-03-15',
  mrn: 'RDX-2026-43527', setting: 'Urology Clinic', category: 'urologic', acuity: 2,
  chiefComplaint: 'Horseshoe Kidney — Under IMA + UPJ Risk',
  diagnosis: 'Horseshoe Kidney — Under IMA + UPJ Risk',
  presentation: {
    hpi: 'David Brown, presenting with Horseshoe Kidney — Under IMA + UPJ Risk. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-horseshoe-kidney', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-horseshoe-kidney', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Horseshoe Kidney — Under IMA + UPJ Risk available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Horseshoe Kidney — Under IMA + UPJ Risk available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Horseshoe Kidney — Under IMA + UPJ Risk', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
