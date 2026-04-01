/* emr-data/kidney-stones.js — Nephrolithiasis / Renal Colic */
window.CASES = window.CASES || {};
window.CASES['kidney-stones'] = {
  id: 'kidney-stones', name: 'James Okafor', age: '38M', dob: '1987-09-14',
  mrn: 'RDX-2026-41832', setting: 'ED → Urology', category: 'urologic', acuity: 2,
  chiefComplaint: 'Sudden severe flank pain radiating to groin, hematuria, nausea',
  diagnosis: 'Nephrolithiasis — Obstructing Ureteral Calculus',
  presentation: {
    hpi: '38M, first episode, sudden onset severe left flank pain 10/10 radiating to left groin and testicle. He cannot get comfortable — pacing the room. Nausea and vomiting. Gross hematuria. No fever. No urinary urgency/frequency. CT abdomen/pelvis without contrast confirms 6mm calculus at left ureterovesical junction (UVJ). No hydronephrosis.',
    pmh: ['No prior stones', 'HTN'], meds: ['Lisinopril 10mg'], allergies: ['NKDA']
  },
  vitals: { BP: '152/94', HR: '108', RR: '20', Temp: '37.2°C', SpO2: '98%' },
  labs: {
    'UA': 'RBCs > 100/hpf, no WBCs, no bacteria, no nitrites — hematuria consistent with stone, no infection',
    'BMP': 'Cr 1.0 (normal), BUN 18, Na 140, K 4.1',
    'CBC': 'WBC 9.8 (normal — no infection)',
    'CT KUB (non-contrast)': '6mm calculus at left UVJ. No hydronephrosis. No perinephric stranding. Contralateral kidney normal.'
  },
  orders: {
    correct: [
      { id: 'nsaid-stone', name: 'Ketorolac 30mg IV + ondansetron — pain and nausea', rationale: 'NSAIDs are the most effective analgesic for renal colic — reduce prostaglandin-mediated ureteral spasm AND decrease renal pelvis pressure. Ketorolac IV for rapid effect. Opioids are second-line (add if NSAIDs insufficient).' },
      { id: 'alpha-blocker', name: 'Tamsulosin 0.4mg daily × 4 weeks — medical expulsive therapy', rationale: 'Alpha-blockers (tamsulosin) relax ureteral smooth muscle → increase stone passage rate and speed for stones 5-10mm. AUA guidelines: offer MET for ureteral stones ≤10mm. 6mm stone at UVJ has ~75% spontaneous passage rate with MET.' },
      { id: 'strain-stone', name: 'Strain all urine — stone collection for analysis', rationale: 'Stone composition guides prevention: calcium oxalate (most common, 80%) vs uric acid (radiolucent) vs struvite (infection, staghorn) vs cystine (genetic). Analysis changes preventive strategy.' },
      { id: 'hydration-stone', name: 'IV hydration + encourage PO fluids — target 2.5L urine/day', rationale: 'High fluid intake is the single most effective prevention strategy. Dilutes urine, reduces stone formation risk by 50%. Educate patient: 2.5-3L/day urine output goal lifelong.' },
      { id: 'urology-stone', name: 'Urology follow-up in 2-4 weeks with repeat imaging', rationale: '6mm UVJ stone with no hydronephrosis, no infection, adequate pain control = trial of MET with outpatient follow-up. Return precautions: fever, inability to tolerate PO, intractable pain = return immediately.' }
    ],
    incorrect: [
      { id: 'abx-stone', name: 'Empiric antibiotics — patient has hematuria and pain', rationale: 'Hematuria in renal colic is from the stone, NOT infection. UA shows no WBCs, no bacteria, no nitrites. Antibiotics are not indicated for uncomplicated stone without evidence of UTI or obstruction + infection (pyonephrosis).' },
      { id: 'ct-contrast', name: 'CT abdomen with IV contrast for stone diagnosis', rationale: 'Non-contrast CT is the gold standard for stone detection (sensitivity 97%, specificity 96%). IV contrast is NOT needed and adds nephrotoxicity risk. If concern for another pathology, discuss with radiology.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Non-contrast CT abdomen/pelvis is the gold standard for nephrolithiasis. Ultrasound is preferred in pregnancy (no radiation) — sensitivity 75%.',
      'NSAIDs (ketorolac) are superior to opioids for renal colic pain — reduce prostaglandin-mediated ureteral spasm AND renal pelvis pressure. Opioids are adjuncts.',
      'Medical expulsive therapy (tamsulosin) increases passage rate for stones ≤10mm. Passage rates: <5mm = 95%, 5-7mm = 50-75%, >7mm = low — urologic intervention needed.',
      'Indications for IMMEDIATE urologic intervention: obstructing stone + fever (pyonephrosis = sepsis source), solitary kidney obstruction, bilateral obstruction, intractable pain/vomiting.'
    ],
    boardPearls: [
      'Stone composition and prevention: calcium oxalate → increase fluids, reduce sodium/animal protein, thiazide diuretics for hypercalciuria. Uric acid → alkalinize urine (potassium citrate), allopurinol. Struvite → treat underlying infection, urease inhibitors.',
      'Radiolucent stones on KUB: uric acid (visible on CT). Radiopaque: calcium oxalate (most), cystine, struvite.',
      'Shock wave lithotripsy (SWL): non-invasive for stones <2cm in renal pelvis. Ureteroscopy + laser: preferred for ureteral stones. Percutaneous nephrolithotomy (PCNL): staghorn calculi.',
      'Staghorn calculi: fills the renal pelvis + calyces. Almost always struvite (infection stones from urease-producing bacteria: Proteus, Klebsiella, Pseudomonas). Treatment: PCNL + antibiotics.'
    ]
  },
  references: [{ id: 'StatPearls-Nephrolithiasis', title: 'Nephrolithiasis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK442014/', openAccess: true }]
};
