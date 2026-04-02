/* emr-data/thyroid-deep-dive.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'thyroid-storm' — see emr-data/thyroid-storm.js */
if (window.CASES['thyroid-storm']) {
  window.CASES['thyroid-deep-dive'] = window.CASES['thyroid-storm'];
} else {
  window.CASES['thyroid-deep-dive'] = {
    id: 'thyroid-deep-dive', name: 'See thyroid-storm', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for thyroid-deep-dive',
    diagnosis: 'Alias for thyroid-storm',
    presentation: { hpi: 'See thyroid-storm case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
