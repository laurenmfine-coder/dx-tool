/* emr-data/neuronal-migration.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'holoprosencephaly' — see emr-data/holoprosencephaly.js */
if (window.CASES['holoprosencephaly']) {
  window.CASES['neuronal-migration'] = window.CASES['holoprosencephaly'];
} else {
  window.CASES['neuronal-migration'] = {
    id: 'neuronal-migration', name: 'See holoprosencephaly', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for neuronal-migration',
    diagnosis: 'Alias for holoprosencephaly',
    presentation: { hpi: 'See holoprosencephaly case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
