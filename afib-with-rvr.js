// Virtual EMR Case: Atrial Fibrillation with Rapid Ventricular Response
// Variant: afib-with-rvr | Acuity: ESI-2
// Phase 1 Cardiology Expansion — ReasonDx Content Expansion Plan

window.EMR_DATA = {
  "patient": {
    "name": "Raymond Okafor",
    "dob": "03/14/1968",
    "age": 57,
    "sex": "Male",
    "mrn": "RDX-2026-38142",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Patricia Huang, MD",
    "pharmacy": "Walgreens — 4200 Hollywood Blvd, Hollywood, FL",
    "language": "English",
    "race": "Black (Nigerian American)",
    "address": "312 NW 43rd Ave, Lauderhill, FL 33319",
    "phone": "(954) 555-7823",
    "email": "r.okafor68@email.com",
    "emergencyContact": {
      "name": "Amaka Okafor (Wife)",
      "phone": "(954) 555-7831"
    }
  },
  "problems": [
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": "On amlodipine; BP generally well-controlled at PCP visits (avg 130s/80s); adherent"
    },
    {
      "problem": "Obstructive Sleep Apnea",
      "icd": "G47.33",
      "onset": "2019",
      "status": "Active",
      "notes": "On CPAP; reports poor compliance over the last 2 months due to work travel"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2018",
      "status": "Active",
      "notes": "On rosuvastatin; LDL 88 on last labs (01/2025)"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Huang",
      "start": "03/2015",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Rosuvastatin 20mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Huang",
      "start": "06/2018",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Huang",
      "start": "2018",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "03/04/2026",
      "time": "14:22",
      "bp": "148/94",
      "hr": 138,
      "rr": 22,
      "temp": "98.8\u00b0F",
      "spo2": "95% on room air",
      "wt": "214 lbs",
      "ht": "5'11\"",
      "bmi": 29.9,
      "setting": "ED Triage"
    },
    {
      "date": "01/08/2026",
      "bp": "128/82",
      "hr": 74,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "98%",
      "wt": "211 lbs",
      "ht": "5'11\"",
      "bmi": 29.5,
      "setting": "PCP Office"
    }
  ],
  "notes": [
    {
      "date": "03/04/2026",
      "time": "14:45",
      "type": "Emergency Department Note",
      "author": "Dr. Serena Vance, MD (Emergency Medicine)",
      "status": "Attending — Signed",
      "content": {
        "cc": "\"My heart is racing and I can't catch my breath\" — 57-year-old male, onset approximately 6 hours ago",
        "hpi": "Raymond Okafor is a 57-year-old male with a history of hypertension, OSA (poorly compliant with CPAP), and hyperlipidemia who presents with palpitations and dyspnea of approximately 6 hours duration. He reports the onset was sudden while at his desk at work. He describes the sensation as his heart 'fluttering and racing' in an irregular pattern. Associated symptoms include mild chest tightness (non-exertional, non-radiating, 3/10) and lightheadedness with standing. He denies syncope, frank chest pain, diaphoresis, or near-syncope. He consumed 4–5 cups of coffee this morning and had a large glass of wine last night at a work dinner — denies habitual heavy alcohol use. He has no prior cardiac history and no prior episodes of palpitations. He took his amlodipine this morning.",
        "ros": {
          "constitutional": "Fatigue, mild lightheadedness. No fever, chills, or weight loss.",
          "cardiovascular": "Palpitations, irregular heartbeat sensation, mild chest tightness. No syncope, no prior similar episodes, no orthopnea or PND.",
          "respiratory": "Mild dyspnea at rest. No pleuritic chest pain, cough, or hemoptysis.",
          "gi": "No nausea, vomiting, or diarrhea.",
          "neuro": "Lightheadedness. No focal weakness, diplopia, or facial droop.",
          "other": "All other systems reviewed and negative."
        },
        "physicalExam": {
          "general": "Alert, oriented x3. Mild distress related to palpitations. Well-nourished male appearing stated age.",
          "vitals": "BP 148/94 | HR 138, irregularly irregular | RR 22 | SpO2 95% RA | Temp 98.8\u00b0F",
          "heent": "PERRL. Oropharynx clear. No JVD appreciated in sitting position (reassessed lying: mild JVD to angle of jaw).",
          "cardiovascular": "Irregularly irregular rhythm. Tachycardic. No murmurs, rubs, or gallops appreciated at this rate. Peripheral pulses 2+ bilaterally.",
          "respiratory": "Mild accessory muscle use. Lungs with faint bibasilar crackles. No wheezing.",
          "abdomen": "Soft, non-tender, non-distended. No hepatosplenomegaly.",
          "extremities": "No clubbing. Trace bilateral ankle edema.",
          "neuro": "Cranial nerves II-XII intact. No focal deficits. Gait deferred."
        },
        "mdm": "57-year-old male presenting with new-onset irregularly irregular tachycardia at 138 bpm with associated dyspnea, mild chest tightness, and SpO2 95%. ECG obtained immediately on arrival — see results. Most likely new-onset atrial fibrillation with RVR given clinical picture. Differential includes atrial flutter with variable block, multifocal atrial tachycardia, and less likely SVT. Urgent rate control is the priority. Hemodynamically stable — no hypotension, no signs of cardiogenic shock or acute decompensation requiring cardioversion at this time. Initiating cardiac monitoring, IV access x2, labs, and rate control strategy per below.",
        "plan": [
          "Continuous cardiac monitoring and pulse oximetry",
          "IV access x2 established",
          "12-lead ECG — obtained (see results)",
          "Rate control: metoprolol tartrate 5mg IV x1, may repeat q5 min x2 PRN (target HR <110); avoid calcium channel blockers until EF known",
          "Labs: BMP, CBC, TSH, troponin, BNP, coagulation panel, urine pregnancy test (negative)",
          "Portable chest X-ray ordered",
          "Anticoagulation: CHA2DS2-VASc score = 2 (male, HTN, age 57) → anticoagulation indicated; heparin bolus + infusion initiated pending cardiology input",
          "Cardiology consult placed",
          "Hold aspirin (interaction with anticoagulation)",
          "NPO in case cardioversion becomes necessary",
          "Continuous reassessment of hemodynamic status — cardioversion if deterioration"
        ]
      }
    },
    {
      "date": "01/08/2026",
      "type": "Office Visit — Primary Care",
      "author": "Dr. Patricia Huang, MD",
      "status": "Signed",
      "content": {
        "cc": "Routine follow-up, HTN and hyperlipidemia management",
        "hpi": "Annual wellness visit. BP well controlled on amlodipine. Patient reports poor CPAP compliance due to travel. No new complaints. LDL 88 on recent labs. Counseled on CPAP adherence and cardiovascular risk.",
        "plan": [
          "Continue amlodipine 10mg daily",
          "Continue rosuvastatin 20mg QHS",
          "Reinforce CPAP compliance — refer back to sleep clinic if needed",
          "Annual labs ordered",
          "RTC 12 months or PRN"
        ]
      }
    }
  ],
  "labs": [
    {
      "date": "03/04/2026",
      "time": "14:55",
      "orderedBy": "Dr. Serena Vance, MD",
      "panels": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "3.5", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Chloride", "value": "101", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "23", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "BUN", "value": "18", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.2", "flag": "" },
            { "test": "eGFR", "value": ">60", "unit": "mL/min/1.73m\u00b2", "range": ">60 normal", "flag": "" },
            { "test": "Glucose", "value": "104", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "Magnesium", "value": "1.8", "unit": "mg/dL", "range": "1.7-2.2", "flag": "" }
          ]
        },
        {
          "name": "CBC",
          "results": [
            { "test": "WBC", "value": "8.2", "unit": "x10\u00b3/\u00b5L", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "14.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "44.1", "unit": "%", "range": "41-53", "flag": "" },
            { "test": "Platelet Count", "value": "244", "unit": "x10\u00b3/\u00b5L", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "CARDIAC BIOMARKERS",
          "results": [
            { "test": "Troponin I (high-sensitivity)", "value": "0.018", "unit": "ng/mL", "range": "<0.04", "flag": "" },
            { "test": "BNP", "value": "310", "unit": "pg/mL", "range": "<100", "flag": "H" }
          ]
        },
        {
          "name": "THYROID",
          "results": [
            { "test": "TSH", "value": "1.4", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            { "test": "PT", "value": "11.8", "unit": "sec", "range": "11-13.5", "flag": "" },
            { "test": "INR", "value": "1.0", "unit": "", "range": "<1.1", "flag": "" }
          ]
        }
      ]
    },
    {
      "date": "01/08/2026",
      "orderedBy": "Dr. Patricia Huang, MD",
      "panels": [
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "172", "unit": "mg/dL", "range": "<200", "flag": "" },
            { "test": "LDL Cholesterol", "value": "88", "unit": "mg/dL", "range": "<100 (high risk)", "flag": "" },
            { "test": "HDL Cholesterol", "value": "48", "unit": "mg/dL", "range": ">40 (male)", "flag": "" },
            { "test": "Triglycerides", "value": "180", "unit": "mg/dL", "range": "<150", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/04/2026",
      "study": "ECG 12-LEAD",
      "accession": "ECG-2026-03041",
      "status": "FINAL",
      "orderedBy": "Dr. Serena Vance, MD",
      "readBy": "Dr. Marcus Webb, MD (Cardiology — Consult)",
      "facility": "ReasonDx Medical Center",
      "priority": "STAT",
      "clinical": "Palpitations, tachycardia, dyspnea. R/O atrial fibrillation.",
      "findings": "Rhythm: Irregularly irregular. No discernible P waves. Fibrillatory baseline. Rate: Ventricular rate 138 bpm.\n\nConduction: QRS 88 ms (narrow). PR interval: not measurable. QTc 402 ms.\n\nAxes: Normal axis. No bundle branch block.\n\nST-T changes: No ST elevation or depression. No T-wave inversions suggestive of ischemia.\n\nComparison: No prior ECG on file.",
      "impression": "1. Atrial fibrillation with rapid ventricular response at 138 bpm.\n2. No ischemic changes identified.\n3. No delta waves or preexcitation pattern.",
      "dictated": "03/04/2026 15:10",
      "verified": "03/04/2026 15:22"
    },
    {
      "date": "03/04/2026",
      "study": "CHEST XR — PORTABLE AP",
      "accession": "IMG-2026-03042",
      "status": "FINAL",
      "orderedBy": "Dr. Serena Vance, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "New-onset atrial fibrillation with RVR. Dyspnea. Evaluate for pulmonary edema, cardiothoracic ratio.",
      "findings": "Heart: Mildly enlarged cardiac silhouette. CT ratio approximately 0.54.\n\nLungs: Mild vascular redistribution to upper lobes. Faint perihilar haze. No frank pulmonary edema. No consolidation. No pleural effusion identified on this AP view.\n\nMediastinum: No widening.",
      "impression": "1. Mild cardiomegaly. Mild pulmonary vascular congestion without overt pulmonary edema.\n2. No acute consolidation.",
      "dictated": "03/04/2026 15:18",
      "verified": "03/04/2026 15:40"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Quadrivalent)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL2025-441", "mfr": "Sanofi Pasteur" },
    { "vaccine": "COVID-19 (Updated 2025)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV2025-228", "mfr": "Pfizer" },
    { "vaccine": "Tdap (Boostrix)", "date": "2021", "site": "Left deltoid IM", "lot": "\u2014", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Father: Atrial fibrillation diagnosed age 62; stroke at age 66 (deceased at 70)",
    "Mother: Hypertension; alive at 80",
    "Brother: OSA; no cardiac history"
  ],
  "socialHistory": [
    ["Occupation", "Regional Sales Manager — frequent business travel"],
    ["Marital", "Married, 2 adult children"],
    ["Tobacco", "Former smoker — quit 2012 (5 pack-year history)"],
    ["Alcohol", "Social — reports 3–4 drinks/week; 4–5 drinks at work dinners occasionally"],
    ["Caffeine", "4–6 cups coffee daily"],
    ["Drugs", "Denies"],
    ["Exercise", "Walks 20–30 min 2–3x/week"],
    ["Housing", "Lives with wife in Lauderhill, FL"],
    ["Advance Directive", "None — discussed"]
  ],
  "meta": {
    "caseId": "afib-with-rvr",
    "diagnosis": "Atrial Fibrillation with Rapid Ventricular Response (New Onset)",
    "acuity": 2,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular",
    "setting": "ED",
    "teachingPoints": [
      "Rate vs rhythm control decision: For new-onset AFib with RVR in hemodynamically stable patients, rate control is the initial goal (target HR <110 at rest). Rhythm control is reasonable for new onset <48 hours but requires anticoagulation planning.",
      "CHA2DS2-VASc scoring: This patient scores 2 (HTN=1, age 57=0, male sex=0... wait — recalculate: HTN=1, age 65-74=0, prior stroke/TIA=0, vascular disease=0, diabetes=0, female sex=0) = 1 point for HTN. However, ACC/AHA 2023 guidelines recommend anticoagulation at score ≥2 for men and ≥3 for women. Score of 1 in men: anticoagulation may be considered. Discuss shared decision-making.",
      "Rate control agents: IV metoprolol or diltiazem are first-line for rate control. Avoid diltiazem/verapamil if reduced EF suspected (echo not yet done). Digoxin is slower onset but useful as adjunct.",
      "Anticoagulation timing: If duration <48 hours and cardioversion planned, DOAC or heparin bridge acceptable. If duration unknown or ≥48 hours, transesophageal echocardiogram (TEE) to rule out left atrial thrombus before cardioversion, OR 3 weeks of anticoagulation first.",
      "Triggers to identify: Alcohol (holiday heart), caffeine excess, OSA non-compliance, hyperthyroidism (TSH normal here), and electrolyte abnormalities (Mg, K) are all relevant in this case.",
      "References: ACC/AHA/ACCP/HRS 2023 AF Guideline (JACC 2024); StatPearls — Atrial Fibrillation (NCBI Bookshelf)"
    ],
    "differentialDiagnosis": [
      { "diagnosis": "Atrial fibrillation with RVR", "probability": "High", "mustNotMiss": false, "notes": "Irregularly irregular rhythm, absent P waves, fibrillatory baseline on ECG — classic presentation" },
      { "diagnosis": "Atrial flutter with variable block", "probability": "Moderate", "mustNotMiss": false, "notes": "Can appear irregular with variable AV conduction; sawtooth flutter waves would be visible at 300 bpm atrial rate — not seen here" },
      { "diagnosis": "Multifocal atrial tachycardia (MAT)", "probability": "Low", "mustNotMiss": false, "notes": "Irregular rhythm but with 3+ distinct P-wave morphologies — not consistent with this ECG" },
      { "diagnosis": "SVT with aberrant conduction", "probability": "Low", "mustNotMiss": false, "notes": "Usually regular; narrow complex here makes it less likely" },
      { "diagnosis": "WPW with pre-excited AFib", "probability": "Low", "mustNotMiss": true, "notes": "MUST NOT MISS — if delta waves or wide complex irregular tachycardia present, avoid AV nodal blocking agents; this ECG shows narrow QRS without preexcitation" }
    ]
  }
};
