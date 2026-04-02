/* emr-data/toxidromes.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'organophosphate' — see emr-data/organophosphate.js */
if (window.CASES['organophosphate']) {
  window.CASES['toxidromes'] = window.CASES['organophosphate'];
} else {
  window.CASES['toxidromes'] = {
    id: 'toxidromes', name: 'See organophosphate', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for toxidromes',
    diagnosis: 'Alias for organophosphate',
    presentation: { hpi: 'See organophosphate case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
