/* emr-data/thyroid-storm.js — Auto-generated EMR case data for Thyroid Storm */
window.EMR_DATA = {
  "patient": {
    "name": "Keandra Williams",
  "patientHPI": "I've been feeling absolutely terrible for the past few days - I have this high fever that won't break, my heart feels like it's racing all the time, and I can't seem to sit still or calm down. My hands are shaking so bad I can barely hold a cup, and I feel completely agitated and anxious about everything. I'll be honest - I haven't been great about taking my thyroid medication regularly, and now I'm wondering if that's catching up with me.",
    "dob": "10/24/1983",
    "age": "43",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-887351",
    "language": "English",
    "race": "Asian",
    "phone": "(313) 555-8682",
    "email": "keandra.williams@email.com",
    "address": "4601 Daisy Ave, Phoenix, AZ 85003",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Anthony Williams",
      "phone": "(614) 555-5961",
      "relationship": "Spouse"
    },
    "chiefComplaint": "High fever, tachycardia, agitation, tremor — known Graves' disease",
    "diagnosis": "Thyroid Storm"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Graves' disease (non-adherent to methimazole)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Atrial fibrillation (new)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Methimazole",
      "dose": "20mg",
      "route": "PO",
      "frequency": "TID (not taking)",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-2",
      "name": "Propranolol",
      "dose": "20mg",
      "route": "PO",
      "frequency": "TID (not taking)",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "PTU",
      "reaction": "Hepatotoxicity",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "168/62",
      "hr": "158",
      "rr": "28",
      "temp": "40.2°C",
      "spo2": "96%",
      "pain": "5/10",
      "bmi": "31",
      "weight": "64 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "High fever, tachycardia, agitation, tremor — known Graves' disease",
      "hpi": "Keandra Williams is a 43-year-old female presenting with high fever, tachycardia, agitation, tremor — known graves' disease. Past medical history includes Graves' disease (non-adherent to methimazole), Atrial fibrillation (new). See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Thyroid Storm — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-779036",
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
              "value": "198",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "11.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Alt",
              "value": "82",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "Tsh",
              "value": "<0.01",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": "L"
            },
            {
              "test": "Free T4",
              "value": "7.8",
              "unit": "ng/dL",
              "range": "0.8-1.8",
              "flag": "H"
            },
            {
              "test": "Free T3",
              "value": "18.4",
              "unit": "pg/mL",
              "range": "2.3-4.2",
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
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-294951",
      "clinical": "High fever, tachycardia, agitation, tremor — known Graves' disease",
      "technique": "Standard protocol",
      "findings": "Atrial fibrillation with rapid ventricular response, rate 158. No ST changes.",
      "impression": "New-onset atrial fibrillation — likely thyrotoxicosis.",
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
    "Mother: Hashimoto's thyroiditis"
  ],
  "socialHistory": [
    [
      "Medication adherence",
      "Stopped all thyroid meds 3 weeks ago — felt well"
    ],
    [
      "Trigger",
      "Had dental extraction yesterday (infection risk)"
    ]
  ]
};
