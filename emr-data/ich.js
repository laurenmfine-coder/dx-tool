/* emr-data/ich.js — Intracerebral Hemorrhage: BP Control + Reversal */
window.CASES = window.CASES || {};
window.CASES['ich'] = {
  id: 'ich', name: 'Raymond Clarke', age: '72M', dob: '1953-04-18',
  mrn: 'RDX-2026-82341', setting: 'ED → Neuro ICU',
  chiefComplaint: 'Sudden left-sided weakness + headache + BP 228/118 — on warfarin for afib',
  diagnosis: 'Hypertensive Intracerebral Hemorrhage — Left Basal Ganglia. Warfarin-Anticoagulated.',
  category: 'neurologic', acuity: 1,
  presentation: {
    hpi: '72M with HTN and atrial fibrillation on warfarin (INR 3.2). Sudden onset left arm and leg weakness + severe headache while watching TV. CT head: 25mL left basal ganglia hemorrhage with 5mm midline shift. No subarachnoid extension. GCS 12. BP 228/118.',
    pmh: ['HTN', 'Atrial fibrillation (on warfarin)', 'DM2'], meds: ['Warfarin', 'Metoprolol', 'Lisinopril', 'Metformin'], allergies: ['NKDA']
  },
  vitals: { BP: '228/118', HR: '88 (controlled afib)', RR: '18', Temp: '37.0°C', SpO2: '96%', GCS: '12 (E3V4M5)' },
  labs: {
    'CT head': '25mL left basal ganglia hyperdensity (hemorrhage). 5mm rightward midline shift. No herniation. No SAH.',
    'INR': '3.2 (therapeutic anticoagulation with warfarin — MUST REVERSE URGENTLY)',
    'CBC': 'Plt 188 (normal)', 'BMP': 'Normal, Cr 1.1'
  },
  orders: {
    correct: [
      { id: 'reverse-warfarin', name: '4-factor PCC (Kcentra) 25 units/kg IV + Vitamin K 10mg IV — URGENT warfarin reversal', rationale: '4-factor PCC is first-line for warfarin-associated ICH (replaces factors II, VII, IX, X within minutes). Vitamin K for sustained reversal. FFP is slower, requires more volume, and is no longer preferred for anticoagulation reversal in ICH.' },
      { id: 'bp-ich', name: 'Nicardipine IV — target SBP 140-160 mmHg (ATACH-2 / INTERACT-2)', rationale: 'INTERACT-2 and ATACH-2 trials: target SBP <140 is safe and may reduce hematoma expansion. Use titratable IV agent (nicardipine or labetalol). ATACH-2 showed no benefit of intensive SBP <120 over standard <140.' },
      { id: 'neurosurg-ich', name: 'Neurosurgery consult — midline shift 5mm, GCS 12', rationale: 'Surgical criteria for spontaneous ICH: large volume (>30mL), cerebellar (any size >3cm), deteriorating GCS, or obstructive hydrocephalus. Basal ganglia ICH: surgery generally not beneficial vs medical management (STICH trial) — but neurosurgery must evaluate.' },
      { id: 'hold-anticoag', name: 'Hold warfarin — restart timing requires neurology/hematology discussion at ≥4-6 weeks', rationale: 'Anticoagulation in ICH: restart warfarin after ICH for afib patients is controversial. Most guidelines: restart at ≥4-6 weeks if high thromboembolic risk + small ICH. DOAC alternatives may be safer if restarted (LOEKORET trial data emerging).' }
    ],
    incorrect: [
      { id: 'ffp-ich', name: 'FFP 4 units to reverse warfarin', rationale: 'FFP takes 30-60 min to prepare and thaw, requires large volumes (10-15 mL/kg), and reversal is slower than PCC. 4-factor PCC reverses INR to <1.5 within 15 minutes. FFP is second-line for warfarin reversal in ICH.' },
      { id: 'aggressive-bp-ich', name: 'Target SBP <120 — aggressive control stops hematoma expansion', rationale: 'ATACH-2 trial: aggressive SBP target <120 did NOT improve outcomes vs <140 and may have increased renal adverse events. Target SBP 140-160.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Warfarin reversal in ICH: 4-factor PCC (Kcentra) + Vitamin K 10mg IV. PCC reverses INR within 15 minutes — do not use FFP as primary agent.',
      'BP target in ICH: SBP 140-160 mmHg (INTERACT-2/ATACH-2). Avoid extreme hypertension (hematoma expansion) AND excessive lowering (ischemia at hematoma periphery).',
      'DOAC reversal: dabigatran → idarucizumab (Praxbind). Factor Xa inhibitors (apixaban, rivaroxaban) → andexanet alfa (Andexxa) or 4-factor PCC.',
      'Cerebellar ICH: neurosurgical emergency if >3cm — causes rapid brainstem compression. Early evacuation is life-saving.'
    ],
    boardPearls: [
      'ICH score: GCS + age + infratentorial location + ICH volume + intraventricular extension. Score 0 = 0% 30-day mortality; score 5-6 = ~100%.',
      'Spot sign on CT angiography: active contrast extravasation within ICH = high risk of hematoma expansion (3× larger) — neurosurgical consultation urgent.',
      'Hypertensive basal ganglia/thalamic ICH: most common location. Lobar ICH in elderly: think amyloid angiopathy (microbleeds on GRE/SWI MRI).',
      'STICH trial: surgical evacuation of spontaneous supratentorial ICH — no benefit for most patients. Exception: cerebellar ICH >3cm, obstructive hydrocephalus, young patient with large lobar ICH.'
    ]
  },
  references: [{ id: 'StatPearls-ICH', title: 'Intracerebral Hemorrhage', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK553090/', openAccess: true }]
};
