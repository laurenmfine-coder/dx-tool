/* emr-data/antidepressant.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'depression' — see emr-data/depression.js */
if (window.CASES['depression']) {
  window.CASES['antidepressant'] = window.CASES['depression'];
} else {
  window.CASES['antidepressant'] = {
    id: 'antidepressant', name: 'See depression', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for antidepressant',
    diagnosis: 'Alias for depression',
    presentation: { hpi: 'See depression case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
