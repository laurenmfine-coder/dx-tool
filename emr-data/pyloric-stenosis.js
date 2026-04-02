/* emr-data/pyloric-stenosis.js */
window.CASES = window.CASES || {};
window.CASES['pyloric-stenosis'] = {
  id: 'pyloric-stenosis', name: 'Noah Kim', age: '5wk', dob: '2026-02-15',
  mrn: 'RDX-2026-10378', setting: 'Clinic', category: 'pediatric', acuity: 2,
  chiefComplaint: '5-week-old male — projectile non-bilious vomiting after every feed × 1 week',
  diagnosis: 'Hypertrophic Pyloric Stenosis',
  presentation: { hpi: '5-week-old male. 1 week of projectile non-bilious vomiting immediately after every feed. He is hungry after vomiting (hungry vomiter). Weight loss 400g. Olive-shaped mass palpated in right epigastrium. Metabolic derangement: hypochloremic hypokalemic metabolic alkalosis (classic).', pmh: ['No significant PMH'], meds: ['None'], allergies: ['NKDA'] },
  vitals: { Temp: '37.2°C', HR: '158', RR: '36', SpO2: '98%', Weight: '3.8kg (birth weight 4.2kg)' },
  labs: { 'BMP': 'Na 133, K 2.8 (L), Cl 82 (L — loss of HCl from vomiting), HCO3 32 (H — metabolic alkalosis), Cr 0.5', 'Pyloric US': 'Pyloric muscle wall thickness 5mm (>4mm = positive), channel length 20mm (>17mm = positive) — HYPERTROPHIC PYLORIC STENOSIS CONFIRMED' },
  orders: {
    correct: [
      { id: 'correct-alk-ps', name: 'IV fluid resuscitation + K+ replacement — CORRECT ALKALOSIS BEFORE SURGERY', rationale: 'CRITICAL: Surgery cannot be performed safely with severe metabolic alkalosis — anesthesia risk (apnea from hypocarbia compensation). Correct electrolytes first: NS + KCl at maintenance rate. Target: Cl >100, K >3.5, HCO3 <30, pH normal. This may take 24-48h.' },
      { id: 'pyloromyotomy', name: 'Ramstedt pyloromyotomy — once metabolically corrected', rationale: 'Surgical treatment: longitudinal incision through hypertrophied pyloric muscle without entering mucosa. Curative. Feeding can resume 4-6 hours after surgery. Laparoscopic approach is now standard.' }
    ],
    incorrect: [
      { id: 'emergency-or-ps', name: 'Emergency surgery tonight — baby is vomiting and losing weight', rationale: 'Pyloric stenosis is NOT a surgical emergency — it is an urgent condition. Metabolic derangement must be corrected first. Rushing to OR with metabolic alkalosis + hypokalemia increases anesthetic risk dramatically. Correct electrolytes first (usually 24-48h).' },
      { id: 'formula-change-ps', name: 'Change formula — likely GERD or formula intolerance', rationale: 'Projectile vomiting + olive mass + classic electrolytes = pyloric stenosis. Formula change will not help. Ultrasound is diagnostic.' }
    ]
  },
  teachingPoints: {
    keyLearning: ['Pyloric stenosis presents at 2-8 weeks (not at birth). Projectile non-bilious vomiting + hungry infant + olive mass = pyloric stenosis.', 'Metabolic alkalosis from HCl loss (vomiting): treat electrolytes BEFORE surgery. Alkalosis impairs anesthesia (respiratory compensation = hypocarbia = apnea risk).', 'Paradoxical aciduria: kidney excretes H+ to retain K+ → acidic urine despite systemic alkalosis.'],
    boardPearls: ['Pyloric stenosis is more common in firstborn males and offspring of mothers who had PS.', 'Palpable olive mass is pathognomonic but US is diagnostic (wall thickness ≥4mm, channel ≥17mm).', 'Post-op: early feeding 4-6h after surgery. Spitting is common for several days — reassure parents.']
  },
  references: [{ id: 'StatPearls-PS', title: 'Pyloric Stenosis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK499925/', openAccess: true }]
};
