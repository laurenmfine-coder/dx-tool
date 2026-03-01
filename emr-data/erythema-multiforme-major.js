// Virtual EMR Case: Erythema Multiforme Major
// Variant: erythema-multiforme-major | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Tyler Brennan",
    "dob": "03/11/2001",
    "age": 24,
    "sex": "Male",
    "mrn": "RDX-2025-41348",
    "pronouns": "He/Him",
    "insurance": "United Healthcare (parent plan)",
    "pcp": "Dr. James Weatherly, MD",
    "pharmacy": "CVS Pharmacy — 4401 Sheridan St, Hollywood, FL",
    "language": "English",
    "race": "White",
    "address": "7720 Pines Blvd, Pembroke Pines, FL 33024",
    "phone": "(954) 555-9024",
    "email": "t.brennan01@email.com",
    "emergencyContact": {
      "name": "Diane Brennan (Mother)",
      "phone": "(954) 555-9040"
    }
  },
  "problems": [
    {
      "problem": "Recurrent Herpes Labialis (HSV-1)",
      "icd": "B00.1",
      "onset": "2016",
      "status": "Active",
      "notes": "3-4 outbreaks per year; typically triggered by sun exposure and stress; uses valacyclovir episodically — not on suppressive therapy"
    },
    {
      "problem": "Allergic Rhinitis — Perennial",
      "icd": "J30.89",
      "onset": "2014",
      "status": "Active",
      "notes": "On loratadine PRN"
    },
    {
      "problem": "Prior Episode of Erythema Multiforme Minor (2023)",
      "icd": "L51.0",
      "onset": "2023",
      "status": "Resolved",
      "notes": "Target lesions on hands/feet following HSV outbreak; self-resolved in 2 weeks; not evaluated by dermatology at that time"
    }
  ],
  "medications": [
    {
      "name": "Valacyclovir 1000mg BID x 3 days (episodic)",
      "sig": "Take 1 tablet by mouth twice daily for 3 days at first sign of cold sore",
      "prescriber": "Dr. Weatherly",
      "start": "06/2020",
      "refills": 5,
      "status": "PRN"
    },
    {
      "name": "Loratadine 10mg PRN",
      "sig": "Take 1 tablet by mouth daily as needed for allergy symptoms",
      "prescriber": "Dr. Weatherly",
      "start": "04/2016",
      "refills": 5,
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
      "date": "02/20/2026",
      "bp": "124/78",
      "hr": 92,
      "rr": 18,
      "temp": "100.6°F",
      "spo2": "98%",
      "wt": "172 lbs",
      "ht": "5'10\"",
      "bmi": 24.7,
      "setting": "ED"
    },
    {
      "date": "08/10/2025",
      "bp": "118/72",
      "hr": 68,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "174 lbs",
      "ht": "5'10\"",
      "bmi": 25.0,
      "setting": "PCP Office"
    },
    {
      "date": "02/14/2025",
      "bp": "116/70",
      "hr": 72,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "170 lbs",
      "ht": "5'10\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/10/2025",
      "type": "Primary Care",
      "provider": "Dr. James Weatherly, MD",
      "cc": "Cold sore outbreak, refill valacyclovir",
      "hpi": "24M with recurrent HSV-1 presents with current cold sore outbreak x 2 days — typical prodrome of tingling then vesicles on lower lip. Reports 3 outbreaks so far this year, usually triggered by sun exposure (beach trip this past weekend). Uses episodic valacyclovir. No genital lesions. Denies rash elsewhere.",
      "exam": "NAD. Oral: Cluster of vesicles on vermillion border of lower lip, left side, consistent with herpes labialis. No oral mucosal lesions. Skin: No target lesions, no rash.",
      "assessment": "1. Herpes labialis — recurrent, HSV-1; 3 outbreaks in 2025\n2. Discussed suppressive therapy given frequency — patient deferred, prefers episodic",
      "plan": "1. Valacyclovir 1g BID x 3 days\n2. Discussed suppressive therapy (500mg daily) — patient will consider\n3. Sun protection counseling — lip balm with SPF\n4. Return if lesions spread or systemic symptoms develop"
    },
    {
      "id": "V002",
      "date": "04/2023",
      "type": "Urgent Care",
      "provider": "Dr. Kevin Park, DO",
      "cc": "Rash on hands and feet after cold sore",
      "hpi": "22M presents with 3-day rash — red circles with target appearance on palms, soles, and dorsal hands. Had cold sore that started 10 days ago, now resolving. No oral lesions. No fevers. No joint pain. No new medications.",
      "exam": "Skin: Classic target lesions (3-zone pattern) on bilateral palms, soles, dorsal hands/feet. ~20 lesions total. No mucosal involvement. No blisters.",
      "assessment": "1. Erythema multiforme minor — HSV-associated",
      "plan": "1. Supportive care\n2. Discussed link to HSV outbreaks\n3. Follow-up with PCP to discuss suppressive antiviral therapy\n4. Return if oral involvement or worsening"
    }
  ],
  "labs": [
    {
      "date": "08/10/2025",
      "time": "10:30",
      "orderedBy": "Dr. Weatherly",
      "collected": "08/10/2025 10:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-801040",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "7.4", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.6", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelets", "value": "242", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "12", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "141", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "11/2025", "site": "Left deltoid IM", "lot": "FL25-9018", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-1910", "mfr": "Pfizer" },
    { "vaccine": "Tdap", "date": "08/2021", "site": "Left deltoid IM", "lot": "TD21-504", "mfr": "GSK" },
    { "vaccine": "HPV (Gardasil 9) — Series Complete", "date": "2017", "site": "Left deltoid IM", "lot": "HP17-308", "mfr": "Merck" },
    { "vaccine": "Meningococcal ACWY", "date": "2019", "site": "Right deltoid IM", "lot": "MN19-220", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Father: Psoriasis, hypertension, alive at 56",
    "Mother: Healthy, alive at 54",
    "Brother: Eczema, alive at 22",
    "Maternal aunt: Autoimmune hepatitis"
  ],
  "socialHistory": [
    ["Occupation", "Graduate student (MPH program at State University); part-time research assistant"],
    ["Marital", "Single; lives with 2 roommates"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 3-4 drinks on weekends"],
    ["Drugs", "Occasional marijuana; denies other substances"],
    ["Exercise", "Running 4x/week; recreational basketball"],
    ["Housing", "Apartment in Pembroke Pines; shared with roommates"],
    ["Safety", "Denies IPV; seatbelt; helmet when cycling; no firearms"],
    ["Advance Directive", "None — not discussed (age 24)"]
  ],
  "meta": {
    "caseId": "erythema-multiforme-major",
    "diagnosis": "Erythema Multiforme Major (HSV-Associated with Mucosal Involvement — Oral Erosions, Target Lesions, Recurrent Episode in Patient with Frequent HSV-1 Outbreaks)",
    "acuity": 3,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "dermatologic"
  }
};
