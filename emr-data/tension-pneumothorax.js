/* emr-data/tension-pneumothorax.js
   Tension Pneumothorax — Needle Decompression Before Imaging
   Category: pulmonary | Acuity: ESI-1 | Setting: ED, Trauma Bay
*/
window.EMR_DATA = window.EMR_DATA || {};
window.CASES = window.CASES || {};
window.CASES['tension-pneumothorax'] = {
  id: 'tension-pneumothorax',
  name: 'Marcus Webb',
  age: '23M',
  dob: '2002-09-14',
  mrn: 'RDX-2026-83921',
  setting: 'Trauma Bay / ED',
  chiefComplaint: 'MVC — restrained driver, chest pain, rapidly worsening dyspnea, hypotension',
  diagnosis: 'Tension Pneumothorax',
  category: 'pulmonary',
  acuity: 1,
  presentation: {
    hpi: 'Marcus Webb, 23M, restrained driver brought by EMS after high-speed MVC. GCS 14, BP 78/42, HR 138, RR 32, SpO2 82% on 15L NRB. Tracheal deviation to the LEFT. Absent breath sounds on the RIGHT. JVD present. He is deteriorating rapidly.',
    pmh: ['No significant PMH'],
    meds: ['None'],
    allergies: ['NKDA']
  },
  vitals: { BP: '78/42', HR: '138', RR: '32', Temp: '37.0°C', SpO2: '82%', GCS: '14' },
  exam: {
    general: 'Young male, severe respiratory distress, diaphoretic, cyanotic lips',
    resp: 'Absent breath sounds RIGHT, tracheal deviation LEFT, distended neck veins (JVD)',
    cv: 'Tachycardia, distant heart sounds, hypotension — obstructive shock',
    neuro: 'GCS 14, confused, combative'
  },
  labs: {
    'POINT-OF-CARE': 'SpO2 82% (NRB) — do NOT wait for imaging'
  },
  orders: {
    correct: [
      { id: 'nd-tension', name: 'Needle decompression — 2nd ICS MCL RIGHT SIDE immediately', rationale: 'Tension PTX is a CLINICAL diagnosis. Do NOT wait for imaging. 14g angiocath, 2nd intercostal space, midclavicular line, perpendicular to chest wall. Rush of air confirms diagnosis.' },
      { id: 'ct-tension', name: 'Chest tube — 4th or 5th ICS, anterior axillary line, RIGHT SIDE after needle decompression', rationale: 'Needle decompression is temporizing — definitive treatment is chest tube. Place immediately after needle decompression.' },
      { id: 'o2-tension', name: '100% O2 via NRB — continue', rationale: 'Maximize FiO2 while preparing for needle decompression' },
      { id: 'iv-tension', name: 'Two large-bore IVs + 1L NS bolus', rationale: 'Obstructive shock — resuscitate, but fluids alone insufficient until pneumothorax released' },
      { id: 'trauma-tension', name: 'Trauma surgery consult + CXR after stabilization', rationale: 'After decompression, CXR confirms placement. Trauma surgery for other injuries.' }
    ],
    incorrect: [
      { id: 'cxr-first', name: 'Order chest X-ray before intervention', rationale: 'DEADLY ERROR — tension PTX is a clinical diagnosis. Delaying for imaging = death. Tracheal deviation + absent breath sounds + hypotension = treat now.' },
      { id: 'ct-scan', name: 'CT chest for better imaging', rationale: 'Contraindicated in hemodynamically unstable tension PTX. Clinical diagnosis, treat immediately.' },
      { id: 'left-side', name: 'Needle decompression on the LEFT side', rationale: 'Tracheal deviation is AWAY from the affected side. Deviation to LEFT = tension on the RIGHT. Always decompress the side with absent breath sounds.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Tension pneumothorax is a CLINICAL diagnosis — do NOT wait for imaging. Triad: absent breath sounds + tracheal deviation (away from tension side) + hypotension. SpO2 will not recover until tension is released.',
      'Tracheal deviation goes AWAY from the side of tension. If trachea deviates LEFT, tension is on the RIGHT.',
      'Needle decompression (14g angiocath, 2nd ICS MCL) is temporizing. Definitive treatment is chest tube. A rush of air upon insertion confirms the diagnosis.',
      'Mechanism of hemodynamic collapse: positive pressure in pleural space compresses the mediastinum → IVC kinking → preload collapse → obstructive shock.'
    ],
    boardPearls: [
      'JVD in tension PTX is from IVC compression/mediastinal shift — not seen in simple pneumothorax.',
      'Tension PTX in ventilated patients: sudden hypotension + high peak airway pressures → immediate bilateral needle decompression.',
      'Primary spontaneous PTX (young, tall, thin male) treatment differs: small + stable = observation; large or symptomatic = aspiration or chest tube. NO needle decompression needed unless tension develops.'
    ]
  },
  references: [
    { id: 'StatPearls-TensionPTX', title: 'Tension Pneumothorax', authors: 'Leigh-Smith S, Harris T', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK559090/', openAccess: true }
  ]
};
