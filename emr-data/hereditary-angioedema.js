/* emr-data/hereditary-angioedema.js — Multi-Setting Allergy Case: Hereditary Angioedema */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Nicole Dubois",
      "patientHPI": "My throat started swelling up this morning and I can barely swallow, plus I'm having these terrible stomach cramps that feel like someone is stabbing me from the inside. I've dealt with these attacks before so I know what's happening, but this one feels worse than usual and I'm really scared.",
      "dob": "05/06/2002",
      "age": "24",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-432524",
      "language": "English",
      "race": "White",
      "phone": "(704) 555-8218",
      "email": "nicole.dubois@email.com",
      "address": "6959 Sycamore Dr, Albuquerque, NM 87103",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "Walgreens \u2014 University Blvd",
      "emergencyContact": {
        "name": "Michael Dubois",
        "phone": "(614) 555-5616",
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
      "Mother: similar episodes",
      "Maternal uncle: died from laryngeal edema"
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
        "chiefComplaint": "Acute laryngeal swelling and severe abdominal pain \u2014 known HAE",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hereditary Angioedema",
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
          "frequency": "STAT",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "If C1-INH unavailable",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/68",
          "hr": "102",
          "rr": "22",
          "temp": "36.8\u00b0C",
          "spo2": "96%",
          "pain": "9/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-400009",
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
          "cc": "Acute laryngeal swelling and severe abdominal pain \u2014 known HAE",
          "hpi": "Nicole Dubois presents with acute laryngeal swelling and severe abdominal pain \u2014 known hae.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted after HAE attack requiring C1-INH \u2014 monitor for rebound",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hereditary Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "C1-INH concentrate",
          "dose": "given in ED",
          "route": "IV",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Danazol",
          "dose": "200mg",
          "route": "PO",
          "frequency": "Daily (home med)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/70",
          "hr": "82",
          "rr": "16",
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
          "accession": "LAB-421679",
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
          "cc": "Admitted after HAE attack requiring C1-INH \u2014 monitor for rebound",
          "hpi": "Nicole Dubois presents with admitted after hae attack requiring c1-inh \u2014 monitor for rebound.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 optimize HAE prophylaxis, frequent attacks despite danazol",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hereditary Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lanadelumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q2 weeks (recommended)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Danazol",
          "dose": "200mg",
          "route": "PO",
          "frequency": "Daily (to discontinue)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "110/68",
          "hr": "76",
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
          "accession": "LAB-767745",
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
          "cc": "A/I consult \u2014 optimize HAE prophylaxis, frequent attacks despite danazol",
          "hpi": "Nicole Dubois presents with a/i consult \u2014 optimize hae prophylaxis, frequent attacks despite danazol.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "HAE follow-up \u2014 3 months on lanadelumab, attack frequency assessment",
        "diagnosis": "Hereditary Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hereditary Angioedema",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lanadelumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q2 weeks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "C1-INH concentrate",
          "dose": "20 IU/kg",
          "route": "IV",
          "frequency": "On-demand at home",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "Backup rescue",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/66",
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
          "accession": "LAB-935384",
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
          "cc": "HAE follow-up \u2014 3 months on lanadelumab, attack frequency assessment",
          "hpi": "Nicole Dubois presents with hae follow-up \u2014 3 months on lanadelumab, attack frequency assessment.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Nicole Dubois",
    "dob": "05/06/2002",
    "age": "24",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-432524",
    "language": "English",
    "race": "White",
    "phone": "(803) 555-7256",
    "email": "nicole.dubois@email.com",
    "address": "4196 S Halsted St, Birmingham, AL 35210",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Walgreens \u2014 University Blvd",
    "emergencyContact": {
      "name": "Michael Dubois",
      "phone": "(617) 555-9641",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Acute laryngeal swelling and severe abdominal pain \u2014 known HAE",
    "diagnosis": "Hereditary Angioedema"
  },
  "problems": [
    {
      "problem": "Hereditary angioedema Type I \u2014 C1-inhibitor deficiency",
      "icd": "D84.1",
      "onset": "2018",
      "status": "Active",
      "notes": "Confirmed: low C4, low C1q, low C1-INH level and function; family history in mother and brother"
    },
    {
      "problem": "Acute laryngeal HAE attack",
      "icd": "T78.3XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Life-threatening \u2014 on-demand C1-INH concentrate administered; airway observed"
    },
    {
      "problem": "Acute abdominal HAE attack (concurrent)",
      "icd": "T78.3XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Severe colicky abdominal pain with ascites on ultrasound \u2014 classic abdominal HAE; often misdiagnosed as surgical abdomen"
    }
  ],
  "medications": [
    {
      "name": "C1-INH concentrate (Berinert) 20 units/kg IV \u2014 acute attack",
      "sig": "Administer 20 units/kg IV at onset of any moderate-severe attack; self-injectable training required",
      "prescriber": "Dr. Rodriguez",
      "start": "2020",
      "refills": 2,
      "status": "Active \u2014 home supply"
    },
    {
      "name": "Icatibant (Firazyr) 30mg SC \u2014 backup acute",
      "sig": "30mg SC at attack onset; may repeat q6h x2; carry at all times",
      "prescriber": "Dr. Rodriguez",
      "start": "2020",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Lanadelumab (Takhzyro) 300mg SC q4 weeks \u2014 prophylaxis",
      "sig": "Administer 300mg subcutaneously every 4 weeks for long-term prophylaxis",
      "prescriber": "Dr. Rodriguez",
      "start": "2022",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Oral contraceptives \u2014 CONTRAINDICATED",
      "sig": "Estrogen-containing OCP CONTRAINDICATED \u2014 triggers HAE attacks via bradykinin pathway upregulation",
      "prescriber": "N/A",
      "start": "N/A",
      "refills": 0,
      "status": "Contraindicated \u2014 documented"
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
      "bp": "108/68",
      "hr": "102",
      "rr": "22",
      "temp": "36.8\u00b0C",
      "spo2": "96%",
      "pain": "9/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Acute laryngeal swelling and severe abdominal pain \u2014 known HAE",
      "hpi": "Nicole Dubois presents with acute laryngeal swelling and severe abdominal pain \u2014 known hae.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "HAE Panel \u2014 Acute and Steady State",
      "results": [
        {
          "test": "C4 (during attack)",
          "value": "<4",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": "L"
        },
        {
          "test": "C4 (steady state, prior visit)",
          "value": "6",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": "L"
        },
        {
          "test": "C1q",
          "value": "Normal",
          "unit": "mg/dL",
          "ref": "14-22",
          "flag": ""
        },
        {
          "test": "C1-INH antigen level",
          "value": "14",
          "unit": "mg/dL",
          "ref": "21-39",
          "flag": "L"
        },
        {
          "test": "C1-INH functional activity",
          "value": "22",
          "unit": "%",
          "ref": "70-130",
          "flag": "L"
        },
        {
          "test": "Anti-C1-INH antibodies",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "C3",
          "value": "108",
          "unit": "mg/dL",
          "ref": "90-180",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Bedside Ultrasound \u2014 Abdomen",
      "indication": "Severe abdominal pain in HAE patient \u2014 rule out surgical abdomen; assess for HAE ascites",
      "findings": "Moderate free fluid in peritoneum, greatest in Morrison's pouch and left paracolic gutter. No appendiceal dilation. No small bowel dilation. Bowel wall edema visible. No pneumoperitoneum.",
      "impression": "Peritoneal free fluid consistent with HAE-mediated submucosal intestinal edema and ascites. No surgical findings. This presentation is pathognomonic of abdominal HAE attack in context of confirmed HAE diagnosis."
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
    "Mother: similar episodes",
    "Maternal uncle: died from laryngeal edema"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
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
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "HAE is caused by C1-inhibitor deficiency (Type I \u2014 low C1-INH level; Type II \u2014 dysfunctional C1-INH) or FXII mutation (Type III, estrogen-dependent, normal complement). Bradykinin accumulation (NOT histamine) drives edema \u2014 this is why antihistamines and epinephrine do NOT treat HAE attacks.",
      "HAE acute treatment: C1-INH concentrate (Berinert, Cinryze), icatibant (bradykinin B2 receptor antagonist), or ecallantide (kallikrein inhibitor). ALL attacks above the waist require treatment \u2014 laryngeal attacks are potentially fatal.",
      "HAE prophylaxis options: lanadelumab (anti-kallikrein, Q2\u20134W SC), subcutaneous C1-INH (Haegarda), oral berotralstat (plasma kallikrein inhibitor). Danazol (attenuated androgen, increases C1-INH synthesis) \u2014 largely replaced by newer agents due to side effects."
    ],
    "boardPearls": [
      "HAE Types: I (low C1-INH level, most common, 85%); II (normal level, dysfunctional C1-INH); III (FXII mutation, estrogen-triggered, normal complement levels).",
      "Complement pattern in HAE: C4 LOW (chronically depleted, even between attacks). C3 NORMAL. C1-INH low (Type I) or dysfunctional (Type II). C1q NORMAL (distinguishes from acquired C1-INH deficiency where C1q is LOW).",
      "HAE mechanism: bradykinin (NOT histamine) \u2192 B2 receptors on postcapillary venules \u2192 vascular permeability \u2192 angioedema. Epinephrine and antihistamines: NOT effective for HAE.",
      "Laryngeal HAE: 25\u201340% of patients have laryngeal attacks. ALL should carry 2 doses of on-demand treatment. Fatal without treatment.",
      "Triggers: trauma/surgery, estrogens (OCPs, HRT, pregnancy), ACE inhibitors, infections, stress.",
      "ACE inhibitors absolutely contraindicated in HAE \u2014 block bradykinin degradation \u2192 precipitate attacks."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Nicole appears anxious and distressed, frequently touching her throat and speaking in a slightly hoarse, strained voice. She is cooperative but clearly frightened, having experienced similar life-threatening episodes before. She demonstrates appropriate concern given her family history of death from laryngeal edema.",
    "interviewQuestions": [
      "When did your throat swelling and abdominal pain begin?",
      "Have you had episodes like this before?",
      "What triggers have you noticed for your HAE attacks?",
      "Are you having any difficulty breathing or swallowing?",
      "How would you rate your pain on a scale of 1-10?",
      "Have you taken any of your rescue medications today?",
      "What does your throat feel like right now?",
      "Are you experiencing any nausea or vomiting?",
      "Have you had any recent dental work, trauma, or stress?",
      "What happened during your previous HAE attacks?",
      "How quickly did your symptoms come on?",
      "Are you having any skin swelling elsewhere?",
      "What medications do you normally take for your condition?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating because of the pain and worry about my throat closing up.",
      "onset": "It started about 3 hours ago, first with cramping stomach pain, then my throat began feeling tight and swollen.",
      "character": "My throat feels thick and swollen inside, like there's something blocking it. The abdominal pain is deep, cramping, and comes in waves.",
      "location": "The swelling is in my throat and voice box area. The abdominal pain is all over my belly, mostly around my navel.",
      "severity": "The throat swelling is terrifying - maybe 8/10 for concern. The abdominal pain is 9/10, much worse than my usual attacks.",
      "aggravating": "Trying to swallow makes the throat sensation worse. The abdominal pain gets worse when I move or press on it.",
      "relieving": "Nothing has helped yet. I'm scared to take anything by mouth because of my throat.",
      "associated": "I feel nauseous and have been dry heaving. My voice sounds different and hoarse. No skin swelling this time.",
      "denies": "No fever, no hives or skin rash, no diarrhea yet, no chest pain, no recent infections.",
      "history": "I've had HAE attacks since I was 16, usually every few months. Most involve stomach pain or facial swelling, but I've had throat swelling twice before.",
      "medications": "C1-INH concentrate; Icatibant",
      "allergies": "NKDA",
      "family": "My mother has the same condition with similar attacks. My maternal uncle died when I was young from throat swelling that blocked his breathing completely.",
      "social": "I work as a teacher, don't smoke or drink much. I've been stressed lately with work deadlines, which sometimes triggers my attacks."
    },
    "examManeuvers": [
      "Oropharyngeal and laryngeal inspection",
      "Neck palpation and lymph node assessment",
      "Abdominal inspection and palpation",
      "Auscultation of lungs and heart",
      "Assessment of voice quality and stridor",
      "Skin examination for angioedema",
      "Vital signs assessment",
      "Oxygen saturation monitoring",
      "Assessment of swallowing ability",
      "Evaluation for accessory muscle use"
    ],
    "examFindings": {
      "Oropharyngeal and laryngeal inspection": "Visible swelling of posterior pharynx and soft palate, uvula appears enlarged, no visible laryngeal edema on indirect examination",
      "Neck palpation and lymph node assessment": "Neck feels full and slightly tender, no discrete lymphadenopathy, no subcutaneous edema",
      "Abdominal inspection and palpation": "Abdomen appears normal, diffusely tender to palpation without guarding or rebound, bowel sounds hypoactive",
      "Auscultation of lungs and heart": "Clear lungs bilaterally, regular heart rhythm, slight tachycardia at 102 bpm",
      "Assessment of voice quality and stridor": "Voice hoarse and muffled, no audible stridor at rest, no biphasic sounds",
      "Skin examination for angioedema": "No facial, lip, or extremity swelling noted, no urticaria present",
      "Vital signs assessment": "BP 108/68, HR 102, afebrile at 36.8\u00b0C, stable but tachycardic",
      "Oxygen saturation monitoring": "SpO2 96% on room air, maintained without supplemental oxygen",
      "Assessment of swallowing ability": "Patient reports difficulty swallowing, appears hesitant to swallow saliva",
      "Evaluation for accessory muscle use": "Minimal accessory muscle use, no obvious respiratory distress at rest"
    },
    "ddxTargets": [
      "HAE Type I \u2014 acute laryngeal and abdominal attack (correct)",
      "HAE Type II \u2014 same clinical picture; C1-INH antigen is NORMAL but function LOW; C1q normal",
      "Acquired C1-INH deficiency \u2014 age >40 onset; C1q LOW; no family history; associated paraprotein",
      "ACE inhibitor-mediated angioedema \u2014 bradykinin-mediated; no C1-INH deficiency; not on ACE-I",
      "Allergic angioedema \u2014 urticaria present; IgE-mediated; C4 and C1-INH normal",
      "Surgical acute abdomen \u2014 HAE ascites on US; no guarding; resolves with treatment"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the known HAE diagnosis without considering other causes of laryngeal swelling, or conversely, overlooking HAE severity due to familiarity",
      "prematureClosure": "May immediately assume this is routine HAE without assessing airway compromise severity or considering alternative diagnoses in a young patient",
      "availabilityBias": "Recent cases of viral illness or common throat infections may lead to underestimating the seriousness of hereditary angioedema presentation"
    },
    "coachPrompts": {
      "phase2": "You've identified some key possibilities in your differential. Given that this patient has a known diagnosis of HAE, what specific aspects of the history and examination will help you determine the severity and immediate management priorities? What other conditions might present similarly that you'd want to rule out?",
      "phase5": "Now that you've gathered your history and physical exam findings, how does the combination of laryngeal swelling and abdominal pain in this HAE patient guide your assessment of severity? What are your immediate priorities, and what additional information might help confirm your suspected diagnosis?",
      "finalDebrief": "This case illustrates how hereditary angioedema can present with life-threatening laryngeal involvement. Notice how the family history, combination of symptoms, and known diagnosis guided the evaluation, but required careful assessment of airway compromise. How did your differential diagnosis evolve as you gathered more information about the patient's HAE history and current presentation?",
      "final": "Diagnosis: HAE Type I, acute laryngeal + abdominal attack. Key teaching points: (1) HAE Type I vs II: Type I = low C1-INH antigen AND function; Type II = normal antigen but LOW function. Both have NORMAL C1q (distinguishes from acquired). (2) C4 is the best SCREENING test \u2014 low at baseline and dramatically lower during attacks. Normal C4 makes HAE extremely unlikely. (3) Mechanism: bradykinin, NOT histamine \u2014 antihistamines, steroids, and epinephrine have minimal effect on acute HAE. Epinephrine may buy time for laryngeal attacks but is not curative. (4) On-demand options: C1-INH concentrate (Berinert), icatibant (B2 receptor antagonist), ecallantide (kallikrein inhibitor). All interrupt bradykinin pathway. (5) Estrogen contraindicated \u2014 raises bradykinin and triggers attacks. Progesterone-only contraception is safe. Lanadelumab (anti-kallikrein monoclonal) is gold-standard long-term prophylaxis."
    }
  },
  "meta": {
    "diagnosis": "Hereditary Angioedema Type I (C1-Inhibitor Deficiency) \u2014 Acute Laryngeal and Abdominal Attack"
  }
};
