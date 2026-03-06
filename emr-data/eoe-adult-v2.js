/* emr-data/eoe-adult-v2.js — Multi-Setting Allergy Case Variation: Eosinophilic Esophagitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Marcus Green",
  "patientHPI": "I was having dinner with my team tonight and took a bite of steak that just got stuck in my throat and won't go down. It's been about six hours now and I can't swallow anything, not even water. This has actually happened to me a few times before over the years when I eat meat or bread, but it usually goes down on its own after a while.",
      "dob": "09/28/1997",
      "age": "29",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-589330",
      "language": "English",
      "race": "Black/African American",
      "phone": "(513) 555-8398",
      "email": "marcus.green@email.com",
      "address": "1657 Larkspur Ln, Louisville, KY 40208",
      "insurance": "Cigna PPO",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "Publix Pharmacy — Weston Rd",
      "emergencyContact": {
        "name": "Sarah Green",
        "phone": "(414) 555-7779",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
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
      "Brother: Crohn's disease",
      "Mother: asthma"
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
        "High school teacher and football coach"
      ],
      [
        "Diet",
        "Reports long history of eating slowly, drinking lots of water with meals — thought this was normal"
      ],
      [
        "Coping",
        "Has been cutting food into tiny pieces and avoiding steak/bread for years"
      ],
      [
        "Presentation bias",
        "Diagnosed with GERD 3 years ago — PPI not helping, no one considered EoE"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "29yo with 6-hour food impaction — steak bolus lodged in distal esophagus",
        "diagnosis": "Eosinophilic Esophagitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Esophageal food impaction (steak)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Suspected EoE — long history of dysphagia, \"slow eater,\" food avoidance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "GERD — treated with PPI x3 years without improvement",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Possible esophageal stricture",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Glucagon",
          "dose": "1mg",
          "route": "IV",
          "frequency": "Given x1 (unsuccessful)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Omeprazole",
          "dose": "40mg",
          "route": "PO",
          "frequency": "BID (home med — not working)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "132/78",
          "hr": "88",
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
          "accession": "LAB-203417",
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
          "cc": "29yo with 6-hour food impaction — steak bolus lodged in distal esophagus",
          "hpi": "29M presenting with 6-hour food impaction after eating steak at team dinner. Reports he has always been a \"slow eater\" and avoids bread and steak because they \"get stuck.\" Has been cutting food into very small pieces since college. Diagnosed with GERD 3 years ago — on omeprazole BID with minimal improvement. Never had EGD. On review, has had 2 prior food impaction episodes that resolved spontaneously. Reports significant social embarrassment — avoids team dinners and dates because of eating difficulties. This is a classic missed EoE diagnosis — adaptive eating behaviors masked the severity for years.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted after endoscopic disimpaction — EGD shows ringed esophagus with stricture, biopsies pending",
        "diagnosis": "Eosinophilic Esophagitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Esophageal food impaction — disimpacted endoscopically",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "EoE — ringed esophagus with proximal stricture on EGD",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "GERD — likely EoE misdiagnosed as GERD for 3 years",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Esophageal dilation performed",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Social impact — food avoidance, dating avoidance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone swallowed",
          "dose": "880mcg",
          "route": "Swallowed",
          "frequency": "BID (do not inhale — swallow the puff)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Omeprazole",
          "dose": "40mg",
          "route": "PO",
          "frequency": "BID (continue — may have concurrent GERD)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Soft diet",
          "dose": "",
          "route": "PO",
          "frequency": "x1 week post-dilation",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "128/78",
          "hr": "78",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-338000",
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
              "name": "PATHOLOGY",
              "results": [
                {
                  "test": "Esophageal biopsy — proximal",
                  "value": "68 eos/HPF",
                  "unit": "",
                  "range": "<15 eos/HPF",
                  "flag": "H"
                },
                {
                  "test": "Esophageal biopsy — mid",
                  "value": "45 eos/HPF",
                  "unit": "",
                  "range": "<15 eos/HPF",
                  "flag": "H"
                },
                {
                  "test": "Esophageal biopsy — distal",
                  "value": "52 eos/HPF",
                  "unit": "",
                  "range": "<15 eos/HPF",
                  "flag": "H"
                },
                {
                  "test": "Gastric biopsy",
                  "value": "Normal — 0 eos/HPF",
                  "unit": "",
                  "range": "",
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
          "cc": "Admitted after endoscopic disimpaction — EGD shows ringed esophagus with stricture, biopsies pending",
          "hpi": "29M after endoscopic disimpaction. EGD findings: classic EoE — concentric rings (\"trachealization\"), linear furrows, white exudates, and 8mm proximal stricture (dilated to 15mm). Biopsies: 45-68 eos/HPF in all esophageal levels (diagnostic). Gastric biopsies normal (rules out eosinophilic gastroenteritis). Started swallowed fluticasone. Patient emotional after diagnosis — \"so this is why I've always eaten like this? I thought something was wrong with me.\" Counseled extensively.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — newly diagnosed EoE, food allergy testing, long-term management plan",
        "diagnosis": "Eosinophilic Esophagitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EoE — newly diagnosed (68 eos/HPF), stricture dilated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Food triggers — need testing",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "3-year GERD misdiagnosis — discuss diagnostic delay",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Social/psychological impact of years of adaptive eating",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone swallowed",
          "dose": "880mcg",
          "route": "Swallowed",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Omeprazole",
          "dose": "40mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "124/76",
          "hr": "74",
          "rr": "14",
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
          "accession": "LAB-258316",
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
              "name": "FOOD ALLERGY PANEL",
              "results": [
                {
                  "test": "Milk sIgE",
                  "value": "8.4",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Wheat sIgE",
                  "value": "3.2",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Egg sIgE",
                  "value": "0.6",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Soy sIgE",
                  "value": "<0.35",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": ""
                },
                {
                  "test": "Total IgE",
                  "value": "320",
                  "unit": "IU/mL",
                  "range": "<100",
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
          "provider": "Dr. Allergist",
          "cc": "A/I consult — newly diagnosed EoE, food allergy testing, long-term management plan",
          "hpi": "A/I consult: 29M with newly diagnosed EoE after years of adaptive eating behaviors. Food allergy testing: milk and wheat strongly positive — these are the 2 most common EoE triggers. Recommend 2-food elimination diet (remove milk and wheat) + swallowed fluticasone as dual therapy. Repeat EGD in 8 weeks to assess response. If milk/wheat elimination + fluticasone achieves histologic remission, can trial reintroduction one at a time. If refractory, consider dupilumab. Also discussed: this is not his fault, the diagnostic delay is common (average 5-7 years for EoE diagnosis), and his eating adaptations were actually a smart coping mechanism.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "EoE follow-up — repeat EGD results after 8 weeks of treatment",
        "diagnosis": "Eosinophilic Esophagitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EoE — in histologic remission (68→4 eos/HPF on milk/wheat elimination + fluticasone)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Milk elimination — confirmed trigger on reintroduction (eos went back up)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Wheat — tolerated on reintroduction (not a trigger for this patient)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Esophageal stricture — improved, no further dilation needed",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Quality of life dramatically improved — eating at restaurants, dating again",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone swallowed",
          "dose": "880mcg",
          "route": "Swallowed",
          "frequency": "Daily (reduced from BID)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Milk-free diet",
          "dose": "",
          "route": "",
          "frequency": "Strict avoidance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Calcium + Vitamin D",
          "dose": "1000mg/800IU",
          "route": "PO",
          "frequency": "Daily (milk-free diet supplementation)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "126/76",
          "hr": "72",
          "rr": "14",
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
          "accession": "LAB-880199",
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
          "cc": "EoE follow-up — repeat EGD results after 8 weeks of treatment",
          "hpi": "29M EoE follow-up. Repeat EGD: dramatic improvement — 68→4 eos/HPF on combination therapy. Systematic reintroduction: wheat tolerated (reintroduced successfully, EGD normal), milk confirmed trigger (EGD showed 42 eos/HPF after 6-week milk reintroduction, resolved again after re-elimination). Now on fluticasone daily (maintenance) + strict milk avoidance. Reports eating steak for the first time in years without impaction. Went on a dinner date last week — \"first time I didn't have to explain why I eat weird.\" Stricture improved, no further dilation needed. Calcium/vitamin D supplementation for milk-free diet. Annual EGD for surveillance.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Marcus Green",
    "dob": "09/28/1997",
    "age": "29",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-589330",
    "language": "English",
    "race": "Black/African American",
    "phone": "(503) 555-8430",
    "email": "marcus.green@email.com",
    "address": "2601 S Halsted St, Memphis, TN 38104",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Sarah Green",
      "phone": "(505) 555-7815",
      "relationship": "Spouse"
    },
    "chiefComplaint": "29yo with 6-hour food impaction — steak bolus lodged in distal esophagus",
    "diagnosis": "Eosinophilic Esophagitis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Esophageal food impaction (steak)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Suspected EoE — long history of dysphagia, \"slow eater,\" food avoidance",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "GERD — treated with PPI x3 years without improvement",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Possible esophageal stricture",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Glucagon",
      "dose": "1mg",
      "route": "IV",
      "frequency": "Given x1 (unsuccessful)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Omeprazole",
      "dose": "40mg",
      "route": "PO",
      "frequency": "BID (home med — not working)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "132/78",
      "hr": "88",
      "rr": "16",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "29yo with 6-hour food impaction — steak bolus lodged in distal esophagus",
      "hpi": "29M presenting with 6-hour food impaction after eating steak at team dinner. Reports he has always been a \"slow eater\" and avoids bread and steak because they \"get stuck.\" Has been cutting food into very small pieces since college. Diagnosed with GERD 3 years ago — on omeprazole BID with minimal improvement. Never had EGD. On review, has had 2 prior food impaction episodes that resolved spontaneously. Reports significant social embarrassment — avoids team dinners and dates because of eating difficulties. This is a classic missed EoE diagnosis — adaptive eating behaviors masked the severity for years.",
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
      "accession": "LAB-203417",
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
    "Brother: Crohn's disease",
    "Mother: asthma"
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
      "High school teacher and football coach"
    ],
    [
      "Diet",
      "Reports long history of eating slowly, drinking lots of water with meals — thought this was normal"
    ],
    [
      "Coping",
      "Has been cutting food into tiny pieces and avoiding steak/bread for years"
    ],
    [
      "Presentation bias",
      "Diagnosed with GERD 3 years ago — PPI not helping, no one considered EoE"
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
