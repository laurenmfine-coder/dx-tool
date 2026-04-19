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
  ],
  "references": [
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
    "patientPersona": "The parent appears anxious and concerned about Ethan's poor growth and persistent symptoms. They are very forthcoming with details about feeding patterns and symptoms, having kept careful notes. The parent expresses frustration with previous evaluations and is seeking answers for their child's ongoing issues.",
    "interviewQuestions": [
      "When did you first notice the diarrhea and how has it changed over time?",
      "Can you describe the vomiting episodes - when do they occur and what do they look like?",
      "What type of formula is Ethan currently receiving and when was it introduced?",
      "How has Ethan's weight gain been since birth?",
      "Are there any specific triggers you've noticed that worsen the symptoms?",
      "Has Ethan tried any other formulas or foods?",
      "How many wet diapers does Ethan have per day and what do the stools look like?",
      "Does Ethan seem uncomfortable or in pain during or after feeding?",
      "Have you noticed any skin rashes or other symptoms?",
      "How is Ethan's energy level and developmental progress?",
      "Has anyone in the family had food allergies or digestive problems?",
      "What happens when Ethan doesn't have formula for a period of time?",
      "Have any previous doctors suggested formula changes or special diets?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Can you ask it a different way?",
      "onset": "The diarrhea started about 2 weeks after we switched to cow's milk formula at 3 months old. The vomiting began around the same time but happens less frequently.",
      "character": "The diarrhea is loose, watery, and sometimes mucousy. The vomiting usually happens 1-3 hours after feeding and can be projectile.",
      "location": "The stomach cramping seems to be in his belly area. He pulls his legs up and cries.",
      "severity": "I'd say it's about a 7 out of 10 for how much it affects him. He's not gaining weight like he should and seems uncomfortable most days.",
      "aggravating": "The symptoms definitely get worse after formula feedings, especially larger volumes. Stress or being overtired also seems to make things worse.",
      "relieving": "When we tried stopping formula for a day, he seemed better, but then he was so hungry. Nothing else really helps consistently.",
      "associated": "He's irritable, has trouble sleeping, and his growth has really slowed down. Sometimes he gets a mild rash around his mouth after feeding.",
      "denies": "No fever, no blood in stool that I've seen, no breathing problems, and he doesn't have typical hives or swelling that you'd expect with allergies.",
      "history": "This has been ongoing since we started cow's milk formula. We tried switching brands but it didn't help.",
      "medications": "no medications",
      "allergies": "Cow's milk (suspected FPIES)",
      "family": "No one in our family has food allergies that we know of. My sister had some digestive issues as a baby but outgrew them.",
      "social": "I'm breastfeeding partially but supplementing with formula. We don't smoke and live in a clean environment. No daycare exposures yet."
    },
    "examManeuvers": [
      "General appearance and growth assessment",
      "Abdominal inspection and palpation",
      "Assessment of hydration status",
      "Skin examination for rashes or dermatitis",
      "Oral examination",
      "Lymph node examination",
      "Heart and lung auscultation",
      "Developmental milestone assessment",
      "Weight and length plotting on growth chart",
      "Assessment of muscle tone and subcutaneous fat"
    ],
    "examFindings": {
      "General appearance and growth assessment": "Alert but irritable infant, appears small for age with decreased subcutaneous fat stores",
      "Abdominal inspection and palpation": "Abdomen soft, mildly distended, no masses or organomegaly, mild tenderness to palpation",
      "Assessment of hydration status": "Mucous membranes slightly dry, normal skin turgor, adequate urine output reported",
      "Skin examination for rashes or dermatitis": "Mild perioral erythema, no eczematous changes, no urticaria",
      "Oral examination": "Normal oral cavity, no thrush or lesions",
      "Lymph node examination": "No significant lymphadenopathy",
      "Heart and lung auscultation": "Regular rate and rhythm, clear lung fields bilaterally",
      "Developmental milestone assessment": "Appropriate for age but may be slightly delayed in gross motor skills",
      "Weight and length plotting on growth chart": "Weight below 10th percentile, crossing growth percentiles downward since 3 months",
      "Assessment of muscle tone and subcutaneous fat": "Normal tone but decreased muscle mass and subcutaneous fat consistent with failure to thrive"
    },
    "ddxTargets": [
      "Food Protein-Induced Enterocolitis Syndrome (FPIES) (correct diagnosis)",
      "Cow's milk protein allergy (IgE-mediated)",
      "Lactose intolerance",
      "Gastroenteritis with prolonged course",
      "Malabsorption syndrome",
      "Gastroesophageal reflux disease",
      "Inflammatory bowel disease"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on typical IgE-mediated milk allergy when negative allergy tests might falsely reassure, missing non-IgE mediated FPIES",
      "prematureClosure": "May quickly diagnose simple lactose intolerance or reflux without considering the delayed, non-IgE immune response pattern of FPIES",
      "availabilityBias": "FPIES is less commonly encountered than typical milk allergy, leading to consideration of more familiar diagnoses first"
    },
    "coachPrompts": {
      "phase2": "Consider the timing of symptom onset in relation to formula introduction. What types of immune-mediated reactions to food proteins exist beyond the typical IgE-mediated responses? How might negative standard allergy tests affect your diagnostic thinking?",
      "phase5": "The growth pattern and symptom timeline are key here. With negative IgE testing but clear temporal relationship to cow's milk formula, what non-IgE mediated food reactions should you consider? How does the delayed presentation fit with different pathophysiologic mechanisms?",
      "finalDebrief": "FPIES represents a non-IgE mediated food protein reaction that typically presents with delayed GI symptoms including vomiting, diarrhea, and failure to thrive. The negative skin tests and IgE levels are characteristic because this involves T-cell mediated immunity rather than IgE antibodies. Recognition is important because standard allergy testing will be negative, and management involves strict avoidance of the trigger protein with gradual reintroduction trials under medical supervision."
    }
  }
};
