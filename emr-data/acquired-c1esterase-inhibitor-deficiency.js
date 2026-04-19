/* emr-data/acquired-c1esterase-inhibitor-deficiency.js — Multi-Setting Allergy Case: Acquired C1-INH Deficiency */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Harold Jefferson",
  "patientHPI": "My face has been swelling up lately, especially around my lips and eyes, and it's been happening more often since my cancer diagnosis - the swelling comes and goes but it's really bothersome.",
      "dob": "08/18/1962",
      "age": "64",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-794647",
      "language": "English",
      "race": "Black/African American",
      "phone": "(504) 555-5232",
      "email": "harold.jefferson@email.com",
      "address": "8565 Walnut Dr, Kansas City, MO 64120",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "Publix Pharmacy — Weston Rd",
      "emergencyContact": {
        "name": "Jennifer Jefferson",
        "phone": "(503) 555-5581",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
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
      "No family history of angioedema"
    ],
    "socialHistory": [
      [
        "Oncology",
        "Rituximab for B-cell lymphoma"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "New-onset angioedema in patient with B-cell lymphoma",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH Deficiency",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Rituximab",
          "dose": "",
          "route": "IV",
          "frequency": "Per oncology",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "138/82",
          "hr": "88",
          "rr": "16",
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
          "accession": "LAB-835110",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
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
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
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
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
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
          "cc": "New-onset angioedema in patient with B-cell lymphoma",
          "hpi": "Harold Jefferson presents with new-onset angioedema in patient with b-cell lymphoma.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for workup of acquired angioedema in setting of lymphoma",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH Deficiency",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "C1-INH concentrate",
          "dose": "20 IU/kg",
          "route": "IV",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Tranexamic acid",
          "dose": "1g",
          "route": "PO",
          "frequency": "TID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "132/78",
          "hr": "82",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-270126",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
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
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
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
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
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
          "cc": "Admitted for workup of acquired angioedema in setting of lymphoma",
          "hpi": "Harold Jefferson presents with admitted for workup of acquired angioedema in setting of lymphoma.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — distinguish acquired vs hereditary C1-INH deficiency",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH Deficiency",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Tranexamic acid",
          "dose": "1g",
          "route": "PO",
          "frequency": "TID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "130/78",
          "hr": "78",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-823405",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
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
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
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
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
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
          "cc": "A/I consult — distinguish acquired vs hereditary C1-INH deficiency",
          "hpi": "Harold Jefferson presents with a/i consult — distinguish acquired vs hereditary c1-inh deficiency.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "A/I follow-up — angioedema control with lymphoma treatment",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH Deficiency",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Tranexamic acid",
          "dose": "1g",
          "route": "PO",
          "frequency": "TID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Rituximab",
          "dose": "",
          "route": "IV",
          "frequency": "Per oncology",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "128/76",
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
          "accession": "LAB-532926",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "242",
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
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
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
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
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
          "cc": "A/I follow-up — angioedema control with lymphoma treatment",
          "hpi": "Harold Jefferson presents with a/i follow-up — angioedema control with lymphoma treatment.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Harold Jefferson",
    "dob": "08/18/1962",
    "age": "64",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-794647",
    "language": "English",
    "race": "Black/African American",
    "phone": "(630) 555-5526",
    "email": "harold.jefferson@email.com",
    "address": "8105 Dogwood Ln, Denver, CO 80210",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Jennifer Jefferson",
      "phone": "(619) 555-1166",
      "relationship": "Spouse"
    },
    "chiefComplaint": "New-onset angioedema in patient with B-cell lymphoma",
    "diagnosis": "Acquired C1-INH Deficiency"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Acquired C1-INH Deficiency",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Rituximab",
      "dose": "",
      "route": "IV",
      "frequency": "Per oncology",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "138/82",
      "hr": "88",
      "rr": "16",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "New-onset angioedema in patient with B-cell lymphoma",
      "hpi": "Harold Jefferson presents with new-onset angioedema in patient with b-cell lymphoma.",
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
      "accession": "LAB-835110",
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
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
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
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
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
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
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
    "No family history of angioedema"
  ],
  "socialHistory": [
    [
      "Oncology",
      "Rituximab for B-cell lymphoma"
    ]
  ]
