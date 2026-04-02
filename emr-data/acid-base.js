/* emr-data/acid-base.js — Mixed Acid-Base Disorder: Systematic Interpretation */
window.CASES = window.CASES || {};
window.CASES['acid-base'] = {
  id: 'acid-base', name: 'Roy Chen', age: '58M', dob: '1967-04-14',
  mrn: 'RDX-2026-31112', setting: 'Medical ICU', category: 'renal', acuity: 2,
  chiefComplaint: 'Admitted for COPD exacerbation, now vomiting × 3 days — complex ABG interpretation needed',
  diagnosis: 'Mixed Acid-Base Disorder: Respiratory Acidosis + Metabolic Alkalosis (Triple Disorder)',
  presentation: {
    hpi: 'Roy Chen, 58M with COPD (home O2), admitted 3 days ago for AECOPD. Now with 3 days of vomiting from gastroparesis. ABG today: pH 7.50, PaCO2 55, HCO3 42, PaO2 66 on 2L NC. Electrolytes: Na 138, K 2.8 (L), Cl 86 (L), Bicarb 42 (H). Albumin 2.2 (L). This ABG requires systematic interpretation — do not just look at pH.',
    pmh: ['COPD GOLD Stage D', 'Gastroparesis', 'CKD stage 2'],
    meds: ['BiPAP at night', 'Tiotropium', 'Salmeterol/fluticasone', 'Metoclopramide'],
    allergies: ['NKDA']
  },
  vitals: { BP: '138/82', HR: '96', RR: '18', Temp: '37.2°C', SpO2: '92% 2L NC' },
  labs: {
    'ABG': 'pH 7.50 | PaCO2 55 mmHg | HCO3 42 mEq/L | PaO2 66 mmHg',
    'BMP': 'Na 138 | K 2.8 (L) | Cl 86 (L) | HCO3 42 (H) | BUN 28 | Cr 1.4 | Glucose 112',
    'Albumin': '2.2 g/dL (L) — corrected anion gap required',
    'STEP-BY-STEP INTERPRETATION': '1) pH 7.50 = ALKALOSIS. 2) PaCO2 55 = HIGH (respiratory acidosis, but pH is alkalotic = not primary). 3) HCO3 42 = HIGH (metabolic alkalosis = PRIMARY disorder). 4) Expected compensation for met alk: PaCO2 = 0.7×(HCO3-24) + 21 = 0.7×18 + 21 = 33.6 → EXPECTED PaCO2 ≈ 34. ACTUAL PaCO2 = 55 → HIGHER than expected = CO2 retention is INDEPENDENT = CONCURRENT RESPIRATORY ACIDOSIS (COPD). 5) Anion gap: AG = Na - (Cl + HCO3) = 138 - (86+42) = 10. Corrected AG = 10 + 2.5×(4.0-2.2) = 10 + 4.5 = 14.5 (borderline elevated). = TRIPLE DISORDER: metabolic alkalosis (primary) + respiratory acidosis (concurrent COPD) + possible mild non-anion gap component.'
  },
  orders: {
    correct: [
      { id: 'vomiting-correct', name: 'Treat the cause: replace Cl− with IV normal saline + KCl repletion', rationale: 'Metabolic alkalosis from vomiting is a chloride-responsive alkalosis (urine Cl <20 mEq/L). Treat: NS to replace chloride + KCl to replete potassium. Hypokalemia maintains metabolic alkalosis (kidney reabsorbs HCO3 to retain K+). Correct K+ first — alkalosis will not resolve until K+ is repleted.' },
      { id: 'k-replete', name: 'KCl 40 mEq IV over 4h — K 2.8 is significant hypokalemia', rationale: 'K 2.8: 40-80 mEq IV KCl needed. Recheck after each 40 mEq. Hypokalemia causes metabolic alkalosis and can cause dangerous cardiac arrhythmias (U waves, QTc prolongation → torsades de pointes).' },
      { id: 'no-bicarb', name: 'Do NOT give sodium bicarbonate — HCO3 already 42', rationale: 'HCO3 42 with pH 7.50 = metabolic alkalosis already. Adding bicarb would be potentially fatal. Always check ABG before giving bicarb.' },
      { id: 'avoid-diuretics', name: 'Hold any loop or thiazide diuretics — worsen hypokalemia and alkalosis', rationale: 'Diuretics cause chloride-responsive metabolic alkalosis and worsen hypokalemia. Hold until alkalosis and electrolytes corrected.' }
    ],
    incorrect: [
      { id: 'just-look-ph', name: 'pH 7.50 = alkalosis = reduce ventilation rate', rationale: 'SYSTEMATIC ERROR — just looking at pH misses the concurrent respiratory acidosis (COPD). Reducing ventilation in a COPD patient with actual CO2 retention would be dangerous. Always work through all 5 steps.' },
      { id: 'bicarb-resp', name: 'Give bicarbonate — respiratory acidosis with PaCO2 55', rationale: 'PaCO2 55 is NOT the primary problem — it is a concurrent disorder. The primary disorder is metabolic alkalosis (HCO3 42). Giving bicarb would worsen the alkalosis dramatically.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Systematic ABG interpretation (5 steps): (1) pH = acidosis or alkalosis. (2) PaCO2 direction — respiratory component. (3) HCO3 direction — metabolic component. (4) Is compensation appropriate? (5) Calculate anion gap and delta-delta if AGMA present.',
      'Compensation formulas: Metabolic alkalosis → expected PaCO2 = 0.7×(HCO3-24) + 21. Metabolic acidosis → expected PaCO2 = 1.5×HCO3 + 8 ± 2 (Winter\'s formula). Respiratory acidosis (chronic) → expected HCO3 = 24 + 3.5×((PaCO2-40)/10).',
      'Chloride-responsive metabolic alkalosis (urine Cl <20): causes = vomiting, NG suction, diuretics. Treatment: NS + KCl. Chloride-resistant (urine Cl >20): hyperaldosteronism, Bartter/Gitelman — NS will not help.',
      'Delta-delta ratio in mixed AGMA: ΔAG/ΔHCO3. If >2 = concurrent metabolic alkalosis. If <1 = concurrent non-anion gap metabolic acidosis. Corrected AG for hypoalbuminemia: add 2.5×(4-albumin) to measured AG.'
    ],
    boardPearls: [
      'Anion gap = Na − (Cl + HCO3). Normal = 8-12 (some use 12). Correct for hypoalbuminemia: add 2.5 mEq/L per 1 g/dL albumin below 4.',
      'MUDPILES (AGMA causes): Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates.',
      'Non-anion gap metabolic acidosis (NAGMA): hyperchloremic. HARDUP: Hyperalimentation, Addison\'s, Renal tubular acidosis, Diarrhea, Ureteroenteric fistulas, Pancreatic/biliary fistulas.',
      'Paradoxical aciduria in metabolic alkalosis: severe hypokalemia causes kidney to secrete H+ to retain K+, producing acidic urine despite systemic alkalosis.'
    ]
  },
  references: [{ id: 'StatPearls-AcidBase', title: 'Arterial Blood Gas Interpretation', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK536919/', openAccess: true }]
};
