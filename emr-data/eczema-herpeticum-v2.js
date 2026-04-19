/* emr-data/eczema-herpeticum-v2.js — Variation: Eczema Herpeticum */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Noah Williams",
      "patientHPI": "My little boy's skin condition got much worse after my sister visited and gave him kisses on his face. Now he has these awful sores and blisters all over his face and body, and he's running a high fever and seems really sick.",
      "dob": "01/18/2024",
      "age": "2",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-294708",
      "language": "English",
      "race": "Black/African American",
      "phone": "(513) 555-1496",
      "email": "noah.x@email.com",
      "address": "6753 Pine Ave, Detroit, MI 48204",
      "insurance": "Medicaid",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(615) 555-9938",
        "relationship": "Parent"
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
      "Mother: severe eczema"
    ],
    "socialHistory": [
      [
        "Context",
        "2yo with severe eczema kissed by aunt who had active cold sore"
      ],
      [
        "Risk",
        "HSV dissemination into eczematous skin — dermatologic emergency"
      ],
      [
        "Severity",
        "Punched-out erosions across face, neck, trunk — febrile, toxic-appearing"
      ],
      [
        "Comorbidity",
        "Severe underlying AD — SCORAD 58"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "2yo with severe eczema and new punched-out vesicles/erosions — febrile after exposure to adult with cold sore",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema herpeticum — HSV disseminated into eczematous skin",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Febrile — risk of HSV viremia/encephalitis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Dermatologic emergency — requires IV acyclovir",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Severe underlying AD (SCORAD 58)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Source: aunt kissed child with active cold sore",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Acyclovir",
          "dose": "20mg/kg",
          "route": "IV",
          "frequency": "Q8H (do NOT wait for culture — start immediately)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "IV Fluids",
          "dose": "D5NS",
          "route": "IV",
          "frequency": "Maintenance + bolus",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Acetaminophen",
          "dose": "15mg/kg",
          "route": "PO",
          "frequency": "Q4H PRN fever",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "158",
          "rr": "34",
          "temp": "39.4°C",
          "spo2": "97%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-960560",
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
                  "value": "18.2",
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
              "name": "HSV/EH",
              "results": [
                {
                  "test": "HSV PCR (vesicle swab)",
                  "value": "Positive — HSV-1",
                  "unit": "",
                  "range": "",
                  "flag": "H"
                },
                {
                  "test": "Tzanck smear",
                  "value": "Multinucleated giant cells",
                  "unit": "",
                  "range": "",
                  "flag": "H"
                },
                {
                  "test": "ALT",
                  "value": "42",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": ""
                },
                {
                  "test": "CSF (if encephalitis concern)",
                  "value": "Not obtained — no neurologic symptoms",
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
          "cc": "2yo with severe eczema and new punched-out vesicles/erosions — febrile after exposure to adult with cold sore",
          "hpi": "2M with severe AD (SCORAD 58) brought with new punched-out vesicles and erosions across face, neck, and trunk. Febrile to 39.4°C. Looks toxic. 3 days ago aunt visited and kissed child on face — aunt had active cold sore (HSV-1). HSV disseminated into eczematous skin = eczema herpeticum. This is a DERMATOLOGIC EMERGENCY — can progress to HSV viremia, encephalitis, and death if not treated immediately with IV acyclovir. Do NOT wait for HSV PCR — Tzanck smear shows multinucleated giant cells, start acyclovir NOW. Also: this is NOT impetigo (the most common misdiagnosis).",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for IV acyclovir — eczema herpeticum, monitoring for dissemination",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema herpeticum — on IV acyclovir",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Monitoring for HSV encephalitis (fever, lethargy — but no seizures or focal neuro signs)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Severe AD — will address after EH resolves",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Source control counseling — adults with cold sores must NOT kiss children with eczema",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Eye exam — HSV keratitis screening (face involved)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Acyclovir",
          "dose": "20mg/kg",
          "route": "IV",
          "frequency": "Q8H x7-10 days (until all lesions crusted)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Ophthalmology consult",
          "dose": "",
          "route": "",
          "frequency": "HSV keratitis screening — periocular lesions present",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "138",
          "rr": "28",
          "temp": "38.2°C",
          "spo2": "98%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-335802",
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
          "cc": "Admitted for IV acyclovir — eczema herpeticum, monitoring for dissemination",
          "hpi": "2M day 3 on IV acyclovir — defervesced, lesions crusting, no new vesicles. Ophthalmology: no corneal involvement (fortunately — periocular HSV in EH can cause keratitis and permanent visual loss). Source control discussion with family: adults with active cold sores must NEVER kiss, share utensils, or have close facial contact with children who have eczema. HSV is harmless on normal skin but devastating on eczematous skin.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — underlying AD management, prevent future EH, HSV suppression consideration",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema herpeticum — resolving on IV acyclovir",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Severe underlying AD must be controlled — the best prevention of EH recurrence is eczema control",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Consider HSV suppression (valacyclovir) if AD remains severe",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Dupixent eligible at age 6 if AD uncontrolled",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Family education — cold sore precautions",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Valacyclovir",
          "dose": "20mg/kg",
          "route": "PO",
          "frequency": "BID (HSV suppression while AD is severe)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Triamcinolone 0.1%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID body",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Vanicream",
          "dose": "",
          "route": "Topical",
          "frequency": "After every bath",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "118",
          "rr": "24",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-242578",
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
          "cc": "A/I consult — underlying AD management, prevent future EH, HSV suppression consideration",
          "hpi": "A/I: 2M with EH on severe AD background. EH prevention strategy: (1) Control AD aggressively — severe eczema = higher EH risk, (2) HSV suppression with daily valacyclovir until AD improves to moderate or less, (3) Family cold sore precautions, (4) Eye protection protocol if future episodes, (5) Plan for Dupixent at age 6 if AD remains severe. Topical steroid regimen simplified for parents.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — EH resolved, AD management, HSV suppression",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EH — fully resolved, no scarring",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "AD — improving on simplified regimen (SCORAD 58→35)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "HSV suppression ongoing — no recurrence",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Family compliant with cold sore precautions",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Growth — normal despite illness",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Valacyclovir",
          "dose": "20mg/kg",
          "route": "PO",
          "frequency": "BID (continuing)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Triamcinolone 0.1%",
          "dose": "",
          "route": "Topical",
          "frequency": "Weekends only (proactive)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Vanicream",
          "dose": "",
          "route": "Topical",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "108",
          "rr": "22",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-301030",
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
          "cc": "Follow-up — EH resolved, AD management, HSV suppression",
          "hpi": "2M 6 weeks post-EH. Skin healed without scarring. AD improving on simplified regimen. No HSV recurrence on suppression. Family practicing cold sore precautions (grandmother also gets cold sores — educated). Plan: continue valacyclovir until AD SCORAD <25, then trial off.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Noah Williams",
    "dob": "01/18/2024",
    "age": "2",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-294708",
    "language": "English",
    "race": "Black/African American",
    "phone": "(502) 555-5949",
    "email": "noah.x@email.com",
    "address": "7302 N Kedzie Blvd, Indianapolis, IN 46208",
    "insurance": "Medicaid",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(615) 555-5012",
      "relationship": "Parent"
    },
    "chiefComplaint": "Worsening rash",
    "diagnosis": "Eczema Herpeticum"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Eczema herpeticum — HSV disseminated into eczematous skin",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Febrile — risk of HSV viremia/encephalitis",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Dermatologic emergency — requires IV acyclovir",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Severe underlying AD (SCORAD 58)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Source: aunt kissed child with active cold sore",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Acyclovir",
      "dose": "20mg/kg",
      "route": "IV",
      "frequency": "Q8H (do NOT wait for culture — start immediately)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "IV Fluids",
      "dose": "D5NS",
      "route": "IV",
      "frequency": "Maintenance + bolus",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Acetaminophen",
      "dose": "15mg/kg",
      "route": "PO",
      "frequency": "Q4H PRN fever",
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
      "bp": "N/A",
      "hr": "158",
      "rr": "34",
      "temp": "39.4°C",
      "spo2": "97%",
      "pain": "N/A/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "2yo with severe eczema and new punched-out vesicles/erosions — febrile after exposure to adult with cold sore",
      "hpi": "2M with severe AD (SCORAD 58) brought with new punched-out vesicles and erosions across face, neck, and trunk. Febrile to 39.4°C. Looks toxic. 3 days ago aunt visited and kissed child on face — aunt had active cold sore (HSV-1). HSV disseminated into eczematous skin = eczema herpeticum. This is a DERMATOLOGIC EMERGENCY — can progress to HSV viremia, encephalitis, and death if not treated immediately with IV acyclovir. Do NOT wait for HSV PCR — Tzanck smear shows multinucleated giant cells, start acyclovir NOW. Also: this is NOT impetigo (the most common misdiagnosis).",
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
      "accession": "LAB-960560",
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
              "value": "18.2",
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
          "name": "HSV/EH",
          "results": [
            {
              "test": "HSV PCR (vesicle swab)",
              "value": "Positive — HSV-1",
              "unit": "",
              "range": "",
              "flag": "H"
            },
            {
              "test": "Tzanck smear",
              "value": "Multinucleated giant cells",
              "unit": "",
              "range": "",
              "flag": "H"
            },
            {
              "test": "ALT",
              "value": "42",
              "unit": "U/L",
              "range": "7-56",
              "flag": ""
            },
            {
              "test": "CSF (if encephalitis concern)",
              "value": "Not obtained — no neurologic symptoms",
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
    "Mother: severe eczema"
  ],
  "socialHistory": [
    [
      "Context",
      "2yo with severe eczema kissed by aunt who had active cold sore"
    ],
    [
      "Risk",
      "HSV dissemination into eczematous skin — dermatologic emergency"
    ],
    [
      "Severity",
      "Punched-out erosions across face, neck, trunk — febrile, toxic-appearing"
    ],
    [
      "Comorbidity",
      "Severe underlying AD — SCORAD 58"
    ]
  ],
  "references": [
    {
      "id": "AAD-AD-2023",
      "title": "AAD guidelines for management of atopic dermatitis with topical therapies",
      "authors": "Sidbury R, Alikhan A, Bercovitch L, et al.",
      "journal": "J Am Acad Dermatol",
      "year": 2023,
      "doi": "10.1016/j.jaad.2022.12.029",
      "url": "https://www.jaad.org/article/S0190-9622(22)03243-4/fulltext",
      "openAccess": true,
      "validates": [
        "SCORAD scoring",
        "TCS potency ladder",
        "Wet wrap therapy",
        "Simplified regimens",
        "Eczema herpeticum as emergency"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Noah Williams is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
      "When did your symptoms start and how?",
      "Describe the main symptom — location, character, severity.",
      "What makes it worse? What makes it better?",
      "Any other symptoms you've noticed?",
      "Any prior similar episodes?",
      "Tell me about your medical history.",
      "What medications are you currently taking?",
      "Any medication allergies?",
      "Relevant family history?",
      "Tell me about your lifestyle."
    ],
    "patientResponses": {
      "default": "He pauses. 'Can you clarify what you mean?'",
      "onset": "'Gradually — over the past several days.'",
      "character": "'The symptom has been significant and affecting my ability to function.'",
      "location": "'The main problem is in the expected area for my condition.'",
      "severity": "'Six or seven out of ten.'",
      "aggravating": "'Activity and movement worsen it.'",
      "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
      "associated": "'Some associated symptoms consistent with this condition.'",
      "denies": "'No fever, chills, or unexplained weight loss.'",
      "history": "'I have not had exactly this before.'",
      "medications": "'I take Acyclovir; IV Fluids; Acetaminophen.'",
      "allergies": "'My allergies: NKDA.'",
      "family": "Mother: severe eczema",
      "social": "Context: 2yo with severe eczema kissed by aunt who had active cold sore  Risk: HSV dissemination into eczematous skin — dermatologic emergency  Severity: Punched-out erosions across face, neck, trunk — febrile, toxic-appearing  Comorbidity: Severe underlying AD — SCORAD 58"
    },
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
      "phase2": "Before interviewing Noah Williams: what does the chart suggest? Top 3 diagnoses?",
      "phase5": "After history and exam: how has your differential changed?",
      "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
  }
};
