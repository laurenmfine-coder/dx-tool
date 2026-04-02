/* emr-data/cdh-repair.js */
window.CASES = window.CASES || {};
window.CASES['cdh-repair'] = {
  id: 'cdh-repair', name: 'Baby Martinez', age: '0d', dob: '2026-03-31',
  mrn: 'RDX-2026-30674', setting: 'Neonatal ICU', category: 'pediatric', acuity: 2,
  chiefComplaint: 'CDH — Bag-Mask Contraindicated, Delayed Repair',
  diagnosis: 'CDH — Bag-Mask Contraindicated, Delayed Repair',
  presentation: {
    hpi: 'Baby Martinez, presenting with CDH — Bag-Mask Contraindicated, Delayed Repair. See CoachDx topic for full clinical details.',
    pmh: ['See clinical encounter'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [{ id: 'mgmt', name: 'Evidence-based management — see CoachDx', rationale: 'Full correct order set in CoachDx coaching mode.' }],
    incorrect: [{ id: 'pitfall', name: 'Common pitfall — see CoachDx', rationale: 'Common errors covered in CoachDx coaching content.' }]
  },
  teachingPoints: {
    keyLearning: ['Key learning for CDH — Bag-Mask Contraindicated, Delayed Repair in CoachDx coaching mode.'],
    boardPearls: ['Board pearls for CDH — Bag-Mask Contraindicated, Delayed Repair in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'CDH — Bag-Mask Contraindicated, Delayed Repair', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
