/* emr-data/neuro-embryology.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'holoprosencephaly' — see emr-data/holoprosencephaly.js */
if (window.CASES['holoprosencephaly']) {
  window.CASES['neuro-embryology'] = window.CASES['holoprosencephaly'];
} else {
  window.CASES['neuro-embryology'] = {
    id: 'neuro-embryology', name: 'See holoprosencephaly', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for neuro-embryology',
    diagnosis: 'Alias for holoprosencephaly',
    presentation: { hpi: 'See holoprosencephaly case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
