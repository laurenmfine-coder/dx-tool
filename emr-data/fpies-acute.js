/* emr-data/fpies-acute.js — Multi-Setting Allergy Case: FPIES — Acute */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Amara Williams",
      "dob": "06/09/2026",
      "age": "0",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-174434",
      "language": "English",
      "race": "Multiracial",
      "phone": "(484) 706-9939",
      "email": "amara.williams@email.com",
      "address": "5279 Oak St, Weston, FL 33368",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "Publix Pharmacy — Weston Rd",
      "emergencyContact": {
        "name": "Thomas Williams",
        "phone": "(884) 435-4346",
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
      "Older sibling: milk FPIES (resolved)"
    ],
    "socialHistory": [
      [
        "Trigger",
        "First introduction of rice cereal — repetitive vomiting began ~2h later"
      ],
      [
        "Feeding history",
        "Exclusively breastfed until today"
      ],
      [
        "Key feature",
        "No urticaria, no respiratory symptoms — GI-isolated"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
        "diagnosis": "FPIES — Acute Episode"
      },
      "problems": [],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "168",
          "rr": "42",
          "temp": "36.2°C",
          "spo2": "97%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-558562",
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
                  "value": "18.4",
                  "unit": "x10³/µL",
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
                  "value": "520",
                  "unit": "x10³/µL",
                  "range": "150-400",
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
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "16",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Methemoglobin",
                  "value": "2.8",
                  "unit": "%",
                  "range": "<1.5",
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
          "cc": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
          "hpi": "Amara Williams presents with 4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy.",
          "exam": "See documentation.",
          "assessment": "FPIES — Acute Episode",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "4mo admitted after FPIES episode — IV fluids, monitoring for recurrence",
        "diagnosis": "FPIES — Acute"
      },
      "problems": [],
      "medications": [
        {
          "id": "med-add-1",
          "name": "IV Fluids",
          "dose": "D5 1/2NS",
          "route": "IV",
          "frequency": "Maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Ondansetron",
          "dose": "0.15mg/kg",
          "route": "IV",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "148",
          "rr": "36",
          "temp": "36.6°C",
          "spo2": "98%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-558562",
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
                  "value": "18.4",
                  "unit": "x10³/µL",
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
                  "value": "520",
                  "unit": "x10³/µL",
                  "range": "150-400",
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
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "16",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Methemoglobin",
                  "value": "2.8",
                  "unit": "%",
                  "range": "<1.5",
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
          "cc": "4mo admitted after FPIES episode — IV fluids, monitoring for recurrence",
          "hpi": "Amara Williams — 4mo admitted after FPIES episode — IV fluids, monitoring for recurrence",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — confirm FPIES diagnosis, guide safe food introduction",
        "diagnosis": "FPIES — Acute"
      },
      "problems": [],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "138",
          "rr": "32",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-558562",
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
                  "value": "18.4",
                  "unit": "x10³/µL",
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
                  "value": "520",
                  "unit": "x10³/µL",
                  "range": "150-400",
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
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "16",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Methemoglobin",
                  "value": "2.8",
                  "unit": "%",
                  "range": "<1.5",
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
          "cc": "A/I consult — confirm FPIES diagnosis, guide safe food introduction",
          "hpi": "Amara Williams — A/I consult — confirm FPIES diagnosis, guide safe food introduction",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "FPIES follow-up — food diary review, plan supervised oral food challenge at age 12-18mo",
        "diagnosis": "FPIES — Acute"
      },
      "problems": [],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "130",
          "rr": "28",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-558562",
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
                  "value": "18.4",
                  "unit": "x10³/µL",
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
                  "value": "520",
                  "unit": "x10³/µL",
                  "range": "150-400",
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
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "16",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Methemoglobin",
                  "value": "2.8",
                  "unit": "%",
                  "range": "<1.5",
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
          "cc": "FPIES follow-up — food diary review, plan supervised oral food challenge at age 12-18mo",
          "hpi": "Amara Williams — FPIES follow-up — food diary review, plan supervised oral food challenge at age 12-18mo",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Amara Williams",
    "dob": "06/09/2026",
    "age": "0",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-174434",
    "language": "English",
    "race": "Multiracial",
    "phone": "(484) 706-9939",
    "email": "amara.williams@email.com",
    "address": "5279 Oak St, Weston, FL 33368",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Thomas Williams",
      "phone": "(884) 435-4346",
      "relationship": "Parent"
    },
    "chiefComplaint": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
    "diagnosis": "FPIES — Acute Episode"
  },
  "problems": [],
  "medications": [],
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
      "hr": "168",
      "rr": "42",
      "temp": "36.2°C",
      "spo2": "97%",
      "pain": "N/A"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
      "hpi": "Amara Williams presents with 4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy.",
      "exam": "See documentation.",
      "assessment": "FPIES — Acute Episode",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-558562",
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
              "value": "18.4",
              "unit": "x10³/µL",
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
              "value": "520",
              "unit": "x10³/µL",
              "range": "150-400",
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
            },
            {
              "test": "CO2/Bicarb",
              "value": "16",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": "L"
            }
          ]
        },
        {
          "name": "ALLERGY & IMMUNOLOGY STUDIES",
          "results": [
            {
              "test": "Methemoglobin",
              "value": "2.8",
              "unit": "%",
              "range": "<1.5",
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
    "Older sibling: milk FPIES (resolved)"
  ],
  "socialHistory": [
    [
      "Trigger",
      "First introduction of rice cereal — repetitive vomiting began ~2h later"
    ],
    [
      "Feeding history",
      "Exclusively breastfed until today"
    ],
    [
      "Key feature",
      "No urticaria, no respiratory symptoms — GI-isolated"
    ]
  ]
};
