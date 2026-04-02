/* emr-data/endocrine-embryology.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'thyroglossal-cyst' — see emr-data/thyroglossal-cyst.js */
if (window.CASES['thyroglossal-cyst']) {
  window.CASES['endocrine-embryology'] = window.CASES['thyroglossal-cyst'];
} else {
  window.CASES['endocrine-embryology'] = {
    id: 'endocrine-embryology', name: 'See thyroglossal-cyst', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for endocrine-embryology',
    diagnosis: 'Alias for thyroglossal-cyst',
    presentation: { hpi: 'See thyroglossal-cyst case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
