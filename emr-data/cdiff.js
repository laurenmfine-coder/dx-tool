/* emr-data/cdiff.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'cdiff-colitis' — see emr-data/cdiff-colitis.js */
if (window.CASES['cdiff-colitis']) {
  window.CASES['cdiff'] = window.CASES['cdiff-colitis'];
} else {
  window.CASES['cdiff'] = {
    id: 'cdiff', name: 'See cdiff-colitis', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for cdiff',
    diagnosis: 'Alias for cdiff-colitis',
    presentation: { hpi: 'See cdiff-colitis case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
