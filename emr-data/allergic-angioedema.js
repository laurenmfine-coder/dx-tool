/* emr-data/allergic-angioedema.js — Multi-Setting Allergy Case: Allergic Angioedema */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Priya Nair",
  "patientHPI": "About an hour after I took some ibuprofen for my headache, my lips started puffing up and I got these red bumps all over my arms and chest. I've never had anything like this happen with pain medication before.",
      "dob": "09/12/1991",
      "age": "35",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-234856",
      "language": "English",
      "race": "Asian",
      "phone": "(212) 555-2163",
      "email": "priya.nair@email.com",
      "address": "1261 Mulberry St, Denver, CO 80205",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "Publix Pharmacy — Weston Rd",
      "emergencyContact": {
        "name": "Michael Nair",
        "phone": "(713) 555-1964",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Aspirin",
        "reaction": "Angioedema",
        "severity": "Severe",
        "type": "Drug"
      },
      {
        "allergen": "Ibuprofen",
        "reaction": "Angioedema + hives",
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
      "Father: aspirin sensitivity"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Lip swelling and hives after ibuprofen",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "122/76",
          "hr": "96",
          "rr": "18",
          "temp": "37.0°C",
          "spo2": "98%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-984383",
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
          "cc": "Lip swelling and hives after ibuprofen",
          "hpi": "Priya Nair presents with lip swelling and hives after ibuprofen.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Observation after NSAID angioedema with partial airway involvement",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Diphenhydramine",
          "dose": "25mg",
          "route": "PO",
          "frequency": "Q6H",
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
          "accession": "LAB-550651",
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
          "cc": "Observation after NSAID angioedema with partial airway involvement",
          "hpi": "Priya Nair presents with observation after nsaid angioedema with partial airway involvement.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — NSAID cross-reactivity evaluation",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Acetaminophen",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "PRN (confirmed safe)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "116/72",
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
          "accession": "LAB-386558",
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
          "cc": "A/I consult — NSAID cross-reactivity evaluation",
          "hpi": "Priya Nair presents with a/i consult — nsaid cross-reactivity evaluation.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — NSAID avoidance plan, safe alternatives confirmed",
        "diagnosis": "Allergic Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Allergic Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
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
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-877336",
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
          "cc": "Follow-up — NSAID avoidance plan, safe alternatives confirmed",
          "hpi": "Priya Nair presents with follow-up — nsaid avoidance plan, safe alternatives confirmed.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Priya Nair",
    "dob": "09/12/1991",
    "age": "35",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-234856",
    "language": "English",
    "race": "Asian",
    "phone": "(414) 555-2104",
    "email": "priya.nair@email.com",
    "address": "8934 S Halsted St, Kansas City, MO 64123",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Michael Nair",
      "phone": "(312) 555-6413",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Lip swelling and hives after ibuprofen",
    "diagnosis": "Allergic Angioedema"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Allergic Angioedema",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
  "allergies": [
    {
      "allergen": "Aspirin",
      "reaction": "Angioedema",
      "severity": "Severe",
      "type": "Drug"
    },
    {
      "allergen": "Ibuprofen",
      "reaction": "Angioedema + hives",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "122/76",
      "hr": "96",
      "rr": "18",
      "temp": "37.0°C",
      "spo2": "98%",
      "pain": "4/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Lip swelling and hives after ibuprofen",
      "hpi": "Priya Nair presents with lip swelling and hives after ibuprofen.",
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
      "accession": "LAB-984383",
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
    "Father: aspirin sensitivity"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
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
]
,

  "teachingPoints": {
    "keyLearning": [
      "IgE-mediated (allergic) angioedema is histamine-driven and occurs within 30 minutes of allergen exposure. It commonly accompanies urticaria (combined urticaria + angioedema in ~50% of anaphylaxis cases).",
      "Angioedema without urticaria should prompt evaluation for bradykinin-mediated causes (HAE, ACEi angioedema) — these do NOT respond to antihistamines/epinephrine. The clinical key: allergic angioedema has urticaria + rapid onset; bradykinin angioedema has NO urticaria + slower onset.",
      "If anaphylaxis features are present with angioedema (hypotension, bronchospasm, loss of consciousness) — epinephrine IM is the primary treatment, not antihistamines."
    ],
    "boardPearls": [
      "Allergic angioedema: IgE + mast cell → histamine → Type I (immediate, <30 min). WITH urticaria in most cases.",
      "Bradykinin angioedema (HAE, ACEi): NO urticaria, slower onset (hours), longer duration (24–72h), does NOT respond to epinephrine/antihistamines.",
      "Angioedema differential: allergic (IgE, histamine) vs bradykinin (HAE, ACEi, acquired C1INH) vs idiopathic.",
      "Treatment allergic angioedema: epinephrine if anaphylaxis. H1 antihistamine (diphenhydramine, cetirizine). H2 blocker (famotidine) adjunct. Short OCS course.",
      "Airway angioedema: tongue/uvular/laryngeal — epinephrine IM first, prepare for intubation, ENT/anesthesia early involvement."
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
        "phase2": "You've reviewed Priya Nair's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Priya is anxious and concerned about her swollen appearance, speaking quickly and touching her face frequently. She is very forthcoming about details, worried this might happen again, and rates her distress as moderate due to the visible swelling affecting her confidence.",
    "interviewQuestions": [
        "When exactly did you first notice the lip swelling and hives?",
        "How long after taking the ibuprofen did your symptoms start?",
        "Can you describe exactly what the swelling and hives look like?",
        "Have you ever had a reaction like this to any medication before?",
        "What dose of ibuprofen did you take and why did you take it?",
        "Are you having any difficulty breathing or swallowing?",
        "Do you have any throat tightness or voice changes?",
        "Have you taken any other medications or eaten anything unusual recently?",
        "Do you have any known allergies to medications?",
        "Has anyone in your family had similar reactions to medications?",
        "Have you tried anything to treat the swelling or hives?",
        "Are the symptoms getting better, worse, or staying the same?",
        "Do you have any other medical conditions or take any regular medications?"
    ],
    "patientResponses": {
        "default": "I'm not sure what you mean. Could you ask that differently? I'm mostly worried about my face being so swollen.",
        "onset": "The swelling started about 45 minutes after I took two ibuprofen tablets for a headache. The hives appeared shortly after, maybe within an hour.",
        "character": "My lips feel tight and puffy, especially the lower lip. The hives are raised, red welts that are really itchy all over my arms and chest.",
        "location": "The swelling is mainly in my lower lip, though my upper lip is a bit puffy too. The hives are on my arms, chest, and some on my back.",
        "severity": "I'd say the discomfort is about a 6 out of 10. The itching is really bothersome and I'm worried about how I look. I can still eat and drink normally.",
        "aggravating": "Touching or rubbing the areas seems to make the itching worse. I'm worried that moving around might be making it spread.",
        "relieving": "I tried putting a cold compress on my lip which helped a little with the swelling. Nothing seems to help much with the itching.",
        "associated": "Just the swelling and hives. No trouble breathing, but I keep checking because I'm worried it might get worse.",
        "denies": "No difficulty breathing, no throat tightness, no nausea or vomiting, no dizziness, and my voice sounds normal to me.",
        "history": "I had a similar reaction to aspirin about three years ago, but it was milder. Just some hives on my arms, no facial swelling like this.",
        "medications": "no medications",
        "allergies": "Aspirin, Ibuprofen",
        "family": "My father has an aspirin sensitivity. He gets stomach upset and some skin reactions when he takes it.",
        "social": "I work as a graphic designer, mostly at a computer. I don't smoke, drink alcohol maybe once a week socially, and don't use any recreational drugs."
    },
    "examManeuvers": [
        "Inspect lips and perioral area",
        "Examine skin for urticarial lesions",
        "Assess airway patency and voice quality",
        "Palpate neck for lymphadenopathy",
        "Auscultate lungs for wheezing",
        "Examine oral cavity and tongue",
        "Assess for conjunctival swelling",
        "Check capillary refill and perfusion",
        "Palpate for facial tenderness",
        "Assess extent and distribution of rash"
    ],
    "examFindings": {
        "Inspect lips and perioral area": "Moderate non-pitting edema of lower lip, mild edema of upper lip, no cyanosis",
        "Examine skin for urticarial lesions": "Multiple raised erythematous wheals 0.5-2cm diameter on bilateral arms, chest, and upper back",
        "Assess airway patency and voice quality": "Voice clear, no stridor, no respiratory distress, airway patent",
        "Palpate neck for lymphadenopathy": "No cervical, supraclavicular, or submandibular lymphadenopathy",
        "Auscultate lungs for wheezing": "Clear breath sounds bilaterally, no wheezes, rales, or rhonchi",
        "Examine oral cavity and tongue": "Tongue normal size and color, no oral mucosal swelling, teeth and gums normal",
        "Assess for conjunctival swelling": "No periorbital edema, conjunctiva normal, no chemosis",
        "Check capillary refill and perfusion": "Capillary refill less than 2 seconds, good peripheral perfusion",
        "Palpate for facial tenderness": "Mild tenderness over swollen lip areas, no sinus tenderness",
        "Assess extent and distribution of rash": "Urticarial rash limited to arms, chest, and upper back, sparing face, legs, and abdomen"
    },
    "ddxTargets": [
        "NSAID-induced angioedema (correct diagnosis)",
        "Hereditary angioedema",
        "ACE inhibitor-induced angioedema",
        "Anaphylaxis",
        "Acute allergic reaction with laryngeal edema",
        "Contact dermatitis with secondary angioedema",
        "Idiopathic urticaria and angioedema"
    ],
    "biasFlags": {
        "anchoring": "May anchor on the obvious ibuprofen connection and miss exploring other potential triggers or underlying conditions like hereditary angioedema",
        "prematureClosure": "Might quickly diagnose drug allergy without fully assessing severity or considering progression to anaphylaxis",
        "availabilityBias": "Recent cases of anaphylaxis might lead to over-estimation of severity, or common drug allergies might lead to under-estimation of this patient's risk"
    },
    "coachPrompts": {
        "phase2": "Good start on your differential. Before you interview the patient, think about what key historical features would help you distinguish between a localized allergic reaction and a more systemic process like anaphylaxis. What timeline questions will be most important?",
        "phase5": "Now that you have the full history and exam, consider how the timing, pattern of symptoms, and physical findings help narrow your differential. What features make you more or less concerned about airway compromise? How does the family history influence your thinking?",
        "finalDebrief": "This case highlights the importance of cross-reactivity between NSAIDs and the spectrum of allergic reactions from localized urticaria to life-threatening anaphylaxis. How did the patient's stable vital signs, clear airway exam, and localized findings help you gauge severity? What would make you more concerned about progression?"
    }
}
};