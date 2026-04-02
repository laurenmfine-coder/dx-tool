/* emr-data/posterior-urethral-valves.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'puv' — see emr-data/puv.js */
if (window.CASES['puv']) {
  window.CASES['posterior-urethral-valves'] = window.CASES['puv'];
} else {
  window.CASES['posterior-urethral-valves'] = {
    id: 'posterior-urethral-valves', name: 'See puv', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for posterior-urethral-valves',
    diagnosis: 'Alias for puv',
    presentation: { hpi: 'See puv case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
