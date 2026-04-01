/* emr-data/pleural-effusion.js
   Pleural Effusion — Light's Criteria + Diagnostic Thoracentesis
   Category: pulmonary | Acuity: ESI-3 | Setting: Medicine Floor / Pulmonology
*/
window.CASES = window.CASES || {};
window.CASES['pleural-effusion'] = {
  id: 'pleural-effusion',
  name: 'Sandra Whitfield',
  age: '68F',
  dob: '1957-12-09',
  mrn: 'RDX-2026-29472',
  setting: 'Medicine Floor → Pulmonology',
  chiefComplaint: 'Dyspnea on exertion, left-sided pleuritic chest pain, unilateral pleural effusion on imaging',
  diagnosis: 'Exudative Pleural Effusion — Parapneumonic Effusion vs Malignant Effusion',
  category: 'pulmonary',
  acuity: 3,
  presentation: {
    hpi: 'Sandra Whitfield, 68F, 40-pack-year smoker, presents with 3 weeks of progressive dyspnea and pleuritic left chest pain. CXR shows large LEFT-sided pleural effusion blunting the costophrenic angle. No recent pneumonia symptoms — but she had a mild URI 3 weeks ago. She has had 8 lbs of unintentional weight loss over 3 months. She retired from a manufacturing job 10 years ago (possible asbestos exposure). No bilateral effusions (would favor cardiogenic, cirrhotic, nephrotic). No JVD, no edema.',
    pmh: ['40 pack-year smoking history', 'HTN', 'COPD — moderate', 'Possible asbestos exposure (manufacturing)'],
    meds: ['Lisinopril 10mg', 'Tiotropium inhaler', 'Albuterol PRN'],
    allergies: ['Codeine — nausea']
  },
  vitals: { BP: '142/88', HR: '88', RR: '20', Temp: '37.4°C', SpO2: '92% RA', GCS: '15' },
  exam: {
    resp: 'Decreased breath sounds left base. Dullness to percussion left lower lobe. Egophony at left base. No contralateral tracheal deviation (not tension).',
    cv: 'Regular rate, no S3, no JVD — excludes cardiogenic as primary cause',
    abdomen: 'No ascites, no hepatosplenomegaly'
  },
  labs: {
    'CXR': 'Large left pleural effusion — completely opacifies left lower lobe. Right lung clear. No cardiomegaly.',
    'CT chest': 'Large left pleural effusion with pleural thickening and nodularity along left parietal pleura — concerning for malignant or mesothelioma. Mediastinal lymphadenopathy. No pneumothorax.',
    'Serum chemistry (for Light\'s criteria)': 'Total protein 7.1 g/dL | LDH 210 IU/L',
    'PLEURAL FLUID (after thoracentesis)': 'Appearance: cloudy, yellow-green | Protein 4.8 g/dL | LDH 480 IU/L | pH 7.22 (L — complicated parapneumonic threshold <7.20) | Glucose 44 mg/dL (L) | WBC 12,400 (PMN 78%) | RBC 1,200 | LDH ratio: 480/210 = 2.28 (>0.6 = exudate) | Protein ratio: 4.8/7.1 = 0.68 (>0.5 = exudate) | Cytology: pending | AFB: pending'
  },
  orders: {
    correct: [
      { id: 'thoracentesis-pe', name: 'Diagnostic + therapeutic thoracentesis with pleural fluid analysis', rationale: 'Unilateral effusion without obvious cause = mandatory thoracentesis. Bilateral symmetric effusions in known heart failure may not require tap initially, but any asymmetry or clinical suspicion requires diagnostic thoracentesis. This effusion is unilateral — ALWAYS tap.' },
      { id: 'lights-criteria', name: 'Apply Light\'s criteria to classify exudate vs transudate', rationale: 'Light\'s criteria (1972): exudate if ANY of: pleural protein/serum protein >0.5, pleural LDH/serum LDH >0.6, pleural LDH >2/3 upper limit of normal serum LDH. This fluid meets 2/3 criteria = EXUDATE. Exudates require further investigation for cause.' },
      { id: 'chest-tube-pe', name: 'Chest tube drainage — pH 7.22 approaching complicated parapneumonic threshold', rationale: 'Complicated parapneumonic effusion criteria: pH <7.20, glucose <40, LDH >1000, or positive culture → requires drainage (chest tube or image-guided catheter). pH 7.22 is borderline — requires repeat measurement and close monitoring. If drops below 7.20 → drain.' },
      { id: 'oncology-pe', name: 'Oncology referral — CT shows pleural nodularity, mediastinal LAD', rationale: 'CT findings are concerning for malignancy (lung primary, mesothelioma given asbestos exposure). Cytology sent. If cytology negative but high suspicion: thoracoscopy (VATS) for pleural biopsy.' },
      { id: 'abx-pe', name: 'Empiric antibiotics — prior URI + parapneumonic characteristics', rationale: 'Complicated parapneumonic effusion with borderline pH, high WBC, low glucose suggests bacterial etiology. Empiric broad-spectrum antibiotics while cultures pending.' }
    ],
    incorrect: [
      { id: 'bilateral-no-tap', name: 'Observe — treat as cardiogenic without tapping', rationale: 'WRONG for a UNILATERAL effusion. Bilateral symmetric effusions in known heart failure can be observed initially, but any unilateral effusion or clinical uncertainty requires diagnostic thoracentesis. Missing malignancy or empyema by not tapping is a major error.' },
      { id: 'ffp-coags', name: 'Check coags and correct with FFP before thoracentesis', rationale: 'Coagulopathy correction is NOT routinely required before thoracentesis. ACCP guidelines: safe with INR up to 3.0 and platelets >50,000. Ultrasound guidance reduces complications further. FFP before thoracentesis is not standard of care.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Light\'s criteria classify exudate vs transudate: exudate if pleural protein/serum >0.5, OR pleural LDH/serum LDH >0.6, OR pleural LDH >2/3 upper limit of normal LDH.',
      'Unilateral effusion without obvious cause = diagnostic thoracentesis. Always. Bilateral symmetric effusions in decompensated HF may be treated empirically, but ANY asymmetry warrants tap.',
      'Complicated parapneumonic effusion criteria (drainage required): pH <7.20, glucose <40, LDH >1000, positive Gram stain/culture, or frank pus (empyema). This case is borderline — serial monitoring.',
      'Malignant effusion: transudate (25%) or exudate (75%). Cytology has 60-70% sensitivity for malignancy — negative cytology does not rule out malignancy in high-suspicion cases. VATS biopsy for diagnosis.'
    ],
    boardPearls: [
      'Transudate causes: HF (most common), cirrhosis (hepatic hydrothorax), nephrotic syndrome, PE (can be transudate or exudate), hypothyroidism.',
      'Exudate causes: pneumonia (parapneumonic), malignancy, TB, PE, pancreatitis, lupus, RA.',
      'Glucose <30 in pleural fluid: empyema or rheumatoid pleuritis. pH <7.0 = empyema until proven otherwise.',
      'Mesothelioma: asbestos exposure + unilateral effusion + pleural thickening. Diagnosis by thoracoscopic biopsy. Poor prognosis. Immunotherapy (pembrolizumab + ipilimumab) approved 2020.'
    ]
  },
  references: [
    { id: 'StatPearls-Pleural', title: 'Pleural Effusion', authors: 'Feller-Kopman DJ, Light RW', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK448189/', openAccess: true }
  ]
};
