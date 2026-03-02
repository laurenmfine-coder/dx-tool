/* emr-data/penicillin-allergy-delabeling.js — Multi-Setting Allergy Case: Penicillin Allergy Evaluation */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Patricia O'Brien",
      "dob": "04/24/1968",
      "age": "58",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-537466",
      "language": "English",
      "race": "White",
      "phone": "(274) 738-5178",
      "email": "patricia.obrien@email.com",
      "address": "1154 Oak St, Weston, FL 33387",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "Publix Pharmacy — Weston Rd",
      "emergencyContact": {
        "name": "David O'Brien",
        "phone": "(578) 960-9587",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Rash as a child (age 5)",
        "severity": "Unknown — remote history",
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
        "History",
        "Told she had rash with amoxicillin at age 5 — mother's report, no details"
      ],
      [
        "Impact",
        "Has avoided all penicillins and cephalosporins for 53 years"
      ],
      [
        "Surgery",
        "Orthopedic surgeon requests A/I clearance for cefazolin use"
      ],
      [
        "Teaching point",
        "90%+ of labeled penicillin allergies are not true allergies"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Pre-surgical patient — ED visit for allergic reaction concern, found to be anxiety",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood — rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "148/88",
          "hr": "102",
          "rr": "20",
          "temp": "36.8°C",
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
          "accession": "LAB-879945",
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
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Pre-surgical patient — ED visit for allergic reaction concern, found to be anxiety",
          "hpi": "Patricia O'Brien — Pre-surgical patient — ED visit for allergic reaction concern, found to be anxiety",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Pre-surgical admission — A/I cleared for cefazolin after penicillin delabeling",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood — rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Cefazolin",
          "dose": "2g",
          "route": "IV",
          "frequency": "Surgical prophylaxis",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "128/76",
          "hr": "72",
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
          "accession": "LAB-879945",
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
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Pre-surgical admission — A/I cleared for cefazolin after penicillin delabeling",
          "hpi": "Patricia O'Brien — Pre-surgical admission — A/I cleared for cefazolin after penicillin delabeling",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "Pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis",
        "diagnosis": "Penicillin Allergy — Delabeling Assessment"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood — rash reported",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amlodipine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Acetaminophen",
          "dose": "500mg",
          "route": "PO",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "132/78",
          "hr": "72",
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
          "accession": "LAB-879945",
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
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis",
          "hpi": "Patricia O'Brien presents with pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis.",
          "exam": "See documentation.",
          "assessment": "Penicillin Allergy — Delabeling Assessment",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Penicillin allergy evaluation — skin testing and oral amoxicillin challenge",
        "diagnosis": "Penicillin Allergy Evaluation"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Scheduled for total knee replacement in 2 weeks",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Labeled 'penicillin allergy' since childhood — rash reported",
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
          "bp": "132/78",
          "hr": "72",
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
          "accession": "LAB-879945",
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
                  "test": "Penicillin S P T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
                  "flag": ""
                },
                {
                  "test": "Amoxicillin I D T",
                  "value": "Negative",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Penicillin allergy evaluation — skin testing and oral amoxicillin challenge",
          "hpi": "Patricia O'Brien — Penicillin allergy evaluation — skin testing and oral amoxicillin challenge",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Patricia O'Brien",
    "dob": "04/24/1968",
    "age": "58",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-537466",
    "language": "English",
    "race": "White",
    "phone": "(274) 738-5178",
    "email": "patricia.obrien@email.com",
    "address": "1154 Oak St, Weston, FL 33387",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "David O'Brien",
      "phone": "(578) 960-9587",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis",
    "diagnosis": "Penicillin Allergy — Delabeling Assessment"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Scheduled for total knee replacement in 2 weeks",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Labeled 'penicillin allergy' since childhood — rash reported",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Amlodipine",
      "dose": "5mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Acetaminophen",
      "dose": "500mg",
      "route": "PO",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "reaction": "Rash as a child (age 5)",
      "severity": "Unknown — remote history",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "132/78",
      "hr": "72",
      "rr": "14",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "0/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "Pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis",
      "hpi": "Patricia O'Brien presents with pre-surgical evaluation — labeled penicillin allergy, needs cefazolin for prophylaxis.",
      "exam": "See documentation.",
      "assessment": "Penicillin Allergy — Delabeling Assessment",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-879945",
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
              "test": "Penicillin S P T",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "Amoxicillin I D T",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
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
      "History",
      "Told she had rash with amoxicillin at age 5 — mother's report, no details"
    ],
    [
      "Impact",
      "Has avoided all penicillins and cephalosporins for 53 years"
    ],
    [
      "Surgery",
      "Orthopedic surgeon requests A/I clearance for cefazolin use"
    ],
    [
      "Teaching point",
      "90%+ of labeled penicillin allergies are not true allergies"
    ]
  ]
};
