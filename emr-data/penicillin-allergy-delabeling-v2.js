/* emr-data/penicillin-allergy-delabeling-v2.js — Multi-Setting Allergy Case Variation: Penicillin Allergy Evaluation */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Keisha Williams",
      "dob": "03/12/1988",
      "age": "38",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-980607",
      "language": "English",
      "race": "Black/African American",
      "phone": "(587) 824-1939",
      "email": "keisha.williams@email.com",
      "address": "5141 Oak St, Weston, FL 33326",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Michael Williams",
        "phone": "(469) 827-5325",
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
    "phone": "(587) 824-1939",
    "email": "keisha.williams@email.com",
    "address": "5141 Oak St, Weston, FL 33326",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Michael Williams",
      "phone": "(469) 827-5325",
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
  ]
,"references":[
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
]};
