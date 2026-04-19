/* emr-data/anaphylaxis-v4.js — Multi-Setting Allergy Case Variation: Anaphylaxis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Destiny Johnson",
  "patientHPI": "I was at a school event and ate a cookie without asking what was in it because I felt embarrassed to ask in front of everyone, but now my throat is closing up and I can't breathe. I've been told to avoid peanuts since I was little and I have an emergency pen, but I left it in my locker because I hate carrying it around.",
      "dob": "08/18/2010",
      "age": "16",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-385106",
      "language": "English",
      "race": "Black/African American",
      "phone": "(619) 555-1611",
      "email": "destiny.johnson@email.com",
      "address": "3153 Peachtree Rd, Detroit, MI 48201",
      "insurance": "Medicaid",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Michael Johnson",
        "phone": "(404) 555-7846",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Peanut",
        "reaction": "Anaphylaxis",
        "severity": "Severe",
        "type": "Food"
      },
      {
        "allergen": "Tree nuts",
        "reaction": "Avoid (not tested)",
        "severity": "Unknown",
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
      "Mother: eczema, food allergies",
      "Brother (12): peanut allergy"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never"
      ],
      [
        "Alcohol",
        "Denies"
      ],
      [
        "School",
        "11th grade, cheerleader"
      ],
      [
        "Social",
        "Ate unlabeled cookie at school event — didn't want to ask about ingredients in front of friends"
      ],
      [
        "Mental health",
        "Anxiety about food allergies — avoids eating at social events"
      ],
      [
        "EpiPen",
        "Has EpiPen but left it in locker — embarrassed to carry it"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "16yo with known peanut allergy — ate cookie at school event, progressive throat tightness and hives, EpiPen was in locker",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut anaphylaxis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Food allergy anxiety — social avoidance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "EpiPen non-adherence (embarrassment)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Eczema (mild, controlled)",
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
          "frequency": "Given by school nurse from stock supply",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Diphenhydramine",
          "dose": "25mg",
          "route": "PO",
          "frequency": "Given at school",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Once in ED",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "98/62",
          "hr": "122",
          "rr": "24",
          "temp": "36.8°C",
          "spo2": "94%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-378378",
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
                  "value": "5",
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
                  "value": "28",
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
          "cc": "16yo with known peanut allergy — ate cookie at school event, progressive throat tightness and hives, EpiPen was in locker",
          "hpi": "16F brought by EMS from school after anaphylaxis at school event. Ate cookie without asking about ingredients — socially embarrassed to ask in front of peers. Known peanut allergy since age 3. Had EpiPen prescribed but left it in her locker (reports feeling embarrassed carrying it). School nurse administered stock epinephrine. Mother at bedside — reports Destiny has been increasingly avoidant of social eating situations and has lost weight. Tearful in ED, says \"I just wanted to be normal.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Observation after anaphylaxis — adolescent psych consult for food allergy anxiety and social avoidance",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut anaphylaxis — resolved",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Food allergy-related anxiety and social avoidance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Non-adherence to EpiPen carrying",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Weight loss — restricted eating at social events",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Eczema (mild)",
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
          "frequency": "Daily x3 days",
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
        },
        {
          "id": "med-3",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2 — NEW plan: discrete carry case",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "108/66",
          "hr": "82",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-234801",
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
          "cc": "Observation after anaphylaxis — adolescent psych consult for food allergy anxiety and social avoidance",
          "hpi": "16F stable post-anaphylaxis. Adolescent psych consult obtained: reports significant food allergy anxiety with social eating avoidance, weight loss (8 lbs in 3 months), feels \"different\" from peers. Not meeting criteria for eating disorder but at risk. Recommendations: CBT referral for food allergy anxiety, peer support group connection, work with school on 504 plan, discrete EpiPen carry solution (fits in purse/backpack without being visible).",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — optimize allergy management for adolescent with adherence barriers",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut allergy — confirmed, high sIgE",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Tree nut — needs testing (avoided empirically)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "EpiPen non-adherence — adolescent psychosocial barrier",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Consider OIT candidacy — could reduce anxiety and risk",
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
          "frequency": "PRN x2 (discrete carry case provided)",
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
          "bp": "110/66",
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
          "accession": "LAB-845635",
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
              "name": "ALLERGY TESTING",
              "results": [
                {
                  "test": "Peanut sIgE",
                  "value": "42",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Ara h 2 (component)",
                  "value": "28",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Tree nut panel — Cashew",
                  "value": "0.8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Tree nut panel — Walnut",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Tree nut panel — Almond",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Tree nut panel — Pecan",
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
          "cc": "A/I consult — optimize allergy management for adolescent with adherence barriers",
          "hpi": "A/I consult: 16F with confirmed peanut allergy (Ara h 2 strongly positive — high risk for severe reactions). Tree nut panel: cashew mildly positive, others negative — can challenge walnut/almond/pecan in office. OIT discussion: patient very interested — \"if I could eat even a little peanut I would feel so much safer.\" Family amenable. Plan: OIT evaluation visit, continue strict peanut avoidance, challenge walnut/almond/pecan, CBT referral for food allergy anxiety, school 504 plan update.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "OIT evaluation and tree nut challenge — follow-up for food allergy anxiety",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut allergy — OIT candidate (Ara h 2 positive)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Cashew allergy — confirmed by component testing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Walnut/Almond/Pecan — tolerated in office challenge",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Food allergy anxiety — started CBT, improving",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "EpiPen adherence — now carrying daily (discrete case)",
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
          "frequency": "PRN x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily (pre-OIT if started)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "108/64",
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
          "accession": "LAB-792279",
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
          "cc": "OIT evaluation and tree nut challenge — follow-up for food allergy anxiety",
          "hpi": "16F returns for OIT evaluation. Successfully challenged walnut, almond, and pecan in office — tolerated. Cashew avoidance continues. Started CBT for food allergy anxiety — reports eating at school cafeteria again, less avoidant at social events. Now carrying EpiPen daily in discrete case (looks like cosmetics bag). Weight stable. Mother reports improved mood. OIT enrollment discussed — starting 2-week observation protocol. School 504 plan updated with new tree nut tolerance information.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Destiny Johnson",
    "dob": "08/18/2010",
    "age": "16",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-385106",
    "language": "English",
    "race": "Black/African American",
    "phone": "(404) 555-1595",
    "email": "destiny.johnson@email.com",
    "address": "4989 Chestnut Rd, New Orleans, LA 70116",
    "insurance": "Medicaid",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Michael Johnson",
      "phone": "(505) 555-9116",
      "relationship": "Parent"
    },
    "chiefComplaint": "16yo with known peanut allergy — ate cookie at school event, progressive throat tightness and hives, EpiPen was in locker",
    "diagnosis": "Anaphylaxis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Peanut anaphylaxis",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Food allergy anxiety — social avoidance",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "EpiPen non-adherence (embarrassment)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Eczema (mild, controlled)",
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
      "frequency": "Given by school nurse from stock supply",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Diphenhydramine",
      "dose": "25mg",
      "route": "PO",
      "frequency": "Given at school",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Methylprednisolone",
      "dose": "125mg",
      "route": "IV",
      "frequency": "Once in ED",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Peanut",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "type": "Food"
    },
    {
      "allergen": "Tree nuts",
      "reaction": "Avoid (not tested)",
      "severity": "Unknown",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "98/62",
      "hr": "122",
      "rr": "24",
      "temp": "36.8°C",
      "spo2": "94%",
      "pain": "6/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "16yo with known peanut allergy — ate cookie at school event, progressive throat tightness and hives, EpiPen was in locker",
      "hpi": "16F brought by EMS from school after anaphylaxis at school event. Ate cookie without asking about ingredients — socially embarrassed to ask in front of peers. Known peanut allergy since age 3. Had EpiPen prescribed but left it in her locker (reports feeling embarrassed carrying it). School nurse administered stock epinephrine. Mother at bedside — reports Destiny has been increasingly avoidant of social eating situations and has lost weight. Tearful in ED, says \"I just wanted to be normal.\"",
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
      "accession": "LAB-378378",
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
              "value": "5",
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
              "value": "28",
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
    "Mother: eczema, food allergies",
    "Brother (12): peanut allergy"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Denies"
    ],
    [
      "School",
      "11th grade, cheerleader"
    ],
    [
      "Social",
      "Ate unlabeled cookie at school event — didn't want to ask about ingredients in front of friends"
    ],
    [
      "Mental health",
      "Anxiety about food allergies — avoids eating at social events"
    ],
    [
      "EpiPen",
      "Has EpiPen but left it in locker — embarrassed to carry it"
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
],
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular",
        "Pulmonary",
        "Abdominal",
        "Extremities",
        "Skin",
        "Targeted exam"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with this condition.",
        "Vital signs": "Finding consistent with this condition.",
        "Cardiovascular": "Finding consistent with this condition.",
        "Pulmonary": "Finding consistent with this condition.",
        "Abdominal": "Finding consistent with this condition.",
        "Extremities": "Finding consistent with this condition.",
        "Skin": "Finding consistent with this condition.",
        "Targeted exam": "Finding consistent with this condition."
    },
    "ddxTargets": [
        "this condition (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for this condition.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Destiny Johnson: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Destiny appears anxious and embarrassed, speaking quietly and avoiding eye contact when discussing her decision not to ask about cookie ingredients. She becomes more animated and distressed when describing her throat symptoms, frequently touching her neck, and shows visible hives on her arms and face.",
    "interviewQuestions": [
        "Can you tell me exactly what happened at the school event today?",
        "What did you eat and when did you eat it?",
        "Did you ask about the ingredients in the cookie?",
        "When did your symptoms start after eating?",
        "What symptoms did you notice first?",
        "How did your throat feel and how has it changed?",
        "Where is your EpiPen and why didn't you use it?",
        "Have you had reactions like this before?",
        "What happened during your previous allergic reactions?",
        "Are you having any trouble breathing or swallowing?",
        "Do you have any chest pain or nausea?",
        "What medications do you normally carry?",
        "Have you taken anything for these symptoms today?"
    ],
    "patientResponses": {
        "default": "I'm sorry, I'm still feeling pretty scared and my throat is tight. Can you repeat that?",
        "onset": "I ate the cookie about 20 minutes ago at the cheerleading fundraiser. My throat started feeling scratchy maybe 10 minutes later, then got tight really fast.",
        "character": "My throat feels like it's closing up and swollen inside. It's hard to swallow and feels scratchy and tight.",
        "location": "The tightness is mainly in my throat and neck area. I can feel it when I try to swallow.",
        "severity": "The throat tightness is like an 8 out of 10 - it's really scary. The itching is maybe a 6.",
        "aggravating": "It seems to be getting worse as time goes on. Trying to swallow makes me more aware of how tight it feels.",
        "relieving": "Nothing has helped. I was too scared to use my EpiPen because it was in my locker and I wasn't sure if I really needed it.",
        "associated": "I have these itchy red bumps all over my arms and face, and I feel kind of dizzy and my heart is racing.",
        "denies": "I'm not having chest pain or throwing up, but I do feel a little nauseous and shaky.",
        "history": "I've had bad reactions before but not this bad. Usually I catch it early, but this time I didn't have my EpiPen with me.",
        "medications": "Epinephrine; Diphenhydramine; Methylprednisolone",
        "allergies": "Peanut, Tree nuts",
        "family": "My mom has food allergies and eczema too, and my little brother also has a peanut allergy. My mom is always on us about carrying our EpiPens.",
        "social": "I'm a junior in high school and on the cheerleading team. I don't smoke or drink. I was at our fundraiser and didn't want to be that weird girl asking about ingredients in front of everyone."
    },
    "examManeuvers": [
        "Inspect face and neck for angioedema",
        "Examine skin for urticaria distribution",
        "Auscultate lungs for wheezing or stridor",
        "Inspect oropharynx and tongue",
        "Palpate neck for lymphadenopathy or swelling",
        "Assess voice quality and speech",
        "Check capillary refill and peripheral perfusion",
        "Auscultate heart for rate and rhythm",
        "Assess level of consciousness and anxiety",
        "Examine abdomen for tenderness or distension"
    ],
    "examFindings": {
        "Inspect face and neck for angioedema": "Mild periorbital edema and slight lip swelling noted, no obvious tongue or uvular swelling",
        "Examine skin for urticaria distribution": "Diffuse urticarial rash on bilateral arms, chest, and face with raised erythematous wheals",
        "Auscultate lungs for wheezing or stridor": "Mild expiratory wheeze bilaterally, no stridor, decreased air movement in bases",
        "Inspect oropharynx and tongue": "Oropharynx erythematous, tongue appears normal size, no obvious swelling of uvula",
        "Palpate neck for lymphadenopathy or swelling": "No lymphadenopathy, soft tissue feels slightly edematous",
        "Assess voice quality and speech": "Voice slightly hoarse and muffled, patient able to speak in full sentences",
        "Check capillary refill and peripheral perfusion": "Capillary refill 3 seconds, hands cool and slightly mottled",
        "Auscultate heart for rate and rhythm": "Tachycardia at 122 bpm, regular rhythm, no murmurs",
        "Assess level of consciousness and anxiety": "Alert and oriented, anxious and restless, following commands appropriately",
        "Examine abdomen for tenderness or distension": "Soft, non-distended, mild diffuse tenderness, active bowel sounds"
    },
    "ddxTargets": [
        "Anaphylaxis (correct diagnosis)",
        "Severe allergic reaction without anaphylaxis",
        "Angioedema",
        "Laryngeal edema",
        "Acute asthma exacerbation",
        "Anxiety/panic attack",
        "Food poisoning with urticaria"
    ],
    "biasFlags": {
        "anchoring": "May anchor on 'known peanut allergy' and assume mild reaction, missing the systemic signs of anaphylaxis including hypotension and tachycardia",
        "prematureClosure": "Might stop at 'allergic reaction' without recognizing this meets criteria for anaphylaxis requiring immediate epinephrine",
        "availabilityBias": "May recall recent cases of anxiety in teenagers and underestimate the severity of allergic symptoms"
    },
    "coachPrompts": {
        "phase2": "Before you interview Destiny, consider what specific criteria define anaphylaxis versus a severe allergic reaction. What key historical details and timeline will help you differentiate? Think about what systemic symptoms you need to explore.",
        "phase5": "Now that you've gathered your history and physical findings, walk me through what makes this anaphylaxis rather than just a severe allergic reaction. What do her vital signs tell you about her cardiovascular status? How does this change your urgency?",
        "finalDebrief": "This case highlights how anaphylaxis can present in adolescents with psychosocial factors affecting compliance. Notice how her initial reluctance to ask about ingredients and embarrassment about her EpiPen created a perfect storm. How did your differential evolve from possible anxiety to confirmed anaphylaxis based on the constellation of findings?"
    }
}
};
