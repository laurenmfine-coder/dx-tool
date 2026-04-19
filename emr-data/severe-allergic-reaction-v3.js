/* emr-data/severe-allergic-reaction-v3.js — Variation: Severe Allergic Reaction */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Jordan Mitchell",
      "patientHPI": "When I was five years old, I got a rash all over my body while taking medicine for an ear infection - my mom thinks it was from the antibiotic but I'm not sure.",
      "dob": "10/08/2004",
      "age": "22",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-525336",
      "language": "English",
      "race": "Black/African American",
      "phone": "(502) 555-2257",
      "email": "jordan.mitchell@email.com",
      "address": "9609 Cedar Blvd, Minneapolis, MN 55411",
      "insurance": "University student plan",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Sarah Mitchell",
        "phone": "(702) 555-2479",
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
    "phone": "(630) 555-9307",
    "email": "jordan.mitchell@email.com",
    "address": "3184 S Halsted St, Phoenix, AZ 85004",
    "insurance": "University student plan",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Sarah Mitchell",
      "phone": "(505) 555-8581",
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
  ],
  "references": [
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
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Jordan appears frustrated and anxious about the delayed surgery affecting his basketball season. He's cooperative but dismissive of the allergy concern, stating 'it was just a rash when I was little' and expressing urgency to get cleared for the procedure.",
    "interviewQuestions": [
      "Can you describe exactly what happened when you had the reaction to amoxicillin?",
      "How old were you when this allergic reaction occurred?",
      "What did the rash look like - was it raised, flat, itchy, or painful?",
      "Were you sick with anything else when you took the amoxicillin?",
      "Did you have any trouble breathing, swelling of face or throat, or dizziness?",
      "How long after taking the medication did the rash appear?",
      "Did the rash go away on its own or did you need treatment?",
      "Have you ever taken penicillin or similar antibiotics since then?",
      "Why are you needing the wisdom tooth surgery now?",
      "What has the oral surgeon told you about antibiotic options?",
      "Are you having any current symptoms or problems?",
      "Has anyone in your family had serious drug allergies?",
      "Are you taking any medications or supplements currently?"
    ],
    "patientResponses": {
      "default": "I'm not sure what that has to do with my allergy. I just need to get cleared so I can have my surgery and get back to playing basketball.",
      "onset": "I was about 5 years old, had an ear infection, and got a rash a few days after starting the antibiotic. My mom says it was amoxicillin.",
      "character": "It was just a red rash all over my body - flat red spots, not really raised. It wasn't super itchy, just looked bad.",
      "location": "The rash was pretty much everywhere - my chest, back, arms, legs. It was most noticeable on my trunk.",
      "severity": "The rash wasn't painful or anything, maybe 2 out of 10 for being bothersome. It just looked scary to my parents.",
      "aggravating": "I don't remember anything making it worse. I was just a little kid with an ear infection.",
      "relieving": "I think it just went away on its own after a few days. I don't remember taking anything special for it.",
      "associated": "I had the ear infection - fever, ear pain. I was pretty sick with what my mom said was a bad cold or virus too.",
      "denies": "No trouble breathing, no swelling of my face or throat, no dizziness or feeling faint. Just the rash.",
      "history": "This was the only time. I've been avoiding penicillin-type antibiotics my whole life because of this allergy label.",
      "medications": "no medications",
      "allergies": "Amoxicillin",
      "family": "No one in my family has serious drug allergies. My mom has some seasonal allergies but that's it.",
      "social": "I'm a college basketball player, starter on the team. Don't smoke, maybe drink socially on weekends, no drugs. I need this surgery done before conference play starts."
    },
    "examManeuvers": [
      "General appearance and vital signs",
      "HEENT examination",
      "Lymph node examination",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Skin examination for current rashes or lesions",
      "Neurological screening examination"
    ],
    "examFindings": {
      "General appearance and vital signs": "Well-appearing, athletic young male in no distress. Vital signs stable and normal.",
      "HEENT examination": "Normal head and neck exam. Oropharynx clear, no dental pain currently, wisdom teeth visible but not impacted.",
      "Lymph node examination": "No lymphadenopathy in cervical, axillary, or inguinal regions.",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, rubs, or gallops. Normal heart sounds.",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezes, rales, or rhonchi. Normal respiratory effort.",
      "Abdominal examination": "Soft, non-tender, non-distended. Normal bowel sounds, no organomegaly.",
      "Skin examination for current rashes or lesions": "No current rash, lesions, or signs of allergic dermatitis. Skin appears normal.",
      "Neurological screening examination": "Alert and oriented, normal speech and cognition. No focal neurological deficits."
    },
    "ddxTargets": [
      "Mislabeled drug allergy - viral exanthem (correct diagnosis)",
      "True IgE-mediated penicillin allergy",
      "Delayed-type hypersensitivity reaction",
      "Stevens-Johnson syndrome history",
      "Drug reaction with eosinophilia and systemic symptoms (DRESS)",
      "Concurrent viral illness with coincidental rash",
      "Contact dermatitis misattributed to medication"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the 'allergy' label without questioning the validity of a childhood reaction that occurred during concurrent viral illness",
      "prematureClosure": "Risk of accepting the allergy history at face value without exploring the clinical details that suggest viral exanthem rather than true drug allergy",
      "availabilityBias": "May overestimate probability of true penicillin allergy due to common knowledge of penicillin reactions, rather than recognizing the high frequency of mislabeled allergies"
    },
    "coachPrompts": {
      "phase2": "This patient has been labeled with an amoxicillin allergy since childhood. What key historical features would help you distinguish between a true IgE-mediated drug allergy versus a viral exanthem that was coincidentally attributed to the antibiotic?",
      "phase5": "Based on your history and physical exam, what elements of this patient's story make you more or less concerned about a true penicillin allergy? Consider the timing, clinical context, and description of the reaction.",
      "finalDebrief": "This case highlights how false drug allergy labels create downstream clinical problems. What red flags suggested this was likely a viral exanthem rather than true drug allergy? How does this mislabeling impact antibiotic selection and surgical prophylaxis decisions?"
    }
  }
};
