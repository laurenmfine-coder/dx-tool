// Virtual EMR Case: Acute Cholecystitis
// Variant: acute-cholecystitis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Maria Elena Gutierrez",
    "dob": "03/22/1980",
    "age": 44,
    "sex": "Female",
    "mrn": "RDX-2025-24618",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Rosa Delgado, MD",
    "pharmacy": "CVS Pharmacy — 2200 S University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "3920 SW 52nd Ave, Riverside, FL 33100",
    "phone": "(954) 555-3184",
    "email": "m.gutierrez80@email.com",
    "emergencyContact": {
      "name": "Roberto Gutierrez (Husband)",
      "phone": "(954) 555-3200"
    }
  },
  "problems": [
    {
      "problem": "Cholelithiasis",
      "icd": "K80.20",
      "onset": "2023",
      "status": "Active",
      "notes": "Multiple gallstones on US; asymptomatic initially; declined elective cholecystectomy"
    },
    {
      "problem": "Obesity, Class I",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "BMI 32; dietary counseling"
    },
    {
      "problem": "Dyslipidemia",
      "icd": "E78.5",
      "onset": "2020",
      "status": "Active",
      "notes": "Elevated LDL; on statin"
    },
    {
      "problem": "Oral Contraceptive Use",
      "icd": "Z79.3",
      "onset": "2016",
      "status": "Active",
      "notes": "Combined OCP; risk factor for gallstones"
    },
    {
      "problem": "Biliary Colic, Recurrent",
      "icd": "K80.20",
      "onset": "2024",
      "status": "Active",
      "notes": "3 episodes postprandial RUQ pain in past 6 months; self-limited; surgery again recommended"
    }
  ],
  "medications": [
    {
      "name": "Atorvastatin 20mg daily",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Delgado",
      "start": "06/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Norgestimate-Ethinyl Estradiol 0.25mg/35mcg daily",
      "sig": "Take 1 tablet by mouth daily at same time each day",
      "prescriber": "Dr. Delgado",
      "start": "01/2016",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 600mg PRN",
      "sig": "Take 1 tablet by mouth every 6-8 hours as needed for pain with food",
      "prescriber": "Dr. Delgado",
      "start": "09/2024",
      "refills": 1,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Hives",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/10/2025",
      "bp": "132/84",
      "hr": 88,
      "rr": 16,
      "temp": "99.2°F",
      "spo2": "98%",
      "wt": "186 lbs",
      "ht": "5'5\"",
      "bmi": 30.9,
      "setting": "PCP Office"
    },
    {
      "date": "07/18/2024",
      "bp": "126/80",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "184 lbs",
      "ht": "5'5\"",
      "bmi": 30.6,
      "setting": "PCP Office"
    },
    {
      "date": "01/22/2024",
      "bp": "124/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "182 lbs",
      "ht": "5'5\"",
      "bmi": 30.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Rosa Delgado, MD",
      "cc": "Follow-up biliary colic; third episode in 6 months",
      "hpi": "44-year-old female with known cholelithiasis presenting after third episode of postprandial RUQ pain in 6 months. Most recent episode 3 days ago — severe crampy pain after eating fried food, lasted 4 hours, associated with nausea and one episode of vomiting. Pain radiated to right scapula. Resolved spontaneously. Previous episodes similarly self-limited. Initially declined surgery due to work schedule concerns but now willing to consider.",
      "exam": "General: NAD currently. Abdomen: Soft, mild RUQ tenderness on deep palpation, no rebound, no guarding. Positive Murphy sign on deep inspiration. No jaundice. No palpable masses.",
      "assessment": "1. Recurrent biliary colic — increasing frequency; positive Murphy sign; high risk for progression to acute cholecystitis\n2. Cholelithiasis — symptomatic\n3. Obesity — risk factor",
      "plan": "1. URGENT surgical referral for elective laparoscopic cholecystectomy\n2. Dietary modification: low-fat diet strictly until surgery\n3. ED precautions: fever >101°F, persistent pain >6 hours, jaundice → ED immediately\n4. CBC, CMP, lipase ordered to establish baseline\n5. Patient agrees to surgical consultation — appointment pending"
    },
    {
      "id": "V002",
      "date": "07/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Rosa Delgado, MD",
      "cc": "RUQ pain episodes; medication refills",
      "hpi": "44-year-old female with known asymptomatic cholelithiasis now reporting 2 episodes of postprandial RUQ pain in past 2 months. Each lasted 2-3 hours and resolved. Triggered by fatty meals. No fever, no jaundice. Discussed surgical options — patient prefers conservative management at this time.",
      "exam": "Abdomen: Soft, NT currently, no guarding. No jaundice.",
      "assessment": "1. Biliary colic — new onset symptomatic cholelithiasis\n2. Dyslipidemia — stable",
      "plan": "1. Low-fat dietary counseling\n2. Surgical referral offered — patient declines at this time\n3. Return precautions for cholecystitis/cholangitis reviewed\n4. Continue atorvastatin"
    },
    {
      "id": "V003",
      "date": "09/12/2023",
      "type": "Primary Care",
      "provider": "Dr. Rosa Delgado, MD",
      "cc": "Annual physical; ultrasound results review",
      "hpi": "43-year-old female for annual exam. Incidental finding of cholelithiasis on RUQ ultrasound ordered for mild dyspepsia. No biliary symptoms at that time. Multiple gallstones identified. Asymptomatic.",
      "exam": "General: NAD. Abdomen: Soft, NT, no organomegaly.",
      "assessment": "1. Incidental cholelithiasis — asymptomatic\n2. Obesity — stable\n3. Dyslipidemia — controlled on statin",
      "plan": "1. Watchful waiting for asymptomatic gallstones\n2. Low-fat diet recommended\n3. Elective cholecystectomy discussed as option — patient declines\n4. Continue atorvastatin"
    }
  ],
  "labs": [
    {
      "date": "01/10/2025",
      "time": "10:00",
      "orderedBy": "Dr. Rosa Delgado, MD",
      "collected": "01/10/2025 09:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-246180",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "94", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.6-1.2", "flag": "" },
            { "test": "Sodium", "value": "139", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.8", "unit": "mg/dL", "range": "0.1-1.2", "flag": "" },
            { "test": "ALT (SGPT)", "value": "28", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "24", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Alkaline Phosphatase", "value": "72", "unit": "U/L", "range": "44-147", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.4", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "40.2", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "268", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPASE",
          "results": [
            { "test": "Lipase", "value": "32", "unit": "U/L", "range": "0-160", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "08/28/2023",
      "study": "ULTRASOUND RIGHT UPPER QUADRANT",
      "accession": "IMG-2023-24618",
      "status": "FINAL",
      "orderedBy": "Dr. Rosa Delgado, MD",
      "readBy": "Dr. Lisa Nakamura, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "43F with dyspepsia. R/O gallbladder pathology.",
      "technique": "Real-time grayscale and color Doppler sonography of the right upper quadrant.",
      "findings": "Gallbladder: Multiple echogenic foci with posterior acoustic shadowing consistent with cholelithiasis. Largest stone measures approximately 1.2 cm. No gallbladder wall thickening (wall measures 2 mm). No pericholecystic fluid. No sonographic Murphy sign.\\n\\nCommon bile duct: 4 mm — normal caliber. No intrahepatic biliary ductal dilatation.\\n\\nLiver: Normal echogenicity and size. No focal lesions.\\n\\nRight kidney: Normal.",
      "impression": "1. Cholelithiasis — multiple gallstones, largest 1.2 cm.\\n2. No signs of acute cholecystitis (no wall thickening, no pericholecystic fluid, negative sonographic Murphy sign).\\n3. Normal common bile duct caliber.",
      "dictated": "08/28/2023 14:00",
      "verified": "08/28/2023 16:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-302",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-812",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis B — Series complete",
      "date": "1998",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Cholelithiasis (cholecystectomy age 48), T2DM, alive at 68",
    "Father: Hypertension, hyperlipidemia, alive at 70",
    "Sister: Gallstones (cholecystectomy age 40), alive at 46",
    "Maternal grandmother: Gallbladder cancer, deceased at 72"
  ],
  "socialHistory": [
    ["Occupation", "Office manager at law firm"],
    ["Marital", "Married — 18 years"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 1-2 glasses wine on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Walks 2-3x/week; trying to lose weight"],
    ["Housing", "Lives with husband and 2 teenage children in single-family home"],
    ["Safety", "Wears seatbelt; no IPV concerns"],
    ["Advance Directive", "None"]
  ],
  "meta": {
    "caseId": "acute-cholecystitis",
    "diagnosis": "Acute Cholecystitis",
    "acuity": 3,
    "presentation": "GI Emergency",
    "category": "gastrointestinal"
  }
};
