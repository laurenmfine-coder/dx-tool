/* emr-data/drug-allergy-vancomycin-rms.js — Multi-Setting Allergy Case: Vancomycin Red Man Syndrome */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Gerald Hagen",
      "dob": "11/09/1961",
      "age": "65",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-786422",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(869) 629-8348",
      "email": "gerald.hagen@email.com",
      "address": "703 Oak St, Weston, FL 33341",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Jennifer Hagen",
        "phone": "(737) 938-3442",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Vancomycin",
        "reaction": "Flushing and pruritus during infusion",
        "severity": "Unknown — needs evaluation",
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
        "Infusion details",
        "1g infused over 30 minutes (too fast) — flushing appeared in upper body"
      ],
      [
        "Key question",
        "Rate-related RMS vs true IgE-mediated allergy?"
      ],
      [
        "Plan consideration",
        "Slower infusion rate, premedication, vs desensitization protocol"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Flushing and pruritus during vancomycin infusion — called code allergy",
        "diagnosis": "Vancomycin Red Man Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia — needs vancomycin",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Developed flushing/rash during first infusion",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H (held after reaction)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Diphenhydramine",
          "dose": "50mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Vancomycin stopped",
          "dose": "",
          "route": "",
          "frequency": "",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "142/84",
          "hr": "96",
          "rr": "18",
          "temp": "38.2°C",
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
          "accession": "LAB-878164",
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
                  "test": "Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "Vancomycin Trough",
                  "value": "12",
                  "unit": "mcg/mL",
                  "range": "15-20",
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
          "cc": "Flushing and pruritus during vancomycin infusion — called code allergy",
          "hpi": "Gerald Hagen — Flushing and pruritus during vancomycin infusion — called code allergy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "MRSA bacteremia — needs vancomycin, had infusion reaction requiring A/I input",
        "diagnosis": "Vancomycin Red Man Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia — needs vancomycin",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Developed flushing/rash during first infusion",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H (held after reaction)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H — infuse over 2 hours with premedication",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "136/82",
          "hr": "86",
          "rr": "16",
          "temp": "38.0°C",
          "spo2": "98%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-878164",
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
                  "test": "Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "Vancomycin Trough",
                  "value": "12",
                  "unit": "mcg/mL",
                  "range": "15-20",
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
          "cc": "MRSA bacteremia — needs vancomycin, had infusion reaction requiring A/I input",
          "hpi": "Gerald Hagen — MRSA bacteremia — needs vancomycin, had infusion reaction requiring A/I input",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "Flushing, pruritus, and rash during vancomycin infusion — consult to differentiate RMS from allergy",
        "diagnosis": "Vancomycin Red Man Syndrome vs True Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia — needs vancomycin",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Developed flushing/rash during first infusion",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H (held after reaction)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "138/82",
          "hr": "88",
          "rr": "16",
          "temp": "38.2°C",
          "spo2": "98%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-878164",
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
                  "test": "Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "Vancomycin Trough",
                  "value": "12",
                  "unit": "mcg/mL",
                  "range": "15-20",
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
          "provider": "Dr. Allergist (Consultant)",
          "cc": "Flushing, pruritus, and rash during vancomycin infusion — consult to differentiate RMS from allergy",
          "hpi": "Gerald Hagen presents with flushing, pruritus, and rash during vancomycin infusion — consult to differentiate rms from allergy.",
          "exam": "See documentation.",
          "assessment": "Vancomycin Red Man Syndrome vs True Allergy",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — vancomycin tolerance established, document RMS vs allergy in chart",
        "diagnosis": "Vancomycin Red Man Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "MRSA bacteremia — needs vancomycin",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Developed flushing/rash during first infusion",
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
          "bp": "128/78",
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
          "accession": "LAB-878164",
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
                  "test": "Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "Vancomycin Trough",
                  "value": "12",
                  "unit": "mcg/mL",
                  "range": "15-20",
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
          "cc": "Follow-up — vancomycin tolerance established, document RMS vs allergy in chart",
          "hpi": "Gerald Hagen — Follow-up — vancomycin tolerance established, document RMS vs allergy in chart",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Gerald Hagen",
    "dob": "11/09/1961",
    "age": "65",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-786422",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(869) 629-8348",
    "email": "gerald.hagen@email.com",
    "address": "703 Oak St, Weston, FL 33341",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Jennifer Hagen",
      "phone": "(737) 938-3442",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Flushing, pruritus, and rash during vancomycin infusion — consult to differentiate RMS from allergy",
    "diagnosis": "Vancomycin Red Man Syndrome vs True Allergy"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "MRSA bacteremia — needs vancomycin",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Developed flushing/rash during first infusion",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Vancomycin",
      "dose": "1g",
      "route": "IV",
      "frequency": "Q12H (held after reaction)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Vancomycin",
      "reaction": "Flushing and pruritus during infusion",
      "severity": "Unknown — needs evaluation",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "138/82",
      "hr": "88",
      "rr": "16",
      "temp": "38.2°C",
      "spo2": "98%",
      "pain": "2/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "Flushing, pruritus, and rash during vancomycin infusion — consult to differentiate RMS from allergy",
      "hpi": "Gerald Hagen presents with flushing, pruritus, and rash during vancomycin infusion — consult to differentiate rms from allergy.",
      "exam": "See documentation.",
      "assessment": "Vancomycin Red Man Syndrome vs True Allergy",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-878164",
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
              "test": "Tryptase",
              "value": "4.8",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": ""
            },
            {
              "test": "Vancomycin Trough",
              "value": "12",
              "unit": "mcg/mL",
              "range": "15-20",
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
      "Infusion details",
      "1g infused over 30 minutes (too fast) — flushing appeared in upper body"
    ],
    [
      "Key question",
      "Rate-related RMS vs true IgE-mediated allergy?"
    ],
    [
      "Plan consideration",
      "Slower infusion rate, premedication, vs desensitization protocol"
    ]
  ]
};
