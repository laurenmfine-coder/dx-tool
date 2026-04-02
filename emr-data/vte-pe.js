/* emr-data/vte-pe.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'pe-v1' — see emr-data/pe-v1.js */
if (window.CASES['pe-v1']) {
  window.CASES['vte-pe'] = window.CASES['pe-v1'];
} else {
  window.CASES['vte-pe'] = {
    id: 'vte-pe', name: 'See pe-v1', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for vte-pe',
    diagnosis: 'Alias for pe-v1',
    presentation: { hpi: 'See pe-v1 case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
