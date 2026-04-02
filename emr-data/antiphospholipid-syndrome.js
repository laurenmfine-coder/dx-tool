window.CASES = window.CASES || {};
window.CASES['antiphospholipid-syndrome'] = {
  id: 'antiphospholipid-syndrome', name: 'Claire Davidson', age: '33F', dob: '1992-03-24',
  mrn: 'RDX-2026-59341', setting: 'Hematology / Medicine',
  chiefComplaint: 'Third pregnancy loss at 16 weeks + DVT — aPTT prolonged, anticardiolipin antibody positive',
  diagnosis: 'Antiphospholipid Syndrome — Triple Positive, Catastrophic APS Risk',
  category: 'hematologic', acuity: 2,
  presentation: {
    hpi: '33F with 3 prior pregnancy losses (weeks 10, 14, 16) and a DVT 2 years ago (treated with rivaroxaban for 3 months, then stopped). Now: left femoral DVT again. Labs: aPTT 52 (prolonged — lupus anticoagulant prolongs aPTT in vitro but causes THROMBOSIS in vivo — the paradox). Anticardiolipin IgG: 120 GPL (H — >40 = positive). Anti-β2-glycoprotein I IgG: 88 U/mL (H). Lupus anticoagulant: positive. "Triple positive" APS — highest risk category. ANA negative — no SLE.',
    pmh: ['3 pregnancy losses', 'Prior DVT × 1 (on rivaroxaban 3 months, stopped)'],
    meds: ['None (stopped rivaroxaban after 3 months)'], allergies: ['NKDA']
  },
  vitals: { BP: '122/76', HR: '78', RR: '14', Temp: '37.0°C', SpO2: '99%' },
  labs: {
    'aPTT': '52 seconds (prolonged — LA paradox: in vitro clotting time prolonged, in vivo thrombosis)',
    'Lupus anticoagulant': 'Positive (confirmed on 2 occasions 12 weeks apart)',
    'Anticardiolipin IgG': '120 GPL (H, persistent — confirmed 12 weeks apart)',
    'Anti-β2GP1 IgG': '88 U/mL (H, confirmed)',
    'ANA': 'Negative — primary APS (not secondary to SLE)',
    'TRAP trial result': 'DOAC inferior to warfarin for thrombotic APS — warfarin is required'
  },
  orders: {
    correct: [
      { id: 'warfarin-aps', name: 'Warfarin (target INR 2.5-3.5 for recurrent thrombosis) — lifelong anticoagulation', rationale: 'APS with thrombosis requires WARFARIN — NOT DOACs. TRAPS trial (2019): rivaroxaban was inferior to warfarin in thrombotic APS, with higher rate of thromboembolic events and major bleeding. DOAC failure is especially common in triple-positive APS. Lifelong anticoagulation for thrombotic APS.' },
      { id: 'aspirin-aps', name: 'Low-dose aspirin 81mg daily — add to warfarin for arterial thrombosis or recurrent events', rationale: 'Aspirin added to warfarin for arterial APS thrombosis (stroke, MI) or recurrent events despite anticoagulation. Some guidelines add aspirin for all triple-positive patients.' },
      { id: 'hematology-aps', name: 'Hematology + maternal-fetal medicine — preconception counseling', rationale: 'Obstetric APS (recurrent pregnancy loss): warfarin is teratogenic in first trimester. Management: unfractionated heparin or LMWH + aspirin during pregnancy. Transition to warfarin after delivery.' }
    ],
    incorrect: [
      { id: 'doac-aps', name: 'Continue rivaroxaban — she was already on a DOAC, convenient to continue', rationale: 'DOACs are INFERIOR to warfarin in APS per TRAPS trial. Rivaroxaban was associated with higher thromboembolic events and bleeding in APS patients. This patient had a recurrent DVT WHILE ON rivaroxaban — that is DOAC failure in APS. Must switch to warfarin.' },
      { id: 'stop-after-3mo', name: 'Treat DVT for 3 months then stop — standard VTE duration', rationale: 'APS with thrombosis requires LIFELONG anticoagulation. 3 months is insufficient — APS is a persistent prothrombotic state. She had a recurrence when anticoagulation was stopped. Her recurrent thrombosis + triple-positive APS = indefinite anticoagulation.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'APS diagnosis requires: ≥1 clinical criterion (thrombosis OR pregnancy morbidity) + ≥1 lab criterion (lupus anticoagulant OR anticardiolipin ≥40 OR anti-β2GP1 ≥40 GPL/MPL) on 2+ occasions ≥12 weeks apart.',
      'Lupus anticoagulant paradox: prolongs aPTT in vitro (interferes with phospholipid-dependent coagulation tests) but causes THROMBOSIS in vivo (antibodies bind phospholipids on endothelium and platelets).',
      'APS + thrombosis = WARFARIN, not DOACs. TRAPS trial showed DOACs are inferior in thrombotic APS, especially triple-positive. Lifelong anticoagulation.',
      'Triple-positive APS (all three antibodies positive) = highest recurrence risk. Catastrophic APS (CAPS): multiple organ thrombosis simultaneously — treat with anticoagulation + steroids + IVIG + plasma exchange.'
    ],
    boardPearls: [
      'Obstetric APS: LMWH + low-dose aspirin during pregnancy. Warfarin is teratogenic weeks 6-12 (fetal warfarin syndrome: chondrodysplasia, nasal hypoplasia). Switch to LMWH preconception.',
      'Catastrophic APS: <1% of APS patients but 50% mortality. Criteria: involvement of ≥3 organs + histopathology evidence of microvascular thrombosis. Treat: anticoagulation + high-dose steroids + IVIG + plasma exchange.',
      'Hydroxychloroquine for APS: reduces thrombosis risk in SLE-associated APS and may have benefit in primary APS — often used adjunctively.',
      'Secondary APS: most common underlying condition is SLE. Screen all SLE patients for APS antibodies. Other secondary causes: malignancy, infections, drugs.'
    ]
  },
  references: [{ id: 'StatPearls-APS', title: 'Antiphospholipid Syndrome', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430980/', openAccess: true }]
};
