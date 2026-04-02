window.CASES = window.CASES || {};
window.CASES['substance-use'] = {
  id: 'substance-use', name: 'Devon Harris', age: '32M', dob: '1993-04-19',
  mrn: 'RDX-2026-51228', setting: 'ED — BRIDGE to MAT',
  chiefComplaint: 'Opioid overdose reversed with naloxone — now in withdrawal, requesting treatment',
  diagnosis: 'Opioid Use Disorder — Presenting for Buprenorphine Induction in ED',
  category: 'psychiatric', acuity: 2,
  presentation: {
    hpi: '32M found unresponsive, given naloxone × 2 doses by EMS (fentanyl overdose). Now alert, in acute opioid withdrawal (COWS score 16 — moderate withdrawal). He says "I want help — I\'m tired of living like this." He has tried cold-turkey twice, failed. Has no PCP. This is his moment of readiness. COWS score 16: qualifying for buprenorphine induction (threshold ≥8). Last use: fentanyl approximately 4 hours ago.',
    pmh: ['OUD — heroin then fentanyl × 5 years', '2 prior overdoses', 'Hepatitis C (untreated)'],
    meds: ['None currently'], allergies: ['NKDA']
  },
  vitals: { BP: '148/94', HR: '112', RR: '20', Temp: '37.8°C', SpO2: '97%' },
  labs: {
    'UDS': 'Fentanyl positive | Negative cocaine, meth, benzos, ethanol',
    'COWS score': '16 (moderate withdrawal — yawning, piloerection, diaphoresis, tachycardia, GI distress, restlessness)',
    'HCV antibody': 'Positive (from prior testing)', 'HIV': 'Negative (2 months ago)',
    'Urine β-hCG': 'N/A (male patient)'
  },
  orders: {
    correct: [
      { id: 'buprenorphine-ed', name: 'Buprenorphine 4mg SL — ED-initiated buprenorphine (COWS ≥8, minimum 12-24h since last full opioid)', rationale: 'ED-initiated buprenorphine (the "ED Bridge" model): give first dose in ED, bridge to outpatient MAT. The D\'Onofrio trial showed ED-initiated buprenorphine doubles 30-day treatment engagement vs referral alone. COWS ≥8 + adequate time since last use = safe to initiate (reduces precipitated withdrawal risk).' },
      { id: 'bridge-rx', name: 'Buprenorphine/naloxone 8/2mg SL TID bridge prescription — 7-day supply', rationale: 'Give 7-day bridge prescription with direct appointment scheduled at opioid treatment program. Bridge prescriptions from EDs (now legally permitted in most US states) maintain engagement during the "treatment gap."' },
      { id: 'naloxone-kit', name: 'Naloxone 4mg nasal spray × 2 + training — harm reduction', rationale: 'Naloxone kit for patient AND someone in their household. Fentanyl overdose may require multiple doses. Provide training on recognition and administration.' },
      { id: 'hcv-referral', name: 'HCV treatment referral — Hep C is now curable with 8-12 weeks of DAA therapy', rationale: 'HCV is curable in >95% of patients with direct-acting antivirals (DAAs) — sofosbuvir/velpatasvir or glecaprevir/pibrentasvir. Active OUD is no longer a contraindication to HCV treatment. People who inject drugs should be prioritized for HCV treatment.' }
    ],
    incorrect: [
      { id: 'cold-turkey-oud', name: 'Encourage detox and abstinence — no need for medications', rationale: 'Abstinence-based treatment for OUD without MAT (medication-assisted treatment) has 80-90% relapse rates. Buprenorphine and methadone reduce mortality by 50% and improve all outcomes. Cold-turkey detox alone is ineffective and dangerous in fentanyl-era OUD.' },
      { id: 'methadone-ed', name: 'Start methadone in the ED for OUD', rationale: 'Methadone for OUD must be dispensed from federally licensed OTPs (opioid treatment programs) — cannot be prescribed for OUD by an ED. Exception: methadone for pain is different. Direct the patient to a methadone clinic with same-day or next-day intake.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'ED-initiated buprenorphine: COWS ≥8 (moderate withdrawal) + adequate time since last full opioid (12-24h) → safe to start in ED. The D\'Onofrio trial showed 2× engagement in treatment vs referral alone.',
      'Buprenorphine is a partial mu-opioid agonist + kappa antagonist. It blocks other opioids from binding (high receptor affinity) and has a ceiling effect on respiratory depression. Very safe at therapeutic doses.',
      'Precipitated withdrawal: buprenorphine displaces full opioids from receptors before the patient is in withdrawal → sudden severe withdrawal. Prevent by confirming COWS ≥8 and adequate time since last full agonist use.',
      'OUD medications: buprenorphine (office-based, accessible), methadone (highly effective, OTP only), naltrexone (requires full detox first, blocks opioids — no physical dependence).'
    ],
    boardPearls: [
      'Fentanyl complicates traditional buprenorphine induction: fentanyl\'s lipophilicity and long tissue half-life means patients may not achieve COWS ≥8 for 24-48h despite feeling subjective withdrawal. Low-dose buprenorphine induction (microdosing/Bernese method) allows starting without full withdrawal.',
      'DATA 2000 waiver (X-waiver) to prescribe buprenorphine for OUD: eliminated by SUPPORT for Patients and Communities Reauthorization Act (2023). Any DEA-registered provider can now prescribe.',
      'Naltrexone for OUD: must be fully detoxed first (7-10 days for heroin, 10-14 days for methadone). Extended-release IM naltrexone (Vivitrol 380mg monthly) avoids adherence issues. Lower efficacy than buprenorphine in RCTs (due to initiation difficulty, not pharmacology).',
      'Fentanyl test strips: harm reduction tool — detects fentanyl contamination in other drugs. Legal in most US states. Evidence shows they change behavior and reduce overdose risk.'
    ]
  },
  references: [{ id: 'StatPearls-OUD', title: 'Opioid Use Disorder', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK553166/', openAccess: true }]
};
