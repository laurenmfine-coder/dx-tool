window.CASES = window.CASES || {};
window.CASES['wilms-tumor'] = {
  id: 'wilms-tumor', name: 'Aria Johnson', age: '4F', dob: '2021-12-15',
  mrn: 'RDX-2026-64243', setting: 'Peds Oncology', category: 'oncologic', acuity: 2,
  chiefComplaint: 'Wilms Tumor — No Pre-Op Biopsy + WAGR Screening', diagnosis: 'Wilms Tumor — No Pre-Op Biopsy + WAGR Screening',
  presentation: {
    hpi: '4-year-old female with 3-week history of asymptomatic painless abdominal mass found by parent during bath. Hematuria noted × 1 episode. Abdominal CT: 9cm heterogeneous right renal mass with well-defined margins. No retroperitoneal lymphadenopathy. No IVC thrombus. Contralateral left kidney normal. WBC normal. No signs of aniridia.',
    pmh: ['See encounter'], meds: ['See encounter'], allergies: ['NKDA']
  },
  vitals: { BP: '128/78 (H for age — hypertension from renin)', HR: '108', RR: '20', Temp: '37.0°C', SpO2: '99%' },
  labs: { 'CT Abdomen/Pelvis': '9cm heterogeneous right renal mass, intrarenal, well-circumscribed. No nodal involvement. No IVC extension. Left kidney normal.', 'Urinalysis': 'Microscopic hematuria', 'BMP': 'Cr 0.4 (normal for age)', 'CBC': 'WBC 9.2 (normal)' , 'Ophthalmology exam': 'No aniridia — WT1 deletion (WAGR syndrome) excluded' },
  orders: {
    correct: [{ id: 'nephrectomy', name: 'Immediate radical nephrectomy — do NOT biopsy before surgery', rationale: 'CRITICAL RULE: Wilms tumor must NOT be biopsied transperitoneally before resection. Biopsy causes peritoneal seeding, upstages the tumor, and requires more aggressive chemotherapy/radiation. Surgical resection is both diagnostic and therapeutic for Stage I-III disease.' },
      { id: 'wagr-screen', name: 'Screen for WAGR syndrome — aniridia + GU anomalies indicate WT1 deletion', rationale: 'WAGR (Wilms, Aniridia, GU anomalies, intellectual disability) = WT1 deletion at 11p13. Aniridia in a child with abdominal mass → WT1 deletion until proven otherwise. Check eyes in all Wilms patients. Also screen for Beckwith-Wiedemann (macrosomia, macroglossia, hemihypertrophy) — WT2 region.' }],
    incorrect: [{ id: 'biopsy-wilms', name: 'CT-guided core biopsy — need pathology before surgery', rationale: 'Tranperitoneal biopsy of Wilms tumor before nephrectomy causes peritoneal seeding, converts Stage I-II to Stage III, and dramatically worsens prognosis and treatment intensity. The National Wilms Tumor Study (NWTS) showed that biopsy before resection increases relapse risk. Go directly to nephrectomy.' },
      { id: 'bilateral-resect', name: 'Bilateral nephrectomy — must remove all tumor tissue', rationale: '5% of Wilms tumors are bilateral (Stage V). Bilateral disease requires NEPHRON-SPARING surgery to preserve renal function. Do not perform bilateral nephrectomy. Preoperative chemotherapy to shrink bilateral tumors before nephron-sparing surgery is the approach.' }]
  },
  teachingPoints: {
    keyLearning: ['No pre-op biopsy in Wilms tumor — direct to nephrectomy. Biopsy causes peritoneal seeding and upstaging.', 'WAGR syndrome: Wilms + Aniridia + GU anomalies + intellectual disability = WT1 deletion at 11p13. Check ALL Wilms patients for aniridia.', 'Wilms prognosis is excellent — overall survival >90% with multimodal therapy (surgery + chemotherapy ± radiation by stage).'],
    boardPearls: ['Favorable vs anaplastic histology: anaplastic Wilms (5%) — focal or diffuse. Diffuse anaplasia = poor prognosis, requires more aggressive chemo.', 'Bilateral Wilms (Stage V): nephron-sparing surgery required. Preoperative chemotherapy to reduce tumor size before surgery.', 'Adults can rarely develop Wilms tumor. Classic triad in adults: painless hematuria + hypertension + flank mass.']
  },
  references: [{ id: 'StatPearls', title: 'Wilms Tumor — No Pre-Op Biopsy + WAGR Screening', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK442004/', openAccess: true }]
};
