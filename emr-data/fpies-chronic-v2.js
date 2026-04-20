
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Initially told it was \"colic\" and \"reflux\" \u2014 treated with acid suppressants for 2 months"
      ],
      [
        "Key",
        "Chronic FPIES is more subtle than acute \u2014 insidious FTT, chronic diarrhea, not dramatic vomiting episodes"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "4-month-old with chronic vomiting, bloody diarrhea, FTT \u2014 on cow milk formula, told it was reflux",
        "diagnosis": "FPIES \u2014 Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic FPIES \u2014 cow milk protein in formula",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Failure to thrive \u2014 fell from 50th to 3rd percentile in 2 months",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Chronic bloody diarrhea \u2014 not \"reflux\"",
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
          "description": "Needs hypoallergenic formula \u2014 extensively hydrolyzed or amino acid-based",
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
          "temp": "37.0\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "4-month-old with chronic vomiting, bloody diarrhea, FTT \u2014 on cow milk formula, told it was reflux",
          "hpi": "4-month-old male on cow milk formula with 2 months of chronic vomiting (not projectile \u2014 more persistent, post-feed), bloody mucoid diarrhea, and progressive weight loss. Was 50th percentile at 2 months, now 3rd percentile. PCP diagnosed \"reflux\" and started PPI \u2014 no improvement. THIS IS CHRONIC FPIES \u2014 not reflux. Chronic FPIES presents insidiously with FTT, chronic diarrhea, and hypoalbuminemia (protein-losing enteropathy). More subtle than acute FPIES (which is dramatic profuse vomiting). Switch to amino acid formula \u2014 improvement expected within 48-72 hours.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for FTT evaluation and formula transition",
        "diagnosis": "FPIES \u2014 Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic FPIES \u2014 cow milk",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "FTT \u2014 3rd percentile, hypoalbuminemic",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "hpi": "4-month-old admitted for FTT and formula transition. Switched to EleCare amino acid formula \u2014 within 48 hours: vomiting resolved, stools normalizing. This rapid response confirms chronic FPIES. Albumin will take weeks to normalize. WIC letter written for specialty formula coverage ($400+/month without WIC). Nutritionist: feeding plan with caloric supplementation to catch up growth.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 chronic FPIES diagnosis, food introduction plan, soy consideration",
        "diagnosis": "FPIES \u2014 Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic FPIES to cow milk \u2014 confirmed by response to elimination",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Soy \u2014 30-50% of milk FPIES patients also react to soy (test carefully)",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "A/I consult \u2014 chronic FPIES diagnosis, food introduction plan, soy consideration",
          "hpi": "A/I: 4-month-old with chronic milk FPIES. Plan: amino acid formula until 12 months, then supervised milk OFC. Soy introduction in clinic at 6 months (30-50% cross-reactivity). Rice and oat introduction at home but with FPIES awareness \u2014 start at 5-6 months with small amounts. Parents given FPIES emergency plan and ondansetron prescription for any acute reactions during food introductions.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "FPIES follow-up \u2014 3 months on amino acid formula, growth catch-up, food introductions",
        "diagnosis": "FPIES \u2014 Chronic"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic FPIES cow milk \u2014 completely resolved on amino acid formula",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Growth \u2014 caught up from 3rd to 20th percentile in 3 months",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Soy \u2014 introduced in clinic, TOLERATED (no FPIES reaction)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Rice, oat \u2014 introduced at home without reaction",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Iron \u2014 normalizing",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "FPIES follow-up \u2014 3 months on amino acid formula, growth catch-up, food introductions",
          "hpi": "4-month-old now 7 months. Dramatic catch-up growth on amino acid formula \u2014 3rd\u219220th percentile. Soy tolerated (introduced in clinic). Rice and oat tolerated at home. Parents confident with food introductions. Milk OFC planned for 12-18 months. If passes: transition to regular cow milk formula/whole milk. If fails: continue amino acid formula, retry at 2 years (90% outgrow milk FPIES by 3-5 years).",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(502) 555-3497",
      "relationship": "Parent"
    },
    "chiefComplaint": "4-month-old with chronic vomiting, bloody diarrhea, FTT \u2014 on cow milk formula, told it was reflux",
    "diagnosis": "FPIES \u2014 Chronic"
  },
  "problems": [
    {
      "problem": "Chronic FPIES \u2014 cow's milk protein, daily low-level exposure",
      "icd": "K52.29",
      "onset": "2024",
      "status": "Active",
      "notes": "Mia Johnson, 4M \u2014 on cow's milk formula since 6 weeks. Intermittent vomiting, loose stools, poor weight gain since then."
    },
    {
      "problem": "Weight faltering \u2014 cow's milk FPIES causing chronic nutritional compromise",
      "icd": "R62.51",
      "onset": "2024",
      "status": "Active",
      "notes": "Weight crossing percentile lines \u2014 from 40th to 10th. Insufficient caloric absorption due to chronic gut inflammation."
    },
    {
      "problem": "FPIES vs cow's milk protein allergy (CMPA) \u2014 clinical distinction",
      "icd": "K52.29",
      "onset": "2024",
      "status": "Active",
      "notes": "Chronic FPIES overlaps clinically with non-IgE CMPA. Both treated with milk protein elimination."
    }
  ],
  "medications": [
    {
      "name": "Amino acid formula (Neocate or EleCare) \u2014 complete protein elimination",
      "sig": "Transition from cow's milk formula to amino acid-based formula immediately. Eliminates all cow's milk protein.",
      "prescriber": "Pediatric GI/Allergy",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Probiotics \u2014 gut microbiome support",
      "sig": "Lactobacillus reuteri drops \u2014 gut flora support during formula transition. Evidence modest but low risk.",
      "prescriber": "Pediatric GI",
      "start": "2024",
      "refills": 1,
      "status": "Active"
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
      "temp": "37.0\u00b0C",
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
      "cc": "4-month-old with chronic vomiting, bloody diarrhea, FTT \u2014 on cow milk formula, told it was reflux",
      "hpi": "4-month-old male on cow milk formula with 2 months of chronic vomiting (not projectile \u2014 more persistent, post-feed), bloody mucoid diarrhea, and progressive weight loss. Was 50th percentile at 2 months, now 3rd percentile. PCP diagnosed \"reflux\" and started PPI \u2014 no improvement. THIS IS CHRONIC FPIES \u2014 not reflux. Chronic FPIES presents insidiously with FTT, chronic diarrhea, and hypoalbuminemia (protein-losing enteropathy). More subtle than acute FPIES (which is dramatic profuse vomiting). Switch to amino acid formula \u2014 improvement expected within 48-72 hours.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Chronic FPIES Workup",
      "results": [
        {
          "test": "Cow's milk IgE (skin prick + RAST)",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Total IgE",
          "value": "4",
          "unit": "IU/mL",
          "ref": "<10 for age",
          "flag": ""
        },
        {
          "test": "Stool calprotectin",
          "value": "820",
          "unit": "mcg/g",
          "ref": "<50 elevated",
          "flag": "H"
        },
        {
          "test": "Stool eosinophils",
          "value": "Present",
          "unit": "",
          "ref": "Absent",
          "flag": "H"
        },
        {
          "test": "Weight gain since birth",
          "value": "Suboptimal \u2014 10th percentile at 4 months",
          "unit": "",
          "ref": "Following curve",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Context",
      "4-month-old with chronic vomiting, bloody diarrhea, and FTT on cow milk formula"
    ],
    [
      "Misdiagnosis",
      "Initially told it was \"colic\" and \"reflux\" \u2014 treated with acid suppressants for 2 months"
    ],
    [
      "Key",
      "Chronic FPIES is more subtle than acute \u2014 insidious FTT, chronic diarrhea, not dramatic vomiting episodes"
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
  "guided": {
    "supported": true,
    "patientPersona": "Mother appears exhausted and frustrated, having been told for 2 months this was just 'reflux' while watching her baby continue to lose weight and have bloody stools. She's very forthcoming about symptoms but emotional about the lack of improvement despite following previous medical advice.",
    "interviewQuestions": [
      "Can you tell me exactly when Ethan's symptoms first started?",
      "What type of formula is Ethan currently on?",
      "Has he ever been breastfed or tried different formulas?",
      "Can you describe the vomiting - is it projectile or more like spitting up?",
      "Tell me about the diarrhea - what does it look like?",
      "How has his weight gain been since birth?",
      "What treatments have you tried so far and how did they work?",
      "Does he seem to be in pain, especially around feeding times?",
      "How is his appetite and feeding behavior?",
      "Any fever or signs of dehydration?",
      "Does anyone in the family have food allergies or similar problems?",
      "How are his sleep patterns and overall activity level?",
      "Have you noticed if symptoms are better or worse at certain times?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand - can you ask that differently? I'm just so worried about him not gaining weight.",
      "onset": "It started about 2 months ago, maybe 6 weeks after we switched him to cow milk formula. At first I thought it was normal baby stuff, but it just kept getting worse.",
      "character": "The vomiting isn't the projectile kind - it's more like he spits up after every feeding, and the diarrhea is loose and watery with streaks of blood and mucus.",
      "location": "It's mostly stomach upset and frequent dirty diapers - he doesn't seem to have pain in any specific spot.",
      "severity": "I'd say 7 out of 10 - he's dropped from the 50th percentile to barely on the growth chart. I'm terrified he's not getting enough nutrition.",
      "aggravating": "It definitely seems worse right after feeding, and the cow milk formula seems to make everything worse.",
      "relieving": "Nothing has helped so far. The acid medicine they gave us did absolutely nothing after 2 months of trying it.",
      "associated": "He's fussy, not sleeping well, seems uncomfortable after eating, and has lost so much weight. His diapers are always messy.",
      "denies": "No fever, no projectile vomiting, no severe abdominal distension, and he's not completely refusing to eat.",
      "history": "No, nothing like this before. He was fine when he was breastfeeding the first 6 weeks.",
      "medications": "Formula change; IV Fluids; PPI discontinued",
      "allergies": "Cow milk",
      "family": "No one in our family has food allergies that I know of, but my sister had some digestive issues as a baby.",
      "social": "I'm a first-time mom, don't smoke or drink. I had to stop breastfeeding because of supply issues and went to cow milk formula."
    },
    "examManeuvers": [
      "General appearance and nutritional status",
      "Weight and growth parameters",
      "Abdominal inspection",
      "Abdominal palpation",
      "Bowel sounds",
      "Assessment for dehydration",
      "Skin examination",
      "Perianal examination",
      "Fontanelles and muscle tone",
      "Lymph node examination"
    ],
    "examFindings": {
      "General appearance and nutritional status": "Thin appearing 4-month-old, alert but irritable, evidence of poor weight gain",
      "Weight and growth parameters": "Weight dropped from 50th percentile at 2 months to 3rd percentile currently",
      "Abdominal inspection": "Mildly distended but soft, no visible masses or abnormal contours",
      "Abdominal palpation": "Soft, non-tender, no hepatosplenomegaly or masses palpated",
      "Bowel sounds": "Hyperactive bowel sounds present in all quadrants",
      "Assessment for dehydration": "Mild dehydration with slightly tacky mucous membranes, normal skin turgor",
      "Skin examination": "Pale, no rashes or eczema noted",
      "Perianal examination": "Erythema and irritation consistent with chronic diarrhea",
      "Fontanelles and muscle tone": "Anterior fontanelle soft and flat, muscle tone appropriate",
      "Lymph node examination": "No significant lymphadenopathy"
    },
    "ddxTargets": [
      "Chronic FPIES \u2014 cow's milk, poor weight gain, no IgE (correct)",
      "IgE-mediated cow's milk allergy \u2014 negative skin prick and RAST excludes",
      "Cow's milk protein allergy (non-IgE CMPA) \u2014 overlapping entity, treated identically",
      "Gastroesophageal reflux disease \u2014 vomiting, but weight loss and stool eosinophils suggest FPIES",
      "Pyloric stenosis \u2014 projectile vomiting, palpable olive mass, age-appropriate",
      "Hirschsprung disease \u2014 constipation predominant, not diarrhea"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on initial 'reflux' diagnosis and continuing acid suppression despite lack of improvement and presence of bloody stools",
      "prematureClosure": "Risk of stopping evaluation after common diagnosis like GERD without considering food protein intolerance given the bloody diarrhea and failure to thrive",
      "availabilityBias": "GERD is much more commonly diagnosed than FPIES, leading to potential missed diagnosis of this less familiar condition"
    },
    "coachPrompts": {
      "phase2": "Looking at this 4-month-old with chronic vomiting and bloody diarrhea, what key historical details would help you distinguish between your differential diagnoses? Think about the timeline, feeding history, and what's been tried therapeutically.",
      "phase5": "You've gathered good information about the temporal relationship with formula introduction and lack of response to acid suppression. Given the combination of failure to thrive, bloody diarrhea, and cow milk formula exposure, what specific type of food protein reaction should you be considering?",
      "finalDebrief": "This case highlights how FPIES can be subtle and chronic, unlike the acute dramatic presentations we often hear about. The key clues were the temporal relationship with cow milk formula, chronic bloody diarrhea, failure to thrive, and lack of response to reflux treatment. How might you counsel families about the difference between chronic FPIES and typical food allergies?",
      "final": "Diagnosis: chronic FPIES \u2014 cow's milk. Key learning: (1) Acute vs chronic FPIES: acute = episodic dramatic vomiting 1-4h after trigger, appears severely ill temporarily, then recovers completely. Chronic = low-level daily exposure \u2192 intermittent vomiting, loose stools, weight faltering, chronic gut inflammation. Chronic form is more common in younger infants on formula. (2) Diagnosis of chronic FPIES: clinical picture + IgE testing NEGATIVE + symptoms resolve after elimination diet + return after re-exposure or OFC. No biopsy required for diagnosis. (3) Elimination trial: symptoms should improve within 2 weeks of switching to amino acid formula. Weight gain resumes. This is both diagnostic AND therapeutic. (4) Stool biomarkers: elevated calprotectin and stool eosinophils suggest gut mucosal inflammation \u2014 supportive of FPIES or CMPA, not diagnostic alone. (5) Follow-up: once symptoms resolve on amino acid formula, supervised food challenge at age 12-18 months confirms whether FPIES has resolved. Most cases resolve by age 3-5. Reintroduce under allergy supervision \u2014 acute FPIES reaction can occur on first solid food reintroduction."
    }
  },
  "meta": {
    "diagnosis": "FPIES \u2014 Chronic Form, Cow's Milk Protein, Weight Faltering, Amino Acid Formula Transition",
    "caseId": "fpies-chronic-v2"
  }
};
