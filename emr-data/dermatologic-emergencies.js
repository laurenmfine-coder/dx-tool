/* emr-data/dermatologic-emergencies.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'sjs-ten' — see emr-data/sjs-ten.js */
if (window.CASES['sjs-ten']) {
  window.CASES['dermatologic-emergencies'] = window.CASES['sjs-ten'];
} else {
  window.CASES['dermatologic-emergencies'] = {
    id: 'dermatologic-emergencies', name: 'See sjs-ten', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for dermatologic-emergencies',
    diagnosis: 'Alias for sjs-ten',
    presentation: { hpi: 'See sjs-ten case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
