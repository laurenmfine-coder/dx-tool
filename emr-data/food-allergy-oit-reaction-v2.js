/* emr-data/food-allergy-oit-reaction-v2.js — Variation: Food Allergy — OIT Management */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Sophia Martinez-Lee",
  "patientHPI": "I was at swim practice and about an hour and a half after taking my daily peanut treatment dose, I started feeling my throat get tight during warm-ups. Then I broke out in hives all over and got bad stomach cramps, so my coach called an ambulance and they gave me a shot.",
      "dob": "07/11/2012",
      "age": "14",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-388021",
      "language": "English",
      "race": "Multiracial",
      "phone": "(803) 555-6432",
      "email": "sophia.martinezlee@email.com",
      "address": "3737 Magnolia Blvd, Minneapolis, MN 55407",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Michael Martinez-Lee",
        "phone": "(804) 555-8052",
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
        "reaction": "Hives",
        "severity": "Moderate",
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
      "Mother: asthma",
      "Father: no allergies"
    ],
    "socialHistory": [
      [
        "OIT status",
        "6 months into peanut OIT — up-dosing phase"
      ],
      [
        "Trigger",
        "Had OIT reaction after exercising within 2 hours of dose (exercise amplifies absorption)"
      ],
      [
        "Exercise",
        "Competitive swimmer — exercise-induced anaphylaxis risk during OIT"
      ],
      [
        "Social",
        "Peer at school recently hospitalized for anaphylaxis after OIT reaction — parents worried about continuing"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "14yo on peanut OIT who exercised within 2h of dose — developed throat tightness, hives, abdominal pain",
        "diagnosis": "Food Allergy — OIT Management"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "OIT reaction — exercise-induced amplification",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Peanut OIT — 6 months into up-dosing (200mg peanut protein)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Exercised within restricted window (swam laps 90 min after dose)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "OIT protocol violation — must avoid exercise 2h before and after dose",
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
          "frequency": "Given x1",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Given",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Albuterol",
          "dose": "2 puffs",
          "route": "INH",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "98/62",
          "hr": "112",
          "rr": "22",
          "temp": "36.8°C",
          "spo2": "95%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-615302",
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
          "cc": "14yo on peanut OIT who exercised within 2h of dose — developed throat tightness, hives, abdominal pain",
          "hpi": "14F competitive swimmer on peanut OIT (200mg dose). Took afternoon OIT dose, then went to swim practice 90 min later (should wait minimum 2h — no exercise before or after). During warm-up laps: throat tightness, diffuse hives, abdominal cramping. Coach called 911. Epi given at pool. KEY: Exercise amplifies OIT absorption and increases reaction risk. This was a protocol violation, not OIT failure. Parents very anxious — friend's child was recently hospitalized after OIT reaction and they're questioning whether to continue.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief observation after OIT reaction",
        "diagnosis": "Food Allergy — OIT Management"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "OIT reaction — resolved",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
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
          "bp": "108/68",
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
          "accession": "LAB-423464",
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
          "cc": "Brief observation after OIT reaction",
          "hpi": "Observation only — discharged after 4h monitoring.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — OIT reaction management, modify protocol for competitive athlete, address parental anxiety",
        "diagnosis": "Food Allergy — OIT Management"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "OIT exercise-induced reaction — protocol violation (exercise within 2h)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Competitive swimmer — needs modified OIT timing protocol around training",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Parents considering discontinuing OIT after peer's hospitalization",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "At 200mg — past the highest-risk up-dosing phase",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Risk-benefit discussion needed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Peanut OIT",
          "dose": "200mg (held — will restart at same dose after 1 week)",
          "route": "PO",
          "frequency": "Daily with food, morning (away from swim practice)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2 at all times",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "30 min before OIT dose",
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
          "accession": "LAB-288508",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult — OIT reaction management, modify protocol for competitive athlete, address parental anxiety",
          "hpi": "A/I consult: 14F competitive swimmer on peanut OIT. This reaction was exercise-induced amplification, not OIT failure. Modified protocol: (1) OIT dose in MORNING with breakfast (swim practice is afternoon — ensures >6h gap), (2) Cetirizine 30 min before each dose, (3) No exercise 2h before or 2h after OIT dose, (4) Weekend doses on non-practice days when possible. Parent counseling: at 200mg she is past the highest-risk phase of up-dosing, the goal (300mg = ~1 peanut) provides meaningful protection against accidental exposure, and discontinuing now would lose 6 months of progress. Risk with continuing is manageable with protocol adherence. Parents agreed to continue with morning dosing schedule.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "OIT follow-up — reached maintenance dose, no further reactions with morning dosing",
        "diagnosis": "Food Allergy — OIT Management"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut OIT — reached maintenance dose (300mg = ~1 peanut)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "No reactions since switching to morning dosing (6h+ before swim practice)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Protective threshold achieved — accidental exposures less likely to cause anaphylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Still carries EpiPen — OIT protects against accidental exposure, not unlimited intake",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Swimming competitively without issues",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Peanut OIT",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily maintenance (morning with breakfast)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2",
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
          "accession": "LAB-614783",
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
          "cc": "OIT follow-up — reached maintenance dose, no further reactions with morning dosing",
          "hpi": "14F reached OIT maintenance dose of 300mg peanut protein (~1 peanut equivalent). No reactions since switching to morning dosing. Swim times actually improved — less anxiety during practice. Important counseling reinforced: OIT provides PROTECTION against accidental exposure, not a cure. Still must avoid peanut/tree nut intentionally. Still must carry EpiPen. But the safety margin is dramatically improved — unlikely to react to trace cross-contamination. Parents relieved and grateful they continued. Annual follow-up for sIgE monitoring.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Sophia Martinez-Lee",
    "dob": "07/11/2012",
    "age": "14",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-388021",
    "language": "English",
    "race": "Multiracial",
    "phone": "(314) 555-1172",
    "email": "sophia.martinezlee@email.com",
    "address": "6508 N Western Ave, Milwaukee, WI 53207",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Martinez-Lee",
      "phone": "(314) 555-5239",
      "relationship": "Parent"
    },
    "chiefComplaint": "14yo on peanut OIT who exercised within 2h of dose — developed throat tightness, hives, abdominal pain",
    "diagnosis": "Food Allergy — OIT Management"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "OIT reaction — exercise-induced amplification",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Peanut OIT — 6 months into up-dosing (200mg peanut protein)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Exercised within restricted window (swam laps 90 min after dose)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "OIT protocol violation — must avoid exercise 2h before and after dose",
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
      "frequency": "Given x1",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Cetirizine",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Given",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Albuterol",
      "dose": "2 puffs",
      "route": "INH",
      "frequency": "PRN",
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
      "reaction": "Hives",
      "severity": "Moderate",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "98/62",
      "hr": "112",
      "rr": "22",
      "temp": "36.8°C",
      "spo2": "95%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "14yo on peanut OIT who exercised within 2h of dose — developed throat tightness, hives, abdominal pain",
      "hpi": "14F competitive swimmer on peanut OIT (200mg dose). Took afternoon OIT dose, then went to swim practice 90 min later (should wait minimum 2h — no exercise before or after). During warm-up laps: throat tightness, diffuse hives, abdominal cramping. Coach called 911. Epi given at pool. KEY: Exercise amplifies OIT absorption and increases reaction risk. This was a protocol violation, not OIT failure. Parents very anxious — friend's child was recently hospitalized after OIT reaction and they're questioning whether to continue.",
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
      "accession": "LAB-615302",
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
    "Father: no allergies"
  ],
  "socialHistory": [
    [
      "OIT status",
      "6 months into peanut OIT — up-dosing phase"
    ],
    [
      "Trigger",
      "Had OIT reaction after exercising within 2 hours of dose (exercise amplifies absorption)"
    ],
    [
      "Exercise",
      "Competitive swimmer — exercise-induced anaphylaxis risk during OIT"
    ],
    [
      "Social",
      "Peer at school recently hospitalized for anaphylaxis after OIT reaction — parents worried about continuing"
    ]
  ]
