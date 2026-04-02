/* emr-data/upj-obstruction.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'horseshoe-kidney' — see emr-data/horseshoe-kidney.js */
if (window.CASES['horseshoe-kidney']) {
  window.CASES['upj-obstruction'] = window.CASES['horseshoe-kidney'];
} else {
  window.CASES['upj-obstruction'] = {
    id: 'upj-obstruction', name: 'See horseshoe-kidney', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for upj-obstruction',
    diagnosis: 'Alias for horseshoe-kidney',
    presentation: { hpi: 'See horseshoe-kidney case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
