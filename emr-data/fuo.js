/* emr-data/fuo.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'infective-endocarditis' — see emr-data/infective-endocarditis.js */
if (window.CASES['infective-endocarditis']) {
  window.CASES['fuo'] = window.CASES['infective-endocarditis'];
} else {
  window.CASES['fuo'] = {
    id: 'fuo', name: 'See infective-endocarditis', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for fuo',
    diagnosis: 'Alias for infective-endocarditis',
    presentation: { hpi: 'See infective-endocarditis case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
