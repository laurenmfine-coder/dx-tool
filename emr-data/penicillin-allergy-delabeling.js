/* emr-data/penicillin-allergy-delabeling.js — Multi-Setting Allergy Case: Penicillin Allergy Evaluation */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Patricia O'Brien",
      "patientHPI": "I'm supposed to have surgery next week, but I got really anxious thinking about whether I might be allergic to penicillin since I'm not really sure, and I ended up in the emergency room because I was so worried about it.",
      "dob": "04/24/1968",
      "age": "58",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-537466",
      "language": "English",
      "race": "White",
      "phone": "(313) 555-2527",
      "email": "patricia.obrien@email.com",
      "address": "9215 Clover St, Baltimore, MD 21213",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "Publix Pharmacy — Weston Rd",
      "emergencyContact": {
        "name": "David O'Brien",
        "phone": "(513) 555-2582",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Rash as a child (age 5)",
        "severity": "Unknown — remote history",
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
        "History",
        "Told she had rash with amoxicillin at age 5 — mother's report, no details"
      ],
      [
        "Impact",
        "Has avoided all penicillins and cephalosporins for 53 years"
      ],
      [
        "Surgery",
        "Orthopedic surgeon requests A/I clearance for cefazolin use"
      ],
      [
        "Teaching point",
        "90%+ of labeled penicillin allergies are not true allergies"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Pre-surgical patient — ED visit for allergic reaction concern, found to be anxiety",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood — rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "148/88",
          "hr": "102",
          "rr": "20",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-879945",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Pre-surgical patient — ED visit for allergic reaction concern, found to be anxiety",
          "hpi": "Patricia O'Brien — Pre-surgical patient — ED visit for allergic reaction concern, found to be anxiety",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Pre-surgical admission — A/I cleared for cefazolin after penicillin delabeling",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood — rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Cefazolin",
          "dose": "2g",
          "route": "IV",
          "frequency": "Surgical prophylaxis",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "128/76",
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
          "accession": "LAB-879945",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Pre-surgical admission — A/I cleared for cefazolin after penicillin delabeling",
          "hpi": "Patricia O'Brien — Pre-surgical admission — A/I cleared for cefazolin after penicillin delabeling",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "Pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis",
        "diagnosis": "Penicillin Allergy — Delabeling Assessment"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood — rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "132/78",
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
          "accession": "LAB-879945",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "provider": "Dr. Allergist (Consultant)",
          "cc": "Pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis",
          "hpi": "Patricia O'Brien presents with pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis.",
          "exam": "See documentation.",
          "assessment": "Penicillin Allergy — Delabeling Assessment",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Penicillin allergy evaluation — skin testing and oral amoxicillin challenge",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood — rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "132/78",
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
          "accession": "LAB-879945",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Penicillin allergy evaluation — skin testing and oral amoxicillin challenge",
          "hpi": "Patricia O'Brien — Penicillin allergy evaluation — skin testing and oral amoxicillin challenge",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Patricia O'Brien",
    "dob": "04/24/1968",
    "age": "58",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-537466",
    "language": "English",
    "race": "White",
    "phone": "(720) 555-7105",
    "email": "patricia.obrien@email.com",
    "address": "5893 Lavender St, Detroit, MI 48209",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "David O'Brien",
      "phone": "(804) 555-3131",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis",
    "diagnosis": "Penicillin Allergy — Delabeling Assessment"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Scheduled for total knee replacement in 2 weeks",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Labeled 'penicillin allergy' since childhood — rash reported",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Amlodipine",
      "dose": "5mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Acetaminophen",
      "dose": "500mg",
      "route": "PO",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Rash as a child (age 5)",
      "severity": "Unknown — remote history",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "132/78",
      "hr": "72",
      "rr": "14",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "0/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "Pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis",
      "hpi": "Patricia O'Brien presents with pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis.",
      "exam": "See documentation.",
      "assessment": "Penicillin Allergy — Delabeling Assessment",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-879945",
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
              "value": "7.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "248",
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
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            }
          ]
        },
        {
          "name": "ALLERGY & IMMUNOLOGY STUDIES",
          "results": [
            {
              "test": "Penicillin S P T",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "Amoxicillin I D T",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
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
      "History",
      "Told she had rash with amoxicillin at age 5 — mother's report, no details"
    ],
    [
      "Impact",
      "Has avoided all penicillins and cephalosporins for 53 years"
    ],
    [
      "Surgery",
      "Orthopedic surgeon requests A/I clearance for cefazolin use"
    ],
    [
      "Teaching point",
      "90%+ of labeled penicillin allergies are not true allergies"
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
  "teachingPoints": {
    "keyLearning": [
      "10% of patients are labeled penicillin-allergic but >95% can tolerate penicillin on formal evaluation. IgE to penicillin wanes over time: 80% lose SPT reactivity within 5 years, 98% within 10 years. The most common reason for false labels: viral rash misattributed to amoxicillin (especially EBV + amoxicillin — maculopapular rash in 80–100% of EBV/amoxicillin patients is NOT IgE).",
      "AAAAI 2022 risk stratification: low-risk patients (vague/non-specific symptoms, >10 years ago, no systemic features) → graded amoxicillin challenge directly, NO skin testing required. This approach safely de-labels most patients without need for SPT.",
      "Cross-reactivity between penicillins and cephalosporins is determined by R1 side chain identity, NOT the shared beta-lactam ring. True immunologic cross-reactivity <2%. Amoxicillin/ampicillin share R1 with cephalexin/cefadroxil/cefprozil — higher cross-reactivity risk with these specific pairs."
    ],
    "boardPearls": [
      "Penicillin IgE wanes: 80% at 5 years, 98% at 10 years. Most labels are outdated.",
      "EBV + amoxicillin rash: 80–100% maculopapular rash. NOT IgE. NOT penicillin allergy. Do not label.",
      "PPL (Pre-Pen): major penicillin determinant — detects 95% of penicillin-specific IgE. Required for skin test.",
      "Low risk → graded amoxicillin challenge directly (AAAAI 2022). No skin testing needed.",
      "Moderate risk → skin test first (PPL + pen G). Negative → graded challenge.",
      "Cross-reactivity: determined by R1 side chain, NOT beta-lactam ring. True cross-reactivity <2%.",
      "Amoxicillin shares R1 with: cephalexin, cefadroxil, cefprozil, cefaclor (higher risk). NOT with ceftriaxone, cefepime, cefuroxime (different R1, safe).",
      "Penicillin allergy impact: 60% more vancomycin use, higher MRSA/CDiff risk, longer hospitalizations."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patricia is anxious about her upcoming surgery and concerned about the allergy issue, but cooperative and eager to resolve the situation safely. She appears somewhat frustrated having avoided many antibiotics her whole life based on a childhood incident she barely remembers.",
    "interviewQuestions": [
      "Can you tell me exactly what happened when you had the reaction to penicillin?",
      "How old were you when this reaction occurred?",
      "What type of rash did you develop - was it itchy, raised, flat, or widespread?",
      "How quickly after taking the medication did the rash appear?",
      "Did you have any trouble breathing, swelling of face or throat, or dizziness?",
      "Have you ever accidentally taken penicillin or related antibiotics since then?",
      "What antibiotics have you safely taken in the past for infections?",
      "Do you have any other drug allergies or reactions?",
      "Have you ever been tested by an allergist for penicillin allergy?",
      "Are you aware that you might need a specific antibiotic for your surgery?",
      "Do you have any family history of drug allergies?",
      "Have you had any recent infections or illnesses?",
      "Are you having any current symptoms like rash, itching, or breathing problems?"
    ],
    "patientResponses": {
      "default": "I'm not sure about that - I just know I need to be careful with antibiotics because of my allergy.",
      "onset": "I was told this happened when I was about 5 years old, so I don't really remember it myself.",
      "character": "My mother said I got some kind of rash, but I honestly don't remember the details - it was over 50 years ago.",
      "location": "I think it was on my body somewhere, but I really can't recall exactly where the rash was.",
      "severity": "I don't know how bad it was - my mother handled everything and just told me to always avoid penicillin.",
      "aggravating": "I've been very careful to avoid all penicillins since then, so I haven't had any problems.",
      "relieving": "I assume it went away on its own, but I really don't have details about the treatment.",
      "associated": "No, I don't remember having trouble breathing, swelling, or anything like that - just a rash.",
      "denies": "No difficulty breathing, no swelling of my face or throat, no dizziness or fainting.",
      "history": "This was just the one time as a child - I've successfully avoided penicillin ever since.",
      "medications": "Amlodipine; Acetaminophen",
      "allergies": "Penicillin",
      "family": "Not that I'm aware of - my mother never mentioned anyone else in the family having drug allergies.",
      "social": "I'm a retired teacher, don't smoke, maybe one glass of wine with dinner, no drugs. I'm quite active which is why I need this knee replacement."
    },
    "examManeuvers": [
      "General appearance and vital signs review",
      "Skin examination for current rash or lesions",
      "Lymph node examination",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Examination of knee requiring surgery",
      "Assessment of current medication tolerance",
      "Review of any current allergic symptoms",
      "Documentation of historical reaction details"
    ],
    "examFindings": {
      "General appearance and vital signs review": "Well-appearing woman in no acute distress, vitals stable with mild hypertension",
      "Skin examination for current rash or lesions": "No acute rash, urticaria, or skin lesions present",
      "Lymph node examination": "No lymphadenopathy palpated",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezing",
      "Abdominal examination": "Soft, non-tender, no organomegaly",
      "Examination of knee requiring surgery": "Right knee with degenerative changes, limited range of motion",
      "Assessment of current medication tolerance": "Reports tolerating current medications without issue",
      "Review of any current allergic symptoms": "No current symptoms suggestive of allergic reaction",
      "Documentation of historical reaction details": "Patient unable to provide specific details of childhood reaction"
    },
    "ddxTargets": [
      "Questionable penicillin allergy requiring evaluation (correct diagnosis)",
      "True IgE-mediated penicillin allergy",
      "Non-allergic drug reaction in childhood",
      "Anaphylaxis risk with beta-lactam exposure",
      "Stevens-Johnson syndrome risk",
      "Viral exanthem misattributed to antibiotic",
      "Simple drug intolerance rather than allergy"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the documented 'penicillin allergy' without questioning its validity or investigating the vague historical details",
      "prematureClosure": "Risk of immediately accepting the allergy label and pursuing alternatives without considering penicillin allergy testing or delabeling",
      "availabilityBias": "Risk of overestimating true penicillin allergy prevalence when most childhood 'allergic' reactions are actually viral rashes or non-IgE mediated"
    },
    "coachPrompts": {
      "phase2": "Before interviewing the patient, consider what specific details about this 'penicillin allergy' would help you determine if it's a true IgE-mediated reaction. What percentage of labeled penicillin allergies are actually true allergies? What are the implications for surgical prophylaxis?",
      "phase5": "Now that you've gathered the history, what does the vague nature of this childhood reaction tell you? Consider the timeline, the lack of systemic symptoms, and the patient's inability to provide details. How might this influence your approach to surgical antibiotic prophylaxis?",
      "finalDebrief": "This case illustrates how healthcare providers can help delabel inappropriate drug allergies. Most childhood penicillin 'allergies' are viral rashes coinciding with antibiotic use. The lack of detail, absence of systemic symptoms, and remote timing suggest this patient could likely receive cefazolin safely, potentially after allergy consultation or testing. How did your assessment of this allergy evolve during the case?"
    }
  }
};
