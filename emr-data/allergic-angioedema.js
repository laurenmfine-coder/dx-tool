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
      "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
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
          "temp": "37.0\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
        "chiefComplaint": "A/I consult \u2014 NSAID cross-reactivity evaluation",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "A/I consult \u2014 NSAID cross-reactivity evaluation",
          "hpi": "Priya Nair presents with a/i consult \u2014 nsaid cross-reactivity evaluation.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up \u2014 NSAID avoidance plan, safe alternatives confirmed",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Follow-up \u2014 NSAID avoidance plan, safe alternatives confirmed",
          "hpi": "Priya Nair presents with follow-up \u2014 nsaid avoidance plan, safe alternatives confirmed.",
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
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
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
      "problem": "Allergic urticaria and angioedema \u2014 ibuprofen",
      "icd": "L50.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Lip and periorbital swelling with diffuse hives within 30 min of ibuprofen 400mg"
    },
    {
      "problem": "NSAID hypersensitivity \u2014 Type I (IgE-mediated, ibuprofen-specific)",
      "icd": "T39.391A",
      "onset": "2024",
      "status": "Active",
      "notes": "Tolerated naproxen previously \u2014 single-NSAID type suggests IgE mechanism"
    },
    {
      "problem": "Dysmenorrhea",
      "icd": "N94.4",
      "onset": "2018",
      "status": "Active",
      "notes": "Uses NSAIDs for menstrual pain; will need safe alternative"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily x7 days (NEW)",
      "sig": "Take 1 tablet by mouth daily for 7 days",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 short course"
    },
    {
      "name": "Prednisone 40mg daily x5 days (NEW)",
      "sig": "Take 1 tablet by mouth daily for 5 days, no taper needed",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 short course"
    },
    {
      "name": "EpiPen 0.3mg IM x2 (NEW \u2014 precautionary)",
      "sig": "Inject at first sign of throat tightness or breathing difficulty",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 1,
      "status": "Active"
    }
  ],
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
      "temp": "37.0\u00b0C",
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
      "date": "11/06/2024",
      "panel": "Urticaria/Angioedema Workup",
      "results": [
        {
          "test": "C4",
          "value": "26",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": ""
        },
        {
          "test": "C1-INH Level",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "Total IgE",
          "value": "310",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 Eosinophils",
          "value": "0.7",
          "unit": "K/\u03bcL",
          "ref": "0.0-0.5",
          "flag": "H"
        },
        {
          "test": "Serum Tryptase",
          "value": "6.2",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": ""
        },
        {
          "test": "ANA",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "TSH",
          "value": "1.9",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
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
    "Father: aspirin sensitivity"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ]
  ],
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
  ],
  "teachingPoints": {
    "keyLearning": [
      "IgE-mediated (allergic) angioedema is histamine-driven and occurs within 30 minutes of allergen exposure. It commonly accompanies urticaria (combined urticaria + angioedema in ~50% of anaphylaxis cases).",
      "Angioedema without urticaria should prompt evaluation for bradykinin-mediated causes (HAE, ACEi angioedema) \u2014 these do NOT respond to antihistamines/epinephrine. The clinical key: allergic angioedema has urticaria + rapid onset; bradykinin angioedema has NO urticaria + slower onset.",
      "If anaphylaxis features are present with angioedema (hypotension, bronchospasm, loss of consciousness) \u2014 epinephrine IM is the primary treatment, not antihistamines."
    ],
    "boardPearls": [
      "Allergic angioedema: IgE + mast cell \u2192 histamine \u2192 Type I (immediate, <30 min). WITH urticaria in most cases.",
      "Bradykinin angioedema (HAE, ACEi): NO urticaria, slower onset (hours), longer duration (24\u201372h), does NOT respond to epinephrine/antihistamines.",
      "Angioedema differential: allergic (IgE, histamine) vs bradykinin (HAE, ACEi, acquired C1INH) vs idiopathic.",
      "Treatment allergic angioedema: epinephrine if anaphylaxis. H1 antihistamine (diphenhydramine, cetirizine). H2 blocker (famotidine) adjunct. Short OCS course.",
      "Airway angioedema: tongue/uvular/laryngeal \u2014 epinephrine IM first, prepare for intubation, ENT/anesthesia early involvement."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Priya appears anxious and concerned about her facial swelling, frequently touching her lips while speaking. She is very forthcoming with information and clearly distressed about the visible nature of her symptoms. She speaks quickly and seems eager to find a solution to prevent future episodes.",
    "interviewQuestions": [
      "When exactly did the lip swelling and hives begin after taking ibuprofen?",
      "How long after taking the ibuprofen did your symptoms start?",
      "What dose of ibuprofen did you take and why did you take it?",
      "Have you ever had a reaction like this to ibuprofen or similar medications before?",
      "Are you experiencing any difficulty breathing, swallowing, or throat tightness?",
      "Where exactly are the hives located on your body?",
      "Have the hives or swelling gotten worse since they started?",
      "Have you taken any medications or done anything to treat the symptoms?",
      "Do you have any known allergies to medications?",
      "Have you been exposed to any new foods, soaps, or other substances recently?",
      "Have you had any recent illnesses or infections?",
      "Does anyone in your family have medication allergies or similar reactions?",
      "Have you ever carried an EpiPen or been told you need one?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Can you ask me something else about my swelling?",
      "onset": "The swelling started about 2 hours after I took the ibuprofen this morning. The hives appeared maybe 30 minutes after the swelling began.",
      "character": "My lips feel tight and swollen, almost like they're going to burst. The hives are raised red welts that are very itchy.",
      "location": "The swelling is mainly in my upper and lower lips. The hives started on my arms and chest but now they're spreading to my back and stomach.",
      "severity": "The swelling is maybe a 6 out of 10 - it's very noticeable and uncomfortable. The itching from the hives is about an 8 out of 10, it's driving me crazy.",
      "aggravating": "The itching gets worse when I scratch or when I'm stressed. The swelling seems to get a bit worse when I talk a lot.",
      "relieving": "I tried putting ice on my lips which helped a little with the swelling. Nothing really helps the itching much.",
      "associated": "Just the hives and lip swelling. No trouble breathing or swallowing, thank goodness. Maybe feeling a little anxious but I think that's just from being worried.",
      "denies": "No difficulty breathing, no throat tightness, no dizziness, no nausea or vomiting, no abdominal pain. My tongue isn't swollen.",
      "history": "I had a similar but milder reaction to aspirin about 5 years ago - just some hives on my arms. That's when I found out I was allergic to aspirin.",
      "medications": "no medications",
      "allergies": "Aspirin, Ibuprofen",
      "family": "My father has an aspirin sensitivity - he gets stomach upset and some skin reactions when he takes it.",
      "social": "I work as a graphic designer, mostly at a computer. I don't smoke, drink maybe a glass of wine on weekends, no recreational drugs. Pretty healthy lifestyle overall."
    },
    "examManeuvers": [
      "Inspect lips and perioral area",
      "Examine skin for urticarial lesions",
      "Palpate neck for lymphadenopathy",
      "Auscultate lungs",
      "Examine oropharynx and tongue",
      "Check vital signs including oxygen saturation",
      "Assess for laryngeal edema",
      "Examine conjunctiva for edema",
      "Palpate for facial edema",
      "Assess skin temperature and perfusion"
    ],
    "examFindings": {
      "Inspect lips and perioral area": "Moderate bilateral lip edema, more prominent in upper lip, no cyanosis or ulceration",
      "Examine skin for urticarial lesions": "Multiple raised erythematous wheals 0.5-2cm in diameter on arms, chest, and back with visible scratch marks",
      "Palpate neck for lymphadenopathy": "No cervical lymphadenopathy palpated",
      "Auscultate lungs": "Clear bilateral breath sounds, no wheezing or stridor",
      "Examine oropharynx and tongue": "Normal tongue size and position, no pharyngeal edema, uvula normal",
      "Check vital signs including oxygen saturation": "BP 122/76, HR 96, RR 18, Temp 37.0\u00b0C, SpO2 98% on room air",
      "Assess for laryngeal edema": "Voice clear, no hoarseness, no inspiratory stridor",
      "Examine conjunctiva for edema": "No periorbital edema, conjunctiva normal",
      "Palpate for facial edema": "Mild facial fullness, no significant cheek or eyelid swelling",
      "Assess skin temperature and perfusion": "Skin warm and well-perfused, normal capillary refill"
    },
    "ddxTargets": [
      "Allergic urticaria/angioedema \u2014 ibuprofen-specific IgE-mediated hypersensitivity (correct)",
      "NSAID-exacerbated urticaria \u2014 occurs with all NSAIDs/aspirin; history shows naproxen tolerated",
      "Hereditary angioedema \u2014 no urticaria; C4 low; not ibuprofen-triggered",
      "ACE inhibitor angioedema \u2014 not on ACE-I; bradykinin-mediated; no urticaria",
      "Idiopathic chronic urticaria \u2014 no identifiable trigger; recurrent; this is acute",
      "Contact urticaria \u2014 from skin contact, not ingestion"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the obvious drug allergy and missing progression to anaphylaxis or other systemic involvement that requires immediate intervention",
      "prematureClosure": "May quickly conclude this is simple drug allergy without adequately assessing for airway compromise or systemic anaphylactic reaction",
      "availabilityBias": "Common drug allergies may overshadow consideration of hereditary angioedema or other non-allergic causes of similar presentations"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Before you interview the patient, think about what key historical features would help you distinguish between a localized allergic reaction versus a more serious systemic reaction. What specific questions about timing, progression, and associated symptoms would be most critical to ask?",
      "phase5": "Now that you've gathered your history and exam findings, let's think through this systematically. What features point toward drug-induced angioedema versus other causes? How does the timeline, family history, and physical findings help narrow your differential? What's your assessment of this patient's immediate risk?",
      "finalDebrief": "This case illustrates classic drug-induced angioedema with urticaria from NSAID hypersensitivity. Notice how the family history, prior aspirin reaction, and temporal relationship supported this diagnosis. The key teaching point is recognizing when angioedema is localized versus when it might progress to airway involvement. How did your differential evolve as you gathered more information, and what red flags would make you more concerned about anaphylaxis?",
      "final": "Diagnosis: Type I (IgE-mediated, ibuprofen-specific) NSAID hypersensitivity \u2014 allergic angioedema and urticaria. Key teaching points: (1) Two patterns of NSAID hypersensitivity \u2014 cross-reactive (all NSAIDs) vs. single-drug type. Tolerance of naproxen strongly suggests single-drug/IgE mechanism to ibuprofen specifically. (2) C4 and C1-INH normal \u2014 rules out HAE; no ACE-I \u2014 rules out bradykinin-mediated angioedema. (3) Safe NSAIDs: if single-drug IgE-mediated, other NSAIDs are generally safe (naproxen confirmed). If cross-reactive type, acetaminophen is the safe alternative. (4) Graded challenge to confirm naproxen safety is appropriate before relying on it for dysmenorrhea. (5) Always distinguish urticaria + angioedema (IgE or mast cell) from isolated angioedema (bradykinin) \u2014 urticaria = histamine-mediated; antihistamines work. Isolated angioedema without urticaria = think ACE-I, HAE, acquired C1-INH."
    }
  },
  "meta": {
    "diagnosis": "Allergic (IgE-mediated) Angioedema and Urticaria \u2014 NSAID (Ibuprofen) Hypersensitivity"
  }
};
