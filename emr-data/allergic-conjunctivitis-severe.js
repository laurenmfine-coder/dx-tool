/* emr-data/allergic-conjunctivitis-severe.js — Multi-Setting Allergy Case: Vernal Keratoconjunctivitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Aiden Morales",
  "patientHPI": "My eyes have been bothering me for a while, but today I woke up with really sharp pain in my left eye and it feels like something is scratching it every time I blink. The light makes it hurt even worse.",
      "dob": "02/04/2012",
      "age": "14",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-853805",
      "language": "English",
      "race": "Asian",
      "phone": "(630) 555-1653",
      "email": "aiden.morales@email.com",
      "address": "3851 Oak Ave, Louisville, KY 40213",
      "insurance": "Medicaid",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Lisa Morales",
        "phone": "(513) 555-6280",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Grass pollen",
        "reaction": "Rhinitis/conjunctivitis",
        "severity": "Severe",
        "type": "Environmental"
      },
      {
        "allergen": "Tree pollen",
        "reaction": "Rhinitis",
        "severity": "Moderate",
        "type": "Environmental"
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
      "Father: seasonal allergies"
    ],
    "socialHistory": [
      [
        "Season",
        "Worst March-June, improves in fall"
      ],
      [
        "Eye exam",
        "Giant papillae on upper tarsal conjunctiva (cobblestoning)"
      ],
      [
        "Concern",
        "Prior shield ulcer — needs steroid-sparing approach, consider dupilumab or cyclosporine ophthalmic"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "14yo with acute eye pain — shield ulcer on vernal keratoconjunctivitis",
        "diagnosis": "Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Vernal keratoconjunctivitis (3 years)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Atopic dermatitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Shield ulcer right eye (prior)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Olopatadine 0.2%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Prednisolone acetate 1%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "QID (pulse)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Prednisolone acetate 1%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Q2H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Cyclopentolate 1%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/62",
          "hr": "86",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "8/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-216877",
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
                },
                {
                  "test": "Eosinophils",
                  "value": "10",
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
                  "test": "Ige",
                  "value": "1200",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Tear Ig E",
                  "value": "Elevated",
                  "unit": "",
                  "range": "Normal",
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
          "cc": "14yo with acute eye pain — shield ulcer on vernal keratoconjunctivitis",
          "hpi": "Aiden Morales — 14yo with acute eye pain — shield ulcer on vernal keratoconjunctivitis",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for ophthalmology co-management of shield ulcer in VKC",
        "diagnosis": "Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Vernal keratoconjunctivitis (3 years)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Atopic dermatitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Shield ulcer right eye (prior)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Olopatadine 0.2%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Prednisolone acetate 1%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "QID (pulse)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "106/62",
          "hr": "82",
          "rr": "16",
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
          "accession": "LAB-216877",
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
                },
                {
                  "test": "Eosinophils",
                  "value": "10",
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
                  "test": "Ige",
                  "value": "1200",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Tear Ig E",
                  "value": "Elevated",
                  "unit": "",
                  "range": "Normal",
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
          "cc": "Admitted for ophthalmology co-management of shield ulcer in VKC",
          "hpi": "Aiden Morales — Admitted for ophthalmology co-management of shield ulcer in VKC",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia — recurs every spring",
        "diagnosis": "Severe Allergic Conjunctivitis — Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Vernal keratoconjunctivitis (3 years)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Atopic dermatitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Shield ulcer right eye (prior)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Olopatadine 0.2%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Prednisolone acetate 1%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "QID (pulse)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/62",
          "hr": "78",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-216877",
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
                },
                {
                  "test": "Eosinophils",
                  "value": "10",
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
                  "test": "Ige",
                  "value": "1200",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Tear Ig E",
                  "value": "Elevated",
                  "unit": "",
                  "range": "Normal",
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
          "cc": "14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia — recurs every spring",
          "hpi": "Aiden Morales presents with 14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia — recurs every spring.",
          "exam": "See documentation.",
          "assessment": "Severe Allergic Conjunctivitis — Vernal Keratoconjunctivitis",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "VKC follow-up — shield ulcer healed, transition to steroid-sparing agents",
        "diagnosis": "Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Vernal keratoconjunctivitis (3 years)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Atopic dermatitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Shield ulcer right eye (prior)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Cyclosporine 0.05%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Olopatadine 0.2%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/64",
          "hr": "78",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-216877",
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
                },
                {
                  "test": "Eosinophils",
                  "value": "10",
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
                  "test": "Ige",
                  "value": "1200",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Tear Ig E",
                  "value": "Elevated",
                  "unit": "",
                  "range": "Normal",
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
          "cc": "VKC follow-up — shield ulcer healed, transition to steroid-sparing agents",
          "hpi": "Aiden Morales — VKC follow-up — shield ulcer healed, transition to steroid-sparing agents",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Aiden Morales",
    "dob": "02/04/2012",
    "age": "14",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-853805",
    "language": "English",
    "race": "Asian",
    "phone": "(630) 555-5102",
    "email": "aiden.morales@email.com",
    "address": "759 Hickory Rd, Denver, CO 80211",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Lisa Morales",
      "phone": "(212) 555-2496",
      "relationship": "Parent"
    },
    "chiefComplaint": "14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia — recurs every spring",
    "diagnosis": "Severe Allergic Conjunctivitis — Vernal Keratoconjunctivitis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Vernal keratoconjunctivitis (3 years)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Atopic dermatitis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Allergic rhinitis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Shield ulcer right eye (prior)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Olopatadine 0.2%",
      "dose": "",
      "route": "Ophthalmic",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Prednisolone acetate 1%",
      "dose": "",
      "route": "Ophthalmic",
      "frequency": "QID (pulse)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Cetirizine",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Grass pollen",
      "reaction": "Rhinitis/conjunctivitis",
      "severity": "Severe",
      "type": "Environmental"
    },
    {
      "allergen": "Tree pollen",
      "reaction": "Rhinitis",
      "severity": "Moderate",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "108/62",
      "hr": "78",
      "rr": "16",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "6/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Allergist (Consultant)",
      "cc": "14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia — recurs every spring",
      "hpi": "Aiden Morales presents with 14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia — recurs every spring.",
      "exam": "See documentation.",
      "assessment": "Severe Allergic Conjunctivitis — Vernal Keratoconjunctivitis",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-216877",
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
            },
            {
              "test": "Eosinophils",
              "value": "10",
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
              "test": "Ige",
              "value": "1200",
              "unit": "IU/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Tear Ig E",
              "value": "Elevated",
              "unit": "",
              "range": "Normal",
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
    "Father: seasonal allergies"
  ],
  "socialHistory": [
    [
      "Season",
      "Worst March-June, improves in fall"
    ],
    [
      "Eye exam",
      "Giant papillae on upper tarsal conjunctiva (cobblestoning)"
    ],
    [
      "Concern",
      "Prior shield ulcer — needs steroid-sparing approach, consider dupilumab or cyclosporine ophthalmic"
    ]
  ]
,"references":[
  {
    "id": "VKC-Leonardi-2007",
    "title": "Vernal keratoconjunctivitis: severe allergic eye disease with remodeling",
    "authors": "Leonardi A, De Dominicis C, Motterle L.",
    "journal": "Pediatr Allergy Immunol",
    "year": 2007,
    "doi": "10.1111/j.1399-3038.2007.00658.x",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK448118/",
    "openAccess": true,
    "validates": [
      "Giant papillae, shield ulcers, Horner-Trantas dots",
      "Young males, African American/Middle Eastern",
      "Steroid-sparing: tacrolimus/cyclosporine",
      "Shield ulcers → permanent corneal scarring"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "Vernal keratoconjunctivitis (VKC) is the most severe form of allergic conjunctivitis — predominantly in young males, perennial, can cause corneal scarring and vision loss if untreated. Giant papillae ('cobblestone') on tarsal conjunctiva are pathognomonic.",
      "VKC is primarily T-cell and eosinophil-driven (Th2). Treatment escalation: topical antihistamines/mast cell stabilizers → topical cyclosporine → topical tacrolimus → systemic immunosuppression for severe/refractory disease.",
      "Shield ulcers: a serious VKC complication — eosinophilic debris deposits on cornea → sterile ulceration at 10–2 o'clock position. Requires urgent ophthalmology evaluation and aggressive anti-inflammatory treatment."
    ],
    "boardPearls": [
      "AC spectrum: seasonal AC (SAC, mildest) → perennial AC (PAC) → atopic keratoconjunctivitis (AKC, adults with AD) → vernal keratoconjunctivitis (VKC, young males, most severe).",
      "VKC: giant papillae (>1 mm) on tarsal conjunctiva = cobblestone appearance. Eosinophil-driven. Young males. Perennial.",
      "VKC treatment: topical olopatadine (H1 + mast cell stabilizer) → topical cyclosporine → tacrolimus → systemic steroids for severe flares.",
      "Shield ulcer: VKC complication. Eosinophil granule deposits on cornea. Urgent ophthalmology. Risk of corneal scarring/visual loss.",
      "Topical steroids: effective for AC/VKC but risk of IOP elevation and cataract with prolonged use — limit duration, ophthalmology co-management.",
      "Dupilumab-associated conjunctivitis: distinct from VKC. Eosinophilic mechanism. Manage with topical steroids — do NOT stop dupilumab."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Aiden Morales appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did 14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia \u2014 recurs every spring start?",
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
        "onset": "'The symptoms started Aiden Morales presents with 14-year-old with severe bilateral eye itching, teari.'",
        "character": "'It's 14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia \u2014 recurs every spring \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Olopatadine 0.2%; Prednisolone acetate 1%; Cetirizine.'",
        "allergies": "'My allergies are Grass pollen, Tree pollen.'",
        "family": "Father: seasonal allergies",
        "social": "Season: Worst March-June, improves in fall  Eye exam: Giant papillae on upper tarsal conjunctiva (cobblestoning)  Concern: Prior shield ulcer \u2014 needs steroid-sparing approach, consider dupilumab or cyclosporine ophthalmic"
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
        "phase2": "You've reviewed Aiden Morales's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};