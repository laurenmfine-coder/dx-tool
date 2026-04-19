/* emr-data/idiopathic-angioedema-v2.js — Variation: Idiopathic Angioedema */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Thomas Reeves",
  "patientHPI": "My lips are swollen again today - this is the eighth time in two years that different parts of my body have puffed up like this, including my face, hands, feet, and once even my throat. Nobody can figure out what's causing it.",
      "dob": "06/01/1978",
      "age": "48",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-112849",
      "language": "English",
      "race": "White",
      "phone": "(620) 555-3255",
      "email": "thomas.x@email.com",
      "address": "4189 Oak Ave, Columbus, OH 43211",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(617) 555-7012",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "History",
        "8 episodes of angioedema in 2 years — no trigger identified despite extensive workup"
      ],
      [
        "Workup",
        "C4 normal, C1-INH normal, tryptase normal, no ACE inhibitor — truly idiopathic"
      ],
      [
        "Mental health",
        "Anxiety about unpredictable episodes — afraid to travel or be alone"
      ],
      [
        "Career",
        "Sales representative — canceled 3 business trips due to fear of episode away from hospital"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "48yo with recurrent idiopathic angioedema — 8th episode, lip swelling, no trigger identified, extensive workup negative",
        "diagnosis": "Idiopathic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Idiopathic angioedema — 8th episode in 2 years",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "No identifiable trigger despite comprehensive workup",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Normal C4, C1-INH, tryptase — not HAE, not mast cell, not ACE",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Anxiety about unpredictable episodes — career and travel impaired",
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
          "name": "Famotidine",
          "dose": "20mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "138/82",
          "hr": "92",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-304931",
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
              "name": "ANGIOEDEMA WORKUP — ALL NEGATIVE",
              "results": [
                {
                  "test": "C4",
                  "value": "32",
                  "unit": "mg/dL",
                  "range": "16-47",
                  "flag": ""
                },
                {
                  "test": "C1-INH level",
                  "value": "28",
                  "unit": "mg/dL",
                  "range": "21-39",
                  "flag": ""
                },
                {
                  "test": "C1-INH functional",
                  "value": "92",
                  "unit": "%",
                  "range": "68-132",
                  "flag": ""
                },
                {
                  "test": "Tryptase",
                  "value": "5.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "TSH",
                  "value": "2.1",
                  "unit": "mIU/L",
                  "range": "0.4-4.0",
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
          "cc": "48yo with recurrent idiopathic angioedema — 8th episode, lip swelling, no trigger identified, extensive workup negative",
          "hpi": "48M with 8th episode of angioedema in 2 years. Lips today. Prior episodes: face, hands, feet, one laryngeal. Exhaustive workup: C4 normal (not HAE), C1-INH normal, tryptase normal (not mast cell), not on ACE inhibitor, no food/drug trigger identified via diary. This is truly idiopathic angioedema. Responds partially to antihistamines + steroids (suggesting some histamine component but not fully allergic). Patient significantly distressed — canceled travel, afraid to be alone, checking mirror compulsively for swelling.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Observation after laryngeal episode — most concerning presentation",
        "diagnosis": "Idiopathic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Idiopathic angioedema — laryngeal involvement",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Q6H x24h",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "128/78",
          "hr": "86",
          "rr": "18",
          "temp": "36.8°C",
          "spo2": "97%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-965148",
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
          "cc": "Observation after laryngeal episode — most concerning presentation",
          "hpi": "48M admitted after laryngeal angioedema — voice change, mild stridor. Resolved with steroids + antihistamines. This was the episode that prompted A/I referral.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — management of idiopathic recurrent angioedema, prophylaxis options",
        "diagnosis": "Idiopathic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Idiopathic angioedema — confirmed after exhaustive workup",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Prophylaxis needed — omalizumab off-label (evidence for idiopathic angioedema)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Antihistamine prophylaxis — uptitrated cetirizine BID + famotidine BID",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Anxiety management — CBT referral for health anxiety",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Rescue plan for travel — icatibant empiric trial (may work even in non-HAE)",
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
          "frequency": "BID (prophylaxis)",
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
          "name": "Omalizumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q4 weeks (off-label for idiopathic angioedema)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "On-demand rescue (empiric — may help)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "128/78",
          "hr": "78",
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
          "accession": "LAB-707840",
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
          "cc": "A/I consult — management of idiopathic recurrent angioedema, prophylaxis options",
          "hpi": "A/I: 48M with confirmed idiopathic angioedema. Started prophylactic regimen: H1+H2 blockers daily plus omalizumab monthly (off-label but evidence supports use in refractory idiopathic angioedema). Icatibant prescribed as rescue — even though this isn't HAE, bradykinin may play a partial role, and having a self-injectable rescue medication dramatically reduces his anxiety. CBT referral for health anxiety and avoidance behavior.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — 4 months on omalizumab, episode frequency assessment",
        "diagnosis": "Idiopathic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Idiopathic angioedema — episodes reduced from every 3 months to 1 in 4 months on omalizumab",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Anxiety improving — resumed business travel with rescue icatibant in bag",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Antihistamine prophylaxis continuing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Will trial omalizumab for 12 months then reassess",
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
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "PRN (not yet needed)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "126/76",
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
          "accession": "LAB-112136",
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
          "cc": "Follow-up — 4 months on omalizumab, episode frequency assessment",
          "hpi": "48M 4 months on omalizumab. Only 1 mild episode (lip, resolved with oral antihistamine alone — no ER visit). Previously averaging every 3 months with ER visits. Reports much less anxiety — carrying icatibant gives him confidence to travel. Completed 2 business trips without incident. Continue omalizumab 12-month trial, then consider tapering.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Thomas Reeves",
    "dob": "06/01/1978",
    "age": "48",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-112849",
    "language": "English",
    "race": "White",
    "phone": "(505) 555-6150",
    "email": "thomas.x@email.com",
    "address": "8582 Birch Ln, Louisville, KY 40206",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(702) 555-5566",
      "relationship": "Spouse"
    },
    "chiefComplaint": "48yo with recurrent idiopathic angioedema — 8th episode, lip swelling, no trigger identified, extensive workup negative",
    "diagnosis": "Idiopathic Angioedema"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Idiopathic angioedema — 8th episode in 2 years",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No identifiable trigger despite comprehensive workup",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Normal C4, C1-INH, tryptase — not HAE, not mast cell, not ACE",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Anxiety about unpredictable episodes — career and travel impaired",
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
      "name": "Famotidine",
      "dose": "20mg",
      "route": "IV",
      "frequency": "Once",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Methylprednisolone",
      "dose": "125mg",
      "route": "IV",
      "frequency": "Once",
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
      "bp": "138/82",
      "hr": "92",
      "rr": "16",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "4/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "48yo with recurrent idiopathic angioedema — 8th episode, lip swelling, no trigger identified, extensive workup negative",
      "hpi": "48M with 8th episode of angioedema in 2 years. Lips today. Prior episodes: face, hands, feet, one laryngeal. Exhaustive workup: C4 normal (not HAE), C1-INH normal, tryptase normal (not mast cell), not on ACE inhibitor, no food/drug trigger identified via diary. This is truly idiopathic angioedema. Responds partially to antihistamines + steroids (suggesting some histamine component but not fully allergic). Patient significantly distressed — canceled travel, afraid to be alone, checking mirror compulsively for swelling.",
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
      "accession": "LAB-304931",
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
          "name": "ANGIOEDEMA WORKUP — ALL NEGATIVE",
          "results": [
            {
              "test": "C4",
              "value": "32",
              "unit": "mg/dL",
              "range": "16-47",
              "flag": ""
            },
            {
              "test": "C1-INH level",
              "value": "28",
              "unit": "mg/dL",
              "range": "21-39",
              "flag": ""
            },
            {
              "test": "C1-INH functional",
              "value": "92",
              "unit": "%",
              "range": "68-132",
              "flag": ""
            },
            {
              "test": "Tryptase",
              "value": "5.8",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": ""
            },
            {
              "test": "TSH",
              "value": "2.1",
              "unit": "mIU/L",
              "range": "0.4-4.0",
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
      "8 episodes of angioedema in 2 years — no trigger identified despite extensive workup"
    ],
    [
      "Workup",
      "C4 normal, C1-INH normal, tryptase normal, no ACE inhibitor — truly idiopathic"
    ],
    [
      "Mental health",
      "Anxiety about unpredictable episodes — afraid to travel or be alone"
    ],
    [
      "Career",
      "Sales representative — canceled 3 business trips due to fear of episode away from hospital"
    ]
  ]
,
  "references": [
  {
    "id": "REF-AE-004",
    "citation": "Bernstein JA, Moellman J. Emerging concepts in the diagnosis and treatment of patients with undifferentiated angioedema. Int J Emerg Med. 2012;5:39.",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3518246/",
    "doi": "10.1186/1865-1380-5-39",
    "pmid": "23131076",
    "access": "Open Access (CC BY)",
    "validates": [
      "Differential diagnosis of angioedema: allergic vs bradykinin-mediated vs idiopathic",
      "C4 screening to distinguish HAE from other causes",
      "C1q levels distinguish acquired (low) from hereditary (normal) C1-INH deficiency",
      "Acquired C1-INH deficiency association with lymphoproliferative disorders (MGUS, lymphoma)",
      "Anti-C1-INH autoantibodies in acquired form"
    ]
  }
],
  "guided": {
    "supported": true,
    "patientPersona": "Thomas Reeves appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did 48yo with recurrent idiopathic angioedema \u2014 8th episode, lip swelling, no trigger identified, extensive workup negative start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started 48M with 8th episode of angioedema in 2 years.'",
        "character": "'It's 48yo with recurrent idiopathic angioedema \u2014 8th episode, lip swelling, no trigger identified, extensive workup negative \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Diphenhydramine; Famotidine; Methylprednisolone.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Non-contributory",
        "social": "History: 8 episodes of angioedema in 2 years \u2014 no trigger identified despite extensive workup  Workup: C4 normal, C1-INH normal, tryptase normal, no ACE inhibitor \u2014 truly idiopathic  Mental health: Anxiety about unpredictable episodes \u2014 afraid to travel or be alone  Career: Sales representative \u2014 canceled 3 business trips due to fear of episode away from hospital"
    },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Thomas Reeves's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
