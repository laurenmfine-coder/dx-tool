/* emr-data/dvt-pe.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'dvt' — see emr-data/dvt.js */
if (window.CASES['dvt']) {
  window.CASES['dvt-pe'] = window.CASES['dvt'];
} else {
  window.CASES['dvt-pe'] = {
    id: 'dvt-pe', name: 'See dvt', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for dvt-pe',
    diagnosis: 'Alias for dvt',
    presentation: { hpi: 'See dvt case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
