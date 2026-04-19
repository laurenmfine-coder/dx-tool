/* emr-data/sjs-ten.js — Multi-Setting Allergy Case: SJS/TEN */
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Marcus Brown",
  "patientHPI": "Two weeks ago I started taking a new gout medication, and now I have this awful rash that's spreading and my skin is coming off in places - I also have a fever and feel really sick overall.",
      "dob": "09/12/1970",
      "age": "56",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-941221",
      "language": "English",
      "race": "Hispanic/Latino",
      "phone": "(313) 555-4044",
      "email": "keisha.brown@email.com",
      "address": "9433 Cedar Blvd, Albuquerque, NM 87102",
      "insurance": "BlueCross BlueShield PPO",
      "pcp": "Dr. Michelle Foster, MD",
      "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
      "emergencyContact": {
        "name": "Donna Brown",
        "phone": "(313) 555-2113",
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
        "Race",
        "Southeast Asian descent (HLA-B*5801 high prevalence)"
      ],
      [
        "Tobacco",
        "Never"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Gout",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CKD Stage 2",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Started allopurinol 14 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Allopurinol",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily (started 14 days ago)",
          "status": "Active",
          "prescriber": "Dr. James Wu, MD"
        },
        {
          "id": "med-2",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Raj Patel, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/01/2026",
          "time": "07:45",
          "bp": "108/62",
          "hr": "112",
          "rr": "22",
          "temp": "39.2°C",
          "spo2": "96%",
          "pain": "9/10",
          "bmi": "37",
          "weight": "77 kg"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-326180",
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
                  "value": "3.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "L"
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
                  "value": "1.8",
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
                  "value": "145",
                  "unit": "U/L",
                  "range": "7-56",
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
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-201648",
          "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "technique": "Standard protocol",
          "findings": "No infiltrate. Skin findings visible on chest.",
          "impression": "No acute pulmonary process.",
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
          "cc": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "hpi": "Marcus Brown is a 56-year-old male presenting with progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago. Past medical history includes Gout, CKD Stage 2, Started allopurinol 14 days ago. See chart for full details.",
          "exam": "See physical examination documentation.",
          "assessment": "SJS/TEN — clinical presentation and workup consistent with diagnosis.",
          "plan": "See orders and management plan."
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Admitted to burn unit for SJS/TEN management — 35% BSA involvement",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Gout",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CKD Stage 2",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Started allopurinol 14 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Allopurinol",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily (started 14 days ago)",
          "status": "Active",
          "prescriber": "Dr. James Wu, MD"
        },
        {
          "id": "med-2",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Raj Patel, MD"
        },
        {
          "id": "med-add-1",
          "name": "Cyclosporine",
          "dose": "3mg/kg",
          "route": "IV",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Morphine PCA",
          "dose": "",
          "route": "IV",
          "frequency": "PRN",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-3",
          "name": "Vancomycin",
          "dose": "1g",
          "route": "IV",
          "frequency": "Q12H",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-4",
          "name": "IV Fluids",
          "dose": "LR",
          "route": "IV",
          "frequency": "150mL/hr",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "98/62",
          "hr": "112",
          "rr": "22",
          "temp": "38.8°C",
          "spo2": "95%",
          "pain": "9/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-326180",
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
                  "value": "3.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "L"
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
                  "value": "1.8",
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
                  "value": "145",
                  "unit": "U/L",
                  "range": "7-56",
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
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-201648",
          "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "technique": "Standard protocol",
          "findings": "No infiltrate. Skin findings visible on chest.",
          "impression": "No acute pulmonary process.",
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
          "cc": "Admitted to burn unit for SJS/TEN management — 35% BSA involvement",
          "hpi": "Marcus Brown — Admitted to burn unit for SJS/TEN management — 35% BSA involvement",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "consult": {
      "patient": {
        "chiefComplaint": "A/I consult — identify culprit drug, cross-reactivity risk, future drug avoidance plan",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Gout",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CKD Stage 2",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Started allopurinol 14 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Allopurinol",
          "dose": "300mg",
          "route": "PO",
          "frequency": "Daily (started 14 days ago)",
          "status": "Active",
          "prescriber": "Dr. James Wu, MD"
        },
        {
          "id": "med-2",
          "name": "Colchicine",
          "dose": "0.6mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Raj Patel, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/02/2026",
          "time": "08:00",
          "bp": "108/68",
          "hr": "92",
          "rr": "18",
          "temp": "37.8°C",
          "spo2": "97%",
          "pain": "6/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-326180",
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
                  "value": "3.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "L"
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
                  "value": "1.8",
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
                  "value": "145",
                  "unit": "U/L",
                  "range": "7-56",
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
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-201648",
          "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "technique": "Standard protocol",
          "findings": "No infiltrate. Skin findings visible on chest.",
          "impression": "No acute pulmonary process.",
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
          "cc": "A/I consult — identify culprit drug, cross-reactivity risk, future drug avoidance plan",
          "hpi": "Marcus Brown — A/I consult — identify culprit drug, cross-reactivity risk, future drug avoidance plan",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    },
    "clinic": {
      "patient": {
        "chiefComplaint": "Post-SJS/TEN follow-up — 8 weeks, skin healing assessment, permanent drug avoidance list",
        "diagnosis": "SJS/TEN"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Gout",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-2",
          "description": "CKD Stage 2",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        },
        {
          "id": "prob-3",
          "description": "Started allopurinol 14 days ago",
          "status": "Active",
          "onset": "Chronic",
          "icd10": ""
        }
      ],
      "medications": [
        {
          "id": "med-add-1",
          "name": "Artificial tears",
          "dose": "",
          "route": "Ophthalmic",
          "frequency": "QID",
          "status": "Active",
          "prescriber": "Dr. Elena Rodriguez, MD"
        },
        {
          "id": "med-add-2",
          "name": "Triamcinolone 0.025%",
          "dose": "",
          "route": "Topical",
          "frequency": "BID to healing areas",
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
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "1/10"
        }
      ],
      "labs": [
        {
          "date": "03/01/2026",
          "time": "08:00",
          "status": "Final",
          "orderedBy": "Dr. ED Attending",
          "accession": "LAB-326180",
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
                  "value": "3.2",
                  "unit": "x10³/µL",
                  "range": "4.5-11.0",
                  "flag": "L"
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
                  "value": "1.8",
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
                  "value": "145",
                  "unit": "U/L",
                  "range": "7-56",
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
          "study": "Chest X-Ray",
          "status": "Final",
          "priority": "Routine",
          "orderedBy": "Dr. ED Physician",
          "readBy": "Dr. Radiologist",
          "facility": "ReasonDx Medical Center",
          "accession": "IMG-201648",
          "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
          "technique": "Standard protocol",
          "findings": "No infiltrate. Skin findings visible on chest.",
          "impression": "No acute pulmonary process.",
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
          "cc": "Post-SJS/TEN follow-up — 8 weeks, skin healing assessment, permanent drug avoidance list",
          "hpi": "Marcus Brown — Post-SJS/TEN follow-up — 8 weeks, skin healing assessment, permanent drug avoidance list",
          "exam": "See documentation.",
          "assessment": "See assessment.",
          "plan": "See orders."
        }
      ]
    }
  },
  "patient": {
    "name": "Marcus Brown",
    "dob": "09/12/1970",
    "age": "56",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-941221",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(704) 555-4853",
    "email": "keisha.brown@email.com",
    "address": "6969 Larkspur Ln, Louisville, KY 40205",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Michelle Foster, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "Donna Brown",
      "phone": "(505) 555-2964",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
    "diagnosis": "SJS/TEN"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Gout",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "CKD Stage 2",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Started allopurinol 14 days ago",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Allopurinol",
      "dose": "300mg",
      "route": "PO",
      "frequency": "Daily (started 14 days ago)",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    },
    {
      "id": "med-2",
      "name": "Colchicine",
      "dose": "0.6mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Raj Patel, MD"
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
      "bp": "108/62",
      "hr": "112",
      "rr": "22",
      "temp": "39.2°C",
      "spo2": "96%",
      "pain": "9/10",
      "bmi": "37",
      "weight": "77 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
      "hpi": "Marcus Brown is a 56-year-old male presenting with progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago. Past medical history includes Gout, CKD Stage 2, Started allopurinol 14 days ago. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "SJS/TEN — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-326180",
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
              "value": "3.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "L"
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
              "value": "1.8",
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
              "value": "145",
              "unit": "U/L",
              "range": "7-56",
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
      "study": "Chest X-Ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-201648",
      "clinical": "Progressive painful rash, skin sloughing, fever — started allopurinol 2 weeks ago",
      "technique": "Standard protocol",
      "findings": "No infiltrate. Skin findings visible on chest.",
      "impression": "No acute pulmonary process.",
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
      "Race",
      "Southeast Asian descent (HLA-B*5801 high prevalence)"
    ],
    [
      "Tobacco",
      "Never"
    ]
  ]
