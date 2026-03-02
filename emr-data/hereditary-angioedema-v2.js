/* emr-data/hereditary-angioedema-v2.js — Variation: Hereditary Angioedema */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Tiffany Brooks",
      "dob": "09/03/2007",
      "age": "19",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-160730",
      "language": "English",
      "race": "Black/African American",
      "phone": "(341) 465-6988",
      "email": "tiffany.brooks@email.com",
      "address": "6524 Oak St, Weston, FL 33326",
      "insurance": "Medicaid",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Michael Brooks",
        "phone": "(650) 755-8015",
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
        "Started 2 months ago — exacerbating HAE"
      ],
      [
        "Diagnosis delay",
        "5 ER visits in 2 years — treated as allergic each time, epi/steroids never worked"
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
        "chiefComplaint": "19yo with severe abdominal pain and facial swelling — 5th ER visit, epi/steroids never help, no one has checked C4",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent angioedema WITHOUT urticaria — not responding to epi/antihistamines/steroids",
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
          "description": "OCPs started 2 months ago — worsening frequency",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Grandmother died from airway swelling — undiagnosed HAE",
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
          "frequency": "Given — NO response (wrong diagnosis)",
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
          "temp": "37.0°C",
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
          "cc": "19yo with severe abdominal pain and facial swelling — 5th ER visit, epi/steroids never help, no one has checked C4",
          "hpi": "19F college freshman with 5th ER visit in 2 years for recurrent angioedema. Epi/antihistamines/steroids given at every visit — NEVER helped. No hives EVER. Started OCPs 2 months ago → attacks now weekly. Grandmother died at 42 from \"throat swelling.\" C4 drawn for first time — critically low (4). C1-INH low. This is HAE type 1. She has been mismanaged for 2 years because no one recognized the pattern: angioedema without urticaria + no response to allergic treatments = bradykinin-mediated = check C4.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted — starting C1-INH replacement, discontinuing OCPs immediately",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "HAE type 1 — newly diagnosed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Abdominal attack — resolving on C1-INH concentrate",
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
          "description": "Mother likely undiagnosed — needs testing",
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
          "temp": "36.8°C",
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
          "cc": "Admitted — starting C1-INH replacement, discontinuing OCPs immediately",
          "hpi": "19F after C1-INH infusion — dramatic improvement in 4 hours. This contrast with zero response to epi/steroids at prior visits is diagnostic in itself. OCP stopped immediately. Mother contacted — reports her own lifelong episodes treated as \"allergies.\" Mother testing ordered.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — HAE management, self-treatment training, college accommodations",
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
          "description": "Prophylaxis with lanadelumab — reduces attacks 87%",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "College accommodations — single room with fridge for meds",
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
          "description": "Medical alert bracelet — do NOT treat with epi/antihistamines/steroids",
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
          "cc": "A/I consult — HAE management, self-treatment training, college accommodations",
          "hpi": "A/I: 19F newly diagnosed HAE. Started lanadelumab prophylaxis. Trained on icatibant self-injection. College accommodations letter written. Roommate trained. Mother positive for HAE. Medical alert bracelet: \"HAE — Do NOT treat with epinephrine/antihistamines/steroids — requires C1-INH or icatibant.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "HAE follow-up — 3 months on lanadelumab, zero attacks, mother diagnosed",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "HAE — 0 attacks in 3 months on lanadelumab",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Mother confirmed HAE — started on prophylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "IUD placed — no estrogen trigger",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "College — attending all classes, single room with med fridge",
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
          "cc": "HAE follow-up — 3 months on lanadelumab, zero attacks, mother diagnosed",
          "hpi": "19F zero attacks in 3 months. Mother diagnosed and treated. Patient says: \"I wish someone had figured this out 3 years ago — my grandmother might still be alive.\" Genetic counselor referral placed.",
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
    "phone": "(341) 465-6988",
    "email": "tiffany.brooks@email.com",
    "address": "6524 Oak St, Weston, FL 33326",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Brooks",
      "phone": "(650) 755-8015",
      "relationship": "Spouse"
    },
    "chiefComplaint": "19yo with severe abdominal pain and facial swelling — 5th ER visit, epi/steroids never help, no one has checked C4",
    "diagnosis": "Hereditary Angioedema"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Recurrent angioedema WITHOUT urticaria — not responding to epi/antihistamines/steroids",
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
      "description": "OCPs started 2 months ago — worsening frequency",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Grandmother died from airway swelling — undiagnosed HAE",
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
      "frequency": "Given — NO response (wrong diagnosis)",
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
      "temp": "37.0°C",
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
      "cc": "19yo with severe abdominal pain and facial swelling — 5th ER visit, epi/steroids never help, no one has checked C4",
      "hpi": "19F college freshman with 5th ER visit in 2 years for recurrent angioedema. Epi/antihistamines/steroids given at every visit — NEVER helped. No hives EVER. Started OCPs 2 months ago → attacks now weekly. Grandmother died at 42 from \"throat swelling.\" C4 drawn for first time — critically low (4). C1-INH low. This is HAE type 1. She has been mismanaged for 2 years because no one recognized the pattern: angioedema without urticaria + no response to allergic treatments = bradykinin-mediated = check C4.",
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
      "Started 2 months ago — exacerbating HAE"
    ],
    [
      "Diagnosis delay",
      "5 ER visits in 2 years — treated as allergic each time, epi/steroids never worked"
    ],
    [
      "Mental health",
      "Skipping classes to stay near hospital"
    ]
  ]
,"references":[
  {
    "id": "WAO-HAE-2022",
    "title": "International WAO/EAACI guideline for management of hereditary angioedema — 2021 revision",
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
]};
