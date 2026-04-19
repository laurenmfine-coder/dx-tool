/* emr-data/allergic-angioedema-v2.js — Variation: Allergic Angioedema */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Priscilla Moreno",
  "patientHPI": "I was prepping shrimp at work yesterday when my lips started swelling up really bad and I broke out in hives all over — I know I'm allergic to shrimp but I work at a seafood restaurant so I can't really avoid it. I used my EpiPen but it didn't seem to help much, so I had to use a second one before coming here.",
      "dob": "09/27/1984",
      "age": "42",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-315791",
      "language": "Spanish",
      "race": "Hispanic/Latina",
      "phone": "(630) 555-3353",
      "email": "priscilla.x@email.com",
      "address": "6171 Chestnut Rd, New Orleans, LA 70115",
      "insurance": "Medicaid",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(503) 555-6231",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Shrimp",
        "reaction": "Angioedema",
        "severity": "Severe",
        "type": "Food"
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
      "Mother: chronic urticaria"
    ],
    "socialHistory": [
      [
        "Context",
        "Restaurant worker — shellfish exposure occupational + dietary"
      ],
      [
        "Comorbidity",
        "Obesity BMI 38 — epi dose questions"
      ],
      [
        "Language",
        "Spanish-only"
      ],
      [
        "Issue",
        "Episode at work — workers comp vs personal insurance"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "42yo restaurant cook with lip/tongue angioedema + urticaria after shrimp prep — obese, epi dosing question",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic angioedema with urticaria — shrimp exposure (occupational)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Obesity BMI 38 — standard EpiPen 0.3mg may be insufficient, consider 0.5mg",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Occupational exposure — restaurant cook handles shellfish daily",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Workers comp vs personal insurance — exposure at work",
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
          "frequency": "Given in lateral thigh — may need repeat (underdosed for weight)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Epinephrine repeat",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "Given 10 min later (inadequate response to first dose)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Diphenhydramine",
          "dose": "50mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "92/58",
          "hr": "108",
          "rr": "22",
          "temp": "36.8°C",
          "spo2": "94%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-476971",
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
                  "value": "6",
                  "unit": "%",
                  "range": "1-4",
                  "flag": "H"
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
              "name": "ALLERGY",
              "results": [
                {
                  "test": "Tryptase",
                  "value": "26",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": "H"
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
          "cc": "42yo restaurant cook with lip/tongue angioedema + urticaria after shrimp prep — obese, epi dosing question",
          "hpi": "42F restaurant cook with angioedema of lips and tongue + diffuse urticaria after preparing shrimp. Known shrimp allergy but works in seafood restaurant — cannot avoid exposure. BMI 38 — first EpiPen 0.3mg had inadequate response, required second dose. Issue: 0.3mg is standard adult dose but may be subtherapeutic in obese patients. Literature supports 0.5mg for patients >100kg. Workers comp claim initiated — this is occupational exposure. Spanish interpreter needed for all counseling.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Observation after angioedema — occupational medicine consult",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic angioedema — resolved after 2 doses epi",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Obesity — need 0.5mg epi auto-injector (Symjepi 0.5mg or EpiPen via prefilled syringe)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Occupational exposure — needs job modification or reassignment",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Workers comp — workplace exposure documented",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisone",
          "dose": "40mg",
          "route": "PO",
          "frequency": "Daily x5 days",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "EpiPen 0.5mg discussion",
          "dose": "",
          "route": "",
          "frequency": "Standard 0.3mg may be insufficient for BMI 38",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "112/72",
          "hr": "82",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-393897",
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
          "cc": "Observation after angioedema — occupational medicine consult",
          "hpi": "42F stable. Occupational medicine consulted — employer must either reassign her away from shellfish prep or provide full PPE (nitrile gloves, N95 mask, separate work area). Workers comp covering this visit. Epi dosing discussion with A/I: for patients >100kg, consider 0.5mg epi. Options: (1) Symjepi 0.5mg auto-injector, (2) Prefilled epi syringe 0.5mg (more affordable), (3) Carry 2 standard EpiPens and use both if first insufficient.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — shellfish allergy management in restaurant worker, epi dosing for obesity",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Shrimp allergy — confirmed, occupational exposure",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Epi dosing — 0.5mg recommended for BMI 38 (>100kg)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Occupational modification — reassignment letter or full PPE mandate",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Cross-reactivity — test crab, lobster, other shellfish",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Workers comp documentation",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "EpiPen",
          "dose": "0.5mg (prefilled syringe)",
          "route": "IM",
          "frequency": "PRN x2 (higher dose for weight)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
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
          "accession": "LAB-354583",
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
                  "value": "4",
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
              "name": "SHELLFISH PANEL",
              "results": [
                {
                  "test": "Shrimp sIgE",
                  "value": "42",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Crab sIgE",
                  "value": "28",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Lobster sIgE",
                  "value": "22",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Tropomyosin (Pan-crustacean)",
                  "value": "34",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Mollusk (clam/oyster)",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "A/I consult — shellfish allergy management in restaurant worker, epi dosing for obesity",
          "hpi": "A/I: 42F with pan-crustacean allergy (tropomyosin positive — shrimp, crab, lobster all reactive). Mollusks negative — can eat clams/oysters. Epi 0.5mg prefilled syringes prescribed. Occupational modification letter: must not handle crustaceans; employer can reassign to non-shellfish prep stations. Spanish-language action plan provided.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — occupational reassignment, weight management discussion, epi plan confirmed",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Shellfish allergy — managed, occupational reassignment successful",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Epi 0.5mg plan in place",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Reassigned to salad/dessert station — no shellfish contact",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Workers comp closed — employer compliant",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Weight management discussed — GLP-1 referral if interested",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "EpiPen 0.5mg syringe",
          "dose": "0.5mg",
          "route": "IM",
          "frequency": "PRN x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
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
          "bp": "128/78",
          "hr": "78",
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
          "accession": "LAB-809529",
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
          "cc": "Follow-up — occupational reassignment, weight management discussion, epi plan confirmed",
          "hpi": "42F doing well. Reassigned to non-shellfish station at restaurant. No exposures in 6 weeks. Epi 0.5mg syringes at home and work. Employer providing separate prep area. Workers comp case resolved. Discussed weight management — if BMI decreases below obesity threshold, could transition back to standard 0.3mg epi.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Priscilla Moreno",
    "dob": "09/27/1984",
    "age": "42",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-315791",
    "language": "Spanish",
    "race": "Hispanic/Latina",
    "phone": "(720) 555-6658",
    "email": "priscilla.x@email.com",
    "address": "7742 W Haddon Ave, Kansas City, MO 64109",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(505) 555-3142",
      "relationship": "Spouse"
    },
    "chiefComplaint": "42yo restaurant cook with lip/tongue angioedema + urticaria after shrimp prep — obese, epi dosing question",
    "diagnosis": "Allergic Angioedema"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Allergic angioedema with urticaria — shrimp exposure (occupational)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Obesity BMI 38 — standard EpiPen 0.3mg may be insufficient, consider 0.5mg",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Occupational exposure — restaurant cook handles shellfish daily",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Workers comp vs personal insurance — exposure at work",
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
      "frequency": "Given in lateral thigh — may need repeat (underdosed for weight)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Epinephrine repeat",
      "dose": "0.3mg",
      "route": "IM",
      "frequency": "Given 10 min later (inadequate response to first dose)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Diphenhydramine",
      "dose": "50mg",
      "route": "IV",
      "frequency": "Once",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Methylprednisolone",
      "dose": "125mg",
      "route": "IV",
      "frequency": "Once",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Shrimp",
      "reaction": "Angioedema",
      "severity": "Severe",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "92/58",
      "hr": "108",
      "rr": "22",
      "temp": "36.8°C",
      "spo2": "94%",
      "pain": "7/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "42yo restaurant cook with lip/tongue angioedema + urticaria after shrimp prep — obese, epi dosing question",
      "hpi": "42F restaurant cook with angioedema of lips and tongue + diffuse urticaria after preparing shrimp. Known shrimp allergy but works in seafood restaurant — cannot avoid exposure. BMI 38 — first EpiPen 0.3mg had inadequate response, required second dose. Issue: 0.3mg is standard adult dose but may be subtherapeutic in obese patients. Literature supports 0.5mg for patients >100kg. Workers comp claim initiated — this is occupational exposure. Spanish interpreter needed for all counseling.",
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
      "accession": "LAB-476971",
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
              "value": "6",
              "unit": "%",
              "range": "1-4",
              "flag": "H"
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
          "name": "ALLERGY",
          "results": [
            {
              "test": "Tryptase",
              "value": "26",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": "H"
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
    "Mother: chronic urticaria"
  ],
  "socialHistory": [
    [
      "Context",
      "Restaurant worker — shellfish exposure occupational + dietary"
    ],
    [
      "Comorbidity",
      "Obesity BMI 38 — epi dose questions"
    ],
    [
      "Language",
      "Spanish-only"
    ],
    [
      "Issue",
      "Episode at work — workers comp vs personal insurance"
    ]
  ]
,
  "references": [
  {
    "id": "REF-AE-004",
    "citation": "Bernstein JA, Moellman J. Emerging concepts in the diagnosis and treatment of patients with undifferentiated angioedema. Int J Emerg Med. 2012;5:39.",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3518246/",
    "doi": "10.1186/1865-1380-5-39",
    "pmid": "23131076",
    "access": "Open Access (CC BY)",
    "validates": [
      "Differential diagnosis of angioedema: allergic vs bradykinin-mediated vs idiopathic",
      "C4 screening to distinguish HAE from other causes",
      "C1q levels distinguish acquired (low) from hereditary (normal) C1-INH deficiency",
      "Acquired C1-INH deficiency association with lymphoproliferative disorders (MGUS, lymphoma)",
      "Anti-C1-INH autoantibodies in acquired form"
    ]
  }
],
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Priscilla Moreno's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Priscilla appears anxious and short of breath, frequently touching her swollen lips and speaking in rapid, worried Spanish. She's cooperative but distressed about her breathing and concerned about missing work. Her affect shows fear mixed with frustration about her occupational exposure dilemma.",
    "interviewQuestions": [
        "When did your lip and tongue swelling start today?",
        "What were you doing right before the swelling began?",
        "Have you had this type of reaction before?",
        "Do you carry an EpiPen or epinephrine injector?",
        "Did you use your EpiPen today, and if so, how many times?",
        "Are you having any trouble breathing or swallowing?",
        "Do you have hives or rash anywhere on your body?",
        "What medications have you taken today for this reaction?",
        "How long have you been working in the restaurant?",
        "Do you normally avoid eating shrimp due to your allergy?",
        "Have your reactions been getting worse over time?",
        "Do you have any other food allergies?",
        "Has anyone in your family had severe allergic reactions?"
    ],
    "patientResponses": {
        "default": "I'm sorry, I don't understand. I'm having trouble breathing and my mouth is very swollen.",
        "onset": "It started about 30 minutes ago while I was cleaning and preparing shrimp for the lunch rush at the restaurant.",
        "character": "My lips and tongue feel huge and swollen, like they're going to burst. The itching all over is driving me crazy.",
        "location": "The swelling is worst in my lips and tongue, but I have these red itchy bumps everywhere - my arms, chest, back.",
        "severity": "The swelling is maybe 7 out of 10, but I'm really scared because it's hard to swallow and breathe - that's a 9.",
        "aggravating": "It seems to get worse when I try to talk a lot or when I touch the hives - they get more red and itchy.",
        "relieving": "I used my EpiPen twice but I'm still swollen. The cold water I've been sipping helps my throat a little.",
        "associated": "I feel dizzy and nauseous, my heart is racing, and I have these hives everywhere. My throat feels tight.",
        "denies": "No chest pain, no vomiting, no diarrhea, no fever. I'm not wheezing but breathing feels hard.",
        "history": "Yes, this has happened three times before with shrimp, but never this bad. It's getting worse each time.",
        "medications": "Epinephrine; Epinephrine repeat; Diphenhydramine; Methylprednisolone",
        "allergies": "Shrimp",
        "family": "My mother has chronic hives that come and go, but nothing like this.",
        "social": "I've been a cook at the seafood restaurant for 5 years. I don't eat shrimp but handle it daily. I don't smoke or drink much."
    },
    "examManeuvers": [
        "Inspect lips and perioral area",
        "Examine tongue and oropharynx",
        "Assess voice quality and stridor",
        "Inspect skin for urticaria pattern",
        "Palpate neck for lymphadenopathy",
        "Auscultate lungs for wheezing",
        "Assess respiratory effort and accessory muscle use",
        "Check capillary refill and peripheral perfusion",
        "Examine conjunctiva for injection",
        "Assess mental status and anxiety level"
    ],
    "examFindings": {
        "Inspect lips and perioral area": "Marked bilateral lip edema with asymmetric upper lip swelling, no cyanosis, lips appear tense and erythematous",
        "Examine tongue and oropharynx": "Tongue edema present but not severely protruding, oropharynx patent, no uvular swelling visible",
        "Assess voice quality and stridor": "Voice slightly muffled but clear, no audible stridor at rest, no hoarseness",
        "Inspect skin for urticaria pattern": "Diffuse raised erythematous wheals on arms, chest, and back, ranging 5-15mm, blanching with pressure",
        "Palpate neck for lymphadenopathy": "No cervical lymphadenopathy, no neck swelling or induration",
        "Auscultate lungs for wheezing": "Clear breath sounds bilaterally, no wheezing or rales, good air movement",
        "Assess respiratory effort and accessory muscle use": "Mild tachypnea but no accessory muscle use, no retractions",
        "Check capillary refill and peripheral perfusion": "Capillary refill 3 seconds, hands cool but pink, pulses strong",
        "Examine conjunctiva for injection": "Mild bilateral conjunctival erythema and tearing present",
        "Assess mental status and anxiety level": "Alert and oriented, anxious but appropriate, following commands"
    },
    "ddxTargets": [
        "Anaphylaxis with angioedema (correct diagnosis)",
        "Isolated angioedema",
        "Hereditary angioedema",
        "Laryngeal edema with airway compromise",
        "Anaphylactic shock",
        "Contact dermatitis with urticaria",
        "ACE inhibitor induced angioedema"
    ],
    "biasFlags": {
        "anchoring": "May anchor on 'just angioedema' and miss systemic anaphylaxis signs like hypotension and tachycardia requiring immediate treatment",
        "prematureClosure": "Risk of stopping at urticaria/angioedema without recognizing this is anaphylaxis needing aggressive management and observation",
        "availabilityBias": "May focus only on airway concerns and miss the obesity-related epinephrine dosing considerations that could affect treatment efficacy"
    },
    "coachPrompts": {
        "phase2": "You've identified angioedema and urticaria as key features. Before interviewing the patient, consider: What systemic signs would differentiate simple allergic reaction from anaphylaxis? What specific historical details about symptom progression and prior episodes will guide your management urgency?",
        "phase5": "Now that you have the history and exam findings, think about this patient's presentation systematically. She has mucocutaneous involvement with cardiovascular signs - how does this change your diagnosis and immediate management priorities? Also consider what unique factors about this patient might affect standard treatment protocols.",
        "finalDebrief": "This case demonstrates classic anaphylaxis with mucocutaneous and cardiovascular involvement. Key teaching points: recognizing anaphylaxis vs simple allergic reaction, obesity considerations for epinephrine dosing, occupational allergy management, and the importance of biphasic reaction monitoring. How did your differential evolve as you gathered more objective data?"
    }
}
};