,"references":[
  {
    "id": "WAO-HAE-2022",
    "title": "International WAO/EAACI guideline for management of hereditary angioedema — 2021 revision",
    "authors": "Maurer M, Magerl M, Betschel S, et al.",
    "journal": "Allergy",
    "year": 2022,
    "doi": "10.1111/all.15214",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9541881/",
    "openAccess": true,
    "validates": [
      "HAE diagnosis: C4 screening, C1-INH level/function",
      "C1q distinguishes acquired from hereditary",
      "On-demand icatibant",
      "Lanadelumab prophylaxis",
      "Estrogen triggers: OCPs contraindicated"
    ]
  },
  {
    "id": "Acquired-C1INH-2010",
    "title": "Acquired angioedema",
    "authors": "Cicardi M, Zanichelli A.",
    "journal": "Allergy Asthma Clin Immunol",
    "year": 2010,
    "doi": "10.1186/1710-1492-6-14",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2904712/",
    "openAccess": true,
    "validates": [
      "C1q LOW in acquired, NORMAL in HAE",
      "Anti-C1-INH antibodies",
      "MGUS/lymphoproliferative association",
      "Rituximab for refractory"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "Acquired C1-INH deficiency (AAE) presents identically to hereditary HAE but occurs in adults >40 years with no family history. Mechanism: consumption of C1-INH by autoantibodies (anti-C1-INH IgG) OR consumption by malignant B-cell clones expressing C1-INH substrate.",
      "Key complement pattern distinguishing AAE from HAE: C1q is LOW in AAE (complement activation extends to C1q level) but NORMAL in HAE (C4 is the primary complement consumed in HAE). This is the most testable differentiator.",
      "Associated conditions: B-cell lymphoma, MGUS, multiple myeloma, SLE. ALL patients with new-onset AAE require lymphoma/B-cell malignancy workup."
    ],
    "boardPearls": [
      "AAE vs HAE: AAE — adult onset, no family history, C1q LOW, malignancy association. HAE — younger onset, positive family history, C1q NORMAL.",
      "Complement in AAE: C4 low + C3 low/normal + C1-INH low + C1q LOW.",
      "Complement in HAE Type I: C4 low + C3 normal + C1-INH low + C1q NORMAL.",
      "AAE workup: SPEP, UPEP, flow cytometry for B-cell clone, CT chest/abdomen/pelvis for lymphadenopathy, bone marrow biopsy if indicated.",
      "AAE treatment: same acute agents as HAE (C1-INH concentrate, icatibant). Treat underlying malignancy if identified — may resolve AAE.",
      "Anti-C1-INH antibodies: present in ~60% of AAE. Rituximab effective in autoimmune AAE."
    ]
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
        "phase2": "You've reviewed Harold Jefferson's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Harold appears anxious and concerned about his facial swelling, frequently touching his swollen lips and eyelids. He is cooperative and forthcoming with information, though clearly worried about how this relates to his cancer treatment. His voice sounds slightly muffled due to the swelling.",
    "interviewQuestions": [
        "When did you first notice the swelling in your face?",
        "Did the swelling come on suddenly or gradually?",
        "Where exactly is the swelling located?",
        "Have you had any difficulty breathing or swallowing?",
        "Have you noticed any swelling in your tongue or throat?",
        "Is there any itching, rash, or hives anywhere on your body?",
        "Have you had any episodes like this before?",
        "When was your last rituximab infusion?",
        "Have you started any new medications recently?",
        "Have you been exposed to any new foods, chemicals, or allergens?",
        "Do you have any abdominal pain or cramping?",
        "Has anyone in your family ever had unexplained swelling episodes?",
        "How long have you been receiving treatment for your lymphoma?"
    ],
    "patientResponses": {
        "default": "I'm not sure I understand what you're asking. Could you rephrase that? I'm mainly concerned about this swelling in my face.",
        "onset": "I woke up this morning and noticed my lips felt thick. By afternoon, my eyelids started swelling too. It's been getting progressively worse over the past 8 hours.",
        "character": "It's a painless, soft swelling. My face feels tight and heavy, especially around my eyes and mouth.",
        "location": "Mainly my upper and lower lips, both eyelids, and I can feel some swelling in my cheeks. It's mostly on the right side but spreading to the left.",
        "severity": "I'd say it's about a 6 out of 10 for concern level. It's not painful, but it's making it harder to speak clearly and I'm worried about breathing.",
        "aggravating": "I haven't noticed anything that makes it worse. It just seems to keep progressing on its own.",
        "relieving": "I tried taking some Benadryl a few hours ago, but it doesn't seem to have helped at all.",
        "associated": "No itching, no rash, no hives. I don't have any trouble breathing right now, but I'm worried it might get worse.",
        "denies": "No difficulty breathing or swallowing yet, no abdominal pain, no urticaria, no recent illness or fever.",
        "history": "I've never had anything like this before in my life. No previous allergic reactions or unexplained swelling.",
        "medications": "Rituximab",
        "allergies": "NKDA",
        "family": "No family history of angioedema. My parents and siblings never had anything like unexplained swelling episodes.",
        "social": "I'm retired from accounting. I don't smoke, drink occasionally with dinner. I've been getting rituximab treatments for my B-cell lymphoma for the past 6 months."
    },
    "examManeuvers": [
        "Inspect face and periorbital regions",
        "Examine lips and oral mucosa",
        "Inspect throat and uvula",
        "Palpate neck for lymphadenopathy",
        "Auscultate lungs",
        "Examine skin for urticaria",
        "Palpate abdomen",
        "Assess voice quality and speech",
        "Examine extremities for swelling",
        "Assess airway patency"
    ],
    "examFindings": {
        "Inspect face and periorbital regions": "Marked asymmetric periorbital edema, more pronounced on right side, non-pitting, extending to cheeks",
        "Examine lips and oral mucosa": "Significant lip swelling, particularly upper lip, mucosa appears normal without erythema or lesions",
        "Inspect throat and uvula": "Uvula appears normal, no obvious laryngeal edema, throat not erythematous",
        "Palpate neck for lymphadenopathy": "No cervical lymphadenopathy, neck soft and non-tender",
        "Auscultate lungs": "Clear breath sounds bilaterally, no wheezing or stridor",
        "Examine skin for urticaria": "No urticaria, rash, or erythema noted on trunk or extremities",
        "Palpate abdomen": "Soft, non-tender, no organomegaly or masses",
        "Assess voice quality and speech": "Voice slightly muffled due to lip swelling but intelligible, no stridor",
        "Examine extremities for swelling": "No peripheral edema in hands or feet",
        "Assess airway patency": "Airway patent, no respiratory distress, speaking in full sentences"
    },
    "ddxTargets": [
        "Acquired C1-INH deficiency (correct diagnosis)",
        "Drug-induced angioedema",
        "Hereditary angioedema",
        "Anaphylaxis",
        "Superior vena cava syndrome",
        "Allergic angioedema",
        "Cellulitis"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on drug allergy due to recent rituximab treatment, missing the connection between B-cell lymphoma and acquired C1-INH deficiency",
        "prematureClosure": "May stop thinking after considering allergic reaction, failing to consider the underlying pathophysiology related to his lymphoma",
        "availabilityBias": "Common focus on allergic causes of angioedema may overshadow the rarer acquired C1-INH deficiency despite clear association with B-cell malignancies"
    },
    "coachPrompts": {
        "phase2": "Before you interview the patient, think about the different mechanisms that can cause angioedema. What's unique about this patient's medical history that might point you toward a specific pathway? Consider both allergic and non-allergic causes.",
        "phase5": "Now that you've gathered your history and physical exam findings, what stands out about the pattern of this angioedema? How does the absence of urticaria and the patient's underlying B-cell lymphoma help narrow your differential diagnosis?",
        "finalDebrief": "Let's trace through how this case should have evolved. The key was recognizing that B-cell lymphomas can consume C1-INH or produce autoantibodies against it, leading to acquired C1-INH deficiency. This causes bradykinin-mediated angioedema that doesn't respond to antihistamines and isn't associated with urticaria - exactly what we saw here."
    }
}
};