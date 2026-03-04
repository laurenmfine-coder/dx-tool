// Virtual EMR Case: Acute Decompensated Heart Failure — New Diagnosis (HFrEF)
// Variant: adhf-new-diagnosis | Acuity: ESI-2
// Phase 1 Cardiology Expansion — ReasonDx Content Expansion Plan
// Teaching Focus: Initial diuresis strategy, BNP trending, echo findings, and admission criteria
// NOTE: Distinguished from chf-exacerbation.js (known HFrEF with diuretic resistance)
// and chf-exacerbation-v2.js (known HFrEF variant). This case is a NEW HFrEF diagnosis.

window.EMR_DATA = {
  "patient": {
    "name": "Miriam Calderon",
    "dob": "07/29/1954",
    "age": 71,
    "sex": "Female",
    "mrn": "RDX-2026-61490",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + UnitedHealthcare Supplement",
    "pcp": "Dr. Ana Ferreira, MD",
    "pharmacy": "Publix Pharmacy — 9870 Stirling Rd, Cooper City, FL",
    "language": "English",
    "race": "Hispanic/Latina (Colombian American)",
    "address": "4512 S Flamingo Rd, Cooper City, FL 33330",
    "phone": "(954) 555-2241",
    "email": "m.calderon54@email.com",
    "emergencyContact": {
      "name": "Luis Calderon (Husband)",
      "phone": "(954) 555-2248"
    }
  },
  "problems": [
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2002",
      "status": "Active",
      "notes": "On amlodipine 10mg + lisinopril 20mg; BP generally 130-140s/80s at office visits; adequate control"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2010",
      "status": "Active",
      "notes": "On metformin + empagliflozin (Jardiance); A1c 7.3 on 12/2025 — well-controlled; note empagliflozin has HF benefit"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2008",
      "status": "Active",
      "notes": "On atorvastatin 40mg; LDL 74 on 12/2025 labs"
    },
    {
      "problem": "Obesity, Class I",
      "icd": "E66.09",
      "onset": "Long-standing",
      "status": "Active",
      "notes": "BMI 32"
    }
  ],
  "medications": [
    { "name": "Amlodipine 10mg daily", "sig": "Take 1 tablet by mouth daily", "prescriber": "Dr. Ferreira", "start": "2015", "refills": 3, "status": "Active" },
    { "name": "Lisinopril 20mg daily", "sig": "Take 1 tablet by mouth daily", "prescriber": "Dr. Ferreira", "start": "2010", "refills": 2, "status": "Active" },
    { "name": "Metformin 1000mg BID", "sig": "Take 1 tablet by mouth twice daily with meals", "prescriber": "Dr. Ferreira", "start": "2011", "refills": 2, "status": "Active" },
    { "name": "Empagliflozin (Jardiance) 10mg daily", "sig": "Take 1 tablet by mouth daily in the morning", "prescriber": "Dr. Ferreira", "start": "2022", "refills": 2, "status": "Active" },
    { "name": "Atorvastatin 40mg QHS", "sig": "Take 1 tablet by mouth at bedtime", "prescriber": "Dr. Ferreira", "start": "2009", "refills": 3, "status": "Active" }
  ],
  "allergies": [
    { "allergen": "NKDA", "type": "", "reaction": "No known drug allergies", "severity": "", "verified": "Yes" }
  ],
  "vitals": [
    {
      "date": "03/04/2026",
      "time": "16:05",
      "bp": "168/104",
      "hr": 98,
      "rr": 24,
      "temp": "98.6\u00b0F",
      "spo2": "91% on room air",
      "wt": "192 lbs",
      "ht": "5'5\"",
      "bmi": 31.9,
      "setting": "ED Triage"
    },
    {
      "date": "02/18/2026",
      "bp": "138/84",
      "hr": 74,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "178 lbs",
      "ht": "5'5\"",
      "bmi": 29.6,
      "setting": "PCP Office — routine visit"
    }
  ],
  "notes": [
    {
      "date": "03/04/2026",
      "time": "16:30",
      "type": "Emergency Department Note",
      "author": "Dr. Angela Diaz, MD (Emergency Medicine)",
      "status": "Attending — Signed",
      "content": {
        "cc": "\"I can barely breathe lying down and my legs are huge\" — 71-year-old female, progressive over 3 weeks",
        "hpi": "Miriam Calderon is a 71-year-old female with hypertension, T2DM, hyperlipidemia, and obesity who presents with a 3-week history of progressive dyspnea on exertion, orthopnea (now sleeping in a recliner), and bilateral lower extremity edema. She reports a 14-pound weight gain over the past 3 weeks. She notes paroxysmal nocturnal dyspnea (awakening at night gasping for air, 2-3 episodes over the past week). She was initially attributing her symptoms to 'getting older' but her husband noticed she was 'breathing hard just walking to the kitchen' and insisted she come in. She has no prior history of heart failure, coronary artery disease, or arrhythmia. No recent illness, no fever, no productive cough. She is on empagliflozin (Jardiance) for DM — which she has been taking consistently.",
        "ros": {
          "constitutional": "14-lb weight gain over 3 weeks. Fatigue. No fever.",
          "cardiovascular": "Bilateral LE edema. No chest pain. No palpitations. No syncope.",
          "respiratory": "Exertional dyspnea, orthopnea, PND. No pleuritic chest pain. No hemoptysis.",
          "gi": "Decreased appetite. Mild nausea. No vomiting, no diarrhea.",
          "renal": "Decreased urine output noted over the past week.",
          "other": "All other systems reviewed and negative."
        },
        "physicalExam": {
          "general": "Alert, oriented x3. Moderate respiratory distress. Sitting upright on gurney, leaning forward. Speaks in short sentences.",
          "vitals": "BP 168/104 | HR 98 | RR 24 | SpO2 91% RA | Temp 98.6\u00b0F",
          "heent": "Elevated JVP — estimated at 14 cm H2O. No thyromegaly.",
          "cardiovascular": "Regular rate and rhythm. Tachycardic. S3 gallop present. No murmurs. PMI displaced laterally to anterior axillary line.",
          "respiratory": "Bilateral crackles — bases to mid-lung bilaterally. Dullness to percussion at both bases. No wheezing.",
          "abdomen": "Mildly distended. Hepatomegaly — liver edge palpable 3 cm below costal margin. Positive hepatojugular reflux.",
          "extremities": "3+ pitting edema bilateral lower extremities to mid-thigh. No calf tenderness.",
          "skin": "No cyanosis. No jaundice."
        },
        "mdm": "71-year-old female presenting with classic congestive heart failure syndrome: 3-week progressive dyspnea, orthopnea, PND, 14-lb weight gain, bilateral pitting edema to mid-thigh, elevated JVP, S3 gallop, displaced PMI, bibasilar crackles, and hepatomegaly with hepatojugular reflux. This appears to be a NEW diagnosis of heart failure — no prior cardiac history. SpO2 91% RA requires supplemental oxygen immediately. BNP markedly elevated. CXR shows cardiomegaly and pulmonary edema. Initiating diuresis with IV furosemide. Cardiology consult for urgent echocardiogram to determine etiology (HFrEF vs HFpEF) and EF. Note: empagliflozin is beneficial in both HFrEF and HFpEF — continue unless cardiogenic shock develops. Admission required — SpO2, volume overload severity, and new diagnosis all mandate inpatient workup.",
        "plan": [
          "Supplemental oxygen — high-flow NC or non-rebreather to maintain SpO2 ≥94%; consider CPAP/BiPAP if no improvement",
          "Continuous cardiac monitoring and pulse oximetry",
          "IV access x2",
          "IV furosemide 80mg IV push x1 (oral furosemide naive → start with IV; target UO 1-2 mL/kg/hr)",
          "Daily weights — strict I&O",
          "Sodium restriction counseling",
          "BNP, BMP, CBC, LFTs, TSH, troponin, lipid panel ordered",
          "12-lead ECG — obtained (see results)",
          "CXR — obtained (see results)",
          "Cardiology consult: urgent inpatient echocardiogram to determine HFrEF vs HFpEF, etiology",
          "Hold empagliflozin until hemodynamics confirmed stable (hold if EF severely reduced and cardiogenic shock risk)",
          "Hold amlodipine — negative inotropic effect; cardiologist to reassess antihypertensive regimen",
          "Titrate lisinopril after volume status optimized — ACE inhibitor is foundational in HFrEF",
          "Admit to telemetry — cardiology service"
        ]
      }
    },
    {
      "date": "02/18/2026",
      "type": "Office Visit — Primary Care",
      "author": "Dr. Ana Ferreira, MD",
      "status": "Signed",
      "content": {
        "cc": "Routine follow-up — DM, HTN, hyperlipidemia",
        "hpi": "Patient doing well. A1c 7.3 — improved from prior year. BP 138/84 — controlled. LDL 74. Weight 178 lbs (stable). No dyspnea or edema at this visit. Empagliflozin continued for DM and cardiovascular risk reduction. All labs reviewed. RTC 6 months or PRN.",
        "plan": [
          "Continue current medications",
          "Reinforce dietary sodium restriction",
          "RTC 6 months"
        ]
      }
    }
  ],
  "labs": [
    {
      "date": "03/04/2026",
      "time": "16:20",
      "orderedBy": "Dr. Angela Diaz, MD",
      "panels": [
        {
          "name": "CARDIAC BIOMARKERS",
          "results": [
            { "test": "BNP", "value": "1840", "unit": "pg/mL", "range": "<100", "flag": "H" },
            { "test": "Troponin I (high-sensitivity)", "value": "0.028", "unit": "ng/mL", "range": "<0.04", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Sodium", "value": "136", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.6", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Chloride", "value": "100", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "24", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "BUN", "value": "38", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.6", "unit": "mg/dL", "range": "0.5-1.1", "flag": "H" },
            { "test": "eGFR", "value": "36", "unit": "mL/min/1.73m\u00b2", "range": ">60 normal", "flag": "L" },
            { "test": "Glucose", "value": "142", "unit": "mg/dL", "range": "70-100", "flag": "H" }
          ]
        },
        {
          "name": "CBC",
          "results": [
            { "test": "WBC", "value": "8.6", "unit": "x10\u00b3/\u00b5L", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "12.2", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "36.4", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "204", "unit": "x10\u00b3/\u00b5L", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIVER FUNCTION",
          "results": [
            { "test": "ALT (SGPT)", "value": "48", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "52", "unit": "U/L", "range": "10-40", "flag": "H" },
            { "test": "Total Bilirubin", "value": "1.4", "unit": "mg/dL", "range": "0.2-1.2", "flag": "H" },
            { "test": "Albumin", "value": "3.4", "unit": "g/dL", "range": "3.5-5.0", "flag": "L" }
          ]
        },
        {
          "name": "THYROID",
          "results": [
            { "test": "TSH", "value": "2.8", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/04/2026",
      "study": "CHEST XR — PORTABLE AP",
      "accession": "IMG-2026-03047",
      "status": "FINAL",
      "orderedBy": "Dr. Angela Diaz, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "71F, progressive dyspnea x3 weeks, bilateral LE edema, SpO2 91% RA. R/O pulmonary edema, pneumonia.",
      "findings": "Heart: Markedly enlarged cardiac silhouette. CT ratio approximately 0.60.\n\nLungs: Bilateral interstitial and alveolar opacities predominantly in perihilar and lower lobe distribution — consistent with pulmonary edema. Bilateral small pleural effusions. Kerley B lines present in both lower zones. Vascular redistribution with cephalization.\n\nMediastinum: No widening. No pneumomediastinum.",
      "impression": "1. Marked cardiomegaly.\n2. Bilateral pulmonary edema with bilateral pleural effusions. Cephalization of pulmonary vessels and Kerley B lines.\n3. No pneumothorax. No consolidation to suggest superimposed infection.",
      "dictated": "03/04/2026 16:48",
      "verified": "03/04/2026 17:02"
    },
    {
      "date": "03/04/2026",
      "study": "ECG 12-LEAD",
      "accession": "ECG-2026-03048",
      "status": "FINAL",
      "orderedBy": "Dr. Angela Diaz, MD",
      "readBy": "Dr. Marcus Webb, MD (Cardiology — Consult)",
      "facility": "ReasonDx Medical Center",
      "priority": "STAT",
      "clinical": "New HF presentation, SpO2 91%, tachycardic. R/O ischemia, arrhythmia.",
      "findings": "Rhythm: Normal sinus rhythm. Rate: 98 bpm.\n\nConduction: PR 162 ms. QRS 94 ms. QTc 448 ms.\n\nAxis: Left axis deviation.\n\nVoltage: Low voltage in limb leads.\n\nST-T: Non-specific T-wave flattening in lateral leads (I, aVL, V5-V6). No ST elevation. No ischemic ST depression.\n\nNo prior ECG available for comparison.",
      "impression": "1. Sinus tachycardia.\n2. Low limb lead voltage — consistent with pericardial effusion or cardiomyopathy in this clinical context.\n3. Non-specific lateral T-wave changes. No ischemic ST changes.",
      "dictated": "03/04/2026 16:55",
      "verified": "03/04/2026 17:08"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Quadrivalent)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL2025-441", "mfr": "Sanofi Pasteur" },
    { "vaccine": "COVID-19 (2025 Updated)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV2025-228", "mfr": "Pfizer" },
    { "vaccine": "Pneumococcal PCV20", "date": "2022", "site": "Left deltoid IM", "lot": "\u2014", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (2/2)", "date": "2023", "site": "Left deltoid IM", "lot": "SX23-607", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Father: Heart failure, deceased at 72",
    "Mother: HTN, T2DM, deceased at 80",
    "Brother: Coronary artery disease — CABG at age 65"
  ],
  "socialHistory": [
    ["Occupation", "Retired administrative assistant"],
    ["Marital", "Married, 2 adult children"],
    ["Tobacco", "Former smoker — quit 2001 (20 pack-year history)"],
    ["Alcohol", "Denies"],
    ["Sodium", "High-sodium diet noted — reports adding salt at table; processes/canned foods"],
    ["Exercise", "Very limited — reports dyspnea with minimal exertion for several weeks"],
    ["Housing", "Lives with husband in Cooper City, FL"],
    ["Advance Directive", "None — discussed; will revisit after stabilization"]
  ],
  "meta": {
    "caseId": "adhf-new-diagnosis",
    "diagnosis": "Acute Decompensated Heart Failure — New Diagnosis (Suspected HFrEF, EF Pending Echo)",
    "acuity": 2,
    "presentation": "Shortness of Breath",
    "category": "cardiovascular",
    "setting": "ED",
    "teachingPoints": [
      "Recognizing new HF: The classic presentation — orthopnea, PND, bilateral pitting edema, elevated JVP, S3 gallop, displaced PMI, and 14-lb rapid weight gain — is diagnostic of decompensated heart failure. Key physical exam signs include S3 gallop (low-pitched, early diastolic extra heart sound = volume overload), elevated JVP, and hepatojugular reflux.",
      "BNP interpretation: BNP >500 pg/mL strongly supports HF as the cause of dyspnea. BNP trending downward with diuresis is a therapeutic endpoint marker. BNP can be falsely lower in obese patients and falsely elevated in renal failure.",
      "Initial diuresis strategy: IV furosemide is preferred over oral in acute decompensation — bioavailability is impaired in gut edema. Starting dose: 2.5x the patient's daily oral dose, or 40-80mg IV bolus if loop diuretic naive. Target urine output of 0.5-1 mL/kg/hr. Reassess response in 2 hours.",
      "HFrEF vs HFpEF: Echocardiogram is essential. HFrEF (EF <40%) is treated with ACE inhibitors/ARBs/sacubitril-valsartan, beta-blockers, aldosterone antagonists, and SGLT2 inhibitors (the 'four pillars'). HFpEF (EF ≥50%) treatment focuses on decongestion, BP control, and comorbidity management; SGLT2 inhibitors now have mortality benefit in HFpEF.",
      "SGLT2 inhibitors in HF: Empagliflozin (Jardiance) has demonstrated mortality reduction in both HFrEF (EMPEROR-Reduced) and HFpEF (EMPEROR-Preserved) trials. Continue unless cardiogenic shock. Note that SGLT2 inhibitors are now considered a 'fourth pillar' of HFrEF therapy.",
      "Admission criteria for acute HF: SpO2 <94% on RA, significant dyspnea at rest, new diagnosis requiring workup (echo, etiology), severe volume overload, new arrhythmia, or hemodynamic instability all warrant admission. This patient meets multiple criteria.",
      "References: 2022 AHA/ACC/HFSA Heart Failure Guideline (JACC 2022); EMPEROR-Reduced trial (NEJM 2020); StatPearls — Congestive Heart Failure (NCBI Bookshelf)"
    ],
    "differentialDiagnosis": [
      { "diagnosis": "Acute decompensated heart failure — new diagnosis", "probability": "High", "mustNotMiss": false, "notes": "Classic presentation with orthopnea, PND, bilateral pitting edema to mid-thigh, S3 gallop, elevated JVP, BNP 1840, cardiomegaly on CXR, and pulmonary edema" },
      { "diagnosis": "Cardiac tamponade", "probability": "Low-Moderate", "mustNotMiss": true, "notes": "MUST NOT MISS — low voltage on ECG could indicate pericardial effusion; echo will definitively evaluate; no pulsus paradoxus noted on exam" },
      { "diagnosis": "Pulmonary hypertension with right heart failure", "probability": "Low-Moderate", "mustNotMiss": false, "notes": "Can present similarly; echo will differentiate; RV dilation and TR velocity will help assess" },
      { "diagnosis": "Severe pneumonia / ARDS", "probability": "Low", "mustNotMiss": false, "notes": "CXR shows cardiomegaly and Kerley B lines — pattern more consistent with HF than infection; no fever, no productive cough" },
      { "diagnosis": "Nephrotic syndrome with secondary volume overload", "probability": "Low", "mustNotMiss": false, "notes": "Bilateral edema and dyspnea possible with nephrotic syndrome; but S3, elevated JVP, cardiomegaly, and BNP 1840 strongly point to cardiac etiology" }
    ]
  }
};
