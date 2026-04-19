/* emr-data/meningitis-v1.js — Auto-generated EMR case data for Bacterial Meningitis */
window.EMR_DATA = {
  "patient": {
    "name": "Emily Johnson",
    "patientHPI": "I have a really severe headache, I'm burning up with fever, my neck is so stiff I can barely move it, and the lights are killing my eyes. I live in the dorms at college and I just feel absolutely terrible.",
    "dob": "04/06/1999",
    "age": "27",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-338691",
    "language": "English",
    "race": "Asian",
    "phone": "(404) 555-3623",
    "email": "kevin.johnson@email.com",
    "address": "7670 Iris Blvd, Columbus, OH 43203",
    "insurance": "Oscar Health",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "James Johnson",
      "phone": "(503) 555-7985",
      "relationship": "Parent"
    },
    "chiefComplaint": "Severe headache, fever, neck stiffness, photophobia",
    "diagnosis": "Bacterial Meningitis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "College student in dormitory",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Combined OCP",
      "dose": "",
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
      "bp": "108/62",
      "hr": "118",
      "rr": "22",
      "temp": "39.8°C",
      "spo2": "97%",
      "pain": "9/10",
      "bmi": "33",
      "weight": "96 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Severe headache, fever, neck stiffness, photophobia",
      "hpi": "Emily Johnson is a 27-year-old female presenting with severe headache, fever, neck stiffness, photophobia. Past medical history includes College student in dormitory. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Bacterial Meningitis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-199463",
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
              "value": "22.4",
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
              "value": "3.6",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Csf Wbc",
              "value": "2200",
              "unit": "cells/µL",
              "range": "0-5",
              "flag": "H"
            },
            {
              "test": "Csf Protein",
              "value": "320",
              "unit": "mg/dL",
              "range": "15-45",
              "flag": "H"
            },
            {
              "test": "Csf Glucose",
              "value": "18",
              "unit": "mg/dL",
              "range": "40-70",
              "flag": "L"
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
      "accession": "IMG-234518",
      "clinical": "Severe headache, fever, neck stiffness, photophobia",
      "technique": "Standard protocol",
      "findings": "No acute intracranial abnormality. No mass effect or hydrocephalus.",
      "impression": "Normal. Safe for lumbar puncture.",
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
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social — college parties"
    ],
    [
      "Living",
      "College dormitory"
    ],
    [
      "Vaccination",
      "Meningococcal vaccine up to date — serogroup B not covered"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Emily Johnson is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
      "When did your symptoms start and how?",
      "Describe the main symptom — location, character, severity.",
      "What makes it worse? What makes it better?",
      "Any other symptoms you've noticed?",
      "Any prior similar episodes?",
      "Tell me about your medical history.",
      "What medications are you currently taking?",
      "Any medication allergies?",
      "Relevant family history?",
      "Tell me about your lifestyle."
    ],
    "patientResponses": {
      "default": "He pauses. 'Can you clarify what you mean?'",
      "onset": "'Gradually — over the past several days.'",
      "character": "'The symptom has been significant and affecting my ability to function.'",
      "location": "'The main problem is in the expected area for my condition.'",
      "severity": "'Six or seven out of ten.'",
      "aggravating": "'Activity and movement worsen it.'",
      "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
      "associated": "'Some associated symptoms consistent with this condition.'",
      "denies": "'No fever, chills, or unexplained weight loss.'",
      "history": "'I have not had exactly this before.'",
      "medications": "'I take Combined OCP.'",
      "allergies": "'My allergies: NKDA.'",
      "family": "Non-contributory",
      "social": "Tobacco: Never  Alcohol: Social — college parties  Living: College dormitory  Vaccination: Meningococcal vaccine up to date — serogroup B not covered"
    },
    "examManeuvers": [
      "General appearance",
      "Vital signs",
      "Cardiovascular",
      "Pulmonary",
      "Abdominal",
      "Extremities",
      "Skin",
      "Targeted exam"
    ],
    "examFindings": {
      "General appearance": "Finding consistent with this condition.",
      "Vital signs": "Finding consistent with this condition.",
      "Cardiovascular": "Finding consistent with this condition.",
      "Pulmonary": "Finding consistent with this condition.",
      "Abdominal": "Finding consistent with this condition.",
      "Extremities": "Finding consistent with this condition.",
      "Skin": "Finding consistent with this condition.",
      "Targeted exam": "Finding consistent with this condition."
    },
    "ddxTargets": [
      "this condition (correct)",
      "Most likely alternative",
      "Third differential",
      "Must-not-miss 1",
      "Must-not-miss 2",
      "Common mimic 1",
      "Common mimic 2"
    ],
    "biasFlags": {
      "anchoring": "Consider the full differential for this condition.",
      "prematureClosure": "Complete your workup before narrowing focus.",
      "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
      "phase2": "Before interviewing Emily Johnson: what does the chart suggest? Top 3 diagnoses?",
      "phase5": "After history and exam: how has your differential changed?",
      "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
  }
};
