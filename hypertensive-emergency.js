// Virtual EMR Case: Hypertensive Emergency
// Variant: hypertensive-emergency | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Claudette Baptiste",
    "dob": "09/12/1961",
    "age": 63,
    "sex": "Female",
    "mrn": "RDX-2025-38572",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Carlos Mendez, MD",
    "pharmacy": "Walgreens — 3500 Broward Blvd, Riverside, FL",
    "language": "English, Haitian Creole",
    "race": "Black/African American",
    "address": "5120 NW 18th Court, Lauderhill, FL 33313",
    "phone": "(954) 555-6041",
    "email": "c.baptiste61@email.com",
    "emergencyContact": {
      "name": "Marie-Claire Desrosiers (Daughter)",
      "phone": "(954) 555-6078"
    }
  },
  "problems": [
    {
      "problem": "Hypertension, Essential — Poorly Controlled",
      "icd": "I10",
      "onset": "2008",
      "status": "Active",
      "notes": "Resistant HTN; on 3-drug regimen; multiple missed appointments; last BP at office 168/98"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2021",
      "status": "Active",
      "notes": "eGFR 52; hypertensive nephrosclerosis suspected; nephrology referral placed but not yet seen"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2012",
      "status": "Active",
      "notes": "A1c 7.8%; on metformin and glipizide"
    },
    {
      "problem": "Left Ventricular Hypertrophy",
      "icd": "I51.7",
      "onset": "2022",
      "status": "Active",
      "notes": "Diagnosed on echocardiogram; concentric LVH consistent with chronic HTN"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2014",
      "status": "Active",
      "notes": "On atorvastatin; LDL at goal"
    },
    {
      "problem": "Obesity, Class I",
      "icd": "E66.01",
      "onset": "2010",
      "status": "Active",
      "notes": "BMI 33"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Mendez",
      "start": "06/2018",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Lisinopril 40mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Mendez",
      "start": "03/2015",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Hydrochlorothiazide 25mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Mendez",
      "start": "01/2020",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Mendez",
      "start": "08/2013",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Glipizide 10mg BID",
      "sig": "Take 1 tablet by mouth twice daily 30 minutes before meals",
      "prescriber": "Dr. Mendez",
      "start": "04/2020",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Mendez",
      "start": "01/2015",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Mendez",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Lisinopril",
      "type": "Drug",
      "reaction": "Dry cough (tolerable per patient; declined switch)",
      "severity": "Mild",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Throat tightness, urticaria",
      "severity": "Severe",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "11/18/2024",
      "bp": "168/98",
      "hr": 88,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "198 lbs",
      "ht": "5'5\"",
      "bmi": 32.9,
      "setting": "PCP Office"
    },
    {
      "date": "07/10/2024",
      "bp": "172/102",
      "hr": 84,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "195 lbs",
      "ht": "5'5\"",
      "bmi": 32.4,
      "setting": "PCP Office"
    },
    {
      "date": "01/15/2024",
      "bp": "158/94",
      "hr": 80,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "192 lbs",
      "ht": "5'5\"",
      "bmi": 31.9,
      "setting": "PCP Office"
    },
    {
      "date": "07/20/2023",
      "bp": "162/96",
      "hr": 82,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "98%",
      "wt": "190 lbs",
      "ht": "5'5\"",
      "bmi": 31.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Carlos Mendez, MD",
      "cc": "Follow-up: HTN, DM2, CKD",
      "hpi": "63-year-old female presents for follow-up of chronic conditions. BP remains elevated despite 3-drug regimen. Admits to inconsistent medication adherence — frequently misses afternoon doses. Reports intermittent occipital headaches over past 2 months, attributed to stress. Denies vision changes, chest pain, SOB, or edema. Missed nephrology appointment due to transportation issues. Diet high in sodium per review.",
      "exam": "General: Obese female, NAD. HEENT: PERRL, fundoscopic exam — AV nicking noted bilaterally, no papilledema, no hemorrhages or exudates. Neck: No bruits. CV: RRR, S4 gallop present, no murmurs. Lungs: CTAB. Abdomen: Soft, obese, NT. Extremities: Trace bilateral pedal edema. Neuro: A&O x3, no focal deficits.",
      "assessment": "1. Resistant hypertension — uncontrolled on 3-drug regimen; medication non-adherence contributing\n2. CKD Stage 3a — stable creatinine; nephrology referral re-placed\n3. T2DM — A1c 7.8%, slightly above goal\n4. LVH — S4 present; chronic HTN effect\n5. Intermittent headaches — likely hypertension-related",
      "plan": "1. Strongly counseled on medication adherence; discussed pill organizer and alarm reminders\n2. Consider adding spironolactone 25mg if non-adherence corrected and BP still uncontrolled at next visit\n3. Low-sodium diet counseling; DASH diet handout provided\n4. Nephrology referral re-placed; social work for transportation assistance\n5. Recheck labs including BMP in 4 weeks\n6. RTC 4-6 weeks; return immediately for severe headache, vision changes, chest pain, or SOB"
    },
    {
      "id": "V002",
      "date": "07/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Carlos Mendez, MD",
      "cc": "Follow-up: HTN, DM2",
      "hpi": "63-year-old female for chronic disease follow-up. BP persistently elevated. A1c improved from 8.2% to 7.8%. Reports occasional headaches. Compliant with medications per patient report, though refill records suggest gaps. No new complaints.",
      "exam": "General: NAD, obese. HEENT: AV nicking on fundoscopy, unchanged. CV: RRR, S4 gallop. Lungs: CTAB. Extremities: No edema today.",
      "assessment": "1. HTN — persistent elevation; suspect non-adherence\n2. T2DM — improving A1c\n3. CKD 3a — stable",
      "plan": "1. Continue current regimen; reinforce adherence\n2. Nephrology referral (patient has not yet been seen)\n3. Recheck A1c in 3 months\n4. RTC 3-4 months"
    },
    {
      "id": "V003",
      "date": "01/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Carlos Mendez, MD",
      "cc": "Annual wellness exam",
      "hpi": "63-year-old female for annual wellness visit. Multiple chronic conditions. Reports general fatigue. BP elevated but improved from prior. Weight slowly trending up.",
      "exam": "General: NAD. Vitals: As above. CV: S4 present. Lungs: CTAB. Abdomen: Soft. Extremities: No edema. Neuro: Intact.",
      "assessment": "1. Annual wellness exam\n2. HTN — improved but not at goal\n3. T2DM — A1c 8.2%\n4. CKD 3a — new nephrology referral placed",
      "plan": "1. Added HCTZ 25mg to regimen\n2. Increased glipizide to 10mg BID\n3. Nephrology referral\n4. Recheck labs 3 months\n5. RTC 3-6 months"
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "time": "08:50",
      "orderedBy": "Dr. Carlos Mendez, MD",
      "collected": "11/18/2024 08:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-111822",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA), Urine",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "142", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "28", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.4", "unit": "mg/dL", "range": "0.6-1.1", "flag": "H" },
            { "test": "eGFR", "value": "52", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Sodium", "value": "139", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.8", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "100", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "22", "unit": "mEq/L", "range": "23-29", "flag": "L" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            { "test": "HbA1c", "value": "7.8", "unit": "%", "range": "<5.7 normal; 5.7-6.4 prediabetes", "flag": "H" },
            { "test": "Est. Avg Glucose (eAG)", "value": "177", "unit": "mg/dL", "range": "—", "flag": "" }
          ]
        },
        {
          "name": "URINALYSIS WITH MICROSCOPY",
          "results": [
            { "test": "Protein", "value": "1+", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Glucose", "value": "1+", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Blood", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Urine Albumin/Creatinine Ratio", "value": "82", "unit": "mg/g", "range": "<30", "flag": "H" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "35.2", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelet Count", "value": "245", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/22/2022",
      "study": "ECHOCARDIOGRAM — TRANSTHORACIC",
      "accession": "IMG-2022-03221",
      "status": "FINAL",
      "orderedBy": "Dr. Carlos Mendez, MD",
      "readBy": "Dr. Priya Shah, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "61F HTN, evaluate for LVH and cardiac function.",
      "technique": "Standard 2D, M-mode, and Doppler echocardiography. Adequate acoustic windows.",
      "findings": "Left ventricle: Concentric LVH (IVSd 1.3 cm, LVPWd 1.2 cm). LVEF 55-60% by Simpson biplane. No RWMA. LV cavity size normal.\\n\\nRight ventricle: Normal size and function. TAPSE 2.2 cm.\\n\\nAtria: Mild left atrial enlargement (LA volume index 35 mL/m²). RA normal.\\n\\nValves: Mild MR (degenerative). Mild TR. No AS or AR.\\n\\nAortic root: Normal. No dilation.\\n\\nPericardium: No effusion.\\n\\nDiastolic function: Grade 1 diastolic dysfunction (impaired relaxation pattern).",
      "impression": "1. Concentric left ventricular hypertrophy — consistent with chronic hypertension.\\n2. Preserved LVEF (55-60%).\\n3. Mild left atrial enlargement.\\n4. Grade 1 diastolic dysfunction.\\n5. Mild mitral and tricuspid regurgitation.",
      "dictated": "03/22/2022 14:40",
      "verified": "03/22/2022 16:15"
    },
    {
      "date": "01/15/2024",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2024-01152",
      "status": "FINAL",
      "orderedBy": "Dr. Carlos Mendez, MD",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "63F HTN, DM2, CKD. Annual screening.",
      "technique": "PA and lateral views, upright.",
      "findings": "Heart: Mildly enlarged cardiac silhouette (cardiothoracic ratio 0.55). No pericardial effusion.\\n\\nMediastinum: Calcified aortic knob consistent with atherosclerosis.\\n\\nLungs: Clear bilaterally. No consolidation, effusion, or pneumothorax.\\n\\nBones: Mild degenerative changes thoracic spine.",
      "impression": "1. Mild cardiomegaly — known LVH.\\n2. Aortic atherosclerotic changes.\\n3. No acute cardiopulmonary process.",
      "dictated": "01/15/2024 11:20",
      "verified": "01/15/2024 14:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/15/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD118",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/01/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-558",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "01/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-102",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "03/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-340",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-501",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: HTN, stroke at age 70, deceased at 75",
    "Father: HTN, T2DM, MI at age 65, deceased at 68",
    "Sister: HTN, CKD, alive at 65",
    "Brother: T2DM, alive at 58",
    "Son: HTN, age 38"
  ],
  "socialHistory": [
    ["Occupation", "Retired home health aide"],
    ["Marital", "Widowed; lives with daughter"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Denies"],
    ["Drugs", "Denies"],
    ["Exercise", "Minimal; walks around the block occasionally"],
    ["Housing", "Lives with daughter in apartment; limited transportation"],
    ["Safety", "Denies IPV; no firearms"],
    ["Advance Directive", "Health care proxy: daughter Marie-Claire Desrosiers"]
  ],
  "meta": {
    "caseId": "hypertensive-emergency",
    "diagnosis": "Hypertensive Emergency with End-Organ Damage (Encephalopathy, CKD Progression)",
    "acuity": 2,
    "presentation": "Headache",
    "category": "cardiovascular"
  }
};
