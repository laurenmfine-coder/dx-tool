/* emr-data/pft-interpretation.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'copd-v1' — see emr-data/copd-v1.js */
if (window.CASES['copd-v1']) {
  window.CASES['pft-interpretation'] = window.CASES['copd-v1'];
} else {
  window.CASES['pft-interpretation'] = {
    id: 'pft-interpretation', name: 'See copd-v1', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for pft-interpretation',
    diagnosis: 'Alias for copd-v1',
    presentation: { hpi: 'See copd-v1 case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
