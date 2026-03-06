/* emr-data/nms.js — EMR case data for Neuroleptic Malignant Syndrome (NMS) */
window.EMR_DATA = {
  "patient": {
    "name": "Bradley Chung",
  "patientHPI": "The staff at my group home called the ambulance because they said I was burning up with fever and my whole body went stiff like a board. I take medications for my mental health condition, and I can't really move my muscles properly - everything feels locked up and rigid.",
    "dob": "06/15/1992",
    "age": "34",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-182526",
    "language": "English",
    "race": "Black/African American",
    "phone": "(615) 555-3344",
    "email": "bradley.chung@email.com",
    "address": "4261 Maple St, Minneapolis, MN 55406",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "CVS Pharmacy \u2014 Sunrise Blvd",
    "emergencyContact": {
      "name": "William Phillips",
      "phone": "(414) 555-8555",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Group home staff: 'He's burning up and stiff as a board' Whole body stiffness, no specific pain reported",
    "diagnosis": "Neuroleptic Malignant Syndrome (NMS)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Schizophrenia",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Tardive dyskinesia",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Olanzapine",
      "dose": "20mg daily (increased from 10mg 4 days ago \u2014 switched from haloperidol 2 weeks ago)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-2",
      "name": "Benztropine",
      "dose": "1mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-3",
      "name": "Metformin",
      "dose": "500mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Haloperidol",
      "reaction": "Prior episode of rigidity and fever (possible prior NMS that was unrecognized)",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "10:09",
      "bp": "168/98 (fluctuating: was 92/60 an hour ago per EMS)",
      "hr": "126",
      "rr": "26",
      "temp": "40.7\u00b0C",
      "spo2": "94%",
      "pain": "/10",
      "bmi": "28",
      "weight": "73 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Group home staff: 'He's burning up and stiff as a board' Whole body stiffness, no specific pain reported",
      "hpi": "Bradley Chung is a 34-year-old male presenting with group home staff: 'he's burning up and stiff as a board' whole body stiffness, no specific pain reported. Past medical history includes Schizophrenia, Tardive dyskinesia, Type 2 Diabetes. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Neuroleptic Malignant Syndrome (NMS) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-751336",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "18.2",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "14.3",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "248",
              "unit": "x10\u00b3/\u00b5L",
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
              "value": "5.8",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "99",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "22",
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
              "value": "2.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "224",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Calcium",
              "value": "9.2",
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
              "test": "CK Total",
              "value": "18,600",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "AST",
              "value": "420",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "5.6",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.28",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "Myoglobin",
              "value": ">1,000",
              "unit": "ng/mL",
              "range": "<85",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending",
              "unit": "",
              "range": "No growth",
              "flag": ""
            },
            {
              "test": "Procalcitonin",
              "value": "0.3",
              "unit": "ng/mL",
              "range": "<0.5",
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
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-514343",
      "clinical": "Group home staff: 'He's burning up and stiff as a board' Whole body stiffness, no specific pain reported",
      "technique": "Standard protocol",
      "findings": "No acute intracranial pathology. No hemorrhage, mass, or hydrocephalus.",
      "impression": "Normal \u2014 altered mental status from NMS, not structural cause",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-205990",
      "clinical": "Group home staff: 'He's burning up and stiff as a board' Whole body stiffness, no specific pain reported",
      "technique": "Standard protocol",
      "findings": "Low lung volumes (limited inspiration from thoracic rigidity). No focal consolidation. No aspiration pattern.",
      "impression": "Low volumes from rigidity. No pneumonia currently.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-760533",
      "clinical": "Group home staff: 'He's burning up and stiff as a board' Whole body stiffness, no specific pain reported",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 126 bpm. Prolonged QTc at 520ms. No ST changes",
      "impression": "Sinus tachycardia with prolonged QTc \u2014 olanzapine effect + metabolic derangement. QTc prolongation increases arrhythmia risk.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
    "Brother: schizophrenia",
    "No known NMS history in family"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "1 pack/day"
    ],
    [
      "Alcohol",
      "Denies"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Not employed, lives in supervised group home"
    ],
    [
      "Living",
      "Group home with 24-hour staff"
    ]
  ]
};
