/* emr-data/aub.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'pid-toa' — see emr-data/pid-toa.js */
if (window.CASES['pid-toa']) {
  window.CASES['aub'] = window.CASES['pid-toa'];
} else {
  window.CASES['aub'] = {
    id: 'aub', name: 'See pid-toa', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for aub',
    diagnosis: 'Alias for pid-toa',
    presentation: { hpi: 'See pid-toa case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
