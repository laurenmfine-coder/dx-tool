/* emr-data/anaphylaxis-v3.js — Multi-Setting Allergy Case Variation: Anaphylaxis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Maria Santos-Reyes",
      "patientHPI": "I was cleaning a house today wearing my usual rubber gloves when my lips and face started swelling up, and then I couldn't breathe right and felt like I was going to pass out. I had an emergency pen in my purse but it was old, and it helped a little but I still feel awful - I've gotten rashes from those gloves before but nothing like this.",
      "dob": "08/25/1994",
      "age": "32",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-947187",
      "language": "Spanish",
      "race": "Hispanic/Latina",
      "phone": "(704) 555-1539",
      "email": "maria.santosreyes@email.com",
      "address": "6625 Juniper Dr, Columbus, OH 43215",
      "insurance": "Uninsured \u2014 Self-Pay",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "Walgreens \u2014 University Blvd",
      "emergencyContact": {
        "name": "Michael Santos-Reyes",
        "phone": "(404) 555-6152",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Hives (childhood)",
        "severity": "Mild",
        "type": "Drug"
      },
      {
        "allergen": "Latex",
        "reaction": "Contact urticaria",
        "severity": "Moderate",
        "type": "Environmental"
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
      "Mother: asthma",
      "Grandmother: died from asthma attack"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never"
      ],
      [
        "Alcohol",
        "Rare"
      ],
      [
        "Occupation",
        "House cleaner \u2014 chemical exposures"
      ],
      [
        "Insurance",
        "Uninsured \u2014 works 2 jobs, no employer coverage"
      ],
      [
        "Living",
        "Shares apartment with 3 roommates, no AC"
      ],
      [
        "Language",
        "Primary Spanish \u2014 functional English"
      ],
      [
        "Children",
        "2 children ages 5 and 8"
      ],
      [
        "Access",
        "No PCP \u2014 uses urgent care for all visits"
      ],
      [
        "Financial",
        "Cannot afford EpiPen ($600+) \u2014 has been using expired one"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Latex glove exposure at work \u2192 progressive lip swelling, wheezing, lightheadedness. Used expired EpiPen with partial response.",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Latex anaphylaxis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (moderate persistent \u2014 undertreated, no controller)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Latex occupational exposure \u2014 house cleaner",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Uninsured \u2014 cannot afford EpiPen or controller meds",
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
          "frequency": "Given x1 in ED (used expired auto-injector at scene with partial effect)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Albuterol",
          "dose": "2.5mg",
          "route": "NEB",
          "frequency": "Continuous",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Diphenhydramine",
          "dose": "50mg",
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
          "bp": "96/58",
          "hr": "118",
          "rr": "26",
          "temp": "37.0\u00b0C",
          "spo2": "90%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-904777",
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
                  "value": "12.1",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
                  "value": "8",
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
              "name": "ALLERGY STUDIES",
              "results": [
                {
                  "test": "Tryptase (acute)",
                  "value": "32",
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
          "cc": "Latex glove exposure at work \u2192 progressive lip swelling, wheezing, lightheadedness. Used expired EpiPen with partial response.",
          "hpi": "32F house cleaner presenting with anaphylaxis after latex glove exposure at work. Reports progressive lip/face swelling, wheezing, and near-syncope developing over 20 min. Used expired EpiPen from purse with partial improvement. Known latex contact urticaria but never had systemic reaction before. Undertreated asthma \u2014 uses only albuterol PRN, no controller. Uninsured, works 2 jobs, cannot afford EpiPen replacement ($600+) or specialist visits. Spanish-speaking \u2014 functional English but prefers Spanish for medical discussions.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief observation after latex anaphylaxis \u2014 social work for medication assistance programs",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Latex anaphylaxis \u2014 occupational",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (moderate persistent, uncontrolled \u2014 no ICS)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Uninsured \u2014 medication access barriers",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Occupational exposure \u2014 needs job modification counseling",
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
          "name": "Albuterol",
          "dose": "90mcg",
          "route": "MDI",
          "frequency": "Q4H PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Fluticasone/Salmeterol",
          "dose": "250/50",
          "route": "DPI",
          "frequency": "BID (samples from pharmacy)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "108/68",
          "hr": "86",
          "rr": "16",
          "temp": "36.8\u00b0C",
          "spo2": "97%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-401009",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "Brief observation after latex anaphylaxis \u2014 social work for medication assistance programs",
          "hpi": "32F stable after anaphylaxis. Social work consulted: applying for Mylan patient assistance program for EpiPen, connected to community health center for PCP (sliding scale), occupational health referral for non-latex glove workplace accommodation letter. Controller inhaler samples provided \u2014 30-day bridge.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 latex allergy confirmation, occupational modification, medication access",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Latex allergy \u2014 IgE-mediated (occupational)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma \u2014 moderate persistent, now on ICS/LABA",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Cross-reactive food allergies possible (banana, avocado, kiwi, chestnut)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Financial barriers \u2014 EpiPen, specialist care",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2 (patient assistance program approved)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Fluticasone/Salmeterol",
          "dose": "250/50",
          "route": "DPI",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
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
          "bp": "112/68",
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
          "accession": "LAB-177522",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
              "name": "ALLERGY TESTING",
              "results": [
                {
                  "test": "Latex sIgE",
                  "value": "18",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Hev b 6.02 (component)",
                  "value": "14",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Banana sIgE",
                  "value": "4.2",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Avocado sIgE",
                  "value": "2.8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Total IgE",
                  "value": "280",
                  "unit": "IU/mL",
                  "range": "<100",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult \u2014 latex allergy confirmation, occupational modification, medication access",
          "hpi": "A/I consult: 32F with confirmed IgE-mediated latex allergy. Hev b 6.02 positive \u2014 cross-reactive with tropical fruits. Latex-fruit syndrome counseling provided in Spanish. Workplace accommodation letter written \u2014 employer must provide non-latex (nitrile) gloves. Connected to free community A/I clinic for follow-up. EpiPen through manufacturer assistance program (Mylan). Also addressing undertreated asthma \u2014 likely contributes to anaphylaxis severity.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up \u2014 latex avoidance, asthma control, medication access check",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Latex allergy with latex-fruit syndrome",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma \u2014 improving on ICS/LABA",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Employer providing nitrile gloves \u2014 no further occupational exposures",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "EpiPen access \u2014 patient assistance program active",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Community health center PCP established",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2 (current, not expired)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Fluticasone/Salmeterol",
          "dose": "250/50",
          "route": "DPI",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Albuterol",
          "dose": "90mcg",
          "route": "MDI",
          "frequency": "PRN (using 2x/week \u2014 controlled)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "110/66",
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
          "accession": "LAB-558619",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "Follow-up \u2014 latex avoidance, asthma control, medication access check",
          "hpi": "32F returns 6 weeks post-anaphylaxis. Employer now providing nitrile gloves \u2014 no further exposures. Asthma much better on controller \u2014 albuterol use down to 2x/week. EpiPens current (assistance program). Avoiding banana and avocado per counseling. Established at community health center with PCP. Children also screened for latex allergy (negative). Spanish-language action plan reviewed and updated.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Maria Santos-Reyes",
    "dob": "08/25/1994",
    "age": "32",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-947187",
    "language": "Spanish",
    "race": "Hispanic/Latina",
    "phone": "(212) 555-4394",
    "email": "maria.santosreyes@email.com",
    "address": "4039 Hollyhock Rd, San Antonio, TX 78207",
    "insurance": "Uninsured \u2014 Self-Pay",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Walgreens \u2014 University Blvd",
    "emergencyContact": {
      "name": "Michael Santos-Reyes",
      "phone": "(620) 555-3362",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Latex glove exposure at work \u2192 progressive lip swelling, wheezing, lightheadedness. Used expired EpiPen with partial response.",
    "diagnosis": "Anaphylaxis"
  },
  "problems": [
    {
      "problem": "Latex anaphylaxis \u2014 Type I IgE-mediated",
      "icd": "T45.4XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Multiple prior sensitizations from surgical glove exposure; latex IgE 12.4 kUA/L; banana/avocado cross-reactive"
    },
    {
      "problem": "Occupational latex sensitization \u2014 healthcare worker",
      "icd": "Z77.010",
      "onset": "2022",
      "status": "Active",
      "notes": "2 years of latex glove exposure in OR; progressive sensitization over time; prior episodes of hand urticaria"
    },
    {
      "problem": "Latex-fruit syndrome",
      "icd": "Z91.010",
      "onset": "2024",
      "status": "Active",
      "notes": "Cross-reactive with banana, avocado, kiwi, chestnut \u2014 Hev b 6.02 (hevein) is cross-reactive allergen"
    }
  ],
  "medications": [
    {
      "name": "EpiPen 0.3mg IM x2",
      "sig": "Inject at first sign of throat tightness or breathing difficulty",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Cetirizine 10mg daily PRN",
      "sig": "Take 1 tablet by mouth daily for mild allergic symptoms",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Medical alert bracelet \u2014 LATEX ALLERGY",
      "sig": "Wear at all times; essential for surgical/procedure settings",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 0,
      "status": "Ordered"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Hives (childhood)",
      "severity": "Mild",
      "type": "Drug"
    },
    {
      "allergen": "Latex",
      "reaction": "Contact urticaria",
      "severity": "Moderate",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "96/58",
      "hr": "118",
      "rr": "26",
      "temp": "37.0\u00b0C",
      "spo2": "90%",
      "pain": "7/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Latex glove exposure at work \u2192 progressive lip swelling, wheezing, lightheadedness. Used expired EpiPen with partial response.",
      "hpi": "32F house cleaner presenting with anaphylaxis after latex glove exposure at work. Reports progressive lip/face swelling, wheezing, and near-syncope developing over 20 min. Used expired EpiPen from purse with partial improvement. Known latex contact urticaria but never had systemic reaction before. Undertreated asthma \u2014 uses only albuterol PRN, no controller. Uninsured, works 2 jobs, cannot afford EpiPen replacement ($600+) or specialist visits. Spanish-speaking \u2014 functional English but prefers Spanish for medical discussions.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/10/2024",
      "panel": "Latex Allergy Evaluation",
      "results": [
        {
          "test": "Latex IgE (Hevea brasiliensis, ImmunoCAP)",
          "value": "12.4",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Hev b 6.02 (hevein \u2014 cross-reactive component)",
          "value": "8.1",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Banana IgE",
          "value": "3.2",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Avocado IgE",
          "value": "2.9",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Kiwi IgE",
          "value": "1.8",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "290",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "Serum Tryptase (2h post-reaction)",
          "value": "22.8",
          "unit": "ng/mL",
          "ref": "<11.4",
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
    "Mother: asthma",
    "Grandmother: died from asthma attack"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Occupation",
      "House cleaner \u2014 chemical exposures"
    ],
    [
      "Insurance",
      "Uninsured \u2014 works 2 jobs, no employer coverage"
    ],
    [
      "Living",
      "Shares apartment with 3 roommates, no AC"
    ],
    [
      "Language",
      "Primary Spanish \u2014 functional English"
    ],
    [
      "Children",
      "2 children ages 5 and 8"
    ],
    [
      "Access",
      "No PCP \u2014 uses urgent care for all visits"
    ],
    [
      "Financial",
      "Cannot afford EpiPen ($600+) \u2014 has been using expired one"
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
      "id": "WAO-2020",
      "title": "World Allergy Organization anaphylaxis guidance 2020",
      "authors": "Cardona V, Ansotegui IJ, Ebisawa M, et al.",
      "journal": "World Allergy Organ J",
      "year": 2020,
      "doi": "10.1016/j.waojou.2020.100472",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/",
      "openAccess": true,
      "validates": [
        "WAO diagnostic criteria",
        "Epinephrine positioning",
        "Cofactors: exercise, beta-blockers, ACE inhibitors"
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
      "id": "EAACI-Anaph-2021",
      "title": "EAACI guidelines: Anaphylaxis (2021 update)",
      "authors": "Muraro A, Worm M, Alviani C, et al.",
      "journal": "Allergy",
      "year": 2022,
      "doi": "10.1111/all.15032",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9285065/",
      "openAccess": true,
      "validates": [
        "Discharge planning with EpiPen",
        "Patient action plans",
        "Allergist referral 4-6 weeks"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Maria is anxious and breathing rapidly, speaking in short phrases between breaths. She's cooperative but frightened, particularly worried about missing work and affording treatment. She appears embarrassed about using an expired EpiPen and not having proper asthma medications.",
    "interviewQuestions": [
      "Can you tell me exactly what happened at work today?",
      "When did you first notice the lip swelling and other symptoms?",
      "How quickly did the symptoms progress?",
      "Have you had reactions like this to latex before?",
      "Tell me about your breathing - when did the wheezing start?",
      "You mentioned using an EpiPen - when did you use it and what happened?",
      "Are you having any chest pain or throat tightness?",
      "How is your asthma usually controlled?",
      "What medications do you normally take for your asthma?",
      "Have you had any recent respiratory infections?",
      "Do you have access to latex-free gloves at work?",
      "Any nausea, vomiting, or abdominal cramping?",
      "Have you ever been intubated or hospitalized for asthma or allergic reactions?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating right now - could you repeat that?",
      "onset": "It started about 45 minutes ago when I put on latex gloves to clean a bathroom. My lips started tingling first, then swelling.",
      "character": "My lips feel huge and numb, and I'm wheezing badly - worse than my usual asthma. I feel dizzy and weak.",
      "location": "The swelling is mainly in my lips and around my eyes. The wheezing is all through my chest.",
      "severity": "This is definitely a 9 out of 10 - I've never felt this scared about breathing before.",
      "aggravating": "It got much worse very quickly after I touched my face with the gloves on.",
      "relieving": "The EpiPen helped some but not as much as it should have. Nothing else has helped.",
      "associated": "I'm dizzy, weak, nauseous, and my heart is racing. I almost passed out at work.",
      "denies": "No rash or hives, no vomiting, no chest pain, but I do feel like my throat is tight.",
      "history": "I've had latex reactions before but never this bad. Usually just contact dermatitis on my hands.",
      "medications": "Epinephrine; Albuterol; Methylprednisolone; Diphenhydramine",
      "allergies": "Penicillin, Latex",
      "family": "My mom has asthma and my grandmother actually died from a severe asthma attack when I was little.",
      "social": "I clean houses for work, so I'm exposed to latex gloves and cleaning chemicals daily. I don't smoke or drink much. I'm uninsured and work two jobs but still can't afford my controller inhalers."
    },
    "examManeuvers": [
      "Inspect lips, face, and throat for angioedema",
      "Auscultate lungs for wheezing and air movement",
      "Assess respiratory effort and accessory muscle use",
      "Examine skin for urticaria or erythema",
      "Palpate neck for lymphadenopathy or masses",
      "Cardiovascular examination for tachycardia",
      "Neurologic assessment for altered mental status",
      "Inspect hands for contact dermatitis from latex",
      "Assess peak expiratory flow if possible",
      "Monitor oxygen saturation and vital signs"
    ],
    "examFindings": {
      "Inspect lips, face, and throat for angioedema": "Marked bilateral lip swelling and mild periorbital edema. Uvula appears swollen but airway patent.",
      "Auscultate lungs for wheezing and air movement": "Diffuse expiratory wheeze bilaterally with good air movement. No stridor.",
      "Assess respiratory effort and accessory muscle use": "Mild increased work of breathing with slight accessory muscle use, speaking in short phrases.",
      "Examine skin for urticaria or erythema": "No generalized urticaria or rash visible on trunk or extremities.",
      "Palpate neck for lymphadenopathy or masses": "No lymphadenopathy or masses palpated. No neck swelling.",
      "Cardiovascular examination for tachycardia": "Tachycardic regular rhythm, no murmurs. Pulses strong but rapid.",
      "Neurologic assessment for altered mental status": "Alert and oriented but anxious. No focal deficits.",
      "Inspect hands for contact dermatitis from latex": "Mild erythema and scaling on bilateral hands consistent with chronic contact dermatitis.",
      "Assess peak expiratory flow if possible": "Peak flow 60% of predicted, consistent with moderate airway obstruction.",
      "Monitor oxygen saturation and vital signs": "SpO2 90% on room air, BP 96/58, HR 118, appears volume depleted."
    },
    "ddxTargets": [
      "Anaphylaxis \u2014 IgE-mediated latex allergy, occupational exposure (correct)",
      "Contact urticaria (non-IgE) \u2014 localized, immediate; not systemic; no IgE mechanism",
      "Allergic contact dermatitis to rubber accelerators (Type IV) \u2014 delayed, eczematous; not anaphylaxis",
      "Food allergy anaphylaxis \u2014 cross-reactive foods possible (banana); latex exposure was direct trigger here",
      "Irritant contact dermatitis \u2014 glove friction, detergents; negative IgE; no systemic reaction",
      "Exercise-induced anaphylaxis \u2014 no latex exposure; occurs with exercise"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'asthma exacerbation' given her asthma history and wheezing, missing the systemic anaphylactic features like hypotension and angioedema.",
      "prematureClosure": "Risk of stopping evaluation after noting wheezing and asthma history without fully assessing for anaphylaxis criteria or considering latex exposure context.",
      "availabilityBias": "May focus on common asthma presentations rather than recognizing occupational anaphylaxis pattern in uninsured patient with expired medications."
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider what key historical elements would help you differentiate between your differential diagnoses. What specific questions about the exposure, timeline, and progression of symptoms will be most important? How might her occupational and social history influence both her presentation and your management?",
      "phase5": "Now that you've gathered history and physical findings, let's think through this systematically. You have a patient with known latex allergy who had occupational exposure, followed by rapid onset of angioedema, wheezing, and hypotension. How do these findings fit together? What criteria are you using to evaluate for anaphylaxis versus other diagnoses?",
      "finalDebrief": "This case illustrates classic anaphylaxis with both respiratory and cardiovascular involvement following known allergen exposure. Notice how the combination of angioedema, bronchospasm, and hypotension distinguished this from isolated asthma or local allergic reaction. The social determinants - being uninsured with expired medications and ongoing occupational exposure - are crucial for both understanding the presentation and planning appropriate follow-up care.",
      "final": "Diagnosis: latex anaphylaxis, Type I IgE-mediated, occupational healthcare worker. Key teaching points: (1) Distinguish Type I (IgE, immediate, anaphylaxis) from Type IV (T-cell, delayed, eczema) latex reactions \u2014 crucially different management. Type I = avoid all latex, carry EpiPen. Type IV = avoid rubber accelerators, allergen-free gloves. (2) Latex-fruit syndrome: Hev b 6.02 (hevein) cross-reacts with chitinases in tropical fruits \u2014 banana (60%), avocado (40%), kiwi (35%), chestnut (25%). Risk of food-triggered reaction ongoing. (3) Latex avoidance must be COMPREHENSIVE: gloves, IV tubing ports, catheter balloons, anesthesia equipment. Hospital must be notified \u2014 latex-safe protocol required for ALL procedures. (4) Healthcare worker implications: occupational disability potential; employee health referral; workplace accommodation for latex-safe environment. (5) No immunotherapy available for latex \u2014 strict avoidance is the only management. Accidental exposures in the OR are the highest-risk scenario."
    }
  },
  "meta": {
    "diagnosis": "Anaphylaxis \u2014 Latex Allergy (Type I IgE-Mediated), Occupational Exposure; Healthcare Worker"
  }
};
