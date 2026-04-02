/* emr-data/duodenal-atresia.js — Duodenal Atresia — Double Bubble Sign, Down Syndrome */
window.CASES = window.CASES || {};
window.CASES['duodenal-atresia'] = {
  id: 'duodenal-atresia', name: 'Baby Sofia', age: '1d', dob: '2026-03-30',
  mrn: 'RDX-2026-39598', setting: 'Neonatal ICU', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Duodenal Atresia — Double Bubble Sign, Down Syndrome',
  diagnosis: 'Duodenal Atresia — Double Bubble Sign, Down Syndrome',
  presentation: {
    hpi: '1-day-old female. Bilious vomiting after first feed. Prenatal US: polyhydramnios (fetus cannot swallow). AXR: \'double bubble\' sign — air in stomach + proximal duodenum, no distal gas. Trisomy 21 suspected (hypotonia, single palmar crease, upslanting palpebral fissures). Duodenal atresia is the most common intestinal atresia. Failure of duodenal recanalization at 8-10 weeks gestation.',
    pmh: ['See clinical encounter'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'Age-appropriate', HR: '158', RR: '40', Temp: '37.0°C', SpO2: '97%' },
  labs: { 'AXR': 'Double bubble sign — dilated stomach + dilated proximal duodenum, no distal bowel gas', 'Karyotype': 'Pending — Trisomy 21 suspected (30% of duodenal atresia)', 'Echo': 'Ordered — VSD in 30-40% of Down syndrome', 'Blood glucose': '44 mg/dL (L — hypoglycemia, neonates need dextrose)' },
  orders: {
    correct: [
      { id: 'ngt-replogle', name: 'Replogle tube (double-lumen NGT) to continuous suction — decompress stomach', rationale: 'Immediately decompress the obstructed stomach to prevent aspiration. Replogle tube (10Fr double-lumen) provides continuous suction. NPO.' },
      { id: 'duodenoduodenostomy', name: 'Surgical duodenoduodenostomy — elective repair after stabilization', rationale: 'Duodenal atresia is NOT a surgical emergency unlike volvulus. Stabilize metabolically (fluids, glucose, temperature) → surgery within 24-48h. Duodenoduodenostomy: bypass the atretic segment with anastomosis. Diamond-shaped anastomosis is the gold standard.' }
    ],
    incorrect: [
      { id: 'emergency-or-dd', name: 'Emergency surgery tonight — infant is vomiting', rationale: 'Duodenal atresia (unlike volvulus) allows time for stabilization. The bowel is not ischemic. Correct metabolic abnormalities (glucose, electrolytes, temperature) before OR. Stable infants do well with elective repair within 24-48h.' },
      { id: 'dismiss-dd', name: 'Double bubble on AXR is likely swallowed air — observe', rationale: 'Double bubble + bilious vomiting + polyhydramnios = duodenal atresia until proven otherwise. Never dismiss this finding. Surgical consultation is mandatory.' }
    ]
  },
  teachingPoints: {
    keyLearning: ['Double bubble sign: air-filled stomach + dilated proximal duodenum with no distal gas. Pathognomonic for duodenal atresia. Barium or upper GI series rarely needed — AXR is diagnostic.', 'Down syndrome association: 30% of duodenal atresia patients have trisomy 21. Screen all duodenal atresia patients for chromosomal anomalies, cardiac defects (AVSD, VSD), and VACTERL.', 'Duodenal atresia is NOT emergent — stabilize before surgery. Malrotation/volvulus IS emergent. Distinguish by clinical urgency and UGI findings.'],
    boardPearls: ['Windsock deformity: intraluminal duodenal web (Type I atresia) — lumen is present but obstructed by a membrane that bulges distally (windsock appearance on UGI).', 'Annular pancreas: pancreatic tissue encircling the duodenum — treated the same as atresia (bypass, not division of pancreas).', 'Preduodenal portal vein: anomalous portal vein anterior to duodenum — surgical pitfall during repair, must identify to avoid injury.']
  },
  references: [{ id: 'StatPearls', title: 'Duodenal Atresia — Double Bubble Sign, Down Syndrome', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK536944/', openAccess: true }]
};
