/* emr-data/urticarial-vasculitis-v2.js — Variation: Urticarial Vasculitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Margaret Thornton",
      "patientHPI": "For the past four months, I keep getting these raised, itchy bumps all over my skin that burn and sting. They come and go, but lately I've also been running fevers and my joints ache all over, especially my hands and knees.",
      "dob": "11/19/1974",
      "age": "52",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-630053",
      "language": "English",
      "race": "White",
      "phone": "(617) 555-3196",
      "email": "margaret.x@email.com",
      "address": "7469 Walnut Dr, San Antonio, TX 78204",
      "insurance": "Cigna PPO",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(505) 555-4978",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Key distinction",
        "Wheals last >24 hours and leave bruising \u2014 NOT regular urticaria"
      ],
      [
        "Workup",
        "Low complement (hypocomplementemic UV) \u2014 screen for SLE"
      ],
      [
        "Biopsy",
        "Skin biopsy shows leukocytoclastic vasculitis \u2014 confirms UV, not CSU"
      ],
      [
        "Comorbidity",
        "Arthralgia, fatigue \u2014 systemic features"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "52yo with painful \"hives\" that last >24 hours and leave bruises \u2014 not responding to antihistamines",
        "diagnosis": "Urticarial Vasculitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Urticarial vasculitis \u2014 wheals >24h duration with residual purpura",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "NOT chronic urticaria \u2014 lesions are painful (not itchy), leave bruising, last >24h",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Hypocomplementemic \u2014 low C3 and C4 (screen for SLE)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Arthralgias and fatigue \u2014 systemic vasculitis features",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Antihistamines ineffective (not histamine-mediated)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisone",
          "dose": "40mg",
          "route": "PO",
          "frequency": "Daily (anti-inflammatory for vasculitis)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "BID (UV-specific therapy)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "132/82",
          "hr": "82",
          "rr": "14",
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
          "accession": "LAB-721478",
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
              "name": "VASCULITIS PANEL",
              "results": [
                {
                  "test": "C3",
                  "value": "48",
                  "unit": "mg/dL",
                  "range": "90-180",
                  "flag": "L"
                },
                {
                  "test": "C4",
                  "value": "8",
                  "unit": "mg/dL",
                  "range": "16-47",
                  "flag": "L"
                },
                {
                  "test": "ESR",
                  "value": "52",
                  "unit": "mm/hr",
                  "range": "0-20",
                  "flag": "H"
                },
                {
                  "test": "CRP",
                  "value": "4.2",
                  "unit": "mg/dL",
                  "range": "<0.5",
                  "flag": "H"
                },
                {
                  "test": "ANA",
                  "value": "1:320 speckled",
                  "unit": "",
                  "range": "<1:40",
                  "flag": "H"
                },
                {
                  "test": "Anti-dsDNA",
                  "value": "Negative",
                  "unit": "",
                  "range": "",
                  "flag": ""
                },
                {
                  "test": "Hepatitis B/C",
                  "value": "Negative",
                  "unit": "",
                  "range": "",
                  "flag": ""
                },
                {
                  "test": "Skin biopsy",
                  "value": "Leukocytoclastic vasculitis with perivascular neutrophilic infiltrate and fibrinoid necrosis",
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
          "cc": "52yo with painful \"hives\" that last >24 hours and leave bruises \u2014 not responding to antihistamines",
          "hpi": "52F referred after 4 months of \"hives\" not responding to cetirizine, fexofenadine, or omalizumab. KEY CLUES these aren't regular urticaria: (1) Each wheal lasts >24 HOURS (regular urticaria wheals last <24h), (2) Wheals are PAINFUL, not itchy, (3) Resolve with BRUISING/purpura (regular urticaria clears without residual marks), (4) Associated arthralgias and fatigue. Skin biopsy: leukocytoclastic vasculitis \u2014 this is URTICARIAL VASCULITIS, not urticaria. Low complement makes this hypocomplementemic UV \u2014 must screen for SLE (ANA positive at 1:320, anti-dsDNA negative \u2014 lupus-like but not meeting full criteria yet). Treatment is anti-inflammatory (colchicine, dapsone, hydroxychloroquine), NOT antihistamines.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for renal workup after proteinuria found",
        "diagnosis": "Urticarial Vasculitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UV with possible GN \u2014 renal biopsy considered",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisone",
          "dose": "40mg",
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
          "bp": "138/86",
          "hr": "82",
          "rr": "14",
          "temp": "36.8\u00b0C",
          "spo2": "99%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-413998",
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
          "cc": "Admitted for renal workup after proteinuria found",
          "hpi": "52F found to have new proteinuria \u2014 admitted for 24h urine and possible renal biopsy to evaluate for UV-associated glomerulonephritis.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I + Rheumatology joint consult \u2014 hypocomplementemic UV, SLE screening, treatment",
        "diagnosis": "Urticarial Vasculitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Hypocomplementemic UV \u2014 confirmed by biopsy + low C3/C4",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "SLE screening \u2014 ANA positive but anti-dsDNA negative (undifferentiated CTD vs lupus-like)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Treatment: colchicine + hydroxychloroquine (not antihistamines)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Monitoring: complement levels, renal function (UV can cause GN), lupus serologies",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Hydroxychloroquine",
          "dose": "200mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Prednisone taper",
          "dose": "40mg\u219220\u219210\u21925\u21920",
          "route": "PO",
          "frequency": "Over 6 weeks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "126/78",
          "hr": "76",
          "rr": "14",
          "temp": "36.8\u00b0C",
          "spo2": "99%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-934764",
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
          "cc": "A/I + Rheumatology joint consult \u2014 hypocomplementemic UV, SLE screening, treatment",
          "hpi": "Joint A/I-Rheumatology consult: 52F with hypocomplementemic UV. This is a small vessel vasculitis that mimics urticaria \u2014 critical distinction because treatment is completely different. Started colchicine + hydroxychloroquine (disease-modifying). SLE workup: ANA+, dsDNA-, complement low \u2014 classifying as undifferentiated connective tissue disease with UV. Monitoring: renal function Q3 months (UV-HUV can cause GN), annual eye exam on HCQ, complement levels, lupus serologies to watch for evolution to SLE.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "UV follow-up \u2014 3 months on colchicine + HCQ, lesion frequency, complement levels",
        "diagnosis": "Urticarial Vasculitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UV \u2014 significantly improved on colchicine + HCQ",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Lesions reduced from daily to 1-2/week, less painful",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Complement improving (C3 48\u219272, C4 8\u219214 \u2014 trending up)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "No renal involvement \u2014 Cr stable, UA normal",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "ANA stable \u2014 monitoring for SLE evolution",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Hydroxychloroquine",
          "dose": "200mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
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
          "accession": "LAB-335364",
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
          "cc": "UV follow-up \u2014 3 months on colchicine + HCQ, lesion frequency, complement levels",
          "hpi": "52F 3 months on colchicine + HCQ. UV lesions dramatically reduced. Complement trending up. Arthralgias resolved. Eye exam baseline done \u2014 normal. Will continue monitoring for SLE evolution. This case teaches: if \"urticaria\" doesn't respond to antihistamines, lasts >24 hours, or leaves bruising \u2014 biopsy to rule out UV.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Margaret Thornton",
    "dob": "11/19/1974",
    "age": "52",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-630053",
    "language": "English",
    "race": "White",
    "phone": "(415) 555-4331",
    "email": "margaret.x@email.com",
    "address": "944 Cedar Blvd, Memphis, TN 38107",
    "insurance": "Cigna PPO",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(503) 555-2295",
      "relationship": "Spouse"
    },
    "chiefComplaint": "52yo with painful \"hives\" that last >24 hours and leave bruises \u2014 not responding to antihistamines",
    "diagnosis": "Urticarial Vasculitis"
  },
  "problems": [
    {
      "problem": "Hypocomplementemic urticarial vasculitis syndrome (HUVS)",
      "icd": "L95.1",
      "onset": "2023",
      "status": "Active",
      "notes": "Anti-C1q IgG antibodies positive; C3 and C4 low; urticarial vasculitis with pulmonary and joint involvement"
    },
    {
      "problem": "HUVS-associated obstructive lung disease",
      "icd": "J43.9",
      "onset": "2023",
      "status": "Active",
      "notes": "FEV1/FVC 0.62; air trapping on PFTs; emphysematous changes on CT \u2014 HUVS pulmonary manifestation, not smoking-related"
    },
    {
      "problem": "Arthritis \u2014 migratory, non-erosive",
      "icd": "M13.10",
      "onset": "2023",
      "status": "Active",
      "notes": "Migratory polyarthritis affecting wrists, knees, ankles; occurs during urticarial flares; distinct from RA"
    }
  ],
  "medications": [
    {
      "name": "Hydroxychloroquine 400mg daily (200mg BID)",
      "sig": "Take 200mg twice daily; annual ophthalmic screening for retinal toxicity",
      "prescriber": "Dr. Rodriguez",
      "start": "2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Dapsone 100mg daily",
      "sig": "Take 1 tablet by mouth daily; check G6PD before starting \u2014 hemolysis if G6PD-deficient",
      "prescriber": "Dr. Rodriguez",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Prednisone 30mg daily (taper over 8 weeks)",
      "sig": "Take 1 tablet daily; taper per schedule; add calcium/vitamin D and PPI",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 flare treatment"
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
      "bp": "132/82",
      "hr": "82",
      "rr": "14",
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
      "cc": "52yo with painful \"hives\" that last >24 hours and leave bruises \u2014 not responding to antihistamines",
      "hpi": "52F referred after 4 months of \"hives\" not responding to cetirizine, fexofenadine, or omalizumab. KEY CLUES these aren't regular urticaria: (1) Each wheal lasts >24 HOURS (regular urticaria wheals last <24h), (2) Wheals are PAINFUL, not itchy, (3) Resolve with BRUISING/purpura (regular urticaria clears without residual marks), (4) Associated arthralgias and fatigue. Skin biopsy: leukocytoclastic vasculitis \u2014 this is URTICARIAL VASCULITIS, not urticaria. Low complement makes this hypocomplementemic UV \u2014 must screen for SLE (ANA positive at 1:320, anti-dsDNA negative \u2014 lupus-like but not meeting full criteria yet). Treatment is anti-inflammatory (colchicine, dapsone, hydroxychloroquine), NOT antihistamines.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/12/2024",
      "panel": "HUVS Monitoring Panel",
      "results": [
        {
          "test": "C3",
          "value": "52",
          "unit": "mg/dL",
          "ref": "90-180",
          "flag": "L"
        },
        {
          "test": "C4",
          "value": "6",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": "L"
        },
        {
          "test": "CH50",
          "value": "12",
          "unit": "units/mL",
          "ref": "31-60",
          "flag": "L"
        },
        {
          "test": "Anti-C1q antibodies (IgG)",
          "value": "Positive, 142 units",
          "unit": "",
          "ref": "<20 units",
          "flag": "H"
        },
        {
          "test": "ANA",
          "value": "1:160, homogeneous",
          "unit": "",
          "ref": "<1:40",
          "flag": "H"
        },
        {
          "test": "Anti-dsDNA",
          "value": "Borderline, 12 IU/mL",
          "unit": "",
          "ref": "<7",
          "flag": "H"
        },
        {
          "test": "G6PD activity",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "FEV1/FVC (spirometry)",
          "value": "0.62",
          "unit": "",
          "ref": ">0.70",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/08/2024",
      "study": "CT Chest (HRCT)",
      "indication": "Progressive dyspnea, urticarial vasculitis \u2014 evaluate for HUVS pulmonary disease",
      "findings": "Bilateral upper and lower lobe emphysema with air trapping. No ground glass opacities. No pulmonary fibrosis. Small bilateral pleural effusions. No hilar adenopathy.",
      "impression": "Emphysematous changes with air trapping consistent with HUVS-associated obstructive lung disease. Pattern distinct from tobacco-related emphysema \u2014 predominantly panlobular in distribution. Corroborates diagnosis of HUVS with pulmonary involvement."
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
      "Key distinction",
      "Wheals last >24 hours and leave bruising \u2014 NOT regular urticaria"
    ],
    [
      "Workup",
      "Low complement (hypocomplementemic UV) \u2014 screen for SLE"
    ],
    [
      "Biopsy",
      "Skin biopsy shows leukocytoclastic vasculitis \u2014 confirms UV, not CSU"
    ],
    [
      "Comorbidity",
      "Arthralgia, fatigue \u2014 systemic features"
    ]
  ],
  "references": [
    {
      "id": "EAACI-Urticaria-2022",
      "title": "EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
      "authors": "Zuberbier T, Abdul Latiff AH, et al.",
      "journal": "Allergy",
      "year": 2022,
      "doi": "10.1111/all.15090",
      "url": "https://onlinelibrary.wiley.com/doi/10.1111/all.15090",
      "openAccess": true,
      "validates": [
        "Wheals <24h = urticaria; >24h with bruising = biopsy for UV",
        "UAS7 scoring",
        "Step-up: sgAH \u2192 updose 4x \u2192 omalizumab \u2192 cyclosporine",
        "Post-viral urticaria in children: no allergy testing needed"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Margaret appears frustrated and concerned, having dealt with painful lesions for months without relief. She is articulate and forthcoming about symptoms but visibly tired from the chronic discomfort and systemic symptoms. She emphasizes that these aren't typical 'hives' and expresses relief that someone is finally taking her seriously.",
    "interviewQuestions": [
      "How long do individual lesions last before they completely disappear?",
      "Do the lesions leave any marks or discoloration when they heal?",
      "Are the lesions more painful or itchy?",
      "Have you noticed any joint pain or stiffness?",
      "Do you experience unusual fatigue or feeling unwell overall?",
      "What treatments have you tried and how effective were they?",
      "Have you had any fever, weight loss, or night sweats?",
      "Do you have any muscle aches or weakness?",
      "Have you noticed any changes in your urine color?",
      "Any family history of autoimmune conditions like lupus?",
      "Have you had any recent infections or started new medications?",
      "Do you have any kidney problems or high blood pressure?",
      "Have you noticed any eye irritation or dry mouth?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Can you rephrase that?",
      "onset": "This started about 4 months ago. At first I thought they were just hives from something I ate, but they kept coming back and lasting much longer than any hives I'd had before.",
      "character": "These are definitely not like regular hives. They're painful, not itchy, and they feel deeper under the skin. They're raised and red, but they hurt rather than itch.",
      "location": "They appear mostly on my arms and legs, sometimes on my trunk. They seem to come and go in different areas, but each spot lasts for days.",
      "severity": "The pain is about a 6 out of 10 when they're active. What's really frustrating is the fatigue - I'm exhausted all the time, maybe 7 out of 10 for how much it affects my daily activities.",
      "aggravating": "I haven't noticed anything specific that triggers them. They seem to come and go on their own schedule. Standing for long periods makes my joints ache more.",
      "relieving": "Nothing really helps. I've tried Benadryl, Claritin, even got prescribed some stronger antihistamines and that shot, omalizumab, but none of it worked. The prednisone helps a little.",
      "associated": "Yes, I've been having joint pain, especially in my hands and knees. I'm also exhausted all the time, which isn't normal for me. Sometimes I feel like I have a low-grade fever.",
      "denies": "No trouble breathing, no swelling of my face or throat. No abdominal pain or diarrhea. No rash on my face or sun sensitivity that I've noticed.",
      "history": "Never had anything like this before. I've had regular hives once or twice in my life from shellfish, but those went away in hours and were itchy, not painful.",
      "medications": "Prednisone; Colchicine",
      "allergies": "NKDA",
      "family": "No family history of lupus or other autoimmune diseases that I know of. My mother had arthritis but just the regular kind from aging.",
      "social": "I work as an accountant, mostly desk work. I don't smoke, drink maybe a glass of wine on weekends. No recreational drugs. This has really affected my work - I'm too tired to concentrate some days."
    },
    "examManeuvers": [
      "Inspect skin lesions for morphology and distribution",
      "Palpate active lesions for tenderness and consistency",
      "Look for residual hyperpigmentation or purpura at resolved lesion sites",
      "Examine joints for swelling, warmth, or effusion",
      "Check lymph nodes for enlargement",
      "Assess for splenomegaly",
      "Examine mucous membranes and conjunctiva",
      "Check for peripheral edema",
      "Assess muscle strength and tenderness",
      "Look for signs of nephritis (hypertension, edema)"
    ],
    "examFindings": {
      "Inspect skin lesions for morphology and distribution": "Multiple erythematous, edematous plaques on bilateral arms and legs, some with central pallor, measuring 2-4 cm in diameter",
      "Palpate active lesions for tenderness and consistency": "Lesions are tender to palpation with firm, indurated feel, distinct from typical urticarial wheals",
      "Look for residual hyperpigmentation or purpura at resolved lesion sites": "Several areas of residual purpura and hyperpigmentation where previous lesions have resolved, particularly on forearms",
      "Examine joints for swelling, warmth, or effusion": "Mild swelling and tenderness of bilateral wrists and MCPs, no obvious effusions",
      "Check lymph nodes for enlargement": "No significant lymphadenopathy palpated",
      "Assess for splenomegaly": "No splenomegaly appreciated on examination",
      "Examine mucous membranes and conjunctiva": "Mucous membranes appear normal, no oral ulcers, mild conjunctival pallor",
      "Check for peripheral edema": "Trace bilateral lower extremity edema",
      "Assess muscle strength and tenderness": "Normal muscle strength, mild diffuse muscle tenderness",
      "Look for signs of nephritis (hypertension, edema)": "Blood pressure 132/82, trace edema noted, no obvious signs of significant nephritis"
    },
    "ddxTargets": [
      "Hypocomplementemic urticarial vasculitis syndrome (HUVS) \u2014 anti-C1q positive, systemic (correct)",
      "Normocomplementemic UV \u2014 complement levels are NORMAL; anti-C1q negative; less severe",
      "SLE with vasculitis \u2014 ANA/dsDNA positive here but insufficient SLE criteria; HUVS can evolve to or overlap with SLE",
      "COPD \u2014 emphysema on CT but non-smoker; HUVS lung disease is distinct from tobacco-related",
      "Cryoglobulinemia \u2014 hypocomplementemia + vasculitis; cryoglobulins positive; hepatitis C association",
      "Goodpasture syndrome \u2014 anti-GBM antibodies; pulmonary hemorrhage; glomerulonephritis predominant"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'hives' and missing the key distinguishing features of urticarial vasculitis - duration >24 hours, pain vs itch, and residual purpura",
      "prematureClosure": "May stop at chronic urticaria without exploring the systemic symptoms, joint pain, and atypical features that suggest vasculitis",
      "availabilityBias": "Common urticaria is much more frequently seen than urticarial vasculitis, leading to potential misdiagnosis of this rare condition"
    },
    "coachPrompts": {
      "phase2": "This patient describes 'hives' that aren't responding to standard treatments. What specific historical features would help you distinguish between common chronic urticaria and other urticarial disorders? Think about the timeline and characteristics that might suggest a different pathophysiology.",
      "phase5": "You've identified some key features that distinguish this from typical chronic urticaria. The painful lesions lasting >24 hours with residual purpura, plus systemic symptoms, should raise your suspicion. What's the pathophysiology difference between regular urticaria and what this patient likely has?",
      "finalDebrief": "Urticarial vasculitis is often misdiagnosed as chronic urticaria. The key distinguishing features are: lesions lasting >24 hours, pain rather than itch, residual purpura/hyperpigmentation, and systemic symptoms. Hypocomplementemic UV requires screening for SLE. This case highlights how atypical presentations of common-appearing symptoms require careful attention to subtle but important differences.",
      "final": "Diagnosis: HUVS with pulmonary and joint involvement, anti-C1q IgG positive. Key teaching points: (1) HUVS (McDuffie syndrome) is a severe subset of urticarial vasculitis defined by: low complement (C3, C4), anti-C1q antibodies, and systemic involvement. Distinguish from normocomplementemic UV by complement levels and anti-C1q. (2) HUVS systemic manifestations: obstructive lung disease (panlobular emphysema \u2014 seen in non-smokers), uveitis/episcleritis, glomerulonephritis, Jaccoud arthropathy (non-erosive deformity). Pulmonary disease is the most dangerous. (3) Anti-C1q antibodies are the pathognomonic marker \u2014 they bind C1q in the complement cascade and trigger vascular injury. Also seen in SLE nephritis. (4) HUVS-SLE overlap: up to 50% of HUVS patients have borderline SLE features; monitor for full SLE criteria evolution. (5) Dapsone mechanism: anti-neutrophilic and anti-inflammatory; requires G6PD screening before use (hemolysis in G6PD-deficient patients). Check methemoglobin on follow-up."
    }
  },
  "meta": {
    "diagnosis": "Hypocomplementemic Urticarial Vasculitis Syndrome (HUVS) \u2014 Systemic Involvement (Lung, Joint)"
  }
};
