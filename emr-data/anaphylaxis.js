/* emr-data/anaphylaxis.js — Multi-Setting Allergy Case: Anaphylaxis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Priya Sharma",
      "patientHPI": "I was eating at a restaurant and accidentally got some shrimp in my food, and about twenty minutes later my lips started swelling, I broke out in hives all over, my throat feels tight, and I'm getting dizzy. I had an emergency pen but it expired, so the ambulance people had to give me a shot.",
      "dob": "08/03/1998",
      "age": "28",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-154379",
      "language": "English",
      "race": "Multiracial",
      "phone": "(614) 555-9254",
      "email": "priya.sharma@email.com",
      "address": "610 S Halsted St, Cleveland, OH 44108",
      "insurance": "Medicaid",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Michael Sharma",
        "phone": "(414) 555-1710",
        "relationship": "Spouse"
      },
      "chiefComplaint": "Lip/tongue swelling, diffuse hives, throat tightness after eating shrimp",
      "diagnosis": "Anaphylaxis"
    },
    "allergies": [
      {
        "allergen": "Shellfish",
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
      },
      {
        "name": "COVID-19",
        "date": "09/2025",
        "lot": "CV-25",
        "site": "Right Deltoid"
      }
    ],
    "familyHistory": [
      "Mother: seasonal allergies",
      "Brother: peanut allergy"
    ],
    "socialHistory": [
      [
        "Tobacco",
        "Never"
      ],
      [
        "Alcohol",
        "Social"
      ],
      [
        "Occupation",
        "Software developer"
      ],
      [
        "EpiPen",
        "Had EpiPen but expired 6 months ago"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "cc": "Lip/tongue swelling, diffuse hives, throat tightness after eating shrimp",
      "dx": "Anaphylaxis",
      "problems": [
        "Known shellfish allergy",
        "Asthma (mild persistent)"
      ],
      "meds": [
        {
          "name": "Albuterol",
          "dose": "90mcg",
          "route": "INH",
          "freq": "PRN"
        },
        {
          "name": "Combined OCP",
          "dose": "",
          "route": "PO",
          "freq": "Daily"
        }
      ],
      "vitals": {
        "bp": "82/48",
        "hr": "132",
        "rr": "28",
        "temp": "36.8°C",
        "spo2": "89%",
        "pain": "6/10"
      },
      "labs": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
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
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
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
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "ALLERGY STUDIES",
          "results": [
            {
              "test": "Tryptase (acute)",
              "value": "42",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "3.1",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-3580",
          "date": "03/02/2026",
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "STAT",
          "orderedBy": "Dr. Attending",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-806175",
          "clinical": "",
          "technique": "Standard protocol",
          "findings": "Clear lungs. No pulmonary edema.",
          "impression": "No acute cardiopulmonary process.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Lip/tongue swelling, hives, throat tightness after shellfish",
          "hpi": "28F presenting with acute anaphylaxis after accidental shellfish exposure at restaurant. Symptoms began ~20 min after eating shrimp — progressive lip swelling, diffuse urticaria, throat tightness, lightheadedness. No EpiPen available (expired). EMS administered IM epinephrine en route.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "cc": "Admitted for observation after anaphylaxis — received 2 doses epinephrine in ED",
      "dx": "Anaphylaxis — post-episode observation",
      "problems": [
        "Anaphylaxis (shellfish) — resolved",
        "Asthma (mild persistent)",
        "Biphasic reaction risk"
      ],
      "meds": [
        {
          "name": "Epinephrine IM",
          "dose": "0.3mg",
          "route": "IM",
          "freq": "Given x2 in ED"
        },
        {
          "name": "Diphenhydramine",
          "dose": "50mg",
          "route": "IV",
          "freq": "Q6H"
        },
        {
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "freq": "Once"
        },
        {
          "name": "Famotidine",
          "dose": "20mg",
          "route": "IV",
          "freq": "Q12H"
        },
        {
          "name": "Albuterol",
          "dose": "2.5mg",
          "route": "NEB",
          "freq": "Q4H PRN"
        }
      ],
      "vitals": {
        "bp": "112/72",
        "hr": "88",
        "rr": "16",
        "temp": "36.8°C",
        "spo2": "98%",
        "pain": "1/10"
      },
      "labs": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Eosinophils",
              "value": "6",
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
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
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
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "ALLERGY STUDIES",
          "results": [
            {
              "test": "Tryptase (6h post)",
              "value": "18",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": "H"
            },
            {
              "test": "Tryptase (24h)",
              "value": "8.2",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": ""
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
          "cc": "Post-anaphylaxis observation",
          "hpi": "28F admitted for 24h biphasic reaction monitoring after anaphylaxis requiring 2 doses IM epinephrine. Vitals have stabilized. Hives resolving. No stridor or wheeze. Plan: 24h observation, serial tryptase, allergy/immunology consult before discharge, prescribe EpiPen x2.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "cc": "A/I consult for anaphylaxis workup — inpatient, day 1 post-episode",
      "dx": "Shellfish anaphylaxis — confirm triggers, risk-stratify",
      "problems": [
        "Anaphylaxis (shellfish)",
        "Asthma",
        "Expired EpiPen — non-adherence to carrying"
      ],
      "meds": [
        {
          "name": "Diphenhydramine",
          "dose": "25mg",
          "route": "PO",
          "freq": "Q6H PRN"
        },
        {
          "name": "Prednisone",
          "dose": "40mg",
          "route": "PO",
          "freq": "Daily x5 days"
        },
        {
          "name": "Albuterol",
          "dose": "90mcg",
          "route": "INH",
          "freq": "PRN"
        }
      ],
      "vitals": {
        "bp": "118/72",
        "hr": "76",
        "rr": "14",
        "temp": "36.8°C",
        "spo2": "99%",
        "pain": "0/10"
      },
      "labs": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Eosinophils",
              "value": "6",
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
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
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
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "ALLERGY STUDIES",
          "results": [
            {
              "test": "Total IgE",
              "value": "320",
              "unit": "IU/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Shrimp sIgE",
              "value": "48",
              "unit": "kU/L",
              "range": "<0.35",
              "flag": "H"
            },
            {
              "test": "Crab sIgE",
              "value": "22",
              "unit": "kU/L",
              "range": "<0.35",
              "flag": "H"
            },
            {
              "test": "Tropomyosin (component)",
              "value": "35",
              "unit": "kU/L",
              "range": "<0.35",
              "flag": "H"
            },
            {
              "test": "Baseline Tryptase",
              "value": "5.8",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": ""
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
          "cc": "A/I consult for anaphylaxis",
          "hpi": "Consultant note: 28F with confirmed IgE-mediated shellfish anaphylaxis. Tropomyosin-positive (cross-reactive marker — advise all crustacean avoidance). Baseline tryptase normal — mastocytosis unlikely. Recommendations: strict shellfish avoidance, EpiPen 0.3mg x2 prescribed, anaphylaxis action plan provided, medic-alert bracelet recommended, follow-up in A/I clinic in 4 weeks.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "cc": "Follow-up 4 weeks after anaphylaxis hospitalization",
      "dx": "Shellfish allergy — clinic follow-up",
      "problems": [
        "Shellfish allergy (confirmed IgE-mediated)",
        "Asthma (mild, controlled)",
        "Tree nut allergy (known)"
      ],
      "meds": [
        {
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "freq": "PRN x2 (carrying)"
        },
        {
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "freq": "Daily"
        },
        {
          "name": "Albuterol",
          "dose": "90mcg",
          "route": "INH",
          "freq": "PRN"
        }
      ],
      "vitals": {
        "bp": "112/68",
        "hr": "72",
        "rr": "14",
        "temp": "36.8°C",
        "spo2": "99%",
        "pain": "0/10"
      },
      "labs": [
        {
          "name": "ALLERGY TESTING",
          "results": [
            {
              "test": "Skin prick — Shrimp",
              "value": "12mm wheal",
              "unit": "",
              "range": "<3mm positive",
              "flag": "H"
            },
            {
              "test": "Skin prick — Crab",
              "value": "10mm wheal",
              "unit": "",
              "range": "<3mm positive",
              "flag": "H"
            },
            {
              "test": "Skin prick — Lobster",
              "value": "8mm wheal",
              "unit": "",
              "range": "<3mm positive",
              "flag": "H"
            },
            {
              "test": "Skin prick — Mollusk (clam)",
              "value": "2mm wheal",
              "unit": "",
              "range": "<3mm positive",
              "flag": ""
            },
            {
              "test": "Skin prick — Peanut",
              "value": "0mm",
              "unit": "",
              "range": "<3mm positive",
              "flag": ""
            },
            {
              "test": "Skin prick — Tree nut panel",
              "value": "Walnut 6mm, Cashew 5mm",
              "unit": "",
              "range": "<3mm positive",
              "flag": "H"
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
          "cc": "Allergy follow-up after anaphylaxis",
          "hpi": "28F returns 4 weeks post-anaphylaxis. Carrying dual EpiPens. No further reactions. Skin prick testing today confirms crustacean allergy (shrimp, crab, lobster positive) with mollusk tolerance. Tree nut panel confirms walnut/cashew sensitization. Plan: continue strict crustacean avoidance, counsel on cross-contamination, challenge mollusk if desired, EpiPen training reviewed, annual follow-up.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Priya Sharma",
    "dob": "08/03/1998",
    "age": "28",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-154379",
    "language": "English",
    "race": "Multiracial",
    "phone": "(720) 555-9543",
    "email": "priya.sharma@email.com",
    "address": "1868 W Haddon Ave, Memphis, TN 38104",
    "insurance": "Medicaid",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Sharma",
      "phone": "(502) 555-8504",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Lip/tongue swelling, diffuse hives, throat tightness after eating shrimp",
    "diagnosis": "Anaphylaxis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Known shellfish allergy",
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
      "name": "Albuterol",
      "dose": "90mcg",
      "route": "INH",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Combined OCP",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Shellfish",
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
      "time": "07:45",
      "bp": "82/48",
      "hr": "132",
      "rr": "28",
      "temp": "36.8°C",
      "spo2": "89%",
      "pain": "6/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Lip/tongue swelling, hives, throat tightness after shellfish",
      "hpi": "28F presenting with acute anaphylaxis after accidental shellfish exposure at restaurant. Symptoms began ~20 min after eating shrimp — progressive lip swelling, diffuse urticaria, throat tightness, lightheadedness. No EpiPen available (expired). EMS administered IM epinephrine en route.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-218882",
      "collected": "03/02/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "242",
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
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
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
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "ALLERGY STUDIES",
          "results": [
            {
              "test": "Tryptase (acute)",
              "value": "42",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "3.1",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-3580",
      "date": "03/02/2026",
      "study": "Chest X-Ray",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. Attending",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-806175",
      "clinical": "",
      "technique": "Standard protocol",
      "findings": "Clear lungs. No pulmonary edema.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/02/2026 08:30",
      "verified": "03/02/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/2025",
      "lot": "FL-25",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19",
      "date": "09/2025",
      "lot": "CV-25",
      "site": "Right Deltoid"
    }
  ],
  "familyHistory": [
    "Mother: seasonal allergies",
    "Brother: peanut allergy"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social"
    ],
    [
      "Occupation",
      "Software developer"
    ],
    [
      "EpiPen",
      "Had EpiPen but expired 6 months ago"
    ]
  ],
  "references": [
    {
      "id": "GA2LEN-2025",
      "title": "Anaphylaxis definition, overview, and clinical support tool: 2024 consensus report",
      "authors": "Dribin TE, Muraro A, Camargo CA, Turner PJ, Wang J, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2025,
      "doi": "10.1016/j.jaci.2025.01.021",
      "url": "https://www.jacionline.org/article/S0091-6749(25)00072-7/fulltext",
      "openAccess": true,
      "validates": [
        "Anaphylaxis diagnostic criteria",
        "Epinephrine IM dosing",
        "Biphasic reaction monitoring",
        "Neffy nasal epinephrine"
      ]
    },
    {
      "id": "WAO-2020",
      "title": "World Allergy Organization anaphylaxis guidance 2020",
      "authors": "Cardona V, Ansotegui IJ, Ebisawa M, et al.",
      "journal": "World Allergy Organ J",
      "year": 2020,
      "doi": "10.1016/j.waojou.2020.100472",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/",
      "openAccess": true,
      "validates": [
        "WAO diagnostic criteria",
        "Epinephrine positioning",
        "Cofactors: exercise, beta-blockers, ACE inhibitors"
      ]
    },
    {
      "id": "JTFPP-Anaph-2023",
      "title": "Anaphylaxis: A 2023 practice parameter update",
      "authors": "Golden DBK, Wang J, Waserman S, et al.",
      "journal": "Ann Allergy Asthma Immunol",
      "year": 2023,
      "doi": "10.1016/j.anai.2023.09.015",
      "url": "https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Anaphylaxis-Practice-Paramaters-2023.pdf",
      "openAccess": true,
      "validates": [
        "Glucagon for beta-blocker patients",
        "Tryptase measurement timing",
        "0.1/0.15mg epi for infants",
        "MCAS screening after anaphylaxis"
      ]
    },
    {
      "id": "EAACI-Anaph-2021",
      "title": "EAACI guidelines: Anaphylaxis (2021 update)",
      "authors": "Muraro A, Worm M, Alviani C, et al.",
      "journal": "Allergy",
      "year": 2022,
      "doi": "10.1111/all.15032",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9285065/",
      "openAccess": true,
      "validates": [
        "Discharge planning with EpiPen",
        "Patient action plans",
        "Allergist referral 4-6 weeks"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "Anaphylaxis is a severe, life-threatening generalized hypersensitivity reaction requiring rapid recognition. Diagnosis is clinical — epinephrine should not be delayed for lab confirmation.",
      "Epinephrine is the ONLY first-line treatment for anaphylaxis. It simultaneously reverses vasodilation (alpha-1), bronchospasm (beta-2), and mediator release (beta-2 stabilizes mast cells). Antihistamines and steroids are adjuncts only — they do not treat the acute hemodynamic crisis.",
      "Biphasic anaphylaxis occurs in 5–20% of cases: initial reaction resolves, then recurs 1–72 hours later (typically 8–10 hours) without re-exposure. Cannot be predicted by severity of first reaction. All anaphylaxis patients require observation for minimum 4–6 hours.",
      "The World Allergy Organization (WAO) and AAAAI recommend 2 auto-injectors prescribed at discharge. First injection may not be sufficient (especially in obese patients) or may malfunction.",
      "Anaphylaxis without urticaria occurs in ~20% of cases — absence of skin findings does NOT exclude anaphylaxis. Cardiovascular-dominant anaphylaxis (hypotension only) is particularly dangerous and commonly missed."
    ],
    "boardPearls": [
      "Anaphylaxis diagnostic criteria: acute onset + either (1) skin/mucosal + respiratory OR hypotension; or (2) ≥2 of: skin/mucosal, respiratory, hypotension, GI after allergen exposure.",
      "Epinephrine dose: 0.3–0.5 mg IM (1:1000) in anterolateral mid-thigh. Repeat every 5–15 min. IV only if IM fails or cardiac arrest.",
      "Position: supine with legs elevated for hypotension. NOT upright — sudden positional change in anaphylaxis → fatal cardiovascular collapse ('empty heart syndrome').",
      "Biphasic anaphylaxis: occurs 1–72h later without re-exposure. Minimum observation: 4–6h mild/moderate; 24h if severe or prior biphasic history.",
      "Tryptase peaks 60–90 min after anaphylaxis onset, returns to baseline at 6h. Baseline tryptase >11.4 suggests mastocytosis as comorbidity.",
      "Protracted anaphylaxis: unresponsive to epinephrine → IV glucagon 1–5 mg (for patients on beta-blockers who are epinephrine-refractory).",
      "Discharge: EpiPen × 2, anaphylaxis action plan, allergist referral, medical alert ID."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Priya appears anxious and frightened, speaking in short phrases due to throat tightness and difficulty breathing. She is cooperative but visibly distressed, frequently touching her swollen lips and pointing to her throat when describing symptoms.",
    "interviewQuestions": [
      "Can you tell me exactly what happened and when your symptoms started?",
      "What did you eat at the restaurant tonight?",
      "Did you know there was shellfish in the food when you ate it?",
      "How quickly did the symptoms develop after eating?",
      "Can you describe how your throat feels right now?",
      "Are you having any trouble breathing or wheezing?",
      "Have you had reactions like this before to shellfish?",
      "Do you carry an EpiPen with you?",
      "Have you taken any medications since the symptoms started?",
      "Are you experiencing any nausea, vomiting, or abdominal pain?",
      "Do you have any chest pain or dizziness?",
      "Have you ever been hospitalized for allergic reactions before?",
      "Besides shellfish, what other allergies do you have?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing right now because my throat feels so tight and I'm scared",
      "onset": "It started about 20 minutes after I ate the pasta - I didn't realize it had shrimp in the sauce until it was too late",
      "character": "My lips and tongue feel huge and swollen, my throat feels like it's closing up, and I have these itchy bumps all over my body",
      "location": "The swelling is mainly in my lips and tongue, the hives are everywhere - arms, chest, back - and the tightness is right here in my throat",
      "severity": "This is definitely a 9 out of 10 - I can barely swallow and I'm really scared I can't breathe properly",
      "aggravating": "It seems to be getting worse as time goes on, and touching the hives makes them more itchy",
      "relieving": "Nothing is helping - I tried drinking water but it's hard to swallow",
      "associated": "Yes, I feel dizzy and lightheaded, my heart is racing, and I feel nauseous",
      "denies": "No chest pain, no loss of consciousness, no vomiting yet, no abdominal cramping",
      "history": "I've had shellfish reactions before but never this severe - usually just hives and some lip swelling",
      "medications": "Albuterol; Combined OCP",
      "allergies": "Shellfish, Tree nuts",
      "family": "My mother has seasonal allergies and my brother is allergic to peanuts",
      "social": "I work as a software developer, I don't smoke, I drink socially on weekends, no drugs"
    },
    "examManeuvers": [
      "Inspect lips, tongue, and oral cavity",
      "Examine skin for urticaria and angioedema",
      "Auscultate lungs for wheezing or stridor",
      "Assess voice quality and ability to swallow",
      "Palpate neck for swelling",
      "Auscultate heart for rate and rhythm",
      "Check capillary refill and peripheral perfusion",
      "Assess mental status and anxiety level",
      "Examine conjunctiva for swelling",
      "Assess work of breathing and use of accessory muscles"
    ],
    "examFindings": {
      "Inspect lips, tongue, and oral cavity": "Marked angioedema of lips and tongue, tongue appears enlarged and protrudes slightly, oral mucosa erythematous",
      "Examine skin for urticaria and angioedema": "Diffuse raised erythematous wheals across trunk, arms, and neck, some confluent areas, no facial angioedema beyond lips",
      "Auscultate lungs for wheezing or stridor": "Bilateral expiratory wheezes throughout lung fields, no stridor at rest",
      "Assess voice quality and ability to swallow": "Voice slightly muffled due to tongue swelling, patient reports difficulty swallowing saliva",
      "Palpate neck for swelling": "No palpable neck swelling or lymphadenopathy, no subcutaneous emphysema",
      "Auscultate heart for rate and rhythm": "Tachycardic regular rhythm, no murmurs, gallops, or rubs",
      "Check capillary refill and peripheral perfusion": "Capillary refill 3-4 seconds, cool extremities, weak peripheral pulses",
      "Assess mental status and anxiety level": "Alert and oriented, anxious but appropriate, follows commands",
      "Examine conjunctiva for swelling": "Mild conjunctival erythema and slight periorbital edema",
      "Assess work of breathing and use of accessory muscles": "Mild increased work of breathing, no accessory muscle use at rest"
    },
    "ddxTargets": [
      "Anaphylaxis (correct diagnosis)",
      "Severe allergic reaction without anaphylaxis",
      "Hereditary angioedema",
      "Acute asthma exacerbation",
      "Septic shock",
      "ACE inhibitor induced angioedema",
      "Scombroid poisoning"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on obvious shellfish allergy history and missing severity assessment or alternative causes of shock",
      "prematureClosure": "May stop evaluation after confirming allergic reaction without fully assessing for anaphylaxis criteria and hemodynamic instability",
      "availabilityBias": "Recent cases of simple allergic reactions may lead to underestimating the severity of this patient's systemic involvement"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential, I notice you're considering allergic reactions. What specific clinical criteria help distinguish between a localized allergic reaction versus anaphylaxis? What key history and exam findings will you prioritize to make this distinction?",
      "phase5": "Now that you've gathered your history and physical exam findings, walk me through how you're weighing the evidence for anaphylaxis. What combination of systems are involved here, and how does that inform your diagnosis and urgency of treatment?",
      "finalDebrief": "This case highlights the critical distinction between allergic reactions and anaphylaxis. Notice how the combination of cutaneous symptoms, respiratory involvement, and cardiovascular compromise met the criteria for anaphylaxis. How did the expired EpiPen detail and vital signs guide your assessment of severity? What does this teach us about not anchoring on 'just another allergic reaction'?"
    }
  }
};
