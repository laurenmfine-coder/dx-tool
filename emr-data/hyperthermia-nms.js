// Virtual EMR Case: Hyperthermia — Neuroleptic Malignant Syndrome
// Variant: hyperthermia-nms | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Andres Villareal",
    "dob": "04/06/1988",
    "age": 36,
    "sex": "Male",
    "mrn": "RDX-2025-70549",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Kenneth Shaw, MD",
    "pharmacy": "Walgreens — 2400 N State Rd 7, Margate, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "6540 NW 24th Ct, Margate, FL 33063",
    "phone": "(954) 555-4918",
    "email": "a.villareal88@email.com",
    "emergencyContact": {
      "name": "Rosa Villareal (Mother)",
      "phone": "(954) 555-4960"
    }
  },
  "problems": [
    {
      "problem": "Schizophrenia, Paranoid Type",
      "icd": "F20.0",
      "onset": "2012",
      "status": "Active",
      "notes": "Multiple hospitalizations; on depot antipsychotic; last decompensation 2023"
    },
    {
      "problem": "Tobacco Use Disorder",
      "icd": "F17.210",
      "onset": "2008",
      "status": "Active",
      "notes": "1 PPD x 16 years"
    },
    {
      "problem": "Metabolic Syndrome",
      "icd": "E88.81",
      "onset": "2022",
      "status": "Active",
      "notes": "Antipsychotic-related weight gain; elevated fasting glucose"
    },
    {
      "problem": "Obesity, Class II",
      "icd": "E66.01",
      "onset": "2020",
      "status": "Active",
      "notes": "BMI 37"
    },
    {
      "problem": "Dyslipidemia",
      "icd": "E78.5",
      "onset": "2022",
      "status": "Active",
      "notes": "Elevated TG, low HDL"
    }
  ],
  "medications": [
    {
      "name": "Haloperidol decanoate 200mg IM monthly",
      "sig": "200mg intramuscular injection every 4 weeks at clinic",
      "prescriber": "Dr. Maria Santos, MD (Psychiatry)",
      "start": "06/2023",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Benztropine 1mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Santos",
      "start": "06/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Shaw",
      "start": "03/2023",
      "refills": 2,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Olanzapine",
      "type": "Drug",
      "reaction": "Excessive weight gain (40 lbs in 6 months), glucose >200",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/06/2025",
      "bp": "128/82",
      "hr": 84,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "248 lbs",
      "ht": "5'10\"",
      "bmi": 35.6,
      "setting": "PCP Office"
    },
    {
      "date": "07/22/2024",
      "bp": "134/86",
      "hr": 80,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "244 lbs",
      "ht": "5'10\"",
      "bmi": 35.0,
      "setting": "PCP Office"
    },
    {
      "date": "01/15/2024",
      "bp": "130/84",
      "hr": 78,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "240 lbs",
      "ht": "5'10\"",
      "bmi": 34.4,
      "setting": "Psych Clinic"
    },
    {
      "date": "07/10/2023",
      "bp": "126/80",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "236 lbs",
      "ht": "5'10\"",
      "bmi": 33.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/06/2025",
      "type": "Primary Care",
      "provider": "Dr. Kenneth Shaw, MD",
      "cc": "Follow-up: metabolic monitoring on antipsychotic; weight management",
      "hpi": "36-year-old male with paranoid schizophrenia on haloperidol decanoate for routine metabolic monitoring. Received most recent depot injection 2 weeks ago at psychiatry clinic; dose was recently increased from 150mg to 200mg monthly due to breakthrough auditory hallucinations. Currently denies hallucinations but reports new onset of muscle stiffness, particularly in neck and shoulders, since the dose increase. Also reports mild difficulty swallowing and feeling 'slower.' Weight up 4 lbs since last visit. Mother who accompanied him notes he seems more rigid when walking.",
      "exam": "General: Overweight male, flat affect, psychomotor slowing. HEENT: WNL. Neck: Increased tone, mild cogwheel rigidity on passive ROM. CV: RRR, tachycardic for baseline (HR 84). Lungs: CTAB. Abdomen: Obese, soft, NT. Neuro: A&O x3; increased muscle tone bilateral upper and lower extremities; cogwheel rigidity at wrists; no tremor at rest; gait mildly shuffling. Skin: Dry, no diaphoresis currently.",
      "assessment": "1. Extrapyramidal symptoms — new onset after haloperidol dose increase; mild rigidity, cogwheel, psychomotor slowing; need to monitor closely for NMS given recent dose increase\n2. Schizophrenia — auditory hallucinations improved on higher dose\n3. Metabolic syndrome — weight gain progressive; glucose borderline\n4. Dysphagia — new; may be EPS-related",
      "plan": "1. Increase benztropine 1mg → 2mg BID for EPS\n2. HIGH ALERT: Educate patient and mother on NMS warning signs — fever >101°F, severe rigidity, altered mental status, diaphoresis, autonomic instability → ED IMMEDIATELY\n3. Contact psychiatry (Dr. Santos) regarding EPS; may need dose reduction or switch\n4. Fasting glucose and lipid panel ordered\n5. Swallowing assessment if dysphagia persists\n6. RTC 2 weeks for EPS recheck; sooner if any NMS red flags"
    },
    {
      "id": "V002",
      "date": "07/22/2024",
      "type": "Primary Care",
      "provider": "Dr. Kenneth Shaw, MD",
      "cc": "Annual metabolic screening on antipsychotic",
      "hpi": "36-year-old male for annual metabolic monitoring per antipsychotic guidelines. On haloperidol decanoate 150mg monthly — stable. No EPS. Weight up 4 lbs over 6 months. Fasting glucose 112 (previously 106). TG elevated. No chest pain, dyspnea, or abdominal symptoms.",
      "exam": "General: Obese male, NAD. CV: RRR. Abdomen: Obese, NT. Ext: No edema.",
      "assessment": "1. Metabolic syndrome — worsening; weight gain, prediabetic glucose, elevated TG\n2. Schizophrenia — stable on haloperidol decanoate",
      "plan": "1. Continue metformin 500mg BID\n2. Dietary counseling; exercise encouraged\n3. Consider statin if LDL elevated\n4. RTC 6 months with metabolic labs"
    },
    {
      "id": "V003",
      "date": "01/15/2024",
      "type": "Specialist",
      "provider": "Dr. Maria Santos, MD (Psychiatry)",
      "cc": "Psychiatric follow-up: schizophrenia maintenance",
      "hpi": "35-year-old male with paranoid schizophrenia. Stable on haloperidol decanoate 150mg monthly x 7 months. No psychotic symptoms. Adherent to depot injections. No EPS. Denies SI/HI. Mother reports he is attending day program and managing ADLs well.",
      "exam": "Psych: Appearance — casually dressed, groomed. Behavior — cooperative, flat affect. Speech — low volume, normal rate. Thought process — linear, goal-directed. Thought content — no delusions, no SI/HI. Perception — denies AH/VH. Cognition — A&O x3. Insight/judgment — fair.",
      "assessment": "1. Schizophrenia, paranoid type — stable on current regimen\n2. No EPS",
      "plan": "1. Continue haloperidol decanoate 150mg IM q4 weeks\n2. Continue benztropine 1mg BID prophylactically\n3. RTC monthly for injection"
    }
  ],
  "labs": [
    {
      "date": "01/06/2025",
      "time": "09:00",
      "orderedBy": "Dr. Kenneth Shaw, MD",
      "collected": "01/06/2025 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-070549",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "116", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "18", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.1", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.4", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "34", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "30", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "218", "unit": "mg/dL", "range": "<200", "flag": "H" },
            { "test": "LDL Cholesterol", "value": "128", "unit": "mg/dL", "range": "<130", "flag": "" },
            { "test": "HDL Cholesterol", "value": "32", "unit": "mg/dL", "range": ">40", "flag": "L" },
            { "test": "Triglycerides", "value": "288", "unit": "mg/dL", "range": "<150", "flag": "H" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "8.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "14.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "44.6", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "252", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/2023",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2023-70549",
      "status": "FINAL",
      "orderedBy": "Dr. Maria Santos, MD (Psychiatry)",
      "readBy": "Dr. Robert Anderson, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "35M with schizophrenia. Baseline imaging prior to starting depot antipsychotic.",
      "technique": "Non-contrast CT head, axial.",
      "findings": "Brain parenchyma: No mass, hemorrhage, or acute infarct. Normal gray-white differentiation.\\n\\nVentricles: Normal size and configuration. No hydrocephalus.\\n\\nExtra-axial spaces: Normal.\\n\\nBone: No fracture. Sinuses clear.",
      "impression": "1. Normal CT head without contrast.",
      "dictated": "06/15/2023 10:00",
      "verified": "06/15/2023 12:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/22/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-358",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2024-25)",
      "date": "11/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-738",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis B — Series complete",
      "date": "2004",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: T2DM, hypertension, alive at 60",
    "Father: Schizophrenia (untreated), alcohol use disorder, deceased at 52 (liver cirrhosis)",
    "Brother: Bipolar disorder, alive at 33",
    "Maternal grandmother: T2DM, deceased at 70"
  ],
  "socialHistory": [
    ["Occupation", "Unemployed; attends community mental health day program"],
    ["Marital", "Single"],
    ["Tobacco", "Current smoker — 1 PPD x 16 years (16 pack-years)"],
    ["Alcohol", "Denies current use; history of binge drinking in early 20s"],
    ["Drugs", "Denies current; remote cannabis use"],
    ["Exercise", "Sedentary; walks to day program (10 min)"],
    ["Housing", "Lives with mother in apartment"],
    ["Safety", "Denies SI/HI; no weapons access; mother supervises medications"],
    ["Advance Directive", "None; mother is informal decision-maker"]
  ],
  "meta": {
    "caseId": "hyperthermia-nms",
    "diagnosis": "Neuroleptic Malignant Syndrome",
    "acuity": 1,
    "presentation": "Environmental Emergency",
    "category": "toxicologic"
  }
};
