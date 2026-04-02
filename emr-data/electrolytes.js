/* emr-data/electrolytes.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'aki-workup' — see emr-data/aki-workup.js */
if (window.CASES['aki-workup']) {
  window.CASES['electrolytes'] = window.CASES['aki-workup'];
} else {
  window.CASES['electrolytes'] = {
    id: 'electrolytes', name: 'See aki-workup', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for electrolytes',
    diagnosis: 'Alias for aki-workup',
    presentation: { hpi: 'See aki-workup case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
