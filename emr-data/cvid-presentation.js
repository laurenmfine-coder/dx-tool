/* emr-data/cvid-presentation.js — Multi-Setting Allergy Case: CVID */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Marcus Okafor",
      "dob": "12/04/1998",
      "age": "28",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-373077",
      "language": "English",
      "race": "Multiracial",
      "phone": "(647) 211-7184",
      "email": "marcus.okafor@email.com",
      "address": "2116 Oak St, Weston, FL 33324",
      "insurance": "Medicaid",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy — Main St",
      "emergencyContact": {
        "name": "Sarah Okafor",
        "phone": "(877) 960-1279",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
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
      "Sister: IgA deficiency"
    ],
    "socialHistory": [
      [
        "Infection history",
        "4 sinusitis, 2 pneumonia, 1 GI infection in 12 months"
      ],
      [
        "Vaccination response",
        "Received pneumococcal and tetanus vaccines — non-protective titers"
      ],
      [
        "Key",
        "Meets diagnostic criteria for CVID — needs IVIG/SCIG"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Pneumonia — 5th respiratory infection this year",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "4 sinus infections and 2 pneumonias in past year",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic diarrhea",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Splenomegaly on exam",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amoxicillin-Clavulanate",
          "dose": "875mg",
          "route": "PO",
          "frequency": "BID (current course)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Ceftriaxone",
          "dose": "2g",
          "route": "IV",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Azithromycin",
          "dose": "500mg",
          "route": "IV",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "96",
          "rr": "22",
          "temp": "38.8°C",
          "spo2": "93%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-731789",
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
                  "test": "Igg",
                  "value": "180",
                  "unit": "mg/dL",
                  "range": "700-1600",
                  "flag": "L"
                },
                {
                  "test": "Iga",
                  "value": "15",
                  "unit": "mg/dL",
                  "range": "70-400",
                  "flag": "L"
                },
                {
                  "test": "Igm",
                  "value": "22",
                  "unit": "mg/dL",
                  "range": "40-230",
                  "flag": "L"
                },
                {
                  "test": "Pneumococcal Titers",
                  "value": "Non-protective (<1.3 for 10/14 serotypes)",
                  "unit": "mcg/mL",
                  "range": ">1.3",
                  "flag": "L"
                },
                {
                  "test": "Tetanus Titer",
                  "value": "Non-protective",
                  "unit": "",
                  "range": "Protective",
                  "flag": "L"
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
          "study": "CT Chest",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-922339",
          "clinical": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
          "technique": "Standard protocol",
          "findings": "Scattered bronchiectatic changes in bilateral lower lobes. Mild splenomegaly.",
          "impression": "Bronchiectasis — consider immunodeficiency workup.",
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
          "cc": "Pneumonia — 5th respiratory infection this year",
          "hpi": "Marcus Okafor — Pneumonia — 5th respiratory infection this year",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for pneumonia + immunodeficiency workup — suspected CVID",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "4 sinus infections and 2 pneumonias in past year",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic diarrhea",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Splenomegaly on exam",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amoxicillin-Clavulanate",
          "dose": "875mg",
          "route": "PO",
          "frequency": "BID (current course)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-1",
          "name": "Levofloxacin",
          "dose": "750mg",
          "route": "IV",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "IV Fluids",
          "dose": "NS",
          "route": "IV",
          "frequency": "100mL/hr",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "118/72",
          "hr": "86",
          "rr": "18",
          "temp": "37.8°C",
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
          "accession": "LAB-731789",
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
                  "test": "Igg",
                  "value": "180",
                  "unit": "mg/dL",
                  "range": "700-1600",
                  "flag": "L"
                },
                {
                  "test": "Iga",
                  "value": "15",
                  "unit": "mg/dL",
                  "range": "70-400",
                  "flag": "L"
                },
                {
                  "test": "Igm",
                  "value": "22",
                  "unit": "mg/dL",
                  "range": "40-230",
                  "flag": "L"
                },
                {
                  "test": "Pneumococcal Titers",
                  "value": "Non-protective (<1.3 for 10/14 serotypes)",
                  "unit": "mcg/mL",
                  "range": ">1.3",
                  "flag": "L"
                },
                {
                  "test": "Tetanus Titer",
                  "value": "Non-protective",
                  "unit": "",
                  "range": "Protective",
                  "flag": "L"
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
          "study": "CT Chest",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-922339",
          "clinical": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
          "technique": "Standard protocol",
          "findings": "Scattered bronchiectatic changes in bilateral lower lobes. Mild splenomegaly.",
          "impression": "Bronchiectasis — consider immunodeficiency workup.",
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
          "cc": "Admitted for pneumonia + immunodeficiency workup — suspected CVID",
          "hpi": "Marcus Okafor — Admitted for pneumonia + immunodeficiency workup — suspected CVID",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — recurrent infections, hypogammaglobulinemia, non-protective vaccine titers",
        "diagnosis": "CVID"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "4 sinus infections and 2 pneumonias in past year",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic diarrhea",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Splenomegaly on exam",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amoxicillin-Clavulanate",
          "dose": "875mg",
          "route": "PO",
          "frequency": "BID (current course)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "116/72",
          "hr": "78",
          "rr": "16",
          "temp": "37.2°C",
          "spo2": "98%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-731789",
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
                  "test": "Igg",
                  "value": "180",
                  "unit": "mg/dL",
                  "range": "700-1600",
                  "flag": "L"
                },
                {
                  "test": "Iga",
                  "value": "15",
                  "unit": "mg/dL",
                  "range": "70-400",
                  "flag": "L"
                },
                {
                  "test": "Igm",
                  "value": "22",
                  "unit": "mg/dL",
                  "range": "40-230",
                  "flag": "L"
                },
                {
                  "test": "Pneumococcal Titers",
                  "value": "Non-protective (<1.3 for 10/14 serotypes)",
                  "unit": "mcg/mL",
                  "range": ">1.3",
                  "flag": "L"
                },
                {
                  "test": "Tetanus Titer",
                  "value": "Non-protective",
                  "unit": "",
                  "range": "Protective",
                  "flag": "L"
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
          "study": "CT Chest",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-922339",
          "clinical": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
          "technique": "Standard protocol",
          "findings": "Scattered bronchiectatic changes in bilateral lower lobes. Mild splenomegaly.",
          "impression": "Bronchiectasis — consider immunodeficiency workup.",
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
          "cc": "A/I consult — recurrent infections, hypogammaglobulinemia, non-protective vaccine titers",
          "hpi": "Marcus Okafor — A/I consult — recurrent infections, hypogammaglobulinemia, non-protective vaccine titers",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
        "diagnosis": "Common Variable Immunodeficiency (CVID)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "4 sinus infections and 2 pneumonias in past year",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "Chronic diarrhea",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Splenomegaly on exam",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Amoxicillin-Clavulanate",
          "dose": "875mg",
          "route": "PO",
          "frequency": "BID (current course)",
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
          "temp": "37.0°C",
          "spo2": "98%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/02/2026",
          "time": "08:15",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-731789",
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
                  "test": "Igg",
                  "value": "180",
                  "unit": "mg/dL",
                  "range": "700-1600",
                  "flag": "L"
                },
                {
                  "test": "Iga",
                  "value": "15",
                  "unit": "mg/dL",
                  "range": "70-400",
                  "flag": "L"
                },
                {
                  "test": "Igm",
                  "value": "22",
                  "unit": "mg/dL",
                  "range": "40-230",
                  "flag": "L"
                },
                {
                  "test": "Pneumococcal Titers",
                  "value": "Non-protective (<1.3 for 10/14 serotypes)",
                  "unit": "mcg/mL",
                  "range": ">1.3",
                  "flag": "L"
                },
                {
                  "test": "Tetanus Titer",
                  "value": "Non-protective",
                  "unit": "",
                  "range": "Protective",
                  "flag": "L"
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
          "study": "CT Chest",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-922339",
          "clinical": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
          "technique": "Standard protocol",
          "findings": "Scattered bronchiectatic changes in bilateral lower lobes. Mild splenomegaly.",
          "impression": "Bronchiectasis — consider immunodeficiency workup.",
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
          "cc": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
          "hpi": "Marcus Okafor presents with recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months.",
          "exam": "See documentation.",
          "assessment": "Common Variable Immunodeficiency (CVID)",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Marcus Okafor",
    "dob": "12/04/1998",
    "age": "28",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-373077",
    "language": "English",
    "race": "Multiracial",
    "phone": "(647) 211-7184",
    "email": "marcus.okafor@email.com",
    "address": "2116 Oak St, Weston, FL 33324",
    "insurance": "Medicaid",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Sarah Okafor",
      "phone": "(877) 960-1279",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
    "diagnosis": "Common Variable Immunodeficiency (CVID)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "4 sinus infections and 2 pneumonias in past year",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Chronic diarrhea",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Splenomegaly on exam",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Amoxicillin-Clavulanate",
      "dose": "875mg",
      "route": "PO",
      "frequency": "BID (current course)",
      "status": "Active",
      "prescriber": "Dr. Elena Rodriguez, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/02/2026",
      "time": "08:00",
      "bp": "118/72",
      "hr": "76",
      "rr": "14",
      "temp": "37.0°C",
      "spo2": "98%",
      "pain": "0/10"
    }
  ],
  "visits": [
    {
      "id": "visit-1",
      "type": "Office Visit",
      "date": "03/02/2026",
      "provider": "Dr. Attending",
      "cc": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
      "hpi": "Marcus Okafor presents with recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months.",
      "exam": "See documentation.",
      "assessment": "Common Variable Immunodeficiency (CVID)",
      "plan": "See orders."
    }
  ],
  "labs": [
    {
      "date": "03/02/2026",
      "time": "08:15",
      "status": "Final",
      "orderedBy": "Dr. Attending",
      "accession": "LAB-731789",
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
              "test": "Igg",
              "value": "180",
              "unit": "mg/dL",
              "range": "700-1600",
              "flag": "L"
            },
            {
              "test": "Iga",
              "value": "15",
              "unit": "mg/dL",
              "range": "70-400",
              "flag": "L"
            },
            {
              "test": "Igm",
              "value": "22",
              "unit": "mg/dL",
              "range": "40-230",
              "flag": "L"
            },
            {
              "test": "Pneumococcal Titers",
              "value": "Non-protective (<1.3 for 10/14 serotypes)",
              "unit": "mcg/mL",
              "range": ">1.3",
              "flag": "L"
            },
            {
              "test": "Tetanus Titer",
              "value": "Non-protective",
              "unit": "",
              "range": "Protective",
              "flag": "L"
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
      "study": "CT Chest",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-922339",
      "clinical": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
      "technique": "Standard protocol",
      "findings": "Scattered bronchiectatic changes in bilateral lower lobes. Mild splenomegaly.",
      "impression": "Bronchiectasis — consider immunodeficiency workup.",
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
    "Sister: IgA deficiency"
  ],
  "socialHistory": [
    [
      "Infection history",
      "4 sinusitis, 2 pneumonia, 1 GI infection in 12 months"
    ],
    [
      "Vaccination response",
      "Received pneumococcal and tetanus vaccines — non-protective titers"
    ],
    [
      "Key",
      "Meets diagnostic criteria for CVID — needs IVIG/SCIG"
    ]
  ]
};
