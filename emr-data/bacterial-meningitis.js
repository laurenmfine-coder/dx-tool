// Virtual EMR Case: Bacterial Meningitis
// Variant: bacterial-meningitis | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Anthony Delgado",
    "dob": "08/22/2004",
    "age": 20,
    "sex": "Male",
    "mrn": "NSU-2025-84512",
    "pronouns": "He/Him",
    "insurance": "Cigna PPO (parent plan)",
    "pcp": "Dr. Samuel Rivera, MD",
    "pharmacy": "CVS Pharmacy — 3050 University Dr, Davie, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "7810 SW 39th St, Davie, FL 33328",
    "phone": "(954) 555-6148",
    "email": "a.delgado04@email.com",
    "emergencyContact": {
      "name": "Maria Delgado (Mother)",
      "phone": "(954) 555-6160"
    }
  },
  "problems": [
    {
      "problem": "Allergic Rhinitis — Perennial",
      "icd": "J30.89",
      "onset": "2010",
      "status": "Active",
      "notes": "Managed with intranasal fluticasone PRN"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone Propionate 50mcg nasal spray BID PRN",
      "sig": "Spray 2 sprays in each nostril once or twice daily as needed for nasal congestion",
      "prescriber": "Dr. Rivera",
      "start": "09/2022",
      "refills": 3,
      "status": "PRN"
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
      "date": "08/12/2024",
      "bp": "118/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "170 lbs",
      "ht": "5'10\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2024",
      "bp": "116/70",
      "hr": 66,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "168 lbs",
      "ht": "5'10\"",
      "bmi": 24.1,
      "setting": "Student Health"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2024",
      "type": "Student Health",
      "provider": "Dr. Karen Mills, MD",
      "cc": "URI symptoms — sore throat, congestion x 4 days",
      "hpi": "20-year-old male college student presents with 4 days of sore throat, nasal congestion, and mild cough. Low-grade temp 99.5°F at home. Rapid strep negative. No rash, stiff neck, or headache. Roommate had similar symptoms.",
      "exam": "General: NAD. HEENT: Mild pharyngeal erythema without exudate, TMs clear, nasal mucosa edematous. Neck: Supple, no LAD. Lungs: CTAB.",
      "assessment": "1. Viral URI",
      "plan": "1. Supportive care: rest, fluids, acetaminophen PRN\n2. Return if worsening or not improving in 7-10 days"
    },
    {
      "id": "V002",
      "date": "08/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Samuel Rivera, MD",
      "cc": "Pre-semester sports physical",
      "hpi": "20-year-old male for intramural sports clearance. No complaints. Healthy. Lives in dormitory. Immunizations up to date including meningococcal ACWY (2022). No meningococcal B vaccine received — discussed and declined by patient at that time.",
      "exam": "General: Athletic male, NAD. CV: RRR, no murmurs. Lungs: CTAB. MSK: Full ROM. Neuro: A&O x3, intact.",
      "assessment": "1. Sports clearance — healthy\n2. Meningococcal B vaccine — discussed again; patient deferred",
      "plan": "1. Cleared for sports\n2. Strongly recommended MenB vaccine — dormitory living is a risk factor\n3. RTC PRN"
    }
  ],
  "labs": [
    {
      "date": "08/12/2024",
      "time": "10:00",
      "orderedBy": "Dr. Samuel Rivera, MD",
      "collected": "08/12/2024 09:30",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2024-081218",
      "status": "Final",
      "specimenType": "Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.4", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.2", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "248", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "09/2022",
      "site": "Left deltoid IM",
      "lot": "MN22-412",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-255",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/18/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-680",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
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
    },
    {
      "vaccine": "MMR (2/2)",
      "date": "2009",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Asthma, alive at 48",
    "Father: HTN, T2DM, alive at 52",
    "Sister: Healthy, age 16",
    "No family history of immunodeficiency"
  ],
  "socialHistory": [
    ["Occupation", "College student (junior) — lives in dormitory"],
    ["Marital", "Single"],
    ["Tobacco", "Denies"],
    ["Alcohol", "Social, weekends; binge drinking occasionally at parties"],
    ["Drugs", "Marijuana — occasional"],
    ["Exercise", "Intramural soccer and basketball; gym 4x/week"],
    ["Housing", "University dormitory — shared room with 1 roommate"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "bacterial-meningitis",
    "diagnosis": "Acute Bacterial Meningitis (Neisseria meningitidis Serogroup B)",
    "acuity": 1,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  }
};
