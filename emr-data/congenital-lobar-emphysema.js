/* emr-data/congenital-lobar-emphysema.js */
window.CASES = window.CASES || {};
window.CASES['congenital-lobar-emphysema'] = {
  id: 'congenital-lobar-emphysema', name: 'Baby Thompson', age: '2M', dob: '2026-01-31',
  mrn: 'RDX-2026-54455', setting: 'Peds Pulm', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Congenital Lobar Emphysema — Hyperinflation',
  diagnosis: 'Congenital Lobar Emphysema — Hyperinflation',
  presentation: {
    hpi: 'Baby Thompson, presenting with Congenital Lobar Emphysema — Hyperinflation. See CoachDx topic for full clinical details.',
    pmh: ['See clinical encounter'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [{ id: 'mgmt', name: 'Evidence-based management — see CoachDx', rationale: 'Full correct order set in CoachDx coaching mode.' }],
    incorrect: [{ id: 'pitfall', name: 'Common pitfall — see CoachDx', rationale: 'Common errors covered in CoachDx coaching content.' }]
  },
  teachingPoints: {
    keyLearning: ['Key learning for Congenital Lobar Emphysema — Hyperinflation in CoachDx coaching mode.'],
    boardPearls: ['Board pearls for Congenital Lobar Emphysema — Hyperinflation in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Congenital Lobar Emphysema — Hyperinflation', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
