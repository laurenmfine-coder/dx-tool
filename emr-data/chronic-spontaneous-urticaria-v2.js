/* emr-data/chronic-spontaneous-urticaria-v2.js — Multi-Setting Allergy Case Variation: Chronic Spontaneous Urticaria */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "James O'Connell",
      "patientHPI": "I keep breaking out in these huge welts all over my body almost every day for the past four months, and sometimes my lips swell up too. I've tried different allergy medicines but nothing seems to work, and I notice it gets worse when I'm wearing my work gear or when I'm stressed about these constant breakouts.",
      "dob": "01/28/1971",
      "age": "55",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-886266",
      "language": "English",
      "race": "White",
      "phone": "(702) 555-8245",
      "email": "james.oconnell@email.com",
      "address": "1594 Jasmine Way, New Orleans, LA 70117",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Sarah O'Connell",
        "phone": "(415) 555-3973",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
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
      "Sister: thyroid disease"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never"
      ],
      [
        "Alcohol",
        "2-3 beers daily"
      ],
      [
        "Occupation",
        "Construction foreman — physical urticaria component (pressure, heat)"
      ],
      [
        "Stress",
        "Going through divorce, custody battle"
      ],
      [
        "Mental health",
        "Not sleeping due to itch — affecting job performance"
      ],
      [
        "Prior treatment",
        "Failed cetirizine, fexofenadine, hydroxyzine — still breaking out daily"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Severe urticaria flare with angioedema — 3rd ED visit this month, feels like he's going crazy",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CSU — refractory to antihistamines",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Angioedema (lips)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Physical urticaria component (delayed pressure)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Alcohol use (may worsen)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Divorce-related stress",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Depression/insomnia from chronic itch",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Diphenhydramine",
          "dose": "50mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "Daily (home — not working)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "148/88",
          "hr": "92",
          "rr": "18",
          "temp": "37.0°C",
          "spo2": "99%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-708949",
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
                  "value": "3",
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
              "name": "THYROID/AUTOIMMUNE",
              "results": [
                {
                  "test": "TSH",
                  "value": "0.2",
                  "unit": "mIU/L",
                  "range": "0.4-4.0",
                  "flag": "L"
                },
                {
                  "test": "Anti-TPO",
                  "value": "342",
                  "unit": "IU/mL",
                  "range": "<35",
                  "flag": "H"
                },
                {
                  "test": "CRP",
                  "value": "2.8",
                  "unit": "mg/dL",
                  "range": "<0.5",
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
          "cc": "Severe urticaria flare with angioedema — 3rd ED visit this month, feels like he's going crazy",
          "hpi": "55M with 4-month history of daily hives presenting with 3rd ED visit this month. Large wheals on trunk and extremities with lip angioedema. Failed cetirizine 10mg, fexofenadine 180mg, and hydroxyzine 25mg QHS. Reports hives worsen with physical pressure at work (tool belt, hard hat) and during periods of high stress. Currently going through contentious divorce — not sleeping, drinking more to cope. Says to nurse: \"I feel like I'm losing my mind — the itching never stops.\" TSH found to be low with high anti-TPO — autoimmune thyroiditis may be driving CSU.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief observation — starting systemic workup for refractory CSU",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CSU — refractory, needs biologic",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Autoimmune thyroiditis (new diagnosis — low TSH, high anti-TPO)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Delayed pressure urticaria (occupational)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Alcohol use — counsel reduction",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Insomnia/depression secondary to chronic itch",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Elevated CRP — chronic inflammation",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cetirizine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID (uptitrated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Montelukast",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Hydroxyzine",
          "dose": "25mg",
          "route": "PO",
          "frequency": "QHS for sleep",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "138/82",
          "hr": "82",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-256376",
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
          "cc": "Brief observation — starting systemic workup for refractory CSU",
          "hpi": "55M admitted for CSU workup. Autoimmune thyroiditis confirmed — endocrine consult obtained. Starting uptitrated antihistamine regimen while awaiting A/I consult for omalizumab evaluation. Social work: connected to divorce support group, screening positive for PHQ-9 moderate depression — psych referral placed. Alcohol counseling initiated.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — refractory CSU with autoimmune thyroiditis, evaluate for omalizumab",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CSU — failed 3 antihistamines, needs step-up",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Autoimmune thyroiditis — likely CSU trigger",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Delayed pressure urticaria — occupational",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Depression — itch-sleep-mood cycle",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "UAS7 score: 38/42 (severe)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Omalizumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q4 weeks (recommended)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "132/78",
          "hr": "78",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-281905",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult — refractory CSU with autoimmune thyroiditis, evaluate for omalizumab",
          "hpi": "A/I consult: 55M with severe refractory CSU (UAS7=38). Autoimmune thyroiditis likely contributing (anti-TPO 342). Delayed pressure urticaria confirmed by dermographism testing and delayed pressure challenge (4h). Recommend omalizumab 300mg Q4wk — insurance PA submitted. In meantime, maximize antihistamines. Address modifiable factors: alcohol reduction (histamine load), stress management, sleep hygiene. Coordinate with endocrine for thyroid management.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "CSU follow-up — 8 weeks on omalizumab, UAS7 reassessment",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CSU — dramatically improved on omalizumab (UAS7 38→6)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Autoimmune thyroiditis — on levothyroxine, TSH normalizing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Delayed pressure urticaria — improved but still present with heavy equipment",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Depression — improving with itch control, started SSRI",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Alcohol use — reduced to 2-3/week from daily",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Omalizumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q4 weeks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily (reduced from BID)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Levothyroxine",
          "dose": "50mcg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Sertraline",
          "dose": "50mg",
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
          "bp": "128/78",
          "hr": "74",
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
          "accession": "LAB-868622",
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
          "cc": "CSU follow-up — 8 weeks on omalizumab, UAS7 reassessment",
          "hpi": "55M dramatic improvement on omalizumab — UAS7 dropped from 38 to 6. Sleeping through the night. Hives rare, no angioedema since starting. Thyroid managed on levothyroxine (TSH normalizing). Depression improving — combination of itch control + sertraline + therapy. Reduced alcohol. Still has some pressure urticaria with heavy equipment at work — discussed ergonomic modifications. Continue omalizumab, plan to reassess in 6 months for possible dose reduction.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "James O'Connell",
    "dob": "01/28/1971",
    "age": "55",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-886266",
    "language": "English",
    "race": "White",
    "phone": "(620) 555-8141",
    "email": "james.oconnell@email.com",
    "address": "1813 Clover St, Pittsburgh, PA 15208",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Sarah O'Connell",
      "phone": "(702) 555-9056",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Recurrent hives",
    "diagnosis": "Chronic Spontaneous Urticaria"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "CSU — refractory to antihistamines",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Angioedema (lips)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Physical urticaria component (delayed pressure)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Alcohol use (may worsen)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Divorce-related stress",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-6",
      "description": "Depression/insomnia from chronic itch",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Diphenhydramine",
      "dose": "50mg",
      "route": "IV",
      "frequency": "Once",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Methylprednisolone",
      "dose": "125mg",
      "route": "IV",
      "frequency": "Once",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Cetirizine",
      "dose": "20mg",
      "route": "PO",
      "frequency": "Daily (home — not working)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "148/88",
      "hr": "92",
      "rr": "18",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Severe urticaria flare with angioedema — 3rd ED visit this month, feels like he's going crazy",
      "hpi": "55M with 4-month history of daily hives presenting with 3rd ED visit this month. Large wheals on trunk and extremities with lip angioedema. Failed cetirizine 10mg, fexofenadine 180mg, and hydroxyzine 25mg QHS. Reports hives worsen with physical pressure at work (tool belt, hard hat) and during periods of high stress. Currently going through contentious divorce — not sleeping, drinking more to cope. Says to nurse: \"I feel like I'm losing my mind — the itching never stops.\" TSH found to be low with high anti-TPO — autoimmune thyroiditis may be driving CSU.",
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
      "accession": "LAB-708949",
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
              "value": "3",
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
          "name": "THYROID/AUTOIMMUNE",
          "results": [
            {
              "test": "TSH",
              "value": "0.2",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": "L"
            },
            {
              "test": "Anti-TPO",
              "value": "342",
              "unit": "IU/mL",
              "range": "<35",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "2.8",
              "unit": "mg/dL",
              "range": "<0.5",
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
    "Sister: thyroid disease"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "2-3 beers daily"
    ],
    [
      "Occupation",
      "Construction foreman — physical urticaria component (pressure, heat)"
    ],
    [
      "Stress",
      "Going through divorce, custody battle"
    ],
    [
      "Mental health",
      "Not sleeping due to itch — affecting job performance"
    ],
    [
      "Prior treatment",
      "Failed cetirizine, fexofenadine, hydroxyzine — still breaking out daily"
    ]
  ],
  "references": [
    {
      "id": "EAACI-Urticaria-2022",
      "title": "EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
      "authors": "Zuberbier T, Abdul Latiff AH, et al.",
      "journal": "Allergy",
      "year": 2022,
      "doi": "10.1111/all.15090",
      "url": "https://onlinelibrary.wiley.com/doi/10.1111/all.15090",
      "openAccess": true,
      "validates": [
        "Wheals <24h = urticaria; >24h with bruising = biopsy for UV",
        "UAS7 scoring",
        "Step-up: sgAH → updose 4x → omalizumab → cyclosporine",
        "Post-viral urticaria in children: no allergy testing needed"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "James appears frustrated and exhausted, with visible scratch marks on his arms. He's forthcoming about his symptoms but increasingly agitated about the lack of effective treatment, stating this is disrupting his work and personal life during an already stressful divorce.",
    "interviewQuestions": [
      "Can you describe when these hives first started appearing?",
      "What do the hives look like and where do they appear?",
      "Have you noticed any swelling of your face, lips, or tongue?",
      "On a scale of 1-10, how would you rate the itching?",
      "What seems to trigger or worsen your hives?",
      "Does pressure from clothing, belts, or work equipment make it worse?",
      "Have you tried any medications for this condition?",
      "Do you have any known allergies to medications?",
      "Have you had any difficulty breathing or throat tightness?",
      "How has this affected your sleep and daily activities?",
      "Is there any family history of allergies or autoimmune conditions?",
      "Tell me about your work environment and any recent stressors",
      "How much alcohol do you typically drink per day?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Can you be more specific about my hives?",
      "onset": "This started about 4 months ago, just appeared out of nowhere one morning. At first I thought it was something I ate, but they keep coming back every single day.",
      "character": "They're these raised, red, itchy welts that can get pretty large - some are the size of quarters. They're incredibly itchy, like nothing I've ever experienced before.",
      "location": "Mainly on my trunk, arms, and legs. Sometimes they appear on my back where I can't even reach to scratch. My lips also swell up, which is really concerning.",
      "severity": "The itching is easily a 9 out of 10. It's so bad I can't sleep at night, and it's affecting my work performance. I'm constantly distracted.",
      "aggravating": "They definitely get worse with stress, and I've noticed they flare up more at work when I'm wearing my tool belt or after physical labor. Heat seems to make them worse too.",
      "relieving": "Nothing really helps much. The Benadryl gives me maybe an hour of relief but makes me drowsy. The steroid helped temporarily but I can't stay on that forever.",
      "associated": "My lips swell up regularly, especially in the morning. I feel tired all the time from not sleeping, and honestly, I'm getting pretty depressed about this whole situation.",
      "denies": "No trouble breathing, no throat tightness, no nausea or vomiting. I haven't had any new foods or changed soaps or detergents.",
      "history": "Never had anything like this before in my life. No history of allergies or skin problems. This is completely new for me.",
      "medications": "Diphenhydramine; Methylprednisolone; Cetirizine",
      "allergies": "NKDA",
      "family": "My sister has some kind of thyroid problem, but I don't think anyone in my family has had hives like this.",
      "social": "I'm a construction foreman, so I'm around dust, equipment, and do a lot of physical work. Never smoked. I drink 2-3 beers daily, maybe more lately with the divorce stress. Going through a messy divorce and custody battle right now."
    },
    "examManeuvers": [
      "Inspect skin for urticarial lesions",
      "Assess for angioedema of face and lips",
      "Perform dermographism test",
      "Check for delayed pressure urticaria",
      "Examine lymph nodes",
      "Assess respiratory status and airway",
      "Check vital signs for signs of anaphylaxis",
      "Palpate thyroid gland",
      "Examine for hepatosplenomegaly"
    ],
    "examFindings": {
      "Inspect skin for urticarial lesions": "Multiple raised, erythematous wheals of varying sizes (0.5-3 cm) scattered across trunk and extremities with central pallor and surrounding erythema",
      "Assess for angioedema of face and lips": "Mild asymmetric swelling of lower lip, no periorbital edema or tongue involvement",
      "Perform dermographism test": "Positive dermographism - linear wheal formation within 2-3 minutes of firm stroking",
      "Check for delayed pressure urticaria": "Areas of induration and erythema noted where clothing/belt contact occurs, patient reports these areas are particularly symptomatic",
      "Examine lymph nodes": "No significant lymphadenopathy palpated",
      "Assess respiratory status and airway": "Clear breath sounds bilaterally, no stridor or wheeze, airway patent",
      "Check vital signs for signs of anaphylaxis": "BP 148/88, HR 92, stable vitals without signs of systemic anaphylaxis",
      "Palpate thyroid gland": "Thyroid not enlarged, no nodules palpated",
      "Examine for hepatosplenomegaly": "Abdomen soft, no hepatosplenomegaly detected"
    },
    "ddxTargets": [
      "Chronic spontaneous urticaria with physical urticaria component (correct diagnosis)",
      "Chronic inducible urticaria (pressure/dermographic)",
      "Drug-induced urticaria",
      "Hereditary angioedema",
      "Systemic mastocytosis",
      "Contact dermatitis",
      "Urticarial vasculitis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'recurrent hives' and missing the chronic spontaneous nature with physical triggers, or focusing too heavily on angioedema component",
      "prematureClosure": "May stop at simple urticaria diagnosis without recognizing the refractory chronic spontaneous urticaria requiring specialized management",
      "availabilityBias": "Tendency to attribute to common triggers like food or medication allergies rather than recognizing chronic spontaneous urticaria pattern"
    },
    "coachPrompts": {
      "phase2": "Before you interview this patient, consider the different types of urticaria and their triggers. What specific history would help you distinguish between acute allergic reactions, chronic spontaneous urticaria, and physical urticarias? Think about the timeline and pattern of symptoms.",
      "phase5": "You've identified chronic urticaria with physical components and angioedema. What does the refractory nature to standard antihistamines tell you about next steps? Consider how his occupational and psychosocial stressors might be contributing to the chronicity.",
      "finalDebrief": "This case illustrates chronic spontaneous urticaria (CSU) with physical urticaria components - a complex condition that's often refractory to standard antihistamine doses. Note how the physical triggers, stress, and alcohol consumption all contribute. The key learning is recognizing when standard urticaria treatment fails and considering step-up therapy or specialist referral for conditions like CSU."
    }
  }
};
