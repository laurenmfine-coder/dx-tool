/* emr-data/insect-sting-anaphylaxis-v2.js — Variation: Hymenoptera Venom Anaphylaxis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Miguel Herrera-Santos",
      "patientHPI": "I was trimming hedges at work yesterday when a wasp got me on my arm - I've been stung plenty of times before and it's never been a big deal, just some swelling where it happened. But this time was different - within minutes my whole body broke out in hives and my throat started feeling tight, like I couldn't swallow right. I got really dizzy and thought I might pass out, which has never happened before with bee stings.",
      "dob": "05/14/1981",
      "age": "45",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-522413",
      "language": "Spanish",
      "race": "Hispanic/Latino",
      "phone": "(415) 555-3858",
      "email": "miguel.x@email.com",
      "address": "9747 Hickory Rd, Louisville, KY 40202",
      "insurance": "Uninsured — Self-Pay",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(314) 555-1422",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Wasp venom",
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
        "Occupation",
        "Landscape worker — daily outdoor insect exposure, cannot change careers"
      ],
      [
        "Insurance",
        "Uninsured — cannot afford EpiPen ($600) or VIT ($200-400/visit)"
      ],
      [
        "Income",
        "$15/hr, family of 5"
      ],
      [
        "Language",
        "Spanish only"
      ],
      [
        "Risk",
        "Without VIT, 60% recurrence risk with next sting"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "45yo landscape worker — first systemic reaction to wasp sting, outdoor occupation makes avoidance impossible",
        "diagnosis": "Hymenoptera Venom Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Wasp venom anaphylaxis — first systemic reaction",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Outdoor worker — daily exposure, cannot avoid",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Uninsured — EpiPen and VIT unaffordable",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "60% recurrence risk without VIT",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Spanish-only — need interpreter",
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
          "frequency": "Given by coworker",
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
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "86/54",
          "hr": "126",
          "rr": "24",
          "temp": "36.8°C",
          "spo2": "92%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-709430",
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
              "name": "VENOM",
              "results": [
                {
                  "test": "Tryptase (acute)",
                  "value": "42",
                  "unit": "ng/mL",
                  "range": "<11.5",
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
          "cc": "45yo landscape worker — first systemic reaction to wasp sting, outdoor occupation makes avoidance impossible",
          "hpi": "45M landscape worker stung by wasp while trimming hedges. First systemic reaction despite 15+ prior stings (local only). Escalation pattern typical. Cannot change careers — sole income for family. Cannot afford EpiPen ($600) or VIT. Social work for patient assistance programs essential.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Observation — connecting to financial assistance for VIT and EpiPen",
        "diagnosis": "Hymenoptera Venom Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Wasp anaphylaxis — resolved",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Social work — EpiPen patient assistance program approved",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "County allergy clinic — VIT on sliding scale ($20/visit)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "OSHA — employer must provide protective gear and nest removal",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisone",
          "dose": "40mg",
          "route": "PO",
          "frequency": "x5 days",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN x2 (samples)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "112/72",
          "hr": "82",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-180469",
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
          "cc": "Observation — connecting to financial assistance for VIT and EpiPen",
          "hpi": "45M stable. Social work connected to EpiPen manufacturer assistance (free 1 year) and county hospital sliding-scale VIT ($20/visit). Employer notified of OSHA requirements for protective gear.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — venom testing, VIT initiation, occupational safety",
        "diagnosis": "Hymenoptera Venom Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Wasp/yellow jacket/hornet all positive on skin testing",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "VIT — cluster protocol for faster build-up before outdoor season",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Employer providing protective gear per OSHA",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Baseline tryptase normal — no mastocytosis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "VIT (Vespid)",
          "dose": "Build-up phase",
          "route": "SC",
          "frequency": "Twice weekly x8 weeks then monthly",
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
          "bp": "122/76",
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
          "accession": "LAB-653118",
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
              "name": "VENOM TESTING",
              "results": [
                {
                  "test": "Wasp SPT",
                  "value": "Positive (14mm)",
                  "unit": "",
                  "range": "<3mm",
                  "flag": "H"
                },
                {
                  "test": "Yellow jacket SPT",
                  "value": "Positive (10mm)",
                  "unit": "",
                  "range": "<3mm",
                  "flag": "H"
                },
                {
                  "test": "Honeybee SPT",
                  "value": "Negative",
                  "unit": "",
                  "range": "<3mm",
                  "flag": ""
                },
                {
                  "test": "Baseline tryptase",
                  "value": "5.8",
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
          "cc": "A/I consult — venom testing, VIT initiation, occupational safety",
          "hpi": "A/I at county clinic: Vespid panel positive. Cluster VIT protocol started. VIT will reduce recurrence risk from 60% to <5%. Minimum 5 years treatment, possibly lifelong given daily occupational exposure.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "VIT maintenance — stung again, only local reaction. VIT working.",
        "diagnosis": "Hymenoptera Venom Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Vespid allergy — on VIT maintenance",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Stung by YJ 2 months ago — LOCAL reaction only (no systemic!)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "VIT working — prior to VIT, last sting caused anaphylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Workers comp claim resolved — employer compliant",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "VIT maintenance",
          "dose": "100mcg",
          "route": "SC",
          "frequency": "Monthly",
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
          "bp": "126/78",
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
          "accession": "LAB-180096",
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
          "cc": "VIT maintenance — stung again, only local reaction. VIT working.",
          "hpi": "45M 6 months on VIT. Stung at work — only local reaction. VIT is working. \"I can do my job without being afraid.\" Continue monthly maintenance.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Miguel Herrera-Santos",
    "dob": "05/14/1981",
    "age": "45",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-522413",
    "language": "Spanish",
    "race": "Hispanic/Latino",
    "phone": "(317) 555-1243",
    "email": "miguel.x@email.com",
    "address": "2177 Birch Ln, Memphis, TN 38114",
    "insurance": "Uninsured — Self-Pay",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(504) 555-4898",
      "relationship": "Spouse"
    },
    "chiefComplaint": "45yo landscape worker — first systemic reaction to wasp sting, outdoor occupation makes avoidance impossible",
    "diagnosis": "Hymenoptera Venom Anaphylaxis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Wasp venom anaphylaxis — first systemic reaction",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Outdoor worker — daily exposure, cannot avoid",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Uninsured — EpiPen and VIT unaffordable",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "60% recurrence risk without VIT",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Spanish-only — need interpreter",
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
      "frequency": "Given by coworker",
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
    }
  ],
  "allergies": [
    {
      "allergen": "Wasp venom",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "86/54",
      "hr": "126",
      "rr": "24",
      "temp": "36.8°C",
      "spo2": "92%",
      "pain": "6/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "45yo landscape worker — first systemic reaction to wasp sting, outdoor occupation makes avoidance impossible",
      "hpi": "45M landscape worker stung by wasp while trimming hedges. First systemic reaction despite 15+ prior stings (local only). Escalation pattern typical. Cannot change careers — sole income for family. Cannot afford EpiPen ($600) or VIT. Social work for patient assistance programs essential.",
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
      "accession": "LAB-709430",
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
          "name": "VENOM",
          "results": [
            {
              "test": "Tryptase (acute)",
              "value": "42",
              "unit": "ng/mL",
              "range": "<11.5",
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
      "Occupation",
      "Landscape worker — daily outdoor insect exposure, cannot change careers"
    ],
    [
      "Insurance",
      "Uninsured — cannot afford EpiPen ($600) or VIT ($200-400/visit)"
    ],
    [
      "Income",
      "$15/hr, family of 5"
    ],
    [
      "Language",
      "Spanish only"
    ],
    [
      "Risk",
      "Without VIT, 60% recurrence risk with next sting"
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
    "patientPersona": "Miguel appears anxious and overwhelmed, frequently glancing at his hands which still show mild swelling. He speaks rapidly in Spanish through the interpreter, expressing deep concern about how he'll support his family if he can't work outdoors, and fear about what will happen with his next wasp sting.",
    "interviewQuestions": [
      "Can you describe exactly what happened when you were stung today?",
      "What symptoms did you experience and in what order?",
      "How long after the sting did your symptoms begin?",
      "Have you ever been stung by wasps or bees before?",
      "What were your reactions to previous stings like?",
      "Do you carry an EpiPen or any emergency medications?",
      "What is your occupation and how often are you exposed to stinging insects?",
      "Have you ever had allergic reactions to anything else?",
      "Do you have any other medical conditions?",
      "What concerns you most about this reaction?",
      "Has anyone in your family had severe allergic reactions?",
      "What treatment did you receive before coming here?",
      "How are you feeling right now compared to when this started?"
    ],
    "patientResponses": {
      "default": "I'm sorry, can you repeat that? I'm still feeling shaky and it's hard to focus right now.",
      "onset": "I was trimming hedges around 2 PM when the wasp stung my left forearm. Within 5 minutes I felt dizzy and my whole body started itching, not just where I was stung.",
      "character": "It started as intense itching all over, then I felt like I couldn't breathe well, my throat felt tight, and I became very dizzy and weak.",
      "location": "The sting was on my left forearm, but the itching and hives appeared everywhere - my chest, back, arms, even my face swelled up.",
      "severity": "This was terrifying - 9 out of 10. I thought I might die. I've never felt anything like this before, even though I've been stung many times.",
      "aggravating": "I think the heat made it worse - it was very hot today and I was sweating a lot when it happened.",
      "relieving": "My coworker gave me some Benadryl he had in his truck and called 911. The paramedics gave me a shot that helped within minutes.",
      "associated": "I had hives everywhere, my face and lips swelled, I felt nauseous, very dizzy, and my heart was racing. I also felt like I might pass out.",
      "denies": "No chest pain, no vomiting, no loss of consciousness, and no difficulty swallowing, though my throat felt tight.",
      "history": "I've been stung at least 15 times over the years - always just local swelling and pain that went away in a day or two. Never anything like this.",
      "medications": "Epinephrine; Diphenhydramine; Methylprednisolone",
      "allergies": "Wasp venom",
      "family": "No one in my family has had serious allergic reactions that I know of.",
      "social": "I'm a landscape worker - I work outside every day and get stung several times a year. I can't afford to change jobs, I support my wife and three children. I don't have insurance and can't afford an EpiPen."
    },
    "examManeuvers": [
      "Assess airway patency and voice quality",
      "Examine skin for urticaria and angioedema",
      "Auscultate lungs for wheezing or stridor",
      "Check blood pressure and pulse",
      "Examine sting site on forearm",
      "Assess facial swelling, especially lips and eyelids",
      "Evaluate mucous membranes and conjunctiva",
      "Palpate lymph nodes",
      "Assess mental status and orientation",
      "Check capillary refill and peripheral perfusion"
    ],
    "examFindings": {
      "Assess airway patency and voice quality": "Airway patent, voice slightly hoarse but clear, no stridor audible",
      "Examine skin for urticaria and angioedema": "Resolving urticarial rash on trunk and extremities, mild residual facial edema, especially periorbital",
      "Auscultate lungs for wheezing or stridor": "Clear bilateral breath sounds, no wheeze or stridor, respiratory rate 22",
      "Check blood pressure and pulse": "BP 86/54 mmHg, HR 126 bpm regular, orthostatic changes present",
      "Examine sting site on forearm": "Single puncture wound on left forearm with surrounding erythema and mild swelling, no embedded stinger",
      "Assess facial swelling, especially lips and eyelids": "Mild residual periorbital edema, lips appear normal size now",
      "Evaluate mucous membranes and conjunctiva": "Mucous membranes pink and moist, conjunctiva clear",
      "Palpate lymph nodes": "No lymphadenopathy appreciated",
      "Assess mental status and orientation": "Alert and oriented x3, anxious but appropriate",
      "Check capillary refill and peripheral perfusion": "Capillary refill 2 seconds, extremities warm and well-perfused"
    },
    "ddxTargets": [
      "Anaphylaxis secondary to wasp venom (correct diagnosis)",
      "Severe local allergic reaction",
      "Vasovagal reaction to sting",
      "Sepsis or systemic infection",
      "Acute myocardial infarction",
      "Anxiety/panic attack",
      "Heat-related illness"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'just another bug bite' given patient's history of multiple prior stings without systemic reaction",
      "prematureClosure": "May dismiss as anxiety or heat exhaustion in outdoor worker rather than recognizing true anaphylaxis",
      "availabilityBias": "Recent cases of heat stroke in outdoor workers might lead away from considering anaphylaxis"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. What specific historical details would help you distinguish between a severe local reaction versus true anaphylaxis? Think about the timeline and systemic symptoms. Also consider what makes this case unique - why might someone have their first systemic reaction after years of tolerance?",
      "phase5": "You've gathered good information. Let's think through the clinical criteria for anaphylaxis - does this patient meet them? What are the key features that distinguish this from his previous sting reactions? Consider both the immediate management and the long-term implications for someone in his occupation.",
      "finalDebrief": "This case illustrates classic anaphylaxis with the added complexity of occupational and socioeconomic factors. Notice how your differential likely evolved from considering local reactions to recognizing systemic involvement. What does this teach you about allergic sensitization patterns and the challenges of managing anaphylaxis in high-risk occupations with limited resources?"
    }
  }
};
