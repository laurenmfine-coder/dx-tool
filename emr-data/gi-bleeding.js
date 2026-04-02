/* emr-data/gi-bleeding.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'gerd-pud' — see emr-data/gerd-pud.js */
if (window.CASES['gerd-pud']) {
  window.CASES['gi-bleeding'] = window.CASES['gerd-pud'];
} else {
  window.CASES['gi-bleeding'] = {
    id: 'gi-bleeding', name: 'See gerd-pud', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for gi-bleeding',
    diagnosis: 'Alias for gerd-pud',
    presentation: { hpi: 'See gerd-pud case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
