/* emr-data/cpam-bronchogenic-cyst.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'cpam' — see emr-data/cpam.js */
if (window.CASES['cpam']) {
  window.CASES['cpam-bronchogenic-cyst'] = window.CASES['cpam'];
} else {
  window.CASES['cpam-bronchogenic-cyst'] = {
    id: 'cpam-bronchogenic-cyst', name: 'See cpam', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for cpam-bronchogenic-cyst',
    diagnosis: 'Alias for cpam',
    presentation: { hpi: 'See cpam case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
