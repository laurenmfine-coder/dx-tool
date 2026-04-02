/* emr-data/cleft-lip-palate.js — Cleft Lip/Palate — Rule of 10s Repair Timing */
window.CASES = window.CASES || {};
window.CASES['cleft-lip-palate'] = {
  id: 'cleft-lip-palate', name: 'Sophia Lee', age: '3M', dob: '2025-12-31',
  mrn: 'RDX-2026-93747', setting: 'Craniofacial Clinic', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Cleft Lip/Palate — Rule of 10s Repair Timing',
  diagnosis: 'Cleft Lip/Palate — Rule of 10s Repair Timing',
  presentation: {
    hpi: 'Sophia Lee, presenting with Cleft Lip/Palate — Rule of 10s Repair Timing. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-cleft-lip-palate', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-cleft-lip-palate', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Cleft Lip/Palate — Rule of 10s Repair Timing available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Cleft Lip/Palate — Rule of 10s Repair Timing available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Cleft Lip/Palate — Rule of 10s Repair Timing', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
