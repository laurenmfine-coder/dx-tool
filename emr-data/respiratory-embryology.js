/* emr-data/respiratory-embryology.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'cpam' — see emr-data/cpam.js */
if (window.CASES['cpam']) {
  window.CASES['respiratory-embryology'] = window.CASES['cpam'];
} else {
  window.CASES['respiratory-embryology'] = {
    id: 'respiratory-embryology', name: 'See cpam', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for respiratory-embryology',
    diagnosis: 'Alias for cpam',
    presentation: { hpi: 'See cpam case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
