/* emr-data/amniotic-band.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'clubfoot' — see emr-data/clubfoot.js */
if (window.CASES['clubfoot']) {
  window.CASES['amniotic-band'] = window.CASES['clubfoot'];
} else {
  window.CASES['amniotic-band'] = {
    id: 'amniotic-band', name: 'See clubfoot', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for amniotic-band',
    diagnosis: 'Alias for clubfoot',
    presentation: { hpi: 'See clubfoot case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
