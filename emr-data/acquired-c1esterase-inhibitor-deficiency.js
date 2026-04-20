
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
      "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
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
          "temp": "36.8\u00b0C",
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
        "chiefComplaint": "A/I consult \u2014 distinguish acquired vs hereditary C1-INH deficiency",
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
          "temp": "36.8\u00b0C",
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
          "cc": "A/I consult \u2014 distinguish acquired vs hereditary C1-INH deficiency",
          "hpi": "Harold Jefferson presents with a/i consult \u2014 distinguish acquired vs hereditary c1-inh deficiency.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "A/I follow-up \u2014 angioedema control with lymphoma treatment",
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
          "cc": "A/I follow-up \u2014 angioedema control with lymphoma treatment",
          "hpi": "Harold Jefferson presents with a/i follow-up \u2014 angioedema control with lymphoma treatment.",
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
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
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
      "problem": "Acquired C1-INH deficiency \u2014 recurrent angioedema",
      "icd": "D84.1",
      "onset": "2024",
      "status": "Active",
      "notes": "C4 undetectable, C1-INH level and function low, anti-C1-INH antibodies positive \u2014 acquired type II"
    },
    {
      "problem": "B-cell lymphoma \u2014 suspected underlying cause",
      "icd": "C85.90",
      "onset": "2024",
      "status": "Active",
      "notes": "Acquired C1-INH deficiency in adult = paraneoplastic until proven otherwise \u2014 lymphoma workup ordered"
    },
    {
      "problem": "Recurrent abdominal attacks \u2014 missed diagnosis x3 years",
      "icd": "D84.1",
      "onset": "2021",
      "status": "Active",
      "notes": "Three ER visits for 'GI pain' \u2014 HAE abdominal attacks are severe colic without peritonitis"
    }
  ],
  "medications": [
    {
      "name": "C1-esterase inhibitor concentrate (Berinert) 20 units/kg IV \u2014 acute attack",
      "sig": "IV for acute attacks \u2014 replaces deficient protein",
      "prescriber": "Hematology/Allergy",
      "start": "11/2024",
      "refills": 2,
      "status": "Active acute"
    },
    {
      "name": "Icatibant 30mg SQ PRN \u2014 acute attacks",
      "sig": "Subcutaneous injection \u2014 bradykinin B2 blocker",
      "prescriber": "Allergy",
      "start": "11/2024",
      "refills": 4,
      "status": "PRN acute"
    },
    {
      "name": "Tranexamic acid 1g TID \u2014 prophylaxis (if antifibrinolytic tolerated)",
      "sig": "Antifibrinolytic \u2014 reduces contact activation and bradykinin production",
      "prescriber": "Hematology",
      "start": "11/2024",
      "refills": 4,
      "status": "Active prophylaxis"
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
      "temp": "36.8\u00b0C",
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
      "date": "11/18/2024",
      "panel": "HAE/Acquired C1-INH Panel",
      "results": [
        {
          "test": "C4 complement",
          "value": "<1",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": "L"
        },
        {
          "test": "C1q complement",
          "value": "Low \u2014 4 mg/dL",
          "unit": "mg/dL",
          "ref": "14-22",
          "flag": "L"
        },
        {
          "test": "C1-INH level",
          "value": "6",
          "unit": "mg/dL",
          "ref": "21-39",
          "flag": "L"
        },
        {
          "test": "C1-INH function",
          "value": "12",
          "unit": "%",
          "ref": ">68",
          "flag": "L"
        },
        {
          "test": "Anti-C1-INH antibodies",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "SPEP/IPEP",
          "value": "IgM monoclonal spike \u2014 suspicious for lymphoma",
          "unit": "",
          "ref": "No M spike",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Chest/Abdomen/Pelvis with Contrast (lymphoma staging)",
      "indication": "Acquired C1-INH deficiency \u2014 workup for underlying B-cell malignancy",
      "findings": "Multiple enlarged lymph nodes bilateral axillae and retroperitoneum \u2014 largest 2.8cm right axilla. Splenomegaly 16cm. No hepatomegaly. No free fluid.",
      "impression": "Lymphadenopathy and splenomegaly \u2014 suspicious for lymphoma. PET-CT and lymph node biopsy recommended. Findings consistent with B-cell lymphoma as cause of acquired C1-INH deficiency."
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
  ],
  "references": [
    {
      "id": "WAO-HAE-2022",
      "title": "International WAO/EAACI guideline for management of hereditary angioedema \u2014 2021 revision",
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
      "AAE vs HAE: AAE \u2014 adult onset, no family history, C1q LOW, malignancy association. HAE \u2014 younger onset, positive family history, C1q NORMAL.",
      "Complement in AAE: C4 low + C3 low/normal + C1-INH low + C1q LOW.",
      "Complement in HAE Type I: C4 low + C3 normal + C1-INH low + C1q NORMAL.",
      "AAE workup: SPEP, UPEP, flow cytometry for B-cell clone, CT chest/abdomen/pelvis for lymphadenopathy, bone marrow biopsy if indicated.",
      "AAE treatment: same acute agents as HAE (C1-INH concentrate, icatibant). Treat underlying malignancy if identified \u2014 may resolve AAE.",
      "Anti-C1-INH antibodies: present in ~60% of AAE. Rituximab effective in autoimmune AAE."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Harold appears anxious and concerned about his swollen face and lips, worried this might be related to his cancer treatment. He is cooperative and forthcoming with information, speaking clearly despite mild facial swelling, and expresses fear that his lymphoma treatment may need to be stopped.",
    "interviewQuestions": [
      "When did you first notice the swelling in your face and lips?",
      "How quickly did the swelling develop - over minutes, hours, or days?",
      "Have you had any difficulty breathing or swallowing?",
      "Is there any itching, hives, or skin rash anywhere on your body?",
      "Have you ever had swelling like this before?",
      "When was your last rituximab infusion?",
      "Have you started any new medications recently?",
      "Have you eaten any new foods or been exposed to anything unusual?",
      "Do you have any abdominal pain, nausea, or vomiting?",
      "Has anyone in your family ever had unexplained swelling episodes?",
      "Have you had any recent infections or illnesses?",
      "Are you experiencing any tongue swelling or voice changes?",
      "How is your lymphoma treatment going overall?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand the question. Could you ask that differently? I'm mainly worried about this swelling.",
      "onset": "I noticed my lips starting to swell yesterday evening, and when I woke up this morning my whole face was puffy. It's gotten worse throughout the day.",
      "character": "It's a painless swelling, mostly in my lips, around my eyes, and my face feels tight and heavy. No burning or stinging sensation.",
      "location": "Mainly my lips, eyelids, and cheeks. The swelling is on both sides of my face, pretty symmetric.",
      "severity": "I'd say it's about a 6 out of 10 for how concerning it is. It's not painful, but it's making it harder to eat and I look pretty swollen.",
      "aggravating": "I haven't really noticed anything that makes it worse. It just seems to keep getting more swollen as time goes on.",
      "relieving": "Nothing I've tried helps. I took some Benadryl this morning but it didn't seem to make any difference.",
      "associated": "No trouble breathing, thank goodness. No hives or itching. I do feel a little nauseous but that might just be from being worried.",
      "denies": "No difficulty breathing or wheezing, no throat tightness, no abdominal pain, no hives or rash anywhere, no tongue swelling.",
      "history": "Never had anything like this before in my life. This is completely new for me.",
      "medications": "Rituximab",
      "allergies": "NKDA",
      "family": "No one in my family has ever had problems with swelling like this. No known allergies that run in the family either.",
      "social": "I'm retired from teaching. I don't smoke, have maybe one glass of wine with dinner occasionally. No drugs. I've been getting rituximab treatments for my B-cell lymphoma."
    },
    "examManeuvers": [
      "Inspect face and lips for asymmetric swelling",
      "Examine oropharynx and tongue for swelling",
      "Palpate neck for lymphadenopathy",
      "Auscultate lungs for wheezing or stridor",
      "Inspect skin for urticaria or rash",
      "Palpate abdomen for organomegaly",
      "Assess voice quality and speech clarity",
      "Examine hands and feet for swelling",
      "Check mucous membranes for pallor",
      "Assess for signs of respiratory distress"
    ],
    "examFindings": {
      "Inspect face and lips for asymmetric swelling": "Symmetric non-pitting swelling of bilateral eyelids, lips, and cheeks without erythema or warmth",
      "Examine oropharynx and tongue for swelling": "Oropharynx clear, tongue normal size without swelling, uvula midline and normal",
      "Palpate neck for lymphadenopathy": "No cervical lymphadenopathy, no neck swelling",
      "Auscultate lungs for wheezing or stridor": "Clear breath sounds bilaterally, no wheezing, stridor, or respiratory distress",
      "Inspect skin for urticaria or rash": "No urticaria, hives, or rash on trunk, arms, or legs",
      "Palpate abdomen for organomegaly": "Soft abdomen, no hepatosplenomegaly, no tenderness",
      "Assess voice quality and speech clarity": "Voice clear and normal, no hoarseness or muffled quality",
      "Examine hands and feet for swelling": "No swelling of hands, fingers, feet, or ankles",
      "Check mucous membranes for pallor": "Mucous membranes pink and well-perfused",
      "Assess for signs of respiratory distress": "No use of accessory muscles, normal respiratory rate and effort"
    },
    "ddxTargets": [
      "Acquired C1-INH deficiency \u2014 paraneoplastic B-cell lymphoma (correct)",
      "Hereditary angioedema Type I/II \u2014 C1q is LOW in acquired (normal in HAE), anti-C1-INH antibodies positive",
      "ACE inhibitor angioedema \u2014 not on ACE inhibitor",
      "Allergic angioedema \u2014 C4/C1-INH normal",
      "Idiopathic angioedema \u2014 diagnosis of exclusion, rule out structural/malignant cause",
      "HAE with normal C1-INH (Type III) \u2014 factor XII mutation, different mechanism"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on rituximab as the cause and missing the underlying acquired C1-INH deficiency associated with B-cell lymphoma",
      "prematureClosure": "Risk of stopping at 'drug reaction' without considering the connection between B-cell lymphoma and acquired complement deficiencies",
      "availabilityBias": "May focus on common allergic reactions rather than considering rare complement disorders associated with hematologic malignancies"
    },
    "coachPrompts": {
      "phase2": "You've identified angioedema in a patient with B-cell lymphoma on rituximab. What's the relationship between B-cell lymphomas and complement system disorders? How might this influence your differential diagnosis beyond just drug reactions?",
      "phase5": "The patient has non-urticarial angioedema without respiratory compromise. Given his B-cell lymphoma history, what acquired complement disorder should you be considering? How would you differentiate between drug-induced angioedema and complement-mediated angioedema?",
      "finalDebrief": "This case illustrates acquired C1-INH deficiency secondary to B-cell lymphoma. How did the absence of urticaria and the lymphoma history point you toward complement-mediated rather than allergic angioedema? What's the mechanism by which B-cell lymphomas cause C1-INH consumption?",
      "final": "Diagnosis: acquired C1-INH deficiency \u2014 paraneoplastic. Key learning: (1) HAE vs Acquired distinction: HAE (hereditary) = C4 low, C1q NORMAL, family history. Acquired C1-INH = C4 low + C1q LOW + anti-C1-INH antibodies + adult onset without family history. Low C1q is the key distinguishing finding. (2) Acquired C1-INH in adults = malignancy workup mandatory. Most common: B-cell lymphoma (follicular, marginal zone, CLL), monoclonal gammopathy. Mechanism: lymphoma cells consume or produce antibodies against C1-INH. Treating the underlying malignancy often resolves the angioedema. (3) Abdominal attacks: HAE/acquired C1-INH causes severe abdominal colic from intestinal edema \u2014 often misdiagnosed as surgical abdomen. Key: NO peritoneal signs, severe pain, resolves in 48-72h without surgery. Unnecessary laparotomies are a complication of missed HAE diagnosis. (4) Acute treatment: C1-INH concentrate is first-line. Icatibant (B2 blocker) or fresh frozen plasma are alternatives. Epinephrine and antihistamines are INEFFECTIVE (same mechanism as ACE angioedema). (5) Prophylaxis for procedures: ANY surgical/dental procedure requires prophylactic C1-INH concentrate 1 hour prior \u2014 intubation and mucosal manipulation trigger attacks."
    }
  },
  "meta": {
    "diagnosis": "Acquired C1-Esterase Inhibitor Deficiency \u2014 Recurrent Angioedema, B-Cell Lymphoma Association",
    "caseId": "acquired-c1esterase-inhibitor-deficiency"
  }
};
