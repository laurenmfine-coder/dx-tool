/* emr-data/nsaid-hypersensitivity.js — Multi-Setting Allergy Case: AERD (Samter's Triad) */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Vanessa Takahashi",
      "dob": "02/27/1988",
      "age": "38",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-359825",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(481) 596-7238",
      "email": "vanessa.takahashi@email.com",
      "address": "2641 Oak St, Weston, FL 33354",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "David Takahashi",
        "phone": "(932) 298-2958",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Aspirin",
        "reaction": "Severe bronchospasm",
        "severity": "Severe",
        "type": "Drug"
      },
      {
        "allergen": "Ibuprofen",
        "reaction": "Bronchospasm + nasal congestion",
        "severity": "Severe",
        "type": "Drug"
      },
      {
        "allergen": "All NSAIDs",
        "reaction": "Cross-reactive",
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
        "Trigger",
        "Took aspirin 325mg for headache — developed wheezing, nasal congestion, and chest tightness within 1 hour"
      ],
      [
        "Key",
        "Candidate for aspirin desensitization after stabilization"
      ],
      [
        "Samter's triad",
        "Asthma + nasal polyps + ASA sensitivity"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Severe bronchospasm after aspirin — known AERD",
        "diagnosis": "AERD (Samter's Triad)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic rhinosinusitis with nasal polyps",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (moderate persistent)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "History of aspirin-induced bronchospasm",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone/Salmeterol",
          "dose": "250/50",
          "route": "INH",
          "frequency": "BID",
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
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "2 sprays BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Budesonide rinse",
          "dose": "0.5mg",
          "route": "Nasal rinse",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Continuous albuterol",
          "dose": "20mg/hr",
          "route": "NEB",
          "frequency": "Continuous",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Ipratropium",
          "dose": "0.5mg",
          "route": "NEB",
          "frequency": "Q4H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-3",
          "name": "Methylprednisolone",
          "dose": "125mg",
          "route": "IV",
          "frequency": "Q6H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-4",
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
          "time": "08:00",
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
          "accession": "LAB-547711",
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
                },
                {
                  "test": "Eosinophils",
                  "value": "12",
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
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "320",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "date": "03/02/2026",
          "study": "CT Sinuses",
          "status": "Final",
          "priority": "STAT",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-712226",
          "clinical": "Nasal polyps, asthma, and severe bronchospasm after taking aspirin",
          "technique": "Standard protocol",
          "findings": "Bilateral nasal polyposis with complete opacification of ethmoid and maxillary sinuses. Widening of ostiomeatal complexes.",
          "impression": "Extensive nasal polyposis consistent with AERD.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Severe bronchospasm after aspirin — known AERD",
          "hpi": "Vanessa Takahashi — Severe bronchospasm after aspirin — known AERD",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Nasal polyps, asthma, and severe bronchospasm after taking aspirin",
        "diagnosis": "NSAID-Exacerbated Respiratory Disease (AERD/Samter's Triad)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic rhinosinusitis with nasal polyps",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (moderate persistent)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "History of aspirin-induced bronchospasm",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone/Salmeterol",
          "dose": "250/50",
          "route": "INH",
          "frequency": "BID",
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
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "2 sprays BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Budesonide rinse",
          "dose": "0.5mg",
          "route": "Nasal rinse",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "128/78",
          "hr": "102",
          "rr": "24",
          "temp": "37.0°C",
          "spo2": "91%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-547711",
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
                },
                {
                  "test": "Eosinophils",
                  "value": "12",
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
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "320",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "date": "03/02/2026",
          "study": "CT Sinuses",
          "status": "Final",
          "priority": "STAT",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-712226",
          "clinical": "Nasal polyps, asthma, and severe bronchospasm after taking aspirin",
          "technique": "Standard protocol",
          "findings": "Bilateral nasal polyposis with complete opacification of ethmoid and maxillary sinuses. Widening of ostiomeatal complexes.",
          "impression": "Extensive nasal polyposis consistent with AERD.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Nasal polyps, asthma, and severe bronchospasm after taking aspirin",
          "hpi": "Vanessa Takahashi presents with nasal polyps, asthma, and severe bronchospasm after taking aspirin.",
          "exam": "See documentation.",
          "assessment": "NSAID-Exacerbated Respiratory Disease (AERD/Samter's Triad)",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — AERD management, aspirin desensitization candidacy",
        "diagnosis": "AERD (Samter's Triad)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic rhinosinusitis with nasal polyps",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (moderate persistent)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "History of aspirin-induced bronchospasm",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone/Salmeterol",
          "dose": "250/50",
          "route": "INH",
          "frequency": "BID",
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
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "2 sprays BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Budesonide rinse",
          "dose": "0.5mg",
          "route": "Nasal rinse",
          "frequency": "BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "128/78",
          "hr": "88",
          "rr": "18",
          "temp": "36.8°C",
          "spo2": "96%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-547711",
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
                },
                {
                  "test": "Eosinophils",
                  "value": "12",
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
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "320",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "date": "03/02/2026",
          "study": "CT Sinuses",
          "status": "Final",
          "priority": "STAT",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-712226",
          "clinical": "Nasal polyps, asthma, and severe bronchospasm after taking aspirin",
          "technique": "Standard protocol",
          "findings": "Bilateral nasal polyposis with complete opacification of ethmoid and maxillary sinuses. Widening of ostiomeatal complexes.",
          "impression": "Extensive nasal polyposis consistent with AERD.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult — AERD management, aspirin desensitization candidacy",
          "hpi": "Vanessa Takahashi — A/I consult — AERD management, aspirin desensitization candidacy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "AERD follow-up — post-desensitization, maintaining aspirin 650mg BID",
        "diagnosis": "AERD (Samter's Triad)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Chronic rhinosinusitis with nasal polyps",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Asthma (moderate persistent)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "History of aspirin-induced bronchospasm",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Aspirin",
          "dose": "650mg",
          "route": "PO",
          "frequency": "BID (post-desensitization)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Dupilumab",
          "dose": "300mg",
          "route": "SC",
          "frequency": "Q2 weeks (for polyps)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "122/76",
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
          "accession": "LAB-547711",
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
                },
                {
                  "test": "Eosinophils",
                  "value": "12",
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
            },
            {
              "name": "ALLERGY & IMMUNOLOGY STUDIES",
              "results": [
                {
                  "test": "Ige",
                  "value": "320",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-1",
          "date": "03/02/2026",
          "study": "CT Sinuses",
          "status": "Final",
          "priority": "STAT",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-712226",
          "clinical": "Nasal polyps, asthma, and severe bronchospasm after taking aspirin",
          "technique": "Standard protocol",
          "findings": "Bilateral nasal polyposis with complete opacification of ethmoid and maxillary sinuses. Widening of ostiomeatal complexes.",
          "impression": "Extensive nasal polyposis consistent with AERD.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "AERD follow-up — post-desensitization, maintaining aspirin 650mg BID",
          "hpi": "Vanessa Takahashi — AERD follow-up — post-desensitization, maintaining aspirin 650mg BID",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Vanessa Takahashi",
    "dob": "02/27/1988",
    "age": "38",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-359825",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(481) 596-7238",
    "email": "vanessa.takahashi@email.com",
    "address": "2641 Oak St, Weston, FL 33354",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "David Takahashi",
      "phone": "(932) 298-2958",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Nasal polyps, asthma, and severe bronchospasm after taking aspirin",
    "diagnosis": "NSAID-Exacerbated Respiratory Disease (AERD/Samter's Triad)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Chronic rhinosinusitis with nasal polyps",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Asthma (moderate persistent)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "History of aspirin-induced bronchospasm",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Fluticasone/Salmeterol",
      "dose": "250/50",
      "route": "INH",
      "frequency": "BID",
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
      "name": "Fluticasone nasal",
      "dose": "50mcg",
      "route": "Nasal",
      "frequency": "2 sprays BID",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Budesonide rinse",
      "dose": "0.5mg",
      "route": "Nasal rinse",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "reaction": "Severe bronchospasm",
      "severity": "Severe",
      "type": "Drug"
    },
    {
      "allergen": "Ibuprofen",
      "reaction": "Bronchospasm + nasal congestion",
      "severity": "Severe",
      "type": "Drug"
    },
    {
      "allergen": "All NSAIDs",
      "reaction": "Cross-reactive",
      "severity": "Severe",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "128/78",
      "hr": "102",
      "rr": "24",
      "temp": "37.0°C",
      "spo2": "91%",
      "pain": "5/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Consultation",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Nasal polyps, asthma, and severe bronchospasm after taking aspirin",
      "hpi": "Vanessa Takahashi presents with nasal polyps, asthma, and severe bronchospasm after taking aspirin.",
      "exam": "See documentation.",
      "assessment": "NSAID-Exacerbated Respiratory Disease (AERD/Samter's Triad)",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-547711",
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
            },
            {
              "test": "Eosinophils",
              "value": "12",
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
        },
        {
          "name": "ALLERGY & IMMUNOLOGY STUDIES",
          "results": [
            {
              "test": "Ige",
              "value": "320",
              "unit": "IU/mL",
              "range": "<100",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/02/2026",
      "study": "CT Sinuses",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-712226",
      "clinical": "Nasal polyps, asthma, and severe bronchospasm after taking aspirin",
      "technique": "Standard protocol",
      "findings": "Bilateral nasal polyposis with complete opacification of ethmoid and maxillary sinuses. Widening of ostiomeatal complexes.",
      "impression": "Extensive nasal polyposis consistent with AERD.",
      "dictated": "03/02/2026 08:30",
      "verified": "03/02/2026 09:15"
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
      "Trigger",
      "Took aspirin 325mg for headache — developed wheezing, nasal congestion, and chest tightness within 1 hour"
    ],
    [
      "Key",
      "Candidate for aspirin desensitization after stabilization"
    ],
    [
      "Samter's triad",
      "Asthma + nasal polyps + ASA sensitivity"
    ]
  ]
};
