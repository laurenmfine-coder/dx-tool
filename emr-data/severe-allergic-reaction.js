
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
      "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
      "emergencyContact": {
        "name": "Jennifer Rivera",
        "phone": "(620) 555-2208",
        "relationship": "Spouse"
      },
      "chiefComplaint": "Diffuse urticaria, facial swelling 1 hour after first dose of amoxicillin-clavulanate",
      "diagnosis": "Severe Allergic Reaction \u2014 Drug"
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
      "dx": "Severe Allergic Reaction \u2014 Drug",
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
        "temp": "37.2\u00b0C",
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
      "dx": "Drug allergy \u2014 amoxicillin, resolved",
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
        "temp": "37.0\u00b0C",
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
          "hpi": "42M, 6h post-reaction. Urticaria 80% resolved. Facial edema improving. Tolerating PO. Plan: observe 4 more hours, if stable \u2192 discharge on prednisone taper and doxycycline for sinusitis. A/I referral for beta-lactam allergy evaluation.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "cc": "A/I consult \u2014 evaluate beta-lactam allergy, patient needs cephalosporin for upcoming surgery",
      "dx": "Beta-lactam allergy evaluation",
      "problems": [
        "Amoxicillin allergy (urticaria/angioedema)",
        "Sulfa allergy (rash)",
        "Scheduled knee surgery \u2014 surgeon requests cefazolin clearance"
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
        "temp": "36.8\u00b0C",
        "spo2": "99%",
        "pain": "0/10"
      },
      "labs": [
        {
          "name": "ALLERGY TESTING",
          "results": [
            {
              "test": "Penicillin SPT \u2014 Major determinant",
              "value": "Negative",
              "unit": "",
              "range": "",
              "flag": ""
            },
            {
              "test": "Penicillin SPT \u2014 Minor determinant",
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
          "hpi": "42M referred for beta-lactam evaluation before knee surgery. Skin prick testing: penicillin major/minor determinants negative, amoxicillin intradermal positive. Indicates aminopenicillin-specific allergy (side chain). Cephalosporins have different side chain \u2014 low cross-reactivity risk. Recommend: graded cefazolin challenge in monitored setting. Can proceed safely for surgical prophylaxis.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "cc": "Follow-up after allergy evaluation \u2014 post-cefazolin challenge",
      "dx": "Amoxicillin allergy (confirmed), cephalosporin tolerant",
      "problems": [
        "Amoxicillin allergy \u2014 confirmed aminopenicillin-specific",
        "Cephalosporin tolerance \u2014 confirmed by graded challenge",
        "Sulfa \u2014 rash (childhood, consider delabeling)"
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
        "temp": "36.8\u00b0C",
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
          "hpi": "42M completed cefazolin graded challenge without reaction. Cephalosporins safe. EMR updated: amoxicillin allergy confirmed, cephalosporins tolerated. Discussion: sulfa allergy from childhood \u2014 rash only \u2014 could consider delabeling evaluation at future visit. Annual follow-up.",
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
    "pharmacy": "Publix Pharmacy \u2014 Weston Rd",
    "emergencyContact": {
      "name": "Jennifer Rivera",
      "phone": "(702) 555-2215",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Diffuse urticaria, facial swelling 1 hour after first dose of amoxicillin-clavulanate",
    "diagnosis": "Severe Allergic Reaction \u2014 Drug"
  },
  "problems": [
    {
      "problem": "Perioperative anaphylaxis \u2014 intraoperative cardiovascular collapse",
      "icd": "T78.2XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Karen Williams, 52F \u2014 BP dropped to 60/30, diffuse urticaria, bronchospasm during induction. Succinylcholine given 2 min before collapse."
    },
    {
      "problem": "Succinylcholine allergy \u2014 neuromuscular blocking agent, most common perioperative allergen",
      "icd": "T78.2XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "NMBAs (neuromuscular blocking agents) are the most common cause of perioperative anaphylaxis \u2014 50-70% of OR anaphylaxis cases."
    },
    {
      "problem": "Allergy workup deferred to post-operative allergy referral",
      "icd": "T78.2XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Skin testing for all perioperative drugs given in 24h prior to reaction \u2014 identifies causative agent and safe alternatives for future surgery."
    }
  ],
  "medications": [
    {
      "name": "Epinephrine 0.3mg IM (then infusion) \u2014 anaphylaxis treatment",
      "sig": "IV access present in OR \u2014 epinephrine 0.1-1mg IV bolus for perioperative anaphylaxis, then infusion if needed.",
      "prescriber": "Anesthesia",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Diphenhydramine 50mg IV + ranitidine 50mg IV \u2014 adjunct",
      "sig": "H1 + H2 blockade after epinephrine stabilizes patient.",
      "prescriber": "Anesthesia",
      "start": "2024",
      "refills": 0,
      "status": "Given"
    },
    {
      "name": "Allergy/immunology referral \u2014 4-6 weeks post-reaction",
      "sig": "Skin test all agents given perioperatively. Identify causative agent. Document safe alternatives for future anesthesia.",
      "prescriber": "Allergy",
      "start": "After discharge",
      "refills": 0,
      "status": "Referral placed"
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
      "temp": "37.2\u00b0C",
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
      "date": "11/2024",
      "panel": "Perioperative Anaphylaxis Panel",
      "results": [
        {
          "test": "Tryptase (drawn during reaction)",
          "value": "38.4",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "Tryptase at 24h (baseline)",
          "value": "4.6",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": ""
        },
        {
          "test": "Histamine (plasma \u2014 drawn immediately)",
          "value": "Markedly elevated",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 eosinophils",
          "value": "1.2",
          "unit": "K/\u03bcL",
          "ref": "<0.5",
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
  ],
  "references": [
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
      "Drug-induced anaphylaxis: IgE-mediated (requires prior sensitization \u2014 not first exposure) vs non-IgE pseudo-allergic (direct mast cell activation \u2014 can occur on first exposure, e.g., vancomycin RMS, radiocontrast, NSAIDs).",
      "Kounis syndrome: anaphylaxis-associated acute coronary syndrome. Mast cell mediators (histamine, prostaglandins, leukotrienes) \u2192 coronary vasospasm or plaque rupture \u2192 MI during anaphylaxis. ECG changes during anaphylaxis = Kounis until proven otherwise.",
      "Drug allergy evaluation after reaction: skin testing (where validated), graded challenge, or de-labeling based on risk stratification. Most drug 'allergies' are not IgE-mediated and can be safely re-evaluated."
    ],
    "boardPearls": [
      "Drug anaphylaxis most common causes: beta-lactam antibiotics (#1), NSAIDs, chemotherapy (platinum agents after multiple cycles), biologic agents.",
      "Kounis syndrome: anaphylaxis + ECG ischemic changes \u2192 treat anaphylaxis first (epinephrine), then cardiology evaluation. Avoid vasospastic agents.",
      "Perioperative anaphylaxis: neuromuscular blocking agents (NMBAs) most common cause (#1 in OR). Chlorhexidine, latex, antibiotics also common.",
      "Management: epinephrine IM first. IV fluids for hypotension. Glucagon if beta-blocker therapy (reverses epinephrine resistance).",
      "After drug anaphylaxis: avoid culprit AND cross-reactive drugs until formal evaluation. Allergist referral mandatory."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Thomas appears anxious but cooperative, frequently touching his swollen face and asking if this is serious. He's forthcoming with information and clearly concerned about the visible swelling, though relieved he can breathe normally.",
    "interviewQuestions": [
      "When exactly did you notice the hives and swelling start?",
      "Had you taken any medications before the symptoms began?",
      "Have you ever had a reaction like this before?",
      "Are you having any trouble breathing or swallowing?",
      "Do you feel dizzy or lightheaded?",
      "Are you having any nausea, vomiting, or diarrhea?",
      "Have you eaten anything unusual today?",
      "Do you have any known drug allergies?",
      "Has anyone in your family had drug allergies?",
      "Are the hives itchy or painful?",
      "Have you taken anything to treat the symptoms?",
      "Were you aware you might be allergic to penicillin antibiotics?",
      "Besides the antibiotic, have you been exposed to anything new today?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean, can you ask that differently? I'm just worried about my face being so swollen.",
      "onset": "It started about an hour ago, maybe 45 minutes after I took the first pill of that antibiotic for my sinus infection. The hives came first, then my face started swelling up.",
      "character": "The hives are raised red bumps all over, really itchy. My face feels tight and puffy, especially around my eyes and lips.",
      "location": "The hives are everywhere - my arms, chest, back, legs. The swelling is mainly around my eyes and lips, both sides equally.",
      "severity": "The itching is probably a 7 out of 10, really bothersome. The swelling is scary looking but doesn't hurt, maybe a 3 for discomfort.",
      "aggravating": "Nothing seems to make it worse, but I'm afraid to move around too much in case it gets worse.",
      "relieving": "Nothing has helped yet. I haven't tried anything except coming straight here.",
      "associated": "Just the hives and facial swelling. No trouble breathing, no stomach problems, no dizziness.",
      "denies": "No trouble breathing, no throat tightness, no nausea or vomiting, no dizziness, no chest pain.",
      "history": "Never had anything like this before. I don't think I've ever taken penicillin-type antibiotics before today.",
      "medications": "Amoxicillin-Clavulanate",
      "allergies": "Sulfa, Amoxicillin-Clavulanate",
      "family": "My sister is allergic to penicillin - she gets hives too. I should have remembered that before taking the antibiotic.",
      "social": "I'm an accountant, don't smoke, drink socially on weekends. No drug use. Pretty stressful job but nothing unusual lately."
    },
    "examManeuvers": [
      "Inspection of skin for urticarial lesions",
      "Assessment of facial swelling and angioedema",
      "Oropharyngeal examination for tongue/uvular swelling",
      "Lung auscultation for wheezing or stridor",
      "Cardiovascular examination",
      "Lymph node palpation",
      "Abdominal examination",
      "Neurological assessment including mental status",
      "Vital signs assessment",
      "Assessment of mucous membranes"
    ],
    "examFindings": {
      "Inspection of skin for urticarial lesions": "Diffuse raised erythematous wheals of varying sizes covering trunk, extremities, and face. Lesions are well-demarcated with central pallor.",
      "Assessment of facial swelling and angioedema": "Bilateral periorbital edema and lip swelling, non-pitting, asymmetric with more prominent involvement of lower lip.",
      "Oropharyngeal examination for tongue/uvular swelling": "Mild tongue edema present, uvula appears normal, no obvious airway compromise.",
      "Lung auscultation for wheezing or stridor": "Clear bilateral breath sounds, no wheezing, stridor, or respiratory distress.",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, adequate perfusion, capillary refill <2 seconds.",
      "Lymph node palpation": "No lymphadenopathy palpated in cervical, axillary, or inguinal regions.",
      "Abdominal examination": "Soft, non-tender, no organomegaly, normal bowel sounds.",
      "Neurological assessment including mental status": "Alert and oriented x3, anxious but appropriate affect, no focal neurological deficits.",
      "Vital signs assessment": "BP 118/72 stable, HR 98 regular, afebrile at 37.2\u00b0C, SpO2 98% on room air.",
      "Assessment of mucous membranes": "Pink and moist, no cyanosis or pallor noted."
    },
    "ddxTargets": [
      "Perioperative anaphylaxis \u2014 succinylcholine, classic timing (correct)",
      "Anaphylactoid reaction (non-IgE) \u2014 drugs like vancomycin, morphine can cause non-IgE histamine release; tryptase rise less dramatic",
      "Vasovagal reaction during induction \u2014 no urticaria or bronchospasm",
      "Laryngospasm from intubation \u2014 respiratory without cardiovascular collapse + urticaria",
      "Transfusion reaction \u2014 blood products given? Not in this case",
      "Tension pneumothorax \u2014 cardiovascular collapse but no urticaria or bronchospasm"
    ],
    "biasFlags": {
      "anchoring": "The clear temporal relationship with antibiotic administration may cause anchoring on drug allergy, potentially missing other causes like food allergies or environmental exposures that coincidentally occurred around the same time.",
      "prematureClosure": "The obvious presentation of urticaria and angioedema after drug administration may lead to stopping evaluation too early without considering progression to anaphylaxis or assessing for systemic involvement.",
      "availabilityBias": "Recent cases of drug allergies or dramatic anaphylactic reactions may influence assessment of severity and urgency of this particular presentation."
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider the key features that distinguish different types of allergic reactions. What historical elements would help you differentiate between localized drug reaction, angioedema, and early anaphylaxis? Think about the timeline and systemic involvement.",
      "phase5": "Now that you've completed your assessment, reflect on the constellation of findings. How do the physical exam findings help risk-stratify this patient? What features suggest this is localized versus systemic? Consider what monitoring or escalation might be needed.",
      "finalDebrief": "This case illustrates a classic IgE-mediated drug hypersensitivity reaction. Notice how the family history, timing, and distribution of symptoms supported the diagnosis. Discuss how you differentiated this from anaphylaxis and what your monitoring plan would include. What patient education about future antibiotic use is crucial here?",
      "final": "Diagnosis: perioperative anaphylaxis \u2014 succinylcholine. Key learning: (1) Perioperative anaphylaxis timing: occurs within minutes of drug administration during induction. Triad: hypotension + bronchospasm + urticaria/flush. Urticaria may be absent in 15-20% of cases (esp. under drapes) \u2014 cardiovascular collapse + bronchospasm alone = anaphylaxis until proven otherwise in the OR. (2) Most common causative agents in OR anaphylaxis: NMBAs (50-70% \u2014 succinylcholine, rocuronium), antibiotics (cefazolin most common), latex (~12%), blue dyes (isosulfan blue for sentinel node), colloids, opioids. (3) Tryptase timing in OR: draw during reaction + at 1h + at 24h (baseline). Acute tryptase markedly elevated + normal baseline = mast cell-mediated (IgE or anaphylactoid). Normal acute tryptase does NOT exclude anaphylaxis \u2014 early drawing may miss the peak. (4) Allergy workup timing: refer to allergy 4-6 weeks post-reaction (acute phase masks testing results). Skin prick and intradermal testing to all drugs given perioperatively \u2014 identifies specific causative agent. Cross-reactive NMBAs should be tested. Safe alternatives documented in chart. (5) Rocuronium (NMBA) allergy: most common individual NMBA cause. Sugammadex can reverse rocuronium \u2014 some centers prefer rocuronium over succinylcholine for RSI given immediate reversal option. However, sugammadex itself can rarely cause anaphylaxis."
    }
  },
  "meta": {
    "diagnosis": "Anaphylaxis \u2014 Perioperative, Neuromuscular Blocking Agent (Succinylcholine), Most Common OR Anaphylaxis Trigger",
    "caseId": "severe-allergic-reaction"
  }
};
