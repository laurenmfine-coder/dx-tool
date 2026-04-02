/* emr-data/ent-emergencies.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'sinusitis' — see emr-data/sinusitis.js */
if (window.CASES['sinusitis']) {
  window.CASES['ent-emergencies'] = window.CASES['sinusitis'];
} else {
  window.CASES['ent-emergencies'] = {
    id: 'ent-emergencies', name: 'See sinusitis', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for ent-emergencies',
    diagnosis: 'Alias for sinusitis',
    presentation: { hpi: 'See sinusitis case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
