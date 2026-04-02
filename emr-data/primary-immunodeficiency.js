/* emr-data/primary-immunodeficiency.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'cvid-ivig' — see emr-data/cvid-ivig.js */
if (window.CASES['cvid-ivig']) {
  window.CASES['primary-immunodeficiency'] = window.CASES['cvid-ivig'];
} else {
  window.CASES['primary-immunodeficiency'] = {
    id: 'primary-immunodeficiency', name: 'See cvid-ivig', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for primary-immunodeficiency',
    diagnosis: 'Alias for cvid-ivig',
    presentation: { hpi: 'See cvid-ivig case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
