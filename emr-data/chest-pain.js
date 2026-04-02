/* emr-data/chest-pain.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'stemi-v3' — see emr-data/stemi-v3.js */
if (window.CASES['stemi-v3']) {
  window.CASES['chest-pain'] = window.CASES['stemi-v3'];
} else {
  window.CASES['chest-pain'] = {
    id: 'chest-pain', name: 'See stemi-v3', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for chest-pain',
    diagnosis: 'Alias for stemi-v3',
    presentation: { hpi: 'See stemi-v3 case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
