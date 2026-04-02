/* emr-data/hemifacial-microsomia.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'pierre-robin' — see emr-data/pierre-robin.js */
if (window.CASES['pierre-robin']) {
  window.CASES['hemifacial-microsomia'] = window.CASES['pierre-robin'];
} else {
  window.CASES['hemifacial-microsomia'] = {
    id: 'hemifacial-microsomia', name: 'See pierre-robin', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for hemifacial-microsomia',
    diagnosis: 'Alias for pierre-robin',
    presentation: { hpi: 'See pierre-robin case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
