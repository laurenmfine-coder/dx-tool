/* emr-data/hematuria.js */
window.CASES = window.CASES || {};
window.CASES['hematuria'] = {
  id: 'hematuria', name: 'Robert Chang', age: '62M', dob: '1963-01-22',
  mrn: 'RDX-2026-55258', setting: 'Clinic', category: 'urologic', acuity: 2,
  chiefComplaint: 'Painless gross hematuria × 3 days — 40 pack-year smoker',
  diagnosis: 'Gross Hematuria — Bladder Cancer Until Proven Otherwise',
  presentation: { hpi: '62M, 40 pack-year smoker, 3 days of painless bright red urine. No dysuria, no flank pain (painless hematuria is more concerning than painful). No fever. UA: >100 RBCs, no WBCs, no bacteria, no casts. CT urogram ordered.', pmh: ['HTN', '40 pack-year smoking history'], meds: ['Lisinopril'], allergies: ['NKDA'] },
  vitals: { BP: '138/84', HR: '76', RR: '14', Temp: '37.0°C', SpO2: '99%' },
  labs: { 'UA': 'Gross blood, RBC >100/hpf, no WBCs, no bacteria — hematuria without infection', 'CT Urogram': 'Bladder wall irregularity + 2cm mass on posterior bladder wall. No stone. No renal mass. Right hydronephrosis mild.', 'Urine cytology': 'Atypical cells present', 'Creatinine': '1.1 (normal)' },
  orders: {
    correct: [
      { id: 'cystoscopy-hematuria', name: 'Urgent cystoscopy — bladder cancer evaluation', rationale: 'Painless gross hematuria in a smoker over 40 = bladder cancer until proven otherwise. CT urogram shows bladder mass — cystoscopy with biopsy is mandatory. Urothelial carcinoma is the most common bladder cancer (transitional cell carcinoma).' },
      { id: 'urology-hematuria', name: 'Urology referral — TURBT (transurethral resection of bladder tumor) for staging and treatment', rationale: 'CT urogram confirms bladder mass. Urology for TURBT — provides diagnosis, staging, and may be curative for superficial tumors (Ta, T1). Muscle-invasive bladder cancer (T2+) requires radical cystectomy ± neoadjuvant chemotherapy.' }
    ],
    incorrect: [
      { id: 'treat-uti-hematuria', name: 'Treat with antibiotics — hematuria must be UTI', rationale: 'UA shows no WBCs, no bacteria — this is NOT a UTI. Treating bladder cancer as UTI delays diagnosis. Painless hematuria without infection = malignancy workup mandatory.' },
      { id: 'watchful-wait-hematuria', name: 'Repeat UA in 6 weeks — may be transient', rationale: 'Gross painless hematuria in a 62-year-old male smoker has approximately 20% risk of underlying malignancy. Must evaluate urgently.' }
    ]
  },
  teachingPoints: {
    keyLearning: ['Painless gross hematuria = bladder cancer until proven otherwise. Risk factors: smoking (strongest), aniline dyes, cyclophosphamide, schistosomiasis, chronic UTI.', 'Microscopic hematuria workup: >3 RBCs/hpf on 2 of 3 urinalyses → CT urogram + cystoscopy (if age >35 or any risk factor).', 'Bladder cancer staging: superficial (Ta, T1, CIS) vs muscle-invasive (T2+). TURBT for staging; BCG intravesical therapy for high-grade superficial; radical cystectomy for muscle-invasive.'],
    boardPearls: ['RCC (renal cell carcinoma): classic triad = flank pain + hematuria + palpable mass (late). Von Hippel-Lindau (VHL) gene mutation. Treatment: partial/radical nephrectomy. Immunotherapy (nivolumab) for metastatic.', 'Bladder cancer: urothelial carcinoma (95%), squamous cell (chronic infection/schistosomiasis), adenocarcinoma (urachal remnant).', 'Gross vs microscopic hematuria: gross (visible) = higher risk of malignancy. Microscopic = may be benign causes but still requires evaluation.']
  },
  references: [{ id: 'StatPearls-Hematuria', title: 'Hematuria', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482386/', openAccess: true }]
};
