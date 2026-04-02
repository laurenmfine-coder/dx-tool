/* emr-data/well-child-milestones.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'developmental-delay' — see emr-data/developmental-delay.js */
if (window.CASES['developmental-delay']) {
  window.CASES['well-child-milestones'] = window.CASES['developmental-delay'];
} else {
  window.CASES['well-child-milestones'] = {
    id: 'well-child-milestones', name: 'See developmental-delay', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for well-child-milestones',
    diagnosis: 'Alias for developmental-delay',
    presentation: { hpi: 'See developmental-delay case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
