/* CASE: stroke-v3 — Gwendolyn Fischer — Post-Stroke Complications, Rehab Disposition */
window.CASES = window.CASES || {};
window.CASES['stroke-v3'] = {
  id: 'stroke-v3',
  name: 'Gwendolyn Fischer',
  age: '75F',
  dob: '1949-02-28',
  mrn: '405629',
  setting: 'Acute Inpatient Neurology — Day 5',
  chiefComplaint: 'Post-stroke management: aspiration event, AF newly detected, disposition planning',
  diagnosis: 'Post-Stroke Complications: Aspiration Pneumonia + New-Onset Atrial Fibrillation',
  category: 'neurologic',
  continuityNote: 'Prior encounters: stroke-v1 (tPA), stroke-v2 (hemorrhagic conversion, Neuro ICU). Now day 5 post-stroke, hemorrhage stable on repeat CT. Transferred to step-down.',
  presentation: {
    hpi: 'Day 5 post right MCA stroke with PH2 hemorrhagic conversion. Hemorrhage stable on day 3 CT — no expansion. Transferred from Neuro ICU yesterday. Now: SLP evaluated — severe dysphagia, aspiration risk high. Overnight: febrile 38.6°C, new right lower lobe infiltrate on CXR, SpO2 dropped to 91%. Telemetry captured paroxysmal AF (rate 130s) lasting 47 minutes, then self-terminated. CHA₂DS₂-VASc = 5. Anticoagulation question critical — hemorrhagic conversion 5 days ago.',
    pmh: ['HTN', 'Prior PRES', 'Right MCA stroke day 0', 'PH2 hemorrhagic conversion day 0', 'No prior AF'],
    meds: ['Amlodipine 10mg daily', 'Lisinopril 20mg daily', 'Atorvastatin 40mg (started stroke day 1)'],
    allergies: ['NKDA']
  },
  vitals: {
    BP: '144/88', HR: '82 (now sinus)', RR: '20', Temp: '38.6°C', SpO2: '93% on 3L NC'
  },
  exam: {
    neuro: 'NIHSS 12 (improved from 22). Left arm — some movement against gravity. Aphasia — single words. Follows 2-step commands inconsistently.',
    resp: 'Crackles right base. Dullness to percussion RLL.',
    general: 'Thin, fatigued elderly woman. Cannot protect airway reliably — coughing with any oral intake.'
  },
  labs: {
    CBC: 'WBC 14.8 (↑), Hgb 11.2, Plt 198',
    BMP: 'Na 136, K 3.6, Cr 1.1',
    CRP: '68 mg/L',
    BNP: '310 pg/mL'
  },
  imaging: {
    cxr: 'Right lower lobe infiltrate — aspiration pneumonia. No pleural effusion.',
    ctHead: 'Day 3 CT (yesterday): Hemorrhage stable, no expansion. Mild surrounding edema.'
  },
  orders: {
    correct: [
      { id: 'abx-sv3', name: 'Aspiration pneumonia abx: Ampicillin-sulbactam IV', rationale: 'Covers oral anaerobes + enteric gram-negatives typical of aspiration' },
      { id: 'npo-sv3', name: 'NPO pending formal SLP bedside swallow eval + modified barium swallow', rationale: 'Severe dysphagia with aspiration risk — no oral intake until objectively assessed' },
      { id: 'ngt-sv3', name: 'Nasogastric tube for medications and nutrition', rationale: 'Enteral access needed while NPO — preferred over PEG at day 5' },
      { id: 'anticoag-timing-sv3', name: 'Defer anticoagulation for AF — reassess at 14 days post-hemorrhagic conversion', rationale: '2013 EHRA/AHA guidance: wait minimum 4 weeks after PH2 before starting anticoagulation. CHA₂DS₂-VASc = 5 supports eventual anticoagulation.' },
      { id: 'rate-control-sv3', name: 'Metoprolol 25mg BID for AF rate control if recurs', rationale: 'Rate control safe, does not require anticoagulation, addresses recurrent AF' },
      { id: 'rehab-sv3', name: 'Inpatient stroke rehab referral — PT/OT/SLP daily', rationale: 'Early intensive rehab improves functional outcomes post-stroke' }
    ],
    incorrect: [
      { id: 'anticoag-now-sv3', name: 'Start apixaban now — CHA₂DS₂-VASc 5, high stroke risk', rationale: 'PH2 hemorrhagic conversion 5 days ago. Starting anticoagulation this early risks hematoma expansion and rebleed. Wait minimum 4 weeks.' },
      { id: 'peg-now-sv3', name: 'Insert PEG tube today for long-term feeding access', rationale: 'Too early — significant neurological recovery expected in first 2 weeks. PEG is appropriate if dysphagia persists at 2–4 weeks.' },
      { id: 'tpa-af-sv3', name: 'Cardiovert AF — restore sinus rhythm urgently', rationale: 'AF spontaneously terminated. Cardioversion in acute post-stroke period risks thromboembolism and is not indicated for paroxysmal AF that self-terminated.' }
    ]
  }

  teachingPoints: {
    keyLearning: ['Anticoagulation after hemorrhagic stroke/hemorrhagic transformation: timing is critical. For AF-associated embolic stroke with HT: restart anticoagulation at 4-14 days (typically day 7-10 for intermediate-risk). Risk of recurrent ischemic stroke without anticoagulation > risk of hematoma expansion for most patients after day 7.','Aspiration pneumonia post-stroke: affects 30% of stroke patients with dysphagia. Management: nil-per-mouth until formal SLP swallow evaluation, consider NGT for nutrition, empirical antibiotics covering oral flora (ampicillin-sulbactam), early mobilization.','New-onset AF post-stroke: found in 10-20% of cryptogenic strokes with prolonged monitoring. CHA₂DS₂-VASc ≥ 2 in men or ≥ 3 in women: anticoagulate. Warfarin (target INR 2-3) or DOAC (DOAC preferred unless mechanical valve or significant renal impairment).'],
    boardPearls: ['Post-stroke AF and hemorrhagic transformation: the dilemma — patient needs anticoagulation for AF (stroke prevention) but just had hemorrhagic conversion. AHA/ASA guidance: defer anticoagulation 4-14 days for PH2. Use the GRASP scoring system or individualize risk-benefit.','Stroke unit care reduces mortality by 18% and dependency by 21% — independent of thrombolysis (Cochrane review). Structured rehab pathway, multidisciplinary rounds, early PT/OT/SLP, and secondary prevention protocols drive outcomes.','Centrally-acting agents post-stroke: amantadine, SSRIs (FLAME trial — fluoxetine improves motor recovery, though FOCUS/EFFECTS trials showed mixed results), avoid first-generation antihistamines and benzodiazepines (impair neuroplasticity).']
  },
};
