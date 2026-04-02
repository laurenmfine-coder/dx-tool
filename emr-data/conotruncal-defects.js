/* emr-data/conotruncal-defects.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'tetralogy-of-fallot' — see emr-data/tetralogy-of-fallot.js */
if (window.CASES['tetralogy-of-fallot']) {
  window.CASES['conotruncal-defects'] = window.CASES['tetralogy-of-fallot'];
} else {
  window.CASES['conotruncal-defects'] = {
    id: 'conotruncal-defects', name: 'See tetralogy-of-fallot', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for conotruncal-defects',
    diagnosis: 'Alias for tetralogy-of-fallot',
    presentation: { hpi: 'See tetralogy-of-fallot case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
