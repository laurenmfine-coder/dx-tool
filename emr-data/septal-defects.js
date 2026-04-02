/* emr-data/septal-defects.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'vsd-repair' — see emr-data/vsd-repair.js */
if (window.CASES['vsd-repair']) {
  window.CASES['septal-defects'] = window.CASES['vsd-repair'];
} else {
  window.CASES['septal-defects'] = {
    id: 'septal-defects', name: 'See vsd-repair', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for septal-defects',
    diagnosis: 'Alias for vsd-repair',
    presentation: { hpi: 'See vsd-repair case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
