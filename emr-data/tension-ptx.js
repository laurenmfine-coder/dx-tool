/* emr-data/tension-ptx.js — EMR case data for Tension Pneumothorax */
window.EMR_DATA = {
  "patient": {
    "name": "Ryan O'Brien",
    "dob": "06/15/1998",
    "age": "28",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-778413",
    "language": "English",
    "race": "American Indian",
    "phone": "(550) 100-5524",
    "email": "ryan.o'brien@email.com",
    "address": "2955 Willow Ct, Fort Lauderdale, FL 33301",
    "insurance": "Medicaid",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Walmart Pharmacy \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Charles Nelson",
      "phone": "(388) 120-9330",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Can't breathe Left chest and back, worse on the left side",
    "diagnosis": "Tension Pneumothorax"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None significant",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
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
      "time": "06:47",
      "bp": "82/58",
      "hr": "132",
      "rr": "34",
      "temp": "36.6\u00b0C",
      "spo2": "84%",
      "pain": "10/10",
      "bmi": "26",
      "weight": "100 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Can't breathe Left chest and back, worse on the left side",
      "hpi": "Ryan O'Brien is a 28-year-old male presenting with can't breathe left chest and back, worse on the left side. Past medical history includes None significant. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Tension Pneumothorax \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-229236",
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
              "value": "15.4",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "43",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
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
              "value": "4.8",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "103",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "26",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "11",
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
              "value": "95",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "10.1",
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
            },
            {
              "test": "ABG pH",
              "value": "7.28",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "ABG pCO2",
              "value": "52",
              "unit": "mmHg",
              "range": "35-45",
              "flag": "H"
            },
            {
              "test": "Type and Screen",
              "value": "O positive, antibody negative",
              "unit": "",
              "range": "",
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
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-416455",
      "clinical": "Can't breathe Left chest and back, worse on the left side",
      "technique": "Standard protocol",
      "findings": "Large left-sided pneumothorax with complete lung collapse. Mediastinal shift to the right. Flattening of the left hemidiaphragm. Multiple left rib fractures (ribs 4-7).",
      "impression": "TENSION PNEUMOTHORAX \u2014 emergent needle decompression / chest tube required",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS \u2013 Lung",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-203817",
      "clinical": "Can't breathe Left chest and back, worse on the left side",
      "technique": "Standard protocol",
      "findings": "Absent lung sliding on left. Barcode sign (stratosphere sign) on M-mode. No lung point identified. Right lung normal sliding present.",
      "impression": "Left pneumothorax confirmed on bedside ultrasound",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "POCUS \u2013 FAST Exam",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-105804",
      "clinical": "Can't breathe Left chest and back, worse on the left side",
      "technique": "Standard protocol",
      "findings": "No free fluid in Morrison pouch, splenorenal recess, or pelvis. No pericardial effusion.",
      "impression": "Negative FAST \u2014 no hemoperitoneum",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-4",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-882834",
      "clinical": "Can't breathe Left chest and back, worse on the left side",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 132 bpm. Low voltage in limb leads. Right axis deviation. No ST changes",
      "impression": "Sinus tachycardia with low voltage \u2014 consistent with tension pneumothorax",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Social smoker, a few cigarettes a week"
    ],
    [
      "Alcohol",
      "3-4 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Construction worker"
    ],
    [
      "Living",
      "Lives with girlfriend"
    ]
  ]
};
