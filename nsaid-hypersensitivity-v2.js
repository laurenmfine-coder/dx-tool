/* emr-data/nsaid-hypersensitivity-v2.js — Variation: AERD (Samter's Triad) */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Lucia Fernandez",
  "patientHPI": "I grabbed some pain medication from my coworker's bag for my headache without looking at the label, and within half an hour I couldn't breathe properly - my chest got so tight and my nose started running like crazy.",
      "dob": "08/20/1988",
      "age": "38",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-628725",
      "language": "Spanish",
      "race": "Hispanic/Latina",
      "phone": "(614) 555-2275",
      "email": "lucia.fernandez@email.com",
      "address": "4843 Oak Ave, New Orleans, LA 70114",
      "insurance": "UnitedHealthcare",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Michael Fernandez",
        "phone": "(503) 555-8033",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Aspirin",
        "reaction": "Bronchospasm + nasal polyps",
        "severity": "Severe",
        "type": "Drug"
      },
      {
        "allergen": "Ibuprofen",
        "reaction": "Bronchospasm",
        "severity": "Severe",
        "type": "Drug"
      },
      {
        "allergen": "All NSAIDs",
        "reaction": "Avoid",
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
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Context",
        "AERD triad: asthma + nasal polyps + NSAID sensitivity"
      ],
      [
        "Anosmia",
        "Lost sense of smell 2 years ago — devastating for someone who loved cooking"
      ],
      [
        "Surgeries",
        "3 polypectomies in 5 years — polyps always recur"
      ],
      [
        "Aspirin desensitization",
        "Candidate — would allow daily aspirin to suppress polyp recurrence"
      ],
      [
        "Occupation",
        "Chef — cannot smell or taste, career threatened"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "38yo with severe bronchospasm after accidentally taking ibuprofen for headache — known AERD",
        "diagnosis": "AERD (Samter's Triad)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "AERD — aspirin-exacerbated respiratory disease",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Severe bronchospasm after ibuprofen exposure",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Nasal polyps — recurrent, anosmia",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "3 prior polypectomies",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Chef who cannot smell — career and identity crisis",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Continuous albuterol",
          "dose": "20mg/hr",
          "route": "NEB",
          "frequency": "Continuous",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Ipratropium",
          "dose": "0.5mg",
          "route": "NEB",
          "frequency": "Q4H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Q6H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Magnesium sulfate",
          "dose": "2g",
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
          "bp": "138/82",
          "hr": "112",
          "rr": "28",
          "temp": "37.0°C",
          "spo2": "88%",
          "pain": "7/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-183893",
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
              "name": "RESPIRATORY",
              "results": [
                {
                  "test": "Peak flow",
                  "value": "180",
                  "unit": "L/min",
                  "range": "380-520",
                  "flag": "L"
                },
                {
                  "test": "ABG pH",
                  "value": "7.38",
                  "unit": "",
                  "range": "7.35-7.45",
                  "flag": ""
                },
                {
                  "test": "ABG pCO2",
                  "value": "42",
                  "unit": "mmHg",
                  "range": "35-45",
                  "flag": ""
                },
                {
                  "test": "Lactate",
                  "value": "2.2",
                  "unit": "mmol/L",
                  "range": "0.5-2.0",
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
          "cc": "38yo with severe bronchospasm after accidentally taking ibuprofen for headache — known AERD",
          "hpi": "38F chef with known AERD took ibuprofen 400mg for headache — grabbed it from kitchen staff's bag without reading label. Within 30 min: progressive bronchospasm, rhinorrhea, chest tightness. Peak flow dropped to 180 (baseline ~380). Continuous albuterol and IV steroids in ED. Bilateral nasal polyps visible on exam. Reports complete anosmia x2 years — unable to taste or smell, devastating for a professional chef. Has had 3 polypectomies — polyps always recur within 6 months. A/I consult for aspirin desensitization — the only treatment that can suppress polyp recurrence and potentially restore her sense of smell.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for bronchospasm stabilization then aspirin desensitization",
        "diagnosis": "AERD (Samter's Triad)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "AERD — bronchospasm from ibuprofen",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Aspirin desensitization planned once stable",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Recurrent nasal polyps (3 surgeries)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Anosmia — complete, 2 years",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Career impact — chef who cannot smell/taste",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Prednisone",
          "dose": "40mg",
          "route": "PO",
          "frequency": "Daily (taper after desensitization)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Montelukast",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Fluticasone/salmeterol",
          "dose": "500/50",
          "route": "DPI",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Zileuton",
          "dose": "600mg",
          "route": "PO",
          "frequency": "QID (leukotriene synthesis inhibitor — AERD-specific)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "128/78",
          "hr": "86",
          "rr": "18",
          "temp": "36.8°C",
          "spo2": "96%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-200118",
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
          "cc": "Admitted for bronchospasm stabilization then aspirin desensitization",
          "hpi": "38F stable after bronchospasm. Aspirin desensitization scheduled for tomorrow — will be performed in monitored setting with protocol: escalating aspirin doses over 2 days (40.5mg→81→162.5→325→650mg) with monitoring for bronchospasm at each step. Goal: maintenance aspirin 650mg BID indefinitely — suppresses prostaglandin pathway driving polyp formation. Zileuton added (blocks 5-lipoxygenase — the overactive pathway in AERD).",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — aspirin desensitization protocol, dupilumab discussion for refractory polyps",
        "diagnosis": "AERD (Samter's Triad)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "AERD — desensitization indicated",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Aspirin desensitization protocol — 2-day escalation",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Post-desensitization: aspirin 650mg BID maintenance suppresses polyps",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "If aspirin alone insufficient — dupilumab (anti-IL4/13) for polyps",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Anosmia — may improve with polyp control (30-60% regain some smell)",
          "status": "Active",
          "onset": "Acute",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Aspirin",
          "dose": "650mg",
          "route": "PO",
          "frequency": "BID (post-desensitization maintenance)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Zileuton",
          "dose": "600mg",
          "route": "PO",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Dupilumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q2 weeks (if polyps recur on aspirin)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Fluticasone nasal",
          "dose": "",
          "route": "Nasal",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
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
          "accession": "LAB-583740",
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
          "cc": "A/I consult — aspirin desensitization protocol, dupilumab discussion for refractory polyps",
          "hpi": "A/I: 38F with AERD. Aspirin desensitization completed successfully — tolerated 650mg without bronchospasm. Will maintain aspirin 650mg BID indefinitely. This is THE treatment for AERD polyps — suppresses the prostaglandin/leukotriene imbalance that drives polyp growth. If polyps recur despite aspirin + zileuton: dupilumab (biologic targeting IL-4/IL-13 — FDA approved for nasal polyps). Patient asked about smell recovery: 30-60% of AERD patients regain some olfaction with aggressive polyp treatment. Started olfactory training exercises.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "AERD follow-up — 3 months post-desensitization, polyp status, smell testing",
        "diagnosis": "AERD (Samter's Triad)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "AERD — on aspirin 650mg BID + zileuton (stable)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Nasal polyps — significantly regressed (nasal endoscopy improved)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Anosmia — PARTIAL RECOVERY (can detect strong odors for first time in 2 years)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Asthma — better controlled than ever",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-5",
          "description": "Maintaining aspirin — cannot miss doses (resets desensitization)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Aspirin",
          "dose": "650mg",
          "route": "PO",
          "frequency": "BID (MUST NOT MISS — resets desensitization)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Zileuton",
          "dose": "600mg",
          "route": "PO",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Fluticasone/salmeterol",
          "dose": "250/50",
          "route": "DPI",
          "frequency": "BID (stepped down)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Budesonide rinse",
          "dose": "",
          "route": "Nasal",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "07:45",
          "bp": "118/72",
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
          "accession": "LAB-795030",
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
          "cc": "AERD follow-up — 3 months post-desensitization, polyp status, smell testing",
          "hpi": "38F 3 months post-aspirin desensitization. Nasal endoscopy: polyps dramatically reduced — can breathe through nose for first time in years. And the big news: smell is partially returning. She can detect garlic, citrus, and coffee. Not fully back, but after 2 years of complete anosmia, she was in tears: \"I can smell my food again.\" Continuing olfactory training. Back in kitchen, cooking with renewed purpose. Must NEVER miss aspirin doses — even 48h off aspirin resets desensitization and would require repeat hospitalization for protocol.",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Lucia Fernandez",
    "dob": "08/20/1988",
    "age": "38",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-628725",
    "language": "Spanish",
    "race": "Hispanic/Latina",
    "phone": "(620) 555-7626",
    "email": "lucia.fernandez@email.com",
    "address": "7639 Foxglove Dr, Memphis, TN 38112",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Michael Fernandez",
      "phone": "(713) 555-7843",
      "relationship": "Spouse"
    },
    "chiefComplaint": "38yo with severe bronchospasm after accidentally taking ibuprofen for headache — known AERD",
    "diagnosis": "AERD (Samter's Triad)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "AERD — aspirin-exacerbated respiratory disease",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Severe bronchospasm after ibuprofen exposure",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Nasal polyps — recurrent, anosmia",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "3 prior polypectomies",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    },
    {
      "id": "prob-5",
      "description": "Chef who cannot smell — career and identity crisis",
      "status": "Active",
      "onset": "Acute",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Continuous albuterol",
      "dose": "20mg/hr",
      "route": "NEB",
      "frequency": "Continuous",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Ipratropium",
      "dose": "0.5mg",
      "route": "NEB",
      "frequency": "Q4H",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Methylprednisolone",
      "dose": "125mg",
      "route": "IV",
      "frequency": "Q6H",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Magnesium sulfate",
      "dose": "2g",
      "route": "IV",
      "frequency": "Once",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "reaction": "Bronchospasm + nasal polyps",
      "severity": "Severe",
      "type": "Drug"
    },
    {
      "allergen": "Ibuprofen",
      "reaction": "Bronchospasm",
      "severity": "Severe",
      "type": "Drug"
    },
    {
      "allergen": "All NSAIDs",
      "reaction": "Avoid",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "07:45",
      "bp": "138/82",
      "hr": "112",
      "rr": "28",
      "temp": "37.0°C",
      "spo2": "88%",
      "pain": "7/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Emergency Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "38yo with severe bronchospasm after accidentally taking ibuprofen for headache — known AERD",
      "hpi": "38F chef with known AERD took ibuprofen 400mg for headache — grabbed it from kitchen staff's bag without reading label. Within 30 min: progressive bronchospasm, rhinorrhea, chest tightness. Peak flow dropped to 180 (baseline ~380). Continuous albuterol and IV steroids in ED. Bilateral nasal polyps visible on exam. Reports complete anosmia x2 years — unable to taste or smell, devastating for a professional chef. Has had 3 polypectomies — polyps always recur within 6 months. A/I consult for aspirin desensitization — the only treatment that can suppress polyp recurrence and potentially restore her sense of smell.",
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
      "accession": "LAB-183893",
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
          "name": "RESPIRATORY",
          "results": [
            {
              "test": "Peak flow",
              "value": "180",
              "unit": "L/min",
              "range": "380-520",
              "flag": "L"
            },
            {
              "test": "ABG pH",
              "value": "7.38",
              "unit": "",
              "range": "7.35-7.45",
              "flag": ""
            },
            {
              "test": "ABG pCO2",
              "value": "42",
              "unit": "mmHg",
              "range": "35-45",
              "flag": ""
            },
            {
              "test": "Lactate",
              "value": "2.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Context",
      "AERD triad: asthma + nasal polyps + NSAID sensitivity"
    ],
    [
      "Anosmia",
      "Lost sense of smell 2 years ago — devastating for someone who loved cooking"
    ],
    [
      "Surgeries",
      "3 polypectomies in 5 years — polyps always recur"
    ],
    [
      "Aspirin desensitization",
      "Candidate — would allow daily aspirin to suppress polyp recurrence"
    ],
    [
      "Occupation",
      "Chef — cannot smell or taste, career threatened"
    ]
  ]
,"references":[
  {
    "id": "Drug-Allergy-PP-2022",
    "title": "Drug allergy: A 2022 practice parameter update",
    "authors": "Khan DA, Banerji A, Blumenthal KG, et al.",
    "journal": "J Allergy Clin Immunol",
    "year": 2022,
    "doi": "10.1016/j.jaci.2022.08.028",
    "url": "https://www.jacionline.org/article/S0091-6749(22)01186-1/fulltext",
    "openAccess": true,
    "validates": [
      "PCN skin testing for anaphylaxis history; direct challenge for remote benign reactions",
      "Single-dose amoxicillin challenge for low-risk",
      "Vancomycin RMS management",
      "AERD aspirin desensitization protocol",
      "Sulfonamide challenge protocols"
    ]
  },
  {
    "id": "AERD-Review-2021",
    "title": "Aspirin-exacerbated respiratory disease: comprehensive review",
    "authors": "Laidlaw TM, Mullol J, Woessner KM, et al.",
    "journal": "J Allergy Clin Immunol Pract",
    "year": 2021,
    "doi": "10.1016/j.jaip.2020.09.016",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7855559/",
    "openAccess": true,
    "validates": [
      "AERD triad",
      "Aspirin desensitization 2-day protocol",
      "Maintenance 650mg BID",
      "Zileuton for AERD",
      "Anosmia recovery 30-60%"
    ]
  }
]};
