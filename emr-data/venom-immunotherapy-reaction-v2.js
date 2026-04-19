/* emr-data/venom-immunotherapy-reaction-v2.js — Variation: VIT Systemic Reaction */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Karen Lindquist",
      "patientHPI": "I was getting my regular allergy shot today like I have been for over a year now, and about 20 minutes after the injection I started breaking out in hives all over my body and my throat felt like it was closing up. I got really dizzy and felt like I was going to pass out, so they gave me a shot right away in the office.",
      "dob": "02/07/1968",
      "age": "58",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-763428",
      "language": "English",
      "race": "White",
      "phone": "(702) 555-4919",
      "email": "karen.x@email.com",
      "address": "5602 Walnut Dr, Milwaukee, WI 53204",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(415) 555-8206",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Honeybee venom",
        "reaction": "Anaphylaxis",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Context",
        "On honeybee VIT for 18 months — had systemic reaction to maintenance dose injection"
      ],
      [
        "Comorbidity",
        "ACE inhibitor for HTN — increases VIT reaction risk (bradykinin pathway)"
      ],
      [
        "Hobby",
        "Beekeeper — occupational AND hobby exposure"
      ],
      [
        "Issue",
        "ACE inhibitor must be switched before continuing VIT — drugs amplify VIT reactions"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "58yo on VIT who had systemic reaction 20 min after maintenance injection — on ACE inhibitor which increases reaction risk",
        "diagnosis": "VIT Systemic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "VIT systemic reaction — during maintenance phase",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "ACE inhibitor use — increases risk of VIT reactions (bradykinin amplification)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Honeybee allergy — beekeeper (occupational + hobby exposure)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "ACE inhibitor must be discontinued before VIT can safely continue",
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
          "frequency": "Given in allergy office",
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
          "name": "Observation",
          "dose": "4h",
          "route": "",
          "frequency": "In allergy office then sent to ED",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "96/62",
          "hr": "108",
          "rr": "20",
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
          "accession": "LAB-231941",
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
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "58yo on VIT who had systemic reaction 20 min after maintenance injection — on ACE inhibitor which increases reaction risk",
          "hpi": "58F on honeybee VIT maintenance (100mcg) for 18 months. Today: 20 min after injection developed generalized urticaria, throat tightness, and hypotension. Epi given in allergist office. She is also on lisinopril for HTN — ACE inhibitors increase VIT reaction risk by amplifying bradykinin. The allergy literature is clear: ACE inhibitors should be discontinued before starting or continuing VIT. This was a preventable amplification of the reaction.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "N/A — managed outpatient",
        "diagnosis": "VIT Systemic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Outpatient",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [],
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
          "accession": "LAB-317659",
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
          "cc": "N/A — managed outpatient",
          "hpi": "Outpatient management.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — VIT reaction management, ACE inhibitor switch, premedication protocol",
        "diagnosis": "VIT Systemic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "VIT systemic reaction — ACE inhibitor amplified",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "ACE inhibitor must be stopped — switch to ARB or CCB before resuming VIT",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Premedication before future VIT doses (cetirizine 1h before)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Dose adjustment — reduce VIT dose then re-escalate",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Beekeeper — VIT must continue (occupational necessity)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "VIT dose reduction",
          "dose": "50mcg (reduced from 100)",
          "route": "SC",
          "frequency": "Then re-escalate to 100 over 4 visits",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Lisinopril",
          "dose": "STOPPED",
          "route": "",
          "frequency": "Switch to amlodipine for HTN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Amlodipine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily (replacing ACE inhibitor)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "1h before each VIT injection (premedication)",
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
          "accession": "LAB-229889",
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
          "cc": "A/I consult — VIT reaction management, ACE inhibitor switch, premedication protocol",
          "hpi": "A/I: 58F with VIT reaction. Root cause: concurrent ACE inhibitor use. ACE inhibitors block kininase II (same as ACE) which degrades bradykinin — during VIT reactions, elevated bradykinin can't be cleared, worsening hypotension and angioedema. Switched to amlodipine. Will resume VIT at reduced dose (50mcg) with premedication, re-escalate to maintenance over 4 visits. Must continue VIT — she is a beekeeper, daily exposure, cannot stop.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "VIT follow-up — re-escalated to maintenance, ACE inhibitor stopped, no further reactions",
        "diagnosis": "VIT Systemic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "VIT — re-escalated to 100mcg maintenance without reactions",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "ACE inhibitor switched to amlodipine — no further VIT reactions",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Premedication protocol in place",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Beekeeping safely with VIT protection",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "VIT honeybee",
          "dose": "100mcg",
          "route": "SC",
          "frequency": "Monthly maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Amlodipine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "1h pre-VIT",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
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
          "accession": "LAB-254015",
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
          "cc": "VIT follow-up — re-escalated to maintenance, ACE inhibitor stopped, no further reactions",
          "hpi": "58F re-escalated to VIT maintenance without reactions since ACE inhibitor discontinued. BP well-controlled on amlodipine. Beekeeping safely. This case illustrates: always check medication list before starting VIT — ACE inhibitors are a known risk factor for VIT reactions.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Karen Lindquist",
    "dob": "02/07/1968",
    "age": "58",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-763428",
    "language": "English",
    "race": "White",
    "phone": "(313) 555-5681",
    "email": "karen.x@email.com",
    "address": "3888 Willow Way, Indianapolis, IN 46202",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(414) 555-5451",
      "relationship": "Spouse"
    },
    "chiefComplaint": "58yo on VIT who had systemic reaction 20 min after maintenance injection — on ACE inhibitor which increases reaction risk",
    "diagnosis": "VIT Systemic Reaction"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "VIT systemic reaction — during maintenance phase",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "ACE inhibitor use — increases risk of VIT reactions (bradykinin amplification)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Honeybee allergy — beekeeper (occupational + hobby exposure)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "ACE inhibitor must be discontinued before VIT can safely continue",
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
      "frequency": "Given in allergy office",
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
      "name": "Observation",
      "dose": "4h",
      "route": "",
      "frequency": "In allergy office then sent to ED",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Honeybee venom",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "96/62",
      "hr": "108",
      "rr": "20",
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
      "cc": "58yo on VIT who had systemic reaction 20 min after maintenance injection — on ACE inhibitor which increases reaction risk",
      "hpi": "58F on honeybee VIT maintenance (100mcg) for 18 months. Today: 20 min after injection developed generalized urticaria, throat tightness, and hypotension. Epi given in allergist office. She is also on lisinopril for HTN — ACE inhibitors increase VIT reaction risk by amplifying bradykinin. The allergy literature is clear: ACE inhibitors should be discontinued before starting or continuing VIT. This was a preventable amplification of the reaction.",
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
      "accession": "LAB-231941",
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
      "Context",
      "On honeybee VIT for 18 months — had systemic reaction to maintenance dose injection"
    ],
    [
      "Comorbidity",
      "ACE inhibitor for HTN — increases VIT reaction risk (bradykinin pathway)"
    ],
    [
      "Hobby",
      "Beekeeper — occupational AND hobby exposure"
    ],
    [
      "Issue",
      "ACE inhibitor must be switched before continuing VIT — drugs amplify VIT reactions"
    ]
  ],
  "references": [
    {
      "id": "AIT-PP-2011",
      "title": "Allergen immunotherapy: practice parameter 3rd update",
      "authors": "Cox L, Nelson H, Lockey R, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2011,
      "doi": "10.1016/j.jaci.2010.09.034",
      "url": "https://www.jacionline.org/article/S0091-6749(10)01502-0/fulltext",
      "openAccess": true,
      "validates": [
        "SCIT protocols",
        "Cluster/rush protocols",
        "ACE inhibitors increase VIT reactions",
        "VIT ≥5 years"
      ]
    },
    {
      "id": "Insect-PP-2017",
      "title": "Stinging insect hypersensitivity: practice parameter 2016",
      "authors": "Golden DBK, Demain J, Freeman T, et al.",
      "journal": "Ann Allergy Asthma Immunol",
      "year": 2017,
      "doi": "10.1016/j.anai.2016.10.031",
      "url": "https://pubmed.ncbi.nlm.nih.gov/28007086/",
      "openAccess": true,
      "validates": [
        "60% recurrence without VIT",
        "VIT reduces to <5%",
        "Baseline tryptase screening",
        "Cluster VIT protocol"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Karen appears anxious but cooperative, still recovering from the frightening systemic reaction she experienced 20 minutes ago. She's eager to understand what went wrong with her usually well-tolerated VIT injections and is concerned about her ability to continue beekeeping safely.",
    "interviewQuestions": [
      "Can you describe exactly what happened after your injection today?",
      "What symptoms did you experience and in what order?",
      "How long after the injection did your symptoms start?",
      "Have you ever had a reaction like this to your VIT injections before?",
      "How long have you been getting these maintenance injections?",
      "What medications are you currently taking?",
      "Have you started any new medications recently?",
      "Are you taking any blood pressure medications?",
      "Have you had any recent bee stings outside of your treatment?",
      "How is your beekeeping going - any recent exposures?",
      "Have you been feeling unwell or stressed lately?",
      "Did you exercise before or after previous injections?",
      "Have you had any changes in your allergy medications?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand - can you ask me that in a different way?",
      "onset": "About 20 minutes after my injection, I started feeling itchy all over and my throat felt tight. It came on pretty quickly.",
      "character": "I had hives breaking out everywhere and my throat felt like it was closing up. I felt dizzy and weak.",
      "location": "The hives were all over my body - my arms, chest, back. The throat tightness was the scariest part.",
      "severity": "I'd say it was an 8 out of 10 - it was really frightening. I couldn't think about anything else and felt like I might pass out.",
      "aggravating": "Nothing specific made it worse - it just kept getting worse on its own until they gave me the epinephrine.",
      "relieving": "The epinephrine shot helped a lot. The hives are still there but much better, and my throat feels more open.",
      "associated": "I felt dizzy, weak, and nauseous. My heart was racing and I felt like I might faint.",
      "denies": "No chest pain, no wheezing or trouble breathing beyond the throat tightness, no abdominal pain or vomiting.",
      "history": "I've been getting these injections for 18 months now and never had a reaction like this. Maybe some mild local swelling before, but nothing systemic.",
      "medications": "Epinephrine; Cetirizine; Observation",
      "allergies": "Honeybee venom",
      "family": "No family history of severe allergies or anaphylaxis that I know of.",
      "social": "I'm a beekeeper - it's both my job and hobby. That's why I need these shots. I don't smoke, drink occasionally, no drugs. I've been doing this treatment so I can keep working with my bees safely."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Skin examination for urticaria",
      "Head and neck examination",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Injection site examination",
      "Neurological assessment",
      "Assessment of perfusion",
      "Lymph node examination"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 96/62, HR 108, Temp 36.8°C, SpO2 95% - hypotensive and tachycardic",
      "Skin examination for urticaria": "Diffuse urticarial rash across trunk and extremities, some lesions fading after epinephrine treatment",
      "Head and neck examination": "Mild periorbital edema, no stridor, throat appears normal now post-epinephrine",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, weak pulses consistent with hypotension",
      "Pulmonary examination": "Clear breath sounds bilaterally, no wheezing or stridor, adequate air movement",
      "Abdominal examination": "Soft, non-tender, normal bowel sounds, no organomegaly",
      "Injection site examination": "Left deltoid injection site with minimal erythema and swelling, no induration",
      "Neurological assessment": "Alert and oriented, anxious but appropriate, no focal deficits",
      "Assessment of perfusion": "Capillary refill 3 seconds, skin cool and clammy, improving after treatment",
      "Lymph node examination": "No lymphadenopathy palpated"
    },
    "ddxTargets": [
      "VIT systemic reaction exacerbated by ACE inhibitor (correct diagnosis)",
      "Anaphylaxis to VIT",
      "Vasovagal reaction to injection",
      "Septic shock from contaminated injection",
      "Cardiogenic shock",
      "Acute allergic reaction to excipients",
      "Anxiety/panic attack"
    ],
    "biasFlags": {
      "anchoring": "May anchor on typical VIT reaction and miss the ACE inhibitor contribution, or focus solely on allergy without considering drug interactions",
      "prematureClosure": "May diagnose simple allergic reaction without investigating why this patient who previously tolerated VIT suddenly had a severe reaction",
      "availabilityBias": "Recent cases of anaphylaxis might overshadow the specific mechanism of ACE inhibitor potentiation of allergic reactions"
    },
    "coachPrompts": {
      "phase2": "This patient has been tolerating VIT maintenance doses for 18 months. What factors might predispose someone to suddenly develop a more severe reaction to a previously tolerated treatment?",
      "phase5": "You've identified a systemic reaction in a patient on VIT maintenance. Her vital signs show hypotension and she required epinephrine. What medication interactions should you specifically ask about that might amplify allergic reactions?",
      "finalDebrief": "This case illustrates how ACE inhibitors can amplify VIT reactions through bradykinin pathway interference. The patient's established tolerance broke down due to this drug interaction. How does this change your approach to patients starting VIT who are on cardiovascular medications?"
    }
  }
};
