
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Catherine Brennan",
      "patientHPI": "I was at my allergy doctor's office getting my regular shot when I started having a really bad reaction with hives and trouble breathing, and even after they gave me the emergency shot I wasn't getting better so they sent me here to the hospital.",
      "dob": "04/27/1981",
      "age": "45",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-566746",
      "language": "English",
      "race": "Black/African American",
      "phone": "(803) 555-4131",
      "email": "catherine.brennan@email.com",
      "address": "4576 Foxglove Dr, Pittsburgh, PA 15207",
      "insurance": "Humana Gold Plus",
      "pcp": "Dr. James Wu, MD",
      "pharmacy": "Walgreens \u2014 University Blvd",
      "emergencyContact": {
        "name": "Michael Brennan",
        "phone": "(502) 555-6848",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Yellow jacket venom",
        "reaction": "Anaphylaxis (field sting)",
        "severity": "Severe",
        "type": "Venom"
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "VIT status",
        "Week 8 of build-up, received 20mcg dose today"
      ],
      [
        "Reaction timing",
        "Urticaria and mild chest tightness 20 min post-injection"
      ],
      [
        "Management question",
        "Pre-treat next visit? Slow build-up? Split doses?"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Brought to ED from allergist office after VIT systemic reaction not responding to epi",
        "diagnosis": "VIT Systemic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "History of yellow jacket anaphylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "On venom immunotherapy (VIT) \u2014 build-up phase",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Yellow jacket VIT",
          "dose": "Build-up phase (current: 20mcg)",
          "route": "SC",
          "frequency": "Weekly",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Epinephrine",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "Given x2",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "NS bolus",
          "dose": "1L",
          "route": "IV",
          "frequency": "Rapid infusion",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "92/58",
          "hr": "118",
          "rr": "24",
          "temp": "36.8\u00b0C",
          "spo2": "93%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-114667",
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
          "cc": "Brought to ED from allergist office after VIT systemic reaction not responding to epi",
          "hpi": "Catherine Brennan \u2014 Brought to ED from allergist office after VIT systemic reaction not responding to epi",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted after VIT-related anaphylaxis \u2014 observation and VIT protocol modification",
        "diagnosis": "VIT Systemic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "History of yellow jacket anaphylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "On venom immunotherapy (VIT) \u2014 build-up phase",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Yellow jacket VIT",
          "dose": "Build-up phase (current: 20mcg)",
          "route": "SC",
          "frequency": "Weekly",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/72",
          "hr": "84",
          "rr": "16",
          "temp": "36.8\u00b0C",
          "spo2": "98%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-114667",
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
          "cc": "Admitted after VIT-related anaphylaxis \u2014 observation and VIT protocol modification",
          "hpi": "Catherine Brennan \u2014 Admitted after VIT-related anaphylaxis \u2014 observation and VIT protocol modification",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I re-evaluation \u2014 modify VIT protocol after systemic reaction",
        "diagnosis": "VIT Systemic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "History of yellow jacket anaphylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "On venom immunotherapy (VIT) \u2014 build-up phase",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Yellow jacket VIT",
          "dose": "Build-up phase (current: 20mcg)",
          "route": "SC",
          "frequency": "Weekly",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "76",
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
          "accession": "LAB-114667",
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
          "cc": "A/I re-evaluation \u2014 modify VIT protocol after systemic reaction",
          "hpi": "Catherine Brennan \u2014 A/I re-evaluation \u2014 modify VIT protocol after systemic reaction",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Generalized urticaria and chest tightness 20 minutes after venom immunotherapy injection",
        "diagnosis": "Venom Immunotherapy \u2014 Systemic Reaction"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "History of yellow jacket anaphylaxis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "On venom immunotherapy (VIT) \u2014 build-up phase",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Yellow jacket VIT",
          "dose": "Build-up phase (current: 20mcg)",
          "route": "SC",
          "frequency": "Weekly",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "EpiPen",
          "dose": "0.3mg",
          "route": "IM",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/68",
          "hr": "96",
          "rr": "18",
          "temp": "36.8\u00b0C",
          "spo2": "98%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-114667",
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
          "cc": "Generalized urticaria and chest tightness 20 minutes after venom immunotherapy injection",
          "hpi": "Catherine Brennan presents with generalized urticaria and chest tightness 20 minutes after venom immunotherapy injection.",
          "exam": "See documentation.",
          "assessment": "Venom Immunotherapy \u2014 Systemic Reaction",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Catherine Brennan",
    "dob": "04/27/1981",
    "age": "45",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-566746",
    "language": "English",
    "race": "Black/African American",
    "phone": "(803) 555-1783",
    "email": "catherine.brennan@email.com",
    "address": "7305 Hollyhock Rd, New Orleans, LA 70114",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. James Wu, MD",
    "pharmacy": "Walgreens \u2014 University Blvd",
    "emergencyContact": {
      "name": "Michael Brennan",
      "phone": "(702) 555-6438",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Generalized urticaria and chest tightness 20 minutes after venom immunotherapy injection",
    "diagnosis": "Venom Immunotherapy \u2014 Systemic Reaction"
  },
  "problems": [
    {
      "problem": "Bee venom anaphylaxis \u2014 first systemic reaction",
      "icd": "T63.441A",
      "onset": "2024",
      "status": "Active",
      "notes": "Jennifer Osei, 52F \u2014 bee sting in garden, anaphylaxis: urticaria + throat swelling + hypotension. Epinephrine by EMS."
    },
    {
      "problem": "VIT candidacy \u2014 high-risk adult with systemic anaphylaxis",
      "icd": "T63.441A",
      "onset": "2024",
      "status": "Active",
      "notes": "Adult with systemic anaphylaxis = VIT indicated regardless of venom IgE level. Allergy referral within 1-2 weeks."
    },
    {
      "problem": "EpiPen prescription \u2014 bridge until VIT established",
      "icd": "T63.441A",
      "onset": "2024",
      "status": "Active",
      "notes": "Two EpiPens prescribed. Carry at all times \u2014 especially outdoors. Wear medical alert bracelet."
    }
  ],
  "medications": [
    {
      "name": "EpiPen 0.3mg x2 \u2014 prescribe at discharge",
      "sig": "Inject lateral thigh at first sign of systemic reaction. Call 911. Second dose at 5-10 min if no improvement.",
      "prescriber": "ED/Allergy",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 bridge to VIT"
    },
    {
      "name": "Loratadine 10mg PO daily \u2014 scheduled antihistamine",
      "sig": "Daily antihistamine does NOT protect against anaphylaxis but reduces urticaria risk and minor reactions.",
      "prescriber": "Allergy",
      "start": "2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Allergy referral \u2014 urgent (1-2 weeks)",
      "sig": "Venom skin testing + VIT initiation after complete recovery from acute reaction (typically 4-6 weeks post-sting).",
      "prescriber": "ED",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 referral"
    }
  ],
  "allergies": [
    {
      "allergen": "Yellow jacket venom",
      "reaction": "Anaphylaxis (field sting)",
      "severity": "Severe",
      "type": "Venom"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "108/68",
      "hr": "96",
      "rr": "18",
      "temp": "36.8\u00b0C",
      "spo2": "98%",
      "pain": "4/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Office Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Generalized urticaria and chest tightness 20 minutes after venom immunotherapy injection",
      "hpi": "Catherine Brennan presents with generalized urticaria and chest tightness 20 minutes after venom immunotherapy injection.",
      "exam": "See documentation.",
      "assessment": "Venom Immunotherapy \u2014 Systemic Reaction",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Venom Allergy Workup",
      "results": [
        {
          "test": "Tryptase (1h post-anaphylaxis)",
          "value": "28",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": "H"
        },
        {
          "test": "Baseline tryptase (24h post)",
          "value": "5.2",
          "unit": "ng/mL",
          "ref": "<11.4",
          "flag": ""
        },
        {
          "test": "Honeybee venom IgE (RAST)",
          "value": "4.8",
          "unit": "kU/L",
          "ref": "<0.35",
          "flag": "H"
        },
        {
          "test": "CBC",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "BP on discharge",
          "value": "122/76",
          "unit": "mmHg",
          "ref": "Normal",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "VIT status",
      "Week 8 of build-up, received 20mcg dose today"
    ],
    [
      "Reaction timing",
      "Urticaria and mild chest tightness 20 min post-injection"
    ],
    [
      "Management question",
      "Pre-treat next visit? Slow build-up? Split doses?"
    ]
  ],
  "references": [
    {
      "id": "AIT-PP-2011",
      "title": "Allergen immunotherapy: practice parameter 3rd update",
      "authors": "Cox L, Nelson H, Lockey R, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2011,
      "doi": "10.1016/j.jaci.2010.09.034",
      "url": "https://www.jacionline.org/article/S0091-6749(10)01502-0/fulltext",
      "openAccess": true,
      "validates": [
        "SCIT protocols",
        "Cluster/rush protocols",
        "ACE inhibitors increase VIT reactions",
        "VIT \u22655 years"
      ]
    },
    {
      "id": "Insect-PP-2017",
      "title": "Stinging insect hypersensitivity: practice parameter 2016",
      "authors": "Golden DBK, Demain J, Freeman T, et al.",
      "journal": "Ann Allergy Asthma Immunol",
      "year": 2017,
      "doi": "10.1016/j.anai.2016.10.031",
      "url": "https://pubmed.ncbi.nlm.nih.gov/28007086/",
      "openAccess": true,
      "validates": [
        "60% recurrence without VIT",
        "VIT reduces to <5%",
        "Baseline tryptase screening",
        "Cluster VIT protocol"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "Systemic reactions occur in ~0.5\u20132% of VIT injections, most commonly during build-up phase. Management: epinephrine IM immediately, observe 30+ min, reduce subsequent dose 50% and build back up.",
      "Pre-medication with antihistamines (diphenhydramine or fexofenadine) before VIT injections reduces local and systemic reaction rates. Omalizumab pre-treatment enables VIT in high-risk patients (e.g., mastocytosis, prior severe VIT reaction).",
      "Rush VIT protocols compress the build-up phase to days/weeks vs months for conventional \u2014 useful for patients needing rapid protection (outdoor workers, beekeepers). Higher systemic reaction rate with rush protocols."
    ],
    "boardPearls": [
      "VIT systemic reaction management: epinephrine IM \u2192 reduce next dose 50% \u2192 titrate back up at slower pace.",
      "VIT efficacy: 95\u201397% protection against future systemic anaphylaxis. Most effective allergy immunotherapy available.",
      "VIT duration: standard 3\u20135 years. Lifelong: prior anaphylaxis during VIT, prior very severe anaphylaxis, mastocytosis, elevated baseline tryptase.",
      "Baseline tryptase >11.4: predicts higher risk for VIT reactions AND future sting anaphylaxis. Mastocytosis workup warranted.",
      "Omalizumab + VIT: enables safer VIT in mastocytosis and high-risk patients. Reduces VIT systemic reaction rate.",
      "Rush VIT: build-up in 1\u20133 days (vs months conventional). Higher systemic reaction rate. Epinephrine immediately available required.",
      "VIT in pregnancy: CONTINUE maintenance VIT (do not start new VIT during pregnancy). Epinephrine auto-injector essential throughout pregnancy."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Catherine appears anxious but cooperative, frequently touching her chest and rubbing her arms where the hives are visible. She is articulate and forthcoming about her symptoms, clearly concerned about having another severe allergic reaction like her previous anaphylaxis episode.",
    "interviewQuestions": [
      "Can you describe exactly what happened after your injection today?",
      "When did you first notice the hives and chest tightness?",
      "How would you rate your breathing difficulty on a scale of 1-10?",
      "Are you experiencing any throat swelling or difficulty swallowing?",
      "Do you have any nausea, vomiting, or abdominal cramping?",
      "How does this compare to your original yellow jacket sting reaction?",
      "Have you had any reactions to previous VIT injections?",
      "Did you take any medications or eat anything unusual today before coming in?",
      "Are you feeling dizzy or lightheaded right now?",
      "Do you have your EpiPen with you today?",
      "Have you been under any unusual stress or illness recently?",
      "Are the hives spreading or staying in the same areas?",
      "Is the chest tightness getting worse, better, or staying the same?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you repeat that? I'm a bit distracted by these hives and my breathing.",
      "onset": "The hives started appearing about 20 minutes after I got my allergy shot. The chest tightness began around the same time, maybe a few minutes after the hives.",
      "character": "The chest tightness feels like someone is squeezing my chest, not super tight but definitely noticeable. The hives are raised, red, and very itchy.",
      "location": "The hives are all over - my arms, chest, back, and legs. The chest tightness is right in the center of my chest.",
      "severity": "I'd say the chest tightness is about a 4 out of 10, and the itching from the hives is about a 6 out of 10. I can still breathe okay but I'm worried it might get worse.",
      "aggravating": "The itching gets worse when I scratch. The chest tightness seems about the same, maybe slightly worse when I think about my last reaction.",
      "relieving": "Nothing really helps the hives. Taking slow, deep breaths helps me feel a bit less anxious about the chest tightness.",
      "associated": "I feel a bit anxious and my heart is racing, but I think that's from being scared. No nausea, vomiting, or throat swelling that I can tell.",
      "denies": "No throat swelling, no trouble swallowing, no dizziness, no abdominal pain, no shortness of breath at rest, no wheezing that I can hear.",
      "history": "This is my first reaction to the VIT shots. My original yellow jacket sting was much worse - my whole face swelled up, I couldn't breathe, and I passed out.",
      "medications": "Yellow jacket VIT; EpiPen",
      "allergies": "Yellow jacket venom",
      "family": "No family history of severe allergies or anaphylaxis that I know of.",
      "social": "I work as a librarian, don't smoke, maybe have a glass of wine on weekends. I've been doing well with the shots until today - this is week 8 of the build-up phase."
    },
    "examManeuvers": [
      "Inspect skin for urticarial lesions",
      "Assess upper airway for angioedema",
      "Auscultate lungs for wheezing or stridor",
      "Check blood pressure and pulse",
      "Examine throat and neck for swelling",
      "Assess mental status and anxiety level",
      "Palpate for lymphadenopathy",
      "Check injection site",
      "Assess peripheral perfusion",
      "Monitor respiratory effort"
    ],
    "examFindings": {
      "Inspect skin for urticarial lesions": "Multiple raised, erythematous, blanching wheals 0.5-3cm in diameter distributed over arms, chest, abdomen, and legs",
      "Assess upper airway for angioedema": "No visible lip, tongue, or facial swelling; uvula normal",
      "Auscultate lungs for wheezing or stridor": "Clear breath sounds bilaterally, no wheezing or stridor, normal respiratory effort",
      "Check blood pressure and pulse": "BP 108/68, HR 96 regular, no orthostatic changes",
      "Examine throat and neck for swelling": "Throat clear, no palpable neck swelling, normal voice",
      "Assess mental status and anxiety level": "Alert and oriented, appropriately anxious but cooperative",
      "Palpate for lymphadenopathy": "No significant lymphadenopathy",
      "Check injection site": "Left upper arm injection site with minimal local erythema, no significant swelling",
      "Assess peripheral perfusion": "Normal capillary refill, warm extremities",
      "Monitor respiratory effort": "Normal respiratory rate and effort, speaking in full sentences"
    },
    "ddxTargets": [
      "Bee venom anaphylaxis \u2014 systemic reaction, epinephrine required (correct)",
      "Yellow jacket anaphylaxis \u2014 double sting venom sensitivity; skin testing will differentiate",
      "Vasovagal reaction \u2014 pallor + bradycardia without urticaria/angioedema",
      "Panic attack \u2014 no urticaria, objective findings absent",
      "MAST cell activation syndrome \u2014 baseline tryptase normal here",
      "Drug reaction \u2014 no new medications; sting timing is diagnostic"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'just anxiety' given patient's known history and mild presentation, missing the true systemic allergic component",
      "prematureClosure": "Risk of stopping evaluation after noting stable vital signs without fully assessing for progression of allergic reaction",
      "availabilityBias": "Recent cases of anxiety reactions may overshadow recognition of true systemic allergic reaction requiring modified VIT protocol"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, consider the spectrum of allergic reactions to immunotherapy. What key features would help you distinguish between different severity levels? What timeline factors are important in VIT reactions?",
      "phase5": "Now that you've gathered your history and exam, think about the clinical criteria for grading allergic reactions. What specific findings support your leading diagnosis? How does this presentation guide your immediate management and future VIT protocol decisions?",
      "finalDebrief": "Let's trace through your diagnostic reasoning. How did the combination of timing, symptoms, and exam findings lead you to the correct diagnosis? What key decision points will determine how to proceed with this patient's immunotherapy protocol? Consider the balance between continuing potentially life-saving treatment while minimizing reaction risk.",
      "final": "Diagnosis: bee venom anaphylaxis, VIT candidate. Key learning: (1) VIT indication in adults: any systemic reaction beyond urticaria (i.e., includes cardiovascular, respiratory, or GI involvement). Adults with urticaria-only reactions have only ~10-15% recurrence risk and VIT is not routinely indicated. Children with urticaria-only reactions also generally do not require VIT (lower recurrence risk). (2) Venom skin testing timing: wait 4-6 weeks after the sting before performing skin testing \u2014 refractory period makes testing unreliable immediately after anaphylaxis. (3) Which venoms to test: honeybee, yellow jacket, yellow-faced hornet, white-faced hornet, wasp \u2014 all five Hymenoptera venoms tested because patients often cannot identify which insect stung them, and cross-reactivity exists (yellow jacket/hornet/wasp cross-react; honeybee does not). (4) VIT efficacy: reduces future anaphylaxis risk from ~60% down to ~3-5%. Five-year standard course for most patients \u2014 protection persists for many years after stopping. (5) Baseline tryptase 5.2 (normal) in this patient \u2014 reassuring. Elevated baseline tryptase (>11.4) suggests mastocytosis and warrants workup and possibly lifelong VIT."
    }
  },
  "meta": {
    "diagnosis": "Venom Anaphylaxis \u2014 Bee Sting, VIT Candidacy Assessment, Initial Evaluation and Workup",
    "caseId": "venom-immunotherapy-reaction"
  }
};
