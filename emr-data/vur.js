/* emr-data/vur.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'vur-uti' — see emr-data/vur-uti.js */
if (window.CASES['vur-uti']) {
  window.CASES['vur'] = window.CASES['vur-uti'];
} else {
  window.CASES['vur'] = {
    id: 'vur', name: 'See vur-uti', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for vur',
    diagnosis: 'Alias for vur-uti',
    presentation: { hpi: 'See vur-uti case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
