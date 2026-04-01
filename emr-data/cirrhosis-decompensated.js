/* emr-data/cirrhosis-decompensated.js
   Decompensated Cirrhosis — Acute SBP + Hepatic Encephalopathy
   Category: gastrointestinal | Acuity: ESI-2 | Setting: ED → Medicine/Hepatology
*/
window.CASES = window.CASES || {};
window.CASES['cirrhosis-decompensated'] = {
  id: 'cirrhosis-decompensated',
  name: 'Raymond Castillo',
  age: '57M',
  dob: '1968-02-28',
  mrn: 'RDX-2026-55291',
  setting: 'ED → Inpatient Medicine / Hepatology',
  chiefComplaint: 'Confusion, abdominal pain and distension, jaundice — known cirrhosis',
  diagnosis: 'Decompensated Cirrhosis: Spontaneous Bacterial Peritonitis + Hepatic Encephalopathy',
  category: 'gastrointestinal',
  acuity: 2,
  presentation: {
    hpi: 'Raymond Castillo, 57M with alcohol-related cirrhosis (Child-Pugh C, MELD 22), brought by his daughter. She reports 3 days of increasing confusion — he cannot manage his finances and got lost driving yesterday. He has worsening abdominal distension and new abdominal pain. His last therapeutic paracentesis was 3 weeks ago. He appears jaundiced with encephalopathy (disoriented to time/place, asterixis). He has had 2 prior episodes of variceal bleeding and is on nadolol for primary prophylaxis. Temperature 38.3°C. No obvious source of infection identified.',
    pmh: ['Alcohol-related cirrhosis — Child-Pugh C, MELD 22', 'Prior variceal bleeding ×2', 'Refractory ascites requiring large-volume paracentesis q3 weeks', 'Thrombocytopenia (splenic sequestration)', 'Prior hepatic encephalopathy — on lactulose/rifaximin'],
    meds: ['Lactulose 30mL TID', 'Rifaximin 550mg BID', 'Nadolol 40mg daily', 'Spironolactone 100mg', 'Furosemide 40mg'],
    allergies: ['Penicillin — anaphylaxis']
  },
  vitals: { BP: '92/58', HR: '108', RR: '20', Temp: '38.3°C', SpO2: '96%', GCS: '13 (E3V4M6)' },
  exam: {
    general: 'Jaundiced, confused, lethargic male with massive ascites',
    abdomen: 'Distended, fluid wave positive, diffuse mild tenderness — no guarding/rigidity, but ANY tenderness in cirrhosis with ascites = tap immediately',
    neuro: 'Disoriented ×2, asterixis present bilaterally (Grade II hepatic encephalopathy), no focal deficits',
    skin: 'Jaundice, spider angiomata, palmar erythema, caput medusae, gynecomastia'
  },
  labs: {
    'CMP': 'Na 128 (L), K 3.4, Cr 1.8 (up from baseline 1.1), BUN 44, Total bili 7.2 (H), AST 88, ALT 42, Albumin 2.1 (L)',
    'CBC': 'WBC 14.8 (H), Hgb 9.4 (L — chronic), Plt 62 (L — chronic)',
    'Coagulation': 'INR 2.8 (H — impaired synthetic function)',
    'ASCITIC FLUID (diagnostic paracentesis)': 'PMN count 480 cells/µL (>250 = SBP diagnosis) | Total protein 1.2 g/dL | Albumin 0.4 g/dL | SAAG = serum albumin 2.1 − ascitic albumin 0.4 = 1.7 (>1.1 = portal hypertension) | Culture: pending',
    'Urinalysis': 'No infection — ruling out hepatorenal vs prerenal'
  },
  orders: {
    correct: [
      { id: 'ceftriax-sbp', name: 'Ceftriaxone 2g IV q24h × 5 days (penicillin allergy — use cefotaxime or cipro if PCN allergy is anaphylaxis)', rationale: 'SBP is diagnosed by PMN >250 cells/µL in ascitic fluid. Empiric treatment must NOT wait for culture results. Cefotaxime/ceftriaxone are first-line. For true PCN anaphylaxis: ciprofloxacin 400mg IV q12h is an alternative.' },
      { id: 'albumin-sbp', name: 'Albumin 1.5 g/kg IV on day 1, then 1 g/kg on day 3', rationale: 'CRITICAL — albumin infusion with SBP treatment reduces hepatorenal syndrome risk from 30% to 10% (NEJM 1999, Sort et al.). This is NOT optional. Do not skip albumin in SBP.' },
      { id: 'lactulose-he', name: 'Lactulose titrated to 3-4 soft stools/day', rationale: 'First-line for hepatic encephalopathy. Traps ammonia in gut as NH4+. Target is bowel movements, not a specific dose.' },
      { id: 'rifaximin-he', name: 'Rifaximin 550mg BID (already on — continue)', rationale: 'Reduces recurrent HE. Combination with lactulose is more effective than lactulose alone (NEJM 2010).' },
      { id: 'hold-diuretics', name: 'HOLD spironolactone and furosemide — AKI present', rationale: 'Cr risen from 1.1 to 1.8 — suspected hepatorenal syndrome. Diuretics worsen HRS. Hold immediately.' },
      { id: 'hepatology-consult', name: 'Hepatology consult + transplant evaluation', rationale: 'MELD 22 — patient qualifies for transplant evaluation. Every decompensation worsens prognosis and MELD score. Transplant referral should not be delayed.' }
    ],
    incorrect: [
      { id: 'no-albumin', name: 'Antibiotics alone — albumin not necessary', rationale: 'WRONG — albumin with SBP treatment reduces HRS from 30% to 10%. The Sort trial (NEJM 1999) is definitive. Albumin is standard of care and should never be omitted.' },
      { id: 'ffp-sbp', name: 'FFP for INR 2.8 before paracentesis', rationale: 'FFP is NOT indicated before diagnostic paracentesis in cirrhosis. The INR in liver disease does not reflect true bleeding risk (thrombopoietin deficiency, altered balance of pro/anti-coagulants). Guidelines recommend against routine FFP before paracentesis.' },
      { id: 'continue-diuretics', name: 'Continue diuretics — patient has ascites', rationale: 'Continuing diuretics in the setting of AKI and rising creatinine worsens hepatorenal syndrome. Hold all diuretics until renal function stabilizes.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'SBP diagnosis: ascitic fluid PMN >250 cells/µL. Treatment must NOT wait for culture. Any decompensation in cirrhosis (confusion, fever, abdominal pain) requires diagnostic paracentesis — always tap first.',
      'Albumin infusion with SBP antibiotics is mandatory (Sort et al. NEJM 1999). It reduces hepatorenal syndrome from 30% to 10%. Without albumin, you are undertreating SBP.',
      'Hepatic encephalopathy grade: I (subtle cognitive change) → II (asterixis, disorientation) → III (somnolent, arousable) → IV (coma). Grading guides intensity of monitoring.',
      'MELD score predicts 90-day mortality. MELD ≥15 = transplant evaluation. Every hospitalization for decompensation should prompt transplant referral assessment.',
      'INR in cirrhosis does NOT reflect true bleeding risk — FFP before paracentesis is not indicated by current guidelines.'
    ],
    boardPearls: [
      'SAAG >1.1 = portal hypertension. SAAG <1.1 = non-portal etiology (malignancy, TB, pancreatitis).',
      'SBP prophylaxis after first episode: norfloxacin or TMP-SMX indefinitely. Also indicated for ascitic protein <1.5 g/dL + MELD >18 or renal dysfunction.',
      'Hepatorenal syndrome (HRS) criteria: Cr >1.5 in cirrhosis, no improvement after 48h diuretic withdrawal + 1.5 L albumin expansion, no shock, no nephrotoxins, no parenchymal renal disease.',
      'HRS treatment: terlipressin (approved 2022 FDA) + albumin. Norepinephrine + albumin is an alternative if terlipressin unavailable.'
    ]
  },
  references: [
    { id: 'StatPearls-SBP', title: 'Spontaneous Bacterial Peritonitis', authors: 'Goel A, Rahim U, Nguyen LH et al.', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK470235/', openAccess: true }
  ]
};
