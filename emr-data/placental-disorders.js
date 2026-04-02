/* emr-data/placental-disorders.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'postpartum-hemorrhage' — see emr-data/postpartum-hemorrhage.js */
if (window.CASES['postpartum-hemorrhage']) {
  window.CASES['placental-disorders'] = window.CASES['postpartum-hemorrhage'];
} else {
  window.CASES['placental-disorders'] = {
    id: 'placental-disorders', name: 'See postpartum-hemorrhage', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for placental-disorders',
    diagnosis: 'Alias for postpartum-hemorrhage',
    presentation: { hpi: 'See postpartum-hemorrhage case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
