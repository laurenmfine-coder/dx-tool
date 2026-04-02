/* emr-data/rcc.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'hematuria' — see emr-data/hematuria.js */
if (window.CASES['hematuria']) {
  window.CASES['rcc'] = window.CASES['hematuria'];
} else {
  window.CASES['rcc'] = {
    id: 'rcc', name: 'See hematuria', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for rcc',
    diagnosis: 'Alias for hematuria',
    presentation: { hpi: 'See hematuria case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
