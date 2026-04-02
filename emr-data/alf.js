/* emr-data/alf.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'acute-liver-failure' — see emr-data/acute-liver-failure.js */
if (window.CASES['acute-liver-failure']) {
  window.CASES['alf'] = window.CASES['acute-liver-failure'];
} else {
  window.CASES['alf'] = {
    id: 'alf', name: 'See acute-liver-failure', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for alf',
    diagnosis: 'Alias for acute-liver-failure',
    presentation: { hpi: 'See acute-liver-failure case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
