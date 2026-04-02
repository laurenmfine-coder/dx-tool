/* emr-data/acs.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'stemi-v1' — see emr-data/stemi-v1.js */
if (window.CASES['stemi-v1']) {
  window.CASES['acs'] = window.CASES['stemi-v1'];
} else {
  window.CASES['acs'] = {
    id: 'acs', name: 'See stemi-v1', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for acs',
    diagnosis: 'Alias for stemi-v1',
    presentation: { hpi: 'See stemi-v1 case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
