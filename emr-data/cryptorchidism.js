/* emr-data/cryptorchidism.js — alias wrapper */
window.CASES = window.CASES || {};
/* This topic uses case 'orchidopexy' — see emr-data/orchidopexy.js */
if (window.CASES['orchidopexy']) {
  window.CASES['cryptorchidism'] = window.CASES['orchidopexy'];
} else {
  window.CASES['cryptorchidism'] = {
    id: 'cryptorchidism', name: 'See orchidopexy', age: '', dob: '',
    mrn: 'RDX-ALIAS', setting: 'See topic', category: 'alias', acuity: 2,
    chiefComplaint: 'See CoachDx for cryptorchidism',
    diagnosis: 'Alias for orchidopexy',
    presentation: { hpi: 'See orchidopexy case.', pmh: [], meds: [], allergies: [] },
    vitals: {}, labs: {},
    orders: { correct: [], incorrect: [] },
    teachingPoints: { keyLearning: [], boardPearls: [] },
    references: []
  };
}
