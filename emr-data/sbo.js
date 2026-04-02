/* emr-data/sbo.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'bowel-obstruction' — see emr-data/bowel-obstruction.js */
if (window.CASES['bowel-obstruction']) {
  window.CASES['sbo'] = window.CASES['bowel-obstruction'];
} else {
  window.CASES['sbo'] = {
    id: 'sbo', name: 'See bowel-obstruction', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for sbo',
    diagnosis: 'Alias for bowel-obstruction',
    presentation: { hpi: 'See bowel-obstruction case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
