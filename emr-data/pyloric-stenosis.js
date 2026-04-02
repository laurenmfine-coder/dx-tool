window.CASES = window.CASES || {};
window.CASES['pyloric-stenosis'] = {
  id: 'pyloric-stenosis', name: 'Noah Kim', age: '5wk', dob: '2026-02-24',
  mrn: 'RDX-2026-54113', setting: 'Pediatric ED', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Hypertrophic Pyloric Stenosis — Correct Alkalosis Before Surgery', diagnosis: 'Hypertrophic Pyloric Stenosis — Correct Alkalosis Before Surgery',
  presentation: {
    hpi: '5-week-old male. 1 week of projectile non-bilious vomiting after every feed — immediately post-feed. \'Hungry vomiter\' — takes breast eagerly again after vomiting. Weight loss 400g from birth weight. Olive-shaped mass palpated in right epigastrium during feed. Ultrasound: pyloric muscle wall thickness 5mm (>4mm = positive), channel length 22mm (>17mm = positive).',
    pmh: ['See encounter'], meds: ['See encounter'], allergies: ['NKDA']
  },
  vitals: { HR: '158', RR: '36', Temp: '37.2°C', SpO2: '98%', Weight: '3.8kg' },
  labs: { 'Pyloric US': 'Muscle wall thickness 5mm (≥4mm = HPS), channel length 22mm (≥17mm = HPS) — CONFIRMED', 'BMP': 'Na 133 (L) | K 2.8 (L) | Cl 82 (L — HCl loss from vomiting) | HCO3 32 (H — metabolic alkalosis) | pH 7.52' },
  orders: {
    correct: [{ id: 'correct-alk', name: 'IV fluid resuscitation + KCl to correct hypochloremic hypokalemic metabolic alkalosis BEFORE surgery', rationale: 'CRITICAL: The metabolic alkalosis from HCl loss (vomiting) creates dangerous anesthetic risk. Alkalosis causes respiratory compensation (hypoventilation) → postoperative apnea. Correct first: NS + KCl IV until Cl >100, K >3.5, HCO3 <30. May take 24-48h.' },
      { id: 'pyloromyotomy', name: 'Ramstedt pyloromyotomy after metabolic correction — laparoscopic or open', rationale: 'Surgical treatment: longitudinal incision through hypertrophied pyloric muscle without entering mucosa (Ramstedt). Curative. Feeding resumes 4-6h post-op. Laparoscopic approach is now standard at most centers.' }],
    incorrect: [{ id: 'emergency-or', name: 'Emergency surgery tonight — the baby needs his pylorus fixed now', rationale: 'WRONG URGENCY. Pyloric stenosis is urgent but NOT emergent. The metabolic alkalosis + hypokalemia creates anesthetic risk (postoperative apnea). Rushing to OR with K 2.8 and HCO3 32 is dangerous. Correct electrolytes first — surgery is safe to delay 24-48h.' },
      { id: 'formula-change', name: 'Switch to soy formula — projectile vomiting is likely GERD or milk allergy', rationale: 'Projectile non-bilious vomiting + hungry vomiter + olive mass + classic electrolyte pattern = pyloric stenosis. This is not GERD (GERD rarely causes projectile vomiting + weight loss + the classic metabolic derangement). Ultrasound is diagnostic.' }]
  },
  teachingPoints: {
    keyLearning: ['Pyloric stenosis: peaks at 2-8 weeks (not at birth). Projectile non-bilious vomiting + hungry vomiter + olive mass = HPS. Ultrasound is diagnostic.', 'Metabolic derangement: hypochloremic hypokalemic metabolic alkalosis from HCl loss. Paradoxical aciduria: kidney excretes H+ to retain K+ → acidic urine despite systemic alkalosis.', 'CORRECT ALKALOSIS BEFORE SURGERY — not an emergency. Adequate resuscitation with NS + KCl until Cl >100, K >3.5, HCO3 <30 required before safe anesthesia.'],
    boardPearls: ['Pyloric stenosis: more common in firstborn males, offspring of mothers who had PS. Slight increase in breastfed infants.', 'Post-op: early feeding 4-6h after Ramstedt. Vomiting in first few days post-op is common (mucosal edema) — reassure parents.', 'Differential: GERD (non-projectile, not losing weight, no olive mass), malrotation/volvulus (BILIOUS vomiting — emergency), formula intolerance (bloody stool).']
  },
  references: [{ id: 'StatPearls', title: 'Hypertrophic Pyloric Stenosis — Correct Alkalosis Before Surgery', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK499925/', openAccess: true }]
};
