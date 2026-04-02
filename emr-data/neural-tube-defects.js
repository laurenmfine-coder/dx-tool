/* emr-data/neural-tube-defects.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'myelomeningocele' — see emr-data/myelomeningocele.js */
if (window.CASES['myelomeningocele']) {
  window.CASES['neural-tube-defects'] = window.CASES['myelomeningocele'];
} else {
  window.CASES['neural-tube-defects'] = {
    id: 'neural-tube-defects', name: 'See myelomeningocele', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for neural-tube-defects',
    diagnosis: 'Alias for myelomeningocele',
    presentation: { hpi: 'See myelomeningocele case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
