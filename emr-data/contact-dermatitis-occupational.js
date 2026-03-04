/* emr-data/contact-dermatitis-occupational.js — Multi-Setting Allergy Case: Occupational Contact Dermatitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Danielle Rivera",
      "dob": "10/05/1991",
      "age": "35",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-756545",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(927) 355-4758",
      "email": "danielle.rivera@email.com",
      "address": "374 Oak St, Weston, FL 33330",
      "insurance": "Medicaid",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Michael Rivera",
        "phone": "(950) 283-8826",
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
        "ICU nurse — wears nitrile gloves 8+ hours/day, washes hands 40+ times/shift"
      ],
      [
        "Patch testing",
        "Pending — referred for TRUE test and extended panel"
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
        "chiefComplaint": "Healthcare worker with acute hand swelling — latex contact urticaria",
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
          "description": "Healthcare worker — frequent glove use and hand washing",
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
          "temp": "36.8°C",
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
          "cc": "Healthcare worker with acute hand swelling — latex contact urticaria",
          "hpi": "Danielle Rivera — Healthcare worker with acute hand swelling — latex contact urticaria",
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
          "description": "Healthcare worker — frequent glove use and hand washing",
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
          "hpi": "Danielle Rivera — Brief observation after latex contact urticaria with mild systemic symptoms",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — differentiate irritant vs allergic contact dermatitis, patch testing",
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
          "description": "Healthcare worker — frequent glove use and hand washing",
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
          "cc": "A/I consult — differentiate irritant vs allergic contact dermatitis, patch testing",
          "hpi": "Danielle Rivera — A/I consult — differentiate irritant vs allergic contact dermatitis, patch testing",
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
          "description": "Healthcare worker — frequent glove use and hand washing",
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
    "phone": "(927) 355-4758",
    "email": "danielle.rivera@email.com",
    "address": "374 Oak St, Weston, FL 33330",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Rivera",
      "phone": "(950) 283-8826",
      "relationship": "Spouse"
    },
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
      "description": "Healthcare worker — frequent glove use and hand washing",
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
      "temp": "36.8°C",
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
      "ICU nurse — wears nitrile gloves 8+ hours/day, washes hands 40+ times/shift"
    ],
    [
      "Patch testing",
      "Pending — referred for TRUE test and extended panel"
    ],
    [
      "Key considerations",
      "Differentiate irritant vs allergic contact dermatitis, latex IgE-mediated vs Type IV to rubber accelerators"
    ]
  ]
,"references":[
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
      "Allergic contact dermatitis (ACD) is Type IV (T-cell mediated, delayed hypersensitivity) — NOT IgE-mediated. SPT will be negative. Patch testing is the diagnostic gold standard.",
      "Patch testing protocol: Finn chambers applied to upper back × 48h → removed at 48h (read 1) → re-read at 96h (read 2). BOTH readings required — late reactions (96h only) would be missed without second read.",
      "Occupational ACD most common sensitizers: nickel (#1 overall), fragrance mix, balsam of Peru, rubber accelerators (thiurams, carbamates — latex gloves), epoxy resin (construction workers), paraphenylenediamine (PPD — hair dye, black henna).",
      "Nickel ACD: elicited by nickel in costume jewelry, belt buckles, jeans buttons, cell phones, watchbands. Treatment: strict nickel avoidance. Dimethylglyoxime test can detect nickel in metal objects.",
      "Irritant contact dermatitis (ICD) vs ACD: ICD is non-immunologic (direct chemical damage). No sensitization needed. Occurs in anyone with sufficient exposure. Patch test NEGATIVE. ICD: hairdressers (detergents), healthcare workers (hand washing), food handlers.",
      "Systemic contact dermatitis: after sensitization to a topical allergen, systemic exposure to the same chemical (oral, IV) can trigger widespread ACD — baboon syndrome (perianal + flexural erythema) with systemic nickel or balsam of Peru ingestion."
    ],
    "boardPearls": [
      "ACD = Type IVa (Th1 / CD4+ contact hypersensitivity). Patch test positive at 48–96h.",
      "Patch test interpretation: erythema only = negative/irritant. Erythema + papules = 1+. Erythema + papules + vesicles = 2+. Confluent vesicles, spreading, bullae = 3+ (strong positive).",
      "Most common patch test positives: nickel, fragrance mix, balsam of Peru, thimerosal, cobalt, rubber mix, neomycin, quaternium-15.",
      "Neomycin ACD: topical antibiotic in wound care products. Classic: eczematous reaction to antibiotic ointment (Neosporin) used on wound.",
      "PPD (paraphenylenediamine): hair dye + black henna tattoos. Sensitization → permanent hair dye allergy. Cross-reacts with azo dyes, sulfonamides, benzocaine.",
      "Rubber accelerators (thiurams, carbamates): latex gloves → ACD on dorsal hands. Separate from latex protein (Type I IgE) anaphylaxis.",
      "Treatment: identify and avoid allergen + potent TCS for acute flares. Long-term: barrier protection, allergen-free gloves/products."
    ]
  }
};