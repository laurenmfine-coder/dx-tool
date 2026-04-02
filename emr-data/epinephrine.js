/* emr-data/epinephrine.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'anaphylaxis' — see emr-data/anaphylaxis.js */
if (window.CASES['anaphylaxis']) {
  window.CASES['epinephrine'] = window.CASES['anaphylaxis'];
} else {
  window.CASES['epinephrine'] = {
    id: 'epinephrine', name: 'See anaphylaxis', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for epinephrine',
    diagnosis: 'Alias for anaphylaxis',
    presentation: { hpi: 'See anaphylaxis case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
