/* emr-data/acute-abdomen.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'appendicitis-v1' — see emr-data/appendicitis-v1.js */
if (window.CASES['appendicitis-v1']) {
  window.CASES['acute-abdomen'] = window.CASES['appendicitis-v1'];
} else {
  window.CASES['acute-abdomen'] = {
    id: 'acute-abdomen', name: 'See appendicitis-v1', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for acute-abdomen',
    diagnosis: 'Alias for appendicitis-v1',
    presentation: { hpi: 'See appendicitis-v1 case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
