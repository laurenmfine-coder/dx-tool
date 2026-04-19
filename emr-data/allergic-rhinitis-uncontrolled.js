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
  "guided": {
    "supported": true,
    "patientPersona": "Derek Patel appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did year-round nasal congestion, sneezing, post-nasal drip despite multiple medications start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started Derek Patel presents with year-round nasal congestion, sneezing, post-nasal drip.'",
        "character": "'It's year-round nasal congestion, sneezing, post-nasal drip despite multiple medications \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Fluticasone nasal; Cetirizine; Montelukast; Azelastine nasal.'",
        "allergies": "'My allergies are Dust mites, Cat dander, Mold (Alternaria).'",
        "family": "Mother: allergic rhinitis  Father: asthma",
        "social": "Environment: Has a cat at home, carpeted bedroom  Impact: Poor sleep quality due to congestion, impaired work performance  Immunotherapy discussion: Candidate for SCIT or SLIT for dust mite/cat"
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
}
};