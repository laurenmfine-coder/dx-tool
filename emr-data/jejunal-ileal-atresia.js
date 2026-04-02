/* emr-data/jejunal-ileal-atresia.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'duodenal-atresia' — see emr-data/duodenal-atresia.js */
if (window.CASES['duodenal-atresia']) {
  window.CASES['jejunal-ileal-atresia'] = window.CASES['duodenal-atresia'];
} else {
  window.CASES['jejunal-ileal-atresia'] = {
    id: 'jejunal-ileal-atresia', name: 'See duodenal-atresia', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for jejunal-ileal-atresia',
    diagnosis: 'Alias for duodenal-atresia',
    presentation: { hpi: 'See duodenal-atresia case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
