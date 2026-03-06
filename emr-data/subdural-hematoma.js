/* emr-data/subdural-hematoma.js — EMR case data for Acute-on-Chronic Subdural Hematoma */
window.EMR_DATA = {
  "patient": {
    "name": "Walter Pemberton",
  "patientHPI": "My wife says I haven't been myself for about two weeks now - I've been confused and clumsy, and today it's gotten much worse. I've had this dull headache on both sides of my head, and I know I've been falling more lately which worries her.",
    "dob": "06/15/1948",
    "age": "78",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-152921",
    "language": "English",
    "race": "Black/African American",
    "phone": "(415) 555-1722",
    "email": "walter.pemberton@email.com",
    "address": "2243 Cottonwood Ave, Columbus, OH 43211",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wilson, MD",
    "pharmacy": "Walmart Pharmacy \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Thomas Mitchell",
      "phone": "(212) 555-6464",
      "relationship": "Parent"
    },
    "chiefComplaint": "Wife: 'He's not himself \u2014 confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
    "diagnosis": "Acute-on-Chronic Subdural Hematoma"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Atrial fibrillation",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Falls",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Chronic alcohol use",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "BPH",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Apixaban",
      "dose": "5mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    },
    {
      "id": "med-2",
      "name": "Lisinopril",
      "dose": "20mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-3",
      "name": "Tamsulosin",
      "dose": "0.4mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
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
      "time": "06:48",
      "bp": "162/88",
      "hr": "78 (irregularly irregular)",
      "rr": "16",
      "temp": "36.9\u00b0C",
      "spo2": "97%",
      "pain": "/10",
      "bmi": "24",
      "weight": "63 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Wife: 'He's not himself \u2014 confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
      "hpi": "Walter Pemberton is a 78-year-old male presenting with wife: 'he's not himself \u2014 confused and clumsy for 2 weeks, much worse today' bilateral headache, diffuse, dull. Past medical history includes Atrial fibrillation, Hypertension, Falls, Chronic alcohol use, BPH. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute-on-Chronic Subdural Hematoma \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-876079",
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
              "value": "5.4",
              "unit": "x10\u00b3/\u00b5L",
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
              "value": "42",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "148",
              "unit": "x10\u00b3/\u00b5L",
              "range": "150-400",
              "flag": "L"
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
              "value": "4.5",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "104",
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
              "value": "102",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
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
              "test": "INR",
              "value": "1.1",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            },
            {
              "test": "Ethanol Level",
              "value": "0",
              "unit": "mg/dL",
              "range": "0",
              "flag": ""
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
      "accession": "IMG-280463",
      "clinical": "Wife: 'He's not himself \u2014 confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
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
      "accession": "IMG-395248",
      "clinical": "Wife: 'He's not himself \u2014 confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
      "technique": "Standard protocol",
      "findings": "LARGE LEFT-SIDED ACUTE-ON-CHRONIC SUBDURAL HEMATOMA. Mixed-density crescent-shaped collection over the left convexity measuring 18mm maximal thickness. Hyperdense (acute) component layered posteriorly within a hypodense (chronic) collection. MIDLINE SHIFT 11mm to the right. LEFT LATERAL VENTRICLE compressed. Early subfalcine herniation. No subarachnoid hemorrhage. Mild generalized cortical atrophy. Periventricular white matter changes.",
      "impression": "LARGE ACUTE-ON-CHRONIC LEFT SUBDURAL HEMATOMA with 11mm midline shift and early herniation signs. EMERGENT NEUROSURGICAL CONSULTATION for evacuation. Reverse anticoagulation IMMEDIATELY.",
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
      "accession": "IMG-897573",
      "clinical": "Wife: 'He's not himself \u2014 confused and clumsy for 2 weeks, much worse today' Bilateral headache, diffuse, dull",
      "technique": "Standard 12-lead",
      "findings": "Atrial fibrillation at 78 bpm. No ST changes. Normal intervals",
      "impression": "Chronic AFib \u2014 patient on anticoagulation that contributed to SDH",
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
    "Father: stroke",
    "No bleeding disorders"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Quit 20 years ago"
    ],
    [
      "Alcohol",
      "2-3 drinks daily for decades"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired professor (history department)"
    ],
    [
      "Living",
      "Lives with wife of 48 years"
    ]
  ]
};
