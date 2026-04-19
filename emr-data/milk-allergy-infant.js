/* emr-data/milk-allergy-infant.js — Multi-Setting Allergy Case: Cow's Milk Protein Allergy */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Liam Foster",
      "patientHPI": "My 6-month-old has been having bloody stools and seems dehydrated even though he's been drinking his formula.",
      "dob": "07/14/2026",
      "age": "0",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-791118",
      "language": "English",
      "race": "Black/African American",
      "phone": "(502) 555-4727",
      "email": "liam.foster@email.com",
      "address": "2173 Elm St, San Antonio, TX 78205",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Lisa Chang, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Jennifer Foster",
        "phone": "(504) 555-3939",
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
    "phone": "(502) 555-1231",
    "email": "liam.foster@email.com",
    "address": "2169 E Roosevelt Rd, Baltimore, MD 21201",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Jennifer Foster",
      "phone": "(713) 555-9751",
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
      "id": "DRACMA-2010",
      "title": "WAO DRACMA: cow's milk allergy diagnosis",
      "authors": "Fiocchi A, Brozek J, Schunemann H, et al.",
      "journal": "World Allergy Organ J",
      "year": 2010,
      "doi": "10.1097/WOX.0b013e3181defeb9",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3488907/",
      "openAccess": true,
      "validates": [
        "CMP in breast milk",
        "Maternal elimination counseling",
        "Hydrolyzed vs amino acid formula",
        "Baked milk ladder",
        "75% tolerate baked milk by age 1"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "Cow's milk protein allergy (CMPA) affects 2–3% of infants and is the most common food allergy in infancy. IgE-mediated CMPA presents within 30 min of exposure (urticaria, vomiting, anaphylaxis). Non-IgE CMPA presents with GI symptoms hours later (FPIES, proctocolitis).",
      "Baked milk tolerance: ~75% of milk-allergic children can tolerate extensively heated (baked) milk. Casein IgE-negative patients are most likely to tolerate baked milk. Introducing baked milk accelerates natural tolerance development.",
      "Natural history: ~80% of milk-allergic children achieve tolerance by age 5–6. Casein-sensitized children (heat-stable protein) are less likely to outgrow and have more severe reactions."
    ],
    "boardPearls": [
      "Milk protein components: casein (Bos d 8) — heat-stable → persistent allergy. Whey (β-lactoglobulin Bos d 5, α-lactalbumin) — heat-labile → may tolerate baked milk.",
      "Casein sIgE: positive → cannot tolerate baked milk. Negative, whey positive → baked milk ladder may be appropriate.",
      "Formula options: extensively hydrolyzed casein (Nutramigen, Alimentum) for mild-moderate CMPA. Amino acid formula (Neocate, EleCare) for severe CMPA/FPIES.",
      "Soy formula: 10–15% of milk-allergic infants are also soy-allergic (shared storage proteins). Not recommended for IgE-mediated milk allergy in infants <6 months.",
      "Breastfeeding: maternal milk elimination diet if breastfed infant has CMPA. Reassess after 2 weeks.",
      "Outgrowth: 80% by age 5–6. OFC annually to assess resolution."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Parents are anxious and frustrated, having tried multiple interventions without improvement. They appear tired from sleep disruption due to baby's discomfort and are very forthcoming with detailed feeding and symptom logs. Mother shows guilt about stopping breastfeeding early.",
    "interviewQuestions": [
      "When did you first notice blood in the stools?",
      "What does the blood look like - streaky, mixed in, or coating the stool?",
      "Tell me about the feeding history and when you switched from breast milk",
      "How has Liam's weight gain been since birth?",
      "Describe the eczema - when did it start and how severe is it?",
      "How frequent are the bowel movements and what do they look like?",
      "Is Liam fussy or colicky, especially after feeding?",
      "Have you tried any dietary changes or different formulas?",
      "Any vomiting or spitting up more than usual?",
      "How is Liam's appetite and feeding behavior?",
      "Any family history of food allergies or gastrointestinal problems?",
      "Have you noticed the symptoms getting better or worse over time?",
      "Any fever, lethargy, or other concerning symptoms?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that - could you ask it differently? We're really worried about him.",
      "onset": "We first saw blood in his diapers about 6 weeks ago, maybe 2 weeks after we fully switched to formula. The eczema started when he was about 3 months old.",
      "character": "The blood looks like little streaks mixed through the stool, sometimes bright red. The stools are often loose and mucousy.",
      "location": "It's in his bowel movements - we see it in the diaper. The eczema is worst on his cheeks and in the creases of his arms and legs.",
      "severity": "It's really concerning - maybe 7 out of 10 for our worry level. He seems uncomfortable and cranky, especially after eating.",
      "aggravating": "The symptoms seem worse after he drinks his formula. The eczema gets worse when he's fussy and scratching.",
      "relieving": "Nothing really helps the bloody stools. The hydrocortisone cream helps the eczema a little bit.",
      "associated": "He's been more fussy than usual, especially after feeds. His weight gain has really slowed down, and he seems hungrier but more uncomfortable after eating.",
      "denies": "No fever, no projectile vomiting, no severe lethargy. He's still interactive and playful between episodes of fussiness.",
      "history": "This is the first time we've seen anything like this. He was perfectly fine when I was breastfeeding him.",
      "medications": "Hydrocortisone 1% cream",
      "allergies": "Cow's milk (suspected)",
      "family": "I have seasonal allergies and my husband had eczema as a baby that he outgrew. My sister's daughter has some food allergies.",
      "social": "I had to stop breastfeeding at 4 months when I went back to work. We switched to a regular cow's milk formula. No smoking in the house, we're both professional parents."
    },
    "examManeuvers": [
      "General appearance and growth assessment",
      "Skin examination for eczema severity and distribution",
      "Abdominal inspection and palpation",
      "Digital rectal examination or perirectal inspection",
      "Lymph node examination",
      "Oral examination for thrush or other findings",
      "Cardiac examination",
      "Assessment of hydration status",
      "Weight and length plotting on growth curves",
      "Assessment of muscle mass and subcutaneous fat"
    ],
    "examFindings": {
      "General appearance and growth assessment": "Alert, interactive infant who appears mildly irritable. Appears thin with decreased subcutaneous fat for age.",
      "Skin examination for eczema severity and distribution": "Moderate to severe atopic dermatitis involving bilateral cheeks, antecubital and popliteal fossae with erythema, scaling, and some excoriation.",
      "Abdominal inspection and palpation": "Soft, non-distended abdomen. No masses, hepatosplenomegaly, or tenderness. Normal bowel sounds.",
      "Digital rectal examination or perirectal inspection": "Perirectal area shows mild erythema. No visible fissures or external lesions.",
      "Lymph node examination": "No significant lymphadenopathy palpated.",
      "Oral examination for thrush or other findings": "Oral cavity clear, no thrush, normal sucking reflex.",
      "Cardiac examination": "Regular rate and rhythm, no murmurs audible. Capillary refill less than 2 seconds.",
      "Assessment of hydration status": "Mucous membranes moist, good skin turgor, normal fontanelle.",
      "Weight and length plotting on growth curves": "Weight dropped from 50th percentile at birth to 15th percentile currently. Length remains 25th percentile.",
      "Assessment of muscle mass and subcutaneous fat": "Mildly decreased subcutaneous fat and muscle mass consistent with mild failure to thrive."
    },
    "ddxTargets": [
      "Cow's milk protein allergy (correct diagnosis)",
      "Food protein-induced enterocolitis syndrome (FPIES)",
      "Inflammatory bowel disease",
      "Intussusception",
      "Necrotizing enterocolitis",
      "Lactose intolerance",
      "Infectious gastroenteritis"
    ],
    "biasFlags": {
      "anchoring": "May anchor on the bloody stools and consider more serious conditions like IBD or intussusception without fully considering the feeding history and allergic presentation",
      "prematureClosure": "Risk of stopping at 'formula intolerance' without considering the systemic nature of food protein allergy and need for specific management",
      "availabilityBias": "May overweight infectious causes if recently seeing gastroenteritis cases, or underweight food allergies if unfamiliar with presentation in infants"
    },
    "coachPrompts": {
      "phase2": "You've identified several concerning possibilities for bloody stools in an infant. As you interview the parents, pay particular attention to the temporal relationship between symptoms and any changes in diet. What questions will help you understand if this might be related to an immune response versus an infectious or anatomical cause?",
      "phase5": "Now that you have the history of symptoms beginning after formula introduction, along with the eczema and growth concerns, what pattern are you seeing? Consider how food protein allergies can present systemically in infants. What would be your next step in narrowing down between your differential diagnoses?",
      "finalDebrief": "This case illustrates how cow's milk protein allergy can present with multiple system involvement - GI symptoms, skin manifestations, and growth issues. The key was recognizing the temporal relationship with formula introduction and the constellation of atopic findings. How did your thinking evolve from considering anatomical emergencies to recognizing this as an allergic phenomenon?"
    }
  }
};
