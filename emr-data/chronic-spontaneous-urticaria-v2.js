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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Construction foreman \u2014 physical urticaria component (pressure, heat)"
      ],
      [
        "Stress",
        "Going through divorce, custody battle"
      ],
      [
        "Mental health",
        "Not sleeping due to itch \u2014 affecting job performance"
      ],
      [
        "Prior treatment",
        "Failed cetirizine, fexofenadine, hydroxyzine \u2014 still breaking out daily"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Severe urticaria flare with angioedema \u2014 3rd ED visit this month, feels like he's going crazy",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CSU \u2014 refractory to antihistamines",
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
          "frequency": "Daily (home \u2014 not working)",
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
          "temp": "37.0\u00b0C",
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
          "cc": "Severe urticaria flare with angioedema \u2014 3rd ED visit this month, feels like he's going crazy",
          "hpi": "55M with 4-month history of daily hives presenting with 3rd ED visit this month. Large wheals on trunk and extremities with lip angioedema. Failed cetirizine 10mg, fexofenadine 180mg, and hydroxyzine 25mg QHS. Reports hives worsen with physical pressure at work (tool belt, hard hat) and during periods of high stress. Currently going through contentious divorce \u2014 not sleeping, drinking more to cope. Says to nurse: \"I feel like I'm losing my mind \u2014 the itching never stops.\" TSH found to be low with high anti-TPO \u2014 autoimmune thyroiditis may be driving CSU.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief observation \u2014 starting systemic workup for refractory CSU",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CSU \u2014 refractory, needs biologic",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Autoimmune thyroiditis (new diagnosis \u2014 low TSH, high anti-TPO)",
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
          "description": "Alcohol use \u2014 counsel reduction",
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
          "description": "Elevated CRP \u2014 chronic inflammation",
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
          "temp": "36.8\u00b0C",
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
          "cc": "Brief observation \u2014 starting systemic workup for refractory CSU",
          "hpi": "55M admitted for CSU workup. Autoimmune thyroiditis confirmed \u2014 endocrine consult obtained. Starting uptitrated antihistamine regimen while awaiting A/I consult for omalizumab evaluation. Social work: connected to divorce support group, screening positive for PHQ-9 moderate depression \u2014 psych referral placed. Alcohol counseling initiated.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 refractory CSU with autoimmune thyroiditis, evaluate for omalizumab",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CSU \u2014 failed 3 antihistamines, needs step-up",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Autoimmune thyroiditis \u2014 likely CSU trigger",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Delayed pressure urticaria \u2014 occupational",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Depression \u2014 itch-sleep-mood cycle",
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
          "temp": "36.8\u00b0C",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult \u2014 refractory CSU with autoimmune thyroiditis, evaluate for omalizumab",
          "hpi": "A/I consult: 55M with severe refractory CSU (UAS7=38). Autoimmune thyroiditis likely contributing (anti-TPO 342). Delayed pressure urticaria confirmed by dermographism testing and delayed pressure challenge (4h). Recommend omalizumab 300mg Q4wk \u2014 insurance PA submitted. In meantime, maximize antihistamines. Address modifiable factors: alcohol reduction (histamine load), stress management, sleep hygiene. Coordinate with endocrine for thyroid management.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "CSU follow-up \u2014 8 weeks on omalizumab, UAS7 reassessment",
        "diagnosis": "Chronic Spontaneous Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "CSU \u2014 dramatically improved on omalizumab (UAS7 38\u21926)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Autoimmune thyroiditis \u2014 on levothyroxine, TSH normalizing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Delayed pressure urticaria \u2014 improved but still present with heavy equipment",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Depression \u2014 improving with itch control, started SSRI",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Alcohol use \u2014 reduced to 2-3/week from daily",
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
          "cc": "CSU follow-up \u2014 8 weeks on omalizumab, UAS7 reassessment",
          "hpi": "55M dramatic improvement on omalizumab \u2014 UAS7 dropped from 38 to 6. Sleeping through the night. Hives rare, no angioedema since starting. Thyroid managed on levothyroxine (TSH normalizing). Depression improving \u2014 combination of itch control + sertraline + therapy. Reduced alcohol. Still has some pressure urticaria with heavy equipment at work \u2014 discussed ergonomic modifications. Continue omalizumab, plan to reassess in 6 months for possible dose reduction.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
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
      "problem": "Chronic spontaneous urticaria \u2014 refractory to omalizumab 300mg q4w",
      "icd": "L50.1",
      "onset": "2023",
      "status": "Active",
      "notes": "Completed 6 months omalizumab; partial response only; UAS7 currently 16 (inadequate); step-up to cyclosporine or dose escalation under discussion"
    },
    {
      "problem": "Type 2 diabetes mellitus",
      "icd": "E11.9",
      "onset": "2019",
      "status": "Active",
      "notes": "Complicates cyclosporine use \u2014 nephrotoxicity and hypertension risk elevated; cyclosporine blood pressure monitoring required"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2016",
      "status": "Active",
      "notes": "BP 142/88 on current regimen \u2014 suboptimal; cyclosporine may worsen; renal function monitoring essential"
    }
  ],
  "medications": [
    {
      "name": "Omalizumab (Xolair) 300mg SC q4 weeks",
      "sig": "Administer 300mg subcutaneously every 4 weeks; observe 30 min post-injection",
      "prescriber": "Dr. Rodriguez",
      "start": "05/2024",
      "refills": 3,
      "status": "Active \u2014 partial response only"
    },
    {
      "name": "Cetirizine 20mg daily (up-dosed)",
      "sig": "Take 2 tablets daily (double standard dose)",
      "prescriber": "Dr. Rodriguez",
      "start": "04/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Kim",
      "start": "2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "2017",
      "refills": 5,
      "status": "Active"
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
      "temp": "37.0\u00b0C",
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
      "cc": "Severe urticaria flare with angioedema \u2014 3rd ED visit this month, feels like he's going crazy",
      "hpi": "55M with 4-month history of daily hives presenting with 3rd ED visit this month. Large wheals on trunk and extremities with lip angioedema. Failed cetirizine 10mg, fexofenadine 180mg, and hydroxyzine 25mg QHS. Reports hives worsen with physical pressure at work (tool belt, hard hat) and during periods of high stress. Currently going through contentious divorce \u2014 not sleeping, drinking more to cope. Says to nurse: \"I feel like I'm losing my mind \u2014 the itching never stops.\" TSH found to be low with high anti-TPO \u2014 autoimmune thyroiditis may be driving CSU.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/10/2024",
      "panel": "CSU Monitoring and Cyclosporine Candidacy",
      "results": [
        {
          "test": "UAS7 (Urticaria Activity Score \u2014 7 days)",
          "value": "16",
          "unit": "points",
          "ref": "<7 well-controlled",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "12",
          "unit": "mg/L",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.3",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        },
        {
          "test": "eGFR",
          "value": "62",
          "unit": "mL/min/1.73m\u00b2",
          "ref": ">60",
          "flag": ""
        },
        {
          "test": "CBC \u2014 WBC",
          "value": "7.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11.0",
          "flag": ""
        },
        {
          "test": "Anti-Fc\u03b5RI\u03b1 autoantibodies",
          "value": "Positive (IgG class)",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "ASST (autologous serum skin test)",
          "value": "Positive \u2014 6mm wheal",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "TSH",
          "value": "2.4",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
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
      "Construction foreman \u2014 physical urticaria component (pressure, heat)"
    ],
    [
      "Stress",
      "Going through divorce, custody battle"
    ],
    [
      "Mental health",
      "Not sleeping due to itch \u2014 affecting job performance"
    ],
    [
      "Prior treatment",
      "Failed cetirizine, fexofenadine, hydroxyzine \u2014 still breaking out daily"
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
        "Step-up: sgAH \u2192 updose 4x \u2192 omalizumab \u2192 cyclosporine",
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
      "Chronic spontaneous urticaria \u2014 refractory, autoimmune subtype, partial omalizumab response (correct)",
      "Urticarial vasculitis \u2014 urticaria lasting >24h with bruising; biopsy leukocytoclasia; complement low",
      "Bullous pemphigoid \u2014 urticarial phase precedes blisters; anti-BP180 antibody positive",
      "Mastocytosis \u2014 elevated baseline tryptase; Darier sign positive; urticaria pigmentosa skin lesions",
      "Adult-onset Still disease \u2014 quotidian salmon-colored rash; fever; arthritis; ferritin markedly elevated",
      "Drug-induced urticaria \u2014 review medication list for new additions in timeline"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'recurrent hives' and missing the chronic spontaneous nature with physical triggers, or focusing too heavily on angioedema component",
      "prematureClosure": "May stop at simple urticaria diagnosis without recognizing the refractory chronic spontaneous urticaria requiring specialized management",
      "availabilityBias": "Tendency to attribute to common triggers like food or medication allergies rather than recognizing chronic spontaneous urticaria pattern"
    },
    "coachPrompts": {
      "phase2": "Before you interview this patient, consider the different types of urticaria and their triggers. What specific history would help you distinguish between acute allergic reactions, chronic spontaneous urticaria, and physical urticarias? Think about the timeline and pattern of symptoms.",
      "phase5": "You've identified chronic urticaria with physical components and angioedema. What does the refractory nature to standard antihistamines tell you about next steps? Consider how his occupational and psychosocial stressors might be contributing to the chronicity.",
      "finalDebrief": "This case illustrates chronic spontaneous urticaria (CSU) with physical urticaria components - a complex condition that's often refractory to standard antihistamine doses. Note how the physical triggers, stress, and alcohol consumption all contribute. The key learning is recognizing when standard urticaria treatment fails and considering step-up therapy or specialist referral for conditions like CSU.",
      "final": "Diagnosis: CSU refractory to omalizumab, autoimmune subtype (anti-Fc\u03b5RI\u03b1+, ASST+), step-up evaluation. Key teaching points: (1) Omalizumab partial responders (UAS7 improvement but >7 remaining): options include omalizumab dose escalation to 450mg or 600mg (off-label), or step up to cyclosporine. EAACI guidelines suggest cyclosporine as Step 4 after omalizumab failure. (2) Autoimmune CSU markers (anti-Fc\u03b5RI\u03b1 IgG, positive ASST) predict SLOWER omalizumab response and higher rate of partial response \u2014 expected finding here. Cyclosporine targets T-cell-driven autoimmune mechanism. (3) Cyclosporine monitoring requirements (every 4-8 weeks): BP, renal function (creatinine), CBC, LFTs. Diabetes + hypertension = higher complication risk \u2014 start low dose (2.5-3 mg/kg/day). (4) Maximum cyclosporine duration: 1-2 years due to nephrotoxicity and hypertension. Goal is disease remission \u2014 then taper off. (5) Emerging therapy: ligelizumab (anti-IgE) and other biologics in trials; dupilumab has some evidence in refractory CSU (anti-IL-4/13). Remibrutinib (BTK inhibitor) approved in some regions for CSU."
    }
  },
  "meta": {
    "diagnosis": "Chronic Spontaneous Urticaria \u2014 Inadequately Controlled on Omalizumab; Cyclosporine Step-Up Considered"
  }
};
