// Virtual EMR Case: Acute Cholecystitis with Choledocholithiasis
// Variant: cholelithiasis-cholecystitis | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Natasha Pierre-Louis",
    "dob": "08/06/1982",
    "age": 43,
    "sex": "Female",
    "mrn": "NSU-2025-43344",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield HMO",
    "pcp": "Dr. Renee Augustin, MD",
    "pharmacy": "Publix Pharmacy — 2200 S University Dr, Davie, FL",
    "language": "English, Haitian Creole",
    "race": "Black (Haitian American)",
    "address": "3640 N 29th Ter, Hollywood, FL 33020",
    "phone": "(954) 555-8214",
    "email": "n.pierrelouis82@email.com",
    "emergencyContact": {
      "name": "Jean-Pierre Louis (Husband)",
      "phone": "(954) 555-8228"
    }
  },
  "problems": [
    {
      "problem": "Cholelithiasis — Known",
      "icd": "K80.20",
      "onset": "2024",
      "status": "Active",
      "notes": "Incidental finding on RUQ US (08/2024) for RUQ discomfort; multiple gallstones without cholecystitis at that time; elective cholecystectomy discussed — patient deferred surgery"
    },
    {
      "problem": "Obesity, BMI 36.8",
      "icd": "E66.01",
      "onset": "2014",
      "status": "Active",
      "notes": "Class II obesity; weight gain since second pregnancy"
    },
    {
      "problem": "Sickle Cell Trait",
      "icd": "D57.3",
      "onset": "Birth",
      "status": "Active",
      "notes": "Hemoglobin AS; contributes to pigmented gallstone risk; otherwise asymptomatic"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2020",
      "status": "Active",
      "notes": "On amlodipine; controlled"
    },
    {
      "problem": "Prior Episodes of Biliary Colic",
      "icd": "K80.20",
      "onset": "2024",
      "status": "Active",
      "notes": "3 episodes of postprandial RUQ pain in past year — lasted 30-60 min, self-resolved; no fever or jaundice with prior episodes; increasingly frequent"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Augustin",
      "start": "06/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Augustin",
      "start": "08/2024",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth once daily before breakfast",
      "prescriber": "Dr. Augustin",
      "start": "09/2024",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Erythromycin",
      "type": "Drug",
      "reaction": "Severe abdominal cramping, nausea, vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2026",
      "bp": "148/92",
      "hr": 104,
      "rr": 20,
      "temp": "102.4°F",
      "spo2": "97%",
      "wt": "214 lbs",
      "ht": "5'5\"",
      "bmi": 35.6,
      "setting": "ED"
    },
    {
      "date": "08/18/2024",
      "bp": "132/84",
      "hr": 78,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "218 lbs",
      "ht": "5'5\"",
      "bmi": 36.3,
      "setting": "PCP Office"
    },
    {
      "date": "03/10/2024",
      "bp": "128/82",
      "hr": 74,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "220 lbs",
      "ht": "5'5\"",
      "bmi": 36.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "RUQ pain — recurrent; ultrasound results review",
      "hpi": "42F with obesity presents for recurrent RUQ pain. Has had 3 episodes of postprandial RUQ pain over past 4 months — each after fatty meals, lasting 30-60 minutes, radiating to right scapula, associated with nausea. Self-resolves. No fever, no jaundice. US (08/2024) shows multiple gallstones. Surgery consult placed. Sickle cell trait — contributes to pigmented stone risk.",
      "exam": "Obese female, NAD. Abdomen: Soft, mild RUQ tenderness to deep palpation; no rebound or guarding; negative Murphy sign. No jaundice.",
      "assessment": "1. Symptomatic cholelithiasis — recurrent biliary colic\n2. Sickle cell trait — pigmented stone predisposition\n3. Elective cholecystectomy indicated",
      "plan": "1. General surgery referral for elective laparoscopic cholecystectomy\n2. Low-fat diet counseling\n3. Omeprazole 20mg daily for concomitant dyspepsia\n4. Acetaminophen PRN for pain (avoid NSAIDs — surgical planning)\n5. Return if fevers, persistent pain >6 hours, jaundice, or vomiting"
    },
    {
      "id": "V002",
      "date": "03/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "RUQ discomfort — new",
      "hpi": "42F with obesity presents with 2-week history of intermittent RUQ discomfort after meals, especially after fried food. Describes 'crampy' feeling that lasts 20-30 minutes. No fevers, no jaundice. No change in stool color. First episode like this.",
      "exam": "Obese female, NAD. Abdomen: Soft, nontender today. No Murphy sign.",
      "assessment": "1. Dyspepsia vs early biliary colic\n2. Sickle cell trait — gallstone risk factor",
      "plan": "1. RUQ ultrasound ordered\n2. Low-fat diet trial\n3. Return after US results"
    }
  ],
  "labs": [
    {
      "date": "08/18/2024",
      "time": "10:00",
      "orderedBy": "Dr. Augustin",
      "collected": "08/18/2024 10:15",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2024-800818",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "HEPATIC PANEL",
          "results": [
            { "test": "ALT", "value": "28", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST", "value": "24", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "ALP", "value": "82", "unit": "U/L", "range": "44-147", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.8", "unit": "mg/dL", "range": "0.1-1.2", "flag": "" },
            { "test": "Direct Bilirubin", "value": "0.2", "unit": "mg/dL", "range": "0.0-0.3", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "7.8", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "12.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "38.4", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelets", "value": "264", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "LIPASE",
          "results": [
            { "test": "Lipase", "value": "42", "unit": "U/L", "range": "10-140", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "08/2024",
      "study": "ULTRASOUND ABDOMEN — RIGHT UPPER QUADRANT",
      "accession": "IMG-2024-80814",
      "status": "FINAL",
      "orderedBy": "Dr. Augustin",
      "readBy": "Dr. Patricia Gomez, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "Routine",
      "clinical": "Recurrent RUQ pain — evaluate for cholelithiasis",
      "technique": "Real-time ultrasound of the right upper quadrant.",
      "findings": "Gallbladder: Multiple echogenic foci with posterior acoustic shadowing consistent with cholelithiasis — largest stone measures 1.8 cm. Gallbladder wall thickness 2 mm (normal). No pericholecystic fluid. Negative sonographic Murphy sign.\n\nCommon bile duct: 4 mm (normal).\n\nLiver: Normal echogenicity. No focal lesions.\n\nRight kidney: Normal.",
      "impression": "1. Cholelithiasis — multiple gallstones; largest 1.8 cm.\n2. No sonographic evidence of acute cholecystitis.\n3. Normal caliber common bile duct.",
      "dictated": "08/14/2024 11:00",
      "verified": "08/14/2024 13:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9612", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-2614", "mfr": "Pfizer" },
    { "vaccine": "Tdap", "date": "08/2023", "site": "Left deltoid IM", "lot": "TD23-518", "mfr": "GSK" },
    { "vaccine": "Hepatitis B Series", "date": "2005", "site": "Right deltoid IM", "lot": "HB05-402", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother: Gallstones — cholecystectomy at age 40; HTN; alive at 68",
    "Father: Sickle cell trait; T2DM; alive at 72",
    "Sister: Gallstones; sickle cell trait; alive at 40",
    "Brother: Sickle cell disease (SS); alive at 38 (frequent crises)"
  ],
  "socialHistory": [
    ["Occupation", "Administrative assistant at law firm; full-time, sedentary work"],
    ["Marital", "Married 16 years; 2 children (ages 8 and 11)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Rare — occasional wine at holidays"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 2x/week; limited by knee pain (weight-related)"],
    ["Housing", "Townhouse with husband and children"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "cholelithiasis-cholecystitis",
    "diagnosis": "Acute Calculous Cholecystitis with Choledocholithiasis (CBD Stone with Obstructive Jaundice — Patient Who Deferred Elective Cholecystectomy, Sickle Cell Trait with Pigmented Stones)",
    "acuity": 2,
    "presentation": "Toxicologic Emergency",
    "category": "gastrointestinal"
  }
};
