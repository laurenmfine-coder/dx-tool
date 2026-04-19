/* emr-data/fpies-chronic.js — Multi-Setting Allergy Case: FPIES — Chronic */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Ethan Reyes",
  "patientHPI": "My 7-month-old has had watery diarrhea for days now and he's so tired he won't even lift his head - I can tell he's getting dehydrated because his lips look dry.",
      "dob": "09/25/2026",
      "age": "0",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-195757",
      "language": "English",
      "race": "Asian",
      "phone": "(619) 555-3705",
      "email": "ethan.reyes@email.com",
      "address": "3395 Iris Blvd, Birmingham, AL 35209",
      "insurance": "Medicaid",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Sarah Reyes",
        "phone": "(415) 555-9645",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Cow's milk (suspected FPIES)",
        "reaction": "Chronic GI symptoms",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Feeding",
        "Cow's milk formula since 3 months"
      ],
      [
        "Key",
        "IgE-negative, skin prick test to milk negative — this is non-IgE mediated"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "7mo brought to ED with profuse watery diarrhea, lethargy, and dehydration",
        "diagnosis": "FPIES — Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Failure to thrive",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic diarrhea since formula introduction",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "IV Fluids",
          "dose": "NS bolus 20mL/kg",
          "route": "IV",
          "frequency": "STAT",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "172",
          "rr": "44",
          "temp": "36.4°C",
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
          "accession": "LAB-408138",
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
                  "value": "9.2",
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
                  "value": "8",
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
                },
                {
                  "test": "Albumin",
                  "value": "2.8",
                  "unit": "g/dL",
                  "range": "3.5-5.5",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Total Ig E",
                  "value": "12",
                  "unit": "IU/mL",
                  "range": "<50",
                  "flag": ""
                },
                {
                  "test": "Stool Occult Blood",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "7mo brought to ED with profuse watery diarrhea, lethargy, and dehydration",
          "hpi": "Ethan Reyes — 7mo brought to ED with profuse watery diarrhea, lethargy, and dehydration",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for FTT workup and formula transition — chronic FPIES suspected",
        "diagnosis": "FPIES — Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Failure to thrive",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic diarrhea since formula introduction",
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
          "hr": "142",
          "rr": "34",
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
          "accession": "LAB-408138",
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
                  "value": "9.2",
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
                  "value": "8",
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
                },
                {
                  "test": "Albumin",
                  "value": "2.8",
                  "unit": "g/dL",
                  "range": "3.5-5.5",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Total Ig E",
                  "value": "12",
                  "unit": "IU/mL",
                  "range": "<50",
                  "flag": ""
                },
                {
                  "test": "Stool Occult Blood",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Admitted for FTT workup and formula transition — chronic FPIES suspected",
          "hpi": "Ethan Reyes — Admitted for FTT workup and formula transition — chronic FPIES suspected",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "7-month-old with chronic diarrhea, poor weight gain, and intermittent vomiting on cow's milk formula",
        "diagnosis": "FPIES — Chronic Form"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Failure to thrive",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic diarrhea since formula introduction",
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
          "bp": "N/A",
          "hr": "138",
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
          "accession": "LAB-408138",
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
                  "value": "9.2",
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
                  "value": "8",
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
                },
                {
                  "test": "Albumin",
                  "value": "2.8",
                  "unit": "g/dL",
                  "range": "3.5-5.5",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Total Ig E",
                  "value": "12",
                  "unit": "IU/mL",
                  "range": "<50",
                  "flag": ""
                },
                {
                  "test": "Stool Occult Blood",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "7-month-old with chronic diarrhea, poor weight gain, and intermittent vomiting on cow's milk formula",
          "hpi": "Ethan Reyes presents with 7-month-old with chronic diarrhea, poor weight gain, and intermittent vomiting on cow's milk formula.",
          "exam": "See documentation.",
          "assessment": "FPIES — Chronic Form",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Chronic FPIES follow-up — growth on amino acid formula, plan for food reintroduction",
        "diagnosis": "FPIES — Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Failure to thrive",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic diarrhea since formula introduction",
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
          "bp": "N/A",
          "hr": "128",
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
          "accession": "LAB-408138",
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
                  "value": "9.2",
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
                  "value": "8",
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
                },
                {
                  "test": "Albumin",
                  "value": "2.8",
                  "unit": "g/dL",
                  "range": "3.5-5.5",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Total Ig E",
                  "value": "12",
                  "unit": "IU/mL",
                  "range": "<50",
                  "flag": ""
                },
                {
                  "test": "Stool Occult Blood",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
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
          "cc": "Chronic FPIES follow-up — growth on amino acid formula, plan for food reintroduction",
          "hpi": "Ethan Reyes — Chronic FPIES follow-up — growth on amino acid formula, plan for food reintroduction",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Ethan Reyes",
    "dob": "09/25/2026",
    "age": "0",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-195757",
    "language": "English",
    "race": "Asian",
    "phone": "(630) 555-7932",
    "email": "ethan.reyes@email.com",
    "address": "8579 Dogwood Ln, Kansas City, MO 64108",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Sarah Reyes",
      "phone": "(412) 555-9835",
      "relationship": "Parent"
    },
    "chiefComplaint": "7-month-old with chronic diarrhea, poor weight gain, and intermittent vomiting on cow's milk formula",
    "diagnosis": "FPIES — Chronic Form"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Failure to thrive",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Chronic diarrhea since formula introduction",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [],
  "allergies": [
    {
      "allergen": "Cow's milk (suspected FPIES)",
      "reaction": "Chronic GI symptoms",
      "severity": "Moderate",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "N/A",
      "hr": "138",
      "rr": "34",
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
      "cc": "7-month-old with chronic diarrhea, poor weight gain, and intermittent vomiting on cow's milk formula",
      "hpi": "Ethan Reyes presents with 7-month-old with chronic diarrhea, poor weight gain, and intermittent vomiting on cow's milk formula.",
      "exam": "See documentation.",
      "assessment": "FPIES — Chronic Form",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-408138",
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
              "value": "9.2",
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
              "value": "8",
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
            },
            {
              "test": "Albumin",
              "value": "2.8",
              "unit": "g/dL",
              "range": "3.5-5.5",
              "flag": "L"
            }
          ]
        },
        {
          "name": "ALLERGY & IMMUNOLOGY STUDIES",
          "results": [
            {
              "test": "Total Ig E",
              "value": "12",
              "unit": "IU/mL",
              "range": "<50",
              "flag": ""
            },
            {
              "test": "Stool Occult Blood",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
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
      "Feeding",
      "Cow's milk formula since 3 months"
    ],
    [
      "Key",
      "IgE-negative, skin prick test to milk negative — this is non-IgE mediated"
    ]
  ]
,"references":[
  {
    "id": "FPIES-Consensus-2017",
    "title": "International consensus guidelines for FPIES: executive summary",
    "authors": "Nowak-Wegrzyn A, Chehade M, Groetch ME, et al.",
    "journal": "J Allergy Clin Immunol",
    "year": 2017,
    "doi": "10.1016/j.jaci.2016.12.966",
    "url": "https://www.jacionline.org/article/S0091-6749(17)30153-7/fulltext",
    "openAccess": true,
    "validates": [
      "FPIES criteria: major + minor",
      "Ondansetron first-line (NOT epi)",
      "Chronic FPIES: insidious FTT",
      "Non-IgE, T-cell mediated",
      "60% resolution by age 3-5"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "Chronic FPIES (daily exposure to trigger food) presents differently from acute FPIES: intermittent vomiting, diarrhea, poor weight gain, irritability — mimicking GERD, formula intolerance, or failure to thrive. No single dramatic episode.",
      "In breastfed infants, chronic FPIES can be triggered by maternal dietary proteins passing through breast milk — most commonly cow's milk proteins. Maternal elimination diet is diagnostic and therapeutic.",
      "Diagnosis of chronic FPIES is confirmed by: resolution of symptoms with trigger elimination + symptom recurrence on supervised food challenge."
    ],
    "boardPearls": [
      "Chronic FPIES: daily exposure → gradual symptoms (vomiting, diarrhea, FTT). Contrast with acute FPIES: episodic exposure → dramatic acute vomiting.",
      "Breastfed infant with chronic FPIES: maternal cow's milk elimination diet → assess symptom resolution over 2 weeks.",
      "Formula options for milk/soy FPIES: amino acid-based formula (Neocate, EleCare) — extensively hydrolyzed formulas may still trigger in some FPIES infants.",
      "Chronic FPIES misdiagnosis: GERD (similar GI symptoms), pyloric stenosis (projectile vomiting), FTT workup.",
      "Resolution monitoring: trial food reintroduction at 12–18 months in allergist office after symptom-free period."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Ethan Reyes appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did 7-month-old with chronic diarrhea, poor weight gain, and intermittent vomiting on cow's milk formula start?",
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
        "onset": "'The symptoms started Ethan Reyes presents with 7-month-old with chronic diarrhea, poor weight gain, a.'",
        "character": "'It's 7-month-old with chronic diarrhea, poor weight gain, and intermittent vomiting on cow's milk formula \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take no medications.'",
        "allergies": "'My allergies are Cow's milk (suspected FPIES).'",
        "family": "Non-contributory",
        "social": "Feeding: Cow's milk formula since 3 months  Key: IgE-negative, skin prick test to milk negative \u2014 this is non-IgE mediated"
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
        "phase2": "You've reviewed Ethan Reyes's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};