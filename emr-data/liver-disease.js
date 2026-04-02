/* emr-data/liver-disease.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'cirrhosis-decompensated' — see emr-data/cirrhosis-decompensated.js */
if (window.CASES['cirrhosis-decompensated']) {
  window.CASES['liver-disease'] = window.CASES['cirrhosis-decompensated'];
} else {
  window.CASES['liver-disease'] = {
    id: 'liver-disease', name: 'See cirrhosis-decompensated', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for liver-disease',
    diagnosis: 'Alias for cirrhosis-decompensated',
    presentation: { hpi: 'See cirrhosis-decompensated case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
