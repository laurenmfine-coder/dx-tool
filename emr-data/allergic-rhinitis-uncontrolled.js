/* emr-data/allergic-rhinitis-uncontrolled.js — Multi-Setting Allergy Case: Allergic Rhinitis — Uncontrolled */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Derek Patel",
  "patientHPI": "I've had a stuffy, runny nose for months now, but yesterday I started getting these really bad nosebleeds that won't stop — I've never had nosebleeds like this before.",
      "dob": "11/23/1994",
      "age": "32",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-925795",
      "language": "English",
      "race": "Black/African American",
      "phone": "(804) 555-8381",
      "email": "derek.patel@email.com",
      "address": "9699 Walnut Dr, Albuquerque, NM 87105",
      "insurance": "Medicare Part A/B",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "Walgreens — University Blvd",
      "emergencyContact": {
        "name": "Lisa Patel",
        "phone": "(615) 555-4737",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "Dust mites",
        "reaction": "Rhinitis/asthma",
        "severity": "Moderate",
        "type": "Environmental"
      },
      {
        "allergen": "Cat dander",
        "reaction": "Rhinitis/conjunctivitis",
        "severity": "Severe",
        "type": "Environmental"
      },
      {
        "allergen": "Mold (Alternaria)",
        "reaction": "Rhinitis",
        "severity": "Mild",
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
      "Mother: allergic rhinitis",
      "Father: asthma"
    ],
    "socialHistory": [
      [
        "Environment",
        "Has a cat at home, carpeted bedroom"
      ],
      [
        "Impact",
        "Poor sleep quality due to congestion, impaired work performance"
      ],
      [
        "Immunotherapy discussion",
        "Candidate for SCIT or SLIT for dust mite/cat"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Severe epistaxis in setting of chronic rhinitis — turbinate friability",
        "diagnosis": "Allergic Rhinitis — Uncontrolled"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Perennial allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic sinusitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Asthma (mild)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Turbinate hypertrophy on exam",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "2 sprays each nostril daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Montelukast",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Azelastine nasal",
          "dose": "137mcg",
          "route": "Nasal",
          "frequency": "2 sprays BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "142/82",
          "hr": "88",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "4/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-748256",
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
                  "value": "680",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Dust Mite Ig E",
                  "value": "48",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Cat Ig E",
                  "value": "32",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-199976",
          "clinical": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
          "technique": "Standard protocol",
          "findings": "Mucosal thickening in bilateral maxillary and ethmoid sinuses. Turbinate hypertrophy bilaterally. No air-fluid levels.",
          "impression": "Chronic rhinosinusitis changes. Consider allergy-driven etiology.",
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
          "cc": "Severe epistaxis in setting of chronic rhinitis — turbinate friability",
          "hpi": "Derek Patel — Severe epistaxis in setting of chronic rhinitis — turbinate friability",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for posterior epistaxis packing — underlying chronic rhinitis",
        "diagnosis": "Allergic Rhinitis — Uncontrolled"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Perennial allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic sinusitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Asthma (mild)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Turbinate hypertrophy on exam",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "2 sprays each nostril daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Montelukast",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Azelastine nasal",
          "dose": "137mcg",
          "route": "Nasal",
          "frequency": "2 sprays BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Oxymetazoline",
          "dose": "",
          "route": "Nasal",
          "frequency": "PRN (short-term)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "132/78",
          "hr": "82",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-748256",
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
                  "value": "680",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Dust Mite Ig E",
                  "value": "48",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Cat Ig E",
                  "value": "32",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-199976",
          "clinical": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
          "technique": "Standard protocol",
          "findings": "Mucosal thickening in bilateral maxillary and ethmoid sinuses. Turbinate hypertrophy bilaterally. No air-fluid levels.",
          "impression": "Chronic rhinosinusitis changes. Consider allergy-driven etiology.",
          "dictated": "03/02/2026 08:30",
          "verified": "03/02/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Admitted for posterior epistaxis packing — underlying chronic rhinitis",
          "hpi": "Derek Patel — Admitted for posterior epistaxis packing — underlying chronic rhinitis",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — perennial rhinitis failing 4 medications, immunotherapy evaluation",
        "diagnosis": "Allergic Rhinitis — Uncontrolled"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Perennial allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic sinusitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Asthma (mild)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Turbinate hypertrophy on exam",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "2 sprays each nostril daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Montelukast",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Azelastine nasal",
          "dose": "137mcg",
          "route": "Nasal",
          "frequency": "2 sprays BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "72",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-748256",
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
                  "value": "680",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Dust Mite Ig E",
                  "value": "48",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Cat Ig E",
                  "value": "32",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-199976",
          "clinical": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
          "technique": "Standard protocol",
          "findings": "Mucosal thickening in bilateral maxillary and ethmoid sinuses. Turbinate hypertrophy bilaterally. No air-fluid levels.",
          "impression": "Chronic rhinosinusitis changes. Consider allergy-driven etiology.",
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
          "cc": "A/I consult — perennial rhinitis failing 4 medications, immunotherapy evaluation",
          "hpi": "Derek Patel — A/I consult — perennial rhinitis failing 4 medications, immunotherapy evaluation",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
        "diagnosis": "Allergic Rhinitis — Uncontrolled, Immunotherapy Candidate"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Perennial allergic rhinitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic sinusitis",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Asthma (mild)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-4",
          "description": "Turbinate hypertrophy on exam",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Fluticasone nasal",
          "dose": "50mcg",
          "route": "Nasal",
          "frequency": "2 sprays each nostril daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-2",
          "name": "Cetirizine",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-3",
          "name": "Montelukast",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-4",
          "name": "Azelastine nasal",
          "dose": "137mcg",
          "route": "Nasal",
          "frequency": "2 sprays BID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "72",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "2/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-748256",
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
                  "value": "680",
                  "unit": "IU/mL",
                  "range": "<100",
                  "flag": "H"
                },
                {
                  "test": "Dust Mite Ig E",
                  "value": "48",
                  "unit": "kU/L",
                  "range": "<0.35",
                  "flag": "H"
                },
                {
                  "test": "Cat Ig E",
                  "value": "32",
                  "unit": "kU/L",
                  "range": "<0.35",
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
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-199976",
          "clinical": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
          "technique": "Standard protocol",
          "findings": "Mucosal thickening in bilateral maxillary and ethmoid sinuses. Turbinate hypertrophy bilaterally. No air-fluid levels.",
          "impression": "Chronic rhinosinusitis changes. Consider allergy-driven etiology.",
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
          "cc": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
          "hpi": "Derek Patel presents with year-round nasal congestion, sneezing, post-nasal drip despite multiple medications.",
          "exam": "See documentation.",
          "assessment": "Allergic Rhinitis — Uncontrolled, Immunotherapy Candidate",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Derek Patel",
    "dob": "11/23/1994",
    "age": "32",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-925795",
    "language": "English",
    "race": "Black/African American",
    "phone": "(504) 555-7150",
    "email": "derek.patel@email.com",
    "address": "4137 Walnut Dr, Louisville, KY 40204",
    "insurance": "Medicare Part A/B",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Lisa Patel",
      "phone": "(513) 555-4043",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
    "diagnosis": "Allergic Rhinitis — Uncontrolled, Immunotherapy Candidate"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Perennial allergic rhinitis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Chronic sinusitis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Asthma (mild)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Turbinate hypertrophy on exam",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Fluticasone nasal",
      "dose": "50mcg",
      "route": "Nasal",
      "frequency": "2 sprays each nostril daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-2",
      "name": "Cetirizine",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-3",
      "name": "Montelukast",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    },
    {
      "id": "med-4",
      "name": "Azelastine nasal",
      "dose": "137mcg",
      "route": "Nasal",
      "frequency": "2 sprays BID",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Dust mites",
      "reaction": "Rhinitis/asthma",
      "severity": "Moderate",
      "type": "Environmental"
    },
    {
      "allergen": "Cat dander",
      "reaction": "Rhinitis/conjunctivitis",
      "severity": "Severe",
      "type": "Environmental"
    },
    {
      "allergen": "Mold (Alternaria)",
      "reaction": "Rhinitis",
      "severity": "Mild",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "118/72",
      "hr": "72",
      "rr": "14",
      "temp": "36.8°C",
      "spo2": "99%",
      "pain": "2/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Office Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
      "hpi": "Derek Patel presents with year-round nasal congestion, sneezing, post-nasal drip despite multiple medications.",
      "exam": "See documentation.",
      "assessment": "Allergic Rhinitis — Uncontrolled, Immunotherapy Candidate",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-748256",
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
              "value": "680",
              "unit": "IU/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Dust Mite Ig E",
              "value": "48",
              "unit": "kU/L",
              "range": "<0.35",
              "flag": "H"
            },
            {
              "test": "Cat Ig E",
              "value": "32",
              "unit": "kU/L",
              "range": "<0.35",
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
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-199976",
      "clinical": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
      "technique": "Standard protocol",
      "findings": "Mucosal thickening in bilateral maxillary and ethmoid sinuses. Turbinate hypertrophy bilaterally. No air-fluid levels.",
      "impression": "Chronic rhinosinusitis changes. Consider allergy-driven etiology.",
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
    "Mother: allergic rhinitis",
    "Father: asthma"
  ],
  "socialHistory": [
    [
      "Environment",
      "Has a cat at home, carpeted bedroom"
    ],
    [
      "Impact",
      "Poor sleep quality due to congestion, impaired work performance"
    ],
    [
      "Immunotherapy discussion",
      "Candidate for SCIT or SLIT for dust mite/cat"
    ]
  ]
,"references":[
  {
    "id": "ARIA-2020",
    "title": "ARIA guideline 2019: treatment of allergic rhinitis",
    "authors": "Bousquet J, Schunemann HJ, Togias A, et al.",
    "journal": "Allergy",
    "year": 2020,
    "doi": "10.1111/all.14049",
    "url": "https://pubmed.ncbi.nlm.nih.gov/31473041/",
    "openAccess": true,
    "validates": [
      "Step-up pharmacotherapy",
      "INCS + antihistamine combo",
      "SCIT/SLIT for refractory",
      "United airway (rhinitis + asthma)"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "Intranasal corticosteroids (INCS) are first-line therapy for allergic rhinitis — superior to oral antihistamines for nasal congestion (which antihistamines do not treat well). INCS + antihistamine combination most effective for all symptoms.",
      "Allergen immunotherapy (SCIT or SLIT) is the only disease-modifying treatment for allergic rhinitis — it induces tolerance through Treg and IgG4 blocking antibody mechanisms, reducing symptoms for years after completion.",
      "The unified airway concept: allergic rhinitis and asthma are manifestations of the same Type 2 airway inflammation. Treating rhinitis reduces asthma exacerbations; asthma in AR patients warrants nasal evaluation."
    ],
    "boardPearls": [
      "INCS: first-line for AR. Onset: 1–2 weeks. Must use daily for full effect (not PRN). Fluticasone, mometasone — minimal systemic absorption, safe for long-term use.",
      "Antihistamines: second-generation (cetirizine, fexofenadine, loratadine) preferred — less sedating. Effective for sneezing, itching, rhinorrhea. NOT effective for nasal congestion.",
      "Nasal decongestants (oxymetazoline): max 3 days — rhinitis medicamentosa (rebound congestion) with prolonged use.",
      "Allergen immunotherapy indications: inadequate symptom control with medications, desire for disease modification, allergen avoidance not feasible, multiple season involvement.",
      "SCIT vs SLIT: SCIT — office-administered, broader evidence. SLIT tablets (grass, dust mite, ragweed) — home administration, FDA-approved. SLIT drops: off-label in US.",
      "AR-asthma link: unified airway. Treat both — AR treatment reduces asthma exacerbation risk."
    ]
  },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with the working diagnosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Working diagnosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Working diagnosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Working diagnosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Working diagnosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Derek Patel's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Derek appears frustrated and exhausted from chronic symptoms that significantly impact his sleep and work performance. He is cooperative and forthcoming about his medical history, expressing disappointment that multiple medications haven't provided adequate relief.",
    "interviewQuestions": [
        "When did your nasal congestion first start and has it gotten worse over time?",
        "Are your symptoms worse at certain times of day or in specific locations?",
        "Do you notice your symptoms are worse when you're around your cat or in your bedroom?",
        "How would you rate your nasal congestion on a scale of 1-10?",
        "What makes your symptoms better or worse?",
        "Do you have any facial pain, pressure, or headaches?",
        "Have you noticed any changes in your sense of smell or taste?",
        "Do you get nosebleeds or have any colored nasal discharge?",
        "How is your sleep quality affected by these symptoms?",
        "Do you have any breathing difficulties or wheezing?",
        "What medications are you currently taking for these symptoms?",
        "Have you ever been tested for allergies?",
        "Does anyone in your family have similar problems with allergies or asthma?"
    ],
    "patientResponses": {
        "default": "I'm not sure I understand what you're asking. Could you rephrase that? My main problem is just this constant stuffy nose.",
        "onset": "I've had nasal congestion for about 8 years now. It started gradually but has become much worse over the past 2-3 years, especially since we got our cat.",
        "character": "It's a constant feeling of being completely blocked up, like my nose is stuffed with cotton. I also get a lot of sneezing fits and this annoying post-nasal drip.",
        "location": "It's mainly in both sides of my nose, though the left side seems worse. Sometimes I feel pressure around my cheeks and forehead.",
        "severity": "I'd say it's about a 7 or 8 out of 10. It's really affecting my sleep - I can barely breathe through my nose at night, and I'm exhausted at work.",
        "aggravating": "It's definitely worse when I'm at home, especially in the bedroom. Dusty areas make it terrible, and being around my cat seems to trigger sneezing fits.",
        "relieving": "The medications help a little bit, but not nearly enough. Sometimes a hot shower gives me temporary relief, but it comes right back.",
        "associated": "I have this constant post-nasal drip that makes me clear my throat a lot. Sometimes I wheeze a little, especially when my nose is really bad. My eyes get itchy too.",
        "denies": "No fever, no thick colored discharge, no severe facial pain, no nosebleeds. I don't think I have any sinus infections right now.",
        "history": "I've always had some seasonal allergies, but this year-round congestion is relatively new. I've had a few sinus infections over the years.",
        "medications": "Fluticasone nasal; Cetirizine; Montelukast; Azelastine nasal",
        "allergies": "Dust mites, Cat dander, Mold (Alternaria)",
        "family": "My mom has really bad seasonal allergies and my dad has asthma. I think I got the worst of both worlds.",
        "social": "I work in an office as an accountant. I don't smoke and rarely drink alcohol. We have a cat at home that my wife loves, and our bedroom is carpeted."
    },
    "examManeuvers": [
        "External nasal inspection",
        "Anterior rhinoscopy",
        "Nasal patency assessment",
        "Palpation of sinuses",
        "Examination of conjunctiva",
        "Oropharyngeal examination",
        "Cervical lymph node palpation",
        "Pulmonary auscultation",
        "Nasal endoscopy findings review"
    ],
    "examFindings": {
        "External nasal inspection": "No external nasal deformity, mild erythema around nares from frequent nose blowing",
        "Anterior rhinoscopy": "Bilateral turbinate hypertrophy with pale, boggy nasal mucosa. Clear rhinorrhea present bilaterally",
        "Nasal patency assessment": "Severely reduced airflow through both nares, left > right",
        "Palpation of sinuses": "Mild tenderness over maxillary sinuses bilaterally, no frontal sinus tenderness",
        "Examination of conjunctiva": "Mild conjunctival erythema and injection consistent with allergic conjunctivitis",
        "Oropharyngeal examination": "Posterior pharyngeal cobblestoning consistent with chronic post-nasal drip",
        "Cervical lymph node palpation": "No significant cervical lymphadenopathy",
        "Pulmonary auscultation": "Clear to auscultation bilaterally, no wheezing at rest",
        "Nasal endoscopy findings review": "Significant bilateral inferior turbinate hypertrophy with contact points, clear secretions in middle meatus"
    },
    "ddxTargets": [
        "Perennial allergic rhinitis with turbinate hypertrophy (correct diagnosis)",
        "Chronic rhinosinusitis without nasal polyps",
        "Mixed allergic and non-allergic rhinitis",
        "Nasal polyps",
        "Septal deviation with turbinate hypertrophy",
        "Medication-induced rhinitis",
        "Vasomotor rhinitis"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on 'allergy medication failure' and missing structural component (turbinate hypertrophy) requiring procedural intervention",
        "prematureClosure": "Risk of stopping at allergic rhinitis diagnosis without recognizing severe turbinate hypertrophy that may need surgical management",
        "availabilityBias": "May focus too heavily on medication optimization while missing that structural abnormalities are preventing medical therapy success"
    },
    "coachPrompts": {
        "phase2": "You've identified several reasonable possibilities for chronic nasal congestion. As you interview Derek, pay particular attention to environmental triggers, medication response patterns, and how his symptoms impact his daily functioning. What specific questions will help you differentiate between allergic and structural causes?",
        "phase5": "Your physical exam reveals significant turbinate hypertrophy along with classic allergic findings. Consider how the structural abnormalities you found might explain why his current medical regimen isn't providing adequate relief. What does this suggest about his treatment needs moving forward?",
        "finalDebrief": "This case illustrates how perennial allergic rhinitis can lead to chronic inflammation and secondary turbinate hypertrophy. Derek's poor response to appropriate medical therapy, combined with your physical exam findings, suggests he needs both continued allergen avoidance/immunotherapy AND consideration of procedural intervention for the structural component. How might you counsel him about next steps?"
    }
}
};