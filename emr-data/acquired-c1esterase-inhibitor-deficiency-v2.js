/* emr-data/acquired-c1esterase-inhibitor-deficiency-v2.js — Variation: Acquired C1-INH Deficiency */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Walter Brennan",
      "dob": "05/14/1955",
      "age": "71",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-401586",
      "language": "English",
      "race": "White",
      "phone": "(422) 633-3880",
      "email": "walter.x@email.com",
      "address": "8317 Oak St, Weston, FL 33326",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(467) 332-5826",
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
    "phone": "(422) 633-3880",
    "email": "walter.x@email.com",
    "address": "8317 Oak St, Weston, FL 33326",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(467) 332-5826",
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
]};
