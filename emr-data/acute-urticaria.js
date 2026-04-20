
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
      "pharmacy": "Walgreens \u2014 University Blvd",
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
          "description": "UTI \u2014 started TMP-SMX today",
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
          "temp": "37.0\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "description": "UTI \u2014 started TMP-SMX today",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "hpi": "Sofia Gutierrez \u2014 Brief observation after acute urticaria with partial angioedema",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 urticaria triggered by TMP-SMX, evaluate drug allergy",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI \u2014 started TMP-SMX today",
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
          "temp": "36.8\u00b0C",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "A/I consult \u2014 urticaria triggered by TMP-SMX, evaluate drug allergy",
          "hpi": "Sofia Gutierrez \u2014 A/I consult \u2014 urticaria triggered by TMP-SMX, evaluate drug allergy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up after drug-induced urticaria \u2014 confirm safe antibiotic alternatives",
        "diagnosis": "Acute Urticaria"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "UTI \u2014 started TMP-SMX today",
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
                  "unit": "x10\u00b3/\u00b5L",
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
                  "unit": "x10\u00b3/\u00b5L",
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
          "cc": "Follow-up after drug-induced urticaria \u2014 confirm safe antibiotic alternatives",
          "hpi": "Sofia Gutierrez \u2014 Follow-up after drug-induced urticaria \u2014 confirm safe antibiotic alternatives",
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
    "pharmacy": "Walgreens \u2014 University Blvd",
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
      "problem": "Acute urticaria \u2014 widespread wheals 24h duration",
      "icd": "L50.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Generalized urticaria, pruritic, migratory wheals, 24h \u2014 no clear trigger identified"
    },
    {
      "problem": "Angioedema \u2014 periorbital, mild",
      "icd": "T78.3XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Periorbital swelling associated with urticaria \u2014 histamine-mediated (not bradykinin)"
    },
    {
      "problem": "Idiopathic urticaria \u2014 most likely etiology",
      "icd": "L50.1",
      "onset": "2024",
      "status": "Active",
      "notes": "60-70% of acute urticaria has no identifiable cause \u2014 viral URI most common precipitant"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily (or 20mg if inadequate)",
      "sig": "Take 1 tablet daily \u2014 first-line non-sedating H1 antihistamine",
      "prescriber": "Allergy",
      "start": "11/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Ranitidine 150mg BID (or famotidine) \u2014 H2 blocker adjunct",
      "sig": "Take twice daily \u2014 H2 blockade adds 10-15% additional effect",
      "prescriber": "Allergy",
      "start": "11/2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Prednisone 40mg daily x5 days (if inadequate antihistamine response)",
      "sig": "Take daily for 5 days \u2014 short course for severe/refractory acute urticaria",
      "prescriber": "Allergy",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN if antihistamines insufficient"
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
      "temp": "37.0\u00b0C",
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
      "date": "11/18/2024",
      "panel": "Acute Urticaria Workup",
      "results": [
        {
          "test": "CBC \u2014 WBC + differential",
          "value": "11.2 with 12% eosinophils",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "TSH",
          "value": "2.4",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": ""
        },
        {
          "test": "CMP \u2014 LFTs",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "Anti-nuclear antibody (ANA)",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "IgE (total)",
          "value": "420",
          "unit": "IU/mL",
          "ref": "<100",
          "flag": "H"
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
  ],
  "references": [
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
        "Step-up: sgAH \u2192 updose 4x \u2192 omalizumab \u2192 cyclosporine",
        "Post-viral urticaria in children: no allergy testing needed"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "Acute urticaria (<6 weeks) is most commonly triggered by: viral infection (most common cause in children), food (IgE-mediated), drugs (NSAIDs, antibiotics), or is idiopathic. In adults, underlying infection workup is rarely needed for acute urticaria.",
      "Management: identify and remove trigger. Oral H1 antihistamine (cetirizine, loratadine) for symptom control. Add short-course oral steroids (prednisone 40 mg \u00d7 5 days) for severe cases. Epinephrine only if anaphylaxis features (hypotension, bronchospasm).",
      "Distinguishing urticaria from angioedema: urticaria \u2014 superficial dermis, pruritic, blanches, resolves <24h. Angioedema \u2014 deep dermis/submucosa, burning/pain, non-pruritic, lasts 24\u201372h. Both can coexist."
    ],
    "boardPearls": [
      "Acute urticaria most common cause: viral URI (especially in children). Food allergy, NSAIDs, antibiotics in adults.",
      "Urticaria characteristics: raised erythematous wheals, pruritic, blanching on pressure, individual lesions resolve <24h (wheals lasting >24h \u2192 suspect urticarial vasculitis).",
      "Treatment: H1 antihistamine (cetirizine 10 mg BID or loratadine 10 mg daily). Prednisone 40 mg \u00d7 5 days for refractory/severe acute urticaria.",
      "No extensive workup needed for first episode of acute urticaria \u2014 only if recurring or systemic symptoms suggest underlying disease.",
      "Dermatographism: most common physical urticaria. Stroking skin \u2192 wheal-and-flare within 5 min. H1 antihistamine effective."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Sofia is anxious and concerned about the widespread rash that appeared suddenly. She is forthcoming with information and eager to understand if this reaction is serious, frequently touching the affected areas and asking if she should continue the antibiotic.",
    "interviewQuestions": [
      "When exactly did the hives first appear in relation to taking the medication?",
      "Can you describe what the rash looks like and where it started?",
      "Are you experiencing any itching, burning, or pain with the rash?",
      "Have you had any difficulty breathing, swallowing, or throat tightness?",
      "Are you experiencing any nausea, vomiting, or stomach pain?",
      "Have you ever had a reaction like this to any medication before?",
      "Have you taken TMP-SMX or sulfa antibiotics previously?",
      "Did you take anything else new today - foods, other medications, or supplements?",
      "Have you been exposed to any new soaps, detergents, or other substances?",
      "Do you have any history of allergies or skin conditions?",
      "Has anyone in your family had drug allergies or chronic hives?",
      "Are you feeling dizzy, lightheaded, or having any other symptoms?",
      "Have you taken anything to treat the rash so far?"
    ],
    "patientResponses": {
      "default": "I'm not sure about that. I'm just really worried about this rash and whether it's serious.",
      "onset": "The hives started about 3 hours ago, maybe 2-3 hours after I took the first dose of the antibiotic this morning around 9 AM.",
      "character": "They're raised, red, itchy bumps that seem to come and go. Some areas look like welts or mosquito bites but much bigger.",
      "location": "It started on my arms and chest, but now it's spread to my back, legs, and even a little on my face and neck.",
      "severity": "The itching is about a 7 out of 10 - it's really bothering me and hard to ignore. I keep wanting to scratch but I'm trying not to.",
      "aggravating": "The itching seems worse when I'm warm or when I touch the areas. Moving around seems to make new ones appear.",
      "relieving": "I tried taking a cool shower which helped a little temporarily, but they came right back. I haven't taken anything else yet.",
      "associated": "Just the itching and the rash. I feel a little anxious about it, but no trouble breathing or swallowing.",
      "denies": "No trouble breathing, no swelling of my face or lips, no nausea or vomiting, no dizziness or feeling faint.",
      "history": "I've never had anything like this before. I've never had hives or a drug reaction.",
      "medications": "TMP-SMX",
      "allergies": "NKDA",
      "family": "My mother has chronic hives that come and go, but doctors never found a specific cause for hers.",
      "social": "I work as a teacher, don't smoke or drink much. I haven't been exposed to anything new except this antibiotic."
    },
    "examManeuvers": [
      "Inspect skin for distribution and morphology of lesions",
      "Assess for urticarial wheals and blanching",
      "Examine face and lips for angioedema",
      "Assess oral cavity and tongue for swelling",
      "Auscultate lungs for wheezing or stridor",
      "Palpate neck for lymphadenopathy",
      "Assess mucous membranes and conjunctiva",
      "Check capillary refill and peripheral perfusion",
      "Palpate abdomen for tenderness or organomegaly",
      "Assess overall appearance and respiratory distress"
    ],
    "examFindings": {
      "Inspect skin for distribution and morphology of lesions": "Multiple raised, erythematous, well-demarcated wheals of varying sizes (0.5-3 cm) distributed across arms, chest, back, legs, and neck",
      "Assess for urticarial wheals and blanching": "Classic urticarial lesions that blanch with pressure and have surrounding erythema; some lesions appear to be resolving while new ones are forming",
      "Examine face and lips for angioedema": "No facial swelling, lip swelling, or periorbital edema observed",
      "Assess oral cavity and tongue for swelling": "Oral cavity and tongue appear normal without swelling or erythema",
      "Auscultate lungs for wheezing or stridor": "Lungs clear to auscultation bilaterally, no wheezing or stridor",
      "Palpate neck for lymphadenopathy": "No cervical, supraclavicular, or axillary lymphadenopathy",
      "Assess mucous membranes and conjunctiva": "Mucous membranes pink and moist, conjunctiva clear without injection",
      "Check capillary refill and peripheral perfusion": "Capillary refill <2 seconds, good peripheral perfusion",
      "Palpate abdomen for tenderness or organomegaly": "Abdomen soft, non-tender, no hepatosplenomegaly",
      "Assess overall appearance and respiratory distress": "Patient appears well but anxious, no respiratory distress, speaking in full sentences"
    },
    "ddxTargets": [
      "Idiopathic acute urticaria \u2014 viral URI trigger likely (correct)",
      "Food allergy urticaria \u2014 no temporal relationship with a meal",
      "Drug-induced urticaria \u2014 no new medications",
      "Urticarial vasculitis \u2014 >24h individual wheals, burning, hyperpigmentation after resolution",
      "Contact urticaria \u2014 localized, not generalized",
      "Mastocytosis \u2014 urticaria pigmentosa pattern, Darier's sign"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'NKDA' in chart and dismissing drug reaction, or focusing only on TMP-SMX while missing other potential triggers",
      "prematureClosure": "Risk of stopping evaluation after identifying hives without fully assessing for systemic anaphylactic signs or considering alternative causes",
      "availabilityBias": "May overweight common causes like food allergies while underestimating sulfa antibiotic reactions, especially if recently seen food allergy cases"
    },
    "coachPrompts": {
      "phase2": "You've identified urticaria as a key finding. What are the most important historical elements you need to gather to differentiate between the various causes of acute hives? Consider both the timing and the potential triggers in this case.",
      "phase5": "Now that you've completed your history and exam, walk me through your assessment of this patient's risk stratification. What findings help you determine the severity and urgency of this reaction?",
      "finalDebrief": "This case demonstrates a classic drug-induced urticaria from sulfa antibiotics. How did the temporal relationship and absence of systemic signs help narrow your differential? What would change your management approach if she had developed respiratory symptoms or facial swelling?",
      "final": "Diagnosis: acute urticaria, idiopathic \u2014 viral URI most likely trigger. Key learning: (1) Acute vs chronic urticaria: acute = <6 weeks, chronic = >6 weeks daily/near-daily. Acute urticaria: 60-70% idiopathic, 10-15% infection-related (URI, GI infection), <5% true food allergy. Extensive workup for ACUTE urticaria is not indicated unless history suggests specific cause. (2) Individual wheal duration: urticaria wheals come and go over minutes to hours. A single wheal lasting >24h is NOT typical urticaria \u2014 consider urticarial vasculitis (skin biopsy needed). (3) Antihistamine step-up: Step 1 = non-sedating H1 antihistamine (cetirizine, fexofenadine, loratadine). Step 2 = increase dose 2-4x. Step 3 = add H2 blocker. Step 4 = add leukotriene receptor antagonist. Omalizumab for chronic refractory. (4) Food allergy testing in acute urticaria: NOT indicated without clear temporal relationship (symptoms within 2h of eating a specific food). Random IgE panel \u2192 false positives \u2192 unnecessary avoidance. (5) When to refer to allergy: recurrent acute urticaria >3 episodes, suspected specific food/drug trigger, concurrent angioedema (rule out HAE), anaphylaxis history."
    }
  },
  "meta": {
    "diagnosis": "Acute Urticaria \u2014 Idiopathic (Most Common), Allergy Workup Algorithm",
    "caseId": "acute-urticaria"
  }
};
