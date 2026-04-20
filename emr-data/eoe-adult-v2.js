
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
      "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
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
        "Reports long history of eating slowly, drinking lots of water with meals \u2014 thought this was normal"
      ],
      [
        "Coping",
        "Has been cutting food into tiny pieces and avoiding steak/bread for years"
      ],
      [
        "Presentation bias",
        "Diagnosed with GERD 3 years ago \u2014 PPI not helping, no one considered EoE"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "29yo with 6-hour food impaction \u2014 steak bolus lodged in distal esophagus",
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
          "description": "Suspected EoE \u2014 long history of dysphagia, \"slow eater,\" food avoidance",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "GERD \u2014 treated with PPI x3 years without improvement",
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
          "frequency": "BID (home med \u2014 not working)",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "29yo with 6-hour food impaction \u2014 steak bolus lodged in distal esophagus",
          "hpi": "29M presenting with 6-hour food impaction after eating steak at team dinner. Reports he has always been a \"slow eater\" and avoids bread and steak because they \"get stuck.\" Has been cutting food into very small pieces since college. Diagnosed with GERD 3 years ago \u2014 on omeprazole BID with minimal improvement. Never had EGD. On review, has had 2 prior food impaction episodes that resolved spontaneously. Reports significant social embarrassment \u2014 avoids team dinners and dates because of eating difficulties. This is a classic missed EoE diagnosis \u2014 adaptive eating behaviors masked the severity for years.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted after endoscopic disimpaction \u2014 EGD shows ringed esophagus with stricture, biopsies pending",
        "diagnosis": "Eosinophilic Esophagitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Esophageal food impaction \u2014 disimpacted endoscopically",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "EoE \u2014 ringed esophagus with proximal stricture on EGD",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "GERD \u2014 likely EoE misdiagnosed as GERD for 3 years",
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
          "description": "Social impact \u2014 food avoidance, dating avoidance",
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
          "frequency": "BID (do not inhale \u2014 swallow the puff)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Omeprazole",
          "dose": "40mg",
          "route": "PO",
          "frequency": "BID (continue \u2014 may have concurrent GERD)",
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
          "temp": "36.8\u00b0C",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
                  "test": "Esophageal biopsy \u2014 proximal",
                  "value": "68 eos/HPF",
                  "unit": "",
                  "range": "<15 eos/HPF",
                  "flag": "H"
                },
                {
                  "test": "Esophageal biopsy \u2014 mid",
                  "value": "45 eos/HPF",
                  "unit": "",
                  "range": "<15 eos/HPF",
                  "flag": "H"
                },
                {
                  "test": "Esophageal biopsy \u2014 distal",
                  "value": "52 eos/HPF",
                  "unit": "",
                  "range": "<15 eos/HPF",
                  "flag": "H"
                },
                {
                  "test": "Gastric biopsy",
                  "value": "Normal \u2014 0 eos/HPF",
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
          "cc": "Admitted after endoscopic disimpaction \u2014 EGD shows ringed esophagus with stricture, biopsies pending",
          "hpi": "29M after endoscopic disimpaction. EGD findings: classic EoE \u2014 concentric rings (\"trachealization\"), linear furrows, white exudates, and 8mm proximal stricture (dilated to 15mm). Biopsies: 45-68 eos/HPF in all esophageal levels (diagnostic). Gastric biopsies normal (rules out eosinophilic gastroenteritis). Started swallowed fluticasone. Patient emotional after diagnosis \u2014 \"so this is why I've always eaten like this? I thought something was wrong with me.\" Counseled extensively.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 newly diagnosed EoE, food allergy testing, long-term management plan",
        "diagnosis": "Eosinophilic Esophagitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EoE \u2014 newly diagnosed (68 eos/HPF), stricture dilated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Food triggers \u2014 need testing",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "3-year GERD misdiagnosis \u2014 discuss diagnostic delay",
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
          "temp": "36.8\u00b0C",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "A/I consult \u2014 newly diagnosed EoE, food allergy testing, long-term management plan",
          "hpi": "A/I consult: 29M with newly diagnosed EoE after years of adaptive eating behaviors. Food allergy testing: milk and wheat strongly positive \u2014 these are the 2 most common EoE triggers. Recommend 2-food elimination diet (remove milk and wheat) + swallowed fluticasone as dual therapy. Repeat EGD in 8 weeks to assess response. If milk/wheat elimination + fluticasone achieves histologic remission, can trial reintroduction one at a time. If refractory, consider dupilumab. Also discussed: this is not his fault, the diagnostic delay is common (average 5-7 years for EoE diagnosis), and his eating adaptations were actually a smart coping mechanism.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "EoE follow-up \u2014 repeat EGD results after 8 weeks of treatment",
        "diagnosis": "Eosinophilic Esophagitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "EoE \u2014 in histologic remission (68\u21924 eos/HPF on milk/wheat elimination + fluticasone)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Milk elimination \u2014 confirmed trigger on reintroduction (eos went back up)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Wheat \u2014 tolerated on reintroduction (not a trigger for this patient)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Esophageal stricture \u2014 improved, no further dilation needed",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Quality of life dramatically improved \u2014 eating at restaurants, dating again",
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
          "temp": "36.8\u00b0C",
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
                  "test": "Hematocrit",
                  "value": "40.8",
                  "unit": "%",
                  "range": "36-46",
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
          "cc": "EoE follow-up \u2014 repeat EGD results after 8 weeks of treatment",
          "hpi": "29M EoE follow-up. Repeat EGD: dramatic improvement \u2014 68\u21924 eos/HPF on combination therapy. Systematic reintroduction: wheat tolerated (reintroduced successfully, EGD normal), milk confirmed trigger (EGD showed 42 eos/HPF after 6-week milk reintroduction, resolved again after re-elimination). Now on fluticasone daily (maintenance) + strict milk avoidance. Reports eating steak for the first time in years without impaction. Went on a dinner date last week \u2014 \"first time I didn't have to explain why I eat weird.\" Stricture improved, no further dilation needed. Calcium/vitamin D supplementation for milk-free diet. Annual EGD for surveillance.",
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
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
    "emergencyContact": {
      "name": "Sarah Green",
      "phone": "(505) 555-7815",
      "relationship": "Spouse"
    },
    "chiefComplaint": "29yo with 6-hour food impaction \u2014 steak bolus lodged in distal esophagus",
    "diagnosis": "Eosinophilic Esophagitis"
  },
  "problems": [
    {
      "problem": "Eosinophilic esophagitis \u2014 EGD-confirmed",
      "icd": "K20.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Derek Walsh, 34M \u2014 recurrent dysphagia to solids x2 years, food impaction last week. Biopsy: >15 eos/hpf."
    },
    {
      "problem": "Esophageal stricture \u2014 fibrostenotic EoE complication",
      "icd": "K22.2",
      "onset": "2024",
      "status": "Active",
      "notes": "EGD: rings, furrows, white exudate. Mild stricture. Dilation performed at same session."
    },
    {
      "problem": "Atopic comorbidities \u2014 asthma, allergic rhinitis",
      "icd": "J45.909",
      "onset": "2015",
      "status": "Active",
      "notes": "EoE is an atopic disease \u2014 70-80% have concurrent atopic conditions. Allergy referral for food trigger testing."
    }
  ],
  "medications": [
    {
      "name": "Fluticasone 880mcg swallowed (not inhaled) BID \u2014 topical esophageal steroid",
      "sig": "Swallow the MDI puff \u2014 do NOT inhale. Topical steroid for esophageal eosinophilic inflammation. Do not eat/drink x30 min.",
      "prescriber": "GI/Allergy",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Omeprazole 40mg PO BID \u2014 PPI trial x8-12 weeks",
      "sig": "PPI-responsive esophageal eosinophilia (PREE) must be excluded. If biopsy normalizes on PPI alone \u2014 PPI-REE, not EoE (though increasingly considered a spectrum).",
      "prescriber": "GI",
      "start": "2024",
      "refills": 2,
      "status": "Active \u2014 diagnostic trial"
    },
    {
      "name": "Six-food elimination diet \u2014 concurrent dietary trial",
      "sig": "Eliminate: milk, wheat, egg, soy, tree nuts, seafood. Reintroduce one at a time with EGD between each \u2014 identify specific trigger. Milk and wheat are most common triggers.",
      "prescriber": "GI/Dietitian",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 dietary"
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
      "temp": "36.8\u00b0C",
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
      "cc": "29yo with 6-hour food impaction \u2014 steak bolus lodged in distal esophagus",
      "hpi": "29M presenting with 6-hour food impaction after eating steak at team dinner. Reports he has always been a \"slow eater\" and avoids bread and steak because they \"get stuck.\" Has been cutting food into very small pieces since college. Diagnosed with GERD 3 years ago \u2014 on omeprazole BID with minimal improvement. Never had EGD. On review, has had 2 prior food impaction episodes that resolved spontaneously. Reports significant social embarrassment \u2014 avoids team dinners and dates because of eating difficulties. This is a classic missed EoE diagnosis \u2014 adaptive eating behaviors masked the severity for years.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "EoE Workup",
      "results": [
        {
          "test": "Esophageal biopsy \u2014 eosinophils/hpf",
          "value": "42",
          "unit": "eos/hpf",
          "ref": "<15 eos/hpf",
          "flag": "H"
        },
        {
          "test": "Peripheral blood eosinophils",
          "value": "0.7",
          "unit": "K/\u03bcL",
          "ref": "<0.5",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "340",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "Wheat-specific IgE",
          "value": "4.2",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Milk-specific IgE",
          "value": "2.1",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "Upper Endoscopy (EGD)",
      "indication": "Dysphagia, food impaction",
      "findings": "Esophageal rings (trachealization), longitudinal furrows, white exudate. Mid-esophageal stricture. Biopsies taken proximal, mid, and distal.",
      "impression": "EoE endoscopic appearance \u2014 rings, furrows, exudate. Mild stricture dilated to 16mm. Histology: 42 eos/hpf confirming EoE."
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
      "Reports long history of eating slowly, drinking lots of water with meals \u2014 thought this was normal"
    ],
    [
      "Coping",
      "Has been cutting food into tiny pieces and avoiding steak/bread for years"
    ],
    [
      "Presentation bias",
      "Diagnosed with GERD 3 years ago \u2014 PPI not helping, no one considered EoE"
    ]
  ],
  "references": [
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
        "\u226515 eos/HPF diagnostic threshold",
        "1-food (milk) elimination first-line",
        "Swallowed budesonide/fluticasone",
        "Repeat EGD 8-12 weeks"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears anxious and somewhat embarrassed about his eating habits, frequently apologizing for being a 'weird eater.' He's been minimizing his symptoms for years, thinking his slow eating and food avoidance were normal quirks. Currently experiencing moderate distress from the impaction but is cooperative and increasingly concerned this might represent something more serious.",
    "interviewQuestions": [
      "Can you describe exactly what happened when you were eating the steak?",
      "How long have you been having trouble swallowing foods?",
      "What types of foods typically give you problems?",
      "Do you have any chest pain or difficulty swallowing liquids?",
      "Have you lost any weight recently or changed your eating habits?",
      "Do you have any allergies or history of asthma?",
      "Have you ever had food get stuck like this before?",
      "Do you experience heartburn or acid reflux symptoms?",
      "Has anyone in your family had similar swallowing problems?",
      "Do you take any medications regularly?",
      "Have you noticed any regurgitation of undigested food?",
      "Do you have any nausea or vomiting right now?",
      "Are you able to swallow your own saliva currently?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm a bit anxious about this whole situation.",
      "onset": "It started about 6 hours ago during our team dinner. I was eating steak and it just got stuck - worse than usual. I tried drinking water but it wouldn't go down.",
      "character": "It feels like there's a big piece of meat stuck right in the middle of my chest. I can't swallow anything, even water just comes back up.",
      "location": "Right here in my chest, behind my breastbone. It doesn't move or radiate anywhere, just sits there.",
      "severity": "Right now it's about a 7 out of 10. I can't swallow anything and I'm really worried. Usually when food gets stuck it's more like a 3 or 4.",
      "aggravating": "Trying to swallow anything makes it worse. Even my own saliva is hard to get down now.",
      "relieving": "Nothing is helping right now. Usually drinking lots of water helps, but not this time. That's why I came in.",
      "associated": "I'm nauseous and I've been spitting up saliva and water. No chest pain really, just this stuck feeling.",
      "denies": "No fever, no trouble breathing, no heartburn right now. I can breathe fine, it's just swallowing that's the problem.",
      "history": "Honestly, I've always been a slow eater. For years I've avoided steak and bread because they get stuck. I thought everyone had to chew food this much.",
      "medications": "Glucagon; Omeprazole",
      "allergies": "NKDA",
      "family": "My brother has Crohn's disease and my mom has asthma. No one else has swallowing problems that I know of.",
      "social": "I'm a high school teacher and football coach. I don't smoke, drink socially. I've been cutting my food into tiny pieces for years and drinking tons of water with meals - thought that was normal."
    },
    "examManeuvers": [
      "Inspect oropharynx and neck",
      "Palpate neck for lymphadenopathy",
      "Auscultate heart sounds",
      "Auscultate lung fields",
      "Inspect chest wall and assess respiratory effort",
      "Palpate abdomen for tenderness or masses",
      "Assess for signs of dehydration",
      "Evaluate ability to handle secretions",
      "Check for halitosis or regurgitated food odor"
    ],
    "examFindings": {
      "Inspect oropharynx and neck": "Oropharynx clear, no visible food debris, mild pooling of saliva, neck appears normal",
      "Palpate neck for lymphadenopathy": "No cervical, supraclavicular, or submandibular lymphadenopathy palpated",
      "Auscultate heart sounds": "Regular rate and rhythm, no murmurs, rubs, or gallops",
      "Auscultate lung fields": "Clear to auscultation bilaterally, no wheezes, crackles, or stridor",
      "Inspect chest wall and assess respiratory effort": "No respiratory distress, normal chest wall movement, no accessory muscle use",
      "Palpate abdomen for tenderness or masses": "Soft, non-tender, no masses or organomegaly, normal bowel sounds",
      "Assess for signs of dehydration": "Mucous membranes slightly dry, skin turgor normal, appears mildly dehydrated",
      "Evaluate ability to handle secretions": "Patient intermittently spitting into cup, difficulty managing saliva",
      "Check for halitosis or regurgitated food odor": "Mild halitosis present, no obvious food odor"
    },
    "ddxTargets": [
      "EoE \u2014 recurrent dysphagia, food impaction, >15 eos/hpf on biopsy (correct)",
      "GERD \u2014 can cause esophageal eosinophilia but <15 eos/hpf; no rings/furrows",
      "Achalasia \u2014 failure of LES relaxation; manometry distinguishes; different dysphagia pattern",
      "Esophageal candidiasis \u2014 white plaques but in immunocompromised; biopsy confirms",
      "Pill esophagitis \u2014 localized, history of medication use",
      "Hypereosinophilic syndrome \u2014 systemic eosinophilia involving multiple organs"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on simple food impaction without considering underlying esophageal pathology, especially given the long history of dysphagia and adaptive eating behaviors",
      "prematureClosure": "May focus only on immediate impaction management without investigating the pattern of chronic dysphagia, food avoidance, and failure to respond to PPI therapy",
      "availabilityBias": "Might default to GERD as explanation for chronic symptoms, missing the classic EoE presentation in a young male with food impaction and atopic family history"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, let's think about this case systematically. You have a young male with acute food impaction, but notice his history of being a 'slow eater' and avoiding certain foods. What underlying esophageal pathology might predispose someone to recurrent food impaction? Consider both structural and functional causes.",
      "phase5": "Now that you've gathered more history and examined the patient, you've learned about his chronic adaptive eating behaviors and family history of atopic disease. His PPI-refractory symptoms and specific food triggers are telling. How does this change your differential diagnosis from simple food impaction to something more systemic?",
      "finalDebrief": "This case illustrates how acute presentations can reveal chronic underlying pathology. Marcus's EoE was hiding in plain sight - the food avoidance, slow eating, and family atopy history were classic. Many patients adapt so well to their symptoms that the underlying disease goes undiagnosed for years. What red flags should make you think beyond simple GERD in young patients with dysphagia?",
      "final": "Diagnosis: EoE, adult. Key learning: (1) EoE diagnostic criteria: symptoms of esophageal dysfunction + \u226515 eosinophils/hpf on proximal AND distal esophageal biopsy + exclusion of secondary causes. Biopsies must be taken from multiple levels \u2014 patchy disease can be missed with single-site biopsy. (2) Classic endoscopic features (EREFS score): Edema (loss of vascular pattern), Rings (fixed rings = fibrostenotic), Exudate (white specks), Furrows (longitudinal), Stricture. EoE can have a normal-appearing esophagus endoscopically (~10%) \u2014 biopsies are essential regardless of appearance. (3) Swallowed vs inhaled steroid: fluticasone must be swallowed (puffed into mouth, swallowed without inhaling) \u2014 the goal is topical esophageal mucosal contact. Budesonide slurry (oral viscous budesonide) is an alternative with better mucosal contact. Do not eat or drink for 30 minutes after dosing. (4) Dietary therapy: six-food elimination (milk, wheat, egg, soy, tree nuts, seafood) achieves histologic remission in ~70%. Milk and wheat are triggers in ~60-70% \u2014 targeted elimination after food testing is an alternative to empiric six-food. Lifelong dietary management vs medication are both valid approaches. (5) Dilation: for strictures causing significant symptoms \u2014 treats the mechanical complication but does not treat the underlying inflammation. Inflammation management prevents recurrent stricture."
    }
  },
  "meta": {
    "diagnosis": "Eosinophilic Esophagitis \u2014 Adult, Food Impaction Presenting Event, Dietary Elimination and PPI Trial",
    "caseId": "eoe-adult-v2"
  }
};
