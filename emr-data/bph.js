/* emr-data/bph.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'urinary-retention' — see emr-data/urinary-retention.js */
if (window.CASES['urinary-retention']) {
  window.CASES['bph'] = window.CASES['urinary-retention'];
} else {
  window.CASES['bph'] = {
    id: 'bph', name: 'See urinary-retention', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for bph',
    diagnosis: 'Alias for urinary-retention',
    presentation: { hpi: 'See urinary-retention case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
