/* emr-data/milk-allergy-infant.js — Multi-Setting Allergy Case: Cow's Milk Protein Allergy */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Liam Foster",
      "dob": "07/14/2026",
      "age": "0",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-791118",
      "language": "English",
      "race": "Black/African American",
      "phone": "(442) 307-6333",
      "email": "liam.foster@email.com",
      "address": "2854 Oak St, Weston, FL 33364",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Lisa Chang, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Jennifer Foster",
        "phone": "(300) 825-1619",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Cow's milk (suspected)",
        "reaction": "GI bleeding, eczema flare",
        "severity": "Moderate",
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
      "Mother: allergic rhinitis",
      "Father: eczema as child"
    ],
    "socialHistory": [
      [
        "Feeding",
        "Switched from breast milk to cow's milk formula at 4 months"
      ],
      [
        "Growth",
        "Dropped from 50th to 15th percentile weight-for-age"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "6mo with bloody stools and dehydration on cow milk formula",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema (severe)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Failure to thrive",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Bloody stools since formula introduction",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydrocortisone 1% cream",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to affected areas",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "IV Fluids",
          "dose": "D5 1/2NS",
          "route": "IV",
          "frequency": "Bolus then maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "162",
          "rr": "40",
          "temp": "37.2°C",
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
          "accession": "LAB-470731",
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
                  "value": "9.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": "L"
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "12",
                  "unit": "%",
                  "range": "1-4",
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
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Milk Ig E",
                  "value": "3.8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Casein Ig E",
                  "value": "5.2",
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
          "cc": "6mo with bloody stools and dehydration on cow milk formula",
          "hpi": "Liam Foster — 6mo with bloody stools and dehydration on cow milk formula",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for rehydration and formula transition — cow milk protein allergy",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema (severe)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Failure to thrive",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Bloody stools since formula introduction",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydrocortisone 1% cream",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to affected areas",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Alimentum formula",
          "dose": "",
          "route": "PO",
          "frequency": "Ad lib",
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
          "rr": "34",
          "temp": "37.0°C",
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
          "accession": "LAB-470731",
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
                  "value": "9.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": "L"
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "12",
                  "unit": "%",
                  "range": "1-4",
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
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Milk Ig E",
                  "value": "3.8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Casein Ig E",
                  "value": "5.2",
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
          "cc": "Admitted for rehydration and formula transition — cow milk protein allergy",
          "hpi": "Liam Foster — Admitted for rehydration and formula transition — cow milk protein allergy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "6-month-old with bloody stools, eczema, and poor weight gain after formula switch",
        "diagnosis": "Cow's Milk Protein Allergy — Infant"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema (severe)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Failure to thrive",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Bloody stools since formula introduction",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydrocortisone 1% cream",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to affected areas",
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
          "temp": "37.0°C",
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
          "accession": "LAB-470731",
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
                  "value": "9.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": "L"
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "12",
                  "unit": "%",
                  "range": "1-4",
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
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Milk Ig E",
                  "value": "3.8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Casein Ig E",
                  "value": "5.2",
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
          "provider": "Dr. Allergist (Consultant)",
          "cc": "6-month-old with bloody stools, eczema, and poor weight gain after formula switch",
          "hpi": "Liam Foster presents with 6-month-old with bloody stools, eczema, and poor weight gain after formula switch.",
          "exam": "See documentation.",
          "assessment": "Cow's Milk Protein Allergy — Infant",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — growth curve on extensively hydrolyzed formula, tolerance assessment",
        "diagnosis": "Cow's Milk Protein Allergy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Eczema (severe)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Failure to thrive",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Bloody stools since formula introduction",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Alimentum formula",
          "dose": "",
          "route": "PO",
          "frequency": "Ad lib",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "132",
          "rr": "30",
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
          "accession": "LAB-470731",
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
                  "value": "9.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": "L"
                },
                {
                  "test": "Platelets",
                  "value": "248",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "12",
                  "unit": "%",
                  "range": "1-4",
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
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Milk Ig E",
                  "value": "3.8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Casein Ig E",
                  "value": "5.2",
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
          "cc": "Follow-up — growth curve on extensively hydrolyzed formula, tolerance assessment",
          "hpi": "Liam Foster — Follow-up — growth curve on extensively hydrolyzed formula, tolerance assessment",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Liam Foster",
    "dob": "07/14/2026",
    "age": "0",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-791118",
    "language": "English",
    "race": "Black/African American",
    "phone": "(442) 307-6333",
    "email": "liam.foster@email.com",
    "address": "2854 Oak St, Weston, FL 33364",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Jennifer Foster",
      "phone": "(300) 825-1619",
      "relationship": "Parent"
    },
    "chiefComplaint": "6-month-old with bloody stools, eczema, and poor weight gain after formula switch",
    "diagnosis": "Cow's Milk Protein Allergy — Infant"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Eczema (severe)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Failure to thrive",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Bloody stools since formula introduction",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Hydrocortisone 1% cream",
      "dose": "",
      "route": "Topical",
      "frequency": "BID to affected areas",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Cow's milk (suspected)",
      "reaction": "GI bleeding, eczema flare",
      "severity": "Moderate",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "N/A",
      "hr": "148",
      "rr": "36",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "N/A"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "6-month-old with bloody stools, eczema, and poor weight gain after formula switch",
      "hpi": "Liam Foster presents with 6-month-old with bloody stools, eczema, and poor weight gain after formula switch.",
      "exam": "See documentation.",
      "assessment": "Cow's Milk Protein Allergy — Infant",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-470731",
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
              "value": "9.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "248",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Eosinophils",
              "value": "12",
              "unit": "%",
              "range": "1-4",
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
            }
          ]
        },
        {
          "name": "ALLERGY & IMMUNOLOGY STUDIES",
          "results": [
            {
              "test": "Milk Ig E",
              "value": "3.8",
              "unit": "kU/L",
              "range": "<0.35",
              "flag": "H"
            },
            {
              "test": "Casein Ig E",
              "value": "5.2",
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
    "Mother: allergic rhinitis",
    "Father: eczema as child"
  ],
  "socialHistory": [
    [
      "Feeding",
      "Switched from breast milk to cow's milk formula at 4 months"
    ],
    [
      "Growth",
      "Dropped from 50th to 15th percentile weight-for-age"
    ]
  ]
};
