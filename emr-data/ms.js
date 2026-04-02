/* emr-data/ms.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'multiple-sclerosis' — see emr-data/multiple-sclerosis.js */
if (window.CASES['multiple-sclerosis']) {
  window.CASES['ms'] = window.CASES['multiple-sclerosis'];
} else {
  window.CASES['ms'] = {
    id: 'ms', name: 'See multiple-sclerosis', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for ms',
    diagnosis: 'Alias for multiple-sclerosis',
    presentation: { hpi: 'See multiple-sclerosis case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
