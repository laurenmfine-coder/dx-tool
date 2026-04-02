window.CASES = window.CASES || {};
window.CASES['organophosphate'] = {
  id: 'organophosphate', name: 'Jose Martinez', age: '38M', dob: '1987-02-11',
  mrn: 'RDX-2026-77229', setting: 'ED → ICU',
  chiefComplaint: 'Agricultural worker found unresponsive in field — miosis, bronchospasm, secretions',
  diagnosis: 'Organophosphate Poisoning — Cholinergic Toxidrome',
  category: 'toxicology', acuity: 1,
  presentation: {
    hpi: '38M agricultural worker found unresponsive in field. Coworkers found pesticide spray equipment nearby. EMS: pinpoint pupils (miosis), excessive salivation, lacrimation, urination (wet clothing), bradycardia 42, bronchospasm, vomiting, diaphoresis. SLUDGE positive. GCS 7.',
    pmh: ['Unknown'], meds: ['Unknown'], allergies: ['Unknown']
  },
  vitals: { BP: '88/58', HR: '42', RR: '6 (agonal)', Temp: '37.2°C', SpO2: '72%' },
  labs: {
    'Cholinesterase levels': 'RBC acetylcholinesterase: <10% of normal | Plasma pseudocholinesterase: <5% of normal — CONFIRM organophosphate poisoning',
    'ABG': 'pH 7.18, PaCO2 68, PaO2 42 — severe respiratory failure',
    'ECG': 'Bradycardia 42 bpm, QTc prolonged 520ms'
  },
  orders: {
    correct: [
      { id: 'atropine-op', name: 'Atropine 2-4mg IV bolus, repeat every 5-10 min — titrate to DRY secretions NOT to heart rate', rationale: 'Atropine blocks muscarinic receptors — reverses SLUDGE (salivation, lacrimation, urination, defecation, GI distress, emesis) AND bronchospasm AND bradycardia. The ENDPOINT is dry secretions and clear lung fields — NOT a target heart rate. May need 10-100mg in severe poisoning. Never under-dose.' },
      { id: 'pralidoxime-op', name: 'Pralidoxime (2-PAM) 1-2g IV over 15-30 min, then infusion — WITHIN 24-48h before enzyme aging', rationale: 'Pralidoxime reactivates acetylcholinesterase by removing the organophosphate before enzyme "aging" (irreversible phosphorylation). Effective within 24-48h. After aging: pralidoxime is useless (enzyme is permanently inhibited). Give early, give fast.' },
      { id: 'intubation-op', name: 'RSI intubation — severe respiratory failure, GCS 7', rationale: 'Avoid succinylcholine — organophosphates inhibit plasma pseudocholinesterase, which metabolizes succinylcholine → prolonged paralysis (hours instead of minutes). Use rocuronium for RSI in organophosphate poisoning.' },
      { id: 'decon-op', name: 'Remove and bag all clothing — secondary contamination risk to healthcare workers', rationale: 'Organophosphates absorb through skin. Remove ALL contaminated clothing and wash skin before touching patient without PPE. Healthcare workers can be poisoned by contact.' }
    ],
    incorrect: [
      { id: 'succinylcholine-op', name: 'Succinylcholine for RSI — standard protocol', rationale: 'CONTRAINDICATED — pseudocholinesterase (which metabolizes succinylcholine) is inhibited by organophosphates. Succinylcholine causes prolonged neuromuscular blockade lasting hours instead of minutes. Use rocuronium.' },
      { id: 'atropine-hr', name: 'Titrate atropine to HR >60 — stop when bradycardia resolved', rationale: 'WRONG endpoint — atropine endpoint is DRY SECRETIONS and clear lung fields, NOT heart rate normalization. Under-dosing atropine based on heart rate results in continued bronchospasm and respiratory failure. Tachycardia from atropine is expected and acceptable.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Cholinergic toxidrome: SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis) + DUMBELS + miosis + bradycardia + bronchospasm. KILLER EFFECTS: bronchospasm + increased secretions = asphyxiation.',
      'Atropine endpoint = DRY SECRETIONS — not heart rate. Under-dosing based on heart rate is the most common fatal error in organophosphate management. May need >100mg in severe cases.',
      'Pralidoxime must be given EARLY — enzyme aging (irreversible AChE phosphorylation) occurs within 24-48h. After aging, pralidoxime provides no benefit.',
      'Succinylcholine is CONTRAINDICATED in organophosphate poisoning — use rocuronium for RSI.'
    ],
    boardPearls: [
      'Carbamate poisoning: similar to organophosphate but does NOT cause enzyme aging — pralidoxime NOT needed. Atropine remains first-line.',
      'Nerve agents (sarin, VX): same mechanism as organophosphates. Military/terrorism scenario. Same treatment: atropine + pralidoxime. Auto-injectors (MARK 1 kit).',
      'GI decontamination: activated charcoal within 1-2h only if protected airway and patient can protect own airway. Not first priority — airway and antidotes first.',
      'Intermediate syndrome: 24-96h after acute cholinergic crisis resolves — proximal limb weakness + respiratory failure from NMJ dysfunction. Can be fatal if unrecognized.'
    ]
  },
  references: [{ id: 'StatPearls-OP', title: 'Organophosphate Toxicity', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470430/', openAccess: true }]
};
