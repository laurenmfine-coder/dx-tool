/* emr-data/biliary-disease.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'cholecystitis' — see emr-data/cholecystitis.js */
if (window.CASES['cholecystitis']) {
  window.CASES['biliary-disease'] = window.CASES['cholecystitis'];
} else {
  window.CASES['biliary-disease'] = {
    id: 'biliary-disease', name: 'See cholecystitis', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for biliary-disease',
    diagnosis: 'Alias for cholecystitis',
    presentation: { hpi: 'See cholecystitis case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
