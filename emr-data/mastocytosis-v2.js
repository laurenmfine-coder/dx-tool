
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Chelsea Whitfield",
      "patientHPI": "This keeps happening to me during exercise - my face gets all red and flushed, my heart starts racing over 140, I get terrible stomach cramps and feel like I'm going to pass out. I've seen eight different doctors in three years and they all say my tests are normal, but this is my twelfth episode.",
      "dob": "01/07/1992",
      "age": "34",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-658590",
      "language": "English",
      "race": "White",
      "phone": "(412) 555-8496",
      "email": "chelsea.x@email.com",
      "address": "9880 Iris Blvd, Memphis, TN 38104",
      "insurance": "Cigna PPO",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(314) 555-5298",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Morphine",
        "reaction": "Flushing/hives",
        "severity": "Moderate",
        "type": "Drug"
      },
      {
        "allergen": "NSAIDs",
        "reaction": "Flushing",
        "severity": "Moderate",
        "type": "Drug"
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "History",
        "3-year diagnostic odyssey \u2014 8 specialists, told anxiety"
      ],
      [
        "Symptoms",
        "Episodic flushing, tachycardia, abdominal cramping, near-syncope"
      ],
      [
        "Triggers",
        "Heat, exercise, alcohol, stress, menstruation"
      ],
      [
        "Frustration",
        "\"Everyone thinks I'm making this up\""
      ],
      [
        "Validation",
        "First time tryptase drawn during episode \u2014 elevated"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "34yo with episode of flushing, tachycardia 140, abdominal pain, near-syncope during exercise \u2014 12th similar episode in 3 years, always told \"anxiety\"",
        "diagnosis": "Mast Cell Activation Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent episodic symptoms \u2014 12 episodes, 8 specialists, all said anxiety",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Tryptase FINALLY drawn during episode \u2014 18.4 (elevated)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Responds to H1+H2 blockers (supports mast cell mechanism)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Not anxiety \u2014 validated by objective lab finding",
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
          "frequency": "Partial response",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "IV",
          "frequency": "Additional improvement",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "NS bolus",
          "dose": "1L",
          "route": "IV",
          "frequency": "For orthostatic hypotension",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "92/58",
          "hr": "142",
          "rr": "22",
          "temp": "37.2\u00b0C",
          "spo2": "98%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-524554",
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
            },
            {
              "name": "MAST CELL",
              "results": [
                {
                  "test": "Tryptase (during episode)",
                  "value": "18.4",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": "H"
                },
                {
                  "test": "Chromogranin A",
                  "value": "Normal",
                  "unit": "",
                  "range": "",
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
          "cc": "34yo with episode of flushing, tachycardia 140, abdominal pain, near-syncope during exercise \u2014 12th similar episode in 3 years, always told \"anxiety\"",
          "hpi": "34F school teacher, 12th episode in 3 years. Flushing, HR 142, abdominal cramping, near-syncope during exercise. 8 prior specialists: cardiology (normal), GI (normal), endocrine (normal). Three told her \"anxiety.\" Patient frustrated and tearful. TODAY: first time anyone drew tryptase during episode \u2014 18.4 (ELEVATED). This is the diagnostic breakthrough. Partial response to H1+H2 blockers supports mast cell mechanism.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief admission for mediator collection during episode",
        "diagnosis": "Mast Cell Activation Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MCAS \u2014 collecting 24h mediators",
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
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "112/68",
          "hr": "82",
          "rr": "16",
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
          "accession": "LAB-299528",
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
          "cc": "Brief admission for mediator collection during episode",
          "hpi": "Admitted for 24h urine collection during symptomatic window.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 confirm MCAS, optimize therapy, validate 3 years of suffering",
        "diagnosis": "Mast Cell Activation Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MCAS \u2014 meets consensus criteria",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Acute tryptase 18.4, baseline 6.2 (>20% + 2 elevation)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "24h mediators elevated \u2014 N-methylhistamine 892, PGD2 412",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "KIT D816V negative \u2014 not systemic mastocytosis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "3-year diagnostic delay \u2014 psychological harm from invalidation",
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
          "frequency": "BID",
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
          "name": "Cromolyn sodium",
          "dose": "200mg",
          "route": "PO",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Montelukast",
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
          "bp": "118/72",
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
          "accession": "LAB-423110",
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
            },
            {
              "name": "MCAS CONFIRMATION",
              "results": [
                {
                  "test": "Tryptase acute",
                  "value": "18.4",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": "H"
                },
                {
                  "test": "Tryptase baseline",
                  "value": "6.2",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "24h N-methylhistamine",
                  "value": "892",
                  "unit": "mcg/24h",
                  "range": "<200",
                  "flag": "H"
                },
                {
                  "test": "PGD2",
                  "value": "412",
                  "unit": "pg/mL",
                  "range": "<150",
                  "flag": "H"
                },
                {
                  "test": "KIT D816V",
                  "value": "Not detected",
                  "unit": "",
                  "range": "",
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
          "cc": "A/I consult \u2014 confirm MCAS, optimize therapy, validate 3 years of suffering",
          "hpi": "A/I: MCAS confirmed. Started quadruple mediator-directed therapy. Trigger avoidance counseling. Most importantly: VALIDATED. \"This is a real immunologic condition, not anxiety.\" Connected to MCAS support group.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "MCAS follow-up \u2014 3 months on therapy, dramatic improvement",
        "diagnosis": "Mast Cell Activation Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MCAS \u2014 episodes reduced from 2-3/month to 1 every 6 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Teaching full-time again",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Remaining trigger: menstruation",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Alcohol avoidance \u2014 very effective",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Processing psychological harm from 3 years of invalidation",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "BID",
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
          "name": "Cromolyn sodium",
          "dose": "200mg",
          "route": "PO",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Montelukast",
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
          "bp": "116/72",
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
          "accession": "LAB-350780",
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
          "cc": "MCAS follow-up \u2014 3 months on therapy, dramatic improvement",
          "hpi": "34F dramatic improvement. Episodes rare, teaching without interruptions. \"I finally feel like myself again. And I finally feel believed.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Chelsea Whitfield",
    "dob": "01/07/1992",
    "age": "34",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-658590",
    "language": "English",
    "race": "White",
    "phone": "(704) 555-9019",
    "email": "chelsea.x@email.com",
    "address": "5800 N Kedzie Blvd, Albuquerque, NM 87103",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(617) 555-6134",
      "relationship": "Spouse"
    },
    "chiefComplaint": "34yo with episode of flushing, tachycardia 140, abdominal pain, near-syncope during exercise \u2014 12th similar episode in 3 years, always told \"anxiety\"",
    "diagnosis": "Mast Cell Activation Syndrome"
  },
  "problems": [
    {
      "problem": "Systemic mastocytosis \u2014 suspected, workup initiated",
      "icd": "C96.21",
      "onset": "2024",
      "status": "Active",
      "notes": "Elena Vargas, 42F \u2014 brown-yellow skin lesions (Darier sign positive), recurrent flushing, anaphylaxis x2. Baseline tryptase 42 ng/mL."
    },
    {
      "problem": "Elevated baseline tryptase \u2014 42 ng/mL, >20 is red flag",
      "icd": "C96.21",
      "onset": "2024",
      "status": "Active",
      "notes": "Baseline tryptase >20 ng/mL warrants bone marrow biopsy \u2014 differentiates cutaneous from systemic mastocytosis."
    },
    {
      "problem": "Recurrent anaphylaxis \u2014 Hymenoptera venom and exercise triggers",
      "icd": "T78.2XXA",
      "onset": "2023",
      "status": "Active",
      "notes": "Two anaphylaxis episodes \u2014 one after bee sting, one exercise-triggered. Mastocytosis amplifies anaphylaxis severity."
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg BID + famotidine 40mg BID \u2014 H1/H2 mast cell mediator suppression",
      "sig": "Dual antihistamine \u2014 H1 and H2 blockade reduces histamine-mediated symptoms (flushing, pruritus, GI cramps).",
      "prescriber": "Allergy/Hematology",
      "start": "2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Cromolyn sodium 200mg PO QID \u2014 mast cell stabilizer",
      "sig": "Oral mast cell stabilizer \u2014 reduces GI mast cell mediator release (diarrhea, cramping). Take 15-30 min before meals.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "EpiPen 0.3mg x2 \u2014 mandatory for mastocytosis with anaphylaxis history",
      "sig": "Mastocytosis increases anaphylaxis severity \u2014 any systemic reaction is potentially life-threatening. EpiPen mandatory at all times.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Venom immunotherapy (VIT) \u2014 bee venom",
      "sig": "VIT is strongly recommended in mastocytosis with Hymenoptera-triggered anaphylaxis \u2014 reduces fatal anaphylaxis risk. Lifetime VIT often recommended.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 starting"
    }
  ],
  "allergies": [
    {
      "allergen": "Morphine",
      "reaction": "Flushing/hives",
      "severity": "Moderate",
      "type": "Drug"
    },
    {
      "allergen": "NSAIDs",
      "reaction": "Flushing",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "92/58",
      "hr": "142",
      "rr": "22",
      "temp": "37.2\u00b0C",
      "spo2": "98%",
      "pain": "7/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "34yo with episode of flushing, tachycardia 140, abdominal pain, near-syncope during exercise \u2014 12th similar episode in 3 years, always told \"anxiety\"",
      "hpi": "34F school teacher, 12th episode in 3 years. Flushing, HR 142, abdominal cramping, near-syncope during exercise. 8 prior specialists: cardiology (normal), GI (normal), endocrine (normal). Three told her \"anxiety.\" Patient frustrated and tearful. TODAY: first time anyone drew tryptase during episode \u2014 18.4 (ELEVATED). This is the diagnostic breakthrough. Partial response to H1+H2 blockers supports mast cell mechanism.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Mastocytosis Workup",
      "results": [
        {
          "test": "Baseline serum tryptase",
          "value": "42",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "24h urine histamine metabolites",
          "value": "Elevated",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "KIT D816V mutation (peripheral blood)",
          "value": "Detected",
          "unit": "",
          "ref": "Not detected",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 WBC",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "ALP",
          "value": "142",
          "unit": "U/L",
          "ref": "44-147",
          "flag": ""
        },
        {
          "test": "Bone marrow biopsy",
          "value": "Pending \u2014 scheduled",
          "unit": "",
          "ref": "",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "Bone Scan",
      "indication": "Systemic mastocytosis workup \u2014 bone involvement",
      "findings": "No lytic lesions. Mildly increased uptake diffusely \u2014 mild osteoporosis pattern.",
      "impression": "No destructive bone lesions. Osteoporosis pattern consistent with mastocytosis-associated bone disease."
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "History",
      "3-year diagnostic odyssey \u2014 8 specialists, told anxiety"
    ],
    [
      "Symptoms",
      "Episodic flushing, tachycardia, abdominal cramping, near-syncope"
    ],
    [
      "Triggers",
      "Heat, exercise, alcohol, stress, menstruation"
    ],
    [
      "Frustration",
      "\"Everyone thinks I'm making this up\""
    ],
    [
      "Validation",
      "First time tryptase drawn during episode \u2014 elevated"
    ]
  ],
  "references": [
    {
      "id": "MCAS-Consensus-2019",
      "title": "Mast cell activation syndrome: clinicopathological approach",
      "authors": "Weiler CR, Austen KF, Akin C, et al.",
      "journal": "Ann Allergy Asthma Immunol",
      "year": 2019,
      "doi": "10.1016/j.anai.2019.09.025",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6920833/",
      "openAccess": true,
      "validates": [
        "MCAS consensus criteria",
        "Tryptase formula: acute \u2265 (1.2 \u00d7 baseline) + 2",
        "24h urine mediators",
        "KIT D816V for SM vs MCAS",
        "Quadruple therapy"
      ]
    },
    {
      "id": "Valent-MCD-2012",
      "title": "Definitions, criteria and classification of mast cell disorders",
      "authors": "Valent P, Akin C, Arock M, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2012,
      "doi": "10.1016/j.jaci.2012.09.002",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3742415/",
      "openAccess": true,
      "validates": [
        "SM classification",
        "WHO criteria",
        "KIT D816V",
        "Baseline tryptase >20 suggests SM"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Chelsea is initially guarded and frustrated, having been dismissed by multiple specialists who attributed her symptoms to anxiety. She becomes more forthcoming when she senses the provider is taking her seriously, showing both relief and residual distress from her 3-year diagnostic odyssey.",
    "interviewQuestions": [
      "Can you describe exactly what happens during these episodes?",
      "What does the flushing look like and where does it occur?",
      "Tell me about the abdominal pain - where is it and what does it feel like?",
      "What seems to trigger these episodes?",
      "How long do the episodes typically last?",
      "What happens to your heart rate and blood pressure during episodes?",
      "Have you noticed any skin changes or hives during episodes?",
      "Do certain foods, medications, or situations make this worse?",
      "What provides relief when you're having an episode?",
      "Have you had any laboratory tests drawn during an actual episode?",
      "Tell me about your experience with the previous specialists you've seen",
      "Have you noticed any patterns with your menstrual cycle?",
      "Do you have any known drug allergies or reactions?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you clarify what you mean? I want to make sure I give you accurate information since so many doctors have dismissed this.",
      "onset": "The first episode was about 3 years ago during a hot yoga class. I thought maybe I just overheated, but then it kept happening in different situations.",
      "character": "It starts with this intense flushing - my face and chest turn bright red and feel like they're burning. Then my heart starts racing and I get severe cramping in my abdomen.",
      "location": "The flushing is mainly my face, neck, and upper chest. The abdominal pain is crampy and all over my belly, not in one specific spot.",
      "severity": "During episodes it's an 8 or 9 out of 10. I feel like I'm going to pass out and sometimes I have to sit down immediately. Between episodes I'm completely fine.",
      "aggravating": "Heat definitely triggers it - hot weather, hot showers, exercise. Also alcohol, especially wine. Stress makes it worse, and I've noticed it's worse around my period.",
      "relieving": "The ER gave me Benadryl and Pepcid once and it actually helped, which surprised everyone. Cold compresses help a little with the flushing.",
      "associated": "During episodes I get lightheaded, sometimes nauseous, my heart pounds, and I feel this sense of doom. Sometimes I get diarrhea afterward.",
      "denies": "No chest pain, no trouble breathing, no hives or rash that I can see. No fevers between episodes.",
      "history": "This is my 12th episode in 3 years. I've seen 8 different specialists - cardiology, GI, endocrine, even psychiatry. Everyone says it's anxiety but this doesn't feel like anxiety.",
      "medications": "Diphenhydramine; Famotidine; NS bolus",
      "allergies": "Morphine, NSAIDs",
      "family": "Nothing similar in my family. No one has allergies or episodes like this.",
      "social": "I'm a high school teacher, don't smoke, rarely drink now because it triggers episodes. This has really affected my work - I've had to leave class several times."
    },
    "examManeuvers": [
      "Inspect skin for flushing, urticaria, or mastocytosis lesions",
      "Palpate for lymphadenopathy",
      "Abdominal examination for hepatosplenomegaly",
      "Cardiac examination for murmurs or gallops",
      "Blood pressure and orthostatic vital signs",
      "Dermatographism testing",
      "Examination of conjunctivae and mucous membranes",
      "Palpation for masses or organomegaly",
      "Assessment of volume status and perfusion"
    ],
    "examFindings": {
      "Inspect skin for flushing, urticaria, or mastocytosis lesions": "Persistent erythema of face, neck, and upper chest; no visible urticaria currently; no obvious mastocytosis lesions",
      "Palpate for lymphadenopathy": "No palpable lymphadenopathy in cervical, axillary, or inguinal regions",
      "Abdominal examination for hepatosplenomegaly": "Soft abdomen with mild diffuse tenderness; no hepatosplenomegaly or masses palpated",
      "Cardiac examination for murmurs or gallops": "Tachycardic regular rhythm, no murmurs, gallops, or rubs; PMI not displaced",
      "Blood pressure and orthostatic vital signs": "Hypotensive at 92/58, HR 142; mild orthostatic changes present",
      "Dermatographism testing": "Positive dermatographism - raised wheal appears within 2-3 minutes of firm stroking",
      "Examination of conjunctivae and mucous membranes": "Conjunctivae slightly injected; mucous membranes appear normal",
      "Palpation for masses or organomegaly": "No palpable masses; liver and spleen not enlarged",
      "Assessment of volume status and perfusion": "Appears mildly volume depleted; capillary refill 2-3 seconds; skin warm despite hypotension"
    },
    "ddxTargets": [
      "Systemic mastocytosis \u2014 elevated tryptase, Darier sign, KIT D816V (correct)",
      "Cutaneous mastocytosis only \u2014 bone marrow biopsy will differentiate; tryptase >20 suggests systemic",
      "Carcinoid tumor \u2014 flushing, diarrhea, but tryptase not elevated; urine 5-HIAA distinguishes",
      "Pheochromocytoma \u2014 episodic hypertension, sweating, headache triad; different lab pattern",
      "Mast cell activation syndrome (MCAS) \u2014 normal or mildly elevated tryptase; no skin lesions; KIT neg",
      "Hereditary alpha-tryptasemia \u2014 elevated tryptase from extra TPSAB1 copies; no mast cell infiltration"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'anxiety' diagnosis given multiple prior specialists reached this conclusion, potentially missing organic pathology",
      "prematureClosure": "May stop investigation after normal basic workup, failing to consider rare disorders or obtain episode-specific testing",
      "availabilityBias": "Anxiety and panic disorders are common in young women, making it easy to dismiss episodic symptoms without considering mast cell disorders"
    },
    "coachPrompts": {
      "phase2": "This patient has had 12 similar episodes over 3 years with multiple specialists attributing symptoms to anxiety. What red flags in the presentation suggest you should consider organic causes? Think about the pattern, triggers, and objective findings that distinguish this from psychiatric conditions.",
      "phase5": "You've identified episodic flushing, tachycardia, and hypotension with positive dermatographism. The patient responds to H1 and H2 blockers. What does this suggest about the underlying pathophysiology? Consider what mediators could cause this constellation of findings.",
      "finalDebrief": "This case illustrates mast cell activation syndrome, often misdiagnosed as anxiety. Key teaching points: the importance of obtaining tryptase levels during episodes, recognizing that response to antihistamines suggests mast cell degranulation, and understanding how diagnostic odysseys affect patient trust. What anchoring biases contributed to the delayed diagnosis?",
      "final": "Diagnosis: systemic mastocytosis \u2014 workup in progress. Key learning: (1) Mastocytosis diagnosis: skin biopsy of urticaria pigmentosa lesions shows mast cell infiltration. Darier sign (stroking a lesion \u2192 urticaria/whealing from mechanical mast cell degranulation) is pathognomonic. Systemic mastocytosis requires bone marrow biopsy \u2014 criteria include dense mast cell aggregates (>15 cells/aggregate) on biopsy AND KIT D816V mutation + other minor criteria. (2) Baseline tryptase significance: tryptase >20 ng/mL (outside of an acute allergic reaction) indicates increased mast cell burden. This is the key flag for systemic mastocytosis. During acute anaphylaxis, tryptase rises acutely \u2014 baseline (drawn 24h+ after reaction) reflects constitutive mast cell load. (3) Mastocytosis + anaphylaxis: mastocytosis patients have dramatically amplified anaphylaxis \u2014 even minor triggers cause severe systemic reactions. Hymenoptera venom is the most dangerous trigger. Venom immunotherapy is recommended lifelong in systemic mastocytosis with venom-triggered anaphylaxis. (4) KIT D816V mutation: present in >90% of systemic mastocytosis \u2014 targetable with avapritinib (Blueprint Medicines \u2014 FDA approved for ISM with symptom management). (5) Osteoporosis: mast cells produce heparin and histamine which activate osteoclasts \u2192 bone loss. DEXA scan at diagnosis. Bisphosphonates if osteoporosis confirmed."
    }
  },
  "meta": {
    "diagnosis": "Systemic Mastocytosis \u2014 Urticaria Pigmentosa, Elevated Baseline Tryptase, Bone Marrow Biopsy Required",
    "caseId": "mastocytosis-v2"
  }
};
