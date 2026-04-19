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
    "patientPersona": "Liam Foster appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did 6-month-old with bloody stools, eczema, and poor weight gain after formula switch start?",
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
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started Liam Foster presents with 6-month-old with bloody stools, eczema, and poor weigh.'",
        "character": "'It's 6-month-old with bloody stools, eczema, and poor weight gain after formula switch \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Hydrocortisone 1% cream.'",
        "allergies": "'My allergies are Cow's milk (suspected).'",
        "family": "Mother: allergic rhinitis  Father: eczema as child",
        "social": "Feeding: Switched from breast milk to cow's milk formula at 4 months  Growth: Dropped from 50th to 15th percentile weight-for-age"
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
        "phase2": "You've reviewed Liam Foster's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};