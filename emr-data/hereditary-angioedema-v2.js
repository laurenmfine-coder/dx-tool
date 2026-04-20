
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Tiffany Brooks",
      "patientHPI": "I keep having these scary episodes where my face and throat swell up really bad - it's happened five times in two years and I always end up in the ER because I can't breathe properly. The weird thing is nothing they give me there ever seems to help, and I never get any rashes or hives like they expect. It's been getting so much worse since I started birth control pills two months ago - now it happens almost every week and I'm terrified something really bad is going to happen to me.",
      "dob": "09/03/2007",
      "age": "19",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-160730",
      "language": "English",
      "race": "Black/African American",
      "phone": "(704) 555-3041",
      "email": "tiffany.brooks@email.com",
      "address": "5444 Peachtree Rd, San Antonio, TX 78203",
      "insurance": "Medicaid",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Michael Brooks",
        "phone": "(720) 555-5920",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
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
      "Mother: recurrent undiagnosed swelling",
      "Maternal grandmother: died airway swelling age 42"
    ],
    "socialHistory": [
      [
        "College",
        "Freshman, 3 hours from home"
      ],
      [
        "OCP",
        "Started 2 months ago \u2014 exacerbating HAE"
      ],
      [
        "Diagnosis delay",
        "5 ER visits in 2 years \u2014 treated as allergic each time, epi/steroids never worked"
      ],
      [
        "Mental health",
        "Skipping classes to stay near hospital"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "19yo with severe abdominal pain and facial swelling \u2014 5th ER visit, epi/steroids never help, no one has checked C4",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent angioedema WITHOUT urticaria \u2014 not responding to epi/antihistamines/steroids",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Severe abdominal pain (bowel wall angioedema)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "OCPs started 2 months ago \u2014 worsening frequency",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Grandmother died from airway swelling \u2014 undiagnosed HAE",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "5 ER visits, never diagnosed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Epinephrine",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "Given \u2014 NO response (wrong diagnosis)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Morphine",
          "dose": "4mg",
          "route": "IV",
          "frequency": "For abdominal pain",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "IV Fluids",
          "dose": "NS 1L",
          "route": "IV",
          "frequency": "Bolus",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "108/62",
          "hr": "108",
          "rr": "20",
          "temp": "37.0\u00b0C",
          "spo2": "99%",
          "pain": "9/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-890598",
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
                  "value": "11.2",
                  "unit": "x10\u00b3/\u00b5L",
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
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10\u00b3/\u00b5L",
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
              "name": "DIAGNOSTIC BREAKTHROUGH",
              "results": [
                {
                  "test": "C4",
                  "value": "4",
                  "unit": "mg/dL",
                  "range": "16-47",
                  "flag": "L"
                },
                {
                  "test": "C1-INH level",
                  "value": "8",
                  "unit": "mg/dL",
                  "range": "21-39",
                  "flag": "L"
                },
                {
                  "test": "C1-INH functional",
                  "value": "18",
                  "unit": "%",
                  "range": "68-132",
                  "flag": "L"
                },
                {
                  "test": "Tryptase",
                  "value": "5.2",
                  "unit": "ng/mL",
                  "range": "<11.5",
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
          "cc": "19yo with severe abdominal pain and facial swelling \u2014 5th ER visit, epi/steroids never help, no one has checked C4",
          "hpi": "19F college freshman with 5th ER visit in 2 years for recurrent angioedema. Epi/antihistamines/steroids given at every visit \u2014 NEVER helped. No hives EVER. Started OCPs 2 months ago \u2192 attacks now weekly. Grandmother died at 42 from \"throat swelling.\" C4 drawn for first time \u2014 critically low (4). C1-INH low. This is HAE type 1. She has been mismanaged for 2 years because no one recognized the pattern: angioedema without urticaria + no response to allergic treatments = bradykinin-mediated = check C4.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted \u2014 starting C1-INH replacement, discontinuing OCPs immediately",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "HAE type 1 \u2014 newly diagnosed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Abdominal attack \u2014 resolving on C1-INH concentrate",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "OCPs discontinued (estrogen trigger)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Mother likely undiagnosed \u2014 needs testing",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "2-year diagnostic delay",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "C1-INH concentrate (Berinert)",
          "dose": "20 IU/kg",
          "route": "IV",
          "frequency": "Attack resolved in 4h",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "OCP discontinued",
          "dose": "",
          "route": "",
          "frequency": "Switch to IUD or progesterone-only",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "112/68",
          "hr": "86",
          "rr": "16",
          "temp": "36.8\u00b0C",
          "spo2": "99%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-746979",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Admitted \u2014 starting C1-INH replacement, discontinuing OCPs immediately",
          "hpi": "19F after C1-INH infusion \u2014 dramatic improvement in 4 hours. This contrast with zero response to epi/steroids at prior visits is diagnostic in itself. OCP stopped immediately. Mother contacted \u2014 reports her own lifelong episodes treated as \"allergies.\" Mother testing ordered.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 HAE management, self-treatment training, college accommodations",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "HAE type 1 confirmed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Self-injectable rescue (icatibant) training",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Prophylaxis with lanadelumab \u2014 reduces attacks 87%",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "College accommodations \u2014 single room with fridge for meds",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Mother and brother need screening",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Medical alert bracelet \u2014 do NOT treat with epi/antihistamines/steroids",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "On-demand self-injection",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Lanadelumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q2 weeks prophylaxis",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "110/68",
          "hr": "76",
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
          "accession": "LAB-361598",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
              "name": "HAE CONFIRMATION",
              "results": [
                {
                  "test": "C4",
                  "value": "4",
                  "unit": "mg/dL",
                  "range": "16-47",
                  "flag": "L"
                },
                {
                  "test": "C1-INH level",
                  "value": "8",
                  "unit": "mg/dL",
                  "range": "21-39",
                  "flag": "L"
                },
                {
                  "test": "C1-INH functional",
                  "value": "18",
                  "unit": "%",
                  "range": "68-132",
                  "flag": "L"
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
          "cc": "A/I consult \u2014 HAE management, self-treatment training, college accommodations",
          "hpi": "A/I: 19F newly diagnosed HAE. Started lanadelumab prophylaxis. Trained on icatibant self-injection. College accommodations letter written. Roommate trained. Mother positive for HAE. Medical alert bracelet: \"HAE \u2014 Do NOT treat with epinephrine/antihistamines/steroids \u2014 requires C1-INH or icatibant.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "HAE follow-up \u2014 3 months on lanadelumab, zero attacks, mother diagnosed",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "HAE \u2014 0 attacks in 3 months on lanadelumab",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Mother confirmed HAE \u2014 started on prophylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "IUD placed \u2014 no estrogen trigger",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "College \u2014 attending all classes, single room with med fridge",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Processing grief about grandmother",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lanadelumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q2 weeks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "On-demand (not needed yet)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "108/66",
          "hr": "72",
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
          "accession": "LAB-719071",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "HAE follow-up \u2014 3 months on lanadelumab, zero attacks, mother diagnosed",
          "hpi": "19F zero attacks in 3 months. Mother diagnosed and treated. Patient says: \"I wish someone had figured this out 3 years ago \u2014 my grandmother might still be alive.\" Genetic counselor referral placed.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Tiffany Brooks",
    "dob": "09/03/2007",
    "age": "19",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-160730",
    "language": "English",
    "race": "Black/African American",
    "phone": "(617) 555-6067",
    "email": "tiffany.brooks@email.com",
    "address": "3243 Hollyhock Rd, Columbus, OH 43215",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Michael Brooks",
      "phone": "(704) 555-7691",
      "relationship": "Spouse"
    },
    "chiefComplaint": "19yo with severe abdominal pain and facial swelling \u2014 5th ER visit, epi/steroids never help, no one has checked C4",
    "diagnosis": "Hereditary Angioedema"
  },
  "problems": [
    {
      "problem": "Hereditary angioedema type I \u2014 acute abdominal attack",
      "icd": "D84.1",
      "onset": "2018",
      "status": "Active",
      "notes": "Isabel Torres, 34F \u2014 known HAE type I. Severe abdominal pain, vomiting, colicky. No urticaria. C4 low."
    },
    {
      "problem": "Misdiagnosis risk \u2014 acute abdomen mimicking surgical emergency",
      "icd": "D84.1",
      "onset": "2018",
      "status": "Active",
      "notes": "HAE abdominal attacks cause bowel wall edema mimicking appendicitis, ovarian torsion, obstruction. C4 draws the line."
    },
    {
      "problem": "HAE trigger \u2014 emotional stress event 24h prior",
      "icd": "D84.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Emotional stress triggers bradykinin release. Other triggers: trauma, estrogen, ACE inhibitors."
    }
  ],
  "medications": [
    {
      "name": "C1 esterase inhibitor concentrate (Berinert) 20 units/kg IV \u2014 acute attack",
      "sig": "First-line acute treatment for HAE attacks. Works within 30-90 minutes. Replaces deficient C1-INH.",
      "prescriber": "Allergy/ED",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Icatibant 30mg SQ (bradykinin B2 antagonist) \u2014 alternative if C1-INH not available",
      "sig": "Bradykinin receptor antagonist \u2014 alternative acute treatment. Equal efficacy to C1-INH concentrate. Self-injectable.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 0,
      "status": "Alternative"
    },
    {
      "name": "Tranexamic acid \u2014 avoid in HAE (not effective, not mechanism-targeted)",
      "sig": "Antifibrinolytic \u2014 NOT indicated for HAE acute attack. Historical use predates specific therapies.",
      "prescriber": "Allergy \u2014 DO NOT USE",
      "start": "Avoid",
      "refills": 0,
      "status": "AVOID"
    },
    {
      "name": "Lanadelumab (Takhzyro) 300mg SQ q2-4 weeks \u2014 prophylaxis",
      "sig": "Plasma kallikrein inhibitor \u2014 long-term prophylaxis. Dramatically reduces attack frequency. First-line for frequent HAE attackers.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 5,
      "status": "Active \u2014 prophylaxis"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "108/62",
      "hr": "108",
      "rr": "20",
      "temp": "37.0\u00b0C",
      "spo2": "99%",
      "pain": "9/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "19yo with severe abdominal pain and facial swelling \u2014 5th ER visit, epi/steroids never help, no one has checked C4",
      "hpi": "19F college freshman with 5th ER visit in 2 years for recurrent angioedema. Epi/antihistamines/steroids given at every visit \u2014 NEVER helped. No hives EVER. Started OCPs 2 months ago \u2192 attacks now weekly. Grandmother died at 42 from \"throat swelling.\" C4 drawn for first time \u2014 critically low (4). C1-INH low. This is HAE type 1. She has been mismanaged for 2 years because no one recognized the pattern: angioedema without urticaria + no response to allergic treatments = bradykinin-mediated = check C4.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "HAE Workup",
      "results": [
        {
          "test": "C4 complement (acute)",
          "value": "3",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": "L"
        },
        {
          "test": "C1 esterase inhibitor level",
          "value": "8",
          "unit": "mg/dL",
          "ref": "21-39",
          "flag": "L"
        },
        {
          "test": "C1 esterase inhibitor function",
          "value": "28",
          "unit": "%",
          "ref": ">68%",
          "flag": "L"
        },
        {
          "test": "C1q",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "C3",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Abdomen/Pelvis With Contrast",
      "indication": "Severe abdominal pain, vomiting \u2014 rule out surgical emergency",
      "findings": "Diffuse bowel wall edema, ascites. No appendicitis, no obstruction, no perforation. Edema pattern consistent with hereditary angioedema abdominal attack.",
      "impression": "HAE abdominal attack \u2014 bowel wall edema and ascites. No surgical pathology identified."
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
    "Mother: recurrent undiagnosed swelling",
    "Maternal grandmother: died airway swelling age 42"
  ],
  "socialHistory": [
    [
      "College",
      "Freshman, 3 hours from home"
    ],
    [
      "OCP",
      "Started 2 months ago \u2014 exacerbating HAE"
    ],
    [
      "Diagnosis delay",
      "5 ER visits in 2 years \u2014 treated as allergic each time, epi/steroids never worked"
    ],
    [
      "Mental health",
      "Skipping classes to stay near hospital"
    ]
  ],
  "references": [
    {
      "id": "WAO-HAE-2022",
      "title": "International WAO/EAACI guideline for management of hereditary angioedema \u2014 2021 revision",
      "authors": "Maurer M, Magerl M, Betschel S, et al.",
      "journal": "Allergy",
      "year": 2022,
      "doi": "10.1111/all.15214",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9541881/",
      "openAccess": true,
      "validates": [
        "HAE diagnosis: C4 screening, C1-INH level/function",
        "C1q distinguishes acquired from hereditary",
        "On-demand icatibant",
        "Lanadelumab prophylaxis",
        "Estrogen triggers: OCPs contraindicated"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Tiffany appears frustrated and anxious after multiple ER visits without answers. She's cooperative but shows visible distress about missing classes and fears another dismissive encounter. Her affect is worried but hopeful someone will finally figure out what's wrong.",
    "interviewQuestions": [
      "Can you describe exactly what happens during these episodes of swelling?",
      "Where specifically do you experience the swelling?",
      "Do you ever develop a rash or hives with the swelling?",
      "What triggers seem to bring on these episodes?",
      "How long do the episodes typically last?",
      "Has epinephrine or steroids ever helped your symptoms?",
      "When did you start birth control pills?",
      "Tell me about your abdominal pain during these episodes.",
      "Has anyone in your family had similar episodes of swelling?",
      "What happened to your grandmother who died from airway swelling?",
      "How have these episodes affected your daily life?",
      "Have any of your previous doctors mentioned checking complement levels?",
      "Do you have any warning signs before an episode starts?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean. Can you ask that differently?",
      "onset": "These episodes started about 2 years ago in high school. They seem to come out of nowhere, usually starting with tingling in my face or stomach cramping.",
      "character": "The swelling is deep and doughy, not itchy at all. My face gets really puffy, especially around my eyes and lips. The abdominal pain is severe cramping that doubles me over.",
      "location": "Mainly my face - eyes, lips, sometimes my tongue. I also get terrible stomach pain that feels like my intestines are being squeezed.",
      "severity": "The pain is easily 8-9 out of 10. I can't function at all during episodes. I've missed so many classes I'm failing two courses.",
      "aggravating": "They seem worse since I started birth control two months ago. Stress might make them worse too. The episodes are happening weekly now instead of every few months.",
      "relieving": "Nothing helps. They've given me epinephrine, steroids, antihistamines - nothing works. The episodes just have to run their course over 2-3 days.",
      "associated": "Severe abdominal cramping, nausea, sometimes vomiting. My voice gets hoarse when my throat swells. Never any itching or rash.",
      "denies": "No hives ever, no itching, no known food or environmental triggers, no recent medication changes except birth control.",
      "history": "This is my 5th ER visit in 2 years. Every time they treat me for allergic reactions, but nothing ever helps. The episodes are getting more frequent.",
      "medications": "Epinephrine; Morphine; IV Fluids",
      "allergies": "NKDA",
      "family": "My mom has had unexplained swelling episodes too, but not as bad as mine. My grandmother on my mom's side died when she was 42 from throat swelling - they never figured out why.",
      "social": "I'm a college freshman, about 3 hours from home. I started birth control pills 2 months ago. I don't smoke or drink much. I'm so scared of these episodes I try to stay close to the hospital."
    },
    "examManeuvers": [
      "Inspect face and lips for angioedema",
      "Examine oral cavity and tongue for swelling",
      "Palpate neck for lymphadenopathy",
      "Auscultate lungs for wheezing or stridor",
      "Inspect skin for urticaria or rash",
      "Abdominal inspection for distension",
      "Abdominal palpation for tenderness",
      "Auscultate bowel sounds",
      "Check extremities for swelling",
      "Assess airway patency and voice quality"
    ],
    "examFindings": {
      "Inspect face and lips for angioedema": "Asymmetric periorbital edema and mild lip swelling, non-pitting, non-erythematous",
      "Examine oral cavity and tongue for swelling": "Mild tongue edema present, no uvular swelling currently visible",
      "Palpate neck for lymphadenopathy": "No lymphadenopathy, no neck swelling currently",
      "Auscultate lungs for wheezing or stridor": "Clear breath sounds bilaterally, no wheezing or stridor",
      "Inspect skin for urticaria or rash": "No urticaria, rash, or skin lesions anywhere on body",
      "Abdominal inspection for distension": "Mild abdominal distension present",
      "Abdominal palpation for tenderness": "Diffuse abdominal tenderness, more pronounced in epigastrium, no rebound or guarding",
      "Auscultate bowel sounds": "Hypoactive bowel sounds in all quadrants",
      "Check extremities for swelling": "No peripheral edema in hands or feet",
      "Assess airway patency and voice quality": "Voice slightly hoarse, airway patent, no respiratory distress"
    },
    "ddxTargets": [
      "HAE type I abdominal attack \u2014 C4 low, C1-INH low (correct)",
      "Appendicitis \u2014 CT rules out; no urticaria in HAE",
      "Ovarian torsion \u2014 CT negative; no adnexal pathology",
      "ACE inhibitor angioedema \u2014 no ACEi; complement abnormal in HAE, normal in ACEi angioedema",
      "Allergic angioedema \u2014 HAE has NO urticaria; allergic has urticaria + elevated tryptase",
      "Acquired C1-INH deficiency \u2014 C1q LOW in acquired; C1q normal in hereditary HAE"
    ],
    "biasFlags": {
      "anchoring": "Previous ER visits treated as allergic reactions may anchor thinking toward allergic causes despite lack of response to treatment",
      "prematureClosure": "Tendency to stop at 'allergic angioedema' without considering why epinephrine and steroids never work",
      "availabilityBias": "HAE is rare, so more common allergic causes may seem more likely despite clinical evidence pointing toward HAE"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, think about why someone might have recurrent angioedema that doesn't respond to standard allergic treatments. What key historical features would help you distinguish between different causes of angioedema?",
      "phase5": "Now that you've gathered the history and physical findings, consider the pattern you're seeing: recurrent angioedema without urticaria, no response to epinephrine or steroids, family history of similar episodes, and worsening with OCPs. What specific laboratory test would help confirm your leading diagnosis?",
      "finalDebrief": "This case highlights how rare diseases like HAE can be misdiagnosed when we anchor on more common conditions. The key clues were the lack of urticaria, no response to standard treatments, strong family history, and exacerbation with estrogen. What complement levels should be checked to confirm HAE, and how would you counsel this patient about trigger avoidance?",
      "final": "Diagnosis: HAE type I abdominal attack. Key learning: (1) HAE types: Type I = low C1-INH level AND function (~85% of HAE). Type II = normal C1-INH level, low function (~15%). Type III = normal C1-INH, estrogen-dependent, usually females. C4 is LOW in all three types during and between attacks \u2014 C4 is the best screening test. (2) C4 vs C1q: HAE = low C4, low C1-INH, NORMAL C1q. Acquired C1-INH deficiency = low C4, low C1-INH, LOW C1q (C1q consumed in acquired disease by autoantibodies or lymphoma). This distinction separates hereditary from acquired. (3) Abdominal attacks: occur in ~50% of HAE patients. Mimics appendicitis, cholecystitis, bowel obstruction. No urticaria \u2014 differentiates from allergic angioedema. CT: bowel wall edema and ascites. Unnecessary surgeries are common in undiagnosed HAE. (4) Acute attack medications that DON'T work: epinephrine (temporary at best), antihistamines, steroids \u2014 ALL are ineffective in HAE. Only bradykinin-targeted therapy works: C1-INH concentrate, icatibant, ecallantide. (5) Prophylaxis hierarchy: lanadelumab (q2-4 weeks SQ) or berotralstat (oral daily) are first-line long-term prophylaxis. C1-INH concentrate (Cinryze) is alternative. Androgens (danazol) are effective but have significant side effects."
    }
  },
  "meta": {
    "diagnosis": "Hereditary Angioedema Type I \u2014 C1-INH Deficiency, Acute Abdominal Attack, C1 Esterase Inhibitor Concentrate",
    "caseId": "hereditary-angioedema-v2"
  }
};
