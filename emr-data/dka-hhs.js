/* emr-data/dka-hhs.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'dka-v1' — see emr-data/dka-v1.js */
if (window.CASES['dka-v1']) {
  window.CASES['dka-hhs'] = window.CASES['dka-v1'];
} else {
  window.CASES['dka-hhs'] = {
    id: 'dka-hhs', name: 'See dka-v1', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for dka-hhs',
    diagnosis: 'Alias for dka-v1',
    presentation: { hpi: 'See dka-v1 case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
