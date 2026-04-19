/* emr-data/peanut-allergy-anaphylaxis.js — Multi-Setting Allergy Case: Peanut Allergy Anaphylaxis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Jayden Park",
      "patientHPI": "My son was at a birthday party and after eating some cake, his face started swelling up and he began throwing up. Then he started having trouble breathing with wheezing sounds, which terrified me.",
      "dob": "03/18/2018",
      "age": "8",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-795383",
      "language": "English",
      "race": "White",
      "phone": "(502) 555-9044",
      "email": "jayden.park@email.com",
      "address": "6080 Sycamore Dr, Memphis, TN 38122",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Jennifer Park",
        "phone": "(620) 555-4971",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Peanut",
        "reaction": "Anaphylaxis",
        "severity": "Severe",
        "type": "Food"
      },
      {
        "allergen": "Tree nuts",
        "reaction": "Hives",
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
      "Father: asthma"
    ],
    "socialHistory": [
      [
        "Exposure",
        "Ate cake at birthday party — unknown peanut ingredient"
      ],
      [
        "EpiPen",
        "Mother gave EpiPen Jr in the car en route"
      ],
      [
        "Age-appropriate",
        "Third grade, carries EpiPen at school"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "8-year-old with facial swelling, vomiting, and wheezing after birthday party",
        "diagnosis": "Peanut Allergy — Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Known peanut allergy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (mild persistent)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone",
          "dose": "44mcg",
          "route": "INH",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Albuterol",
          "dose": "90mcg",
          "route": "INH",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "85/52",
          "hr": "142",
          "rr": "32",
          "temp": "37.0°C",
          "spo2": "91%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-131092",
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
                  "test": "Tryptase",
                  "value": "pending",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
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
          "cc": "8-year-old with facial swelling, vomiting, and wheezing after birthday party",
          "hpi": "Jayden Park presents with 8-year-old with facial swelling, vomiting, and wheezing after birthday party.",
          "exam": "See documentation.",
          "assessment": "Peanut Allergy — Anaphylaxis",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "8yo admitted for biphasic reaction monitoring after peanut anaphylaxis",
        "diagnosis": "Peanut Allergy Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Known peanut allergy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (mild persistent)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone",
          "dose": "44mcg",
          "route": "INH",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Albuterol",
          "dose": "90mcg",
          "route": "INH",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Diphenhydramine",
          "dose": "12.5mg",
          "route": "IV",
          "frequency": "Q6H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Methylprednisolone",
          "dose": "1mg/kg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "92/58",
          "hr": "108",
          "rr": "22",
          "temp": "36.8°C",
          "spo2": "97%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-131092",
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
                  "test": "Tryptase",
                  "value": "pending",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
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
          "cc": "8yo admitted for biphasic reaction monitoring after peanut anaphylaxis",
          "hpi": "Jayden Park — 8yo admitted for biphasic reaction monitoring after peanut anaphylaxis",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — peanut allergy confirmation, tree nut cross-reactivity, school action plan",
        "diagnosis": "Peanut Allergy Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Known peanut allergy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (mild persistent)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone",
          "dose": "44mcg",
          "route": "INH",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Albuterol",
          "dose": "90mcg",
          "route": "INH",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "102/62",
          "hr": "86",
          "rr": "18",
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
          "accession": "LAB-131092",
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
                  "test": "Tryptase",
                  "value": "pending",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
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
          "cc": "A/I consult — peanut allergy confirmation, tree nut cross-reactivity, school action plan",
          "hpi": "Jayden Park — A/I consult — peanut allergy confirmation, tree nut cross-reactivity, school action plan",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Peanut allergy follow-up — discuss OIT candidacy, update action plan for school",
        "diagnosis": "Peanut Allergy Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Known peanut allergy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (mild persistent)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "EpiPen Jr",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "PRN x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/66",
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
          "accession": "LAB-131092",
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
                  "test": "Tryptase",
                  "value": "pending",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
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
          "cc": "Peanut allergy follow-up — discuss OIT candidacy, update action plan for school",
          "hpi": "Jayden Park — Peanut allergy follow-up — discuss OIT candidacy, update action plan for school",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Jayden Park",
    "dob": "03/18/2018",
    "age": "8",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-795383",
    "language": "English",
    "race": "White",
    "phone": "(503) 555-7161",
    "email": "jayden.park@email.com",
    "address": "3047 Oak Ave, Minneapolis, MN 55405",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Jennifer Park",
      "phone": "(415) 555-7437",
      "relationship": "Parent"
    },
    "chiefComplaint": "8-year-old with facial swelling, vomiting, and wheezing after birthday party",
    "diagnosis": "Peanut Allergy — Anaphylaxis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Known peanut allergy",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Asthma (mild persistent)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Fluticasone",
      "dose": "44mcg",
      "route": "INH",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Albuterol",
      "dose": "90mcg",
      "route": "INH",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Peanut",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "type": "Food"
    },
    {
      "allergen": "Tree nuts",
      "reaction": "Hives",
      "severity": "Moderate",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "85/52",
      "hr": "142",
      "rr": "32",
      "temp": "37.0°C",
      "spo2": "91%",
      "pain": "7/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "8-year-old with facial swelling, vomiting, and wheezing after birthday party",
      "hpi": "Jayden Park presents with 8-year-old with facial swelling, vomiting, and wheezing after birthday party.",
      "exam": "See documentation.",
      "assessment": "Peanut Allergy — Anaphylaxis",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-131092",
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
              "test": "Tryptase",
              "value": "pending",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": ""
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
    "Father: asthma"
  ],
  "socialHistory": [
    [
      "Exposure",
      "Ate cake at birthday party — unknown peanut ingredient"
    ],
    [
      "EpiPen",
      "Mother gave EpiPen Jr in the car en route"
    ],
    [
      "Age-appropriate",
      "Third grade, carries EpiPen at school"
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
      "Peanut allergy is the leading cause of fatal food anaphylaxis. Ara h 2 (2S albumin storage protein) is the most clinically relevant component — heat-stable, resistant to digestion, strongly predicts systemic reactions.",
      "Early peanut introduction (LEAP trial 2015): peanut consumption starting at 4–11 months in high-risk infants (severe eczema or egg allergy) reduces peanut allergy by 80% at age 5. NIAID 2017 guidelines recommend early introduction.",
      "Palforzia (AR101): FDA-approved peanut OIT for ages 4–17. Goal: desensitization to accidental exposure (maintenance 300 mg/day). NOT a cure — must dose daily. ~5% develop EoE on peanut OIT — screen at every visit."
    ],
    "boardPearls": [
      "Ara h 2 sIgE ≥0.35 kUA/L: >95% PPV for clinical peanut allergy — can avoid OFC at this threshold.",
      "Ara h 8 (PR-10, birch cross-reactive): oral allergy syndrome only — no systemic risk, no EpiPen needed.",
      "LEAP trial: early peanut at 4–11 months → 80% reduction in peanut allergy. NIAID 2017: recommend for high-risk infants.",
      "Peanut is a legume — NOT a tree nut. Peanut allergy and tree nut allergy are independent (cross-reactivity via storage proteins, not botanical relationship).",
      "Palforzia: 100 mg/day up-dosing → 300 mg/day maintenance. Hold for illness, fever, exercise, menses (lower reaction threshold).",
      "Fatal food anaphylaxis risk factors: asthma (highest risk), prior severe reaction, delayed epinephrine, age 10–25, peanut or tree nut allergen."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Jayden is anxious and clinging to his mother, speaking in short sentences between episodes of wheezing. He appears frightened by his swollen face and difficulty breathing, requiring gentle reassurance and simple questions.",
    "interviewQuestions": [
      "Can you tell me what happened at the birthday party?",
      "What did you eat or drink at the party?",
      "When did you first notice something was wrong?",
      "How did your face feel when it started swelling?",
      "Are you having trouble breathing or does your chest feel tight?",
      "Did you throw up? When did that start?",
      "Does your throat feel funny or scratchy?",
      "Have you ever felt like this before?",
      "Did mommy give you your EpiPen? When?",
      "What medicines do you usually take?",
      "What foods are you allergic to?",
      "Does your tummy hurt or feel itchy anywhere?",
      "Are you feeling dizzy or like you might faint?"
    ],
    "patientResponses": {
      "default": "I don't know... mommy, what does that mean?",
      "onset": "Right after I ate the chocolate cake at Tommy's party... maybe like 10 minutes? My face started feeling tingly and then it got puffy",
      "character": "My chest feels really tight and it's hard to breathe... like when I have my asthma but way worse",
      "location": "My face is all swollen, especially around my eyes and lips, and my throat feels scratchy and tight",
      "severity": "It's really scary... like a 9. I can't breathe good and I threw up twice in the car",
      "aggravating": "It got worse really fast after I ate the cake, and when I try to take deep breaths it's harder",
      "relieving": "Mommy gave me my EpiPen in the car and it helped a little bit, but I still feel bad",
      "associated": "I threw up twice, my tummy hurts, and I feel really itchy all over, especially my arms",
      "denies": "My chest doesn't hurt like sharp pain, just tight... I don't feel dizzy right now",
      "history": "I had something like this before when I accidentally ate a peanut butter cookie at school last year",
      "medications": "Fluticasone; Albuterol",
      "allergies": "Peanut, Tree nuts",
      "family": "Mommy gets sneezy from flowers and daddy has asthma like me",
      "social": "I'm in third grade and I always carry my EpiPen at school. The teacher knows about my allergies"
    },
    "examManeuvers": [
      "Inspect face and neck for angioedema",
      "Examine oral cavity and throat",
      "Auscultate lungs bilaterally",
      "Inspect skin for urticaria or rash",
      "Assess respiratory effort and accessory muscle use",
      "Palpate lymph nodes",
      "Auscultate heart sounds",
      "Assess mental status and anxiety level",
      "Check capillary refill",
      "Inspect conjunctiva and periorbital area"
    ],
    "examFindings": {
      "Inspect face and neck for angioedema": "Significant periorbital edema and lip swelling, mild neck swelling",
      "Examine oral cavity and throat": "Tongue edema present, throat appears erythematous, no visible obstruction",
      "Auscultate lungs bilaterally": "Diffuse expiratory wheeze bilaterally, decreased air movement in lower lobes",
      "Inspect skin for urticaria or rash": "Multiple raised urticarial lesions on arms and trunk, some confluent",
      "Assess respiratory effort and accessory muscle use": "Moderate respiratory distress with supraclavicular retractions",
      "Palpate lymph nodes": "No significant lymphadenopathy palpated",
      "Auscultate heart sounds": "Tachycardic but regular rhythm, no murmurs appreciated",
      "Assess mental status and anxiety level": "Alert and oriented but anxious, clinging to parent",
      "Check capillary refill": "Capillary refill 2-3 seconds, slightly prolonged",
      "Inspect conjunctiva and periorbital area": "Conjunctival injection with significant periorbital swelling"
    },
    "ddxTargets": [
      "Anaphylaxis (correct diagnosis)",
      "Severe allergic reaction without anaphylaxis",
      "Acute asthma exacerbation",
      "Angioedema from ACE inhibitor",
      "Hereditary angioedema",
      "Viral upper respiratory infection with wheeze",
      "Food poisoning with dehydration"
    ],
    "biasFlags": {
      "anchoring": "Don't anchor on the known asthma history and miss the systemic allergic reaction - the wheeze could be from bronchospasm due to anaphylaxis",
      "prematureClosure": "Having a known peanut allergy and EpiPen use might make you quickly assume anaphylaxis without fully assessing the severity and systemic involvement",
      "availabilityBias": "Recent cases of simple food allergies or asthma exacerbations might bias away from recognizing this as true anaphylaxis requiring immediate treatment"
    },
    "coachPrompts": {
      "phase2": "You've identified several possibilities including anaphylaxis. What specific historical features would help you distinguish between a severe allergic reaction and true anaphylaxis? What systems need to be involved?",
      "phase5": "Now that you've completed your assessment, let's think systematically about this presentation. You found facial swelling, urticaria, wheezing, vomiting, and hypotension. How do these findings help narrow your differential? What criteria define anaphylaxis?",
      "finalDebrief": "This case demonstrates classic anaphylaxis with multi-system involvement: skin (urticaria, angioedema), respiratory (wheeze, dyspnea), GI (vomiting), and cardiovascular (hypotension, tachycardia). The key learning point is recognizing that anaphylaxis requires involvement of two or more organ systems. How did your thinking evolve from considering simple allergic reaction to recognizing anaphylaxis?"
    }
  }
};
