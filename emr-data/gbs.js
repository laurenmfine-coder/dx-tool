/* emr-data/gbs.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'guillain-barre' — see emr-data/guillain-barre.js */
if (window.CASES['guillain-barre']) {
  window.CASES['gbs'] = window.CASES['guillain-barre'];
} else {
  window.CASES['gbs'] = {
    id: 'gbs', name: 'See guillain-barre', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for gbs',
    diagnosis: 'Alias for guillain-barre',
    presentation: { hpi: 'See guillain-barre case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
