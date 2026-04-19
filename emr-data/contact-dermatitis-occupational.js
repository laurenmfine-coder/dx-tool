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
      "pharmacy": "CVS Pharmacy — Main St",
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
    "phone": "(803) 555-2391",
    "email": "danielle.rivera@email.com",
    "address": "7359 E Roosevelt Rd, Albuquerque, NM 87108",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
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
  },
  "guided": {
    "supported": true,
    "patientPersona": "Danielle Rivera appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did healthcare worker with chronic hand eczema worsening despite glove changes start?",
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
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started Danielle Rivera presents with healthcare worker with chronic hand eczema worseni.'",
        "character": "'It's healthcare worker with chronic hand eczema worsening despite glove changes \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Clobetasol 0.05% ointment; Petroleum jelly.'",
        "allergies": "'My allergies are Latex.'",
        "family": "Mother: eczema",
        "social": "Occupation: ICU nurse \u2014 wears nitrile gloves 8+ hours/day, washes hands 40+ times/shift  Patch testing: Pending \u2014 referred for TRUE test and extended panel  Key considerations: Differentiate irritant vs allergic contact dermatitis, latex IgE-mediated vs Type IV to rubber accelerators"
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
        "phase2": "You've reviewed Danielle Rivera's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};