/* emr-data/status-epilepticus.js — Auto-generated EMR case data for Status Epilepticus */
window.EMR_DATA = {
  "patient": {
    "name": "Michael Chang",
    "dob": "11/22/1993",
    "age": "33",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-135247",
    "language": "English",
    "race": "White",
    "phone": "(645) 468-7338",
    "email": "michael.chang@email.com",
    "address": "9290 Elm Dr, Hollywood, FL 33367",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Emily Chang",
      "phone": "(429) 718-4747",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Witnessed generalized seizure for >5 minutes, not returning to baseline",
    "diagnosis": "Status Epilepticus"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Epilepsy (poorly controlled)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "History of non-adherence",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Levetiracetam",
      "dose": "1000mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-2",
      "name": "Lacosamide",
      "dose": "200mg",
      "route": "PO",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Phenytoin",
      "reaction": "Stevens-Johnson Syndrome",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "168/102",
      "hr": "128",
      "rr": "8",
      "temp": "38.6°C",
      "spo2": "88%",
      "pain": "N/A",
      "bmi": "36",
      "weight": "91 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Witnessed generalized seizure for >5 minutes, not returning to baseline",
      "hpi": "Michael Chang is a 33-year-old male presenting with witnessed generalized seizure for >5 minutes, not returning to baseline. Past medical history includes Epilepsy (poorly controlled), History of non-adherence. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Status Epilepticus — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-987761",
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
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
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
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
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
              "value": "42",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "L"
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
              "value": "6.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Ck",
              "value": "2400",
              "unit": "U/L",
              "range": "22-198",
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
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-509113",
      "clinical": "Witnessed generalized seizure for >5 minutes, not returning to baseline",
      "technique": "Standard protocol",
      "findings": "No acute hemorrhage or mass. No midline shift.",
      "impression": "No acute structural etiology for seizures.",
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
    "Brother: epilepsy"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current smoker"
    ],
    [
      "Alcohol",
      "6-pack beer daily"
    ],
    [
      "Medication adherence",
      "Stopped taking seizure meds 2 weeks ago — felt fine"
    ],
    [
      "Occupation",
      "Construction worker"
    ]
  ]
};
