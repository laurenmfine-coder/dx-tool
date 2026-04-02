/* emr-data/sepsis-shock.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'shock' — see emr-data/shock.js */
if (window.CASES['shock']) {
  window.CASES['sepsis-shock'] = window.CASES['shock'];
} else {
  window.CASES['sepsis-shock'] = {
    id: 'sepsis-shock', name: 'See shock', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for sepsis-shock',
    diagnosis: 'Alias for shock',
    presentation: { hpi: 'See shock case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
