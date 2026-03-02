/* emr-data/sbo-strangulation.js — Auto-generated EMR case data for SBO with Strangulation */
window.EMR_DATA = {
  "patient": {
    "name": "Richard Kowalski",
    "dob": "07/13/1948",
    "age": "78",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-478097",
    "language": "English",
    "race": "Multiracial",
    "phone": "(308) 596-6858",
    "email": "richard.kowalski@email.com",
    "address": "6390 Oak Dr, Weston, FL 33396",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Maria Kowalski",
      "phone": "(845) 924-1964",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Colicky abdominal pain, distension, vomiting, no BM for 2 days",
    "diagnosis": "SBO with Strangulation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Prior abdominal surgery (appendectomy, cholecystectomy)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Incisional hernia (known)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lisinopril",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-2",
      "name": "Aspirin",
      "dose": "81mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "98/62",
      "hr": "118",
      "rr": "24",
      "temp": "38.4°C",
      "spo2": "96%",
      "pain": "10/10",
      "bmi": "35",
      "weight": "93 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Colicky abdominal pain, distension, vomiting, no BM for 2 days",
      "hpi": "Richard Kowalski is a 78-year-old male presenting with colicky abdominal pain, distension, vomiting, no bm for 2 days. Past medical history includes Prior abdominal surgery (appendectomy, cholecystectomy), Incisional hernia (known). See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "SBO with Strangulation — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-913306",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "18.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "18",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": "L"
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Lactate",
              "value": "4.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/01/2026",
      "study": "CT Abdomen/Pelvis with Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-853040",
      "clinical": "Colicky abdominal pain, distension, vomiting, no BM for 2 days",
      "technique": "Standard protocol",
      "findings": "Dilated small bowel loops up to 4.5cm with decompressed distal bowel (transition point in RLQ). Closed-loop configuration with mesenteric swirl sign. Decreased bowel wall enhancement concerning for ischemia. Moderate free fluid.",
      "impression": "Small bowel obstruction with closed-loop configuration and signs of strangulation. Emergent surgical consultation.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Surgical history",
      "Appendectomy age 25, cholecystectomy age 52"
    ]
  ]
};
