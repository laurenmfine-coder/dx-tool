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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "HSV dissemination into eczematous skin \u2014 dermatologic emergency"
      ],
      [
        "Severity",
        "Punched-out erosions across face, neck, trunk \u2014 febrile, toxic-appearing"
      ],
      [
        "Comorbidity",
        "Severe underlying AD \u2014 SCORAD 58"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "2yo with severe eczema and new punched-out vesicles/erosions \u2014 febrile after exposure to adult with cold sore",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema herpeticum \u2014 HSV disseminated into eczematous skin",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Febrile \u2014 risk of HSV viremia/encephalitis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Dermatologic emergency \u2014 requires IV acyclovir",
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
          "frequency": "Q8H (do NOT wait for culture \u2014 start immediately)",
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
          "temp": "39.4\u00b0C",
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
                  "value": "Positive \u2014 HSV-1",
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
                  "value": "Not obtained \u2014 no neurologic symptoms",
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
          "cc": "2yo with severe eczema and new punched-out vesicles/erosions \u2014 febrile after exposure to adult with cold sore",
          "hpi": "2M with severe AD (SCORAD 58) brought with new punched-out vesicles and erosions across face, neck, and trunk. Febrile to 39.4\u00b0C. Looks toxic. 3 days ago aunt visited and kissed child on face \u2014 aunt had active cold sore (HSV-1). HSV disseminated into eczematous skin = eczema herpeticum. This is a DERMATOLOGIC EMERGENCY \u2014 can progress to HSV viremia, encephalitis, and death if not treated immediately with IV acyclovir. Do NOT wait for HSV PCR \u2014 Tzanck smear shows multinucleated giant cells, start acyclovir NOW. Also: this is NOT impetigo (the most common misdiagnosis).",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for IV acyclovir \u2014 eczema herpeticum, monitoring for dissemination",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema herpeticum \u2014 on IV acyclovir",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Monitoring for HSV encephalitis (fever, lethargy \u2014 but no seizures or focal neuro signs)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Severe AD \u2014 will address after EH resolves",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Source control counseling \u2014 adults with cold sores must NOT kiss children with eczema",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Eye exam \u2014 HSV keratitis screening (face involved)",
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
          "frequency": "HSV keratitis screening \u2014 periocular lesions present",
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
          "temp": "38.2\u00b0C",
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
          "cc": "Admitted for IV acyclovir \u2014 eczema herpeticum, monitoring for dissemination",
          "hpi": "2M day 3 on IV acyclovir \u2014 defervesced, lesions crusting, no new vesicles. Ophthalmology: no corneal involvement (fortunately \u2014 periocular HSV in EH can cause keratitis and permanent visual loss). Source control discussion with family: adults with active cold sores must NEVER kiss, share utensils, or have close facial contact with children who have eczema. HSV is harmless on normal skin but devastating on eczematous skin.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 underlying AD management, prevent future EH, HSV suppression consideration",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema herpeticum \u2014 resolving on IV acyclovir",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Severe underlying AD must be controlled \u2014 the best prevention of EH recurrence is eczema control",
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
          "description": "Family education \u2014 cold sore precautions",
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
          "temp": "36.8\u00b0C",
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
          "cc": "A/I consult \u2014 underlying AD management, prevent future EH, HSV suppression consideration",
          "hpi": "A/I: 2M with EH on severe AD background. EH prevention strategy: (1) Control AD aggressively \u2014 severe eczema = higher EH risk, (2) HSV suppression with daily valacyclovir until AD improves to moderate or less, (3) Family cold sore precautions, (4) Eye protection protocol if future episodes, (5) Plan for Dupixent at age 6 if AD remains severe. Topical steroid regimen simplified for parents.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up \u2014 EH resolved, AD management, HSV suppression",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EH \u2014 fully resolved, no scarring",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "AD \u2014 improving on simplified regimen (SCORAD 58\u219235)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "HSV suppression ongoing \u2014 no recurrence",
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
          "description": "Growth \u2014 normal despite illness",
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
          "temp": "36.8\u00b0C",
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
          "cc": "Follow-up \u2014 EH resolved, AD management, HSV suppression",
          "hpi": "2M 6 weeks post-EH. Skin healed without scarring. AD improving on simplified regimen. No HSV recurrence on suppression. Family practicing cold sore precautions (grandmother also gets cold sores \u2014 educated). Plan: continue valacyclovir until AD SCORAD <25, then trial off.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
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
      "problem": "Recurrent eczema herpeticum \u2014 second episode HSV-1 in 12 months",
      "icd": "B00.0",
      "onset": "2024",
      "status": "Active",
      "notes": "2yo; first episode 8 months ago; second recurrence \u2014 suppressive acyclovir indicated after second eczema herpeticum episode"
    },
    {
      "problem": "Moderate-severe atopic dermatitis",
      "icd": "L20.9",
      "onset": "2022",
      "status": "Active",
      "notes": "EASI 18; recurrent eczema herpeticum risk related to severity of AD and filaggrin barrier dysfunction"
    },
    {
      "problem": "Filaggrin loss-of-function variant (FLG mutation)",
      "icd": "L20.9",
      "onset": "2022",
      "status": "Active",
      "notes": "Genetic testing confirmed FLG R501X mutation; barrier defect is primary predisposition for both AD and eczema herpeticum"
    }
  ],
  "medications": [
    {
      "name": "Acyclovir oral suspension 20mg/kg/dose q8h x10 days (acute)",
      "sig": "Administer 20mg/kg per dose (max 800mg/dose) by mouth three times daily for 10 days",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 oral for mild recurrence"
    },
    {
      "name": "Acyclovir 400mg BID (suppressive \u2014 starting after acute course)",
      "sig": "Take 1 tablet by mouth twice daily indefinitely for suppression of eczema herpeticum recurrence",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 12,
      "status": "Active \u2014 suppression"
    },
    {
      "name": "Dupilumab 200mg SC q4 weeks (pediatric dosing \u2014 step-up for AD control)",
      "sig": "Administer 200mg subcutaneously every 4 weeks; reduces eczema herpeticum risk by improving AD control",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 5,
      "status": "Active \u2014 initiated for AD control and EH prevention"
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
      "temp": "39.4\u00b0C",
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
      "cc": "2yo with severe eczema and new punched-out vesicles/erosions \u2014 febrile after exposure to adult with cold sore",
      "hpi": "2M with severe AD (SCORAD 58) brought with new punched-out vesicles and erosions across face, neck, and trunk. Febrile to 39.4\u00b0C. Looks toxic. 3 days ago aunt visited and kissed child on face \u2014 aunt had active cold sore (HSV-1). HSV disseminated into eczematous skin = eczema herpeticum. This is a DERMATOLOGIC EMERGENCY \u2014 can progress to HSV viremia, encephalitis, and death if not treated immediately with IV acyclovir. Do NOT wait for HSV PCR \u2014 Tzanck smear shows multinucleated giant cells, start acyclovir NOW. Also: this is NOT impetigo (the most common misdiagnosis).",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "Recurrent EH Workup",
      "results": [
        {
          "test": "HSV PCR \u2014 lesion",
          "value": "Positive \u2014 HSV-1",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "HSV-1 IgG",
          "value": "Positive, 42 units",
          "unit": "",
          "ref": "<8 seronegative",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "1,240",
          "unit": "IU/mL",
          "ref": "<50 (pediatric)",
          "flag": "H"
        },
        {
          "test": "FLG gene sequencing",
          "value": "R501X heterozygous mutation",
          "unit": "",
          "ref": "Wild type",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 WBC",
          "value": "14.2",
          "unit": "K/\u03bcL",
          "ref": "5.0-15.0",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "22",
          "unit": "mg/L",
          "ref": "<5",
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
    "Mother: severe eczema"
  ],
  "socialHistory": [
    [
      "Context",
      "2yo with severe eczema kissed by aunt who had active cold sore"
    ],
    [
      "Risk",
      "HSV dissemination into eczematous skin \u2014 dermatologic emergency"
    ],
    [
      "Severity",
      "Punched-out erosions across face, neck, trunk \u2014 febrile, toxic-appearing"
    ],
    [
      "Comorbidity",
      "Severe underlying AD \u2014 SCORAD 58"
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
    "patientPersona": "The child is irritable, feverish, and crying intermittently due to pain from the widespread skin lesions. The parent/caregiver appears highly distressed and anxious, readily providing information about the child's severe eczema history and recent contact with the aunt who had a cold sore. The child appears toxic and uncomfortable, with visible distress from the painful erosions.",
    "interviewQuestions": [
      "When did you first notice these new skin lesions on your child?",
      "How do these new lesions look different from his usual eczema?",
      "Has anyone with cold sores or fever blisters been in contact with your child recently?",
      "Has your child had a fever, and if so, how high and for how long?",
      "Is your child eating, drinking, and having wet diapers normally?",
      "Has your child seemed more irritable or lethargic than usual?",
      "How severe is your child's underlying eczema normally?",
      "What treatments do you usually use for his eczema?",
      "Has your child ever had anything like this before?",
      "Has your child been around anyone else who was sick recently?",
      "Are the lesions painful when you touch them or during diaper changes?",
      "Have you noticed any changes in your child's behavior or alertness?",
      "Has anyone in your family ever had problems with cold sores or herpes?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean - can you ask that differently? I'm really worried about these sores on his skin.",
      "onset": "I first noticed these different-looking spots about 2 days ago. They started on his face where his aunt kissed him, then spread to his neck and chest really fast.",
      "character": "These look totally different from his usual eczema. They're like little punched-out holes in his skin, some had blisters that broke open. They look really raw and angry.",
      "location": "They started on his cheeks and around his mouth, but now they're all over his face, neck, and spreading down his chest and back.",
      "severity": "He seems to be in a lot of pain - probably 8 out of 10. He's crying more than usual and doesn't want me to touch his face or change his clothes.",
      "aggravating": "Any touching makes him scream. Even gentle washing or trying to apply his usual eczema creams makes it worse.",
      "relieving": "Nothing seems to help. His usual eczema treatments aren't working at all, and even children's Tylenol isn't helping much with his discomfort.",
      "associated": "He's had a high fever for the past day, up to 102-103\u00b0F. He's been more cranky and clingy, not eating as well, but still drinking some.",
      "denies": "No vomiting, no diarrhea, no cough or runny nose. No difficulty breathing. His diapers are still wet but maybe not as much as usual.",
      "history": "His eczema has always been really bad since he was about 6 months old, but we've never seen anything like these sores before. This is completely different.",
      "medications": "Acyclovir; IV Fluids; Acetaminophen",
      "allergies": "NKDA",
      "family": "His mother - that's me - I have really severe eczema too, had it since childhood. My sister gets cold sores pretty frequently.",
      "social": "He's at home with me most of the time. My sister visited 3 days ago and she had an active cold sore on her lip, but she kissed him on the cheek anyway. I didn't think much of it at the time."
    },
    "examManeuvers": [
      "Inspect facial lesions and morphology",
      "Examine neck and trunk for lesion distribution",
      "Assess overall appearance and toxicity",
      "Palpate for lymphadenopathy",
      "Examine oral mucosa and lips",
      "Assess hydration status and skin turgor",
      "Evaluate underlying eczematous changes",
      "Check for conjunctival involvement",
      "Assess neurologic status and alertness",
      "Examine extremities for lesion spread"
    ],
    "examFindings": {
      "Inspect facial lesions and morphology": "Multiple punched-out erosions and vesicles across bilateral cheeks, some with hemorrhagic crusting, distinct from surrounding eczematous skin",
      "Examine neck and trunk for lesion distribution": "Vesicles and erosions extending down neck to upper chest and back, following areas of pre-existing eczematous dermatitis",
      "Assess overall appearance and toxicity": "Toxic-appearing, irritable child with flushed face, appears uncomfortable and in pain",
      "Palpate for lymphadenopathy": "Bilateral tender cervical and submandibular lymphadenopathy",
      "Examine oral mucosa and lips": "Mild erythema of lips, no obvious oral lesions visualized",
      "Assess hydration status and skin turgor": "Mildly decreased skin turgor, dry mucous membranes suggesting mild dehydration",
      "Evaluate underlying eczematous changes": "Extensive underlying atopic dermatitis with lichenification, erythema, and scaling across trunk and extremities",
      "Check for conjunctival involvement": "No periorbital edema or conjunctival lesions noted",
      "Assess neurologic status and alertness": "Alert and responsive, no focal neurologic deficits, appropriate for age when not crying",
      "Examine extremities for lesion spread": "Scattered vesicles beginning to appear on forearms overlying eczematous patches"
    },
    "ddxTargets": [
      "Recurrent eczema herpeticum \u2014 HSV-1, suppressive antiviral indicated (correct)",
      "Bacterial impetigo superinfecting AD \u2014 Gram stain positive; MRSA/MSSA; no HSV PCR positivity",
      "Primary herpetic gingivostomatitis \u2014 oral predominant; different HSV entry point; first primary infection",
      "Varicella recurrence (zoster in child) \u2014 extremely rare at age 2; dermatomal distribution; chicken pox history",
      "Molluscum contagiosum in AD \u2014 common; papules not vesicles; chronic course; no fever",
      "Herpes zoster \u2014 dermatomal; age 2 too young except in immunocompromised"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'eczema flare' given strong history of atopic dermatitis and focus only on dermatologic treatments rather than recognizing the distinct morphology of herpetic lesions",
      "prematureClosure": "Might stop at 'infected eczema' or 'impetigo' without considering the specific history of cold sore contact and the punched-out appearance characteristic of eczema herpeticum",
      "availabilityBias": "Common eczema flares are much more frequently seen than eczema herpeticum, potentially leading to missing this dermatologic emergency that requires immediate antiviral therapy"
    },
    "coachPrompts": {
      "phase2": "You've identified some good differentials for a febrile toddler with skin lesions. Before you interview the family, think about what specific historical details would help you distinguish between infectious causes, inflammatory flares, and viral exanthems. What questions about recent contacts or exposures might be particularly important in this case?",
      "phase5": "Excellent history and physical exam. You've gathered key information about the recent cold sore contact and noted the distinct punched-out morphology of these lesions compared to typical eczema. Given the combination of severe underlying atopic dermatitis, recent HSV exposure, fever, and these characteristic lesions, how does this change your differential? What's the most concerning diagnosis you need to rule out, and what's the urgency level?",
      "finalDebrief": "This case highlights eczema herpeticum - a dermatologic emergency where HSV disseminates into eczematous skin. The key clinical clues were: the distinct punched-out erosions different from typical AD, recent cold sore contact, fever suggesting viremia, and the rapid spread following areas of pre-existing dermatitis. This requires immediate IV acyclovir as it can progress to HSV encephalitis. How did your thinking evolve from initially considering common causes like eczema flare to recognizing this emergency?",
      "final": "Diagnosis: recurrent eczema herpeticum, second episode \u2014 suppressive acyclovir initiated; dupilumab added for AD control. Key teaching points: (1) Recurrent eczema herpeticum (2+ episodes) is an indication for long-term suppressive antiviral therapy (acyclovir 400mg BID in adults; weight-based in children). Reduces recurrence frequency by 70-80%. (2) Filaggrin (FLG) mutations: R501X and 2282del4 are the most common loss-of-function variants in European AD. FLG mutation \u2192 impaired skin barrier \u2192 increased trans-epidermal water loss AND increased pathogen entry. This patient's recurrent EH is partially explained by the FLG defect. (3) Dupilumab in pediatric AD: approved age 6 months+; improves skin barrier function by reducing IL-4/IL-13-driven downregulation of filaggrin. Improved AD control = reduced EH risk. (4) EH can involve eyes (ocular HSV) \u2014 check for keratitis in any eczema herpeticum case with periocular lesions. Ophthalmology referral if ocular involvement suspected. (5) EH mortality: <1% with treatment, but can be fatal in immunocompromised children. Never delay acyclovir when EH is suspected."
    }
  },
  "meta": {
    "diagnosis": "Recurrent Eczema Herpeticum \u2014 HSV-1, Pediatric; Suppressive Antiviral Therapy Initiated"
  }
};
