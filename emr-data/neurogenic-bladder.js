/* emr-data/neurogenic-bladder.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'puv' — see emr-data/puv.js */
if (window.CASES['puv']) {
  window.CASES['neurogenic-bladder'] = window.CASES['puv'];
} else {
  window.CASES['neurogenic-bladder'] = {
    id: 'neurogenic-bladder', name: 'See puv', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for neurogenic-bladder',
    diagnosis: 'Alias for puv',
    presentation: { hpi: 'See puv case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
