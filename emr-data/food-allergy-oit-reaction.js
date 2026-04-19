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
  ]
,"references":[
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
    "patientPersona": "Olivia Nguyen appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did abdominal pain, hives during peanut oral immunotherapy updose visit start?",
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
        "onset": "'The symptoms started Olivia Nguyen presents with abdominal pain, hives during peanut oral immunothera.'",
        "character": "'It's abdominal pain, hives during peanut oral immunotherapy updose visit \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Peanut OIT; Cetirizine; EpiPen Jr.'",
        "allergies": "'My allergies are Peanut.'",
        "family": "Brother: egg allergy",
        "social": "OIT status: Tolerating 100mg daily doses at home, here for updose to 200mg  Exercise: Did NOT exercise within 2 hours (per protocol)  Cofactors: Has viral URI symptoms \u2014 may lower threshold"
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
        "phase2": "You've reviewed Olivia Nguyen's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};