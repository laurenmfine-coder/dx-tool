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
  ],
  "references": [
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
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears anxious and concerned about his appearance, frequently touching his swollen face. He is cooperative and forthcoming with information, clearly distressed by the rapid onset of symptoms and worried about the connection to his seizure medication.",
    "interviewQuestions": [
      "When exactly did you first notice the rash and how has it changed?",
      "Can you describe the appearance and feel of the rash?",
      "Tell me about the facial swelling - when did it start and how severe is it?",
      "Have you had any difficulty breathing or swallowing?",
      "What other symptoms have you experienced along with the rash?",
      "Have you noticed any swollen lymph nodes or glands?",
      "Any nausea, vomiting, or abdominal pain?",
      "Have you had any joint pain or muscle aches?",
      "Any changes in your urine color or urination?",
      "Have you started any new medications recently?",
      "Any recent infections, illnesses, or hospitalizations?",
      "Have you ever had a reaction like this before?",
      "Any family history of drug allergies or autoimmune conditions?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that. Can you ask me in a different way?",
      "onset": "The rash started about 3 days ago on my chest and spread everywhere. The fever began 5 days ago, and my face started swelling 2 days ago.",
      "character": "The rash is red and bumpy, like measles I guess. It's really itchy and feels hot. My face feels tight and puffy, especially around my eyes.",
      "location": "The rash covers my whole body - chest, back, arms, legs. The swelling is mainly in my face and neck area.",
      "severity": "The fever makes me feel terrible, like 7 out of 10. The rash is so itchy I can barely sleep. The face swelling is scary - I look like a different person.",
      "aggravating": "Heat makes the rash worse and more itchy. I feel sicker in the evenings when my fever spikes higher.",
      "relieving": "Cool compresses help the itching a little. Tylenol barely touches the fever. Nothing really helps much.",
      "associated": "I've had high fevers up to 103, chills, swollen glands in my neck and armpits, and I feel weak and tired all the time.",
      "denies": "No trouble breathing or swallowing yet. No chest pain. No joint swelling. No blood in urine but it might be a bit darker.",
      "history": "Never had anything like this before. I've never had problems with medications or bad allergic reactions.",
      "medications": "Phenytoin",
      "allergies": "NKDA",
      "family": "My mom has some kind of autoimmune thing - lupus I think. No one else has drug allergies that I know of.",
      "social": "I work in construction. Don't smoke, drink maybe a beer on weekends. No drugs. Haven't been around anyone sick or traveled anywhere."
    },
    "examManeuvers": [
      "Inspect skin for rash distribution and characteristics",
      "Palpate cervical lymph nodes",
      "Palpate axillary lymph nodes",
      "Examine face and periorbital area for edema",
      "Inspect oral mucosa and conjunctiva",
      "Auscultate lungs",
      "Palpate abdomen for hepatosplenomegaly",
      "Assess for joint swelling or tenderness",
      "Check for peripheral edema",
      "Examine for Nikolsky sign"
    ],
    "examFindings": {
      "Inspect skin for rash distribution and characteristics": "Diffuse erythematous morbilliform eruption involving trunk, extremities, and face with some confluent areas. No vesicles or bullae.",
      "Palpate cervical lymph nodes": "Multiple enlarged, tender lymph nodes bilaterally, largest approximately 2cm",
      "Palpate axillary lymph nodes": "Bilateral axillary lymphadenopathy, mobile and tender",
      "Examine face and periorbital area for edema": "Marked facial edema with periorbital swelling, more pronounced on left side",
      "Inspect oral mucosa and conjunctiva": "Mild erythema of oral mucosa, conjunctival injection present",
      "Auscultate lungs": "Clear to auscultation bilaterally, no wheezes or stridor",
      "Palpate abdomen for hepatosplenomegaly": "Mild hepatomegaly, liver edge palpable 2cm below costal margin",
      "Assess for joint swelling or tenderness": "No obvious joint swelling, mild arthralgias on movement",
      "Check for peripheral edema": "Mild bilateral lower extremity edema, non-pitting",
      "Examine for Nikolsky sign": "Negative Nikolsky sign"
    },
    "ddxTargets": [
      "Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS) (correct diagnosis)",
      "Stevens-Johnson Syndrome/Toxic Epidermal Necrolysis",
      "Acute Generalized Exanthematous Pustulosis (AGEP)",
      "Viral exanthem with secondary bacterial infection",
      "Serum sickness-like syndrome",
      "Morbilliform drug eruption",
      "Infectious mononucleosis"
    ],
    "biasFlags": {
      "anchoring": "May anchor on simple drug rash given recent phenytoin start, missing the systemic involvement that defines DRESS syndrome",
      "prematureClosure": "Might stop at 'drug allergy' without recognizing the multi-organ involvement requiring immediate phenytoin discontinuation",
      "availabilityBias": "Common viral rashes may come to mind first, overlooking the severe drug hypersensitivity syndrome"
    },
    "coachPrompts": {
      "phase2": "This patient started a new anti-seizure medication a month ago and now has a rash with systemic symptoms. What key features in the history would help you distinguish between a simple drug rash and a more serious hypersensitivity syndrome? What timing considerations are important with phenytoin reactions?",
      "phase5": "You've identified facial edema, lymphadenopathy, fever, and a diffuse rash in someone on phenytoin. This constellation suggests a systemic drug hypersensitivity syndrome. What laboratory studies would you want, and what's the most important immediate management step? How does this differ from SJS/TEN?",
      "finalDebrief": "DRESS syndrome is a delayed T-cell mediated hypersensitivity reaction that typically occurs 2-8 weeks after drug initiation. The key features are the tetrad of rash, fever, lymphadenopathy, and internal organ involvement. How did the timeline, facial edema, and hepatomegaly help distinguish this from other drug reactions? What makes phenytoin a high-risk medication for this syndrome?"
    }
  }
};
