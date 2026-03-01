// Virtual EMR Case: Hypovolemic Shock from Gastroenteritis
// Variant: hypovolemic-shock-from-gastroenteritis | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Yvette Pierre-Louis",
    "dob": "03/14/1948",
    "age": 76,
    "sex": "Female",
    "mrn": "NSU-2025-85206",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B with Humana Supplement",
    "pcp": "Dr. James Patterson, MD",
    "pharmacy": "Publix Pharmacy — 1500 N State Rd 7, Lauderhill, FL",
    "language": "English, Haitian Creole",
    "race": "Black/Haitian American",
    "address": "4120 NW 44th St, Lauderdale Lakes, FL 33319",
    "phone": "(954) 555-7621",
    "email": "y.pierrelouis48@email.com",
    "emergencyContact": {
      "name": "Marie-Claire Etienne (Daughter)",
      "phone": "(954) 555-7690"
    }
  },
  "problems": [
    {
      "problem": "Type 2 Diabetes Mellitus with Diabetic Nephropathy",
      "icd": "E11.22",
      "onset": "2005",
      "status": "Active",
      "notes": "On insulin; last A1c 8.4%"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2000",
      "status": "Active",
      "notes": "On triple therapy"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2020",
      "status": "Active",
      "notes": "eGFR 38; diabetic nephropathy"
    },
    {
      "problem": "Heart Failure with Preserved Ejection Fraction",
      "icd": "I50.32",
      "onset": "2022",
      "status": "Active",
      "notes": "EF 55%; diastolic dysfunction Grade II"
    },
    {
      "problem": "Peripheral Neuropathy, Diabetic",
      "icd": "E11.42",
      "onset": "2018",
      "status": "Active",
      "notes": "Bilateral feet"
    },
    {
      "problem": "Chronic Constipation",
      "icd": "K59.00",
      "onset": "2019",
      "status": "Active",
      "notes": "On scheduled polyethylene glycol"
    }
  ],
  "medications": [
    {
      "name": "Insulin glargine 28 units QHS",
      "sig": "Inject 28 units subcutaneously at bedtime",
      "prescriber": "Dr. Patterson",
      "start": "06/2016",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Insulin lispro sliding scale with meals",
      "sig": "Inject subcutaneously per sliding scale before meals",
      "prescriber": "Dr. Patterson",
      "start": "01/2022",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Losartan 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Patterson",
      "start": "03/2008",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Patterson",
      "start": "09/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Furosemide 40mg daily",
      "sig": "Take 1 tablet by mouth once daily in the morning",
      "prescriber": "Dr. Patterson",
      "start": "08/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Gabapentin 300mg TID",
      "sig": "Take 1 capsule by mouth three times daily",
      "prescriber": "Dr. Patterson",
      "start": "04/2019",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Polyethylene glycol 17g daily",
      "sig": "Dissolve 1 capful in 8 oz water, drink once daily",
      "prescriber": "Dr. Patterson",
      "start": "06/2020",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Metformin",
      "type": "Drug",
      "reaction": "Severe GI intolerance (diarrhea, nausea); discontinued due to CKD progression",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Lisinopril",
      "type": "Drug",
      "reaction": "Persistent dry cough",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/06/2025",
      "bp": "138/78",
      "hr": 72,
      "rr": 16,
      "temp": "98.0°F",
      "spo2": "96%",
      "wt": "176 lbs",
      "ht": "5'4\"",
      "bmi": 30.2,
      "setting": "PCP Office"
    },
    {
      "date": "09/12/2024",
      "bp": "142/82",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "178 lbs",
      "ht": "5'4\"",
      "bmi": 30.5,
      "setting": "PCP Office"
    },
    {
      "date": "03/18/2024",
      "bp": "146/84",
      "hr": 70,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "180 lbs",
      "ht": "5'4\"",
      "bmi": 30.9,
      "setting": "PCP Office"
    },
    {
      "date": "09/08/2023",
      "bp": "140/80",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "182 lbs",
      "ht": "5'4\"",
      "bmi": 31.2,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/06/2025",
      "type": "Primary Care",
      "provider": "Dr. James Patterson, MD",
      "cc": "Follow-up: DM2, CKD, HFpEF; recent norovirus exposure at senior center",
      "hpi": "76-year-old female with multiple comorbidities for routine follow-up. Mentions that several attendees at her senior center have been ill with vomiting and diarrhea this week ('stomach bug going around'). She feels well currently but is concerned. A1c worsened to 8.4%. CKD stable at eGFR 38. Weight stable. Taking medications as prescribed. Reviewed sick-day rules for insulin and diuretics.",
      "exam": "General: Well-appearing, NAD. CV: RRR, no murmurs, no S3, JVP 6 cm. Lungs: CTAB, no crackles. Abdomen: Soft, NT, no organomegaly. Ext: Trace bilateral ankle edema. Neuro: Diminished monofilament bilateral feet.",
      "assessment": "1. T2DM — A1c 8.4%; needs regimen adjustment\n2. CKD Stage 3b — stable\n3. HFpEF — euvolemic on current diuretic\n4. Norovirus exposure — counseled on hydration and sick-day medication management",
      "plan": "1. Increase insulin glargine 28 → 32 units; dietary reinforcement\n2. Continue nephrology co-management; urine ACR ordered\n3. Continue furosemide; daily weights at home\n4. SICK DAY RULES reviewed: hold furosemide, losartan, and reduce insulin if not eating; seek care if >6 episodes vomiting/diarrhea, unable to keep down fluids, or BG <70 or >300"
    },
    {
      "id": "V002",
      "date": "09/12/2024",
      "type": "Specialist",
      "provider": "Dr. Priya Sharma, MD (Cardiology)",
      "cc": "HFpEF annual follow-up",
      "hpi": "76-year-old female with HFpEF for annual cardiology visit. No hospitalizations for CHF in past year. Adherent to low-sodium diet. Denies orthopnea, PND, worsening edema. Last echo EF 55% with Grade II diastolic dysfunction.",
      "exam": "CV: RRR, S4 present, no S3. JVP 7 cm. Lungs: CTAB. Ext: Trace bilateral pedal edema — at baseline.",
      "assessment": "1. HFpEF — stable, NYHA II\n2. Continue current regimen",
      "plan": "1. Continue furosemide 40mg daily\n2. Echocardiogram in 1 year\n3. Consider SGLT2 inhibitor if eGFR allows (discuss with nephrology)\n4. RTC 12 months"
    },
    {
      "id": "V003",
      "date": "03/18/2024",
      "type": "Primary Care",
      "provider": "Dr. James Patterson, MD",
      "cc": "Routine DM2/CKD monitoring",
      "hpi": "76-year-old female for chronic disease follow-up. A1c improved to 8.0% from 8.6%. eGFR stable at 40. No hypoglycemic episodes. BP slightly above goal.",
      "exam": "General: NAD. CV: RRR, S4. Lungs: CTAB. Ext: Trace edema.",
      "assessment": "1. T2DM — improving\n2. CKD 3b — stable\n3. HTN — slightly above goal",
      "plan": "1. Continue insulin regimen\n2. Labs in 3 months\n3. Continue current antihypertensives"
    }
  ],
  "labs": [
    {
      "date": "01/06/2025",
      "time": "09:00",
      "orderedBy": "Dr. James Patterson, MD",
      "collected": "01/06/2025 08:20",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2025-085206",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "162", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "36", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.8", "unit": "mg/dL", "range": "0.6-1.2", "flag": "H" },
            { "test": "eGFR", "value": "38", "unit": "mL/min/1.73m²", "range": ">60", "flag": "L" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "5.0", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "104", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "20", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium", "value": "9.2", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "18", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "22", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            { "test": "HbA1c", "value": "8.4", "unit": "%", "range": "<5.7 normal; 5.7-6.4 prediabetes", "flag": "H" },
            { "test": "Est. Avg Glucose (eAG)", "value": "194", "unit": "mg/dL", "range": "—", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "10.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "32.6", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelet Count", "value": "234", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "09/08/2023",
      "study": "ECHOCARDIOGRAM — TRANSTHORACIC",
      "accession": "IMG-2023-85206",
      "status": "FINAL",
      "orderedBy": "Dr. Priya Sharma, MD (Cardiology)",
      "readBy": "Dr. Priya Sharma, MD (Cardiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "Routine",
      "clinical": "75F HFpEF. Annual surveillance.",
      "technique": "Complete 2D and Doppler transthoracic echocardiogram.",
      "findings": "Left ventricle: Normal cavity size. Concentric LVH. LVEF 55%. Grade II diastolic dysfunction (E/A ratio 0.8, elevated E/e' ratio 14).\\n\\nRight ventricle: Normal size and function.\\n\\nValves: Mild mitral annular calcification. Trace MR. No AS.\\n\\nPericardium: No effusion.\\n\\nIVC: Normal caliber with >50% respiratory collapse.",
      "impression": "1. Preserved LVEF 55% with Grade II diastolic dysfunction.\\n2. Concentric LVH — consistent with long-standing hypertension.\\n3. No significant valvular disease.",
      "dictated": "09/08/2023 15:00",
      "verified": "09/08/2023 17:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD310",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2024-25)",
      "date": "10/25/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-748",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "03/2023",
      "site": "Left deltoid IM",
      "lot": "PN23-185",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-342",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-490",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: T2DM, hypertension, deceased at 70 (stroke)",
    "Father: CHF, deceased at 68 (MI)",
    "Sister: T2DM, CKD on dialysis, alive at 80",
    "Daughter: Hypertension, alive at 50"
  ],
  "socialHistory": [
    ["Occupation", "Retired home health aide"],
    ["Marital", "Widowed since 2016"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Denies"],
    ["Drugs", "Denies"],
    ["Exercise", "Attends senior center 3x/week for light exercise and social activity"],
    ["Housing", "Lives alone in apartment; daughter visits 3x/week"],
    ["Safety", "Denies IPV; has life alert pendant; no recent falls"],
    ["Advance Directive", "DPOA — daughter Marie-Claire Etienne; DNR not in place"]
  ],
  "meta": {
    "caseId": "hypovolemic-shock-from-gastroenteritis",
    "diagnosis": "Hypovolemic Shock from Acute Gastroenteritis (Norovirus in Elderly Diabetic with CKD/HFpEF)",
    "acuity": 1,
    "presentation": "Endocrine Emergency",
    "category": "endocrine"
  }
};
