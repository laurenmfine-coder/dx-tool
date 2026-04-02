/* emr-data/acetaminophen-overdose.js — Acetaminophen Overdose: NAC Protocol */
window.CASES = window.CASES || {};
window.CASES['acetaminophen-overdose'] = {
  id: 'acetaminophen-overdose', name: 'Jessica Park', age: '22F', dob: '2003-09-11',
  mrn: 'RDX-2026-58821', setting: 'ED → Toxicology / Psychiatry', category: 'toxicology', acuity: 2,
  chiefComplaint: 'Ingested ~12g acetaminophen 6 hours ago — intentional overdose',
  diagnosis: 'Acetaminophen Overdose — Rumack-Matthew Nomogram: Treatment Line, Start NAC',
  presentation: {
    hpi: 'Jessica Park, 22F, brought by friend after disclosing she took "a whole bottle" of Tylenol Extra Strength approximately 6 hours ago. She reports taking approximately 24 × 500mg tablets = 12,000mg (~12g). She has been vomiting. She appears mildly nauseous but is currently asymptomatic (Phase 1: 0-24h — nausea, malaise; liver injury appears Phase 2: 24-72h). Acetaminophen level: 180 mcg/mL at hour 6 — ABOVE the treatment line on Rumack-Matthew nomogram. Activated charcoal not indicated at 6 hours post-ingestion.',
    pmh: ['Depression — not currently on medications', 'No prior overdose'],
    meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '118/72', HR: '92', RR: '16', Temp: '37.0°C', SpO2: '99%', GCS: '15' },
  labs: {
    'Acetaminophen level (6h post-ingestion)': '180 mcg/mL — ABOVE treatment line (150 mcg/mL at 4h, or plot on nomogram: 6h treatment line ≈ 70 mcg/mL → 180 is well above)',
    'AST/ALT': 'AST 28, ALT 32 — currently normal (hepatotoxicity not yet apparent)',
    'INR': '1.0 — normal (PT/INR elevation is early sign of hepatotoxicity)',
    'BMP': 'Normal. Creatinine 0.8. Glucose 88.',
    'Urine pregnancy': 'Negative',
    'Salicylate level': 'Undetectable — co-ingestion excluded',
    'EtOH': 'Undetectable'
  },
  orders: {
    correct: [
      { id: 'nac-iv', name: 'N-acetylcysteine (NAC) IV — 3-bag protocol: 150mg/kg over 1h, then 50mg/kg over 4h, then 100mg/kg over 16h', rationale: 'NAC is the antidote for acetaminophen toxicity. Mechanism: replenishes glutathione, which conjugates the toxic NAPQI metabolite. Most effective when started within 8-10 hours of ingestion. Still beneficial up to 24h+ in severe toxicity. IV preferred if vomiting. PO NAC is acceptable when tolerated (21-hour protocol).' },
      { id: 'nomogram', name: 'Plot acetaminophen level on Rumack-Matthew nomogram — confirms treatment decision', rationale: '4-hour level (or later levels plotted on nomogram) determines treatment. Level above the treatment line = start NAC. Level below = observe only. Never delay NAC while awaiting nomogram confirmation if clinical scenario is clear.' },
      { id: 'lft-monitor', name: 'Serial LFTs, INR, creatinine every 6-12h — monitor for hepatotoxicity', rationale: 'Hepatotoxicity peaks at 72-96h post-ingestion. Rising AST/ALT + coagulopathy (INR >1.5) indicates hepatic injury. King\'s College criteria for liver transplant evaluation if fulminant hepatic failure develops.' },
      { id: 'psych-consult', name: 'Psychiatry consult — intentional overdose', rationale: 'All intentional overdoses require psychiatric evaluation before discharge. Safety planning, disposition, and follow-up are mandatory. Do not discharge without psychiatric clearance.' }
    ],
    incorrect: [
      { id: 'charcoal-6h', name: 'Activated charcoal — delays absorption', rationale: 'Activated charcoal is only beneficial within 1-2 hours of ingestion. At 6 hours, acetaminophen is fully absorbed — charcoal provides no benefit and adds aspiration risk. Do not give.' },
      { id: 'watch-wait', name: 'Observe — patient is currently asymptomatic, no liver injury yet', rationale: 'Acetaminophen hepatotoxicity is clinically silent for 24-72h. The window for NAC to prevent liver injury is closing. Waiting for symptoms = waiting for irreversible damage. Treat based on nomogram, not symptoms.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Acetaminophen toxicity phases: Phase 1 (0-24h): nausea, malaise — appears well. Phase 2 (24-72h): RUQ pain, rising LFTs, INR. Phase 3 (72-96h): peak hepatotoxicity. Phase 4: recovery or fulminant hepatic failure.',
      'Rumack-Matthew nomogram: plot acetaminophen level by time post-ingestion. Level above treatment line = NAC. The nomogram is only valid for acute single-ingestion — not for chronic/staggered overdose (treat any elevated level with NAC).',
      'NAC must be started within 8-10h for maximum hepatoprotection. It still has benefit beyond 10h — never withhold NAC based on delay alone.',
      'King\'s College Criteria for liver transplant in acetaminophen ALF: pH <7.3 (after resuscitation) OR all three of: INR >6.5 + creatinine >3.4 + Grade 3-4 encephalopathy.'
    ],
    boardPearls: [
      'NAC mechanism: replenishes glutathione (depleted by NAPQI — the toxic CYP2E1 metabolite). Also has anti-inflammatory and vasodilatory effects.',
      'Risk factors for hepatotoxicity at lower doses: chronic alcohol use (CYP2E1 induction), fasting/malnutrition (depleted glutathione), enzyme-inducing medications (rifampin, carbamazepine, isoniazid).',
      'Staggered/repeated supratherapeutic overdose: nomogram does NOT apply. Treat with NAC if cumulative dose >150mg/kg in any 24h period, or any elevated serum level.',
      'NAC anaphylactoid reaction (5-10%): flushing, urticaria, angioedema, bronchospasm — NOT IgE-mediated. Treat: stop infusion, diphenhydramine, restart at slower rate. Rarely need to permanently stop.'
    ]
  },
  references: [{ id: 'StatPearls-APAP', title: 'Acetaminophen Toxicity', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK441917/', openAccess: true }]
};
