/* emr-data/nsaid-hypersensitivity.js — Multi-Setting Allergy Case: AERD (Samter's Triad) */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Vanessa Takahashi",
  "patientHPI": "I accidentally took aspirin and now I can barely breathe - my chest feels like it's in a vise and my airways are closing up.",
      "dob": "02/27/1988",
      "age": "38",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-359825",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(412) 555-8043",
      "email": "vanessa.takahashi@email.com",
      "address": "8475 Poplar Ave, Memphis, TN 38108",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. Raj Patel, MD",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "David Takahashi",
        "phone": "(804) 555-6279",
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
    "phone": "(614) 555-8238",
    "email": "vanessa.takahashi@email.com",
    "address": "8545 Clover St, Memphis, TN 38107",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Raj Patel, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "David Takahashi",
      "phone": "(614) 555-4501",
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
],

  "teachingPoints": {
    "keyLearning": [
      "AERD (Aspirin-Exacerbated Respiratory Disease / Samter's Triad): asthma + CRSwNP + NSAID hypersensitivity via COX-1 inhibition → reduced PGE₂ (which normally inhibits mast cells) → mast cell activation → LTC4/LTD4 release → bronchospasm + nasal edema. Urinary LTE₄ is constitutively elevated in AERD — even without NSAID exposure.",
      "NSAID-ERD crosses with ALL COX-1 inhibitors (aspirin, ibuprofen, naproxen, ketorolac, diclofenac) because the mechanism is pharmacologic (COX-1 inhibition), NOT immunologic. COX-2 selective agents (celecoxib) are safe in NSAID-ERD.",
      "Aspirin desensitization in AERD: 2-day in-office protocol (40 mg → 325 mg → 650 mg) followed by daily maintenance aspirin 650 mg BID indefinitely. Benefits: 50% reduction in polyp recurrence, further LTE₄ normalization. Must maintain aspirin — stopping >3 days → resensitization."
    ],
    "boardPearls": [
      "NSAID-ERD: COX-1 → ↓PGE₂ → mast cell activation → ↑LTE₄ → bronchospasm + nasal edema. Cross-reacts ALL NSAIDs. COX-2 safe.",
      "NSAID-EURD: COX-1 → urticaria/angioedema in patients with CSU. Cross-reacts ALL NSAIDs. COX-2 safe.",
      "SNIUAA (Selective NSAID-induced Urticaria/Angioedema/Anaphylaxis): TRUE IgE to specific NSAID. Drug-specific — other NSAIDs safe.",
      "SNIDR (Selective NSAID-induced delayed reaction): T-cell delayed. Drug-specific.",
      "Urinary LTE₄ in AERD: markedly elevated at BASELINE (no NSAID exposure needed) — constitutive COX-1/mast cell overproduction.",
      "Aspirin desensitization eligibility: FEV₁ ≥50%, no recent exacerbation, polyp burden not prohibitive. Maintenance: 650 mg BID indefinitely.",
      "Safe analgesics in NSAID-ERD: acetaminophen (safe at <1000 mg single dose), celecoxib (COX-2 selective)."
    ]
  }
};