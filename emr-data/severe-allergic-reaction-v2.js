/* emr-data/severe-allergic-reaction-v2.js — Variation: Severe Allergic Reaction */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Patricia Nguyen",
      "patientHPI": "Within a few minutes of getting the dye for my CT scan, I broke out in hives all over my body and my face started swelling up - I was getting scared because it was hard to breathe.",
      "dob": "01/09/1961",
      "age": "65",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-851160",
      "language": "Vietnamese",
      "race": "Asian",
      "phone": "(404) 555-8292",
      "email": "patricia.nguyen@email.com",
      "address": "9111 Juniper Dr, Columbus, OH 43203",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Michael Nguyen",
        "phone": "(313) 555-6236",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Contrast dye",
        "reaction": "Anaphylactoid",
        "severity": "Severe",
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
        "Language",
        "Vietnamese — limited English"
      ],
      [
        "Comorbidity",
        "CKD stage 3b, diabetes"
      ],
      [
        "Context",
        "Needed CT with contrast for pulmonary embolism workup — reacted to contrast"
      ],
      [
        "Prior",
        "Had contrast reaction 10 years ago — no premedication protocol given today"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "65yo with anaphylactoid reaction to IV contrast during CT PE study — no premedication given despite documented prior reaction",
        "diagnosis": "Severe Allergic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Contrast anaphylactoid reaction",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Prior contrast reaction documented in chart — premedication protocol NOT followed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "CKD stage 3b — contrast also nephrotoxic",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Diabetes type 2",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Language barrier — Vietnamese interpreter needed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Patient safety event — medication error",
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
          "name": "Diphenhydramine",
          "dose": "50mg",
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
          "bp": "86/52",
          "hr": "118",
          "rr": "24",
          "temp": "36.8°C",
          "spo2": "92%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-705281",
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
                  "value": "38",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "2.1",
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
              "name": "REACTION MARKERS",
              "results": [
                {
                  "test": "Tryptase",
                  "value": "22",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": "H"
                },
                {
                  "test": "Creatinine (baseline)",
                  "value": "1.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
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
          "cc": "65yo with anaphylactoid reaction to IV contrast during CT PE study — no premedication given despite documented prior reaction",
          "hpi": "65F with CKD 3b and DM2 sent for CT PE study. Prior contrast reaction documented in chart from 10 years ago. Premedication protocol (prednisone 50mg at 13h, 7h, 1h + diphenhydramine 50mg at 1h) was NOT given — ordering physician did not check allergy list. Within 5 min of iohexol injection: diffuse urticaria, facial angioedema, hypotension, bronchospasm. Patient safety event filed. Vietnamese interpreter called — patient very frightened, cannot communicate with staff.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for contrast reaction observation + AKI monitoring (contrast + baseline CKD)",
        "diagnosis": "Severe Allergic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Contrast anaphylactoid reaction — resolved",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "AKI on CKD — creatinine rising (2.1 from baseline 1.8)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Patient safety event — premedication protocol not followed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "PE still needs to be ruled out — will need V/Q scan instead of CT",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "IV Fluids",
          "dose": "NS",
          "route": "IV",
          "frequency": "150mL/hr (renal protection)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Prednisone",
          "dose": "50mg",
          "route": "PO",
          "frequency": "Q12H x24h",
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
          "bp": "108/68",
          "hr": "82",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-516254",
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
          "cc": "Admitted for contrast reaction observation + AKI monitoring (contrast + baseline CKD)",
          "hpi": "65F admitted after contrast reaction. Cr rising to 2.1 — aggressive hydration. V/Q scan ordered to evaluate PE (no contrast needed). Patient safety report filed — root cause analysis initiated. Vietnamese interpreter present for all discussions. Daughter (English-speaking) arrived.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — formalize contrast allergy protocol, premedication regimen for any future contrast need",
        "diagnosis": "Severe Allergic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Contrast anaphylactoid reaction — NON-IgE mediated (direct mast cell activation)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Future contrast protocol: MUST premedicate (prednisone 13h/7h/1h + diphenhydramine 1h before)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "CKD — limits contrast use regardless",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "EMR allergy field needs standardized premedication instructions",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Distinction: anaphylactoid (non-IgE) vs true allergy (IgE) — both dangerous but mechanism differs",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Premedication protocol documented",
          "dose": "Prednisone 50mg at -13h, -7h, -1h + Diphenhydramine 50mg at -1h",
          "route": "PO",
          "frequency": "Before ANY future contrast",
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
          "accession": "LAB-321806",
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
          "cc": "A/I consult — formalize contrast allergy protocol, premedication regimen for any future contrast need",
          "hpi": "A/I consult: 65F with contrast anaphylactoid reaction. This is direct mast cell degranulation (non-IgE) — premedication reduces risk from 35% to <1% on re-exposure. Formalized protocol entered into EMR with hard stop alert. Also recommended: if contrast absolutely necessary, use low-osmolar non-ionic agent (iohexol or iopamidol) at lowest volume. Consider gadolinium-based alternatives when possible. KEY SYSTEM ISSUE: allergy was in the chart — the process failure was human, not data. Recommended adding pharmacist hard-stop verification for contrast orders in patients with documented reactions.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — AKI resolved, contrast protocol in place, system improvement update",
        "diagnosis": "Severe Allergic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Contrast allergy — premedication protocol permanently in EMR with hard stop alert",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "AKI resolved — Cr back to baseline 1.8",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "PE ruled out by V/Q scan",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Patient safety investigation complete — new pharmacy hard-stop implemented",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Metformin",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "BID (restarted after Cr stabilized)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Lisinopril",
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
          "bp": "132/78",
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
          "accession": "LAB-331478",
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
          "cc": "Follow-up — AKI resolved, contrast protocol in place, system improvement update",
          "hpi": "65F returns 4 weeks post-contrast reaction. Cr back to baseline 1.8. PE ruled out. Hospital implemented pharmacy hard-stop for contrast orders in patients with documented reactions — A/I recommendation adopted. Patient provided with Vietnamese-language card listing contrast allergy and premedication requirements to carry in wallet.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Patricia Nguyen",
    "dob": "01/09/1961",
    "age": "65",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-851160",
    "language": "Vietnamese",
    "race": "Asian",
    "phone": "(704) 555-6692",
    "email": "patricia.nguyen@email.com",
    "address": "6023 Birch Ln, Indianapolis, IN 46203",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Nguyen",
      "phone": "(713) 555-2063",
      "relationship": "Spouse"
    },
    "chiefComplaint": "65yo with anaphylactoid reaction to IV contrast during CT PE study — no premedication given despite documented prior reaction",
    "diagnosis": "Severe Allergic Reaction"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Contrast anaphylactoid reaction",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Prior contrast reaction documented in chart — premedication protocol NOT followed",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "CKD stage 3b — contrast also nephrotoxic",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Diabetes type 2",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Language barrier — Vietnamese interpreter needed",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-6",
      "description": "Patient safety event — medication error",
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
      "name": "Diphenhydramine",
      "dose": "50mg",
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
      "allergen": "Contrast dye",
      "reaction": "Anaphylactoid",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "86/52",
      "hr": "118",
      "rr": "24",
      "temp": "36.8°C",
      "spo2": "92%",
      "pain": "7/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "65yo with anaphylactoid reaction to IV contrast during CT PE study — no premedication given despite documented prior reaction",
      "hpi": "65F with CKD 3b and DM2 sent for CT PE study. Prior contrast reaction documented in chart from 10 years ago. Premedication protocol (prednisone 50mg at 13h, 7h, 1h + diphenhydramine 50mg at 1h) was NOT given — ordering physician did not check allergy list. Within 5 min of iohexol injection: diffuse urticaria, facial angioedema, hypotension, bronchospasm. Patient safety event filed. Vietnamese interpreter called — patient very frightened, cannot communicate with staff.",
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
      "accession": "LAB-705281",
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
              "value": "38",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "2.1",
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
          "name": "REACTION MARKERS",
          "results": [
            {
              "test": "Tryptase",
              "value": "22",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": "H"
            },
            {
              "test": "Creatinine (baseline)",
              "value": "1.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Language",
      "Vietnamese — limited English"
    ],
    [
      "Comorbidity",
      "CKD stage 3b, diabetes"
    ],
    [
      "Context",
      "Needed CT with contrast for pulmonary embolism workup — reacted to contrast"
    ],
    [
      "Prior",
      "Had contrast reaction 10 years ago — no premedication protocol given today"
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
      "id": "ACR-Contrast-2024",
      "title": "ACR Manual on Contrast Media",
      "authors": "ACR Committee on Drugs and Contrast Media.",
      "journal": "ACR Manual",
      "year": 2024,
      "doi": "",
      "url": "https://www.acr.org/Clinical-Resources/Contrast-Manual",
      "openAccess": true,
      "validates": [
        "Premedication: prednisone -13h/-7h/-1h + diphenhydramine -1h",
        "Anaphylactoid = non-IgE",
        "Reduces recurrence 35% → <1%"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Patricia appears anxious and confused, speaking limited English with obvious distress from her recent frightening reaction. She keeps asking for a Vietnamese interpreter and seems hesitant to provide details without proper translation support. Her affect shows residual fear from the contrast reaction and concern about what happened during the procedure.",
    "interviewQuestions": [
      "Can you tell me what happened during your CT scan today?",
      "Have you ever had a reaction to contrast dye before?",
      "What symptoms did you experience during or after the contrast injection?",
      "Did anyone give you any medications before the CT scan today?",
      "Are you having any trouble breathing or swallowing right now?",
      "Do you have any chest pain or tightness?",
      "Are you feeling dizzy or lightheaded?",
      "Do you have any skin changes like rash, hives, or itching?",
      "What medications are you currently taking?",
      "Do you have any kidney problems or diabetes?",
      "Why were you getting the CT scan today?",
      "Do you understand why this reaction happened?",
      "Have you been told about premedication for contrast in the past?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I don't understand. Can I have Vietnamese interpreter please? This is very confusing for me.",
      "onset": "Right after they put the dye in my arm for the CT scan, maybe 2-3 minutes later I felt very sick and scared",
      "character": "I felt like I couldn't breathe well, my skin was burning and itchy, felt like my throat was getting tight",
      "location": "The itching was everywhere, throat felt tight, chest felt heavy",
      "severity": "Very scary, maybe 8 out of 10. I thought I was going to die, couldn't catch my breath",
      "aggravating": "Nothing specific makes it worse now, but I'm still scared it will come back",
      "relieving": "The doctors gave me shots and IV medicine, that helped me feel better",
      "associated": "I had nausea, felt dizzy, heart was beating very fast, skin was red and bumpy",
      "denies": "No chest pain now, no vomiting, no loss of consciousness, no prior heart problems",
      "history": "Yes, this happened before about 10 years ago when I had CT scan. Doctor told me to tell people about allergy to dye",
      "medications": "Epinephrine; Diphenhydramine; Methylprednisolone; NS bolus",
      "allergies": "Contrast dye",
      "family": "Nothing important in family for allergies or reactions like this",
      "social": "I am retired, live with daughter, don't smoke, don't drink alcohol, need Vietnamese interpreter for medical visits"
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Skin examination for urticaria or angioedema",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Upper airway assessment",
      "Neurological assessment",
      "Abdominal examination",
      "Assessment of peripheral perfusion",
      "Lymph node examination",
      "Mental status evaluation"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 86/52, HR 118, RR 22, SpO2 92% on room air, afebrile at 36.8°C",
      "Skin examination for urticaria or angioedema": "Diffuse urticarial rash on trunk and extremities, mild facial flushing, no significant angioedema of lips or eyelids",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, weak peripheral pulses consistent with hypotension",
      "Pulmonary examination": "Mild expiratory wheeze bilaterally, good air movement, no stridor",
      "Upper airway assessment": "No stridor, voice clear, no visible tongue or lip swelling, mild throat erythema",
      "Neurological assessment": "Alert and oriented, anxious but appropriate, no focal deficits",
      "Abdominal examination": "Soft, non-tender, normal bowel sounds, no hepatosplenomegaly",
      "Assessment of peripheral perfusion": "Capillary refill 3 seconds, cool extremities, consistent with mild shock",
      "Lymph node examination": "No lymphadenopathy",
      "Mental status evaluation": "Anxious but coherent, language barrier present, requesting interpreter"
    },
    "ddxTargets": [
      "Anaphylactoid reaction to IV contrast (correct diagnosis)",
      "IgE-mediated anaphylaxis to contrast",
      "Acute asthma exacerbation",
      "Pulmonary embolism",
      "Acute myocardial infarction",
      "Vasovagal reaction",
      "Medication adverse reaction"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the obvious contrast reaction and missing evaluation of the underlying PE that prompted the study, or assuming all contrast reactions are IgE-mediated",
      "prematureClosure": "May stop thinking after diagnosing contrast reaction without considering the systems failure (lack of premedication despite documented allergy) and patient safety implications",
      "availabilityBias": "Recent cases of allergic reactions might influence interpretation, but this appears to be anaphylactoid rather than true IgE-mediated anaphylaxis"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, think about what key information you need regarding the timeline of events, previous contrast exposure, and what protocols should have been followed. What patient safety issues might be at play here?",
      "phase5": "You've identified a contrast reaction, but consider: What type of reaction is this based on the clinical presentation? What systems failure occurred? How does this patient's CKD factor into the decision-making? What are the immediate next steps?",
      "finalDebrief": "This case highlights a preventable patient safety event. The documented prior reaction should have triggered premedication protocols. Discuss the difference between anaphylaxis and anaphylactoid reactions, and how systems-based approaches prevent such errors. What would you implement to prevent this in the future?"
    }
  }
};
