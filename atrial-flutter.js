// Virtual EMR Case: New-Onset Atrial Flutter
// Variant: atrial-flutter | Acuity: ESI-2
// Phase 1 Cardiology Expansion — ReasonDx Content Expansion Plan

window.EMR_DATA = {
  "patient": {
    "name": "Constance Merritt",
    "dob": "09/22/1961",
    "age": 64,
    "sex": "Female",
    "mrn": "RDX-2026-55293",
    "pronouns": "She/Her",
    "insurance": "Humana Gold Plus (Medicare Advantage)",
    "pcp": "Dr. Kevin Osei, MD",
    "pharmacy": "CVS Pharmacy — 2100 N University Dr, Coral Springs, FL",
    "language": "English",
    "race": "White",
    "address": "1848 Coral Ridge Dr, Coral Springs, FL 33071",
    "phone": "(954) 555-3314",
    "email": "c.merritt61@email.com",
    "emergencyContact": {
      "name": "Dale Merritt (Husband)",
      "phone": "(954) 555-3320"
    }
  },
  "problems": [
    {
      "problem": "Chronic Obstructive Pulmonary Disease (GOLD II)",
      "icd": "J44.1",
      "onset": "2020",
      "status": "Active",
      "notes": "On tiotropium + albuterol PRN; last PFTs 2024 — FEV1 62%; no recent exacerbations; still smokes occasionally"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2014",
      "status": "Active",
      "notes": "On lisinopril; BP avg 135/82 at recent visits"
    },
    {
      "problem": "Hypothyroidism",
      "icd": "E03.9",
      "onset": "2017",
      "status": "Active",
      "notes": "On levothyroxine 75 mcg daily; TSH 2.1 on 12/2025 labs — within normal limits"
    }
  ],
  "medications": [
    {
      "name": "Tiotropium (Spiriva) 18 mcg inhaled daily",
      "sig": "Inhale 1 capsule via HandiHaler once daily",
      "prescriber": "Dr. Osei",
      "start": "2020",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Albuterol 90 mcg MDI PRN",
      "sig": "2 puffs inhaled every 4-6 hours as needed for shortness of breath",
      "prescriber": "Dr. Osei",
      "start": "2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Osei",
      "start": "2014",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Levothyroxine 75 mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach",
      "prescriber": "Dr. Osei",
      "start": "2017",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "type": "Drug",
      "reaction": "Bronchospasm",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "03/04/2026",
      "time": "09:40",
      "bp": "144/88",
      "hr": 150,
      "rr": 20,
      "temp": "98.6\u00b0F",
      "spo2": "93% on room air",
      "wt": "162 lbs",
      "ht": "5'5\"",
      "bmi": 27.0,
      "setting": "ED Triage"
    },
    {
      "date": "12/10/2025",
      "bp": "136/80",
      "hr": 72,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "95%",
      "wt": "160 lbs",
      "ht": "5'5\"",
      "bmi": 26.6,
      "setting": "PCP Office"
    }
  ],
  "notes": [
    {
      "date": "03/04/2026",
      "time": "10:05",
      "type": "Emergency Department Note",
      "author": "Dr. Angela Diaz, MD (Emergency Medicine)",
      "status": "Attending — Signed",
      "content": {
        "cc": "\"My heart has been beating really fast and I feel winded\" — 64-year-old female, onset this morning",
        "hpi": "Constance Merritt is a 64-year-old female with COPD (GOLD II), hypertension, and hypothyroidism who presents with sudden-onset palpitations and worsening dyspnea beginning approximately 4 hours ago. She reports she awoke this morning feeling 'off' with a rapid and regular fluttering sensation in her chest. Dyspnea is worse than her COPD baseline and she has required her albuterol inhaler 3 times already today without relief of the cardiac symptoms. She denies fever, productive cough, or purulent sputum that might suggest a COPD exacerbation trigger. She notes she 'smoked a cigarette last night' after several months of not smoking. No prior episodes of similar arrhythmia. No pre-syncope or syncope. Mild chest pressure (2/10), non-radiating.",
        "ros": {
          "constitutional": "Fatigue since this morning. No fever or chills.",
          "cardiovascular": "Palpitations, regular but very fast. Mild chest pressure. No syncope.",
          "respiratory": "Dyspnea beyond COPD baseline. No new cough, no hemoptysis.",
          "gi": "Mild nausea. No vomiting.",
          "other": "All other systems reviewed and negative."
        },
        "physicalExam": {
          "general": "Alert, anxious-appearing female in mild respiratory distress.",
          "vitals": "BP 144/88 | HR 150, regular | RR 20 | SpO2 93% RA | Temp 98.6\u00b0F",
          "heent": "No JVD. Thyroid non-enlarged, non-tender.",
          "cardiovascular": "Regular rhythm. Tachycardic. No murmurs. No friction rub.",
          "respiratory": "Mild end-expiratory wheeze bilaterally, consistent with COPD. No crackles.",
          "abdomen": "Soft, non-tender.",
          "extremities": "No edema. 2+ pulses."
        },
        "mdm": "64-year-old female with COPD presenting with regular tachycardia at 150 bpm and SpO2 93%. ECG obtained immediately — see results. Regular rate at exactly 150 bpm raises strong suspicion for atrial flutter with 2:1 block (atrial rate 300 bpm). Key distinction from AFib: this rhythm is regular. Differential includes AVNRT and sinus tachycardia but HR of 150 with a sawtooth pattern makes atrial flutter the leading diagnosis. COPD exacerbation may be a precipitant. Note: SpO2 at 93% — supplemental oxygen applied. Rate control and anticoagulation decision per below. Avoid beta-blockers given COPD with bronchospasm risk; prefer diltiazem IV.",
        "plan": [
          "Supplemental oxygen via nasal cannula — SpO2 target 94-98% (COPD patient)",
          "Continuous cardiac monitoring",
          "IV access established",
          "12-lead ECG obtained — see results",
          "Rate control: diltiazem 0.25 mg/kg IV bolus (avoid beta-blockers — COPD with bronchospasm history); avoid adenosine as diagnostic tool unless flutter needs unmasking",
          "Labs: BMP, CBC, TSH, troponin, BNP",
          "Portable CXR to evaluate for COPD exacerbation/pulmonary edema",
          "CHA\u2082DS\u2082-VASc score: 4 (female sex +1, age 64 = 0, HTN +1, vascular disease 0, prior stroke 0, DM 0) = 2 for female → anticoagulation indicated; LMWH initiated pending cardiology guidance on rhythm vs rate control strategy",
          "Cardiology consult",
          "Consider electrical cardioversion if rate control inadequate or hemodynamic compromise"
        ]
      }
    }
  ],
  "labs": [
    {
      "date": "03/04/2026",
      "time": "10:15",
      "orderedBy": "Dr. Angela Diaz, MD",
      "panels": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Sodium", "value": "137", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "3.4", "unit": "mEq/L", "range": "3.5-5.1", "flag": "L" },
            { "test": "Chloride", "value": "99", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "28", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "BUN", "value": "22", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.1", "unit": "mg/dL", "range": "0.5-1.1", "flag": "" },
            { "test": "eGFR", "value": ">60", "unit": "mL/min/1.73m\u00b2", "range": ">60 normal", "flag": "" },
            { "test": "Glucose", "value": "98", "unit": "mg/dL", "range": "70-100", "flag": "" }
          ]
        },
        {
          "name": "CBC",
          "results": [
            { "test": "WBC", "value": "9.4", "unit": "x10\u00b3/\u00b5L", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.1", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "38.9", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "218", "unit": "x10\u00b3/\u00b5L", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "CARDIAC BIOMARKERS",
          "results": [
            { "test": "Troponin I (high-sensitivity)", "value": "0.022", "unit": "ng/mL", "range": "<0.04", "flag": "" },
            { "test": "BNP", "value": "188", "unit": "pg/mL", "range": "<100", "flag": "H" }
          ]
        },
        {
          "name": "THYROID",
          "results": [
            { "test": "TSH", "value": "2.3", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/04/2026",
      "study": "ECG 12-LEAD",
      "accession": "ECG-2026-03043",
      "status": "FINAL",
      "orderedBy": "Dr. Angela Diaz, MD",
      "readBy": "Dr. Marcus Webb, MD (Cardiology — Consult)",
      "facility": "ReasonDx Medical Center",
      "priority": "STAT",
      "clinical": "Palpitations, tachycardia, SpO2 93%, known COPD. R/O atrial flutter.",
      "findings": "Rhythm: Regular. Rate: 150 bpm.\n\nP waves: Negative sawtooth deflections most prominent in inferior leads (II, III, aVF) at rate of approximately 300/min — consistent with flutter waves. 2:1 atrioventricular conduction block pattern.\n\nQRS: Narrow, 84 ms. No bundle branch block. No preexcitation.\n\nQTc: 408 ms.\n\nST-T changes: No ischemic ST changes.",
      "impression": "1. Atrial flutter with 2:1 AV block — ventricular rate 150 bpm, atrial rate ~300 bpm.\n2. Classic sawtooth flutter waves in inferior leads.\n3. No ischemic changes.",
      "dictated": "03/04/2026 10:30",
      "verified": "03/04/2026 10:44"
    },
    {
      "date": "03/04/2026",
      "study": "CHEST XR — PORTABLE AP",
      "accession": "IMG-2026-03044",
      "status": "FINAL",
      "orderedBy": "Dr. Angela Diaz, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "COPD patient with new tachycardia and dyspnea. Evaluate for exacerbation, pulmonary edema.",
      "findings": "Lungs: Hyperinflation. Flattened diaphragms. No consolidation. No pleural effusion. No pneumothorax.\n\nHeart: Normal cardiac silhouette. CT ratio 0.48.\n\nMediastinum: No widening.",
      "impression": "1. Findings consistent with underlying COPD — hyperinflation, no acute exacerbation changes.\n2. No pulmonary edema. No pneumothorax.",
      "dictated": "03/04/2026 10:38",
      "verified": "03/04/2026 10:55"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Quadrivalent)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL2025-339", "mfr": "Sanofi Pasteur" },
    { "vaccine": "Pneumococcal PCV20", "date": "2023", "site": "Left deltoid IM", "lot": "\u2014", "mfr": "Pfizer" },
    { "vaccine": "COVID-19 (Updated 2025)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV2025-114", "mfr": "Moderna" }
  ],
  "familyHistory": [
    "Father: COPD (smoker), deceased at 71",
    "Mother: Hypothyroidism, alive at 88",
    "No family history of arrhythmia or sudden cardiac death reported"
  ],
  "socialHistory": [
    ["Occupation", "Retired school librarian"],
    ["Marital", "Married, 3 adult children"],
    ["Tobacco", "Former smoker — 30 pack-year history; quit 2021 with occasional relapse"],
    ["Alcohol", "1–2 glasses wine on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Limited by dyspnea — short walks only"],
    ["Housing", "Lives with husband"],
    ["Advance Directive", "Healthcare surrogate designated — husband"]
  ],
  "meta": {
    "caseId": "atrial-flutter",
    "diagnosis": "New-Onset Atrial Flutter with 2:1 AV Block",
    "acuity": 2,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular",
    "setting": "ED",
    "teachingPoints": [
      "Classic ECG finding: Atrial flutter characteristically produces a regular ventricular rate of exactly 150 bpm (2:1 block from 300 bpm atrial rate). A regular tachycardia at 150 bpm should always prompt evaluation for atrial flutter.",
      "Sawtooth pattern: Flutter waves are most visible in inferior leads (II, III, aVF) as negative sawtooth deflections. They may be partially hidden by QRS complexes at 2:1 block and become apparent after AV nodal slowing.",
      "Rate control in COPD: Beta-blockers are relatively contraindicated in patients with bronchospastic COPD. IV diltiazem or digoxin are preferred rate-control agents.",
      "Anticoagulation: Atrial flutter carries thromboembolic risk comparable to AFib. CHA2DS2-VASc scoring and anticoagulation decision-making apply equally. Cardioversion timing rules are the same as for AFib.",
      "Cardioversion: Atrial flutter is highly amenable to electrical cardioversion — often requires lower energy (50J biphasic). It is also responsive to overdrive pacing and catheter ablation (>90% long-term cure rate with cavotricuspid isthmus ablation).",
      "COPD as precipitant: Hypoxia, sympathomimetic medications (albuterol), and respiratory infections are common triggers for atrial arrhythmias in COPD patients.",
      "References: ACC/AHA/ACCP/HRS 2023 AF/Flutter Guideline; StatPearls — Atrial Flutter (NCBI Bookshelf)"
    ],
    "differentialDiagnosis": [
      { "diagnosis": "Atrial flutter with 2:1 block", "probability": "High", "mustNotMiss": false, "notes": "Regular rate at 150 bpm, sawtooth flutter waves in inferior leads — classic presentation" },
      { "diagnosis": "Atrial fibrillation", "probability": "Low-Moderate", "mustNotMiss": false, "notes": "AFib is irregularly irregular; this patient's rhythm is regular — distinguishing feature" },
      { "diagnosis": "AVNRT / SVT", "probability": "Low-Moderate", "mustNotMiss": false, "notes": "Can present at 150 bpm; no retrograde P waves or classic AVNRT pattern on this ECG" },
      { "diagnosis": "Sinus tachycardia from COPD exacerbation", "probability": "Low", "mustNotMiss": false, "notes": "SpO2 93% and COPD history are relevant, but sinus P waves not present; ECG pattern not consistent with sinus tachycardia" },
      { "diagnosis": "WPW with pre-excited flutter", "probability": "Low", "mustNotMiss": true, "notes": "MUST NOT MISS — wide complex or irregular very fast rate would raise concern; narrow QRS here makes pre-excited flutter less likely" }
    ]
  }
};
