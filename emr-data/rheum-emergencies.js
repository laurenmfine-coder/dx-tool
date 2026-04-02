/* emr-data/rheum-emergencies.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'sle-flare' — see emr-data/sle-flare.js */
if (window.CASES['sle-flare']) {
  window.CASES['rheum-emergencies'] = window.CASES['sle-flare'];
} else {
  window.CASES['rheum-emergencies'] = {
    id: 'rheum-emergencies', name: 'See sle-flare', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for rheum-emergencies',
    diagnosis: 'Alias for sle-flare',
    presentation: { hpi: 'See sle-flare case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
