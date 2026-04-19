/* emr-data/acquired-c1esterase-inhibitor-deficiency-v2.js — Variation: Acquired C1-INH Deficiency */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Walter Brennan",
  "patientHPI": "These swelling episodes started happening when I was around 68 and they keep coming back every few months - my face puffs up, especially around my eyes and lips, but nobody else in my family has ever had anything like this.",
      "dob": "05/14/1955",
      "age": "71",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-401586",
      "language": "English",
      "race": "White",
      "phone": "(415) 555-3608",
      "email": "walter.x@email.com",
      "address": "3369 N Kedzie Blvd, Birmingham, AL 35206",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(804) 555-2771",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
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
      "No family history of angioedema (distinguishes acquired from hereditary)"
    ],
    "socialHistory": [
      [
        "Key",
        "Angioedema starting at age 68 — NO family history (acquired, not hereditary)"
      ],
      [
        "Comorbidity",
        "Monoclonal gammopathy (MGUS) found on workup — driving the acquired C1-INH consumption"
      ],
      [
        "Distinction",
        "HAE = low C1-INH from birth + family history; Acquired = low C1-INH from underlying lymphoproliferative/autoimmune disease"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "71yo with new-onset recurrent angioedema starting age 68 — no family history, low C4 AND low C1q (not seen in HAE)",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH deficiency — NOT hereditary (onset age 68, no family history)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Low C4 + low C1-INH + LOW C1q (C1q is normal in HAE — this distinguishes acquired)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "MGUS found on workup — the lymphoproliferative condition consuming C1-INH",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Lip and laryngeal angioedema — airway risk",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "C1-INH concentrate",
          "dose": "20 IU/kg",
          "route": "IV",
          "frequency": "For acute attack",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "On-demand rescue",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "148/86",
          "hr": "82",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-118755",
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
              "name": "DIAGNOSTIC PANEL",
              "results": [
                {
                  "test": "C4",
                  "value": "6",
                  "unit": "mg/dL",
                  "range": "16-47",
                  "flag": "L"
                },
                {
                  "test": "C1-INH level",
                  "value": "12",
                  "unit": "mg/dL",
                  "range": "21-39",
                  "flag": "L"
                },
                {
                  "test": "C1-INH functional",
                  "value": "32",
                  "unit": "%",
                  "range": "68-132",
                  "flag": "L"
                },
                {
                  "test": "C1q",
                  "value": "4",
                  "unit": "mg/dL",
                  "range": "11-22",
                  "flag": "L"
                },
                {
                  "test": "SPEP",
                  "value": "Monoclonal IgM kappa spike",
                  "unit": "",
                  "range": "",
                  "flag": "H"
                },
                {
                  "test": "Anti-C1-INH antibody",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "71yo with new-onset recurrent angioedema starting age 68 — no family history, low C4 AND low C1q (not seen in HAE)",
          "hpi": "71M with recurrent angioedema starting at age 68. KEY DISTINCTION from HAE: (1) Late onset (HAE presents in childhood/teens), (2) NO family history (HAE is autosomal dominant), (3) C1q is LOW (C1q is NORMAL in HAE — this is the critical distinguishing lab), (4) Anti-C1-INH antibody positive (autoantibody consuming C1-INH). SPEP shows monoclonal IgM kappa — MGUS is driving autoantibody production. Treatment of underlying MGUS may improve angioedema. Hematology consult essential.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for laryngeal angioedema + hematology workup for MGUS",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH deficiency — MGUS-driven",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Laryngeal angioedema — airway risk",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Hematology — MGUS workup, bone marrow biopsy",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "C1-INH replacement for acute attacks",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Monitor MGUS for progression to Waldenström",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "C1-INH concentrate",
          "dose": "20 IU/kg",
          "route": "IV",
          "frequency": "Acute attacks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Rituximab discussion",
          "dose": "",
          "route": "",
          "frequency": "May reduce autoantibody production if MGUS progresses",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "138/82",
          "hr": "78",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-201281",
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
          "cc": "Admitted for laryngeal angioedema + hematology workup for MGUS",
          "hpi": "71M admitted after laryngeal angioedema. Hematology consulted — bone marrow biopsy shows low-grade lymphoplasmacytic infiltrate consistent with MGUS/early Waldenström. The monoclonal B cells are producing anti-C1-INH antibodies that consume C1-INH → acquired deficiency → angioedema. If MGUS progresses: rituximab would target the B-cell clone and potentially cure the angioedema. Currently: manage attacks with C1-INH replacement and icatibant.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I + Hematology joint consult — acquired C1-INH deficiency secondary to MGUS",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH deficiency — MGUS-driven autoantibody",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Teaching point: HAE vs acquired — C1q level is the key",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "MGUS monitoring — progression to Waldenström would warrant rituximab",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Acute management: C1-INH concentrate + icatibant rescue",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Hematology co-management essential",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "C1-INH concentrate",
          "dose": "20 IU/kg",
          "route": "IV",
          "frequency": "Acute attacks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "On-demand rescue",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Tranexamic acid",
          "dose": "1g",
          "route": "PO",
          "frequency": "TID (prophylaxis — antifibrinolytic, modest benefit)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "132/78",
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
          "accession": "LAB-695206",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I + Hematology joint consult — acquired C1-INH deficiency secondary to MGUS",
          "hpi": "Joint A/I-Hematology consult: 71M with acquired C1-INH deficiency from MGUS. Teaching: C1q distinguishes acquired (LOW) from hereditary (NORMAL). Anti-C1-INH antibody confirms autoimmune mechanism. Management: (1) Acute — C1-INH concentrate or icatibant, (2) Prophylaxis — tranexamic acid (modest), (3) Definitive — treat underlying MGUS when indicated (rituximab). Monitoring: SPEP Q6 months, bone marrow if progression suspected.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — MGUS stable, angioedema frequency, hematology monitoring",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH deficiency — 2 episodes in 6 months (improved from monthly)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "MGUS stable — no progression to Waldenström",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Tranexamic acid helping with prophylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Rituximab reserved if progression occurs",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "C1q trending — still low (4) but C1-INH slightly improved (15)",
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
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "C1-INH concentrate",
          "dose": "",
          "route": "IV",
          "frequency": "For severe attacks only",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "136/80",
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
          "accession": "LAB-912611",
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
          "cc": "Follow-up — MGUS stable, angioedema frequency, hematology monitoring",
          "hpi": "71M 6-month follow-up. Attack frequency reduced on tranexamic acid. MGUS stable on hematology monitoring. C1-INH slightly improved (12→15) — possible partial autoantibody reduction. Continue current management, escalate to rituximab only if MGUS progresses or attacks become unmanageable.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Walter Brennan",
    "dob": "05/14/1955",
    "age": "71",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-401586",
    "language": "English",
    "race": "White",
    "phone": "(505) 555-1634",
    "email": "walter.x@email.com",
    "address": "3828 Sycamore Dr, Cleveland, OH 44107",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(615) 555-4644",
      "relationship": "Spouse"
    },
    "chiefComplaint": "71yo with new-onset recurrent angioedema starting age 68 — no family history, low C4 AND low C1q (not seen in HAE)",
    "diagnosis": "Acquired C1-INH Deficiency"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Acquired C1-INH deficiency — NOT hereditary (onset age 68, no family history)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Low C4 + low C1-INH + LOW C1q (C1q is normal in HAE — this distinguishes acquired)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "MGUS found on workup — the lymphoproliferative condition consuming C1-INH",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Lip and laryngeal angioedema — airway risk",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "C1-INH concentrate",
      "dose": "20 IU/kg",
      "route": "IV",
      "frequency": "For acute attack",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Icatibant",
      "dose": "30mg",
      "route": "SC",
      "frequency": "On-demand rescue",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "148/86",
      "hr": "82",
      "rr": "16",
      "temp": "36.8°C",
      "spo2": "98%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "71yo with new-onset recurrent angioedema starting age 68 — no family history, low C4 AND low C1q (not seen in HAE)",
      "hpi": "71M with recurrent angioedema starting at age 68. KEY DISTINCTION from HAE: (1) Late onset (HAE presents in childhood/teens), (2) NO family history (HAE is autosomal dominant), (3) C1q is LOW (C1q is NORMAL in HAE — this is the critical distinguishing lab), (4) Anti-C1-INH antibody positive (autoantibody consuming C1-INH). SPEP shows monoclonal IgM kappa — MGUS is driving autoantibody production. Treatment of underlying MGUS may improve angioedema. Hematology consult essential.",
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
      "accession": "LAB-118755",
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
          "name": "DIAGNOSTIC PANEL",
          "results": [
            {
              "test": "C4",
              "value": "6",
              "unit": "mg/dL",
              "range": "16-47",
              "flag": "L"
            },
            {
              "test": "C1-INH level",
              "value": "12",
              "unit": "mg/dL",
              "range": "21-39",
              "flag": "L"
            },
            {
              "test": "C1-INH functional",
              "value": "32",
              "unit": "%",
              "range": "68-132",
              "flag": "L"
            },
            {
              "test": "C1q",
              "value": "4",
              "unit": "mg/dL",
              "range": "11-22",
              "flag": "L"
            },
            {
              "test": "SPEP",
              "value": "Monoclonal IgM kappa spike",
              "unit": "",
              "range": "",
              "flag": "H"
            },
            {
              "test": "Anti-C1-INH antibody",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
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
    "No family history of angioedema (distinguishes acquired from hereditary)"
  ],
  "socialHistory": [
    [
      "Key",
      "Angioedema starting at age 68 — NO family history (acquired, not hereditary)"
    ],
    [
      "Comorbidity",
      "Monoclonal gammopathy (MGUS) found on workup — driving the acquired C1-INH consumption"
    ],
    [
      "Distinction",
      "HAE = low C1-INH from birth + family history; Acquired = low C1-INH from underlying lymphoproliferative/autoimmune disease"
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
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular",
        "Pulmonary",
        "Abdominal",
        "Extremities",
        "Skin",
        "Targeted exam"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with this condition.",
        "Vital signs": "Finding consistent with this condition.",
        "Cardiovascular": "Finding consistent with this condition.",
        "Pulmonary": "Finding consistent with this condition.",
        "Abdominal": "Finding consistent with this condition.",
        "Extremities": "Finding consistent with this condition.",
        "Skin": "Finding consistent with this condition.",
        "Targeted exam": "Finding consistent with this condition."
    },
    "ddxTargets": [
        "this condition (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for this condition.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Walter Brennan: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Mr. Brennan appears anxious and somewhat tired from dealing with recurrent episodes. He is very forthcoming about his symptoms, having learned to describe them clearly after multiple ED visits. He shows visible concern when discussing throat swelling episodes.",
    "interviewQuestions": [
        "When did you first start having these swelling episodes?",
        "Can you describe what the swelling looks like and where it occurs?",
        "How long do these episodes typically last?",
        "On a scale of 1-10, how severe is the swelling at its worst?",
        "Have you ever had throat or tongue swelling that made it hard to breathe or swallow?",
        "What seems to trigger these episodes, if anything?",
        "Does anything help make the swelling go down?",
        "Do you have any other symptoms with the swelling like hives, itching, or difficulty breathing?",
        "Has anyone in your family ever had similar swelling episodes?",
        "Have you been diagnosed with any blood disorders or cancer recently?",
        "What medications are you currently taking for this condition?",
        "Do you have any known allergies?",
        "Have you started any new medications in the past few years?"
    ],
    "patientResponses": {
        "default": "I'm not sure I understand what you're asking. Can you rephrase that?",
        "onset": "It started about 3 years ago when I was 68. Before that, I never had anything like this in my whole life.",
        "character": "It's a deep, non-pitting swelling, not like regular swelling from an injury. My lips get really puffy and sometimes my throat feels tight.",
        "location": "Mainly my lips and sometimes around my eyes. The scary part is when my throat and tongue swell - that's when I go to the ER.",
        "severity": "The lip swelling is maybe a 6 out of 10, but when my throat swells it's a 9 or 10 - I can barely swallow and get really scared I can't breathe.",
        "aggravating": "I can't really identify any specific triggers. It seems to happen randomly, which is frustrating.",
        "relieving": "The doctors give me some kind of IV medication in the ER that helps. Sometimes it takes hours to go down on its own.",
        "associated": "No hives or itching, which the doctors say is unusual. Sometimes I feel anxious, but I think that's just from being scared about my airway.",
        "denies": "No hives, no itching, no rash anywhere. No wheezing. No abdominal pain.",
        "history": "I've had maybe 8-10 episodes over the past 3 years. A few times I've needed to go to the ER because of throat swelling.",
        "medications": "C1-INH concentrate; Icatibant",
        "allergies": "NKDA",
        "family": "No one in my family has ever had anything like this. My parents lived into their 80s and never had swelling episodes.",
        "social": "I'm retired from construction work. I don't smoke anymore - quit 10 years ago. I have maybe one beer with dinner. No drugs."
    },
    "examManeuvers": [
        "Inspect lips and perioral area",
        "Inspect periorbital area for swelling",
        "Palpate face and neck for asymmetric swelling",
        "Examine oral cavity and tongue",
        "Inspect throat and assess airway patency",
        "Auscultate lungs for wheezing or stridor",
        "Inspect skin for urticaria or rash",
        "Palpate lymph nodes",
        "Abdominal examination",
        "Assess overall appearance and respiratory distress"
    ],
    "examFindings": {
        "Inspect lips and perioral area": "Mild residual asymmetric swelling of the lower lip, non-erythematous, non-tender",
        "Inspect periorbital area for swelling": "No current periorbital edema",
        "Palpate face and neck for asymmetric swelling": "Soft, non-pitting swelling of lower lip, no neck swelling currently",
        "Examine oral cavity and tongue": "Tongue appears normal size, no current swelling, good mobility",
        "Inspect throat and assess airway patency": "Oropharynx clear, no current laryngeal edema, voice normal",
        "Auscultate lungs for wheezing or stridor": "Clear breath sounds bilaterally, no wheeze or stridor",
        "Inspect skin for urticaria or rash": "No urticaria, petechiae, or rash anywhere on body",
        "Palpate lymph nodes": "No significant lymphadenopathy",
        "Abdominal examination": "Soft, non-tender, no organomegaly",
        "Assess overall appearance and respiratory distress": "Well-appearing, no acute distress, speaking in full sentences"
    },
    "ddxTargets": [
        "Acquired C1-INH deficiency (correct diagnosis)",
        "Hereditary angioedema",
        "ACE inhibitor-induced angioedema",
        "Anaphylaxis",
        "Airway obstruction from other causes",
        "Allergic angioedema",
        "Idiopathic angioedema"
    ],
    "biasFlags": {
        "anchoring": "May anchor on 'angioedema' and assume allergic cause, missing the late onset and lack of urticaria that suggest C1-INH deficiency",
        "prematureClosure": "Might stop at 'hereditary angioedema' without considering the key differences: late onset, no family history, and low C1q levels",
        "availabilityBias": "More likely to consider common allergic angioedema or ACE inhibitor-induced rather than rare acquired C1-INH deficiency"
    },
    "coachPrompts": {
        "phase2": "Good start on your differential. I notice you're thinking about angioedema - that's right. What key historical features would help you distinguish between hereditary, acquired, and allergic causes of angioedema?",
        "phase5": "Interesting findings. You've noted the late onset, absence of urticaria, and lack of family history. How do these findings help narrow your differential? What's the significance of the associated MGUS diagnosis?",
        "finalDebrief": "This case highlights acquired C1-INH deficiency versus hereditary angioedema. The key distinguishing features are: late onset (age 68), no family history, and low C1q levels. The underlying MGUS consumes C1-INH, leading to acquired deficiency. How did your thinking evolve as you gathered more information?"
    }
}
};
