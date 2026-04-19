/* emr-data/food-allergy-oit-reaction.js — Multi-Setting Allergy Case: Food Allergy OIT Reaction */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Olivia Nguyen",
      "patientHPI": "I was at my allergy doctor's office getting my usual peanut treatment when I started having a reaction, and even though they treated me there, I'm still not feeling right and my parents are worried.",
      "dob": "08/10/2014",
      "age": "12",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-966962",
      "language": "English",
      "race": "Asian",
      "phone": "(415) 555-6062",
      "email": "olivia.nguyen@email.com",
      "address": "1240 Oak Ave, Memphis, TN 38116",
      "insurance": "Cigna PPO",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "David Nguyen",
        "phone": "(503) 555-6751",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Peanut",
        "reaction": "Anaphylaxis (baseline)",
        "severity": "Severe",
        "type": "Food"
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
      "Brother: egg allergy"
    ],
    "socialHistory": [
      [
        "OIT status",
        "Tolerating 100mg daily doses at home, here for updose to 200mg"
      ],
      [
        "Exercise",
        "Did NOT exercise within 2 hours (per protocol)"
      ],
      [
        "Cofactors",
        "Has viral URI symptoms — may lower threshold"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "12yo brought to ED after OIT reaction at allergist office with persistent symptoms",
        "diagnosis": "Food Allergy OIT Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut allergy — on OIT protocol",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eczema (well-controlled)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Peanut OIT",
          "dose": "100mg",
          "route": "PO",
          "frequency": "Daily (updosing today to 200mg)",
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
          "id": "med-3",
          "name": "EpiPen Jr",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Epinephrine",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "Given x1",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "100/62",
          "hr": "108",
          "rr": "22",
          "temp": "36.8°C",
          "spo2": "96%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-777789",
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
                  "test": "Peanut Ig E",
                  "value": "42",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Ara H2",
                  "value": "28",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "12yo brought to ED after OIT reaction at allergist office with persistent symptoms",
          "hpi": "Olivia Nguyen — 12yo brought to ED after OIT reaction at allergist office with persistent symptoms",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted after severe OIT reaction for monitoring",
        "diagnosis": "Food Allergy OIT Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut allergy — on OIT protocol",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eczema (well-controlled)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Peanut OIT",
          "dose": "100mg",
          "route": "PO",
          "frequency": "Daily (updosing today to 200mg)",
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
          "id": "med-3",
          "name": "EpiPen Jr",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "106/66",
          "hr": "92",
          "rr": "18",
          "temp": "36.8°C",
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
          "accession": "LAB-777789",
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
                  "test": "Peanut Ig E",
                  "value": "42",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Ara H2",
                  "value": "28",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "Admitted after severe OIT reaction for monitoring",
          "hpi": "Olivia Nguyen — Admitted after severe OIT reaction for monitoring",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I follow-up of OIT adverse event — modify protocol or discontinue?",
        "diagnosis": "Food Allergy OIT Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut allergy — on OIT protocol",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eczema (well-controlled)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Peanut OIT",
          "dose": "100mg",
          "route": "PO",
          "frequency": "Daily (updosing today to 200mg)",
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
          "id": "med-3",
          "name": "EpiPen Jr",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/68",
          "hr": "82",
          "rr": "16",
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
          "accession": "LAB-777789",
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
                  "test": "Peanut Ig E",
                  "value": "42",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Ara H2",
                  "value": "28",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "A/I follow-up of OIT adverse event — modify protocol or discontinue?",
          "hpi": "Olivia Nguyen — A/I follow-up of OIT adverse event — modify protocol or discontinue?",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Abdominal pain, hives during peanut oral immunotherapy updose visit",
        "diagnosis": "Food Allergy — OIT Adverse Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Peanut allergy — on OIT protocol",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Eczema (well-controlled)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Peanut OIT",
          "dose": "100mg",
          "route": "PO",
          "frequency": "Daily (updosing today to 200mg)",
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
          "id": "med-3",
          "name": "EpiPen Jr",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/68",
          "hr": "98",
          "rr": "18",
          "temp": "36.8°C",
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
          "accession": "LAB-777789",
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
                  "test": "Peanut Ig E",
                  "value": "42",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Ara H2",
                  "value": "28",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "Abdominal pain, hives during peanut oral immunotherapy updose visit",
          "hpi": "Olivia Nguyen presents with abdominal pain, hives during peanut oral immunotherapy updose visit.",
          "exam": "See documentation.",
          "assessment": "Food Allergy — OIT Adverse Reaction",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Olivia Nguyen",
    "dob": "08/10/2014",
    "age": "12",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-966962",
    "language": "English",
    "race": "Asian",
    "phone": "(212) 555-3972",
    "email": "olivia.nguyen@email.com",
    "address": "3624 N Kedzie Blvd, New Orleans, LA 70114",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "David Nguyen",
      "phone": "(317) 555-7566",
      "relationship": "Parent"
    },
    "chiefComplaint": "Abdominal pain, hives during peanut oral immunotherapy updose visit",
    "diagnosis": "Food Allergy — OIT Adverse Reaction"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Peanut allergy — on OIT protocol",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Eczema (well-controlled)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Peanut OIT",
      "dose": "100mg",
      "route": "PO",
      "frequency": "Daily (updosing today to 200mg)",
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
      "id": "med-3",
      "name": "EpiPen Jr",
      "dose": "0.15mg",
      "route": "IM",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Peanut",
      "reaction": "Anaphylaxis (baseline)",
      "severity": "Severe",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "108/68",
      "hr": "98",
      "rr": "18",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Office Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Abdominal pain, hives during peanut oral immunotherapy updose visit",
      "hpi": "Olivia Nguyen presents with abdominal pain, hives during peanut oral immunotherapy updose visit.",
      "exam": "See documentation.",
      "assessment": "Food Allergy — OIT Adverse Reaction",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-777789",
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
              "test": "Peanut Ig E",
              "value": "42",
              "unit": "kU/L",
              "range": "<0.35",
              "flag": "H"
            },
            {
              "test": "Ara H2",
              "value": "28",
              "unit": "kU/L",
              "range": "<0.35",
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
    "Brother: egg allergy"
  ],
  "socialHistory": [
    [
      "OIT status",
      "Tolerating 100mg daily doses at home, here for updose to 200mg"
    ],
    [
      "Exercise",
      "Did NOT exercise within 2 hours (per protocol)"
    ],
    [
      "Cofactors",
      "Has viral URI symptoms — may lower threshold"
    ]
  ],
  "references": [
    {
      "id": "NIAID-FA-2010",
      "title": "Guidelines for diagnosis and management of food allergy in the US",
      "authors": "Boyce JA, Assa'ad A, Burks AW, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2010,
      "doi": "10.1016/j.jaci.2010.10.008",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4241964/",
      "openAccess": true,
      "validates": [
        "IgE-mediated food allergy criteria",
        "Component testing (Ara h 2)",
        "OFC as gold standard"
      ]
    },
    {
      "id": "PALISADE-2018",
      "title": "AR101 oral immunotherapy for peanut allergy",
      "authors": "PALISADE Group.",
      "journal": "N Engl J Med",
      "year": 2018,
      "doi": "10.1056/NEJMoa1812856",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7643555/",
      "openAccess": true,
      "validates": [
        "OIT efficacy",
        "Exercise restriction 2h window",
        "OIT = protection, not cure"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "OIT reactions most commonly occur during up-dosing or with cofactors (exercise, illness, fever, menses, alcohol, NSAIDs). Cofactors lower the threshold for mast cell activation — patients must hold OIT dose during any cofactor state.",
      "EoE is a recognized complication of OIT in ~5% of patients. Screen with symptom questionnaire at every OIT visit (dysphagia, odynophagia, chest pain, food impaction). Low threshold to refer for endoscopy.",
      "OIT emergency protocol: mild reaction (isolated oral pruritus) — continue current dose, antihistamine. Moderate (urticaria, GI) — hold up-dose, stay at current level. Severe (anaphylaxis) — epinephrine, hold OIT, reassess with allergist before resuming."
    ],
    "boardPearls": [
      "OIT mechanism: mast cell anergy + basophil desensitization + Treg induction + IgG4 production (blocking antibody) + IgE/IgG4 ratio decrease.",
      "Desensitization vs sustained unresponsiveness (SU): desensitization = tolerance maintained only while dosing daily. SU = tolerance persists weeks after stopping. ~70% achieve desensitization; ~30% achieve SU.",
      "OIT cofactor protocol: hold dose if fever >38°C, active illness, exercise within 2h, menses Day 1–2, alcohol.",
      "EoE complication of OIT: ~5% incidence. Symptom-based screening at each visit. Discontinue or reduce OIT dose if EoE confirmed.",
      "Palforzia (peanut): ages 4–17. Xolair (omalizumab) pre-treatment: reduces OIT reactions, allows faster up-dosing in high-risk patients (MultiPALS trial)."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Olivia is anxious but cooperative, frightened by the reaction during her routine OIT visit. She's articulate for her age but looks to her mother for reassurance, becoming more distressed when describing the spreading hives and stomach cramping.",
    "interviewQuestions": [
      "Tell me exactly what happened during your peanut dose today",
      "When did you first notice the hives and stomach pain?",
      "Can you describe what the hives look like and where they are?",
      "How bad is your stomach pain on a scale of 1-10?",
      "Are you having any trouble breathing or swallowing?",
      "Have you been feeling sick with a cold or anything lately?",
      "Did you exercise or do any physical activity before coming here today?",
      "When was your last peanut dose at home and how did it go?",
      "Have you ever had a reaction like this before during OIT?",
      "Are you taking all your regular medications?",
      "Have you eaten anything different today?",
      "Are you feeling dizzy, nauseous, or having any other symptoms?",
      "Has anyone in your family had severe allergic reactions?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean. Can you ask that differently?",
      "onset": "Right after I took the 200mg peanut dose here at the clinic, maybe 10-15 minutes ago. First my tummy started hurting, then I saw red bumps on my arms",
      "character": "My stomach feels crampy and twisty, like really bad gas pains. The hives are raised red bumps that are really itchy",
      "location": "My whole stomach hurts, not just one spot. The hives started on my arms but now they're on my chest and back too",
      "severity": "The stomach pain is like a 6 out of 10, and the itching is really bothering me, maybe 7 out of 10",
      "aggravating": "The hives get more itchy when I scratch them, and my stomach hurts more when I move around",
      "relieving": "Nothing is helping right now. I haven't taken anything yet",
      "associated": "I feel a little nauseous and my nose has been stuffy. I don't think I'm having trouble breathing though",
      "denies": "No trouble swallowing, no dizziness, no vomiting yet, no face swelling that I can tell",
      "history": "I've had some mild stomach upset with higher doses before, but never hives like this. This is the worst reaction I've had during OIT",
      "medications": "Peanut OIT; Cetirizine; EpiPen Jr",
      "allergies": "Peanut",
      "family": "My little brother has an egg allergy but he's never had a really bad reaction",
      "social": "I'm in 7th grade. I made sure not to exercise before coming here like you always tell us. But I have had a stuffy nose and sore throat for a couple days"
    },
    "examManeuvers": [
      "Inspect skin for urticaria distribution and characteristics",
      "Examine oropharynx and neck for angioedema",
      "Auscultate lungs for wheezing or decreased air entry",
      "Palpate abdomen for tenderness, distension, or masses",
      "Check vital signs including blood pressure and heart rate",
      "Assess mental status and overall appearance",
      "Examine conjunctiva for injection or swelling",
      "Palpate lymph nodes in neck",
      "Listen to heart sounds for rate and rhythm",
      "Assess capillary refill and peripheral perfusion"
    ],
    "examFindings": {
      "Inspect skin for urticaria distribution and characteristics": "Multiple raised, erythematous, blanching wheals 5-15mm diameter on bilateral arms, chest, and upper back. Some wheals are confluent",
      "Examine oropharynx and neck for angioedema": "Oropharynx clear, no lip or tongue swelling, no cervical swelling or stridor",
      "Auscultate lungs for wheezing or decreased air entry": "Clear breath sounds bilaterally, no wheezing, good air entry throughout",
      "Palpate abdomen for tenderness, distension, or masses": "Mild diffuse tenderness without guarding or rebound, normal bowel sounds, no distension",
      "Check vital signs including blood pressure and heart rate": "BP 108/68, HR 98 (baseline), RR 18, no hypotension or tachycardia",
      "Assess mental status and overall appearance": "Alert, oriented, anxious but appropriate. No signs of shock or severe distress",
      "Examine conjunctiva for injection or swelling": "Conjunctiva clear, no periorbital edema",
      "Palpate lymph nodes in neck": "No lymphadenopathy",
      "Listen to heart sounds for rate and rhythm": "Regular rate and rhythm, no murmurs",
      "Assess capillary refill and peripheral perfusion": "Capillary refill <2 seconds, warm extremities, good perfusion"
    },
    "ddxTargets": [
      "Allergic reaction to OIT updose (correct diagnosis)",
      "Food protein-induced enterocolitis syndrome",
      "Viral gastroenteritis with coincidental urticaria",
      "Anaphylaxis",
      "Systemic mastocytosis",
      "Acute gastritis",
      "Cholinergic urticaria"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'routine OIT visit' and miss that viral illness lowered reaction threshold, or anchor on abdominal pain and miss systemic allergic reaction",
      "prematureClosure": "May quickly assume mild OIT reaction and not fully assess for signs of progression to anaphylaxis or consider cofactor effects",
      "availabilityBias": "Recent cases of viral gastroenteritis might overshadow allergic reaction, or recent anaphylaxis cases might cause overestimation of severity"
    },
    "coachPrompts": {
      "phase2": "This 12-year-old is having symptoms during an OIT updose visit. Before you interview her, think about the key factors that can influence OIT reactions. What cofactors might lower her reaction threshold? What's your approach to assessing reaction severity?",
      "phase5": "You've identified urticaria with GI symptoms during OIT updose. How does her concurrent viral illness factor into this reaction? What are your next steps for management, and what signs would make you concerned about progression?",
      "finalDebrief": "This case highlights how cofactors like viral illness can significantly lower the threshold for OIT reactions. The combination of systemic urticaria and GI symptoms represents a moderate allergic reaction requiring treatment and protocol adjustment. How did recognizing the viral cofactor change your management approach?"
    }
  }
};
