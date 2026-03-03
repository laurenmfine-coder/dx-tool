/* emr-data/compartment-syndrome.js — EMR case data for Acute Compartment Syndrome (Tibial Fracture) */
window.EMR_DATA = {
  "patient": {
    "name": "Mateo Fernandez",
    "dob": "06/15/2002",
    "age": "24",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-917689",
    "language": "English",
    "race": "Pacific Islander",
    "phone": "(891) 782-3020",
    "email": "mateo.fernandez@email.com",
    "address": "3891 Cedar Ln, Sunrise, FL 33323",
    "insurance": "Medicare",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "CVS Pharmacy \u2014 Federal Hwy",
    "emergencyContact": {
      "name": "Diana Bailey",
      "phone": "(250) 670-7666",
      "relationship": "Parent"
    },
    "chiefComplaint": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
    "diagnosis": "Acute Compartment Syndrome (Tibial Fracture)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "None \u2014 healthy 26-year-old",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "None",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
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
      "time": "07:54",
      "bp": "158/92 (pain-induced hypertension)",
      "hr": "118",
      "rr": "22",
      "temp": "37.0\u00b0C",
      "spo2": "99%",
      "pain": "10/10",
      "bmi": "29",
      "weight": "70 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
      "hpi": "Mateo Fernandez is a 24-year-old male presenting with the pain in my shin is unbearable right leg \u2014 anterior compartment (anterior shin). Past medical history includes None \u2014 healthy 26-year-old. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Compartment Syndrome (Tibial Fracture) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-653401",
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
              "value": "9.1",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.9",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "38",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "190",
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
              "value": "145",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "98",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "25",
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
              "value": "89",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.6",
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
              "value": "2,800",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Myoglobin (Urine)",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "2.2",
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
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-874022",
      "clinical": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "X-ray Tibia/Fibula",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-492295",
      "clinical": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
      "technique": "Standard protocol",
      "findings": "Transverse fracture of the right tibial shaft at the junction of the middle and distal thirds. Minimally displaced. Associated distal fibula fracture. No intra-articular extension. Adequate alignment in splint.",
      "impression": "Right tibial shaft fracture with distal fibula fracture. No gross malalignment. Clinical concern for compartment syndrome \u2014 measurement of compartment pressures recommended.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-339048",
      "clinical": "The pain in my shin is unbearable Right leg \u2014 anterior compartment (anterior shin)",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 118 bpm. Normal intervals",
      "impression": "Sinus tachycardia \u2014 pain",
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
      "Social smoker"
    ],
    [
      "Alcohol",
      "Social, was not intoxicated at time of accident"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Firefighter"
    ],
    [
      "Living",
      "Lives with partner"
    ]
  ]
};
