
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Derek Patel",
      "patientHPI": "I've had a stuffy, runny nose for months now, but yesterday I started getting these really bad nosebleeds that won't stop \u2014 I've never had nosebleeds like this before.",
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
      "pharmacy": "Walgreens \u2014 University Blvd",
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
        "chiefComplaint": "Severe epistaxis in setting of chronic rhinitis \u2014 turbinate friability",
        "diagnosis": "Allergic Rhinitis \u2014 Uncontrolled"
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
          "temp": "36.8\u00b0C",
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
          "cc": "Severe epistaxis in setting of chronic rhinitis \u2014 turbinate friability",
          "hpi": "Derek Patel \u2014 Severe epistaxis in setting of chronic rhinitis \u2014 turbinate friability",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for posterior epistaxis packing \u2014 underlying chronic rhinitis",
        "diagnosis": "Allergic Rhinitis \u2014 Uncontrolled"
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
          "temp": "36.8\u00b0C",
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
          "cc": "Admitted for posterior epistaxis packing \u2014 underlying chronic rhinitis",
          "hpi": "Derek Patel \u2014 Admitted for posterior epistaxis packing \u2014 underlying chronic rhinitis",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 perennial rhinitis failing 4 medications, immunotherapy evaluation",
        "diagnosis": "Allergic Rhinitis \u2014 Uncontrolled"
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
          "temp": "36.8\u00b0C",
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
          "cc": "A/I consult \u2014 perennial rhinitis failing 4 medications, immunotherapy evaluation",
          "hpi": "Derek Patel \u2014 A/I consult \u2014 perennial rhinitis failing 4 medications, immunotherapy evaluation",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
        "diagnosis": "Allergic Rhinitis \u2014 Uncontrolled, Immunotherapy Candidate"
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
          "temp": "36.8\u00b0C",
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
          "assessment": "Allergic Rhinitis \u2014 Uncontrolled, Immunotherapy Candidate",
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
    "pharmacy": "Walgreens \u2014 University Blvd",
    "emergencyContact": {
      "name": "Lisa Patel",
      "phone": "(513) 555-4043",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Year-round nasal congestion, sneezing, post-nasal drip despite multiple medications",
    "diagnosis": "Allergic Rhinitis \u2014 Uncontrolled, Immunotherapy Candidate"
  },
  "problems": [
    {
      "problem": "Allergic rhinitis \u2014 moderate-severe, uncontrolled",
      "icd": "J30.9",
      "onset": "2019",
      "status": "Active",
      "notes": "Daily symptoms, nasal congestion, postnasal drip, sleep disruption \u2014 on OTC antihistamine only"
    },
    {
      "problem": "Allergic sensitization \u2014 dust mite and cat dander",
      "icd": "J30.1",
      "onset": "2019",
      "status": "Active",
      "notes": "Skin prick testing: 3+ dust mite, 2+ cat dander \u2014 perennial allergens, unavoidable indoors"
    },
    {
      "problem": "Allergic conjunctivitis \u2014 concurrent",
      "icd": "H10.10",
      "onset": "2019",
      "status": "Active",
      "notes": "Bilateral eye itching/redness \u2014 common AR comorbidity, same inflammatory mechanism"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone propionate nasal spray 50mcg \u2014 2 sprays per nostril daily",
      "sig": "Spray twice into each nostril daily \u2014 most effective monotherapy for AR",
      "prescriber": "Allergy",
      "start": "11/2024",
      "refills": 3,
      "status": "Active \u2014 step-up"
    },
    {
      "name": "Cetirizine 10mg daily \u2014 oral antihistamine (adjunct)",
      "sig": "Take daily \u2014 adjunct for breakthrough symptoms, especially itching",
      "prescriber": "Allergy",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Olopatadine 0.2% ophthalmic drops BID",
      "sig": "1 drop each eye twice daily \u2014 allergic conjunctivitis",
      "prescriber": "Allergy",
      "start": "11/2024",
      "refills": 2,
      "status": "Active"
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
      "temp": "36.8\u00b0C",
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
      "assessment": "Allergic Rhinitis \u2014 Uncontrolled, Immunotherapy Candidate",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Allergy Testing",
      "results": [
        {
          "test": "Skin prick test \u2014 House dust mite (D. farinae)",
          "value": "Wheal 9mm / Flare 22mm",
          "unit": "",
          "ref": "Positive \u22653mm wheal",
          "flag": "H"
        },
        {
          "test": "Skin prick test \u2014 Cat dander",
          "value": "Wheal 7mm / Flare 18mm",
          "unit": "",
          "ref": "Positive \u22653mm",
          "flag": "H"
        },
        {
          "test": "Skin prick test \u2014 Dog dander",
          "value": "Wheal 3mm \u2014 borderline",
          "unit": "",
          "ref": "\u22653mm",
          "flag": ""
        },
        {
          "test": "Total IgE",
          "value": "388",
          "unit": "IU/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "FeNO (fractional exhaled nitric oxide)",
          "value": "28",
          "unit": "ppb",
          "ref": "<25",
          "flag": "H"
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
  ],
  "references": [
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
      "Intranasal corticosteroids (INCS) are first-line therapy for allergic rhinitis \u2014 superior to oral antihistamines for nasal congestion (which antihistamines do not treat well). INCS + antihistamine combination most effective for all symptoms.",
      "Allergen immunotherapy (SCIT or SLIT) is the only disease-modifying treatment for allergic rhinitis \u2014 it induces tolerance through Treg and IgG4 blocking antibody mechanisms, reducing symptoms for years after completion.",
      "The unified airway concept: allergic rhinitis and asthma are manifestations of the same Type 2 airway inflammation. Treating rhinitis reduces asthma exacerbations; asthma in AR patients warrants nasal evaluation."
    ],
    "boardPearls": [
      "INCS: first-line for AR. Onset: 1\u20132 weeks. Must use daily for full effect (not PRN). Fluticasone, mometasone \u2014 minimal systemic absorption, safe for long-term use.",
      "Antihistamines: second-generation (cetirizine, fexofenadine, loratadine) preferred \u2014 less sedating. Effective for sneezing, itching, rhinorrhea. NOT effective for nasal congestion.",
      "Nasal decongestants (oxymetazoline): max 3 days \u2014 rhinitis medicamentosa (rebound congestion) with prolonged use.",
      "Allergen immunotherapy indications: inadequate symptom control with medications, desire for disease modification, allergen avoidance not feasible, multiple season involvement.",
      "SCIT vs SLIT: SCIT \u2014 office-administered, broader evidence. SLIT tablets (grass, dust mite, ragweed) \u2014 home administration, FDA-approved. SLIT drops: off-label in US.",
      "AR-asthma link: unified airway. Treat both \u2014 AR treatment reduces asthma exacerbation risk."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Derek appears frustrated and tired, with dark circles under his eyes from poor sleep. He's very forthcoming about his symptoms and eager to find a solution, expressing disappointment that his current medications aren't providing adequate relief. His distress level is moderate, primarily due to the impact on his sleep and work performance.",
    "interviewQuestions": [
      "When did your nasal congestion first begin and has it gotten worse over time?",
      "Do your symptoms vary by season or are they constant year-round?",
      "What specific nasal symptoms are bothering you most?",
      "How would you rate your symptom severity on a scale of 1-10?",
      "What makes your nasal congestion and other symptoms worse?",
      "Have you tried any treatments and what has helped or not helped?",
      "Do you have any other symptoms like facial pain, headaches, or breathing issues?",
      "Have you noticed any triggers in your home or work environment?",
      "Do you have pets at home or exposure to other potential allergens?",
      "How are these symptoms affecting your daily life and sleep?",
      "What medications are you currently taking for these symptoms?",
      "Do you have any known allergies or previous allergy testing?",
      "Is there any family history of allergies or asthma?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that? I'm mainly concerned about my constant stuffy nose and how it's affecting my sleep.",
      "onset": "I've had these problems for about 8 years now, starting in my mid-twenties. It began gradually but has definitely gotten worse over the past couple of years.",
      "character": "My nose feels constantly blocked and stuffy, like I can never breathe clearly through it. I'm always sneezing, especially in the mornings, and I have this constant drip down the back of my throat.",
      "location": "It's mainly my nose that's congested, but I feel pressure around my sinuses too, especially around my forehead and cheeks.",
      "severity": "I'd say it's about a 7 out of 10. It's really impacting my sleep and I'm tired all the time at work. I can barely breathe through my nose most days.",
      "aggravating": "It's definitely worse when I'm at home, particularly in my bedroom. Dusty areas make me sneeze more, and being around my cat seems to make everything worse.",
      "relieving": "The nasal sprays help a little bit, and the antihistamines take the edge off, but nothing really clears me up completely. Sometimes a hot shower provides temporary relief.",
      "associated": "I have that constant post-nasal drip I mentioned, and sometimes I wheeze a little, especially when my allergies are really acting up. I get headaches from the sinus pressure too.",
      "denies": "I don't have any fever, and the mucus isn't colored or bloody. No severe facial pain, just that pressure feeling.",
      "history": "I've dealt with allergies since I was young, but the nasal congestion has become much more of a problem as an adult. I've had a few sinus infections over the years.",
      "medications": "Fluticasone nasal; Cetirizine; Montelukast; Azelastine nasal",
      "allergies": "Dust mites, Cat dander, Mold (Alternaria)",
      "family": "My mom has really bad allergies and rhinitis like me, and my dad has asthma. It definitely runs in the family.",
      "social": "I work in an office, don't smoke, and drink occasionally on weekends. I have a cat at home that I love, and my bedroom has wall-to-wall carpeting."
    },
    "examManeuvers": [
      "External nasal inspection",
      "Anterior rhinoscopy",
      "Nasal endoscopy or speculum examination",
      "Palpation of sinuses",
      "Assessment of nasal airflow",
      "Examination of conjunctiva",
      "Lymph node palpation",
      "Lung auscultation",
      "Oropharyngeal examination",
      "Assessment of nasal voice quality"
    ],
    "examFindings": {
      "External nasal inspection": "No external deformity, mild erythema around nares from frequent nose blowing",
      "Anterior rhinoscopy": "Bilateral turbinate hypertrophy with pale, boggy nasal mucosa and clear discharge",
      "Nasal endoscopy or speculum examination": "Inferior turbinates significantly enlarged, narrow nasal passages bilaterally, mucoid secretions present",
      "Palpation of sinuses": "Mild tenderness over maxillary and frontal sinuses bilaterally",
      "Assessment of nasal airflow": "Severely reduced airflow through both nares",
      "Examination of conjunctiva": "Mild injection and watery discharge consistent with allergic conjunctivitis",
      "Lymph node palpation": "No significant lymphadenopathy",
      "Lung auscultation": "Clear to auscultation bilaterally with good air entry",
      "Oropharyngeal examination": "Mild erythema of posterior pharynx from post-nasal drip, no exudate",
      "Assessment of nasal voice quality": "Hyponasal speech pattern due to nasal obstruction"
    },
    "ddxTargets": [
      "Allergic rhinitis uncontrolled \u2014 intranasal steroid step-up (correct)",
      "Non-allergic rhinitis \u2014 SPT positive, allergy confirmed",
      "Chronic sinusitis \u2014 no facial pressure/purulent discharge, no imaging findings",
      "Nasal polyps \u2014 not identified on exam",
      "Vasomotor rhinitis \u2014 triggered by irritants not allergens",
      "NARES (non-allergic rhinitis with eosinophilia) \u2014 negative SPT, not the case here"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'allergy patient' and missing structural causes like severe turbinate hypertrophy that may require surgical intervention",
      "prematureClosure": "May stop at 'allergic rhinitis' diagnosis without recognizing the severity and anatomical changes that make this refractory to medical management",
      "availabilityBias": "Common to see allergic rhinitis, but may miss that this represents severe disease with structural changes requiring different management approach"
    },
    "coachPrompts": {
      "phase2": "You've identified allergic rhinitis in your differential. What specific aspects of Derek's presentation might help you determine severity and identify why his current comprehensive medical regimen isn't providing adequate relief?",
      "phase5": "Derek's physical exam shows significant turbinate hypertrophy despite maximal medical therapy. How does this finding change your assessment of disease severity and management approach? What additional interventions might you consider?",
      "finalDebrief": "This case illustrates severe perennial allergic rhinitis with secondary turbinate hypertrophy - a condition where optimal medical therapy may be insufficient. How did the physical exam findings of enlarged turbinates and the patient's poor response to multiple medications guide you toward considering more aggressive interventions like immunotherapy or surgical options?",
      "final": "Diagnosis: uncontrolled moderate-severe AR \u2014 step-up to intranasal corticosteroid (INCS). Key learning: (1) INCS is the most effective monotherapy for AR \u2014 superior to oral antihistamines for congestion, postnasal drip, and overall symptom control (2A level evidence). Should be first-line for moderate-severe persistent AR, not step-up. If patient was started on antihistamine first, step up now. (2) Correct INCS technique: tilt head slightly forward, aim spray toward outer eye/ear (not the septum), sniff gently. Septum-directed spray causes epistaxis \u2014 the most common reason patients stop. (3) Immunotherapy: the only disease-modifying treatment for AR. Subcutaneous immunotherapy (SCIT) or sublingual (SLIT) \u2014 both effective for dust mite and animal danders. After 3-5 years, induces long-term tolerance. Consider for any patient who: (a) inadequately controlled on pharmacotherapy, (b) wants to reduce medication burden, (c) has comorbid asthma (reduces risk of asthma development). (4) FeNO 28: borderline elevated \u2014 suggests eosinophilic airway inflammation. If asthma symptoms develop, this is a pre-morbid marker. Counsel on asthma prevention (early treatment of AR reduces asthma risk). (5) Cat avoidance: if cat is in the home, immunotherapy is preferable to removal for many patients \u2014 removal of a beloved pet causes significant quality of life impact and adherence is poor."
    }
  },
  "meta": {
    "diagnosis": "Allergic Rhinitis \u2014 Uncontrolled on Monotherapy, Step-Up to Intranasal Steroid + Immunotherapy Discussion",
    "caseId": "allergic-rhinitis-uncontrolled"
  }
};
