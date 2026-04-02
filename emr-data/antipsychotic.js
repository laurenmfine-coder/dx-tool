/* emr-data/antipsychotic.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'schizophrenia' — see emr-data/schizophrenia.js */
if (window.CASES['schizophrenia']) {
  window.CASES['antipsychotic'] = window.CASES['schizophrenia'];
} else {
  window.CASES['antipsychotic'] = {
    id: 'antipsychotic', name: 'See schizophrenia', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for antipsychotic',
    diagnosis: 'Alias for schizophrenia',
    presentation: { hpi: 'See schizophrenia case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
