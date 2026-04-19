/* emr-data/ace-angioedema-v2.js — Variation: ACE Inhibitor Angioedema */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Evelyn Washington-Carter",
      "patientHPI": "About six hours ago my tongue just started swelling up out of nowhere and now it's so big I can't even swallow my own spit properly - I sound funny when I try to talk and my tongue feels like it's taking up my whole mouth.",
      "dob": "06/27/1958",
      "age": "68",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-520707",
      "language": "English",
      "race": "Black/African American",
      "phone": "(317) 555-5516",
      "email": "evelyn.washingtoncarter@email.com",
      "address": "4043 Chestnut Rd, Albuquerque, NM 87101",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Michael Washington-Carter",
        "phone": "(412) 555-2848",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "ACE inhibitors",
        "reaction": "Angioedema",
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
      }
    ],
    "familyHistory": [
      "Sister: also had ACE inhibitor angioedema"
    ],
    "socialHistory": [
      [
        "Race",
        "African American — 3-5x higher risk of ACE angioedema"
      ],
      [
        "Comorbidity",
        "CHF with EF 35% — ACE inhibitors are guideline-directed therapy, losing them hurts"
      ],
      [
        "Timing",
        "On lisinopril for 8 YEARS — late-onset ACE angioedema (can occur years after starting)"
      ],
      [
        "ARB question",
        "Can she take losartan? Cross-reactivity risk is 2-10%"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "68yo with tongue swelling and difficulty speaking — on lisinopril x8 years, first episode of angioedema",
        "diagnosis": "ACE Inhibitor Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ACE inhibitor angioedema — late-onset (8 years on drug)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "No urticaria (bradykinin-mediated, not histamine)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Airway compromise — tongue protruding, drooling",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "African American female — highest risk demographic for ACE angioedema",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "CHF EF 35% — needs ACE/ARB for mortality benefit",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "Given x1 (bradykinin receptor antagonist)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Epinephrine",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "Given but limited effect (not histamine-mediated)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Dexamethasone",
          "dose": "10mg",
          "route": "IV",
          "frequency": "Given (limited effect)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Lisinopril",
          "dose": "DISCONTINUED",
          "route": "",
          "frequency": "",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "158/92",
          "hr": "88",
          "rr": "20",
          "temp": "36.8°C",
          "spo2": "96%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-676993",
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
                  "value": "1.2",
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
              "name": "ANGIOEDEMA WORKUP",
              "results": [
                {
                  "test": "C4",
                  "value": "28",
                  "unit": "mg/dL",
                  "range": "16-47",
                  "flag": ""
                },
                {
                  "test": "C1-INH level",
                  "value": "32",
                  "unit": "mg/dL",
                  "range": "21-39",
                  "flag": ""
                },
                {
                  "test": "Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
                  "flag": ""
                },
                {
                  "test": "BNP",
                  "value": "480",
                  "unit": "pg/mL",
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
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "68yo with tongue swelling and difficulty speaking — on lisinopril x8 years, first episode of angioedema",
          "hpi": "68F with CHF (EF 35%) on lisinopril x8 years presenting with progressive tongue swelling x6 hours. Tongue protruding, unable to swallow secretions, muffled speech. NO urticaria (key distinction — this is bradykinin-mediated). ACE angioedema can occur YEARS after starting the drug — late-onset is well-documented. Risk factors: African American (3-5x higher risk), female, age >65. C4 and C1-INH both normal — rules out hereditary angioedema. Tryptase normal — rules out mast cell/allergic cause. Icatibant (bradykinin B2 receptor antagonist) given — faster onset than FFP. Epi and steroids given but expected to have minimal effect (wrong mechanism). CRITICAL QUESTION: She needs ACE/ARB for CHF survival. Can she switch to an ARB? Risk of cross-reactivity is 2-10%.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted to ICU for airway monitoring — tongue swelling with impending obstruction",
        "diagnosis": "ACE Inhibitor Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ACE angioedema — tongue, floor of mouth, impending airway obstruction",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Anesthesia on standby for intubation/surgical airway",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "ACE inhibitor permanently discontinued",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "CHF management — needs alternative to ACE/ARB (sacubitril component of Entresto also affects bradykinin)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Cardiology consult for CHF med optimization without ACE/ARB",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Icatibant",
          "dose": "30mg",
          "route": "SC",
          "frequency": "Given x1 — can repeat in 6h if needed",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "FFP",
          "dose": "2 units",
          "route": "IV",
          "frequency": "If refractory (provides ACE enzyme to degrade bradykinin)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Amlodipine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily (BP management)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Carvedilol",
          "dose": "12.5mg",
          "route": "PO",
          "frequency": "BID (CHF — continue)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-5",
          "name": "Furosemide",
          "dose": "40mg",
          "route": "PO",
          "frequency": "Daily (CHF — continue)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "142/82",
          "hr": "82",
          "rr": "18",
          "temp": "36.8°C",
          "spo2": "97%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-992045",
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
          "cc": "Admitted to ICU for airway monitoring — tongue swelling with impending obstruction",
          "hpi": "68F admitted to ICU — tongue swelling progressing despite icatibant. Anesthesia at bedside with fiberoptic intubation equipment and surgical airway tray. ENT consulted. After 4 hours: swelling starting to improve. Cardiology consult: (1) ACE inhibitor permanently stopped, (2) ARB cross-reactivity risk 2-10% — defer trial for 6 weeks after complete resolution, (3) Sacubitril/valsartan (Entresto) — sacubitril component inhibits neprilysin which also degrades bradykinin — theoretical risk, avoid, (4) Alternative CHF management: hydralazine/isosorbide dinitrate (A-HeFT data — particularly effective in African Americans).",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — ACE angioedema management, ARB cross-reactivity assessment for CHF",
        "diagnosis": "ACE Inhibitor Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ACE angioedema — confirmed bradykinin-mediated (normal C4, C1-INH, tryptase)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "ACE inhibitors permanently contraindicated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "ARB trial — will attempt losartan under observation in 6 weeks",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Entresto (sacubitril/valsartan) — avoid (sacubitril increases bradykinin)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Hydralazine/ISDN as bridge for CHF",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-6",
          "description": "African American — A-HeFT data supports hydralazine/ISDN regardless",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Hydralazine",
          "dose": "37.5mg",
          "route": "PO",
          "frequency": "TID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Isosorbide dinitrate",
          "dose": "20mg",
          "route": "PO",
          "frequency": "TID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Carvedilol",
          "dose": "12.5mg",
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
          "bp": "138/78",
          "hr": "76",
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
          "accession": "LAB-260586",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult — ACE angioedema management, ARB cross-reactivity assessment for CHF",
          "hpi": "A/I consult: 68F with confirmed bradykinin-mediated ACE angioedema. All ACE inhibitors permanently contraindicated. ARB decision: will attempt monitored losartan trial in clinic after 6-week washout — 90-98% of patients tolerate ARBs after ACE angioedema, but must be monitored. If ARB tolerated → great for CHF. If not → hydralazine/ISDN permanently. Entresto explicitly avoided — sacubitril increases bradykinin. Medical alert bracelet: NO ACE INHIBITORS. Letter to all providers in system. Sister should also be counseled about risk.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "ARB challenge — 6 weeks post-ACE angioedema, monitored losartan trial",
        "diagnosis": "ACE Inhibitor Angioedema"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "ACE angioedema — resolved, 6-week washout complete",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Monitored ARB trial today — losartan 25mg under observation",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "CHF — stable on hydralazine/ISDN bridge, EF improved to 40%",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "If losartan tolerated → switch from hydralazine/ISDN for simplicity + mortality data",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Losartan",
          "dose": "25mg",
          "route": "PO",
          "frequency": "Challenge dose — observed 3 hours → TOLERATED",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Carvedilol",
          "dose": "12.5mg",
          "route": "PO",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Furosemide",
          "dose": "40mg",
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
          "bp": "134/78",
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
          "accession": "LAB-179551",
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
          "cc": "ARB challenge — 6 weeks post-ACE angioedema, monitored losartan trial",
          "hpi": "68F returns for monitored ARB trial. Losartan 25mg given in clinic — observed 3 hours. NO angioedema, no swelling, no symptoms. ARB TOLERATED. Will uptitrate to losartan 50mg → 100mg over 2 weeks. Can discontinue hydralazine/ISDN once at target losartan dose. CHF management optimized. Medical alert bracelet updated: \"ACE inhibitor allergy — ARB tolerated.\" This is the best outcome — she retains the mortality benefit of RAAS blockade for CHF. Follow-up 2 weeks for uptitration.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Evelyn Washington-Carter",
    "dob": "06/27/1958",
    "age": "68",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-520707",
    "language": "English",
    "race": "Black/African American",
    "phone": "(312) 555-7868",
    "email": "evelyn.washingtoncarter@email.com",
    "address": "7415 Elm St, Kansas City, MO 64101",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Washington-Carter",
      "phone": "(630) 555-1256",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Tongue swelling",
    "diagnosis": "ACE Inhibitor Angioedema"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "ACE inhibitor angioedema — late-onset (8 years on drug)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "No urticaria (bradykinin-mediated, not histamine)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Airway compromise — tongue protruding, drooling",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "African American female — highest risk demographic for ACE angioedema",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "CHF EF 35% — needs ACE/ARB for mortality benefit",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Icatibant",
      "dose": "30mg",
      "route": "SC",
      "frequency": "Given x1 (bradykinin receptor antagonist)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Epinephrine",
      "dose": "0.3mg",
      "route": "IM",
      "frequency": "Given but limited effect (not histamine-mediated)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Dexamethasone",
      "dose": "10mg",
      "route": "IV",
      "frequency": "Given (limited effect)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Lisinopril",
      "dose": "DISCONTINUED",
      "route": "",
      "frequency": "",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "ACE inhibitors",
      "reaction": "Angioedema",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "158/92",
      "hr": "88",
      "rr": "20",
      "temp": "36.8°C",
      "spo2": "96%",
      "pain": "6/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "68yo with tongue swelling and difficulty speaking — on lisinopril x8 years, first episode of angioedema",
      "hpi": "68F with CHF (EF 35%) on lisinopril x8 years presenting with progressive tongue swelling x6 hours. Tongue protruding, unable to swallow secretions, muffled speech. NO urticaria (key distinction — this is bradykinin-mediated). ACE angioedema can occur YEARS after starting the drug — late-onset is well-documented. Risk factors: African American (3-5x higher risk), female, age >65. C4 and C1-INH both normal — rules out hereditary angioedema. Tryptase normal — rules out mast cell/allergic cause. Icatibant (bradykinin B2 receptor antagonist) given — faster onset than FFP. Epi and steroids given but expected to have minimal effect (wrong mechanism). CRITICAL QUESTION: She needs ACE/ARB for CHF survival. Can she switch to an ARB? Risk of cross-reactivity is 2-10%.",
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
      "accession": "LAB-676993",
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
              "value": "1.2",
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
          "name": "ANGIOEDEMA WORKUP",
          "results": [
            {
              "test": "C4",
              "value": "28",
              "unit": "mg/dL",
              "range": "16-47",
              "flag": ""
            },
            {
              "test": "C1-INH level",
              "value": "32",
              "unit": "mg/dL",
              "range": "21-39",
              "flag": ""
            },
            {
              "test": "Tryptase",
              "value": "4.8",
              "unit": "ng/mL",
              "range": "<11.5",
              "flag": ""
            },
            {
              "test": "BNP",
              "value": "480",
              "unit": "pg/mL",
              "range": "<100",
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
    "Sister: also had ACE inhibitor angioedema"
  ],
  "socialHistory": [
    [
      "Race",
      "African American — 3-5x higher risk of ACE angioedema"
    ],
    [
      "Comorbidity",
      "CHF with EF 35% — ACE inhibitors are guideline-directed therapy, losing them hurts"
    ],
    [
      "Timing",
      "On lisinopril for 8 YEARS — late-onset ACE angioedema (can occur years after starting)"
    ],
    [
      "ARB question",
      "Can she take losartan? Cross-reactivity risk is 2-10%"
    ]
  ],
  "references": [
    {
      "id": "ACE-AE-Byrd-2006",
      "title": "ACE inhibitor-associated angioedema",
      "authors": "Byrd JB, Adam A, Brown NJ.",
      "journal": "Immunol Allergy Clin North Am",
      "year": 2006,
      "doi": "10.1016/j.iac.2006.08.001",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4039077/",
      "openAccess": true,
      "validates": [
        "3-5x higher risk in African Americans",
        "Late-onset possible years after starting",
        "Bradykinin mechanism",
        "ARB cross-reactivity 2-10%",
        "Icatibant for ACE angioedema"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Anxious and distressed, pointing to her protruding tongue and drooling, unable to speak clearly due to muffled speech. She appears frightened about her breathing and is highly motivated to communicate her symptoms despite speech difficulties.",
    "interviewQuestions": [
      "When did the tongue swelling start and how has it progressed?",
      "Are you having any difficulty breathing or swallowing?",
      "Have you noticed any rash, hives, or itching anywhere on your body?",
      "What medications are you currently taking?",
      "Have you eaten any new foods or been exposed to anything unusual today?",
      "Have you had any recent dental work or injuries to your mouth?",
      "Do you have any known allergies to medications or foods?",
      "Have you ever had swelling like this before?",
      "Are you having any chest pain, shortness of breath, or wheezing?",
      "Has anyone in your family had similar reactions to medications?",
      "How long have you been taking your current heart medications?",
      "Have you had any recent changes to your medications?",
      "Are you having any abdominal pain or cramping?"
    ],
    "patientResponses": {
      "default": "I'm sorry, it's hard for me to talk clearly with my tongue like this. Can you repeat that?",
      "onset": "It started about 6 hours ago, just gradually got worse and worse. My tongue kept getting bigger and now it won't fit in my mouth.",
      "character": "My tongue feels thick and heavy, like it's made of rubber. It's so swollen I can barely move it.",
      "location": "It's mainly my tongue, but I think my lips might be a little puffy too. The swelling is worst at the tip of my tongue.",
      "severity": "This is a 9 out of 10 - I'm really scared. I can't swallow my spit and I'm worried about breathing.",
      "aggravating": "It seems to be getting worse on its own. Nothing I do makes it worse, it just keeps progressing.",
      "relieving": "Nothing has helped. I tried ice chips but I can't really swallow them anyway.",
      "associated": "I'm drooling constantly because I can't swallow. My voice sounds funny and muffled. No other symptoms though.",
      "denies": "No rash anywhere, no itching, no hives. No chest pain or wheezing. No stomach pain or vomiting.",
      "history": "Never had anything like this before in my life. This is completely new and terrifying.",
      "medications": "Icatibant; Epinephrine; Dexamethasone; Lisinopril",
      "allergies": "ACE inhibitors",
      "family": "Actually, my sister had something similar happen to her a few years ago. She was taking the same heart medication I am - lisinopril.",
      "social": "I'm retired, used to work as a teacher. I don't smoke or drink much, maybe a glass of wine on weekends."
    },
    "examManeuvers": [
      "Inspect oral cavity and tongue",
      "Assess airway patency and voice quality",
      "Examine skin for urticaria or angioedema",
      "Auscultate lungs for stridor or wheezing",
      "Palpate neck for lymphadenopathy",
      "Examine lips and perioral area",
      "Assess ability to swallow",
      "Cardiovascular examination",
      "Abdominal examination",
      "Neurological assessment of cranial nerves"
    ],
    "examFindings": {
      "Inspect oral cavity and tongue": "Markedly swollen tongue protruding from mouth, unable to retract fully, asymmetric swelling worse on right side",
      "Assess airway patency and voice quality": "Patent airway but compromised, muffled voice, excessive drooling, difficulty handling secretions",
      "Examine skin for urticaria or angioedema": "No urticaria or hives anywhere on body, mild lip swelling, no other areas of angioedema",
      "Auscultate lungs for stridor or wheezing": "Clear breath sounds bilaterally, no stridor or wheeze, normal respiratory effort",
      "Palpate neck for lymphadenopathy": "No cervical lymphadenopathy or neck swelling",
      "Examine lips and perioral area": "Mild bilateral lip swelling, no periorbital involvement",
      "Assess ability to swallow": "Unable to swallow secretions effectively, pooling saliva, gag reflex intact",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, elevated blood pressure consistent with CHF",
      "Abdominal examination": "Soft, non-tender, no organomegaly or masses",
      "Neurological assessment of cranial nerves": "Cranial nerves intact except for mechanical limitation from tongue swelling"
    },
    "ddxTargets": [
      "ACE inhibitor-induced angioedema (correct diagnosis)",
      "Hereditary angioedema",
      "Allergic angioedema",
      "Anaphylaxis",
      "Superior vena cava syndrome",
      "Cellulitis of floor of mouth",
      "Medication-induced angioedema (non-ACE)"
    ],
    "biasFlags": {
      "anchoring": "May anchor on allergic reaction and miss ACE inhibitor angioedema, especially given 8-year medication history",
      "prematureClosure": "Might stop at 'allergic reaction' without identifying specific causative agent and mechanism",
      "availabilityBias": "More likely to think of acute allergic reactions rather than delayed drug-induced angioedema"
    },
    "coachPrompts": {
      "phase2": "You're thinking about tongue swelling in a 68-year-old. What are the key categories of angioedema, and how might you differentiate between them? Consider both the timeline and associated findings you'd want to explore.",
      "phase5": "Now you have a patient with isolated tongue swelling, no urticaria, on lisinopril for 8 years, and a family history of similar reaction. What does the absence of hives tell you about the mechanism? How does the medication duration factor into your thinking?",
      "finalDebrief": "This case highlights ACE inhibitor angioedema - note how it can occur after years of safe use, disproportionately affects African Americans, and lacks urticaria because it's bradykinin-mediated, not histamine-mediated. The key teaching point is that long-term medication use doesn't exclude drug-induced reactions, and this patient will need alternative heart failure management since ACE inhibitors are now contraindicated."
    }
  }
};
