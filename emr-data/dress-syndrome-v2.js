
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Korean descent \u2014 HLA-B*58:01 prevalence 12% in Korean population"
      ],
      [
        "Comorbidity",
        "CKD stage 3 \u2014 increased allopurinol DRESS risk"
      ],
      [
        "Timing",
        "Started allopurinol 3 weeks ago for gout \u2014 should have been HLA-tested first"
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
          "description": "DRESS syndrome \u2014 allopurinol culprit",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Hepatitis (ALT 680) \u2014 organ involvement",
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
          "description": "CKD stage 3 \u2014 contributed to DRESS risk (reduced renal clearance of allopurinol)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Korean descent \u2014 HLA-B*58:01 should have been tested before starting allopurinol",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Lymphadenopathy \u2014 cervical and axillary",
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
          "temp": "39.2\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
        "chiefComplaint": "Admitted for DRESS \u2014 monitoring liver function, slow steroid taper, watch for autoimmune sequelae",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "DRESS \u2014 allopurinol, RegiSCAR 6",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Hepatitis \u2014 ALT trending down on steroids",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "HHV-6 reactivation \u2014 DRESS hallmark",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "CKD stage 3 \u2192 AKI (Cr 2.2 from baseline 1.6)",
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
          "description": "Gout management \u2014 will need alternative (anakinra? pegloticase?)",
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
          "frequency": "Daily \u2014 will taper over 8-12 WEEKS (DRESS requires slow taper)",
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
          "frequency": "Daily (gout prevention \u2014 low dose for CKD)",
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
          "temp": "38.0\u00b0C",
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
          "cc": "Admitted for DRESS \u2014 monitoring liver function, slow steroid taper, watch for autoimmune sequelae",
          "hpi": "52M day 5 of DRESS. ALT trending down (680\u2192420\u2192280). Rash improving on prednisone. Key: DRESS requires VERY slow steroid taper (8-12 weeks minimum) \u2014 rapid taper causes rebound with organ involvement. HHV-6 IgG positive = viral reactivation, not primary infection (characteristic of DRESS). HLA-B*58:01 result: POSITIVE. This was a preventable event. Quality improvement report filed \u2014 adding HLA-B*58:01 pre-test to allopurinol prescribing workflow in system.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 DRESS management, alternative gout therapy, long-term autoimmune monitoring",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "DRESS \u2014 resolving, slow steroid taper critical",
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
          "description": "Alternative gout therapy \u2014 consider pegloticase or anakinra for flares",
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
          "description": "HLA-B*58:01 positive \u2014 family should be tested before any xanthine oxidase inhibitor",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisone taper",
          "dose": "60mg\u219245\u219230\u219220\u219215\u219210\u21925\u21920",
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
          "temp": "37.4\u00b0C",
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
          "cc": "A/I consult \u2014 DRESS management, alternative gout therapy, long-term autoimmune monitoring",
          "hpi": "A/I consult: 52M with allopurinol DRESS, HLA-B*58:01 positive. Management: (1) Slow prednisone taper over 10 weeks (NOT faster \u2014 DRESS rebounds), (2) Monthly LFTs during taper, (3) TSH at 3, 6, 12 months (40% develop autoimmune thyroiditis post-DRESS \u2014 this is the most common late complication), (4) Fasting glucose at 3, 6, 12 months, (5) Alternative gout: febuxostat ALSO contraindicated (same drug class), options are probenecid (if adequate GFR), pegloticase (for severe tophaceous gout), or anakinra for acute flares, (6) Rheumatology co-management for gout strategy without XOI.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "DRESS follow-up \u2014 3 months, steroid taper complete, thyroid check, liver normalized",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "DRESS \u2014 resolved, steroid taper completed",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Liver \u2014 ALT normalized (680\u219222)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "TSH elevated (8.2) \u2014 new autoimmune thyroiditis (predicted DRESS complication)",
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
          "description": "Gout \u2014 managed with probenecid + colchicine (rheumatology co-managing)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "System improvement \u2014 HLA-B*58:01 pre-test now required before allopurinol in EHR",
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
          "cc": "DRESS follow-up \u2014 3 months, steroid taper complete, thyroid check, liver normalized",
          "hpi": "52M 3 months post-DRESS. Steroid taper completed without rebound. LFTs normalized. BUT: TSH now 8.2 with positive anti-TPO \u2014 new autoimmune thyroiditis, a predicted late complication of DRESS (occurs in ~40% of patients). Started levothyroxine. Gout managed on probenecid + colchicine by rheumatology. HLA-B*58:01 pre-test now built into hospital EHR as hard stop before allopurinol prescribing \u2014 his case drove a system-wide change. Next: TSH monitoring Q3 months, annual fasting glucose (DM screening), continue gout management with rheumatology.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
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
      "problem": "DRESS syndrome \u2014 Drug Reaction with Eosinophilia and Systemic Symptoms",
      "icd": "L27.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Marcus Lin, 58M \u2014 allopurinol started 5 weeks ago. Widespread morbilliform rash, fever, lymphadenopathy, eosinophilia."
    },
    {
      "problem": "Hepatitis \u2014 drug-induced, DRESS-related",
      "icd": "K71.6",
      "onset": "2024",
      "status": "Active",
      "notes": "ALT 320, AST 280 \u2014 DRESS hepatitis. Liver can progress to fulminant failure. Serial monitoring required."
    },
    {
      "problem": "Allopurinol hypersensitivity \u2014 HLA-B*58:01 association",
      "icd": "L27.0",
      "onset": "2024",
      "status": "Active",
      "notes": "HLA-B*58:01 allele is strongly associated with allopurinol DRESS/SJS-TEN in Asian populations. Genetic screening now recommended before allopurinol in high-risk populations."
    }
  ],
  "medications": [
    {
      "name": "STOP allopurinol immediately \u2014 causative drug",
      "sig": "Permanent discontinuation. Document allergy. Allopurinol rechallenge is absolutely contraindicated.",
      "prescriber": "Allergy/Dermatology",
      "start": "DISCONTINUE",
      "refills": 0,
      "status": "DISCONTINUED"
    },
    {
      "name": "Prednisone 1mg/kg/day PO \u2014 systemic steroid",
      "sig": "Systemic corticosteroid \u2014 reduces inflammation, prevents organ progression. Taper slowly over 6-8 weeks \u2014 rapid taper causes rebound.",
      "prescriber": "Dermatology/Allergy",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Topical triamcinolone 0.1% \u2014 skin symptom relief",
      "sig": "Apply to affected skin areas TID. Adjunct to systemic steroid for itch and rash.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Hydroxyzine 25mg PO q6h PRN \u2014 antihistamine for itch",
      "sig": "H1 antihistamine for symptom relief. DRESS itch is cytokine-mediated, not histamine-only \u2014 antihistamines are adjuncts.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "PRN"
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
      "temp": "39.2\u00b0C",
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
      "date": "11/2024",
      "panel": "DRESS Organ Assessment",
      "results": [
        {
          "test": "Eosinophil count",
          "value": "3.8",
          "unit": "K/\u03bcL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "ALT",
          "value": "320",
          "unit": "U/L",
          "ref": "7-56",
          "flag": "H"
        },
        {
          "test": "AST",
          "value": "280",
          "unit": "U/L",
          "ref": "10-40",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.6",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Atypical lymphocytes",
          "value": "12",
          "unit": "%",
          "ref": "<5%",
          "flag": "H"
        },
        {
          "test": "HHV-6 IgM (reactivation)",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
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
      "Korean descent \u2014 HLA-B*58:01 prevalence 12% in Korean population"
    ],
    [
      "Comorbidity",
      "CKD stage 3 \u2014 increased allopurinol DRESS risk"
    ],
    [
      "Timing",
      "Started allopurinol 3 weeks ago for gout \u2014 should have been HLA-tested first"
    ],
    [
      "Organ involvement",
      "Hepatitis (ALT 680), eosinophilia, rash"
    ]
  ],
  "references": [
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
        "RegiSCAR score \u22655 = definite DRESS",
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
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Howard appears anxious and concerned about his worsening symptoms, particularly the facial swelling and jaundice. He is cooperative and forthcoming with information but expresses frustration that his gout medication seems to have made him sicker than before.",
    "interviewQuestions": [
      "When did you first notice the rash and how has it changed?",
      "Tell me about the facial swelling - when did it start?",
      "Have you noticed any yellowing of your eyes or skin?",
      "What medications were you started on recently?",
      "Do you have any known kidney problems?",
      "Have you had any genetic testing done before starting medications?",
      "Are you of Asian descent, particularly Korean or Chinese?",
      "Have you noticed any swollen lymph nodes in your neck or armpits?",
      "Tell me about your fever pattern",
      "Have you had any nausea, vomiting, or abdominal pain?",
      "Any difficulty breathing or chest pain?",
      "Have you ever had a reaction like this to medications before?",
      "What was the original reason you were prescribed allopurinol?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean - could you ask that differently? I'm mainly worried about this rash and swelling.",
      "onset": "The rash started about 4-5 days ago, maybe a week after I noticed some fever. The facial swelling came on more recently, maybe 2-3 days ago. Everything seemed to start about 2-3 weeks after I began the gout medication.",
      "character": "The rash is red and bumpy all over my body, kind of like measles I guess. My face feels puffy and tight, especially around my eyes and cheeks.",
      "location": "The rash is everywhere - my chest, back, arms, legs. The swelling is mainly in my face but I've noticed some lumps in my neck and under my arms too.",
      "severity": "The fever makes me feel about 6 out of 10 sick, but I'm most worried about how I look - the swelling and yellowing is really concerning me.",
      "aggravating": "The rash seems worse when I'm warm or after showering. The swelling doesn't seem to change much with position.",
      "relieving": "Nothing really helps. I tried some Tylenol for the fever which helped a little, but the rash and swelling haven't improved.",
      "associated": "I've had fever up to 102\u00b0F, chills, fatigue, and I noticed my urine is darker and my eyes look yellow. I feel some lumps in my neck and armpits.",
      "denies": "No chest pain, no trouble breathing, no severe abdominal pain, no diarrhea or bloody stools.",
      "history": "I've never had anything like this before. Never had problems with medications.",
      "medications": "Allopurinol; Methylprednisolone; IV Fluids; N-acetylcysteine",
      "allergies": "Allopurinol",
      "family": "Nothing really runs in my family that I know of. My parents are both from Korea originally.",
      "social": "I work in accounting, don't smoke, maybe 1-2 drinks per week. My parents immigrated from Korea. I was started on allopurinol for gout attacks I was having."
    },
    "examManeuvers": [
      "Skin examination for rash distribution and characteristics",
      "Facial examination for edema and icterus",
      "Scleral examination for jaundice",
      "Lymph node palpation (cervical, axillary, inguinal)",
      "Abdominal examination for hepatosplenomegaly",
      "Vital signs including temperature",
      "Cardiovascular examination",
      "Pulmonary examination for crackles or effusion",
      "Mucous membrane examination",
      "Assessment for peripheral edema"
    ],
    "examFindings": {
      "Skin examination for rash distribution and characteristics": "Diffuse morbilliform eruption covering trunk, extremities, and face with some areas of confluence. No vesicles or pustules.",
      "Facial examination for edema and icterus": "Significant periorbital and facial edema with obvious jaundice of facial skin",
      "Scleral examination for jaundice": "Marked scleral icterus bilaterally",
      "Lymph node palpation (cervical, axillary, inguinal)": "Bilateral cervical and axillary lymphadenopathy, nodes 1-2cm, mobile, non-tender",
      "Abdominal examination for hepatosplenomegaly": "Hepatomegaly with liver edge palpable 3cm below right costal margin, mild tenderness",
      "Vital signs including temperature": "Temperature 39.2\u00b0C, BP 118/72, HR 96, SpO2 97% on room air",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs or gallops",
      "Pulmonary examination for crackles or effusion": "Clear to auscultation bilaterally, no adventitious sounds",
      "Mucous membrane examination": "Oral mucosa shows mild erythema but no ulcerations or enanthem",
      "Assessment for peripheral edema": "Trace bilateral lower extremity edema"
    },
    "ddxTargets": [
      "DRESS syndrome \u2014 allopurinol, multiorgan involvement (correct)",
      "Stevens-Johnson syndrome/TEN \u2014 epidermal detachment, mucosal involvement, different morphology",
      "Viral exanthem \u2014 atypical lymphocytes but no eosinophilia this high, no organ involvement",
      "Serum sickness \u2014 joint pain, urticaria, complement low; different profile",
      "Lymphoma \u2014 lymphadenopathy + atypical cells, but drug timing and eosinophilia fit DRESS",
      "Drug-induced hypersensitivity vasculitis \u2014 palpable purpura, different histology"
    ],
    "biasFlags": {
      "anchoring": "May anchor on common causes of fever and rash like viral syndrome, missing the drug reaction component and severity of systemic involvement",
      "prematureClosure": "Risk of stopping at 'drug allergy' without recognizing this as life-threatening DRESS syndrome requiring immediate drug discontinuation and systemic treatment",
      "availabilityBias": "May think of more common drug reactions or viral illnesses rather than the rare but serious DRESS syndrome, especially missing the pharmacogenetic component in Korean patients"
    },
    "coachPrompts": {
      "phase2": "This patient presents with a constellation of symptoms following recent medication initiation. What key features in the timeline and patient demographics should influence your diagnostic approach? Consider both the temporal relationship and any population-specific risk factors.",
      "phase5": "You've identified significant systemic involvement with hepatitis, eosinophilia, and lymphadenopathy in addition to the fever and rash. How does this pattern of multi-organ involvement change your differential diagnosis? What specific medication-related syndrome should you be most concerned about?",
      "finalDebrief": "This case illustrates DRESS syndrome, a severe delayed hypersensitivity reaction. Key learning points: the importance of HLA-B*58:01 testing in Korean patients before allopurinol initiation, recognition of the 2-6 week onset pattern, and the systemic nature distinguishing DRESS from simple drug rash. How might this case change your approach to prescribing allopurinol in the future?",
      "final": "Diagnosis: DRESS syndrome, allopurinol-induced. Key learning: (1) DRESS RegiSCAR criteria: hospitalized + suspected drug reaction + \u22653 of: fever >38.5\u00b0C, lymphadenopathy \u22652 sites, atypical lymphocytes, eosinophilia >700 or >10%, skin involvement >50% BSA, \u22651 organ involved. Score 4+ = probable, 5+ = definite. (2) Latency: 2-8 weeks after drug initiation \u2014 makes the causative drug harder to identify. Allopurinol is the #1 cause in the US/Europe; carbamazepine and phenytoin common too. (3) HHV-6 reactivation: occurs in ~60% of DRESS patients \u2014 the reactivated herpesvirus amplifies the immune response. HHV-6 IgM positive is diagnostic support but not required. (4) Steroid tapering: CRITICAL \u2014 steroid must be tapered over 6-8 weeks. Rapid discontinuation causes severe rebound reaction. Many patients need a prolonged taper over 3-6 months. (5) HLA-B*58:01 and allopurinol: Asian populations (Han Chinese, Korean, Thai) have 6-8% prevalence of HLA-B*58:01 \u2014 strongly associated with allopurinol DRESS and SJS/TEN. Pre-prescription HLA typing is recommended in these populations before starting allopurinol (CPIC guideline)."
    }
  },
  "meta": {
    "diagnosis": "DRESS Syndrome \u2014 Allopurinol-Induced, Multiorgan Involvement, Systemic Steroid Required",
    "caseId": "dress-syndrome-v2"
  }
};
