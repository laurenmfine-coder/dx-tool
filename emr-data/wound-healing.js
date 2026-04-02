/* emr-data/wound-healing.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'burns' — see emr-data/burns.js */
if (window.CASES['burns']) {
  window.CASES['wound-healing'] = window.CASES['burns'];
} else {
  window.CASES['wound-healing'] = {
    id: 'wound-healing', name: 'See burns', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for wound-healing',
    diagnosis: 'Alias for burns',
    presentation: { hpi: 'See burns case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
