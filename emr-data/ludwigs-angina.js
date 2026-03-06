/* emr-data/ludwigs-angina.js — EMR case data for Ludwig Angina (Submandibular Space Infection) */
window.EMR_DATA = {
  "patient": {
    "name": "Omar Hassan",
  "patientHPI": "I can barely breathe or swallow - the whole area under my jaw and the floor of my mouth is swollen up really bad, and it's spreading down into my neck. I know my teeth aren't in good shape and I haven't been taking care of my diabetes like I should, but this swelling came on fast and it's getting scary.",
    "dob": "03/26/1970",
    "age": "56",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-190325",
    "language": "English",
    "race": "White",
    "phone": "(414) 555-5876",
    "email": "omar.hassan@email.com",
    "address": "3497 E Roosevelt Rd, New Orleans, LA 70119",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Rite Aid — Federal Hwy",
    "emergencyContact": {
      "name": "Susan Garcia",
      "phone": "(803) 555-5735",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
    "diagnosis": "Ludwig Angina (Submandibular Space Infection)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Poorly controlled Type 2 Diabetes",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Dental neglect",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "IV drug use history",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Hepatitis C",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Methadone",
      "dose": "80mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-2",
      "name": "Metformin",
      "dose": "1000mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-3",
      "name": "Glipizide",
      "dose": "10mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Amy Patel, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Anaphylaxis (documented — CANNOT use any penicillin or ampicillin-based antibiotics)",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "06:57",
      "bp": "158/92",
      "hr": "124",
      "rr": "28",
      "temp": "39.6°C",
      "spo2": "89% on room air → 93% on 15L NRB",
      "pain": "/10",
      "bmi": "26",
      "weight": "71 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "hpi": "Omar Hassan is a 56-year-old male presenting with can barely breathe bilateral submandibular/sublingual — floor of mouth and anterior neck. Past medical history includes Poorly controlled Type 2 Diabetes, Dental neglect, IV drug use history, Hepatitis C. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ludwig Angina (Submandibular Space Infection) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-949361",
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
              "value": "24.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.1",
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
              "value": "178",
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
              "value": "4.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "100",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "27",
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
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "342",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
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
              "value": "3.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Blood Cultures",
              "value": "Pending — drawn before antibiotics",
              "unit": "",
              "range": "No growth",
              "flag": ""
            },
            {
              "test": "ABG pH",
              "value": "7.32",
              "unit": "",
              "range": "7.35-7.45",
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
      "accession": "IMG-658128",
      "clinical": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Neck with Contrast",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-306306",
      "clinical": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "technique": "Standard protocol",
      "findings": "BILATERAL SUBMANDIBULAR AND SUBLINGUAL SPACE CELLULITIS with diffuse soft tissue swelling and edema. Floor of mouth markedly thickened and elevated. Tongue base displaced superiorly and posteriorly, significantly narrowing the oropharyngeal airway (residual lumen <5mm). Airway patent but CRITICALLY NARROWED. Left lower molar periapical abscess (odontogenic source). Fat stranding throughout bilateral submandibular spaces. Small bilateral submandibular fluid collections (early abscess formation). No gas. No retropharyngeal extension. No mediastinal involvement (yet).",
      "impression": "LUDWIG ANGINA — bilateral submandibular/sublingual cellulitis with CRITICAL AIRWAY NARROWING (<5mm). Odontogenic source (left lower molar). EMERGENT AIRWAY MANAGEMENT REQUIRED. ENT/oral surgery for source control.",
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
      "accession": "IMG-159526",
      "clinical": "Can barely breathe Bilateral submandibular/sublingual — floor of mouth and anterior neck",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 124 bpm. No ST changes",
      "impression": "Sinus tachycardia — sepsis and respiratory distress",
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
    "Diabetes in family"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Current, 20 pack-years"
    ],
    [
      "Alcohol",
      "None currently"
    ],
    [
      "Drugs",
      "Prior IV heroin, now on methadone maintenance (2 years clean)"
    ],
    [
      "Occupation",
      "Warehouse worker"
    ],
    [
      "Living",
      "Lives alone in apartment"
    ]
  ]
};
