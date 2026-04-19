/* emr-data/penicillin-allergy-delabeling-v2.js — Multi-Setting Allergy Case Variation: Penicillin Allergy Evaluation */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Keisha Williams",
      "patientHPI": "I'm pregnant and due in about six weeks, but I'm worried because I think I might be allergic to penicillin and my doctor wants to make sure before delivery in case I need antibiotics.",
      "dob": "03/12/1988",
      "age": "38",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-980607",
      "language": "English",
      "race": "Black/African American",
      "phone": "(317) 555-4791",
      "email": "keisha.williams@email.com",
      "address": "6214 S Halsted St, Denver, CO 80201",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Michael Williams",
        "phone": "(313) 555-3474",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Mother told me I broke out as a baby — no details",
        "severity": "Unknown",
        "type": "Drug"
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "Mother: \"penicillin allergy\" (also unconfirmed)"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never"
      ],
      [
        "Pregnancy",
        "34 weeks pregnant — GBS positive, needs intrapartum penicillin"
      ],
      [
        "Obstetrics",
        "G2P1 at 34 weeks, GBS screen positive"
      ],
      [
        "Prior antibiotics",
        "Has avoided all beta-lactams entire life based on mother's report"
      ],
      [
        "Concern",
        "Very anxious about allergy testing while pregnant"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "34-week pregnant woman sent from OB for urgent penicillin allergy evaluation — GBS positive",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Penicillin allergy — unverified",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "GBS positive — 34 weeks",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Pregnancy",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prenatal vitamins",
          "dose": "",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "88",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-872176",
          "collected": "03/02/2026 08:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "7.4",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.6",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "140",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.1",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "14",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "94",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "34-week pregnant woman sent from OB for urgent penicillin allergy evaluation — GBS positive",
          "hpi": "38F G2P1 at 34 weeks referred urgently by OB for penicillin allergy evaluation.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "Urgent A/I consult — penicillin allergy evaluation at 34 weeks pregnancy for GBS prophylaxis",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Penicillin allergy — unverified childhood report, >95% chance of tolerance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "GBS positive — needs optimal prophylaxis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Pregnancy 34 weeks — skin testing safe in pregnancy",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Maternal anxiety — needs thorough counseling",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "116/72",
          "hr": "82",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-327982",
          "collected": "03/02/2026 08:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "11.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.6",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "140",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.1",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "14",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "94",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY TESTING",
              "results": [
                {
                  "test": "Penicillin SPT — Major determinant (PPL)",
                  "value": "Negative (2mm)",
                  "unit": "",
                  "range": "<3mm positive",
                  "flag": ""
                },
                {
                  "test": "Penicillin SPT — Minor determinant (MDM)",
                  "value": "Negative (1mm)",
                  "unit": "",
                  "range": "<3mm positive",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin SPT",
                  "value": "Negative (1mm)",
                  "unit": "",
                  "range": "<3mm positive",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin oral challenge (250mg)",
                  "value": "Tolerated — no reaction at 1 hour",
                  "unit": "",
                  "range": "",
                  "flag": ""
                },
                {
                  "test": "Histamine control",
                  "value": "Positive (5mm)",
                  "unit": "",
                  "range": "",
                  "flag": ""
                },
                {
                  "test": "Saline control",
                  "value": "Negative (0mm)",
                  "unit": "",
                  "range": "",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "Urgent A/I consult — penicillin allergy evaluation at 34 weeks pregnancy for GBS prophylaxis",
          "hpi": "A/I urgent consult: 38F at 34 weeks with unverified penicillin allergy, GBS positive. Counseled extensively: (1) childhood rash reports have >95% negative predictive value for true allergy, (2) skin testing is safe in pregnancy (performed routinely), (3) oral challenge with 250mg amoxicillin is standard of care, (4) if positive, alternatives exist but are inferior for GBS. Patient agreed to testing with OB nurse present for reassurance. RESULT: All skin tests NEGATIVE. Oral amoxicillin challenge tolerated without reaction. PCN allergy DELABELED. OB notified — can use penicillin G intrapartum. EMR allergy field updated. Patient and mother both informed that this was likely a non-allergic childhood rash.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Post-delivery follow-up — confirm delabeling, update records permanently",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Penicillin allergy — DELABELED (skin test negative, oral challenge tolerated, used intrapartum without reaction)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Status post delivery at 37 weeks — used penicillin G intrapartum without issue",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "GBS prophylaxis — successful",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Postpartum — doing well",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prenatal vitamins",
          "dose": "",
          "route": "PO",
          "frequency": "Daily (breastfeeding)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Ibuprofen",
          "dose": "400mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "112/68",
          "hr": "72",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-546489",
          "collected": "03/02/2026 08:10",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "7.4",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.6",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
                  "flag": ""
                }
              ]
            },
            {
              "name": "BASIC METABOLIC PANEL",
              "results": [
                {
                  "test": "Sodium",
                  "value": "140",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.1",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "14",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "94",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Post-delivery follow-up — confirm delabeling, update records permanently",
          "hpi": "38F returns 4 weeks postpartum. Delivered at 37 weeks, received penicillin G intrapartum for GBS prophylaxis — no allergic reaction. Baby born healthy. Penicillin allergy permanently removed from all records. Patient very grateful — \"I can't believe I avoided penicillin my whole life for nothing.\" Counseled that her mother's report was likely a childhood viral exanthem mistaken for drug reaction. Mother also referred for her own delabeling evaluation.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Keisha Williams",
    "dob": "03/12/1988",
    "age": "38",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-980607",
    "language": "English",
    "race": "Black/African American",
    "phone": "(212) 555-4583",
    "email": "keisha.williams@email.com",
    "address": "209 Jasmine Way, Chicago, IL 60601",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Michael Williams",
      "phone": "(617) 555-8471",
      "relationship": "Spouse"
    },
    "chiefComplaint": "34-week pregnant woman sent from OB for urgent penicillin allergy evaluation — GBS positive",
    "diagnosis": "Penicillin Allergy Evaluation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Penicillin allergy — unverified",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "GBS positive — 34 weeks",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Pregnancy",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Prenatal vitamins",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Mother told me I broke out as a baby — no details",
      "severity": "Unknown",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "118/72",
      "hr": "88",
      "rr": "16",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "0/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "34-week pregnant woman sent from OB for urgent penicillin allergy evaluation — GBS positive",
      "hpi": "38F G2P1 at 34 weeks referred urgently by OB for penicillin allergy evaluation.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-872176",
      "collected": "03/02/2026 08:10",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Eosinophils",
              "value": "2",
              "unit": "%",
              "range": "1-4",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.1",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/2025",
      "lot": "FL-25",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Mother: \"penicillin allergy\" (also unconfirmed)"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Pregnancy",
      "34 weeks pregnant — GBS positive, needs intrapartum penicillin"
    ],
    [
      "Obstetrics",
      "G2P1 at 34 weeks, GBS screen positive"
    ],
    [
      "Prior antibiotics",
      "Has avoided all beta-lactams entire life based on mother's report"
    ],
    [
      "Concern",
      "Very anxious about allergy testing while pregnant"
    ]
  ],
  "references": [
    {
      "id": "Drug-Allergy-PP-2022",
      "title": "Drug allergy: A 2022 practice parameter update",
      "authors": "Khan DA, Banerji A, Blumenthal KG, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2022,
      "doi": "10.1016/j.jaci.2022.08.028",
      "url": "https://www.jacionline.org/article/S0091-6749(22)01186-1/fulltext",
      "openAccess": true,
      "validates": [
        "PCN skin testing for anaphylaxis history; direct challenge for remote benign reactions",
        "Single-dose amoxicillin challenge for low-risk",
        "Vancomycin RMS management",
        "AERD aspirin desensitization protocol",
        "Sulfonamide challenge protocols"
      ]
    },
    {
      "id": "PCN-NEJM-2019",
      "title": "Penicillin allergy",
      "authors": "Castells M, Khan DA, Phillips EJ.",
      "journal": "N Engl J Med",
      "year": 2019,
      "doi": "10.1056/NEJMra1807761",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK448069/",
      "openAccess": true,
      "validates": [
        ">90% with PCN label NOT truly allergic",
        ">80% lose sensitivity after 10 years",
        "Morbilliform rash in children = usually viral exanthem",
        "False PCN allergy → MRSA, C. diff, longer stays, higher mortality"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Keisha appears anxious and worried, frequently placing her hands on her belly protectively. She is very forthcoming about her concerns but becomes visibly distressed when discussing potential allergy testing, expressing fear about harming her baby while also wanting to do what's best for delivery.",
    "interviewQuestions": [
      "Can you tell me exactly what happened when you had a reaction to penicillin?",
      "How old were you when this penicillin reaction occurred?",
      "Who told you that you were allergic to penicillin?",
      "What specific symptoms did you experience with penicillin?",
      "Have you ever actually taken penicillin or amoxicillin yourself?",
      "What other antibiotics have you taken without problems?",
      "Tell me about your mother's penicillin allergy - what happened to her?",
      "Have you ever been tested for penicillin allergy by an allergist?",
      "What did your OB doctor tell you about GBS and why you need antibiotics?",
      "Are you having any contractions or signs of labor starting?",
      "How has this pregnancy been going overall?",
      "Do you have any other drug allergies or food allergies?",
      "Have you ever had severe allergic reactions to anything else?"
    ],
    "patientResponses": {
      "default": "I'm not sure about that - I'm just really worried about what's safe for my baby right now.",
      "onset": "I've never actually taken penicillin myself. My mom told me when I was little that I was allergic because she is, and I've avoided it my whole life.",
      "character": "I don't really know what my reaction would be like since I've never had one myself. My mom said she got a rash.",
      "location": "I've never had any reaction myself, but my mom said she got a rash all over her body.",
      "severity": "I don't know how severe it would be - that's what scares me. I've just been told to avoid it completely.",
      "aggravating": "My anxiety gets worse when I think about having to take something I've been told could hurt me, especially while I'm pregnant.",
      "relieving": "Nothing really helps my worry except knowing that whatever we do will be safe for the baby.",
      "associated": "I don't have any symptoms right now. I just feel anxious and scared about the delivery and needing antibiotics.",
      "denies": "I've never had trouble breathing, swelling of my face or throat, or any severe reactions to anything. No hives or severe rashes.",
      "history": "I've never actually taken penicillin, so I've never had a reaction myself. This is all based on what my family told me.",
      "medications": "Prenatal vitamins",
      "allergies": "Penicillin",
      "family": "My mother says she's allergic to penicillin and got a rash, but I don't think she was ever properly tested either.",
      "social": "I work as a teacher, don't smoke or drink. This is my second pregnancy - my first delivery went well. I'm 34 weeks along and my GBS test came back positive."
    },
    "examManeuvers": [
      "General appearance and vital signs",
      "Skin examination for rashes or urticaria",
      "HEENT examination for angioedema",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Lymph node examination",
      "Fundal height measurement",
      "Fetal heart tones assessment",
      "Assessment for signs of preterm labor",
      "Extremity examination for edema"
    ],
    "examFindings": {
      "General appearance and vital signs": "Well-appearing pregnant woman in no distress, vital signs stable and normal for pregnancy",
      "Skin examination for rashes or urticaria": "No rashes, urticaria, or other skin lesions present",
      "HEENT examination for angioedema": "No facial swelling, lip swelling, or tongue swelling present",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, normal S1 and S2",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezing or respiratory distress",
      "Lymph node examination": "No lymphadenopathy palpated",
      "Fundal height measurement": "Fundal height appropriate for 34 weeks gestation",
      "Fetal heart tones assessment": "Fetal heart rate 140s, regular rhythm, reassuring",
      "Assessment for signs of preterm labor": "No contractions, cervix closed, no signs of preterm labor",
      "Extremity examination for edema": "Trace pedal edema, normal for third trimester"
    },
    "ddxTargets": [
      "Unverified penicillin allergy (family history based) (correct diagnosis)",
      "Low-risk penicillin allergy (remote childhood rash)",
      "Penicillin intolerance rather than true allergy",
      "True IgE-mediated penicillin allergy (must-not-miss diagnosis 1)",
      "Severe penicillin allergy with anaphylaxis risk (must-not-miss diagnosis 2)",
      "Non-allergic drug reaction misattributed to penicillin (common mimic 1)",
      "Anxiety-related symptoms misinterpreted as allergic reaction (common mimic 2)"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the documented 'penicillin allergy' without exploring that patient has never actually taken penicillin or had a reaction herself",
      "prematureClosure": "Risk of immediately accepting family-reported allergy without detailed history-taking to determine if this is a true allergy versus family assumption",
      "availabilityBias": "Recent cases of severe penicillin allergy may influence assessment, when most reported penicillin allergies are actually unverified or low-risk"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider what specific details about her allergy history would be most important to determine the actual risk. What questions would help you distinguish between a true IgE-mediated reaction, a family assumption, and other possibilities?",
      "phase5": "Based on your history and exam, what does it tell you that she's never actually taken penicillin herself? How does this change your risk assessment, and what are the implications for her GBS-positive pregnancy management?",
      "finalDebrief": "This case highlights how many 'penicillin allergies' are unverified family assumptions rather than true allergies. Notice how your differential evolved from accepting the allergy label to questioning its validity. What systematic approach would you use for all patients with reported drug allergies?"
    }
  }
};
