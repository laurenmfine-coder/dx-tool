/* emr-data/allergic-conjunctivitis-severe-v2.js — Variation: Vernal Keratoconjunctivitis */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Jayden Thomas",
  "patientHPI": "My eyes have been really bothering me for weeks now — there's this thick, stringy stuff coming out of them and the light hurts so much I have to cover my eyes when I walk around. They feel like there's sand in them and they're so itchy I can't stop rubbing them.",
      "dob": "02/04/2017",
      "age": "9",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-544948",
      "language": "English",
      "race": "Black/African American",
      "phone": "(404) 555-9937",
      "email": "jayden.x@email.com",
      "address": "5121 Lavender St, Columbus, OH 43211",
      "insurance": "Medicaid",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Family Contact",
        "phone": "(502) 555-6262",
        "relationship": "Parent"
      }
    },
    "allergies": [
      {
        "allergen": "Grass pollen",
        "reaction": "Allergic rhinoconjunctivitis",
        "severity": "Moderate",
        "type": "Environmental"
      },
      {
        "allergen": "Dust mite",
        "reaction": "Perennial symptoms",
        "severity": "Moderate",
        "type": "Environmental"
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
      "Mother: seasonal allergies",
      "Father: eczema"
    ],
    "socialHistory": [
      [
        "Context",
        "Vernal keratoconjunctivitis (VKC) — severe form of allergic eye disease, not simple seasonal allergies"
      ],
      [
        "Risk",
        "Giant papillae on tarsal conjunctiva — can cause corneal shield ulcers and permanent vision loss"
      ],
      [
        "Impact",
        "Missing school — eyes swollen shut some mornings, photophobia"
      ],
      [
        "Comorbidity",
        "Asthma and eczema — atopic triad"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "9yo with severe eye swelling, thick mucoid discharge, photophobia — VKC flare with corneal involvement",
        "diagnosis": "Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Vernal keratoconjunctivitis (VKC) — severe allergic eye disease",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Giant papillae — cobblestone appearance on tarsal conjunctiva",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Shield ulcer developing — ophthalmology STAT",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Photophobia — cannot attend school",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Atopic triad (eczema + asthma + allergic rhinoconjunctivitis)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Olopatadine 0.2%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "BID (antihistamine/mast cell stabilizer)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Prednisolone acetate 1%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Q2H (short pulse for acute flare)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Cold compresses",
          "dose": "",
          "route": "",
          "frequency": "Q4H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
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
          "bp": "N/A",
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
          "accession": "LAB-644087",
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
              "name": "ALLERGY PANEL",
              "results": [
                {
                  "test": "Total IgE",
                  "value": "620",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Grass pollen sIgE",
                  "value": "28",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Dust mite sIgE",
                  "value": "22",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Cat dander sIgE",
                  "value": "8",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "cc": "9yo with severe eye swelling, thick mucoid discharge, photophobia — VKC flare with corneal involvement",
          "hpi": "9M with severe VKC — thick ropy mucoid discharge, upper tarsal giant papillae (cobblestone), limbal Horner-Trantas dots, and early corneal shield ulcer (epithelial defect from papillae rubbing). Photophobia so severe he covers eyes to walk. This is NOT simple allergic conjunctivitis — VKC is a chronic, vision-threatening disease predominantly in young males, more common in African American and Middle Eastern children. Shield ulcers can cause permanent corneal scarring and visual impairment. Needs ophthalmology STAT + aggressive immunosuppressive eye drops.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I + Ophthalmology joint consult — VKC management, prevent corneal damage, immunotherapy",
        "diagnosis": "Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "VKC — severe, with shield ulcer",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Steroid eye drops — short burst only (chronic use → glaucoma/cataracts)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Transition to cyclosporine or tacrolimus eye drops (steroid-sparing)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Allergen immunotherapy — candidate (grass, dust mite, cat)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Environmental controls — dust mite encasings, limit outdoor exposure during grass season",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Tacrolimus 0.03% eye drops",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "BID (steroid-sparing immunosuppressant)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Olopatadine 0.2%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Prednisolone acetate",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "Tapered over 2 weeks",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "SCIT (grass + dust mite)",
          "dose": "",
          "route": "SC",
          "frequency": "Weekly build-up → monthly maintenance",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "92",
          "rr": "16",
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
          "accession": "LAB-778615",
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
          "cc": "A/I + Ophthalmology joint consult — VKC management, prevent corneal damage, immunotherapy",
          "hpi": "Joint A/I-Ophthalmology: 9M with severe VKC and early shield ulcer. Steroid burst to control acute inflammation, then transition to tacrolimus 0.03% drops (steroid-sparing — prevents glaucoma/cataract risk of chronic steroids). Shield ulcer managed with lubricants and patching — healing. Allergen immunotherapy started for grass and dust mite — will reduce overall allergic drive. Environmental: mattress/pillow encasings, limit outdoor play during peak grass season, sunglasses for UV/wind protection.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "VKC follow-up — shield ulcer healed, on tacrolimus drops, SCIT progressing",
        "diagnosis": "Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "VKC — controlled on tacrolimus + olopatadine",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Shield ulcer — healed without scarring (caught early)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "SCIT — 4 months into build-up, symptom improvement beginning",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Asthma — improving with immunotherapy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Back in school full-time — photophobia resolved with treatment",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Tacrolimus 0.03%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Olopatadine 0.2%",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "SCIT (grass/DM)",
          "dose": "Build-up phase",
          "route": "SC",
          "frequency": "Weekly",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Sunglasses",
          "dose": "",
          "route": "",
          "frequency": "Outdoors always",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "N/A",
          "hr": "88",
          "rr": "16",
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
          "accession": "LAB-868205",
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
          "cc": "VKC follow-up — shield ulcer healed, on tacrolimus drops, SCIT progressing",
          "hpi": "9M VKC dramatically improved on tacrolimus drops. Shield ulcer healed — no corneal scarring (early treatment saved his vision). Attending school without photophobia. SCIT progressing — spring grass season was milder than prior years. Eye exams Q3 months. Continue tacrolimus long-term (safe steroid-sparing option). VKC typically improves by puberty — may eventually be able to stop treatment.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Jayden Thomas",
    "dob": "02/04/2017",
    "age": "9",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-544948",
    "language": "English",
    "race": "Black/African American",
    "phone": "(314) 555-2311",
    "email": "jayden.x@email.com",
    "address": "5859 Daisy Ave, Albuquerque, NM 87107",
    "insurance": "Medicaid",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(503) 555-5843",
      "relationship": "Parent"
    },
    "chiefComplaint": "9yo with severe eye swelling, thick mucoid discharge, photophobia — VKC flare with corneal involvement",
    "diagnosis": "Vernal Keratoconjunctivitis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Vernal keratoconjunctivitis (VKC) — severe allergic eye disease",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Giant papillae — cobblestone appearance on tarsal conjunctiva",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Shield ulcer developing — ophthalmology STAT",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Photophobia — cannot attend school",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Atopic triad (eczema + asthma + allergic rhinoconjunctivitis)",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Olopatadine 0.2%",
      "dose": "",
      "route": "Ophthalmic",
      "frequency": "BID (antihistamine/mast cell stabilizer)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Prednisolone acetate 1%",
      "dose": "",
      "route": "Ophthalmic",
      "frequency": "Q2H (short pulse for acute flare)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Cold compresses",
      "dose": "",
      "route": "",
      "frequency": "Q4H",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Cetirizine",
      "dose": "5mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Grass pollen",
      "reaction": "Allergic rhinoconjunctivitis",
      "severity": "Moderate",
      "type": "Environmental"
    },
    {
      "allergen": "Dust mite",
      "reaction": "Perennial symptoms",
      "severity": "Moderate",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "N/A",
      "hr": "96",
      "rr": "18",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "N/A/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "9yo with severe eye swelling, thick mucoid discharge, photophobia — VKC flare with corneal involvement",
      "hpi": "9M with severe VKC — thick ropy mucoid discharge, upper tarsal giant papillae (cobblestone), limbal Horner-Trantas dots, and early corneal shield ulcer (epithelial defect from papillae rubbing). Photophobia so severe he covers eyes to walk. This is NOT simple allergic conjunctivitis — VKC is a chronic, vision-threatening disease predominantly in young males, more common in African American and Middle Eastern children. Shield ulcers can cause permanent corneal scarring and visual impairment. Needs ophthalmology STAT + aggressive immunosuppressive eye drops.",
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
      "accession": "LAB-644087",
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
          "name": "ALLERGY PANEL",
          "results": [
            {
              "test": "Total IgE",
              "value": "620",
              "unit": "IU/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Grass pollen sIgE",
              "value": "28",
              "unit": "kU/L",
              "range": "<0.35",
              "flag": "H"
            },
            {
              "test": "Dust mite sIgE",
              "value": "22",
              "unit": "kU/L",
              "range": "<0.35",
              "flag": "H"
            },
            {
              "test": "Cat dander sIgE",
              "value": "8",
              "unit": "kU/L",
              "range": "<0.35",
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
    "Mother: seasonal allergies",
    "Father: eczema"
  ],
  "socialHistory": [
    [
      "Context",
      "Vernal keratoconjunctivitis (VKC) — severe form of allergic eye disease, not simple seasonal allergies"
    ],
    [
      "Risk",
      "Giant papillae on tarsal conjunctiva — can cause corneal shield ulcers and permanent vision loss"
    ],
    [
      "Impact",
      "Missing school — eyes swollen shut some mornings, photophobia"
    ],
    [
      "Comorbidity",
      "Asthma and eczema — atopic triad"
    ]
  ]
,"references":[
  {
    "id": "VKC-Leonardi-2007",
    "title": "Vernal keratoconjunctivitis: severe allergic eye disease with remodeling",
    "authors": "Leonardi A, De Dominicis C, Motterle L.",
    "journal": "Pediatr Allergy Immunol",
    "year": 2007,
    "doi": "10.1111/j.1399-3038.2007.00658.x",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK448118/",
    "openAccess": true,
    "validates": [
      "Giant papillae, shield ulcers, Horner-Trantas dots",
      "Young males, African American/Middle Eastern",
      "Steroid-sparing: tacrolimus/cyclosporine",
      "Shield ulcers → permanent corneal scarring"
    ]
  }
],
  "guided": {
    "supported": true,
    "patientPersona": "Jayden Thomas is alert and cooperative, clearly concerned but provides a clear history.",
    "interviewQuestions": [
        "When did your symptoms start and how?",
        "Describe the main symptom \u2014 location, character, severity.",
        "What makes it worse? What makes it better?",
        "Any other symptoms you've noticed?",
        "Any prior similar episodes?",
        "Tell me about your medical history.",
        "What medications are you currently taking?",
        "Any medication allergies?",
        "Relevant family history?",
        "Tell me about your lifestyle."
    ],
    "patientResponses": {
        "default": "He pauses. 'Can you clarify what you mean?'",
        "onset": "'Gradually \u2014 over the past several days.'",
        "character": "'The symptom has been significant and affecting my ability to function.'",
        "location": "'The main problem is in the expected area for my condition.'",
        "severity": "'Six or seven out of ten.'",
        "aggravating": "'Activity and movement worsen it.'",
        "relieving": "'Rest helps somewhat. Nothing has fully resolved it.'",
        "associated": "'Some associated symptoms consistent with this condition.'",
        "denies": "'No fever, chills, or unexplained weight loss.'",
        "history": "'I have not had exactly this before.'",
        "medications": "'I take Olopatadine 0.2%; Prednisolone acetate 1%; Cold compresses; Cetirizine.'",
        "allergies": "'My allergies: Grass pollen, Dust mite.'",
        "family": "Mother: seasonal allergies  Father: eczema",
        "social": "Context: Vernal keratoconjunctivitis (VKC) \u2014 severe form of allergic eye disease, not simple seasonal allergies  Risk: Giant papillae on tarsal conjunctiva \u2014 can cause corneal shield ulcers and permanent vision loss  Impact: Missing school \u2014 eyes swollen shut some mornings, photophobia  Comorbidity: Asthma and eczema \u2014 atopic triad"
    },
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
        "phase2": "Before interviewing Jayden Thomas: what does the chart suggest? Top 3 diagnoses?",
        "phase5": "After history and exam: how has your differential changed?",
        "finalDebrief": "The diagnosis is . How did your reasoning evolve?"
    }
}
};
