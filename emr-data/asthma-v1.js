/* emr-data/asthma-v1.js */
window.CASES = window.CASES || {};
window.CASES['asthma-v1'] = {
  id: 'asthma-v1', name: 'Carlos Rivera', age: '16M', dob: '2009-11-15',
  mrn: 'RDX-2026-14798', setting: 'Allergy Clinic', category: 'pulmonary', acuity: 2,
  chiefComplaint: 'Asthma — Step Therapy and Inhaler Technique',
  diagnosis: 'Asthma — Step Therapy and Inhaler Technique',
  presentation: {
    hpi: 'Carlos Rivera, presenting with Asthma — Step Therapy and Inhaler Technique. See CoachDx topic for full clinical details.',
    pmh: ['See clinical encounter'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'See encounter', HR: 'See encounter', RR: 'See encounter', Temp: '37.0°C', SpO2: '98%' },
  labs: { 'Diagnostic workup': 'Key diagnostic findings detailed in topic coaching content' },
  orders: {
    correct: [{ id: 'mgmt', name: 'Evidence-based management — see CoachDx', rationale: 'Full correct order set in CoachDx coaching mode.' }],
    incorrect: [{ id: 'pitfall', name: 'Common pitfall — see CoachDx', rationale: 'Common errors covered in CoachDx coaching content.' }]
  },
  teachingPoints: {
    keyLearning: ['Key learning for Asthma — Step Therapy and Inhaler Technique in CoachDx coaching mode.'],
    boardPearls: ['Board pearls for Asthma — Step Therapy and Inhaler Technique in CoachDx.']
  },
  references: [{ id: 'StatPearls', title: 'Asthma — Step Therapy and Inhaler Technique', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/', openAccess: true }]
};