,"references":[
  {
    "id": "NIAID-FA-2010",
    "title": "Guidelines for diagnosis and management of food allergy in the US",
    "authors": "Boyce JA, Assa'ad A, Burks AW, et al.",
    "journal": "J Allergy Clin Immunol",
    "year": 2010,
    "doi": "10.1016/j.jaci.2010.10.008",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4241964/",
    "openAccess": true,
    "validates": [
      "IgE-mediated food allergy criteria",
      "Component testing (Ara h 2)",
      "OFC as gold standard"
    ]
  },
  {
    "id": "PALISADE-2018",
    "title": "AR101 oral immunotherapy for peanut allergy",
    "authors": "PALISADE Group.",
    "journal": "N Engl J Med",
    "year": 2018,
    "doi": "10.1056/NEJMoa1812856",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7643555/",
    "openAccess": true,
    "validates": [
      "OIT efficacy",
      "Exercise restriction 2h window",
      "OIT = protection, not cure"
    ]
  }
],
  "guided": {
    "supported": true,
    "patientPersona": "Sophia Martinez-Lee is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
        "When did your symptoms start and how?",
        "Describe the main symptom \u2014 location, character, severity.",
        "What makes it worse? What makes it better?",
        "Any other symptoms you've noticed?",
        "Any prior similar episodes?",
        "Tell me about your medical history.",
        "What medications are you currently taking?",
        "Any medication allergies?",
        "Relevant family history?",
        "Tell me about your lifestyle."
    ],
    "patientResponses": {
        "default": "He pauses. 'Can you clarify what you mean?'",
        "onset": "'Gradually \u2014 over the past several days.'",
        "character": "'The symptom has been significant and affecting my ability to function.'",
        "location": "'The main problem is in the expected area for my condition.'",
        "severity": "'Six or seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
        "associated": "'Some associated symptoms consistent with this condition.'",
        "denies": "'No fever, chills, or unexplained weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Epinephrine; Cetirizine; Albuterol.'",
        "allergies": "'My allergies: Peanut, Tree nuts.'",
        "family": "Mother: asthma  Father: no allergies",
        "social": "OIT status: 6 months into peanut OIT \u2014 up-dosing phase  Trigger: Had OIT reaction after exercising within 2 hours of dose (exercise amplifies absorption)  Exercise: Competitive swimmer \u2014 exercise-induced anaphylaxis risk during OIT  Social: Peer at school recently hospitalized for anaphylaxis after OIT reaction \u2014 parents worried about continuing"
    },
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
        "phase2": "Before interviewing Sophia Martinez-Lee: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
