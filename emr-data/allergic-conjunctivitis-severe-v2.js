
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Jayden Thomas",
      "patientHPI": "My eyes have been really bothering me for weeks now \u2014 there's this thick, stringy stuff coming out of them and the light hurts so much I have to cover my eyes when I walk around. They feel like there's sand in them and they're so itchy I can't stop rubbing them.",
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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Vernal keratoconjunctivitis (VKC) \u2014 severe form of allergic eye disease, not simple seasonal allergies"
      ],
      [
        "Risk",
        "Giant papillae on tarsal conjunctiva \u2014 can cause corneal shield ulcers and permanent vision loss"
      ],
      [
        "Impact",
        "Missing school \u2014 eyes swollen shut some mornings, photophobia"
      ],
      [
        "Comorbidity",
        "Asthma and eczema \u2014 atopic triad"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "9yo with severe eye swelling, thick mucoid discharge, photophobia \u2014 VKC flare with corneal involvement",
        "diagnosis": "Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Vernal keratoconjunctivitis (VKC) \u2014 severe allergic eye disease",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Giant papillae \u2014 cobblestone appearance on tarsal conjunctiva",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Shield ulcer developing \u2014 ophthalmology STAT",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Photophobia \u2014 cannot attend school",
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
          "temp": "36.8\u00b0C",
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
          "cc": "9yo with severe eye swelling, thick mucoid discharge, photophobia \u2014 VKC flare with corneal involvement",
          "hpi": "9M with severe VKC \u2014 thick ropy mucoid discharge, upper tarsal giant papillae (cobblestone), limbal Horner-Trantas dots, and early corneal shield ulcer (epithelial defect from papillae rubbing). Photophobia so severe he covers eyes to walk. This is NOT simple allergic conjunctivitis \u2014 VKC is a chronic, vision-threatening disease predominantly in young males, more common in African American and Middle Eastern children. Shield ulcers can cause permanent corneal scarring and visual impairment. Needs ophthalmology STAT + aggressive immunosuppressive eye drops.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I + Ophthalmology joint consult \u2014 VKC management, prevent corneal damage, immunotherapy",
        "diagnosis": "Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "VKC \u2014 severe, with shield ulcer",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Steroid eye drops \u2014 short burst only (chronic use \u2192 glaucoma/cataracts)",
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
          "description": "Allergen immunotherapy \u2014 candidate (grass, dust mite, cat)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Environmental controls \u2014 dust mite encasings, limit outdoor exposure during grass season",
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
          "frequency": "Weekly build-up \u2192 monthly maintenance",
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
          "temp": "36.8\u00b0C",
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
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I + Ophthalmology joint consult \u2014 VKC management, prevent corneal damage, immunotherapy",
          "hpi": "Joint A/I-Ophthalmology: 9M with severe VKC and early shield ulcer. Steroid burst to control acute inflammation, then transition to tacrolimus 0.03% drops (steroid-sparing \u2014 prevents glaucoma/cataract risk of chronic steroids). Shield ulcer managed with lubricants and patching \u2014 healing. Allergen immunotherapy started for grass and dust mite \u2014 will reduce overall allergic drive. Environmental: mattress/pillow encasings, limit outdoor play during peak grass season, sunglasses for UV/wind protection.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "VKC follow-up \u2014 shield ulcer healed, on tacrolimus drops, SCIT progressing",
        "diagnosis": "Vernal Keratoconjunctivitis"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "VKC \u2014 controlled on tacrolimus + olopatadine",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Shield ulcer \u2014 healed without scarring (caught early)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "SCIT \u2014 4 months into build-up, symptom improvement beginning",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Asthma \u2014 improving with immunotherapy",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Back in school full-time \u2014 photophobia resolved with treatment",
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
          "temp": "36.8\u00b0C",
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
          "cc": "VKC follow-up \u2014 shield ulcer healed, on tacrolimus drops, SCIT progressing",
          "hpi": "9M VKC dramatically improved on tacrolimus drops. Shield ulcer healed \u2014 no corneal scarring (early treatment saved his vision). Attending school without photophobia. SCIT progressing \u2014 spring grass season was milder than prior years. Eye exams Q3 months. Continue tacrolimus long-term (safe steroid-sparing option). VKC typically improves by puberty \u2014 may eventually be able to stop treatment.",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Family Contact",
      "phone": "(503) 555-5843",
      "relationship": "Parent"
    },
    "chiefComplaint": "9yo with severe eye swelling, thick mucoid discharge, photophobia \u2014 VKC flare with corneal involvement",
    "diagnosis": "Vernal Keratoconjunctivitis"
  },
  "problems": [
    {
      "problem": "Severe perennial allergic conjunctivitis \u2014 uncontrolled",
      "icd": "H10.13",
      "onset": "2021",
      "status": "Active",
      "notes": "Year-round symptoms, dust mite sensitization. Olopatadine alone insufficient. Corneal staining."
    },
    {
      "problem": "Superficial punctate keratopathy \u2014 corneal staining",
      "icd": "H16.149",
      "onset": "2024",
      "status": "Active",
      "notes": "Fluorescein staining of inferior corneal epithelium from chronic inflammation and eye rubbing."
    },
    {
      "problem": "Eye rubbing habit \u2014 must counsel cessation",
      "icd": "H10.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Rubbing releases histamine, worsens corneal damage, causes keratoconus over time."
    }
  ],
  "medications": [
    {
      "name": "Alcaftadine 0.25% (Lastacaft) once daily",
      "sig": "Superior antihistamine/mast cell stabilizer for severe PAC \u2014 step up from olopatadine",
      "prescriber": "Allergy/Ophthalmology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Nedocromil 2% ophthalmic BID \u2014 prophylactic mast cell stabilizer",
      "sig": "Must use consistently \u2014 NOT effective PRN. Start before allergen season.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Dust mite SCIT \u2014 allergen immunotherapy",
      "sig": "Subcutaneous immunotherapy \u2014 disease-modifying, reduces chronic ocular inflammation",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 ongoing series"
    },
    {
      "name": "Preservative-free artificial tears \u2014 frequent use",
      "sig": "Dilutes allergens, lubricates, reduces epithelial damage from dry rubbing",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
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
      "temp": "36.8\u00b0C",
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
      "cc": "9yo with severe eye swelling, thick mucoid discharge, photophobia \u2014 VKC flare with corneal involvement",
      "hpi": "9M with severe VKC \u2014 thick ropy mucoid discharge, upper tarsal giant papillae (cobblestone), limbal Horner-Trantas dots, and early corneal shield ulcer (epithelial defect from papillae rubbing). Photophobia so severe he covers eyes to walk. This is NOT simple allergic conjunctivitis \u2014 VKC is a chronic, vision-threatening disease predominantly in young males, more common in African American and Middle Eastern children. Shield ulcers can cause permanent corneal scarring and visual impairment. Needs ophthalmology STAT + aggressive immunosuppressive eye drops.",
      "exam": "See documentation.",
      "assessment": "See assessment.",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Allergy/Ocular Assessment",
      "results": [
        {
          "test": "Dust mite IgE (Der p 1)",
          "value": "15.2",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "380",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "Conjunctival cytology \u2014 eosinophils",
          "value": "Present",
          "unit": "",
          "ref": "Absent",
          "flag": "H"
        },
        {
          "test": "IOP right",
          "value": "14",
          "unit": "mmHg",
          "ref": "10-21",
          "flag": ""
        },
        {
          "test": "IOP left",
          "value": "15",
          "unit": "mmHg",
          "ref": "10-21",
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
    "Mother: seasonal allergies",
    "Father: eczema"
  ],
  "socialHistory": [
    [
      "Context",
      "Vernal keratoconjunctivitis (VKC) \u2014 severe form of allergic eye disease, not simple seasonal allergies"
    ],
    [
      "Risk",
      "Giant papillae on tarsal conjunctiva \u2014 can cause corneal shield ulcers and permanent vision loss"
    ],
    [
      "Impact",
      "Missing school \u2014 eyes swollen shut some mornings, photophobia"
    ],
    [
      "Comorbidity",
      "Asthma and eczema \u2014 atopic triad"
    ]
  ],
  "references": [
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
        "Shield ulcers \u2192 permanent corneal scarring"
      ]
    }
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Jayden appears uncomfortable and distressed, frequently rubbing his swollen, red eyes despite being told not to. He squints and shields his eyes from light, speaking quietly and seeming withdrawn due to the persistent discomfort and inability to participate in normal activities. He's cooperative but clearly frustrated by missing school and being unable to play outside.",
    "interviewQuestions": [
      "When did your eye symptoms first start and how have they changed?",
      "Can you describe what comes out of your eyes?",
      "How bad is the itching in your eyes on a scale of 1-10?",
      "Does light bother your eyes?",
      "Have you had eye problems like this before?",
      "What makes your eye symptoms worse?",
      "What helps your eyes feel better?",
      "Are you having trouble seeing clearly?",
      "Do you have any skin rashes or breathing problems?",
      "What medications are you currently taking for your eyes?",
      "Do you have any allergies?",
      "Has anyone in your family had severe eye allergies or asthma?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean. My eyes just really hurt and itch all the time.",
      "onset": "My eyes started getting really bad about 2 weeks ago when it got warmer outside. They've been swollen shut some mornings and the itching is terrible.",
      "character": "There's this thick, stringy stuff that comes out of my eyes - it's like clear snot but really thick. My eyes feel like there's sand in them.",
      "location": "Both of my eyes hurt, but my right eye feels worse. The itching is mainly on the inside of my upper eyelids.",
      "severity": "The itching is like a 9 out of 10 - I can't stop rubbing them even though it makes it worse. I can't even go to school some days because I can't see properly.",
      "aggravating": "Being outside makes it much worse, especially when it's windy or sunny. Rubbing my eyes feels good for a second but then makes everything worse.",
      "relieving": "The cold washcloths my mom puts on my eyes help a little, and the eye drops the doctor gave me help some too.",
      "associated": "My nose has been stuffy and runny too. Sometimes my asthma gets worse when my eyes are really bad. My eczema on my arms is also acting up.",
      "denies": "I don't have a fever or headache. My eyes don't hurt when I'm not looking at light. No double vision.",
      "history": "This happens every spring and summer but this year is the worst it's ever been. Last year the eye drops worked better than they are now.",
      "medications": "Olopatadine 0.2%; Prednisolone acetate 1%; Cold compresses; Cetirizine",
      "allergies": "Grass pollen, Dust mite",
      "family": "My mom gets bad seasonal allergies every spring and my dad has eczema like me.",
      "social": "I'm in 4th grade but I've missed a lot of school lately because my eyes are swollen shut in the mornings. I can't play outside much anymore."
    },
    "examManeuvers": [
      "External inspection of eyelids and periorbital area",
      "Eversion of upper eyelids to examine tarsal conjunctiva",
      "Examination of bulbar conjunctiva and limbus",
      "Pupillary light reflex testing",
      "Visual acuity assessment",
      "Corneal examination with penlight",
      "Assessment of conjunctival discharge",
      "Examination of lower eyelids and fornices",
      "Lymph node palpation (preauricular)",
      "Basic fundoscopic examination"
    ],
    "examFindings": {
      "External inspection of eyelids and periorbital area": "Marked bilateral upper eyelid edema and erythema, more severe on right. Lichenified skin around eyes from chronic rubbing.",
      "Eversion of upper eyelids to examine tarsal conjunctiva": "Giant papillae with classic cobblestone appearance on superior tarsal conjunctiva bilaterally, more prominent on right upper lid.",
      "Examination of bulbar conjunctiva and limbus": "Bilateral conjunctival hyperemia and chemosis. Horner-Trantas dots visible at superior limbus bilaterally - pathognomonic whitish dots.",
      "Pupillary light reflex testing": "Pupils reactive but patient demonstrates severe photophobia with consensual tearing and blepharospasm when light applied.",
      "Visual acuity assessment": "Decreased visual acuity due to thick mucoid film over cornea and photophobia - approximately 20/40 both eyes when able to cooperate.",
      "Corneal examination with penlight": "Early epithelial defect visible on superior cornea of right eye consistent with developing shield ulcer from papillae trauma.",
      "Assessment of conjunctival discharge": "Thick, ropy, mucoid discharge bilaterally - classic stringy appearance that can be pulled into long strands.",
      "Examination of lower eyelids and fornices": "Mild papillary reaction on lower tarsal conjunctiva but much less severe than upper lids.",
      "Lymph node palpation (preauricular)": "No lymphadenopathy - helps distinguish from infectious conjunctivitis.",
      "Basic fundoscopic examination": "Difficult due to photophobia and discharge, but no obvious retinal abnormalities when glimpsed."
    },
    "ddxTargets": [
      "Severe perennial allergic conjunctivitis \u2014 inadequate step-1 control (correct)",
      "Dry eye syndrome \u2014 punctate staining, but no eosinophils",
      "Vernal keratoconjunctivitis \u2014 giant papillae and shield ulcer more prominent",
      "Blepharitis \u2014 lid margin disease, different treatment approach",
      "Viral conjunctivitis \u2014 acute, preauricular adenopathy, not eosinophilic",
      "Chlamydial conjunctivitis \u2014 chronic follicular, STI history"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'allergic conjunctivitis' and missing the severity of VKC with corneal involvement that requires urgent ophthalmology referral.",
      "prematureClosure": "May stop at seasonal allergies without recognizing giant papillae and shield ulcer development that distinguishes VKC from simple allergic conjunctivitis.",
      "availabilityBias": "Common seasonal allergies may overshadow recognition of this severe sight-threatening condition that requires immediate subspecialty care."
    },
    "coachPrompts": {
      "phase2": "Good start with your differential. I notice you're considering allergic causes - that's appropriate given the seasonal pattern and family history. As you interview Jayden, pay special attention to the character and severity of symptoms. What specific findings would help you distinguish between simple seasonal allergies versus more severe forms of allergic eye disease?",
      "phase5": "Excellent work identifying the giant papillae and Horner-Trantas dots - those are key findings. The thick ropy discharge and corneal changes you found are concerning. How does this clinical picture compare to typical seasonal allergic conjunctivitis? What are the implications of the corneal involvement you identified?",
      "finalDebrief": "This case illustrates how VKC differs dramatically from simple allergic conjunctivitis. The giant papillae, Horner-Trantas dots, and developing shield ulcer make this diagnosis. The corneal involvement requires urgent ophthalmology referral as shield ulcers can cause permanent vision loss. Remember that severe atopic disease like VKC often presents as part of the atopic triad and requires aggressive management beyond typical allergy treatments.",
      "final": "Diagnosis: severe PAC, inadequately controlled. Key learning: (1) Step-up for allergic conjunctivitis: cold compresses + avoidance \u2192 topical antihistamine/mast cell stabilizer \u2192 mast cell stabilizer monotherapy (prophylactic) \u2192 brief topical steroid \u2192 topical calcineurin inhibitors \u2192 allergen immunotherapy. (2) Eye rubbing education is mandatory: every patient must be counseled to stop \u2014 rubbing releases histamine, worsens symptoms acutely, and chronic rubbing causes keratoconus (irregular corneal ectasia \u2192 blurred vision \u2192 potential transplant). (3) Mast cell stabilizer timing: nedocromil and cromolyn only work prophylactically \u2014 must start 1-2 weeks before exposure or continuously year-round. Patients who use them PRN get no benefit. (4) Immunotherapy is the only disease-modifying option \u2014 targets TH2 sensitization rather than blocking symptoms downstream. (5) Punctate keratopathy is a marker of inadequate control \u2014 refer ophthalmology when corneal involvement present."
    }
  },
  "meta": {
    "diagnosis": "Severe Perennial Allergic Conjunctivitis \u2014 Inadequate Control on Antihistamine Drops, Step-Up to Mast Cell Stabilizer and Immunotherapy",
    "caseId": "allergic-conjunctivitis-severe-v2"
  }
};
