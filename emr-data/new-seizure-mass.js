/* emr-data/new-seizure-mass.js — EMR case data for New-Onset Seizure Secondary to Brain Mass (Glioblastoma) */
window.EMR_DATA = {
  "patient": {
    "name": "Nina Patel",
    "dob": "07/15/2000",
    "age": "26",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-509012",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(846) 853-2425",
    "email": "nina.patel@email.com",
    "address": "4026 Cedar Ln, Fort Lauderdale, FL 33301",
    "insurance": "Tricare",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Rite Aid — Federal Hwy",
    "emergencyContact": {
      "name": "Christopher Morgan",
      "phone": "(936) 258-7047",
      "relationship": "Partner"
    },
    "chiefComplaint": "I don't know what happened Headache is left-sided, throbbing",
    "diagnosis": "New-Onset Seizure Secondary to Brain Mass (Glioblastoma)"
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
      "description": "No prior neurologic history",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Amlodipine",
      "dose": "5mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "10:08",
      "bp": "148/88",
      "hr": "92",
      "rr": "16",
      "temp": "37.0°C",
      "spo2": "98%",
      "pain": "7/10",
      "bmi": "33",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I don't know what happened Headache is left-sided, throbbing",
      "hpi": "Nina Patel is a 26-year-old female presenting with i don't know what happened headache is left-sided, throbbing. Past medical history includes Hypertension, No prior neurologic history. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "New-Onset Seizure Secondary to Brain Mass (Glioblastoma) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-428000",
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
              "value": "9.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "35",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "322",
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
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.9",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "105",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "8",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "112",
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
              "test": "Prolactin",
              "value": "42",
              "unit": "ng/mL",
              "range": "4-15",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-804513",
      "clinical": "I don't know what happened Headache is left-sided, throbbing",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-699788",
      "clinical": "I don't know what happened Headache is left-sided, throbbing",
      "technique": "Standard protocol",
      "findings": "Large heterogeneous mass in the left frontal-parietal region measuring approximately 4.5 x 3.8 cm. Surrounding vasogenic edema with effacement of the left lateral ventricle. 6mm rightward midline shift. No acute hemorrhage within the mass. Mild uncal herniation.",
      "impression": "LEFT FRONTAL-PARIETAL MASS with significant edema and mass effect — highly suspicious for high-grade glioma. MRI recommended. Neurosurgery consult STAT.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "MRI Brain",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-739659",
      "clinical": "I don't know what happened Headache is left-sided, throbbing",
      "technique": "Standard protocol",
      "findings": "4.5 x 3.8 x 4.0 cm heterogeneously enhancing mass in the left frontal-parietal region with central necrosis. Irregular ring enhancement. Extensive surrounding T2/FLAIR edema. Mass effect with 6mm midline shift. Involvement of the left motor cortex. No additional lesions identified.",
      "impression": "Findings highly consistent with glioblastoma (WHO Grade IV). Neurosurgery consultation for biopsy/resection planning.",
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
      "accession": "IMG-141414",
      "clinical": "I don't know what happened Headache is left-sided, throbbing",
      "technique": "Standard 12-lead",
      "findings": "Normal sinus rhythm at 92 bpm. No ST changes. Normal intervals",
      "impression": "Normal ECG",
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
    "No brain tumors",
    "Mother: breast cancer at 62"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Former smoker, quit 5 years ago, 15 pack-year history"
    ],
    [
      "Alcohol",
      "Social only"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "High school history teacher"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ]
};
