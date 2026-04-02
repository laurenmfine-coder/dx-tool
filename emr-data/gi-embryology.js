/* emr-data/gi-embryology.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'malrotation-volvulus' — see emr-data/malrotation-volvulus.js */
if (window.CASES['malrotation-volvulus']) {
  window.CASES['gi-embryology'] = window.CASES['malrotation-volvulus'];
} else {
  window.CASES['gi-embryology'] = {
    id: 'gi-embryology', name: 'See malrotation-volvulus', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for gi-embryology',
    diagnosis: 'Alias for malrotation-volvulus',
    presentation: { hpi: 'See malrotation-volvulus case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
