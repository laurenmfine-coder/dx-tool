/* emr-data/urticarial-vasculitis.js — Multi-Setting Allergy Case: Urticarial Vasculitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Rosemary Baptiste",
      "patientHPI": "I've been dealing with these painful, burning hives that keep appearing on my skin, and I've been running fevers off and on. My joints hurt so much, especially in the morning when I wake up - it's hard to even get out of bed some days.",
      "dob": "07/03/1978",
      "age": "48",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-198371",
      "language": "English",
      "race": "Asian",
      "phone": "(404) 555-5906",
      "email": "rosemary.baptiste@email.com",
      "address": "6241 Dogwood Ln, Phoenix, AZ 85009",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Michael Baptiste",
        "phone": "(212) 555-1753",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Key finding",
        "Individual lesions persist >24h and leave bruise-like marks"
      ],
      [
        "Biopsy",
        "Skin biopsy pending from dermatology"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Painful burning hives with fever and joint pain",
        "diagnosis": "Urticarial Vasculitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SLE (mild)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recurrent urticaria unresponsive to antihistamines",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydroxychloroquine",
          "dose": "200mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "132/82",
          "hr": "92",
          "rr": "18",
          "temp": "38.0\u00b0C",
          "spo2": "98%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-712810",
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
                  "value": "7.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": ""
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
                  "test": "C3",
                  "value": "65",
                  "unit": "mg/dL",
                  "range": "90-180",
                  "flag": "L"
                },
                {
                  "test": "C4",
                  "value": "8",
                  "unit": "mg/dL",
                  "range": "16-38",
                  "flag": "L"
                },
                {
                  "test": "Ana",
                  "value": "1:320",
                  "unit": "titer",
                  "range": "<1:40",
                  "flag": "H"
                },
                {
                  "test": "Esr",
                  "value": "42",
                  "unit": "mm/hr",
                  "range": "0-20",
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
          "cc": "Painful burning hives with fever and joint pain",
          "hpi": "Rosemary Baptiste \u2014 Painful burning hives with fever and joint pain",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for urticarial vasculitis workup \u2014 low complement, skin biopsy planned",
        "diagnosis": "Urticarial Vasculitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SLE (mild)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recurrent urticaria unresponsive to antihistamines",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydroxychloroquine",
          "dose": "200mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Dapsone",
          "dose": "100mg",
          "route": "PO",
          "frequency": "Daily (if refractory)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "128/78",
          "hr": "82",
          "rr": "16",
          "temp": "37.4\u00b0C",
          "spo2": "99%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-712810",
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
                  "value": "7.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": ""
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
                  "test": "C3",
                  "value": "65",
                  "unit": "mg/dL",
                  "range": "90-180",
                  "flag": "L"
                },
                {
                  "test": "C4",
                  "value": "8",
                  "unit": "mg/dL",
                  "range": "16-38",
                  "flag": "L"
                },
                {
                  "test": "Ana",
                  "value": "1:320",
                  "unit": "titer",
                  "range": "<1:40",
                  "flag": "H"
                },
                {
                  "test": "Esr",
                  "value": "42",
                  "unit": "mm/hr",
                  "range": "0-20",
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
          "cc": "Admitted for urticarial vasculitis workup \u2014 low complement, skin biopsy planned",
          "hpi": "Rosemary Baptiste \u2014 Admitted for urticarial vasculitis workup \u2014 low complement, skin biopsy planned",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "Painful, burning hives lasting >24 hours with residual bruising",
        "diagnosis": "Urticarial Vasculitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SLE (mild)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recurrent urticaria unresponsive to antihistamines",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydroxychloroquine",
          "dose": "200mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "128/78",
          "hr": "76",
          "rr": "14",
          "temp": "37.2\u00b0C",
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
          "accession": "LAB-712810",
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
                  "value": "7.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": ""
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
                  "test": "C3",
                  "value": "65",
                  "unit": "mg/dL",
                  "range": "90-180",
                  "flag": "L"
                },
                {
                  "test": "C4",
                  "value": "8",
                  "unit": "mg/dL",
                  "range": "16-38",
                  "flag": "L"
                },
                {
                  "test": "Ana",
                  "value": "1:320",
                  "unit": "titer",
                  "range": "<1:40",
                  "flag": "H"
                },
                {
                  "test": "Esr",
                  "value": "42",
                  "unit": "mm/hr",
                  "range": "0-20",
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
          "provider": "Dr. Allergist (Consultant)",
          "cc": "Painful, burning hives lasting >24 hours with residual bruising",
          "hpi": "Rosemary Baptiste presents with painful, burning hives lasting >24 hours with residual bruising.",
          "exam": "See documentation.",
          "assessment": "Urticarial Vasculitis",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Urticarial vasculitis follow-up \u2014 biopsy results, treatment response",
        "diagnosis": "Urticarial Vasculitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "SLE (mild)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Recurrent urticaria unresponsive to antihistamines",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "72",
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
          "accession": "LAB-712810",
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
                  "value": "7.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": ""
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
                  "test": "C3",
                  "value": "65",
                  "unit": "mg/dL",
                  "range": "90-180",
                  "flag": "L"
                },
                {
                  "test": "C4",
                  "value": "8",
                  "unit": "mg/dL",
                  "range": "16-38",
                  "flag": "L"
                },
                {
                  "test": "Ana",
                  "value": "1:320",
                  "unit": "titer",
                  "range": "<1:40",
                  "flag": "H"
                },
                {
                  "test": "Esr",
                  "value": "42",
                  "unit": "mm/hr",
                  "range": "0-20",
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
          "cc": "Urticarial vasculitis follow-up \u2014 biopsy results, treatment response",
          "hpi": "Rosemary Baptiste \u2014 Urticarial vasculitis follow-up \u2014 biopsy results, treatment response",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Rosemary Baptiste",
    "dob": "07/03/1978",
    "age": "48",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-198371",
    "language": "English",
    "race": "Asian",
    "phone": "(503) 555-1919",
    "email": "rosemary.baptiste@email.com",
    "address": "9373 Hickory Rd, Columbus, OH 43203",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Michael Baptiste",
      "phone": "(502) 555-6873",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Painful, burning hives lasting >24 hours with residual bruising",
    "diagnosis": "Urticarial Vasculitis"
  },
  "problems": [
    {
      "problem": "Urticarial vasculitis \u2014 normocomplementemic",
      "icd": "L95.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Lesions last >24h, painful/burning (not pruritic), resolve with bruising/pigmentation \u2014 classic features; C3/C4 normal = normocomplementemic type"
    },
    {
      "problem": "Arthralgia \u2014 bilateral wrists and knees",
      "icd": "M25.50",
      "onset": "2024",
      "status": "Active",
      "notes": "Occurs during urticarial flares; systemic symptom supporting vasculitis over urticaria"
    },
    {
      "problem": "Low-grade fever during flares",
      "icd": "R50.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Temperature 38.1\u00b0C during lesion flares; systemic involvement requiring evaluation for secondary causes"
    }
  ],
  "medications": [
    {
      "name": "Hydroxychloroquine 200mg BID",
      "sig": "Take 1 tablet by mouth twice daily \u2014 first-line for normocomplementemic UV; ophthalmic monitoring annually",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Colchicine 0.6mg BID",
      "sig": "Take 1 tablet by mouth twice daily; GI side effects common \u2014 take with food",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Prednisone 20mg daily x2 weeks (bridge while awaiting hydroxychloroquine effect)",
      "sig": "Take 1 tablet by mouth daily for 2 weeks, then taper 5mg/week",
      "prescriber": "Dr. Rodriguez",
      "start": "11/2024",
      "refills": 0,
      "status": "Active \u2014 short bridge"
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
      "bp": "128/78",
      "hr": "76",
      "rr": "14",
      "temp": "37.2\u00b0C",
      "spo2": "99%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "Painful, burning hives lasting >24 hours with residual bruising",
      "hpi": "Rosemary Baptiste presents with painful, burning hives lasting >24 hours with residual bruising.",
      "exam": "See documentation.",
      "assessment": "Urticarial Vasculitis",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/01/2024",
      "panel": "Urticarial Vasculitis Workup",
      "results": [
        {
          "test": "C3",
          "value": "112",
          "unit": "mg/dL",
          "ref": "90-180",
          "flag": ""
        },
        {
          "test": "C4",
          "value": "24",
          "unit": "mg/dL",
          "ref": "16-47",
          "flag": ""
        },
        {
          "test": "CH50",
          "value": "52",
          "unit": "units/mL",
          "ref": "31-60",
          "flag": ""
        },
        {
          "test": "ANA",
          "value": "1:80, speckled",
          "unit": "",
          "ref": "<1:40",
          "flag": "H"
        },
        {
          "test": "Anti-dsDNA",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Anti-C1q antibodies",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Serum cryoglobulins",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "ESR",
          "value": "52",
          "unit": "mm/h",
          "ref": "<20",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "18",
          "unit": "mg/L",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 WBC",
          "value": "9.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/05/2024",
      "study": "Skin Biopsy \u2014 Urticarial Lesion (right forearm, 18h lesion)",
      "indication": "Urticaria lasting >24h with systemic symptoms \u2014 biopsy to distinguish urticarial vasculitis from chronic urticaria",
      "findings": "Perivascular neutrophilic infiltrate with nuclear dust (leukocytoclasia). Fibrinoid necrosis of small vessel walls. Endothelial cell swelling. Extravasation of red blood cells into dermis. No frank purpura. Eosinophils absent.",
      "impression": "Leukocytoclastic vasculitis of small vessels \u2014 diagnostic for urticarial vasculitis. C3 deposits absent on DIF (normocomplementemic type confirmed)."
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
      "Key finding",
      "Individual lesions persist >24h and leave bruise-like marks"
    ],
    [
      "Biopsy",
      "Skin biopsy pending from dermatology"
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
  "teachingPoints": {
    "keyLearning": [
      "Urticarial vasculitis (UV) mimics CSU but is a distinct small-vessel vasculitis. Key distinguishing features: wheals lasting >24 hours, residual bruising/hyperpigmentation after resolution, burning > pruritus, elevated ESR/CRP.",
      "Hypocomplementemic urticarial vasculitis syndrome (HUVS): C1q antibodies + low C3/C4 + systemic involvement (nephritis, obstructive lung disease, uveitis, arthritis). Associated with SLE and other CTD.",
      "Skin biopsy is required for diagnosis: leukocytoclastic vasculitis with neutrophilic infiltrate, fibrin deposition in vessel walls, RBC extravasation. This differentiates UV from CSU (which shows mast cell-predominant infiltrate without vasculitis)."
    ],
    "boardPearls": [
      "UV vs CSU: UV wheals last >24h, leave bruising, burn more than itch. CSU wheals <24h, fully resolve, pruritic.",
      "Normcomplementemic UV: usually idiopathic, milder, no systemic involvement. Antihistamines \u00b1 dapsone/colchicine.",
      "Hypocomplementemic UV (HUVS): C1q antibodies, low C3/C4, systemic complications. Associated with SLE, Sj\u00f6gren's. Hydroxychloroquine \u00b1 immunosuppression.",
      "Biopsy: leukocytoclastic vasculitis with fibrinoid necrosis = UV. Mast cell infiltrate = CSU.",
      "Workup: CBC, CMP, ESR/CRP, C3, C4, C1q, ANA, anti-dsDNA, ANCA, hepatitis B/C serology.",
      "Treatment: antihistamines (limited effect). Dapsone, colchicine, hydroxychloroquine for normcomplementemic. Systemic steroids + immunosuppression for HUVS."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Rosemary appears frustrated and somewhat anxious about her persistent skin condition that hasn't responded to usual treatments. She's articulate and forthcoming about her symptoms, expressing particular concern about the painful, burning quality and bruising that's different from her usual hives. Her distress level is moderate, as she's seeking answers for this change in her chronic condition.",
    "interviewQuestions": [
      "When did these current hives first appear and how are they different from your usual ones?",
      "Can you describe the pain and burning sensation in detail?",
      "How long do individual hives typically last before resolving?",
      "Do the hives leave any marks or discoloration when they fade?",
      "Have you noticed any triggers that bring on these episodes?",
      "Are you experiencing any joint pain, muscle aches, or systemic symptoms?",
      "Have you had any recent infections, new medications, or stress?",
      "How well has your cetirizine been controlling your usual urticaria lately?",
      "Have you noticed any fever, weight loss, or fatigue recently?",
      "Do you have any abdominal pain, nausea, or breathing difficulties with the hives?",
      "Has anyone in your family had similar skin conditions or autoimmune diseases?",
      "Are you taking your hydroxychloroquine regularly for your lupus?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "These different hives started about 3 weeks ago. They're much more painful and burning compared to my usual itchy ones, and they seem to last much longer.",
      "character": "These hives burn and ache rather than just itch. They feel deep and painful, almost like a bruise while they're there.",
      "location": "They appear mainly on my arms, legs, and trunk. They don't seem to favor any particular area.",
      "severity": "The pain is about a 6 out of 10 when they're active. It really interferes with my sleep and daily activities because of the burning sensation.",
      "aggravating": "I haven't noticed any specific triggers. Even avoiding my usual triggers doesn't seem to help with these new ones.",
      "relieving": "My usual cetirizine isn't helping at all with these. Even when I take extra doses, the pain and burning continue.",
      "associated": "I've been feeling more tired lately, and I think I've had some low-grade fevers. My joints have been a bit more achy too.",
      "denies": "No trouble breathing, no swelling of my face or throat, no severe abdominal pain or vomiting.",
      "history": "I've had regular hives for years that usually respond well to antihistamines, but these are completely different - more painful and they last so much longer.",
      "medications": "Hydroxychloroquine; Cetirizine",
      "allergies": "NKDA",
      "family": "Nothing significant in my family for skin problems or autoimmune conditions besides my own lupus.",
      "social": "I work as a teacher, don't smoke, have an occasional glass of wine, no drugs. The stress of these new symptoms has been affecting my work."
    },
    "examManeuvers": [
      "Inspect skin lesions for morphology and distribution",
      "Palpate skin lesions for depth and tenderness",
      "Assess for dermographism",
      "Examine for lymphadenopathy",
      "Assess mucous membranes",
      "Palpate abdomen for hepatosplenomegaly",
      "Check for joint swelling or tenderness",
      "Examine for purpura or petechiae",
      "Assess for angioedema",
      "Take temperature and assess for fever"
    ],
    "examFindings": {
      "Inspect skin lesions for morphology and distribution": "Multiple raised, erythematous plaques on arms and trunk, some with central clearing and irregular borders, lasting >24 hours",
      "Palpate skin lesions for depth and tenderness": "Lesions are firm, deep, and tender to palpation with underlying induration",
      "Assess for dermographism": "Negative dermographism",
      "Examine for lymphadenopathy": "No significant lymphadenopathy palpated",
      "Assess mucous membranes": "Oral mucosa appears normal, no lesions",
      "Palpate abdomen for hepatosplenomegaly": "Soft abdomen, no hepatosplenomegaly appreciated",
      "Check for joint swelling or tenderness": "Mild tenderness in metacarpophalangeal joints bilaterally, no obvious swelling",
      "Examine for purpura or petechiae": "Fading brownish discoloration noted at sites of resolved lesions, consistent with post-inflammatory changes",
      "Assess for angioedema": "No facial, lip, or tongue swelling present",
      "Take temperature and assess for fever": "Low-grade fever at 37.2\u00b0C, patient appears mildly ill"
    },
    "ddxTargets": [
      "Normocomplementemic urticarial vasculitis \u2014 idiopathic (correct)",
      "Chronic spontaneous urticaria \u2014 lesions last <24h; no bruising on resolution; histology normal",
      "Hypocomplementemic urticarial vasculitis syndrome (HUVS) \u2014 C3/C4 low; anti-C1q antibodies; lung/kidney involvement",
      "SLE with urticarial vasculitis \u2014 ANA positive but anti-dsDNA negative; insufficient criteria for SLE",
      "IgA vasculitis (Henoch-Schonlein) \u2014 purpura, not urticaria; IgA deposits on DIF; younger age",
      "Drug-induced vasculitis \u2014 review new medications in past 2-3 months"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's known history of recurrent urticaria and assuming this is just a flare of chronic urticaria rather than recognizing the distinct features of urticarial vasculitis",
      "prematureClosure": "May stop investigating after noting urticarial lesions without fully exploring the key differentiating features of duration >24 hours, pain/burning vs itching, and residual bruising",
      "availabilityBias": "Common urticaria is much more frequently encountered than urticarial vasculitis, potentially leading to missed diagnosis of this less common but important condition"
    },
    "coachPrompts": {
      "phase2": "You've identified several possible causes for urticarial lesions. As you gather more history, pay particular attention to the timeline and characteristics that might distinguish between different types of urticaria. What specific features would help you differentiate between common chronic urticaria and other urticarial conditions?",
      "phase5": "Now that you've completed your history and physical exam, consider the constellation of findings: lesions lasting >24 hours, burning pain rather than itching, residual bruising, and poor response to antihistamines in a patient with SLE. How do these features fit together, and what does this suggest about the underlying pathophysiology?",
      "finalDebrief": "This case illustrates the importance of recognizing urticarial vasculitis, which can be easily mistaken for chronic urticaria. The key distinguishing features - individual lesions lasting >24 hours, burning/painful quality, residual bruising, and poor antihistamine response - point to small vessel inflammation rather than simple mast cell degranulation. In patients with SLE, urticarial vasculitis may represent increased disease activity and requires different management approaches.",
      "final": "Diagnosis: normocomplementemic urticarial vasculitis (NUV), idiopathic. Key teaching points: (1) The KEY distinguishing feature of urticarial vasculitis from chronic urticaria: lesions last >24 hours, painful/burning rather than pruritic, resolve leaving ecchymosis or pigmentation. Biopsy is definitive. (2) NUV vs. HUVS: normocomplementemic (C3/C4 normal) has better prognosis; hypocomplementemic (HUVS) has systemic complications \u2014 obstructive lung disease, nephritis, uveitis, Jaccoud arthropathy. Anti-C1q antibodies are the HUVS marker. (3) Secondary causes to exclude: SLE, Sj\u00f6gren's, hepatitis B/C, myeloproliferative disease, drugs (hydralazine, penicillins, cimetidine). ANA 1:80 here \u2014 monitor for lupus evolution. (4) Treatment of NUV: hydroxychloroquine + colchicine is first-line. HUVS: dapsone, immunosuppressants. Avoid prolonged systemic steroids. (5) Biopsy timing: biopsy a lesion that has been present 12-24 hours \u2014 older lesions show healed vasculitis; too-early lesions may show only edema."
    }
  },
  "meta": {
    "diagnosis": "Normocomplementemic Urticarial Vasculitis \u2014 Idiopathic; Skin Biopsy Confirmatory"
  }
};
