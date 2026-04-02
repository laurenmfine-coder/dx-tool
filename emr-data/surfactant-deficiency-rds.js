/* emr-data/surfactant-deficiency-rds.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'rds-prematurity' — see emr-data/rds-prematurity.js */
if (window.CASES['rds-prematurity']) {
  window.CASES['surfactant-deficiency-rds'] = window.CASES['rds-prematurity'];
} else {
  window.CASES['surfactant-deficiency-rds'] = {
    id: 'surfactant-deficiency-rds', name: 'See rds-prematurity', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for surfactant-deficiency-rds',
    diagnosis: 'Alias for rds-prematurity',
    presentation: { hpi: 'See rds-prematurity case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
