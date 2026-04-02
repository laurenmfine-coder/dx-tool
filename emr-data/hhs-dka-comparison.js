/* emr-data/hhs-dka-comparison.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'dka-v1' — see emr-data/dka-v1.js */
if (window.CASES['dka-v1']) {
  window.CASES['hhs-dka-comparison'] = window.CASES['dka-v1'];
} else {
  window.CASES['hhs-dka-comparison'] = {
    id: 'hhs-dka-comparison', name: 'See dka-v1', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for hhs-dka-comparison',
    diagnosis: 'Alias for dka-v1',
    presentation: { hpi: 'See dka-v1 case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
