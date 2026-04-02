/* CASE: copd-v2 — COPD with Hypercapnic Respiratory Failure — NIV Decision */
window.CASES = window.CASES || {};
window.CASES['copd-v2'] = {
  id: 'copd-v2', name: 'Earl Thompson', age: '67M', dob: '1958-09-03',
  mrn: 'RDX-2026-44211', setting: 'ED → MICU',
  chiefComplaint: 'Severe COPD exacerbation — pH 7.26, pCO2 78 — intubate or NIV?',
  diagnosis: 'Acute Hypercapnic Respiratory Failure on COPD — NIV Initiation',
  category: 'pulmonary', acuity: 1,
  continuityNote: 'copd-v1: Earl Thompson, 67M, severe COPD (GOLD 3, FEV1 35% predicted), 60 pack-years, on home O2 2L NC. Presented with 3-day worsening dyspnea and purulent sputum. Started on bronchodilators, steroids, antibiotics. Now 2h into treatment: work of breathing increasing, ABG worsening.',
  presentation: {
    hpi: 'Despite bronchodilators, IV steroids, and azithromycin, Earl is tiring. He is using accessory muscles, RR 32, pursed-lip breathing. ABG on 4L NC: pH 7.26, pCO2 78 (H), PaO2 54, HCO3 34 (chronic compensation). He can still speak in short sentences and follow commands. SpO2 84% → 88% on 4L. He has never been intubated and has expressed a preference to avoid intubation if possible.',
    pmh: ['COPD GOLD 3 (FEV1 35%)', '60 pack-year smoking history', 'Home O2 2L NC', 'Cor pulmonale'], meds: ['Tiotropium', 'Salmeterol/fluticasone', 'Albuterol PRN', 'Home O2'], allergies: ['NKDA']
  },
  vitals: { BP: '148/92', HR: '112', RR: '32', Temp: '37.8°C', SpO2: '88% on 4L NC' },
  labs: {
    'ABG (4L NC)': 'pH 7.26 (H), pCO2 78 (H — acute on chronic), PaO2 54 (L), HCO3 34 (compensated chronic CO2 retention)',
    'CXR': 'Hyperinflation, flattened diaphragms. Right lower lobe infiltrate — pneumonia triggering exacerbation.',
    'BMP': 'Bicarb 34 (H — chronic CO2 retention), Cr 1.1, K 3.8',
    'CBC': 'WBC 14.2 (H — infection), Polycythemia (Hgb 17.8 — chronic hypoxia)'
  },
  orders: {
    correct: [
      { id: 'niv-copd', name: 'BiPAP — IPAP 12, EPAP 5, FiO2 titrate to SpO2 88-92%', rationale: 'NIV (BiPAP) is the standard of care for COPD exacerbation with hypercapnic respiratory failure (pH 7.26-7.35, pCO2 >45). Reduces intubation rate by 65%, reduces mortality by 50%, reduces ICU stay. IPAP provides ventilatory assistance; EPAP prevents auto-PEEP and stents airways. Target SpO2 88-92% — avoid over-oxygenation (hypoxic drive, Haldane effect).' },
      { id: 'o2-target-copd', name: 'Oxygen target SpO2 88-92% ONLY — not >95%', rationale: 'Hyperoxia in COPD causes Haldane effect (O2 displaces CO2 from hemoglobin → CO2 unloading → hypercapnia) and suppresses hypoxic drive. Target SpO2 88-92%. This is a critical distinction from most other clinical scenarios.' },
      { id: 'trial-niv', name: 'NIV trial 1-2h — reassess pH and pCO2', rationale: 'Response to NIV: pH improving toward 7.30+ and pCO2 decreasing = continue. pH worsening or not improving, increasing distress, inability to protect airway, hemodynamic instability = intubate without further delay.' },
      { id: 'goals-copd', name: 'Discuss goals of care — patient expressed preference to avoid intubation', rationale: 'Earl has expressed a preference to avoid intubation. If NIV fails, this preference must guide the decision. Discuss: NIV as a ceiling of care (comfort-focused) vs intubation as a bridge to recovery. COPD patients can do well post-intubation if they survive the acute exacerbation.' }
    ],
    incorrect: [
      { id: 'highflow-o2', name: 'High-flow nasal cannula to SpO2 >95% — better oxygenation', rationale: 'DANGEROUS in COPD — hyperoxia causes hypercapnia (Haldane effect, loss of hypoxic drive). Target SpO2 88-92%. High-flow O2 is appropriate for hypoxic (not hypercapnic) respiratory failure; COPD with CO2 retention requires controlled O2 via NIV.' },
      { id: 'intubate-now', name: 'Intubate now — pH 7.26 is too acidotic for NIV', rationale: 'pH 7.26 with acute on chronic CO2 retention is the ideal NIV candidate. Absolute NIV contraindications: inability to protect airway, hemodynamic instability, inability to fit mask, vomiting. pH alone is not an intubation criterion if NIV can be initiated. A 1-2h NIV trial is appropriate.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'NIV indications in COPD exacerbation: pH 7.26-7.35 + pCO2 >45 + RR >25 + accessory muscle use. Reduces intubation 65%, mortality 50%. Give NIV before intubation if no absolute contraindications.',
      'Oxygen target in COPD: 88-92% ONLY. Hyperoxia causes hypercapnia via Haldane effect (O2 outcompetes CO2 on hemoglobin) and suppresses hypoxic respiratory drive. This is the opposite of most clinical scenarios.',
      'NIV failure criteria (→ intubate): pH worsening or not improving after 1-2h, increasing distress, hemodynamic instability, inability to protect airway, GCS declining.',
      'BiPAP settings: IPAP 12-20 (ventilatory assistance), EPAP 5-8 (stents airways, prevents auto-PEEP). Titrate FiO2 to SpO2 88-92%.'
    ],
    boardPearls: [
      'Auto-PEEP in COPD: air trapping from expiratory flow limitation. Causes dynamic hyperinflation → impairs venous return → hypotension. Treat: reduce respiratory rate, allow longer expiratory time, add external PEEP to match auto-PEEP.',
      'COPD exacerbation antibiotics: azithromycin or doxycycline for mild-moderate (outpatient). Augmentin or respiratory fluoroquinolone for hospitalized patients. Tailor based on sputum gram stain.',
      'GOLD E (≥2 exacerbations/year or ≥1 leading to hospitalization): add ICS/LABA + LAMA (triple therapy). IMPACT trial showed mortality benefit.',
      'Post-intubation ventilation in COPD: low rate (8-10/min), long expiratory time (I:E ratio 1:3 to 1:5), accept permissive hypercapnia. High PEEP is harmful in COPD (worsens auto-PEEP).'
    ]
  },
  references: [{ id: 'StatPearls-COPD', title: 'COPD Exacerbation', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK559281/', openAccess: true }]
};
