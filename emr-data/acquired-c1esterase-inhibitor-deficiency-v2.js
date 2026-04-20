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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Angioedema starting at age 68 \u2014 NO family history (acquired, not hereditary)"
      ],
      [
        "Comorbidity",
        "Monoclonal gammopathy (MGUS) found on workup \u2014 driving the acquired C1-INH consumption"
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
        "chiefComplaint": "71yo with new-onset recurrent angioedema starting age 68 \u2014 no family history, low C4 AND low C1q (not seen in HAE)",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH deficiency \u2014 NOT hereditary (onset age 68, no family history)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Low C4 + low C1-INH + LOW C1q (C1q is normal in HAE \u2014 this distinguishes acquired)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "MGUS found on workup \u2014 the lymphoproliferative condition consuming C1-INH",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Lip and laryngeal angioedema \u2014 airway risk",
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
          "temp": "36.8\u00b0C",
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
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "71yo with new-onset recurrent angioedema starting age 68 \u2014 no family history, low C4 AND low C1q (not seen in HAE)",
          "hpi": "71M with recurrent angioedema starting at age 68. KEY DISTINCTION from HAE: (1) Late onset (HAE presents in childhood/teens), (2) NO family history (HAE is autosomal dominant), (3) C1q is LOW (C1q is NORMAL in HAE \u2014 this is the critical distinguishing lab), (4) Anti-C1-INH antibody positive (autoantibody consuming C1-INH). SPEP shows monoclonal IgM kappa \u2014 MGUS is driving autoantibody production. Treatment of underlying MGUS may improve angioedema. Hematology consult essential.",
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
          "description": "Acquired C1-INH deficiency \u2014 MGUS-driven",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Laryngeal angioedema \u2014 airway risk",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Hematology \u2014 MGUS workup, bone marrow biopsy",
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
          "description": "Monitor MGUS for progression to Waldenstr\u00f6m",
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
          "temp": "36.8\u00b0C",
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
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10\u00b3/\u00b5L",
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
          "hpi": "71M admitted after laryngeal angioedema. Hematology consulted \u2014 bone marrow biopsy shows low-grade lymphoplasmacytic infiltrate consistent with MGUS/early Waldenstr\u00f6m. The monoclonal B cells are producing anti-C1-INH antibodies that consume C1-INH \u2192 acquired deficiency \u2192 angioedema. If MGUS progresses: rituximab would target the B-cell clone and potentially cure the angioedema. Currently: manage attacks with C1-INH replacement and icatibant.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I + Hematology joint consult \u2014 acquired C1-INH deficiency secondary to MGUS",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH deficiency \u2014 MGUS-driven autoantibody",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Teaching point: HAE vs acquired \u2014 C1q level is the key",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "MGUS monitoring \u2014 progression to Waldenstr\u00f6m would warrant rituximab",
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
          "frequency": "TID (prophylaxis \u2014 antifibrinolytic, modest benefit)",
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
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "A/I + Hematology joint consult \u2014 acquired C1-INH deficiency secondary to MGUS",
          "hpi": "Joint A/I-Hematology consult: 71M with acquired C1-INH deficiency from MGUS. Teaching: C1q distinguishes acquired (LOW) from hereditary (NORMAL). Anti-C1-INH antibody confirms autoimmune mechanism. Management: (1) Acute \u2014 C1-INH concentrate or icatibant, (2) Prophylaxis \u2014 tranexamic acid (modest), (3) Definitive \u2014 treat underlying MGUS when indicated (rituximab). Monitoring: SPEP Q6 months, bone marrow if progression suspected.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up \u2014 MGUS stable, angioedema frequency, hematology monitoring",
        "diagnosis": "Acquired C1-INH Deficiency"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acquired C1-INH deficiency \u2014 2 episodes in 6 months (improved from monthly)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "MGUS stable \u2014 no progression to Waldenstr\u00f6m",
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
          "description": "C1q trending \u2014 still low (4) but C1-INH slightly improved (15)",
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
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Follow-up \u2014 MGUS stable, angioedema frequency, hematology monitoring",
          "hpi": "71M 6-month follow-up. Attack frequency reduced on tranexamic acid. MGUS stable on hematology monitoring. C1-INH slightly improved (12\u219215) \u2014 possible partial autoantibody reduction. Continue current management, escalate to rituximab only if MGUS progresses or attacks become unmanageable.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(615) 555-4644",
      "relationship": "Spouse"
    },
    "chiefComplaint": "71yo with new-onset recurrent angioedema starting age 68 \u2014 no family history, low C4 AND low C1q (not seen in HAE)",
    "diagnosis": "Acquired C1-INH Deficiency"
  },
  "problems": [
    {
      "problem": "Acquired C1-inhibitor deficiency, Type I",
      "icd": "D84.1",
      "onset": "2021",
      "status": "Active",
      "notes": "Age 68 onset; anti-C1-INH antibodies negative; consumption by lymphoma clone suspected"
    },
    {
      "problem": "B-cell lymphoproliferative disorder (MGUS vs low-grade lymphoma)",
      "icd": "D47.9",
      "onset": "2024",
      "status": "Under evaluation",
      "notes": "Serum protein electrophoresis shows IgM paraprotein; hematology referral placed"
    },
    {
      "problem": "Recurrent angioedema \u2014 refractory to antihistamines and steroids",
      "icd": "T78.3XXA",
      "onset": "2021",
      "status": "Active",
      "notes": "4 ER visits in 18 months; episodes involve face, larynx, abdomen; no urticaria"
    }
  ],
  "medications": [
    {
      "name": "C1-INH concentrate (Berinert) 1500 units IV PRN acute attacks",
      "sig": "Administer 1500 units IV at onset of severe or laryngeal episode; can self-administer with training",
      "prescriber": "Dr. Rodriguez",
      "start": "10/2024",
      "refills": 2,
      "status": "Active \u2014 home supply"
    },
    {
      "name": "Icatibant (Firazyr) 30mg SC PRN \u2014 backup",
      "sig": "Inject 30mg subcutaneously at onset of moderate-severe attack; may repeat q6h x2",
      "prescriber": "Dr. Rodriguez",
      "start": "10/2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Tranexamic acid 1g TID (prophylaxis while awaiting hematology)",
      "sig": "Take 1 tablet by mouth three times daily",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 2,
      "status": "Active"
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
      "temp": "36.8\u00b0C",
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
      "cc": "71yo with new-onset recurrent angioedema starting age 68 \u2014 no family history, low C4 AND low C1q (not seen in HAE)",
      "hpi": "71M with recurrent angioedema starting at age 68. KEY DISTINCTION from HAE: (1) Late onset (HAE presents in childhood/teens), (2) NO family history (HAE is autosomal dominant), (3) C1q is LOW (C1q is NORMAL in HAE \u2014 this is the critical distinguishing lab), (4) Anti-C1-INH antibody positive (autoantibody consuming C1-INH). SPEP shows monoclonal IgM kappa \u2014 MGUS is driving autoantibody production. Treatment of underlying MGUS may improve angioedema. Hematology consult essential.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/08/2024",
      "panel": "Complement Panel and Paraprotein Workup",
      "results": [
        {
          "test": "C4",
          "value": "<4",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": "L"
        },
        {
          "test": "C1q",
          "value": "8",
          "unit": "mg/dL",
          "ref": "14-22",
          "flag": "L"
        },
        {
          "test": "C1-INH Level (functional)",
          "value": "18",
          "unit": "%",
          "ref": "70-130",
          "flag": "L"
        },
        {
          "test": "C1-INH Antigen",
          "value": "6",
          "unit": "mg/dL",
          "ref": "21-39",
          "flag": "L"
        },
        {
          "test": "Anti-C1-INH Antibodies",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Serum IgM",
          "value": "3,840",
          "unit": "mg/dL",
          "ref": "40-230",
          "flag": "H"
        },
        {
          "test": "Serum Protein Electrophoresis",
          "value": "IgM paraprotein (M-spike 1.8 g/dL)",
          "unit": "",
          "ref": "No paraprotein",
          "flag": "H"
        },
        {
          "test": "C3",
          "value": "98",
          "unit": "mg/dL",
          "ref": "90-180",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/12/2024",
      "study": "CT Chest/Abdomen/Pelvis with contrast",
      "indication": "Paraprotein workup, acquired C1-INH deficiency \u2014 evaluate for lymphadenopathy or splenomegaly",
      "findings": "Mild splenomegaly (14.2 cm). Small retroperitoneal lymph nodes, largest 1.1 cm at aortocaval station, not pathologically enlarged by size criteria. No hepatomegaly. No mediastinal adenopathy.",
      "impression": "Mild splenomegaly with small retroperitoneal nodes. In context of IgM paraprotein, findings are consistent with Waldenstr\u00f6m's macroglobulinemia or low-grade B-cell lymphoproliferative disorder. Recommend hematology consultation and bone marrow biopsy."
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
      "Angioedema starting at age 68 \u2014 NO family history (acquired, not hereditary)"
    ],
    [
      "Comorbidity",
      "Monoclonal gammopathy (MGUS) found on workup \u2014 driving the acquired C1-INH consumption"
    ],
    [
      "Distinction",
      "HAE = low C1-INH from birth + family history; Acquired = low C1-INH from underlying lymphoproliferative/autoimmune disease"
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
  "guided": {
    "supported": true,
    "patientPersona": "Walter appears anxious and frustrated about his recurring episodes of facial swelling, particularly concerned about breathing difficulties. He's cooperative but worried, having been through multiple ER visits and specialist consultations since his symptoms began three years ago.",
    "interviewQuestions": [
      "When did your swelling episodes first start and how often do they occur?",
      "Can you describe what the swelling looks like and where it occurs?",
      "Have you ever had trouble breathing or swallowing during these episodes?",
      "Does anyone in your family have similar swelling problems?",
      "What triggers seem to bring on your swelling episodes?",
      "How long do the episodes typically last?",
      "What medications have you tried for these episodes?",
      "Have you had any recent infections or started new medications?",
      "Do you get hives or itching along with the swelling?",
      "Have you been told about any blood test abnormalities?",
      "What usually helps resolve your swelling episodes?",
      "Have you had any other health problems discovered recently?",
      "Did you have any swelling problems as a child or young adult?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "The swelling started about three years ago when I was 68. It comes and goes, maybe once or twice a month, sometimes more frequently.",
      "character": "It's a deep, non-pitting swelling mainly in my lips, sometimes my eyelids and face. It's not red or itchy like a rash.",
      "location": "Mostly my lips and sometimes around my eyes. A few times my throat felt tight which really scared me.",
      "severity": "The swelling itself is maybe a 4 out of 10 for pain, but my anxiety about breathing problems makes it feel like an 8 or 9.",
      "aggravating": "I can't identify specific triggers. It seems random - no particular foods, stress, or activities that I can pinpoint.",
      "relieving": "The doctors give me C1-INH concentrate in the ER, and sometimes icatibant shots. Those seem to help it resolve faster.",
      "associated": "No hives or itching. Sometimes I feel like my throat is tight, but no other symptoms really.",
      "denies": "No itching, no hives, no stomach problems, no joint pain. Never had allergic reactions to foods or medications before this started.",
      "history": "Never had anything like this before age 68. I've been healthy most of my life with just high blood pressure.",
      "medications": "C1-INH concentrate; Icatibant",
      "allergies": "NKDA",
      "family": "No one in my family has ever had swelling problems like this. My parents lived into their 80s without anything like this.",
      "social": "I'm retired from construction work. I drink a glass of wine with dinner most nights, never smoked. Live with my wife of 45 years."
    },
    "examManeuvers": [
      "Inspect lips and perioral area",
      "Palpate facial swelling",
      "Examine oropharynx and tongue",
      "Assess voice quality and stridor",
      "Palpate neck for lymphadenopathy",
      "Auscultate lungs",
      "Examine skin for urticaria",
      "Palpate abdomen for hepatosplenomegaly",
      "Assess peripheral edema",
      "Check vital signs and oxygen saturation"
    ],
    "examFindings": {
      "Inspect lips and perioral area": "Mild residual asymmetric swelling of lower lip, non-erythematous, non-tender",
      "Palpate facial swelling": "Soft, non-pitting edema of lower lip and minimal periorbital involvement",
      "Examine oropharynx and tongue": "No acute swelling of tongue, uvula, or soft palate; oropharynx clear",
      "Assess voice quality and stridor": "Voice clear, no stridor or hoarseness",
      "Palpate neck for lymphadenopathy": "No significant cervical lymphadenopathy",
      "Auscultate lungs": "Clear to auscultation bilaterally, no wheezes",
      "Examine skin for urticaria": "No urticarial lesions, no dermatographism",
      "Palpate abdomen for hepatosplenomegaly": "Soft abdomen, no hepatosplenomegaly appreciated",
      "Assess peripheral edema": "No peripheral edema in extremities",
      "Check vital signs and oxygen saturation": "BP 148/86, HR 82, afebrile, SpO2 98% on room air"
    },
    "ddxTargets": [
      "Acquired C1-inhibitor deficiency \u2014 Type I (lymphoproliferative) (correct)",
      "Hereditary angioedema Type I \u2014 age of onset 68 argues against; no family history; C1q would be normal",
      "ACE inhibitor-associated angioedema \u2014 not on ACE-I; bradykinin-mediated; C4 normal in ACE-I angioedema",
      "Acquired C1-INH deficiency Type II \u2014 anti-C1-INH antibodies present; antibodies negative here",
      "Idiopathic histaminergic angioedema \u2014 responds to antihistamines; C4 normal",
      "Allergic angioedema \u2014 associated with urticaria; IgE-mediated; C4 normal"
    ],
    "biasFlags": {
      "anchoring": "May anchor on hereditary angioedema due to similar presentation, missing the key distinguishing features of late onset and absent family history",
      "prematureClosure": "Risk of stopping at 'angioedema' without distinguishing acquired vs hereditary forms, missing the underlying MGUS",
      "availabilityBias": "More likely to consider common allergic angioedema or ACE inhibitor effects rather than rare acquired C1-INH deficiency"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're considering various causes of angioedema. What key historical features would help you distinguish between hereditary and acquired forms of complement-mediated angioedema? Think about timing of onset and family history patterns.",
      "phase5": "Nice work gathering the history and exam. You've identified recurrent angioedema with late onset and no family history. Given these features and the lack of urticaria, what laboratory studies would help distinguish the different complement-mediated causes? What underlying conditions might drive acquired C1-inhibitor deficiency?",
      "finalDebrief": "This case highlights the importance of distinguishing acquired from hereditary C1-inhibitor deficiency. The key differentiators were late onset (age 68 vs childhood), absent family history, and low C1q levels. The underlying MGUS represents a lymphoproliferative condition consuming C1-inhibitor. How did your thinking evolve as you gathered more clinical information?",
      "final": "Diagnosis: acquired C1-INH deficiency Type I, likely from IgM-secreting B-cell clone (Waldenstr\u00f6m's macroglobulinemia vs. low-grade lymphoma). Key teaching points: (1) Distinguish acquired from hereditary by: age of onset (acquired >40), absent family history, C1q LOW (HAE has normal C1q), and anti-C1-INH antibodies. (2) The mechanism: lymphoma clone either consumes C1-INH via immune complexes OR produces anti-C1-INH antibodies \u2014 here antibody-negative suggests consumption. (3) Low C4 + low C1q + low C1-INH = acquired angioedema; in HAE, C1q is NORMAL. (4) Treatment priority: treat the underlying lymphoproliferative disorder \u2014 angioedema may resolve. Acute attacks: C1-INH concentrate or icatibant (bradykinin-B2 antagonist). (5) Laryngeal involvement is life-threatening \u2014 home C1-INH supply with self-injection training is standard of care."
    }
  },
  "meta": {
    "diagnosis": "Acquired C1-Inhibitor Deficiency (Acquired Angioedema Type I) \u2014 Associated with B-cell Lymphoproliferative Disorder"
  }
};
