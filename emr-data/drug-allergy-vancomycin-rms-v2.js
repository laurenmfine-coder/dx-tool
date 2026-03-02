/* emr-data/drug-allergy-vancomycin-rms-v2.js — Variation: Vancomycin Infusion Reaction */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Dorothy Patterson",
      "dob": "10/02/1948",
      "age": "78",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-350241",
      "language": "English",
      "race": "White",
      "phone": "(374) 250-4382",
      "email": "dorothy.x@email.com",
      "address": "1686 Oak St, Weston, FL 33326",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(955) 472-1448",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Anaphylaxis (1960s)",
        "severity": "Severe",
        "type": "Drug"
      },
      {
        "allergen": "Cephalosporins",
        "reaction": "Avoid (told to avoid all)",
        "severity": "Unknown",
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
        "Context",
        "Nursing home, MRSA joint infection, vancomycin RMS mislabeled as allergy"
      ],
      [
        "Comorbidity",
        "Mild dementia, CKD stage 3"
      ],
      [
        "Issue",
        "60 years of accumulated false drug \"allergies\" — PCN, cephalosporin, now vanc — severely limits options"
      ],
      [
        "Teaching",
        "RMS is NOT allergy — manageable with slow infusion + premedication"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "78yo with MRSA prosthetic joint infection — vancomycin RMS mislabeled as allergy, limiting treatment options",
        "diagnosis": "Vancomycin Infusion Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Vancomycin RMS (NOT true allergy)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "MRSA prosthetic joint infection — needs 6 weeks vancomycin",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "PCN \"allergy\" from 1960s — likely outgrown",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Multiple false allergies → inferior antibiotic choices → patient harm",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "CKD 3 — vanco dosing adjustment needed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Stopped after RMS (flushing/hypotension) — rate was too fast",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Diphenhydramine",
          "dose": "25mg",
          "route": "IV",
          "frequency": "For RMS",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "NS bolus",
          "dose": "500mL",
          "route": "IV",
          "frequency": "For hypotension",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "88/52",
          "hr": "108",
          "rr": "20",
          "temp": "37.8°C",
          "spo2": "96%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-462373",
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
                  "value": "14.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
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
                  "value": "1.6",
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
              "name": "INFECTION",
              "results": [
                {
                  "test": "ESR",
                  "value": "82",
                  "unit": "mm/hr",
                  "range": "0-20",
                  "flag": "H"
                },
                {
                  "test": "CRP",
                  "value": "12.4",
                  "unit": "mg/dL",
                  "range": "<0.5",
                  "flag": "H"
                },
                {
                  "test": "Blood culture",
                  "value": "MRSA",
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
          "cc": "78yo with MRSA prosthetic joint infection — vancomycin RMS mislabeled as allergy, limiting treatment options",
          "hpi": "78F nursing home resident with MRSA joint infection. Vancomycin started — developed upper body flushing and hypotension during first infusion (1h rate). ED labeled as \"vancomycin allergy.\" This is RMS (histamine release from rapid infusion), NOT true allergy. She already has PCN and cephalosporin \"allergies\" from decades ago. If vancomycin is also lost, her options are extremely limited. A/I consult STAT.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted — A/I managing vancomycin protocol, drug allergy cleanup",
        "diagnosis": "Vancomycin Infusion Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA infection — needs vancomycin",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Vancomycin RMS — managed with slow infusion (2h) + premedication",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "PCN allergy 60 years old — evaluation after infection treated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "False allergy accumulation in elderly — patient safety issue",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "750mg",
          "route": "IV",
          "frequency": "Q12H over 2 HOURS with premedication (tolerated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Diphenhydramine",
          "dose": "25mg",
          "route": "IV",
          "frequency": "Pre-vancomycin",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "82",
          "rr": "16",
          "temp": "37.4°C",
          "spo2": "97%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-272741",
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
          "cc": "Admitted — A/I managing vancomycin protocol, drug allergy cleanup",
          "hpi": "78F re-challenged with slow vancomycin infusion — tolerated perfectly. EMR updated: \"Vancomycin — RMS (NOT allergy) — tolerated with 2h infusion + premedication.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I — RMS management, plan for PCN delabeling after infection",
        "diagnosis": "Vancomycin Infusion Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Vancomycin RMS — resolved, NOT allergy",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "PCN allergy 60 years — >80% lose sensitivity after 10 years, should test",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Cephalosporin \"allergy\" — was never given one, just told to avoid",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "False allergies kill — inferior antibiotics, increased C. diff, longer hospitalizations",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "750mg",
          "route": "IV",
          "frequency": "Q12H over 2h — tolerated",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "122/74",
          "hr": "78",
          "rr": "14",
          "temp": "37.2°C",
          "spo2": "98%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-186707",
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
          "cc": "A/I — RMS management, plan for PCN delabeling after infection",
          "hpi": "A/I: 78F with 4 drug \"allergies\" accumulated over 60 years. Vancomycin RMS corrected in chart. PCN evaluation planned after infection treated — highly likely to be negative after 60 years. False allergies in elderly are a major patient safety issue — each one limits life-saving options.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Post-infection — PCN allergy DELABELED after 60 years",
        "diagnosis": "Vancomycin Infusion Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA infection treated — 6 weeks vancomycin completed",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Vancomycin — RMS corrected in chart",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "PCN allergy — DELABELED (negative skin test + oral challenge)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Cephalosporin — DELABELED",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Daughter emotional: \"She was denied antibiotics her whole life for something that wasn't real\"",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amoxicillin",
          "dose": "500mg",
          "route": "PO",
          "frequency": "Tolerated in challenge",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "128/76",
          "hr": "76",
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
          "accession": "LAB-820365",
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
          "cc": "Post-infection — PCN allergy DELABELED after 60 years",
          "hpi": "78F post-infection. PCN skin test negative. Oral amoxicillin tolerated. 60-year false allergy removed. Cephalosporin restriction also removed. This case illustrates why drug allergy delabeling in the elderly is critical.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Dorothy Patterson",
    "dob": "10/02/1948",
    "age": "78",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-350241",
    "language": "English",
    "race": "White",
    "phone": "(374) 250-4382",
    "email": "dorothy.x@email.com",
    "address": "1686 Oak St, Weston, FL 33326",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(955) 472-1448",
      "relationship": "Spouse"
    },
    "chiefComplaint": "78yo with MRSA prosthetic joint infection — vancomycin RMS mislabeled as allergy, limiting treatment options",
    "diagnosis": "Vancomycin Infusion Reaction"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Vancomycin RMS (NOT true allergy)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "MRSA prosthetic joint infection — needs 6 weeks vancomycin",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "PCN \"allergy\" from 1960s — likely outgrown",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Multiple false allergies → inferior antibiotic choices → patient harm",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "CKD 3 — vanco dosing adjustment needed",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Vancomycin",
      "dose": "1g",
      "route": "IV",
      "frequency": "Stopped after RMS (flushing/hypotension) — rate was too fast",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Diphenhydramine",
      "dose": "25mg",
      "route": "IV",
      "frequency": "For RMS",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "NS bolus",
      "dose": "500mL",
      "route": "IV",
      "frequency": "For hypotension",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Anaphylaxis (1960s)",
      "severity": "Severe",
      "type": "Drug"
    },
    {
      "allergen": "Cephalosporins",
      "reaction": "Avoid (told to avoid all)",
      "severity": "Unknown",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "88/52",
      "hr": "108",
      "rr": "20",
      "temp": "37.8°C",
      "spo2": "96%",
      "pain": "6/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "78yo with MRSA prosthetic joint infection — vancomycin RMS mislabeled as allergy, limiting treatment options",
      "hpi": "78F nursing home resident with MRSA joint infection. Vancomycin started — developed upper body flushing and hypotension during first infusion (1h rate). ED labeled as \"vancomycin allergy.\" This is RMS (histamine release from rapid infusion), NOT true allergy. She already has PCN and cephalosporin \"allergies\" from decades ago. If vancomycin is also lost, her options are extremely limited. A/I consult STAT.",
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
      "accession": "LAB-462373",
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
              "value": "14.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
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
              "value": "1.6",
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
          "name": "INFECTION",
          "results": [
            {
              "test": "ESR",
              "value": "82",
              "unit": "mm/hr",
              "range": "0-20",
              "flag": "H"
            },
            {
              "test": "CRP",
              "value": "12.4",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Blood culture",
              "value": "MRSA",
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
      "Context",
      "Nursing home, MRSA joint infection, vancomycin RMS mislabeled as allergy"
    ],
    [
      "Comorbidity",
      "Mild dementia, CKD stage 3"
    ],
    [
      "Issue",
      "60 years of accumulated false drug \"allergies\" — PCN, cephalosporin, now vanc — severely limits options"
    ],
    [
      "Teaching",
      "RMS is NOT allergy — manageable with slow infusion + premedication"
    ]
  ]
,"references":[
  {
    "id": "Drug-Allergy-PP-2022",
    "title": "Drug allergy: A 2022 practice parameter update",
    "authors": "Khan DA, Banerji A, Blumenthal KG, et al.",
    "journal": "J Allergy Clin Immunol",
    "year": 2022,
    "doi": "10.1016/j.jaci.2022.08.028",
    "url": "https://www.jacionline.org/article/S0091-6749(22)01186-1/fulltext",
    "openAccess": true,
    "validates": [
      "PCN skin testing for anaphylaxis history; direct challenge for remote benign reactions",
      "Single-dose amoxicillin challenge for low-risk",
      "Vancomycin RMS management",
      "AERD aspirin desensitization protocol",
      "Sulfonamide challenge protocols"
    ]
  },
  {
    "id": "PCN-NEJM-2019",
    "title": "Penicillin allergy",
    "authors": "Castells M, Khan DA, Phillips EJ.",
    "journal": "N Engl J Med",
    "year": 2019,
    "doi": "10.1056/NEJMra1807761",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31826341/",
    "openAccess": false,
    "validates": [
      ">90% with PCN label NOT truly allergic",
      ">80% lose sensitivity after 10 years",
      "Morbilliform rash in children = usually viral exanthem",
      "False PCN allergy → MRSA, C. diff, longer stays, higher mortality"
    ]
  },
  {
    "id": "Vanc-RMS-2003",
    "title": "Red man syndrome",
    "authors": "Sivagnanam S, Deleu D.",
    "journal": "Crit Care",
    "year": 2003,
    "doi": "10.1186/cc1871",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC270697/",
    "openAccess": true,
    "validates": [
      "RMS = histamine release, NOT IgE",
      "Slow infusion ≥2h + premedication",
      "NOT a true allergy"
    ]
  }
]};
