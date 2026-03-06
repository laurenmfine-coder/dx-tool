/* emr-data/dress-syndrome-v2.js — Variation: DRESS Syndrome */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Howard Kim",
  "patientHPI": "About three weeks ago I started taking a new medication for my joint pain, and now I have this terrible rash all over my body with a fever. My face feels swollen, my neck glands are enlarged, and my skin has turned yellow - I'm really worried something is seriously wrong.",
      "dob": "06/13/1974",
      "age": "52",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-719936",
      "language": "English",
      "race": "Asian",
      "phone": "(314) 555-3522",
      "email": "howard.kim@email.com",
      "address": "7836 Willow Way, Cleveland, OH 44105",
      "insurance": "Cigna PPO",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Sarah Kim",
        "phone": "(615) 555-5781",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Allopurinol",
        "reaction": "DRESS",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Context",
        "Korean descent — HLA-B*58:01 prevalence 12% in Korean population"
      ],
      [
        "Comorbidity",
        "CKD stage 3 — increased allopurinol DRESS risk"
      ],
      [
        "Timing",
        "Started allopurinol 3 weeks ago for gout — should have been HLA-tested first"
      ],
      [
        "Organ involvement",
        "Hepatitis (ALT 680), eosinophilia, rash"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "52yo with fever, diffuse rash, facial edema, and jaundice 3 weeks after starting allopurinol",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "DRESS syndrome — allopurinol culprit",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Hepatitis (ALT 680) — organ involvement",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Eosinophilia (22%)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "CKD stage 3 — contributed to DRESS risk (reduced renal clearance of allopurinol)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Korean descent — HLA-B*58:01 should have been tested before starting allopurinol",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Lymphadenopathy — cervical and axillary",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Allopurinol",
          "dose": "STOPPED",
          "route": "",
          "frequency": "Culprit",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Methylprednisolone",
          "dose": "1mg/kg",
          "route": "IV",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "IV Fluids",
          "dose": "D5NS",
          "route": "IV",
          "frequency": "Maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "N-acetylcysteine",
          "dose": "",
          "route": "IV",
          "frequency": "Hepatoprotection (off-label)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "96",
          "rr": "18",
          "temp": "39.2°C",
          "spo2": "97%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-689317",
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
                  "value": "16.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
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
                  "value": "22",
                  "unit": "%",
                  "range": "1-4",
                  "flag": "H"
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
                  "value": "2.2",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
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
              "name": "DRESS MARKERS",
              "results": [
                {
                  "test": "ALT",
                  "value": "680",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": "H"
                },
                {
                  "test": "AST",
                  "value": "520",
                  "unit": "U/L",
                  "range": "10-40",
                  "flag": "H"
                },
                {
                  "test": "Total bilirubin",
                  "value": "4.2",
                  "unit": "mg/dL",
                  "range": "0.1-1.2",
                  "flag": "H"
                },
                {
                  "test": "HHV-6 IgG",
                  "value": "Positive (reactivation)",
                  "unit": "",
                  "range": "",
                  "flag": "H"
                },
                {
                  "test": "Atypical lymphocytes",
                  "value": "12",
                  "unit": "%",
                  "range": "0",
                  "flag": "H"
                },
                {
                  "test": "RegiSCAR score",
                  "value": "6 (definite DRESS)",
                  "unit": "",
                  "range": "",
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
          "cc": "52yo with fever, diffuse rash, facial edema, and jaundice 3 weeks after starting allopurinol",
          "hpi": "52M Korean-American started on allopurinol 300mg for gout 3 weeks ago. CKD stage 3 (should have started at 100mg). Developed fever, diffuse morbilliform rash with facial edema, cervical and axillary lymphadenopathy, and jaundice. Labs: eosinophilia 22%, ALT 680, HHV-6 reactivation (classic DRESS finding). RegiSCAR score 6 = definite DRESS. CRITICAL: HLA-B*58:01 testing was NOT done before starting allopurinol. ACR/AADV guidelines recommend HLA-B*58:01 testing in Southeast Asian, Korean, African American, and Native Hawaiian/Pacific Islander patients BEFORE starting allopurinol. This was a preventable adverse event.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for DRESS — monitoring liver function, slow steroid taper, watch for autoimmune sequelae",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "DRESS — allopurinol, RegiSCAR 6",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Hepatitis — ALT trending down on steroids",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "HHV-6 reactivation — DRESS hallmark",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "CKD stage 3 → AKI (Cr 2.2 from baseline 1.6)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Must NEVER take allopurinol or febuxostat again",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Gout management — will need alternative (anakinra? pegloticase?)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisone",
          "dose": "1mg/kg (60mg)",
          "route": "PO",
          "frequency": "Daily — will taper over 8-12 WEEKS (DRESS requires slow taper)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Famotidine",
          "dose": "20mg",
          "route": "PO",
          "frequency": "BID (GI protection on steroids)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "Daily (gout prevention — low dose for CKD)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "122/76",
          "hr": "84",
          "rr": "16",
          "temp": "38.0°C",
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
          "accession": "LAB-855208",
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
          "cc": "Admitted for DRESS — monitoring liver function, slow steroid taper, watch for autoimmune sequelae",
          "hpi": "52M day 5 of DRESS. ALT trending down (680→420→280). Rash improving on prednisone. Key: DRESS requires VERY slow steroid taper (8-12 weeks minimum) — rapid taper causes rebound with organ involvement. HHV-6 IgG positive = viral reactivation, not primary infection (characteristic of DRESS). HLA-B*58:01 result: POSITIVE. This was a preventable event. Quality improvement report filed — adding HLA-B*58:01 pre-test to allopurinol prescribing workflow in system.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — DRESS management, alternative gout therapy, long-term autoimmune monitoring",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "DRESS — resolving, slow steroid taper critical",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Allopurinol + febuxostat permanently contraindicated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Alternative gout therapy — consider pegloticase or anakinra for flares",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "DRESS late complications: autoimmune thyroiditis (check at 3, 6, 12 months), Type 1 DM (rare), autoimmune hepatitis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "HLA-B*58:01 positive — family should be tested before any xanthine oxidase inhibitor",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisone taper",
          "dose": "60mg→45→30→20→15→10→5→0",
          "route": "PO",
          "frequency": "Over 10 weeks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Colchicine",
          "dose": "0.3mg",
          "route": "PO",
          "frequency": "Daily (CKD dose)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "78",
          "rr": "14",
          "temp": "37.4°C",
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
          "accession": "LAB-797820",
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
          "cc": "A/I consult — DRESS management, alternative gout therapy, long-term autoimmune monitoring",
          "hpi": "A/I consult: 52M with allopurinol DRESS, HLA-B*58:01 positive. Management: (1) Slow prednisone taper over 10 weeks (NOT faster — DRESS rebounds), (2) Monthly LFTs during taper, (3) TSH at 3, 6, 12 months (40% develop autoimmune thyroiditis post-DRESS — this is the most common late complication), (4) Fasting glucose at 3, 6, 12 months, (5) Alternative gout: febuxostat ALSO contraindicated (same drug class), options are probenecid (if adequate GFR), pegloticase (for severe tophaceous gout), or anakinra for acute flares, (6) Rheumatology co-management for gout strategy without XOI.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "DRESS follow-up — 3 months, steroid taper complete, thyroid check, liver normalized",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "DRESS — resolved, steroid taper completed",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Liver — ALT normalized (680→22)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "TSH elevated (8.2) — new autoimmune thyroiditis (predicted DRESS complication)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Started levothyroxine",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Gout — managed with probenecid + colchicine (rheumatology co-managing)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "System improvement — HLA-B*58:01 pre-test now required before allopurinol in EHR",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Levothyroxine",
          "dose": "50mcg",
          "route": "PO",
          "frequency": "Daily (new autoimmune thyroiditis)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Probenecid",
          "dose": "500mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Colchicine",
          "dose": "0.3mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "126/76",
          "hr": "74",
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
          "accession": "LAB-254751",
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
          "cc": "DRESS follow-up — 3 months, steroid taper complete, thyroid check, liver normalized",
          "hpi": "52M 3 months post-DRESS. Steroid taper completed without rebound. LFTs normalized. BUT: TSH now 8.2 with positive anti-TPO — new autoimmune thyroiditis, a predicted late complication of DRESS (occurs in ~40% of patients). Started levothyroxine. Gout managed on probenecid + colchicine by rheumatology. HLA-B*58:01 pre-test now built into hospital EHR as hard stop before allopurinol prescribing — his case drove a system-wide change. Next: TSH monitoring Q3 months, annual fasting glucose (DM screening), continue gout management with rheumatology.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Howard Kim",
    "dob": "06/13/1974",
    "age": "52",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-719936",
    "language": "English",
    "race": "Asian",
    "phone": "(617) 555-5479",
    "email": "howard.kim@email.com",
    "address": "8427 Spruce St, Memphis, TN 38108",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Sarah Kim",
      "phone": "(513) 555-8905",
      "relationship": "Spouse"
    },
    "chiefComplaint": "52yo with fever, diffuse rash, facial edema, and jaundice 3 weeks after starting allopurinol",
    "diagnosis": "DRESS Syndrome"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "DRESS syndrome — allopurinol culprit",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Hepatitis (ALT 680) — organ involvement",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Eosinophilia (22%)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "CKD stage 3 — contributed to DRESS risk (reduced renal clearance of allopurinol)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Korean descent — HLA-B*58:01 should have been tested before starting allopurinol",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-6",
      "description": "Lymphadenopathy — cervical and axillary",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Allopurinol",
      "dose": "STOPPED",
      "route": "",
      "frequency": "Culprit",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Methylprednisolone",
      "dose": "1mg/kg",
      "route": "IV",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "IV Fluids",
      "dose": "D5NS",
      "route": "IV",
      "frequency": "Maintenance",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "N-acetylcysteine",
      "dose": "",
      "route": "IV",
      "frequency": "Hepatoprotection (off-label)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Allopurinol",
      "reaction": "DRESS",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "118/72",
      "hr": "96",
      "rr": "18",
      "temp": "39.2°C",
      "spo2": "97%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "52yo with fever, diffuse rash, facial edema, and jaundice 3 weeks after starting allopurinol",
      "hpi": "52M Korean-American started on allopurinol 300mg for gout 3 weeks ago. CKD stage 3 (should have started at 100mg). Developed fever, diffuse morbilliform rash with facial edema, cervical and axillary lymphadenopathy, and jaundice. Labs: eosinophilia 22%, ALT 680, HHV-6 reactivation (classic DRESS finding). RegiSCAR score 6 = definite DRESS. CRITICAL: HLA-B*58:01 testing was NOT done before starting allopurinol. ACR/AADV guidelines recommend HLA-B*58:01 testing in Southeast Asian, Korean, African American, and Native Hawaiian/Pacific Islander patients BEFORE starting allopurinol. This was a preventable adverse event.",
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
      "accession": "LAB-689317",
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
              "value": "16.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
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
              "value": "22",
              "unit": "%",
              "range": "1-4",
              "flag": "H"
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
              "value": "2.2",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
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
          "name": "DRESS MARKERS",
          "results": [
            {
              "test": "ALT",
              "value": "680",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "AST",
              "value": "520",
              "unit": "U/L",
              "range": "10-40",
              "flag": "H"
            },
            {
              "test": "Total bilirubin",
              "value": "4.2",
              "unit": "mg/dL",
              "range": "0.1-1.2",
              "flag": "H"
            },
            {
              "test": "HHV-6 IgG",
              "value": "Positive (reactivation)",
              "unit": "",
              "range": "",
              "flag": "H"
            },
            {
              "test": "Atypical lymphocytes",
              "value": "12",
              "unit": "%",
              "range": "0",
              "flag": "H"
            },
            {
              "test": "RegiSCAR score",
              "value": "6 (definite DRESS)",
              "unit": "",
              "range": "",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Context",
      "Korean descent — HLA-B*58:01 prevalence 12% in Korean population"
    ],
    [
      "Comorbidity",
      "CKD stage 3 — increased allopurinol DRESS risk"
    ],
    [
      "Timing",
      "Started allopurinol 3 weeks ago for gout — should have been HLA-tested first"
    ],
    [
      "Organ involvement",
      "Hepatitis (ALT 680), eosinophilia, rash"
    ]
  ]
,"references":[
  {
    "id": "RegiSCAR-2013",
    "title": "DRESS: results from the prospective RegiSCAR study",
    "authors": "Kardaun SH, Sekula P, Valeyrie-Allanore L, et al.",
    "journal": "Br J Dermatol",
    "year": 2013,
    "doi": "10.1111/bjd.12501",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK459327/",
    "openAccess": true,
    "validates": [
      "RegiSCAR score ≥5 = definite DRESS",
      "HHV-6 reactivation",
      "Organ involvement patterns",
      "Slow steroid taper 8-12 weeks"
    ]
  },
  {
    "id": "HLA-B5801-ACR-2020",
    "title": "2020 ACR guideline for management of gout",
    "authors": "FitzGerald JD, Dalbeth N, Mikuls T, et al.",
    "journal": "Arthritis Care Res",
    "year": 2020,
    "doi": "10.1002/acr.24180",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/",
    "openAccess": true,
    "validates": [
      "HLA-B*58:01 testing before allopurinol in SE Asian, Korean, African American patients"
    ]
  },
  {
    "id": "DRESS-Autoimmunity-2019",
    "title": "DRESS syndrome and long-term risk of autoimmunity",
    "authors": "Chen YC, Chang CY, Cho YT, et al.",
    "journal": "J Allergy Clin Immunol Pract",
    "year": 2019,
    "doi": "10.1016/j.jaip.2018.08.004",
    "url": "https://pubmed.ncbi.nlm.nih.gov/30145342/",
    "openAccess": true,
    "validates": [
      "Autoimmune thyroiditis ~40% post-DRESS",
      "TSH monitoring at 3, 6, 12 months",
      "Type 1 DM risk"
    ]
  }
]};
