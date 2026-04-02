/* emr-data/prostate-cancer.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'bladder-cancer' — see emr-data/bladder-cancer.js */
if (window.CASES['bladder-cancer']) {
  window.CASES['prostate-cancer'] = window.CASES['bladder-cancer'];
} else {
  window.CASES['prostate-cancer'] = {
    id: 'prostate-cancer', name: 'See bladder-cancer', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for prostate-cancer',
    diagnosis: 'Alias for bladder-cancer',
    presentation: { hpi: 'See bladder-cancer case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
