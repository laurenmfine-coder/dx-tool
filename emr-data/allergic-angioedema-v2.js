
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Priscilla Moreno",
      "patientHPI": "I was prepping shrimp at work yesterday when my lips started swelling up really bad and I broke out in hives all over \u2014 I know I'm allergic to shrimp but I work at a seafood restaurant so I can't really avoid it. I used my EpiPen but it didn't seem to help much, so I had to use a second one before coming here.",
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Restaurant worker \u2014 shellfish exposure occupational + dietary"
      ],
      [
        "Comorbidity",
        "Obesity BMI 38 \u2014 epi dose questions"
      ],
      [
        "Language",
        "Spanish-only"
      ],
      [
        "Issue",
        "Episode at work \u2014 workers comp vs personal insurance"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "42yo restaurant cook with lip/tongue angioedema + urticaria after shrimp prep \u2014 obese, epi dosing question",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic angioedema with urticaria \u2014 shrimp exposure (occupational)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Obesity BMI 38 \u2014 standard EpiPen 0.3mg may be insufficient, consider 0.5mg",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Occupational exposure \u2014 restaurant cook handles shellfish daily",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Workers comp vs personal insurance \u2014 exposure at work",
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
          "frequency": "Given in lateral thigh \u2014 may need repeat (underdosed for weight)",
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
          "temp": "36.8\u00b0C",
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
          "cc": "42yo restaurant cook with lip/tongue angioedema + urticaria after shrimp prep \u2014 obese, epi dosing question",
          "hpi": "42F restaurant cook with angioedema of lips and tongue + diffuse urticaria after preparing shrimp. Known shrimp allergy but works in seafood restaurant \u2014 cannot avoid exposure. BMI 38 \u2014 first EpiPen 0.3mg had inadequate response, required second dose. Issue: 0.3mg is standard adult dose but may be subtherapeutic in obese patients. Literature supports 0.5mg for patients >100kg. Workers comp claim initiated \u2014 this is occupational exposure. Spanish interpreter needed for all counseling.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Observation after angioedema \u2014 occupational medicine consult",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic angioedema \u2014 resolved after 2 doses epi",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Obesity \u2014 need 0.5mg epi auto-injector (Symjepi 0.5mg or EpiPen via prefilled syringe)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Occupational exposure \u2014 needs job modification or reassignment",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Workers comp \u2014 workplace exposure documented",
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
          "temp": "36.8\u00b0C",
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
          "cc": "Observation after angioedema \u2014 occupational medicine consult",
          "hpi": "42F stable. Occupational medicine consulted \u2014 employer must either reassign her away from shellfish prep or provide full PPE (nitrile gloves, N95 mask, separate work area). Workers comp covering this visit. Epi dosing discussion with A/I: for patients >100kg, consider 0.5mg epi. Options: (1) Symjepi 0.5mg auto-injector, (2) Prefilled epi syringe 0.5mg (more affordable), (3) Carry 2 standard EpiPens and use both if first insufficient.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 shellfish allergy management in restaurant worker, epi dosing for obesity",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Shrimp allergy \u2014 confirmed, occupational exposure",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Epi dosing \u2014 0.5mg recommended for BMI 38 (>100kg)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Occupational modification \u2014 reassignment letter or full PPE mandate",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Cross-reactivity \u2014 test crab, lobster, other shellfish",
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
          "cc": "A/I consult \u2014 shellfish allergy management in restaurant worker, epi dosing for obesity",
          "hpi": "A/I: 42F with pan-crustacean allergy (tropomyosin positive \u2014 shrimp, crab, lobster all reactive). Mollusks negative \u2014 can eat clams/oysters. Epi 0.5mg prefilled syringes prescribed. Occupational modification letter: must not handle crustaceans; employer can reassign to non-shellfish prep stations. Spanish-language action plan provided.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up \u2014 occupational reassignment, weight management discussion, epi plan confirmed",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Shellfish allergy \u2014 managed, occupational reassignment successful",
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
          "description": "Reassigned to salad/dessert station \u2014 no shellfish contact",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Workers comp closed \u2014 employer compliant",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Weight management discussed \u2014 GLP-1 referral if interested",
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
          "cc": "Follow-up \u2014 occupational reassignment, weight management discussion, epi plan confirmed",
          "hpi": "42F doing well. Reassigned to non-shellfish station at restaurant. No exposures in 6 weeks. Epi 0.5mg syringes at home and work. Employer providing separate prep area. Workers comp case resolved. Discussed weight management \u2014 if BMI decreases below obesity threshold, could transition back to standard 0.3mg epi.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(505) 555-3142",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Lip swelling",
    "diagnosis": "Allergic Angioedema"
  },
  "problems": [
    {
      "problem": "IgE-mediated allergic angioedema \u2014 peanut",
      "icd": "T78.1XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Lip/periorbital swelling + urticaria within 15 min of peanut exposure."
    },
    {
      "problem": "Anaphylaxis \u2014 multisystem (cutaneous + GI)",
      "icd": "T78.2XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Urticaria + angioedema + nausea = anaphylaxis by World Allergy Organization criteria. Epinephrine indicated."
    },
    {
      "problem": "Peanut allergy \u2014 epinephrine auto-injector and allergy referral",
      "icd": "Z91.010",
      "onset": "2024",
      "status": "Active",
      "notes": "EpiPen 0.3mg x2 prescribed. Oral immunotherapy evaluation at follow-up."
    }
  ],
  "medications": [
    {
      "name": "Epinephrine 0.3mg IM lateral thigh \u2014 administered",
      "sig": "First-line anaphylaxis treatment \u2014 NOT optional for IgE-mediated multisystem reaction",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Diphenhydramine 25mg IV \u2014 adjunct after epinephrine",
      "sig": "H1 antihistamine \u2014 treats urticaria/pruritus but does NOT treat anaphylaxis",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "EpiPen 0.3mg auto-injector x2 \u2014 discharge prescription",
      "sig": "Inject outer thigh at first sign of reaction. Call 911. Second dose after 5-10 min if no improvement. Carry 2 at all times.",
      "prescriber": "ED/Allergy",
      "start": "2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Loratadine 10mg PO daily \u2014 ongoing antihistamine",
      "sig": "Daily scheduled antihistamine \u2014 reduces breakthrough urticaria risk",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 2,
      "status": "Active"
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
      "temp": "36.8\u00b0C",
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
      "cc": "42yo restaurant cook with lip/tongue angioedema + urticaria after shrimp prep \u2014 obese, epi dosing question",
      "hpi": "42F restaurant cook with angioedema of lips and tongue + diffuse urticaria after preparing shrimp. Known shrimp allergy but works in seafood restaurant \u2014 cannot avoid exposure. BMI 38 \u2014 first EpiPen 0.3mg had inadequate response, required second dose. Issue: 0.3mg is standard adult dose but may be subtherapeutic in obese patients. Literature supports 0.5mg for patients >100kg. Workers comp claim initiated \u2014 this is occupational exposure. Spanish interpreter needed for all counseling.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Anaphylaxis/Allergy Workup",
      "results": [
        {
          "test": "Tryptase (drawn 1h post-reaction)",
          "value": "22.4",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "Baseline tryptase (24h post)",
          "value": "4.1",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": ""
        },
        {
          "test": "Peanut-specific IgE (ImmunoCAP)",
          "value": "18.6",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Ara h 2 component IgE",
          "value": "12.4",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
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
      "Restaurant worker \u2014 shellfish exposure occupational + dietary"
    ],
    [
      "Comorbidity",
      "Obesity BMI 38 \u2014 epi dose questions"
    ],
    [
      "Language",
      "Spanish-only"
    ],
    [
      "Issue",
      "Episode at work \u2014 workers comp vs personal insurance"
    ]
  ],
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
  "guided": {
    "supported": true,
    "patientPersona": "Priscilla appears anxious and mildly distressed, speaking rapidly in Spanish-accented English about her work situation and concerns about insurance coverage. She is cooperative but worried about losing her job due to her shellfish allergy, and becomes emotional when discussing the recurring nature of these episodes despite trying to be careful at work.",
    "interviewQuestions": [
      "When did your lip swelling begin today?",
      "What were you doing when the swelling started?",
      "Have you had any difficulty breathing or swallowing?",
      "Do you have any itching or rash anywhere on your body?",
      "Have you used your EpiPen or any other medications today?",
      "How many times have you had reactions like this before?",
      "What specific foods or substances trigger your allergic reactions?",
      "Do you work around any allergens in your job?",
      "Have you eaten anything unusual today?",
      "Are you having any throat tightness or voice changes?",
      "Do you feel dizzy or lightheaded?",
      "Have you had any nausea, vomiting, or stomach cramping?",
      "How severe is this episode compared to previous ones?"
    ],
    "patientResponses": {
      "default": "I'm sorry, can you ask that differently? I'm worried about my swelling and work situation.",
      "onset": "About 30 minutes ago while I was cleaning shrimp at the restaurant. My lips started tingling first, then swelling rapidly.",
      "character": "My lips feel thick and heavy, like balloons. My tongue feels swollen too and it's hard to talk clearly.",
      "location": "Mainly my lips and tongue, but I can feel some swelling in my throat area too.",
      "severity": "This is about a 7 out of 10 - worse than usual. I'm scared because the first EpiPen didn't work as well as before.",
      "aggravating": "Being around shellfish at work makes it worse. Even the steam and particles in the air trigger reactions.",
      "relieving": "I used my EpiPen but it didn't help as much as expected. Usually that stops everything.",
      "associated": "I have itchy red bumps all over my arms and chest, and I feel dizzy and nauseous. My heart is racing.",
      "denies": "No chest pain, but I do feel short of breath. No vomiting yet but I feel sick to my stomach.",
      "history": "This happens every few months at work. It's getting worse and more frequent. I've been hospitalized twice before.",
      "medications": "Epinephrine; Epinephrine repeat; Diphenhydramine; Methylprednisolone",
      "allergies": "Shrimp",
      "family": "My mother has chronic hives and skin allergies, but nothing this severe.",
      "social": "I'm a cook at a seafood restaurant. I need this job but I'm exposed to shellfish daily. I don't smoke or drink. I speak mainly Spanish."
    },
    "examManeuvers": [
      "Inspect lips and oral cavity",
      "Examine neck for angioedema",
      "Auscultate lungs for wheezing",
      "Examine skin for urticaria",
      "Assess voice quality and stridor",
      "Palpate neck for lymphadenopathy",
      "Examine conjunctiva for swelling",
      "Assess mental status and anxiety level",
      "Evaluate respiratory effort",
      "Check capillary refill and peripheral perfusion"
    ],
    "examFindings": {
      "Inspect lips and oral cavity": "Marked bilateral lip edema with mild tongue swelling, no visible obstruction of airway",
      "Examine neck for angioedema": "Mild neck swelling without significant laryngeal edema",
      "Auscultate lungs for wheezing": "Mild expiratory wheeze bilaterally, good air movement",
      "Examine skin for urticaria": "Diffuse raised erythematous wheals on arms, chest, and back",
      "Assess voice quality and stridor": "Slightly muffled voice, no audible stridor at rest",
      "Palpate neck for lymphadenopathy": "No lymphadenopathy, mild soft tissue swelling",
      "Examine conjunctiva for swelling": "Mild periorbital edema, no significant conjunctival swelling",
      "Assess mental status and anxiety level": "Alert and anxious but appropriate, no altered mental status",
      "Evaluate respiratory effort": "Mildly increased work of breathing, using accessory muscles slightly",
      "Check capillary refill and peripheral perfusion": "Capillary refill 3 seconds, cool extremities"
    },
    "ddxTargets": [
      "IgE-mediated peanut anaphylaxis \u2014 urticaria + angioedema + GI (correct)",
      "ACE inhibitor angioedema \u2014 no urticaria, bradykinin-mediated, different trigger",
      "Hereditary angioedema \u2014 no urticaria, complement abnormal, different trigger",
      "Scombroid fish poisoning \u2014 flushing after spoiled fish, not peanuts",
      "Mastocytosis-triggered anaphylaxis \u2014 elevated baseline tryptase distinguishes",
      "Vasovagal reaction \u2014 pallor/bradycardia without urticaria or angioedema"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on known shrimp allergy and missing inadequate epinephrine dosing due to obesity or considering other causes of treatment failure",
      "prematureClosure": "Risk of assuming standard anaphylaxis treatment without considering BMI-adjusted epinephrine dosing or occupational exposure complexities",
      "availabilityBias": "May focus only on food allergy and miss the significance of occupational exposure, workers compensation issues, or need for dosing adjustment"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. This patient has known allergies but is presenting to the ED - what factors might make you concerned that standard treatment isn't working optimally? Think about patient-specific factors that might affect medication effectiveness.",
      "phase5": "You've identified anaphylaxis with angioedema. The patient used epinephrine but still came to the ED with ongoing symptoms. What patient factors might explain suboptimal response to standard dosing? Also consider the broader context of this patient's occupational exposure.",
      "finalDebrief": "This case highlights the complexity of anaphylaxis management in obese patients where standard epinephrine dosing may be insufficient. The occupational exposure creates a challenging situation requiring both medical management and potentially workplace modifications or alternative employment considerations.",
      "final": "Diagnosis: IgE-mediated peanut anaphylaxis. Key learning: (1) Anaphylaxis diagnosis: 2+ organ systems OR known allergen exposure + hypotension/bronchospasm. This patient: skin (urticaria + angioedema) + GI (nausea) = anaphylaxis even without hypotension. (2) Epinephrine is ALWAYS first line \u2014 not antihistamines, not steroids. Delay in epinephrine is the #1 cause of anaphylaxis fatalities. Diphenhydramine treats itching, not anaphylaxis. Steroids prevent biphasic reaction but act too slowly for acute treatment. (3) Biphasic anaphylaxis: recurrence 1-72h after apparent resolution without re-exposure, in ~10-20% of cases. Observe 4-6 hours in ED. (4) Tryptase elevation: acute >baseline confirms mast cell-mediated mechanism. Elevated baseline tryptase (>20) suggests mastocytosis. (5) Ara h 2 IgE is the best predictor of systemic peanut reactivity. Palforzia (peanut OIT) is FDA-approved \u2014 refer to allergy for evaluation."
    }
  },
  "meta": {
    "diagnosis": "Allergic Angioedema \u2014 IgE-Mediated Peanut Anaphylaxis, Epinephrine Required, EpiPen Discharge Prescription",
    "caseId": "allergic-angioedema-v2"
  }
};
