/* emr-data/aki-workup.js — AKI: Prerenal vs Intrinsic vs Postrenal Systematic Workup */
window.CASES = window.CASES || {};
window.CASES['aki-workup'] = {
  id: 'aki-workup', name: 'Samuel Wright', age: '67M', dob: '1958-12-10',
  mrn: 'RDX-2026-29841', setting: 'Medicine Floor', category: 'renal', acuity: 2,
  chiefComplaint: 'Creatinine 4.2 — acute rise from baseline 1.1. Post-op day 3 after hip replacement.',
  diagnosis: 'Multifactorial AKI: Prerenal (Hypovolemia) + ATN (Nephrotoxins) + Possible Obstruction',
  presentation: {
    hpi: 'Samuel Wright, 67M, post-op day 3 after elective hip replacement. Cr today: 4.2 (baseline 1.1 = Stage 3 AKI). He has been on ketorolac (NSAID) + vancomycin for post-op pain/infection prophylaxis. Poor PO intake, receiving maintenance fluids at 60mL/hr only. Urine output declining: 20mL/hr past 6 hours. Foley in place (able to monitor UO). No bladder distension above the Foley. He had contrast CT yesterday for suspected pulmonary embolism (negative). His medications: ketorolac, vancomycin (trough level 28 — high), gentamicin (added yesterday for Gram-negative coverage), lisinopril, furosemide.',
    pmh: ['HTN', 'CKD stage 2 (baseline Cr 1.1)', 'BPH (treated with tamsulosin)'],
    meds: ['Ketorolac 30mg IV q6h (NEPHROTOXIC)', 'Vancomycin (trough 28 — HIGH — NEPHROTOXIC)', 'Gentamicin (aminoglycoside — NEPHROTOXIC)', 'Lisinopril (HOLD in AKI)', 'Furosemide (HOLD in AKI)'],
    allergies: ['NKDA']
  },
  vitals: { BP: '102/64', HR: '108', RR: '18', Temp: '37.3°C', SpO2: '96%' },
  labs: {
    'BMP': 'Na 136, K 5.6 (H — dangerous), Cr 4.2 (H — up from 1.1), BUN 68, Bicarb 16 (L — metabolic acidosis from AKI)',
    'UA': 'Granular casts (muddy brown casts) present — ATN confirmed. No red cell casts (not glomerulonephritis). Protein 2+ (tubular damage).',
    'Urine sodium': '62 mEq/L (H — FENa = UNa × PCr / UCr × PNa = high — confirms ATN/intrinsic, not prerenal)',
    'FENa calculation': 'FENa >2% = ATN/intrinsic (tubular damage — cannot reabsorb sodium). FENa <1% = prerenal (intact tubules reabsorbing maximally).',
    'Renal ultrasound': 'No hydronephrosis bilaterally. Bladder empty (Foley in place). Postrenal obstruction excluded.',
    'Vancomycin trough': '28 mg/L (TOXIC — target 10-20 for most indications)'
  },
  orders: {
    correct: [
      { id: 'stop-nephrotox', name: 'STOP all nephrotoxins immediately: ketorolac, vancomycin (hold), gentamicin (switch to alternative)', rationale: 'Three simultaneous nephrotoxins + hypovolemia + contrast = multifactorial ATN. NSAIDs reduce renal prostaglandins → vasoconstriction. Vancomycin is directly tubulotoxic at high levels. Gentamicin accumulates in tubular cells. Remove ALL nephrotoxins.' },
      { id: 'hold-acei-diuretic', name: 'Hold lisinopril and furosemide until AKI resolves', rationale: 'ACEi reduces GFR by dilating the efferent arteriole. Diuretics reduce preload and worsen prerenal component. Both must be held in AKI until Cr trending down.' },
      { id: 'ivf-aki', name: 'IV fluid challenge — 500mL NS bolus, reassess UO and Cr in 6h', rationale: 'BP 102/64, HR 108, poor PO intake = volume-depleted prerenal component contributing. Fluid challenge may improve the prerenal fraction even if ATN is established. Monitor with serial Cr and UO.' },
      { id: 'nephrology-consult', name: 'Nephrology consult — Stage 3 AKI with oliguria, K 5.6, metabolic acidosis', rationale: 'K 5.6 + metabolic acidosis + oliguria + Stage 3 AKI = potential dialysis indication if no improvement. Nephrology for RRT decision-making.' },
      { id: 'hyperkalemia-aki', name: 'Treat hyperkalemia K 5.6 — calcium gluconate + insulin/D50 + kayexalate or patiromer', rationale: 'K 5.6 in AKI with rising creatinine and oliguria may continue to rise. Stabilize myocardium (calcium gluconate), shift K intracellularly (insulin + D50), and bind/remove K (kayexalate or patiromer). Monitor EKG for peaked T waves.' }
    ],
    incorrect: [
      { id: 'increase-fluids-aggressively', name: 'Give 3L NS — Cr 4.2 must be from dehydration', rationale: 'Muddy brown casts + FENa >2% = established ATN from nephrotoxins — not purely prerenal. Aggressive fluids will not reverse ATN. A small volume challenge is appropriate but 3L would cause fluid overload in anuric AKI without reversing the underlying tubular injury.' },
      { id: 'continue-vanc-gent', name: 'Continue vancomycin + gentamicin — infection risk outweighs kidney risk', rationale: 'This patient has NO active infection — ketorolac was for pain, vancomycin was prophylaxis, and gentamicin was added empirically. Continuing nephrotoxic antibiotics without a clear infection indication in Stage 3 AKI is unjustifiable. Remove all unnecessary nephrotoxins.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'AKI classification: Prerenal (FENa <1%, BUN/Cr >20:1, urine Osm >500, no casts) → Intrinsic/ATN (FENa >2%, BUN/Cr variable, muddy brown granular casts, urine Osm ~300) → Postrenal (hydronephrosis on US, post-void residual >300mL).',
      'FENa = (urine Na × plasma Cr) / (plasma Na × urine Cr) × 100. <1% = prerenal (intact tubules). >2% = ATN. Exception: FENa can be <1% in contrast nephropathy, myoglobinuria, early obstruction — use FEUrea instead.',
      'Common nephrotoxins to stop immediately in AKI: NSAIDs, aminoglycosides, vancomycin (trough >20), IV contrast, ACEi/ARBs, calcineurin inhibitors, metformin.',
      'Muddy brown granular casts = ATN — damage to proximal tubular cells releasing their contents into tubular lumen. Red blood cell casts = glomerulonephritis. WBC casts = pyelonephritis or interstitial nephritis.'
    ],
    boardPearls: [
      'KDIGO AKI staging: Stage 1 = Cr ×1.5-1.9 or rise ≥0.3 in 48h. Stage 2 = Cr ×2-2.9. Stage 3 = Cr ×3+ or ≥4.0 absolute or dialysis.',
      'Contrast-induced nephropathy: Cr rise ≥0.5 mg/dL or ≥25% within 48-72h of contrast. Prevention: IV NS (not NaHCO3 — PRESERVE trial), hold metformin, minimize contrast volume. N-acetylcysteine evidence is weak.',
      'Pigment nephropathy: myoglobinuria (rhabdomyolysis) and hemoglobinuria cause ATN. Urine is tea-colored. Dipstick positive for blood but no RBCs on microscopy. Treatment: aggressive IV fluids (target UO 200-300 mL/hr), urine alkalinization controversial.',
      'Indications for emergent dialysis (AEIOU): Acidosis (pH <7.1 refractory), Electrolytes (K >6.5 or rising), Ingestions (toxins — lithium, methanol, ethylene glycol), Overload (refractory pulmonary edema), Uremia (pericarditis, encephalopathy, BUN >100 symptomatic).'
    ]
  },
  references: [{ id: 'StatPearls-AKI', title: 'Acute Kidney Injury', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK441896/', openAccess: true }]
};
