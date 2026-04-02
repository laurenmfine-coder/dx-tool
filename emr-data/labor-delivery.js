/* emr-data/labor-delivery.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'postpartum-hemorrhage' — see emr-data/postpartum-hemorrhage.js */
if (window.CASES['postpartum-hemorrhage']) {
  window.CASES['labor-delivery'] = window.CASES['postpartum-hemorrhage'];
} else {
  window.CASES['labor-delivery'] = {
    id: 'labor-delivery', name: 'See postpartum-hemorrhage', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for labor-delivery',
    diagnosis: 'Alias for postpartum-hemorrhage',
    presentation: { hpi: 'See postpartum-hemorrhage case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
