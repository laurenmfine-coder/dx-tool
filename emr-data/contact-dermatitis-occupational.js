/* emr-data/contact-dermatitis-occupational.js — Multi-Setting Allergy Case: Occupational Contact Dermatitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Danielle Rivera",
      "patientHPI": "I work in healthcare and yesterday my hands suddenly puffed up like balloons right after I put on my gloves at work. They're swollen, red, and itchy, and this has never happened to me before. I'm really concerned because I need my hands to do my job properly.",
      "dob": "10/05/1991",
      "age": "35",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-756545",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(504) 555-6105",
      "email": "danielle.rivera@email.com",
      "address": "2679 Elm St, Memphis, TN 38108",
      "insurance": "Medicaid",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Michael Rivera",
        "phone": "(720) 555-6314",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Latex",
        "reaction": "Contact urticaria (suspected)",
        "severity": "Moderate",
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
      "Mother: eczema"
    ],
    "socialHistory": [
      [
        "Occupation",
        "ICU nurse \u2014 wears nitrile gloves 8+ hours/day, washes hands 40+ times/shift"
      ],
      [
        "Patch testing",
        "Pending \u2014 referred for TRUE test and extended panel"
      ],
      [
        "Key considerations",
        "Differentiate irritant vs allergic contact dermatitis, latex IgE-mediated vs Type IV to rubber accelerators"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Healthcare worker with acute hand swelling \u2014 latex contact urticaria",
        "diagnosis": "Occupational Contact Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic hand dermatitis for 8 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Healthcare worker \u2014 frequent glove use and hand washing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Clobetasol 0.05% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to hands",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Petroleum jelly",
          "dose": "",
          "route": "Topical",
          "frequency": "After hand washing",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Diphenhydramine",
          "dose": "50mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Methylprednisolone",
          "dose": "60mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "122/76",
          "hr": "92",
          "rr": "18",
          "temp": "36.8\u00b0C",
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
          "accession": "LAB-331063",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "test": "Latex Ig E",
                  "value": "8.2",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "Healthcare worker with acute hand swelling \u2014 latex contact urticaria",
          "hpi": "Danielle Rivera \u2014 Healthcare worker with acute hand swelling \u2014 latex contact urticaria",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief observation after latex contact urticaria with mild systemic symptoms",
        "diagnosis": "Occupational Contact Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic hand dermatitis for 8 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Healthcare worker \u2014 frequent glove use and hand washing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Clobetasol 0.05% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to hands",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Petroleum jelly",
          "dose": "",
          "route": "Topical",
          "frequency": "After hand washing",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
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
          "accession": "LAB-331063",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "test": "Latex Ig E",
                  "value": "8.2",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Brief observation after latex contact urticaria with mild systemic symptoms",
          "hpi": "Danielle Rivera \u2014 Brief observation after latex contact urticaria with mild systemic symptoms",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 differentiate irritant vs allergic contact dermatitis, patch testing",
        "diagnosis": "Occupational Contact Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic hand dermatitis for 8 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Healthcare worker \u2014 frequent glove use and hand washing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Clobetasol 0.05% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to hands",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Petroleum jelly",
          "dose": "",
          "route": "Topical",
          "frequency": "After hand washing",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/68",
          "hr": "72",
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
          "accession": "LAB-331063",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "test": "Latex Ig E",
                  "value": "8.2",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult \u2014 differentiate irritant vs allergic contact dermatitis, patch testing",
          "hpi": "Danielle Rivera \u2014 A/I consult \u2014 differentiate irritant vs allergic contact dermatitis, patch testing",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Healthcare worker with chronic hand eczema worsening despite glove changes",
        "diagnosis": "Occupational Allergic Contact Dermatitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic hand dermatitis for 8 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Healthcare worker \u2014 frequent glove use and hand washing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Clobetasol 0.05% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to hands",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Petroleum jelly",
          "dose": "",
          "route": "Topical",
          "frequency": "After hand washing",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/68",
          "hr": "72",
          "rr": "14",
          "temp": "36.8\u00b0C",
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
          "accession": "LAB-331063",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "test": "Latex Ig E",
                  "value": "8.2",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Healthcare worker with chronic hand eczema worsening despite glove changes",
          "hpi": "Danielle Rivera presents with healthcare worker with chronic hand eczema worsening despite glove changes.",
          "exam": "See documentation.",
          "assessment": "Occupational Allergic Contact Dermatitis",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Danielle Rivera",
    "dob": "10/05/1991",
    "age": "35",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-756545",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(803) 555-2391",
    "email": "danielle.rivera@email.com",
    "address": "7359 E Roosevelt Rd, Albuquerque, NM 87108",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Michael Rivera",
      "phone": "(312) 555-3549",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Healthcare worker with chronic hand eczema worsening despite glove changes",
    "diagnosis": "Occupational Allergic Contact Dermatitis"
  },
  "problems": [
    {
      "problem": "Occupational allergic contact dermatitis \u2014 rubber accelerators (thiuram mix)",
      "icd": "L23.5",
      "onset": "2022",
      "status": "Active",
      "notes": "Patch test positive thiuram mix +3; negative latex; glove changes to nitrile insufficient if nitrile contains thiurams"
    },
    {
      "problem": "Hand eczema, chronic, refractory",
      "icd": "L30.4",
      "onset": "2022",
      "status": "Active",
      "notes": "Distributed at glove contact sites; worse after shifts; improved on vacation"
    },
    {
      "problem": "Healthcare worker occupational exposure",
      "icd": "Z77.110",
      "onset": "2022",
      "status": "Active",
      "notes": "Nurse, 12-hour shifts; high-volume glove use"
    }
  ],
  "medications": [
    {
      "name": "Triamcinolone acetonide 0.1% cream BID",
      "sig": "Apply thin layer to affected areas twice daily; do not use under occlusion",
      "prescriber": "Dr. Rodriguez",
      "start": "10/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Tacrolimus 0.1% ointment BID (maintenance)",
      "sig": "Apply twice daily to hands for maintenance; steroid-sparing",
      "prescriber": "Dr. Rodriguez",
      "start": "10/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet daily for itch control",
      "prescriber": "Dr. Rodriguez",
      "start": "10/2024",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Latex",
      "reaction": "Contact urticaria (suspected)",
      "severity": "Moderate",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "112/68",
      "hr": "72",
      "rr": "14",
      "temp": "36.8\u00b0C",
      "spo2": "99%",
      "pain": "4/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Office Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Healthcare worker with chronic hand eczema worsening despite glove changes",
      "hpi": "Danielle Rivera presents with healthcare worker with chronic hand eczema worsening despite glove changes.",
      "exam": "See documentation.",
      "assessment": "Occupational Allergic Contact Dermatitis",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "10/28/2024",
      "panel": "Patch Testing \u2014 Baseline Series plus Rubber Chemicals",
      "results": [
        {
          "test": "Thiuram mix (rubber accelerator)",
          "value": "+++",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Carba mix (rubber accelerator)",
          "value": "++",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Mercaptobenzothiazole",
          "value": "+",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Latex (Hevea brasiliensis)",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Nickel sulfate",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Formaldehyde",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Latex RAST (IgE)",
          "value": "<0.35",
          "unit": "kUA/L",
          "ref": "<0.35",
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
    "Mother: eczema"
  ],
  "socialHistory": [
    [
      "Occupation",
      "ICU nurse \u2014 wears nitrile gloves 8+ hours/day, washes hands 40+ times/shift"
    ],
    [
      "Patch testing",
      "Pending \u2014 referred for TRUE test and extended panel"
    ],
    [
      "Key considerations",
      "Differentiate irritant vs allergic contact dermatitis, latex IgE-mediated vs Type IV to rubber accelerators"
    ]
  ],
  "references": [
    {
      "id": "Patch-Testing-PP-2015",
      "title": "Patch testing",
      "authors": "Fonacier L, Bernstein DI, Borish L, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2015,
      "doi": "10.1016/j.jaci.2015.02.033",
      "url": "https://www.jacionline.org/article/S0091-6749(15)00322-9/fulltext",
      "openAccess": true,
      "validates": [
        "Patch test interpretation",
        "PPD as common occupational allergen",
        "PPD-free alternatives for hairstylists",
        "Nitrile vs latex gloves"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "Allergic contact dermatitis (ACD) is Type IV (T-cell mediated, delayed hypersensitivity) \u2014 NOT IgE-mediated. SPT will be negative. Patch testing is the diagnostic gold standard.",
      "Patch testing protocol: Finn chambers applied to upper back \u00d7 48h \u2192 removed at 48h (read 1) \u2192 re-read at 96h (read 2). BOTH readings required \u2014 late reactions (96h only) would be missed without second read.",
      "Occupational ACD most common sensitizers: nickel (#1 overall), fragrance mix, balsam of Peru, rubber accelerators (thiurams, carbamates \u2014 latex gloves), epoxy resin (construction workers), paraphenylenediamine (PPD \u2014 hair dye, black henna).",
      "Nickel ACD: elicited by nickel in costume jewelry, belt buckles, jeans buttons, cell phones, watchbands. Treatment: strict nickel avoidance. Dimethylglyoxime test can detect nickel in metal objects.",
      "Irritant contact dermatitis (ICD) vs ACD: ICD is non-immunologic (direct chemical damage). No sensitization needed. Occurs in anyone with sufficient exposure. Patch test NEGATIVE. ICD: hairdressers (detergents), healthcare workers (hand washing), food handlers.",
      "Systemic contact dermatitis: after sensitization to a topical allergen, systemic exposure to the same chemical (oral, IV) can trigger widespread ACD \u2014 baboon syndrome (perianal + flexural erythema) with systemic nickel or balsam of Peru ingestion."
    ],
    "boardPearls": [
      "ACD = Type IVa (Th1 / CD4+ contact hypersensitivity). Patch test positive at 48\u201396h.",
      "Patch test interpretation: erythema only = negative/irritant. Erythema + papules = 1+. Erythema + papules + vesicles = 2+. Confluent vesicles, spreading, bullae = 3+ (strong positive).",
      "Most common patch test positives: nickel, fragrance mix, balsam of Peru, thimerosal, cobalt, rubber mix, neomycin, quaternium-15.",
      "Neomycin ACD: topical antibiotic in wound care products. Classic: eczematous reaction to antibiotic ointment (Neosporin) used on wound.",
      "PPD (paraphenylenediamine): hair dye + black henna tattoos. Sensitization \u2192 permanent hair dye allergy. Cross-reacts with azo dyes, sulfonamides, benzocaine.",
      "Rubber accelerators (thiurams, carbamates): latex gloves \u2192 ACD on dorsal hands. Separate from latex protein (Type I IgE) anaphylaxis.",
      "Treatment: identify and avoid allergen + potent TCS for acute flares. Long-term: barrier protection, allergen-free gloves/products."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Danielle appears frustrated and tired, frequently looking at her hands with visible distress. She's very forthcoming about her symptoms and work demands, expressing concern about her ability to continue working as an ICU nurse. She demonstrates moderate anxiety about the persistent nature of her condition despite multiple interventions.",
    "interviewQuestions": [
      "Can you describe exactly when your hand problems first started?",
      "What do your hands look like right now - can you describe the appearance?",
      "Where exactly on your hands are the symptoms worst?",
      "On a scale of 1-10, how would you rate your current hand discomfort?",
      "What makes your hand symptoms worse during your work shifts?",
      "Have you found anything that provides relief for your hands?",
      "Do you have any itching, burning, or other sensations in your hands?",
      "Have you noticed any triggers outside of work that affect your hands?",
      "Tell me about your typical work routine and glove use",
      "Have you had any similar skin problems in other areas of your body?",
      "What treatments have you tried so far for your hands?",
      "Do you have any known allergies, especially to materials you work with?",
      "Does anyone in your family have similar skin conditions?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you clarify how that relates to my hand problem?",
      "onset": "It started about 8 months ago, maybe a month after I transferred to the ICU. At first I thought it was just from all the extra hand washing, but it's gotten progressively worse.",
      "character": "My hands are red, dry, and cracked. The skin feels thick and rough in some areas, and there are small blisters that come and go. Sometimes the skin actually splits open.",
      "location": "It's worst on my fingers and the backs of my hands, especially between my fingers and around my knuckles. My palms are less affected but still dry.",
      "severity": "Right now it's about a 6 or 7 out of 10. It's really interfering with my work and even simple tasks at home like washing dishes or opening jars.",
      "aggravating": "Definitely gets worse during work - all the hand washing, sanitizer, and wearing gloves for long periods. Even the nitrile gloves seem to make it worse now.",
      "relieving": "The prescription ointment helps some, and I've been using petroleum jelly at night. Taking breaks from gloves when possible helps a little.",
      "associated": "Yes, there's constant itching, especially at night. Sometimes burning when I wash my hands or use sanitizer. My hands feel tight and uncomfortable.",
      "denies": "No rash anywhere else on my body, no fever, no joint pain, no eye or respiratory symptoms.",
      "history": "I've had some mild eczema as a child, but nothing like this. Never had hand problems before starting in the ICU.",
      "medications": "Clobetasol 0.05% ointment; Petroleum jelly",
      "allergies": "Latex",
      "family": "My mother has eczema, has had it since she was young. She gets flare-ups on her arms and legs.",
      "social": "I'm an ICU nurse, wearing nitrile gloves 8-10 hours per shift, washing my hands probably 40-50 times per shift. I don't smoke, drink occasionally on weekends, no drugs."
    },
    "examManeuvers": [
      "Inspect dorsal surfaces of hands",
      "Inspect palmar surfaces and fingertips",
      "Inspect web spaces between fingers",
      "Inspect wrists and forearms",
      "Palpate affected areas for thickness/lichenification",
      "Assess for fissuring or cracking",
      "Look for vesicles or pustules",
      "Check fingernails for changes",
      "Examine other potential eczema sites (antecubital fossae)",
      "Assess severity using standardized scoring"
    ],
    "examFindings": {
      "Inspect dorsal surfaces of hands": "Bilateral erythematous, scaly plaques with areas of lichenification, most prominent over knuckles and finger joints",
      "Inspect palmar surfaces and fingertips": "Mild erythema and scaling on palms, fingertips show fissuring and dry, thickened skin",
      "Inspect web spaces between fingers": "Significant erythema, scaling, and small fissures in web spaces, particularly between index and middle fingers bilaterally",
      "Inspect wrists and forearms": "Mild erythema extending 2-3cm proximal to wrists bilaterally, consistent with glove contact pattern",
      "Palpate affected areas for thickness/lichenification": "Palpable thickening and lichenification over dorsal knuckles and web spaces",
      "Assess for fissuring or cracking": "Multiple small fissures present in web spaces and at fingertips, no active bleeding",
      "Look for vesicles or pustules": "Few small vesicles on lateral aspects of fingers, no pustules identified",
      "Check fingernails for changes": "Nails appear normal without pitting, ridging, or dystrophy",
      "Examine other potential eczema sites (antecubital fossae)": "Antecubital fossae clear, no evidence of atopic dermatitis elsewhere",
      "Assess severity using standardized scoring": "Moderate to severe hand dermatitis with significant functional impairment"
    },
    "ddxTargets": [
      "Occupational allergic contact dermatitis \u2014 thiuram rubber accelerator hypersensitivity (correct)",
      "Irritant contact dermatitis \u2014 patch test positive distinguishes allergic from irritant",
      "Latex allergy (Type I, IgE-mediated) \u2014 latex IgE negative; patch test to latex negative",
      "Atopic dermatitis \u2014 distribution at glove sites, occupational correlation argues against primary AD",
      "Dyshidrotic eczema (pompholyx) \u2014 vesicular, palmar; not glove-distribution",
      "Tinea manuum \u2014 KOH prep would confirm; unilateral more typical"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on latex allergy history and missing that nitrile gloves can cause both irritant and allergic contact dermatitis through rubber accelerators",
      "prematureClosure": "May prematurely close on 'latex allergy' without considering that current symptoms are likely due to irritant contact dermatitis from frequent handwashing and occlusion, not latex exposure",
      "availabilityBias": "Healthcare worker hand dermatitis is common, but may miss considering less common causes like dyshidrotic eczema or psoriasis in this occupational context"
    },
    "coachPrompts": {
      "phase2": "Before interviewing the patient, think about the different mechanisms that can cause hand dermatitis in healthcare workers. What are the main categories of contact dermatitis, and how might they present differently? Consider both immediate and delayed hypersensitivity reactions.",
      "phase5": "Now that you've gathered your history and physical findings, consider the timeline and pattern of this patient's dermatitis. How do the distribution, morphology, and occupational factors help you differentiate between irritant versus allergic contact dermatitis? What role might her latex allergy play in her current presentation?",
      "finalDebrief": "This case highlights occupational irritant contact dermatitis, which is often multifactorial in healthcare workers. While the patient has a known latex allergy, her current symptoms are primarily due to irritant effects from frequent handwashing, sanitizers, and glove occlusion. The pending patch testing will help identify any additional contact allergens like rubber accelerators in nitrile gloves. How did your differential diagnosis evolve as you gathered more clinical information?",
      "final": "Diagnosis: occupational allergic contact dermatitis from Type IV (T-cell mediated) hypersensitivity to thiuram mix rubber accelerators in gloves. Key teaching points: (1) Distinguish Type I (latex IgE-mediated, immediate, anaphylaxis risk) from Type IV (rubber chemical, delayed, eczematous). Latex IgE negative here \u2014 this is NOT latex allergy. (2) Thiuram accelerators are in most rubber gloves including many nitrile products \u2014 simply switching to 'nitrile' is insufficient. Must specify accelerator-free nitrile gloves (e.g., Dermaprene, Mapa) or vinyl. (3) Patch testing is the gold standard for Type IV contact hypersensitivity \u2014 48h and 96h readings required. PPD, thiurams, carbas are common occupational culprits in healthcare workers. (4) Work accommodation: document the occupational diagnosis (required for OSHA/workers comp). Discuss with employee health for glove substitution accommodation. (5) Ongoing exposure despite treatment will lead to sensitization spread and chronic hand eczema \u2014 allergen avoidance is curative if caught early."
    }
  },
  "meta": {
    "diagnosis": "Occupational Allergic Contact Dermatitis \u2014 Rubber Accelerator (Thiuram) Hypersensitivity; Type IV (Delayed) Hypersensitivity"
  }
};
