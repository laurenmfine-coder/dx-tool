/* emr-data/severe-allergic-reaction.js — Multi-Setting Allergy Case: Severe Allergic Reaction — Drug */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Thomas Rivera",
  "patientHPI": "About an hour after taking my first dose of antibiotic for my sinus infection, I started getting itchy bumps everywhere and my lips and around my eyes started puffing up.",
      "dob": "11/04/1984",
      "age": "42",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-713069",
      "language": "English",
      "race": "Asian",
      "phone": "(513) 555-7708",
      "email": "thomas.rivera@email.com",
      "address": "7472 Daisy Ave, Milwaukee, WI 53210",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "Publix Pharmacy — Weston Rd",
      "emergencyContact": {
        "name": "Jennifer Rivera",
        "phone": "(620) 555-2208",
        "relationship": "Spouse"
      },
      "chiefComplaint": "Diffuse urticaria, facial swelling 1 hour after first dose of amoxicillin-clavulanate",
      "diagnosis": "Severe Allergic Reaction — Drug"
    },
    "allergies": [
      {
        "allergen": "Sulfa",
        "reaction": "Rash",
        "severity": "Mild",
        "type": "Drug"
      },
      {
        "allergen": "Amoxicillin-Clavulanate",
        "reaction": "Urticaria/angioedema",
        "severity": "Severe",
        "type": "Drug"
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
      "Sister: penicillin allergy"
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
        "Accountant"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "cc": "Diffuse urticaria, facial swelling 1 hour after first dose of amoxicillin-clavulanate",
      "dx": "Severe Allergic Reaction — Drug",
      "problems": [
        "Acute sinusitis (treated with amoxicillin-clavulanate today)"
      ],
      "meds": [
        {
          "name": "Amoxicillin-Clavulanate",
          "dose": "875mg",
          "route": "PO",
          "freq": "BID (1st dose today)"
        }
      ],
      "vitals": {
        "bp": "118/72",
        "hr": "98",
        "rr": "20",
        "temp": "37.2°C",
        "spo2": "98%",
        "pain": "4/10"
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
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Urticaria and facial swelling after antibiotic",
          "hpi": "42M with diffuse urticaria and bilateral periorbital/lip edema 1h after first dose amoxicillin-clavulanate for sinusitis. No respiratory distress, no hypotension, no GI symptoms. Hemodynamically stable. Treated with diphenhydramine 50mg IV, methylprednisolone 125mg IV, famotidine 20mg IV.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "cc": "Brief observation after severe allergic drug reaction",
      "dx": "Drug allergy — amoxicillin, resolved",
      "problems": [
        "Amoxicillin allergy (new)",
        "Sinusitis (needs alternative antibiotic)"
      ],
      "meds": [
        {
          "name": "Diphenhydramine",
          "dose": "25mg",
          "route": "PO",
          "freq": "Q6H"
        },
        {
          "name": "Prednisone",
          "dose": "40mg",
          "route": "PO",
          "freq": "Daily"
        },
        {
          "name": "Doxycycline",
          "dose": "100mg",
          "route": "PO",
          "freq": "BID (alternative for sinusitis)"
        }
      ],
      "vitals": {
        "bp": "122/76",
        "hr": "78",
        "rr": "14",
        "temp": "37.0°C",
        "spo2": "99%",
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
        }
      ],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Observation after drug allergic reaction",
          "hpi": "42M, 6h post-reaction. Urticaria 80% resolved. Facial edema improving. Tolerating PO. Plan: observe 4 more hours, if stable → discharge on prednisone taper and doxycycline for sinusitis. A/I referral for beta-lactam allergy evaluation.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "cc": "A/I consult — evaluate beta-lactam allergy, patient needs cephalosporin for upcoming surgery",
      "dx": "Beta-lactam allergy evaluation",
      "problems": [
        "Amoxicillin allergy (urticaria/angioedema)",
        "Sulfa allergy (rash)",
        "Scheduled knee surgery — surgeon requests cefazolin clearance"
      ],
      "meds": [
        {
          "name": "Doxycycline",
          "dose": "100mg",
          "route": "PO",
          "freq": "BID"
        },
        {
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "freq": "PRN"
        }
      ],
      "vitals": {
        "bp": "128/78",
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
              "test": "Penicillin SPT — Major determinant",
              "value": "Negative",
              "unit": "",
              "range": "",
              "flag": ""
            },
            {
              "test": "Penicillin SPT — Minor determinant",
              "value": "Negative",
              "unit": "",
              "range": "",
              "flag": ""
            },
            {
              "test": "Amoxicillin IDT",
              "value": "Positive (8mm)",
              "unit": "",
              "range": "<3mm",
              "flag": "H"
            },
            {
              "test": "Cephalosporin cross-reactivity risk",
              "value": "~2% with positive amoxicillin",
              "unit": "",
              "range": "",
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
          "cc": "Beta-lactam allergy evaluation",
          "hpi": "42M referred for beta-lactam evaluation before knee surgery. Skin prick testing: penicillin major/minor determinants negative, amoxicillin intradermal positive. Indicates aminopenicillin-specific allergy (side chain). Cephalosporins have different side chain — low cross-reactivity risk. Recommend: graded cefazolin challenge in monitored setting. Can proceed safely for surgical prophylaxis.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "cc": "Follow-up after allergy evaluation — post-cefazolin challenge",
      "dx": "Amoxicillin allergy (confirmed), cephalosporin tolerant",
      "problems": [
        "Amoxicillin allergy — confirmed aminopenicillin-specific",
        "Cephalosporin tolerance — confirmed by graded challenge",
        "Sulfa — rash (childhood, consider delabeling)"
      ],
      "meds": [
        {
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "freq": "PRN"
        }
      ],
      "vitals": {
        "bp": "124/76",
        "hr": "74",
        "rr": "14",
        "temp": "36.8°C",
        "spo2": "99%",
        "pain": "0/10"
      },
      "labs": [],
      "imaging": [],
      "visits": [
        {
          "id": "visit-1",
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Drug allergy follow-up",
          "hpi": "42M completed cefazolin graded challenge without reaction. Cephalosporins safe. EMR updated: amoxicillin allergy confirmed, cephalosporins tolerated. Discussion: sulfa allergy from childhood — rash only — could consider delabeling evaluation at future visit. Annual follow-up.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Thomas Rivera",
    "dob": "11/04/1984",
    "age": "42",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-713069",
    "language": "English",
    "race": "Asian",
    "phone": "(317) 555-6194",
    "email": "thomas.rivera@email.com",
    "address": "9730 Spruce St, Pittsburgh, PA 15210",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Jennifer Rivera",
      "phone": "(702) 555-2215",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Diffuse urticaria, facial swelling 1 hour after first dose of amoxicillin-clavulanate",
    "diagnosis": "Severe Allergic Reaction — Drug"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Acute sinusitis (treated with amoxicillin-clavulanate today)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Amoxicillin-Clavulanate",
      "dose": "875mg",
      "route": "PO",
      "frequency": "BID (1st dose today)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa",
      "reaction": "Rash",
      "severity": "Mild",
      "type": "Drug"
    },
    {
      "allergen": "Amoxicillin-Clavulanate",
      "reaction": "Urticaria/angioedema",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "118/72",
      "hr": "98",
      "rr": "20",
      "temp": "37.2°C",
      "spo2": "98%",
      "pain": "4/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Urticaria and facial swelling after antibiotic",
      "hpi": "42M with diffuse urticaria and bilateral periorbital/lip edema 1h after first dose amoxicillin-clavulanate for sinusitis. No respiratory distress, no hypotension, no GI symptoms. Hemodynamically stable. Treated with diphenhydramine 50mg IV, methylprednisolone 125mg IV, famotidine 20mg IV.",
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
      "accession": "LAB-544346",
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
    },
    {
      "name": "COVID-19",
      "date": "09/2025",
      "lot": "CV-25",
      "site": "Right Deltoid"
    }
  ],
  "familyHistory": [
    "Sister: penicillin allergy"
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
      "Accountant"
    ]
  ]
,"references":[
  {
    "id": "GA2LEN-2025",
    "title": "Anaphylaxis definition, overview, and clinical support tool: 2024 consensus report",
    "authors": "Dribin TE, Muraro A, Camargo CA, Turner PJ, Wang J, et al.",
    "journal": "J Allergy Clin Immunol",
    "year": 2025,
    "doi": "10.1016/j.jaci.2025.01.021",
    "url": "https://www.jacionline.org/article/S0091-6749(25)00072-7/fulltext",
    "openAccess": true,
    "validates": [
      "Anaphylaxis diagnostic criteria",
      "Epinephrine IM dosing",
      "Biphasic reaction monitoring",
      "Neffy nasal epinephrine"
    ]
  },
  {
    "id": "WAO-2020",
    "title": "World Allergy Organization anaphylaxis guidance 2020",
    "authors": "Cardona V, Ansotegui IJ, Ebisawa M, et al.",
    "journal": "World Allergy Organ J",
    "year": 2020,
    "doi": "10.1016/j.waojou.2020.100472",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/",
    "openAccess": true,
    "validates": [
      "WAO diagnostic criteria",
      "Epinephrine positioning",
      "Cofactors: exercise, beta-blockers, ACE inhibitors"
    ]
  },
  {
    "id": "JTFPP-Anaph-2023",
    "title": "Anaphylaxis: A 2023 practice parameter update",
    "authors": "Golden DBK, Wang J, Waserman S, et al.",
    "journal": "Ann Allergy Asthma Immunol",
    "year": 2023,
    "doi": "10.1016/j.anai.2023.09.015",
    "url": "https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Anaphylaxis-Practice-Paramaters-2023.pdf",
    "openAccess": true,
    "validates": [
      "Glucagon for beta-blocker patients",
      "Tryptase measurement timing",
      "0.1/0.15mg epi for infants",
      "MCAS screening after anaphylaxis"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "Drug-induced anaphylaxis: IgE-mediated (requires prior sensitization — not first exposure) vs non-IgE pseudo-allergic (direct mast cell activation — can occur on first exposure, e.g., vancomycin RMS, radiocontrast, NSAIDs).",
      "Kounis syndrome: anaphylaxis-associated acute coronary syndrome. Mast cell mediators (histamine, prostaglandins, leukotrienes) → coronary vasospasm or plaque rupture → MI during anaphylaxis. ECG changes during anaphylaxis = Kounis until proven otherwise.",
      "Drug allergy evaluation after reaction: skin testing (where validated), graded challenge, or de-labeling based on risk stratification. Most drug 'allergies' are not IgE-mediated and can be safely re-evaluated."
    ],
    "boardPearls": [
      "Drug anaphylaxis most common causes: beta-lactam antibiotics (#1), NSAIDs, chemotherapy (platinum agents after multiple cycles), biologic agents.",
      "Kounis syndrome: anaphylaxis + ECG ischemic changes → treat anaphylaxis first (epinephrine), then cardiology evaluation. Avoid vasospastic agents.",
      "Perioperative anaphylaxis: neuromuscular blocking agents (NMBAs) most common cause (#1 in OR). Chlorhexidine, latex, antibiotics also common.",
      "Management: epinephrine IM first. IV fluids for hypotension. Glucagon if beta-blocker therapy (reverses epinephrine resistance).",
      "After drug anaphylaxis: avoid culprit AND cross-reactive drugs until formal evaluation. Allergist referral mandatory."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Thomas Rivera appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did diffuse urticaria, facial swelling 1 hour after first dose of amoxicillin-clavulanate start?",
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
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started 42M with diffuse urticaria and bilateral periorbital/lip edema 1h after first do.'",
        "character": "'It's diffuse urticaria, facial swelling 1 hour after first dose of amoxicillin-clavulanate \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Amoxicillin-Clavulanate.'",
        "allergies": "'My allergies are Sulfa, Amoxicillin-Clavulanate.'",
        "family": "Sister: penicillin allergy",
        "social": "Tobacco: Never  Alcohol: Social  Occupation: Accountant"
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
        "phase2": "You've reviewed Thomas Rivera's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};