/* emr-data/toxic-alcohols.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'alcohol-withdrawal' — see emr-data/alcohol-withdrawal.js */
if (window.CASES['alcohol-withdrawal']) {
  window.CASES['toxic-alcohols'] = window.CASES['alcohol-withdrawal'];
} else {
  window.CASES['toxic-alcohols'] = {
    id: 'toxic-alcohols', name: 'See alcohol-withdrawal', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for toxic-alcohols',
    diagnosis: 'Alias for alcohol-withdrawal',
    presentation: { hpi: 'See alcohol-withdrawal case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
