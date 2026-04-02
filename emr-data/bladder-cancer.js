/* emr-data/bladder-cancer.js — Bladder Cancer — TURBT + BCG Intravesical Therapy */
window.CASES = window.CASES || {};
window.CASES['bladder-cancer'] = {
  id: 'bladder-cancer', name: 'Michael Torres', age: '67M', dob: '1959-01-15',
  mrn: 'RDX-2026-17420', setting: 'Urology Oncology', category: 'oncologic', acuity: 2,
  chiefComplaint: 'Bladder Cancer — TURBT + BCG Intravesical Therapy',
  diagnosis: 'Bladder Cancer — TURBT + BCG Intravesical Therapy',
  presentation: {
    hpi: 'Michael Torres, presenting with Bladder Cancer — TURBT + BCG Intravesical Therapy. See topic page for complete clinical details and pathophysiology.',
    pmh: ['See clinical encounter for complete PMH'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [
      { id: 'mgmt-bladder-cancer', name: 'Evidence-based management — see CoachDx for full framework',
         rationale: 'Full correct order set with rationale available in CoachDx coaching mode for this topic.' }
    ],
    incorrect: [
      { id: 'pitfall-bladder-cancer', name: 'Common pitfall — see CoachDx for misconceptions',
         rationale: 'Common errors and dangerous misconceptions covered in CoachDx coaching content.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Key learning points for Bladder Cancer — TURBT + BCG Intravesical Therapy available in CoachDx coaching mode.',
      'Practice this case then discuss with CoachDx for full clinical reasoning framework.'
    ],
    boardPearls: ['Board-relevant pearls for Bladder Cancer — TURBT + BCG Intravesical Therapy available in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Bladder Cancer — TURBT + BCG Intravesical Therapy', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
