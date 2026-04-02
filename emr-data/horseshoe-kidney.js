window.CASES = window.CASES || {};
window.CASES['horseshoe-kidney'] = {
  id: 'horseshoe-kidney', name: 'David Brown', age: '28M', dob: '1998-03-15',
  mrn: 'RDX-2026-55989', setting: 'Urology Clinic', category: 'urologic', acuity: 2,
  chiefComplaint: 'Horseshoe Kidney — Under IMA + UPJ Obstruction Risk', diagnosis: 'Horseshoe Kidney — Under IMA + UPJ Obstruction Risk',
  presentation: {
    hpi: '28M, incidental finding of horseshoe kidney on CT scan for unrelated abdominal pain. Horseshoe kidney: fusion of the two kidneys at their lower poles. The fused kidney passes UNDER the inferior mesenteric artery (IMA) — preventing normal cranial ascent during fetal development. Currently asymptomatic. Bilateral UPJ (ureteropelvic junction): mildly dilated but no obstruction. Past history: 3 kidney stone episodes.',
    pmh: ['See encounter'], meds: ['See encounter'], allergies: ['NKDA']
  },
  vitals: { BP: '124/76', HR: '72', RR: '14', Temp: '37.0°C', SpO2: '99%' },
  labs: { 'CT Abdomen': 'Horseshoe kidney — fusion at lower poles. Isthmus overlies aorta/IMA. Bilateral mild hydronephrosis (possible UPJ obstruction). Right-sided 4mm nonobstructing calculus.', 'BMP': 'Cr 1.0 (normal)', 'Urinalysis': 'Trace blood — from stone' },
  orders: {
    correct: [{ id: 'surveillance', name: 'Annual surveillance — US and Cr monitoring for UPJ obstruction and malignancy', rationale: 'Horseshoe kidney complications: UPJ obstruction (high incidence from abnormal ureteral insertion), nephrolithiasis (stasis from impaired drainage), increased risk of Wilms tumor (adults: transitional cell carcinoma). Annual surveillance with US and creatinine recommended.' },
      { id: 'stone-prevention', name: 'Stone prevention — high fluid intake, dietary modification based on 24h urine', rationale: 'Impaired drainage in horseshoe kidney predisposes to nephrolithiasis. 24-hour urine collection identifies metabolic risk factors (hypercalciuria, hyperoxaluria, hypocitraturia). Hydration ≥2.5L/day is essential.' }],
    incorrect: [{ id: 'surgery-required', name: 'Surgical division of isthmus — correct the abnormal anatomy', rationale: 'Surgical division of the isthmus is rarely indicated and does NOT improve renal function or stone recurrence. It is reserved for specific symptomatic cases (recurrent UPJ obstruction requiring pyeloplasty that requires access). Asymptomatic horseshoe kidneys require surveillance, not surgery.' },
      { id: 'ivc-filter-hs', name: 'IVC filter placement — horseshoe kidney near great vessels is dangerous', rationale: 'IVC filter is completely unrelated to horseshoe kidney management. Horseshoe kidney is near the aorta and IMA anatomically — this is relevant for surgical planning (aortic surgery, urologic procedures) but not for IVC filter indication.' }]
  },
  teachingPoints: {
    keyLearning: ['Horseshoe kidney: fused at lower poles, passes UNDER the IMA (not under the aorta) — the IMA prevents cranial ascent. Most common renal fusion anomaly.', 'Complications: UPJ obstruction (most common — abnormal high ureteral insertion + crossing vessels), nephrolithiasis (stasis), increased Wilms tumor risk in children, TCC in adults.', 'Wilms tumor in horseshoe kidney: highest risk of any renal anomaly. Screen children with horseshoe kidney.'],
    boardPearls: ['Horseshoe kidney and surgery: aortic aneurysm repair, IVC surgery — must plan around the isthmus. Can transect isthmus if needed for access (divide between clamps).', 'UPJ obstruction in horseshoe kidney: pyeloplasty if symptomatic. Robotic pyeloplasty preferred — must account for aberrant vessels crossing UPJ.', 'Blood supply to horseshoe kidney: highly variable — multiple arteries from aorta, IMA, iliac vessels. Must identify all vessels before any surgery.']
  },
  references: [{ id: 'StatPearls', title: 'Horseshoe Kidney — Under IMA + UPJ Obstruction Risk', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK459308/', openAccess: true }]
};
