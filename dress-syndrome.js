/* emr-data/dress-syndrome.js — Multi-Setting Allergy Case: DRESS Syndrome */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Marcus Jefferson",
  "patientHPI": "I started taking a new seizure medication about a month ago, and now I have this awful rash spreading all over my body along with a fever. My face feels puffy and swollen, and I can feel enlarged lumps in my neck - this all started after I began the new pills.",
      "dob": "12/14/1984",
      "age": "42",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-130141",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(804) 555-1653",
      "email": "marcus.jefferson@email.com",
      "address": "5895 Jasmine Way, Albuquerque, NM 87103",
      "insurance": "Tricare Standard",
      "pcp": "Dr. Elena Rodriguez, MD",
      "pharmacy": "Publix Pharmacy — Weston Rd",
      "emergencyContact": {
        "name": "Jessica Jefferson",
        "phone": "(504) 555-4441",
        "relationship": "Adult Child"
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
        "date": "10/15/2025",
        "lot": "FL-2025",
        "site": "Left Deltoid"
      },
      {
        "name": "COVID-19 (Updated)",
        "date": "09/01/2025",
        "lot": "CV-2025",
        "site": "Right Deltoid"
      },
      {
        "name": "Tdap",
        "date": "03/2020",
        "lot": "TD-2020",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "Non-contributory"
    ],
    "socialHistory": [
      [
        "Timeline",
        "Rash started 3 days ago, fever for 5 days, facial swelling 2 days"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "New-onset seizures — started phenytoin 4 weeks ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Phenytoin",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily (started 4 weeks ago)",
          "status": "Active",
          "prescriber": "Dr. Lisa Chang, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/01/2026",
          "time": "07:45",
          "bp": "118/72",
          "hr": "102",
          "rr": "18",
          "temp": "39.0°C",
          "spo2": "98%",
          "pain": "6/10",
          "bmi": "34",
          "weight": "100 kg"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-244998",
          "collected": "03/01/2026 07:50",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "14.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "41.2",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "245",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "18",
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
                  "value": "139",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "16",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.6",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
                },
                {
                  "test": "Glucose",
                  "value": "98",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": ""
                }
              ]
            },
            {
              "name": "CASE-SPECIFIC STUDIES",
              "results": [
                {
                  "test": "Alt",
                  "value": "420",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": "H"
                },
                {
                  "test": "Ast",
                  "value": "380",
                  "unit": "U/L",
                  "range": "10-40",
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
          "date": "03/01/2026",
          "study": "CT Neck/Chest",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-623310",
          "clinical": "Diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago",
          "technique": "Standard protocol",
          "findings": "Bilateral cervical and axillary lymphadenopathy. No pulmonary infiltrates.",
          "impression": "Lymphadenopathy consistent with systemic drug reaction.",
          "dictated": "03/01/2026 08:30",
          "verified": "03/01/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-ed",
          "type": "Emergency Visit",
          "date": "03/01/2026",
          "provider": "Dr. ED Attending",
          "cc": "Diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago",
          "hpi": "Marcus Jefferson is a 42-year-old male presenting with diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago. Past medical history includes New-onset seizures — started phenytoin 4 weeks ago. See chart for full details.",
          "exam": "See physical examination documentation.",
          "assessment": "DRESS Syndrome — clinical presentation and workup consistent with diagnosis.",
          "plan": "See orders and management plan."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted for DRESS — organ involvement monitoring (hepatitis, eosinophilia)",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "New-onset seizures — started phenytoin 4 weeks ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Phenytoin",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily (started 4 weeks ago)",
          "status": "Active",
          "prescriber": "Dr. Lisa Chang, MD"
        },
        {
          "id": "med-add-1",
          "name": "Prednisone",
          "dose": "1mg/kg",
          "route": "PO",
          "frequency": "Daily with slow taper",
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
          "hr": "96",
          "rr": "18",
          "temp": "38.6°C",
          "spo2": "97%",
          "pain": "5/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-244998",
          "collected": "03/01/2026 07:50",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "14.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "41.2",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "245",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "18",
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
                  "value": "139",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "16",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.6",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
                },
                {
                  "test": "Glucose",
                  "value": "98",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": ""
                }
              ]
            },
            {
              "name": "CASE-SPECIFIC STUDIES",
              "results": [
                {
                  "test": "Alt",
                  "value": "420",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": "H"
                },
                {
                  "test": "Ast",
                  "value": "380",
                  "unit": "U/L",
                  "range": "10-40",
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
          "date": "03/01/2026",
          "study": "CT Neck/Chest",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-623310",
          "clinical": "Diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago",
          "technique": "Standard protocol",
          "findings": "Bilateral cervical and axillary lymphadenopathy. No pulmonary infiltrates.",
          "impression": "Lymphadenopathy consistent with systemic drug reaction.",
          "dictated": "03/01/2026 08:30",
          "verified": "03/01/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Admission",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "Admitted for DRESS — organ involvement monitoring (hepatitis, eosinophilia)",
          "hpi": "Marcus Jefferson — Admitted for DRESS — organ involvement monitoring (hepatitis, eosinophilia)",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — confirm DRESS diagnosis, taper plan, monitor for autoimmune sequelae",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "New-onset seizures — started phenytoin 4 weeks ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Phenytoin",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily (started 4 weeks ago)",
          "status": "Active",
          "prescriber": "Dr. Lisa Chang, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "116/72",
          "hr": "84",
          "rr": "16",
          "temp": "37.6°C",
          "spo2": "98%",
          "pain": "3/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-244998",
          "collected": "03/01/2026 07:50",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "14.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "41.2",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "245",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "18",
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
                  "value": "139",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "16",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.6",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
                },
                {
                  "test": "Glucose",
                  "value": "98",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": ""
                }
              ]
            },
            {
              "name": "CASE-SPECIFIC STUDIES",
              "results": [
                {
                  "test": "Alt",
                  "value": "420",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": "H"
                },
                {
                  "test": "Ast",
                  "value": "380",
                  "unit": "U/L",
                  "range": "10-40",
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
          "date": "03/01/2026",
          "study": "CT Neck/Chest",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-623310",
          "clinical": "Diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago",
          "technique": "Standard protocol",
          "findings": "Bilateral cervical and axillary lymphadenopathy. No pulmonary infiltrates.",
          "impression": "Lymphadenopathy consistent with systemic drug reaction.",
          "dictated": "03/01/2026 08:30",
          "verified": "03/01/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Consultation",
          "date": "03/02/2026",
          "provider": "Dr. Allergist",
          "cc": "A/I consult — confirm DRESS diagnosis, taper plan, monitor for autoimmune sequelae",
          "hpi": "Marcus Jefferson — A/I consult — confirm DRESS diagnosis, taper plan, monitor for autoimmune sequelae",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "DRESS follow-up — 3 months, check thyroid function (late autoimmune complication)",
        "diagnosis": "DRESS Syndrome"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "New-onset seizures — started phenytoin 4 weeks ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Prednisone taper",
          "dose": "5mg",
          "route": "PO",
          "frequency": "Daily (weaning)",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "112/68",
          "hr": "72",
          "rr": "14",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "0/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-244998",
          "collected": "03/01/2026 07:50",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "CBC WITH DIFFERENTIAL",
              "results": [
                {
                  "test": "WBC",
                  "value": "14.8",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "13.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": ""
                },
                {
                  "test": "Hematocrit",
                  "value": "41.2",
                  "unit": "%",
                  "range": "36-46",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "245",
                  "unit": "x10³/µL",
                  "range": "150-400",
                  "flag": ""
                },
                {
                  "test": "Eosinophils",
                  "value": "18",
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
                  "value": "139",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": ""
                },
                {
                  "test": "Potassium",
                  "value": "4.2",
                  "unit": "mEq/L",
                  "range": "3.5-5.0",
                  "flag": ""
                },
                {
                  "test": "Chloride",
                  "value": "102",
                  "unit": "mEq/L",
                  "range": "98-106",
                  "flag": ""
                },
                {
                  "test": "CO2/Bicarb",
                  "value": "24",
                  "unit": "mEq/L",
                  "range": "22-28",
                  "flag": ""
                },
                {
                  "test": "BUN",
                  "value": "16",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
                  "value": "1.6",
                  "unit": "mg/dL",
                  "range": "0.6-1.2",
                  "flag": "H"
                },
                {
                  "test": "Glucose",
                  "value": "98",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": ""
                },
                {
                  "test": "Calcium",
                  "value": "9.4",
                  "unit": "mg/dL",
                  "range": "8.5-10.5",
                  "flag": ""
                }
              ]
            },
            {
              "name": "CASE-SPECIFIC STUDIES",
              "results": [
                {
                  "test": "Alt",
                  "value": "420",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": "H"
                },
                {
                  "test": "Ast",
                  "value": "380",
                  "unit": "U/L",
                  "range": "10-40",
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
          "date": "03/01/2026",
          "study": "CT Neck/Chest",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-623310",
          "clinical": "Diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago",
          "technique": "Standard protocol",
          "findings": "Bilateral cervical and axillary lymphadenopathy. No pulmonary infiltrates.",
          "impression": "Lymphadenopathy consistent with systemic drug reaction.",
          "dictated": "03/01/2026 08:30",
          "verified": "03/01/2026 09:15"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Office Visit",
          "date": "03/02/2026",
          "provider": "Dr. Attending",
          "cc": "DRESS follow-up — 3 months, check thyroid function (late autoimmune complication)",
          "hpi": "Marcus Jefferson — DRESS follow-up — 3 months, check thyroid function (late autoimmune complication)",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Marcus Jefferson",
    "dob": "12/14/1984",
    "age": "42",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-130141",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(704) 555-5088",
    "email": "marcus.jefferson@email.com",
    "address": "3979 Hickory Rd, Pittsburgh, PA 15201",
    "insurance": "Tricare Standard",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Publix Pharmacy — Weston Rd",
    "emergencyContact": {
      "name": "Jessica Jefferson",
      "phone": "(704) 555-2684",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago",
    "diagnosis": "DRESS Syndrome"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "New-onset seizures — started phenytoin 4 weeks ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Phenytoin",
      "dose": "300mg",
      "route": "PO",
      "frequency": "Daily (started 4 weeks ago)",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
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
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "118/72",
      "hr": "102",
      "rr": "18",
      "temp": "39.0°C",
      "spo2": "98%",
      "pain": "6/10",
      "bmi": "34",
      "weight": "100 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago",
      "hpi": "Marcus Jefferson is a 42-year-old male presenting with diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago. Past medical history includes New-onset seizures — started phenytoin 4 weeks ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "DRESS Syndrome — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-244998",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "14.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Eosinophils",
              "value": "18",
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
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Alt",
              "value": "420",
              "unit": "U/L",
              "range": "7-56",
              "flag": "H"
            },
            {
              "test": "Ast",
              "value": "380",
              "unit": "U/L",
              "range": "10-40",
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
      "date": "03/01/2026",
      "study": "CT Neck/Chest",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-623310",
      "clinical": "Diffuse morbilliform rash, fever, facial edema, lymphadenopathy — started phenytoin 4 weeks ago",
      "technique": "Standard protocol",
      "findings": "Bilateral cervical and axillary lymphadenopathy. No pulmonary infiltrates.",
      "impression": "Lymphadenopathy consistent with systemic drug reaction.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Timeline",
      "Rash started 3 days ago, fever for 5 days, facial swelling 2 days"
    ]
  ]
,"references":[
  {
    "id": "RegiSCAR-2013",
    "title": "DRESS: results from the prospective RegiSCAR study",
    "authors": "Kardaun SH, Sekula P, Valeyrie-Allanore L, et al.",
    "journal": "Br J Dermatol",
    "year": 2013,
    "doi": "10.1111/bjd.12501",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK459327/",
    "openAccess": true,
    "validates": [
      "RegiSCAR score ≥5 = definite DRESS",
      "HHV-6 reactivation",
      "Organ involvement patterns",
      "Slow steroid taper 8-12 weeks"
    ]
  },
  {
    "id": "DRESS-Autoimmunity-2019",
    "title": "DRESS syndrome and long-term risk of autoimmunity",
    "authors": "Chen YC, Chang CY, Cho YT, et al.",
    "journal": "J Allergy Clin Immunol Pract",
    "year": 2019,
    "doi": "10.1016/j.jaip.2018.08.004",
    "url": "https://pubmed.ncbi.nlm.nih.gov/30145342/",
    "openAccess": true,
    "validates": [
      "Autoimmune thyroiditis ~40% post-DRESS",
      "TSH monitoring at 3, 6, 12 months",
      "Type 1 DM risk"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "DRESS has a latency of 2–8 weeks after drug initiation — the longest latency of any severe cutaneous adverse reaction. HHV-6 reactivation is a distinguishing pathogenic feature (not seen in SJS/TEN) and correlates with disease severity.",
      "RegiSCAR ≥4 = probable/definite DRESS. Must have: fever + rash + at least one internal organ involved (liver most common — elevated transaminases). Eosinophilia is supportive but not required.",
      "Management: immediate cessation of ALL potential culprit drugs. High-dose systemic corticosteroids (prednisone 1–2 mg/kg/day) tapered SLOWLY over months — rapid taper causes relapse. Organ-specific management (hepatitis, nephritis, pneumonitis)."
    ],
    "boardPearls": [
      "DRESS timing: 2–8 weeks after drug. Longest latency of any SCAR.",
      "HHV-6 reactivation: distinguishing feature of DRESS (not present in SJS/TEN). Correlates with severity.",
      "RegiSCAR ≥4: fever + rash + hospitalization + internal organ + eosinophilia ± atypical lymphocytes.",
      "Most common internal organ: liver (transaminase elevation). Kidney (nephritis), lung (pneumonitis), heart (myocarditis) also occur.",
      "Classic culprits: allopurinol (HLA-B*58:01 in Han Chinese/Thai), aromatic anticonvulsants (carbamazepine, phenytoin, phenobarbital — cross-reactive), sulfonamides, minocycline, abacavir (HLA-B*57:01).",
      "Aromatic anticonvulsant cross-reactivity: avoid ALL aromatic anticonvulsants (carbamazepine, phenytoin, phenobarbital, primidone) if one causes DRESS. Switch to non-aromatic alternative (levetiracetam, valproate, gabapentin).",
      "Steroid taper: months-long — rapid taper → DRESS relapse."
    ]
  }
};