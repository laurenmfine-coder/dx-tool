window.CASES = window.CASES || {};
window.CASES['acute-liver-failure'] = {
  id: 'acute-liver-failure', name: 'Michael Torres', age: '41M', dob: '1984-08-11',
  mrn: 'RDX-2026-94411', setting: 'ICU → Transplant Evaluation',
  chiefComplaint: 'Jaundice + confusion + INR 4.8 — acetaminophen overdose 4 days ago (untreated)',
  diagnosis: 'Acute Liver Failure — Acetaminophen-Induced, King\'s College Criteria Met',
  category: 'gastrointestinal', acuity: 1,
  presentation: {
    hpi: '41M took approximately 15g acetaminophen in a suicide attempt 4 days ago — did not seek care initially. Now with progressive jaundice, confusion (Grade II hepatic encephalopathy — disoriented, asterixis), and severe coagulopathy. INR 5.2. Cr 3.4 (hepatorenal syndrome developing). Bilirubin 18. pH 7.28. King\'s College Criteria for acetaminophen ALF: pH <7.30 (met) → URGENT transplant listing.',
    pmh: ['Depression', 'No prior liver disease'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '88/54', HR: '118', RR: '22', Temp: '37.4°C', SpO2: '95%', GCS: '11 (HE Grade II)' },
  labs: {
    'INR': '5.2 (H — severe coagulopathy from hepatic synthetic failure)',
    'Bilirubin': '18.4 mg/dL (H)', 'AST': '8,400 (H)', 'ALT': '6,200 (H)',
    'pH': '7.28 (L — lactic acidosis from hepatic failure — King\'s Criteria met)',
    'Creatinine': '3.4 (H — hepatorenal syndrome)',
    'Ammonia': '188 mcg/dL (H — cerebral edema risk above 150-200)',
    'Acetaminophen level': '48 mcg/mL (still detectable at day 4 — significant exposure)',
    'Phosphorus': '1.4 (L — "phosphate criterion" — hyperphosphatemia is bad prognostic sign; hypophosphatemia suggests hepatic regeneration)'
  },
  orders: {
    correct: [
      { id: 'nac-alf', name: 'N-acetylcysteine (NAC) IV — continue even 4 days post-ingestion', rationale: 'NAC improves survival in ALL acetaminophen-induced ALF regardless of timing. Late NAC (>10h) is still beneficial — mechanism shifts from glutathione replenishment to anti-inflammatory and vasodilatory effects. Continue until transplant or recovery.' },
      { id: 'transplant-alf', name: 'URGENT transplant listing — King\'s College Criteria met (pH <7.30)', rationale: 'King\'s College Criteria for acetaminophen ALF: pH <7.30 (after adequate resuscitation) OR Cr >3.4 + INR >6.5 + Grade 3-4 HE (the "triad"). Any ONE of these = poor prognosis without transplant, meeting criteria for urgent listing. Activate transplant team immediately.' },
      { id: 'icp-alf', name: 'Continuous EEG + consider ICP monitoring — ammonia 188, Grade II HE progressing', rationale: 'Cerebral edema is the leading cause of death in ALF (in Grade III-IV HE). Ammonia >150-200 mcg/dL predicts cerebral edema risk. Position HOB 30°, lactulose to lower ammonia, mannitol/3% NaCl for cerebral edema.' },
      { id: 'no-ffp-alf', name: 'Do NOT give FFP to correct INR — unless actively bleeding or before invasive procedure', rationale: 'INR in ALF does NOT reflect true bleeding risk — both pro- and anticoagulant factors are decreased. Prophylactic FFP is not indicated and causes volume overload. Viscoelastic testing (TEG/ROTEM) is more accurate for bleeding risk assessment in ALF.' }
    ],
    incorrect: [
      { id: 'ffp-alf', name: 'FFP 4 units for INR 5.2 — prevent bleeding', rationale: 'FFP for prophylaxis in ALF is NOT indicated. INR in liver disease does not reflect bleeding risk (both pro- and anticoagulants are decreased). FFP causes volume overload and worsens cerebral edema without improving hemostasis.' },
      { id: 'lactulose-alone', name: 'Lactulose aggressive doses for ammonia reduction — all that\'s needed for HE', rationale: 'Lactulose is one component of HE management, but in Grade II-IV HE in ALF, cerebral edema is the main threat. Transplant must be urgently evaluated. Lactulose alone is insufficient for severe ALF.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'ALF definition: hepatic encephalopathy + INR ≥1.5 within 26 weeks in a patient without prior liver disease.',
      'King\'s College Criteria for acetaminophen ALF: pH <7.30 (after resuscitation) OR all three of Cr >3.4 + INR >6.5 + Grade 3-4 HE. Any criterion = urgent transplant listing.',
      'INR in ALF does NOT accurately reflect bleeding risk — both procoagulant and anticoagulant factors are depleted. Do not give prophylactic FFP. Use viscoelastic testing (TEG/ROTEM) if needed.',
      'NAC is beneficial in ALL acetaminophen ALF regardless of timing — continue until transplant or recovery.'
    ],
    boardPearls: [
      'Non-acetaminophen ALF King\'s College Criteria: INR >6.5 OR ≥3 of: age <10 or >40, non-A non-B hepatitis or drug reaction, jaundice >7 days before HE, INR >3.5, bilirubin >17.',
      'Causes of ALF: acetaminophen (most common USA, UK), viral hepatitis B (most common worldwide), drug-induced liver injury (DILI), Wilson disease, autoimmune hepatitis, Budd-Chiari, indeterminate.',
      'Wilson disease presenting as ALF: young patient + low alkaline phosphatase (ALP) + Kayser-Fleischer rings + hemolytic anemia + Coombs-negative. Ceruloplasmin often falsely normal in acute setting. Liver transplant is the only treatment.',
      'Liver assist devices (MARS, Prometheus): mechanical support as bridge to transplant. Evidence limited — used in select centers.'
    ]
  },
  references: [{ id: 'StatPearls-ALF', title: 'Acute Liver Failure', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK431033/', openAccess: true }]
};
