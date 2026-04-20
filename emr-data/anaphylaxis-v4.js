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
      "pharmacy": "Walgreens \u2014 University Blvd",
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
        "Ate unlabeled cookie at school event \u2014 didn't want to ask about ingredients in front of friends"
      ],
      [
        "Mental health",
        "Anxiety about food allergies \u2014 avoids eating at social events"
      ],
      [
        "EpiPen",
        "Has EpiPen but left it in locker \u2014 embarrassed to carry it"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "16yo with known peanut allergy \u2014 ate cookie at school event, progressive throat tightness and hives, EpiPen was in locker",
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
          "description": "Food allergy anxiety \u2014 social avoidance",
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
          "temp": "36.8\u00b0C",
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
          "cc": "16yo with known peanut allergy \u2014 ate cookie at school event, progressive throat tightness and hives, EpiPen was in locker",
          "hpi": "16F brought by EMS from school after anaphylaxis at school event. Ate cookie without asking about ingredients \u2014 socially embarrassed to ask in front of peers. Known peanut allergy since age 3. Had EpiPen prescribed but left it in her locker (reports feeling embarrassed carrying it). School nurse administered stock epinephrine. Mother at bedside \u2014 reports Destiny has been increasingly avoidant of social eating situations and has lost weight. Tearful in ED, says \"I just wanted to be normal.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Observation after anaphylaxis \u2014 adolescent psych consult for food allergy anxiety and social avoidance",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut anaphylaxis \u2014 resolved",
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
          "description": "Weight loss \u2014 restricted eating at social events",
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
          "frequency": "PRN x2 \u2014 NEW plan: discrete carry case",
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
          "temp": "36.8\u00b0C",
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
          "cc": "Observation after anaphylaxis \u2014 adolescent psych consult for food allergy anxiety and social avoidance",
          "hpi": "16F stable post-anaphylaxis. Adolescent psych consult obtained: reports significant food allergy anxiety with social eating avoidance, weight loss (8 lbs in 3 months), feels \"different\" from peers. Not meeting criteria for eating disorder but at risk. Recommendations: CBT referral for food allergy anxiety, peer support group connection, work with school on 504 plan, discrete EpiPen carry solution (fits in purse/backpack without being visible).",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 optimize allergy management for adolescent with adherence barriers",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut allergy \u2014 confirmed, high sIgE",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Tree nut \u2014 needs testing (avoided empirically)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "EpiPen non-adherence \u2014 adolescent psychosocial barrier",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Consider OIT candidacy \u2014 could reduce anxiety and risk",
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
                  "test": "Tree nut panel \u2014 Cashew",
                  "value": "0.8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Tree nut panel \u2014 Walnut",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Tree nut panel \u2014 Almond",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Tree nut panel \u2014 Pecan",
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
          "cc": "A/I consult \u2014 optimize allergy management for adolescent with adherence barriers",
          "hpi": "A/I consult: 16F with confirmed peanut allergy (Ara h 2 strongly positive \u2014 high risk for severe reactions). Tree nut panel: cashew mildly positive, others negative \u2014 can challenge walnut/almond/pecan in office. OIT discussion: patient very interested \u2014 \"if I could eat even a little peanut I would feel so much safer.\" Family amenable. Plan: OIT evaluation visit, continue strict peanut avoidance, challenge walnut/almond/pecan, CBT referral for food allergy anxiety, school 504 plan update.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "OIT evaluation and tree nut challenge \u2014 follow-up for food allergy anxiety",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut allergy \u2014 OIT candidate (Ara h 2 positive)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Cashew allergy \u2014 confirmed by component testing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Walnut/Almond/Pecan \u2014 tolerated in office challenge",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Food allergy anxiety \u2014 started CBT, improving",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "EpiPen adherence \u2014 now carrying daily (discrete case)",
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
          "cc": "OIT evaluation and tree nut challenge \u2014 follow-up for food allergy anxiety",
          "hpi": "16F returns for OIT evaluation. Successfully challenged walnut, almond, and pecan in office \u2014 tolerated. Cashew avoidance continues. Started CBT for food allergy anxiety \u2014 reports eating at school cafeteria again, less avoidant at social events. Now carrying EpiPen daily in discrete case (looks like cosmetics bag). Weight stable. Mother reports improved mood. OIT enrollment discussed \u2014 starting 2-week observation protocol. School 504 plan updated with new tree nut tolerance information.",
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
    "pharmacy": "Walgreens \u2014 University Blvd",
    "emergencyContact": {
      "name": "Michael Johnson",
      "phone": "(505) 555-9116",
      "relationship": "Parent"
    },
    "chiefComplaint": "16yo with known peanut allergy \u2014 ate cookie at school event, progressive throat tightness and hives, EpiPen was in locker",
    "diagnosis": "Anaphylaxis"
  },
  "problems": [
    {
      "problem": "Peanut anaphylaxis \u2014 Grade 3",
      "icd": "T78.1XXA",
      "onset": "2016",
      "status": "Active",
      "notes": "Known peanut allergy since age 8; EpiPen prescribed but not carried; delayed administration at school event"
    },
    {
      "problem": "Delayed epinephrine administration \u2014 preventable severity",
      "icd": "T78.2XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Received epinephrine 18 min after symptom onset; biphasic reaction occurred 6h later"
    },
    {
      "problem": "Asthma, mild persistent",
      "icd": "J45.20",
      "onset": "2015",
      "status": "Active",
      "notes": "Asthma is the major risk factor for fatal food anaphylaxis \u2014 must be optimally controlled"
    }
  ],
  "medications": [
    {
      "name": "EpiPen 0.3mg IM x2 (new prescription \u2014 carry at ALL times)",
      "sig": "Inject at first sign of throat tightness or breathing difficulty; CARRY 2 PENS ALWAYS; do not wait to use",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 1,
      "status": "Active \u2014 updated prescription with action plan"
    },
    {
      "name": "Diphenhydramine 25mg q6h PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours for mild allergic symptoms ONLY; do NOT use instead of epinephrine",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 short course"
    },
    {
      "name": "Fluticasone propionate 110mcg MDI 1 puff BID",
      "sig": "2 puffs by mouth twice daily \u2014 rinse mouth after use",
      "prescriber": "Dr. Kim",
      "start": "2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg MDI 2 puffs q4h PRN",
      "sig": "2 puffs every 4 hours as needed for wheeze",
      "prescriber": "Dr. Kim",
      "start": "2015",
      "refills": 3,
      "status": "Active"
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
      "temp": "36.8\u00b0C",
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
      "cc": "16yo with known peanut allergy \u2014 ate cookie at school event, progressive throat tightness and hives, EpiPen was in locker",
      "hpi": "16F brought by EMS from school after anaphylaxis at school event. Ate cookie without asking about ingredients \u2014 socially embarrassed to ask in front of peers. Known peanut allergy since age 3. Had EpiPen prescribed but left it in her locker (reports feeling embarrassed carrying it). School nurse administered stock epinephrine. Mother at bedside \u2014 reports Destiny has been increasingly avoidant of social eating situations and has lost weight. Tearful in ED, says \"I just wanted to be normal.\"",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/22/2024",
      "panel": "Post-Anaphylaxis Allergy Workup",
      "results": [
        {
          "test": "Peanut IgE (Ara h 2)",
          "value": "18.4",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Peanut total IgE (Ara h mix)",
          "value": "32.1",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Serum Tryptase (1h post-reaction)",
          "value": "38.2",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "890",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 Eosinophils",
          "value": "1.2",
          "unit": "K/\u03bcL",
          "ref": "0.0-0.5",
          "flag": "H"
        },
        {
          "test": "Tree nut panel (cross-reactivity screen)",
          "value": "Walnut 4.8, Cashew 3.2, Pistachio 2.9 kUA/L",
          "unit": "kUA/L",
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
      "Ate unlabeled cookie at school event \u2014 didn't want to ask about ingredients in front of friends"
    ],
    [
      "Mental health",
      "Anxiety about food allergies \u2014 avoids eating at social events"
    ],
    [
      "EpiPen",
      "Has EpiPen but left it in locker \u2014 embarrassed to carry it"
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
    "patientPersona": "Destiny appears anxious and embarrassed, frequently apologizing and looking down. She's forthcoming about her symptoms but clearly distressed about the social circumstances that led to this episode. She shows moderate respiratory distress with intermittent throat clearing.",
    "interviewQuestions": [
      "Can you tell me exactly what happened at school today?",
      "What did you eat and when did you eat it?",
      "When did your symptoms start and how did they progress?",
      "Did you ask about the ingredients in the cookie?",
      "Where was your EpiPen when this happened?",
      "Have you used your EpiPen before?",
      "What symptoms are you experiencing right now?",
      "Any difficulty breathing or swallowing?",
      "Have you had reactions like this before?",
      "Do you always carry your EpiPen with you?",
      "What medications do you normally take?",
      "Any family history of allergies?",
      "Do you avoid eating at social events because of your allergies?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I don't understand what you're asking. I'm still feeling pretty scared about what happened.",
      "onset": "It started maybe 10-15 minutes after I ate the cookie. First my mouth got tingly, then my throat started feeling tight and I got these hives on my arms.",
      "character": "My throat feels like it's closing up and getting tighter. It's hard to swallow and my voice sounds different.",
      "location": "The tightness is right here in my throat and neck area. The hives started on my arms but now they're spreading to my chest.",
      "severity": "The throat tightness is like an 8 out of 10 - it's really scary. I can still breathe but it feels like it's getting harder.",
      "aggravating": "It seems to be getting worse on its own. Talking makes me feel more out of breath.",
      "relieving": "Nothing has helped yet. I usually use my EpiPen but it was in my locker and I couldn't get to it in time.",
      "associated": "I have these hives all over my arms and chest, I feel nauseous, and I'm getting dizzy. My heart is beating really fast too.",
      "denies": "No chest pain, no vomiting yet, no loss of consciousness. I can still breathe but it's getting harder.",
      "history": "I've had reactions before but never this bad without my EpiPen. Usually I catch it early and use my EpiPen right away.",
      "medications": "Epinephrine; Diphenhydramine; Methylprednisolone",
      "allergies": "Peanut, Tree nuts",
      "family": "My mom has eczema and food allergies too, and my little brother also has a peanut allergy. My mom is always on us about carrying our EpiPens.",
      "social": "I'm in 11th grade and on the cheerleading team. I don't smoke or drink. I honestly didn't ask about the cookie ingredients because I didn't want to seem weird in front of my friends. I know that was stupid."
    },
    "examManeuvers": [
      "Inspect oropharynx and throat",
      "Palpate neck for lymphadenopathy or swelling",
      "Auscultate heart sounds",
      "Auscultate lung sounds",
      "Inspect skin for urticaria",
      "Assess voice quality and stridor",
      "Check capillary refill",
      "Assess mental status and anxiety level"
    ],
    "examFindings": {
      "Inspect oropharynx and throat": "Mild pharyngeal erythema and edema, uvula appears slightly swollen",
      "Palpate neck for lymphadenopathy or swelling": "No lymphadenopathy, mild anterior neck tenderness",
      "Auscultate heart sounds": "Tachycardic regular rhythm, no murmurs, gallops, or rubs",
      "Auscultate lung sounds": "Clear bilaterally, no wheeze or stridor at rest",
      "Inspect skin for urticaria": "Raised erythematous wheals on bilateral arms, chest, and neck",
      "Assess voice quality and stridor": "Slightly hoarse voice, no audible stridor",
      "Check capillary refill": "Capillary refill 2-3 seconds, mildly delayed",
      "Assess mental status and anxiety level": "Alert and oriented, anxious but appropriate, no confusion"
    },
    "ddxTargets": [
      "Anaphylaxis \u2014 peanut IgE-mediated, severity increased by epinephrine delay and comorbid asthma (correct)",
      "Allergic reaction without anaphylaxis \u2014 no systemic involvement; only cutaneous",
      "Exercise-induced anaphylaxis \u2014 food-dependent exercise-induced anaphylaxis (FDEIA); requires exercise cofactor",
      "Panic attack \u2014 no objective allergic signs; normal tryptase",
      "Vocal cord dysfunction \u2014 inspiratory stridor; laryngoscopy confirms; no tryptase elevation",
      "Asthma exacerbation \u2014 isolated bronchospasm without systemic signs; no skin involvement"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'anxiety' given patient's age and social embarrassment, missing the severity of allergic reaction",
      "prematureClosure": "Might stop at 'food allergy' without recognizing progression to anaphylaxis requiring immediate treatment",
      "availabilityBias": "May recall teenage patients with anxiety/panic attacks rather than focusing on objective signs of anaphylaxis"
    },
    "coachPrompts": {
      "phase2": "Before you interview Destiny, consider what information you need to distinguish between a mild allergic reaction and anaphylaxis. What historical details and symptom progression would be most concerning? How will you assess the severity and urgency?",
      "phase5": "Now that you've gathered your history and exam findings, let's think about the clinical picture. You have a known allergen exposure, progressive symptoms involving multiple systems, and objective findings. How do the vital signs and physical findings help you determine the severity and next steps?",
      "finalDebrief": "This case highlights how anaphylaxis can present with varying severity and the importance of psychosocial factors in adolescent care. The patient's embarrassment led to both the exposure and delayed treatment. How did your differential evolve as you gathered more information, and what teaching points about EpiPen adherence and social situations would you address?",
      "final": "Diagnosis: grade 3 peanut anaphylaxis; preventable severity from epinephrine delay; comorbid asthma. Key teaching points: (1) Ara h 2 IgE >0.35 kUA/L has ~90% PPV for clinical peanut reactivity \u2014 it's the most specific peanut component for systemic reactions. High Ara h 2 = high anaphylaxis risk. (2) Biphasic anaphylaxis: second reaction 1-72h after initial \u2014 occurs in 5-20%. Prolonged observation (4-6h minimum) required. Risk factors: delayed epinephrine, severe initial reaction. (3) Epinephrine delay is the #1 preventable cause of fatal anaphylaxis \u2014 antihistamines treat urticaria, NOT anaphylaxis. Schools must have epinephrine available; state law varies. (4) Asthma + food allergy = highest-risk phenotype for fatal anaphylaxis. Asthma must be well-controlled and asthma action plan coordinated with anaphylaxis plan. (5) Peanut OIT (oral immunotherapy) via Palforzia is FDA-approved for age 4-17 \u2014 reduces severity of accidental exposures; discuss with family. Tree nut cross-sensitivity requires panel testing."
    }
  },
  "meta": {
    "diagnosis": "Anaphylaxis \u2014 Peanut Allergy, Adolescent; Epinephrine Auto-Injector Delay Contributed to Severity"
  }
};
