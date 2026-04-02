/* emr-data/developmental-delay.js — Developmental Delay — Red Flag Workup */
window.CASES = window.CASES || {};
window.CASES['developmental-delay'] = {
  id: 'developmental-delay', name: 'Jacob Wilson', age: '24M', dob: '2023-11-30',
  mrn: 'RDX-2026-77550', setting: 'Dev Peds Clinic', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Developmental Delay — Red Flag Workup',
  diagnosis: 'Developmental Delay — Red Flag Workup',
  presentation: {
    hpi: 'Jacob Wilson, presenting with Developmental Delay — Red Flag Workup. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-developmental-delay', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-developmental-delay', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Developmental Delay — Red Flag Workup available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Developmental Delay — Red Flag Workup available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Developmental Delay — Red Flag Workup', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