,"references":[
  {
    "id": "SCORTEN-2000",
    "title": "SCORTEN: severity-of-illness score for toxic epidermal necrolysis",
    "authors": "Bastuji-Garin S, Fouchard N, Bertocchi M, et al.",
    "journal": "J Invest Dermatol",
    "year": 2000,
    "doi": "10.1046/j.1523-1747.2000.00061.x",
    "url": "https://pubmed.ncbi.nlm.nih.gov/10998259/",
    "openAccess": true,
    "validates": [
      "SCORTEN mortality prediction",
      "7 clinical parameters",
      "Score 3 = 12.1% mortality"
    ]
  }
],

  "teachingPoints": {
    "keyLearning": [
      "SJS/TEN mechanism: Type IVc — CD8+ cytotoxic T lymphocytes recognize drug/metabolite on MHC-I on keratinocytes → granulysin (principal cytotoxin) + perforin/granzyme B → keratinocyte apoptosis → epidermal detachment. Granulysin levels in blister fluid correlate with severity.",
      "Nikolsky sign: lateral shearing pressure on normal-appearing skin adjacent to blister → epidermis slides off. POSITIVE in TEN (and pemphigus vulgaris, SSSS). NEGATIVE in SJS, EM major.",
      "SCORTEN: 7 variables (age >40, HR >120, malignancy, BSA >10%, BUN >28, glucose >252, bicarbonate <20) each 1 point. Score ≥5 = >90% mortality. Calculate at admission AND day 3."
    ],
    "boardPearls": [
      "SJS <10% BSA; Overlap 10–30%; TEN >30% BSA. Mortality: SJS 1–5%, TEN 20–30%.",
      "Principal cytotoxin: granulysin (from CD8+ CTL and NK cells). Not histamine. Not IgE.",
      "Nikolsky sign: positive = TEN (and pemphigus, SSSS). Negative = SJS, EM major.",
      "SJS vs EM major: SJS = drug-caused, ill-defined atypical targets, extensive mucosal (all sites), Nikolsky+. EM = HSV/infection, classic 3-zone targets (pale/dark/red), acral, limited mucosal, Nikolsky-.",
      "High-risk HLA associations: carbamazepine + HLA-B*15:02 (Southeast Asian); allopurinol + HLA-B*58:01 (Han Chinese/Thai); abacavir + HLA-B*57:01 (all populations).",
      "Management: burn unit care, fluid/electrolyte resuscitation, wound care, IVIG or cyclosporine (evidence limited). Stop culprit drug immediately.",
      "SCORTEN ≥5 = >90% mortality — ICU/burn unit mandatory."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus Brown appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did progressive painful rash, skin sloughing, fever \u2014 started allopurinol 2 weeks ago start?",
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
        "onset": "'The symptoms started Marcus Brown is a 56-year-old male presenting with progressive painful rash, ski.'",
        "character": "'It's progressive painful rash, skin sloughing, fever \u2014 started allopurinol 2 weeks ago \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with my condition.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Allopurinol; Colchicine.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Non-contributory",
        "social": "Race: Southeast Asian descent (HLA-B*5801 high prevalence)  Tobacco: Never"
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
        "phase2": "You've reviewed Marcus Brown's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is . How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};