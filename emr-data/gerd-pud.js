window.CASES = window.CASES || {};
window.CASES['gerd-pud'] = {
  id: 'gerd-pud', name: 'Frank DiSantos', age: '54M', dob: '1971-03-07',
  mrn: 'RDX-2026-42218', setting: 'GI Clinic → ED',
  chiefComplaint: 'Epigastric pain + melena — on daily aspirin + ibuprofen for back pain',
  diagnosis: 'NSAID-Induced Peptic Ulcer Disease with Upper GI Bleeding',
  category: 'gastrointestinal', acuity: 2,
  presentation: {
    hpi: '54M with history of back pain, taking ibuprofen 800mg TID + aspirin 325mg daily for 3 months. Now: 4 days of epigastric pain, nausea, and today passed 3 episodes of dark tarry stool (melena). HR 108, BP 102/68 — hemodynamically compromised. No hematemesis. Hgb 8.4 (down from 12.8 3 months ago).',
    pmh: ['HTN', 'Chronic back pain — on NSAIDs', 'H. pylori — untreated × 2 years'],
    meds: ['Ibuprofen 800mg TID (STOP)', 'Aspirin 325mg daily', 'Lisinopril'],
    allergies: ['NKDA']
  },
  vitals: { BP: '102/68', HR: '108', RR: '20', Temp: '37.0°C', SpO2: '97%' },
  labs: {
    'CBC': 'Hgb 8.4 (L — acute + chronic blood loss), MCV 74 (iron deficiency)',
    'BMP': 'BUN 48 (H — BUN:Cr ratio 24:1 — elevated from blood digestion = UGIB), Cr 1.2',
    'INR': '1.1 (normal)', 'Type & Screen': 'Group B+',
    'H. pylori urea breath test (prior)': 'Positive — never treated'
  },
  orders: {
    correct: [
      { id: 'ppi-ugib', name: 'IV pantoprazole 80mg bolus, then 8mg/hr infusion — pre-endoscopy acid suppression', rationale: 'High-dose IV PPI pre-endoscopy: stabilizes clot, reduces rebleeding and need for surgical intervention. PEPTIC trial: IV PPI equivalent to intermittent PPI. Start before endoscopy (do not wait for scope results to start PPI).' },
      { id: 'scope-ugib', name: 'Upper endoscopy within 24 hours (within 12h if ongoing high-risk bleed)', rationale: 'EGD for all hemodynamically significant UGIB. Identifies bleeding source, allows therapeutic intervention (epinephrine injection + thermal coagulation + clips). Forrest classification guides rebleeding risk and management.' },
      { id: 'stop-nsaids', name: 'Stop all NSAIDs immediately — the cause of bleeding', rationale: 'NSAIDs inhibit COX-1 → reduce prostaglandins → impaired mucosal defense → peptic ulcers. Stop all NSAIDs. For pain: switch to acetaminophen (not an NSAID). If NSAIDs truly needed in future: use lowest dose + add PPI.' },
      { id: 'hp-treat', name: 'H. pylori eradication after hemostasis — triple therapy: PPI + amoxicillin + clarithromycin × 14 days', rationale: 'H. pylori + NSAIDs = synergistic ulcer risk (10× NSAID risk + 3× H. pylori risk individually, but together = exponential). Eradicate H. pylori with triple therapy × 14 days, then confirm eradication (urea breath test 4 weeks after completing antibiotics).' }
    ],
    incorrect: [
      { id: 'scope-next-day', name: 'Stable now — can wait 48h for elective endoscopy', rationale: 'Hemodynamically compromised UGIB (HR 108, BP 102/68, Hgb 8.4 with melena) = urgent EGD within 12-24h. 48h delay increases rebleeding risk and mortality for high-risk lesions.' },
      { id: 'continue-aspirin', name: 'Continue aspirin — he may need it for cardiovascular protection', rationale: 'In active UGIB from ulcer, aspirin must be stopped to allow hemostasis. If cardiovascular indication exists (prior MI, high risk): restart aspirin as soon as hemostasis is achieved (usually within 3-5 days) — stopping long-term aspirin increases cardiac risk.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'UGIB Glasgow-Blatchford Score: BUN, Hgb, SBP, HR, melena, syncope, hepatic disease — score ≥1 requires hospital management. Score 0 = low risk → can discharge with outpatient endoscopy.',
      'NSAID + H. pylori = synergistic ulcer risk. Both must be treated. NSAIDs impair mucosal defense; H. pylori weakens the epithelial barrier. Together: exponentially higher risk.',
      'Pre-endoscopy IV PPI reduces rebleeding and need for surgery — start immediately regardless of cause.',
      'Forrest classification guides rebleeding risk: Ia (spurting) = highest (90% rebleed), Ib (oozing), IIa (visible vessel) = high, IIb (clot) = intermediate, IIc (flat pigmented spot) = low, III (clean base) = <5% rebleed — discharge candidate.'
    ],
    boardPearls: [
      'Zollinger-Ellison syndrome: gastrinoma → massive acid hypersecretion → multiple, refractory, or atypical peptic ulcers (beyond duodenal bulb). Fasting gastrin >1000 pg/mL. MEN1 association.',
      'GERD complications: erosive esophagitis, Barrett esophagus (intestinal metaplasia → esophageal adenocarcinoma risk — screen with EGD). Surveillance intervals based on Barrett extent.',
      'H. pylori confirmation of eradication: urea breath test or stool antigen ≥4 weeks after completing antibiotics and ≥2 weeks after PPI. Do NOT use serology (antibodies persist years after eradication).',
      'COX-2 selective NSAIDs (celecoxib): reduced GI ulcer risk vs non-selective NSAIDs, but still require PPI in high-risk patients (prior ulcer, anticoagulation).'
    ]
  },
  references: [{ id: 'StatPearls-PUD', title: 'Peptic Ulcer Disease', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK534792/', openAccess: true }]
};
