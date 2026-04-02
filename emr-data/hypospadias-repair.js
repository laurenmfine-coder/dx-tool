/* emr-data/hypospadias-repair.js — Hypospadias — Never Circumcise Before Repair */
window.CASES = window.CASES || {};
window.CASES['hypospadias-repair'] = {
  id: 'hypospadias-repair', name: 'Lucas Torres', age: '3M', dob: '2025-12-31',
  mrn: 'RDX-2026-27154', setting: 'Peds Urology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Hypospadias — Never Circumcise Before Repair',
  diagnosis: 'Hypospadias — Never Circumcise Before Repair',
  presentation: {
    hpi: 'Lucas Torres, presenting with Hypospadias — Never Circumcise Before Repair. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-hypospadias-repair', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-hypospadias-repair', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Hypospadias — Never Circumcise Before Repair available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Hypospadias — Never Circumcise Before Repair available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Hypospadias — Never Circumcise Before Repair', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
