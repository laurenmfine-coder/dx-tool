/* CASE: aaa-v2 — Ruptured AAA — Permissive Hypotension + OR Decision */
window.CASES = window.CASES || {};
window.CASES['aaa-v2'] = {
  id: 'aaa-v2', name: 'Robert Fitzgerald', age: '72M', dob: '1954-03-11',
  mrn: 'RDX-2026-99231', setting: 'ED → OR', category: 'vascular', acuity: 1,
  chiefComplaint: 'Sudden severe tearing abdominal/back pain + hypotension — known 5.8cm AAA',
  diagnosis: 'Ruptured Abdominal Aortic Aneurysm',
  presentation: {
    hpi: 'Robert Fitzgerald, 72M, known 5.8cm AAA on surveillance (was scheduled for repair next month). Sudden onset severe tearing periumbilical and back pain. BP 78/40 in triage. Pulsatile epigastric mass palpable. The triad is complete: (1) hypotension, (2) pulsatile abdominal mass, (3) severe abdominal/back pain = ruptured AAA until proven otherwise. Bedside US: aneurysm visible, free fluid in abdomen.',
    pmh: ['5.8cm AAA — known, repair scheduled', 'HTN', 'COPD', '40 pack-year smoking history'],
    meds: ['Metoprolol', 'Lisinopril', 'Aspirin'], allergies: ['NKDA']
  },
  vitals: { BP: '78/40', HR: '124', RR: '24', Temp: '37.0°C', SpO2: '94%' },
  labs: {
    'Bedside ECHO/FAST': 'Aneurysm visualized. Free intraperitoneal fluid. No pericardial effusion.',
    'Type and crossmatch': 'O-negative blood ordered — do NOT wait for crossmatch',
    'Point-of-care labs': 'Hgb 8.2 (L — hemorrhage), Lactate 6.8 (H — shock), INR 1.4'
  },
  orders: {
    correct: [
      { id: 'or-stat', name: 'IMMEDIATE vascular surgery activation + transport to OR — do not delay for CT', rationale: 'Ruptured AAA with hypotension: time to OR is the only intervention that saves life. Do NOT delay for CT scan. The diagnosis is clinical (triad + bedside US). CT is only for stable patients with uncertain diagnosis. Every minute in the ED = mortality.' },
      { id: 'permissive-htn', name: 'Permissive hypotension — target SBP 70-90 mmHg, do NOT aggressively resuscitate', rationale: 'Aggressive fluid resuscitation in ruptured AAA raises BP, disrupts the retroperitoneal tamponade clot, worsens hemorrhage and coagulopathy. Target SBP 70-90 (enough for organ perfusion, low enough to not pop the clot). This is one of the most important and counterintuitive concepts in vascular emergencies.' },
      { id: 'mtp-aaa', name: 'Activate massive transfusion protocol — 1:1:1 (pRBC:FFP:platelets)', rationale: 'Hemorrhagic shock from ruptured AAA: give blood, not crystalloid. MTP 1:1:1 prevents dilutional coagulopathy. Minimize crystalloid — use only as bridge until blood products available.' },
      { id: 'txa-aaa', name: 'Tranexamic acid 1g IV — within 3 hours of hemorrhage onset', rationale: 'TXA reduces mortality from hemorrhage (CRASH-2 trial). Give with MTP. First dose within 3 hours — no benefit if given >3h after onset.' }
    ],
    incorrect: [
      { id: 'ct-first', name: 'CT angiogram to confirm rupture and plan EVAR anatomy', rationale: 'Only for hemodynamically STABLE patients with uncertain diagnosis. BP 78/40 with the clinical triad = ruptured AAA. Taking an unstable patient to CT scanner = death in the scanner. Go to OR.' },
      { id: 'aggressive-fluids', name: '2L NS bolus — BP 78/40, patient is in shock', rationale: 'Aggressive crystalloid resuscitation worsens outcomes in ruptured AAA: dilutes clotting factors (dilutional coagulopathy), raises BP and disrupts retroperitoneal tamponade, increases hemorrhage. Permissive hypotension + blood products is the correct strategy.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Ruptured AAA clinical triad: sudden severe abdominal/back pain + pulsatile abdominal mass + hypotension. If all three present → OR immediately. Do not wait for CT.',
      'Permissive hypotension (SBP 70-90) in ruptured AAA: preserves retroperitoneal tamponade, reduces coagulopathy from aggressive crystalloid. The clot is what is keeping the patient alive — do not wash it away.',
      'Bedside US can confirm aneurysm presence (not necessarily rupture). Free fluid + aneurysm = rupture until proven otherwise in the right clinical context.',
      'AAA repair thresholds: ≥5.5cm men, ≥5.0cm women, or growth >0.5cm/6 months → elective repair (EVAR or open). This patient\'s 5.8cm was at repair threshold — the window for elective repair was missed.'
    ],
    boardPearls: [
      'EVAR (endovascular aneurysm repair) vs open: EVAR has lower 30-day mortality, but similar 2-year mortality. Open repair is more durable long-term. Choice depends on anatomy and patient fitness.',
      'Screening: one-time US for all men 65-75 who have ever smoked. Women: no routine screening recommendation.',
      'Risk factors: smoking (strongest), male sex, age >65, family history, HTN, atherosclerosis.',
      'Inflammatory AAA: rare variant — perianeurysmal fibrosis, retroperitoneal fibrosis, weight loss, elevated ESR. Managed medically (steroids) before repair.'
    ]
  },
  references: [{ id: 'StatPearls-AAA', title: 'Abdominal Aortic Aneurysm', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470237/', openAccess: true }]
};
