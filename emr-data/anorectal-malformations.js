/* emr-data/anorectal-malformations.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'imperforate-anus' — see emr-data/imperforate-anus.js */
if (window.CASES['imperforate-anus']) {
  window.CASES['anorectal-malformations'] = window.CASES['imperforate-anus'];
} else {
  window.CASES['anorectal-malformations'] = {
    id: 'anorectal-malformations', name: 'See imperforate-anus', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for anorectal-malformations',
    diagnosis: 'Alias for imperforate-anus',
    presentation: { hpi: 'See imperforate-anus case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
