/* emr-data/puv-obstructive-uropathy.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'puv' — see emr-data/puv.js */
if (window.CASES['puv']) {
  window.CASES['puv-obstructive-uropathy'] = window.CASES['puv'];
} else {
  window.CASES['puv-obstructive-uropathy'] = {
    id: 'puv-obstructive-uropathy', name: 'See puv', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for puv-obstructive-uropathy',
    diagnosis: 'Alias for puv',
    presentation: { hpi: 'See puv case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
