/* emr-data/eczema-herpeticum.js — Multi-Setting Allergy Case: Eczema Herpeticum */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Noah Sullivan",
      "patientHPI": "My son's skin rash suddenly got much worse with these painful open sores and blisters appearing everywhere, and now he has a fever and seems really unwell.",
      "dob": "11/07/2023",
      "age": "3",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-604181",
      "language": "English",
      "race": "Asian",
      "phone": "(414) 555-3847",
      "email": "noah.sullivan@email.com",
      "address": "9829 Cedar Blvd, Kansas City, MO 64111",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Lisa Chang, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Jennifer Sullivan",
        "phone": "(619) 555-2229",
        "relationship": "Parent"
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
      "Mother: eczema"
    ],
    "socialHistory": [
      [
        "Exposure",
        "Daycare classmate had cold sores 5 days ago"
      ],
      [
        "Key finding",
        "Monomorphic punched-out vesicles and erosions superimposed on eczematous skin"
      ],
      [
        "Urgent",
        "Requires IV acyclovir \u2014 can disseminate"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Acute worsening of eczema with punched-out erosions, vesicles, and fever",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Moderate atopic dermatitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recent daycare exposure to child with cold sores",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydrocortisone 2.5% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "142",
          "rr": "28",
          "temp": "39.2\u00b0C",
          "spo2": "98%",
          "pain": "8/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-108525",
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
                  "value": "14.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Hsv Pcr",
                  "value": "Positive (HSV-1)",
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
          "cc": "Acute worsening of eczema with punched-out erosions, vesicles, and fever",
          "hpi": "Noah Sullivan presents with acute worsening of eczema with punched-out erosions, vesicles, and fever.",
          "exam": "See documentation.",
          "assessment": "Eczema Herpeticum",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "3yo admitted for IV acyclovir \u2014 eczema herpeticum with periorbital involvement",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Moderate atopic dermatitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recent daycare exposure to child with cold sores",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydrocortisone 2.5% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Acyclovir",
          "dose": "20mg/kg",
          "route": "IV",
          "frequency": "Q8H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "IV Fluids",
          "dose": "D5 1/2NS",
          "route": "IV",
          "frequency": "Maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "136",
          "rr": "26",
          "temp": "38.8\u00b0C",
          "spo2": "98%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-108525",
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
                  "value": "14.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Hsv Pcr",
                  "value": "Positive (HSV-1)",
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
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "3yo admitted for IV acyclovir \u2014 eczema herpeticum with periorbital involvement",
          "hpi": "Noah Sullivan \u2014 3yo admitted for IV acyclovir \u2014 eczema herpeticum with periorbital involvement",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 eczema herpeticum, optimize AD management to prevent recurrence",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Moderate atopic dermatitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recent daycare exposure to child with cold sores",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydrocortisone 2.5% ointment",
          "dose": "",
          "route": "Topical",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "118",
          "rr": "22",
          "temp": "37.4\u00b0C",
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
          "accession": "LAB-108525",
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
                  "value": "14.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Hsv Pcr",
                  "value": "Positive (HSV-1)",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult \u2014 eczema herpeticum, optimize AD management to prevent recurrence",
          "hpi": "Noah Sullivan \u2014 A/I consult \u2014 eczema herpeticum, optimize AD management to prevent recurrence",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up after eczema herpeticum hospitalization \u2014 eczema control, HSV prevention",
        "diagnosis": "Eczema Herpeticum"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Moderate atopic dermatitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recent daycare exposure to child with cold sores",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Valacyclovir",
          "dose": "Dose per weight",
          "route": "PO",
          "frequency": "BID (suppressive)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "110",
          "rr": "22",
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
          "accession": "LAB-108525",
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
                  "value": "14.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.4",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "248",
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
                  "test": "Creatinine",
                  "value": "0.8",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": ""
                },
                {
                  "test": "Glucose",
                  "value": "92",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Hsv Pcr",
                  "value": "Positive (HSV-1)",
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
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Follow-up after eczema herpeticum hospitalization \u2014 eczema control, HSV prevention",
          "hpi": "Noah Sullivan \u2014 Follow-up after eczema herpeticum hospitalization \u2014 eczema control, HSV prevention",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Noah Sullivan",
    "dob": "11/07/2023",
    "age": "3",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-604181",
    "language": "English",
    "race": "Asian",
    "phone": "(404) 555-1043",
    "email": "noah.sullivan@email.com",
    "address": "4733 N Kedzie Blvd, Memphis, TN 38107",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Jennifer Sullivan",
      "phone": "(513) 555-8381",
      "relationship": "Parent"
    },
    "chiefComplaint": "Worsening rash",
    "diagnosis": "Eczema Herpeticum"
  },
  "problems": [
    {
      "problem": "Eczema herpeticum \u2014 HSV-1 superinfection of atopic dermatitis",
      "icd": "B00.0",
      "onset": "2024",
      "status": "Active",
      "notes": "3yo with AD; acute punched-out vesicles with central crusting; Tzanck smear positive; HSV PCR swab sent"
    },
    {
      "problem": "Atopic dermatitis \u2014 moderate, known",
      "icd": "L20.9",
      "onset": "2022",
      "status": "Active",
      "notes": "On triamcinolone PRN and emollient; baseline EASI 14; topical steroids not the cause but impaired skin barrier enabled HSV entry"
    },
    {
      "problem": "Fever \u2014 38.9\u00b0C",
      "icd": "R50.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Systemic illness \u2014 hospitalization for IV acyclovir given young age and extent of lesions"
    }
  ],
  "medications": [
    {
      "name": "Acyclovir 250mg/m\u00b2 IV q8h (weight-based dosing)",
      "sig": "Administer IV every 8 hours; duration 7-10 days; switch to oral when clinically stable",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 hospitalized"
    },
    {
      "name": "Mupirocin 2% ointment to secondarily infected areas",
      "sig": "Apply thin layer to crusted/infected areas three times daily",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Triamcinolone 0.025% cream \u2014 HOLD during active infection",
      "sig": "HOLD topical steroid during active eczema herpeticum; resume after HSV lesions resolved",
      "prescriber": "Dr. Chen",
      "start": "2022",
      "refills": 0,
      "status": "Held \u2014 resume after infection resolves"
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
      "bp": "N/A",
      "hr": "142",
      "rr": "28",
      "temp": "39.2\u00b0C",
      "spo2": "98%",
      "pain": "8/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Acute worsening of eczema with punched-out erosions, vesicles, and fever",
      "hpi": "Noah Sullivan presents with acute worsening of eczema with punched-out erosions, vesicles, and fever.",
      "exam": "See documentation.",
      "assessment": "Eczema Herpeticum",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/16/2024",
      "panel": "Eczema Herpeticum Workup",
      "results": [
        {
          "test": "HSV PCR \u2014 lesion swab",
          "value": "Positive \u2014 HSV-1",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Tzanck smear",
          "value": "Multinucleated giant cells present",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 WBC",
          "value": "16.4",
          "unit": "K/\u03bcL",
          "ref": "5.0-15.0",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 Neutrophils",
          "value": "72",
          "unit": "%",
          "ref": "25-60",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "48",
          "unit": "mg/L",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "840",
          "unit": "IU/mL",
          "ref": "<50 (pediatric)",
          "flag": "H"
        },
        {
          "test": "HSV-1 IgG",
          "value": "Positive (previous exposure/primary)",
          "unit": "",
          "ref": "",
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
    "Mother: eczema"
  ],
  "socialHistory": [
    [
      "Exposure",
      "Daycare classmate had cold sores 5 days ago"
    ],
    [
      "Key finding",
      "Monomorphic punched-out vesicles and erosions superimposed on eczematous skin"
    ],
    [
      "Urgent",
      "Requires IV acyclovir \u2014 can disseminate"
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
  "teachingPoints": {
    "keyLearning": [
      "Eczema herpeticum (EH) is a potentially life-threatening disseminated HSV infection in patients with AD or other skin barrier defects. Deficient cathelicidin (LL-37) and \u03b2-defensin production in AD skin \u2192 impaired innate antiviral defense \u2192 HSV spreads beyond initial inoculation site.",
      "Clinical recognition: punched-out vesicles/erosions (often umbilicated) clustered in AD-affected areas, fever, systemic illness. Diagnosis: Tzanck smear (multinucleated giant cells), HSV PCR from lesion.",
      "Treatment: systemic acyclovir (IV for severe/disseminated; oral valacyclovir for mild). Must treat promptly \u2014 can progress to encephalitis, keratoconjunctivitis, viremia. Topical steroids: HOLD during acute EH (may worsen spread); resume after EH resolves."
    ],
    "boardPearls": [
      "EH: HSV dissemination in AD skin. Deficient LL-37 (cathelicidin) in AD \u2192 impaired antiviral defense.",
      "Clinical: punched-out umbilicated erosions in eczematous skin + fever + lymphadenopathy.",
      "Diagnosis: Tzanck smear (multinucleated giant cells), HSV PCR (most sensitive), DFA.",
      "Treatment: acyclovir IV for severe. Oral valacyclovir for mild. Duration: 10\u201314 days minimum.",
      "Hold topical steroids during active EH \u2014 resume after resolution.",
      "Recurrent EH: daily suppressive valacyclovir. Assess immune status (HIV, PID).",
      "EH vs impetigo: EH = punched-out umbilicated lesions, fever, systemic. Impetigo = honey-crusted, no systemic illness, no umbilication."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersonsa": "Noah appears uncomfortable and irritable, crying intermittently due to pain and fever. His mother is anxious and forthcoming with information, noting the dramatic change in his usual eczema appearance over the past 2 days.",
    "interviewQuestions": [
      "When did you first notice the rash getting worse?",
      "How does this rash look different from his usual eczema?",
      "Has Noah had any fever with this rash?",
      "Are the lesions painful or itchy?",
      "Has Noah been exposed to anyone with cold sores or similar infections recently?",
      "What treatments have you tried for the worsening rash?",
      "Has Noah ever had cold sores or similar blistering rashes before?",
      "How has Noah been eating and drinking?",
      "Has Noah seemed unusually tired or lethargic?",
      "Are there any other symptoms like eye irritation or mouth sores?",
      "What medications is Noah currently taking?",
      "Does Noah have any known allergies?",
      "Is there any family history of skin conditions or cold sores?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean, can you ask that differently?",
      "onset": "His eczema started getting much worse about 2 days ago. It looked completely different - these painful looking sores appeared on top of his usual dry patches.",
      "character": "These aren't like his normal eczema bumps. They're like little blisters that break open and leave these punched-out sores. They look really angry and painful.",
      "location": "The sores are mainly on his face, neck, and arms where his eczema usually is. They seem to be spreading to new areas too.",
      "severity": "His pain seems like an 8 out of 10 - he's crying more than usual and won't let me touch the areas. His regular eczema never hurt this much.",
      "aggravating": "Any touching or washing makes him scream. The fever seems to make everything worse.",
      "relieving": "Nothing seems to help. Even his usual eczema cream doesn't seem to be working this time.",
      "associated": "He's had a high fever since yesterday, around 102-103\u00b0F. He's been more tired than usual and not eating as well.",
      "denies": "No vomiting, no diarrhea, no trouble breathing. His eyes look okay and I don't see sores in his mouth.",
      "history": "He's had eczema since he was a baby, but it's never looked like this before. Usually it's just dry, red patches that are itchy.",
      "medications": "Hydrocortisone 2.5% ointment",
      "allergies": "NKDA",
      "family": "I have eczema too, and my mother had it. No one in our family gets cold sores though.",
      "social": "He goes to daycare during the week. Actually, there was a child there last week who had cold sores around their mouth."
    },
    "examManeuvers": [
      "Inspect facial skin and perioral area",
      "Examine affected eczematous areas on arms and neck",
      "Assess vesicle and erosion morphology",
      "Examine conjunctivae and oral mucosa",
      "Palpate cervical lymph nodes",
      "Assess overall appearance and toxicity",
      "Examine unaffected skin areas",
      "Check for signs of secondary bacterial infection"
    ],
    "examFindings": {
      "Inspect facial skin and perioral area": "Multiple monomorphic punched-out erosions and vesicles on cheeks and chin, superimposed on erythematous eczematous plaques",
      "Examine affected eczematous areas on arms and neck": "Numerous small vesicles and shallow erosions with hemorrhagic crusts overlying chronic eczematous changes",
      "Assess vesicle and erosion morphology": "Uniform punched-out appearance of erosions, vesicles are small and clustered, distinct from typical eczematous lesions",
      "Examine conjunctivae and oral mucosa": "Conjunctivae clear, no oral lesions visible",
      "Palpate cervical lymph nodes": "Bilateral tender cervical lymphadenopathy",
      "Assess overall appearance and toxicity": "Child appears ill, irritable, and febrile but not toxic",
      "Examine unaffected skin areas": "Normal skin appears healthy without lesions",
      "Check for signs of secondary bacterial infection": "No purulent drainage or cellulitis, lesions appear viral in nature"
    },
    "ddxTargets": [
      "Eczema herpeticum \u2014 HSV-1 superinfection of atopic dermatitis (correct)",
      "Impetigo \u2014 bacterial superinfection; honey-crusted lesions; no punched-out vesicles; Gram stain shows cocci",
      "Varicella (chickenpox) \u2014 generalized distribution; dew-drop lesion morphology; vaccination history negative",
      "Contact dermatitis \u2014 no vesicles with central umbilication; no fever; not in AD distribution",
      "Molluscum contagiosum \u2014 umbilicated papules but dome-shaped, not punched-out; no fever; chronic",
      "Eczema vaccinatum \u2014 smallpox vaccine exposure; now essentially historical; similar morphology"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'eczema flare' given patient's known atopic dermatitis history, missing the superimposed viral infection",
      "prematureClosure": "May stop at impetigo diagnosis without considering viral etiology, especially given the daycare exposure history",
      "availabilityBias": "Common skin infections like impetigo may come to mind more readily than eczema herpeticum in pediatric patients"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given this 3-year-old's known eczema, what specific historical details would help you distinguish between a simple flare versus a superimposed infection? What questions about recent exposures might be particularly important?",
      "phase5": "Excellent history and exam. You've identified the key finding of monomorphic punched-out lesions superimposed on eczematous skin, plus the daycare cold sore exposure. How does this clinical picture help you narrow your differential? What's the urgency level for this diagnosis?",
      "finalDebrief": "This case highlights eczema herpeticum - a dermatologic emergency requiring immediate antiviral therapy. The key was recognizing that the lesion morphology was different from typical eczema, plus the exposure history. How did your thinking evolve from eczema flare to considering viral superinfection? What clinical clues were most important?",
      "final": "Diagnosis: eczema herpeticum (Kaposi varicelliform eruption), HSV-1 superinfection, pediatric AD. Key teaching points: (1) Eczema herpeticum pathognomonic appearance: punched-out, monomorphic, clustered vesicles or erosions with central hemorrhagic crust \u2014 arising in AD-affected skin. Distinct from AD flare: the vesicles are uniform and punched-out, not eczematous plaques. (2) Diagnosis: HSV PCR swab from lesion is gold standard. Tzanck smear (multinucleated giant cells) is rapid bedside test but not specific (also positive in VZV). (3) Treatment: oral acyclovir for mild cases; IV acyclovir for young children, extensive involvement, ocular involvement, or systemic illness. Duration: 7-10 days. (4) HOLD topical steroids and tacrolimus during active infection \u2014 these impair local antiviral immunity and may worsen dissemination. Resume after lesions have fully crusted. (5) Prevention: patients with AD should avoid contact with active HSV lesions (cold sores). Suppressive antiviral therapy (acyclovir or valacyclovir daily) is indicated for recurrent eczema herpeticum."
    }
  },
  "meta": {
    "diagnosis": "Eczema Herpeticum (Kaposi Varicelliform Eruption) \u2014 HSV-1 Superinfection of Atopic Dermatitis; Acyclovir Required"
  }
};
