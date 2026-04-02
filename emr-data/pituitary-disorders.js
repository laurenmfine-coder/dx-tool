/* emr-data/pituitary-disorders.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'adrenal-crisis' — see emr-data/adrenal-crisis.js */
if (window.CASES['adrenal-crisis']) {
  window.CASES['pituitary-disorders'] = window.CASES['adrenal-crisis'];
} else {
  window.CASES['pituitary-disorders'] = {
    id: 'pituitary-disorders', name: 'See adrenal-crisis', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for pituitary-disorders',
    diagnosis: 'Alias for adrenal-crisis',
    presentation: { hpi: 'See adrenal-crisis case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
