window.CASES = window.CASES || {};
window.CASES['ddh'] = {
  id: 'ddh', name: 'Emma Walsh', age: '6wk', dob: '2026-02-12',
  mrn: 'RDX-2026-37837', setting: 'Pediatric Ortho', category: 'pediatric', acuity: 2,
  chiefComplaint: 'DDH — Pavlik Harness Timing and Complications', diagnosis: 'DDH — Pavlik Harness Timing and Complications',
  presentation: {
    hpi: '6-week-old female. Firstborn, breech delivery, positive family history (mother had DDH). Neonatal hip screening: Ortolani test (relocates dislocatable hip) positive on left — palpable \'clunk.\' Barlow test (dislocates hip): positive. Ultrasound at 6 weeks: Graf Type IIb (borderline), alpha angle 52° (normal >60°). Femoral head covers 35% of acetabulum (abnormal <50%). Left hip subluxable.',
    pmh: ['See encounter'], meds: ['See encounter'], allergies: ['NKDA']
  },
  vitals: { BP: 'Age-appropriate', HR: '138', RR: '36', Temp: '37.0°C', SpO2: '99%' },
  labs: { 'Hip US (Graf classification)': 'Left hip: alpha angle 52° (borderline, Graf Type IIb). Femoral head coverage 35% (H — normal >50%). Right hip: alpha angle 65° (normal, Graf Type I).', 'Risk factors': 'Female, breech, firstborn, family history — ALL 4 major DDH risk factors present' },
  orders: {
    correct: [{ id: 'pavlik', name: 'Pavlik harness — start immediately, maintain hip in flexion/abduction position', rationale: 'Pavlik harness: maintains hip in flexion (~100°) and abduction (~60°) — optimal position for acetabular development and femoral head coverage. Worn 23h/day. Success rate >90% when started before 6 months. Monitor with US every 2-4 weeks.' },
      { id: 'avh-monitoring', name: 'Monitor for AVN (avascular necrosis) — Pavlik risk if over-corrected', rationale: 'Pavlik harness risk: avascular necrosis of femoral head from excessive flexion (>110°) compressing medial femoral circumflex artery. Monitor: US every 2-4 weeks. If Ortolani no longer positive but US shows incomplete coverage → continue harness.' }],
    incorrect: [{ id: 'xray-infant', name: 'AP pelvis X-ray — evaluate hip dysplasia in this 6-week-old', rationale: 'X-ray is UNRELIABLE before 4-6 months because the femoral head is cartilaginous (radiolucent) and not visible. Ultrasound is the diagnostic test of choice for infants <4-6 months. X-ray is appropriate after 4-6 months when femoral head begins ossifying.' },
      { id: 'observe-ddh', name: 'Observe — many hip clicks resolve spontaneously by 6 weeks', rationale: 'BENIGN CLICKS (no palpable clunk, hip is not dislocated) may resolve spontaneously. But Ortolani test positive (palpable clunk of reduction) + US showing alpha angle 52° + femoral head coverage 35% = TRUE dysplasia that requires treatment.' }]
  },
  teachingPoints: {
    keyLearning: ['DDH risk factors: female (4:1), breech presentation, firstborn child, oligohydramnios, family history, left hip more common.', 'Ortolani (relocate) vs Barlow (dislocate): Ortolani = positive clunk = hip is dislocated and can be relocated. Barlow = hip is in socket but can be dislocated. Both require treatment.', 'Treatment timing: Pavlik harness 0-6 months. Closed reduction + spica cast 6-18 months. Open reduction + pelvic osteotomy if still dislocated after 18 months.'],
    boardPearls: ['Graf US classification: Type I (normal α >60°), Type IIa (physiologic, α 50-59°), Type IIb (borderline, needs follow-up), Type III (subluxated), Type IV (dislocated).', 'AVN from Pavlik: excessive flexion compresses medial femoral circumflex artery → avascular necrosis of femoral head. Monitor clinically and with US.', 'Pavlik failure: failure to reduce by 3-4 weeks → stop harness (continued use worsens outcome) → closed reduction under anesthesia + arthrogram.']
  },
  references: [{ id: 'StatPearls', title: 'DDH — Pavlik Harness Timing and Complications', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK459187/', openAccess: true }]
};
