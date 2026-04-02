/* emr-data/labor-stages.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'postpartum-hemorrhage' — see emr-data/postpartum-hemorrhage.js */
if (window.CASES['postpartum-hemorrhage']) {
  window.CASES['labor-stages'] = window.CASES['postpartum-hemorrhage'];
} else {
  window.CASES['labor-stages'] = {
    id: 'labor-stages', name: 'See postpartum-hemorrhage', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for labor-stages',
    diagnosis: 'Alias for postpartum-hemorrhage',
    presentation: { hpi: 'See postpartum-hemorrhage case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
