/* emr-data/mastocytosis-v2.js — Variation: Mast Cell Activation Syndrome */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Chelsea Whitfield",
      "dob": "01/07/1992",
      "age": "34",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-658590",
      "language": "English",
      "race": "White",
      "phone": "(956) 381-2919",
      "email": "chelsea.x@email.com",
      "address": "8800 Oak St, Weston, FL 33326",
      "insurance": "Cigna PPO",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(644) 911-9503",
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
        "3-year diagnostic odyssey — 8 specialists, told anxiety"
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
        "First time tryptase drawn during episode — elevated"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "34yo with episode of flushing, tachycardia 140, abdominal pain, near-syncope during exercise — 12th similar episode in 3 years, always told \"anxiety\"",
        "diagnosis": "Mast Cell Activation Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Recurrent episodic symptoms — 12 episodes, 8 specialists, all said anxiety",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Tryptase FINALLY drawn during episode — 18.4 (elevated)",
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
          "description": "Not anxiety — validated by objective lab finding",
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
          "temp": "37.2°C",
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
          "cc": "34yo with episode of flushing, tachycardia 140, abdominal pain, near-syncope during exercise — 12th similar episode in 3 years, always told \"anxiety\"",
          "hpi": "34F school teacher, 12th episode in 3 years. Flushing, HR 142, abdominal cramping, near-syncope during exercise. 8 prior specialists: cardiology (normal), GI (normal), endocrine (normal). Three told her \"anxiety.\" Patient frustrated and tearful. TODAY: first time anyone drew tryptase during episode — 18.4 (ELEVATED). This is the diagnostic breakthrough. Partial response to H1+H2 blockers supports mast cell mechanism.",
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
          "description": "MCAS — collecting 24h mediators",
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
        "chiefComplaint": "A/I consult — confirm MCAS, optimize therapy, validate 3 years of suffering",
        "diagnosis": "Mast Cell Activation Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MCAS — meets consensus criteria",
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
          "description": "24h mediators elevated — N-methylhistamine 892, PGD2 412",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "KIT D816V negative — not systemic mastocytosis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "3-year diagnostic delay — psychological harm from invalidation",
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
          "cc": "A/I consult — confirm MCAS, optimize therapy, validate 3 years of suffering",
          "hpi": "A/I: MCAS confirmed. Started quadruple mediator-directed therapy. Trigger avoidance counseling. Most importantly: VALIDATED. \"This is a real immunologic condition, not anxiety.\" Connected to MCAS support group.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "MCAS follow-up — 3 months on therapy, dramatic improvement",
        "diagnosis": "Mast Cell Activation Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MCAS — episodes reduced from 2-3/month to 1 every 6 weeks",
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
          "description": "Alcohol avoidance — very effective",
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
          "cc": "MCAS follow-up — 3 months on therapy, dramatic improvement",
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
    "phone": "(956) 381-2919",
    "email": "chelsea.x@email.com",
    "address": "8800 Oak St, Weston, FL 33326",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(644) 911-9503",
      "relationship": "Spouse"
    },
    "chiefComplaint": "34yo with episode of flushing, tachycardia 140, abdominal pain, near-syncope during exercise — 12th similar episode in 3 years, always told \"anxiety\"",
    "diagnosis": "Mast Cell Activation Syndrome"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Recurrent episodic symptoms — 12 episodes, 8 specialists, all said anxiety",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Tryptase FINALLY drawn during episode — 18.4 (elevated)",
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
      "description": "Not anxiety — validated by objective lab finding",
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
      "temp": "37.2°C",
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
      "cc": "34yo with episode of flushing, tachycardia 140, abdominal pain, near-syncope during exercise — 12th similar episode in 3 years, always told \"anxiety\"",
      "hpi": "34F school teacher, 12th episode in 3 years. Flushing, HR 142, abdominal cramping, near-syncope during exercise. 8 prior specialists: cardiology (normal), GI (normal), endocrine (normal). Three told her \"anxiety.\" Patient frustrated and tearful. TODAY: first time anyone drew tryptase during episode — 18.4 (ELEVATED). This is the diagnostic breakthrough. Partial response to H1+H2 blockers supports mast cell mechanism.",
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
      "3-year diagnostic odyssey — 8 specialists, told anxiety"
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
      "First time tryptase drawn during episode — elevated"
    ]
  ]
,"references":[
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
      "Tryptase formula: acute ≥ (1.2 × baseline) + 2",
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
]};
