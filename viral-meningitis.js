// Virtual EMR Case: Viral Meningitis
// Variant: viral-meningitis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Aiden Kowalski",
  "patientHPI": "I'm here for my regular check-up before the fall semester starts - I've been doing really well in school and my ADHD medication is working great with no problems or side effects.",
    "dob": "08/15/2003",
    "age": 21,
    "sex": "Male",
    "mrn": "RDX-2025-84305",
    "pronouns": "He/Him",
    "insurance": "Humana (parent plan)",
    "pcp": "Dr. Sarah Kim, MD",
    "pharmacy": "Publix Pharmacy — 2001 N University Dr, Sunrise, FL",
    "language": "English",
    "race": "White",
    "address": "1135 N Kedzie Blvd, Richmond, VA 23225",
    "phone": "(954) 555-1294",
    "email": "a.kowalski03@email.com",
    "emergencyContact": {
      "name": "Karen Kowalski (Mother)",
      "phone": "(954) 555-1310"
    }
  },
  "problems": [
    {
      "problem": "Attention Deficit Hyperactivity Disorder — Inattentive Type",
      "icd": "F90.0",
      "onset": "2014",
      "status": "Active",
      "notes": "Diagnosed in childhood; managed with stimulant medication"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2016",
      "status": "Chronic",
      "notes": "Managed with loratadine PRN"
    }
  ],
  "medications": [
    {
      "name": "Lisdexamfetamine (Vyvanse) 40mg daily",
      "sig": "Take 1 capsule by mouth daily in the morning",
      "prescriber": "Dr. Kim",
      "start": "08/2020",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Loratadine 10mg daily",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Kim",
      "start": "03/2018",
      "refills": 5,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Amoxicillin",
      "type": "Drug",
      "reaction": "Diffuse morbilliform rash at age 8",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "09/18/2024",
      "bp": "118/72",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "165 lbs",
      "ht": "5'11\"",
      "bmi": 23.0,
      "setting": "PCP Office"
    },
    {
      "date": "03/12/2024",
      "bp": "116/70",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "162 lbs",
      "ht": "5'11\"",
      "bmi": 22.6,
      "setting": "PCP Office"
    },
    {
      "date": "09/06/2023",
      "bp": "114/68",
      "hr": 68,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "160 lbs",
      "ht": "5'11\"",
      "bmi": 22.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Sarah Kim, MD",
      "cc": "ADHD medication refill, pre-semester check-in",
      "hpi": "21-year-old college junior for routine visit before fall semester. ADHD stable on Vyvanse 40mg; good academic performance. No side effects. Denies chest pain, palpitations, weight loss, or sleep disturbance. Lives in university dorm. Up to date on meningococcal vaccine (MenACWY booster given at 16). Notes recent cold that resolved. Sexually active with one partner; uses condoms.",
      "exam": "General: NAD, well-appearing young male. HEENT: WNL. Neck: Supple, no LAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. Neuro: A&O x3, normal mood and affect. Skin: No rashes.",
      "assessment": "1. ADHD — stable on current medication\n2. Annual wellness — healthy college student\n3. Immunizations reviewed — up to date",
      "plan": "1. Continue Vyvanse 40mg; 90-day Rx\n2. STI screening offered; patient deferred\n3. RTC 6 months or PRN"
    },
    {
      "id": "V002",
      "date": "03/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Sarah Kim, MD",
      "cc": "Sore throat and fatigue x 5 days",
      "hpi": "21-year-old male presents with sore throat, low-grade fever, and fatigue x 5 days. Several dormmates have had similar symptoms. Rapid strep negative. No rash, joint pain, or adenopathy. Symptoms improving.",
      "exam": "General: NAD, mildly fatigued. HEENT: Oropharynx mildly erythematous, no exudate, no tonsillar enlargement. Neck: Small bilateral anterior cervical nodes, non-tender. Lungs: CTAB.",
      "assessment": "1. Viral pharyngitis — likely enteroviral or adenoviral given dorm setting\n2. Rapid strep negative",
      "plan": "1. Supportive care: hydration, rest, acetaminophen PRN\n2. Return if worsening, high fever, rash, or difficulty swallowing"
    }
  ],
  "labs": [
    {
      "date": "09/18/2024",
      "time": "10:00",
      "orderedBy": "Dr. Sarah Kim, MD",
      "collected": "09/18/2024 09:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-091820",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.0", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "225", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "90", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "141", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.3", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-305",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-801",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra) — booster",
      "date": "08/2019",
      "site": "Left deltoid IM",
      "lot": "MN19-442",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Meningococcal B (Bexsero) — 2/2",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "MB21-108",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Migraine, anxiety disorder, alive at 50",
    "Father: HTN, ADHD, alive at 52",
    "Sister: ADHD, age 18",
    "Paternal grandfather: T2DM, deceased at 74"
  ],
  "socialHistory": [
    ["Occupation", "College student (junior, biology major)"],
    ["Marital", "Single; in relationship"],
    ["Tobacco", "Never smoker; occasional vaping (social)"],
    ["Alcohol", "Social, 3-5 drinks on weekends"],
    ["Drugs", "Denies illicit use; no marijuana"],
    ["Exercise", "Intramural soccer 2x/week; gym 3x/week"],
    ["Housing", "University dormitory; shared room"],
    ["Safety", "Denies firearms; seatbelt; helmet for cycling"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "viral-meningitis",
    "diagnosis": "Viral (Enteroviral) Meningitis",
    "acuity": 3,
    "presentation": "Headache",
    "category": "neurologic"
  }
};
