/* CASE: aaa-v2 — Ruptured AAA Survivor: Post-Op EVAR Management */
window.CASES = window.CASES || {};
window.CASES['aaa-v2'] = {
  id: 'aaa-v2', name: 'Leonard Harris', age: '72M', dob: '1953-07-06',
  mrn: 'RDX-2026-91772', setting: 'Vascular Surgery / ICU',
  chiefComplaint: 'Post-EVAR day 2 for ruptured AAA — endoleak detected on CT, dropping Hgb',
  diagnosis: 'Type II Endoleak Post-EVAR with Ongoing Sac Expansion',
  category: 'vascular', acuity: 2,
  continuityNote: 'aaa-v1: Leonard Harris, 72M, ruptured AAA, BP 82/50 on arrival. Emergency EVAR (endovascular aneurysm repair) performed — technically successful. Now post-op day 2, CT angiogram reveals endoleak.',
  presentation: {
    hpi: 'Post-EVAR day 2. CT angiogram ordered for surveillance shows contrast blush within the aneurysm sac — endoleak present. Sac diameter unchanged at 6.8cm. Hgb 8.2 (down from 9.4 yesterday). BP stable 132/78. Not in active hemorrhage but sac not fully excluded. Vascular surgery needs endoleak classification and management plan.',
    pmh: ['Ruptured AAA (repaired EVAR day 0)', 'COPD', 'HTN', '45 pack-year smoking history'],
    meds: ['Aspirin 81mg', 'Clopidogrel 75mg', 'Atorvastatin 80mg', 'Metoprolol'], allergies: ['Contrast — mild (pre-medicated)']
  },
  vitals: { BP: '132/78', HR: '78', RR: '16', Temp: '37.2°C', SpO2: '96%' },
  labs: {
    'CTA Post-EVAR': 'Type II endoleak — contrast fills aneurysm sac via patent inferior mesenteric artery (IMA) and lumbar arteries. Stent graft position: no migration. Sac: 6.8cm (unchanged from pre-op). No type I or III endoleak (high-pressure, require immediate intervention).',
    'Hgb': '8.2 (H — down from 9.4 yesterday, up from 7.1 post-op)',
    'Coags': 'INR 1.4, Plt 88 (L — dilutional + consumption post-EVAR)'
  },
  orders: {
    correct: [
      { id: 'classify-endoleak', name: 'Classify endoleak type — dictates urgency and management', rationale: 'Type I (graft attachment site leak — high pressure): URGENT reintervention. Type II (branch vessel backflow — IMA, lumbar): watchful waiting if sac stable. Type III (graft defect — high pressure): urgent. Type IV (graft porosity): rare, resolves. This is Type II — lowest urgency, monitor sac size.' },
      { id: 'watch-typeii', name: 'Watchful waiting with serial CTA at 1 month, 6 months — Type II endoleak with stable sac', rationale: 'Type II endoleak without sac growth: 60-70% resolve spontaneously. Monitor sac size with serial CTA. Intervention (coil embolization of feeding vessel or laparoscopic ligation) only if sac growing >5mm in 6 months.' },
      { id: 'surveillance-evar', name: 'Lifelong EVAR surveillance protocol: CTA at 1 month, 12 months, then annually', rationale: 'EVAR requires lifelong surveillance for endoleak, stent migration, and sac expansion. Unlike open repair, EVAR has ongoing failure modes. Many patients undergo secondary interventions within 5 years. Annual imaging is mandatory.' }
    ],
    incorrect: [
      { id: 'emergent-return', name: 'Emergency return to OR — all endoleaks require immediate reintervention', rationale: 'Type II endoleaks are low-pressure (venous backfill), not arterial. 60-70% resolve spontaneously. Immediate intervention has risks exceeding benefits for stable Type II. Reserve intervention for sac growth >5mm over 6 months or conversion to high-pressure endoleak.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Endoleak classification: Type I (attachment site, high-pressure, urgent) → Type II (branch vessel backflow, IMA/lumbar, low-pressure, watchful waiting) → Type III (graft defect, urgent) → Type IV (porosity, resolves).',
      'Type II endoleak management: observe if sac stable. Intervene (coil embolization, branch ligation) if sac expands >5mm over 6 months. 60-70% resolve spontaneously.',
      'EVAR surveillance is lifelong and mandatory — endoleak, stent migration, sac expansion can occur years later. Annual CTA after initial 1-month and 12-month scans.',
      'Open AAA repair vs EVAR: EVAR has lower 30-day mortality but equivalent long-term mortality. EVAR requires more reinterventions. Open repair is more durable long-term.'
    ],
    boardPearls: [
      'AAA screening: USPSTF recommends one-time US for men 65-75 who have ever smoked (A recommendation). No recommendation for women or non-smokers.',
      'AAA rupture triad: sudden severe back/abdominal pain + hypotension + pulsatile abdominal mass. Immediate OR — bedside US to confirm, no CT if unstable.',
      'AAA repair thresholds: diameter ≥5.5cm (men), ≥5.0cm (women), or growth >0.5cm/6 months. Symptomatic aneurysm (pain, tenderness): repair regardless of size.',
      'Aortic dissection vs rupture: dissection = tearing/ripping pain radiating to back + BP differential between arms. Rupture = sudden severe pain + hemodynamic collapse. Different management algorithms.'
    ]
  },
  references: [{ id: 'StatPearls-AAA', title: 'Abdominal Aortic Aneurysm', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430928/', openAccess: true }]
};
