// Virtual EMR Case: Alcohol Withdrawal Seizures
// Variant: alcohol-withdrawal-seizures | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Michael Brennan",
    "dob": "01/22/1978",
    "age": 47,
    "sex": "Male",
    "mrn": "RDX-2025-51284",
    "pronouns": "He/Him",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "CVS Pharmacy — 2901 Broward Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "1142 NW 3rd Ave, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-7291",
    "email": "m.brennan78@email.com",
    "emergencyContact": {
      "name": "Sean Brennan (Brother)",
      "phone": "(954) 555-7294"
    }
  },
  "problems": [
    {
      "problem": "Alcohol Use Disorder — Severe",
      "icd": "F10.20",
      "onset": "2010",
      "status": "Active",
      "notes": "Drinks 12-18 beers daily; multiple attempts at sobriety; 3 prior medically supervised detoxes; 2 prior alcohol withdrawal seizures (2019, 2022); 1 episode of DTs (2022)"
    },
    {
      "problem": "Alcohol Withdrawal Seizures — History",
      "icd": "F10.231",
      "onset": "2019",
      "status": "Active",
      "notes": "2 prior episodes (2019, 2022); both GTC; last seizure led to ICU admission for DTs"
    },
    {
      "problem": "Alcoholic Liver Disease",
      "icd": "K70.10",
      "onset": "2020",
      "status": "Active",
      "notes": "Biopsy-confirmed steatohepatitis 2020; no cirrhosis yet; AST/ALT chronically elevated"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2017",
      "status": "Active",
      "notes": "On lisinopril; BP fluctuates with drinking patterns"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2018",
      "status": "Active",
      "notes": "On omeprazole; exacerbated by alcohol use"
    },
    {
      "problem": "Thiamine Deficiency — History",
      "icd": "E51.9",
      "onset": "2022",
      "status": "Active",
      "notes": "Received IV thiamine during prior DTs admission; prescribed oral thiamine but non-adherent"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "04/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily before breakfast",
      "prescriber": "Dr. Whitfield",
      "start": "06/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Thiamine 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "11/2022",
      "refills": 5,
      "status": "Active — PATIENT NON-ADHERENT"
    },
    {
      "name": "Folic Acid 1mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "11/2022",
      "refills": 5,
      "status": "Active — PATIENT NON-ADHERENT"
    },
    {
      "name": "Multivitamin daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Whitfield",
      "start": "01/2023",
      "refills": 0,
      "status": "Active — PATIENT NON-ADHERENT"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2025",
      "bp": "172/108",
      "hr": 118,
      "rr": 22,
      "temp": "100.8°F",
      "spo2": "96%",
      "wt": "172 lbs",
      "ht": "5'10\"",
      "bmi": 24.7,
      "setting": "ED"
    },
    {
      "date": "09/18/2024",
      "bp": "148/92",
      "hr": 86,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "178 lbs",
      "ht": "5'10\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    },
    {
      "date": "03/12/2024",
      "bp": "138/88",
      "hr": 82,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "176 lbs",
      "ht": "5'10\"",
      "bmi": 25.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/18/2024",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Follow-up: alcohol use disorder, hypertension, liver disease",
      "hpi": "47-year-old male with severe AUD presenting for follow-up. Admits to continued drinking — 12-18 beers daily. Has not taken thiamine, folic acid, or multivitamin 'in months.' Denies any period of sobriety since last detox (2022). Denies recent seizures, tremor, or hallucinations. Reports intermittent abdominal pain and poor appetite. Brother brought him today — concerned about worsening drinking pattern.",
      "exam": "General: Thin male, mild diaphoresis, slight hand tremor at rest. HEENT: Mild scleral icterus. CV: Tachycardic, regular. Lungs: CTA. Abdomen: Mild RUQ tenderness, no rebound, liver palpable 2 cm below costal margin. Extremities: Mild bilateral LE edema. Neuro: A&O x3 but tangential speech. Fine bilateral hand tremor. No asterixis. Gait: Mildly unsteady.",
      "assessment": "1. Severe alcohol use disorder — active, heavy daily drinking\n2. Alcoholic liver disease — possible progression; mild icterus, tender hepatomegaly\n3. Hypertension — suboptimally controlled\n4. Non-adherent to thiamine/folic acid supplementation",
      "plan": "1. Labs: CBC, CMP, LFTs, GGT, coagulation studies, lipase\n2. STRONGLY counseled on detox — patient 'not ready yet'\n3. Restarted thiamine 100mg, folic acid 1mg — emphasized importance given seizure history\n4. Provided brother with addiction treatment resources and crisis numbers\n5. CIWA protocol reviewed with patient should he present to ED\n6. RTC 1 month; sooner if willing to enter treatment"
    },
    {
      "id": "V002",
      "date": "11/15/2022",
      "type": "ED",
      "provider": "Dr. Marcus Johnson, MD",
      "cc": "Seizure, confusion, tremor — brought by EMS after roommate called 911",
      "hpi": "45-year-old male (at time of visit) with known severe AUD brought to ED after witnessed GTC seizure at home. Last drink approximately 72 hours ago — ran out of money for alcohol. Roommate reports progressive tremor, agitation, and confusion over past 24 hours. Prior to seizure, patient reportedly was 'seeing bugs on the walls' and talking to people who were not present. Seizure lasted approximately 2 minutes, self-resolved. On EMS arrival: GCS 12 (E3V4M5), diaphoretic, tremulous, tachycardic.",
      "exam": "General: Agitated, confused, diaphoretic. HEENT: Pupils 5mm bilaterally, reactive. CV: Tachycardic 124. Lungs: CTA. Abdomen: Soft, mild tenderness diffusely. Neuro: GCS 14 (improved post-lorazepam). Coarse tremor. Visual hallucinations reported. CIWA score: 24 (severe).",
      "assessment": "1. Alcohol withdrawal seizure — GTC; second lifetime event\n2. Delirium tremens — visual hallucinations, autonomic instability, CIWA 24\n3. Severe AUD",
      "plan": "1. IV lorazepam per CIWA protocol\n2. IV thiamine 500mg x 3 days (Wernicke prophylaxis)\n3. IV fluids — NS with MVI + folate\n4. ICU admission for DTs monitoring\n5. Social work and addiction psychiatry consulted"
    }
  ],
  "labs": [
    {
      "date": "02/24/2025",
      "time": "05:42",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/24/2025 05:28",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-103218",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "68", "unit": "mg/dL", "range": "70-100", "flag": "L" },
            { "test": "BUN", "value": "8", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "134", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "3.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "L" },
            { "test": "Chloride", "value": "96", "unit": "mEq/L", "range": "98-106", "flag": "L" },
            { "test": "CO2 (Bicarbonate)", "value": "20", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "Calcium", "value": "8.2", "unit": "mg/dL", "range": "8.5-10.5", "flag": "L" },
            { "test": "Magnesium", "value": "1.2", "unit": "mg/dL", "range": "1.7-2.2", "flag": "L" },
            { "test": "Phosphorus", "value": "2.0", "unit": "mg/dL", "range": "2.5-4.5", "flag": "L" },
            { "test": "AST (SGOT)", "value": "128", "unit": "U/L", "range": "10-40", "flag": "H" },
            { "test": "ALT (SGPT)", "value": "62", "unit": "U/L", "range": "7-56", "flag": "H" },
            { "test": "Total Bilirubin", "value": "3.2", "unit": "mg/dL", "range": "0.1-1.2", "flag": "H" },
            { "test": "Albumin", "value": "2.8", "unit": "g/dL", "range": "3.5-5.5", "flag": "L" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "12.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "11.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "33.8", "unit": "%", "range": "38.3-48.6", "flag": "L" },
            { "test": "MCV", "value": "108", "unit": "fL", "range": "80-100", "flag": "H" },
            { "test": "Platelets", "value": "98", "unit": "x10³/µL", "range": "150-400", "flag": "L" }
          ]
        },
        {
          "name": "COAGULATION STUDIES",
          "results": [
            { "test": "PT", "value": "16.8", "unit": "sec", "range": "11.0-14.0", "flag": "H" },
            { "test": "INR", "value": "1.4", "unit": "", "range": "0.9-1.1", "flag": "H" },
            { "test": "PTT", "value": "34", "unit": "sec", "range": "25-35", "flag": "" }
          ]
        },
        {
          "name": "ETHANOL AND TOXICOLOGY",
          "results": [
            { "test": "Blood Alcohol Level", "value": "28", "unit": "mg/dL", "range": "0", "flag": "H" },
            { "test": "GGT", "value": "412", "unit": "U/L", "range": "0-65", "flag": "H" }
          ]
        },
        {
          "name": "LACTIC ACID",
          "results": [
            { "test": "Lactate", "value": "4.2", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/24/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-10291",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "47-year-old with witnessed GTC seizure in setting of alcohol withdrawal — r/o intracranial hemorrhage",
      "technique": "Non-contrast axial CT images of the head obtained.",
      "findings": "BRAIN PARENCHYMA: No acute intracranial hemorrhage, mass, or midline shift. Mild generalized cortical atrophy — disproportionate for age, likely related to chronic alcohol use. No acute infarction.\n\nVENTRICLES: Normal size.\n\nEXTRA-AXIAL: No subdural or epidural collection.\n\nBONY STRUCTURES: No fracture. Small scalp hematoma overlying right parietal bone (likely from fall during seizure).",
      "impression": "1. No acute intracranial hemorrhage or structural lesion\n2. Mild generalized cortical atrophy — premature for age, consistent with chronic alcohol use\n3. Small right parietal scalp hematoma (soft tissue only)\n4. Seizure most likely related to alcohol withdrawal — correlate clinically",
      "dictated": "02/24/2025 06:10",
      "verified": "02/24/2025 06:18"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "11/2024", "site": "Left deltoid IM", "lot": "FL842T", "mfr": "GSK" },
    { "vaccine": "Tdap (Adacel)", "date": "03/2021", "site": "Left deltoid IM", "lot": "TA218R", "mfr": "Sanofi" },
    { "vaccine": "Hepatitis A (Havrix) — 1st dose", "date": "03/2021", "site": "Right deltoid IM", "lot": "HA281P", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Mother (age 72): Hypertension, anxiety disorder",
    "Father: Deceased at age 58 — alcohol-related cirrhosis, variceal hemorrhage",
    "Brother (age 50): History of alcohol use disorder — in recovery x 5 years",
    "Paternal uncle: Deceased — alcohol-related liver failure",
    "Strong family history of alcohol use disorder (paternal lineage)"
  ],
  "socialHistory": [
    ["Occupation", "Unemployed — formerly worked in landscaping; lost job due to drinking"],
    ["Marital", "Divorced x 6 years; lives alone in efficiency apartment; brother nearby"],
    ["Tobacco", "1 PPD x 25 years"],
    ["Alcohol", "12-18 beers daily x 15 years; last drink approximately 48 hours ago (stopped when he ran out)"],
    ["Drugs", "Denies current illicit drug use; remote history of cocaine use (stopped 2015)"],
    ["Exercise", "None"],
    ["Housing", "Efficiency apartment — no air conditioning"],
    ["Safety", "History of falls when intoxicated; no firearms"],
    ["Advance Directive", "None"]
  ],
  "meta": {
    "caseId": "alcohol-withdrawal-seizures",
    "diagnosis": "Alcohol Withdrawal Seizure (GTC) — 48 Hours Post-Cessation with High Risk for Delirium Tremens (Prior DTs History, Kindling)",
    "acuity": 2,
    "presentation": "Seizure",
    "category": "toxicologic"
  }
};
