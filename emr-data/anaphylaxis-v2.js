/* emr-data/anaphylaxis-v2.js — Multi-Setting Allergy Case Variation: Anaphylaxis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Robert Chen",
      "patientHPI": "I was gardening this morning when a bee stung my right arm, and about thirty minutes later I started feeling really dizzy and flushed all over, and now I'm having trouble breathing. This happened to me before about five years ago with a bee sting and it was really scary, but my emergency pen expired and I haven't gotten a new one yet.",
      "dob": "12/10/1954",
      "age": "72",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-984612",
      "language": "Mandarin",
      "race": "Asian",
      "phone": "(505) 555-1035",
      "email": "robert.chen@email.com",
      "address": "9205 E Roosevelt Rd, Milwaukee, WI 53205",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Sarah Chen",
        "phone": "(505) 555-5345",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Bee venom",
        "reaction": "Anaphylaxis (prior)",
        "severity": "Severe",
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
      "Wife: no allergies",
      "Son: asthma"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Former (40 pack-years, quit 10y ago)"
      ],
      [
        "Alcohol",
        "None"
      ],
      [
        "Occupation",
        "Retired teacher"
      ],
      [
        "Medications",
        "Takes metoprolol 50mg BID and lisinopril \u2014 beta-blocker masks tachycardia"
      ],
      [
        "Living",
        "Lives alone, wife deceased 2 years ago"
      ],
      [
        "Language",
        "Primary Mandarin, limited English \u2014 daughter translates"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Bee sting 30 min ago \u2014 lightheaded, diffuse flushing, no hives, NOT tachycardic (on metoprolol)",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Anaphylaxis \u2014 beta-blocker blunted",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HTN",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "COPD (mild)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "On metoprolol 50mg BID \u2014 masks tachycardic response",
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
          "frequency": "Given x1 \u2014 may need glucagon if refractory",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Glucagon",
          "dose": "1mg",
          "route": "IV",
          "frequency": "If epi-refractory (beta-blocker reversal)",
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
          "name": "NS bolus",
          "dose": "1L",
          "route": "IV",
          "frequency": "Rapid",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "92/54",
          "hr": "58",
          "rr": "22",
          "temp": "36.6\u00b0C",
          "spo2": "91%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-956423",
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
                  "value": "1.4",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
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
                  "value": "38",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": "H"
                },
                {
                  "test": "Lactate",
                  "value": "3.8",
                  "unit": "mmol/L",
                  "range": "0.5-2.0",
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
          "cc": "Bee sting 30 min ago \u2014 lightheaded, diffuse flushing, no hives, NOT tachycardic (on metoprolol)",
          "hpi": "72M with HTN and COPD on metoprolol presents after bee sting to right forearm 30 min ago while gardening. Developed lightheadedness, diffuse flushing, and dyspnea. NOTABLY: HR only 58 despite hypotension (beta-blocker effect). No urticaria. Prior anaphylaxis to bee sting 5 years ago \u2014 EpiPen expired, lives alone, daughter lives 2 hours away. Limited English \u2014 daughter contacted by phone for translation.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted to ICU for anaphylaxis monitoring \u2014 refractory hypotension required glucagon + epi drip",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Anaphylaxis (bee venom) \u2014 refractory to IM epi due to beta-blocker",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "HTN (holding metoprolol)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "COPD",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "CKD stage 3a (Cr 1.4)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Social isolation \u2014 lives alone, limited English",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Epinephrine drip",
          "dose": "0.1 mcg/kg/min",
          "route": "IV",
          "frequency": "Titrate to MAP >65",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Glucagon",
          "dose": "1mg",
          "route": "IV",
          "frequency": "Given x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Q6H x24h",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "IV",
          "frequency": "Q12H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "98/62",
          "hr": "62",
          "rr": "18",
          "temp": "36.8\u00b0C",
          "spo2": "95%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-818639",
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
          "cc": "Admitted to ICU for anaphylaxis monitoring \u2014 refractory hypotension required glucagon + epi drip",
          "hpi": "72M admitted to ICU after refractory anaphylaxis. Required glucagon (beta-blocker reversal) in addition to epinephrine. Metoprolol held. Daughter arrived \u2014 serving as interpreter. Social work consulted for home safety assessment given he lives alone with limited English and had expired EpiPen.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 venom anaphylaxis in elderly patient on beta-blocker, complex management",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Bee venom anaphylaxis \u2014 beta-blocker complicated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Beta-blocker use \u2014 discuss with cardiology re: switch to CCB",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "CKD stage 3a \u2014 affects med choices",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Limited English \u2014 need translated action plan",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Social isolation \u2014 fall risk, no one to administer epi",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily (replacing metoprolol per cardiology)",
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
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "128/78",
          "hr": "72",
          "rr": "14",
          "temp": "36.8\u00b0C",
          "spo2": "98%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-392948",
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
                  "value": "1.3",
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
                  "test": "Venom IgE \u2014 Honeybee",
                  "value": "22",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Venom IgE \u2014 Yellow jacket",
                  "value": "1.2",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Baseline Tryptase",
                  "value": "6.2",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult \u2014 venom anaphylaxis in elderly patient on beta-blocker, complex management",
          "hpi": "A/I consult note: 72M with bee venom anaphylaxis complicated by beta-blocker use masking tachycardia. Key issues: (1) metoprolol must be switched \u2014 coordinating with cardiology for CCB transition, (2) CKD 3a limits some options, (3) lives alone with limited English \u2014 needs Mandarin-language anaphylaxis action plan, (4) daughter trained on EpiPen use via video call, (5) VIT strongly recommended \u2014 will reduce future risk 95%.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Allergy follow-up \u2014 venom immunotherapy initiation, med optimization, home safety",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Bee venom allergy (confirmed)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "VIT \u2014 starting build-up phase",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Beta-blocker discontinued (now on amlodipine)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "CKD stage 3a \u2014 stable",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Home safety plan in place \u2014 daughter checks daily by phone, Mandarin-language action plan posted",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Bee venom immunotherapy",
          "dose": "Build-up phase",
          "route": "SC",
          "frequency": "Weekly",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2 (new, not expired)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Amlodipine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "132/76",
          "hr": "74",
          "rr": "14",
          "temp": "36.8\u00b0C",
          "spo2": "97%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-897052",
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
          "cc": "Allergy follow-up \u2014 venom immunotherapy initiation, med optimization, home safety",
          "hpi": "72M returns for VIT initiation. Beta-blocker successfully transitioned to amlodipine. BP well-controlled. Daughter present for translation. Home safety plan: Mandarin-language anaphylaxis action plan posted on refrigerator, daughter calls daily, new non-expired EpiPens stored at room temp. VIT starting today \u2014 will observe 30 min post-injection.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Robert Chen",
    "dob": "12/10/1954",
    "age": "72",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-984612",
    "language": "Mandarin",
    "race": "Asian",
    "phone": "(804) 555-8454",
    "email": "robert.chen@email.com",
    "address": "4961 Elm St, Memphis, TN 38122",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Sarah Chen",
      "phone": "(502) 555-7930",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Bee sting 30 min ago \u2014 lightheaded, diffuse flushing, no hives, NOT tachycardic (on metoprolol)",
    "diagnosis": "Anaphylaxis"
  },
  "problems": [
    {
      "problem": "Anaphylaxis \u2014 bee venom, cardiovascular-predominant (Kounis syndrome pattern)",
      "icd": "T63.441A",
      "onset": "2024",
      "status": "Active",
      "notes": "No urticaria or angioedema; hypotension, flushing, syncope \u2014 beta-blocker masks tachycardia and blunts epinephrine response"
    },
    {
      "problem": "Hypertension on metoprolol succinate",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": "Beta-blockade: (1) masks tachycardia \u2014 HR may be normal or bradycardic in anaphylaxis; (2) causes refractory anaphylaxis \u2014 epinephrine less effective; requires glucagon if refractory"
    },
    {
      "problem": "Coronary artery disease",
      "icd": "I25.10",
      "onset": "2019",
      "status": "Active",
      "notes": "Stent placed 2019; on aspirin and metoprolol; anaphylaxis may trigger vasospasm (Kounis syndrome)"
    }
  ],
  "medications": [
    {
      "name": "Metoprolol succinate 100mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Park",
      "start": "04/2016",
      "refills": 5,
      "status": "Active \u2014 CRITICAL: beta-blocker makes anaphylaxis refractory"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Park",
      "start": "2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 40mg nightly",
      "sig": "Take 1 tablet by mouth nightly",
      "prescriber": "Dr. Park",
      "start": "2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "EpiPen 0.3mg IM x2 (NEW)",
      "sig": "Inject at first sign of systemic reaction; call 911; may repeat in 5-15 minutes",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Glucagon 1mg IM kit (NEW \u2014 for refractory anaphylaxis)",
      "sig": "If epinephrine fails to improve BP/HR, administer glucagon 1mg IM; call 911",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 1,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Bee venom",
      "reaction": "Anaphylaxis (prior)",
      "severity": "Severe",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "92/54",
      "hr": "58",
      "rr": "22",
      "temp": "36.6\u00b0C",
      "spo2": "91%",
      "pain": "7/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Bee sting 30 min ago \u2014 lightheaded, diffuse flushing, no hives, NOT tachycardic (on metoprolol)",
      "hpi": "72M with HTN and COPD on metoprolol presents after bee sting to right forearm 30 min ago while gardening. Developed lightheadedness, diffuse flushing, and dyspnea. NOTABLY: HR only 58 despite hypotension (beta-blocker effect). No urticaria. Prior anaphylaxis to bee sting 5 years ago \u2014 EpiPen expired, lives alone, daughter lives 2 hours away. Limited English \u2014 daughter contacted by phone for translation.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/14/2024",
      "panel": "Anaphylaxis Workup",
      "results": [
        {
          "test": "Serum Tryptase (1h post-sting)",
          "value": "44.2",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "Baseline Tryptase (follow-up, 4 days later)",
          "value": "18.6",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "Bee Venom IgE (ImmunoCAP)",
          "value": "6.4",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Yellow Jacket Venom IgE",
          "value": "1.8",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "ECG",
          "value": "NSR, rate 62 \u2014 no ischemic changes, no delta wave",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Troponin I",
          "value": "0.04",
          "unit": "ng/mL",
          "ref": "<0.04",
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
    "Wife: no allergies",
    "Son: asthma"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Former (40 pack-years, quit 10y ago)"
    ],
    [
      "Alcohol",
      "None"
    ],
    [
      "Occupation",
      "Retired teacher"
    ],
    [
      "Medications",
      "Takes metoprolol 50mg BID and lisinopril \u2014 beta-blocker masks tachycardia"
    ],
    [
      "Living",
      "Lives alone, wife deceased 2 years ago"
    ],
    [
      "Language",
      "Primary Mandarin, limited English \u2014 daughter translates"
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
    "patientPersona": "Robert appears anxious and slightly confused, frequently touching his flushed face and neck. He's cooperative but keeps mentioning he doesn't understand why he feels so weak since his heart rate seems normal. He's moderately distressed but trying to downplay symptoms, saying he's 'probably just getting old.'",
    "interviewQuestions": [
      "Can you describe exactly what happened when you were stung?",
      "What symptoms did you notice first after the bee sting?",
      "Have you ever been stung by a bee before, and if so, what happened?",
      "Are you experiencing any difficulty breathing or throat tightness?",
      "Do you have any itching, hives, or skin changes besides the flushing?",
      "Are you feeling nauseous or having any abdominal cramping?",
      "What medications are you currently taking?",
      "Do you have any known allergies?",
      "Have you ever had a severe allergic reaction before?",
      "Are you experiencing any chest pain or palpitations?",
      "How would you rate your current breathing difficulty on a scale of 1-10?",
      "Have you taken anything for these symptoms since the sting?",
      "Do you have an EpiPen or any emergency medications at home?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm feeling a bit lightheaded and confused right now. Could you repeat that?",
      "onset": "I was pruning my roses about 30 minutes ago when a bee stung my right forearm. Within 5-10 minutes I started feeling dizzy and weak.",
      "character": "I feel very lightheaded and weak, like I might faint. My skin feels hot and flushed all over.",
      "location": "The sting is on my right forearm, but I'm feeling flushed and weak all over my body.",
      "severity": "The dizziness is about a 7 out of 10 - I'm worried I might pass out. The breathing difficulty is maybe a 5 or 6.",
      "aggravating": "Standing up makes the dizziness much worse. I feel worse when I try to take deep breaths.",
      "relieving": "Sitting down helps a little with the dizziness, but nothing really makes me feel better.",
      "associated": "I'm having trouble catching my breath, my whole body feels flushed and hot, and I'm feeling nauseous.",
      "denies": "I don't have any hives or itchy bumps, no chest pain, no throat swelling that I can tell, and my heart doesn't feel like it's racing.",
      "history": "I've been stung before about 5 years ago and had a bad reaction - went to the ER that time too with similar symptoms.",
      "medications": "Epinephrine; Glucagon; Diphenhydramine; NS bolus",
      "allergies": "Bee venom",
      "family": "My son has asthma, but my wife never had any allergies when she was alive.",
      "social": "I'm a retired teacher, live alone since my wife passed two years ago. I used to smoke for many years but quit 10 years ago - about 2 packs a day for 20 years. I don't drink alcohol."
    },
    "examManeuvers": [
      "Inspect skin for urticaria or angioedema",
      "Examine sting site on right forearm",
      "Auscultate heart sounds and rhythm",
      "Auscultate lung sounds bilaterally",
      "Assess mucous membranes and conjunctiva",
      "Examine oropharynx for swelling",
      "Palpate lymph nodes",
      "Assess peripheral perfusion and capillary refill",
      "Check orthostatic vital signs",
      "Neurologic assessment including mental status"
    ],
    "examFindings": {
      "Inspect skin for urticaria or angioedema": "Diffuse erythematous flushing of face, neck, and chest without discrete urticarial lesions or angioedema",
      "Examine sting site on right forearm": "Single puncture wound with mild local erythema and swelling, stinger not visible",
      "Auscultate heart sounds and rhythm": "Regular rate and rhythm, no murmurs, rate 58 bpm consistent with beta-blocker effect",
      "Auscultate lung sounds bilaterally": "Decreased air movement bilaterally with mild expiratory wheeze, consistent with bronchospasm",
      "Assess mucous membranes and conjunctiva": "Pale mucous membranes, conjunctival injection present",
      "Examine oropharynx for swelling": "No obvious uvular or tongue swelling, mild erythema of posterior pharynx",
      "Palpate lymph nodes": "No lymphadenopathy appreciated",
      "Assess peripheral perfusion and capillary refill": "Cool extremities with capillary refill 4 seconds, weak peripheral pulses",
      "Check orthostatic vital signs": "Unable to obtain standing BP due to patient dizziness, sitting BP remains 92/54",
      "Neurologic assessment including mental status": "Alert and oriented but appears anxious, no focal neurologic deficits"
    },
    "ddxTargets": [
      "Anaphylaxis \u2014 bee venom, cardiovascular-predominant, beta-blocker confounded (correct)",
      "Vasovagal syncope \u2014 no allergen mechanism; no tryptase elevation; no flushing",
      "Acute MI \u2014 troponin borderline; in context of anaphylaxis, may represent Kounis syndrome (mast-cell induced coronary vasospasm)",
      "Carcinoid syndrome \u2014 flushing; 5-HIAA elevated; chronic course; no acute allergen exposure",
      "Mastocytosis \u2014 baseline tryptase 18.6 requires workup; may be underlying predisposing condition",
      "Heat stroke \u2014 environmental exposure; no allergen; altered mental status predominates"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on normal heart rate and absence of classic urticaria, missing anaphylaxis diagnosis due to beta-blocker masking typical tachycardic response",
      "prematureClosure": "Risk of premature closure on vasovagal reaction or simple allergic reaction without considering the severity indicated by hypotension and bronchospasm",
      "availabilityBias": "Risk of availability bias toward common presentations of anaphylaxis with tachycardia and hives, missing atypical presentation in patient on beta-blockers"
    },
    "coachPrompts": {
      "phase2": "This is an interesting case of a bee sting with some concerning vital signs. Before you talk to the patient, what are your thoughts about the significance of his blood pressure and heart rate? How might his medications affect the typical presentation of allergic reactions?",
      "phase5": "You've gathered good information about his history and physical findings. Let's think about this systematically - he has hypotension, flushing, dyspnea with wheeze, and a history of prior severe reaction to bee stings. What's particularly notable about his heart rate in this context, and how does his medication regimen factor into your diagnostic thinking?",
      "finalDebrief": "This case highlights how beta-blockers can mask the classic tachycardic response in anaphylaxis, making the diagnosis more challenging. The key was recognizing that hypotension, bronchospasm, and flushing after known allergen exposure constitutes anaphylaxis even without urticaria or tachycardia. His prior severe reaction and current beta-blocker therapy were crucial historical elements. How did your differential diagnosis evolve as you gathered more information?",
      "final": "Diagnosis: bee venom anaphylaxis, cardiovascular-predominant, refractory to initial epinephrine due to beta-blockade. Key teaching points: (1) Anaphylaxis WITHOUT urticaria/angioedema occurs in 10-20% \u2014 cardiovascular collapse or bronchospasm alone qualifies. Beta-blockers mask tachycardia and cutaneous signs. (2) Beta-blocker refractory anaphylaxis: epinephrine requires beta-adrenergic receptor; if blocked \u2192 use glucagon 1-2mg IV/IM (bypasses beta receptor via glucagon receptor, increases HR and BP). (3) Baseline tryptase 18.6 \u2014 persistently elevated (>24h post-reaction) raises concern for underlying mastocytosis. Hereditary alpha-tryptasemia also possible. Full mastocytosis workup indicated. (4) Kounis syndrome: anaphylaxis-triggered coronary artery spasm or plaque rupture. Troponin elevation in this context should prompt cardiology input \u2014 treatment priority is epinephrine (not nitrates, which worsen vasodilation). (5) Venom immunotherapy is urgent in this patient \u2014 outdoor exposure + systemic anaphylaxis + VIT reduces re-sting risk from 60% to 2%. Beta-blocker use relative contraindication to VIT \u2014 discuss with cardiology."
    }
  },
  "meta": {
    "diagnosis": "Anaphylaxis \u2014 Hymenoptera Venom (Bee Sting), Atypical Presentation: Cardiovascular-Predominant Without Cutaneous Features; Confounded by Beta-Blockade"
  }
};
