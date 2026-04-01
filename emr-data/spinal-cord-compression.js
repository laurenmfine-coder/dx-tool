/* emr-data/spinal-cord-compression.js — Malignant Spinal Cord Compression */
window.CASES = window.CASES || {};
window.CASES['spinal-cord-compression'] = {
  id: 'spinal-cord-compression', name: 'Frank Nguyen', age: '67M', dob: '1958-01-08',
  mrn: 'RDX-2026-72341', setting: 'ED → Oncology/Neurosurgery', category: 'oncologic', acuity: 1,
  chiefComplaint: 'Progressive back pain + new bilateral leg weakness + urinary retention — known prostate cancer',
  diagnosis: 'Malignant Spinal Cord Compression (MSCC) — Prostate Cancer Metastasis to T8',
  presentation: {
    hpi: '67M with metastatic prostate cancer (spine metastases known). 2-week progressive thoracic back pain, now with 3 days of bilateral leg weakness (difficulty climbing stairs), and new urinary retention requiring catheterization today. Rectal exam: decreased rectal tone. Sensory level at T8 on examination — confirms cord compression. MRI spine: T8 vertebral body metastasis with epidural extension compressing the spinal cord.',
    pmh: ['Metastatic prostate cancer — bone metastases (spine, pelvis)', 'Receiving ADT'], meds: ['Leuprolide (ADT)', 'Abiraterone', 'Prednisone 5mg'], allergies: ['NKDA']
  },
  vitals: { BP: '142/88', HR: '78', RR: '16', Temp: '37.0°C', SpO2: '98%' },
  labs: {
    'MRI spine (STAT, whole spine)': 'T8 vertebral body replaced by metastatic tumor. Epidural extension with cord compression — posterior cord flattening, T2 signal change in cord at T8 (myelopathy). T6 and T11 additional vertebral metastases without cord compression.',
    'PSA': '840 ng/mL (H — progressing despite ADT)',
    'CBC': 'WBC 8.4, Hgb 9.8 (L — anemia of cancer), Plt 148',
    'BMP': 'Ca 11.4 (H — hypercalcemia of malignancy), Cr 1.4'
  },
  orders: {
    correct: [
      { id: 'dex-mscc', name: 'Dexamethasone 10mg IV bolus NOW, then 4mg IV q6h', rationale: 'High-dose dexamethasone is the FIRST intervention in MSCC. Reduces vasogenic edema around the cord within hours. Start BEFORE radiation or surgery. Every hour without steroids is additional cord ischemia.' },
      { id: 'rt-mscc', name: 'Urgent radiation therapy — radiation oncology consult STAT', rationale: 'Radiotherapy is the primary treatment for most MSCC patients. Start within 24h of diagnosis. Goal: local tumor control and cord decompression. Radiosensitive tumors (prostate, breast, lymphoma) respond well.' },
      { id: 'nsurg-mscc', name: 'Neurosurgery consult — surgical decompression if rapidly deteriorating or radioresistant', rationale: 'Surgical decompression (followed by radiation) is superior to radiation alone in selected patients (Patchell trial: ambulatory rate 84% vs 57%). Indications: rapid neurological deterioration, spinal instability, radioresistant tumor, unknown primary needing biopsy.' },
      { id: 'catheter-mscc', name: 'Foley catheter — urinary retention from cord compression', rationale: 'Urinary retention from autonomic dysfunction of MSCC. Foley while managing the compression. Monitor for return of bladder function after treatment.' },
      { id: 'calcium-mscc', name: 'IV fluids + zoledronic acid — hypercalcemia of malignancy (Ca 11.4)', rationale: 'Hypercalcemia of malignancy requires: aggressive IV hydration first (NS 200-300mL/hr), then zoledronic acid 4mg IV over 15 min (bisphosphonate — lowers calcium within 48-72h). Loop diuretics only if fluid overloaded.' }
    ],
    incorrect: [
      { id: 'mri-delay', name: 'Obtain CT myelogram — MRI contraindicated for prostate cancer?', rationale: 'MRI is the gold standard for MSCC — provides soft tissue detail that CT myelogram cannot. There is no contraindication to MRI in prostate cancer patients. CT myelogram is reserved for when MRI is truly contraindicated (pacemaker, certain metal implants).' },
      { id: 'radiation-first', name: 'Radiation therapy first — delay steroids until radiation starts', rationale: 'Dexamethasone should be given FIRST — before radiation and before surgery. It reduces vasogenic edema and can restore function within hours. Delaying steroids while arranging radiation results in preventable neurological injury.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Malignant spinal cord compression: back pain + neurological signs in a cancer patient = MSCC until proven otherwise. MRI whole spine STAT. Do not wait.',
      'Dexamethasone is the FIRST intervention — start before MRI if neurological compromise is imminent. Reduces vasogenic edema and preserves function while definitive treatment (radiation or surgery) is arranged.',
      'Ambulatory status at presentation is the strongest predictor of outcome. 80% of patients ambulatory at diagnosis remain ambulatory after treatment. Only 10-20% of non-ambulatory patients regain ambulation.',
      'The Patchell trial showed surgery + radiation superior to radiation alone for ambulatory rate (84% vs 57%) in selected patients. Neurosurgery consultation is essential.'
    ],
    boardPearls: [
      'Most common tumors causing MSCC: lung, breast, prostate, renal cell, myeloma (in order of frequency).',
      'Vertebral level of compression: most common in thoracic spine (60%) — narrower spinal canal + tenuous blood supply.',
      'Cauda equina syndrome (below L1-L2): lower motor neuron signs (flaccid paralysis, areflexia), bladder/bowel dysfunction, saddle anesthesia. Surgical emergency.',
      'Bisphosphonates in cancer: zoledronic acid prevents skeletal-related events (fractures, cord compression) in bone-metastatic cancer. Should be part of ongoing management.'
    ]
  },
  references: [{ id: 'StatPearls-MSCC', title: 'Malignant Spinal Cord Compression', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK448097/', openAccess: true }]
};
