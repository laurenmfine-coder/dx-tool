/* emr-data/chiari.js — Chiari I — Occipital Headache + Syringomyelia */
window.CASES = window.CASES || {};
window.CASES['chiari'] = {
  id: 'chiari', name: 'Alex Morgan', age: '16M', dob: '2009-09-15',
  mrn: 'RDX-2026-31691', setting: 'Neurology Clinic', category: 'neurologic', acuity: 2,
  chiefComplaint: 'Chiari I — Occipital Headache + Syringomyelia',
  diagnosis: 'Chiari I — Occipital Headache + Syringomyelia',
  presentation: {
    hpi: 'Alex Morgan, presenting with Chiari I — Occipital Headache + Syringomyelia. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-chiari', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-chiari', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Chiari I — Occipital Headache + Syringomyelia available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Chiari I — Occipital Headache + Syringomyelia available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Chiari I — Occipital Headache + Syringomyelia', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
