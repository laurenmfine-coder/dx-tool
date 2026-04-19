/* emr-data/fpies-chronic-v2.js — Variation: FPIES — Chronic */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Baby Ethan Kowalski",
  "patientHPI": "My baby has been throwing up after almost every bottle for the past couple months, and now he's having bloody diarrhea too - he used to be a chunky baby but now he looks so skinny and weak.",
      "dob": "08/27/2025.6",
      "age": "0.4",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-131262",
      "language": "English",
      "race": "White",
      "phone": "(414) 555-3390",
      "email": "baby.x@email.com",
      "address": "3314 Hollyhock Rd, Memphis, TN 38107",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(212) 555-5272",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Cow milk",
        "reaction": "FPIES chronic",
        "severity": "Severe",
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
        "Context",
        "4-month-old with chronic vomiting, bloody diarrhea, and FTT on cow milk formula"
      ],
      [
        "Misdiagnosis",
        "Initially told it was \"colic\" and \"reflux\" — treated with acid suppressants for 2 months"
      ],
      [
        "Key",
        "Chronic FPIES is more subtle than acute — insidious FTT, chronic diarrhea, not dramatic vomiting episodes"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "4-month-old with chronic vomiting, bloody diarrhea, FTT — on cow milk formula, told it was reflux",
        "diagnosis": "FPIES — Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic FPIES — cow milk protein in formula",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Failure to thrive — fell from 50th to 3rd percentile in 2 months",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Chronic bloody diarrhea — not \"reflux\"",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "2 months on PPIs/acid suppressants with no improvement",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Needs hypoallergenic formula — extensively hydrolyzed or amino acid-based",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Formula change",
          "dose": "Amino acid formula (EleCare/PurAmino)",
          "route": "PO",
          "frequency": "Immediate",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "IV Fluids",
          "dose": "D5NS",
          "route": "IV",
          "frequency": "Maintenance (dehydrated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "PPI discontinued",
          "dose": "",
          "route": "",
          "frequency": "Was treating non-existent reflux",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "152",
          "rr": "36",
          "temp": "37.0°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-176012",
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
                  "value": "12.8",
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
                  "test": "Platelets",
                  "value": "520",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": "H"
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
                  "value": "148",
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
                }
              ]
            },
            {
              "name": "NUTRITION",
              "results": [
                {
                  "test": "Albumin",
                  "value": "2.4",
                  "unit": "g/dL",
                  "range": "3.5-5.0",
                  "flag": "L"
                },
                {
                  "test": "Iron",
                  "value": "22",
                  "unit": "mcg/dL",
                  "range": "50-120",
                  "flag": "L"
                },
                {
                  "test": "Stool calprotectin",
                  "value": "480",
                  "unit": "mcg/g",
                  "range": "<50",
                  "flag": "H"
                },
                {
                  "test": "Stool reducing substances",
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
          "cc": "4-month-old with chronic vomiting, bloody diarrhea, FTT — on cow milk formula, told it was reflux",
          "hpi": "4-month-old male on cow milk formula with 2 months of chronic vomiting (not projectile — more persistent, post-feed), bloody mucoid diarrhea, and progressive weight loss. Was 50th percentile at 2 months, now 3rd percentile. PCP diagnosed \"reflux\" and started PPI — no improvement. THIS IS CHRONIC FPIES — not reflux. Chronic FPIES presents insidiously with FTT, chronic diarrhea, and hypoalbuminemia (protein-losing enteropathy). More subtle than acute FPIES (which is dramatic profuse vomiting). Switch to amino acid formula — improvement expected within 48-72 hours.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for FTT evaluation and formula transition",
        "diagnosis": "FPIES — Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic FPIES — cow milk",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "FTT — 3rd percentile, hypoalbuminemic",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Dehydration",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Formula transition to amino acid-based",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "PPI discontinued (unnecessary)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "WIC letter for specialty formula coverage",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "EleCare amino acid formula",
          "dose": "",
          "route": "PO",
          "frequency": "Ad lib feeding",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Iron supplement",
          "dose": "",
          "route": "PO",
          "frequency": "Daily (iron deficiency from GI losses)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "138",
          "rr": "30",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-769419",
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
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
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
          "cc": "Admitted for FTT evaluation and formula transition",
          "hpi": "4-month-old admitted for FTT and formula transition. Switched to EleCare amino acid formula — within 48 hours: vomiting resolved, stools normalizing. This rapid response confirms chronic FPIES. Albumin will take weeks to normalize. WIC letter written for specialty formula coverage ($400+/month without WIC). Nutritionist: feeding plan with caloric supplementation to catch up growth.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — chronic FPIES diagnosis, food introduction plan, soy consideration",
        "diagnosis": "FPIES — Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic FPIES to cow milk — confirmed by response to elimination",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Soy — 30-50% of milk FPIES patients also react to soy (test carefully)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food introduction: introduce rice, oat with caution (common FPIES triggers)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "When to attempt reintroduction: supervised OFC at age 12-18 months",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amino acid formula",
          "dose": "",
          "route": "PO",
          "frequency": "Until age 12 months minimum",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Iron supplement",
          "dose": "1mg/kg/day",
          "route": "PO",
          "frequency": "Daily x3 months",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "128",
          "rr": "28",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-745724",
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
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
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
          "cc": "A/I consult — chronic FPIES diagnosis, food introduction plan, soy consideration",
          "hpi": "A/I: 4-month-old with chronic milk FPIES. Plan: amino acid formula until 12 months, then supervised milk OFC. Soy introduction in clinic at 6 months (30-50% cross-reactivity). Rice and oat introduction at home but with FPIES awareness — start at 5-6 months with small amounts. Parents given FPIES emergency plan and ondansetron prescription for any acute reactions during food introductions.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "FPIES follow-up — 3 months on amino acid formula, growth catch-up, food introductions",
        "diagnosis": "FPIES — Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic FPIES cow milk — completely resolved on amino acid formula",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Growth — caught up from 3rd to 20th percentile in 3 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Soy — introduced in clinic, TOLERATED (no FPIES reaction)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Rice, oat — introduced at home without reaction",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Iron — normalizing",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Milk OFC planned for age 12-18 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amino acid formula",
          "dose": "",
          "route": "PO",
          "frequency": "Until milk OFC at 12-18 months",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Iron supplement",
          "dose": "",
          "route": "PO",
          "frequency": "Continue x2 more months",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "124",
          "rr": "26",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-411208",
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
                  "test": "Platelets",
                  "value": "242",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "2",
                  "unit": "%",
                  "range": "1-4",
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
          "cc": "FPIES follow-up — 3 months on amino acid formula, growth catch-up, food introductions",
          "hpi": "4-month-old now 7 months. Dramatic catch-up growth on amino acid formula — 3rd→20th percentile. Soy tolerated (introduced in clinic). Rice and oat tolerated at home. Parents confident with food introductions. Milk OFC planned for 12-18 months. If passes: transition to regular cow milk formula/whole milk. If fails: continue amino acid formula, retry at 2 years (90% outgrow milk FPIES by 3-5 years).",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Baby Ethan Kowalski",
    "dob": "08/27/2025.6",
    "age": "0.4",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-131262",
    "language": "English",
    "race": "White",
    "phone": "(619) 555-7841",
    "email": "baby.x@email.com",
    "address": "8281 Clover St, Louisville, KY 40211",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(502) 555-3497",
      "relationship": "Parent"
    },
    "chiefComplaint": "4-month-old with chronic vomiting, bloody diarrhea, FTT — on cow milk formula, told it was reflux",
    "diagnosis": "FPIES — Chronic"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Chronic FPIES — cow milk protein in formula",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Failure to thrive — fell from 50th to 3rd percentile in 2 months",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Chronic bloody diarrhea — not \"reflux\"",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "2 months on PPIs/acid suppressants with no improvement",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Needs hypoallergenic formula — extensively hydrolyzed or amino acid-based",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Formula change",
      "dose": "Amino acid formula (EleCare/PurAmino)",
      "route": "PO",
      "frequency": "Immediate",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "IV Fluids",
      "dose": "D5NS",
      "route": "IV",
      "frequency": "Maintenance (dehydrated)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "PPI discontinued",
      "dose": "",
      "route": "",
      "frequency": "Was treating non-existent reflux",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Cow milk",
      "reaction": "FPIES chronic",
      "severity": "Severe",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "N/A",
      "hr": "152",
      "rr": "36",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "N/A/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "4-month-old with chronic vomiting, bloody diarrhea, FTT — on cow milk formula, told it was reflux",
      "hpi": "4-month-old male on cow milk formula with 2 months of chronic vomiting (not projectile — more persistent, post-feed), bloody mucoid diarrhea, and progressive weight loss. Was 50th percentile at 2 months, now 3rd percentile. PCP diagnosed \"reflux\" and started PPI — no improvement. THIS IS CHRONIC FPIES — not reflux. Chronic FPIES presents insidiously with FTT, chronic diarrhea, and hypoalbuminemia (protein-losing enteropathy). More subtle than acute FPIES (which is dramatic profuse vomiting). Switch to amino acid formula — improvement expected within 48-72 hours.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-176012",
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
              "value": "12.8",
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
              "test": "Platelets",
              "value": "520",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "H"
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
              "value": "148",
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
            }
          ]
        },
        {
          "name": "NUTRITION",
          "results": [
            {
              "test": "Albumin",
              "value": "2.4",
              "unit": "g/dL",
              "range": "3.5-5.0",
              "flag": "L"
            },
            {
              "test": "Iron",
              "value": "22",
              "unit": "mcg/dL",
              "range": "50-120",
              "flag": "L"
            },
            {
              "test": "Stool calprotectin",
              "value": "480",
              "unit": "mcg/g",
              "range": "<50",
              "flag": "H"
            },
            {
              "test": "Stool reducing substances",
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
      "Context",
      "4-month-old with chronic vomiting, bloody diarrhea, and FTT on cow milk formula"
    ],
    [
      "Misdiagnosis",
      "Initially told it was \"colic\" and \"reflux\" — treated with acid suppressants for 2 months"
    ],
    [
      "Key",
      "Chronic FPIES is more subtle than acute — insidious FTT, chronic diarrhea, not dramatic vomiting episodes"
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
  "guided": {
    "supported": true,
    "patientPersona": "Baby Ethan Kowalski is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
        "When did your symptoms start and how?",
        "Describe the main symptom \u2014 location, character, severity.",
        "What makes it worse? What makes it better?",
        "Any other symptoms you've noticed?",
        "Any prior similar episodes?",
        "Tell me about your medical history.",
        "What medications are you currently taking?",
        "Any medication allergies?",
        "Relevant family history?",
        "Tell me about your lifestyle."
    ],
    "patientResponses": {
        "default": "He pauses. 'Can you clarify what you mean?'",
        "onset": "'Gradually \u2014 over the past several days.'",
        "character": "'The symptom has been significant and affecting my ability to function.'",
        "location": "'The main problem is in the expected area for my condition.'",
        "severity": "'Six or seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
        "associated": "'Some associated symptoms consistent with this condition.'",
        "denies": "'No fever, chills, or unexplained weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Formula change; IV Fluids; PPI discontinued.'",
        "allergies": "'My allergies: Cow milk.'",
        "family": "Non-contributory",
        "social": "Context: 4-month-old with chronic vomiting, bloody diarrhea, and FTT on cow milk formula  Misdiagnosis: Initially told it was \"colic\" and \"reflux\" \u2014 treated with acid suppressants for 2 months  Key: Chronic FPIES is more subtle than acute \u2014 insidious FTT, chronic diarrhea, not dramatic vomiting episodes"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular",
        "Pulmonary",
        "Abdominal",
        "Extremities",
        "Skin",
        "Targeted exam"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with this condition.",
        "Vital signs": "Finding consistent with this condition.",
        "Cardiovascular": "Finding consistent with this condition.",
        "Pulmonary": "Finding consistent with this condition.",
        "Abdominal": "Finding consistent with this condition.",
        "Extremities": "Finding consistent with this condition.",
        "Skin": "Finding consistent with this condition.",
        "Targeted exam": "Finding consistent with this condition."
    },
    "ddxTargets": [
        "this condition (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for this condition.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Baby Ethan Kowalski: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
