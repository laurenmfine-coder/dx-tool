/* emr-data/gu-embryology.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'hypospadias-repair' — see emr-data/hypospadias-repair.js */
if (window.CASES['hypospadias-repair']) {
  window.CASES['gu-embryology'] = window.CASES['hypospadias-repair'];
} else {
  window.CASES['gu-embryology'] = {
    id: 'gu-embryology', name: 'See hypospadias-repair', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for gu-embryology',
    diagnosis: 'Alias for hypospadias-repair',
    presentation: { hpi: 'See hypospadias-repair case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
