/* emr-data/calcium-disorders.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'hypercalcemia' — see emr-data/hypercalcemia.js */
if (window.CASES['hypercalcemia']) {
  window.CASES['calcium-disorders'] = window.CASES['hypercalcemia'];
} else {
  window.CASES['calcium-disorders'] = {
    id: 'calcium-disorders', name: 'See hypercalcemia', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for calcium-disorders',
    diagnosis: 'Alias for hypercalcemia',
    presentation: { hpi: 'See hypercalcemia case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
