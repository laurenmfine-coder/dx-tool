/* emr-data/migraine.js — Auto-generated EMR case data for Migraine */
window.EMR_DATA = {
  "patient": {
    "name": "Isabella Vargas-Chen",
  "patientHPI": "I'm having another one of those terrible pounding headaches with the lights bothering my eyes so much, and I feel like I'm going to throw up - these have been happening way too often lately, maybe 8 or 10 times a month.",
    "dob": "12/10/2000",
    "age": "26",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-424259",
    "language": "English",
    "race": "White",
    "phone": "(513) 555-9818",
    "email": "isabella.vargas-chen@email.com",
    "address": "3713 Mulberry St, Pittsburgh, PA 15208",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Charles Vargas-Chen",
      "phone": "(720) 555-9947",
      "relationship": "Parent"
    },
    "chiefComplaint": "Severe throbbing headache with aura, photophobia, nausea",
    "diagnosis": "Migraine"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Chronic migraines — 8-10 per month",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Medication overuse headache suspected",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Sumatriptan",
      "dose": "100mg",
      "route": "PO",
      "frequency": "PRN (using 15+/month)",
      "status": "Active",
      "prescriber": "Dr. Michelle Foster, MD"
    },
    {
      "id": "med-2",
      "name": "Topiramate",
      "dose": "100mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    },
    {
      "id": "med-3",
      "name": "Ibuprofen",
      "dose": "800mg",
      "route": "PO",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Metoclopramide",
      "reaction": "Dystonic reaction",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "122/76",
      "hr": "72",
      "rr": "14",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "8/10",
      "bmi": "23",
      "weight": "95 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Severe throbbing headache with aura, photophobia, nausea",
      "hpi": "Isabella Vargas-Chen is a 26-year-old female presenting with severe throbbing headache with aura, photophobia, nausea. Past medical history includes Chronic migraines — 8-10 per month, Medication overuse headache suspected. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Migraine — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-445249",
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
      "accession": "IMG-760769",
      "clinical": "Severe throbbing headache with aura, photophobia, nausea",
      "technique": "Standard protocol",
      "findings": "No acute intracranial abnormality.",
      "impression": "Normal study.",
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
    "Mother: migraines",
    "Sister: migraines with aura"
  ],
  "socialHistory": [
    [
      "Triggers",
      "Stress, sleep deprivation, menstruation"
    ],
    [
      "Medication overuse",
      "Using sumatriptan >15 days/month"
    ]
  ]
};
