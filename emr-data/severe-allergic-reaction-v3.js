/* emr-data/severe-allergic-reaction-v3.js — Variation: Severe Allergic Reaction */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Jordan Mitchell",
      "dob": "10/08/2004",
      "age": "22",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-525336",
      "language": "English",
      "race": "Black/African American",
      "phone": "(284) 333-6362",
      "email": "jordan.mitchell@email.com",
      "address": "2531 Oak St, Weston, FL 33326",
      "insurance": "University student plan",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Sarah Mitchell",
        "phone": "(486) 774-6436",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Amoxicillin",
        "reaction": "Morbilliform rash (age 5)",
        "severity": "Mild",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Context",
        "College athlete (basketball) — needs wisdom tooth extraction, surgeon won't operate without \"clearing\" amoxicillin allergy"
      ],
      [
        "History",
        "Rash at age 5 during ear infection — likely viral exanthem, not true drug allergy"
      ],
      [
        "Impact",
        "Surgery delayed 3 weeks waiting for allergy evaluation"
      ],
      [
        "Concern",
        "Amoxicillin allergy label forcing surgeon to use clindamycin prophylaxis (inferior, C. diff risk)"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Not an ED case — but illustrates how false allergy labels cause downstream problems",
        "diagnosis": "Severe Allergic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Amoxicillin \"allergy\" from childhood — likely viral exanthem",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Surgical delay due to allergy label",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Alternative antibiotic (clindamycin) carries C. diff risk",
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
          "bp": "118/72",
          "hr": "62",
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
          "accession": "LAB-747420",
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
          "cc": "Not an ED case — but illustrates how false allergy labels cause downstream problems",
          "hpi": "22M college basketball player referred for allergy evaluation before wisdom tooth extraction. Surgeon requires amoxicillin clearance or will use clindamycin prophylaxis. History: morbilliform rash at age 5 during amoxicillin course for otitis media. This pattern (morbilliform rash during acute infection in young child) is >90% likely to be viral exanthem, not drug allergy. The \"allergy\" label has persisted for 17 years.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "N/A — outpatient evaluation",
        "diagnosis": "Severe Allergic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Outpatient only",
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
          "bp": "118/72",
          "hr": "62",
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
          "accession": "LAB-356395",
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
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "N/A — outpatient evaluation",
          "hpi": "Outpatient evaluation only.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — amoxicillin allergy evaluation for pre-surgical clearance",
        "diagnosis": "Severe Allergic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Amoxicillin \"allergy\" — childhood morbilliform rash, almost certainly viral exanthem",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Pre-surgical evaluation — surgeon needs clearance for amoxicillin prophylaxis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Alternative (clindamycin) — inferior coverage, C. diff risk, should be avoided if possible",
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
          "bp": "118/72",
          "hr": "62",
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
          "accession": "LAB-787718",
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
                  "test": "Penicillin SPT — Major",
                  "value": "Negative",
                  "unit": "",
                  "range": "<3mm",
                  "flag": ""
                },
                {
                  "test": "Penicillin SPT — Minor",
                  "value": "Negative",
                  "unit": "",
                  "range": "<3mm",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin SPT",
                  "value": "Negative",
                  "unit": "",
                  "range": "<3mm",
                  "flag": ""
                },
                {
                  "test": "Oral amoxicillin challenge 250mg",
                  "value": "Tolerated — no reaction at 1h",
                  "unit": "",
                  "range": "",
                  "flag": ""
                },
                {
                  "test": "Oral amoxicillin challenge 500mg",
                  "value": "Tolerated — no reaction at 1h",
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
          "cc": "A/I consult — amoxicillin allergy evaluation for pre-surgical clearance",
          "hpi": "A/I consult: 22M with 17-year amoxicillin \"allergy\" label based on childhood morbilliform rash during ear infection. Skin testing: all negative. Graded oral challenge: tolerated 250mg then 500mg amoxicillin without reaction. ALLERGY DELABELED. EMR updated. Surgeon notified — can use amoxicillin prophylaxis (superior coverage, no C. diff risk). This case illustrates the cascade harm of false allergy labels: delayed surgery → inferior antibiotic choice → unnecessary C. diff risk → all from a viral rash 17 years ago.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Post-surgery follow-up — amoxicillin used successfully, allergy permanently removed",
        "diagnosis": "Severe Allergic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Amoxicillin allergy — DELABELED after negative testing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Wisdom tooth extraction completed with amoxicillin prophylaxis — no reaction",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "17-year false allergy label resolved",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amoxicillin",
          "dose": "500mg",
          "route": "PO",
          "frequency": "TID x7 days (post-surgical — tolerated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "64",
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
          "accession": "LAB-201480",
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
          "cc": "Post-surgery follow-up — amoxicillin used successfully, allergy permanently removed",
          "hpi": "22M returns after successful wisdom tooth extraction. Used amoxicillin prophylaxis and post-op course — zero reaction. Allergy permanently removed from all records. Back to basketball practice.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Jordan Mitchell",
    "dob": "10/08/2004",
    "age": "22",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-525336",
    "language": "English",
    "race": "Black/African American",
    "phone": "(284) 333-6362",
    "email": "jordan.mitchell@email.com",
    "address": "2531 Oak St, Weston, FL 33326",
    "insurance": "University student plan",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Sarah Mitchell",
      "phone": "(486) 774-6436",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Not an ED case — but illustrates how false allergy labels cause downstream problems",
    "diagnosis": "Severe Allergic Reaction"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Amoxicillin \"allergy\" from childhood — likely viral exanthem",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Surgical delay due to allergy label",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Alternative antibiotic (clindamycin) carries C. diff risk",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [],
  "allergies": [
    {
      "allergen": "Amoxicillin",
      "reaction": "Morbilliform rash (age 5)",
      "severity": "Mild",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "118/72",
      "hr": "62",
      "rr": "14",
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
      "cc": "Not an ED case — but illustrates how false allergy labels cause downstream problems",
      "hpi": "22M college basketball player referred for allergy evaluation before wisdom tooth extraction. Surgeon requires amoxicillin clearance or will use clindamycin prophylaxis. History: morbilliform rash at age 5 during amoxicillin course for otitis media. This pattern (morbilliform rash during acute infection in young child) is >90% likely to be viral exanthem, not drug allergy. The \"allergy\" label has persisted for 17 years.",
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
      "accession": "LAB-747420",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Context",
      "College athlete (basketball) — needs wisdom tooth extraction, surgeon won't operate without \"clearing\" amoxicillin allergy"
    ],
    [
      "History",
      "Rash at age 5 during ear infection — likely viral exanthem, not true drug allergy"
    ],
    [
      "Impact",
      "Surgery delayed 3 weeks waiting for allergy evaluation"
    ],
    [
      "Concern",
      "Amoxicillin allergy label forcing surgeon to use clindamycin prophylaxis (inferior, C. diff risk)"
    ]
  ]
,"references":[
  {
    "id": "GA2LEN-2025",
    "title": "Anaphylaxis definition, overview, and clinical support tool: 2024 consensus report",
    "authors": "Dribin TE, Muraro A, Camargo CA, Turner PJ, Wang J, et al.",
    "journal": "J Allergy Clin Immunol",
    "year": 2025,
    "doi": "10.1016/j.jaci.2025.01.021",
    "url": "https://www.jacionline.org/article/S0091-6749(25)00072-7/fulltext",
    "openAccess": true,
    "validates": [
      "Anaphylaxis diagnostic criteria",
      "Epinephrine IM dosing",
      "Biphasic reaction monitoring",
      "Neffy nasal epinephrine"
    ]
  },
  {
    "id": "JTFPP-Anaph-2023",
    "title": "Anaphylaxis: A 2023 practice parameter update",
    "authors": "Golden DBK, Wang J, Waserman S, et al.",
    "journal": "Ann Allergy Asthma Immunol",
    "year": 2023,
    "doi": "10.1016/j.anai.2023.09.015",
    "url": "https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Anaphylaxis-Practice-Paramaters-2023.pdf",
    "openAccess": true,
    "validates": [
      "Glucagon for beta-blocker patients",
      "Tryptase measurement timing",
      "0.1/0.15mg epi for infants",
      "MCAS screening after anaphylaxis"
    ]
  },
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
