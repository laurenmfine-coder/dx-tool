/* emr-data/malrotation-volvulus.js — Midgut Volvulus — Surgical Emergency */
window.CASES = window.CASES || {};
window.CASES['malrotation-volvulus'] = {
  id: 'malrotation-volvulus', name: 'Baby James', age: '3d', dob: '2026-03-28',
  mrn: 'RDX-2026-59491', setting: 'Neonatal ICU', category: 'pediatric', acuity: 1,
  chiefComplaint: 'Midgut Volvulus — Surgical Emergency',
  diagnosis: 'Midgut Volvulus — Surgical Emergency',
  presentation: {
    hpi: '3-day-old male. Sudden onset bilious (green) vomiting. Abdomen soft initially. Maternal history: polyhydramnios. Upper GI series: corkscrew appearance of duodenum, duodenojejunal junction to RIGHT of midline (should be left of spine). MIDGUT VOLVULUS — clockwise twisting of midgut on SMA. Bowel ischemia imminent.',
    pmh: ['See clinical encounter'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'Age-appropriate', HR: '178 (tachycardia)', RR: '44', Temp: '37.2°C', SpO2: '96%' },
  labs: { 'UGI series': 'Corkscrew duodenum + DJJ to right of midline — CONFIRMS MALROTATION + VOLVULUS', 'AXR': 'Gasless abdomen or duodenal obstruction pattern', 'Lactate': '3.8 mmol/L (H — bowel ischemia developing)' },
  orders: {
    correct: [
      { id: 'ladd-procedure', name: 'EMERGENCY Ladd procedure — OR immediately, no delay for further imaging', rationale: 'Midgut volvulus is a surgical emergency with minutes-to-hours window before irreversible bowel ischemia. Ladd procedure: (1) untwist volvulus counterclockwise, (2) divide Ladd bands, (3) place cecum in LUQ, (4) appendectomy. Every hour of delay = more bowel loss.' },
      { id: 'ngt-ivf-volvulus', name: 'NGT decompression + IV fluid resuscitation while activating OR', rationale: 'Decompress stomach via NGT. Aggressive IV fluid resuscitation for developing shock. Activate operating room simultaneously — do not delay surgery waiting for fluid response.' }
    ],
    incorrect: [
      { id: 'obs-volvulus', name: 'Observe with serial abdominal exams — may resolve spontaneously', rationale: 'FATAL DELAY. Midgut volvulus does not resolve spontaneously. The SMA is compressed — ischemia is active. Even if the infant appears stable, bowel necrosis is progressing silently. Emergency OR is the only treatment.' },
      { id: 'barium-enema-volvulus', name: 'Barium enema to confirm diagnosis before surgery', rationale: 'Upper GI series is the diagnostic test for malrotation. Barium enema is NOT appropriate here. Once volvulus is confirmed on UGI, go to OR immediately — additional imaging causes fatal delay.' }
    ]
  },
  teachingPoints: {
    keyLearning: ['BILIOUS VOMITING in a neonate = SURGICAL EMERGENCY until proven otherwise. Never dismiss bilious vomiting as feeding intolerance.', 'Malrotation: failure of normal 270° counterclockwise rotation of midgut → narrow SMA mesenteric base → risk of clockwise volvulus. Upper GI series is diagnostic.', 'Ladd procedure: (1) counterclockwise detorsion, (2) divide Ladd bands, (3) cecum to LUQ, (4) appendectomy. Life-saving operation that must not be delayed.'],
    boardPearls: ['Malrotation can present at any age during physiologic stress. 75% present in first month. But adults can present with chronic intermittent abdominal pain.', 'UGI series: corkscrew duodenum + DJJ to right of midline = malrotation + volvulus. Ladd bands = fibrous peritoneal attachments across duodenum causing obstruction.', 'Intestinal atresia post-volvulus: if irreversible bowel necrosis found → resect necrotic bowel → ostomy → second-look surgery in 24-48h for bowel viability.']
  },
  references: [{ id: 'StatPearls', title: 'Midgut Volvulus — Surgical Emergency', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK430744/', openAccess: true }]
};
