// Virtual EMR Case: Unstable Angina — Negative Initial Troponin, High-Risk Features
// Variant: unstable-angina-v2 | Acuity: ESI-2
// Phase 1 Cardiology Expansion — ReasonDx Content Expansion Plan
// Teaching Focus: ACS workup with negative initial troponin, serial enzymes, risk stratification (TIMI/HEART score)

window.EMR_DATA = {
  "patient": {
    "name": "Howard Bernstein",
    "dob": "05/18/1955",
    "age": 70,
    "sex": "Male",
    "mrn": "RDX-2026-44817",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B + AARP Supplement Plan G",
    "pcp": "Dr. Lynn Nakamura, MD",
    "pharmacy": "CVS Pharmacy — 8900 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "race": "White (Ashkenazi Jewish)",
    "address": "9201 Taft St, Pembroke Pines, FL 33024",
    "phone": "(954) 555-6602",
    "email": "h.bernstein55@email.com",
    "emergencyContact": {
      "name": "Barbara Bernstein (Wife)",
      "phone": "(954) 555-6611"
    }
  },
  "problems": [
    {
      "problem": "Coronary Artery Disease — 2-vessel",
      "icd": "I25.10",
      "onset": "2019",
      "status": "Active",
      "notes": "Stress test 2019 — reversible perfusion defect inferolateral wall; cath deferred; on medical management; last stress 2023 — no new ischemia at that time; on aspirin, statin, BB"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "Well-controlled on metoprolol succinate + amlodipine"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2012",
      "status": "Active",
      "notes": "On metformin + sitagliptin; A1c 7.1 (01/2026)"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2005",
      "status": "Active",
      "notes": "On rosuvastatin 40mg; LDL 58 on 01/2026 labs"
    },
    {
      "problem": "Prior PCI — LCX (2019)",
      "icd": "Z95.5",
      "onset": "2019",
      "status": "Historical",
      "notes": "Drug-eluting stent to proximal LCX 2019; on dual antiplatelet therapy for 12 months, completed; now aspirin monotherapy"
    }
  ],
  "medications": [
    { "name": "Aspirin 81mg daily", "sig": "Take 1 tablet by mouth daily", "prescriber": "Dr. Nakamura", "start": "2019", "refills": 5, "status": "Active" },
    { "name": "Metoprolol Succinate (XL) 50mg daily", "sig": "Take 1 tablet by mouth daily", "prescriber": "Dr. Nakamura", "start": "2019", "refills": 3, "status": "Active" },
    { "name": "Rosuvastatin 40mg QHS", "sig": "Take 1 tablet by mouth at bedtime", "prescriber": "Dr. Nakamura", "start": "2020", "refills": 2, "status": "Active" },
    { "name": "Amlodipine 5mg daily", "sig": "Take 1 tablet by mouth daily", "prescriber": "Dr. Nakamura", "start": "2010", "refills": 3, "status": "Active" },
    { "name": "Metformin 1000mg BID", "sig": "Take 1 tablet by mouth twice daily with meals", "prescriber": "Dr. Nakamura", "start": "2013", "refills": 2, "status": "Active" },
    { "name": "Sitagliptin (Januvia) 100mg daily", "sig": "Take 1 tablet by mouth daily", "prescriber": "Dr. Nakamura", "start": "2020", "refills": 2, "status": "Active" },
    { "name": "Nitroglycerin SL 0.4mg PRN", "sig": "Place 1 tablet under tongue for chest pain; repeat q5 min x3; call 911 if no relief", "prescriber": "Dr. Nakamura", "start": "2019", "refills": 1, "status": "Active" }
  ],
  "allergies": [
    { "allergen": "Clopidogrel (Plavix)", "type": "Drug", "reaction": "Reported GI intolerance (severe nausea)", "severity": "Moderate", "verified": "No — patient report only" }
  ],
  "vitals": [
    {
      "date": "03/04/2026",
      "time": "07:18",
      "bp": "158/92",
      "hr": 86,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97% on room air",
      "wt": "198 lbs",
      "ht": "5'9\"",
      "bmi": 29.3,
      "setting": "ED Triage"
    },
    {
      "date": "01/15/2026",
      "bp": "134/82",
      "hr": 64,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "195 lbs",
      "ht": "5'9\"",
      "bmi": 28.8,
      "setting": "PCP Office"
    }
  ],
  "notes": [
    {
      "date": "03/04/2026",
      "time": "07:40",
      "type": "Emergency Department Note",
      "author": "Dr. Serena Vance, MD (Emergency Medicine)",
      "status": "Attending — Signed",
      "content": {
        "cc": "\"Chest pressure that keeps coming and going — worse this morning\" — 70-year-old male with known CAD",
        "hpi": "Howard Bernstein is a 70-year-old male with known 2-vessel CAD (prior LCX stent 2019), hypertension, T2DM, and hyperlipidemia who presents with recurrent chest pressure over the past 48 hours. He describes the pressure as substernal, 5-7/10, radiating to the left shoulder, associated with mild diaphoresis during peak episodes. He notes the episodes have been increasing in frequency and are now occurring at rest — this is a change from his prior angina which was only exertional. This morning, he had a 20-minute episode at rest that awakened him from sleep and did not fully resolve with 1 sublingual nitroglycerin. He took a second SL nitro 10 minutes later with partial relief. He denies syncope. His wife called EMS and he was brought to the ED. He has not had symptoms of this pattern since 2019 at the time of his catheterization. Last stress test 2023 was reassuring.",
        "ros": {
          "constitutional": "Diaphoresis with episodes. Mild fatigue.",
          "cardiovascular": "Substernal chest pressure with L shoulder radiation. Rest pain. Increasing frequency. Partial nitro response. No palpitations.",
          "respiratory": "No dyspnea, no orthopnea, no PND.",
          "gi": "No nausea or vomiting.",
          "other": "All other systems reviewed and negative."
        },
        "physicalExam": {
          "general": "Alert, oriented x3. Mildly anxious. Well-appearing male. No acute distress currently (symptoms resolved prior to exam).",
          "vitals": "BP 158/92 | HR 86, regular | RR 16 | SpO2 97% RA | Temp 98.4\u00b0F",
          "heent": "Normocephalic. No JVD.",
          "cardiovascular": "Regular rate and rhythm. S1, S2 normal. No S3 or S4. No murmurs. No friction rub.",
          "respiratory": "Clear to auscultation bilaterally.",
          "abdomen": "Soft, non-tender.",
          "extremities": "No edema. 2+ pulses. No calf tenderness.",
          "neuro": "No focal deficits."
        },
        "mdm": "70-year-old male with known CAD presenting with new rest angina with increasing frequency over 48 hours — a classic unstable angina presentation. Initial ECG shows no ST elevation or depression. Initial high-sensitivity troponin is negative. However, negative initial troponin does NOT rule out NSTEMI — serial troponins at 0 and 3 hours required per hs-cTn protocol. HEART score: H=2 (highly suspicious history), E=1 (prior MI/PCI), A=2 (age 70), R=1 (3+ risk factors), T=0 (initial troponin <normal limit) = HEART score 6 — HIGH RISK → cardiology consult, admit for observation, serial troponins, early invasive strategy recommended. TIMI score: 5/7 (age ≥65, known CAD, aspirin use in last 7 days, ≥2 anginal episodes in 24h, ST deviation pending — if present, 6/7). Initiating ACS protocol.",
        "plan": [
          "Continuous cardiac monitoring",
          "Repeat ECG now and Q30 min for first 2 hours — watch for dynamic changes",
          "Serial high-sensitivity troponin: time 0 (resulted) → time 3 hours → time 6 hours if intermediate",
          "Aspirin 325mg PO x1 (loading dose — patient is on 81mg daily)",
          "IV nitroglycerin if recurrent chest pain — start 5 mcg/min, titrate for symptom control",
          "Heparin anticoagulation: UFH 60 units/kg bolus (max 4000 units) + 12 units/kg/hr infusion — ACS protocol",
          "Consider ticagrelor vs prasugrel loading (DAPT) — cardiology to determine timing based on cath plan; note reported clopidogrel intolerance",
          "NPO after midnight in anticipation of potential cardiac catheterization",
          "Cardiology consult — HEART score 6, high-risk features, rest angina in patient with known CAD",
          "Admit to telemetry — early invasive strategy recommended given high-risk presentation"
        ]
      }
    }
  ],
  "labs": [
    {
      "date": "03/04/2026",
      "time": "07:30",
      "orderedBy": "Dr. Serena Vance, MD",
      "panels": [
        {
          "name": "CARDIAC BIOMARKERS — INITIAL",
          "results": [
            { "test": "Troponin I (high-sensitivity) — T0", "value": "0.012", "unit": "ng/mL", "range": "<0.04", "flag": "" },
            { "test": "BNP", "value": "145", "unit": "pg/mL", "range": "<100", "flag": "H" }
          ]
        },
        {
          "name": "CARDIAC BIOMARKERS — 3 HOUR",
          "results": [
            { "test": "Troponin I (high-sensitivity) — T3", "value": "0.038", "unit": "ng/mL", "range": "<0.04", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Sodium", "value": "139", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.1", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Chloride", "value": "102", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "BUN", "value": "21", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.2", "unit": "mg/dL", "range": "0.7-1.2", "flag": "" },
            { "test": "eGFR", "value": "58", "unit": "mL/min/1.73m\u00b2", "range": ">60 normal", "flag": "L" },
            { "test": "Glucose", "value": "128", "unit": "mg/dL", "range": "70-100", "flag": "H" }
          ]
        },
        {
          "name": "CBC",
          "results": [
            { "test": "WBC", "value": "7.8", "unit": "x10\u00b3/\u00b5L", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.6", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "40.4", "unit": "%", "range": "41-53", "flag": "L" },
            { "test": "Platelet Count", "value": "231", "unit": "x10\u00b3/\u00b5L", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            { "test": "PT", "value": "12.0", "unit": "sec", "range": "11-13.5", "flag": "" },
            { "test": "INR", "value": "1.0", "unit": "", "range": "<1.1", "flag": "" },
            { "test": "aPTT", "value": "28", "unit": "sec", "range": "25-35", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/04/2026",
      "study": "ECG 12-LEAD — INITIAL",
      "accession": "ECG-2026-03046",
      "status": "FINAL",
      "orderedBy": "Dr. Serena Vance, MD",
      "readBy": "Dr. David Cho, MD (Cardiology — Consult)",
      "facility": "ReasonDx Medical Center",
      "priority": "STAT",
      "clinical": "70M with known CAD, rest angina, increasing frequency. R/O STEMI, dynamic ischemic changes.",
      "findings": "Rhythm: Normal sinus rhythm. Rate: 86 bpm.\n\nConduction: PR interval 168 ms. QRS 92 ms (normal). QTc 436 ms.\n\nAxis: Normal.\n\nST segments: No ST elevation. Subtle 0.5 mm horizontal ST depression in leads V4-V6 — borderline; repeat ECG recommended with symptoms.\n\nT waves: T-wave flattening in inferior leads (II, III, aVF).\n\nComparison: Prior ECG from 01/2026 PCP visit — new ST depression in V4-V6 compared to prior (prior ECG showed no ST or T-wave changes in lateral leads).",
      "impression": "1. Normal sinus rhythm.\n2. New subtle ST depression in lateral leads V4-V6 compared to prior ECG — dynamic ischemic change in the setting of chest pain. Concerning for lateral wall ischemia.\n3. Recommend repeat ECG with recurrent symptoms.",
      "dictated": "03/04/2026 07:52",
      "verified": "03/04/2026 08:05"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Quadrivalent)", "date": "09/2025", "site": "Left deltoid IM", "lot": "FL2025-512", "mfr": "Sanofi Pasteur" },
    { "vaccine": "COVID-19 (2025 updated)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV2025-318", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (2/2)", "date": "04/2024", "site": "Left deltoid IM", "lot": "SX24-041", "mfr": "GSK" },
    { "vaccine": "Pneumococcal PCV20", "date": "2022", "site": "Left deltoid IM", "lot": "\u2014", "mfr": "Pfizer" }
  ],
  "familyHistory": [
    "Father: MI at age 58 (deceased at 64)",
    "Mother: Hypertension, hyperlipidemia, deceased at 82",
    "Brother: CABG at age 62"
  ],
  "socialHistory": [
    ["Occupation", "Semi-retired accountant — part-time consulting"],
    ["Marital", "Married, 3 adult children"],
    ["Tobacco", "Former smoker — quit 1995 (15 pack-year history)"],
    ["Alcohol", "1 glass of wine with dinner nightly"],
    ["Drugs", "Denies"],
    ["Exercise", "Golf 2x/week; previously walked daily — reduced due to knee pain"],
    ["Housing", "Lives with wife in Pembroke Pines, FL"],
    ["Advance Directive", "Healthcare surrogate — wife; living will on file at PCP office"]
  ],
  "meta": {
    "caseId": "unstable-angina-v2",
    "diagnosis": "Unstable Angina (High-Risk ACS — Rest Angina with Dynamic ECG Changes, Negative Initial Troponin)",
    "acuity": 2,
    "presentation": "Chest Pain",
    "category": "cardiovascular",
    "setting": "ED",
    "teachingPoints": [
      "Unstable angina definition: ACS presentation with chest pain at rest, new-onset exertional angina, or crescendo angina pattern — but WITHOUT troponin elevation. It exists on the ACS spectrum between stable angina and NSTEMI.",
      "Serial troponin is mandatory: A single negative troponin does NOT rule out NSTEMI. High-sensitivity troponin protocols require measurement at 0 and 3 hours (some protocols add 1-hour draw). Rising or falling troponin pattern is diagnostic of myocardial injury. This patient's T3 troponin is 0.038 — still below the 0.04 cutoff but rising, warranting further monitoring.",
      "HEART Score risk stratification: History (2) + ECG (1 for non-specific repolarization) + Age (2 for ≥65) + Risk factors (1 for 3+ risk factors or diabetes) + Troponin (0 for initial normal) = 6 = HIGH RISK. HEART score ≥4 warrants early invasive strategy.",
      "Dynamic ECG changes matter: Even subtle new ST depression compared to prior ECG in a symptomatic patient is a high-risk feature. In this case, new lateral ST depression (V4-V6) in someone with known CAD and rest pain significantly elevates concern.",
      "Anticoagulation in ACS: UFH or enoxaparin is initiated for anticoagulation in ACS management, independent of whether STEMI or NSTEMI/UA is ultimately confirmed. Timing and agent depend on planned invasive vs conservative strategy.",
      "DAPT timing: Dual antiplatelet therapy (aspirin + P2Y12 inhibitor) is indicated in ACS. In patients with planned cath, many cardiologists prefer to load P2Y12 (ticagrelor or prasugrel) after coronary anatomy is known — especially if CABG anatomy is possible. Clopidogrel intolerance history should be documented and verified.",
      "References: ACC/AHA 2021 ACS/UA-NSTEMI Guidelines; HEART Score (Six et al., 2012, European Heart Journal); StatPearls — Unstable Angina (NCBI Bookshelf)"
    ],
    "differentialDiagnosis": [
      { "diagnosis": "Unstable angina / NSTEMI (ACS)", "probability": "High", "mustNotMiss": true, "notes": "MUST NOT MISS — rest angina with dynamic lateral ST changes in patient with known 2-vessel CAD; HEART score 6 = high risk" },
      { "diagnosis": "In-stent restenosis (LCX stent from 2019)", "probability": "Moderate-High", "mustNotMiss": false, "notes": "Lateral ST changes in distribution of prior LCX stent — restenosis or stent thrombosis are important considerations for catheterization" },
      { "diagnosis": "Stable angina exacerbation", "probability": "Low", "mustNotMiss": false, "notes": "Does not account for rest pain, increasing frequency, partial nitro response, or new dynamic ECG changes" },
      { "diagnosis": "GERD / esophageal spasm", "probability": "Low", "mustNotMiss": false, "notes": "Known CAD, dynamic ECG changes, and high HEART score make non-cardiac cause unlikely; must rule out ACS first" },
      { "diagnosis": "Aortic dissection", "probability": "Low", "mustNotMiss": true, "notes": "MUST NOT MISS — this patient's pain is pressure-like with radiation to shoulder (typical of ACS); no tearing/ripping quality; symmetric arm BPs; risk is low but must be considered before anticoagulation" }
    ]
  }
};
