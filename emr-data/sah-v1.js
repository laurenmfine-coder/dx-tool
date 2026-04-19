/* emr-data/sah-v1.js — Auto-generated EMR case data for Subarachnoid Hemorrhage */
window.EMR_DATA = {
  "patient": {
    "name": "Jennifer Wu",
    "patientHPI": "I was just sitting at my desk when suddenly I got hit with an incredibly severe headache — it came on in seconds. I've never experienced anything like this before, I'm terrified.",
    "dob": "09/16/1984",
    "age": "42",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-510850",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(502) 555-2657",
    "email": "jennifer.wu@email.com",
    "address": "8726 Clover St, Albuquerque, NM 87103",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Michelle Foster, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Joseph Wu",
      "phone": "(617) 555-9843",
      "relationship": "Parent"
    },
    "chiefComplaint": "Sudden severe headache",
    "diagnosis": "Subarachnoid Hemorrhage"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Smoker",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Family history of aneurysms",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lisinopril",
      "dose": "20mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
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
      "bp": "192/108",
      "hr": "68",
      "rr": "16",
      "temp": "37.2°C",
      "spo2": "98%",
      "pain": "10/10",
      "bmi": "37",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worst headache of my life — sudden onset thunderclap",
      "hpi": "Jennifer Wu is a 42-year-old female presenting with sudden severe headache. Past medical history includes Hypertension, Smoker, Family history of aneurysms. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Subarachnoid Hemorrhage — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-230499",
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
      "accession": "IMG-805265",
      "clinical": "Worst headache of my life — sudden onset thunderclap",
      "technique": "Standard protocol",
      "findings": "Diffuse subarachnoid hemorrhage in the basal cisterns, Sylvian fissures, and interhemispheric fissure. Modified Fisher Grade 3. No hydrocephalus.",
      "impression": "Acute subarachnoid hemorrhage. CTA recommended to identify aneurysm.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/01/2026",
      "study": "CTA Head",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-175224",
      "clinical": "Worst headache of my life — sudden onset thunderclap",
      "technique": "Standard protocol",
      "findings": "7mm saccular aneurysm at the anterior communicating artery bifurcation. No other aneurysms.",
      "impression": "AComm aneurysm — likely source of SAH. Neurosurgery consultation.",
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
    "Mother: ruptured aneurysm at age 48"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 25 pack-years"
    ],
    [
      "Cocaine",
      "Denies"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Jennifer Wu is alert and cooperative, clearly concerned but provides a clear history.",
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
      "medications": "'I take Lisinopril.'",
      "allergies": "'My allergies: NKDA.'",
      "family": "Mother: ruptured aneurysm at age 48",
      "social": "Tobacco: Current, 25 pack-years  Cocaine: Denies"
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
      "phase2": "Before interviewing Jennifer Wu: what does the chart suggest? Top 3 diagnoses?",
      "phase5": "After history and exam: how has your differential changed?",
      "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
  }
};
