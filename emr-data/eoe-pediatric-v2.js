/* emr-data/eoe-pediatric-v2.js — Variation: Eosinophilic Esophagitis — Pediatric */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Liam O'Sullivan",
  "patientHPI": "I was eating chicken nuggets and one got stuck in my throat and I can't swallow it down. I've been drooling because I can't even swallow my spit. My mom says this has been happening since I was little - food getting stuck when I eat, and she's always had to cut my food up really small or give me soft things to eat.",
      "dob": "08/14/2015",
      "age": "11",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-901731",
      "language": "English",
      "race": "White",
      "phone": "(313) 555-4637",
      "email": "liam.x@email.com",
      "address": "8324 Hollyhock Rd, Memphis, TN 38111",
      "insurance": "Aetna HMO",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(614) 555-6727",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Milk",
        "reaction": "EoE trigger",
        "severity": "Moderate",
        "type": "Food"
      },
      {
        "allergen": "Egg",
        "reaction": "Eczema",
        "severity": "Mild",
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
      "Mother: food allergies",
      "Father: asthma"
    ],
    "socialHistory": [
      [
        "Context",
        "Picky eater since toddlerhood — actually dysphagia from EoE"
      ],
      [
        "Behavior",
        "Takes 45 min to eat meals, cuts food into tiny pieces, drinks excessively with meals"
      ],
      [
        "Missed diagnosis",
        "Labeled \"picky eater\" and \"behavioral\" for 6 years — actually had EoE the whole time"
      ],
      [
        "Nutrition",
        "Underweight — 10th percentile, avoiding foods that \"get stuck\""
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "11yo with food impaction (chicken nugget) — history of \"picky eating\" for 6 years actually represents undiagnosed EoE",
        "diagnosis": "Eosinophilic Esophagitis — Pediatric"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Esophageal food impaction — chicken nugget",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Long history of \"picky eating\" — actually adaptive behavior for dysphagia",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Underweight (10th percentile) — avoiding foods that cause difficulty",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Labeled as behavioral problem — not medical — for 6 years",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "EGD needed — likely EoE",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Glucagon",
          "dose": "0.5mg",
          "route": "IV",
          "frequency": "Attempted — unsuccessful",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Endoscopy",
          "dose": "",
          "route": "",
          "frequency": "Emergent disimpaction performed",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "112",
          "rr": "20",
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
          "accession": "LAB-686056",
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
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "11yo with food impaction (chicken nugget) — history of \"picky eating\" for 6 years actually represents undiagnosed EoE",
          "hpi": "11M brought after choking on chicken nugget — unable to swallow for 2 hours, drooling. History reveals 6 YEARS of \"picky eating\": takes 45 min per meal, cuts everything tiny, drinks water between every bite, avoids bread/meat/dry foods. Multiple pediatricians labeled this as \"behavioral\" and \"attention-seeking.\" He was actually describing dysphagia the whole time. EGD for disimpaction: ringed esophagus with furrows — classic EoE. Biopsies 52 eos/HPF. This child was misdiagnosed as a picky eater for 6 years. His eating behaviors were adaptive — he was trying to eat safely with a narrowed, inflamed esophagus.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted after disimpaction — EoE diagnosis, starting treatment",
        "diagnosis": "Eosinophilic Esophagitis — Pediatric"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EoE — newly diagnosed (52 eos/HPF, ringed esophagus)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "6-year diagnostic delay — labeled \"behavioral\"",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food impaction — disimpacted",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Underweight — malnutrition from food avoidance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Starting swallowed budesonide",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Psych — years of being told he's \"difficult\" at meals has affected self-esteem",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Budesonide slurry",
          "dose": "1mg",
          "route": "PO (swallowed)",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Soft diet",
          "dose": "",
          "route": "PO",
          "frequency": "x1 week post-impaction",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "98",
          "rr": "18",
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
          "accession": "LAB-875831",
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
          "cc": "Admitted after disimpaction — EoE diagnosis, starting treatment",
          "hpi": "11M after EoE diagnosis. Parents emotional — mother says \"I spent 6 years telling him to stop being difficult at dinner. He was SICK the whole time.\" Child also processing — relieved there's a reason but sad no one believed him. Nutritionist involved for catch-up growth. Budesonide slurry started. Parents taught mixing technique (budesonide respule + sucralose + nothing to drink for 30 min after).",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — EoE management, food trigger identification, long-term plan",
        "diagnosis": "Eosinophilic Esophagitis — Pediatric"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EoE — confirmed, 52 eos/HPF",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Milk sIgE elevated — likely trigger (most common in pediatric EoE)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "1-food elimination diet trial (milk) + budesonide combination",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Repeat EGD in 8 weeks to assess response",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Catch-up growth plan",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "Psychological impact of 6-year misdiagnosis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Budesonide slurry",
          "dose": "1mg",
          "route": "PO (swallowed)",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Milk-free diet",
          "dose": "",
          "route": "",
          "frequency": "Strict elimination",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Calcium + Vitamin D supplement",
          "dose": "",
          "route": "PO",
          "frequency": "Daily (since milk-free)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "92",
          "rr": "16",
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
          "accession": "LAB-917812",
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
              "name": "ALLERGY/EoE",
              "results": [
                {
                  "test": "Milk sIgE",
                  "value": "8",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Egg sIgE",
                  "value": "2.1",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Wheat sIgE",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Soy sIgE",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Esophageal biopsy",
                  "value": "52 eos/HPF, basal zone hyperplasia",
                  "unit": "",
                  "range": "<15",
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
          "cc": "A/I consult — EoE management, food trigger identification, long-term plan",
          "hpi": "A/I: 11M newly diagnosed EoE. Starting 1-food elimination (milk) + swallowed budesonide. Milk is the most common trigger in pediatric EoE and his sIgE is elevated. Simpler approach than 6-food elimination — start with most likely trigger, assess response, add eliminations only if needed. Repeat EGD at 8 weeks. Also: egg mildly elevated but has been eating egg without clear symptoms — will address after milk trial results.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "EoE follow-up — 8-week repeat EGD results, milk confirmed as trigger",
        "diagnosis": "Eosinophilic Esophagitis — Pediatric"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EoE — histologic remission on milk elimination + budesonide (52→3 eos/HPF)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Milk confirmed trigger — will attempt budesonide taper to see if diet alone maintains remission",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Growth — improved, now 18th percentile (was 10th)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Eating behavior normalized — no longer takes 45 min per meal",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Self-esteem improving — told class about EoE for school project",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Budesonide slurry",
          "dose": "0.5mg",
          "route": "PO (swallowed)",
          "frequency": "BID (tapering from 1mg)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Milk-free diet",
          "dose": "",
          "route": "",
          "frequency": "Continuing — confirmed trigger",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Calcium supplement",
          "dose": "500mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "88",
          "rr": "16",
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
          "accession": "LAB-830537",
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
          "cc": "EoE follow-up — 8-week repeat EGD results, milk confirmed as trigger",
          "hpi": "11M repeat EGD: 52→3 eos/HPF — histologic remission. Milk confirmed as the trigger. Tapering budesonide to see if diet alone maintains remission. Growth improving. Most importantly: he's eating normally for the first time in 6 years. Meals take 15 min instead of 45. Eating bread and meat without difficulty. Mother tearful: \"I wish we'd known sooner.\" Did a school presentation about EoE — \"the disease that made everyone think I was a picky eater.\"",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Liam O'Sullivan",
    "dob": "08/14/2015",
    "age": "11",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-901731",
    "language": "English",
    "race": "White",
    "phone": "(212) 555-7797",
    "email": "liam.x@email.com",
    "address": "3778 Chestnut Rd, New Orleans, LA 70114",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(312) 555-7495",
      "relationship": "Parent"
    },
    "chiefComplaint": "11yo with food impaction (chicken nugget) — history of \"picky eating\" for 6 years actually represents undiagnosed EoE",
    "diagnosis": "Eosinophilic Esophagitis — Pediatric"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Esophageal food impaction — chicken nugget",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Long history of \"picky eating\" — actually adaptive behavior for dysphagia",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Underweight (10th percentile) — avoiding foods that cause difficulty",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Labeled as behavioral problem — not medical — for 6 years",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "EGD needed — likely EoE",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Glucagon",
      "dose": "0.5mg",
      "route": "IV",
      "frequency": "Attempted — unsuccessful",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Endoscopy",
      "dose": "",
      "route": "",
      "frequency": "Emergent disimpaction performed",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Milk",
      "reaction": "EoE trigger",
      "severity": "Moderate",
      "type": "Food"
    },
    {
      "allergen": "Egg",
      "reaction": "Eczema",
      "severity": "Mild",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "N/A",
      "hr": "112",
      "rr": "20",
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
      "cc": "11yo with food impaction (chicken nugget) — history of \"picky eating\" for 6 years actually represents undiagnosed EoE",
      "hpi": "11M brought after choking on chicken nugget — unable to swallow for 2 hours, drooling. History reveals 6 YEARS of \"picky eating\": takes 45 min per meal, cuts everything tiny, drinks water between every bite, avoids bread/meat/dry foods. Multiple pediatricians labeled this as \"behavioral\" and \"attention-seeking.\" He was actually describing dysphagia the whole time. EGD for disimpaction: ringed esophagus with furrows — classic EoE. Biopsies 52 eos/HPF. This child was misdiagnosed as a picky eater for 6 years. His eating behaviors were adaptive — he was trying to eat safely with a narrowed, inflamed esophagus.",
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
      "accession": "LAB-686056",
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
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/2025",
      "lot": "FL-25",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Mother: food allergies",
    "Father: asthma"
  ],
  "socialHistory": [
    [
      "Context",
      "Picky eater since toddlerhood — actually dysphagia from EoE"
    ],
    [
      "Behavior",
      "Takes 45 min to eat meals, cuts food into tiny pieces, drinks excessively with meals"
    ],
    [
      "Missed diagnosis",
      "Labeled \"picky eater\" and \"behavioral\" for 6 years — actually had EoE the whole time"
    ],
    [
      "Nutrition",
      "Underweight — 10th percentile, avoiding foods that \"get stuck\""
    ]
  ]
,"references":[
  {
    "id": "EoE-AGA-2020",
    "title": "AGA clinical practice update on dietary management of EoE",
    "authors": "Hirano I, Chan ES, Rank MA, et al.",
    "journal": "Gastroenterology",
    "year": 2020,
    "doi": "10.1053/j.gastro.2020.02.038",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7286571/",
    "openAccess": true,
    "validates": [
      "≥15 eos/HPF diagnostic threshold",
      "1-food (milk) elimination first-line",
      "Swallowed budesonide/fluticasone",
      "Repeat EGD 8-12 weeks"
    ]
  }
]};
