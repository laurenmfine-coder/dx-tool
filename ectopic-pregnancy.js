/* emr-data/ectopic-pregnancy.js — EMR case data for Ruptured Ectopic Pregnancy */
window.EMR_DATA = {
  "patient": {
    "name": "Aisha Mohammed",
  "patientHPI": "I suddenly got this sharp, stabbing pain in my lower right belly that came out of nowhere and won't go away. It's getting worse and I feel dizzy and nauseous - something is definitely not right.",
    "dob": "06/15/1997",
    "age": "29",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-155904",
    "language": "English",
    "race": "American Indian",
    "phone": "(720) 555-3419",
    "email": "aisha.mohammed@email.com",
    "address": "2499 Hickory Rd, Albuquerque, NM 87103",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walmart Pharmacy \u2014 University Dr",
    "emergencyContact": {
      "name": "William Hill",
      "phone": "(414) 555-2684",
      "relationship": "Parent"
    },
    "chiefComplaint": "Really bad pain in my lower belly Right lower abdomen and pelvis \u2014 sudden onset",
    "diagnosis": "Ruptured Ectopic Pregnancy"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Chlamydia infection",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No prior pregnancies",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Endometriosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Norethindrone",
      "dose": "0.35mg daily (progestin-only pill \u2014 started 4 months ago)",
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
      "time": "09:56",
      "bp": "92/58",
      "hr": "124",
      "rr": "22",
      "temp": "36.8\u00b0C",
      "spo2": "98%",
      "pain": "9/10",
      "bmi": "33",
      "weight": "70 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Really bad pain in my lower belly Right lower abdomen and pelvis \u2014 sudden onset",
      "hpi": "Aisha Mohammed is a 29-year-old female presenting with really bad pain in my lower belly right lower abdomen and pelvis \u2014 sudden onset. Past medical history includes Chlamydia infection, No prior pregnancies, Endometriosis. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Ruptured Ectopic Pregnancy \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-632165",
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
              "value": "13.4",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "8.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "48",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "198",
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
              "value": "136",
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
              "value": "101",
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
              "value": "13",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.7",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "85",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "8.9",
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
              "test": "\u03b2-hCG",
              "value": "4,200",
              "unit": "mIU/mL",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Type and Crossmatch",
              "value": "O negative, 2 units pRBC crossmatched",
              "unit": "",
              "range": "",
              "flag": ""
            },
            {
              "test": "Lactate",
              "value": "4.1",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "PT/INR",
              "value": "1.0",
              "unit": "",
              "range": "0.9-1.1",
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
      "accession": "IMG-728537",
      "clinical": "Really bad pain in my lower belly Right lower abdomen and pelvis \u2014 sudden onset",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS \u2013 FAST Exam",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-926737",
      "clinical": "Really bad pain in my lower belly Right lower abdomen and pelvis \u2014 sudden onset",
      "technique": "Standard protocol",
      "findings": "POSITIVE FREE FLUID in Morrison pouch and pelvis. Moderate amount of free fluid in pelvis (cul-de-sac). No intrauterine pregnancy visible in uterus. EMPTY UTERUS with endometrial stripe.",
      "impression": "FREE INTRAPERITONEAL FLUID + positive \u03b2-hCG + empty uterus = RUPTURED ECTOPIC PREGNANCY. OB/GYN to OR emergently.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "POCUS \u2013 Cardiac",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-148980",
      "clinical": "Really bad pain in my lower belly Right lower abdomen and pelvis \u2014 sudden onset",
      "technique": "Standard protocol",
      "findings": "Hyperdynamic LV function. Small, underfilled chambers (hypovolemia). No pericardial effusion.",
      "impression": "Hyperdynamic and volume-depleted \u2014 consistent with hemorrhagic shock",
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
      "accession": "IMG-317314",
      "clinical": "Really bad pain in my lower belly Right lower abdomen and pelvis \u2014 sudden onset",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 124 bpm. No ST changes",
      "impression": "Sinus tachycardia \u2014 hemorrhagic shock",
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
    "Mother: ectopic pregnancy (age 26)",
    "No other relevant history"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Social smoker, 2-3 cigarettes/day"
    ],
    [
      "Alcohol",
      "Social"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Restaurant server"
    ],
    [
      "Living",
      "Lives with partner, sexually active, not using barrier contraception"
    ]
  ]
};
