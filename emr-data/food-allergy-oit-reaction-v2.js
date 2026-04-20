
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "6 months into peanut OIT \u2014 up-dosing phase"
      ],
      [
        "Trigger",
        "Had OIT reaction after exercising within 2 hours of dose (exercise amplifies absorption)"
      ],
      [
        "Exercise",
        "Competitive swimmer \u2014 exercise-induced anaphylaxis risk during OIT"
      ],
      [
        "Social",
        "Peer at school recently hospitalized for anaphylaxis after OIT reaction \u2014 parents worried about continuing"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "14yo on peanut OIT who exercised within 2h of dose \u2014 developed throat tightness, hives, abdominal pain",
        "diagnosis": "Food Allergy \u2014 OIT Management"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "OIT reaction \u2014 exercise-induced amplification",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Peanut OIT \u2014 6 months into up-dosing (200mg peanut protein)",
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
          "description": "OIT protocol violation \u2014 must avoid exercise 2h before and after dose",
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
          "temp": "36.8\u00b0C",
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
          "cc": "14yo on peanut OIT who exercised within 2h of dose \u2014 developed throat tightness, hives, abdominal pain",
          "hpi": "14F competitive swimmer on peanut OIT (200mg dose). Took afternoon OIT dose, then went to swim practice 90 min later (should wait minimum 2h \u2014 no exercise before or after). During warm-up laps: throat tightness, diffuse hives, abdominal cramping. Coach called 911. Epi given at pool. KEY: Exercise amplifies OIT absorption and increases reaction risk. This was a protocol violation, not OIT failure. Parents very anxious \u2014 friend's child was recently hospitalized after OIT reaction and they're questioning whether to continue.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief observation after OIT reaction",
        "diagnosis": "Food Allergy \u2014 OIT Management"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "OIT reaction \u2014 resolved",
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
          "cc": "Brief observation after OIT reaction",
          "hpi": "Observation only \u2014 discharged after 4h monitoring.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 OIT reaction management, modify protocol for competitive athlete, address parental anxiety",
        "diagnosis": "Food Allergy \u2014 OIT Management"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "OIT exercise-induced reaction \u2014 protocol violation (exercise within 2h)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Competitive swimmer \u2014 needs modified OIT timing protocol around training",
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
          "description": "At 200mg \u2014 past the highest-risk up-dosing phase",
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
          "dose": "200mg (held \u2014 will restart at same dose after 1 week)",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult \u2014 OIT reaction management, modify protocol for competitive athlete, address parental anxiety",
          "hpi": "A/I consult: 14F competitive swimmer on peanut OIT. This reaction was exercise-induced amplification, not OIT failure. Modified protocol: (1) OIT dose in MORNING with breakfast (swim practice is afternoon \u2014 ensures >6h gap), (2) Cetirizine 30 min before each dose, (3) No exercise 2h before or 2h after OIT dose, (4) Weekend doses on non-practice days when possible. Parent counseling: at 200mg she is past the highest-risk phase of up-dosing, the goal (300mg = ~1 peanut) provides meaningful protection against accidental exposure, and discontinuing now would lose 6 months of progress. Risk with continuing is manageable with protocol adherence. Parents agreed to continue with morning dosing schedule.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "OIT follow-up \u2014 reached maintenance dose, no further reactions with morning dosing",
        "diagnosis": "Food Allergy \u2014 OIT Management"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut OIT \u2014 reached maintenance dose (300mg = ~1 peanut)",
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
          "description": "Protective threshold achieved \u2014 accidental exposures less likely to cause anaphylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Still carries EpiPen \u2014 OIT protects against accidental exposure, not unlimited intake",
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
          "cc": "OIT follow-up \u2014 reached maintenance dose, no further reactions with morning dosing",
          "hpi": "14F reached OIT maintenance dose of 300mg peanut protein (~1 peanut equivalent). No reactions since switching to morning dosing. Swim times actually improved \u2014 less anxiety during practice. Important counseling reinforced: OIT provides PROTECTION against accidental exposure, not a cure. Still must avoid peanut/tree nut intentionally. Still must carry EpiPen. But the safety margin is dramatically improved \u2014 unlikely to react to trace cross-contamination. Parents relieved and grateful they continued. Annual follow-up for sIgE monitoring.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Michael Martinez-Lee",
      "phone": "(314) 555-5239",
      "relationship": "Parent"
    },
    "chiefComplaint": "14yo on peanut OIT who exercised within 2h of dose \u2014 developed throat tightness, hives, abdominal pain",
    "diagnosis": "Food Allergy \u2014 OIT Management"
  },
  "problems": [
    {
      "problem": "Peanut oral immunotherapy (OIT) reaction \u2014 updosing event",
      "icd": "T78.1XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Emma Rodriguez, 14F \u2014 on Palforzia OIT. Developed urticaria + abdominal pain + vomiting 30 min after updose to 80mg."
    },
    {
      "problem": "OIT protocol modification \u2014 dose reduction after reaction",
      "icd": "Z79.899",
      "onset": "2024",
      "status": "Active",
      "notes": "Updosing held after systemic reaction. Return to last tolerated dose after reassessment. Risk factor review needed."
    },
    {
      "problem": "Uncontrolled exercise before OIT dose \u2014 cofactor identified",
      "icd": "T78.1XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Patient had PE class before coming to office. Exercise is the most common OIT cofactor for dose reactions."
    }
  ],
  "medications": [
    {
      "name": "Epinephrine 0.3mg IM \u2014 administered for systemic reaction",
      "sig": "Systemic reaction (urticaria + GI + vomiting) = anaphylaxis criteria met. Epinephrine given in office.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Palforzia OIT \u2014 dose reduced to prior tolerated dose (40mg)",
      "sig": "After systemic reaction: hold updosing, return to last well-tolerated dose after 1-2 weeks on reduced dose.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 2,
      "status": "Active \u2014 dose reduced"
    },
    {
      "name": "EpiPen 0.3mg x2 \u2014 prescribe/reinforce for home use",
      "sig": "Two EpiPens at all times during OIT \u2014 home reactions can occur during maintenance dosing.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 1,
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
      "temp": "36.8\u00b0C",
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
      "cc": "14yo on peanut OIT who exercised within 2h of dose \u2014 developed throat tightness, hives, abdominal pain",
      "hpi": "14F competitive swimmer on peanut OIT (200mg dose). Took afternoon OIT dose, then went to swim practice 90 min later (should wait minimum 2h \u2014 no exercise before or after). During warm-up laps: throat tightness, diffuse hives, abdominal cramping. Coach called 911. Epi given at pool. KEY: Exercise amplifies OIT absorption and increases reaction risk. This was a protocol violation, not OIT failure. Parents very anxious \u2014 friend's child was recently hospitalized after OIT reaction and they're questioning whether to continue.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "OIT Reaction Assessment",
      "results": [
        {
          "test": "Peanut-specific IgE",
          "value": "12.4",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Ara h 2 IgE",
          "value": "8.6",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Tryptase (drawn 1h post-reaction)",
          "value": "18.2",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "Tryptase baseline (24h post)",
          "value": "4.0",
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
    "Mother: asthma",
    "Father: no allergies"
  ],
  "socialHistory": [
    [
      "OIT status",
      "6 months into peanut OIT \u2014 up-dosing phase"
    ],
    [
      "Trigger",
      "Had OIT reaction after exercising within 2 hours of dose (exercise amplifies absorption)"
    ],
    [
      "Exercise",
      "Competitive swimmer \u2014 exercise-induced anaphylaxis risk during OIT"
    ],
    [
      "Social",
      "Peer at school recently hospitalized for anaphylaxis after OIT reaction \u2014 parents worried about continuing"
    ]
  ],
  "references": [
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
    "patientPersona": "Sophia appears anxious and slightly embarrassed about violating her OIT protocol by exercising too soon after her dose. She's cooperative but initially minimizes the severity of her symptoms, worried her parents will want to discontinue the treatment she's worked hard on for 6 months.",
    "interviewQuestions": [
      "Can you tell me exactly what happened today, step by step?",
      "What time did you take your peanut dose and when did you start swimming?",
      "Describe the throat tightness - when did it start and how severe is it?",
      "Are you having any trouble breathing or swallowing?",
      "When did you first notice the hives and where are they located?",
      "Tell me about the abdominal pain - where is it and how bad is it?",
      "Have you used your epinephrine auto-injector today?",
      "How long have you been on peanut OIT and what's your current dose?",
      "Do you remember being told about exercise restrictions with your OIT?",
      "Have you had any reactions like this before during your treatment?",
      "Are you experiencing any nausea, vomiting, or dizziness?",
      "How are you feeling right now compared to when this started?",
      "Besides the peanut dose, did you eat anything else unusual today?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean. Can you ask that differently?",
      "onset": "It started about 30 minutes ago while I was doing warm-up laps in the pool. First my throat felt tight, then I noticed the hives on my arms.",
      "character": "My throat feels like it's closing up, kind of scratchy and tight. It's scary because it's hard to swallow.",
      "location": "The throat tightness is right here in the front of my neck. The stomach pain is crampy all over my belly.",
      "severity": "The throat tightness is maybe a 6 out of 10, and the belly pain is about a 4. It's definitely worse than any reaction I've had before.",
      "aggravating": "The symptoms seemed to get worse when I kept trying to swim. Moving around made the stomach cramps worse.",
      "relieving": "I took my antihistamine and got out of the pool. The hives aren't spreading as much now, but my throat still feels tight.",
      "associated": "I have these red bumpy hives on my arms and some on my chest. My stomach is cramping and I feel kind of nauseous.",
      "denies": "I'm not having trouble breathing exactly, and I'm not dizzy or feeling faint. No vomiting.",
      "history": "I've had some mild stomach upset with dose increases before, but never throat tightness or hives like this.",
      "medications": "Epinephrine; Cetirizine; Albuterol",
      "allergies": "Peanut, Tree nuts",
      "family": "My mom has asthma but no food allergies. My dad doesn't have any allergies.",
      "social": "I'm a competitive swimmer and train almost every day. I don't smoke or drink. I've been doing peanut OIT for 6 months and I'm up to 200mg doses."
    },
    "examManeuvers": [
      "Inspect skin for urticaria distribution and characteristics",
      "Examine oropharynx and neck for swelling or erythema",
      "Auscultate lungs for wheeze or decreased air entry",
      "Palpate abdomen for tenderness or distension",
      "Assess voice quality and ability to swallow",
      "Check capillary refill and peripheral perfusion",
      "Palpate neck for lymphadenopathy or swelling",
      "Examine conjunctiva for injection or swelling",
      "Assess mental status and anxiety level",
      "Check pulse quality and rhythm"
    ],
    "examFindings": {
      "Inspect skin for urticaria distribution and characteristics": "Raised, erythematous wheals on bilateral forearms and anterior chest, some confluent, blanching with pressure",
      "Examine oropharynx and neck for swelling or erythema": "Mild pharyngeal erythema, no visible tongue or lip swelling, uvula appears normal",
      "Auscultate lungs for wheeze or decreased air entry": "Clear breath sounds bilaterally, no wheeze or stridor audible",
      "Palpate abdomen for tenderness or distension": "Mild diffuse tenderness to palpation, no guarding or rebound, normal bowel sounds",
      "Assess voice quality and ability to swallow": "Voice slightly hoarse, patient able to swallow saliva but reports discomfort",
      "Check capillary refill and peripheral perfusion": "Capillary refill 2 seconds, extremities warm and well-perfused",
      "Palpate neck for lymphadenopathy or swelling": "No palpable lymphadenopathy, no obvious neck swelling or induration",
      "Examine conjunctiva for injection or swelling": "Mild conjunctival injection, no periorbital edema",
      "Assess mental status and anxiety level": "Alert and oriented, anxious but cooperative, no altered mental status",
      "Check pulse quality and rhythm": "Regular tachycardia, pulses strong and equal bilaterally"
    },
    "ddxTargets": [
      "OIT updosing reaction \u2014 exercise cofactor, systemic symptoms (correct)",
      "Anaphylaxis from accidental peanut exposure \u2014 OIT context makes updose the trigger",
      "Panic attack \u2014 tachycardia and anxiety, but urticaria and GI symptoms are organic",
      "Vasovagal reaction \u2014 no urticaria, pallor/bradycardia pattern",
      "Mast cell activation syndrome \u2014 baseline tryptase normal at 24h",
      "Idiopathic anaphylaxis \u2014 OIT dose is the identifiable trigger"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'just an OIT reaction' and missing the exercise amplification component that makes this more serious",
      "prematureClosure": "May diagnose simple OIT reaction and miss that exercise within 2 hours significantly increases absorption and reaction severity",
      "availabilityBias": "Recent case of peer hospitalized for OIT reaction may bias toward either over-treatment or normalization of reactions"
    },
    "coachPrompts": {
      "phase2": "This patient is on oral immunotherapy for peanut allergy. What questions will help you understand the relationship between her OIT dosing, exercise timing, and current symptoms? Consider the pathophysiology of how exercise affects allergen absorption and reaction severity.",
      "phase5": "You've identified a patient with urticaria, throat symptoms, and GI symptoms after OIT dosing. What's significant about the timing of her exercise relative to her dose? How does this change your assessment of severity and management approach?",
      "finalDebrief": "This case highlights exercise-enhanced allergic reactions during OIT. Exercise within 2 hours of dosing increases absorption and can trigger more severe reactions. How did recognizing this specific trigger help differentiate from simple OIT reactions? What does this mean for her treatment plan and patient education?",
      "final": "Diagnosis: OIT dose reaction \u2014 exercise cofactor. Key learning: (1) OIT cofactors \u2014 conditions that lower the reaction threshold during OIT dosing: exercise (most common \u2014 do not exercise 2 hours before or after OIT dose), illness/fever, menstruation, poor sleep, NSAID use, empty stomach (or unusual eating timing), emotional stress. These MUST be reviewed at every OIT visit and patients must know to call before dosing if cofactors present. (2) Protocol after systemic reaction: do NOT updose after a systemic reaction. Return to last tolerated dose. Reassess with allergist before any further updosing. Adjust protocol based on frequency and severity of reactions. (3) Palforzia (Aimmune AR101): FDA-approved peanut OIT for ages 4-17. Reduces risk of accidental severe reaction from 3 peanuts (threshold) to ~67 peanut equivalents or more for most patients. Does NOT allow intentional unrestricted peanut eating \u2014 it is DESENSITIZATION, not tolerance. (4) OIT vs omalizumab: omalizumab (Xolair) is increasingly used as an adjunct to OIT or as monotherapy (FDA-approved 2024 for ages 1+ for peanut, milk, egg, wheat, cashew, walnut, hazelnut) \u2014 reduces reaction severity and may allow faster updosing. (5) Patient education: epinephrine must always be accessible during OIT \u2014 reactions during maintenance dosing are less common than during updosing but occur and can be severe."
    }
  },
  "meta": {
    "diagnosis": "Peanut OIT Adverse Reaction \u2014 Systemic Symptoms During Updosing, Protocol Hold, Epinephrine Administration",
    "caseId": "food-allergy-oit-reaction-v2"
  }
};
