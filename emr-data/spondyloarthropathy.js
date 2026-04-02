/* emr-data/spondyloarthropathy.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'septic-arthritis' — see emr-data/septic-arthritis.js */
if (window.CASES['septic-arthritis']) {
  window.CASES['spondyloarthropathy'] = window.CASES['septic-arthritis'];
} else {
  window.CASES['spondyloarthropathy'] = {
    id: 'spondyloarthropathy', name: 'See septic-arthritis', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for spondyloarthropathy',
    diagnosis: 'Alias for septic-arthritis',
    presentation: { hpi: 'See septic-arthritis case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
