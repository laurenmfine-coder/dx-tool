/* emr-data/inhaler-spacer.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'asthma-v1' — see emr-data/asthma-v1.js */
if (window.CASES['asthma-v1']) {
  window.CASES['inhaler-spacer'] = window.CASES['asthma-v1'];
} else {
  window.CASES['inhaler-spacer'] = {
    id: 'inhaler-spacer', name: 'See asthma-v1', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for inhaler-spacer',
    diagnosis: 'Alias for asthma-v1',
    presentation: { hpi: 'See asthma-v1 case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
