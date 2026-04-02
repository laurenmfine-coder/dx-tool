/* emr-data/dfi.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'osteomyelitis' — see emr-data/osteomyelitis.js */
if (window.CASES['osteomyelitis']) {
  window.CASES['dfi'] = window.CASES['osteomyelitis'];
} else {
  window.CASES['dfi'] = {
    id: 'dfi', name: 'See osteomyelitis', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for dfi',
    diagnosis: 'Alias for osteomyelitis',
    presentation: { hpi: 'See osteomyelitis case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
