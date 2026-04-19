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
},
  "guided": {
    "supported": true,
    "patientPersona": "Aiden appears frustrated and somewhat withdrawn, rubbing his eyes frequently despite knowing it worsens symptoms. He's cooperative but clearly uncomfortable, squinting in normal lighting and expressing worry about missing more school as spring approaches.",
    "interviewQuestions": [
        "When did your eye symptoms first start this episode?",
        "Can you describe exactly what your eyes feel like right now?",
        "Is the itching worse in both eyes or one eye more than the other?",
        "On a scale of 1-10, how severe is the itching and discomfort?",
        "What makes your eye symptoms worse?",
        "What have you tried that helps your symptoms?",
        "Are you having any vision problems or eye pain?",
        "Do you have any other symptoms like sneezing, runny nose, or skin problems?",
        "Have you had eye problems like this before?",
        "What eye medications are you currently using?",
        "Do you have any known allergies?",
        "Does anyone in your family have allergies or eye problems?",
        "Have you noticed if certain seasons or activities make this worse?"
    ],
    "patientResponses": {
        "default": "I'm not sure what you mean. My eyes just really itch and bother me a lot.",
        "onset": "This flare-up started about two weeks ago when it started getting warmer outside. It's been getting worse every day.",
        "character": "It's this really intense itching that I can barely stand, and my eyes water constantly. There's thick, stringy mucus that makes it hard to open my eyes in the morning.",
        "location": "Both eyes are affected, but my right eye seems a little worse. The itching is mainly under my upper eyelids.",
        "severity": "The itching is easily a 9 out of 10. It's so bad I can't concentrate in school and I have trouble sleeping.",
        "aggravating": "Being outside makes it much worse, especially on windy days. Bright lights really bother me too. Rubbing makes the itching worse but I can't help it.",
        "relieving": "The eye drops help some, but not for very long. Cool compresses give me a little relief. Being indoors with air conditioning is better.",
        "associated": "My nose is stuffy and runny, and I've been sneezing a lot. The skin around my eyes and on my arms is getting dry and itchy too.",
        "denies": "No fever, no discharge that looks infected or yellow-green, no severe eye pain, no headache, no nausea.",
        "history": "This happens every spring for the past few years, but this year seems worse. I had a serious eye problem before - something called a shield ulcer.",
        "medications": "Olopatadine 0.2%; Prednisolone acetate 1%; Cetirizine",
        "allergies": "Grass pollen, Tree pollen",
        "family": "My dad gets really bad seasonal allergies too, especially in spring and early summer.",
        "social": "I'm in 9th grade. I don't smoke or drink. I play soccer but haven't been able to practice much because being outside makes my eyes so much worse."
    },
    "examManeuvers": [
        "Visual acuity assessment",
        "External eye inspection",
        "Eyelid eversion to examine tarsal conjunctiva",
        "Conjunctival examination",
        "Corneal examination with penlight",
        "Pupillary response testing",
        "Extraocular movement assessment",
        "Slit-lamp examination if available",
        "Preauricular lymph node palpation",
        "Nasal examination"
    ],
    "examFindings": {
        "Visual acuity assessment": "20/25 bilateral, slightly decreased from baseline due to tearing and discharge",
        "External eye inspection": "Bilateral periorbital edema and erythema, thick ropy mucoid discharge, patient squinting and photophobic",
        "Eyelid eversion to examine tarsal conjunctiva": "Classic giant papillae (cobblestoning) on upper tarsal conjunctiva bilaterally, more prominent on right",
        "Conjunctival examination": "Bulbar conjunctiva shows injection and chemosis, milky appearance consistent with allergic inflammation",
        "Corneal examination with penlight": "Corneas clear, no epithelial defects noted, no shield ulcer currently present",
        "Pupillary response testing": "Pupils equal, round, reactive to light and accommodation bilaterally",
        "Extraocular movement assessment": "Full extraocular movements, no restriction or pain with movement",
        "Slit-lamp examination if available": "Confirms giant papillae, Trantas dots visible at superior limbus, no corneal involvement currently",
        "Preauricular lymph node palpation": "No lymphadenopathy present",
        "Nasal examination": "Nasal mucosa pale and boggy, consistent with allergic rhinitis"
    },
    "ddxTargets": [
        "Vernal keratoconjunctivitis (correct diagnosis)",
        "Atopic keratoconjunctivitis",
        "Seasonal allergic conjunctivitis",
        "Infectious conjunctivitis with secondary allergic component",
        "Stevens-Johnson syndrome/Toxic epidermal necrolysis",
        "Contact dermatitis with conjunctival involvement",
        "Dry eye syndrome"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on 'allergic conjunctivitis' without recognizing the severity and specific features of vernal keratoconjunctivitis, potentially leading to inadequate treatment",
        "prematureClosure": "May stop differential consideration after confirming seasonal pattern and allergy history, missing the need for specialized ophthalmologic care due to VKC severity",
        "availabilityBias": "Common seasonal allergies are frequently seen, may not recognize this as the more severe vernal keratoconjunctivitis requiring different management approach"
    },
    "coachPrompts": {
        "phase2": "Good start on your differential. I notice you're considering allergic causes given the seasonal pattern. What specific features in the history might help you distinguish between simple seasonal allergic conjunctivitis and more severe forms like vernal keratoconjunctivitis? What questions about his past eye problems might be crucial?",
        "phase5": "Excellent examination technique. The giant papillae you found on eversion are a key finding. How does this physical finding, combined with his age, gender, history of shield ulcer, and current symptom severity, help narrow your differential? What are the implications for treatment approach?",
        "finalDebrief": "This case illustrates the importance of recognizing vernal keratoconjunctivitis as distinct from simple allergic conjunctivitis. The giant papillae, severe symptoms, young male demographic, and history of shield ulcer were key differentiating features. How does this diagnosis change your management approach compared to typical seasonal allergies? Consider the need for ophthalmology referral and steroid-sparing agents."
    }
}
};