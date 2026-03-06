// Virtual EMR Case: Acute Viral Hepatitis (Hepatitis A — Foodborne Outbreak)
// Variant: acute-viral-hepatitis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Rafael Guzmán",
  "patientHPI": "I'm here for my regular checkup - I've been working hard on eating better and getting to the gym more often, and I'm down four pounds since my last visit. The medication you gave me for my blood sugar isn't bothering my stomach anymore, which is great.",
    "dob": "04/18/1990",
    "age": 35,
    "sex": "Male",
    "mrn": "RDX-2025-43112",
    "pronouns": "He/Him",
    "insurance": "Aetna PPO (employer)",
    "pcp": "Dr. Patricia Morales, MD",
    "pharmacy": "CVS Pharmacy — 3201 N University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Mexican American)",
    "address": "7951 N Western Ave, Pittsburgh, PA 15210",
    "phone": "(954) 555-3318",
    "email": "r.guzman90@email.com",
    "emergencyContact": {
      "name": "Maria Guzmán (Wife)",
      "phone": "(954) 555-3334"
    }
  },
  "problems": [
    {
      "problem": "Obesity, BMI 32.4",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "Class I obesity"
    },
    {
      "problem": "Nonalcoholic Fatty Liver Disease (NAFLD)",
      "icd": "K76.0",
      "onset": "2023",
      "status": "Active",
      "notes": "Hepatic steatosis on US (2023); mildly elevated ALT baseline 48-55; advised weight loss and dietary changes"
    },
    {
      "problem": "Prediabetes",
      "icd": "R73.03",
      "onset": "2024",
      "status": "Active",
      "notes": "A1c 6.0; on metformin 500mg BID for insulin resistance and NAFLD benefit"
    }
  ],
  "medications": [
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Morales",
      "start": "03/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Vitamin D3 2000 IU daily",
      "sig": "Take 1 capsule by mouth once daily",
      "prescriber": "Dr. Morales",
      "start": "06/2023",
      "refills": 11,
      "status": "Active"
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
      "date": "02/22/2026",
      "bp": "118/74",
      "hr": 88,
      "rr": 18,
      "temp": "101.2°F",
      "spo2": "98%",
      "wt": "208 lbs",
      "ht": "5'9\"",
      "bmi": 30.7,
      "setting": "ED"
    },
    {
      "date": "08/14/2025",
      "bp": "126/82",
      "hr": 74,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "216 lbs",
      "ht": "5'9\"",
      "bmi": 31.9,
      "setting": "PCP Office"
    },
    {
      "date": "03/10/2025",
      "bp": "128/80",
      "hr": 72,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "220 lbs",
      "ht": "5'9\"",
      "bmi": 32.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/14/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Morales, MD",
      "cc": "Follow-up NAFLD, prediabetes, weight management",
      "hpi": "35M with NAFLD and prediabetes presents for 6-month follow-up. Weight down 4 lbs (220 to 216). A1c 6.0 — stable. ALT 52 (baseline elevated). Metformin tolerated without GI side effects. Reports trying to exercise more and reduce refined carbohydrates. No abdominal pain, jaundice, or GI symptoms.",
      "exam": "Obese male, NAD. Abdomen: Soft, obese, no hepatomegaly on exam, NT. Skin: No jaundice, no spider angiomata.",
      "assessment": "1. NAFLD — stable; ALT mildly elevated at baseline\n2. Prediabetes — A1c 6.0, stable on metformin\n3. Obesity — slight improvement, continue lifestyle modifications",
      "plan": "1. Continue metformin 500mg BID\n2. Repeat hepatic panel in 6 months\n3. FibroScan if ALT trends up\n4. Nutritional counseling referral\n5. Hepatitis A vaccination discussed — patient will schedule (NOT yet received)\n6. Return 6 months"
    },
    {
      "id": "V002",
      "date": "03/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Morales, MD",
      "cc": "Routine follow-up, labs review",
      "hpi": "34M presents for routine follow-up. Labs from 02/2025: A1c 6.1, ALT 55, AST 38, lipid panel with TG 198. Weight 220. No complaints.",
      "exam": "Obese male. Abdomen: Soft, NT. Skin: No jaundice.",
      "assessment": "1. NAFLD — ALT stable at baseline elevation\n2. Prediabetes — A1c 6.1\n3. Hypertriglyceridemia",
      "plan": "1. Continue metformin\n2. Dietary counseling for TG reduction\n3. Return 6 months"
    }
  ],
  "labs": [
    {
      "date": "08/14/2025",
      "time": "09:00",
      "orderedBy": "Dr. Morales",
      "collected": "08/14/2025 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-800814",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "HEPATIC PANEL",
          "results": [
            { "test": "ALT", "value": "52", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST", "value": "36", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "ALP", "value": "78", "unit": "U/L", "range": "44-147", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.8", "unit": "mg/dL", "range": "0.1-1.2", "flag": "" },
            { "test": "Direct Bilirubin", "value": "0.2", "unit": "mg/dL", "range": "0.0-0.3", "flag": "" },
            { "test": "Albumin", "value": "4.2", "unit": "g/dL", "range": "3.5-5.5", "flag": "" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            { "test": "HbA1c", "value": "6.0", "unit": "%", "range": "<5.7", "flag": "H" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "210", "unit": "mg/dL", "range": "<200", "flag": "H" },
            { "test": "LDL", "value": "128", "unit": "mg/dL", "range": "<100", "flag": "H" },
            { "test": "HDL", "value": "38", "unit": "mg/dL", "range": ">40", "flag": "L" },
            { "test": "Triglycerides", "value": "188", "unit": "mg/dL", "range": "<150", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2023",
      "study": "ULTRASOUND ABDOMEN — RIGHT UPPER QUADRANT",
      "accession": "IMG-2023-40418",
      "status": "FINAL",
      "orderedBy": "Dr. Morales",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Elevated ALT — evaluate liver",
      "technique": "Real-time ultrasound of the right upper quadrant and liver.",
      "findings": "Liver: Diffusely hyperechoic parenchyma consistent with hepatic steatosis (moderate). Smooth hepatic contour. No focal hepatic lesions. Liver size: 17.2 cm (mildly enlarged).\n\nGallbladder: Normal wall thickness. No gallstones. No pericholecystic fluid. Murphy sign not assessed (not in acute setting).\n\nCommon bile duct: 4 mm (normal).\n\nPortal vein: Patent with normal hepatopetal flow.\n\nRight kidney: Normal.",
      "impression": "1. Moderate hepatic steatosis consistent with NAFLD.\n2. Mild hepatomegaly (17.2 cm).\n3. No focal hepatic lesion.\n4. Normal gallbladder.",
      "dictated": "04/18/2023 14:00",
      "verified": "04/18/2023 16:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9408", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV25-2410", "mfr": "Moderna" },
    { "vaccine": "Tdap", "date": "08/2022", "site": "Left deltoid IM", "lot": "TD22-522", "mfr": "GSK" },
    { "vaccine": "Hepatitis B Series", "date": "2008", "site": "Right deltoid IM", "lot": "HB08-220", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Father: T2DM, NAFLD → NASH cirrhosis (diagnosed age 58), alive at 66",
    "Mother: Obesity, HTN, alive at 64",
    "Brother: Healthy, alive at 32",
    "Sister: PCOS, obesity, alive at 30"
  ],
  "socialHistory": [
    ["Occupation", "Restaurant line cook at seafood restaurant in Hollywood; handles raw shellfish regularly"],
    ["Marital", "Married 8 years; 2 children (ages 4 and 6)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "2-3 beers on weekends; stopped for weight loss attempt"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 30 min 3x/week; recently started"],
    ["Housing", "Apartment with wife and children"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "acute-viral-hepatitis",
    "diagnosis": "Acute Hepatitis A (Foodborne — Occupational Shellfish Exposure in Unvaccinated Patient with Baseline NAFLD, Presenting with Jaundice, Transaminitis >2000, and Coagulopathy)",
    "acuity": 3,
    "presentation": "Toxicologic Emergency",
    "category": "gastrointestinal"
  }
};
