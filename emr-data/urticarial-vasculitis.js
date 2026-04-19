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
      "pharmacy": "CVS Pharmacy — Main St",
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
          "temp": "38.0°C",
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
                  "unit": "x10³/µL",
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
                  "unit": "x10³/µL",
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
          "hpi": "Rosemary Baptiste — Painful burning hives with fever and joint pain",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for urticarial vasculitis workup — low complement, skin biopsy planned",
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
          "temp": "37.4°C",
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
                  "unit": "x10³/µL",
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
                  "unit": "x10³/µL",
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
          "cc": "Admitted for urticarial vasculitis workup — low complement, skin biopsy planned",
          "hpi": "Rosemary Baptiste — Admitted for urticarial vasculitis workup — low complement, skin biopsy planned",
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
          "temp": "37.2°C",
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
                  "unit": "x10³/µL",
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
                  "unit": "x10³/µL",
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
        "chiefComplaint": "Urticarial vasculitis follow-up — biopsy results, treatment response",
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
          "temp": "36.8°C",
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
                  "unit": "x10³/µL",
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
                  "unit": "x10³/µL",
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
          "cc": "Urticarial vasculitis follow-up — biopsy results, treatment response",
          "hpi": "Rosemary Baptiste — Urticarial vasculitis follow-up — biopsy results, treatment response",
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
    "pharmacy": "CVS Pharmacy — Main St",
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
      "temp": "37.2°C",
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
              "unit": "x10³/µL",
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
              "unit": "x10³/µL",
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
,"references":[
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
      "Step-up: sgAH → updose 4x → omalizumab → cyclosporine",
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
      "Normcomplementemic UV: usually idiopathic, milder, no systemic involvement. Antihistamines ± dapsone/colchicine.",
      "Hypocomplementemic UV (HUVS): C1q antibodies, low C3/C4, systemic complications. Associated with SLE, Sjögren's. Hydroxychloroquine ± immunosuppression.",
      "Biopsy: leukocytoclastic vasculitis with fibrinoid necrosis = UV. Mast cell infiltrate = CSU.",
      "Workup: CBC, CMP, ESR/CRP, C3, C4, C1q, ANA, anti-dsDNA, ANCA, hepatitis B/C serology.",
      "Treatment: antihistamines (limited effect). Dapsone, colchicine, hydroxychloroquine for normcomplementemic. Systemic steroids + immunosuppression for HUVS."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Rosemary Baptiste appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did painful, burning hives lasting >24 hours with residual bruising start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started Rosemary Baptiste presents with painful, burning hives lasting >24 hours with re.'",
        "character": "'It's painful, burning hives lasting >24 hours with residual bruising \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Hydroxychloroquine; Cetirizine.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Non-contributory",
        "social": "Key finding: Individual lesions persist >24h and leave bruise-like marks  Biopsy: Skin biopsy pending from dermatology"
    },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Rosemary Baptiste's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};