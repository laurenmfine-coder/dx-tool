/* emr-data/acls-rhythms.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'seizure-disorders' — see emr-data/seizure-disorders.js */
if (window.CASES['seizure-disorders']) {
  window.CASES['acls-rhythms'] = window.CASES['seizure-disorders'];
} else {
  window.CASES['acls-rhythms'] = {
    id: 'acls-rhythms', name: 'See seizure-disorders', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for acls-rhythms',
    diagnosis: 'Alias for seizure-disorders',
    presentation: { hpi: 'See seizure-disorders case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
