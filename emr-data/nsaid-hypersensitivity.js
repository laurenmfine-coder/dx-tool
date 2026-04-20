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
      "pharmacy": "CVS Pharmacy \u2014 Main St",
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
        "Took aspirin 325mg for headache \u2014 developed wheezing, nasal congestion, and chest tightness within 1 hour"
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
        "chiefComplaint": "Severe bronchospasm after aspirin \u2014 known AERD",
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
          "temp": "37.0\u00b0C",
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
          "cc": "Severe bronchospasm after aspirin \u2014 known AERD",
          "hpi": "Vanessa Takahashi \u2014 Severe bronchospasm after aspirin \u2014 known AERD",
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
          "temp": "37.0\u00b0C",
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
        "chiefComplaint": "A/I consult \u2014 AERD management, aspirin desensitization candidacy",
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
          "temp": "36.8\u00b0C",
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
          "cc": "A/I consult \u2014 AERD management, aspirin desensitization candidacy",
          "hpi": "Vanessa Takahashi \u2014 A/I consult \u2014 AERD management, aspirin desensitization candidacy",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "AERD follow-up \u2014 post-desensitization, maintaining aspirin 650mg BID",
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
          "cc": "AERD follow-up \u2014 post-desensitization, maintaining aspirin 650mg BID",
          "hpi": "Vanessa Takahashi \u2014 AERD follow-up \u2014 post-desensitization, maintaining aspirin 650mg BID",
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
    "pharmacy": "CVS Pharmacy \u2014 Main St",
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
      "problem": "NSAID-exacerbated respiratory disease (NSAID-ERD, Samter's triad)",
      "icd": "J30.1",
      "onset": "2019",
      "status": "Active",
      "notes": "Classic triad: asthma + nasal polyps + aspirin/NSAID-induced bronchospasm; COX-1 inhibition shunts arachidonic acid to leukotriene pathway"
    },
    {
      "problem": "Chronic rhinosinusitis with nasal polyps (CRSwNP)",
      "icd": "J33.9",
      "onset": "2019",
      "status": "Active",
      "notes": "Bilateral nasal polyps on nasal endoscopy; anosmia; 2 prior functional endoscopic sinus surgeries (FESS); recurrence common without biologics"
    },
    {
      "problem": "Aspirin-sensitive asthma \u2014 moderate persistent",
      "icd": "J45.40",
      "onset": "2019",
      "status": "Active",
      "notes": "FEV1 72% predicted; >20% decline in FEV1 after aspirin challenge confirms NSAID-ERD"
    }
  ],
  "medications": [
    {
      "name": "Dupilumab (Dupixent) 300mg SC q2 weeks",
      "sig": "Administer 300mg subcutaneously every 2 weeks; FDA-approved for CRSwNP and asthma \u2014 addresses both components of Samter's triad",
      "prescriber": "Dr. Rodriguez",
      "start": "10/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Fluticasone/Salmeterol 500/50 mcg inhaler 1 puff BID",
      "sig": "1 puff by mouth twice daily; rinse mouth after use",
      "prescriber": "Dr. Kim",
      "start": "2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Intranasal budesonide irrigation 0.5mg per nostril BID",
      "sig": "Administer budesonide nasal rinse using Neti pot twice daily for polyp control",
      "prescriber": "Dr. Rodriguez",
      "start": "2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Montelukast 10mg nightly",
      "sig": "Take 1 tablet by mouth nightly \u2014 leukotriene modifier; reduces cysteinyl leukotriene production",
      "prescriber": "Dr. Rodriguez",
      "start": "2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "NSAIDS/ASPIRIN \u2014 AVOID ALL COX-1 INHIBITORS",
      "sig": "CONTRAINDICATED \u2014 avoid aspirin, ibuprofen, naproxen, ketorolac, indomethacin; use acetaminophen or celecoxib (COX-2) for analgesia",
      "prescriber": "Dr. Rodriguez",
      "start": "2019",
      "refills": 0,
      "status": "Contraindicated \u2014 documented"
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
      "temp": "37.0\u00b0C",
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
      "date": "11/05/2024",
      "panel": "NSAID-ERD Evaluation",
      "results": [
        {
          "test": "FEV1 (baseline)",
          "value": "72",
          "unit": "% predicted",
          "ref": ">80",
          "flag": "L"
        },
        {
          "test": "FEV1/FVC",
          "value": "0.71",
          "unit": "",
          "ref": ">0.70",
          "flag": ""
        },
        {
          "test": "FEV1 decline after aspirin challenge",
          "value": "24%",
          "unit": "decline",
          "ref": "<15% (diagnostic >15%)",
          "flag": "H"
        },
        {
          "test": "Urinary LTE4 (24h, during reaction)",
          "value": "2,840",
          "unit": "pg/mg creatinine",
          "ref": "<1,000",
          "flag": "H"
        },
        {
          "test": "Peripheral blood eosinophils",
          "value": "0.9",
          "unit": "K/\u03bcL",
          "ref": "0.0-0.5",
          "flag": "H"
        },
        {
          "test": "Total IgE",
          "value": "180",
          "unit": "IU/mL",
          "ref": "<150",
          "flag": "H"
        },
        {
          "test": "Aspirin IgE",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/01/2024",
      "study": "CT Sinuses without contrast",
      "indication": "Recurrent nasal polyps, NSAID-ERD \u2014 surgical planning and baseline assessment",
      "findings": "Bilateral sinonasal polypoid soft tissue opacification involving ethmoid, maxillary, and sphenoid sinuses. Frontal sinuses partially opacified. Bilateral inferior turbinate hypertrophy. Deviated nasal septum to the right. Post-surgical changes from prior bilateral FESS.",
      "impression": "Extensive bilateral sinonasal polyposis with recurrence post-FESS. Lund-Mackay score 18/24 (severe). In context of NSAID-ERD, dupilumab is the appropriate add-on therapy."
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
      "Took aspirin 325mg for headache \u2014 developed wheezing, nasal congestion, and chest tightness within 1 hour"
    ],
    [
      "Key",
      "Candidate for aspirin desensitization after stabilization"
    ],
    [
      "Samter's triad",
      "Asthma + nasal polyps + ASA sensitivity"
    ]
  ],
  "references": [
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
      "AERD (Aspirin-Exacerbated Respiratory Disease / Samter's Triad): asthma + CRSwNP + NSAID hypersensitivity via COX-1 inhibition \u2192 reduced PGE\u2082 (which normally inhibits mast cells) \u2192 mast cell activation \u2192 LTC4/LTD4 release \u2192 bronchospasm + nasal edema. Urinary LTE\u2084 is constitutively elevated in AERD \u2014 even without NSAID exposure.",
      "NSAID-ERD crosses with ALL COX-1 inhibitors (aspirin, ibuprofen, naproxen, ketorolac, diclofenac) because the mechanism is pharmacologic (COX-1 inhibition), NOT immunologic. COX-2 selective agents (celecoxib) are safe in NSAID-ERD.",
      "Aspirin desensitization in AERD: 2-day in-office protocol (40 mg \u2192 325 mg \u2192 650 mg) followed by daily maintenance aspirin 650 mg BID indefinitely. Benefits: 50% reduction in polyp recurrence, further LTE\u2084 normalization. Must maintain aspirin \u2014 stopping >3 days \u2192 resensitization."
    ],
    "boardPearls": [
      "NSAID-ERD: COX-1 \u2192 \u2193PGE\u2082 \u2192 mast cell activation \u2192 \u2191LTE\u2084 \u2192 bronchospasm + nasal edema. Cross-reacts ALL NSAIDs. COX-2 safe.",
      "NSAID-EURD: COX-1 \u2192 urticaria/angioedema in patients with CSU. Cross-reacts ALL NSAIDs. COX-2 safe.",
      "SNIUAA (Selective NSAID-induced Urticaria/Angioedema/Anaphylaxis): TRUE IgE to specific NSAID. Drug-specific \u2014 other NSAIDs safe.",
      "SNIDR (Selective NSAID-induced delayed reaction): T-cell delayed. Drug-specific.",
      "Urinary LTE\u2084 in AERD: markedly elevated at BASELINE (no NSAID exposure needed) \u2014 constitutive COX-1/mast cell overproduction.",
      "Aspirin desensitization eligibility: FEV\u2081 \u226550%, no recent exacerbation, polyp burden not prohibitive. Maintenance: 650 mg BID indefinitely.",
      "Safe analgesics in NSAID-ERD: acetaminophen (safe at <1000 mg single dose), celecoxib (COX-2 selective)."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Vanessa appears anxious and slightly short of breath, speaking in brief sentences due to mild respiratory distress. She is very cooperative and forthcoming about her symptoms, expressing concern about the connection between her aspirin use and worsening breathing. She seems knowledgeable about her chronic conditions but worried about this acute episode.",
    "interviewQuestions": [
      "Can you tell me exactly when your symptoms started and what you were doing?",
      "What exactly did you take before your symptoms began?",
      "Describe the breathing difficulty you're experiencing right now.",
      "How would you rate your current breathing difficulty on a scale of 1-10?",
      "Have you ever had this type of reaction to aspirin or similar medications before?",
      "Tell me about your nasal symptoms - congestion, drainage, sense of smell.",
      "How long have you had nasal polyps and asthma?",
      "What medications are you currently taking for your asthma and nasal problems?",
      "Do you have any known allergies to medications?",
      "Have you used your rescue inhaler today, and did it help?",
      "Besides the breathing and nasal symptoms, are you having any other problems?",
      "Have any family members had similar reactions to aspirin or breathing problems?",
      "Do you smoke, and are there other triggers that worsen your asthma?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand - could you ask that differently? I'm having trouble concentrating with my breathing being off.",
      "onset": "About an hour ago I took an aspirin for a headache, and within maybe 30-45 minutes I started getting really congested and my chest got tight. The wheezing started shortly after that.",
      "character": "It's like my chest is being squeezed tight, and I can hear myself wheezing when I breathe out. My nose feels completely blocked, worse than usual.",
      "location": "The tightness is right across my whole chest, and my nose feels completely stuffed up. No pain radiating anywhere else.",
      "severity": "I'd say the breathing is about a 6 or 7 out of 10 right now - definitely worse than my usual asthma symptoms. The nasal congestion is probably an 8.",
      "aggravating": "It definitely got worse after I took that aspirin. Talking makes the breathing a bit harder, and lying flat makes the congestion worse.",
      "relieving": "I used my rescue inhaler twice but it's not helping as much as it usually does. Sitting upright helps a little with the breathing.",
      "associated": "My nose is completely blocked, more than usual, and I have this tight feeling in my chest with wheezing. I feel a bit anxious because my breathing isn't responding to my inhaler like normal.",
      "denies": "No fever, no chest pain, no palpitations. I'm not coughing up blood or having any skin rash or swelling.",
      "history": "I've had problems with nasal polyps and asthma for about 10 years. I think I had some breathing trouble with ibuprofen once before, but never this severe.",
      "medications": "Fluticasone/Salmeterol; Montelukast; Fluticasone nasal; Budesonide rinse",
      "allergies": "Aspirin, Ibuprofen, All NSAIDs",
      "family": "No family history of asthma or breathing problems that I know of. My parents are both healthy.",
      "social": "I work as a graphic designer, mostly desk work. I don't smoke and never have. I have maybe one drink a week, no other substances. I know strong scents and cold air usually trigger my asthma."
    },
    "examManeuvers": [
      "Pulmonary auscultation",
      "Nasal examination",
      "Assessment of respiratory effort",
      "Peak flow measurement",
      "Vital signs assessment",
      "Cardiac examination",
      "Skin examination for urticaria/angioedema",
      "Upper airway inspection",
      "Accessory muscle use evaluation",
      "Percussion of lung fields"
    ],
    "examFindings": {
      "Pulmonary auscultation": "Bilateral expiratory wheeze throughout both lung fields, decreased air movement, prolonged expiratory phase",
      "Nasal examination": "Bilateral nasal polyps visible, severe mucosal edema, complete nasal obstruction",
      "Assessment of respiratory effort": "Mild tachypnea, use of accessory muscles, tripod positioning",
      "Peak flow measurement": "240 L/min (reduced from baseline of approximately 380 L/min)",
      "Vital signs assessment": "BP 128/78, HR 102, RR 24, Temp 37.0\u00b0C, SpO2 91% on room air",
      "Cardiac examination": "Tachycardic but regular rhythm, no murmurs, rubs, or gallops",
      "Skin examination for urticaria/angioedema": "No visible rash, urticaria, or angioedema",
      "Upper airway inspection": "No stridor, voice clear, no visible upper airway swelling",
      "Accessory muscle use evaluation": "Mild use of sternocleidomastoid and intercostal muscles",
      "Percussion of lung fields": "Hyperresonant bilaterally consistent with air trapping"
    },
    "ddxTargets": [
      "NSAID-exacerbated respiratory disease (Samter's triad) \u2014 COX-1-mediated leukotriene overproduction (correct)",
      "IgE-mediated aspirin allergy \u2014 aspirin IgE negative; NSAID-ERD is NOT IgE-mediated; all COX-1 inhibitors cross-react",
      "Single-NSAID hypersensitivity \u2014 only one NSAID affected; NSAID-ERD affects ALL COX-1 inhibitors",
      "Eosinophilic asthma without NSAID sensitivity \u2014 no triad; aspirin challenge negative",
      "Churg-Strauss (EGPA) \u2014 eosinophilic granulomatosis; blood eosinophilia + asthma + vasculitis; ANCA often positive",
      "Alpha-1 antitrypsin deficiency \u2014 emphysema pattern; not polyps + asthma"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'simple asthma attack' and miss the classic triad of asthma, nasal polyps, and NSAID sensitivity that defines AERD",
      "prematureClosure": "Might stop at 'aspirin allergy' without recognizing this as a distinct syndrome requiring specific management and desensitization consideration",
      "availabilityBias": "Common asthma exacerbations are frequent, may not immediately consider the specific NSAID-respiratory disease connection"
    },
    "coachPrompts": {
      "phase2": "You've identified some key differentials. This patient has a classic triad of findings - can you think about what connects her chronic nasal polyps, asthma, and this acute reaction to aspirin? What specific syndrome should you be considering?",
      "phase5": "Excellent history and exam. You've documented the classic triad: asthma, nasal polyps, and NSAID sensitivity. This constellation has a specific name and important management implications. What is this syndrome called, and what does this mean for her future treatment options?",
      "finalDebrief": "This case demonstrates Aspirin-Exacerbated Respiratory Disease (AERD), also known as Samter's Triad. The key teaching points are recognizing this specific syndrome versus simple drug allergy, understanding that these patients can benefit from aspirin desensitization after stabilization, and knowing that avoidance of all NSAIDs is crucial. How did your differential evolve as you gathered more information about her chronic conditions?",
      "final": "Diagnosis: NSAID-ERD (Samter's triad) \u2014 aspirin-sensitive asthma, nasal polyps, COX-1 hypersensitivity. Key teaching points: (1) NSAID-ERD mechanism: COX-1 inhibition \u2192 prostaglandin E2 deficit (normally suppresses mast cells) \u2192 unregulated mast cell leukotriene release \u2192 bronchospasm and polyp growth. It is NOT IgE-mediated \u2014 aspirin IgE negative. All COX-1 inhibitors cross-react. COX-2 selective inhibitors (celecoxib) are safe. (2) Urinary LTE4 is the biomarker of cysteinyl leukotriene overproduction \u2014 elevated at baseline in NSAID-ERD, dramatically elevated during reaction. (3) Dupilumab (IL-4R\u03b1 blocker) is FDA-approved for BOTH CRSwNP and asthma \u2014 the first treatment to address the entire Samter's triad with one drug. Reduces polyp volume and asthma exacerbations. (4) Aspirin desensitization: NSAID-ERD patients who require aspirin (e.g., for CAD) can undergo graded aspirin desensitization with daily maintenance \u2014 reduces polyp recurrence and leukotriene production. (5) COX-1 cross-reactors to avoid: aspirin, ibuprofen, naproxen, ketorolac, indomethacin. Safe alternatives: acetaminophen (COX-1 weak), celecoxib (COX-2 selective), tramadol."
    }
  },
  "meta": {
    "diagnosis": "NSAID-Exacerbated Respiratory Disease (NSAID-ERD / Samter's Triad) \u2014 Aspirin-Exacerbated Asthma, Nasal Polyps, and Aspirin Sensitivity"
  }
};
