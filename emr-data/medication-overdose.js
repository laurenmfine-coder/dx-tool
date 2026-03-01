// Virtual EMR Case: Medication Overdose (ACE-I/Spironolactone)
// Variant: medication-overdose | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Patricia Langston",
    "dob": "06/22/1950",
    "age": 74,
    "sex": "Female",
    "mrn": "RDX-2025-89142",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + Humana Supplement",
    "pcp": "Dr. Jennifer Adams, MD",
    "pharmacy": "Publix Pharmacy — 5200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "1928 SW 72nd Ave, Plantation, FL 33317",
    "phone": "(954) 555-3291",
    "email": "p.langston50@email.com",
    "emergencyContact": {
      "name": "Robert Langston (Husband)",
      "phone": "(954) 555-3294"
    }
  },
  "problems": [
    {
      "problem": "Heart Failure with Preserved Ejection Fraction",
      "icd": "I50.32",
      "onset": "2021",
      "status": "Active",
      "notes": "EF 55%; diastolic dysfunction grade II; on spironolactone, lisinopril, furosemide"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2022",
      "status": "Active",
      "notes": "eGFR 38; hypertensive nephrosclerosis; baseline Cr 1.6"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "1998",
      "status": "Active",
      "notes": "On lisinopril 40mg + amlodipine 10mg + furosemide"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2010",
      "status": "Active",
      "notes": "On glipizide; A1c 7.4%"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 40mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "01/2015",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Spironolactone 50mg daily",
      "sig": "Take 1 tablet by mouth daily (DOSE RECENTLY DOUBLED from 25mg by cardiology 3 weeks ago)",
      "prescriber": "Dr. Patel (Cardiology)",
      "start": "02/2025 (dose increase)",
      "refills": 2,
      "status": "Active — RECENTLY DOUBLED"
    },
    {
      "name": "Furosemide 40mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Adams",
      "start": "06/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "03/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Glipizide 10mg BID",
      "sig": "Take 1 tablet by mouth twice daily before meals",
      "prescriber": "Dr. Adams",
      "start": "01/2016",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Potassium Chloride 20mEq daily",
      "sig": "Take 1 tablet by mouth daily (NOTE: should have been DISCONTINUED when spironolactone was increased — NOT caught at pharmacy or follow-up)",
      "prescriber": "Dr. Adams",
      "start": "08/2021",
      "refills": 3,
      "status": "Active — SHOULD HAVE BEEN DISCONTINUED"
    }
  ],
  "allergies": [
    {
      "allergen": "Metformin",
      "type": "Drug",
      "reaction": "Severe diarrhea and lactic acidosis (hospitalized)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "88/52",
      "hr": 42,
      "rr": 18,
      "temp": "97.4°F",
      "spo2": "94%",
      "wt": "158 lbs",
      "ht": "5'3\"",
      "bmi": 28.0,
      "setting": "ED"
    },
    {
      "date": "02/04/2025",
      "bp": "138/82",
      "hr": 68,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "97%",
      "wt": "156 lbs",
      "ht": "5'3\"",
      "bmi": 27.6,
      "setting": "Specialist"
    },
    {
      "date": "11/20/2024",
      "bp": "142/86",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "154 lbs",
      "ht": "5'3\"",
      "bmi": 27.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/04/2025",
      "type": "Specialist",
      "provider": "Dr. Nina Patel, MD (Cardiology)",
      "cc": "HFpEF management — persistent fluid retention",
      "hpi": "74-year-old female with HFpEF (EF 55%) and CKD 3b presenting with persistent lower extremity edema despite furosemide 40mg daily. Weight up 3 lbs. Mild dyspnea with exertion. Currently on spironolactone 25mg. Echo last month showed stable EF 55% with grade II diastolic dysfunction.",
      "exam": "CV: RRR, no murmur, JVP 10 cm. Lungs: Bibasilar crackles. Extremities: 2+ pitting edema bilateral LE. Abdomen: Soft, no ascites.",
      "assessment": "1. HFpEF — persistent volume overload\n2. CKD 3b — limits diuretic options",
      "plan": "1. INCREASE spironolactone from 25mg to 50mg daily (NOTE: patient also on lisinopril 40mg AND potassium supplement — high risk for hyperkalemia)\n2. POTASSIUM AND RENAL FUNCTION CHECK IN 1 WEEK — order placed\n3. Continue furosemide 40mg daily\n4. Patient instructed to get labs within 5-7 days — PATIENT DID NOT GET LABS\n5. RTC 4 weeks"
    },
    {
      "id": "V002",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Follow-up: CKD, DM, HTN, HFpEF",
      "hpi": "74-year-old with multiple comorbidities for routine follow-up. CKD stable — Cr 1.6, eGFR 38. DM managed on glipizide — A1c 7.4%. Mild persistent LE edema. Potassium 4.8 on last check.",
      "exam": "General: Well-appearing elderly female. CV: RRR, HR 72. Lungs: Trace bibasilar crackles. Extremities: 1+ bilateral LE edema.",
      "assessment": "1. CKD 3b — stable\n2. HFpEF — mild volume overload\n3. DM — adequate control\n4. HTN — borderline controlled\n5. Potassium 4.8 — upper limit on ACE-I + spironolactone + K supplement",
      "plan": "1. Continue current regimen\n2. Consider discontinuing KCl supplement given spironolactone and CKD risk — discussed but deferred to cardiology\n3. Labs in 3 months\n4. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "02/27/2025",
      "time": "07:42",
      "orderedBy": "Dr. Amanda Liu, MD (ED)",
      "collected": "02/27/2025 07:25",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-111418",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "54", "unit": "mg/dL", "range": "70-100", "flag": "L" },
            { "test": "BUN", "value": "52", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "3.2", "unit": "mg/dL", "range": "0.6-1.1", "flag": "H" },
            { "test": "Sodium", "value": "130", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "7.4", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Chloride", "value": "96", "unit": "mEq/L", "range": "98-106", "flag": "L" },
            { "test": "CO2 (Bicarbonate)", "value": "16", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium", "value": "8.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "L" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "8.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "10.6", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "31.8", "unit": "%", "range": "36-46", "flag": "L" },
            { "test": "Platelets", "value": "198", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/27/2025",
      "study": "CHEST X-RAY — PA AND LATERAL",
      "accession": "IMG-2025-11102",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD",
      "readBy": "Dr. Sarah Mitchell, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "74-year-old with bradycardia, hypotension, HFpEF, hyperkalemia",
      "technique": "PA and lateral chest radiographs.",
      "findings": "HEART: Mildly enlarged cardiac silhouette.\n\nLUNGS: Small bilateral pleural effusions. Mild pulmonary vascular congestion. No consolidation.\n\nOTHER: Mild degenerative changes in the thoracic spine.",
      "impression": "1. Mild cardiomegaly with bilateral pleural effusions and pulmonary congestion\n2. No acute infiltrate",
      "dictated": "02/27/2025 08:00",
      "verified": "02/27/2025 08:08"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL891T", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "PF501K", "mfr": "Pfizer" },
    { "vaccine": "Pneumococcal (PCV20)", "date": "06/2023", "site": "Left deltoid IM", "lot": "PV308R", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (2nd dose)", "date": "05/2021", "site": "Left deltoid IM", "lot": "SH182T", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Mother: Deceased at 88 — CHF, CKD",
    "Father: Deceased at 76 — MI",
    "Sister (age 71): Hypertension, Type 2 Diabetes",
    "No family history of sudden cardiac death"
  ],
  "socialHistory": [
    ["Occupation", "Retired — former elementary school teacher"],
    ["Marital", "Married x 50 years; husband Robert assists with medications and appointments"],
    ["Tobacco", "Never"],
    ["Alcohol", "Rare"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 15 min/day; limited by dyspnea and knee pain"],
    ["Housing", "Single-story home with husband"],
    ["Safety", "No firearms; uses pill organizer; husband helps manage medications but missed the medication interaction"],
    ["Advance Directive", "Healthcare proxy: Robert Langston (husband); DNR/DNI NOT currently in place"]
  ],
  "meta": {
    "caseId": "medication-overdose",
    "diagnosis": "Iatrogenic Hyperkalemia (7.4 mEq/L) from ACE-Inhibitor + Spironolactone Dose Increase + Continued KCl Supplementation in CKD 3b — Medication Safety Error",
    "acuity": 2,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "iatrogenic"
  }
};
