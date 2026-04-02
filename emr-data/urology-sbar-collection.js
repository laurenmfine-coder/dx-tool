/* emr-data/urology-sbar-collection.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'kidney-stones' — see emr-data/kidney-stones.js */
if (window.CASES['kidney-stones']) {
  window.CASES['urology-sbar-collection'] = window.CASES['kidney-stones'];
} else {
  window.CASES['urology-sbar-collection'] = {
    id: 'urology-sbar-collection', name: 'See kidney-stones', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for urology-sbar-collection',
    diagnosis: 'Alias for kidney-stones',
    presentation: { hpi: 'See kidney-stones case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
