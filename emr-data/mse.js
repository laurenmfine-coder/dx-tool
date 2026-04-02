/* emr-data/mse.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'altered-mental-status' — see emr-data/altered-mental-status.js */
if (window.CASES['altered-mental-status']) {
  window.CASES['mse'] = window.CASES['altered-mental-status'];
} else {
  window.CASES['mse'] = {
    id: 'mse', name: 'See altered-mental-status', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for mse',
    diagnosis: 'Alias for altered-mental-status',
    presentation: { hpi: 'See altered-mental-status case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
