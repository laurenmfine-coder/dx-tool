
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
      "pharmacy": "Walgreens \u2014 University Blvd",
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
        "Prior shield ulcer \u2014 needs steroid-sparing approach, consider dupilumab or cyclosporine ophthalmic"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "14yo with acute eye pain \u2014 shield ulcer on vernal keratoconjunctivitis",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "14yo with acute eye pain \u2014 shield ulcer on vernal keratoconjunctivitis",
          "hpi": "Aiden Morales \u2014 14yo with acute eye pain \u2014 shield ulcer on vernal keratoconjunctivitis",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "hpi": "Aiden Morales \u2014 Admitted for ophthalmology co-management of shield ulcer in VKC",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia \u2014 recurs every spring",
        "diagnosis": "Severe Allergic Conjunctivitis \u2014 Vernal Keratoconjunctivitis"
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia \u2014 recurs every spring",
          "hpi": "Aiden Morales presents with 14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia \u2014 recurs every spring.",
          "exam": "See documentation.",
          "assessment": "Severe Allergic Conjunctivitis \u2014 Vernal Keratoconjunctivitis",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "VKC follow-up \u2014 shield ulcer healed, transition to steroid-sparing agents",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "VKC follow-up \u2014 shield ulcer healed, transition to steroid-sparing agents",
          "hpi": "Aiden Morales \u2014 VKC follow-up \u2014 shield ulcer healed, transition to steroid-sparing agents",
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
    "pharmacy": "Walgreens \u2014 University Blvd",
    "emergencyContact": {
      "name": "Lisa Morales",
      "phone": "(212) 555-2496",
      "relationship": "Parent"
    },
    "chiefComplaint": "14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia \u2014 recurs every spring",
    "diagnosis": "Severe Allergic Conjunctivitis \u2014 Vernal Keratoconjunctivitis"
  },
  "problems": [
    {
      "problem": "Vernal keratoconjunctivitis (VKC) \u2014 severe allergic eye disease",
      "icd": "H10.13",
      "onset": "2022",
      "status": "Active",
      "notes": "Giant cobblestone papillae under upper lid. Teenage male \u2014 peak demographic. Perennial, not seasonal."
    },
    {
      "problem": "Corneal shield ulcer \u2014 present on slit lamp",
      "icd": "H16.009",
      "onset": "2024",
      "status": "Active",
      "notes": "Whitish plaque superior cornea from papillae trauma. Urgent ophthalmology referral."
    },
    {
      "problem": "Steroid-induced IOP risk \u2014 monitoring required",
      "icd": "H40.09",
      "onset": "2023",
      "status": "Active",
      "notes": "Long-term topical steroid use raises intraocular pressure. Annual IOP monitoring."
    }
  ],
  "medications": [
    {
      "name": "Olopatadine 0.7% (Pataday Once Daily)",
      "sig": "1 drop each eye once daily \u2014 H1 antagonist + mast cell stabilizer",
      "prescriber": "Ophthalmology/Allergy",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Loteprednol 0.5% ophthalmic \u2014 pulsed steroid",
      "sig": "1 drop each eye QID x5 days \u2014 loteprednol has lower IOP-raising potential than prednisolone",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 short course"
    },
    {
      "name": "Tacrolimus 0.03% ophthalmic (compounded) \u2014 steroid-sparing",
      "sig": "1 drop each eye BID \u2014 calcineurin inhibitor, reduces steroid dependence in VKC",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Cool compresses + preservative-free artificial tears PRN",
      "sig": "Cooling reduces mast cell degranulation. Frequent use throughout day.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 0,
      "status": "Active"
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
      "temp": "36.8\u00b0C",
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
      "cc": "14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia \u2014 recurs every spring",
      "hpi": "Aiden Morales presents with 14-year-old with severe bilateral eye itching, tearing, mucus discharge, and photophobia \u2014 recurs every spring.",
      "exam": "See documentation.",
      "assessment": "Severe Allergic Conjunctivitis \u2014 Vernal Keratoconjunctivitis",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Allergy/Ocular Workup",
      "results": [
        {
          "test": "Total IgE",
          "value": "420",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "Dust mite specific IgE",
          "value": "8.4",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Eosinophil count",
          "value": "0.8",
          "unit": "K/\u03bcL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "IOP right eye",
          "value": "16",
          "unit": "mmHg",
          "ref": "10-21",
          "flag": ""
        },
        {
          "test": "IOP left eye",
          "value": "17",
          "unit": "mmHg",
          "ref": "10-21",
          "flag": ""
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
      "Prior shield ulcer \u2014 needs steroid-sparing approach, consider dupilumab or cyclosporine ophthalmic"
    ]
  ],
  "references": [
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
        "Shield ulcers \u2192 permanent corneal scarring"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "Vernal keratoconjunctivitis (VKC) is the most severe form of allergic conjunctivitis \u2014 predominantly in young males, perennial, can cause corneal scarring and vision loss if untreated. Giant papillae ('cobblestone') on tarsal conjunctiva are pathognomonic.",
      "VKC is primarily T-cell and eosinophil-driven (Th2). Treatment escalation: topical antihistamines/mast cell stabilizers \u2192 topical cyclosporine \u2192 topical tacrolimus \u2192 systemic immunosuppression for severe/refractory disease.",
      "Shield ulcers: a serious VKC complication \u2014 eosinophilic debris deposits on cornea \u2192 sterile ulceration at 10\u20132 o'clock position. Requires urgent ophthalmology evaluation and aggressive anti-inflammatory treatment."
    ],
    "boardPearls": [
      "AC spectrum: seasonal AC (SAC, mildest) \u2192 perennial AC (PAC) \u2192 atopic keratoconjunctivitis (AKC, adults with AD) \u2192 vernal keratoconjunctivitis (VKC, young males, most severe).",
      "VKC: giant papillae (>1 mm) on tarsal conjunctiva = cobblestone appearance. Eosinophil-driven. Young males. Perennial.",
      "VKC treatment: topical olopatadine (H1 + mast cell stabilizer) \u2192 topical cyclosporine \u2192 tacrolimus \u2192 systemic steroids for severe flares.",
      "Shield ulcer: VKC complication. Eosinophil granule deposits on cornea. Urgent ophthalmology. Risk of corneal scarring/visual loss.",
      "Topical steroids: effective for AC/VKC but risk of IOP elevation and cataract with prolonged use \u2014 limit duration, ophthalmology co-management.",
      "Dupilumab-associated conjunctivitis: distinct from VKC. Eosinophilic mechanism. Manage with topical steroids \u2014 do NOT stop dupilumab."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Aiden is anxious and frustrated about his recurring eye symptoms, frequently rubbing his eyes despite being told not to. He appears distressed and worried about missing school activities, and is forthcoming about his symptoms but sometimes downplays the severity to avoid more restrictions on outdoor activities.",
    "interviewQuestions": [
      "When did your current eye symptoms start and how do they compare to previous episodes?",
      "Can you describe exactly what your eyes feel like right now?",
      "Which eye bothers you more, or are they both equally affected?",
      "On a scale of 1-10, how severe is the itching and how much does it interfere with school?",
      "What makes your eye symptoms worse - being outside, certain times of day, or specific activities?",
      "What treatments have you tried and which ones help the most?",
      "Besides the itching, what other eye symptoms do you have?",
      "Have you had any eye pain, vision changes, or felt like something was scratching your eye?",
      "Do you remember having any eye problems last year around this same time?",
      "What medications are you currently taking for your eyes and allergies?",
      "Do you have any known allergies that trigger these symptoms?",
      "Does anyone in your family have similar eye or allergy problems?",
      "Do you play sports or spend a lot of time outdoors, especially in spring?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean. Can you ask that differently? My eyes just really itch a lot.",
      "onset": "It started about 2 weeks ago when it got warmer outside. This happens every spring around March and gets really bad through June.",
      "character": "My eyes itch so badly I can't stop rubbing them. They feel like there's sand in them and they water constantly with thick, stringy discharge.",
      "location": "Both eyes are affected, but maybe my right eye is slightly worse since I had that ulcer problem before.",
      "severity": "The itching is like an 8 out of 10. I can't concentrate in class and I have to keep my eyes closed sometimes because bright lights hurt.",
      "aggravating": "Being outside makes it much worse, especially on windy days or when I play soccer. Bright sunlight really bothers me too.",
      "relieving": "The eye drops help some, and staying inside with air conditioning. Cool compresses feel good but don't last long.",
      "associated": "I have a lot of watery discharge that's thick and stringy. My nose is also stuffy and itchy, and my eczema is flaring up on my arms.",
      "denies": "No fever, no vision changes, no eye pain exactly - just really uncomfortable. No discharge that looks infected or yellow-green.",
      "history": "This is my fourth spring with these symptoms. Three years ago was the first time, and last year I got that ulcer in my right eye that scared everyone.",
      "medications": "Olopatadine 0.2%; Prednisolone acetate 1%; Cetirizine",
      "allergies": "Grass pollen, Tree pollen",
      "family": "My dad gets watery eyes and sneezes a lot in spring too, but not as bad as mine.",
      "social": "I'm in 8th grade and play soccer. I don't smoke or drink. I really want to keep playing sports but my eyes make it hard to see the ball sometimes."
    },
    "examManeuvers": [
      "Visual acuity testing both eyes",
      "External eye inspection for swelling and erythema",
      "Upper eyelid eversion to examine tarsal conjunctiva",
      "Lower conjunctival examination",
      "Corneal examination with fluorescein staining",
      "Pupillary light reflex testing",
      "Extraocular movement assessment",
      "Slit lamp examination if available",
      "Nasal examination for concurrent allergic rhinitis",
      "Skin examination for atopic dermatitis"
    ],
    "examFindings": {
      "Visual acuity testing both eyes": "20/25 both eyes, slightly reduced from baseline due to tearing and discharge",
      "External eye inspection for swelling and erythema": "Moderate periorbital edema and erythema bilaterally, more pronounced in morning",
      "Upper eyelid eversion to examine tarsal conjunctiva": "Classic giant papillae with cobblestone appearance on upper tarsal conjunctiva bilaterally",
      "Lower conjunctival examination": "Mild injection and chemosis of lower conjunctiva, less prominent than upper",
      "Corneal examination with fluorescein staining": "No active epithelial defects, but mild punctate staining superiorly, history of shield ulcer OD",
      "Pupillary light reflex testing": "Normal and symmetric, though patient exhibits photophobia",
      "Extraocular movement assessment": "Full range of motion bilaterally without pain",
      "Slit lamp examination if available": "Thick, ropey mucus discharge, giant papillae visible, no active ulceration",
      "Nasal examination for concurrent allergic rhinitis": "Pale, boggy nasal turbinates with clear discharge",
      "Skin examination for atopic dermatitis": "Active eczematous patches on antecubital fossae, typical atopic distribution"
    },
    "ddxTargets": [
      "Vernal keratoconjunctivitis \u2014 giant papillae + shield ulcer risk (correct)",
      "Seasonal allergic conjunctivitis \u2014 seasonal, no giant papillae, less severe",
      "Atopic keratoconjunctivitis \u2014 older adults, associated atopic dermatitis",
      "Bacterial conjunctivitis \u2014 purulent discharge, acute, not eosinophilic",
      "Giant papillary conjunctivitis \u2014 contact lens-associated, not IgE-mediated",
      "HSV keratitis \u2014 dendritic ulcer on fluorescein, different morphology"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'pink eye' or simple allergic conjunctivitis given the seasonal pattern and known allergies, potentially missing the severity and chronicity of vernal disease",
      "prematureClosure": "May stop at allergic conjunctivitis diagnosis without recognizing the giant papillae and risk for shield ulcer formation that defines vernal disease",
      "availabilityBias": "Common allergic conjunctivitis is much more frequently seen than vernal keratoconjunctivitis, leading to under-recognition of this more severe variant"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. You've identified the seasonal allergic component - now think about what key physical finding would distinguish between simple allergic conjunctivitis and more severe variants like vernal disease. What specific examination maneuver is critical here?",
      "phase5": "Excellent work identifying the giant papillae. Given this finding plus the history of shield ulcer, you're dealing with vernal keratoconjunctivitis. Why is this distinction from simple allergic conjunctivitis clinically important, and what does this mean for treatment approach?",
      "finalDebrief": "This case illustrates how the same basic presentation - seasonal eye allergies - can range from mild allergic conjunctivitis to severe vernal disease. The giant papillae on upper lid eversion was your key differentiating finding. Remember that vernal patients need careful steroid management due to ulcer risk and may require steroid-sparing agents like cyclosporine or biologics.",
      "final": "Diagnosis: vernal keratoconjunctivitis (VKC). Key learning: (1) VKC spectrum: seasonal AC (mild) \u2192 perennial AC \u2192 VKC (severe, sight-threatening). VKC is predominantly young males in tropical climates with atopy. Perennial \u2014 not seasonal. (2) Giant cobblestone papillae under upper eyelid are pathognomonic \u2014 must evert the upper lid to see. (3) Shield ulcer: papillae mechanically traumatize the cornea \u2192 epithelial breakdown \u2192 whitish plaque (fibrin/mucus) in superior cornea. Risk of permanent scarring \u2014 urgent ophthalmology. (4) Topical steroid caution: effective for flares but steroid-induced glaucoma and cataracts risk with prolonged use. Loteprednol preferred over prednisolone. Transition to tacrolimus for maintenance. (5) Allergen immunotherapy is effective when a specific trigger is identified \u2014 reduces disease severity and steroid dependence over time."
    }
  },
  "meta": {
    "diagnosis": "Vernal Keratoconjunctivitis \u2014 Giant Cobblestone Papillae, Shield Ulcer Risk, Urgent Ophthalmology Referral",
    "caseId": "allergic-conjunctivitis-severe"
  }
};
