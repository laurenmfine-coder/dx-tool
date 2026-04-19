/* emr-data/insect-sting-anaphylaxis.js — Multi-Setting Allergy Case: Hymenoptera Venom Anaphylaxis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Kenneth Murray",
      "patientHPI": "I was doing yard work when a yellow jacket stung me on my hand - at first I thought it would just be the usual local swelling, but then these red welts started appearing all over my body. My throat began feeling really tight and scratchy, and I got so lightheaded I had to sit down because I thought I was going to faint.",
      "dob": "06/09/1974",
      "age": "52",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-651277",
      "language": "English",
      "race": "White",
      "phone": "(720) 555-9037",
      "email": "kenneth.murray@email.com",
      "address": "9054 Elm St, Phoenix, AZ 85001",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. Lisa Chang, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Sarah Murray",
        "phone": "(614) 555-3756",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Yellow jacket venom",
        "reaction": "Anaphylaxis (this event)",
        "severity": "Severe",
        "type": "Venom"
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
        "Exposure",
        "Stung by yellow jacket while mowing lawn 30 min ago"
      ],
      [
        "Prior stings",
        "Large local reaction 2 years ago — no systemic symptoms then"
      ],
      [
        "EpiPen",
        "Does not carry one"
      ],
      [
        "Key",
        "Needs venom testing in 4-6 weeks and VIT if positive"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Systemic reaction after yellow jacket sting — hives, throat tightness, near-syncope",
        "diagnosis": "Hymenoptera Venom Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Prior local reaction to bee sting 2 years ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lisinopril",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Atorvastatin",
          "dose": "20mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "88/54",
          "hr": "118",
          "rr": "24",
          "temp": "36.8°C",
          "spo2": "93%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-165155",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Tryptase",
                  "value": "pending",
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
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Systemic reaction after yellow jacket sting — hives, throat tightness, near-syncope",
          "hpi": "Kenneth Murray presents with systemic reaction after yellow jacket sting — hives, throat tightness, near-syncope.",
          "exam": "See documentation.",
          "assessment": "Hymenoptera Venom Anaphylaxis",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for anaphylaxis observation after field sting — received epinephrine x2",
        "diagnosis": "Hymenoptera Venom Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Prior local reaction to bee sting 2 years ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lisinopril",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Atorvastatin",
          "dose": "20mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Diphenhydramine",
          "dose": "50mg",
          "route": "IV",
          "frequency": "Q6H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/68",
          "hr": "86",
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
          "accession": "LAB-165155",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Tryptase",
                  "value": "pending",
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
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Admitted for anaphylaxis observation after field sting — received epinephrine x2",
          "hpi": "Kenneth Murray — Admitted for anaphylaxis observation after field sting — received epinephrine x2",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — venom testing 4 weeks post-sting, VIT candidacy",
        "diagnosis": "Hymenoptera Venom Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Prior local reaction to bee sting 2 years ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lisinopril",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Atorvastatin",
          "dose": "20mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "124/78",
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
          "accession": "LAB-165155",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Tryptase",
                  "value": "pending",
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
          "cc": "A/I consult — venom testing 4 weeks post-sting, VIT candidacy",
          "hpi": "Kenneth Murray — A/I consult — venom testing 4 weeks post-sting, VIT candidacy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Venom testing appointment — skin prick and intradermal venom panel, start VIT",
        "diagnosis": "Hymenoptera Venom Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Prior local reaction to bee sting 2 years ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Yellow jacket VIT",
          "dose": "Starting build-up",
          "route": "SC",
          "frequency": "Weekly",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
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
          "time": "08:00",
          "bp": "128/78",
          "hr": "72",
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
          "accession": "LAB-165155",
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
                  "value": "7.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Tryptase",
                  "value": "pending",
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
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Venom testing appointment — skin prick and intradermal venom panel, start VIT",
          "hpi": "Kenneth Murray — Venom testing appointment — skin prick and intradermal venom panel, start VIT",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Kenneth Murray",
    "dob": "06/09/1974",
    "age": "52",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-651277",
    "language": "English",
    "race": "White",
    "phone": "(720) 555-6770",
    "email": "kenneth.murray@email.com",
    "address": "1317 Elm St, Chicago, IL 60632",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Sarah Murray",
      "phone": "(404) 555-3293",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Systemic reaction after yellow jacket sting — hives, throat tightness, near-syncope",
    "diagnosis": "Hymenoptera Venom Anaphylaxis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Prior local reaction to bee sting 2 years ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lisinopril",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Atorvastatin",
      "dose": "20mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Yellow jacket venom",
      "reaction": "Anaphylaxis (this event)",
      "severity": "Severe",
      "type": "Venom"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "88/54",
      "hr": "118",
      "rr": "24",
      "temp": "36.8°C",
      "spo2": "93%",
      "pain": "6/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Systemic reaction after yellow jacket sting — hives, throat tightness, near-syncope",
      "hpi": "Kenneth Murray presents with systemic reaction after yellow jacket sting — hives, throat tightness, near-syncope.",
      "exam": "See documentation.",
      "assessment": "Hymenoptera Venom Anaphylaxis",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-165155",
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
              "value": "7.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "248",
              "unit": "x10³/µL",
              "range": "150-400",
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
              "test": "Creatinine",
              "value": "0.8",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            }
          ]
        },
        {
          "name": "ALLERGY & IMMUNOLOGY STUDIES",
          "results": [
            {
              "test": "Tryptase",
              "value": "pending",
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
      "Exposure",
      "Stung by yellow jacket while mowing lawn 30 min ago"
    ],
    [
      "Prior stings",
      "Large local reaction 2 years ago — no systemic symptoms then"
    ],
    [
      "EpiPen",
      "Does not carry one"
    ],
    [
      "Key",
      "Needs venom testing in 4-6 weeks and VIT if positive"
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
  "teachingPoints": {
    "keyLearning": [
      "Hymenoptera venom allergy affects 0.5–3% of adults. Large local reactions (>10 cm, >24h) do NOT predict future systemic anaphylaxis — systemic reaction risk after large local reaction is only ~5–10%.",
      "Venom immunotherapy (VIT) is 95%+ effective at preventing future systemic reactions and is indicated for: adults with any systemic reaction (even urticaria-only), children with moderate-severe systemic reactions (not urticaria-only). Standard duration 3–5 years.",
      "Mastocytosis patients with venom anaphylaxis: VIT indicated AND continued lifelong (do not stop at 5 years). Baseline tryptase should be checked in all venom anaphylaxis patients — elevated tryptase predicts VIT non-response and future fatal reactions."
    ],
    "boardPearls": [
      "Hymenoptera order: honeybee (Apis mellifera), yellow jacket, yellow hornet, white-faced hornet, paper wasp. Fire ant (Solenopsis) in southeast US.",
      "Venom cross-reactivity: yellow jacket/hornet/wasp share Antigen 5. Honeybee venom distinct — separate testing needed.",
      "VIT indications: adults — any systemic reaction (including urticaria-only). Children — moderate-severe systemic reaction (anaphylaxis). NOT for large local reactions.",
      "VIT duration: standard 3–5 years. Mastocytosis or severe reactions: lifelong.",
      "Tryptase screening: all venom anaphylaxis patients. Baseline >11.4 → mastocytosis workup. Elevated tryptase = risk for more severe future reactions.",
      "Field treatment: remove bee stinger immediately (any method — scrape or pull equally effective). Epinephrine IM. Call 911."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Kenneth appears anxious and mildly short of breath, speaking in brief sentences due to throat discomfort. He is cooperative but visibly distressed, frequently touching his throat and asking if this reaction is serious. He readily provides information about the sting but seems surprised by the severity of his current symptoms compared to his previous mild reaction.",
    "interviewQuestions": [
      "Can you describe exactly what happened when you were stung?",
      "What symptoms did you notice first and how quickly did they develop?",
      "Are you having any difficulty breathing or swallowing?",
      "Can you describe the skin reaction you're experiencing?",
      "Tell me about your previous reaction to a bee sting 2 years ago",
      "Do you carry an EpiPen or have any emergency medications?",
      "Have you taken any medications since the sting occurred?",
      "Are you experiencing any chest pain, nausea, or dizziness?",
      "What were you doing when you felt like you might pass out?",
      "Do you have any ongoing medical conditions or take regular medications?",
      "Any known allergies to medications, foods, or other substances?",
      "Has anyone in your family had severe allergic reactions?",
      "Do you work outdoors frequently or have regular exposure to stinging insects?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating right now. My throat feels tight and I'm worried about this reaction.",
      "onset": "I was mowing my lawn about 30 minutes ago when a yellow jacket stung me on my forearm. Within 10-15 minutes I started breaking out in hives and my throat began feeling tight.",
      "character": "My throat feels like it's closing up - tight and scratchy. The hives are itchy and burning, much worse than last time.",
      "location": "The sting is on my right forearm, but the hives are all over my body - chest, back, arms. The throat tightness is the scariest part.",
      "severity": "The throat tightness is about a 7 out of 10 and really scary. The hives are maybe a 6 - very uncomfortable and itchy.",
      "aggravating": "The symptoms seem to be getting worse on their own. Moving around made me feel more dizzy and like I might faint.",
      "relieving": "Nothing has helped yet. I came straight here when I started feeling faint and my throat got tight.",
      "associated": "I have widespread hives, throat tightness, felt like I was going to pass out when I stood up quickly, and I feel short of breath.",
      "denies": "No chest pain, no vomiting, no loss of consciousness, no tongue swelling that I can tell.",
      "history": "Two years ago I got stung by a bee and had a big red swollen area on my leg for about a week, but nothing like this. No throat problems or hives then.",
      "medications": "Lisinopril; Atorvastatin",
      "allergies": "Yellow jacket venom",
      "family": "No one in my family has had serious allergic reactions that I know of.",
      "social": "I work in an office but do yard work on weekends. I don't smoke, drink maybe 2-3 beers a week, no drugs. I spend a good amount of time outdoors."
    },
    "examManeuvers": [
      "Inspect skin for urticaria and angioedema",
      "Examine oropharynx and neck for swelling",
      "Auscultate heart sounds",
      "Auscultate lung sounds",
      "Assess peripheral pulses",
      "Examine sting site on forearm",
      "Check capillary refill and skin perfusion",
      "Assess mental status and orientation",
      "Palpate lymph nodes",
      "Perform orthostatic vital signs"
    ],
    "examFindings": {
      "Inspect skin for urticaria and angioedema": "Widespread urticarial rash on chest, back, arms, and legs with raised erythematous wheals. Mild periorbital edema present.",
      "Examine oropharynx and neck for swelling": "Mild erythema of posterior pharynx, no obvious tongue or uvular swelling, neck appears normal without stridor.",
      "Auscultate heart sounds": "Tachycardic regular rhythm, no murmurs, rubs, or gallops appreciated.",
      "Auscultate lung sounds": "Clear to auscultation bilaterally, no wheezing, stridor, or decreased air movement.",
      "Assess peripheral pulses": "Radial and dorsalis pedis pulses present but weak and rapid.",
      "Examine sting site on forearm": "Single puncture wound on right forearm with surrounding erythema and mild swelling, stinger not visualized.",
      "Check capillary refill and skin perfusion": "Capillary refill 3-4 seconds, skin appears pale and cool.",
      "Assess mental status and orientation": "Alert and oriented x3, anxious but appropriate, no confusion.",
      "Palpate lymph nodes": "No significant cervical, axillary, or inguinal lymphadenopathy.",
      "Perform orthostatic vital signs": "Unable to obtain due to patient feeling faint when standing, reports near-syncope with position changes."
    },
    "ddxTargets": [
      "Anaphylaxis (correct diagnosis)",
      "Severe allergic reaction without anaphylaxis",
      "Vasovagal syncope with concurrent allergic reaction",
      "Angioedema",
      "Cardiogenic shock",
      "Anxiety/panic attack with urticaria",
      "Systemic mastocytosis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the obvious insect sting and missing the severity of systemic involvement, or focusing only on cutaneous symptoms while underestimating cardiovascular compromise.",
      "prematureClosure": "May diagnose simple allergic reaction and miss anaphylaxis criteria, particularly the hypotension and near-syncope indicating cardiovascular involvement.",
      "availabilityBias": "Previous experience with mild local reactions to stings may lead to underestimating this patient's systemic reaction severity."
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities. Given that this patient has both cutaneous and systemic symptoms after an allergen exposure, what specific criteria would help you differentiate between a severe allergic reaction and anaphylaxis? What questions about timing and progression would be most important?",
      "phase5": "Now that you have the full clinical picture, let's think systematically about this patient's presentation. You have skin involvement, possible respiratory symptoms, cardiovascular changes, and a clear trigger. How do these findings fit together, and what does the combination of hypotension with multi-system involvement suggest?",
      "finalDebrief": "This case illustrates the progression from localized to systemic allergic reactions. Kenneth's previous large local reaction was a risk factor for future severe reactions. The key learning point is recognizing anaphylaxis requires multi-system involvement - here we had cutaneous (urticaria), possible respiratory (throat tightness), and cardiovascular (hypotension, near-syncope) systems involved. This patient will need epinephrine, close monitoring, and outpatient allergy follow-up for venom immunotherapy consideration."
    }
  }
};
