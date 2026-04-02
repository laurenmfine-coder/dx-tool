/* emr-data/sle.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'sle-flare' — see emr-data/sle-flare.js */
if (window.CASES['sle-flare']) {
  window.CASES['sle'] = window.CASES['sle-flare'];
} else {
  window.CASES['sle'] = {
    id: 'sle', name: 'See sle-flare', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for sle',
    diagnosis: 'Alias for sle-flare',
    presentation: { hpi: 'See sle-flare case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
