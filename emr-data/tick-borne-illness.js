// Virtual EMR Case: Tick-Borne Illness
// Variant: tick-borne-illness | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Daniel Marsh",
    "dob": "10/05/1978",
    "age": 46,
    "sex": "Male",
    "mrn": "RDX-2025-59184",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Claire Robinson, MD",
    "pharmacy": "CVS Pharmacy — 5100 W Hillsboro Blvd, Coconut Creek, FL",
    "language": "English",
    "race": "White",
    "address": "4825 NW 45th Ct, Coconut Creek, FL 33073",
    "phone": "(954) 555-6349",
    "email": "d.marsh78@email.com",
    "emergencyContact": {
      "name": "Lisa Marsh (Wife)",
      "phone": "(954) 555-6365"
    }
  },
  "problems": [
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2005",
      "status": "Active",
      "notes": "Spring and fall; managed with cetirizine PRN"
    },
    {
      "problem": "Hypertension — Mild",
      "icd": "I10",
      "onset": "2022",
      "status": "Active",
      "notes": "Stage 1; lifestyle modifications; started lisinopril 2023"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Robinson",
      "start": "03/2023",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Cetirizine 10mg daily PRN",
      "sig": "Take 1 tablet by mouth daily as needed for allergy symptoms",
      "prescriber": "Dr. Robinson",
      "start": "04/2010",
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
      "date": "09/18/2024",
      "bp": "126/78",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "195 lbs",
      "ht": "6'1\"",
      "bmi": 25.7,
      "setting": "PCP Office"
    },
    {
      "date": "03/12/2024",
      "bp": "128/80",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "192 lbs",
      "ht": "6'1\"",
      "bmi": 25.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Claire Robinson, MD",
      "cc": "Annual wellness exam",
      "hpi": "46-year-old male for annual exam. No complaints. BP controlled on lisinopril. Active lifestyle — runs, hikes, camps regularly. Recently returned from a 1-week camping and hiking trip in the Appalachian Trail area of North Carolina (late August). Reports several tick bites during the trip — removed embedded ticks from bilateral lower legs (estimated 2-3 ticks). No rash, fever, or other symptoms at the time or since. Last wellness exam 1 year ago — all normal.",
      "exam": "General: NAD, fit-appearing male. HEENT: WNL. Neck: No LAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. Skin: Several healed insect bite marks bilateral lower legs; no active rash, no erythema migrans. Neuro: A&O x3, intact.",
      "assessment": "1. Annual wellness — healthy\n2. HTN — controlled on lisinopril\n3. Recent tick exposure (NC Appalachian Trail, August) — asymptomatic currently\n4. Tick-borne illness risk counseling provided",
      "plan": "1. Continue lisinopril\n2. Tick-borne illness education: watch for fever, headache, myalgias, rash, arthralgias in coming weeks\n3. If symptoms develop: seek care promptly — mention tick exposure; empiric doxycycline likely indicated\n4. Routine labs: CBC, CMP, lipid panel\n5. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "03/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Claire Robinson, MD",
      "cc": "Follow-up: HTN",
      "hpi": "46-year-old male for HTN follow-up. BP improved on lisinopril. No complaints. Active with exercise.",
      "exam": "General: NAD. CV: RRR. Lungs: CTAB.",
      "assessment": "1. HTN — controlled",
      "plan": "1. Continue lisinopril 10mg\n2. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "09/18/2024",
      "time": "09:30",
      "orderedBy": "Dr. Claire Robinson, MD",
      "collected": "09/18/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-091815",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.6", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "46.0", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "242", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "ALT (SGPT)", "value": "28", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "22", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "196", "unit": "mg/dL", "range": "<200", "flag": "" },
            { "test": "LDL Cholesterol", "value": "114", "unit": "mg/dL", "range": "<100 optimal", "flag": "H" },
            { "test": "HDL Cholesterol", "value": "56", "unit": "mg/dL", "range": ">40", "flag": "" },
            { "test": "Triglycerides", "value": "130", "unit": "mg/dL", "range": "<150", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-252",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-678",
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
      "date": "1998",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: HTN, hypothyroidism, alive at 72",
    "Father: CAD (CABG at 65), HTN, alive at 74",
    "Brother: Healthy, age 43",
    "No family history of autoimmune disease"
  ],
  "socialHistory": [
    ["Occupation", "Environmental engineer — field work includes outdoor site assessments"],
    ["Marital", "Married, 2 children (ages 12, 9)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 2-3 drinks on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Running 4x/week; hiking and camping monthly; coaches youth soccer"],
    ["Housing", "Single-family home with wife and children"],
    ["Safety", "Firearms secured in gun safe; seatbelt; DEET-based repellent used during outdoor work"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "tick-borne-illness",
    "diagnosis": "Ehrlichiosis (Ehrlichia chaffeensis — Human Monocytic Ehrlichiosis)",
    "acuity": 3,
    "presentation": "Fever/Sepsis",
    "category": "infectious"
  }
};
