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
      "pharmacy": "Publix Pharmacy — Weston Rd",
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
        "First introduction of rice cereal — repetitive vomiting began ~2h later"
      ],
      [
        "Feeding history",
        "Exclusively breastfed until today"
      ],
      [
        "Key feature",
        "No urticaria, no respiratory symptoms — GI-isolated"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
        "diagnosis": "FPIES — Acute Episode"
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
          "temp": "36.2°C",
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
                  "unit": "x10³/µL",
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
                  "unit": "x10³/µL",
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
          "assessment": "FPIES — Acute Episode",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "4mo admitted after FPIES episode — IV fluids, monitoring for recurrence",
        "diagnosis": "FPIES — Acute"
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
          "temp": "36.6°C",
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
                  "unit": "x10³/µL",
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
                  "unit": "x10³/µL",
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
          "cc": "4mo admitted after FPIES episode — IV fluids, monitoring for recurrence",
          "hpi": "Amara Williams — 4mo admitted after FPIES episode — IV fluids, monitoring for recurrence",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — confirm FPIES diagnosis, guide safe food introduction",
        "diagnosis": "FPIES — Acute"
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
          "temp": "36.8°C",
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
                  "unit": "x10³/µL",
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
                  "unit": "x10³/µL",
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
          "cc": "A/I consult — confirm FPIES diagnosis, guide safe food introduction",
          "hpi": "Amara Williams — A/I consult — confirm FPIES diagnosis, guide safe food introduction",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "FPIES follow-up — food diary review, plan supervised oral food challenge at age 12-18mo",
        "diagnosis": "FPIES — Acute"
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
          "temp": "36.8°C",
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
                  "unit": "x10³/µL",
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
                  "unit": "x10³/µL",
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
          "cc": "FPIES follow-up — food diary review, plan supervised oral food challenge at age 12-18mo",
          "hpi": "Amara Williams — FPIES follow-up — food diary review, plan supervised oral food challenge at age 12-18mo",
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
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Thomas Williams",
      "phone": "(620) 555-7543",
      "relationship": "Parent"
    },
    "chiefComplaint": "4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy",
    "diagnosis": "FPIES — Acute Episode"
  },
  "problems": [],
  "medications": [],
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
      "temp": "36.2°C",
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
      "assessment": "FPIES — Acute Episode",
      "plan": "See orders."
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
              "unit": "x10³/µL",
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
              "unit": "x10³/µL",
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
      "First introduction of rice cereal — repetitive vomiting began ~2h later"
    ],
    [
      "Feeding history",
      "Exclusively breastfed until today"
    ],
    [
      "Key feature",
      "No urticaria, no respiratory symptoms — GI-isolated"
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

  "teachingPoints": {
    "keyLearning": [
      "FPIES is non-IgE mediated — SPT and sIgE are negative. Misdiagnosis as viral gastroenteritis or sepsis is common because the presentation (profuse vomiting, lethargy, pallor) is dramatic and occurs without urticaria.",
      "IV ondansetron (5-HT3 antagonist) is first-line treatment for acute FPIES — 0.15 mg/kg IV, max 4 mg. Prescribed as home ODT for mild episodes. NOT epinephrine (no IgE mechanism).",
      "FPIES diagnostic criteria: vomiting 1–4h post-ingestion (no urticaria/wheeze) + ≥3 of: lethargy, pallor, profuse vomiting, hypotension, hypothermia, diarrhea at 5–10h, neutrophilia +3,500 at 6h."
    ],
    "boardPearls": [
      "FPIES timing: vomiting 1–4h after ingestion. Distinguish from IgE anaphylaxis (5–30 min) and food poisoning (1–6h but usually multiple people affected).",
      "Top triggers by age: infants — cow's milk, soy. Toddlers — rice, oat, sweet potato. Adults — shellfish (oyster, crab, shrimp).",
      "Acute management: IV ondansetron 0.15 mg/kg (max 4 mg). IV NS 20 mL/kg if hypotension. NOT epinephrine.",
      "Natural history: milk/soy FPIES resolves ~50% by age 3. Grain FPIES resolves by 3–5. Shellfish may persist into adulthood.",
      "Atypical FPIES: 10–20% develop IgE sensitization to trigger → prescribe EpiPen in these patients.",
      "Confirm resolution: supervised OFC in allergist office — never at home."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Amara Williams appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did 4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started Amara Williams presents with 4-month-old with repetitive vomiting 2 hours after .'",
        "character": "'It's 4-month-old with repetitive vomiting 2 hours after first rice cereal feeding, progressing to lethargy \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take no medications.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Older sibling: milk FPIES (resolved)",
        "social": "Trigger: First introduction of rice cereal \u2014 repetitive vomiting began ~2h later  Feeding history: Exclusively breastfed until today  Key feature: No urticaria, no respiratory symptoms \u2014 GI-isolated"
    },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Amara Williams's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};