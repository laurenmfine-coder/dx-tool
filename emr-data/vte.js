/* emr-data/vte.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'dvt' — see emr-data/dvt.js */
if (window.CASES['dvt']) {
  window.CASES['vte'] = window.CASES['dvt'];
} else {
  window.CASES['vte'] = {
    id: 'vte', name: 'See dvt', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for vte',
    diagnosis: 'Alias for dvt',
    presentation: { hpi: 'See dvt case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
