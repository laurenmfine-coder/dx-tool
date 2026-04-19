/* emr-data/anaphylaxis-v5.js — Multi-Setting Allergy Case Variation: Anaphylaxis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Amira Hassan",
  "patientHPI": "My parents got some dip from the food bank and gave it to me, but they couldn't read the label since it was only in English, and now my face is swelling and I can't breathe right. We didn't know it had sesame in it, which I'm not supposed to have.",
      "dob": "02/23/2018",
      "age": "8",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-225792",
      "language": "Arabic",
      "race": "Middle Eastern",
      "phone": "(620) 555-7286",
      "email": "amira.hassan@email.com",
      "address": "9191 Peachtree Rd, Milwaukee, WI 53204",
      "insurance": "Medicaid",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Michael Hassan",
        "phone": "(513) 555-4043",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Sesame",
        "reaction": "Anaphylaxis",
        "severity": "Severe",
        "type": "Food"
      },
      {
        "allergen": "Eggs",
        "reaction": "Hives",
        "severity": "Moderate",
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
      "Father: asthma",
      "Mother: sesame allergy"
    ],
    "socialHistory": [
      [
        "Living",
        "Recent immigrant family from Syria — in US 2 years"
      ],
      [
        "Language",
        "Parents speak Arabic only — patient speaks English learned at school"
      ],
      [
        "Diet",
        "Middle Eastern diet heavy in sesame/tahini — major dietary disruption"
      ],
      [
        "Religion",
        "Muslim — halal dietary requirements intersect with allergy avoidance"
      ],
      [
        "School",
        "3rd grade — 504 plan in place"
      ],
      [
        "Food security",
        "Family uses food bank — limited control over ingredients"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "8yo with known sesame allergy — accidental exposure from food bank hummus, progressive facial swelling and wheezing",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Sesame anaphylaxis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Egg allergy (hives only)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Asthma (mild)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Food insecurity — food bank items not always labeled in Arabic",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Language barrier — parents Arabic-only",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Epinephrine",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "Given x1 (EpiPen Jr)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Albuterol",
          "dose": "2.5mg",
          "route": "NEB",
          "frequency": "Q20min x3",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Diphenhydramine",
          "dose": "12.5mg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Dexamethasone",
          "dose": "0.6mg/kg",
          "route": "IV",
          "frequency": "Once",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "88/52",
          "hr": "142",
          "rr": "32",
          "temp": "37.2°C",
          "spo2": "91%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-835655",
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
                  "value": "11.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
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
                  "value": "7",
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
              "name": "ALLERGY STUDIES",
              "results": [
                {
                  "test": "Tryptase (acute)",
                  "value": "35",
                  "unit": "ng/mL",
                  "range": "<11.5",
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
          "cc": "8yo with known sesame allergy — accidental exposure from food bank hummus, progressive facial swelling and wheezing",
          "hpi": "8F brought by parents after anaphylaxis from sesame exposure. Family received hummus from food bank — label was in English only, parents did not recognize \"tahini\" as sesame product. Patient ate hummus with pita, developed facial swelling and wheezing within 15 min. Father administered EpiPen Jr (properly). In ED, patient serves as interpreter for parents (8yo translating her own medical emergency). Arabic interpreter requested. Cultural note: sesame is ubiquitous in Middle Eastern cuisine — tahini, halvah, za'atar, baba ghanoush — this allergy has profoundly affected family's cultural food practices.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for observation — social work consult for food security and cultural dietary counseling",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Sesame anaphylaxis — resolved",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Food insecurity — food bank items inadequately labeled",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Language barrier — need Arabic resources",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Cultural dietary impact — sesame is staple in Middle Eastern cuisine",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Egg allergy — limits protein sources further",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisolone",
          "dose": "1mg/kg",
          "route": "PO",
          "frequency": "Daily x3 days",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Albuterol",
          "dose": "90mcg",
          "route": "MDI+spacer",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "98/62",
          "hr": "112",
          "rr": "22",
          "temp": "36.8°C",
          "spo2": "98%",
          "pain": "N/A/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-236629",
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
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Admitted for observation — social work consult for food security and cultural dietary counseling",
          "hpi": "8F stable post-anaphylaxis. Social work consult: connecting family with Arabic-speaking food bank coordinator, providing Arabic-language food label reading guide with sesame synonyms (tahini, halvah, etc.), contacting school to update 504 plan. Nutritionist consult: working with family on sesame-free Middle Eastern recipes that maintain cultural food identity. Interpreter services: Arabic interpreter present for all discussions — patient should NOT serve as medical interpreter for parents.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — sesame allergy management in context of cultural diet and food insecurity",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Sesame allergy — IgE-mediated, FARE category",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Egg allergy — consider baked egg challenge",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food insecurity + sesame-heavy cultural diet = high risk for accidental exposure",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Arabic-only parents — need translated action plan and food label guide",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "EpiPen Jr",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "PRN x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "5mg",
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
          "bp": "102/64",
          "hr": "96",
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
          "accession": "LAB-743367",
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
              "name": "ALLERGY TESTING",
              "results": [
                {
                  "test": "Sesame sIgE",
                  "value": "56",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Ses i 1 (component)",
                  "value": "42",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Egg white sIgE",
                  "value": "3.2",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Ovomucoid (Gal d 1)",
                  "value": "0.4",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Baseline Tryptase",
                  "value": "4.8",
                  "unit": "ng/mL",
                  "range": "<11.5",
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
          "cc": "A/I consult — sesame allergy management in context of cultural diet and food insecurity",
          "hpi": "A/I consult: 8F with confirmed severe sesame allergy (Ses i 1 strongly positive). Egg: ovomucoid low — good candidate for baked egg challenge (would expand diet significantly). Sesame is now a top-9 allergen (FASTER Act 2021) — labeling required. However, food bank items may not comply. Arabic-language anaphylaxis action plan created. FARE resources shared in Arabic. Family connected with Arabic-speaking allergist in community for ongoing care. Sesame OIT not yet widely available but discussing clinical trials.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Follow-up — baked egg challenge, food label education, cultural diet adaptation",
        "diagnosis": "Anaphylaxis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Sesame allergy — stable, strict avoidance",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Egg — passed baked egg challenge (can have baked goods with egg)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Food bank coordination improved — Arabic-speaking coordinator assigned",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "School 504 plan current",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Family using sesame-free za'atar and tahini alternatives successfully",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "EpiPen Jr",
          "dose": "0.15mg",
          "route": "IM",
          "frequency": "PRN x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "100/62",
          "hr": "92",
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
          "accession": "LAB-861984",
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
          "cc": "Follow-up — baked egg challenge, food label education, cultural diet adaptation",
          "hpi": "8F returns 8 weeks post-anaphylaxis. Successfully passed baked egg challenge today — can now eat baked goods containing egg (expands diet significantly). Family reports using sunflower seed butter as tahini substitute in traditional recipes. Arabic-speaking food bank coordinator reviewing items before family pickup. No accidental sesame exposures since hospitalization. School nurse confirmed 504 plan updated. Father learning English food allergy vocabulary. Next: annual sesame IgE monitoring, consider sesame OIT trial when available.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Amira Hassan",
    "dob": "02/23/2018",
    "age": "8",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-225792",
    "language": "Arabic",
    "race": "Middle Eastern",
    "phone": "(615) 555-9804",
    "email": "amira.hassan@email.com",
    "address": "5255 Elm St, Birmingham, AL 35201",
    "insurance": "Medicaid",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Michael Hassan",
      "phone": "(713) 555-3838",
      "relationship": "Parent"
    },
    "chiefComplaint": "8yo with known sesame allergy — accidental exposure from food bank hummus, progressive facial swelling and wheezing",
    "diagnosis": "Anaphylaxis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Sesame anaphylaxis",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Egg allergy (hives only)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Asthma (mild)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Food insecurity — food bank items not always labeled in Arabic",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Language barrier — parents Arabic-only",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Epinephrine",
      "dose": "0.15mg",
      "route": "IM",
      "frequency": "Given x1 (EpiPen Jr)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Albuterol",
      "dose": "2.5mg",
      "route": "NEB",
      "frequency": "Q20min x3",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Diphenhydramine",
      "dose": "12.5mg",
      "route": "IV",
      "frequency": "Once",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Dexamethasone",
      "dose": "0.6mg/kg",
      "route": "IV",
      "frequency": "Once",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Sesame",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "type": "Food"
    },
    {
      "allergen": "Eggs",
      "reaction": "Hives",
      "severity": "Moderate",
      "type": "Food"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "88/52",
      "hr": "142",
      "rr": "32",
      "temp": "37.2°C",
      "spo2": "91%",
      "pain": "N/A/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "8yo with known sesame allergy — accidental exposure from food bank hummus, progressive facial swelling and wheezing",
      "hpi": "8F brought by parents after anaphylaxis from sesame exposure. Family received hummus from food bank — label was in English only, parents did not recognize \"tahini\" as sesame product. Patient ate hummus with pita, developed facial swelling and wheezing within 15 min. Father administered EpiPen Jr (properly). In ED, patient serves as interpreter for parents (8yo translating her own medical emergency). Arabic interpreter requested. Cultural note: sesame is ubiquitous in Middle Eastern cuisine — tahini, halvah, za'atar, baba ghanoush — this allergy has profoundly affected family's cultural food practices.",
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
      "accession": "LAB-835655",
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
              "value": "11.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
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
              "value": "7",
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
          "name": "ALLERGY STUDIES",
          "results": [
            {
              "test": "Tryptase (acute)",
              "value": "35",
              "unit": "ng/mL",
              "range": "<11.5",
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
    "Father: asthma",
    "Mother: sesame allergy"
  ],
  "socialHistory": [
    [
      "Living",
      "Recent immigrant family from Syria — in US 2 years"
    ],
    [
      "Language",
      "Parents speak Arabic only — patient speaks English learned at school"
    ],
    [
      "Diet",
      "Middle Eastern diet heavy in sesame/tahini — major dietary disruption"
    ],
    [
      "Religion",
      "Muslim — halal dietary requirements intersect with allergy avoidance"
    ],
    [
      "School",
      "3rd grade — 504 plan in place"
    ],
    [
      "Food security",
      "Family uses food bank — limited control over ingredients"
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
  },
  {
    "id": "EAACI-Anaph-2021",
    "title": "EAACI guidelines: Anaphylaxis (2021 update)",
    "authors": "Muraro A, Worm M, Alviani C, et al.",
    "journal": "Allergy",
    "year": 2022,
    "doi": "10.1111/all.15032",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9285065/",
    "openAccess": true,
    "validates": [
      "Discharge planning with EpiPen",
      "Patient action plans",
      "Allergist referral 4-6 weeks"
    ]
  }
],
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Cardiovascular",
        "Pulmonary",
        "Abdominal",
        "Extremities",
        "Skin",
        "Targeted exam"
    ],
    "examFindings": {
        "General appearance": "Finding consistent with this condition.",
        "Vital signs": "Finding consistent with this condition.",
        "Cardiovascular": "Finding consistent with this condition.",
        "Pulmonary": "Finding consistent with this condition.",
        "Abdominal": "Finding consistent with this condition.",
        "Extremities": "Finding consistent with this condition.",
        "Skin": "Finding consistent with this condition.",
        "Targeted exam": "Finding consistent with this condition."
    },
    "ddxTargets": [
        "this condition (correct)",
        "Most likely alternative",
        "Third differential",
        "Must-not-miss 1",
        "Must-not-miss 2",
        "Common mimic 1",
        "Common mimic 2"
    ],
    "biasFlags": {
        "anchoring": "Consider the full differential for this condition.",
        "prematureClosure": "Complete your workup before narrowing focus.",
        "availabilityBias": "Apply systematic clinical reasoning."
    },
    "coachPrompts": {
        "phase2": "Before interviewing Amira Hassan: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Amira appears anxious and distressed, with visible facial swelling and audible wheezing, but trying to be brave. She is cooperative and forthcoming with answers despite her respiratory distress, occasionally looking to her parents who appear very worried and speak in Arabic to each other.",
    "interviewQuestions": [
        "What did you eat before you started feeling sick?",
        "When did you first notice your face starting to swell?",
        "Are you having trouble breathing or does your chest feel tight?",
        "Have you used your rescue inhaler today?",
        "Did anyone give you your EpiPen after you ate the hummus?",
        "Is your throat feeling tight or scratchy?",
        "Are you feeling dizzy or like you might faint?",
        "Do you have any itching on your skin or hives?",
        "Have you thrown up or felt nauseous?",
        "When was the last time you had a reaction like this to sesame?",
        "Do you have any belly pain or cramping?",
        "Did your parents know the hummus had sesame in it?",
        "How long after eating the hummus did you start feeling sick?"
    ],
    "patientResponses": {
        "default": "I'm not sure... it's hard to think right now because I feel really sick",
        "onset": "I ate the hummus about 30 minutes ago and my lips started tingling right away, then my face got puffy",
        "character": "My chest feels really tight and it's hard to breathe, like someone is squeezing me",
        "location": "My face is swollen, especially around my eyes and lips, and my chest feels tight all over",
        "severity": "This is like an 8 out of 10 - I'm really scared and it's hard to breathe",
        "aggravating": "It keeps getting worse even though we came to the hospital",
        "relieving": "My dad gave me my EpiPen in the car but I still feel bad",
        "associated": "My skin is really itchy, I feel dizzy, and my stomach hurts a little bit",
        "denies": "I haven't thrown up and I don't have a fever, but everything else feels bad",
        "history": "I had a really bad reaction to sesame when I was 6 and had to go to the hospital then too",
        "medications": "Epinephrine; Albuterol; Diphenhydramine; Dexamethasone",
        "allergies": "Sesame, Eggs",
        "family": "My mom is allergic to sesame too and my dad has asthma like me",
        "social": "I'm in 3rd grade and we moved here from Syria. My parents don't speak English very well and didn't know the hummus had tahini in it"
    },
    "examManeuvers": [
        "Assess airway patency and voice quality",
        "Inspect face and lips for angioedema",
        "Auscultate lungs for wheezing or stridor",
        "Examine skin for urticaria or flushing",
        "Assess cardiovascular status and perfusion",
        "Evaluate mental status and anxiety level",
        "Inspect oropharynx and tongue",
        "Assess work of breathing and accessory muscle use",
        "Palpate lymph nodes",
        "Examine abdomen for tenderness"
    ],
    "examFindings": {
        "Assess airway patency and voice quality": "Voice is slightly hoarse, no stridor, airway patent but patient appears anxious about breathing",
        "Inspect face and lips for angioedema": "Significant periorbital and lip swelling, more pronounced on the left side",
        "Auscultate lungs for wheezing or stridor": "Bilateral expiratory wheeze throughout all lung fields, good air movement",
        "Examine skin for urticaria or flushing": "Diffuse urticarial rash on trunk and arms, skin appears flushed",
        "Assess cardiovascular status and perfusion": "Tachycardic, hypotensive, capillary refill 3 seconds, pulses present but thready",
        "Evaluate mental status and anxiety level": "Alert and oriented, anxious but appropriate, no altered mental status",
        "Inspect oropharynx and tongue": "Tongue appears mildly swollen, uvula visible, no obvious obstruction",
        "Assess work of breathing and accessory muscle use": "Mild accessory muscle use, speaking in short sentences due to dyspnea",
        "Palpate lymph nodes": "No lymphadenopathy palpated",
        "Examine abdomen for tenderness": "Soft, mild diffuse tenderness, no guarding or rebound"
    },
    "ddxTargets": [
        "Anaphylaxis secondary to sesame exposure (correct diagnosis)",
        "Severe asthma exacerbation",
        "Acute allergic reaction without anaphylaxis",
        "Angioedema (hereditary or acquired)",
        "Food poisoning or gastroenteritis",
        "Viral upper respiratory infection with reactive airway",
        "Anxiety or panic attack"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on asthma given her known history and wheezing, potentially missing the systemic signs of anaphylaxis",
        "prematureClosure": "May focus only on respiratory symptoms and miss cardiovascular involvement and full anaphylaxis criteria",
        "availabilityBias": "Might be influenced by recent cases of asthma exacerbation rather than recognizing multi-system anaphylactic reaction"
    },
    "coachPrompts": {
        "phase2": "You've identified several possible diagnoses. Given that this patient has known food allergies and recent exposure, what specific historical details would help you differentiate between a severe allergic reaction and anaphylaxis? What timeline questions might be most important?",
        "phase5": "Now that you've gathered your history and physical exam findings, let's think about the criteria for anaphylaxis. What systems are involved in this patient's presentation? How does this help narrow your differential diagnosis, and what immediate interventions should you consider?",
        "finalDebrief": "This case highlights the importance of recognizing anaphylaxis as a multi-system emergency rather than focusing only on respiratory symptoms. The cultural and language barriers added complexity to prevention. How did your thinking evolve from considering asthma exacerbation to recognizing systemic anaphylaxis? What social determinants of health factors contributed to this emergency?"
    }
}
};
