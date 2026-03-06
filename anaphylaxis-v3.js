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
      "insurance": "Uninsured — Self-Pay",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "Walgreens — University Blvd",
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
        "House cleaner — chemical exposures"
      ],
      [
        "Insurance",
        "Uninsured — works 2 jobs, no employer coverage"
      ],
      [
        "Living",
        "Shares apartment with 3 roommates, no AC"
      ],
      [
        "Language",
        "Primary Spanish — functional English"
      ],
      [
        "Children",
        "2 children ages 5 and 8"
      ],
      [
        "Access",
        "No PCP — uses urgent care for all visits"
      ],
      [
        "Financial",
        "Cannot afford EpiPen ($600+) — has been using expired one"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Latex glove exposure at work → progressive lip swelling, wheezing, lightheadedness. Used expired EpiPen with partial response.",
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
          "description": "Asthma (moderate persistent — undertreated, no controller)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Latex occupational exposure — house cleaner",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Uninsured — cannot afford EpiPen or controller meds",
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
          "temp": "37.0°C",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "Latex glove exposure at work → progressive lip swelling, wheezing, lightheadedness. Used expired EpiPen with partial response.",
          "hpi": "32F house cleaner presenting with anaphylaxis after latex glove exposure at work. Reports progressive lip/face swelling, wheezing, and near-syncope developing over 20 min. Used expired EpiPen from purse with partial improvement. Known latex contact urticaria but never had systemic reaction before. Undertreated asthma — uses only albuterol PRN, no controller. Uninsured, works 2 jobs, cannot afford EpiPen replacement ($600+) or specialist visits. Spanish-speaking — functional English but prefers Spanish for medical discussions.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief observation after latex anaphylaxis — social work for medication assistance programs",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Latex anaphylaxis — occupational",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (moderate persistent, uncontrolled — no ICS)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Uninsured — medication access barriers",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Occupational exposure — needs job modification counseling",
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
          "temp": "36.8°C",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "Brief observation after latex anaphylaxis — social work for medication assistance programs",
          "hpi": "32F stable after anaphylaxis. Social work consulted: applying for Mylan patient assistance program for EpiPen, connected to community health center for PCP (sliding scale), occupational health referral for non-latex glove workplace accommodation letter. Controller inhaler samples provided — 30-day bridge.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — latex allergy confirmation, occupational modification, medication access",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Latex allergy — IgE-mediated (occupational)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma — moderate persistent, now on ICS/LABA",
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
          "description": "Financial barriers — EpiPen, specialist care",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "A/I consult — latex allergy confirmation, occupational modification, medication access",
          "hpi": "A/I consult: 32F with confirmed IgE-mediated latex allergy. Hev b 6.02 positive — cross-reactive with tropical fruits. Latex-fruit syndrome counseling provided in Spanish. Workplace accommodation letter written — employer must provide non-latex (nitrile) gloves. Connected to free community A/I clinic for follow-up. EpiPen through manufacturer assistance program (Mylan). Also addressing undertreated asthma — likely contributes to anaphylaxis severity.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — latex avoidance, asthma control, medication access check",
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
          "description": "Asthma — improving on ICS/LABA",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Employer providing nitrile gloves — no further occupational exposures",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "EpiPen access — patient assistance program active",
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
          "frequency": "PRN (using 2x/week — controlled)",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "Follow-up — latex avoidance, asthma control, medication access check",
          "hpi": "32F returns 6 weeks post-anaphylaxis. Employer now providing nitrile gloves — no further exposures. Asthma much better on controller — albuterol use down to 2x/week. EpiPens current (assistance program). Avoiding banana and avocado per counseling. Established at community health center with PCP. Children also screened for latex allergy (negative). Spanish-language action plan reviewed and updated.",
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
    "insurance": "Uninsured — Self-Pay",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Michael Santos-Reyes",
      "phone": "(620) 555-3362",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Latex glove exposure at work → progressive lip swelling, wheezing, lightheadedness. Used expired EpiPen with partial response.",
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
      "description": "Asthma (moderate persistent — undertreated, no controller)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Latex occupational exposure — house cleaner",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Uninsured — cannot afford EpiPen or controller meds",
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
      "temp": "37.0°C",
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
      "cc": "Latex glove exposure at work → progressive lip swelling, wheezing, lightheadedness. Used expired EpiPen with partial response.",
      "hpi": "32F house cleaner presenting with anaphylaxis after latex glove exposure at work. Reports progressive lip/face swelling, wheezing, and near-syncope developing over 20 min. Used expired EpiPen from purse with partial improvement. Known latex contact urticaria but never had systemic reaction before. Undertreated asthma — uses only albuterol PRN, no controller. Uninsured, works 2 jobs, cannot afford EpiPen replacement ($600+) or specialist visits. Spanish-speaking — functional English but prefers Spanish for medical discussions.",
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
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36-46",
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
      "House cleaner — chemical exposures"
    ],
    [
      "Insurance",
      "Uninsured — works 2 jobs, no employer coverage"
    ],
    [
      "Living",
      "Shares apartment with 3 roommates, no AC"
    ],
    [
      "Language",
      "Primary Spanish — functional English"
    ],
    [
      "Children",
      "2 children ages 5 and 8"
    ],
    [
      "Access",
      "No PCP — uses urgent care for all visits"
    ],
    [
      "Financial",
      "Cannot afford EpiPen ($600+) — has been using expired one"
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
]};
