
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Marcus Okafor",
      "patientHPI": "I'm so frustrated because I keep getting these chest infections over and over - this is my fifth one just this year. I feel like something's really wrong with me because normal people don't get sick this much, and I'm worried about what's happening to my body.",
      "dob": "12/04/1998",
      "age": "28",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-373077",
      "language": "English",
      "race": "Multiracial",
      "phone": "(504) 555-5480",
      "email": "marcus.okafor@email.com",
      "address": "5755 Willow Way, Richmond, VA 23219",
      "insurance": "Medicaid",
      "pcp": "Dr. Sarah Mitchell, DO",
      "pharmacy": "CVS Pharmacy \u2014 Main St",
      "emergencyContact": {
        "name": "Sarah Okafor",
        "phone": "(502) 555-2996",
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
        "Received pneumococcal and tetanus vaccines \u2014 non-protective titers"
      ],
      [
        "Key",
        "Meets diagnostic criteria for CVID \u2014 needs IVIG/SCIG"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Pneumonia \u2014 5th respiratory infection this year",
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
          "temp": "38.8\u00b0C",
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
          "impression": "Bronchiectasis \u2014 consider immunodeficiency workup.",
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
          "cc": "Pneumonia \u2014 5th respiratory infection this year",
          "hpi": "Marcus Okafor \u2014 Pneumonia \u2014 5th respiratory infection this year",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for pneumonia + immunodeficiency workup \u2014 suspected CVID",
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
          "temp": "37.8\u00b0C",
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
          "impression": "Bronchiectasis \u2014 consider immunodeficiency workup.",
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
          "cc": "Admitted for pneumonia + immunodeficiency workup \u2014 suspected CVID",
          "hpi": "Marcus Okafor \u2014 Admitted for pneumonia + immunodeficiency workup \u2014 suspected CVID",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult \u2014 recurrent infections, hypogammaglobulinemia, non-protective vaccine titers",
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
          "temp": "37.2\u00b0C",
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
          "impression": "Bronchiectasis \u2014 consider immunodeficiency workup.",
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
          "cc": "A/I consult \u2014 recurrent infections, hypogammaglobulinemia, non-protective vaccine titers",
          "hpi": "Marcus Okafor \u2014 A/I consult \u2014 recurrent infections, hypogammaglobulinemia, non-protective vaccine titers",
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
          "temp": "37.0\u00b0C",
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
          "impression": "Bronchiectasis \u2014 consider immunodeficiency workup.",
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
    "phone": "(620) 555-9899",
    "email": "marcus.okafor@email.com",
    "address": "4813 Walnut Dr, Birmingham, AL 35209",
    "insurance": "Medicaid",
    "pcp": "Dr. Sarah Mitchell, DO",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Sarah Okafor",
      "phone": "(505) 555-7464",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Recurrent sinopulmonary infections, 4 courses of antibiotics in 6 months",
    "diagnosis": "Common Variable Immunodeficiency (CVID)"
  },
  "problems": [
    {
      "problem": "CVID \u2014 suspected, diagnostic workup",
      "icd": "D83.9",
      "onset": "2024",
      "status": "Active",
      "notes": "James Caldwell, 22M \u2014 3rd pneumonia in 18 months. Primary care physician initiating immunodeficiency workup."
    },
    {
      "problem": "Recurrent pneumococcal pneumonia \u2014 same organism x2",
      "icd": "J13",
      "onset": "2024",
      "status": "Active",
      "notes": "Blood cultures: Streptococcus pneumoniae. Despite prior vaccination \u2014 vaccine non-response suspected."
    },
    {
      "problem": "Family history \u2014 brother with unexplained recurrent infections",
      "icd": "Z83.79",
      "onset": "2024",
      "status": "Active",
      "notes": "Brother had similar infections at same age \u2014 CVID has familial clustering (10-20% family history)."
    }
  ],
  "medications": [
    {
      "name": "Amoxicillin-clavulanate 875mg BID x10 days \u2014 current pneumonia",
      "sig": "Oral outpatient treatment \u2014 mild CAP. Complete full course.",
      "prescriber": "PCP",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Immunology referral \u2014 urgent",
      "sig": "Immunologist referral for confirmatory testing and IVIG initiation if CVID confirmed",
      "prescriber": "PCP",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 referral placed"
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
      "temp": "37.0\u00b0C",
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
      "date": "11/2024",
      "panel": "Initial Immunodeficiency Screen",
      "results": [
        {
          "test": "IgG",
          "value": "220",
          "unit": "mg/dL",
          "ref": "700-1600",
          "flag": "L"
        },
        {
          "test": "IgA",
          "value": "12",
          "unit": "mg/dL",
          "ref": "70-400",
          "flag": "L"
        },
        {
          "test": "IgM",
          "value": "18",
          "unit": "mg/dL",
          "ref": "40-230",
          "flag": "L"
        },
        {
          "test": "CBC \u2014 B cells (flow cytometry, ordered)",
          "value": "Pending",
          "unit": "",
          "ref": "100-500",
          "flag": ""
        },
        {
          "test": "HIV antibody",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Protein electrophoresis",
          "value": "Hypogammaglobulinemia pattern, no M-spike",
          "unit": "",
          "ref": "Normal gammaglobulin",
          "flag": "L"
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
    "Sister: IgA deficiency"
  ],
  "socialHistory": [
    [
      "Infection history",
      "4 sinusitis, 2 pneumonia, 1 GI infection in 12 months"
    ],
    [
      "Vaccination response",
      "Received pneumococcal and tetanus vaccines \u2014 non-protective titers"
    ],
    [
      "Key",
      "Meets diagnostic criteria for CVID \u2014 needs IVIG/SCIG"
    ]
  ],
  "references": [
    {
      "id": "AAAAI-PID-PP-2015",
      "title": "Practice parameter for the diagnosis and management of primary immunodeficiency",
      "authors": "Bonilla FA, Barlan I, Chapel H, et al.",
      "journal": "J Allergy Clin Immunol",
      "year": 2015,
      "doi": "10.1016/j.jaci.2015.04.049",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4837186/",
      "openAccess": true,
      "validates": [
        "CVID criteria: low IgG + low IgA/IgM + poor vaccine responses",
        "IgA deficiency \u2192 CVID spectrum",
        "IVIG/SCIG replacement",
        "IgA-depleted products",
        "Trough IgG >500"
      ]
    },
    {
      "id": "SCIG-Review-2008",
      "title": "Subcutaneous immunoglobulin replacement: a new paradigm",
      "authors": "Berger M.",
      "journal": "Immunol Allergy Clin North Am",
      "year": 2008,
      "doi": "10.1016/j.iac.2008.07.002",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3576822/",
      "openAccess": true,
      "validates": [
        "SCIG vs IVIG",
        "Weekly home infusion",
        "Stable IgG levels",
        "Patient preference"
      ]
    }
  ],
  "teachingPoints": {
    "keyLearning": [
      "CVID is the most common symptomatic primary antibody deficiency in adults \u2014 median diagnosis age 30s. Diagnostic criteria: low IgG (<2 SD below mean for age) + low IgA and/or IgM + poor vaccine responses + exclusion of other causes. B cells present (differentiate from XLA where B cells are absent).",
      "CVID complications beyond infections: granulomatous disease (GLILD \u2014 granulomatous-lymphocytic ILD), autoimmune cytopenias (ITP, AIHA), GI disease (inflammatory bowel-like, CVID enteropathy, Giardia), splenomegaly, lymphoproliferative disease, and increased cancer risk (gastric, lymphoma).",
      "Treatment: IgG replacement therapy (IVIG every 3\u20134 weeks or SCIG weekly/biweekly) to maintain IgG trough >700\u2013800 mg/dL. Dose adjusted based on infection breakthrough, not just IgG level."
    ],
    "boardPearls": [
      "CVID: low IgG + low IgA and/or IgM + poor vaccine responses. B cells PRESENT (unlike XLA).",
      "Most common symptomatic PAD in adults. Median age at diagnosis: 30s (often 5\u201310 year delay).",
      "Characteristic infections: encapsulated bacteria (S. pneumoniae, H. influenzae) \u2192 recurrent sinopulmonary. Giardia lamblia \u2192 chronic diarrhea/malabsorption. Enteroviruses \u2192 chronic meningoencephalitis.",
      "CVID non-infectious complications: GLILD (granulomatous-lymphocytic ILD), autoimmune cytopenias (ITP, AIHA), CVID enteropathy, splenomegaly, lymphoproliferative disease.",
      "Live vaccines: contraindicated in CVID (and all PAD). IPV (injectable) \u2192 safe. MMR, varicella, yellow fever \u2192 CONTRAINDICATED.",
      "Treatment: IVIG Q3\u20134W or SCIG. IgG trough target: >700\u2013800 mg/dL. Adjust dose for breakthrough infections."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears frustrated and somewhat anxious about his recurring infections, stating he's tired of being sick all the time. He is forthcoming about his symptoms and eager to find answers, expressing concern that something more serious might be wrong given the frequency of his infections.",
    "interviewQuestions": [
      "Can you tell me more about these infections you've been having?",
      "When did you first start noticing you were getting sick more often than usual?",
      "What types of infections have you had specifically?",
      "How severe have these infections been compared to when you were younger?",
      "Have you noticed any other symptoms like diarrhea or digestive issues?",
      "Do you have any family history of frequent infections or immune problems?",
      "Have you had any recent vaccinations, and do you know if they were effective?",
      "Have you traveled anywhere recently or been exposed to anyone sick?",
      "Do you have any other medical conditions or take any medications regularly?",
      "Have you noticed any swelling in your abdomen or feeling full quickly when eating?",
      "Do you smoke, drink alcohol, or use any recreational drugs?",
      "What is your occupation and living situation?",
      "Have you had any weight loss or night sweats?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "I started noticing I was getting sick more often about a year ago. Before that, I rarely got sick, maybe once a year at most.",
      "character": "These aren't just minor colds - they're real infections that knock me out. The sinus infections cause terrible pressure and thick, colored discharge, and the pneumonias left me really short of breath.",
      "location": "The sinus infections hit my face, especially around my cheeks and forehead. The pneumonias were in my chest with deep coughing.",
      "severity": "I'd say the severity is about 7-8 out of 10 when they hit. I've had to miss weeks of work and feel completely drained.",
      "aggravating": "Stress seems to make me more susceptible, and once I get sick, it takes forever to recover even with antibiotics.",
      "relieving": "The antibiotics help eventually, but it takes longer than it should, and I often need multiple courses or stronger ones.",
      "associated": "I've been having chronic diarrhea for months now, and I feel full really quickly when I eat. I've also been more tired than usual.",
      "denies": "No fever right now, no night sweats, no significant weight loss, no rashes or joint pain.",
      "history": "Like I mentioned, in the past year I've had 4 sinus infections and 2 pneumonias. I also had one bad stomach bug that lasted weeks.",
      "medications": "Amoxicillin-Clavulanate",
      "allergies": "NKDA",
      "family": "My sister was diagnosed with IgA deficiency a few years ago. She also used to get a lot of infections before they figured that out.",
      "social": "I work in an office, don't smoke, have maybe 2-3 drinks per week, no drugs. I live with my girlfriend in an apartment."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Head and neck examination including sinuses",
      "Pulmonary examination",
      "Abdominal examination with palpation for splenomegaly",
      "Lymph node examination",
      "Cardiac examination",
      "Skin examination for rashes or lesions",
      "Oropharyngeal examination",
      "General appearance and constitutional assessment"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 118/72, HR 76, Temperature 37.0\u00b0C, SpO2 98%, appears stable",
      "Head and neck examination including sinuses": "Mild tenderness over maxillary sinuses, no acute drainage, lymph nodes small and mobile",
      "Pulmonary examination": "Clear to auscultation bilaterally, no wheezes or crackles, good air movement",
      "Abdominal examination with palpation for splenomegaly": "Spleen palpable 3 cm below left costal margin, non-tender, liver not enlarged",
      "Lymph node examination": "Small, mobile lymph nodes in cervical and axillary regions, none enlarged or concerning",
      "Cardiac examination": "Regular rate and rhythm, no murmurs, rubs, or gallops",
      "Skin examination for rashes or lesions": "No rashes, petechiae, or unusual lesions noted",
      "Oropharyngeal examination": "Mild erythema of posterior pharynx, no exudate or thrush",
      "General appearance and constitutional assessment": "Well-appearing but somewhat fatigued-looking young man, no acute distress"
    },
    "ddxTargets": [
      "CVID \u2014 pan-hypogammaglobulinemia, recurrent pneumococcal pneumonia (correct)",
      "HIV/AIDS \u2014 negative HIV test",
      "Multiple myeloma \u2014 SPEP no M-spike; age atypical",
      "X-linked agammaglobulinemia \u2014 age of onset (recurrent from infancy), absent B cells",
      "Secondary immunodeficiency (medications, malnutrition) \u2014 no risk factors",
      "Complement deficiency \u2014 C3/C4 normal; would cause specific Neisseria/pneumococcal susceptibility"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on recurrent sinusitis as simple chronic sinus disease rather than considering underlying immunodeficiency",
      "prematureClosure": "May stop at diagnosis of chronic sinusitis without investigating the pattern of recurrent infections and family history",
      "availabilityBias": "Common infections may overshadow consideration of rare primary immunodeficiency disorders"
    },
    "coachPrompts": {
      "phase2": "You've identified recurrent sinopulmonary infections in a young healthy male. What specific aspects of the history would help you distinguish between common causes of recurrent infections versus primary immunodeficiency? Think about the pattern, severity, and what family history might be relevant.",
      "phase5": "Now you have the history of recurrent serious infections, family history of IgA deficiency, splenomegaly, and chronic diarrhea. How does this constellation of findings change your differential diagnosis? What does the splenomegaly suggest about the underlying pathophysiology?",
      "finalDebrief": "This case illustrates how a pattern of recurrent sinopulmonary infections, especially with poor vaccine response and splenomegaly, should raise suspicion for primary immunodeficiency. The family history of IgA deficiency was a key clue, as CVID can cluster in families. How did your thinking evolve from considering simple recurrent sinusitis to recognizing the signs of immunodeficiency?",
      "final": "Diagnosis: CVID \u2014 initial presentation. Key learning: (1) Red flags for primary immunodeficiency: \u22652 serious bacterial infections per year, infections with unusual/opportunistic organisms, infections requiring IV antibiotics, infections at unusual sites (brain abscess), family history of PID, failure to thrive. The 10 Warning Signs (Jeffrey Modell Foundation) are a useful screening tool. (2) PCP workup for recurrent infections: CBC with differential, quantitative immunoglobulins (IgG, IgA, IgM, IgE), HIV antibody, serum protein electrophoresis. If immunoglobulins low: flow cytometry for B/T/NK cells, vaccine titers (tetanus, pneumococcal). (3) Diagnosis requires referral to allergy/immunology \u2014 IVIG cannot be initiated by PCP in most settings (insurance authorization, infusion center logistics). Urgent referral is appropriate. (4) Do NOT give live vaccines if CVID suspected \u2014 defer MMR, varicella, yellow fever until immunologist evaluates. Inactivated vaccines are safe. (5) CVID vs XLA: both have hypogammaglobulinemia, but XLA (Bruton's) = males only, onset in infancy after maternal antibody wanes, B cells nearly absent on flow cytometry. CVID = any sex, onset 20s-30s, B cells usually normal in number but dysfunctional."
    }
  },
  "meta": {
    "diagnosis": "CVID \u2014 First Presentation at Age 22, Recurrent Pneumonia, Diagnostic Workup Initiated",
    "caseId": "cvid-presentation"
  }
};
