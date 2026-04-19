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
      "pharmacy": "CVS Pharmacy — Main St",
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
        "Takes metoprolol 50mg BID and lisinopril — beta-blocker masks tachycardia"
      ],
      [
        "Living",
        "Lives alone, wife deceased 2 years ago"
      ],
      [
        "Language",
        "Primary Mandarin, limited English — daughter translates"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Bee sting 30 min ago — lightheaded, diffuse flushing, no hives, NOT tachycardic (on metoprolol)",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Anaphylaxis — beta-blocker blunted",
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
          "description": "On metoprolol 50mg BID — masks tachycardic response",
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
          "frequency": "Given x1 — may need glucagon if refractory",
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
          "temp": "36.6°C",
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
          "cc": "Bee sting 30 min ago — lightheaded, diffuse flushing, no hives, NOT tachycardic (on metoprolol)",
          "hpi": "72M with HTN and COPD on metoprolol presents after bee sting to right forearm 30 min ago while gardening. Developed lightheadedness, diffuse flushing, and dyspnea. NOTABLY: HR only 58 despite hypotension (beta-blocker effect). No urticaria. Prior anaphylaxis to bee sting 5 years ago — EpiPen expired, lives alone, daughter lives 2 hours away. Limited English — daughter contacted by phone for translation.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted to ICU for anaphylaxis monitoring — refractory hypotension required glucagon + epi drip",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Anaphylaxis (bee venom) — refractory to IM epi due to beta-blocker",
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
          "description": "Social isolation — lives alone, limited English",
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
          "temp": "36.8°C",
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
          "cc": "Admitted to ICU for anaphylaxis monitoring — refractory hypotension required glucagon + epi drip",
          "hpi": "72M admitted to ICU after refractory anaphylaxis. Required glucagon (beta-blocker reversal) in addition to epinephrine. Metoprolol held. Daughter arrived — serving as interpreter. Social work consulted for home safety assessment given he lives alone with limited English and had expired EpiPen.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — venom anaphylaxis in elderly patient on beta-blocker, complex management",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Bee venom anaphylaxis — beta-blocker complicated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Beta-blocker use — discuss with cardiology re: switch to CCB",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "CKD stage 3a — affects med choices",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Limited English — need translated action plan",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Social isolation — fall risk, no one to administer epi",
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
          "temp": "36.8°C",
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
                  "test": "Venom IgE — Honeybee",
                  "value": "22",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Venom IgE — Yellow jacket",
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
          "cc": "A/I consult — venom anaphylaxis in elderly patient on beta-blocker, complex management",
          "hpi": "A/I consult note: 72M with bee venom anaphylaxis complicated by beta-blocker use masking tachycardia. Key issues: (1) metoprolol must be switched — coordinating with cardiology for CCB transition, (2) CKD 3a limits some options, (3) lives alone with limited English — needs Mandarin-language anaphylaxis action plan, (4) daughter trained on EpiPen use via video call, (5) VIT strongly recommended — will reduce future risk 95%.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Allergy follow-up — venom immunotherapy initiation, med optimization, home safety",
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
          "description": "VIT — starting build-up phase",
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
          "description": "CKD stage 3a — stable",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Home safety plan in place — daughter checks daily by phone, Mandarin-language action plan posted",
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
          "temp": "36.8°C",
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
          "cc": "Allergy follow-up — venom immunotherapy initiation, med optimization, home safety",
          "hpi": "72M returns for VIT initiation. Beta-blocker successfully transitioned to amlodipine. BP well-controlled. Daughter present for translation. Home safety plan: Mandarin-language anaphylaxis action plan posted on refrigerator, daughter calls daily, new non-expired EpiPens stored at room temp. VIT starting today — will observe 30 min post-injection.",
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
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Sarah Chen",
      "phone": "(502) 555-7930",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Bee sting 30 min ago — lightheaded, diffuse flushing, no hives, NOT tachycardic (on metoprolol)",
    "diagnosis": "Anaphylaxis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Anaphylaxis — beta-blocker blunted",
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
      "description": "On metoprolol 50mg BID — masks tachycardic response",
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
      "frequency": "Given x1 — may need glucagon if refractory",
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
      "temp": "36.6°C",
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
      "cc": "Bee sting 30 min ago — lightheaded, diffuse flushing, no hives, NOT tachycardic (on metoprolol)",
      "hpi": "72M with HTN and COPD on metoprolol presents after bee sting to right forearm 30 min ago while gardening. Developed lightheadedness, diffuse flushing, and dyspnea. NOTABLY: HR only 58 despite hypotension (beta-blocker effect). No urticaria. Prior anaphylaxis to bee sting 5 years ago — EpiPen expired, lives alone, daughter lives 2 hours away. Limited English — daughter contacted by phone for translation.",
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
      "Takes metoprolol 50mg BID and lisinopril — beta-blocker masks tachycardia"
    ],
    [
      "Living",
      "Lives alone, wife deceased 2 years ago"
    ],
    [
      "Language",
      "Primary Mandarin, limited English — daughter translates"
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
  "guided": {
    "supported": true,
    "patientPersona": "Robert Chen is alert and cooperative, clearly concerned but provides a clear history.",
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
        "medications": "'I take Epinephrine; Glucagon; Diphenhydramine; NS bolus.'",
        "allergies": "'My allergies: Bee venom.'",
        "family": "Wife: no allergies  Son: asthma",
        "social": "Tobacco: Former (40 pack-years, quit 10y ago)  Alcohol: None  Occupation: Retired teacher  Medications: Takes metoprolol 50mg BID and lisinopril \u2014 beta-blocker masks tachycardia  Living: Lives alone, wife deceased 2 years ago"
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
        "phase2": "Before interviewing Robert Chen: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
