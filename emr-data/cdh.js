/* emr-data/cdh.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'cdh-repair' — see emr-data/cdh-repair.js */
if (window.CASES['cdh-repair']) {
  window.CASES['cdh'] = window.CASES['cdh-repair'];
} else {
  window.CASES['cdh'] = {
    id: 'cdh', name: 'See cdh-repair', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for cdh',
    diagnosis: 'Alias for cdh-repair',
    presentation: { hpi: 'See cdh-repair case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
