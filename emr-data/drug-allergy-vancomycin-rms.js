
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
      "pharmacy": "Walgreens \u2014 University Blvd",
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
        "severity": "Unknown \u2014 needs evaluation",
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
        "1g infused over 30 minutes (too fast) \u2014 flushing appeared in upper body"
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
        "chiefComplaint": "Flushing and pruritus during vancomycin infusion \u2014 called code allergy",
        "diagnosis": "Vancomycin Red Man Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia \u2014 needs vancomycin",
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
          "temp": "38.2\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Flushing and pruritus during vancomycin infusion \u2014 called code allergy",
          "hpi": "Gerald Hagen \u2014 Flushing and pruritus during vancomycin infusion \u2014 called code allergy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "MRSA bacteremia \u2014 needs vancomycin, had infusion reaction requiring A/I input",
        "diagnosis": "Vancomycin Red Man Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia \u2014 needs vancomycin",
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
          "frequency": "Q12H \u2014 infuse over 2 hours with premedication",
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
          "temp": "38.0\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "MRSA bacteremia \u2014 needs vancomycin, had infusion reaction requiring A/I input",
          "hpi": "Gerald Hagen \u2014 MRSA bacteremia \u2014 needs vancomycin, had infusion reaction requiring A/I input",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "Flushing, pruritus, and rash during vancomycin infusion \u2014 consult to differentiate RMS from allergy",
        "diagnosis": "Vancomycin Red Man Syndrome vs True Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia \u2014 needs vancomycin",
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
          "temp": "38.2\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Flushing, pruritus, and rash during vancomycin infusion \u2014 consult to differentiate RMS from allergy",
          "hpi": "Gerald Hagen presents with flushing, pruritus, and rash during vancomycin infusion \u2014 consult to differentiate rms from allergy.",
          "exam": "See documentation.",
          "assessment": "Vancomycin Red Man Syndrome vs True Allergy",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up \u2014 vancomycin tolerance established, document RMS vs allergy in chart",
        "diagnosis": "Vancomycin Red Man Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia \u2014 needs vancomycin",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Follow-up \u2014 vancomycin tolerance established, document RMS vs allergy in chart",
          "hpi": "Gerald Hagen \u2014 Follow-up \u2014 vancomycin tolerance established, document RMS vs allergy in chart",
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
    "pharmacy": "Walgreens \u2014 University Blvd",
    "emergencyContact": {
      "name": "Jennifer Hagen",
      "phone": "(615) 555-3740",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Flushing, pruritus, and rash during vancomycin infusion \u2014 consult to differentiate RMS from allergy",
    "diagnosis": "Vancomycin Red Man Syndrome vs True Allergy"
  },
  "problems": [
    {
      "problem": "Red man syndrome \u2014 vancomycin infusion-related reaction",
      "icd": "T36.8X5A",
      "onset": "2024",
      "status": "Active",
      "notes": "Flushing + pruritus + erythema during infusion \u2014 rate-dependent, not IgE allergy"
    },
    {
      "problem": "MRSA bacteremia \u2014 requires vancomycin continuation",
      "icd": "A41.02",
      "onset": "2024",
      "status": "Active",
      "notes": "No alternatives as effective as vancomycin for MRSA blood culture positive"
    },
    {
      "problem": "Vancomycin labeled 'allergy' by nurse \u2014 INCORRECT, requires clarification",
      "icd": "Z88.7",
      "onset": "2024",
      "status": "Active",
      "notes": "Red man syndrome is not an allergy and should not be documented as one"
    }
  ],
  "medications": [
    {
      "name": "Vancomycin \u2014 slow infusion rate 10mg/min (was infusing at 15mg/min)",
      "sig": "Maximum infusion rate 10mg/min \u2014 over at least 60-90 min per dose",
      "prescriber": "Pharmacy/ID",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 rate corrected"
    },
    {
      "name": "Diphenhydramine 25mg IV 30 min before each vancomycin dose",
      "sig": "Premedication \u2014 H1 blockade reduces histamine release",
      "prescriber": "Pharmacy",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Hydrocortisone 25mg IV 30 min before each dose (if premedication insufficient)",
      "sig": "Steroid premedication \u2014 reduces mast cell degranulation",
      "prescriber": "Pharmacy",
      "start": "11/2024",
      "refills": 0,
      "status": "Conditional"
    }
  ],
  "allergies": [
    {
      "allergen": "Vancomycin",
      "reaction": "Flushing and pruritus during infusion",
      "severity": "Unknown \u2014 needs evaluation",
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
      "temp": "38.2\u00b0C",
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
      "cc": "Flushing, pruritus, and rash during vancomycin infusion \u2014 consult to differentiate RMS from allergy",
      "hpi": "Gerald Hagen presents with flushing, pruritus, and rash during vancomycin infusion \u2014 consult to differentiate rms from allergy.",
      "exam": "See documentation.",
      "assessment": "Vancomycin Red Man Syndrome vs True Allergy",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Vancomycin Monitoring",
      "results": [
        {
          "test": "Vancomycin AUC/MIC",
          "value": "388",
          "unit": "mg\u00b7h/L",
          "ref": "400-600 target",
          "flag": "L"
        },
        {
          "test": "Trough (old method)",
          "value": "12",
          "unit": "mcg/mL",
          "ref": "15-20 for bacteremia",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        },
        {
          "test": "WBC",
          "value": "14.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Tryptase (drawn during reaction)",
          "value": "3.2",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": ""
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
      "1g infused over 30 minutes (too fast) \u2014 flushing appeared in upper body"
    ],
    [
      "Key question",
      "Rate-related RMS vs true IgE-mediated allergy?"
    ],
    [
      "Plan consideration",
      "Slower infusion rate, premedication, vs desensitization protocol"
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
        "Slow infusion \u22652h + premedication",
        "NOT a true allergy"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "Red Man Syndrome (RMS) is a non-IgE, non-immune pharmacologic mast cell activation via MRGPRX2 receptor by vancomycin. Flushing, pruritus, erythema of face/neck/upper torso occur during or within 4\u201310 minutes of infusion. NOT an allergic reaction \u2014 NOT a contraindication to future vancomycin use.",
      "Prevention: infuse vancomycin over \u226560 min (\u226590 min for doses >1g). Pre-treat with H1 antihistamine (diphenhydramine 25\u201350 mg IV/PO) 30\u201360 min before infusion.",
      "Distinguish RMS from true vancomycin anaphylaxis: RMS \u2014 flushing + pruritis during infusion, no hypotension/bronchospasm, resolves with infusion pause + antihistamine. True anaphylaxis \u2014 hypotension + bronchospasm = requires epinephrine, NOT just rate adjustment."
    ],
    "boardPearls": [
      "RMS mechanism: MRGPRX2 direct mast cell activation \u2192 histamine \u2192 flushing, pruritus, erythema. NOT IgE-mediated.",
      "Distribution: face, neck, upper torso (high mast cell density in these areas).",
      "RMS management: pause/slow infusion + diphenhydramine 25\u201350 mg IV. Restart at slower rate. NOT contraindication to vancomycin.",
      "Prevention: infuse over \u226560 min (\u226590 min for >1g). Pre-medicate with H1 antihistamine.",
      "True vancomycin IgE anaphylaxis: rare. Hypotension + bronchospasm \u2192 epinephrine. Requires formal allergy evaluation.",
      "Other MRGPRX2 activators: opioids (morphine, codeine), fluoroquinolones, neuromuscular blockers, radiocontrast \u2014 same mechanism, not IgE.",
      "If patient needs vancomycin with history of RMS: pre-medicate + slow rate. If true anaphylaxis history: allergy testing + desensitization if no alternative."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Gerald appears anxious and slightly frustrated about his reaction to the antibiotic he needs for his serious infection. He is cooperative and detailed in describing his symptoms but worried about whether he can safely receive the treatment his doctors say is necessary for his MRSA bacteremia.",
    "interviewQuestions": [
      "Can you describe exactly what happened during your vancomycin infusion?",
      "How quickly did your symptoms start after the infusion began?",
      "What did the flushing and rash look like?",
      "Where on your body did you notice the flushing and rash?",
      "Did you have any difficulty breathing or throat tightness?",
      "How long did it take for the infusion to run?",
      "Did you have any nausea, vomiting, or abdominal cramping?",
      "Have you ever had vancomycin before this admission?",
      "Do you have any known drug allergies?",
      "Did your blood pressure drop or did you feel dizzy?",
      "How long did the symptoms last after stopping the infusion?",
      "Did you receive any medications like Benadryl that helped?",
      "Have you had similar reactions to any other antibiotics?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "The flushing started about 15-20 minutes after they started the IV antibiotic. It came on pretty quickly.",
      "character": "My face and neck got really red and warm, like a sunburn, and I felt itchy all over. It was uncomfortable but not painful.",
      "location": "The redness started on my face and neck, then spread down to my chest and arms. The itching was mostly on my upper body too.",
      "severity": "I'd say about a 6 out of 10 for discomfort. It was definitely bothersome and made me worried, but not excruciating.",
      "aggravating": "It seemed to get worse as more of the medicine went in. Nothing specific made it worse after that.",
      "relieving": "The nurses stopped the IV right away and gave me some Benadryl. That seemed to help within about 30 minutes.",
      "associated": "I felt a bit itchy and my skin was warm to touch. No trouble breathing or swallowing though.",
      "denies": "No, I didn't have any trouble breathing, no throat swelling, no dizziness or feeling faint, no nausea or stomach problems.",
      "history": "This is the first time I've ever had vancomycin. Never had a reaction like this to any medication before.",
      "medications": "Vancomycin",
      "allergies": "Vancomycin",
      "family": "No one in my family has drug allergies that I know of.",
      "social": "I'm retired from construction work. I don't smoke, have maybe one beer on weekends. No drugs."
    },
    "examManeuvers": [
      "Inspect skin for erythema and rash pattern",
      "Palpate skin for warmth and texture",
      "Examine oropharynx for edema",
      "Auscultate lungs for wheezing",
      "Check vital signs including blood pressure",
      "Assess lymph nodes for enlargement",
      "Examine conjunctiva for injection",
      "Assess capillary refill and peripheral perfusion",
      "Check for urticaria or hives",
      "Examine IV site for local reaction"
    ],
    "examFindings": {
      "Inspect skin for erythema and rash pattern": "Mild residual erythema on upper chest and neck, no raised lesions or urticaria",
      "Palpate skin for warmth and texture": "Skin temperature normal, no increased warmth, normal texture without edema",
      "Examine oropharynx for edema": "Oropharynx clear, no erythema or edema of lips, tongue, or posterior pharynx",
      "Auscultate lungs for wheezing": "Clear breath sounds bilaterally, no wheezing or stridor",
      "Check vital signs including blood pressure": "BP 138/82, stable from baseline, HR 88 regular",
      "Assess lymph nodes for enlargement": "No cervical, axillary, or inguinal lymphadenopathy",
      "Examine conjunctiva for injection": "Conjunctiva clear, no injection or tearing",
      "Assess capillary refill and peripheral perfusion": "Capillary refill <2 seconds, good peripheral perfusion",
      "Check for urticaria or hives": "No urticarial lesions, wheals, or raised erythematous patches",
      "Examine IV site for local reaction": "IV site clean without erythema, induration, or local reaction"
    },
    "ddxTargets": [
      "Red man syndrome \u2014 rate-dependent infusion reaction (correct)",
      "True IgE-mediated vancomycin allergy (INCORRECT \u2014 tryptase normal, no anaphylaxis)",
      "Anaphylaxis \u2014 no hypotension, bronchospasm, or angioedema",
      "MRSA bacteremia treatment failure requiring alternative",
      "Contact dermatitis from IV tubing",
      "Drug rash from beta-lactam started concurrently"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'vancomycin allergy' label without considering rate-dependent Red Man Syndrome as more likely given rapid infusion time and symptom pattern",
      "prematureClosure": "May jump to conclude true allergy without carefully examining infusion rate, timing, and absence of IgE-mediated features like urticaria or respiratory symptoms",
      "availabilityBias": "Recent cases of drug allergies may overshadow the more common but less dramatic Red Man Syndrome diagnosis"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Before you interview the patient, think about the key distinguishing features between Red Man Syndrome and a true IgE-mediated allergic reaction. What specific historical details and timeline would help you differentiate these two conditions?",
      "phase5": "Excellent history and physical exam. Now let's think through this systematically - you noted the rapid infusion rate and the specific symptom pattern. How does the absence of urticaria, respiratory symptoms, and hypotension help narrow your differential? What does this tell you about the underlying mechanism?",
      "finalDebrief": "This case highlights the importance of distinguishing Red Man Syndrome from true vancomycin allergy. The key differentiators were the rapid infusion rate (30 minutes vs recommended 60+ minutes), the specific pattern of upper body flushing without urticaria, and the absence of IgE-mediated features. This distinction is clinically crucial because Red Man Syndrome can be prevented with slower infusion rates and premedication, allowing continued vancomycin use for serious MRSA infections.",
      "final": "Diagnosis: red man syndrome \u2014 NOT true allergy. Key pharmacy learning: (1) Red man syndrome mechanism: vancomycin (especially fast infusion) \u2192 direct mast cell degranulation \u2192 histamine release \u2192 flushing, pruritus, erythema of face/neck/upper torso. NOT IgE-mediated. Tryptase elevation (marker of true anaphylaxis) is typically ABSENT or minimal. (2) Documentation matters enormously: labeling this as 'vancomycin allergy' in the chart will follow the patient forever and may deprive them of first-line MRSA therapy in future. The pharmacist's duty: correct the documentation, communicate to the team, update the allergy record. (3) Management: slow the infusion rate (10mg/min max), premedicate with diphenhydramine. Patient can continue vancomycin. (4) True vancomycin allergy: rare (AICD, thrombocytopenia, interstitial nephritis). Features that distinguish: urticaria + hypotension + bronchospasm + positive tryptase = true allergy. (5) AUC monitoring: pharmacy now monitors AUC/MIC (target 400-600) rather than troughs \u2014 reduces nephrotoxicity without sacrificing efficacy. This patient's AUC 388 is sub-therapeutic \u2014 dose adjustment needed alongside rate correction."
    }
  },
  "meta": {
    "diagnosis": "Red Man Syndrome \u2014 Vancomycin Infusion Reaction (Not True IgE-Mediated Allergy)",
    "caseId": "drug-allergy-vancomycin-rms"
  }
};
