/* emr-data/drug-allergy-vancomycin-rms.js — Multi-Setting Allergy Case: Vancomycin Red Man Syndrome */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Gerald Hagen",
  "patientHPI": "About halfway through getting my IV antibiotic, my skin started turning red and I began itching all over my upper body. The itching was really intense and uncomfortable, so they called for the allergy team to come check on me.",
      "dob": "11/09/1961",
      "age": "65",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-786422",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(702) 555-9109",
      "email": "gerald.hagen@email.com",
      "address": "1455 Magnolia Blvd, Richmond, VA 23219",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Jennifer Hagen",
        "phone": "(513) 555-9056",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Vancomycin",
        "reaction": "Flushing and pruritus during infusion",
        "severity": "Unknown — needs evaluation",
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
        "Infusion details",
        "1g infused over 30 minutes (too fast) — flushing appeared in upper body"
      ],
      [
        "Key question",
        "Rate-related RMS vs true IgE-mediated allergy?"
      ],
      [
        "Plan consideration",
        "Slower infusion rate, premedication, vs desensitization protocol"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Flushing and pruritus during vancomycin infusion — called code allergy",
        "diagnosis": "Vancomycin Red Man Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia — needs vancomycin",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Developed flushing/rash during first infusion",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H (held after reaction)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Diphenhydramine",
          "dose": "50mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Vancomycin stopped",
          "dose": "",
          "route": "",
          "frequency": "",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "142/84",
          "hr": "96",
          "rr": "18",
          "temp": "38.2°C",
          "spo2": "98%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-878164",
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
                  "test": "Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "Vancomycin Trough",
                  "value": "12",
                  "unit": "mcg/mL",
                  "range": "15-20",
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
          "cc": "Flushing and pruritus during vancomycin infusion — called code allergy",
          "hpi": "Gerald Hagen — Flushing and pruritus during vancomycin infusion — called code allergy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "MRSA bacteremia — needs vancomycin, had infusion reaction requiring A/I input",
        "diagnosis": "Vancomycin Red Man Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia — needs vancomycin",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Developed flushing/rash during first infusion",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H (held after reaction)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H — infuse over 2 hours with premedication",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "136/82",
          "hr": "86",
          "rr": "16",
          "temp": "38.0°C",
          "spo2": "98%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-878164",
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
                  "test": "Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "Vancomycin Trough",
                  "value": "12",
                  "unit": "mcg/mL",
                  "range": "15-20",
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
          "cc": "MRSA bacteremia — needs vancomycin, had infusion reaction requiring A/I input",
          "hpi": "Gerald Hagen — MRSA bacteremia — needs vancomycin, had infusion reaction requiring A/I input",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "Flushing, pruritus, and rash during vancomycin infusion — consult to differentiate RMS from allergy",
        "diagnosis": "Vancomycin Red Man Syndrome vs True Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia — needs vancomycin",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Developed flushing/rash during first infusion",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H (held after reaction)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "138/82",
          "hr": "88",
          "rr": "16",
          "temp": "38.2°C",
          "spo2": "98%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-878164",
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
                  "test": "Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "Vancomycin Trough",
                  "value": "12",
                  "unit": "mcg/mL",
                  "range": "15-20",
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
          "cc": "Flushing, pruritus, and rash during vancomycin infusion — consult to differentiate RMS from allergy",
          "hpi": "Gerald Hagen presents with flushing, pruritus, and rash during vancomycin infusion — consult to differentiate rms from allergy.",
          "exam": "See documentation.",
          "assessment": "Vancomycin Red Man Syndrome vs True Allergy",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — vancomycin tolerance established, document RMS vs allergy in chart",
        "diagnosis": "Vancomycin Red Man Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia — needs vancomycin",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Developed flushing/rash during first infusion",
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
          "bp": "128/78",
          "hr": "74",
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
          "accession": "LAB-878164",
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
                  "test": "Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "Vancomycin Trough",
                  "value": "12",
                  "unit": "mcg/mL",
                  "range": "15-20",
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
          "cc": "Follow-up — vancomycin tolerance established, document RMS vs allergy in chart",
          "hpi": "Gerald Hagen — Follow-up — vancomycin tolerance established, document RMS vs allergy in chart",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Gerald Hagen",
    "dob": "11/09/1961",
    "age": "65",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-786422",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(513) 555-8272",
    "email": "gerald.hagen@email.com",
    "address": "4603 Peachtree Rd, Columbus, OH 43211",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Jennifer Hagen",
      "phone": "(615) 555-3740",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Flushing, pruritus, and rash during vancomycin infusion — consult to differentiate RMS from allergy",
    "diagnosis": "Vancomycin Red Man Syndrome vs True Allergy"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "MRSA bacteremia — needs vancomycin",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Developed flushing/rash during first infusion",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Vancomycin",
      "dose": "1g",
      "route": "IV",
      "frequency": "Q12H (held after reaction)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Vancomycin",
      "reaction": "Flushing and pruritus during infusion",
      "severity": "Unknown — needs evaluation",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "138/82",
      "hr": "88",
      "rr": "16",
      "temp": "38.2°C",
      "spo2": "98%",
      "pain": "2/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "Flushing, pruritus, and rash during vancomycin infusion — consult to differentiate RMS from allergy",
      "hpi": "Gerald Hagen presents with flushing, pruritus, and rash during vancomycin infusion — consult to differentiate rms from allergy.",
      "exam": "See documentation.",
      "assessment": "Vancomycin Red Man Syndrome vs True Allergy",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-878164",
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
              "test": "Tryptase",
              "value": "4.8",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": ""
            },
            {
              "test": "Vancomycin Trough",
              "value": "12",
              "unit": "mcg/mL",
              "range": "15-20",
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
      "Infusion details",
      "1g infused over 30 minutes (too fast) — flushing appeared in upper body"
    ],
    [
      "Key question",
      "Rate-related RMS vs true IgE-mediated allergy?"
    ],
    [
      "Plan consideration",
      "Slower infusion rate, premedication, vs desensitization protocol"
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
    "id": "Vanc-RMS-2003",
    "title": "Red man syndrome",
    "authors": "Sivagnanam S, Deleu D.",
    "journal": "Crit Care",
    "year": 2003,
    "doi": "10.1186/cc1871",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC270697/",
    "openAccess": true,
    "validates": [
      "RMS = histamine release, NOT IgE",
      "Slow infusion ≥2h + premedication",
      "NOT a true allergy"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "Red Man Syndrome (RMS) is a non-IgE, non-immune pharmacologic mast cell activation via MRGPRX2 receptor by vancomycin. Flushing, pruritus, erythema of face/neck/upper torso occur during or within 4–10 minutes of infusion. NOT an allergic reaction — NOT a contraindication to future vancomycin use.",
      "Prevention: infuse vancomycin over ≥60 min (≥90 min for doses >1g). Pre-treat with H1 antihistamine (diphenhydramine 25–50 mg IV/PO) 30–60 min before infusion.",
      "Distinguish RMS from true vancomycin anaphylaxis: RMS — flushing + pruritis during infusion, no hypotension/bronchospasm, resolves with infusion pause + antihistamine. True anaphylaxis — hypotension + bronchospasm = requires epinephrine, NOT just rate adjustment."
    ],
    "boardPearls": [
      "RMS mechanism: MRGPRX2 direct mast cell activation → histamine → flushing, pruritus, erythema. NOT IgE-mediated.",
      "Distribution: face, neck, upper torso (high mast cell density in these areas).",
      "RMS management: pause/slow infusion + diphenhydramine 25–50 mg IV. Restart at slower rate. NOT contraindication to vancomycin.",
      "Prevention: infuse over ≥60 min (≥90 min for >1g). Pre-medicate with H1 antihistamine.",
      "True vancomycin IgE anaphylaxis: rare. Hypotension + bronchospasm → epinephrine. Requires formal allergy evaluation.",
      "Other MRGPRX2 activators: opioids (morphine, codeine), fluoroquinolones, neuromuscular blockers, radiocontrast — same mechanism, not IgE.",
      "If patient needs vancomycin with history of RMS: pre-medicate + slow rate. If true anaphylaxis history: allergy testing + desensitization if no alternative."
    ]
  }
};