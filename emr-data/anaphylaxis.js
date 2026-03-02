/* emr-data/anaphylaxis.js — Multi-Setting Allergy Case: Anaphylaxis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Priya Sharma",
      "dob": "08/03/1998",
      "age": "28",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-154379",
      "language": "English",
      "race": "Multiracial",
      "phone": "(945) 526-1981",
      "email": "priya.sharma@email.com",
      "address": "1995 Oak St, Weston, FL 33381",
      "insurance": "Medicaid",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Michael Sharma",
        "phone": "(578) 662-5398",
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
    "phone": "(945) 526-1981",
    "email": "priya.sharma@email.com",
    "address": "1995 Oak St, Weston, FL 33381",
    "insurance": "Medicaid",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Sharma",
      "phone": "(578) 662-5398",
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
  ]
};
