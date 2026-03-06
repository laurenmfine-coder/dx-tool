/* emr-data/serotonin-syndrome.js — Auto-generated EMR case data for Serotonin Syndrome */
window.EMR_DATA = {
  "patient": {
    "name": "Andrew Chen",
  "patientHPI": "I started this new medication for my depression about a week ago, and now I'm feeling really jittery and sweaty with muscle twitches, and I can't seem to sit still.",
    "dob": "08/10/1986",
    "age": "40",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-776119",
    "language": "English",
    "race": "Asian",
    "phone": "(720) 555-8055",
    "email": "andrew.chen@email.com",
    "address": "6329 Magnolia Blvd, Phoenix, AZ 85013",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Mei Chen",
      "phone": "(404) 555-3116",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Agitation, diaphoresis, tremor, clonus — recently started new antidepressant",
    "diagnosis": "Serotonin Syndrome"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Depression",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Started MAOI (phenelzine) 1 week ago while still on sertraline",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Sertraline",
      "dose": "200mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    },
    {
      "id": "med-2",
      "name": "Phenelzine",
      "dose": "15mg",
      "route": "PO",
      "frequency": "TID (started 7 days ago)",
      "status": "Active",
      "prescriber": "Dr. Raj Patel, MD"
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
      "bp": "168/102",
      "hr": "128",
      "rr": "24",
      "temp": "39.8°C",
      "spo2": "96%",
      "pain": "5/10",
      "bmi": "25",
      "weight": "102 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Agitation, diaphoresis, tremor, clonus — recently started new antidepressant",
      "hpi": "Andrew Chen is a 40-year-old male presenting with agitation, diaphoresis, tremor, clonus — recently started new antidepressant. Past medical history includes Depression, Started MAOI (phenelzine) 1 week ago while still on sertraline. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Serotonin Syndrome — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-759360",
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
              "value": "12.4",
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
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
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
              "test": "Ck",
              "value": "1800",
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
      "accession": "IMG-307093",
      "clinical": "Agitation, diaphoresis, tremor, clonus — recently started new antidepressant",
      "technique": "Standard protocol",
      "findings": "No acute intracranial abnormality.",
      "impression": "Normal.",
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
      "Medication error",
      "New psychiatrist started MAOI without washout from SSRI"
    ],
    [
      "Tobacco",
      "Never"
    ]
  ]
};
