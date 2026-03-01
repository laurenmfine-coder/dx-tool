// Virtual EMR Case: Vascular Injury with Limb Ischemia
// Variant: vascular-injury-with-limb-ischemia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Andre Jackson",
    "dob": "12/03/1988",
    "age": 36,
    "sex": "Male",
    "mrn": "RDX-2025-63417",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Karen Mitchell, MD",
    "pharmacy": "Walgreens — 1200 W Sunrise Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "3450 NW 19th St, Fort Lauderdale, FL 33311",
    "phone": "(954) 555-5183",
    "email": "a.jackson88@email.com",
    "emergencyContact": {
      "name": "Tanya Jackson (Wife)",
      "phone": "(954) 555-5200"
    }
  },
  "problems": [
    {
      "problem": "Left Supracondylar Femur Fracture — Acute, Post-MVC",
      "icd": "S72.402A",
      "onset": "01/2025",
      "status": "Active",
      "notes": "Sustained in high-speed MVC 01/25/2025; comminuted distal femur fracture with posterior displacement and concern for popliteal artery injury; ED evaluation in progress"
    },
    {
      "problem": "Asthma — Mild Intermittent",
      "icd": "J45.20",
      "onset": "2006",
      "status": "Active",
      "notes": "Albuterol PRN; no controller; no hospitalizations"
    }
  ],
  "medications": [
    {
      "name": "Albuterol HFA 90mcg PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for shortness of breath or wheezing",
      "prescriber": "Dr. Mitchell",
      "start": "06/2010",
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
      "date": "07/18/2024",
      "bp": "124/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "210 lbs",
      "ht": "6'2\"",
      "bmi": 27.0,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2024",
      "bp": "120/76",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "208 lbs",
      "ht": "6'2\"",
      "bmi": 26.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "07/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Karen Mitchell, MD",
      "cc": "Annual wellness exam",
      "hpi": "36-year-old healthy male for annual wellness exam. No complaints. Asthma well-controlled — uses albuterol ~1x/month. Active — plays basketball recreationally. No chronic conditions. No medications other than PRN albuterol. Recently promoted at work (construction project manager). Wears seatbelt consistently.",
      "exam": "General: Athletic male, NAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. MSK: Full ROM all joints. Neuro: A&O x3, intact. Skin: No lesions.",
      "assessment": "1. Annual wellness — healthy\n2. Asthma — mild intermittent, well-controlled",
      "plan": "1. Continue albuterol PRN\n2. Routine labs: CBC, CMP, lipid panel\n3. RTC 1 year or PRN"
    }
  ],
  "labs": [
    {
      "date": "07/18/2024",
      "time": "09:30",
      "orderedBy": "Dr. Karen Mitchell, MD",
      "collected": "07/18/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-071815",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.0", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "260", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "188", "unit": "mg/dL", "range": "<200", "flag": "" },
            { "test": "LDL Cholesterol", "value": "108", "unit": "mg/dL", "range": "<100 optimal", "flag": "H" },
            { "test": "HDL Cholesterol", "value": "52", "unit": "mg/dL", "range": ">40", "flag": "" },
            { "test": "Triglycerides", "value": "140", "unit": "mg/dL", "range": "<150", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-272",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/22/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-698",
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
      "vaccine": "Hepatitis B (3/3)",
      "date": "2006",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: HTN, T2DM, alive at 62",
    "Father: CAD (stent at 58), HTN, alive at 65",
    "Brother: Healthy, age 33",
    "Sister: Sickle cell trait, alive at 30",
    "No family history of bleeding disorders or clotting disorders"
  ],
  "socialHistory": [
    ["Occupation", "Construction project manager"],
    ["Marital", "Married, 2 children (ages 5, 3)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 2-3 beers on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Basketball 2x/week; gym 3x/week"],
    ["Housing", "Single-family home with wife and children"],
    ["Safety", "Seatbelt always; hard hat at work; no firearms"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "vascular-injury-with-limb-ischemia",
    "diagnosis": "Popliteal Artery Injury with Acute Limb Ischemia — Left Leg (Post-Supracondylar Femur Fracture, High-Speed MVC)",
    "acuity": 1,
    "presentation": "Musculoskeletal Emergency",
    "category": "vascular"
  }
};
