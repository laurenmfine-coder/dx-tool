// Virtual EMR Case: Acetaminophen Overdose (Intentional)
// Variant: apap-overdose | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Megan Fisher",
    "dob": "12/14/2001",
    "age": 24,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "BCBS PPO",
    "pcp": "Dr. Steven Walsh, DO",
    "pharmacy": "CVS \u2014 Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "Fort Lauderdale, FL",
    "phone": "(954) 555-0000",
    "email": "megan@email.com",
    "emergencyContact": {
      "name": "Family Member",
      "phone": "(954) 555-0001"
    },
    "mrn": "NSU-2025-23009"
  },
  "problems": [
    {
      "problem": "Acetaminophen Overdose (Intentional)",
      "icd": "R69",
      "onset": "2026",
      "status": "Active",
      "notes": "Presenting condition"
    }
  ],
  "medications": [
    {
      "name": "See clinical summary",
      "sig": "",
      "prescriber": "",
      "start": "",
      "refills": 0,
      "status": ""
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
      "date": "02/26/2026",
      "bp": "120/80",
      "hr": 90,
      "rr": 18,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "170 lbs",
      "ht": "5'9\"",
      "bmi": 25.1,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Acetaminophen Overdose (Intentional)",
      "hpi": "24F brought by roommate after admitting to ingesting ~30 extra-strength Tylenol (15g) 6 hours ago in suicide attempt. Initially asymptomatic but nauseous. APAP level 280 mcg/mL at 6hr (well above treatment line). AST/ALT rising (88/102). START NAC protocol immediately (150mg/kg loading). Psychiatry consult. 1:1 sitter.",
      "exam": "See clinical summary for pertinent findings.",
      "assessment": "1. Acetaminophen Overdose (Intentional) \u2014 see clinical summary\n2. Acute management initiated",
      "plan": "See clinical summary for management details."
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "14:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 14:00",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-02261400",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "KEY LABS",
          "results": [
            {
              "test": "APAP Level",
              "value": "280",
              "unit": "mcg/mL",
              "range": "<10",
              "flag": "H"
            },
            {
              "test": "AST",
              "value": "88",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "102",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "INR",
              "value": "1.2",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8001",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2101",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-502",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Family history non-contributory"
  ],
  "socialHistory": [
    [
      "See clinical notes",
      ""
    ]
  ],
  "meta": {
    "caseId": "apap-overdose",
    "diagnosis": "Acetaminophen Overdose (Intentional)",
    "acuity": 2,
    "presentation": "Toxicologic Emergency",
    "category": "toxicology"
  }
};
