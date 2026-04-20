/* emr-data/fpies-acute.js — Multi-Setting Allergy Case: FPIES — Acute */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Amara Williams",
      "patientHPI": "We tried giving our baby rice cereal for the first time this morning, and about two hours later she started throwing up over and over again - now she's just lying there so sleepy and won't wake up much.",
      "dob": "06/09/2026",
      "age": "0",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-174434",
      "language": "English",
      "race": "Multiracial",
      "phone": "(317) 555-5040",
      "email": "amara.williams@email.com",
      "address": "6030 Spruce St, Phoenix, AZ 85012",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
      "emergencyContact": {
        "name": "Thomas Williams",
        "phone": "(720) 555-9830",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": "Drug"
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
      "Older sibling: milk FPIES (resolved)"
    ],
    "socialHistory": [
      [
        "Trigger",
        "First introduction of rice cereal \u2014 repetitive vomiting began ~2h later"
      ],
      [
        "Feeding history",
        "Exclusively breastfed until today"
      ],
      [
        "Key feature",
        "No urticaria, no respiratory symptoms \u2014 GI-isolated"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
        "diagnosis": "FPIES \u2014 Acute Episode"
      },
      "problems": [],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "168",
          "rr": "42",
          "temp": "36.2\u00b0C",
          "spo2": "97%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-558562",
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
                  "value": "18.4",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
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
                  "value": "520",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "150-400",
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
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "16",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Methemoglobin",
                  "value": "2.8",
                  "unit": "%",
                  "range": "<1.5",
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
          "cc": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
          "hpi": "Amara Williams presents with 4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy.",
          "exam": "See documentation.",
          "assessment": "FPIES \u2014 Acute Episode",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "4mo admitted after FPIES episode \u2014 IV fluids, monitoring for recurrence",
        "diagnosis": "FPIES \u2014 Acute"
      },
      "problems": [],
      "medications": [
        {
          "id": "med-add-1",
          "name": "IV Fluids",
          "dose": "D5 1/2NS",
          "route": "IV",
          "frequency": "Maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Ondansetron",
          "dose": "0.15mg/kg",
          "route": "IV",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "148",
          "rr": "36",
          "temp": "36.6\u00b0C",
          "spo2": "98%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-558562",
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
                  "value": "18.4",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
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
                  "value": "520",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "150-400",
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
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "16",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Methemoglobin",
                  "value": "2.8",
                  "unit": "%",
                  "range": "<1.5",
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
          "cc": "4mo admitted after FPIES episode \u2014 IV fluids, monitoring for recurrence",
          "hpi": "Amara Williams \u2014 4mo admitted after FPIES episode \u2014 IV fluids, monitoring for recurrence",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 confirm FPIES diagnosis, guide safe food introduction",
        "diagnosis": "FPIES \u2014 Acute"
      },
      "problems": [],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "138",
          "rr": "32",
          "temp": "36.8\u00b0C",
          "spo2": "99%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-558562",
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
                  "value": "18.4",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
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
                  "value": "520",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "150-400",
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
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "16",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Methemoglobin",
                  "value": "2.8",
                  "unit": "%",
                  "range": "<1.5",
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
          "cc": "A/I consult \u2014 confirm FPIES diagnosis, guide safe food introduction",
          "hpi": "Amara Williams \u2014 A/I consult \u2014 confirm FPIES diagnosis, guide safe food introduction",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "FPIES follow-up \u2014 food diary review, plan supervised oral food challenge at age 12-18mo",
        "diagnosis": "FPIES \u2014 Acute"
      },
      "problems": [],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "N/A",
          "hr": "130",
          "rr": "28",
          "temp": "36.8\u00b0C",
          "spo2": "99%",
          "pain": "N/A"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-558562",
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
                  "value": "18.4",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
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
                  "value": "520",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "150-400",
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
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "16",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": "L"
                }
              ]
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Methemoglobin",
                  "value": "2.8",
                  "unit": "%",
                  "range": "<1.5",
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
          "cc": "FPIES follow-up \u2014 food diary review, plan supervised oral food challenge at age 12-18mo",
          "hpi": "Amara Williams \u2014 FPIES follow-up \u2014 food diary review, plan supervised oral food challenge at age 12-18mo",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Amara Williams",
    "dob": "06/09/2026",
    "age": "0",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-174434",
    "language": "English",
    "race": "Multiracial",
    "phone": "(415) 555-8019",
    "email": "amara.williams@email.com",
    "address": "1589 Birch Ln, Milwaukee, WI 53204",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
    "emergencyContact": {
      "name": "Thomas Williams",
      "phone": "(620) 555-7543",
      "relationship": "Parent"
    },
    "chiefComplaint": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
    "diagnosis": "FPIES \u2014 Acute Episode"
  },
  "problems": [
    {
      "problem": "FPIES \u2014 acute, rice-triggered",
      "icd": "K52.29",
      "onset": "2024",
      "status": "Active",
      "notes": "4-month-old; first exposure to rice cereal; classic FPIES presentation: profuse vomiting 2h post-ingestion, lethargy, pallor"
    },
    {
      "problem": "Dehydration \u2014 moderate",
      "icd": "E86.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Estimated 7% deficit based on clinical assessment and weight loss from baseline"
    },
    {
      "problem": "Exclusively breastfed infant, food introduction begun today",
      "icd": "Z39.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Mother breastfeeding without restriction; FPIES is solid food triggered, not breast milk"
    }
  ],
  "medications": [
    {
      "name": "IV Normal Saline \u2014 20 mL/kg bolus (given in ED)",
      "sig": "Administer 20 mL/kg NS IV over 20-30 minutes; reassess perfusion",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Ondansetron 0.15 mg/kg IV (given in ED)",
      "sig": "0.15 mg/kg IV x1 for acute FPIES vomiting \u2014 may reduce episode duration",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "Given \u2014 off-label use"
    },
    {
      "name": "Follow-up \u2014 allergist referral placed",
      "sig": "FPIES management counseling, oral food challenge protocol at 12-18 months",
      "prescriber": "Dr. Chen",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "N/A",
      "hr": "168",
      "rr": "42",
      "temp": "36.2\u00b0C",
      "spo2": "97%",
      "pain": "N/A"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
      "hpi": "Amara Williams presents with 4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy.",
      "exam": "See documentation.",
      "assessment": "FPIES \u2014 Acute Episode",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/20/2024",
      "panel": "FPIES Acute Episode Workup",
      "results": [
        {
          "test": "CBC \u2014 WBC",
          "value": "18.2",
          "unit": "K/\u03bcL",
          "ref": "5.0-15.0",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 Neutrophils",
          "value": "75",
          "unit": "%",
          "ref": "25-60",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 Eosinophils",
          "value": "0.2",
          "unit": "K/\u03bcL",
          "ref": "0.0-0.7",
          "flag": ""
        },
        {
          "test": "BMP \u2014 Sodium",
          "value": "132",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "BMP \u2014 Potassium",
          "value": "3.1",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "BMP \u2014 Bicarbonate",
          "value": "16",
          "unit": "mEq/L",
          "ref": "22-29",
          "flag": "L"
        },
        {
          "test": "Methemoglobin",
          "value": "2.8",
          "unit": "%",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Rice IgE (ImmunoCAP)",
          "value": "<0.35",
          "unit": "kUA/L",
          "ref": "<0.35",
          "flag": ""
        },
        {
          "test": "Total IgE",
          "value": "12",
          "unit": "IU/mL",
          "ref": "<15 (infant)",
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
    "Older sibling: milk FPIES (resolved)"
  ],
  "socialHistory": [
    [
      "Trigger",
      "First introduction of rice cereal \u2014 repetitive vomiting began ~2h later"
    ],
    [
      "Feeding history",
      "Exclusively breastfed until today"
    ],
    [
      "Key feature",
      "No urticaria, no respiratory symptoms \u2014 GI-isolated"
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
  "teachingPoints": {
    "keyLearning": [
      "FPIES is non-IgE mediated \u2014 SPT and sIgE are negative. Misdiagnosis as viral gastroenteritis or sepsis is common because the presentation (profuse vomiting, lethargy, pallor) is dramatic and occurs without urticaria.",
      "IV ondansetron (5-HT3 antagonist) is first-line treatment for acute FPIES \u2014 0.15 mg/kg IV, max 4 mg. Prescribed as home ODT for mild episodes. NOT epinephrine (no IgE mechanism).",
      "FPIES diagnostic criteria: vomiting 1\u20134h post-ingestion (no urticaria/wheeze) + \u22653 of: lethargy, pallor, profuse vomiting, hypotension, hypothermia, diarrhea at 5\u201310h, neutrophilia +3,500 at 6h."
    ],
    "boardPearls": [
      "FPIES timing: vomiting 1\u20134h after ingestion. Distinguish from IgE anaphylaxis (5\u201330 min) and food poisoning (1\u20136h but usually multiple people affected).",
      "Top triggers by age: infants \u2014 cow's milk, soy. Toddlers \u2014 rice, oat, sweet potato. Adults \u2014 shellfish (oyster, crab, shrimp).",
      "Acute management: IV ondansetron 0.15 mg/kg (max 4 mg). IV NS 20 mL/kg if hypotension. NOT epinephrine.",
      "Natural history: milk/soy FPIES resolves ~50% by age 3. Grain FPIES resolves by 3\u20135. Shellfish may persist into adulthood.",
      "Atypical FPIES: 10\u201320% develop IgE sensitization to trigger \u2192 prescribe EpiPen in these patients.",
      "Confirm resolution: supervised OFC in allergist office \u2014 never at home."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Amara's mother appears anxious and protective, holding her lethargic infant close while providing detailed information about the feeding timeline. She is very forthcoming about symptoms and family history, particularly noting the older sibling's similar reaction to foods, and expresses moderate distress about her baby's sudden decline after introducing solid food.",
    "interviewQuestions": [
      "Can you tell me exactly when Amara's symptoms started in relation to feeding?",
      "What specific food did you introduce and how much did she eat?",
      "Describe the vomiting - how many times and what did it look like?",
      "Has Amara had any skin changes, rash, or hives?",
      "Any breathing problems, wheezing, or coughing?",
      "How has her energy level and alertness changed?",
      "Has she had any diarrhea or changes in bowel movements?",
      "What was Amara eating before today?",
      "Has she ever had reactions to any foods before?",
      "Tell me about your older child's milk problems",
      "Has Amara been sick recently or had any fever?",
      "Any family history of food allergies or reactions?",
      "How is she acting now compared to this morning?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean - can you ask that differently? I'm worried about my baby.",
      "onset": "She ate the rice cereal around 10 AM for the first time, and the vomiting started about 2 hours later, around noon.",
      "character": "It's been repetitive projectile vomiting - she can't keep anything down, not even breast milk now.",
      "location": "Just vomiting from her stomach - nothing else seems to bother her physically.",
      "severity": "I'd say 8 out of 10 - she's become so listless and weak, this isn't like her at all.",
      "aggravating": "Trying to feed her anything, even breast milk, seems to make the vomiting worse now.",
      "relieving": "Nothing seems to help - I've tried holding her upright, but she just keeps vomiting.",
      "associated": "She's become very lethargic and sleepy, not her usual active self, but no fever or other symptoms.",
      "denies": "No rash, no hives, no breathing problems, no wheezing, no fever, no diarrhea yet.",
      "history": "This is the first time anything like this has happened - she's never had food reactions before.",
      "medications": "no medications",
      "allergies": "NKDA",
      "family": "Her older brother had severe vomiting reactions to milk when he was a baby - the doctor called it FPIES, but he outgrew it.",
      "social": "She's been exclusively breastfed until today when I started introducing rice cereal as her pediatrician recommended."
    },
    "examManeuvers": [
      "General appearance and responsiveness",
      "Skin examination for urticaria or rash",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Assessment of hydration status",
      "Neurologic responsiveness",
      "Vital signs assessment",
      "Growth parameters",
      "Oral examination"
    ],
    "examFindings": {
      "General appearance and responsiveness": "Lethargic 4-month-old infant, less interactive than expected, appears mildly ill",
      "Skin examination for urticaria or rash": "No urticaria, angioedema, or rash present; skin appears normal",
      "Cardiovascular examination": "Tachycardic at 168 bpm, regular rhythm, normal heart sounds, capillary refill 2 seconds",
      "Pulmonary examination": "Clear breath sounds bilaterally, no wheezing, retractions, or respiratory distress",
      "Abdominal examination": "Soft, non-distended, no masses, normal bowel sounds, no tenderness",
      "Assessment of hydration status": "Mild dehydration with slightly tacky mucous membranes, fontanelle soft",
      "Neurologic responsiveness": "Decreased alertness and activity level, responds to stimuli but less vigorously",
      "Vital signs assessment": "HR 168, Temp 36.2\u00b0C, SpO2 97%, BP not obtained in infant",
      "Growth parameters": "Appropriate weight for age on growth curve",
      "Oral examination": "Mucous membranes slightly tacky, no oral lesions"
    },
    "ddxTargets": [
      "FPIES \u2014 acute, rice-triggered, infant (correct)",
      "IgE-mediated food allergy with anaphylaxis \u2014 urticaria and angioedema present; rice IgE negative",
      "Viral gastroenteritis \u2014 not first exposure-linked; more gradual onset; family members ill",
      "Intussusception \u2014 colicky pain, currant jelly stool; ultrasound diagnostic; not vomiting-predominant",
      "Hypertrophic pyloric stenosis \u2014 non-bilious projectile vomiting; weeks 2-8 of life; palpable olive",
      "Sepsis \u2014 fever typically present; onset after feeding; blood cultures needed to exclude"
    ],
    "biasFlags": {
      "anchoring": "May anchor on common viral gastroenteritis and miss the temporal relationship to new food introduction",
      "prematureClosure": "Might stop at 'food allergy' without distinguishing between IgE-mediated allergy and non-IgE FPIES",
      "availabilityBias": "May focus on more familiar IgE-mediated reactions with urticaria rather than considering delayed GI-only presentations"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Before you interview the patient, think about what key historical features would help you distinguish between IgE-mediated food reactions versus non-IgE mediated reactions. What timing patterns would you expect for each?",
      "phase5": "Excellent history taking. You've identified a clear temporal relationship to rice cereal introduction, family history of FPIES, and notably absent urticaria or respiratory symptoms. How does this constellation of findings help narrow your differential diagnosis?",
      "finalDebrief": "This case highlights the importance of recognizing FPIES as a distinct entity from IgE-mediated food allergy. The delayed onset (2+ hours), GI-only symptoms, absence of urticaria, and family history were key distinguishing features. How might your approach differ if this patient had presented with immediate onset and urticaria?",
      "final": "Diagnosis: acute FPIES, rice-triggered, 4-month-old. Key teaching points: (1) FPIES is non-IgE-mediated (T-cell and innate immune driven) \u2014 serum IgE and skin prick tests are NEGATIVE. Do not mistake for IgE allergy. Classic triad: repetitive projectile vomiting 1-4h post-ingestion, lethargy/pallor, resolution within 24h of trigger removal. (2) Laboratory finding: leukocytosis with neutrophil shift \u2014 a reactive pattern from mucosal injury, not infection. Methemoglobin may be mildly elevated. (3) Common triggers: rice, oat, dairy, soy, fish (age-dependent). Breast milk rarely triggers FPIES \u2014 breastfeeding can continue. (4) Treatment: IV fluids + ondansetron (reduces episode duration, off-label). No antihistamines needed \u2014 not histamine mediated. (5) Prognosis: most outgrow by 3-5 years. Managed trial reintroduction at 12-18 months under allergist supervision. Atypical FPIES presentations (older age, solid meats) have longer resolution timeline."
    }
  },
  "meta": {
    "diagnosis": "Food Protein-Induced Enterocolitis Syndrome (FPIES) \u2014 Acute, Rice Trigger, Infant"
  }
};
