/* emr-data/acute-urticaria.js — Multi-Setting Allergy Case: Acute Urticaria */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Sofia Gutierrez",
  "patientHPI": "I started this new antibiotic this morning and about three hours later I noticed these red bumpy patches all over my arms and chest. They're really itchy and seem to be spreading - I've never had anything like this before and I'm worried it might be from the medicine.",
      "dob": "06/14/1992",
      "age": "34",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-816285",
      "language": "English",
      "race": "Multiracial",
      "phone": "(804) 555-7916",
      "email": "sofia.gutierrez@email.com",
      "address": "8769 Maple St, Baltimore, MD 21216",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Thomas Gutierrez",
        "phone": "(630) 555-2040",
        "relationship": "Spouse"
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
      "Mother: chronic urticaria"
    ],
    "socialHistory": [
      [
        "Trigger",
        "TMP-SMX started 3 hours ago for UTI"
      ],
      [
        "Tobacco",
        "Never"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Widespread hives for 3 hours after starting new antibiotic",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI — started TMP-SMX today",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "TMP-SMX",
          "dose": "160/800mg",
          "route": "PO",
          "frequency": "BID (started today)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "122/76",
          "hr": "88",
          "rr": "16",
          "temp": "37.0°C",
          "spo2": "99%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-383463",
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
          "cc": "Widespread hives for 3 hours after starting new antibiotic",
          "hpi": "Sofia Gutierrez presents with widespread hives for 3 hours after starting new antibiotic.",
          "exam": "See documentation.",
          "assessment": "Acute Urticaria",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Brief observation after acute urticaria with partial angioedema",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI — started TMP-SMX today",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "TMP-SMX",
          "dose": "160/800mg",
          "route": "PO",
          "frequency": "BID (started today)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Diphenhydramine",
          "dose": "25mg",
          "route": "PO",
          "frequency": "Q6H PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "82",
          "rr": "16",
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
          "accession": "LAB-383463",
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
          "cc": "Brief observation after acute urticaria with partial angioedema",
          "hpi": "Sofia Gutierrez — Brief observation after acute urticaria with partial angioedema",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — urticaria triggered by TMP-SMX, evaluate drug allergy",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI — started TMP-SMX today",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "TMP-SMX",
          "dose": "160/800mg",
          "route": "PO",
          "frequency": "BID (started today)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "116/72",
          "hr": "76",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-383463",
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
          "cc": "A/I consult — urticaria triggered by TMP-SMX, evaluate drug allergy",
          "hpi": "Sofia Gutierrez — A/I consult — urticaria triggered by TMP-SMX, evaluate drug allergy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up after drug-induced urticaria — confirm safe antibiotic alternatives",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI — started TMP-SMX today",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/68",
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
          "accession": "LAB-383463",
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
          "cc": "Follow-up after drug-induced urticaria — confirm safe antibiotic alternatives",
          "hpi": "Sofia Gutierrez — Follow-up after drug-induced urticaria — confirm safe antibiotic alternatives",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Sofia Gutierrez",
    "dob": "06/14/1992",
    "age": "34",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-816285",
    "language": "English",
    "race": "Multiracial",
    "phone": "(505) 555-7252",
    "email": "sofia.gutierrez@email.com",
    "address": "4471 Clover St, Baltimore, MD 21210",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Thomas Gutierrez",
      "phone": "(630) 555-8668",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Widespread hives for 3 hours after starting new antibiotic",
    "diagnosis": "Acute Urticaria"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "UTI — started TMP-SMX today",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "TMP-SMX",
      "dose": "160/800mg",
      "route": "PO",
      "frequency": "BID (started today)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
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
      "bp": "122/76",
      "hr": "88",
      "rr": "16",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "4/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Widespread hives for 3 hours after starting new antibiotic",
      "hpi": "Sofia Gutierrez presents with widespread hives for 3 hours after starting new antibiotic.",
      "exam": "See documentation.",
      "assessment": "Acute Urticaria",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-383463",
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
    "Mother: chronic urticaria"
  ],
  "socialHistory": [
    [
      "Trigger",
      "TMP-SMX started 3 hours ago for UTI"
    ],
    [
      "Tobacco",
      "Never"
    ]
  ]
,"references":[
  {
    "id": "EAACI-Urticaria-2022",
    "title": "EAACI/GA2LEN/EuroGuiDerm/APAAACI urticaria guideline",
    "authors": "Zuberbier T, Abdul Latiff AH, et al.",
    "journal": "Allergy",
    "year": 2022,
    "doi": "10.1111/all.15090",
    "url": "https://onlinelibrary.wiley.com/doi/10.1111/all.15090",
    "openAccess": true,
    "validates": [
      "Wheals <24h = urticaria; >24h with bruising = biopsy for UV",
      "UAS7 scoring",
      "Step-up: sgAH → updose 4x → omalizumab → cyclosporine",
      "Post-viral urticaria in children: no allergy testing needed"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "Acute urticaria (<6 weeks) is most commonly triggered by: viral infection (most common cause in children), food (IgE-mediated), drugs (NSAIDs, antibiotics), or is idiopathic. In adults, underlying infection workup is rarely needed for acute urticaria.",
      "Management: identify and remove trigger. Oral H1 antihistamine (cetirizine, loratadine) for symptom control. Add short-course oral steroids (prednisone 40 mg × 5 days) for severe cases. Epinephrine only if anaphylaxis features (hypotension, bronchospasm).",
      "Distinguishing urticaria from angioedema: urticaria — superficial dermis, pruritic, blanches, resolves <24h. Angioedema — deep dermis/submucosa, burning/pain, non-pruritic, lasts 24–72h. Both can coexist."
    ],
    "boardPearls": [
      "Acute urticaria most common cause: viral URI (especially in children). Food allergy, NSAIDs, antibiotics in adults.",
      "Urticaria characteristics: raised erythematous wheals, pruritic, blanching on pressure, individual lesions resolve <24h (wheals lasting >24h → suspect urticarial vasculitis).",
      "Treatment: H1 antihistamine (cetirizine 10 mg BID or loratadine 10 mg daily). Prednisone 40 mg × 5 days for refractory/severe acute urticaria.",
      "No extensive workup needed for first episode of acute urticaria — only if recurring or systemic symptoms suggest underlying disease.",
      "Dermatographism: most common physical urticaria. Stroking skin → wheal-and-flare within 5 min. H1 antihistamine effective."
    ]
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
        "phase2": "You've reviewed Sofia Gutierrez's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Sofia appears anxious and uncomfortable, frequently scratching at her arms and torso while speaking. She is cooperative and detailed in her responses, clearly concerned about the sudden onset of symptoms and worried this might be related to her new medication.",
    "interviewQuestions": [
        "Can you describe exactly when your symptoms started in relation to taking the antibiotic?",
        "What do the hives look like and where are they located on your body?",
        "Are you experiencing any itching, burning, or pain with the rash?",
        "Have you had any difficulty breathing, swallowing, or throat tightness?",
        "Any swelling of your face, lips, tongue, or throat?",
        "Have you experienced any nausea, vomiting, or abdominal cramping?",
        "Any dizziness, lightheadedness, or feeling faint?",
        "Have you ever had hives or allergic reactions before?",
        "Have you taken TMP-SMX or sulfa antibiotics previously?",
        "Any recent changes in soaps, detergents, foods, or other medications?",
        "Are you taking any other medications or supplements currently?",
        "Any family history of drug allergies or skin reactions?",
        "How would you rate your current discomfort on a scale of 1-10?"
    ],
    "patientResponses": {
        "default": "I'm sorry, could you repeat that? I'm having trouble focusing because of all this itching.",
        "onset": "The hives started about 3 hours ago, maybe 2-3 hours after I took my first dose of the antibiotic this morning around 8 AM.",
        "character": "They're raised, red, bumpy welts that are really itchy. Some are small like mosquito bites, others are larger patches that seem to connect together.",
        "location": "They started on my arms and chest, but now they're spreading everywhere - my back, stomach, legs, even a few on my face and neck.",
        "severity": "The itching is probably a 7 out of 10 - it's really hard to not scratch. It's definitely interfering with my ability to focus at work.",
        "aggravating": "The itching seems worse when I'm warm or when I scratch them. Moving around and stress seem to make it more noticeable.",
        "relieving": "I tried taking a cool shower which helped temporarily, and I put some lotion on but it didn't do much. The itching comes right back.",
        "associated": "Just the itching and the rash. I feel a little anxious about it, but no trouble breathing or swallowing. No nausea or dizziness.",
        "denies": "No trouble breathing, no swelling of my face or throat, no chest pain, no vomiting or diarrhea, no fever or chills.",
        "history": "I've never had hives like this before. I had some mild skin irritation from a new laundry detergent once, but nothing this widespread or severe.",
        "medications": "Just the TMP-SMX I started today for my UTI. I don't take any other regular medications.",
        "allergies": "NKDA - at least I didn't think I had any allergies until today. I've never taken this antibiotic before.",
        "family": "My mother has chronic hives, but the doctors never figured out what causes hers. She's had them for years and takes antihistamines.",
        "social": "I work as a teacher, I've never smoked, drink wine occasionally on weekends, no drugs. Nothing new in my environment or routine except this medication."
    },
    "examManeuvers": [
        "Inspect skin for distribution and morphology of lesions",
        "Assess for angioedema of face, lips, and throat",
        "Examine oral cavity and throat",
        "Palpate neck for lymphadenopathy",
        "Auscultate lungs for wheezing or stridor",
        "Assess vital signs and hemodynamic stability",
        "Examine for dermographism",
        "Assess mucous membranes",
        "Evaluate for urticarial vasculitis features",
        "Document lesion characteristics and photograph if possible"
    ],
    "examFindings": {
        "Inspect skin for distribution and morphology of lesions": "Multiple raised, erythematous, well-demarcated urticarial plaques of varying sizes (0.5-5 cm) distributed across arms, chest, abdomen, back, and legs with scattered lesions on neck and face",
        "Assess for angioedema of face, lips, and throat": "No evidence of angioedema; lips, eyelids, and facial features appear normal without swelling",
        "Examine oral cavity and throat": "Oral mucosa and oropharynx appear normal without erythema, swelling, or lesions",
        "Palpate neck for lymphadenopathy": "No cervical, supraclavicular, or axillary lymphadenopathy palpated",
        "Auscultate lungs for wheezing or stridor": "Clear breath sounds bilaterally, no wheezing, rhonchi, or stridor",
        "Assess vital signs and hemodynamic stability": "Stable vital signs: BP 122/76, HR 88, normal perfusion and mental status",
        "Examine for dermographism": "Positive dermographism noted - linear wheal formation within 2-3 minutes of firm stroking",
        "Assess mucous membranes": "Mucous membranes pink and moist, no pallor or cyanosis",
        "Evaluate for urticarial vasculitis features": "Lesions are typical urticarial wheals, blanch with pressure, no purpura or fixed pigmentation",
        "Document lesion characteristics and photograph if possible": "Lesions are pruritic, transient wheals with central pallor and surrounding erythema, typical of acute urticaria"
    },
    "ddxTargets": [
        "Acute urticaria secondary to TMP-SMX allergy (correct diagnosis)",
        "Non-allergic drug reaction",
        "Viral exanthem",
        "Anaphylaxis",
        "Angioedema",
        "Contact dermatitis",
        "Chronic idiopathic urticaria"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on the recent antibiotic start without considering other potential triggers or causes of acute urticaria",
        "prematureClosure": "Risk of immediately assuming drug allergy without adequately assessing for systemic symptoms or other urticaria triggers",
        "availabilityBias": "May focus on dramatic anaphylaxis presentation due to recent training, potentially missing the more common isolated urticaria presentation"
    },
    "coachPrompts": {
        "phase2": "Good start identifying the temporal relationship with the antibiotic. As you interview Sofia, what key questions will help you distinguish between a localized allergic reaction versus early signs of a systemic reaction? What other potential triggers should you explore?",
        "phase5": "You've gathered excellent information about the timeline and characteristics of Sofia's reaction. Looking at your physical exam findings, how do they support or refine your differential diagnosis? What features would make you more or less concerned about progression to anaphylaxis?",
        "finalDebrief": "This case illustrates acute urticaria from TMP-SMX allergy. Notice how the temporal relationship, morphology of lesions, and absence of systemic symptoms helped narrow the diagnosis. What was key in distinguishing this from anaphylaxis? How did the family history of chronic urticaria factor into your assessment, and what are the next steps for Sofia's care?"
    }
}
};