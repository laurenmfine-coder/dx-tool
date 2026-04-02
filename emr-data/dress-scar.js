/* emr-data/dress-scar.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'sjs-ten' — see emr-data/sjs-ten.js */
if (window.CASES['sjs-ten']) {
  window.CASES['dress-scar'] = window.CASES['sjs-ten'];
} else {
  window.CASES['dress-scar'] = {
    id: 'dress-scar', name: 'See sjs-ten', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for dress-scar',
    diagnosis: 'Alias for sjs-ten',
    presentation: { hpi: 'See sjs-ten case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
